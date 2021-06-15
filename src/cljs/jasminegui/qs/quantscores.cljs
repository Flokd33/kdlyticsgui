(ns jasminegui.qs.quantscores
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
    [jasminegui.qs.qscharts :as qscharts]
    [jasminegui.qs.modelportfolios :as modelportfolios]
    [jasminegui.qs.harvest :as harvest]
    )
  )

;;
(def show-chart-modal (r/atom nil))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;Following used for historical charts
(def typeahead-bond-nickname (r/atom nil))
(def isin-historical-charts (r/atom "ISIN not found"))
(def bond-historical-charts (r/atom ""))
(def show-historical-cheapness (r/atom true))
(def show-historical-spreads (r/atom false))
(def show-universe-scores (r/atom false))
(def show-historical-scores (r/atom false))
(def show-rating-history (r/atom false))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(rf/reg-event-fx
  :get-calculator-spread
  (fn [{:keys [db]} [_ fx country sector rating duration]]
    ;warning country and sector have ampersands & - this is a killer
    {:http-get-dispatch {:url          (str static/server-address "quant-model-calculator?fx=" fx "&country=" (.replace ^string country "&" "@") "&sector=" (.replace ^string sector "&" "@") "&rating=" rating "&duration=" duration)
                         :dispatch-key [:quant-model/calculator-spreads]}}))

(rf/reg-event-fx
  :get-historical-quant-scores
  (fn [{:keys [db]} [_ isin]]
    {:http-get-dispatch {:url          (str static/server-address "quant-model-isin-history?isin=" isin)
                         :dispatch-key [:quant-model/isin-history]}}))

(rf/reg-event-fx
  :get-quant-model-saved-charts
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str static/server-address "quant-model-saved-charts")
                         :dispatch-key [:quant-model/saved-charts]}}))

(rf/reg-event-fx
  :get-quant-model-saved-advanced-charts
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str static/server-address "quant-model-saved-advanced-charts")
                         :dispatch-key [:quant-model/saved-advanced-charts]}}))
(rf/reg-event-fx
  :quant-model-save-new-chart
  (fn [{:keys [db]} [_ id model-type rating-curves issuers spot-chart-2d-curves-sov-only]]
    {:http-post-dispatch {:url (str static/server-address "quant-model-save-new-chart")
                          :edn-params {:id id :model-type model-type :rating-curves (remove nil? (seq rating-curves)) :issuers (remove nil? (seq issuers)) :rating-curves-sov-only spot-chart-2d-curves-sov-only}
                          :dispatch-key [:dummy]}}))

(rf/reg-event-fx
  :quant-model-save-new-advanced-chart
  (fn [{:keys [db]} [_ id model-type rating-curves spot-chart-2d-curves-sov-only advanced-filter]]
    {:http-post-dispatch {:url (str static/server-address "quant-model-save-new-advanced-chart")
                          :edn-params {:id id :model-type model-type :rating-curves (remove nil? (seq rating-curves)) :rating-curves-sov-only spot-chart-2d-curves-sov-only :advanced-filter advanced-filter}
                          :dispatch-key [:dummy]}}))
(defn nav-qs-bar []
  (let [active-var @(rf/subscribe [:navigation/active-qs])]
    [h-box
     :children [[v-box
                 :gap "20px" :class "leftnavbar"
                 :children (into []
                                 (for [item static/qs-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-var (:code item))) " active"))
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:navigation/active-qs (:code item)])]))]]]))



;(rf/reg-event-db
;  :model-portfolios/weights
;  (fn [db [_ m isin weight]] (assoc-in db [:model-portfolios/weights m isin] weight)))







;isin_id
;S&P
;Moodys
;Fitch
;S&P-score
;Fitch-score
;Moodys-score
;

(defn fnevt [state rowInfo instance evt]
  (rcm/context!
    evt
    [(aget rowInfo "original" "Bond")                                         ; <---- string is a section title
     ["Copy ISIN" (fn [] (t/copy-to-clipboard (aget rowInfo "original" "ISIN")))]
     ["Historical charts" (fn [] ((reset! isin-historical-charts (aget rowInfo "original" "ISIN"))
                                  (reset! bond-historical-charts (aget rowInfo "original" "Bond"))
                                  (rf/dispatch [:navigation/active-qs :historical-charts]) (rf/dispatch [:get-historical-quant-scores (aget rowInfo "original" "ISIN")])))]         ; <---- the name is a span
     ]))

(defn on-click-context [state rowInfo instance]
  (clj->js {:onClick #(fnevt state rowInfo instance %) :style {:cursor "pointer"}}))



(def qs-table-filter (atom []))
;USING A NORMAL ATOM INSTEAD OF REAGENT ACCELERATES THINGS - NOT SURE WHY OR IF IT'S RIGHT THING
;this slows the table a lot as it's called twice? https://stackoverflow.com/questions/56505677/react-table-onfetchdata-getting-triggered-twice

(defn qs-table [mytitle data]
     [v-box :class "element"  :gap "20px" :width "1690px"
      :children [[title :label mytitle :level :level1]
                 [h-box :align :center :gap "20px"
                  :children (concat (into [] (for [c ["Summary" "Full" "Legacy" "New" "SVR" "Upside/Downside" "Screener (SVR)"]]
                                               ^{:key c} [radio-button :label c :value c :model qstables/table-style :on-change #(reset! qstables/table-style %)]))   ;; key should be unique among siblings
                                    [[gap :size "20px"]
                                     [checkbox :model (r/cursor qstables/table-checkboxes [:indices]) :label "Show index membership?" :on-change #(swap! qstables/table-checkboxes assoc-in [:indices] %)]
                                     [checkbox :model (r/cursor qstables/table-checkboxes [:calls]) :label "Show calls?" :on-change #(swap! qstables/table-checkboxes assoc-in [:calls] %)]
                                     [gap :size "1"]
                                     [md-circle-icon-button :md-icon-name "zmdi-filter-list" :tooltip "Download current view" :on-click #(t/react-table-to-csv @qstables/qs-table-view "quant-model-output"  (mapv :accessor (apply concat (map :columns (qstables/table-style->qs-table-col @qstables/table-style @qstables/table-checkboxes)))))] ;
                                     [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download full model" :on-click #(t/csv-link data "quant-model-output" (conj (keys (first data)) :ISIN))]
                                     ])]
                 [title :level :level4 :label "Use , for OR. Use & for AND. Use - to exclude. Examples: AR,BR for Argentina or Brazil. >200&<300 for spreads between 200bps and 300bps. >0 to only see bonds in an index. -Sov to exclude sovereigns, -CN&-HK to exclude both countries."]
                 [:> ReactTable
                  {:data            data :columns (qstables/table-style->qs-table-col @qstables/table-style @qstables/table-checkboxes)
                   :showPagination  true :defaultPageSize 15 :pageSizeOptions [15 25 50 100]
                   :filterable      true :defaultFilterMethod tables/text-filter-OR
                   :defaultFiltered @qs-table-filter :onFilteredChange #(reset! qs-table-filter %) ; SEE NOTE ABOVE
                   :ref             #(reset! qstables/qs-table-view %)
                   :getTrProps      on-click-context :className "-striped -highlight"}]]])

(def index-crawler-filter (r/atom []))
(def index-crawler-expander (r/atom {}))                    ;0 {}

(defn index-crawler []
  (let [data @(rf/subscribe [:quant-model/model-output])
        cembi-embi (map #(assoc % :totaldummy "") (filter #(or (pos? (:cembi %)) (pos? (:cembi-ig %)) (pos? (:embi %)) (pos? (:embi-ig %))) data))
        final (tables/cljs-text-filter-OR @index-crawler-filter cembi-embi)]
    [box :padding "80px 10px" :class "rightelement"
     :child
             [v-box :class "element" :gap "20px" :width "1690px"
              :children [[title :label "Index crawler" :level :level1]
                         [title :level :level4 :label "Use , for OR. Use & for AND. Use - to exclude. Examples: AR,BR for Argentina or Brazil. >200&<300 for spreads between 200bps and 300bps. >0 to only see bonds in an index. -Sov to exclude sovereigns, -CN&-HK to exclude both countries."]
                         [:> ReactTable
                          {:data final :columns (qstables/table-style->qs-table-col "IndexCrawler" nil)
                           :showPagination  false :pageSize 1
                           :filterable      true :defaultFilterMethod (fn [filterfn row] true)
                           :onFilteredChange #(reset! index-crawler-filter %)
                           :getTrProps      on-click-context :className "-striped -highlight"
                           :pivotBy [:totaldummy]
                           :expanded @index-crawler-expander :onExpandedChange #(reset! index-crawler-expander %)}]
                         [title :level :level4 :label "Aggregate results from filter below, with median valuation:"]
                         [:> ReactTable
                          {:data     (into [] (for [i [:cembi :cembi-ig :embi :embi-ig]]
                                                (let [unv (filter (comp pos? i) final)]
                                                  {:idx      i :bonds (count unv) :issuers (count (distinct (map :Ticker unv))) :nav (reduce + (map i unv))
                                                   :Used_YTW (tables/median (map :Used_YTW unv))
                                                   :Used_ZTW (tables/median (map :Used_ZTW unv))
                                                   :G        (tables/median (map :G_SPREAD_MID_CALC unv))
                                                   :Used_Duration (tables/median (map :Used_Duration unv))
                                                   :Used_Rating_Score (tables/median (map :Used_Rating_Score unv))
                                                   })))
                           :columns  [{:Header "Index" :accessor "idx" :width 60}
                                      {:Header "Bonds" :accessor "bonds" :width 60 :style {:textAlign "right"}}
                                      {:Header "Issuers" :accessor "issuers" :width 60 :style {:textAlign "right"}}
                                      {:Header "NAV" :accessor "nav" :width 60 :style {:textAlign "right"} :Cell tables/round2}
                                      {:Header "YTW" :accessor "Used_YTW" :width 60 :style {:textAlign "right"} :Cell tables/round2}
                                      {:Header "ZTW" :accessor "Used_ZTW" :width 60 :style {:textAlign "right"} :Cell tables/zspread-format}
                                      {:Header "G" :accessor "G" :width 60 :style {:textAlign "right"} :Cell tables/zspread-format}
                                      {:Header "Duration" :accessor "Used_Duration" :width 60 :style {:textAlign "right"} :Cell tables/round1}
                                      {:Header "Rating" :accessor "Used_Rating_Score" :width 60 :style {:textAlign "right"}}]
                           :pageSize 4 :filterable false :showPageSizeOptions false :showPagination false}
                          ]]]])

  )

;(defn tree-table-risk-table [data columns is-tree accessors ref table-filter expander get-tr-props-fn]
;  [:> ReactTable
;   {:data @(rf/subscribe [data]) :columns columns
;    :showPagination (not is-tree) :pageSize (if is-tree 1 18) :showPageSizeOptions false
;    :sortable true
;    :defaultFilterMethod (if is-tree (fn [filterfn row] true) text-filter-OR)
;    :ref #(reset! ref %)
;    :expanded @(rf/subscribe [expander]) :onExpandedChange #(rf/dispatch [expander %])
;    :pivotBy (if is-tree (concat [:totaldummy] accessors) [])
;    :className "-striped -highlight" :getTrProps (if is-tree (fn [state rowInfo instance] #js {}) get-tr-props-fn)
;    :filterable true :defaultFiltered @(rf/subscribe [table-filter]) :onFilteredChange #(rf/dispatch [table-filter %])}])

(def show-duration-modal (r/atom false))
(def calculator-target (r/atom {:Sector "Oil & Gas" :Country "BR" :Used_Duration "9.0" :Used_Rating_Score "13" :CRNCY "USD"})) ;find out why there are some ::CRNCY instead of :CRNCY in the model
(def calculator-chart-options (r/atom {:labels true :other-countries false :rating-neighbours false :country-neighbours false :rating-curves true :rating-curves-sov-only false}))
(def performance-colors ["#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E"])

(defn comparable-chart [duration legacy new svr table]
  (let [prepare-data (fn [tbl txt] (for [line tbl] {:field txt :duration (line :Used_Duration) :spread (line :Used_ZTW) :txt (line :Bond)}))
        rating-score (cljs.reader/read-string (:Used_Rating_Score @calculator-target))
        other (str "Other " (qstables/get-implied-rating (str rating-score)))
        other-country (str "Other " (:Country @calculator-target) " " (qstables/get-implied-rating (str rating-score)))
        rating-up (qstables/get-implied-rating (str (inc rating-score)))
        rating-dw (qstables/get-implied-rating (str (dec rating-score)))
        qmt @(rf/subscribe [:quant-model/model-output])
        data
        (concat
          (prepare-data table "comp")
          [{:field "legacy" :duration duration :spread legacy :txt "legacy"}
           {:field "new" :duration duration :spread new :txt "new"}
           {:field "svr" :duration duration :spread svr :txt "svr"}]
          (if (:other-countries @calculator-chart-options) (prepare-data (t/chainfilter {:Sector (:Sector @calculator-target) :Used_Rating_Score rating-score :Country #(not= % (:Country @calculator-target))} qmt) other))
          (if (:rating-neighbours @calculator-chart-options)  (prepare-data (t/chainfilter {:Sector (:Sector @calculator-target) :Used_Rating_Score (inc rating-score)} qmt) rating-up))
          (if (:rating-neighbours @calculator-chart-options)  (prepare-data (t/chainfilter {:Sector (:Sector @calculator-target) :Used_Rating_Score (dec rating-score)} qmt) rating-dw))
          (if (:country-neighbours @calculator-chart-options) (prepare-data (t/chainfilter {:Country (:Country @calculator-target) :Used_Rating_Score rating-score :Sector #(not= % (:Sector @calculator-target))} qmt) other-country)))
        color-domain-scale (merge {"comp" "#134848" "legacy" "red" "new" "orange" "svr" "blue"}
                                  (if (:other-countries @calculator-chart-options) {other "#009D80"})
                                  (if (:rating-neighbours @calculator-chart-options) {rating-up "#FDAA94" rating-dw "#74908D"})
                                  (if (:country-neighbours @calculator-chart-options) {other-country "#591739"}))
        curve-data (filter #(some #{(:Rating %)} (conj (if (:rating-neighbours @calculator-chart-options) [(inc rating-score) (dec rating-score)] []) rating-score))
                           (if (:rating-curves-sov-only @calculator-chart-options) @(rf/subscribe [:quant-model/rating-curves-sov-only]) @(rf/subscribe [:quant-model/rating-curves])))]
    [v-box :class "element"  :gap "10px" :width "1620px"
     :children [[h-box :align :center :justify :between :children [[title :label "Comparables chart" :level :level1] [title :level :level4 :label "Left button to move chart, wheel to zoom" ]]]
                [h-box :gap "50px" :children [[checkbox :model (r/cursor calculator-chart-options [:labels]) :label "Bond labels" :on-change #(swap! calculator-chart-options assoc :labels %)]
                                              [checkbox :model (r/cursor calculator-chart-options [:rating-curves]) :label "2D model curve" :on-change #(swap! calculator-chart-options assoc :rating-curves %)]
                                              [checkbox :model (r/cursor calculator-chart-options [:rating-curves-sov-only]) :label "2D curve sov only?" :on-change #(swap! calculator-chart-options assoc :rating-curves-sov-only %)]]]

                [h-box :gap "50px" :children [[checkbox :model (r/cursor calculator-chart-options [:other-countries]) :label "Other countries (same sector and rating)" :on-change #(swap! calculator-chart-options assoc :other-countries %)]
                                              [checkbox :model (r/cursor calculator-chart-options [:rating-neighbours]) :label "Rating neighbours (same sector, rating up/down a notch)" :on-change #(swap! calculator-chart-options assoc :rating-neighbours %)]
                                              [checkbox :model (r/cursor calculator-chart-options [:country-neighbours]) :label "Country neighbours (same country and rating)" :on-change #(swap! calculator-chart-options assoc :country-neighbours %)]]]
                [oz/vega-lite (qscharts/fair-value-calculator-chart data color-domain-scale (:labels @calculator-chart-options) (:rating-curves @calculator-chart-options) curve-data)]]]))

(defn calculator-result-table []
  (let [data @(rf/subscribe [:quant-model/model-output])
        calc-data @(rf/subscribe [:quant-model/calculator-spreads])
        display (into [] (for [[k txt c] [[:d4 "Four factor" (count (t/chainfilter (dissoc (update @calculator-target :Used_Rating_Score cljs.reader/read-string) :Used_Duration) data))]
                                          [:d3country (str (:Country @calculator-target) " " (:Used_Duration @calculator-target) "y " (qstables/get-implied-rating (:Used_Rating_Score @calculator-target))) (count (t/chainfilter (dissoc (update @calculator-target :Used_Rating_Score cljs.reader/read-string) :Sector :Used_Duration) data))]
                                          [:d3sector (str (:Sector @calculator-target) " " (:Used_Duration @calculator-target) "y " (qstables/get-implied-rating (:Used_Rating_Score @calculator-target))) (count (t/chainfilter (dissoc (update @calculator-target :Used_Rating_Score cljs.reader/read-string) :Country :Used_Duration) data))]
                                          [:d2 (str (:Used_Duration @calculator-target) "y " (qstables/get-implied-rating (:Used_Rating_Score @calculator-target))) (count (t/chainfilter (dissoc (update @calculator-target :Used_Rating_Score cljs.reader/read-string) :Sector :Country :Used_Duration) data))]]]
                           {:model txt :svr (get-in calc-data [:svr k]) :legacy (get-in calc-data [:legacy k]) :new (get-in calc-data [:new k]) :comps c}))]
    [:> ReactTable
     {:data           display
      :columns        [{:Header "Model" :accessor "model" :width 200}
                       {:Header "Legacy" :accessor "legacy" :width 60 :style {:textAlign "right"} :Cell tables/zspread-format}
                       {:Header "New" :accessor "new" :width 60 :style {:textAlign "right"} :Cell tables/zspread-format}
                       {:Header "SVR" :accessor "svr" :width 60 :style {:textAlign "right" :backgroundColor "lightgrey"} :Cell tables/zspread-format}
                       {:Header "Comparables" :accessor "comps" :width 100 :style {:textAlign "right"}}]
      :showPagination false :pageSize 4 :filterable false}]))

(defn calculator-controller []
  (let [country-codes @(rf/subscribe [:country-codes])
        data @(rf/subscribe [:quant-model/model-output])
        sectors (mapv (fn [x] {:id x :label x}) (sort (distinct (map :Sector data))))
        countries (mapv (fn [x] {:id x :label (:LongName (first (filter #(= (:CountryCode %) x) country-codes)))}) (sort (distinct (map :Country data))))
        comparables (sort-by :Used_Duration (t/chainfilter (dissoc (update @calculator-target :Used_Rating_Score cljs.reader/read-string) :Used_Duration) data))
        infer-rating-fn (fn [country] (swap! calculator-target assoc :Used_Rating_Score (str (:Used_Rating_Score (first (t/chainfilter {:Country country :Sector "Sovereign"} data))))))
        update-sector-fn (fn [sector] (do (swap! calculator-target assoc :Sector sector) (when (= sector "Sovereign") (swap! calculator-chart-options assoc :rating-curves-sov-only true) (infer-rating-fn (:Country @calculator-target)))))
        update-country-fn (fn [country] (do (swap! calculator-target assoc :Country country) (when (= (:Sector @calculator-target) "Sovereign") (infer-rating-fn (:Country @calculator-target)))))]
    [v-box :padding "80px 10px" :class "rightelement" :gap "20px"
     :children [[v-box :class "element" :gap "0px" :width "1620px"
                 :children [[title :label "New issue calculator" :level :level1] [gap :size "20px"]
                            [h-box :gap "50px" :align :center
                             :children [[v-box :gap "0px" :align :start :children [[h-box :gap "10px" :children [[label :width "200px" :label "Country"] [label :width "200px" :label "Sector"][label :width "80px" :label "Currency"]]]
                                                                                     [h-box :gap "10px" :children [[single-dropdown :width "200px" :model (r/cursor calculator-target [:Country]) :choices countries :on-change #(do (update-country-fn %) (rf/dispatch [:quant-model/calculator-spreads nil])) :filter-box? true]
                                                                                                                   [single-dropdown :width "200px" :model (r/cursor calculator-target [:Sector]) :choices sectors :on-change #(do (update-sector-fn %) (rf/dispatch [:quant-model/calculator-spreads nil]))  :filter-box? true]
                                                                                                                   [single-dropdown :width "80px" :model (r/cursor calculator-target [:CRNCY]) :choices [{:id "USD" :label "USD"} {:id "EUR" :label "EUR"}] :on-change #(do (swap! calculator-target assoc :CRNCY %) (rf/dispatch [:quant-model/calculator-spreads nil]))  :filter-box? true]]]
                                                                                     [gap :size "20px"]
                                                                                     [h-box :gap "10px" :children [[label :width "130px" :label "Duration"] [gap :size "50px"] [label :width "100px" :label "Rating score"] [label :width "100px" :label "Rating"]]]
                                                                                     [h-box :gap "10px" :align :center :children [[input-text :width "100px" :model (r/cursor calculator-target [:Used_Duration]) :on-change #(do (swap! calculator-target assoc :Used_Duration %) (rf/dispatch [:quant-model/calculator-spreads nil]))]
                                                                                                                                  [box :width "20px" :child [md-circle-icon-button :md-icon-name "zmdi-help" :size :smaller :on-click #(reset! show-duration-modal true)]]
                                                                                                                                  [gap :size "50px"]
                                                                                                                                  [input-text :width "100px" :model (r/cursor calculator-target [:Used_Rating_Score]) :on-change #(do (swap! calculator-target assoc :Used_Rating_Score %) (rf/dispatch [:quant-model/calculator-spreads nil]))]
                                                                                                                   [label :width "100px" :label (qstables/get-implied-rating (:Used_Rating_Score @calculator-target))]]]]]

                                        [button :style {:width "100px"} :label "Calculate" :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:get-calculator-spread (:CRNCY @calculator-target) (:Country @calculator-target) (:Sector @calculator-target) (:Used_Rating_Score @calculator-target) (:Used_Duration @calculator-target)])]
                                        [calculator-result-table]]]]]
                [comparable-chart
                 (cljs.reader/read-string (:Used_Duration @calculator-target))
                 (get-in @(rf/subscribe [:quant-model/calculator-spreads]) [:legacy :d4])
                 (get-in @(rf/subscribe [:quant-model/calculator-spreads]) [:new :d4])
                 (get-in @(rf/subscribe [:quant-model/calculator-spreads]) [:svr :d4])
                 comparables]
                [qs-table (str "Comparables table") (sort-by (juxt :Country :Ticker :Used_Duration) comparables)]]]))

(defn qs-table-container []
  [box :padding "80px 10px" :class "rightelement" :child [qs-table "Quant model output" @(rf/subscribe [:quant-model/model-output])]])


(def spot-chart-model-choice (r/atom "SVR"))
(def spot-chart-rating-choice (r/atom #{3 6 9 12 15 18}))               ;3 6 9 12 15 18
(def spot-chart-issuer-choice (r/atom (set nil)))           ;["BRAZIL"]
(def spot-chart-2d-curves-sov-only (r/atom false))

(def typeahead-model (atom nil))

(defn show-save-chart-modal [] nil)
(defn open-saved-chart-modal [] nil)

(defn spot-chart []
  (let [data @(rf/subscribe [:quant-model/model-output])
        issuer-choices (into [] (map (fn [i] {:id i :label i}) (sort (distinct (map :Ticker data)))))]
    [box :padding "80px 10px" :class "rightelement" :child
     [v-box :class "element" :gap "50px" :width "1620px" :children
      [[h-box :align :center :justify :between :children [[title :label "Spot charts" :level :level1] [title :level :level4 :label "Left button to move chart, wheel to zoom" ]]]
       [h-box :gap "50px" :children
        [[v-box :gap "0px" :width "125px" :children
          (into [] (concat
                      (into [[title :label "Model type" :level :level3]]
                            (for [c ["Legacy" "New" "SVR"]] ^{:key c} [radio-button :label c :value c :model spot-chart-model-choice :on-change #(reset! spot-chart-model-choice %)])) ;; key should be unique among siblings
                      [[gap :size "10px"] [title :label "Rating curves" :level :level3]
                        [checkbox :model spot-chart-2d-curves-sov-only :label "Sov only?" :on-change #(reset! spot-chart-2d-curves-sov-only %)][gap :size "10px"]
                       [selection-list :model spot-chart-rating-choice :choices (into [] (map (fn [i] {:id i :label (qstables/get-implied-rating (str i))}) (range 2 19))) :on-change #(reset! spot-chart-rating-choice %)]
                       [gap :size "10px"] [button :label "Clear all" :class "btn btn-primary btn-block" :on-click #(reset! spot-chart-rating-choice #{}) :disabled? (zero? (count @spot-chart-rating-choice))]
                       [gap :size "20px"] [title :label "Bookmarks" :level :level3] [button :label "Save new" :class "btn btn-primary btn-block" :on-click #(reset! show-chart-modal :save)][gap :size "10px"] [button :label "Open" :class "btn btn-primary btn-block" :on-click #(do (rf/dispatch [:get-quant-model-saved-charts]) (reset! show-chart-modal :open))]

                       ]))]
         [v-box :gap "0px" :width "150px" :children
          [[title :label "Issuers" :level :level3]
           [selection-list :model spot-chart-issuer-choice :width "100%" :height "460px" :choices issuer-choices :on-change #(reset! spot-chart-issuer-choice %)] [gap :size "10px"]
           [button :label "Clear all" :class "btn btn-primary btn-block" :on-click #(reset! spot-chart-issuer-choice #{}) :disabled? (zero? (count @spot-chart-issuer-choice))] [gap :size "10px"]
           [typeahead :width "100%" :model typeahead-model
            :data-source (fn [s] (into [] (take 4 (for [n issuer-choices :when (re-find (re-pattern (str "(?i)" s)) (:label n))] n))))
            :render-suggestion (fn [{:keys [label]}] [:span [:i {:style {:width "40px"}}] label])
            :suggestion-to-string (fn [_] "")              ;#(:name %)
            :placeholder "Search here"
            :on-change #(swap! spot-chart-issuer-choice (if (contains? @spot-chart-issuer-choice (:id %)) disj conj) (:id %))
            :change-on-blur? true :immediate-model-update? false :rigid? false :disabled? false]]]
         [oz/vega-lite (qscharts/spot-chart-vega-spec @spot-chart-model-choice @spot-chart-rating-choice @spot-chart-issuer-choice @spot-chart-2d-curves-sov-only)]]]]]]))

(def advanced-spot-chart-view (atom nil))
(def advanced-spot-chart-isins (r/atom []))
(def advanced-chart-filter (atom []))
(def reagent-chart-filter (atom []))
(def open-update (r/atom false))
(defn advanced-spot-chart []
  (let [data @(rf/subscribe [:quant-model/model-output])]
    [box :padding "80px 10px" :class "rightelement" :child
     [v-box :class "element" :gap "20px" :width "1620px" :children
      [[h-box :align :center :justify :between :children [[title :label "Advanced spot charts" :level :level1]  [title :level :level4 :label "Left button to move chart, wheel to zoom" ]]]
       [h-box :align :start :justify :between :children [
                                                          [v-box :gap "0px" :width "125px" :children
                                                           (into [] (concat
                                                                      (into [[title :label "Model type" :level :level3]]
                                                                            (for [c ["Legacy" "New" "SVR"]] ^{:key c} [radio-button :label c :value c :model spot-chart-model-choice :on-change #(reset! spot-chart-model-choice %)])) ;; key should be unique among siblings
                                                                      [[gap :size "10px"] [title :label "Rating curves" :level :level3]
                                                                       [checkbox :model spot-chart-2d-curves-sov-only :label "Sov only?" :on-change #(reset! spot-chart-2d-curves-sov-only %)][gap :size "10px"]
                                                                       [selection-list :model spot-chart-rating-choice :choices (into [] (map (fn [i] {:id i :label (qstables/get-implied-rating (str i))}) (range 2 19))) :on-change #(reset! spot-chart-rating-choice %)]
                                                                       [gap :size "10px"] [button :label "Clear all" :class "btn btn-primary btn-block" :on-click #(reset! spot-chart-rating-choice #{}) :disabled? (zero? (count @spot-chart-rating-choice))]
                                                                       [gap :size "20px"] [title :label "Bookmarks" :level :level3] [button :label "Save new" :class "btn btn-primary btn-block" :on-click #(reset! show-chart-modal :save-advanced)][gap :size "10px"] [button :label "Open" :class "btn btn-primary btn-block" :on-click #(do (rf/dispatch [:get-quant-model-saved-advanced-charts]) (reset! show-chart-modal :open-advanced))]
                                                                       ]))]
                                                          [v-box :gap "10px" :width "125px" :children [[title :level :level4 :label "Filter table then click draw to see first 100 bonds." ]
                                                                                                      [button :class "btn btn-primary btn-block" :label "Draw" :on-click #(reset! advanced-spot-chart-isins (take 50 (js->clj (if @advanced-spot-chart-view (.map (. (.getResolvedState @advanced-spot-chart-view) -sortedData) (fn [e] (aget e "_original" "ISIN")))))))]]]

                                                           [oz/vega-lite (qscharts/advanced-spot-chart-vega-spec @advanced-spot-chart-isins @spot-chart-model-choice @spot-chart-rating-choice @spot-chart-2d-curves-sov-only)]]]
       [title :level :level4 :label "Use , for OR. Use & for AND. Use - to exclude. Examples: AR,BR for Argentina or Brazil. >200&<300 for spreads between 200bps and 300bps. >0 to only see bonds in an index. -Sov to exclude sovereigns, -CN&-HK to exclude both countries."]
       [h-box :gap "50px" :children
        [
         [:> ReactTable
          {:data           data :columns (qstables/table-style->qs-table-col "Advanced spot charts" nil)
           :showPagination true :pageSize 100 :showPageSizeOptions false
           :filterable     true :defaultFilterMethod tables/text-filter-OR :onFilteredChange #(reset! advanced-chart-filter %) :defaultFiltered @reagent-chart-filter
           :ref            #(do (reset! advanced-spot-chart-view %) ;we're going to go through here TWICE first time likely with empty stuff. THIS IS TRICKY
                                (when @open-update
                                  (reset! advanced-spot-chart-isins (take 100 (js->clj (if % (.map (. (.getResolvedState %) -sortedData) (fn [e] (aget e "_original" "ISIN")))))))
                                  (if % (reset! open-update false))))
           :getTrProps     on-click-context :className "-striped -highlight"}]
         ]]]]]))

(defn methodology []
  [box :padding "80px 10px" :class "rightelement" :child
   [v-box :class "element" :children
    [[title :label "Methodology" :level :level1] [gap :size "20px"]
     [title :label "General" :level :level3]
     [p "We are running a four factor model, regressing spreads against country, sector, rating and duration. Country and sector are categorical variables while rating and duration are numerical. The latter are normalised before the regression."]
     [title :label "Legacy model" :level :level3]
     [p "We run log(spread) = a.Duration + b.Rating + categorical variables. This correctly takes into account spreads widening faster as we go down credit ratings. However, it will be misleading (too high spreads) for long dated bonds, especially low rated credits, as it will keep curves quite steep."]
     [title :label "New model" :level :level3]
     [p "We run log(spread) = a.log(Duration) + b.Rating + categorical variables. This correctly takes into account spreads widening faster as we go down credit ratings. It also creates curves that are flatter (better) in the long end, but too steep in the short end (too low spreads), especially for low rated credits."]
     [title :label "Support vector regression (SVR)" :level :level3]
     [p "We run spread = SVR(Duration, Rating, categorical variables), using the RBF Kernel and C=1000, e=0.01. C and e are roughly calibrated to match the explanatory power of the legacy and new model. The SVR model moves the data into a hyperspace where it can better be linearly explained. It will correctly reflect that high grade credit curves are steep while high yield ones are flat to inverted. On the other hand, it may overfit curves with very few bonds. For more on SVR: " [hyperlink-href :label "Wikipedia" :href "https://en.wikipedia.org/wiki/Support_vector_machine"]]
     [title :label "Curve shapes: the big issue with the legacy and new model" :level :level3]
     [p "The legacy and new model will give the same curve steepness to all credits: the steepness is independent from the spread level which is intuitively and factually wrong. In the legacy model, the spread ratio between durations is a fixed ratio of the duration difference, while in the new model, it's a fixed ratio of the duration ratio. Convexity makes the approach slightly better in the legacy model, and even worse in the new model."]
     ]]]
  )

(def trade-finder-isin (r/atom nil))
(defn trade-finder []
  (let [data @(rf/subscribe [:quant-model/model-output])
        bond-data (first (filter #(= (:ISIN %) @trade-finder-isin) data))
        duration (:Used_Duration bond-data)
        rating (:Used_Rating_Score bond-data)
        cheapness (:difference_svr bond-data)
        bond-name (:Bond bond-data)
        comparables (->> data
                         (remove (comp nil? :Used_Duration))
                         (remove (comp nil? :Used_Rating_Score))
                         (remove (comp nil? :difference_svr))
                         (filter #(and
                                    (<= (dec duration) (:Used_Duration %) (inc duration))
                                    (<= (dec rating) (:Used_Rating_Score %) (inc rating))
                                    (>= (:difference_svr %) cheapness))) ;so we include the source bond - useful to see its score
                         (sort-by :difference_svr)
                         (reverse))]
    ;(rf/dispatch [:quant-model/table-filter []])            ;reset table filter
    (reset! qs-table-filter [])
    [v-box :padding "80px 10px" :class "rightelement" :gap "20px"
     :children [
                [v-box :class "element" :gap "10px" :width "1620px"
                 :children [[title :label "Existing bond ISIN" :level :level1]
                            [input-text :model trade-finder-isin :on-change #(reset! trade-finder-isin %)]
                            [label :label bond-name]
                            [p (str "We will look for bonds rated within 1 notch of the above, with duration within 1 year of the above, and scoring cheaper through the SVR model.")]]]
                [qs-table (str (dec (count comparables)) " bonds scoring better") comparables]]]))


(defn duration-modal []
  (let [maturity (r/atom nil)
        coupon (r/atom nil)]
    (fn []
      (if @show-duration-modal
        [modal-panel
         :wrap-nicely? true
         :backdrop-on-click #(reset! show-duration-modal false)
         :child [v-box :gap "10px" :align :center :children
                 [[title :label "Calculate modified duration" :level :level2]
                  [input-text :width "200px" :model maturity :placeholder "Maturity in years" :on-change #(reset! maturity %)]
                  [input-text :width "200px" :model coupon :placeholder "Coupon in %" :on-change #(reset! coupon %)]
                  [label :label "Assumes semi-annual coupons"]
                  [button :label "OK" :on-click #(do
                                                   (swap! calculator-target assoc :Used_Duration
                                                           (str (/ (Math/round (* 100 (t/semi-bond-modified-duration
                                                                                        (cljs.reader/read-string @maturity)
                                                                                        (/ (cljs.reader/read-string @coupon) 100)))) 100)))
                                                   (reset! show-duration-modal false))]]]]))))





(defn qs-historical-charts []
  (let [source-data @(rf/subscribe [:quant-model/model-output])
        bond-choices (into [] (map (fn [i] {:id i :label i}) (sort (distinct (map :Bond source-data)))))]
    [v-box :padding "80px 10px" :class "rightelement" :gap "20px"
     :children [[v-box :class "element" :gap "20px" :width "1620px"
                 :children [[title :level :level1 :label "Historical charts"]
                            [h-box :gap "100px" :align :start
                             :children [[v-box :gap "10px" :children
                                         [[checkbox :model show-historical-cheapness  :label "Show cheapness?"        :on-change #(reset! show-historical-cheapness %)]
                                          [checkbox :model show-historical-spreads    :label "Show spreads?"          :on-change #(reset! show-historical-spreads %)]
                                          [checkbox :model show-universe-scores       :label "Show universe score?"   :on-change #(reset! show-universe-scores %)]
                                          [checkbox :model show-historical-scores     :label "Show historical score?" :on-change #(reset! show-historical-scores %)]
                                          [checkbox :model show-rating-history        :label "Show rating history?"   :on-change #(reset! show-rating-history %)]
                                          [gap :size "30px"]
                                          [label :width "200px" :label (str @bond-historical-charts " " @isin-historical-charts)]
                                          [typeahead
                                           :width "200px"
                                           :model typeahead-bond-nickname
                                           :data-source (fn [s] (into [] (take 8 (for [n bond-choices :when (re-find (re-pattern (str "(?i)" s)) (:label n))] n))))
                                           :render-suggestion (fn [{:keys [label]}] [:span [:i {:style {:width "40px"}}] label])
                                           :suggestion-to-string (fn [_] "")              ;#(:name %)
                                           :placeholder "Search here"
                                           :on-change #(do (let [isin (:ISIN (first (filter (fn [line] (= (:Bond line) (:id %))) source-data)))]
                                                             (reset! isin-historical-charts isin)
                                                             (reset! bond-historical-charts (:id %))
                                                             (rf/dispatch [:get-historical-quant-scores isin])))
                                           :change-on-blur? true :immediate-model-update? false :rigid? true :disabled? false]]]
                                        [oz/vega-lite (qscharts/quant-isin-history-chart @show-historical-cheapness @show-historical-spreads @show-universe-scores @show-historical-scores @show-rating-history)]]]]]]]))



(rf/reg-event-db :quant-model-new-bond/change-isin (fn [db [_ isin]] (assoc db :quant-model/new-bond-entry {:ISIN isin}))) ;cleans the whole thing
(rf/reg-event-db :quant-model/new-bond-entry (fn [db [_ k v]] (assoc-in db [:quant-model/new-bond-entry k] v)))

(rf/reg-event-fx
  :quant-model-new-bond/check-isin
  (fn [{:keys [db]} [_ isin]]
    (let [ISIN (.toUpperCase isin)]
      {:http-get-dispatch {:url (str static/server-address "quant-model-new-bond-check?ISIN=" ISIN) :dispatch-key [:quant-model/new-bond-entry-result]}
       :db (-> db (assoc :quant-model/new-bond-tested false
                         :quant-model/new-bond-already-exists false
                         :quant-model/new-bond-entry {:ISIN ISIN :JPM_SECTOR nil :CNTRY_OF_RISK nil :NAME nil}))})))

(rf/reg-event-db
  :quant-model/new-bond-entry-result
  (fn [db [_  data]]
    (-> db
        (assoc :quant-model/new-bond-tested true :quant-model/new-bond-already-exists (:already-exists data))
        (update-in [:quant-model/new-bond-entry :ISIN] #(if (:already-exists data) (str % " " (:message data)) %))
        (assoc-in [:quant-model/new-bond-entry :NAME] (if-let [x (:SECURITY_NAME data)] x ""))
        (assoc-in [:quant-model/new-bond-entry :TICKER] (:TICKER data))
        (assoc-in [:quant-model/new-bond-entry :CRNCY] (:CRNCY data))
        (assoc-in [:quant-model/new-bond-entry :CNTRY_OF_RISK] (:CNTRY_OF_RISK data))
        (assoc-in [:quant-model/new-bond-entry :FIRST_SETTLE_DT] (:FIRST_SETTLE_DT data)) ; this is purely transitive, get it from server send it back
        (assoc-in [:quant-model/new-bond-entry :JPM_SECTOR] (if-let [x (:JPM_SECTOR data)] x "")))))

(rf/reg-event-fx
  :quant-model-new-bond/save-to-bond-universe
  (fn [{:keys [db]} [_ data]]
    {:db db :http-post-dispatch {:url (str static/server-address "quant-model-save-new-bond") :edn-params data :dispatch-key [:quant-model-new-bond/save-bond-response]}}))

(rf/reg-event-db
  :quant-model-new-bond/save-bond-response
  (fn [db [_  data]]
    (if (:success data)
      (assoc db :quant-model/new-bond-entry nil :quant-model/new-bond-saved-message (:message data))
      (assoc db :quant-model/new-bond-saved-message (:message data)))))

(defn save-new-bond-impossible []
  (or (nil? (:JPM_SECTOR @(rf/subscribe [:quant-model/new-bond-entry])))
      (= (:JPM_SECTOR @(rf/subscribe [:quant-model/new-bond-entry])) "")
      (nil? (:NAME @(rf/subscribe [:quant-model/new-bond-entry])))))


(defn new-bond-entry []
  (let [new-bond (rf/subscribe [:quant-model/new-bond-entry])
        ISIN      (r/cursor new-bond [:ISIN])
        name     (r/cursor new-bond [:NAME])
        sector   (r/cursor new-bond [:JPM_SECTOR])
        country  (r/cursor new-bond [:CNTRY_OF_RISK])
        new-bond-tested @(rf/subscribe [:quant-model/new-bond-tested])
        hb (fn [v] [h-box  :gap "10px" :align :center :children v])
        bond-saved-message @(rf/subscribe [:quant-model/new-bond-saved-message])]
    (fn []                                                  ;we had weird problems with input-text without this, where at each key stroke we lost focus as the enitre component was being redrawn
      [v-box :width "400px" :gap "10px" :class "element"
       :children [[title :label "Add bond to universe" :level :level1]
                  [hb [[label :width "100px" :label "REGS ISIN"] [input-text :width "250px" :model ISIN :change-on-blur? false :on-change #(rf/dispatch [:quant-model-new-bond/change-isin %])]]]
                  [hb [(if new-bond-tested
                         [button :style {:width "360px"} :label "Check Bloomberg!" :on-click #(rf/dispatch [:quant-model-new-bond/check-isin @ISIN])]
                         [throbber :size :small])]]
                  [hb [[label :width "100px" :label "Name"] [input-text :width "250px" :model name :change-on-blur? false :on-change #(rf/dispatch [:quant-model/new-bond-entry :NAME %])]]]
                  [hb [[label :width "100px" :label "JPM sector"] [single-dropdown :width "250px" :model sector :choices (into [] (for [x @(rf/subscribe [:jpm-sectors])] {:id x :label x})) :filter-box? true :on-change #(rf/dispatch [:quant-model/new-bond-entry :JPM_SECTOR %])]]]
                  [hb [[label :width "100px" :label "Country"] [single-dropdown :width "250px" :model country :choices (mapv #(clojure.set/rename-keys % {:CountryCode :id :LongName :label}) @(rf/subscribe [:country-codes])) :filter-box? true :on-change #(rf/dispatch [:quant-model/new-bond-entry :CNTRY_OF_RISK %])]]]
                  [hb [(if @(rf/subscribe [:quant-model/new-bond-already-exists])
                         [label :label "Can't save, bond already in database."]
                         [button :style {:width "360px"} :label "Save to bond universe!" :disabled? (save-new-bond-impossible) :on-click #(rf/dispatch [:quant-model-new-bond/save-to-bond-universe @new-bond])])]]
                  [hb [[label :width "100px" :label bond-saved-message]]]]])))

(defn add-bonds [] [box :padding "80px 10px" :class "rightelement" :child [new-bond-entry]])




;;;;;;

(defn active-home []
  (let [active-qs @(rf/subscribe [:navigation/active-qs])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-qs
      :table              [qs-table-container]
      :calculator         [calculator-controller]
      :spot-charts        [spot-chart]
      :advanced-spot-charts        [advanced-spot-chart]
      :historical-charts  [qs-historical-charts]
      :top-bottom         [harvest/top-bottom]
      :median             [harvest/median-table]
      :trade-finder       [trade-finder]
      :universe-des       [harvest/universe-overview]
      :universe-harvest   [harvest/universe-harvest]
      :index-crawler      [index-crawler]
      :add-bonds          [add-bonds]
      :methodology        [methodology]
      :model-portfolios   [modelportfolios/model-portfolio-view]
      [:div.output "nothing to display"])))

(defn display-saved-chart [line]
  (reset! spot-chart-model-choice (:model-type line))
  (reset! spot-chart-rating-choice (set (:rating-curves line)))
  (reset! spot-chart-issuer-choice (set (:issuers line)))
  (reset! spot-chart-2d-curves-sov-only (if-let [x (:rating-curves-sov-only line)] x false)))

(defn display-advanced-saved-chart [line]
  (reset! spot-chart-model-choice (:model-type line))
  (reset! spot-chart-rating-choice (set (:rating-curves line)))
  (reset! advanced-chart-filter (clj->js (:advanced-filter line)))
  (reset! reagent-chart-filter (clj->js (:advanced-filter line)))
  (reset! spot-chart-2d-curves-sov-only (if-let [x (:rating-curves-sov-only line)] x false))
  (reset! open-update true)
  )

(defn modal-spot-charts []
  (let [nickname (r/atom "")
        chart-to-open (r/atom #{})]
    (fn []
      (let [saved-charts (js->clj (js/JSON.parse @(rf/subscribe [:quant-model/saved-charts])) :keywordize-keys true)
            advanced-saved-charts (js->clj (js/JSON.parse @(rf/subscribe [:quant-model/saved-advanced-charts])) :keywordize-keys true)]
        (case @show-chart-modal
          :save
          [modal-panel :backdrop-on-click #(reset! show-chart-modal nil)
           :child [v-box  :width "400px" :gap "10px" :padding "20px"
                   :children [[title :label "Save chart configuration" :level :level1]
                              [input-text :placeholder "Nickname" :model nickname :on-change #(reset! nickname %)]
                              [label :label "Use same nickname to override existing configuration."]
                              [h-box :gap "10px" :children [[button :label "Save" :on-click #(do (rf/dispatch [:quant-model-save-new-chart @nickname @spot-chart-model-choice @spot-chart-rating-choice @spot-chart-issuer-choice @spot-chart-2d-curves-sov-only]) (reset! show-chart-modal nil))]
                                                            [button :label "Cancel" :on-click #(reset! show-chart-modal nil)]]]]]]
          :open
          [modal-panel :backdrop-on-click #(reset! show-chart-modal nil)
           :child [v-box  :width "400px" :height "600px" :gap "10px" :padding "20px"
                   :children [[title :label "Open chart configuration" :level :level1]
                              [selection-list :max-height "500px" :model chart-to-open :multi-select? false
                               :choices (into [] (for [x (sort (map :id saved-charts))] {:id x :label x}))
                               :on-change #(do (display-saved-chart (first (t/chainfilter {:id (first %)} saved-charts))) (reset! show-chart-modal nil))]
                              [h-box :gap "10px" :children [[button :label "Cancel" :on-click #(reset! show-chart-modal nil)]]]]]]
          :save-advanced
          [modal-panel :backdrop-on-click #(reset! show-chart-modal nil)
           :child [v-box  :width "400px" :gap "10px" :padding "20px"
                   :children [[title :label "Save advanced chart configuration" :level :level1]
                              [input-text :placeholder "Nickname" :model nickname :on-change #(reset! nickname %)]
                              [label :label "Use same nickname to override existing configuration."]
                              [h-box :gap "10px" :children [[button :label "Save" :on-click #(do (rf/dispatch [:quant-model-save-new-advanced-chart @nickname @spot-chart-model-choice @spot-chart-rating-choice @spot-chart-2d-curves-sov-only (js->clj @advanced-chart-filter)]) (reset! show-chart-modal nil))]
                                                            [button :label "Cancel" :on-click #(reset! show-chart-modal nil)]]]]]]
          :open-advanced
          [modal-panel :backdrop-on-click #(reset! show-chart-modal nil)
           :child [v-box  :width "400px" :height "600px" :gap "10px" :padding "20px"
                   :children [[title :label "Open advanced chart configuration" :level :level1]
                              [selection-list :max-height "500px" :model chart-to-open :multi-select? false
                               :choices (into [] (for [x (sort (map :id advanced-saved-charts))] {:id x :label x}))
                               :on-change #(do (display-advanced-saved-chart (first (t/chainfilter {:id (first %)} advanced-saved-charts))) (reset! show-chart-modal nil))]
                              [h-box :gap "10px" :children [[button :label "Cancel" :on-click #(reset! show-chart-modal nil)]]]]]]
          nil
          )))))


(defn view []
  [h-box :gap "10px" :padding "0px" :children [[nav-qs-bar] [active-home] [duration-modal] [rcm/context-menu] [modal-spot-charts] [modelportfolios/modal-change-model-portfolio]]])