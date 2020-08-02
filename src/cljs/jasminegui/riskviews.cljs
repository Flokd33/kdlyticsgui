(ns jasminegui.riskviews
  (:require
    ; [oz.core :as oz]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [goog.string :as gstring]
    [goog.string.format]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    ["react-table" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]
    [jasminegui.tools :as tools]
    [jasminegui.tables :as tables]
    [jasminegui.tradehistory :as th]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [cljs-time.core :refer [today]]
    )
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )

;;;;;;;;;;;;
;; EVENTS ;;
;;;;;;;;;;;;

(rf/reg-event-fx
  :get-single-bond-history
  (fn [{:keys [db]} [_ name bond-sedol portfolios start-date end-date]]
    {:db (assoc db :single-bond-trade-history/bond name
                   :single-bond-trade-history/show-modal true
                   :single-bond-trade-history/show-throbber true)
     :http-get-dispatch {:url          (str static/server-address "single-bond-history?id=" bond-sedol "&portfolios=" portfolios "&start-date=" start-date "&end-date=" end-date)
                         :dispatch-key [:single-bond-trade-history/data]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-bond-price-history
  (fn [{:keys [db]} [_ name start-date end-date]]
    {:db (assoc db :bond-price-history/name name)
     :http-get-dispatch {:url          (str static/server-address "bond-price-history?name=" name "&start-date=" start-date "&end-date=" end-date)
                         :dispatch-key [:bond-price-history/price]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-single-bond-flat-history
  (fn [{:keys [db]} [_ name bond-sedol portfolios start-date end-date]]
    {:db (assoc db :single-bond-trade-history/bond name
                   :single-bond-trade-history/show-flat-modal true
                   :single-bond-trade-history/show-throbber true)
     :http-get-dispatch {:url          (str static/server-address "flat-bond-history?id=" bond-sedol "&portfolios=" portfolios "&start-date=" start-date "&end-date=" end-date)
                         :dispatch-key [:single-bond-trade-history/flat-data]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-portfolio-trade-history
  (fn [{:keys [db]} [_ portfolio start-date end-date]]
    {:db (assoc db :portfolio-trade-history/data nil
                   :single-bond-trade-history/show-throbber true
                   :single-bond-trade-history/show-throbber true)
     :http-get-dispatch {:url          (str static/server-address "portfolio-trade-history?portfolio=" portfolio "&start-date=" (tools/gdate-to-yyyymmdd start-date) "&end-date=" (tools/gdate-to-yyyymmdd end-date))
                         :dispatch-key [:portfolio-trade-history/data]
                         :kwk          true}}))

(rf/reg-event-db
  :single-bond-trade-history/data
  (fn [db [_ data]]
    (assoc db :single-bond-trade-history/data data
              :single-bond-trade-history/show-throbber false)))

(rf/reg-event-db
  :single-bond-trade-history/flat-data
  (fn [db [_ data]]
    (assoc db :single-bond-trade-history/flat-data data
              :single-bond-trade-history/show-throbber false)))

(rf/reg-event-db
  :portfolio-trade-history/data
  (fn [db [_ data]]
    (assoc db :portfolio-trade-history/data data
              :single-bond-trade-history/show-throbber false)))

;;;;;;;;;;;;;;;;;;;;
;; SUCBSCRIPTIONS ;;
;;;;;;;;;;;;;;;;;;;;

(defn first-level-sort [x]
  (case x
    "Cash"        "AAA"
    "Collateral"  "ZZZ"
    "Forwards"    "ZZZ"
    "Equities"    "ZZZ"
    x))

(defn add-total-line-to-pivot [pivoted-table kportfolios]
  (let [total-line (merge
                     {:jpm-region           "Total"
                      :qt-jpm-sector        "Total"
                      :qt-risk-country-name "Total"
                      :TICKER               "Total"
                      :NAME                 "Total"
                      :description          "Total"
                      :isin                 "Total"
                      :qt-iam-int-lt-median-rating-score "Total"
                      :qt-final-maturity-band "Total"}
                     (into {} (for [p kportfolios] [p (reduce + (map p pivoted-table))])))]
    (conj pivoted-table total-line)))

(defn add-total-line-to-attribution-pivot [pivoted-table kportfolios]
  (let [template (into {} (for [[k v] (first pivoted-table)] [k "Total"]))
        total-line (merge
                     template
                     (into {} (for [p kportfolios] [p (reduce + (map p pivoted-table))])))]
    (conj pivoted-table total-line)))


(rf/reg-sub
  :single-portfolio-risk/table
  (fn [db]
    (let [positions (:positions db)
          portfolio (:single-portfolio-risk/portfolio db)
          portfolio-total-line (assoc ((:total-positions db) (keyword portfolio)) :qt-iam-int-lt-median-rating "Total" :qt-iam-int-lt-median-rating-score "00 Total")
          is-tree (= (:single-portfolio-risk/display-style db) "Tree")
          portfolio-positions (filter #(= (:portfolio %) portfolio) positions)
          viewable-positions (if (and (not is-tree) (:single-portfolio-risk/hide-zero-holdings db)) (filter #(not= (:weight %) 0) portfolio-positions) portfolio-positions)
          risk-choices (let [rfil @(rf/subscribe [:single-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))]
      (conj (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) viewable-positions) portfolio-total-line))))

(rf/reg-sub
  :single-portfolio-attribution/clean-table
  (fn [db]
    (let [data (:single-portfolio-attribution/table db)
          template (into {} (for [[k v] (first data)] [k "Total"]))
          portfolio-total-line (assoc template
                                 :Total-Effect (reduce + (map :Total-Effect data))
                                 :Average-Excess-Weight (reduce + (map :Average-Excess-Weight data))
                                 :Average-Fund-Weight (reduce + (map :Average-Fund-Weight data))
                                 :Average-Index-Weight (reduce + (map :Average-Index-Weight data))
                                 :Fund-Contribution (reduce + (map :Fund-Contribution data))
                                 :Index-Contribution (reduce + (map :Index-Contribution data)))
          risk-choices (let [rfil (:single-portfolio-attribution/filter db)] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :security))] (tables/attribution-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))]
      (conj (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) data) portfolio-total-line))))


(rf/reg-sub
  :multiple-portfolio-risk/table
  (fn [db]
    (let [pivoted-positions (:pivoted-positions db)
          kselected-portfolios (mapv keyword (:multiple-portfolio-risk/selected-portfolios db))
          hide-zero-risk (:multiple-portfolio-risk/hide-zero-holdings db)
          display-key-one (:multiple-portfolio-risk/field-one db)
          is-tree (= (:multiple-portfolio-risk/display-style db) "Tree")
          risk-choices (let [rfil @(rf/subscribe [:multiple-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (map #(merge % ((keyword (get-in tables/risk-table-columns [display-key-one :accessor])) %)) pivoted-positions)
          thfil (fn [line] (not (every? zero? (map line kselected-portfolios))))
          pivoted-data-hide-zero (if (and (not is-tree) hide-zero-risk) (filter thfil pivoted-data) pivoted-data)]
      (add-total-line-to-pivot (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-hide-zero) (map keyword (:portfolios db))))))

(rf/reg-sub
  :multiple-portfolio-attribution/clean-table
  (fn [db]
    (let [pivoted-positions (:multiple-portfolio-attribution/table db)
          display-key-one (:multiple-portfolio-attribution/field-one db)
          attribution-choices (let [rfil @(rf/subscribe [:multiple-portfolio-attribution/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj attribution-choices :security))] (tables/attribution-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (map #(merge % ((keyword (get-in tables/attribution-table-columns [display-key-one :accessor])) %)) pivoted-positions)]
      (add-total-line-to-attribution-pivot (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data) (map keyword (:portfolios db))))))

(rf/reg-sub
  :portfolio-alignment/table
  (fn [db]
    (let [group (map keyword (:portfolios (first (filter #(= (:id %) (:portfolio-alignment/group db)) static/portfolio-alignment-groups))))
          pivoted-positions (:pivoted-positions db)
          base-kportfolio (first group)
          kportfolios (rest group)
          risk-choices (let [rfil @(rf/subscribe [:portfolio-alignment/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (map #(merge % ((keyword (get-in tables/risk-table-columns [(:portfolio-alignment/field db) :accessor])) %)) pivoted-positions)
          differentiate (fn [line] (reduce
                                     (fn [temp-line p] (assoc temp-line p (- (p temp-line) (base-kportfolio temp-line))))
                                     line
                                     kportfolios))
          pivoted-data-diff (map differentiate pivoted-data)
          threshold (* 0.01 (cljs.reader/read-string (:label (first (filter #(= (:id %) (:portfolio-alignment/threshold db)) static/threshold-choices-alignment)))))
          thfil (fn [line] (some (fn [x] (or (< x (- threshold)) (> x threshold))) (map line kportfolios)))
          pivoted-data-diff-post-th (filter thfil pivoted-data-diff)]
      (add-total-line-to-pivot (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-diff-post-th) kportfolios))))

(rf/reg-sub
  :summary-display/table
  (fn [db]
    (into [] (for [p (:portfolios db)]
               (merge
                 {:portfolio       p}
                 (into {} (for [k [:cash-pct :base-value :contrib-yield :contrib-zspread :contrib-gspread :contrib-mdur :qt-iam-int-lt-median-rating :qt-iam-int-lt-median-rating-score :contrib-beta-1y-daily]] [k (get-in (:total-positions db) [(keyword p) k])]))
                 {:contrib-bond-yield (- (get-in (:total-positions db) [(keyword p) :contrib-yield]) (reduce + (map :contrib-yield (filter #(and (= (:portfolio %) p) (not= (:asset-class %) "BONDS")) (:positions db)))))})))))

;;;;;;;;;
;; GUI ;;
;;;;;;;;;

(def dropdown-width "150px")
(def mini-dropdown-width "75px")

(defn single-bond-trade-history [state rowInfo instance]
  (clj->js {:onClick #(do (rf/dispatch [:get-single-bond-history
                                        (aget rowInfo "row" "_original" "NAME")
                                        (aget rowInfo "row" "_original" "id")
                                        [@(rf/subscribe [:single-portfolio-risk/portfolio])]
                                        "01Jan2019"
                                        @(rf/subscribe [:qt-date])])
                          (rf/dispatch [:get-bond-price-history
                                        (aget rowInfo "row" "_original" "NAME")
                                        "01Jan19"
                                        @(rf/subscribe [:qt-date])])
                          )
                          :style {:cursor "pointer"}}))

(defn single-portfolio-risk-display []
  (let [positions @(rf/subscribe [:positions])
        portfolio @(rf/subscribe [:single-portfolio-risk/portfolio])
        is-tree (= @(rf/subscribe [:single-portfolio-risk/display-style]) "Tree")
        portfolio-positions (filter #(= (:portfolio %) portfolio) positions)
        risk-choices (let [rfil @(rf/subscribe [:single-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
        additional-des-cols (remove (set (conj risk-choices "None")) (map :id static/risk-choice-map))
        accessors (mapv :accessor grouping-columns)
        display @(rf/subscribe [:single-portfolio-risk/table])]
    [:> ReactTable
     {:data                display
      :defaultFilterMethod tables/case-insensitive-filter
      :columns             [{:Header "Groups" :columns grouping-columns}
                            {:Header "NAV" :columns (mapv tables/risk-table-columns [:nav :bm-weight :weight-delta])}
                            {:Header "Duration" :columns (mapv tables/risk-table-columns [:contrib-mdur :bm-contrib-eir-duration :mdur-delta])}
                            {:Header "Yield" :columns (mapv tables/risk-table-columns [:contrib-yield :bm-contrib-yield])}
                            {:Header "Z-spread" :columns (mapv tables/risk-table-columns [:contrib-zspread])}
                            {:Header "Beta"  :columns (mapv tables/risk-table-columns [:contrib-beta])}
                            {:Header "Position" :columns (mapv tables/risk-table-columns [:value :nominal])}
                            ;{:Header "Index contribution" :columns (mapv tables/table-columns [:bm-contrib-yield :bm-contrib-eir-duration])}
                            {:Header (if is-tree "Bond analytics (median)" "Bond analytics") :columns (mapv tables/risk-table-columns [:yield :z-spread :g-spread :duration :total-return-ytd :cembi-beta-last-year :cembi-beta-previous-year :jensen-ytd])}
                            {:Header "Description" :columns (mapv tables/risk-table-columns (into [] (concat [:rating :isin] additional-des-cols [:description])))}]
      :showPagination      (not is-tree)
      :sortable            (not is-tree)
      :filterable          (not is-tree)
      :pageSize            (if is-tree (inc (count (distinct (map (keyword (first accessors)) portfolio-positions)))) 25) ;(inc (count display))
      :showPageSizeOptions false
      :className           "-striped -highlight"
      :pivotBy             (if is-tree accessors [])
      :getTrProps          single-bond-trade-history
      :defaultFiltered     (if is-tree [] @(rf/subscribe [:single-portfolio-risk/table-filter])) ; [{:id "analyst" :value "Tammy"}]
      :onFilteredChange    #(rf/dispatch [:single-portfolio-risk/table-filter %])}]))

(defn single-bond-trade-flat-history [state rowInfo instance]
  (clj->js {:onClick #(rf/dispatch [:get-single-bond-flat-history
                                   (aget rowInfo "row" "_original" "NAME")
                                   (aget rowInfo "row" "_original" "id")
                                   @(rf/subscribe [:portfolios])
                                   "01Jan2019"
                                   @(rf/subscribe [:qt-date])])
            :style {:cursor "pointer"}}))

(defn multiple-portfolio-risk-display []
  (let [display-key-one @(rf/subscribe [:multiple-portfolio-risk/field-one])
        width-one 100                                      ;(get-in tables/table-columns [display-key-one :width])
        is-tree (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:multiple-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
        accessors (mapv :accessor grouping-columns)
        display-one @(rf/subscribe [:multiple-portfolio-risk/table])
        cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (some #{p} @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]))]
                        {:Header p
                         :accessor p
                         :width width-one
                         :style {:textAlign "right"}
                         :aggregate tables/sum-rows
                         :Cell (get-in tables/risk-table-columns [display-key-one :Cell])
                         :filterable false}))]
    ;(println display-one)
    [:> ReactTable
     {:data                display-one
      :defaultFilterMethod tables/case-insensitive-filter
      :columns             [{:Header "Groups" :columns grouping-columns}
                            {:Header  (str "Portfolio " (name display-key-one)) :columns cols}
                            {:Header  "Description" :columns (mapv tables/risk-table-columns [:rating :isin :description])}]
      :showPagination      (not is-tree)
      :sortable            (not is-tree)
      :filterable          (not is-tree)
      :pageSize            (if is-tree (inc (count (distinct (map (keyword (first accessors)) display-one)))) 25)
      :showPageSizeOptions false
      :className           "-striped -highlight"
      :pivotBy             (if is-tree accessors [])
      :getTrProps          single-bond-trade-flat-history
      :defaultFiltered     (if is-tree [] @(rf/subscribe [:multiple-portfolio-risk/table-filter])) ; [{:id "analyst" :value "Tammy"}]
      :onFilteredChange    #(rf/dispatch [:multiple-portfolio-risk/table-filter %])}]))

(defn portfolio-alignment-risk-display []
  (let [
        group (:portfolios (first (filter #(= (:id %) @(rf/subscribe [:portfolio-alignment/group])) static/portfolio-alignment-groups)))
        base-portfolio (first group)
        portfolios (rest group)
        display-key @(rf/subscribe [:portfolio-alignment/field])
        cell-one (get-in tables/risk-table-columns [display-key :Cell])
        width-one 100
        is-tree (= @(rf/subscribe [:portfolio-alignment/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:portfolio-alignment/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
        accessors (mapv :accessor grouping-columns)
        display @(rf/subscribe [:portfolio-alignment/table])]
    [:> ReactTable
     {:data                display
      :defaultFilterMethod tables/case-insensitive-filter
      :columns
                           [{:Header "Groups" :columns grouping-columns}
                            {:Header  (str "Portfolio " (name display-key) " vs " base-portfolio)
                             :columns (into [] (for [p portfolios] {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :Cell cell-one :filterable false}))}
                            {:Header  "Description"
                             :columns [{:Header "thinkFolio ID" :accessor "description" :width 500} (tables/risk-table-columns :rating)]}]
      :showPagination      (not is-tree)
      :sortable            (not is-tree)
      :filterable          (not is-tree)
      :pageSize            (if is-tree (inc (count (distinct (map (keyword (first accessors)) display)))) 25)
      :showPageSizeOptions false
      :className           "-striped -highlight"
      :pivotBy             (if is-tree accessors [])
      :defaultFiltered     (if is-tree [] @(rf/subscribe [:portfolio-alignment/table-filter])) ; [{:id "analyst" :value "Tammy"}]
      :onFilteredChange    #(rf/dispatch [:portfolio-alignment/table-filter %])}]))

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
               [single-dropdown
                :width dropdown-width
                :model (r/cursor risk-filter [i])
                :choices static/risk-choice-map
                :on-change #(rf/dispatch [key i %])]))))

(defn single-portfolio-risk-controller []
  (let [portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:single-portfolio-risk/display-style])
        portfolio (rf/subscribe [:single-portfolio-risk/portfolio])
        hide-zero-risk (rf/subscribe [:single-portfolio-risk/hide-zero-holdings])]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Portfolio drill-down " @(rf/subscribe [:qt-date])) :level :level1]
                 [h-box :gap "50px"
                  :children [
                             [v-box :gap "15px"
                              :children [
                                         [h-box
                                          :gap "10px"
                                          :children [
                                                     [title :label "Display type:" :level :level3]
                                                     [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(rf/dispatch [:single-portfolio-risk/display-style %])]]]
                                         [checkbox :model hide-zero-risk :label "Hide zero positions in table view" :disabled? (= @display-style "Tree") :on-change #(rf/dispatch [:single-portfolio-risk/hide-zero-holdings %])]]]
                             [v-box :gap "10px" :children [
                                                           [h-box :gap "10px" :children
                                                            (into [] (concat [[title :label "Filtering:" :level :level3]
                                                                              [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:single-portfolio-risk/portfolio %])]]
                                                                             (filtering-row :single-portfolio-risk/filter)))]
                                                           [h-box :gap "20px" :children (into [] (concat
                                                                                                   (shortcut-row :single-portfolio-risk/shortcut)
                                                                                                   [[gap :size "50px"]
                                                                                                    [title :label "Download:" :level :level3]
                                                                                                     [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link @(rf/subscribe [:single-portfolio-risk/table]) @portfolio)]]))]]]]]
                 [single-portfolio-risk-display]]]]))

(defn multiple-portfolio-risk-controller []
  (let [portfolio-map (into [] (for [p  @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:multiple-portfolio-risk/display-style])
        portfolios @(rf/subscribe [:portfolios])
        selected-portfolios (rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        number-of-fields (rf/subscribe [:multiple-portfolio-risk/field-number])
        field-one (rf/subscribe [:multiple-portfolio-risk/field-one])
        field-two (rf/subscribe [:multiple-portfolio-risk/field-two])
        hide-zero-risk (rf/subscribe [:multiple-portfolio-risk/hide-zero-holdings])
        download-columns (concat (map keyword portfolios) (map keyword (remove nil? (map #(get-in tables/risk-table-columns [% :accessor]) (map :id static/risk-choice-map)))) [:isin :description])
        ]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Portfolio drill-down " @(rf/subscribe [:qt-date])) :level :level1]
                 [h-box :gap "50px"
                  :children
                             [
                              [v-box :gap "20px"
                               :children [
                                          [h-box :gap "10px" :children [[title :label "Display type:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(rf/dispatch [:multiple-portfolio-risk/display-style %])]]]
                                          [checkbox :model hide-zero-risk :label "Hide zero positions in table view" :disabled? (= @display-style "Tree") :on-change #(rf/dispatch [:multiple-portfolio-risk/hide-zero-holdings %])]
                                          [h-box :gap "10px" :children [[title :label "Field:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model field-one :choices static/risk-field-choices :on-change #(rf/dispatch [:multiple-portfolio-risk/field-one %])]]]]]
                              [v-box :gap "10px"
                               :children [[title :label "Portfolios:" :level :level3]
                                          [button :style {:width "100%"} :label "All"      :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set portfolios)])]
                                          [button :style {:width "100%"} :label "None"     :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios #{}])]
                                          [button :style {:width "100%"} :label "CEMBI"    :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :cembi)) static/portfolio-alignment-groups))))])]
                                          [button :style {:width "100%"} :label "Allianz"  :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :allianz)) static/portfolio-alignment-groups))))])]
                                          [button :style {:width "100%"} :label "IG"       :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :ig)) static/portfolio-alignment-groups))))])]
                                          [button :style {:width "100%"} :label "Talanx"   :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :talanx)) static/portfolio-alignment-groups))))])]]]
                              [selection-list :width dropdown-width :model selected-portfolios :choices portfolio-map :on-change #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios %])]
                              [v-box :gap "20px"
                               :children [[h-box :gap "10px" :children (into [] (concat [[title :label "Filtering:" :level :level3]] (filtering-row :multiple-portfolio-risk/filter)))]
                                          [h-box :gap "10px" :children (shortcut-row :multiple-portfolio-risk/shortcut)]
                                          [h-box :gap "10px" :children [ [title :label "Download:" :level :level3]
                                                                        [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link @(rf/subscribe [:multiple-portfolio-risk/table]) "pivot" download-columns)]]]]]]]
                 [multiple-portfolio-risk-display]]]]))

(defn portfolio-alignment-risk-controller []
  (let [display-style (rf/subscribe [:portfolio-alignment/display-style])
        ;risk-filter (rf/subscribe [:portfolio-alignment/filter])
        portfolio-alignment-group (rf/subscribe [:portfolio-alignment/group])
        field (rf/subscribe [:portfolio-alignment/field])
        threshold (rf/subscribe [:portfolio-alignment/threshold])]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Portfolio alignment " @(rf/subscribe [:qt-date])) :level :level1]
                 [h-box :gap "50px"
                  :children
                  [[v-box :gap "20px"
                    :children [[h-box :gap "10px" :children [[title :label "Display type:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(rf/dispatch [:portfolio-alignment/display-style %])]]]
                               [h-box :gap "10px" :children [[title :label "Field:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model field :choices static/risk-field-choices :on-change #(rf/dispatch [:portfolio-alignment/field %])]]]
                               [h-box :gap "10px" :children [[title :label "Threshold:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model threshold :choices static/threshold-choices-alignment :on-change #(rf/dispatch [:portfolio-alignment/threshold %])]]]]]
                   [v-box :gap "20px"
                     :children [[h-box :gap "10px" :children [[title :label "Portfolios:" :level :level3] [gap :size "1"]
                                                              [single-dropdown :width dropdown-width :model portfolio-alignment-group :choices static/portfolio-alignment-groups :on-change #(rf/dispatch [:portfolio-alignment/group %])]]]]]

                   [v-box :gap "20px"
                    :children [[h-box :gap "10px" :children (into [] (concat [[title :label "Filtering:" :level :level3]] (filtering-row :portfolio-alignment/filter)))]
                               [h-box :gap "10px" :children (shortcut-row :portfolio-alignment/shortcut)]
                               [h-box :gap "10px" :children [ [title :label "Download:" :level :level3]
                                                             [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link @(rf/subscribe [:portfolio-alignment/table]) "alignment")]]]]]]]
                 [portfolio-alignment-risk-display]]]]))


(defn go-to-portfolio-risk [state rowInfo instance] (clj->js {:onClick #(do (rf/dispatch-sync [:navigation/active-home :single-portfolio]) (rf/dispatch [:single-portfolio-risk/portfolio (aget rowInfo "row" "portfolio")])) :style {:cursor "pointer"}}))

(defn summary-display []
   [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[h-box :align :center :children [[title :label (str "Summary " @(rf/subscribe [:qt-date])) :level :level1]
                                                  [gap :size "1"]
                                                  [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link @(rf/subscribe [:summary-display/table]) "summary")]]]
    [:> ReactTable
     {:data           @(rf/subscribe [:summary-display/table])
      :columns        [{:Header "Portfolio" :accessor "portfolio" :width 120}
                       {:Header "Balance" :columns (mapv tables/risk-table-columns [:value :cash-pct])}
                       {:Header "Value" :columns [(assoc (tables/risk-table-columns :contrib-yield) :Header "Yield")
                                                  (tables/risk-table-columns :contrib-bond-yield)
                                                  (assoc (tables/risk-table-columns :contrib-mdur) :Header "M Dur")
                                                  (tables/risk-table-columns :rating)
                                                  (assoc (tables/risk-table-columns :rating-score) :width 60)
                                                  (assoc (tables/risk-table-columns :contrib-zspread) :Header "Z-spread")
                                                  (assoc (tables/risk-table-columns :contrib-gspread) :Header "G-spread")
                                                  (assoc (tables/risk-table-columns :contrib-beta) :Header "Beta")
                                                  ]}]
      :showPagination false
      :pageSize       (count @(rf/subscribe [:portfolios]))
      :getTrProps     go-to-portfolio-risk
      :className      "-striped -highlight"}]]]])

(defn portfolio-history-table []
  (let [data @(rf/subscribe [:portfolio-trade-history/data])]
    (if @(rf/subscribe [:single-bond-trade-history/show-throbber])
      [box :align :center :child [throbber :size :large]]
      [box :align :center
       :child [:> ReactTable
                {:data           data
                 :columns        (concat [{:Header "Date" :accessor "TradeDate" :width 100 :Cell th/subs10}
                                          {:Header "Type" :accessor "TransactionTypeName" :width 100}
                                          ;{:Header "Instrument" :accessor "IssueName" :width 400}
                                          {:Header "Instrument" :accessor "NAME" :width 200}
                                          {:Header "SEDOL" :accessor "SEDOL" :width 100}
                                          {:Header "CCY" :accessor "LocalCcy" :width 60}
                                          {:Header "Notional" :accessor "Quantity" :width 100 :style {:textAlign "right"} :Cell th/nfh} ;
                                          {:Header "Price" :accessor "PriceLcl" :width 75 :style {:textAlign "right"} :Cell tables/round2}
                                          {:Header "Counterparty" :accessor "counterparty_code" :width 100}]
                                         (if (= @(rf/subscribe [:portfolio-trade-history/performance]) "Yes")
                                           [{:Header "Last price" :accessor "last-price" :width 75 :style {:textAlign "right"} :Cell tables/round2}
                                            {:Header "Total return" :accessor "total-return" :width 100 :style {:textAlign "right"} :Cell tables/round2pc}
                                            {:Header "TR vs CEMBI" :accessor "tr-vs-cembi" :width 100 :style {:textAlign "right"} :Cell tables/round2pc}]))
                 :showPagination  (> (count data) 50)
                 :defaultPageSize (min 50 (count data))
                 :filterable      true
                 :defaultFilterMethod tables/case-insensitive-filter
                 :className      "-striped -highlight"}]])))

(defn trade-history []
  (let [portfolio (rf/subscribe [:portfolio-trade-history/portfolio])
        performance (rf/subscribe [:portfolio-trade-history/performance])
        portfolio-map (into [] (for [p (concat @(rf/subscribe [:portfolios])
                                               ["FOGEMBLCR" "FU4EMBLCR" "FOLLCBLN" "FNYEMD" "FNYAKEMD" "ICOMPEMD" "ITOPEMD" "IWHITEMD" "INSWIEMD" "IGARDEMD" "OGEMMUL" "FAPFCEMD"] ;blend
                                               ["OGGBOND" "OLLCGUF"] ;target return
                                               )] {:id p :label p}))
        start-date (rf/subscribe [:portfolio-trade-history/start-date])
        end-date (rf/subscribe [:portfolio-trade-history/end-date])]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :gap "20px"
      :children [[title :label (str "Trade history for " @portfolio) :level :level1]
                 [h-box :gap "50px"
                  :children [[v-box :gap "15px"
                              :children [[h-box
                                          :width "1200px"
                                          :gap "10px"
                                          :children [[title :label "Portfolio:" :level :level3]
                                                     [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:portfolio-trade-history/portfolio %])]
                                                     [gap :size "20px"]
                                                     [title :label "Start:" :level :level3]
                                                     [datepicker-dropdown
                                                      :model start-date
                                                      :minimum (tools/int-to-gdate 20120101)
                                                      :maximum (today)
                                                      :format "dd/MM/yyyy" :show-today? true :on-change #(rf/dispatch [:portfolio-trade-history/start-date %])]
                                                     [gap :size "20px"]
                                                     [title :label "End:" :level :level3]
                                                     [datepicker-dropdown
                                                      :model end-date
                                                      :minimum (tools/int-to-gdate 20120101)
                                                      :maximum (today)
                                                      :format "dd/MM/yyyy" :show-today? false :on-change #(rf/dispatch [:portfolio-trade-history/end-date %])]
                                                     [gap :size "20px"]
                                                     [title :label "Get performance?" :level :level3]
                                                     [single-dropdown :width mini-dropdown-width :model performance :choices [{:id "No" :label "No"} {:id "Yes" :label "Yes"}] :on-change #(rf/dispatch [:portfolio-trade-history/performance %])]
                                                     [gap :size "20px"]
                                                     [button :label "Fetch" :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:get-portfolio-trade-history @portfolio @start-date @end-date])]
                                                     [gap :size "20px"]
                                                     [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link @(rf/subscribe [:portfolio-trade-history/data]) @portfolio)]]]]]]]
                 [portfolio-history-table]]]]))