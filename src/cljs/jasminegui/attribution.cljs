(ns jasminegui.attribution
  (:require
    [re-frame.core :as rf]
    [reagent.core :as r]
    ;[hiccup.core :as hi]
    [goog.string :as gstring]
    [goog.string.format]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    ["react-table-v6" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]
    [jasminegui.tools :as tools]
    [jasminegui.tools :as t]
    [jasminegui.tables :as tables]
    [jasminegui.guitools :as gt]
    [oz.core :as oz]
    [jasminegui.charting :as charting]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [reagent-contextmenu.menu :as rcm])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )

(def max-width "1675px")


(defn on-click-context-dummy [state rowInfo instance] #js {})

(defn period-choices []
  (concat static/attribution-period-choices
          (into [] (for [m @(rf/subscribe [:attribution/available-months])] {:id m :label m}))
          (into [] (for [m @(rf/subscribe [:attribution/available-months])] {:id (str "YTD-" m) :label (str "YTD-" m)}))
          ;(into [] (for [m ["20171231" "20181231" "20191231"]] {:id (str "YTD-" m) :label (str "YTD-" m)}))
          (into [] (for [y (range 2021 2017 -1)] (let [k (str "FY" y)] {:id k :label k})))))

(def dropdown-width "150px")

(def single-portfolio-attribution-display-view (atom nil))
(def multiple-portfolio-attribution-display-view (atom nil))

(defn single-portfolio-attribution-display []
  (let [is-tree (= @(rf/subscribe [:single-portfolio-attribution/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:single-portfolio-attribution/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :security))] (tables/attribution-table-columns r)))
        additional-des-cols (remove (set (conj risk-choices "None")) (map :id static/attribution-choice-map))]
    ;(println (last @(rf/subscribe [:single-portfolio-attribution/clean-table])) )
    [:div {:id "single-portfolio-attribution-table"}
     [tables/tree-table-risk-table
      :single-portfolio-attribution/clean-table
      [{:Header "Groups" :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
       {:Header "Return" :columns (mapv tables/attribution-table-columns [:index-return :fund-return])} ; do median at grouping level
       {:Header "Effect" :columns (mapv tables/attribution-table-columns [:total-effect])}
       {:Header "Contribution" :columns (mapv tables/attribution-table-columns [:contribution :bm-contribution])}
       {:Header "Weight" :columns (mapv tables/attribution-table-columns [:xs-weight :weight :bm-weight])}
       {:Header "Additional information" :columns (mapv tables/attribution-table-columns (concat additional-des-cols [:code :rating]))}]
      is-tree
      (mapv :accessor grouping-columns)
      single-portfolio-attribution-display-view
      :single-portfolio-attribution/table-filter
      :single-portfolio-attribution/expander
      on-click-context-dummy]]))


(defn multiple-portfolio-attribution-display []
  (let [display-key-one @(rf/subscribe [:multiple-portfolio-attribution/field-one])
        is-tree (= @(rf/subscribe [:multiple-portfolio-attribution/display-style]) "Tree")
        attribution-choices (let [rfil @(rf/subscribe [:multiple-portfolio-attribution/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj attribution-choices :security))] (tables/attribution-table-columns r)))
        cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (some #{p} @(rf/subscribe [:multiple-portfolio-attribution/selected-portfolios]))]
                        (tables/nb-col p p 80 (get-in tables/attribution-table-columns [display-key-one :Cell]) tables/sum-rows)))]
    [:div {:id "multiple-portfolio-attribution-table"}
    [tables/tree-table-risk-table
     :multiple-portfolio-attribution/clean-table
     [{:Header "Groups" :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
      {:Header (str "Portfolio " (name display-key-one)) :columns cols }
      {:Header "Description" :columns (mapv tables/attribution-table-columns [:code :rating])}]
     is-tree
     (mapv :accessor grouping-columns)
     multiple-portfolio-attribution-display-view
     :multiple-portfolio-attribution/table-filter
     :multiple-portfolio-attribution/expander
     on-click-context-dummy]]))




(defn single-portfolio-attribution-controller []
  (let [display-style (rf/subscribe [:single-portfolio-attribution/display-style])
        is-tree (= @(rf/subscribe [:single-portfolio-attribution/display-style]) "Tree")
        portfolio (rf/subscribe [:single-portfolio-attribution/portfolio])
        period (rf/subscribe [:single-portfolio-attribution/period])
        download-columns ["Security" "Code" "Issuer" "Sector" "Region" "Country" "Duration-Bucket" "Total-Effect" "Fund-Contribution" "Index-Contribution" "Average-Fund-Weight" "Average-Index-Weight" "Average-Excess-Weight"]
        ]
    (when (and (= @portfolio "OGEMCORD") (= @period "ytd") (zero? (count @(rf/subscribe [:single-portfolio-attribution/table]))))
      (rf/dispatch [:get-single-attribution "OGEMCORD" "ytd"]))
    [box :class "subbody rightelement" :child
     (gt/element-box-generic "single-portfolio-attribution" max-width (str "Attribution drill-down " @(rf/subscribe [:attribution-date]))
                             {:target-id "single-portfolio-attribution-table" :on-click-action #(tools/react-table-to-csv @single-portfolio-attribution-display-view @portfolio download-columns is-tree)
                              :shortcuts :single-portfolio-attribution/shortcut}
                             [[h-box :gap "50px"
                               :children [[v-box :gap "15px"
                                           :children [[h-box :gap "10px"
                                                       :children [[title :label "Display type:" :level :level3] [gap :size "1"]
                                                                  [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices
                                                                   :on-change #(rf/dispatch [:single-portfolio-attribution/display-style %])]]]
                                                      [h-box :gap "10px"
                                                       :children [[title :label "Period:" :level :level3] [gap :size "1"]
                                                                  [single-dropdown :width dropdown-width :model period :choices (period-choices)
                                                                   :on-change #(rf/dispatch [:change-single-attribution-period %])]]]]]
                                          [v-box :gap "10px" :children [[h-box :gap "10px" :children
                                                                         [[title :label "Filtering:" :level :level3]
                                                                          (gt/portfolio-dropdown-selector :single-portfolio-attribution/portfolio :change-single-attribution-portfolio)
                                                                          (gt/filtering-row :single-portfolio-attribution/filter)]]]]]]
                              [single-portfolio-attribution-display]])]))

(defn multiple-portfolio-attribution-controller []
  (let [display-style (rf/subscribe [:multiple-portfolio-attribution/display-style])
        is-tree (= @(rf/subscribe [:multiple-portfolio-attribution/display-style]) "Tree")
        portfolios @(rf/subscribe [:portfolios])
        selected-portfolios (rf/subscribe [:multiple-portfolio-attribution/selected-portfolios])
        field-one (rf/subscribe [:multiple-portfolio-attribution/field-one])
        period (rf/subscribe [:multiple-portfolio-attribution/period])
        download-columns (concat ["Security" "Code" "Issuer" "Region" "Country" "Rating" "Duration-Bucket"] (filter @selected-portfolios portfolios))
        toggle-portfolios (fn [seqp] (let [setseqp (set seqp)] (if (clojure.set/subset? setseqp @selected-portfolios) (clojure.set/difference @selected-portfolios setseqp) (clojure.set/union @selected-portfolios setseqp))))
        threshold-att (rf/subscribe [:multiple-portfolio-attribution/threshold])]
    ;(println (period-choices))
    (when (and (= @(rf/subscribe [:multiple-portfolio-attribution/field-one]) :total-effect)
               (= @(rf/subscribe [:multiple-portfolio-attribution/period]) "ytd")
               (zero? (count @(rf/subscribe [:multiple-portfolio-attribution/table]))))
      (rf/dispatch [:get-multiple-attribution "Total Effect" "ytd"]))
    [box :class "subbody rightelement" :child
     (gt/element-box-generic "multiple-portfolio-attribution" max-width (str "Attribution drill-down " @(rf/subscribe [:attribution-date]))
                             {:target-id "multiple-portfolio-attribution-table" :on-click-action #(tools/react-table-to-csv @multiple-portfolio-attribution-display-view "attribution_multiple_portfolio" download-columns is-tree)
                              :shortcuts :multiple-portfolio-attribution/shortcut}
                  [[h-box :gap "20px"
                    :children [[h-box :gap "5px" :children [[title :label "Display type:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(rf/dispatch [:multiple-portfolio-attribution/display-style %])]]]
                               [h-box :gap "5px" :children [[title :label "Period:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model period :choices (period-choices) :on-change #(rf/dispatch [:change-multiple-attribution-period %])]]]
                               [h-box :gap "5px" :children [[title :label "Field:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model field-one :choices static/attribution-field-choices :on-change #(rf/dispatch [:change-multiple-attribution-target %])]]]
                               [h-box :gap "5px" :children [[title :label "Threshold (bps):" :level :level3] [info-button :info "Note: the filtering is made at bond level, not at issuer level." :position :below-center]
                                                            [single-dropdown :width "75px" :model threshold-att :choices static/threshold-choices-attribution :on-change #(rf/dispatch [:multiple-portfolio-attribution/threshold %])]]]
                               [title :label "Filtering:" :level :level3] (gt/filtering-row :multiple-portfolio-attribution/filter)]] ;(filtering-row :multiple-portfolio-attribution/filter)
                 [h-box :gap "5px" :children
                  (into [[title :label "Portfolios:" :level :level3]
                         [gap :size "20px"]
                         [v-box :gap "2px" :children [[button :style {:width "75px"} :label "All" :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios (set portfolios)])]
                                                      [button :style {:width "75px"} :label "None" :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios #{}])]]]]
                        (for [line static/portfolio-alignment-groups]
                          (let [possible-portfolios (:portfolios (first (filter (fn [x] (= (:id x) (:id line))) static/portfolio-alignment-groups)))]
                            [v-box :gap "2px" :children
                             [[button :style {:width "125px"} :label (:label line) :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios (toggle-portfolios possible-portfolios)])]
                              [selection-list :width "125px" :model selected-portfolios :choices (into [] (for [p possible-portfolios] {:id p :label p})) :on-change #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios %])]]])))]
                 [multiple-portfolio-attribution-display]])]))


(defn go-to-attribution-risk [state rowInfo instance] (clj->js {:onClick #(do (rf/dispatch-sync [:navigation/active-attribution :single-portfolio]) (rf/dispatch [:change-single-attribution-portfolio (aget rowInfo "row" "portfolio")])) :style {:cursor "pointer"}}))

(defn summary-display []
  ;note wtd in files is actually weekly!!
  (let [fmt {:width 90 :Cell #(tables/nb-cell-format "%.2f%" 1. %) :getProps tables/red-negatives} ;tables/round2colpct
        timeframes [["Year to date" "ytd"] ["Month to date" "mtd"] ["Weekly" "wtd"] ["Daily" "day"]]
        targets [["Fund" "-Fund-Contribution"] ["Benchmark" "-Index-Contribution"] ["Relative" "-Total-Effect"]]
        download-columns [:portfolio :ytd-Fund-Contribution :ytd-Index-Contribution :ytd-Total-Effect :mtd-Fund-Contribution :mtd-Index-Contribution :mtd-Total-Effect :wtd-Index-Contribution :wtd-Fund-Contribution :wtd-Total-Effect :day-Fund-Contribution :day-Index-Contribution :day-Total-Effect]
        ]
  [box :class "subbody rightelement" :child
   (gt/element-box-with-cols "performance-summary" "100%" (str "Summary " @(rf/subscribe [:attribution-date])) @(rf/subscribe [:attribution/summary])
      [[:> ReactTable
                {:data           @(rf/subscribe [:attribution/summary])
                 :columns        (into [{:Header "Portfolio" :accessor "portfolio" :width 120}]
                                       (for [[k1 v1] timeframes]
                                         {:Header k1
                                          :columns (into [] (for [[k2 v2] targets] (merge {:Header k2 :accessor (str v1 v2)} fmt)))}))
                 :showPagination false :pageSize (count @(rf/subscribe [:attribution/summary])) :getTrProps go-to-attribution-risk :className "-striped -highlight"}]]
                             download-columns)]))

(defn index-returns-display []
  (let [original-table (filter (comp pos? :Average-Index-Weight) @(rf/subscribe [:attribution-index-returns/table]))
        xkey (keyword (get-in tables/attribution-table-columns [@(rf/subscribe [:attribution-index-returns/x-filter]) :accessor]))
        ykey (keyword (get-in tables/attribution-table-columns [@(rf/subscribe [:attribution-index-returns/y-filter]) :accessor]))
        table (if (or (= xkey :Duration-Bucket) (= ykey :Duration-Bucket))
                (mapv
                  (fn [line]
                    (update line :Duration-Bucket
                            #(case %
                               "0-3Y" "0 0-3Y"
                               "3-5Y" "1 3-5Y"
                               "5-7Y" "2 5-7Y"
                               "7-10Y" "3 7-10Y"
                               "10-15Y" "4 10-15Y"
                               "15+Y" "5 15+Y"
                               (str "6 " %))))
                  original-table)
                original-table)
        xlabel (:label (first (filter #(= (:id %) @(rf/subscribe [:attribution-index-returns/x-filter])) static/attribution-choice-map)))
        ycolumns (sort (distinct (map ykey table)))
        pivot-pre-total (into []
                              (for [[x g] (sort-by first (group-by xkey table))]
                                (merge
                                  {:xlabel x :total  (let [w (reduce + (map :Average-Index-Weight g))] (if (pos? w) (/ (reduce + (map :Index-Contribution g)) w)))}
                                  (into {} (for [[y subg] (group-by ykey g)]
                                             [(keyword (clojure.string/replace y " " "-")) (let [w (reduce + (map :Average-Index-Weight subg))] (if (pos? w) (/ (reduce + (map :Index-Contribution subg)) w)))])))))
        ;top-15-weights (take-last 15 (sort-by :weight ()))
        pivot (conj
                (if @(rf/subscribe [:attribution-index-returns/x-top-15])
                  pivot-pre-total
                  pivot-pre-total)
                    (merge
                      {:xlabel "Total" :total  (/ (reduce + (map :Index-Contribution table)) 100.)}
                      (into {} (for [y ycolumns]
                                 [(keyword (clojure.string/replace y " " "-")) (let [w (reduce + (map :Average-Index-Weight (filter #(= (ykey %) y) table)))] (if (pos? w) (/ (reduce + (map :Index-Contribution (filter #(= (ykey %) y) table))) w)))]))))]
    [:> ReactTable
     {:data                pivot
      :defaultFilterMethod tables/text-filter-OR
      :columns             (concat [{:Header xlabel ::accessor "xlabel" :width 200 :filterMethod tables/text-filter-OR}
                                    {:Header "Total" :accessor "total" :width 100 :Cell #(tables/nb-cell-format "%.2f%" 100. %) :getProps tables/red-negatives :filterMethod tables/nb-filter-OR-AND-x100}]
                                   (into [] (for [c ycolumns] {:Header c :accessor (clojure.string/replace c " " "-") :width 100 :Cell #(tables/nb-cell-format "%.2f%" 100. %) :getProps tables/red-negatives :filterMethod tables/nb-filter-OR-AND-x100})))
      :showPagination false :sortable true :pageSize (count pivot) :className "-striped -highlight" :filterable true}]))


(defn index-returns-controller []
  (let [portfolio-map @(rf/subscribe [:portfolio-dropdown-map])
        x-axis (rf/subscribe [:attribution-index-returns/x-filter])
        y-axis (rf/subscribe [:attribution-index-returns/y-filter])
        portfolio (rf/subscribe [:attribution-index-returns/portfolio])
        period (rf/subscribe [:attribution-index-returns/period])]
    (when (and (= @(rf/subscribe [:attribution-index-returns/portfolio]) "OGEMCORD")
               (= @(rf/subscribe [:attribution-index-returns/period]) "ytd")
               (zero? (count @(rf/subscribe [:attribution-index-returns/table]))))
      (rf/dispatch [:get-attribution-index-returns-portfolio "OGEMCORD" "ytd"]))
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Index returns " @(rf/subscribe [:attribution-date])) :level :level1]
                 [h-box :gap "50px"
                  :children [[v-box :gap "15px"
                              :children [
                                         [h-box
                                          :gap "10px"
                                          :children [[title :label "Portfolio:" :level :level3] [gap :size "1"]
                                                     [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:get-attribution-index-returns-portfolio %])]]]
                                         [h-box
                                          :gap "10px"
                                          :children [[title :label "Period:" :level :level3] [gap :size "1"]
                                                     [single-dropdown :width dropdown-width :model period :choices (period-choices) :on-change #(rf/dispatch [:get-attribution-index-returns-period %])]]]]]
                             [v-box :gap "15px"
                              :children [
                                         [h-box
                                          :gap "10px"
                                          :children [[title :label "Y axis:" :level :level3] [gap :size "1"]
                                                     [single-dropdown :width dropdown-width :model x-axis :choices (rest static/attribution-choice-map) :on-change #(rf/dispatch [:attribution-index-returns/x-filter %])]]]
                                         [h-box
                                          :gap "10px"
                                          :children [[title :label "X axis:" :level :level3] [gap :size "1"]
                                                     [single-dropdown :width dropdown-width :model y-axis :choices (rest static/attribution-choice-map) :on-change #(rf/dispatch [:attribution-index-returns/y-filter %])]]]]]]]
                 [title :label "Warning: these are weighted average returns from StatPro. Totals won't add-up nor will they match real sub index time series." :level :level3]
                 [index-returns-display]]]]))

(defn n91held? [rowInfo] (if-let [r rowInfo] (= (aget r "original" "held") 1)))
(defn held-formating [state rowInfo instance]
  (clj->js {:style (if (n91held? rowInfo) {:backgroundColor "#FEDDD4"})}))

(defn top-bottom-pr []
  (let [data  @(rf/subscribe [:top-bottom-price-change])
        data-up  (tools/chainfilter {:PRICE_RETURN #(>= % 0)} data)
        data-down  (sort-by :PRICE_RETURN (tools/chainfilter {:PRICE_RETURN #(< % 0)} data))
        start-date (:FROM (first data))
        end-date (:TO (first data))]
    [h-box :padding "80px 10px" :class "rightelement" :gap "30px"
     :children [[box :class "element" :child
                 (gt/element-box "top-bottom-pr" "100%" (str "Positive price return " start-date " to " end-date) data-up
                                 [[:> ReactTable
                                   {:data data-up 
                                    :columns [{:Header "ISIN" :accessor "ISIN" :width 100 }
                                              {:Header "BOND" :accessor "NAME" :width 100 :style {:textAlign "left"}}
                                              {:Header "Sector" :accessor "SECTOR" :width 100 :style {:textAlign "left"}}
                                              {:Header "Country" :accessor "COUNTRY" :width 100 :style {:textAlign "left"}}
                                              ;{:Header "Date start" :accessor "FROM" :width 80  :style {:textAlign "left"}} ;To be removed
                                              ;{:Header "Date end" :accessor "TO" :width 80 :style {:textAlign "right"}}  ;To be removed
                                              {:Header "Price start" :accessor "PRICE_FROM" :width 70  :style {:textAlign "right"} :Cell tables/round2}
                                              {:Header "Price end" :accessor "PRICE_TO" :width 70  :style {:textAlign "right"} :Cell tables/round2}
                                              {:Header "Price return" :accessor "PRICE_RETURN" :width 80  :style {:textAlign "right"} :Cell tables/round2pc}
                                              {:Header "91held ?" :accessor "held" :width 80  :style {:textAlign "right"} }]
                                    :pageSize 50 :sortable true :filterable true :defaultFilterMethod tables/text-filter-OR :getTrProps held-formating :className "-striped -highlight"}]])]
                [box :class "element" :child
                 (gt/element-box "top-bottom-pr" "100%" (str "Negative price return " start-date " to " end-date) data-down
                                 [[:> ReactTable
                                   {:data            data-down
                                    :columns [{:Header "ISIN" :accessor "ISIN" :width 100 }
                                              {:Header "BOND" :accessor "NAME" :width 100 :style {:textAlign "left"}}
                                              {:Header "Sector" :accessor "SECTOR" :width 100 :style {:textAlign "left"}}
                                              {:Header "Country" :accessor "COUNTRY" :width 100 :style {:textAlign "left"}}
                                              ;{:Header "Date start" :accessor "FROM" :width 80  :style {:textAlign "left"}} ;To be removed
                                              ;{:Header "Date end" :accessor "TO" :width 80 :style {:textAlign "right"}}  ;To be removed
                                              {:Header "Price start" :accessor "PRICE_FROM" :width 70  :style {:textAlign "right"} :Cell tables/round2}
                                              {:Header "Price end" :accessor "PRICE_TO" :width 70  :style {:textAlign "right"} :Cell tables/round2}
                                              {:Header "Price return" :accessor "PRICE_RETURN" :width 80  :style {:textAlign "right"} :Cell tables/round2pc}
                                              {:Header "91held ?" :accessor "held" :width 80  :style {:textAlign "right"} }] 
                                    :pageSize 50 :sortable true :filterable true :defaultFilterMethod tables/text-filter-OR :getTrProps held-formating :className "-striped -highlight"}]])]]
     ]))

;------------------------
(rf/reg-event-fx
  :get-attribution-history
  (fn [{:keys [db]} [_ m]]
    {:db                 (assoc db :navigation/show-mounting-modal true
                                   :attribution-history/table-filter [])
     :http-post-dispatch {:url (str static/server-address "attribution-history") :edn-params m
                          :dispatch-key [:attribution-history/data]}}))

(rf/reg-event-db
  :attribution-history/data
  (fn [db [_ data]] (assoc db :navigation/show-mounting-modal false :attribution-history/data data)))

(rf/reg-event-fx
  :get-attribution-analytics
  (fn [{:keys [db]} [_ m]]
    {:db                 (assoc db :navigation/show-mounting-modal true)
     :http-post-dispatch {:url (str static/server-address "attribution-analytics") :edn-params m
                          :dispatch-key [:attribution-analytics/data]}}))

(rf/reg-event-db
  :attribution-analytics/data
  (fn [db [_ data]] (assoc db :navigation/show-mounting-modal false :attribution-analytics/data data)))


(rf/reg-sub
  :attribution-history/table
  (fn [db]
    (let [risk-choices (let [rfil (get-in db [:attribution-history/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? risk-choices)] (tables/attribution-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          report-type (rf/subscribe [:attribution-history/report-type])
          data (get db :attribution-history/data)
          data-clean (map #(assoc % :date2 (if (= (name @report-type) "yearly") (:date %) (str (:date %) "_" (:period %)))) data)
          all-dates (sort (distinct (map :date2 data-clean)))
          sorted-data
          (sort-by (apply juxt (concat [(first accessors-k)] (rest accessors-k))) ;first-level-sort
                   (into [] (for [[k v] (group-by (apply juxt accessors-k) data-clean)]
                              (into (select-keys (first v) accessors-k)
                                    (for [dt all-dates]
                                      [(keyword (str "dt" dt))
                                       (reduce + (map #(get % (keyword (get-in tables/attribution-table-columns [(db :attribution-history/field-one) :accessor])) 0.0)
                                                      (t/chainfilter {:date2 dt} v)))])))))
          thfil (fn [line] (not (every? zero? (map line (map #(keyword (str "dt" %)) all-dates)))))
          sorted-data-hide-zero (if (db :attribution-history/hide-zero-holdings) (filter thfil sorted-data) sorted-data)
          sorted-deltas sorted-data-hide-zero
          template (into {} (for [[k v] (first (get db :attribution-history/data))] [k "Total"]))
          portfolio-total-line (into template (for [dt all-dates] [(keyword (str "dt" dt)) (reduce + (map (keyword (str "dt" dt)) sorted-deltas))]))
          ]
      (clj->js
        (if (= (:attribution-history/display-style db) "Tree")
          (tables/cljs-text-filter-OR (:attribution-history/table-filter db) (mapv #(assoc %1 :totaldummy " ") sorted-deltas))
          (concat [portfolio-total-line] sorted-deltas)))                           ;this should be total line
      )))

(def attribution-history-display-view (atom nil))
(def attribution-history-chart-data (r/atom nil))


(defn attribution-history []
  (let [qt-date (t/ddMMMyyyy->gdate @(rf/subscribe [:attribution-date])) ; (cljs-time.format/parse (cljs-time.format/formatter "dd MMMyyyy") (str (subs @(rf/subscribe [:qt-date]) 0 2) " " (subs @(rf/subscribe [:qt-date]) 2)))
        report-type (rf/subscribe [:attribution-history/report-type])
        field-one (rf/subscribe [:attribution-history/field-one])
        portfolio-map @(rf/subscribe [:portfolio-dropdown-map])
        display-style (rf/subscribe [:attribution-history/display-style])
        portfolio (rf/subscribe [:attribution-history/portfolio])
        ;hide-zero-risk (rf/subscribe [:attribution-history/hide-zero-holdings])
        is-tree (= @(rf/subscribe [:attribution-history/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:attribution-history/filter])]  (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? risk-choices)] (tables/attribution-table-columns r)))
        all-dates (sort (distinct (map :date @(rf/subscribe [:attribution-history/data]))))
        data-clean (map #(assoc % :date2 (if (= (name @report-type) "yearly")
                                           (:date %)
                                           (str (:date %) "_" (:period %))
                                           )) @(rf/subscribe [:attribution-history/data]) )
        all-dates2 (sort (distinct (map :date2 data-clean)))

        months-this-year (mapv #(js/parseInt (jasminegui.tools/gdate->yyyyMMdd (cljs-time.core/plus (cljs-time.core/local-date (.getYear (cljs-time.core/today)) % 1) (cljs-time.core/days -1)))) (range 2 (inc (inc (.getMonth (cljs-time.core/today))))))
        get-period-fn (fn [k]
                        (case k
                          :yearly {:periodseq ["yearly" "yearly" "ytd"] :fileperiodseq ["yearly_" "yearly_" nil] :dateseq [20201231 20211231 (js/parseInt (t/gdate->yyyyMMdd qt-date))]}
                          ;:monthly {:periodseq (conj (vec (repeat (count months-this-year) "monthly")) "mtd") :fileperiodseq (conj (vec (repeat (count months-this-year) "monthly_")) nil) :dateseq (conj months-this-year (js/parseInt (t/gdate->yyyyMMdd qt-date)))}
                          :monthly {:periodseq (conj (vec (repeat (count months-this-year) "monthly")) "mtd" "ytd") :fileperiodseq (conj (vec (repeat (count months-this-year) "monthly_")) nil nil) :dateseq (conj months-this-year (js/parseInt (t/gdate->yyyyMMdd qt-date)) (js/parseInt (t/gdate->yyyyMMdd qt-date)))}
                          :daily {:periodseq ["yearly" "yearly" "yearly"] :fileperiodseq ["yearly_" "yearly_" nil] :dateseq [20201231 20211231 20220706]}))]
    ;(println  (first data-clean))
    [box :class "subbody rightelement" :child
     (gt/element-box-generic "attribution-history-risk-table" max-width (str "Portfolio history")
                             {:target-id "attribution-history-risk-table" :on-click-action #(tools/react-table-to-csv @attribution-history-display-view @portfolio 0 is-tree)}
                             [[h-box :gap " 10px " :align :center
                               :children [[title :style {:width "85px"} :label "Display:" :level :level3]
                                          [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(do (rf/dispatch [:attribution-history/display-style %]) (rf/dispatch [:attribution-history/hide-zero-holdings (= % " Table ")]))]
                                          ;[checkbox :model hide-zero-risk :label "Hide zero lines?" :on-change #(rf/dispatch [:attribution-history/hide-zero-holdings %])]
                                          [gap :size "30px"]
                                          [title :label "Field:" :level :level3]
                                          [single-dropdown :width dropdown-width :model field-one :choices static/attribution-field-choices :on-change #(do (rf/dispatch [:attribution-history/field-one %])
                                                                                                                                                            (rf/dispatch [:attribution-history/data []]))]
                                          [gap :size "30px"]
                                          [title :label "Filtering:" :level :level3]
                                          [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(do (rf/dispatch [:attribution-history/data []])
                                                                                                                                         (rf/dispatch [:attribution-history/portfolio %]))]
                                          (gt/filtering-row :attribution-history/filter)
                                          ]]
                              [h-box :gap "10px" :align :center
                               :children [[title :style {:width "85px"} :label "Report type:" :level :level3]
                                          ;{:id :daily :label "MTD daily"}
                                          [single-dropdown :width dropdown-width :model report-type :choices [{:id :yearly :label "Yearly"} {:id :monthly :label "YTD monthly"} ] :on-change #(do (rf/dispatch [:attribution-history/data []])
                                                                                                                                                                                                                                (rf/dispatch [:attribution-history/report-type %]))]
                                          [button :label "Fetch" :class "btn btn-primary btn-block"
                                           :on-click #(rf/dispatch [:get-attribution-history (merge {:portfolio  @portfolio
                                                                                                     :filter-one (keyword (:accessor (first grouping-columns)))
                                                                                                     :filter-two (keyword (:accessor (second grouping-columns)))
                                                                                                     :field      (keyword (:accessor (tables/attribution-table-columns @field-one)))}
                                                                                                    (get-period-fn @report-type))])]
                                          [button :label "Chart" :disabled? (not is-tree) :class "btn btn-primary btn-block" :on-click #(reset! attribution-history-chart-data
                                                                                                                                                (->> ((first (js->clj (. (.getResolvedState @attribution-history-display-view) -sortedData))) "_subRows")

                                                                                                                                                     (map (fn [line] (clojure.set/rename-keys line (zipmap (map (fn [d] (str "dt" d "_monthly")) all-dates) (map (fn [d] (str "dt" d )) all-dates)))))
                                                                                                                                                     (map (fn [line] (clojure.set/rename-keys line (zipmap (map (fn [d] (str "dt" d "_mtd")) all-dates) (map (fn [d] (str "dt" d )) all-dates)))))

                                                                                                                                                     (map (fn [v] (select-keys v (conj (map (fn [d] (str "dt" d)) all-dates) "_pivotVal")))) ; condition here ?
                                                                                                                                                     (map (fn [line] (clojure.set/rename-keys line (zipmap (map (fn [d] (str "dt" d)) all-dates) all-dates))))
                                                                                                                                                     (map (fn [line] (reduce (fn [a b] (update a b (fn [x] (* x (if (= @field-one :nav) 100. 1.))))) line all-dates)))))]
                                          ]]

                              [:div {:id "attribution-history-risk-table"}
                               [tables/tree-table-risk-table
                                :attribution-history/table
                                (into [{:Header  (str "Groups (" @(rf/subscribe [:attribution-history/portfolio]) " " @(rf/subscribe [:qt-date]) ") ")
                                        :columns (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns)}]
                                      (for [dt (map #(keyword (str "dt" %)) all-dates2)]
                                        (tables/nb-col (if (= (name @report-type) "yearly")
                                                          (t/gdate->ddMMMyy (t/int->gdate (str (subs (name dt) 2))))
                                                        (case (subs (str (name dt)) 11)
                                                          "mtd" (str (t/gdate->ddMMMyy (t/int->gdate (str (subs (subs (name dt) 2) 0 8)))) "MTD")
                                                          "ytd" (str (t/gdate->ddMMMyy (t/int->gdate (str (subs (subs (name dt) 2) 0 8)))) "YTD")
                                                          (t/gdate->ddMMMyy (t/int->gdate (str (subs (subs (name dt) 2) 0 8)))))
                                                        )
                                                       dt 100 (let [v (get-in tables/attribution-table-columns [@field-one :Cell])] (case @field-one :nav tables/round2*100-if-not0 :weight-delta tables/round2*100-if-not0 :contrib-mdur tables/round2-if-not0 v)) tables/sum-rows)))
                                is-tree
                                (mapv :accessor grouping-columns)
                                attribution-history-display-view
                                :attribution-history/table-filter
                                :attribution-history/expander
                                on-click-context-dummy]]
                              [oz/vega-lite (charting/stacked-vertical-bars @attribution-history-chart-data "attribution history")]])]))

;------------------------------
(def  attribution-view-atom (atom nil))

(defn attribution-analytics-display []
  (let [data @(rf/subscribe [:attribution-analytics/data])
        data-clean (for [sec data] (assoc sec :Average-Index-Weight (/ (sec :Average-Index-Weight) 100)
                                              :Average-Fund-Weight (/ (sec :Average-Fund-Weight) 100)
                                              :Average-Excess-Weight (/ (sec :Average-Excess-Weight) 100)
                                              :Used_YTW (/ (sec :Used_YTW) 100)
                                              :Fund-Contribution (/ (sec :Fund-Contribution) 100)
                                              :Index-Contribution (/ (sec :Index-Contribution) 100)
                                              :Total-Effect (/ (sec :Total-Effect) 100)
                                              :RatingGroup (str "'" (sec :RatingGroup))
                                              ))
        header-style {:overflow nil :whiteSpace "pre-line" :wordWrap "break-word"}]
    ;(println (sort (keys (first data))))
    ;(println (second (t/chainfilter {:Region "Cash"} data-clean)))
    [:div {:id "attribution-analytics-table"}
     [:> ReactTable
      {:data data-clean
       :columns [{:Header  "Description" :headerStyle header-style :columns
                  [{:Header "Bond" :accessor "Bond" :width 100}
                   {:Header "Isin" :accessor "ISIN" :width 100}
                   {:Header "Ticker" :accessor "Ticker" :width 100} {:Header "Region" :accessor "Region" :width 100}
                   {:Header "Country" :accessor "Country" :width 80} {:Header "Sector" :accessor "Sector" :width 80}
                   {:Header "Rating" :accessor "Rating" :width 80} {:Header "Rating Grp" :accessor "RatingGroup" :width 80}]}
                 {:Header  "Actual Weights" :headerStyle header-style :columns
                  [{:Header "Start" :accessor "start-weight" :width 80 :style {:textAlign "right"} :Cell tables/round2pc}
                   {:Header "End" :accessor "end-weight" :width 80 :style {:textAlign "right"} :Cell tables/round2pc}]}
                 {:Header  "Average Weights" :headerStyle header-style :columns
                  [{:Header "Excess " :accessor "Average-Excess-Weight" :width 80 :style {:textAlign "right"} :Cell tables/round2pc}
                   {:Header "Fund " :accessor "Average-Fund-Weight" :width 80 :style {:textAlign "right"} :Cell tables/round2pc}
                   {:Header "Index " :accessor "Average-Index-Weight" :width 80 :style {:textAlign "right"} :Cell tables/round2pc}]}
                 {:Header  "Effect" :headerStyle header-style :columns
                  [{:Header "Fund" :accessor "Total-Effect" :width 80  :style {:textAlign "right"} :Cell tables/round2pc}]}
                 {:Header  "Contribution" :headerStyle header-style :columns
                   [{:Header "Fund" :accessor "Fund-Contribution" :width 80 :style {:textAlign "right"} :Cell tables/round2pc}
                    {:Header "Index" :accessor "Index-Contribution" :width 80  :style {:textAlign "right"} :Cell tables/round2pc}]}
                 {:Header  "Analytics (as of month end)" :headerStyle header-style :columns
                  [{:Header "Duration" :accessor "Duration" :width 90  :style {:textAlign "right"} :Cell tables/round2}
                   {:Header "YTW" :accessor "Used_YTW" :width 90  :style {:textAlign "right"} :Cell tables/round2pc}
                   {:Header "ZTW" :accessor "Used_ZTW" :width 90  :style {:textAlign "right"} :Cell tables/zspread-format}]}]
       :showPagination true :sortable true :filterable true :defaultFilterMethod tables/text-filter-OR :pageSize 25 :className "-striped"
       :ref #(reset! attribution-view-atom %)
           }]]
    ))


(defn attribution-analytics []
  (let [period-choices [{:id "monthly" :label "Monthly"} {:id "quarterly" :label "Quarterly"} {:id "ytd" :label "YTD"}]
        portfolio @(rf/subscribe [:attribution-analytics/portfolio])
        period @(rf/subscribe [:attribution-analytics/period])
        month-end @(rf/subscribe [:attribution-analytics/month-end])
        download-columns ["Bond" "ISIN" "Region" "Country" "Sector" "Ticker" "Rating" "RatingGroup" "start-weight" "end-weight" "Average-Fund-Weight" "Average-Index-Weight" "Average-Excess-Weight"
                          "Fund-Contribution" "Index-Contribution" "Total-Effect" "Duration" "Used_YTW" "Used_ZTW"]
        month-end-choices-raw @(rf/subscribe [:list-dates-month-end-calendar])
        month-end-choices-clean  (if (= "quarterly" period)
                                   ["20220331" "20220630"]  ;ADD QUARTERS END
                                   (rest month-end-choices-raw)
                                   )
        month-end-choices (distinct (into [] (for [k month-end-choices-clean] {:id k :label (t/gdate->ddMMMyy (t/int->gdate k))})))]
    [box :class "subbody rightelement" :child
     (gt/element-box-generic "attribution-analytics-table" max-width (str "Attribution analytics")
                             {:target-id "attribution-analytics-table" :on-click-action #(tools/react-table-to-csv @attribution-view-atom portfolio download-columns)}
                             [[h-box :gap " 10px " :align :center
                               :children [[title :label "Portfolio:" :level :level3]
                                          (gt/portfolio-dropdown-selector :attribution-analytics/portfolio)
                                          [gap :size "30px"]
                                          [title :label "Period:" :level :level3]
                                          [single-dropdown :width dropdown-width :model period :choices period-choices :on-change #(rf/dispatch [:attribution-analytics/period %])]
                                          [gap :size "30px"]
                                          [title :label "Month end:" :level :level3]
                                          [single-dropdown :width dropdown-width :model month-end :choices month-end-choices :on-change #(rf/dispatch [:attribution-analytics/month-end %])]
                                          [gap :size "30px"]
                                          [button :label "Fetch" :class "btn btn-primary btn-block"
                                           :on-click #(rf/dispatch [:get-attribution-analytics {:portfolio  portfolio :period period :month-end month-end}])]]]
                              [attribution-analytics-display]
                              ])]))

(defn strategies []
  (when (zero? (count @(rf/subscribe [:backtest-output]))) (rf/dispatch [:get-backtest-output]))
  [box :class "subbody rightelement" :child
   (gt/element-box-generic "strategies" max-width (str "Strategies")
                           {:target-id "strategies-table" :download-table @(rf/subscribe [:backtest-output])}
                           [[title :level :level3 :label "Total returns. Momentum strategies rebalanced 1st of month, 25bps cost if rebalanced, and earning 50bps p.a. if in cash."]
                            [:> ReactTable
                             {:data           @(rf/subscribe [:backtest-output])
                              :columns        (into [{:Header "Strategy" :accessor "strategy" :width 150}
                                                     {:Header "Index" :accessor "index" :width 125}
                                                     {:Header "Period" :accessor "period" :width 75 :style {:textAlign "right"}}]
                                                    (for [y (range 2016 2023)]
                                                      (tables/nb-col y (str "y" y) 75 #(tables/nb-cell-format "%.1f%" 100 %))))
                              :showPagination true :sortable true :filterable true :defaultFilterMethod tables/text-filter-OR :pageSize 25 :className "-striped"}]

                            ])])

(defn emd-weekly []
  (when (zero? (count @(rf/subscribe [:attribution/emd-weekly]))) (rf/dispatch [:get-emd-weekly]))
  [box :class "subbody rightelement" :child
   (gt/element-box-generic "emd-weekly" max-width "EMD weekly"
                           {:target-id "emd-weekly-table" :download-table @(rf/subscribe [:attribution/emd-weekly])}
                           [                                ;[title :level :level3 :label "Total returns. Momentum strategies rebalanced 1st of month, 25bps cost if rebalanced, and earning 50bps p.a. if in cash."]
                            [:> ReactTable
                             {:data           @(rf/subscribe [:attribution/emd-weekly])
                              :columns        (concat [{:Header "Description" :columns [(tables/text-col "Code" "Portfolio_Code" 80)
                                                                                        (tables/text-col "Name" "Portfolio_Name" 200)
                                                                                        (tables/text-col "Benchmark" "Performance_Comparison_Index" 200)
                                                                                        (tables/text-col "Inception" "Inception_Date" 80)
                                                                                        (tables/text-col "Currency" "Base_Currency" 60)
                                                                                        (tables/nb-col "Value" "Market_Value_at_End,_(Base_Currency)" 100 tables/nb-thousand-cell-format)]}]
                                                      (map (fn [x]
                                                             {:Header  (clojure.string/replace (subs x 1) "_" " ")
                                                              :columns [(assoc (dissoc (tables/nb-col "Portfolio" (str "Portfolio" x) 60 tables/round2-if-not0) :getProps) :style {:textAlign "right"})
                                                                        (assoc (dissoc (tables/nb-col "Index" (str "Index" x) 60 tables/round2-if-not0) :getProps) :style {:textAlign "right"})
                                                                        (tables/nb-col "Excess" (str "Excess" x) 60 tables/round2-if-not0)]})
                                                           ["_7_Days" "_MTD" "_YTD" "_1_Year" "_Inception"]))

                              :showPagination true :sortable true :filterable true :defaultFilterMethod tables/text-filter-OR :pageSize 20 :className "-striped"}]])])

(defn active-home []
  (.scrollTo js/window 0 0)                             ;on view change we go back to top
  (case @(rf/subscribe [:navigation/active-attribution])
    :summary                        [summary-display]
    :single-portfolio               [single-portfolio-attribution-controller]
    :all-portfolios                 [multiple-portfolio-attribution-controller]
    :history                        [attribution-history]
    :analytics                      [attribution-analytics]
    :index-returns                  [index-returns-controller]
    :top-bottom-pr                  [top-bottom-pr]
    :strategies                     [strategies]
    :emd-weekly                     [emd-weekly]
    [:div.output "nothing to display"]))


(defn home-view []
  [h-box :gap "10px"
   ;:style {:overflow "hidden"}
   :padding "0px"
   :children [(gt/left-nav-bar static/attribution-navigation :navigation/active-attribution) [active-home]]])

