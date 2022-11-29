(ns jasminegui.esg
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink typeahead md-circle-icon-button selection-list throbber modal-panel
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.charting :as charting]
    [oz.core :as oz]
    [jasminegui.guitools :as gt]
    [reagent.core :as r]
    [jasminegui.tools :as tools]
    [jasminegui.riskviews :as riskviews]
    [jasminegui.tools :as t]
    [jasminegui.esgreport :as esgreport]
    [cljs-time.core :refer [today]]
    [goog.object :as gobj]

    ))

(def standard-box-width "1600px")
(def dropdown-width "150px")



(rf/reg-event-db
  :esg/add-company
  (fn [db [_ line]]
    (update db :esg/selected-companies conj (assoc line :remove 1))))

(rf/reg-event-db
  :esg/clear-table
  (fn [db [_]]
    (assoc db :esg/selected-companies []
              :esg/data []
              :esg/data-detailed [])))

(rf/reg-event-db :esg/data (fn [db [_ data]] (assoc db :esg/data (js->clj (.parse js/JSON data)))))
(rf/reg-event-db :esg/data-detailed (fn [db [_ data]] (assoc db :esg/data-detailed (js->clj (.parse js/JSON data)))))

(rf/reg-event-fx
  :esg/fetch-data
  (fn [{:keys [db]} [_ detail]]
    {:db                db
     :http-get-dispatch {:url          (str static/server-address "refinitiv-data?companies=" (clojure.string/join "," (map :id (db :esg/selected-companies))) "&detail="detail)
                         :dispatch-key (if (= detail "top") [:esg/data] [:esg/data-detailed])}}))

(rf/reg-event-db
  :esg/refinitiv-structure
  (fn [db [_ data]]
    (assoc db :esg/refinitiv-structure data
              :esg/selected-pillars (set (sort (distinct (map :pillar_title data)))))))



(defn refinitiv-find-issuers []
  (let [choices  @(rf/subscribe [:esg/refinitiv-ids])
        suggestion-result (fn [n] {:name n})
        suggestions-for-search (fn [s] (into [] (take 8 (for [n choices :when (re-find (re-pattern (str "(?i)" s)) (:name n))] n))))
        typeahead-model (r/atom "")
        typeahead-on-change-value (reagent/atom nil)
        status                    (reagent/atom nil)]
    [v-box :width standard-box-width :gap "20px" :class "element"
     :children [[title :label "Refinitiv entity chooser" :level :level2]
                [h-box :gap "20px" :children [
                                              [typeahead
                                               :model typeahead-model
                                               :data-source suggestions-for-search
                                               :render-suggestion (fn [{:keys [name]}] [:span [:i {:style {:width "40px"}}] name])
                                               :suggestion-to-string (fn [_] "") ;#(:name %)
                                               :status @status
                                               :status-icon? false
                                               :status-tooltip ""
                                               :width "300px"
                                               :placeholder "Type company name here"
                                               :on-change #(do (reset! typeahead-on-change-value %) (if (not= "" %) (rf/dispatch [:esg/add-company %])))
                                               :change-on-blur? true :immediate-model-update? false :rigid? false :disabled? false
                                               ]
                                              [:> ReactTable
                                               {:data           (sort-by :name @(rf/subscribe [:esg/selected-companies]))
                                                :columns        [{:Header "ID" :accessor "id" :width 200}
                                                                 {:Header "Name" :accessor "name" :width 300}]
                                                :pageSize       10
                                                :showPagination false
                                                :className      "-striped -highlight"}]]]
                [h-box :gap "10px" :children [[button :label "Fetch data"  :class "btn btn-primary btn-block" :on-click #(do (rf/dispatch [:esg/fetch-data "top"]) (rf/dispatch [:esg/fetch-data "detailed"]))]
                                              [button :label "Clear table" :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:esg/clear-table])]]]]]))

(defn refinitiv-table-top-view []
  (let [data @(rf/subscribe [:esg/data])
        headers (conj (keys (first data)) "Name")
        no-space-headers (map #(keyword (clojure.string/replace % " " "_")) headers)
        zheadersmap (zipmap headers no-space-headers)
        names-map (into {} (for [line @(rf/subscribe [:esg/selected-companies])] [(:id line) (:name line)]))
        clean-data (mapv #(assoc % "Name" (names-map (% "Refinitiv ID"))) data)
        clean-keys-data (mapv #(clojure.set/rename-keys % zheadersmap) clean-data)]
    [v-box :width standard-box-width :gap "20px" :class "element"
     :children [[h-box :align :center :children [[title :label "Top level scores" :level :level2] [gap :size "1"] [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link clean-keys-data "esg")]]]
                [:> ReactTable
                 {:data           (sort-by #(get-in % "Name") clean-keys-data)
                  :columns        (into [{:Header "Name" :accessor :Name :width 200 :className "sticky-rt-column" :headerClassName "sticky-rt-column"}]
                                        (for [h no-space-headers :when (not= h :Name)] (merge {:Header (clojure.string/replace (name h) "_" " ") :headerStyle {:overflow    nil
                                                                                                                                             :whiteSpace "pre-line"
                                                                                                                                             :wordWrap   "break-word"}
                                                                             :accessor h  :Cell tables/round2-if-nb} (if (not= h :Name) {:width 100 :style {:textAlign "right"}} {:width 200}))))
                  :pageSize       10
                  :showPagination false
                  :className      "-striped -highlight"}]]]))
; :className "sticky-rt-column" :headerClassName "sticky-rt-column"

(defn refinitiv-table-detailed-view []
  (let [data @(rf/subscribe [:esg/data-detailed])
        structure @(rf/subscribe [:esg/refinitiv-structure])
        headers (conj (keys (first data)) "Name")
        no-space-headers (map #(-> % (clojure.string/replace " " "_") (clojure.string/replace "," "_") (keyword)) headers)
        zheadersmap (zipmap headers no-space-headers)
        selected-pillars (rf/subscribe [:esg/selected-pillars])
        names-map (into {} (for [line @(rf/subscribe [:esg/selected-companies])] [(:id line) (:name line)]))
        clean-data (mapv #(assoc % "Name" (names-map (% "Refinitiv ID"))) data)
        clean-keys-data (sort-by #(get-in % "Name") (mapv #(clojure.set/rename-keys % zheadersmap) clean-data))
        header-style {:overflow nil :white-space "pre-line" :word-wrap "break-word"}]
    ;for the download we remove fields that have too many / special characters
    [v-box :width standard-box-width :gap "20px" :class "element"
     :children [[h-box :align :center :children [[title :label "Detailed data" :level :level2] [gap :size "1"] [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(do  (tools/csv-link clean-keys-data  "esg" (conj (remove (fn [x] (some #{x} [:Board_Member_CV :Non-Board_Senior_Executive_CV :Name])) (keys (first clean-keys-data))) :Name) ","))]]]
                [box :width "200px" :child [selection-list :width "200px" :model selected-pillars :choices (into [] (for [p (sort (distinct (map :pillar_title @(rf/subscribe [:esg/refinitiv-structure])))) ] {:id p :label p})) :on-change #(rf/dispatch [:esg/selected-pillars %])]]
                [:> ReactTable
                 {:data           clean-keys-data
                  :columns        (into [{:Header "Name" :accessor :Name :width 200 :className "sticky-rt-column" :headerClassName "sticky-rt-column"}]
                                        (for [[pillar group] (sort-by first (group-by :pillar_title structure)) [category sub-group] (sort-by first (group-by :category_title group)) :when (contains? @selected-pillars pillar)]
                                          {:Header      (str pillar ": " category " >>>>>>>>>>")
                                           :headerStyle (merge header-style {:text-align "left"})
                                           :columns
                                                        (into []
                                                              (for [h (sort no-space-headers) :when (and (not= h :Name) (some (fn [a] (clojure.string/includes? a (clojure.string/replace (name h) "_" " "))) (map :item_title sub-group)))]
                                                                (merge {:Header   (clojure.string/replace (name h) "_" " ") :headerStyle header-style ;(clojure.string/replace (name h) "_" " ")
                                                                        :accessor h :Cell tables/dash-for-nil-and-big-nb} (if (not= h :Name) {:width 150 :style {:textAlign "right"}} {:width 200}))))}))
                  :pageSize       10
                  :showPagination false
                  :className      "-striped -highlight"}]]]))



(def server-msci-metrics ["CARBON_EMISSIONS_SCOPE_1"
                          "CARBON_EMISSIONS_SCOPE_2"
                          "CARBON_EMISSIONS_SCOPE_3"
                          "CARBON_EMISSIONS_YEAR"
                          "CARBON_EMISSIONS_SCOPE_12_INTEN"
                          "CARBON_EMISSIONS_SCOPE_12"
                          "CARBON_EMISSIONS_SCOPE_12_KEY"
                          "CARBON_EMISSIONS_SOURCE"
                          "IVA_COMPANY_RATING"
                          "ENVIRONMENTAL_PILLAR_SCORE"
                          "SOCIAL_PILLAR_SCORE"
                          "GOVERNANCE_PILLAR_SCORE"
                          "WEIGHTED_AVERAGE_SCORE"
                          "UNGC_COMPLIANCE"
                          "ESG_HEADLINE"
                          ;2019 data below
                          "CARBON_EMISSIONS_SCOPE_12_FY19"
                          "CARBON_EMISSIONS_SCOPE_12_INTEN_FY19"
                          "CARBON_EMISSIONS_SCOPE_12_KEY_FY19"
                          "CARBON_EMISSIONS_SCOPE_1_FY19"
                          "CARBON_EMISSIONS_SCOPE_1_KEY_FY19"
                          "CARBON_EMISSIONS_SCOPE_2_FY19"
                          "CARBON_EMISSIONS_SCOPE_2_KEY_FY19"
                          "CARBON_EMISSIONS_SCOPE_3_FY19"
                          ])

(def msci-cols (concat [:Ticker :Country :Sector :Equity :ISIN :ID_ISIN :NAME] (map #(keyword (str "msci-" %)) server-msci-metrics)))

;(defn msci-table []
;  (when (zero? (count @(rf/subscribe [:esg/carbon-jasmine]))) (rf/dispatch [:get-esg-carbon-jasmine]))
;  (let [data-msci (if-let [x @(rf/subscribe [:esg/msci-scores])] (vals x) [])
;        header-style {:overflow nil :white-space "pre-line" :word-wrap "break-word"}]
;    [v-box :gap "20px" :class "element" :width standard-box-width
;     :children [
;                [h-box :align :center :children [[title :label "MSCI scores for quant universe" :level :level1] ;"MSCI scores for quant universe"
;                                                 [gap :size "1"]
;                                                 [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link (sort-by :Ticker data-msci) "msci"  msci-cols "\t")]]]
;                [:> ReactTable
;                 {:data                data-msci
;                  :columns             [
;                                        {:Header  "Description" :headerStyle header-style
;                                         :columns [{:Header "Ticker" :accessor "Ticker" :width 80} {:Header "Country" :accessor "Country" :width 55} {:Header "Sector" :accessor "Sector" :width 80}]}
;                                        {:Header  "Symbology" :headerStyle header-style
;                                         :columns [{:Header "Bond ISIN" :accessor "ISIN" :width 100} {:Header "Equity" :accessor "Equity" :width 80} {:Header "Equity ISIN" :accessor "ID_ISIN" :width 100} {:Header "Name" :accessor "NAME" :width 180}]}
;                                        {:Header  "MSCI scoring" :headerStyle header-style
;                                         :columns [{:Header "Rating" :accessor "msci-IVA_COMPANY_RATING" :width 50 :style {:textAlign "center"}}
;                                                   {:Header "E" :accessor "msci-ENVIRONMENTAL_PILLAR_SCORE" :Cell tables/round1 :style {:textAlign "right"} :width 35 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "S" :accessor "msci-SOCIAL_PILLAR_SCORE" :Cell tables/round1 :style {:textAlign "right"} :width 35 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "G" :accessor "msci-GOVERNANCE_PILLAR_SCORE" :Cell tables/round1 :style {:textAlign "right"} :width 35 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "Final" :accessor "msci-WEIGHTED_AVERAGE_SCORE" :Cell tables/round1 :style {:textAlign "right"} :width 40 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "UNGC" :accessor "msci-UNGC_COMPLIANCE" :style {:textAlign "center"} :width 75}
;                                                   ]}
;                                        {:Header  "MSCI carbon emissions" :headerStyle header-style
;                                         :columns [{:Header "Scope 1" :accessor "msci-CARBON_EMISSIONS_SCOPE_1" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "Scope 2" :accessor "msci-CARBON_EMISSIONS_SCOPE_2" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "Scope 1+2" :accessor "msci-CARBON_EMISSIONS_SCOPE_12" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "1+2 int" :accessor "msci-CARBON_EMISSIONS_SCOPE_12_INTEN" :Cell tables/round1 :style {:textAlign "right"} :width 80 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "1+2 key" :accessor "msci-CARBON_EMISSIONS_SCOPE_12_KEY" :width 150 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "Scope 3" :accessor "msci-CARBON_EMISSIONS_SCOPE_3" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "Year" :accessor "msci-CARBON_EMISSIONS_YEAR" :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "Source" :accessor "msci-CARBON_EMISSIONS_SOURCE" :width 90 :filterMethod tables/nb-filter-OR-AND}]}
;                                        {:Header  "MSCI comment" :headerStyle header-style
;                                         :columns [{:Header "" :accessor "msci-ESG_HEADLINE" :width 500}]}
;                                        {:Header  "FY2019 MSCI carbon emissions" :headerStyle header-style
;                                         :columns [{:Header "Scope 1" :accessor "msci-CARBON_EMISSIONS_SCOPE_1_FY19" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "Scope 2" :accessor "msci-CARBON_EMISSIONS_SCOPE_2_FY19" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "Scope 1+2" :accessor "msci-CARBON_EMISSIONS_SCOPE_12_FY19" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "1+2 int" :accessor "msci-CARBON_EMISSIONS_SCOPE_12_INTEN_FY19" :Cell tables/round1 :style {:textAlign "right"} :width 80 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "1+2 key" :accessor "msci-CARBON_EMISSIONS_SCOPE_12_KEY_FY19" :width 150 :filterMethod tables/nb-filter-OR-AND}
;                                                   {:Header "Scope 3" :accessor "msci-CARBON_EMISSIONS_SCOPE_3_FY19" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
;                                                   ]}
;                                         ]
;                  :pageSize            20
;                  :showPagination      true
;                  :defaultSorted       [{:id :Ticker :desc false}]
;                  :filterable          true
;                  :defaultFilterMethod tables/text-filter-OR
;                  :className           "-striped -highlight"}]]]))


(rf/reg-sub
  :esg-risk/multiple-tree
  (fn [db]
    (let [kselected-portfolios (remove #(some #{%} (map keyword ["OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE" "OGEMHCD" "IUSSEMD"])) (map keyword (:portfolios db)))
          display-key-one :nav
          grouping-columns (into [] (for [r [:name :issuer :sector :msci-rating]] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (riskviews/get-pivoted-data (get db :instruments) (:positions db) (:portfolios db) (:all-instrument-ids db) (keyword (get-in tables/risk-table-columns [display-key-one :accessor])))
          thfil (fn [line] (not (every? zero? (map line kselected-portfolios))))
          pivoted-data-hide-zero (filter thfil pivoted-data)]
      (riskviews/add-total-line-to-pivot (sort-by (apply juxt (concat [(comp riskviews/first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-hide-zero) (map keyword (:portfolios db))))))

(defn holdings []
  [v-box :gap "20px" :class "element" :width standard-box-width
   :children [[title :level :level2 :label "MSCI NAV across portfolios"]
              (let [cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (not (some #{p} ["OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE" "OGEMHCD" "IUSSEMD"]))]
                                    {:Header p :accessor (name p) :width "100px" :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2-if-not0}))]
                [:> ReactTable
                 {:data                @(rf/subscribe [:esg-risk/multiple-tree])
                  :columns             (concat (mapv tables/risk-table-columns [:msci-rating :issuer]) cols)
                  :showPagination      false :sortable true :filterable false :pageSize (inc (count (distinct (map :msci-rating @(rf/subscribe [:esg-risk/multiple-tree])))))
                  :showPageSizeOptions false :className "-striped -highlight" :pivotBy [:msci-rating :TICKER] :defaultSorted [{:id :msci-rating :desc true}]}])]])

(defn esg-scores []
  (when (zero? (count @(rf/subscribe [:esg/summary-report]))) (rf/dispatch [:get-esg-summary-report]))
  [v-box :gap "20px" :class "element" :width standard-box-width
   :children [
              [h-box :align :center :children [[title :label "ESG summary report" :level :level1]
                                               [gap :size "1"]
                                               [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link (rf/subscribe [:esg/summary-report]) "esgscores")]]]
              [:> ReactTable
               {:data           (sort-by :TICKER @(rf/subscribe [:esg/summary-report]))
                :columns        [{:Header "Description" :columns [{:Header "Ticker" :accessor "TICKER" :width 80} {:Header "Country" :accessor "CountryCode" :width 55} {:Header "Sector" :accessor "Sector" :width 100}]}
                                 {:Header "91 scores" :columns [(tables/nb-col "Raw" "EMCD_ESG_RAW_TOTAL" 50 tables/round1 tables/sum-rows) (tables/nb-col "Final" "EMCD_ESG_GRAND_TOTAL" 50 tables/round1 tables/sum-rows)]}
                                 {:Header "MSCI data" :columns [{:Header "MSCI Rating" :accessor "msci-IVA_COMPANY_RATING" :width 100 :style {:textAlign "center"}}
                                                                {:Header "Scope 1" :accessor "msci-CARBON_EMISSIONS_SCOPE_1" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                {:Header "Scope 2" :accessor "msci-CARBON_EMISSIONS_SCOPE_2" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                {:Header "Scope 3" :accessor "msci-CARBON_EMISSIONS_SCOPE_3" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}]}
                                 {:Header "Portfolios" :columns [{:Header "List" :accessor "Portfolios"}]}]
                :showPagination true :sortable true :filterable true :pageSize 20
                :className      "-striped -highlight"}]]])


(def esg-checkboxes (r/atom {:funda false :score true :check false :scope1 true :scope2 false :scope3 false :tree "no" :field-chart "amt_carbon_emissions_1"}))
(def esg-view (r/atom nil))
(def esg-data-chart-data (r/atom nil))
(def esg-data-chart-data-scatter (r/atom nil))

(def list-fields-chart
  [{:id "amt_carbon_emissions_1" :label "Scope 1" , :group "Emissions"}
   {:id "amt_carbon_emissions_2" :label "Scope 2", :group "Emissions"}
   {:id "amt_carbon_emissions_1_2" :label "Scope 1-2", :group "Emissions"}
   {:id "amt_carbon_emissions_3_up" :label "Scope 3 up", :group "Emissions"}
   {:id "amt_carbon_emissions_3_down" :label "Scope 3 down", :group "Emissions"}
   {:id "amt_carbon_intensity_1" :label "Scope 1", :group "Intensity"}
   {:id "amt_carbon_intensity_2" :label "Scope 2", :group "Intensity"}
   {:id "amt_carbon_intensity_1_2" :label "Scope 1-2", :group "Intensity"}
   {:id "emissions_evic_1" :label "Scope 1", :group "Footprint"}
   {:id "emissions_evic_2" :label "Scope 2", :group "Footprint"}
   {:id "emissions_evic_1_2" :label  "Scope 1-2", :group "Footprint"}
   {:id "emissions_evic_3_up" :label  "Scope 3 up", :group "Footprint"}
   {:id "emissions_evic_3_down" :label  "Scope 3 down", :group "Footprint"}
   {:id "msci-ENVIRONMENTAL_PILLAR_SCORE" :label "E", :group "MSCI ESG"}
   {:id "msci-SOCIAL_PILLAR_SCORE" :label "S", :group "MSCI ESG"}
   {:id "msci-GOVERNANCE_PILLAR_SCORE" :label "G", :group "MSCI ESG"}
   {:id "msci-WEIGHTED_AVERAGE_SCORE" :label "ESG", :group "MSCI ESG"}
   ]
)

(def list-choices (into [] (for [k ["No" "Country" "Sector" ]] {:id (.toLowerCase k) :label k})))
(def show-tickers (r/atom false))

(defn esg-data []
  "We take Carbon data from Jasmine, we add ESG scores from MSCI research API and finally we add MSCI data that is not in Jasmine (off BM) "
  (rf/dispatch [:get-esg-carbon-jasmine])
  ;(println @(rf/subscribe [:esg/carbon-jasmine]))
  (let [data-msci (if-let [x @(rf/subscribe [:esg/msci-scores])] (vals x) [])
        data-jasmine (group-by :ticker (first @(rf/subscribe [:esg/carbon-jasmine])))
        position-ticker-list (map :TICKER (t/chainfilter {:portfolio #(= % @(rf/subscribe [:portfolio-trade-history/portfolio])) :weight pos?} @(rf/subscribe [:positions])))
        pivot @(r/cursor esg-checkboxes [:tree])
        ;check-diff (for [ticker data-jasmine]  {:ticker (key ticker) :diff-in-emissions-12 (- (/ (reduce + (map #(:amt_carbon_emissions_1 %) (val ticker))) (count (val ticker))) (:amt_carbon_emissions_1 (first (val ticker))))})
        check-diff (for [ticker data-jasmine]  {:ticker (key ticker) :diff-in-emissions-1 (apply = (remove nil? (map #(:amt_carbon_emissions_1 %) (val ticker))))})
        list-check-diff (map :ticker (t/chainfilter {:diff-in-emissions-1 #(false? %)} check-diff))
        data3-jasmine (for [t data-jasmine] (first (val t)))
        data4-jasmine  (map #(clojure.set/rename-keys % {:ticker :Ticker} ) data3-jasmine)                               ; rename key for outer join
        data-msci-esg-scores (map #(select-keys % [:ISIN :Ticker :msci-IVA_COMPANY_RATING :msci-ENVIRONMENTAL_PILLAR_SCORE :msci-SOCIAL_PILLAR_SCORE
                                                   :msci-GOVERNANCE_PILLAR_SCORE :msci-WEIGHTED_AVERAGE_SCORE :msci-UNGC_COMPLIANCE :msci-ESG_HEADLINE]) data-msci)
        first-merge-esg-score (map #(apply merge %) (vals (group-by :Ticker (concat data-msci-esg-scores data4-jasmine))))
        tickers-missing-from-jasmine (seq (clojure.set/difference (set (distinct (map :Ticker data-msci))) (set (distinct (map :Ticker data4-jasmine))))) ; tickers in msci but not in jasmine => adding off BM names excluded in Jamsine scope
        data-msci-filtered  (t/chainfilter {:Ticker  #(some #{%} tickers-missing-from-jasmine)} data-msci)
        data-msci-filtered-clean (map #(select-keys % [:msci-CARBON_EMISSIONS_SCOPE_1 :msci-CARBON_EMISSIONS_SCOPE_2 :msci-CARBON_EMISSIONS_SCOPE_3 :msci-CARBON_EMISSIONS_SCOPE_12
                                                       :msci-CARBON_EMISSIONS_YEAR :msci-CARBON_EMISSIONS_SOURCE :msci-CARBON_EMISSIONS_SCOPE_1_KEY :msci-CARBON_EMISSIONS_SCOPE_2_KEY
                                                       :msci-CARBON_EMISSIONS_SCOPE_3_CALCULATION_DATE :msci-CARBON_EMISSIONS_SCOPE_3_DOWN :msci-CARBON_EMISSIONS_SCOPE_3_UPSTREAM
                                                       :msci-CARBON_EMISSIONS_SCOPE_3_DOWNSTREAM_YEAR :msci-CARBON_EMISSIONS_SCOPE_3_UPSTREAM_YEAR :msci-IVA_COMPANY_RATING
                                                       :Ticker :Country :Sector :NAME :msci-ESG_HEADLINE]
                                                    ) data-msci-filtered)
        data-msci-filtered-ready  (map #(clojure.set/rename-keys % {:msci-CARBON_EMISSIONS_SCOPE_1              :amt_carbon_emissions_1
                                                                    :msci-CARBON_EMISSIONS_SCOPE_2              :amt_carbon_emissions_2
                                                                    :msci-CARBON_EMISSIONS_SCOPE_3              :amt_carbon_emissions_3
                                                                    :msci-CARBON_EMISSIONS_SCOPE_12             :amt_carbon_emissions_1_2
                                                                    :msci-CARBON_EMISSIONS_YEAR                 :cat_scope_1_year
                                                                    :msci-CARBON_EMISSIONS_SOURCE               :cat_scope_1_src
                                                                    :msci-CARBON_EMISSIONS_SCOPE_1_KEY          :cat_scope_1_method
                                                                    :msci-CARBON_EMISSIONS_SCOPE_2_KEY          :cat_scope_2_method
                                                                    :msci-CARBON_EMISSIONS_SCOPE_3_DOWN          :amt_carbon_emissions_3_down
                                                                    :msci-CARBON_EMISSIONS_SCOPE_3_UPSTREAM      :amt_carbon_emissions_3_up
                                                                    :Country :country
                                                                    :Sector    :sector
                                                                    :NAME :bond
                                                                    }
                                                                 ) data-msci-filtered-clean)
        final-data  (map #(apply merge %) (vals (group-by :Ticker (concat first-merge-esg-score data-msci-filtered-ready))))
        final-data-clean (for [sec final-data] (assoc sec :off-jasmine (if (some #(= (sec :Ticker) %) tickers-missing-from-jasmine) "No" "Yes") ;in msci data output but not in jasmine
                                                          :data-inconsistency (if (some #(= (sec :Ticker) %) list-check-diff) "Yes" "No") ;flag if different scope 1 emissions for same ticker but diff bonds
                                                          :held-name (if (some #(= (sec :Ticker) %) position-ticker-list) 1 0)
                                                          ))

        ]
  [v-box :gap "10px" :class "element" :width standard-box-width
   :children [[h-box :gap "10px" :align :center :children [[title :label "Data" :level :level1]
                                                           [gap :size "1"]
                                                           [md-circle-icon-button :md-icon-name "zmdi-camera" :tooltip "Open image in new tab" :tooltip-position :above-center :on-click (t/open-image-in-new-tab "esg-output-id")]
                                                           [md-circle-icon-button :md-icon-name "zmdi-image" :tooltip "Save table as image" :tooltip-position :above-center :on-click (t/save-image "esg-output-id")]
                                                           [md-circle-icon-button :md-icon-name "zmdi-filter-list" :tooltip "Download current view" :tooltip-position :above-center :on-click #(do (t/react-table-to-csv @esg-view "esg-output-view" (map name (keys (first final-data-clean))) ))]
                                                           [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download data" :tooltip-position :above-center :on-click #(t/csv-link final-data-clean "esg-output-data" (keys (first final-data-clean)))]
                                               ]]
              [h-box :align :center :gap "20px"
               :children [[checkbox :model (r/cursor esg-checkboxes [:funda]) :label "Show fundamentals?" :on-change #(swap! esg-checkboxes assoc-in [:funda] %)]
                          [checkbox :model (r/cursor esg-checkboxes [:score]) :label "Show MSCI scores?" :on-change #(swap! esg-checkboxes assoc-in [:score] %)]
                          [checkbox :model (r/cursor esg-checkboxes [:check]) :label "Show checks?" :on-change #(swap! esg-checkboxes assoc-in [:check] %)]
                          [checkbox :model (r/cursor esg-checkboxes [:scope1]) :label "Show scope 1?" :on-change #(swap! esg-checkboxes assoc-in [:scope1] %)]
                          [checkbox :model (r/cursor esg-checkboxes [:scope2]) :label "Show scope 2?" :on-change #(swap! esg-checkboxes assoc-in [:scope2] %)]
                          [checkbox :model (r/cursor esg-checkboxes [:scope3]) :label "Show scope 3?" :on-change #(swap! esg-checkboxes assoc-in [:scope3] %)]
                          ;[checkbox :model (r/cursor esg-checkboxes [:tree]) :label "Tree?" :on-change #(swap! esg-checkboxes assoc-in [:tree] %)]
                          [title :label "Pivot?" :level :level3]
                          [single-dropdown :width riskviews/dropdown-width :model (r/cursor esg-checkboxes [:tree]) :choices list-choices :on-change #(swap! esg-checkboxes assoc-in [:tree] %)]
                          [single-dropdown :width riskviews/dropdown-width-long :disabled? (if (= pivot "no") true false) :model (r/cursor esg-checkboxes [:field-chart]) :choices list-fields-chart :on-change #(swap! esg-checkboxes assoc-in [:field-chart] %)]
                          [button :label "Chart" :disabled? (if (= pivot "no") false false) :class "btn btn-primary btn-block" :on-click #(do (reset! esg-data-chart-data
                                                                                                                                                     (->> (js->clj (. (.getResolvedState @esg-view) -sortedData))
                                                                                                                                                          (map (fn [v] (select-keys v ["_pivotVal" @(r/cursor esg-checkboxes [:field-chart])])))))
                                                                                                                                             (reset! esg-data-chart-data-scatter
                                                                                                                                                     (->> (js->clj (. (.getResolvedState @esg-view) -sortedData))))
                                                                                                                                                     )
                           ]]]
              [title :level :level4 :label "Carbon data sourced from Jasmine (except for off-bm data, sourced from MSCI), MSCI scores directly from MSCI server - as of previous month end, refreshed mid month. Revenues expressed in millions. When the table is pivoted, top lines scores/intensity/revenues/EV/MktCap and footprint are medians, emissions are sums"]
              [:div {:id "esg-output-id"}
               [:> ReactTable
               {:data           final-data-clean :columns
                (concat [{:Header "Description" :columns [{:Header "Ticker" :accessor "Ticker" :width 80}
                                                          {:Header "Sector" :accessor "sector" :width 110}
                                                          {:Header "Country" :accessor "country" :width 70}
                                                          {:Header "Held?" :accessor "held-name" :width 70};{:Header "Isin" :accessor "isin" :width 100 } {:Header "BO id" :accessor "sec_id" :width 100} {:Header "Bond" :accessor "bond" :width 100}
                                                   ]}]
                        (if (:check @esg-checkboxes) [{:Header "Checks" :columns [{:Header "In Jasmine?" :accessor "off-jasmine" :width 100 :aggregate tables/empty-txt}
                                                                                  {:Header "Data Inconsistency" :accessor "data-inconsistency" :width 100 :aggregate tables/empty-txt}]}])
                        (if (:funda @esg-checkboxes) [{:Header "Fundamentals USD (millions)"
                                                       :columns [{:Header "EV" :accessor "amt_ev_usd" :aggregate tables/median :Cell tables/nb-thousand-cell-format :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                 {:Header "EVIC date" :accessor "dt_asofdate_evic" :width 100 :aggregate tables/empty-txt}
                                                                 {:Header "Mkt cap" :aggregate tables/median :accessor "amt_marketcap_usd" :Cell tables/nb-thousand-cell-format :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                 {:Header "Revenue Date" :accessor "dt_asofdate_revenue" :width 90 :aggregate tables/empty-txt}
                                                                 {:Header "Revenues"  :aggregate tables/median :accessor "amt_revenue_usd" :Cell tables/nb-thousand-cell-format :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                 ]}])
                        (if (:score @esg-checkboxes) [{:Header "MSCI scoring"
                                                       :columns [{:Header "Rating" :accessor "msci-IVA_COMPANY_RATING" :width 80 :style {:textAlign "center"} :aggregate tables/empty-txt}
                                                                 {:Header "E" :accessor "msci-ENVIRONMENTAL_PILLAR_SCORE" :aggregate tables/median :Cell tables/round1 :style {:textAlign "right"} :width 40 :filterMethod tables/nb-filter-OR-AND}
                                                                 {:Header "S" :accessor "msci-SOCIAL_PILLAR_SCORE" :aggregate tables/median :Cell tables/round1 :style {:textAlign "right"} :width 40 :filterMethod tables/nb-filter-OR-AND}
                                                                 {:Header "G" :accessor "msci-GOVERNANCE_PILLAR_SCORE" :aggregate tables/median :Cell tables/round1 :style {:textAlign "right"} :width 40 :filterMethod tables/nb-filter-OR-AND}
                                                                 {:Header "Final" :accessor "msci-WEIGHTED_AVERAGE_SCORE" :aggregate tables/median :Cell tables/round1 :style {:textAlign "right"} :width 40 :filterMethod tables/nb-filter-OR-AND}
                                                                 {:Header "UNGC" :accessor "msci-UNGC_COMPLIANCE" :style {:textAlign "center"} :width 80 :aggregate tables/empty-txt}
                                                                 {:Header "Note" :accessor "msci-ESG_HEADLINE" :style {:textAlign "center"} :width 150 :aggregate tables/empty-txt}]}])
                        (if (:scope1 @esg-checkboxes) [{:Header "Scope 1"
                                                        :columns [{:Header "Year" :accessor "cat_scope_1_year" :width 80 :style {:textAlign "center"} :aggregate tables/empty-txt}
                                                                  {:Header "Method" :accessor "cat_scope_1_method" :width 150 :aggregate tables/empty-txt}
                                                                  {:Header "Source" :accessor "cat_scope_1_src" :width 80 :aggregate tables/empty-txt}
                                                                  {:Header "Intensity" :accessor "amt_carbon_intensity_1" :aggregate tables/median :width 80 :Cell tables/nb-thousand-cell-format :style {:textAlign "right"}} ; if is tree
                                                                  {:Header "Emissions" :accessor "amt_carbon_emissions_1" :aggregate tables/sum-rows-not-nil :Cell tables/nb-thousand-cell-format :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND} ;:aggregate tables/sum-rows-not-nil
                                                                  {:Header "Footprint" :accessor "emissions_evic_1" :aggregate tables/median :Cell tables/round0*1000000 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}]}
                                                       ])
                        (if (:scope2 @esg-checkboxes) [{:Header "Scope 2"
                                                        :columns [{:Header "Year"   :accessor "cat_scope_2_year" :width 80 :style {:textAlign "center"} :aggregate tables/empty-txt}
                                                                  {:Header "Method" :accessor "cat_scope_2_method" :width 150 :aggregate tables/empty-txt}
                                                                  {:Header "Source" :accessor "cat_scope_2_src" :width 80 :aggregate tables/empty-txt}
                                                                  {:Header "Intensity" :accessor "amt_carbon_intensity_2" :aggregate tables/median :width 80 :Cell tables/nb-thousand-cell-format :style {:textAlign "right"}}
                                                                  {:Header "Emissions" :accessor "amt_carbon_emissions_2" :aggregate tables/sum-rows-not-nil :Cell tables/nb-thousand-cell-format :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                  {:Header "Footprint" :accessor "emissions_evic_2" :aggregate tables/median :Cell tables/round0*1000000 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}]}
                                                       {:Header "Scope 1-2"
                                                        :columns [{:Header "Revenue date" :accessor "dt_revenue_scope12" :width 90 :style {:textAlign "center"} :aggregate tables/empty-txt}
                                                                  {:Header "Revenues" :accessor "amt_revenue_scope12" :aggregate tables/median :Cell tables/nb-thousand-cell-format :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                  {:Header "Intensity" :accessor "amt_carbon_intensity_1_2" :aggregate tables/median :width 80 :Cell tables/nb-thousand-cell-format :style {:textAlign "right"}}
                                                                  {:Header "Emissions" :accessor "amt_carbon_emissions_1_2" :aggregate tables/sum-rows-not-nil :Cell tables/nb-thousand-cell-format :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                  {:Header "Footprint" :accessor "emissions_evic_1_2" :aggregate tables/median :Cell tables/round0*1000000 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}]}])
                        (if (:scope3 @esg-checkboxes) [{:Header "Scope 3 up"
                                                        :columns [{:Header "Revenue date" :accessor "dt_revenue_scope3_up" :width 90 :style {:textAlign "center"}  :aggregate tables/empty-txt}
                                                                  {:Header "Revenues" :accessor "amt_revenue_scope3_up" :aggregate tables/median :Cell tables/nb-thousand-cell-format :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                  {:Header "Method" :accessor "cat_scope_3_up_method" :width 150 :aggregate tables/empty-txt}
                                                                  {:Header "Source" :accessor "cat_scope_3_down_src" :width 80 :aggregate tables/empty-txt}
                                                                  {:Header "Emissions" :accessor "amt_carbon_emissions_3_up" :aggregate tables/sum-rows-not-nil :Cell tables/nb-thousand-cell-format :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                  {:Header "Footprint" :accessor "emissions_evic_3_up" :aggregate tables/median :Cell tables/round0*1000000 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}  ]}
                                                       {:Header "Scope 3 down"
                                                        :columns [{:Header "Revenue date" :accessor "dt_revenue_scope3_down" :width 90 :style {:textAlign "center"} :aggregate tables/empty-txt}
                                                                  {:Header "Revenues" :accessor "amt_revenue_scope3_down" :aggregate tables/median :Cell tables/nb-thousand-cell-format :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                  {:Header "Method" :accessor "cat_scope_3_down_method" :width 150 :aggregate tables/empty-txt}
                                                                  {:Header "Source" :accessor "cat_scope_3_down_src" :width 80 :aggregate tables/empty-txt}
                                                                  {:Header "Emissions" :accessor "amt_carbon_emissions_3_down" :aggregate tables/sum-rows-not-nil :Cell tables/nb-thousand-cell-format :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                                  {:Header "Footprint" :accessor "emissions_evic_3_down" :aggregate tables/median :Cell tables/round0*1000000 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}]}])
                  )
                :pivotBy (if (= pivot "no") [] [(keyword pivot)]) ;(mapv :accessor (into [] (for [r (remove nil? (conj :sector :name))] (tables/esg-table-columns r))))
                :showPagination true :sortable true :filterable true
                :defaultSorted [{:id :Ticker :desc false}] :pageSize 10
                :ref  #(reset! esg-view %)
                :defaultFilterMethod tables/text-filter-OR :className      "-striped -highlight"}]
               [gap :size "1"]
               [v-box :gap "30px" :align :stretch :children
                [[title :label "Visualisation" :level :level1]
                 [checkbox :model @show-tickers :label "Show tickers?" :on-change #(reset! show-tickers %)]
                 [oz/vega-lite (charting/scatter-esg @esg-data-chart-data-scatter pivot @show-tickers)]
                 (if (= pivot "no") nil [oz/vega-lite (charting/stacked-vertical-bars-esg @esg-data-chart-data  @(r/cursor esg-checkboxes [:tree]) @(r/cursor esg-checkboxes [:field-chart]) pivot)])
                 ]
               ]]]]))

(rf/reg-event-fx
  :esg/get-tamale-body
  (fn [{:keys [db]} [_ note-id]]
    {:db (assoc db :esg/tamale-body "")
     :http-get-dispatch {:url (str "https://ldprdnexdc1:6400/v1/notes/" note-id "/body") :dispatch-key [:esg/tamale-body]}}))

(def tamale-analysts ["Tammy LLoyd"                         ;two capital L
                      "Stacy Xie"
                      "Kevan Salisbury"
                      "Rahul Bhat"
                      "Alan Siow"
                      "Alexandre Almosni"
                      "Antonio Luiz Gomes"
                      "Victoria Harling"
                      "Adrian Chan"
                      "Matt Christ"
                      "Florian Cadet"
                      "Tom Peberdy"
                      "Niel Botha"])

(rf/reg-event-fx
  :esg/get-engagements
  (fn [{:keys [db]} [_ yyyy-mm-dd-start-date yyyy-mm-dd-end-date]]
    {:db (assoc db :esg/engagement-throbber true :esg/engagements [])
     :http-post-dispatch
     [{:url          "https://ldprdnexdc1:6400/v1/notes"
       :json-params  {:filters
                      {:note_type ["ESG_ENGAGEMENT_NOTE"]
                       :dates     {:start_date yyyy-mm-dd-start-date, :end_date yyyy-mm-dd-end-date}
                       :submitter tamale-analysts}
                      :body_verbose false}
       :dispatch-key [:esg/receive-engagements]}
      {:url          "https://ldprdnexdc1:6400/v1/notes"
       :json-params  {:filters
                      {:note_type ["SECURITY_RESEARCH_INVESTMENT_REPORT"]
                       :tags ["All ESG Categories" "Governance (ESG Category)" "Social (ESG Category)" "Environmental (ESG Category)"]
                       :dates     {:start_date yyyy-mm-dd-start-date, :end_date yyyy-mm-dd-end-date}
                       :submitter tamale-analysts}
                      :body_verbose false}
       :dispatch-key [:esg/receive-security-notes]}]}))

(rf/reg-event-db
  :esg/receive-security-notes
  (fn [db [_ data]] (assoc db :esg/engagement-throbber false :esg/security-notes data)))

(rf/reg-event-db
  :esg/receive-engagements
  (fn [db [_ data]] (assoc db :esg/engagements data)))                                                ;:esg/engagement-throbber false NO POINT TOO QUICK

(def show-modal-engagement (r/atom nil))

(defn modal-engagements []
  (if @show-modal-engagement
    [modal-panel
     :wrap-nicely? true
     :backdrop-on-click #(reset! show-modal-engagement nil)
     :child [v-box :height "800px" :width "1280px"
             :children [[h-box :align :center :children [[title :label "Full note" :level :level1] [gap :size "1"]  [md-circle-icon-button :md-icon-name "zmdi-close" :on-click #(reset! show-modal-engagement nil)]]]
                        [scroller :v-scroll :on :height "700px" :child [box :child [:div {:dangerouslySetInnerHTML {:__html @(rf/subscribe [:esg/tamale-body])}}]]]]]]))                                    ;


(defn esg-engagements []
  (let [start-date (r/atom (tools/int->gdate 20220101)) end-date (r/atom (today))
        table-columns [{:Header "Date" :accessor "date" :width 100}
                       {:Header "note_id" :accessor "note_id" :width 100 :show false}
                       {:Header "Entity" :accessor "entities" :width 150 :style {:whiteSpace "unset"} :Cell #(if-let [v %] (gobj/getValueByKeys v "original" "entities" 0 "name"))}
                       {:Header "Title" :accessor "title" :width 200 :style {:whiteSpace "unset"}}
                       {:Header "Purpose" :accessor "attributes" :width 200 :style {:whiteSpace "unset"} :Cell #(if-let [v %] (gobj/getValueByKeys v "original" "attributes" "purpose"))}
                       {:Header "Outcome" :accessor "attributes" :width 700 :style {:whiteSpace "unset"} :Cell #(if-let [v %] (gobj/getValueByKeys v "original" "attributes" "outcome"))}
                       {:Header "Full note" :accessor "body" :width 75 :Cell #(if-let [v %] (r/as-element [button :label "Open" :on-click (fn [] (rf/dispatch [:esg/get-tamale-body (gobj/getValueByKeys v "original" "note_id")]) (reset! show-modal-engagement true))]))}
                       {:Header "Attachments" :accessor "links" :width 100 :Cell #(if-let [v %] (r/as-element [v-box :children (into [] (for [line (gobj/getValueByKeys v "original" "links") :when (= (gobj/get line "type") "attachment")] [hyperlink-href :label "Download" :href (str "https://ldprdnexdc1:6400" (gobj/get line "link")) :target "_blank"]))]))}]]
    (fn []
      [v-box :gap "20px" :class "element" :width standard-box-width
       :children [[h-box :align :center :children [[title :label "ESG interactions" :level :level1]]]
                  [h-box :align :center :gap "10px" :children [[title :label "Start:" :level :level3]
                                                               [datepicker-dropdown
                                                                :model start-date :minimum (tools/int->gdate 20180101) :maximum (today) :format "dd/MM/yyyy" :show-today? true
                                                                :on-change #(do (rf/dispatch [:esg/engagements []]) (reset! start-date %))]
                                                               [gap :size "20px"]
                                                               [title :label "End:" :level :level3]
                                                               [datepicker-dropdown
                                                                :model end-date :minimum (tools/int->gdate 20180101) :maximum (today) :format "dd/MM/yyyy" :show-today? true
                                                                :on-change #(do (rf/dispatch [:esg/engagements []]) (reset! end-date %))]
                                                               [gap :size "20px"]
                                                               [button :label "Fetch" :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:esg/get-engagements (t/gdate->yyyy-MM-dd @start-date) (t/gdate->yyyy-MM-dd @end-date)])]]]
                  (if @(rf/subscribe [:esg/engagement-throbber])
                    [throbber :size :large]
                    [v-box :gap "10px" :children [[title :label "Engagements" :level :level2]
                                                  (let [data (if-let [data (:results @(rf/subscribe [:esg/engagements]))] data [])]
                                                    [:> ReactTable
                                                     {:data (sort-by :date data) :columns table-columns
                                                      :showPagination false :sortable true :filterable false :pageSize (count data) :className "-striped -highlight"}])
                                                  [title :label "Investment notes with ESG content" :level :level2]
                                                  [:> ReactTable
                                                   {:data (sort-by :date (:results @(rf/subscribe [:esg/security-notes]))) :columns table-columns
                                                    :showPagination true :sortable true :filterable false :defaultPageSize 20 :className "-striped -highlight"}]]])]])))


(defn ungc-table []
  (let [data @(rf/subscribe [:esg/ungc-problem-securities])
        header-style {:overflow nil :white-space "pre-line" :word-wrap "break-word"}]
    (when (zero? (count data)) (rf/dispatch [:get-ungc-problem-securities]))
    [v-box :gap "20px" :class "element" :width standard-box-width
     :children [
                [h-box :align :center :children [[title :label "UNGC problem securities" :level :level1]
                                                 [gap :size "1"]
                                                 [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link (sort-by :Ticker data) "msci"  msci-cols "\t")]]]
                [:> ReactTable
                 {:data                (map #(update % :danger (fn [d] (if d 1 0))) data)
                  :columns             [
                                        {:Header  "Description" :headerStyle header-style
                                         :columns [{:Header "Bond" :accessor "Bond" :width 100}
                                                   {:Header "Ticker" :accessor "Ticker" :width 100}
                                                   {:Header "Country" :accessor "Country" :width 55}
                                                   {:Header "Sector" :accessor "Sector" :width 120}
                                                   {:Header "Held?" :accessor "n91held" :width 65 :style {:textAlign "center"} :filterable true :filterMethod tables/nb-filter-OR-AND :show true}
                                                   {:Header "Danger?" :accessor "danger" :width 65 :style {:textAlign "center"} :filterable true :filterMethod tables/nb-filter-OR-AND :show true}]}
                                        {:Header  "MSCI" :headerStyle header-style
                                         :columns [{:Header "UNGC compliance" :headerStyle header-style :accessor "UNGC_COMPLIANCE" :style {:textAlign "center"} :width 90}]}
                                        {:Header  "Reprisk" :headerStyle header-style
                                         :columns [{:Header "P1 human rights" :headerStyle header-style :accessor "principle_1_human_rights" :width 90 :style {:textAlign "center"}}
                                                   {:Header "P2 human rights" :headerStyle header-style :accessor "principle_2_human_rights" :width 90 :style {:textAlign "center"}}
                                                   {:Header "P3 labour" :headerStyle header-style :accessor "principle_3_labour" :width 90 :style {:textAlign "center"}}
                                                   {:Header "P4 labour" :headerStyle header-style :accessor "principle_4_labour" :width 90 :style {:textAlign "center"}}
                                                   {:Header "P5 labour" :headerStyle header-style :accessor "principle_5_labour" :width 90 :style {:textAlign "center"}}
                                                   {:Header "P6 labour" :headerStyle header-style :accessor "principle_6_labour" :width 90 :style {:textAlign "center"}}
                                                   {:Header "P7 environment" :headerStyle header-style :accessor "principle_7_environment" :width 90 :style {:textAlign "center"}}
                                                   {:Header "P8 environment" :headerStyle header-style :accessor "principle_8_environment" :width 90 :style {:textAlign "center"}}
                                                   {:Header "P9 environment" :headerStyle header-style :accessor "principle_9_environment" :width 90 :style {:textAlign "center"}}
                                                   {:Header "P10 anti corruption" :headerStyle header-style :accessor "principle_10_anti_corruption" :width 90 :style {:textAlign "center"}}
                                                   ]}

                                        ]
                  :pageSize            20
                  :showPagination      true
                  :defaultSorted       [{:id :Ticker :desc false}]
                  :filterable          true
                  :defaultFilterMethod tables/text-filter-OR
                  :className           "-striped -highlight"}]]]))


(defn esg-commentary-table []
  (let [data @(rf/subscribe [:esg/analyst-commentary])]
    (when (zero? (count data)) (rf/dispatch [:get-esg-analyst-commentary]))
    (gt/element-box-with-cols "ESG-analyst-commentary" "100%" "ESG analyst commentary" data
                              [[:> ReactTable
                                {:data                (if-not (string? data) data [])
                                 :columns             [{:Header "Name" :accessor "Issuer" :width 100}
                                                       {:Header "Ticker" :accessor "TICKER" :width 100}
                                                       {:Header "Sector" :accessor "Sector" :width 100}
                                                       {:Header "Reason for inclusion" :accessor "Reason_for_inclusion_as_a_potential_ESG_risk" :width 150 :style {:whiteSpace "unset"}}
                                                       {:Header "Date" :accessor "Comment_Date" :width 75}
                                                       {:Header "Comment" :accessor "COMMENT" :width 768 :style {:whiteSpace "break-spaces"}
                                                        :Cell   (fn [a] (gstring/unescapeEntities (aget a "value")))}] ;(fn [a] (r/as-element [:div {:dangerouslySetInnerHTML {:__html (aget a "value")}}]))
                                 :defaultPageSize 20 :showPagination true :filterable true :defaultFilterMethod tables/text-filter-OR :className "-striped -highlight"}]]
                              (keys (first data))
                              )))

(defn active-home []
  (let [active-esg @(rf/subscribe [:esg/active-home])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    ;(set! (. js/document -title) "ESG")
    [box :padding "80px 20px" :class "rightelement"
     :child (case active-esg
              ;:msci [msci-table]
              :esg-data [esg-data]
              :ungc [ungc-table]
              :esg-commentary [esg-commentary-table]
              :refinitiv [v-box :gap "20px" :class "body" :children [[refinitiv-find-issuers] [refinitiv-table-top-view] [refinitiv-table-detailed-view]]]
              :gb-scoring [esgreport/green-bond-scoring-display]
              :tf-scoring [esgreport/transition-fund-scoring-display]
              :reporting [esgreport/reporting-display]
              :holdings [holdings]
              :esg-scores [esg-scores]
              :esg-report-analytics-gb [esgreport/esg-report-analytics-gb]
              :esg-report-analytics-tf [esgreport/esg-report-analytics-tf]
              :esg-engagements [esg-engagements]
              [:div.output "nothing to display"])]))

(defn gb-calculator-summary []
  [h-box :gap "10px" :padding "0px" :children [(gt/left-nav-bar static/esg-navigation :esg/active-home) [active-home] [modal-engagements]]])
