(ns jasminegui.qs.modelportfolios
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink md-circle-icon-button selection-list modal-panel typeahead throbber
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.tools :as t]
    [reagent.core :as reagent]
    [reagent.core :as r]
    [oz.core :as oz]
    [goog.string :as gstring]
    [goog.string.format]
    [reagent-contextmenu.menu :as rcm]
    [jasminegui.qs.qstables :as qstables]
    [jasminegui.qs.harvest :as harvest]
    [cljs-time.core :refer [today]]
    )
  )

(def active-trade (r/atom {:portfolio :CEMBI :row nil}))
(def show-change-model-portfolio-modal (r/atom nil))

(def model-portfolio-universe {:CEMBI-model   "Main"
                               ;:Allianz-model "Allianz model"
                               :IG-model      "IG"
                               ;:BNP-model     "BNP model"
                               :TR-model      "TR"})

;;;;;;;;;;;;

(rf/reg-sub
  :clean-quant-model
  (fn [db]
    (let [qm (:quant-model/model-output db)
          ks (into [] (for [k (keys (first qm)) :when (not (or (clojure.string/includes? (name k) "legacy") (clojure.string/includes? (name k) "new")))] k))
          smallqm (mapv #(merge (select-keys % ks) (zipmap (keys model-portfolio-universe) (repeat 0.0)) {:totaldummy ""}) qm)
          cntry->region (into {} (for [line (:country-codes db)] [(:CountryCode line) (:JPMRegion line)]))
          res (mapv #(assoc % :jpm-region (cntry->region (:Country %))) smallqm)]
      [db res])))

(rf/reg-sub
  :simple-quant-model
  (fn [] (rf/subscribe [:clean-quant-model]))
  (fn [[db data]]
    (let [trd (:model-portfolios/trades db)
          all-isins (distinct (map :ISIN (apply concat (vals trd))))
          positions (into {} (for [isin all-isins] {isin (into {} (for [p (keys model-portfolio-universe)] [p (if-let [line (last (filter #(= isin (:ISIN %)) (p trd)))] (:position line) 0.0)]))}))]
      (mapv #(if (contains? positions (:ISIN %)) (merge % (positions (:ISIN %))) %) data))))


(rf/reg-sub
  :simple-quant-model-positions-only
  ;; signals function
  (fn [] (rf/subscribe [:simple-quant-model]))     ;; <-- these inputs are provided to the computation function
  ;; computation function
  (fn [data]                  ;; input values supplied in a vector
    (filter #(some pos? (map % (keys model-portfolio-universe))) data)))

(rf/reg-sub
  :simple-quant-model-positions-and-cembi-index-only
  ;; signals function
  (fn [] (rf/subscribe [:simple-quant-model]))     ;; <-- these inputs are provided to the computation function
  ;; computation function
  (fn [data]                  ;; input values supplied in a vector
    (filter #(some pos? (map % (conj (keys model-portfolio-universe) :cembi :cembi-ig))) data)))

(rf/reg-sub
  :model-portfolios/analytics
  ;; signals function
  (fn [] (rf/subscribe [:simple-quant-model-positions-and-cembi-index-only])) ;; <-- these inputs are provided to the computation function
  ;; computation function
  (fn [data]                  ;; input values supplied in a vector
    (into [] (for [[k v] (assoc model-portfolio-universe :cembi "JPM CEMBI"  :cembi-ig "JPM CEMBI IG")]
               {:portfolio         v
                :nav               (reduce + (map k data))
                :Used_YTW          (/ (reduce + (map #(* (k %) (:Used_YTW %)) data)) 100.)
                :Used_Duration     (/ (reduce + (map #(* (k %) (:Used_Duration %)) data)) 100.)
                :Used_ZTW          (/ (reduce + (map #(* (k %) (:Used_ZTW %)) data)) 100.)
                :G_SPREAD_MID_CALC (/ (reduce + (map #(* (k %) (:G_SPREAD_MID_CALC %)) data)) 100.)
                :Used_Rating_Score (+ (/ (reduce + (map #(* (k %) (:Used_Rating_Score %)) data)) 100.) (* 0.01 6 (- 100 (reduce + (map k data))))) ;cash is rated A = 6
                :hy                (reduce + (map k (t/chainfilter {:Used_Rating_Score #(> % 10)} data)))
                :sub               (reduce + (map k (t/chainfilter {:SENIOR "N"} data)))
                :hybrid            (reduce + (map k (t/chainfilter {:HYBRID "Y"} data)))
                :cembi             (reduce + (map k (t/chainfilter {:cembi pos?} data)))
                :cembi-ig          (reduce + (map k (t/chainfilter {:cembi-ig pos?} data)))
                :sov               (reduce + (map k (t/chainfilter {:Sector "Sovereign"} data)))
                :nusd              (reduce + (map k (t/chainfilter {:CRNCY #(not= % "USD")} data)))
                :esg               (reduce + (map k (t/chainfilter {:ESG #(not= % "N")} data)))
                :issuers           (count (distinct (map :Ticker (t/chainfilter {k pos?} data))))

                }))))



(rf/reg-event-fx
  :model-portfolios/save-new-trade
  (fn [{:keys [db]} [_ m]]
    (let [m2 (update m :date t/gdate-to-yyyymmdd)]
      {:db (update-in db [:model-portfolios/trades (:portfolio m2)] conj (dissoc m2 :portfolio))
     :http-post-dispatch {:url (str static/server-address "model-portfolios-new-trade") :edn-params m2 :dispatch-key [:dummy]}})))


(def agg-order (r/atom "Region / Country" "Sector / Country"))


(defn fnevt [state rowInfo instance evt]
  (rcm/context!
    evt
    (concat
      [(aget rowInfo "original" "Bond")
       ["Copy ISIN" (fn [] (t/copy-to-clipboard (aget rowInfo "original" "ISIN")))]
       :divider
       "Change position"]
       (into [] (for [[k id] model-portfolio-universe]
                  [id #(do (reset! active-trade {:portfolio k :row (aget rowInfo "original")}) (reset! show-change-model-portfolio-modal :change))])))))

(defn on-click-context [state rowInfo instance]
  (clj->js {:onClick #(fnevt state rowInfo instance %) :style {:cursor "pointer"}}))

(defn rating-sort [a b]
  (let [t @(rf/subscribe [:rating-to-score])] (<= (t (keyword a)) (t (keyword b)))))

(def rating-order ["AAA" "AA+" "AA" "AA-" "A+" "A" "A-" "BBB+" "BBB" "BBB-" "BB+" "BB" "BB-" "B+" "B" "B-" "CCC+" "CCC" "CCC-" "NR"])
(defn rssort [a b] (<= (.indexOf rating-order a) (.indexOf rating-order b)))

(defn model-portfolios []
 (let [viewable-data (if @(rf/subscribe [:model-portfolios/hide-zeros]) @(rf/subscribe [:simple-quant-model-positions-only]) @(rf/subscribe [:simple-quant-model]))]
   [v-box :class "element" :gap "20px" :width "1690px"
    :children [[title :label "Construction" :level :level1]
               [h-box :align :center :gap "20px"
                :children [[button :label "Force refresh" :on-click #(rf/dispatch [:get-model-portfolios])]
                           [gap :size "20px"]
                           [checkbox :model (rf/subscribe [:model-portfolios/hide-zeros]) :label "Hide zero positions?" :on-change #(rf/dispatch [:model-portfolios/hide-zeros %])]
                           [gap :size "20px"]
                           [checkbox :model (r/cursor qstables/table-checkboxes [:indices]) :label "Show index membership?" :on-change #(swap! qstables/table-checkboxes assoc-in [:indices] %)]
                           [checkbox :model (r/cursor qstables/table-checkboxes [:calls]) :label "Show calls?" :on-change #(swap! qstables/table-checkboxes assoc-in [:calls] %)]
                           [gap :size "1"]
                           [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download full model" :on-click #(t/csv-link viewable-data "model-portfolio")]]]
               [:> ReactTable
                {:data           viewable-data
                 :columns        (qstables/table-style->qs-table-col "Model portfolios" @qstables/table-checkboxes)
                 :showPagination true :defaultPageSize 15 :filterable true :defaultFilterMethod tables/text-filter-OR :defaultExpanded {0 {}}
                 ;:ref             #(reset! qs-table-view %)
                 :getTrProps     on-click-context
                 :className      "-striped -highlight"}]]]))

(defn modal-change-model-portfolio []
  (let [position (r/atom "0.0") reason (r/atom "") date (r/atom (today))]
    (fn []
      (let [a 3]
        (case @show-change-model-portfolio-modal
          :change
          [modal-panel :backdrop-on-click #(reset! show-change-model-portfolio-modal nil)
           :child [v-box :width "400px" :gap "10px" :padding "20px"
                   :children [[title :label (str "Amend " ((:portfolio @active-trade) model-portfolio-universe)) :level :level1]
                              [h-box :gap "10px" :align :center :children [[label :width "125px" :label (aget (:row @active-trade) "Bond")] [label :width "100px" :label (str "ISIN " (aget (:row @active-trade) "ISIN"))]]]
                              [h-box :gap "10px" :align :center :children [[label :width "125px" :label "Position"] [input-text :placeholder "target" :model position :on-change #(reset! position %)]]]
                              [h-box :gap "10px" :align :center :children [[label :width "125px" :label "Reason"] [input-text :placeholder "> 10 characters" :model reason :on-change #(reset! reason %)]]]
                              [h-box :gap "10px" :align :center :children [[label :width "125px" :label "Date"] [datepicker-dropdown :model date :format "dd/MM/yyyy" :show-today? true :on-change #(do (println %) (reset! date %))]]]
                              [h-box :gap "10px" :children [[button
                                                             :label "Save"
                                                             :disabled? (not (and (>= (count @reason) 10) (number? (js/parseFloat @position))))
                                                             :on-click #(do (reset! show-change-model-portfolio-modal nil)
                                                                            (rf/dispatch [:model-portfolios/save-new-trade
                                                                                         {:bond      (aget (:row @active-trade) "Bond")
                                                                                          :ISIN      (aget (:row @active-trade) "ISIN")
                                                                                          :portfolio (:portfolio @active-trade)
                                                                                          :position  (js/parseFloat @position)
                                                                                          :reason    @reason
                                                                                          :date      @date}]))]
                                                            [button :label "Cancel" :on-click #(reset! show-change-model-portfolio-modal nil)]]]]]]


          nil
          )))))

(def expanded (r/atom {0 {}}))

(defn pivot-table [viewable-data pivot-col-def tail-col pivot-by default-sorted]
  [v-box :children [[:> ReactTable
                     {:data viewable-data
                      :columns (remove nil? [{:Header "Pivot" :columns [{:Header "" :accessor "totaldummy" :width 30 :filterable false}
                                                                        pivot-col-def
                                                                        {:Header "Ticker" :accessor "Ticker" :width 80}]}
                                             {:Header "Position" :columns (mapv qstables/quant-score-table-columns (concat (keys model-portfolio-universe) [:cembi :cembi-ig]))}
                                             tail-col])
                      :showPagination false :pageSize 1 :filterable true :defaultFilterMethod tables/text-filter-OR
                      :defaultSorted default-sorted :pivotBy pivot-by :collapseOnSortingChange false :className "-striped -highlight"
                      :defaultExpanded {0 {}} :expanded @expanded :onExpandedChange #(reset! expanded %) ;defaultExpanded buggy hence need for this
                      }]]])

(defn explorer []
  (let [pivot (r/atom "Region")]
    (fn []
      (let [viewable-data @(rf/subscribe [:simple-quant-model-positions-and-cembi-index-only])]
        [v-box :class "element" :gap "20px" :width "1690px"
         :children [[title :label "Exposure breakdown" :level :level1]
                    [h-box :align :center :gap "20px"
                     :children (concat
                                 (into [] (for [c ["Region" "Country" "Sector" "Rating" "Duration"]] ^{:key c} [radio-button :label c :value c :model pivot :on-change #(do (reset! pivot %) (reset! expanded {0 {}}))]))
                                 [[gap :size "20px"]
                                  [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download pivot" :on-click #(t/csv-link viewable-data "modelportfolios")]])]
                    (case @pivot
                      "Region"  [pivot-table
                                 viewable-data
                                 {:Header "Region" :accessor "jpm-region" :width 145 :Aggregated tables/total-txt}
                                 nil
                                 ["totaldummy" "jpm-region" "Ticker"]
                                 [{:id :cembi :desc true}]]
                      "Country" [pivot-table
                                 viewable-data
                                 {:Header "Country" :accessor "Country" :width 75 :Aggregated tables/total-txt}
                                 nil
                                 ["totaldummy" "Country" "Ticker"]
                                 [{:id :cembi :desc true}]]
                      "Sector" [pivot-table
                                viewable-data
                                {:Header "Sector" :accessor "Sector" :width 145 :Aggregated tables/total-txt}
                                nil
                                ["totaldummy" "Sector" "Ticker"]
                                [{:id :cembi :desc true}]]
                      "Rating" [pivot-table
                                (mapv #(assoc % :rs (if (number? (:Used_Rating_Score %)) (nth rating-order (dec (:Used_Rating_Score %))) "NR")) viewable-data)
                                {:Header "Rating" :accessor "rs" :width 125 :Aggregated tables/total-txt :sortMethod rssort}
                                (assoc (:Used_Rating_Score qstables/quant-score-table-columns) :Header "" :width 20  :filterable false :Cell #(r/as-element [:span ""]))
                                ["totaldummy" "rs" "Ticker"]
                                [{:id :Used_Rating_Score :desc false}]]
                      "Duration" [pivot-table
                                  (mapv #(assoc % :duration-bucket (harvest/duration-grouping-fn %) :db2 (.indexOf (harvest/duration-grouping-fn %) ["0-3Y" "3-5Y" "5-7Y" "7-10Y" "10Y+" "uncategorized"])) viewable-data)
                                  {:Header "Duration" :accessor "duration-bucket" :width 125 :Aggregated tables/total-txt}
                                  nil                       ;{:Header "" :accessor "duration-bucket" :width 20 :filterable false :Cell #(r/as-element [:span ""])}
                                ["totaldummy" "duration-bucket" "Ticker"]
                                [{:id :db2 :desc false}]]
                      )]]))))

(defn trade-history []
  (let [portfolio (r/atom (ffirst model-portfolio-universe))]
    (fn []
      (let [data @(rf/subscribe [:model-portfolios/trades])]
        [v-box :class "element" :gap "20px" :width "1690px"
         :children [[title :label "Trade history" :level :level1]
                    [h-box :align :center :gap "20px"
                     :children [[label :label "Portfolio:"]
                                [single-dropdown :width "200px" :model portfolio :choices (into [] (for [[k v] model-portfolio-universe] {:id k :label v})) :on-change #(reset! portfolio %)]
                                [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download full model" :on-click #(t/csv-link data "trade-history")]]]
                    [:> ReactTable
                     {:data           (reverse (data @portfolio))
                      :columns        [{:Header "Date" :accessor "date" :width 100}
                                       {:Header "Bond" :accessor "bond" :width 200}
                                       {:Header "ISIN" :accessor "ISIN" :width 100}
                                       {:Header "Position" :accessor "position" :width 65 :Cell tables/round2 :style {:textAlign "right"}}
                                       {:Header "Reason" :accessor "reason" :width 800}]
                      :showPagination true :defaultPageSize 10 :filterable true :defaultFilterMethod tables/text-filter-OR :className "-striped -highlight"}]]]))))

(defn analytics []
  (let [data @(rf/subscribe [:model-portfolios/analytics])]
    [v-box :class "element" :gap "20px" :width "1690px"
     :children [[title :label "Analytics" :level :level1]
                [:> ReactTable
                 {:data           data
                  :columns        [{:Header "Portfolio" :accessor "portfolio" :width 100}
                                   {:Header "NAV" :accessor "nav" :width 65 :Cell tables/round2 :style {:textAlign "right"}}
                                   {:Header "YTW" :accessor "Used_YTW" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/yield-format}
                                   {:Header "Duration" :accessor "Used_Duration" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round1}
                                   {:Header "ZTW" :accessor "Used_ZTW" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format}
                                   {:Header "G" :accessor "G_SPREAD_MID_CALC" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format}
                                   {:Header "Rating" :accessor "Used_Rating_Score" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round1}
                                   {:Header "HY" :accessor "hy" :width 65 :Cell tables/round2 :style {:textAlign "right"}}
                                   {:Header "Not $" :accessor "nusd" :width 65 :Cell tables/round2 :style {:textAlign "right"}}
                                   {:Header "Sub" :accessor "sub" :width 65 :Cell tables/round2 :style {:textAlign "right"}}
                                   {:Header "Hybrid" :accessor "hybrid" :width 65 :Cell tables/round2 :style {:textAlign "right"}}
                                   {:Header "CEMBI" :accessor "cembi" :width 65 :Cell tables/round2 :style {:textAlign "right"}}
                                   {:Header "CEMBIIG" :accessor "cembi-ig" :width 65 :Cell tables/round2 :style {:textAlign "right"}}
                                   {:Header "Sov" :accessor "sov" :width 65 :Cell tables/round2 :style {:textAlign "right"}}
                                   {:Header "ESG" :accessor "esg" :width 65 :Cell tables/round2 :style {:textAlign "right"}}
                                   {:Header "Issuers" :accessor "issuers" :width 65 :style {:textAlign "right"}}
                                   ]
                  :showPagination false :defaultPageSize (+ (count model-portfolio-universe) 2) :filterable false :className "-striped -highlight"}]]]))

(defn model-portfolio-view []
  [v-box :padding "80px 10px" :class "rightelement" :gap "50px"
   :children [[model-portfolios] [analytics] [explorer] [trade-history]]])