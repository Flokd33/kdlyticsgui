(ns jasminegui.esg
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink typeahead md-circle-icon-button selection-list
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
    [reagent.core :as r]
    [jasminegui.tools :as tools]
    [jasminegui.riskviews :as riskviews]
    [jasminegui.tools :as t]))

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
    ;(println (str static/server-address "refinitiv-data?companies=" (clojure.string/join "," (map :id (db :esg/selected-companies))) "&detail="detail))
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

(defn nav-esg-bar []
  (let [active-esg @(rf/subscribe [:esg/active-home])]
    [h-box
     :children [[v-box
                 :gap "20px" :class "leftnavbar"
                 :children (into []
                                 (for [item static/esg-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-esg (:code item))) " active"))
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:esg/active-home (:code item)])]))]]]))

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
                          "ESG_HEADLINE"])

(def msci-cols (concat [:Ticker :Country :Sector :Equity :ISIN :ID_ISIN :NAME] (map #(keyword (str "msci-" %)) server-msci-metrics)))

(defn msci-table []
  (let [data @(rf/subscribe [:esg/msci-scores])
        header-style {:overflow nil :white-space "pre-line" :word-wrap "break-word"}]
    [v-box :gap "20px" :class "element" :width standard-box-width
     :children [
                [h-box :align :center :children [[title :label "MSCI scores for quant universe" :level :level1]
                                                 [gap :size "1"]
                                                 [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link (sort-by :Ticker data) "msci"  msci-cols "\t")]]]
                [:> ReactTable
                 {:data                data
                  :columns             [
                                        {:Header  "Description" :headerStyle header-style
                                         :columns [{:Header "Ticker" :accessor "Ticker" :width 80} {:Header "Country" :accessor "Country" :width 55} {:Header "Sector" :accessor "Sector" :width 80}]}
                                        {:Header  "Symbology" :headerStyle header-style
                                         :columns [{:Header "Bond ISIN" :accessor "ISIN" :width 100} {:Header "Equity" :accessor "Equity" :width 80} {:Header "Equity ISIN" :accessor "ID_ISIN" :width 100} {:Header "Name" :accessor "NAME" :width 180}]}
                                        {:Header  "MSCI scoring" :headerStyle header-style
                                         :columns [{:Header "Rating" :accessor "msci-IVA_COMPANY_RATING" :width 50 :style {:textAlign "center"}}
                                                   {:Header "E" :accessor "msci-ENVIRONMENTAL_PILLAR_SCORE" :Cell tables/round1 :style {:textAlign "right"} :width 35 :filterMethod tables/nb-filter-OR-AND}
                                                   {:Header "S" :accessor "msci-SOCIAL_PILLAR_SCORE" :Cell tables/round1 :style {:textAlign "right"} :width 35 :filterMethod tables/nb-filter-OR-AND}
                                                   {:Header "G" :accessor "msci-GOVERNANCE_PILLAR_SCORE" :Cell tables/round1 :style {:textAlign "right"} :width 35 :filterMethod tables/nb-filter-OR-AND}
                                                   {:Header "Final" :accessor "msci-WEIGHTED_AVERAGE_SCORE" :Cell tables/round1 :style {:textAlign "right"} :width 40 :filterMethod tables/nb-filter-OR-AND}]}
                                        {:Header  "MSCI carbon emissions" :headerStyle header-style
                                         :columns [{:Header "Scope 1" :accessor "msci-CARBON_EMISSIONS_SCOPE_1" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                   {:Header "Scope 2" :accessor "msci-CARBON_EMISSIONS_SCOPE_2" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                   {:Header "Scope 1+2" :accessor "msci-CARBON_EMISSIONS_SCOPE_12" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                   {:Header "1+2 int" :accessor "msci-CARBON_EMISSIONS_SCOPE_12_INTEN" :Cell tables/round1 :style {:textAlign "right"} :width 80 :filterMethod tables/nb-filter-OR-AND}
                                                   {:Header "1+2 key" :accessor "msci-CARBON_EMISSIONS_SCOPE_12_KEY" :width 150 :filterMethod tables/nb-filter-OR-AND}
                                                   {:Header "Scope 3" :accessor "msci-CARBON_EMISSIONS_SCOPE_3" :Cell tables/nfcell2 :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                   {:Header "Year" :accessor "msci-CARBON_EMISSIONS_YEAR" :style {:textAlign "right"} :width 90 :filterMethod tables/nb-filter-OR-AND}
                                                   {:Header "Source" :accessor "msci-CARBON_EMISSIONS_SOURCE" :width 90 :filterMethod tables/nb-filter-OR-AND}]}
                                        {:Header  "MSCI comment" :headerStyle header-style
                                         :columns [{:Header "" :accessor "msci-ESG_HEADLINE" :width 500}]}
                                        ]
                  :pageSize            20
                  :showPagination      true
                  :defaultSorted       [{:id :Ticker :desc false}]
                  :filterable          true
                  :defaultFilterMethod tables/text-filter-OR
                  :className           "-striped -highlight"}]

                ]]

    )

  )


(rf/reg-sub
  :esg-risk/multiple-tree
  (fn [db]
    (let [kselected-portfolios (remove #(some #{%} (map keyword ["OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE" "OGEMHCD" "IUSSEMD"])) (map keyword (:portfolios db)))
          display-key-one :nav
          grouping-columns (into [] (for [r [:name :issuer :sector :msci-rating]] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (riskviews/get-pivoted-data (:positions db) (:portfolios db) (:all-instrument-ids db) (keyword (get-in tables/risk-table-columns [display-key-one :accessor])))
          thfil (fn [line] (not (every? zero? (map line kselected-portfolios))))
          pivoted-data-hide-zero (filter thfil pivoted-data)]
      (riskviews/add-total-line-to-pivot (sort-by (apply juxt (concat [(comp riskviews/first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-hide-zero) (map keyword (:portfolios db))))))

(defn holdings []
  (let [a 3]
    [v-box :gap "20px" :class "element" :width standard-box-width
     :children [[title :level :level2 :label "MSCI NAV across portfolios"]
                (let [cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (not (some #{p} ["OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE" "OGEMHCD" "IUSSEMD"]))]
                                      {:Header p :accessor (name p) :width "100px" :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2*100-if-not0}))]
                  [:> ReactTable
                   {:data                @(rf/subscribe [:esg-risk/multiple-tree])
                    :columns             (concat (mapv tables/risk-table-columns [:msci-rating :issuer]) cols)
                    :showPagination      false :sortable true :filterable false :pageSize (inc (count (distinct (map :msci-rating @(rf/subscribe [:esg-risk/multiple-tree])))))
                    :showPageSizeOptions false :className "-striped -highlight" :pivotBy [:msci-rating :TICKER] :defaultSorted [{:id :msci-rating :desc true}]
                    }]

                  )]]))

(defn active-home []
  (let [active-esg @(rf/subscribe [:esg/active-home])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    [box :padding "80px 20px" :class "rightelement"
     :child (case active-esg
              :msci [msci-table]
              :refinitiv [v-box :gap "20px" :class "body" :children [[refinitiv-find-issuers] [refinitiv-table-top-view] [refinitiv-table-detailed-view]]]
              :holdings [holdings]
              [:div.output "nothing to display"])]))



(defn esg-view []
  [h-box :gap "10px" :padding "0px" :children [[nav-esg-bar] [active-home]]])

