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
    [jasminegui.tables :as tables]
    [jasminegui.guitools :as gt]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [reagent-contextmenu.menu :as rcm])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )


(defn period-choices []
  (concat static/attribution-period-choices
          (into [] (for [m @(rf/subscribe [:attribution/available-months])] {:id m :label m}))
          (into [] (for [y (range 2021 2017 -1)] (let [k (str "FY" y)] {:id k :label k})))))

(def dropdown-width "150px")

(def single-portfolio-attribution-display-view (atom nil))
(def multiple-portfolio-attribution-display-view (atom nil))

(defn single-portfolio-attribution-display []
  (let [is-tree (= @(rf/subscribe [:single-portfolio-attribution/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:single-portfolio-attribution/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :security))] (tables/attribution-table-columns r)))
        additional-des-cols (remove (set (conj risk-choices "None")) (map :id static/attribution-choice-map))]
    [tables/tree-table-risk-table
     :single-portfolio-attribution/clean-table
     [{:Header "Groups" :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
      {:Header "Effect" :columns (mapv tables/attribution-table-columns [:total-effect]) }
      {:Header "Contribution" :columns (mapv tables/attribution-table-columns [:contribution :bm-contribution])}
      {:Header "Weight" :columns (mapv tables/attribution-table-columns [:xs-weight :weight :bm-weight])}
      {:Header "Additional information" :columns (mapv tables/attribution-table-columns (concat additional-des-cols [:code :rating]))}]
     is-tree
     (mapv :accessor grouping-columns)
     single-portfolio-attribution-display-view
     :single-portfolio-attribution/table-filter
     :single-portfolio-attribution/expander
     (fn [state rowInfo instance] #js {})]))


(defn multiple-portfolio-attribution-display []
  (let [display-key-one @(rf/subscribe [:multiple-portfolio-attribution/field-one])
        width-one 80                                      ;(get-in tables/table-columns [display-key-one :width])
        is-tree (= @(rf/subscribe [:multiple-portfolio-attribution/display-style]) "Tree")
        attribution-choices (let [rfil @(rf/subscribe [:multiple-portfolio-attribution/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj attribution-choices :security))] (tables/attribution-table-columns r)))
        cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (some #{p} @(rf/subscribe [:multiple-portfolio-attribution/selected-portfolios]))]
                        {:Header p
                         :accessor p
                         :columns p
                         :getProps tables/red-negatives
                         :width width-one
                         :style {:textAlign "right"}
                         :aggregate tables/sum-rows
                         :Cell (get-in tables/attribution-table-columns [display-key-one :Cell])
                         :filterable true}))
        data @(rf/subscribe [:multiple-portfolio-attribution/clean-table] )
        ]
    ;(println (last data))
    [tables/tree-table-risk-table
     :multiple-portfolio-attribution/clean-table
     [{:Header "Groups" :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
      {:Header (str "Portfolio " (name display-key-one)) :columns cols }
      {:Header "Description" :columns (mapv tables/attribution-table-columns [:code :rating])}]
     is-tree
     (mapv :accessor grouping-columns)
     ;single-portfolio-attribution-display-view              ;THIS IS WRONG :)
     multiple-portfolio-attribution-display-view
     :multiple-portfolio-attribution/table-filter
     :multiple-portfolio-attribution/expander
     (fn [state rowInfo instance] #js {})]))


(defn shortcut-row [key]
  (let [shortcut (rf/subscribe [key])]
    (into [] (concat [[title :label "Shortcuts:" :level :level3]]
                     (into [] (for [i (range 1 5)]
                                [md-circle-icon-button
                                 :md-icon-name (str "zmdi-collection-item-" i)
                                 :class (if (= @shortcut i) "active" "default")
                                 :on-click #(rf/dispatch [key i])]))))))

(defn filtering-row [key]
  (let [risk-filter (rf/subscribe [key])]
    (into [] (for [i (range 1 4)]
               [single-dropdown :width dropdown-width :model (r/cursor risk-filter [i]) :choices static/attribution-choice-map :on-change #(rf/dispatch [key i %])]))))

;(defn csv-link [data filename]
;  (tools/download-object-as-csv (clj->js (tools/vector-of-maps->csv data)) (str filename ".csv")))


;(defn download-attribution-file [period port]
;  "cannot download file from drive if not HTTP"
;  (let [root "file://iamctnfs1.investecam.corp/shared/ATTRIBUTION/FIA/SFI/CREDIT REPORTS (Vic)/"
;        ;path2 "file://iamctnfs1.investecam.corp/shared/ATTRIBUTION/FIA/SFI/CREDIT REPORTS (Vic)/ytd reports/AIFGLBCD - Credit Report - 20-12-21.xlsx"
;        ;path3 "//iamlfilive:8192/static/CCY.csv"
;
;        folders-map {:ytd "ytd reports/" :mtd "mtd reports/" :Ddy "daily reports/" :wtd "weekly reports/"}
;        months-map {:Jan "01" :Feb "02" :Mar "03" :Apr "04" :May "05" :Jun "06" :Jul "07" :Aug "08" :Sep "09" :Oct "10" :Nov "11" :Dec "12"}
;        attribution-date @(rf/subscribe [:attribution-date])
;        date-file-format (str (subs attribution-date 0 2) "-" (months-map (keyword (subs attribution-date 2 5))) "-" (subs attribution-date 7 9))
;        path-file (str root (folders-map (keyword period)) port " - Credit Report - " date-file-format ".xlsx")
;        ;link [:a {:href path-file :download "true"}]
;        ]
;    [hyperlink-href :href path3 :label "Download source XLS"]
;    )
;  )



(defn single-portfolio-attribution-controller []
  (let [portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:single-portfolio-attribution/display-style])
        is-tree (= @(rf/subscribe [:single-portfolio-attribution/display-style]) "Tree")
        portfolio (rf/subscribe [:single-portfolio-attribution/portfolio])
        period (rf/subscribe [:single-portfolio-attribution/period])
        download-columns ["Security" "Code" "Issuer" "Sector" "Region" "Country" "Duration-Bucket" "Total-Effect" "Fund-Contribution" "Index-Contribution" "Average-Fund-Weight" "Average-Index-Weight" "Average-Excess-Weight"]
        ;path-download (download-attribution-file @download-period @download-portfolio )
        ]
    (when (and (= @(rf/subscribe [:single-portfolio-attribution/portfolio]) "OGEMCORD")
               (= @(rf/subscribe [:single-portfolio-attribution/period]) "ytd")
               (zero? (count @(rf/subscribe [:single-portfolio-attribution/table]))))
      (rf/dispatch [:get-single-attribution "OGEMCORD" "ytd"]))
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Attribution drill-down " @(rf/subscribe [:attribution-date])) :level :level1]
                 [h-box :gap "50px"
                  :children [
                             [v-box :gap "15px"
                              :children [[h-box :gap "10px"
                                          :children [[title :label "Display type:" :level :level3] [gap :size "1"]
                                                     [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices
                                                      :on-change #(rf/dispatch [:single-portfolio-attribution/display-style %])
                                                      ]]]
                                         [h-box :gap "10px"
                                          :children [[title :label "Period:" :level :level3] [gap :size "1"]
                                                     [single-dropdown :width dropdown-width :model period :choices (period-choices)
                                                      :on-change #(do
                                                                    (rf/dispatch [:change-single-attribution-period %])
                                                                    ;(reset! download-period %)
                                                                      )]]]]]
                             [v-box :gap "10px" :children [[h-box :gap "10px" :children
                                                            (into [] (concat [[title :label "Filtering:" :level :level3]
                                                                              [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(do (rf/dispatch [:change-single-attribution-portfolio %])
                                                                                                                                                                             ;(reset! download-portfolio %)
                                                                                                                                                                             )]]
                                                                             (filtering-row :single-portfolio-attribution/filter)))]
                                                           [h-box :gap "20px" :children (into [] (concat
                                                                                                   (shortcut-row :single-portfolio-attribution/shortcut)
                                                                                                   [[gap :size "50px"]
                                                                                                    [title :label "Download:" :level :level3]
                                                                                                    [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/react-table-to-csv @single-portfolio-attribution-display-view @portfolio download-columns is-tree)]
                                                                                                    ;[title :label "Download source file:" :level :level3]
                                                                                                    ;[download-attribution-file @download-period @download-portfolio]
                                                                                                    ;[md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(download-attribution-file @download-period @download-portfolio) ;@(rf/subscribe [:change-single-attribution-portfolio])
                                                                                                    ; ]
                                                                                                    ]))]]]]]
                                                                                                     [single-portfolio-attribution-display]]]]))

;(defn csv-link-multiple-portfolio []
;  (tools/download-object-as-csv
;    (clj->js (tools/vector-of-maps->csv @(rf/subscribe [:multiple-portfolio-risk/table])))
;    "pivot.csv"))

(defn multiple-portfolio-attribution-controller []
  (let [portfolio-map (into [] (for [p  @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:multiple-portfolio-attribution/display-style])
        is-tree (= @(rf/subscribe [:multiple-portfolio-attribution/display-style]) "Tree")
        portfolios @(rf/subscribe [:portfolios])
        selected-portfolios (rf/subscribe [:multiple-portfolio-attribution/selected-portfolios])
        field-one (rf/subscribe [:multiple-portfolio-attribution/field-one])
        period (rf/subscribe [:multiple-portfolio-attribution/period])
        download-columns (concat ["Security" "Code" "Issuer" "Region" "Country" "Rating" "Duration-Bucket"] (filter @selected-portfolios portfolios))
        toggle-portfolios (fn [seqp] (let [setseqp (set seqp)] (if (clojure.set/subset? setseqp @selected-portfolios) (clojure.set/difference @selected-portfolios setseqp) (clojure.set/union @selected-portfolios setseqp))))
        threshold-att (rf/subscribe [:multiple-portfolio-attribution/threshold])
        ]
    (when (and (= @(rf/subscribe [:multiple-portfolio-attribution/field-one]) :total-effect)
               (= @(rf/subscribe [:multiple-portfolio-attribution/period]) "ytd")
               (zero? (count @(rf/subscribe [:multiple-portfolio-attribution/table]))))
      (rf/dispatch [:get-multiple-attribution "Total Effect" "ytd"]))

    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Attribution drill-down " @(rf/subscribe [:attribution-date])) :level :level1]
                 [h-box :gap "30px"
                  :children
                  [[h-box :gap "20px"
                    :children [[h-box :gap "5px" :children [[title :label "Display type:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(rf/dispatch [:multiple-portfolio-attribution/display-style %])]]]
                               [h-box :gap "5px" :children [[title :label "Period:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model period :choices (period-choices) :on-change #(rf/dispatch [:change-multiple-attribution-period %])]]]
                               [h-box :gap "5px" :children [[title :label "Field:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model field-one :choices static/attribution-field-choices :on-change #(rf/dispatch [:change-multiple-attribution-target %])]]]
                                [h-box :gap "5px" :children [[title :label "Threshold (bps):" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model threshold-att :choices static/threshold-choices-attribution :on-change #(rf/dispatch [:multiple-portfolio-attribution/threshold %])]]]]
                    ]
                   [h-box :gap "20px"
                    :children [[h-box :gap "5px" :children (into [] (concat [[title :label "Filtering:" :level :level3]] (filtering-row :multiple-portfolio-attribution/filter)))]
                               [h-box :gap "5px" :children (shortcut-row :multiple-portfolio-attribution/shortcut)]
                               [h-box :gap "5px" :children [[title :label "Download:" :level :level3]
                                                             [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/react-table-to-csv @multiple-portfolio-attribution-display-view "attribution_multiple_portfolio" download-columns is-tree)]]]]]
                   ]]
                 [h-box :gap "5px" :children
                  (into [[title :label "Portfolios:" :level :level3]
                         [gap :size "20px"]
                         [v-box :gap "2px" :children [[button :style {:width "75px"} :label "All" :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios (set portfolios)])]
                                                      [button :style {:width "75px"} :label "None" :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios #{}])]
                                                      ]]]
                        (for [line static/portfolio-alignment-groups]
                          (let [possible-portfolios (:portfolios (first (filter (fn [x] (= (:id x) (:id line))) static/portfolio-alignment-groups)))]
                            [v-box :gap "2px" :children
                             [[button :style {:width "125px"} :label (:label line) :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios (toggle-portfolios possible-portfolios)])]
                              [selection-list :width "125px" :model selected-portfolios :choices (into [] (for [p possible-portfolios] {:id p :label p})) :on-change #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios %])]]])))]
                 [multiple-portfolio-attribution-display]]]]))


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
                             download-columns
                             )]))

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
  (let [portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
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
        end-date (:TO (first data))
        ]
    [h-box :padding "80px 10px" :class "rightelement" :gap "30px"
     :children [[box :class "element" :child
                 (gt/element-box "top-bottom-pr" "100%" (str "Positive price return " start-date " to " end-date) data-up
                                 [[:> ReactTable
                                   {:data            data-up
                                    :pageSize 50
                                    :sortable true
                                    :filterable true
                                    :defaultFilterMethod tables/text-filter-OR
                                    :columns [{:Header "ISIN" :accessor "ISIN" :width 100 }
                                              {:Header "BOND" :accessor "NAME" :width 100 :style {:textAlign "left"}}
                                              {:Header "Sector" :accessor "SECTOR" :width 100 :style {:textAlign "left"}}
                                              {:Header "Country" :accessor "COUNTRY" :width 100 :style {:textAlign "left"}}
                                              ;{:Header "Date start" :accessor "FROM" :width 80  :style {:textAlign "left"}} ;To be removed
                                              ;{:Header "Date end" :accessor "TO" :width 80 :style {:textAlign "right"}}  ;To be removed
                                              {:Header "Price start" :accessor "PRICE_FROM" :width 70  :style {:textAlign "right"} :Cell tables/round2}
                                              {:Header "Price end" :accessor "PRICE_TO" :width 70  :style {:textAlign "right"} :Cell tables/round2}
                                              {:Header "Price return" :accessor "PRICE_RETURN" :width 80  :style {:textAlign "right"} :Cell tables/round2pc}
                                              {:Header "91held ?" :accessor "held" :width 80  :style {:textAlign "right"} }
                                              ]
                                    :getTrProps held-formating :className "-striped -highlight"
                                    }]])]
                [box :class "element" :child
                 (gt/element-box "top-bottom-pr" "100%" (str "Negative price return " start-date " to " end-date) data-down
                                 [[:> ReactTable
                                   {:data            data-down
                                    :pageSize 50
                                    :sortable true
                                    :filterable true
                                    :defaultFilterMethod tables/text-filter-OR
                                    :columns [{:Header "ISIN" :accessor "ISIN" :width 100 }
                                              {:Header "BOND" :accessor "NAME" :width 100 :style {:textAlign "left"}}
                                              {:Header "Sector" :accessor "SECTOR" :width 100 :style {:textAlign "left"}}
                                              {:Header "Country" :accessor "COUNTRY" :width 100 :style {:textAlign "left"}}
                                              ;{:Header "Date start" :accessor "FROM" :width 80  :style {:textAlign "left"}} ;To be removed
                                              ;{:Header "Date end" :accessor "TO" :width 80 :style {:textAlign "right"}}  ;To be removed
                                              {:Header "Price start" :accessor "PRICE_FROM" :width 70  :style {:textAlign "right"} :Cell tables/round2}
                                              {:Header "Price end" :accessor "PRICE_TO" :width 70  :style {:textAlign "right"} :Cell tables/round2}
                                              {:Header "Price return" :accessor "PRICE_RETURN" :width 80  :style {:textAlign "right"} :Cell tables/round2pc}
                                              {:Header "91held ?" :accessor "held" :width 80  :style {:textAlign "right"} }
                                              ]
                                    :getTrProps held-formating :className "-striped -highlight"
                                    }]])]]

                ]
    )
  )

(defn nav-attribution-bar []
  (let [active-home @(rf/subscribe [:navigation/active-attribution])]
    [h-box
     ;:align :start
     :children [
                [v-box
                 :gap "20px"
                 :class "leftnavbar"
                 :children (into (if false                  ;@(rf/subscribe [:time-machine/enabled])
                                   []                       ;[alert-box :alert-type :danger :heading "Time machine is ON" :body (str "Date " (subs (str @(rf/subscribe [:time-machine/date])) 0 8))]
                                   [])
                                 (for [item static/attribution-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-home (:code item))) " active"))
                                    ;:style {:font-size "12px"}
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:navigation/active-attribution (:code item)])]))]
                ;[line :color "#CA3E47" :class "separatorvline"]
                ]]))

(defn active-home []
  (.scrollTo js/window 0 0)                             ;on view change we go back to top
  (case @(rf/subscribe [:navigation/active-attribution])
    :summary                        [summary-display]
    :single-portfolio               [single-portfolio-attribution-controller]
    :all-portfolios                 [multiple-portfolio-attribution-controller]
    :index-returns                  [index-returns-controller]
    :top-bottom-pr                  [top-bottom-pr]
    [:div.output "nothing to display"]))


(defn home-view []
  [h-box :gap "10px"
   ;:style {:overflow "hidden"}
   :padding "0px"
   :children [[nav-attribution-bar] [active-home]]])

