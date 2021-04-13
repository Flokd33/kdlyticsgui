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
    ["react-table-v6" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]
    [jasminegui.tools :as tools]
    [jasminegui.tables :as tables]
    [jasminegui.tools :as t]
    ;[jasminegui.tradehistory :as th]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [cljs-time.core :refer [today]]
    [reagent-contextmenu.menu :as rcm]
    )
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )


;;;;;;;;;;;;;;;;;;;
;; SUBSCRIPTIONS ;;
;;;;;;;;;;;;;;;;;;;

(defn first-level-sort [x]
  (case x
    "Cash"        "AAA"
    "Collateral"  "ZZZ"
    "Forwards"    "ZZZ"
    "Equities"    "ZZZ"
    x))

(defn add-total-line-to-pivot [pivoted-table kportfolios]
  (let [total-line (merge
                     (into {} (for [k [:jpm-region :qt-jpm-sector :qt-risk-country-name :TICKER :NAME :description :isin :qt-iam-int-lt-median-rating-score :qt-final-maturity-band]] [k "Total"]))
                     (into {} (for [p kportfolios] [p (reduce + (map p pivoted-table))])))]
    (conj pivoted-table total-line)))

(defn add-total-line-to-attribution-pivot [pivoted-table kportfolios]
  (let [template (into {} (for [[k v] (last pivoted-table)] [k "Total"])) ;this is a bit hacky but we use *last* instead of *first* which can be empty
        total-line (merge template (into {} (for [p kportfolios] [p (reduce + (map p pivoted-table))])))]
    (conj pivoted-table total-line)))


(rf/reg-sub
  :single-portfolio-risk/table
  (fn [db]
    (let [portfolio (:single-portfolio-risk/portfolio db)
          portfolio-total-line (assoc ((:total-positions db) (keyword portfolio)) :qt-iam-int-lt-median-rating "Total" :qt-iam-int-lt-median-rating-score "00 Total")
          portfolio-positions (filter #(= (:portfolio %) portfolio) (:positions db))
          viewable-positions (if (:single-portfolio-risk/hide-zero-holdings db) (filter #(not= (:original-quantity %) 0) portfolio-positions) portfolio-positions)
          risk-choices (let [rfil (:single-portfolio-risk/filter db)] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          sorted-data (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) viewable-positions)]
      (if (= (:single-portfolio-risk/display-style db) "Tree")
        (tables/cljs-text-filter-OR (:single-portfolio-risk/table-filter db) (mapv #(assoc %1 :totaldummy "") sorted-data))
        (conj sorted-data portfolio-total-line)))))

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
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          sorted-data (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) data)]
      (if (= (:single-portfolio-attribution/display-style db) "Tree")
        (tables/cljs-text-filter-OR (:single-portfolio-attribution/table-filter db) (mapv #(assoc %1 :totaldummy "") sorted-data))
        (conj sorted-data portfolio-total-line)))))


(defn seek [coll] (first (remove nil? coll)))

(defn get-pivoted-data [table portfolios instruments field]
  (let [grp (group-by (juxt :id :portfolio) table)]
    (into [] (for [instrument instruments]
               (merge (first (seek (map #(get-in grp [[instrument %]]) portfolios))) ;the template
                      (into {} (for [p portfolios] [(keyword p) (if (first (get-in grp [[instrument p]])) (reduce + (map field (get-in grp [[instrument p]]))) 0.)]))))))) ;(reduce + (map field (get-in grp [[instrument p]])))

(rf/reg-sub
  :multiple-portfolio-risk/table
  (fn [db]
    (let [kselected-portfolios (mapv keyword (:multiple-portfolio-risk/selected-portfolios db))
          hide-zero-risk (:multiple-portfolio-risk/hide-zero-holdings db)
          display-key-one (:multiple-portfolio-risk/field-one db)
          risk-choices (let [rfil (:multiple-portfolio-risk/filter db)] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pos (t/chainfilter {:portfolio #(some #{%} (:multiple-portfolio-risk/selected-portfolios db))} (:positions db))
          pivoted-data (get-pivoted-data pos (:multiple-portfolio-risk/selected-portfolios db) (distinct (map :id pos)) (keyword (get-in tables/risk-table-columns [display-key-one :accessor])))
          thfil (fn [line] (not (every? zero? (map line kselected-portfolios))))
          pivoted-data-hide-zero (if hide-zero-risk (filter thfil pivoted-data) pivoted-data)
          sorted-data (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-hide-zero)]
      (if (= (:multiple-portfolio-risk/display-style db) "Tree")
        (tables/cljs-text-filter-OR (:multiple-portfolio-risk/table-filter db) (mapv #(assoc %1 :totaldummy "") sorted-data))
        (add-total-line-to-pivot  sorted-data kselected-portfolios)))))

(rf/reg-sub
  :multiple-portfolio-attribution/clean-table
  (fn [db]
    (let [kselected-portfolios (mapv keyword (:multiple-portfolio-attribution/selected-portfolios db))
          pivoted-positions (:multiple-portfolio-attribution/table db)
          display-key-one (:multiple-portfolio-attribution/field-one db)
          attribution-choices (let [rfil (:multiple-portfolio-attribution/filter db)] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj attribution-choices :security))] (tables/attribution-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (map #(merge % ((keyword (get-in tables/attribution-table-columns [display-key-one :accessor])) %)) pivoted-positions)
          sorted-data (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data)]
      (if (= (:multiple-portfolio-attribution/display-style db) "Tree")
        (tables/cljs-text-filter-OR (:multiple-portfolio-attribution/table-filter db) (mapv #(assoc %1 :totaldummy "") sorted-data))
        (add-total-line-to-attribution-pivot sorted-data kselected-portfolios)))))

(rf/reg-sub
  :portfolio-alignment/table
  (fn [db]
    (let [group (map keyword (:portfolios (first (filter #(= (:id %) (:portfolio-alignment/group db)) static/portfolio-alignment-groups))))
          base-kportfolio (first group)
          kportfolios (rest group)
          risk-choices (let [rfil (:portfolio-alignment/filter db)] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (get-pivoted-data (:positions db) (:portfolios db) (:all-instrument-ids db) (keyword (get-in tables/risk-table-columns [(:portfolio-alignment/field db) :accessor])))
          differentiate (fn [line] (reduce
                                     (fn [temp-line p] (assoc temp-line p (- (p temp-line) (base-kportfolio temp-line))))
                                     line
                                     kportfolios))
          pivoted-data-diff (map differentiate pivoted-data)
          threshold (* 0.01 (cljs.reader/read-string (:label (first (filter #(= (:id %) (:portfolio-alignment/threshold db)) static/threshold-choices-alignment)))))
          thfil (fn [line] (some (fn [x] (or (< x (- threshold)) (> x threshold))) (map line kportfolios)))
          pivoted-data-diff-post-th (filter thfil pivoted-data-diff)
          sorted-data (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-diff-post-th)]
      (if (= (:portfolio-alignment/display-style db) "Tree")
        (tables/cljs-text-filter-OR (:portfolio-alignment/table-filter db) (mapv #(assoc %1 :totaldummy "") sorted-data))
        (add-total-line-to-pivot  sorted-data kportfolios))
      )))

(rf/reg-sub
  :summary-display/table
  (fn [db]
    (into [] (for [p (:portfolios db)]
               (merge
                 {:portfolio       p}
                 (into {} (for [k [:cash-pct :base-value :contrib-yield :contrib-zspread :contrib-gspread :contrib-mdur :qt-iam-int-lt-median-rating :qt-iam-int-lt-median-rating-score :contrib-beta-1y-daily :quant-value-4d :quant-value-2d]] [k (get-in (:total-positions db) [(keyword p) k])]))
                 {:contrib-bond-yield (- (get-in (:total-positions db) [(keyword p) :contrib-yield]) (reduce + (map :contrib-yield (filter #(and (= (:portfolio %) p) (not= (:asset-class %) "BONDS")) (:positions db)))))})))))

;;;;;;;;;
;; GUI ;;
;;;;;;;;;

(def max-width "1675px")
(def dropdown-width "150px")
(def mini-dropdown-width "75px")

(defn single-bond-trade-history-event [state rowInfo instance]
  (do (rf/dispatch [:get-single-bond-history
                    (aget rowInfo "row" "_original" "NAME")
                    (aget rowInfo "row" "_original" "id")
                    [@(rf/subscribe [:single-portfolio-risk/portfolio])]
                    "01Jan2019"
                    @(rf/subscribe [:qt-date])])
      (rf/dispatch [:get-bond-price-history
                    (aget rowInfo "row" "_original" "NAME")
                    "01Jan19"
                    @(rf/subscribe [:qt-date])])))

(def single-portfolio-risk-display-view (atom nil))

(defn fnevt [state rowInfo instance evt]
  (rcm/context!
    evt
    [(aget rowInfo "original" "NAME")                                         ; <---- string is a section title
     ["Copy ISIN" (fn [] (tools/copy-to-clipboard (aget rowInfo "original" "isin")))]
     ["Trade history" (fn [] (single-bond-trade-history-event state rowInfo instance))]         ; <---- the name is a span
     ;["Build ticket" (fn [] (prn "my-fn"))]
     ]))

(defn on-click-context [state rowInfo instance]
  (clj->js {:onClick #(fnevt state rowInfo instance %) :style {:cursor "pointer"}}))



(defn single-portfolio-risk-display []
  (let [is-tree (= @(rf/subscribe [:single-portfolio-risk/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:single-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
        additional-des-cols (remove (set (conj risk-choices "None")) (map :id static/risk-choice-map))]
    [tables/tree-table-risk-table
     :single-portfolio-risk/table
     [{:Header "Groups" :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
      {:Header "NAV" :columns (mapv tables/risk-table-columns [:nav :bm-weight :weight-delta])}
      {:Header "Duration" :columns (mapv tables/risk-table-columns [:contrib-mdur :bm-contrib-eir-duration :mdur-delta])}
      {:Header "Yield" :columns (mapv tables/risk-table-columns [:contrib-yield :bm-contrib-yield])}
      {:Header "Z-spread" :columns (mapv tables/risk-table-columns [:contrib-zspread])}
      {:Header "Beta" :columns (mapv tables/risk-table-columns [:contrib-beta])}
      {:Header "Quant model" :columns (mapv tables/risk-table-columns [:quant-value-4d :quant-value-2d])}
      {:Header "Position" :columns (mapv tables/risk-table-columns [:value :nominal])}
      ;{:Header "Index contribution" :columns (mapv tables/table-columns [:bm-contrib-yield :bm-contrib-eir-duration])}
      {:Header (if is-tree "Bond analytics (median)" "Bond analytics") :columns (mapv tables/risk-table-columns [:yield :z-spread :g-spread :duration :total-return-ytd :cembi-beta-last-year :cembi-beta-previous-year :jensen-ytd])}
      {:Header "Description" :columns (mapv tables/risk-table-columns (into [] (concat [:rating :isin] additional-des-cols [:description])))}]
     is-tree
     (mapv :accessor grouping-columns)
     single-portfolio-risk-display-view
     :single-portfolio-risk/table-filter
     :single-portfolio-risk/expander
     on-click-context]))


(defn single-bond-trade-flat-history [state rowInfo instance]
  (clj->js {:onClick #(rf/dispatch [:get-single-bond-flat-history
                                   (aget rowInfo "row" "_original" "NAME")
                                   (aget rowInfo "row" "_original" "id")
                                   @(rf/subscribe [:portfolios])
                                   "01Jan2019"
                                   @(rf/subscribe [:qt-date])])
            :style {:cursor "pointer"}}))

(def multiple-portfolio-risk-display-view (atom nil))

(defn multiple-bond-trade-history-event [state rowInfo instance]
  (do (rf/dispatch [:get-single-bond-flat-history
                    (aget rowInfo "row" "_original" "NAME")
                    (aget rowInfo "row" "_original" "id")
                    @(rf/subscribe [:portfolios])
                    "01Jan2019"
                    @(rf/subscribe [:qt-date])])))

(defn fnevt-multiple [state rowInfo instance evt]
  (rcm/context!
    evt
    [(aget rowInfo "original" "NAME")                                         ; <---- string is a section title
     ["Copy ISIN" (fn [] (tools/copy-to-clipboard (aget rowInfo "original" "isin")))]
     ["Trade history" (fn [] (multiple-bond-trade-history-event state rowInfo instance))]         ; <---- the name is a span
     ;["Build ticket" (fn [] (prn "my-fn"))]
     ]))

(defn on-click-context-multiple [state rowInfo instance]
  (clj->js {:onClick #(fnevt-multiple state rowInfo instance %) :style {:cursor "pointer"}}))

(defn multiple-portfolio-risk-display []
  (let [display-key-one @(rf/subscribe [:multiple-portfolio-risk/field-one])
        width-one 80
        is-tree (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:multiple-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
        cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (some #{p} @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]))]
                        {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :filterable false
                         :Cell (let [v (get-in tables/risk-table-columns [display-key-one :Cell])] (case display-key-one :nav tables/round2*100-if-pos :contrib-mdur tables/round2-if-pos v))}))]
    [tables/tree-table-risk-table
     :multiple-portfolio-risk/table
     [{:Header "Groups" :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
      {:Header (str "Portfolio " (name display-key-one)) :columns cols}
      {:Header "Description" :columns (mapv tables/risk-table-columns [:rating :isin :description])}]
     (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
     (mapv :accessor grouping-columns)
     multiple-portfolio-risk-display-view
     :multiple-portfolio-risk/table-filter
     :multiple-portfolio-risk/expander
     on-click-context-multiple]))

(def portfolio-alignment-risk-display-view (atom nil))

(defn portfolio-alignment-risk-display []
  (let [group (:portfolios (first (filter #(= (:id %) @(rf/subscribe [:portfolio-alignment/group])) static/portfolio-alignment-groups)))
        base-portfolio (first group)
        portfolios (rest group)
        display-key @(rf/subscribe [:portfolio-alignment/field])
        cell-one (get-in tables/risk-table-columns [display-key :Cell])
        width-one 80
        is-tree (= @(rf/subscribe [:portfolio-alignment/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:portfolio-alignment/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))]
    [tables/tree-table-risk-table
     :portfolio-alignment/table
     [{:Header "Groups" :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
      {:Header "Actual NAV" :columns [{:Header base-portfolio :accessor base-portfolio :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :Cell cell-one :filterable false}]}
      {:Header  (str "Portfolio " (name display-key) " vs " base-portfolio)
       :columns (into [] (for [p portfolios] {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :Cell cell-one :filterable false}))}
      {:Header  "Description" :columns [{:Header "thinkFolio ID" :accessor "description" :width 500} (tables/risk-table-columns :rating)]}]
     is-tree
     (mapv :accessor grouping-columns)
     portfolio-alignment-risk-display-view
     :portfolio-alignment/table-filter
     :portfolio-alignment/expander
     on-click-context-multiple]))

(defn shortcut-row [key]
  (let [shortcut (rf/subscribe [key])]
    (into [] (concat [[title :label "Shortcuts:" :level :level3]]
               (into [] (for [i (range 1 5)]
                          [md-circle-icon-button :md-icon-name (str "zmdi-collection-item-" i) :class (if (= @shortcut i) "active" "default") :on-click #(rf/dispatch [key i])]))))))

(defn filtering-row [key]
  (let [risk-filter (rf/subscribe [key])]
    (into [] (for [i (range 1 4)]
               [single-dropdown :width dropdown-width :model (r/cursor risk-filter [i]) :choices static/risk-choice-map :on-change #(rf/dispatch [key i %])]))))

(defn single-portfolio-risk-controller []
  (let [portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:single-portfolio-risk/display-style])
        portfolio (rf/subscribe [:single-portfolio-risk/portfolio])
        hide-zero-risk (rf/subscribe [:single-portfolio-risk/hide-zero-holdings])]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px" :width max-width
      :children [[title :label (str "Portfolio drill-down " @(rf/subscribe [:qt-date])) :level :level1]
                 [h-box :gap "50px"
                  :children [[v-box :gap "15px"
                              :children [[h-box :gap "10px"
                                          :children [[title :label "Display type:" :level :level3]
                                                     [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(do (rf/dispatch [:single-portfolio-risk/display-style %])  (rf/dispatch [:single-portfolio-risk/hide-zero-holdings (= % "Table")]))]]]
                                         [checkbox :model hide-zero-risk :label "Hide zero positions? (index won't sum to 100!)"  :on-change #(rf/dispatch [:single-portfolio-risk/hide-zero-holdings %])]]] ;:disabled? (= @display-style "Tree")
                             [v-box :gap "10px" :children [[h-box :gap "10px" :children
                                                            (into [] (concat [[title :label "Filtering:" :level :level3]
                                                                              [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:single-portfolio-risk/portfolio %])]]
                                                                             (filtering-row :single-portfolio-risk/filter)))]
                                                           [h-box :gap "20px" :children (into [] (concat
                                                                                                   (shortcut-row :single-portfolio-risk/shortcut)
                                                                                                   [[gap :size "50px"]
                                                                                                    [title :label "Download:" :level :level3]
                                                                                                     [md-circle-icon-button :md-icon-name "zmdi-download"
                                                                                                      :on-click #(tools/react-table-to-csv @single-portfolio-risk-display-view @portfolio (concat ["NAME" "isin" "description"] (map name (keys (last @(rf/subscribe [:single-portfolio-risk/table]))))))
                                                                                                      ;ls/csv-link @(rf/subscribe [:single-portfolio-risk/table]) @portfolio)
                                                                                                      ]]))]]]]]
                 [single-portfolio-risk-display]]]]))

(defn multiple-portfolio-risk-controller []
  (let [portfolio-map (into [] (for [p  @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:multiple-portfolio-risk/display-style])
        portfolios @(rf/subscribe [:portfolios])
        selected-portfolios (rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        ;number-of-fields (rf/subscribe [:multiple-portfolio-risk/field-number])
        field-one (rf/subscribe [:multiple-portfolio-risk/field-one])
        ;field-two (rf/subscribe [:multiple-portfolio-risk/field-two])
        hide-zero-risk (rf/subscribe [:multiple-portfolio-risk/hide-zero-holdings])
        ;download-columns-old (concat (map keyword portfolios) (map keyword (remove nil? (map #(get-in tables/risk-table-columns [% :accessor]) (map :id static/risk-choice-map)))) [:isin :description])
        download-columns (concat ["NAME" "isin" "description"] portfolios (map name (remove nil? (map #(get-in tables/risk-table-columns [% :accessor]) (map :id static/risk-choice-map)))))
        ]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px" :width max-width
      :children [[title :label (str "Portfolio drill-down " @(rf/subscribe [:qt-date])) :level :level1]
                 [h-box :gap "50px"
                  :children
                             [
                              [v-box :gap "20px"
                               :children [
                                          [h-box :gap "10px" :children [[title :label "Display type:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(do (rf/dispatch [:multiple-portfolio-risk/display-style %])  (rf/dispatch [:multiple-portfolio-risk/hide-zero-holdings (= % "Table")]))]]]
                                          [checkbox :model hide-zero-risk :label "Hide zero lines?"  :on-change #(rf/dispatch [:multiple-portfolio-risk/hide-zero-holdings %])] ;:disabled? (= @display-style "Tree")
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
                                          [h-box :gap "10px" :children [[title :label "Download:" :level :level3]
                                                                        [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/react-table-to-csv @multiple-portfolio-risk-display-view "pivot" download-columns)]]]]]]]
                 [multiple-portfolio-risk-display]]]]))

(defn portfolio-alignment-risk-controller []
  (let [display-style (rf/subscribe [:portfolio-alignment/display-style])
        ;risk-filter (rf/subscribe [:portfolio-alignment/filter])
        portfolio-alignment-group (rf/subscribe [:portfolio-alignment/group])
        field (rf/subscribe [:portfolio-alignment/field])
        threshold (rf/subscribe [:portfolio-alignment/threshold])]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px" :width max-width
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
                               [h-box :gap "10px" :children [[title :label "Download:" :level :level3]
                                                             [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/react-table-to-csv @portfolio-alignment-risk-display-view
                                                                                                                                             "alignment"
                                                                                                                                                       (map name (concat [:NAME :description :isin :jpm-region :qt-risk-country-name :qt-jpm-sector :qt-iam-int-lt-median-rating] (map keyword (:portfolios (first (filter (fn [x] (= (:id x) @(rf/subscribe [:portfolio-alignment/group]))) static/portfolio-alignment-groups)))))))]]]]]]]
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
      :columns        [{:Header "Portfolio" :accessor "portfolio" :width 90}
                       {:Header "Balance" :columns (mapv tables/risk-table-columns [:value :cash-pct])}
                       {:Header "Value" :columns [(assoc (tables/risk-table-columns :contrib-yield) :Header "Yield")
                                                  (tables/risk-table-columns :contrib-bond-yield)
                                                  (assoc (tables/risk-table-columns :contrib-mdur) :Header "M Dur")
                                                  (tables/risk-table-columns :rating)
                                                  (assoc (tables/risk-table-columns :rating-score) :width 50)
                                                  (assoc (tables/risk-table-columns :contrib-zspread) :Header "Z-spread")
                                                  (assoc (tables/risk-table-columns :contrib-gspread) :Header "G-spread")
                                                  (assoc (tables/risk-table-columns :contrib-beta) :Header "Beta")
                                                  (assoc (tables/risk-table-columns :quant-value-4d) :Header "4D")
                                                  (assoc (tables/risk-table-columns :quant-value-2d) :Header "2D")]}]
      :showPagination false :pageSize (count @(rf/subscribe [:portfolios])) :getTrProps go-to-portfolio-risk :className "-striped -highlight"}]]]])



(defn large-exposures []
  [box :class "subbody rightelement" :child
   [v-box :class "element" :align-self :center :justify :center :gap "20px"
    :children [[h-box :align :center :children [[title :label (str "Large exposures (>5%) " @(rf/subscribe [:qt-date])) :level :level1]
                                                [gap :size "1"]
                                                [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link @(rf/subscribe [:large-exposures]) "large_exposures")]]]
               [:> ReactTable
                {:data           (reverse (sort-by :pct_held @(rf/subscribe [:large-exposures])))
                 :columns        [(tables/risk-table-columns :name)
                                  (tables/risk-table-columns :isin)
                                  (tables/risk-table-columns :issuer)
                                  {:Header "Held %" :accessor "pct_held" :width 80 :Cell #(tables/nb-cell-format "%.1f%" 100. %) :style {:textAlign "right"}}
                                  (tables/risk-table-columns :nominal)
                                  {:Header "Outstanding" :accessor "AMT_OUTSTANDING" :width 100 :Cell tables/nb-thousand-cell-format :style {:textAlign "right"}}]
                 :showPagination true :pageSize 30 :showPageSizeOptions false :className "-striped -highlight"}]]]])