(ns jasminegui.riskviews
  (:require
    ; [oz.core :as oz]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [goog.string :as gstring]
    [goog.string.format]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list typeahead md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    ["react-table-v6" :as rt :default ReactTable]
    ["html2canvas" :as html2canvas]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]
    [jasminegui.tools :as tools]
    [jasminegui.tables :as tables]
    [jasminegui.tools :as t]
    [jasminegui.guitools :as gt]
    [jasminegui.qs.qstables :as qstables]
    ;[jasminegui.tradehistory :as th]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [cljs-time.core :refer [today day-of-week local-date-time days plus]]
    [reagent-contextmenu.menu :as rcm]
    [oz.core :as oz]
    [jasminegui.charting :as charting]
    )
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )


;;;;;;;;;;;;;;;;;;;
;; SUBSCRIPTIONS ;;
;;;;;;;;;;;;;;;;;;;

(defn first-level-sort [x]
  (case x
    "Cash" "AAA"
    "Collateral" "ZZZ"
    "Forwards" "ZZZ"
    "Equities" "ZZZ"
    x))

(defn add-total-line-to-pivot [pivoted-table kportfolios]
  (let [total-line (merge
                     (into {} (for [k [:jpm-region :qt-jpm-sector :qt-risk-country-name :TICKER :NAME :description :isin :qt-iam-int-lt-median-rating-score :qt-final-maturity-band :msci-rating]] [k "Total"]))
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
          portfolio-total-line (-> ((:total-positions db) (keyword portfolio))
                                   (assoc :qt-iam-int-lt-median-rating "Total" :qt-iam-int-lt-median-rating-score "00 Total")
                                   (update :weight * 100.) (update :bm-weight * 100.) (update :weight-delta * 100.)
                                   (update :contrib-yield * 100.) (update :bm-contrib-yield * 100.))
          xform (comp
                  (filter #(= (:portfolio %) portfolio))
                  (if (:single-portfolio-risk/hide-zero-holdings db) (filter #(not= (:original-quantity %) 0)) identity)
                  ;(map #(update % :weight * 100.))
                  ;(map #(update % :bm-weight * 100.))
                  ;(map #(update % :weight-delta * 100.))
                  ;(map #(update % :qt-yield * 100.))
                  ;(map #(update % :total-return-ytd * 100.))
                  ;(map #(update % :jensen-ytd * 100.))
                  ;(map #(update % :contrib-yield * 100.))
                  ;(map #(update % :bm-contrib-yield * 100.))
                  )
          v2 (into [] xform (:positions db))
          risk-choices (let [rfil (:single-portfolio-risk/filter db)] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          sorted-data (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) v2)
          sorted-data2 (into [] (for [r sorted-data] (update r :qt-iam-int-lt-median-rating-score #(str "G" %))))]                                                ;viewable-positions
      (clj->js
        (if (= (:single-portfolio-risk/display-style db) "Tree")
          (tables/cljs-text-filter-OR (:single-portfolio-risk/table-filter db) (mapv #(assoc %1 :totaldummy "") sorted-data2))
          (conj sorted-data2 portfolio-total-line))))))

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


(defn get-pivoted-data [instrument-definition table portfolios instruments field]
  (let [grp (group-by (juxt :id :portfolio) table)]
    (into [] (for [instrument instruments]
               (into (if-let [d (get instrument-definition instrument)] d {}) ;if server has undefined data u still want a map
                     (for [p portfolios] [(keyword p) (reduce + (map field (get-in grp [[instrument p]])))]))))))

(defn get-pivoted-data-with-nominal [instrument-definition accessors-k table portfolios instruments field]
  (let [grp (group-by (juxt :id :portfolio) table)
        kswn (map #(keyword (str (name %) "_totalnominal")) portfolios)
        all-fields (conj accessors-k field :isin :description :id)] ;hope is fewer fields makes react-table faster, no need to clj->js unused things
    (into [] (for [instrument instruments]
               (let [line (into (if-let [d (select-keys (get instrument-definition instrument) all-fields)] d {})
                                (for [p portfolios] {(keyword p)                       (reduce + (map field (get-in grp [[instrument p]])))
                                                     (keyword (str p "_totalnominal")) (reduce + (map :original-quantity (get-in grp [[instrument p]])))}))]
                 (assoc line :original-quantity (reduce + (map line kswn))))))))
;(apply merge {:a 1 :b 2} (for [i (range 3)] {(str "p" i) i (str "l" i) (* 2 i)}))



(rf/reg-sub
  :multiple-portfolio-risk/table
  (fn [db]

    (let [kselected-portfolios (mapv keyword (:multiple-portfolio-risk/selected-portfolios db))
          hide-zero-risk (:multiple-portfolio-risk/hide-zero-holdings db)
          display-key-one (:multiple-portfolio-risk/field-one db)
          risk-choices (let [rfil (:multiple-portfolio-risk/filter db)] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (map (comp keyword :accessor) grouping-columns)
          pos (t/chainfilter {:portfolio #(some #{%} (:multiple-portfolio-risk/selected-portfolios db))} (:positions db))
          pivoted-data (get-pivoted-data-with-nominal (get db :instruments) accessors-k pos (:multiple-portfolio-risk/selected-portfolios db) (distinct (map :id pos)) (keyword (get-in tables/risk-table-columns [display-key-one :accessor])))
          thfil (fn [line] (not (every? zero? (map line kselected-portfolios))))
          pivoted-data-hide-zero (if hide-zero-risk (filter thfil pivoted-data) pivoted-data)
          sorted-data (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-hide-zero)
          sorted-data2 (into [] (for [r sorted-data] (update r :qt-iam-int-lt-median-rating-score #(str "G" %))))]
      (if (= (:multiple-portfolio-risk/display-style db) "Tree")
        (tables/cljs-text-filter-OR (:multiple-portfolio-risk/table-filter db) (mapv #(assoc %1 :totaldummy "") sorted-data2))
        (add-total-line-to-pivot sorted-data2 kselected-portfolios)))))

(rf/reg-sub
  :multiple-portfolio-attribution/clean-table
  (fn [db]
    (let [threshold-att (/ (:label (first (filter #(= (:id %) @(rf/subscribe [:multiple-portfolio-attribution/threshold])) static/threshold-choices-attribution))) 100)
          kselected-portfolios (mapv keyword (:multiple-portfolio-attribution/selected-portfolios db))
          pivoted-positions (:multiple-portfolio-attribution/table db)
          display-key-one (:multiple-portfolio-attribution/field-one db)
          pivoted-positions-filtered (for [pos pivoted-positions] (assoc pos :Total-Effect (select-keys (pos :Total-Effect) kselected-portfolios)))
          att-filter-effect (fn [pos] (true? (some true? (concat (map #(>= % threshold-att) (vals (get-in pos [:Total-Effect]))) (map #(<= % (- threshold-att)) (vals (get-in pos [:Total-Effect])))))))
          pivoted-positions-filtered (if (= display-key-one :total-effect) (filter att-filter-effect pivoted-positions-filtered) pivoted-positions)
          attribution-choices (let [rfil (:multiple-portfolio-attribution/filter db)] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj attribution-choices :security))] (tables/attribution-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (map #(merge % ((keyword (get-in tables/attribution-table-columns [display-key-one :accessor])) %)) pivoted-positions-filtered)
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
          pivoted-data (get-pivoted-data (get db :instruments) (:positions db) (:portfolios db) (:all-instrument-ids db) (keyword (get-in tables/risk-table-columns [(:portfolio-alignment/field db) :accessor])))
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
        (add-total-line-to-pivot sorted-data kportfolios))
      )))

(rf/reg-sub
  :summary-display/table
  (fn [db]
    (let [grp (group-by :portfolio (filter #(not= (:asset-class %) "BONDS") (get db :positions)))]
      (into [] (for [p (:portfolios db)]
                 (reduce #(update %1 %2 * 100.)
                         (merge
                           {:portfolio p}
                           (select-keys (get-in db [:total-positions (keyword p)]) [:cash-pct
                                                                                    :base-value
                                                                                    :contrib-yield
                                                                                    :contrib-zspread
                                                                                    :contrib-gspread
                                                                                    :contrib-mdur
                                                                                    :mdur-delta
                                                                                    :qt-iam-int-lt-median-rating
                                                                                    :qt-iam-int-lt-median-rating-score
                                                                                    :contrib-beta-1y-daily
                                                                                    :quant-value-4d
                                                                                    :quant-value-2d
                                                                                    :ESG
                                                                                    :raw-esg-over-50
                                                                                    :final-esg-over-50
                                                                                    :SUBORDINATED
                                                                                    :HYBRID
                                                                                    :INTERNATIONAL_SUKUK
                                                                                    :HYBRIDNONFINS
                                                                                    :HY
                                                                                    :COCOS
                                                                                    :ad-hoc
                                                                                    :downgrade-candidates
                                                                                    :contrib-BBG_CEMBI_D1Y_BETA
                                                                                    :bm-contrib-BBG_CEMBI_D1Y_BETA
                                                                                    :contrib-delta-BBG_CEMBI_D1Y_BETA])
                           {:contrib-bond-yield (- (get-in db [:total-positions (keyword p) :contrib-yield]) (reduce + (map :contrib-yield (grp p))))})
                         [:cash-pct :contrib-yield :contrib-bond-yield]))))))

;;;;;;;;;
;; GUI ;;
;;;;;;;;;

(def max-width "1675px")
(def dropdown-width "125px")
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
                    "01Jan2019"
                    @(rf/subscribe [:qt-date])])))

(def single-portfolio-risk-display-view (atom nil))

(defn fnevt [state rowInfo instance evt]
  (rcm/context!
    evt
    [(aget rowInfo "original" "NAME")                       ; <---- string is a section title
     ["Copy ISIN" (fn [] (tools/copy-to-clipboard (aget rowInfo "original" "isin")))]
     ["Trade history" (fn [] (single-bond-trade-history-event state rowInfo instance))] ; <---- the name is a span
     ["Trade analyser" (fn [] (rf/dispatch [:quant-screen-to-ta2022 (aget rowInfo "original" "isin")]))]
     ;["Build ticket" (fn [] (prn "my-fn"))]
     ]))

(defn on-click-context [state rowInfo instance]
  (clj->js {:onClick #(fnevt state rowInfo instance %) :style {:cursor "pointer"}}))



(def multiple-portfolio-risk-display-view (atom nil))

(defn multiple-bond-trade-history-event [state rowInfo instance]
  (do (rf/dispatch [:get-single-bond-flat-history
                    (aget rowInfo "row" "_original" "NAME")
                    (aget rowInfo "row" "_original" "id")
                    (filter @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]) @(rf/subscribe [:portfolios]))
                    "01Jan2019"
                    @(rf/subscribe [:qt-date])
                    "nominal"
                    ])
      ))


(defn multiple-bond-trade-history-nav-event [state rowInfo instance]
  (do (rf/dispatch [:get-single-bond-flat-history
                    (aget rowInfo "row" "_original" "NAME")
                    (aget rowInfo "row" "_original" "id")
                    (filter @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]) @(rf/subscribe [:portfolios]))
                    "01Jan2019"
                    @(rf/subscribe [:qt-date])
                    "nav"])
      ))

(defn fnevt-multiple [state rowInfo instance evt]
  (rcm/context!
    evt
    [(aget rowInfo "original" "NAME")                       ; <---- string is a section title
     ["Copy ISIN" (fn [] (tools/copy-to-clipboard (aget rowInfo "original" "isin")))]
     ["Trade history" (fn [] (multiple-bond-trade-history-event state rowInfo instance))] ; <---- the name is a span
     ["Trade history (% NAV)" (fn [] (multiple-bond-trade-history-nav-event state rowInfo instance))] ; <---- the name is a span
     ["Trade analyser" (fn [] (rf/dispatch [:quant-screen-to-ta2022 (aget rowInfo "original" "isin")]))]
     ;["Build ticket" (fn [] (prn "my-fn"))]
     ]))

(defn on-click-context-multiple [state rowInfo instance]
  (clj->js {:onClick #(fnevt-multiple state rowInfo instance %) :style {:cursor "pointer"}}))


(def portfolio-alignment-risk-display-view (atom nil))

(defn portfolio-alignment-risk-display []
  (let [group (:portfolios (first (filter #(= (:id %) @(rf/subscribe [:portfolio-alignment/group])) static/portfolio-alignment-groups)))
        base-portfolio (first group)
        portfolios (rest group)
        display-key @(rf/subscribe [:portfolio-alignment/field])
        cell-one (let [v (get-in tables/risk-table-columns [display-key :Cell])] (case display-key :nav tables/round2-if-not0 :weight-delta tables/round2-if-not0 :contrib-yield tables/round2pc-no-mult :contrib-mdur tables/round2-if-not0 v)) ;(get-in tables/risk-table-columns [display-key :Cell])
        width-one 80
        is-tree (= @(rf/subscribe [:portfolio-alignment/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:portfolio-alignment/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))]
    [tables/tree-table-risk-table
     :portfolio-alignment/table
     [{:Header "Groups" :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
      {:Header "Actual" :columns [{:Header base-portfolio :accessor base-portfolio :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :Cell cell-one :filterable false}]}
      {:Header  (str "Portfolio " (name display-key) " vs " base-portfolio)
       :columns (into [] (for [p portfolios] {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :Cell cell-one :filterable false}))}
      {:Header "Description" :columns [{:Header "thinkFolio ID" :accessor "description" :width 500} (tables/risk-table-columns :rating)]}]
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
               [single-dropdown
                :width dropdown-width
                :model (r/cursor risk-filter [i])
                :choices static/risk-choice-map
                :disabled? (and (= i 3) (= key :portfolio-history/filter))
                :on-change #(do (rf/dispatch [key i %])
                                (rf/dispatch [:portfolio-history/data nil])
                                )]))))

(defn single-portfolio-risk-display []
  (let [                                                    ;portfolio-map @(rf/subscribe [:portfolio-dropdown-map])
        display-style (rf/subscribe [:single-portfolio-risk/display-style])
        hide-zero-risk (rf/subscribe [:single-portfolio-risk/hide-zero-holdings])
        is-tree (= @(rf/subscribe [:single-portfolio-risk/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:single-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
        additional-des-cols (remove (set (conj risk-choices "None")) (map :id static/risk-choice-map))
        download-columns (map #(get-in tables/risk-table-columns [% :accessor]) (remove nil? (concat [:isin] (conj risk-choices :name) [:nav :bm-weight :weight-delta :contrib-mdur :bm-contrib-eir-duration :mdur-delta :contrib-yield :bm-contrib-yield :contrib-zspread :contrib-beta :contrib-BBG_CEMBI_D1Y_BETA :bm-contrib-BBG_CEMBI_D1Y_BETA :contrib-delta-BBG_CEMBI_D1Y_BETA :quant-value-4d :quant-value-2d :value :nominal :yield :z-spread :g-spread :duration :total-return-ytd :cembi-beta-last-year :cembi-beta-previous-year :jensen-ytd] additional-des-cols [:rating :description])))]
    [box :class "subbody rightelement" :child
     (gt/element-box-generic-new "single-portfolio-risk" max-width (str "Portfolio drill-down " @(rf/subscribe [:qt-date]))
                                 {:target-id       "single-portfolio-risk-table"
                                  :on-click-action #(tools/react-table-to-csv @single-portfolio-risk-display-view @(rf/subscribe [:single-portfolio-risk/portfolio]) download-columns is-tree)
                                  :download-table-fn  #(clojure.set/join (js->clj @(rf/subscribe [:single-portfolio-risk/table])) @(rf/subscribe [:quant-model/model-output]) {"isin" :ISIN})
                                  :shortcuts       :single-portfolio-risk/shortcut}
                                 [[h-box :gap "10px" :align :center
                               :children [[title :label "Display:" :level :level3]
                                          (gt/tree-table-selector "single-portfolio-risk")
                                          [gap :size "30px"]
                                          [checkbox :model hide-zero-risk :label "Hide zero positions? (index won't sum to 100!)" :on-change #(rf/dispatch [:single-portfolio-risk/hide-zero-holdings %])]
                                          [gap :size "30px"]
                                          [title :label "Filtering:" :level :level3]
                                          (gt/portfolio-dropdown-selector :single-portfolio-risk/portfolio)
                                          (gt/filtering-row :single-portfolio-risk/filter)]]
                              [:div {:id "single-portfolio-risk-table"}
                               [tables/tree-table-risk-table
                                :single-portfolio-risk/table
                                [{:Header (str "Groups (" @(rf/subscribe [:single-portfolio-risk/portfolio]) " " @(rf/subscribe [:qt-date]) ")") :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
                                 {:Header "NAV" :columns (mapv tables/risk-table-columns [:nav :bm-weight :weight-delta])}
                                 {:Header "Duration" :columns (mapv tables/risk-table-columns [:contrib-mdur :bm-contrib-eir-duration :mdur-delta])}
                                 {:Header "Yield" :columns (mapv tables/risk-table-columns [:contrib-yield :bm-contrib-yield])}
                                 {:Header "Z-spread" :columns (mapv tables/risk-table-columns [:contrib-zspread])}
                                 {:Header "Beta (Bbg vs CEMBIBD)" :columns (mapv tables/risk-table-columns [:contrib-beta :contrib-BBG_CEMBI_D1Y_BETA :bm-contrib-BBG_CEMBI_D1Y_BETA :contrib-delta-BBG_CEMBI_D1Y_BETA])}
                                 {:Header "Quant model" :columns (mapv tables/risk-table-columns [:quant-value-4d :quant-value-2d])}
                                 {:Header "Position" :columns (mapv tables/risk-table-columns [:value :nominal])}
                                 {:Header (if is-tree "Bond analytics (median)" "Bond analytics") :columns (mapv tables/risk-table-columns [:yield :z-spread :g-spread :duration :total-return-ytd :cembi-beta-last-year :cembi-beta-previous-year :jensen-ytd])}
                                 {:Header "Description" :columns (mapv tables/risk-table-columns (concat [:rating :isin] additional-des-cols [:description]))}]
                                is-tree
                                (mapv :accessor grouping-columns)
                                single-portfolio-risk-display-view
                                :single-portfolio-risk/table-filter
                                :single-portfolio-risk/expander
                                on-click-context]]])]))

(defn multiple-portfolio-risk-controller []
  (let [display-style (rf/subscribe [:multiple-portfolio-risk/display-style])
        portfolios @(rf/subscribe [:portfolios])
        selected-portfolios (rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        ;number-of-fields (rf/subscribe [:multiple-portfolio-risk/field-number])
        field-one (rf/subscribe [:multiple-portfolio-risk/field-one])
        ;field-two (rf/subscribe [:multiple-portfolio-risk/field-two])
        hide-zero-risk (rf/subscribe [:multiple-portfolio-risk/hide-zero-holdings])
        is-tree (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
        download-columns (concat ["NAME" "isin" "description" "original-quantity"] (filter @selected-portfolios portfolios) (map name (remove nil? (map #(get-in tables/risk-table-columns [% :accessor]) (map :id static/risk-choice-map)))))
        toggle-portfolios (fn [seqp] (let [setseqp (set seqp)] (if (clojure.set/subset? setseqp @selected-portfolios) (clojure.set/difference @selected-portfolios setseqp) (clojure.set/union @selected-portfolios setseqp))))
        ]
    [box :class "subbody rightelement" :child
     (gt/element-box-generic "multiple-portfolio-risk" max-width (str "Portfolio drill-down " @(rf/subscribe [:qt-date]))
                             {:target-id "multiple-portfolio-risk-table" :on-click-action #(tools/react-table-to-csv @multiple-portfolio-risk-display-view "multiple_portfolio_holdings" download-columns is-tree)
                              :shortcuts :multiple-portfolio-risk/shortcut}
                             [[h-box :gap "10px" :align :center
                               :children [[title :label "Display type:" :level :level3] (gt/tree-table-selector "multiple-portfolio-risk") [gap :size "30px"]
                                          [checkbox :model hide-zero-risk :label "Hide zero lines?" :on-change #(rf/dispatch [:multiple-portfolio-risk/hide-zero-holdings %])] [gap :size "30px"]
                                          [title :label "Field:" :level :level3] [single-dropdown :width dropdown-width :model field-one :choices static/risk-field-choices :on-change #(rf/dispatch [:multiple-portfolio-risk/field-one %])] [gap :size "30px"]
                                          [title :label "Filtering:" :level :level3] (gt/filtering-row :multiple-portfolio-risk/filter)]]
                              [h-box :gap "5px" :children
                               (into [[title :label "Portfolios:" :level :level3]
                                      [gap :size "20px"]
                                      [v-box :gap "2px" :children [[button :style {:width "75px"} :label "All" :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set portfolios)])]
                                                                   [button :style {:width "75px"} :label "None" :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios #{}])]]]]
                                     (for [line static/portfolio-alignment-groups]
                                       (let [possible-portfolios (:portfolios (first (filter (fn [x] (= (:id x) (:id line))) static/portfolio-alignment-groups)))]
                                         [v-box :gap "2px" :children
                                          [[button :style {:width "125px"} :label (:label line) :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (toggle-portfolios possible-portfolios)])]
                                           [selection-list :width dropdown-width :model selected-portfolios :choices (into [] (for [p possible-portfolios] {:id p :label p})) :on-change #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios %])]]])))]
                              (let [display-key-one @(rf/subscribe [:multiple-portfolio-risk/field-one])
                                    width-one 80
                                    risk-choices (let [rfil @(rf/subscribe [:multiple-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
                                    grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
                                    cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (some #{p} @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]))]
                                                    {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :filterable false
                                                     :Cell   (let [v (get-in tables/risk-table-columns [display-key-one :Cell])] (case display-key-one :nav tables/round2-if-not0 :weight-delta tables/round2-if-not0 :contrib-yield tables/round2pc-no-mult :contrib-mdur tables/round2-if-not0 v))}))]
                                [:div {:id "multiple-portfolio-risk-table"}
                                 [tables/tree-table-risk-table
                                  :multiple-portfolio-risk/table
                                  [{:Header (str "Groups (" @(rf/subscribe [:qt-date]) ")") :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
                                   {:Header (str "Portfolio " (name display-key-one)) :columns cols}
                                   {:Header "Description" :columns (mapv tables/risk-table-columns [:rating :nominal :isin :description])}] ;nominal added
                                  (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
                                  (mapv :accessor grouping-columns)
                                  multiple-portfolio-risk-display-view
                                  :multiple-portfolio-risk/table-filter
                                  :multiple-portfolio-risk/expander
                                  on-click-context-multiple]])])]))

(defn portfolio-alignment-risk-controller []
  (let [display-style (rf/subscribe [:portfolio-alignment/display-style])
        portfolio-alignment-group (rf/subscribe [:portfolio-alignment/group])
        field (rf/subscribe [:portfolio-alignment/field])
        threshold (rf/subscribe [:portfolio-alignment/threshold])]
    [box :class "subbody rightelement" :child
     (gt/element-box-generic "pivot-portfolio-risk" max-width (str "Portfolio alignment " @(rf/subscribe [:qt-date]))
                             {:shortcuts       :portfolio-alignment/shortcut
                              :target-id       :portfolio-alignment/table
                              :on-click-action #(tools/react-table-to-csv @portfolio-alignment-risk-display-view "alignment" (map name (concat [:NAME :description :isin :jpm-region :qt-risk-country-name :qt-jpm-sector :qt-iam-int-lt-median-rating] (map keyword (:portfolios (first (filter (fn [x] (= (:id x) @(rf/subscribe [:portfolio-alignment/group]))) static/portfolio-alignment-groups)))))))}
                             [[h-box :gap "50px"
                               :children
                               [[v-box :gap "10px"
                                 :children [[h-box :gap "10px" :children [[title :label "Display type:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(rf/dispatch [:portfolio-alignment/display-style %])]]]
                                            [h-box :gap "10px" :children [[title :label "Field:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model field :choices static/risk-field-choices :on-change #(rf/dispatch [:portfolio-alignment/field %])]]]
                                            [h-box :gap "10px" :children [[title :label "Threshold:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model threshold :choices static/threshold-choices-alignment :on-change #(rf/dispatch [:portfolio-alignment/threshold %])]]]]]
                                [v-box :gap "20px"
                                 :children [[h-box :gap "10px" :children [[title :label "Portfolios:" :level :level3] [gap :size "1"]
                                                                          [single-dropdown :width dropdown-width :model portfolio-alignment-group :choices static/portfolio-alignment-groups :on-change #(rf/dispatch [:portfolio-alignment/group %])]]]]]
                                [v-box :gap "20px"
                                 :children [[h-box :gap "10px" :children (concat [[title :label "Filtering:" :level :level3]] (filtering-row :portfolio-alignment/filter))]]]]]
                              [portfolio-alignment-risk-display]]
                             )]))


(defn go-to-portfolio-risk [state rowInfo instance] (clj->js {:onClick #(do (rf/dispatch-sync [:navigation/active-home :single-portfolio]) (rf/dispatch [:single-portfolio-risk/portfolio (aget rowInfo "row" "portfolio")])) :style {:cursor "pointer"}}))

(defn irrisk []
  (let [absrel (r/atom :contrib-mdur)
        spread-or-rating (r/atom :rating-score)
        cut-off (r/atom 10.0)
        clicked (r/atom ["Total" "total"])
        show-main-elements (fn [state rowInfo column instance] (clj->js {:onClick #(reset! clicked [(aget rowInfo "original" "maturity-band") (aget column "id")]) :style {:cursor "pointer"}}))]
    (fn []

      (let [portfolio-map @(rf/subscribe [:portfolio-dropdown-map])
            portfolio (rf/subscribe [:single-portfolio-risk/portfolio])
            positions (t/chainfilter {:portfolio @(rf/subscribe [:single-portfolio-risk/portfolio])} @(rf/subscribe [:positions])) ;:original-quantity #(not (zero? %))
            ust (t/chainfilter {:TICKER "T"} positions)
            ir-sensitive (t/chainfilter {:TICKER #(not= % "T") @spread-or-rating #(< % @cut-off)} positions)
            ir-insensitive (t/chainfilter {:TICKER #(not= % "T") @spread-or-rating #(>= % @cut-off)} positions) ;futures have no rating
            durations ["0 - 1 year" "1 - 3 years" "3 - 5 years" "5 - 7 years" "7 - 10 years" "10 - 20 years" "20 years +"]
            prep (fn [data] (into [] (for [m durations] {:performance "portfolio" :group m :value (reduce + (map @absrel (t/chainfilter {:qt-final-maturity-band m} data)))})))
            dust (prep ust) dig (prep ir-sensitive) dhy (prep ir-insensitive)
            maxd (apply max (concat (map :value dust) (map :value dig) (map :value dhy)))
            st (fn [data] (str (gstring/format "%.1f" (reduce + (map @absrel data))) "y"))
            data (into [{:maturity-band "Total"
                         :ust           (reduce + (map @absrel ust))
                         :sensitive     (reduce + (map @absrel ir-sensitive))
                         :insensitive   (reduce + (map @absrel ir-insensitive))
                         :total         (reduce + (map @absrel positions))}]
                       (for [d durations]
                         {:maturity-band d
                          :ust           (reduce + (map @absrel (t/chainfilter {:qt-final-maturity-band d} ust)))
                          :sensitive     (reduce + (map @absrel (t/chainfilter {:qt-final-maturity-band d} ir-sensitive)))
                          :insensitive   (reduce + (map @absrel (t/chainfilter {:qt-final-maturity-band d} ir-insensitive)))
                          :total         (reduce + (map @absrel (t/chainfilter {:qt-final-maturity-band d} positions)))}))
            label-insensitive (if (= @spread-or-rating :rating-score) (str (qstables/get-implied-rating (str @cut-off)) " and below") (str @cut-off "bps and above"))
            label-sensitive (if (= @spread-or-rating :rating-score) (str (qstables/get-implied-rating (str (dec @cut-off))) " and above") (str @cut-off "bps and below"))
            display (sort-by @absrel (t/chainfilter {:qt-final-maturity-band (if (= "Total" (first @clicked)) some? (first @clicked))}
                                                    (case (second @clicked)
                                                      "total" positions
                                                      "ust" ust
                                                      "sensitive" ir-sensitive
                                                      "insensitive" ir-insensitive)))
            download-columns [:maturity-band :ust :sensitive :insensitive :total]]
        [box :class "subbody rightelement" :child
         (gt/element-box-with-cols "irrisk" "100%" (str "Interest rate risk " @(rf/subscribe [:qt-date])) data
                                   [[h-box :gap "5px" :align :center :children [[title :level :level3 :label "Portfolio:"]

                                                                                [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:single-portfolio-risk/portfolio %])]
                                                                                [gap :size "20px"]
                                                                                [title :level :level3 :label "Duration contribution:"] [single-dropdown :width dropdown-width :model absrel :choices [{:id :contrib-mdur :label "Absolute"} {:id :mdur-delta :label "Relative"}] :on-change #(reset! absrel %)]]]

                                    [h-box :gap "5px" :align :center :children [[title :level :level3 :label "Cut-off type:"] [single-dropdown :width dropdown-width :model spread-or-rating :choices [{:id :rating-score :label "Rating"} {:id :qt-libor-spread :label "Z-spread"}] :on-change #(do (reset! spread-or-rating %) (reset! cut-off (if (= % :rating-score) 10.0 250.0)))]
                                                                                [gap :size "20px"]
                                                                                [title :level :level3 :label "Level:"] [slider
                                                                                                                        :model cut-off
                                                                                                                        :min (if (= @spread-or-rating :rating-score) 3.0 100.0)
                                                                                                                        :max (if (= @spread-or-rating :rating-score) 14.0 600.0)
                                                                                                                        :step (if (= @spread-or-rating :rating-score) 1.0 50.0)
                                                                                                                        :on-change #(reset! cut-off %)
                                                                                                                        :width "200px"]
                                                                                [label :label (if (= @spread-or-rating :rating-score) (qstables/get-implied-rating (str @cut-off)) (str @cut-off "bps"))]]]

                                    [gap :size "20px"]
                                    [title :level :level3 :label "Click on cell to see position breakdown"]
                                    [:> ReactTable
                                     {:data           data
                                      :columns        [{:Header "Maturity band" :accessor "maturity-band" :width 120}
                                                       {:Header "UST & hedges" :accessor "ust" :width 120 :getProps (partial tables/red-negatives-bold-if-a-b "maturity-band" (first @clicked) (second @clicked)) :Cell tables/round2}
                                                       {:Header label-sensitive :accessor "sensitive" :width 120 :getProps (partial tables/red-negatives-bold-if-a-b "maturity-band" (first @clicked) (second @clicked)) :Cell tables/round2}
                                                       {:Header label-insensitive :accessor "insensitive" :width 120 :getProps (partial tables/red-negatives-bold-if-a-b "maturity-band" (first @clicked) (second @clicked)) :Cell tables/round2}
                                                       {:Header "Total" :accessor "total" :width 120 :getProps (partial tables/red-negatives-bold-if-a-b "maturity-band" (first @clicked) (second @clicked)) :Cell tables/round2}]
                                      :showPagination false :getTdProps show-main-elements :pageSize (count data) :className "-striped -highlight"}]
                                    [gap :size "20px"]

                                    [title :level :level3 :label (str "Top 20 contributors ranked by " (if (= @absrel :contrib-mdur) "fund contribution" "contribution vs index") " " (str (first @clicked) " / " (second @clicked)))]
                                    [:> ReactTable
                                     {:data           (reverse (take-last 20 display))
                                      :columns        [{:Header "Issuer" :accessor "TICKER" :width 120}
                                                       {:Header "Name" :accessor "NAME" :width 120}
                                                       {:Header "Fund" :accessor "contrib-mdur" :width 120 :getProps tables/red-negatives :Cell tables/round2}
                                                       {:Header "Index" :accessor "bm-contrib-eir-duration" :width 120 :getProps tables/red-negatives :Cell tables/round2}
                                                       {:Header "Delta" :accessor "mdur-delta" :width 120 :getProps tables/red-negatives :Cell tables/round2}]
                                      :showPagination false :pageSize 20 :className "-striped -highlight"}]
                                    [title :level :level3 :label (str "Bottom 20 contributors ranked by " (if (= @absrel :contrib-mdur) "fund contribution" "contribution vs index") " " (str (first @clicked) " / " (second @clicked)))]
                                    [:> ReactTable
                                     {:data           (reverse (take 20 display))
                                      :columns        [{:Header "Issuer" :accessor "TICKER" :width 120}
                                                       {:Header "Name" :accessor "NAME" :width 120}
                                                       {:Header "Fund" :accessor "contrib-mdur" :width 120 :getProps tables/red-negatives :Cell tables/round2}
                                                       {:Header "Index" :accessor "bm-contrib-eir-duration" :width 120 :getProps tables/red-negatives :Cell tables/round2}
                                                       {:Header "Delta" :accessor "mdur-delta" :width 120 :getProps tables/red-negatives :Cell tables/round2}]
                                      :showPagination false :pageSize 20 :className "-striped -highlight"}]]
                                   download-columns
                                   )]))))

(defn concentration-risk []
  (let [index-cut-off 1. overweight-multiplier 2 breakdown (r/atom :country-sector)
        download-columns [:bucket :weight-multiplier :mdur-multiplier :weight :bm-weight :contrib-mdur :bm-contrib-eir-duration]]
    (fn []
      (let [portfolio-map @(rf/subscribe [:portfolio-dropdown-map])
            portfolio (rf/subscribe [:single-portfolio-risk/portfolio])
            positions (t/chainfilter {:portfolio @(rf/subscribe [:single-portfolio-risk/portfolio])} @(rf/subscribe [:positions])) ;:original-quantity #(not (zero? %))
            grp (group-by (case @breakdown
                            :country-sector (juxt :qt-risk-country-name :qt-jpm-sector)
                            :country-rating (juxt :qt-risk-country-name #(> (:rating-score %) 10))
                            :sector-rating (juxt :qt-jpm-sector #(> (:rating-score %) 10))) positions)
            exposures (into [] (for [[[f1 f2] v] grp] (merge {:f1 f1 :f2 f2} (into {} (for [metric [:weight :bm-weight :contrib-mdur :bm-contrib-eir-duration]] [metric (reduce + (map metric v))])))))
            exposures-post-cut-off (->> exposures (filter #(> (:bm-weight %) index-cut-off)) (filter #(> (/ (:weight %) (:bm-weight %)) overweight-multiplier)))
            display (reverse
                      (sort-by :weight-multiplier
                               (into [] (for [line exposures-post-cut-off] (assoc line :bucket (str (:f1 line) " " (if (= @breakdown :country-sector) (:f2 line) (if (:f2 line) "HY" "IG")))
                                                                                       :weight-multiplier (/ (:weight line) (:bm-weight line))
                                                                                       :mdur-multiplier (/ (:contrib-mdur line) (:bm-contrib-eir-duration line)))))))]
        [box :class "subbody rightelement" :child
         (gt/element-box-with-cols "concentrationrisk" "100%" (str "Concentration risk " @(rf/subscribe [:qt-date])) display
                                   [[title :level :level4 :label "Filtering for buckets of risk where the index is above 1% and we hold more than 2x the index size."]
                                    [h-box :gap "20px" :align :center :children [[title :level :level3 :label "Portfolio:"]
                                                                                 [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:single-portfolio-risk/portfolio %])]
                                                                                 [title :level :level3 :label "Breakdown:"]
                                                                                 [radio-button :model breakdown :label "Country / Sector" :value :country-sector :on-change #(reset! breakdown %)]
                                                                                 [radio-button :model breakdown :label "Country / Rating" :value :country-rating :on-change #(reset! breakdown %)]
                                                                                 [radio-button :model breakdown :label "Sector / Rating" :value :sector-rating :on-change #(reset! breakdown %)]
                                                                                 ]]


                                    [:> ReactTable
                                     {:data           display
                                      :columns        [{:Header "Bucket overweight" :columns [{:Header "Bucket" :accessor "bucket" :width 240}
                                                                                              (assoc (tables/nb-col "Maturity multiplier" "weight-multiplier" 120 tables/round1 nil) :filterable false)
                                                                                              (assoc (tables/nb-col "Duration multiplier" "mdur-multiplier" 120 tables/round1 nil) :filterable false)]}
                                                       {:Header "NAV" :columns [(assoc (tables/nb-col "Fund" "weight" 120 tables/round2pc-no-mult nil) :filterable false)
                                                                                (assoc (tables/nb-col "Index" "bm-weight" 120 tables/round2pc-no-mult nil) :filterable false)]}
                                                       {:Header "Duration" :columns [(assoc (tables/nb-col "Fund" "contrib-mdur" 120 tables/round2 nil) :filterable false)
                                                                                     (assoc (tables/nb-col "Index" "bm-contrib-eir-duration" 120 tables/round2 nil) :filterable false)]}]
                                      :showPagination false :pageSize (count display) :className "-striped -highlight"}]
                                    ]
                                   download-columns
                                   )]))))

(defn summary-display []
  (let [data @(rf/subscribe [:summary-display/table])]
    [box :class "subbody rightelement" :child
     (gt/element-box "summary" "100%" (str "Summary " @(rf/subscribe [:qt-date])) data
                     [[:> ReactTable
                       {:data           data
                        :columns        [{:Header "Portfolio" :accessor "portfolio" :width 90 :filterable true :filterMethod tables/text-filter-OR}
                                         {:Header "Balance" :columns (mapv #(assoc % :filterable false) (mapv tables/risk-table-columns [:value :cash-pct]))}
                                         {:Header "Value" :columns (mapv #(assoc % :filterable false)
                                                                         [(assoc (tables/risk-table-columns :contrib-yield) :Header "Yield")
                                                                          (tables/risk-table-columns :contrib-bond-yield)
                                                                          (assoc (tables/risk-table-columns :contrib-mdur) :Header "M Dur")
                                                                          (assoc (tables/risk-table-columns :mdur-delta) :Header "Dur D")
                                                                          (tables/risk-table-columns :rating)
                                                                          (assoc (tables/risk-table-columns :rating-score) :width 50)
                                                                          (assoc (tables/risk-table-columns :contrib-zspread) :Header "Z-spread")
                                                                          (assoc (tables/risk-table-columns :contrib-gspread) :Header "G-spread")
                                                                          (assoc (tables/risk-table-columns :quant-value-4d) :Header "4D")
                                                                          (assoc (tables/risk-table-columns :quant-value-2d) :Header "2D")])}
                                         {:Header "Beta (Bbg vs CEMBIBD)" :columns (mapv #(assoc % :filterable false)
                                                                                         [(tables/risk-table-columns :contrib-beta)
                                                                                          (tables/risk-table-columns :contrib-BBG_CEMBI_D1Y_BETA)
                                                                                          (tables/risk-table-columns :bm-contrib-BBG_CEMBI_D1Y_BETA)
                                                                                          (tables/risk-table-columns :contrib-delta-BBG_CEMBI_D1Y_BETA)])}
                                         {:Header "ESG" :columns (mapv #(assoc % :filterable false) [(tables/nb-col "Issuance" "ESG" 60 tables/round2pc tables/sum-rows)
                                                                                                     (tables/nb-col "Raw>50" "raw-esg-over-50" 60 tables/round0pc tables/sum-rows)
                                                                                                     (tables/nb-col "Final>50" "final-esg-over-50" 60 tables/round0pc tables/sum-rows)])}
                                         {:Header "Flags" :columns (mapv #(assoc % :filterable false) [(tables/nb-col "HY" "HY" 70 tables/round2pc tables/sum-rows)
                                                                                                       (tables/nb-col "Sub" "SUBORDINATED" 70 tables/round2pc tables/sum-rows)
                                                                                                       (tables/nb-col "CoCos" "COCOS" 70 tables/round2pc tables/sum-rows)
                                                                                                       (tables/nb-col "Hybrid" "HYBRID" 70 tables/round2pc tables/sum-rows)
                                                                                                       (tables/nb-col "Corp Hyb." "HYBRIDNONFINS" 70 tables/round2pc tables/sum-rows)
                                                                                                       (tables/nb-col "Sukuk" "INTERNATIONAL_SUKUK" 70 tables/round2pc tables/sum-rows)
                                                                                                       (tables/nb-col "FA risk" "downgrade-candidates" 70 tables/round2pc tables/sum-rows)
                                                                                                       (tables/text-col "Ad hoc" "ad-hoc" 220)])}
                                         ]
                        :showPagination false :pageSize (count @(rf/subscribe [:portfolios])) :getTrProps go-to-portfolio-risk :className "-striped -highlight"}]
                      ]
                     )
     ]
    ))

(defn portfolio-checks-display []
  (when (empty? @(rf/subscribe [:talanx-checks])) (rf/dispatch [:get-talanx-checks]))
  (when (empty? @(rf/subscribe [:ogemigc-nr-bucket])) (rf/dispatch [:get-ogemigc-nr-bucket]))
  (let [portfolio-checks-data-raw @(rf/subscribe [:portfolio-checks])
        portfolio-checks-data (for [e portfolio-checks-data-raw] (assoc e :check-status (reduce + [(get {false 0 true 1} (e :check-status-warning)) (get {false 0 true 1} (e :check-status-breach))])))
        portfolio-checks-data-nav (filter #(and (not= (:check-name %) "MDUR Delta") (not= (:check-name %) "MDUR") (not= (:check-name %) "MDUR vs BM %")) portfolio-checks-data)
        portfolio-checks-data-dur (filter #(or (= (:check-name %) "MDUR Delta") (= (:check-name %) "MDUR") (= (:check-name %) "MDUR vs BM %")) portfolio-checks-data)
        talanx-checks-data-raw @(rf/subscribe [:talanx-checks])
        ogemigc-nr-list @(rf/subscribe [:ogemigc-nr-bucket])
        talanx-checks-data (for [e talanx-checks-data-raw] (assoc e :check-status (reduce + [(get {false 0 true 1} (e :check-warning)) (get {false 0 true 1} (e :check-breach))])))
        talanx-checks-data-clean (filter #(> (:check-status %) 0) talanx-checks-data)
        talanx-checks-data-clean-corp (filter #(= (:sov-or-corp %) "corp") talanx-checks-data-clean)
        talanx-checks-data-clean-sov (filter #(= (:sov-or-corp %) "sov") talanx-checks-data-clean)
        date @(rf/subscribe [:qt-date])]
    [h-box :class "subbody rightelement" :gap "20px" :children
     [[v-box :class "element" :gap "20px" :children
       [(gt/element-box "checks" "100%" (str "General checks " date) portfolio-checks-data-nav
                        [[:> ReactTable
                          {:data       portfolio-checks-data-nav
                           :columns    [{:Header "Portfolio" :accessor :portfolio :width 90 :style {:textAlign "left"}}
                                        {:Header "Check" :accessor :check-name :width 100 :style {:textAlign "left"}}
                                        {:Header "Status" :accessor :check-status :width 100 :style {:textAlign "left"} :getProps tables/breach-status-color :Cell tables/round0}
                                        {:Header "Breach" :accessor :check-threshold-breach :width 100 :Cell tables/round2pc-no-red :style {:textAlign "right"}}
                                        {:Header "Warning" :accessor :check-threshold-warning :width 100 :Cell tables/round2pc-no-red :style {:textAlign "right"}}
                                        {:Header "Value" :accessor :check-value :width 100 :Cell tables/round2pc-no-red :style {:textAlign "right"}}]
                           :filterable true :defaultFilterMethod tables/text-filter-OR :showPagination true :pageSize (count portfolio-checks-data-nav) :showPageSizeOptions false :className "-striped -highlight"}]]
                        )
        (gt/element-box "checks" "100%" (str "OGEMIGC HY or <= 1 rating list  " date) ogemigc-nr-list
                        [[:> ReactTable
                          {:data       ogemigc-nr-list
                           :columns    [{:Header "Name" :accessor :NAME :width 90 :style {:textAlign "left"}}
                                        {:Header "Weight" :accessor :weight :width 100 :Cell tables/round2pc-no-red :style {:textAlign "right"}}]
                           :filterable true :defaultFilterMethod tables/text-filter-OR :showPagination true :pageSize (count ogemigc-nr-list) :showPageSizeOptions false :className "-striped -highlight"}]]
                        )


        ]]
      [v-box :class "element" :gap "20px" :children
       [(gt/element-box "talanx-checks" "100%" (str "Talanx concentration corp " date) talanx-checks-data-clean-corp
                      [[:> ReactTable
                        {:data       talanx-checks-data-clean-corp
                         :columns    [{:Header "Portfolio" :accessor :portfolio :width 100 :style {:textAlign "left"}}
                                      {:Header "Status" :accessor :check-status :width 100 :style {:textAlign "left"} :getProps tables/breach-status-color :Cell tables/round0}
                                      {:Header "Median rating" :accessor :median-rating :width 100 :style {:textAlign "right"}}
                                      {:Header "Breach" :accessor :threshold-breach :width 100 :Cell tables/round2pc-no-red :style {:textAlign "right"}}
                                      {:Header "Max %" :accessor :max :width 100 :Cell tables/round2pc-no-red :style {:textAlign "right"}}
                                      {:Header "Max name" :accessor :max-name :width 100 :style {:textAlign "left"}}
                                      ]
                         :filterable true :defaultFilterMethod tables/text-filter-OR :showPagination true :pageSize (count talanx-checks-data-clean-corp) :showPageSizeOptions false :className "-striped -highlight"}]]
                      )
        (gt/element-box "talanx-checks" "100%" (str "Talanx concentration sov " date) talanx-checks-data-clean-sov
                        [[:> ReactTable
                          {:data       talanx-checks-data-clean-sov
                           :columns    [{:Header "Portfolio" :accessor :portfolio :width 100 :style {:textAlign "left"}}
                                        {:Header "Status" :accessor :check-status :width 100 :style {:textAlign "left"} :getProps tables/breach-status-color :Cell tables/round0}
                                        {:Header "Median rating" :accessor :median-rating :width 100 :style {:textAlign "right"}}
                                        {:Header "Breach" :accessor :threshold-breach :width 100 :Cell tables/round2pc-no-red :style {:textAlign "right"}}
                                        {:Header "Max %" :accessor :max :width 100 :Cell tables/round2pc-no-red :style {:textAlign "right"}}
                                        {:Header "Max name" :accessor :max-name :width 100 :style {:textAlign "left"}}
                                        ]
                           :filterable true :defaultFilterMethod tables/text-filter-OR :showPagination true :pageSize (count talanx-checks-data-clean-sov) :showPageSizeOptions false :className "-striped -highlight"}]]
                        )
        (gt/element-box "checks" "100%" (str "Duration checks " date) portfolio-checks-data-dur
                        [[:> ReactTable
                          {:data       portfolio-checks-data-dur
                           :columns    [{:Header "Portfolio" :accessor :portfolio :width 90 :style {:textAlign "left"}}
                                        {:Header "Check" :accessor :check-name :width 100 :style {:textAlign "left"}}
                                        {:Header "Status" :accessor :check-status :width 100 :style {:textAlign "left"} :getProps tables/breach-status-color :Cell tables/round0}
                                        {:Header "Breach" :accessor :check-threshold-breach :width 100 :style {:textAlign "right"}}
                                        {:Header "Warning" :accessor :check-threshold-warning :width 100 :style {:textAlign "right"}}
                                        {:Header "Value" :accessor :check-value :width 100 :Cell tables/round2 :style {:textAlign "right"}}]
                           :filterable true :defaultFilterMethod tables/text-filter-OR :showPagination true :pageSize (count portfolio-checks-data-dur) :showPageSizeOptions false :className "-striped -highlight"}]]
                        )
        ]]
      ]
     ]))


(defn large-exposures
  "another ugly microoptimisation"
  []
  (let [download-columns [:NAME :isin :TICKER :pct_held :original-quantity :AMT_OUTSTANDING]]
    (when-not (seq @(rf/subscribe [:large-exposures])) (rf/dispatch [:get-large-exposures]))
    [box :class "subbody rightelement" :child
     (gt/element-box-with-cols "large-exposures" "100%" (str "Large exposures (>5%) " @(rf/subscribe [:qt-date])) @(rf/subscribe [:large-exposures])
                               [[:> ReactTable
                                 {:data       (reverse (sort-by :pct_held @(rf/subscribe [:large-exposures])))
                                  :columns    [(tables/risk-table-columns :name)
                                               (tables/risk-table-columns :isin)
                                               (tables/risk-table-columns :issuer)
                                               {:Header "Held %" :accessor "pct_held" :width 80 :Cell #(tables/nb-cell-format "%.1f%" 100. %) :style {:textAlign "right"}}
                                               (assoc (tables/risk-table-columns :nominal) :filterable false)
                                               {:Header "Outstanding" :accessor "AMT_OUTSTANDING" :width 100 :Cell tables/nb-thousand-cell-format :style {:textAlign "right"}}]
                                  :filterable true :defaultFilterMethod tables/text-filter-OR :showPagination true :pageSize 20 :showPageSizeOptions false :className "-striped -highlight"}]]
                               download-columns
                               )]))


(rf/reg-event-fx
  :get-position-history
  (fn [{:keys [db]} [_ portfolio filter-one filter-two field dateseq]]
    {:db                 (assoc db :navigation/show-mounting-modal true)
     :http-post-dispatch {:url (str static/server-address "position-history") :edn-params {:portfolio portfolio :filter-one filter-one :filter-two filter-two :field field :dateseq dateseq}
                          :dispatch-key [:portfolio-history/data]}}))

(rf/reg-event-fx
  :get-position-history-isin-seq
  (fn [{:keys [db]} [_ portfolio isin-seq dateseq]]
    {:http-post-dispatch {:url (str static/server-address "position-history-isin-seq") :edn-params {:portfolio portfolio :isin-seq isin-seq :dateseq dateseq}
                          :dispatch-key [:position-history/data]}}))

(rf/reg-event-db
  :portfolio-history/data
  (fn [db [_ data]] (assoc db :navigation/show-mounting-modal false :portfolio-history/data data)))

(rf/reg-event-db
  :position-history/data
  (fn [db [_ data]] (assoc db :position-history/throbber false :position-history/data data)))

(rf/reg-sub
  :portfolio-history/table
  (fn [db]
    (let [risk-choices (let [rfil (get-in db [:portfolio-history/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? risk-choices)] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          all-dates (sort (distinct (map :date (db :portfolio-history/data))))
          sorted-data
          (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k)))
                   (into [] (for [[k v] (group-by (apply juxt accessors-k) (get db :portfolio-history/data))]
                              (into (select-keys (first v) accessors-k)
                                    (for [dt all-dates]
                                      [(keyword (str "dt" dt))
                                       (reduce + (map #(get % (keyword (get-in tables/risk-table-columns [(db :portfolio-history/field-one) :accessor])) 0.0)
                                                      (t/chainfilter {:date dt} v)))])))))
          thfil (fn [line] (not (every? zero? (map line (map #(keyword (str "dt" %)) all-dates)))))
          sorted-data-hide-zero (if (db :portfolio-history/hide-zero-holdings) (filter thfil sorted-data) sorted-data)
          sorted-deltas (into [] (for [line sorted-data-hide-zero]
                                   (into (assoc line :tdelta (- (get line (keyword (str "dt" (last all-dates)))) (get line (keyword (str "dt" (first all-dates)))))
                                                     (keyword (str "deltadt" (first all-dates))) 0.0)
                                         (for [i (range (dec (count all-dates)))]
                                           [(keyword (str "deltadt" (nth all-dates (inc i))))
                                            (- (get line (keyword (str "dt" (nth all-dates (inc i))))) (get line (keyword (str "dt" (nth all-dates i)))))]))))
          template (into {} (for [[k v] (first (get db :portfolio-history/data))] [k "Total"]))
          portfolio-total-line (assoc (into
                                        (into template (for [dt all-dates] [(keyword (str "dt" dt)) (reduce + (map (keyword (str "dt" dt)) sorted-deltas))]))
                                        (for [i (range (dec (count all-dates)))]
                                          [(keyword (str "deltadt" (nth all-dates (inc i)))) (reduce + (map (keyword (str "deltadt" (nth all-dates (inc i)))) sorted-deltas))]))
                                 :tdelta (reduce + (map :tdelta sorted-deltas)))]
      (clj->js
        (if (= (:portfolio-history/display-style db) "Tree")
          (tables/cljs-text-filter-OR (:portfolio-history/table-filter db) (mapv #(assoc %1 :totaldummy " ") sorted-deltas))
          (concat [portfolio-total-line] sorted-deltas)))                           ;this should be total line
      )))

(def position-history-display-view (atom nil))
(def position-history-chart-data (r/atom nil))

(defn position-historical-dates [] (concat ["20181231"
                                            "20190329"
                                            "20190628"
                                            "20190930"
                                            "20191231"
                                            "20200331"
                                            "20200630"
                                            "20200929"
                                            "20201231"
                                            "20210129"
                                            "20210226"
                                            "20210331"
                                            "20210429"
                                            "20210528"
                                            "20210630"
                                            "20210730"
                                            "20210831"
                                            "20210930"
                                            "20211030"
                                            "20211130"
                                            ]
                                           @(rf/subscribe [:list-dates-position-history])))

(def typeahead-bond-nickname (r/atom nil))
(def position-history-qs-table-filter (r/atom []))
(def position-history-qs-table-output (atom nil))

(rf/reg-event-db
  :position-history-toggle
  (fn [db [_  value]]
    (assoc db :position-history/view value :position-history/data [])))

(rf/reg-event-fx
  :position-history-fetch
  (fn [{:keys [db]} [_]]
    (let [portfolio (db :position-history/portfolio)
          isin (db :position-history/isin)
          all-dates (conj (position-historical-dates) (str (t/gdate->yyyyMMdd (t/ddMMMyyyy->gdate (db :qt-date)))))
          dates (filter #(>= (js/parseInt (subs (str %) 0 4)) (js/parseInt (db :position-history/start-year))) all-dates)]
      {:db (assoc db :position-history/throbber true)
       :fx (if (= :aggregate (db :position-history/view))
             [[:dispatch [:get-position-history-isin-seq portfolio (map (fn [line] (get line "ISIN")) (js->clj (. (.getResolvedState @position-history-qs-table-output) -sortedData))) dates]]]
             [[:dispatch [:get-position-history-isin-seq portfolio [isin] dates]]
              [:dispatch [:post-model-history-pricing :pricing [isin]]]])})))

(defn position-history []
  (when (empty? @(rf/subscribe [:quant-model/mini-security-master])) (rf/dispatch [:get-mini-security-master]))
  (let [view (rf/subscribe [:position-history/view])
        source-data @(rf/subscribe [:quant-model/mini-security-master])]
    [v-box :class "subbody rightelement" :gap "10px" :children
     [[box :class "element" :child
       (gt/element-box-generic "position-history-risk-table-isin" "1024px" (str "Position history")
                               {:target-id "position-history-risk-table-isin"}
                               [[h-box :gap "10px" :align :center
                                 :children [[radio-button :model view :label "Aggregate" :value :aggregate :on-change #(rf/dispatch [:position-history-toggle %])]
                                            [radio-button :model view :label "Single security" :value :single-security :on-change #(rf/dispatch [:position-history-toggle %])]
                                            [gap :size "20px"]
                                            [title :label "Portfolio:" :level :level3]
                                            (gt/portfolio-dropdown-selector :position-history/portfolio)
                                            [gap :size "20px"]
                                            [title :label "Start year" :level :level3]
                                            [single-dropdown :width dropdown-width :model (rf/subscribe [:position-history/start-year]) :choices (into [] (for [k (range 2018 2023)] {:id (str k) :label (str k)})) :on-change #(rf/dispatch [:position-history/start-year %])]
                                            [gap :size "20px"]
                                            [button :label "Fetch" :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:position-history-fetch])]]]
                                (if (= @view :aggregate)
                                  [h-box :gap "20px" :children [[:> ReactTable
                                                                 {:data            @(rf/subscribe [:quant-model/mini-security-master])
                                                                  :columns         (qstables/table-style->qs-table-col "PositionHistory" nil)
                                                                  :pageSize        10 :showPagination true :filterable true :defaultFilterMethod tables/text-filter-OR
                                                                  :defaultFiltered @position-history-qs-table-filter :onFilteredChange #(do (rf/dispatch [:position-history/data []]) (reset! position-history-qs-table-filter %))
                                                                  :ref             #(reset! position-history-qs-table-output %)
                                                                  :className       "-striped -highlight"}]
                                                                [v-box :children [[title :level :level4 :label "Use , for OR. Use & for AND. Use - to exclude."]
                                                                                  [title :level :level4 :label "Examples: AR,BR for Argentina or Brazil."]
                                                                                  [title :level :level4 :label "-Sov to exclude sovereigns, -CN&-HK to exclude both countries."]]]]]
                                  [h-box :gap "10px" :align :center
                                   :children [[box :width "150px" :child [title :label (str "Bond: " @(rf/subscribe [:position-history/nickname])) :level :level3]]
                                              [box :style {:z-index 2} :child [typeahead
                                                                               :width "150px"
                                                                               :model typeahead-bond-nickname
                                                                               :data-source (fn [s] (into [] (take 8 (for [n (into [] (map (fn [i] {:id i :label i}) (sort (distinct (map :Bond source-data))))) :when (re-find (re-pattern (str "(?i)" s)) (:label n))] n))))
                                                                               :render-suggestion (fn [{:keys [label]}] [:span [:i {:style {:width "40px"}}] label])
                                                                               :suggestion-to-string (fn [_] "")
                                                                               :placeholder "Search here"
                                                                               :on-change #(do (let [isin (:ISIN (first (filter (fn [line] (= (:Bond line) (:id %))) source-data)))]
                                                                                                 (rf/dispatch [:position-history/data []] )
                                                                                                 (rf/dispatch [:position-history/isin isin])
                                                                                                 (rf/dispatch [:position-history/nickname (:id %)])))
                                                                               :change-on-blur? true :immediate-model-update? false :rigid? true :disabled? false]]]])
                                (if @(rf/subscribe [:position-history/throbber])
                                  [throbber :size :large]
                                  (let [data @(rf/subscribe [:position-history/data])]
                                    (if (= @view :aggregate)
                                      [oz/vega-lite (charting/stacked-vertical-bars-2 data "Position history")]
                                      [v-box :gap "10px" :children [[oz/vega-lite (charting/stacked-vertical-bars-2 data "Position history")]
                                                                    [oz/vega-lite (charting/stacked-vertical-bars-3 data @(rf/subscribe [:quant-model/history-result]) "Position history")]]]))
                                  )


                                ])]]]))

(defn portfolio-history []
  (let [qt-date (t/ddMMMyyyy->gdate @(rf/subscribe [:qt-date])) ; (cljs-time.format/parse (cljs-time.format/formatter "dd MMMyyyy") (str (subs @(rf/subscribe [:qt-date]) 0 2) " " (subs @(rf/subscribe [:qt-date]) 2)))
        qt-date-yyyymmdd (t/gdate->yyyyMMdd qt-date)        ;(cljs-time.format/unparse (cljs-time.format/formatter "yyyyMMdd") qt-date)
        qt-date-yyyymmdd-1w (t/gdate->yyyyMMdd (plus qt-date (days -7)))
        qt-date-yyyymmdd-2w (t/gdate->yyyyMMdd (plus qt-date (days -15)))
        date-map (distinct (into [] (for [k (conj (position-historical-dates) qt-date-yyyymmdd-2w qt-date-yyyymmdd-1w qt-date-yyyymmdd)] {:id k :label (t/gdate->ddMMMyy (t/int->gdate k))})))
        start-period (rf/subscribe [:portfolio-history/start-period])
        end-period (rf/subscribe [:portfolio-history/end-period])
        breakdown-map (into [] (for [k ["Start/End" "All"]] {:id k :label k}))
        field-one (rf/subscribe [:portfolio-history/field-one])
        breakdown (rf/subscribe [:portfolio-history/breakdown])
        absdiff (rf/subscribe [:portfolio-history/absdiff])
        portfolio-map @(rf/subscribe [:portfolio-dropdown-map])
        display-style (rf/subscribe [:portfolio-history/display-style])
        portfolio (rf/subscribe [:portfolio-history/portfolio])
        hide-zero-risk (rf/subscribe [:portfolio-history/hide-zero-holdings])
        is-tree (= @(rf/subscribe [:portfolio-history/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:portfolio-history/filter])]  (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? risk-choices)] (tables/risk-table-columns r)))
        all-dates (sort (distinct (map :date @(rf/subscribe [:portfolio-history/data]))))
        download-columns (if (= @absdiff :absolute)
           (concat (map #(get-in tables/risk-table-columns [% :accessor]) (remove nil? risk-choices)) (map #(str "dt" %) all-dates))
           (concat (map #(get-in tables/risk-table-columns [% :accessor]) (remove nil? risk-choices)) (map #(str "deltadt" %) all-dates) ["tdelta"]))
        get-history-dates (fn [bd start end]
                            (let [all-dates (distinct (conj (position-historical-dates) qt-date-yyyymmdd-2w qt-date-yyyymmdd-1w qt-date-yyyymmdd))]
                              (if (= bd "Start/End")
                                [start end]
                                (let [a (.indexOf all-dates start)
                                      b (.indexOf all-dates end)]
                                  (take (inc (- b a)) (drop a all-dates))
                                  ))))]
        [box :class "subbody rightelement" :child
     (gt/element-box-generic "position-history-risk-table" max-width (str "Portfolio history")
                             {:target-id "position-history-risk-table" :on-click-action #(tools/react-table-to-csv @position-history-display-view @portfolio download-columns is-tree)}
                             [[h-box :gap " 10px " :align :center
                               :children (concat
                                           [[title :label "Display:" :level :level3]
                                            [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(do (rf/dispatch [:portfolio-history/display-style %]) (rf/dispatch [:portfolio-history/hide-zero-holdings (= % " Table ")]))]
                                            [gap :size "30px"]
                                            [checkbox :model hide-zero-risk :label "Hide zero lines?" :on-change #(rf/dispatch [:portfolio-history/hide-zero-holdings %])]
                                            [title :label "Field:" :level :level3]
                                            [single-dropdown :width dropdown-width :model field-one :choices (take 6 static/risk-field-choices) :on-change #(do (rf/dispatch [:portfolio-history/field-one %])
                                                                                                                                                                (rf/dispatch [:portfolio-history/data []]))]
                                            [gap :size "30px"]]
                                           (into [] (concat [[title :label "Filtering:" :level :level3]
                                                             [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(do (rf/dispatch [:portfolio-history/data []])
                                                                                                                                                            (rf/dispatch [:portfolio-history/portfolio %]))]]
                                                            (filtering-row :portfolio-history/filter)
                                                            [[gap :size "30px"]])))]
                              [h-box :gap "10px" :align :center
                               :children [[title :label "Start period:" :level :level3]
                                          [single-dropdown :width dropdown-width :model start-period :choices (drop-last date-map) :on-change #(rf/dispatch [:portfolio-history/start-period %])]
                                          [title :label "End period:" :level :level3]
                                          [single-dropdown :width dropdown-width :model end-period :choices (rest date-map) :on-change #(rf/dispatch [:portfolio-history/end-period %])]
                                          [title :label "Breakdown:" :level :level3]
                                          [single-dropdown :width dropdown-width :model breakdown :choices breakdown-map :on-change #(rf/dispatch [:portfolio-history/breakdown %])]
                                          [title :label "Position/Change:" :level :level3]
                                          [single-dropdown :width dropdown-width :model absdiff :choices [{:id :absolute :label "Position"} {:id :difference :label "Difference"}] :on-change #(rf/dispatch [:portfolio-history/absdiff %])]
                                          [button :label "Fetch" :class "btn btn-primary btn-block"
                                           :on-click #(rf/dispatch [:get-position-history @portfolio (keyword (:accessor (first grouping-columns))) (keyword (:accessor (second grouping-columns)))
                                                                    (keyword (:accessor (tables/risk-table-columns @field-one))) (get-history-dates @breakdown @start-period @end-period)])]
                                          [button :label "Chart" :disabled? (not is-tree) :class "btn btn-primary btn-block" :on-click #(reset! position-history-chart-data
                                                                                                                              (->> ((first (js->clj (. (.getResolvedState @position-history-display-view) -sortedData))) "_subRows")
                                                                                                                                   (map (fn [v] (select-keys v (conj (map (fn [d] (str "dt" d)) all-dates) "_pivotVal"))))
                                                                                                                                   (map (fn [line] (clojure.set/rename-keys line (zipmap (map (fn [d] (str "dt" d)) all-dates) all-dates))))
                                                                                                                                   (map (fn [line] (reduce (fn [a b] (update a b (fn [x] (* x (if (= @field-one :nav) 100. 1.))))) line all-dates)))))]
                                          ]]

                              [:div {:id "position-history-risk-table"}
                               [tables/tree-table-risk-table
                                :portfolio-history/table
                                (into [{:Header  (str "Groups (" @(rf/subscribe [:portfolio-history/portfolio]) " " @(rf/subscribe [:qt-date]) ") ")
                                        :columns (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns)}]
                                      (if (= @absdiff :absolute)
                                        (for [dt (map #(keyword (str "dt" %)) all-dates)]
                                          (tables/nb-col (t/gdate->ddMMMyy (t/int->gdate (str (subs (name dt) 2)))) dt 100 (let [v (get-in tables/risk-table-columns [@field-one :Cell])] (case @field-one :nav tables/round2*100-if-not0 :weight-delta tables/round2*100-if-not0 :contrib-mdur tables/round2-if-not0 v)) tables/sum-rows))
                                        (for [dt (conj (mapv #(keyword (str "deltadt" %)) all-dates) :tdelta)]
                                          (tables/nb-col (str (gstring/unescapeEntities "&Delta;") (if (not= dt :tdelta) (t/gdate->ddMMMyy (t/int->gdate (subs (name dt) 7))))) dt 100 (let [v (get-in tables/risk-table-columns [@field-one :Cell])] (case @field-one :nav tables/round2*100-if-not0 :weight-delta tables/round2*100-if-not0 :contrib-mdur tables/round2-if-not0 v)) tables/sum-rows))
                                        ))
                                is-tree
                                (mapv :accessor grouping-columns)
                                position-history-display-view
                                :portfolio-history/table-filter
                                :portfolio-history/expander
                                on-click-context]]
                              [oz/vega-lite (charting/stacked-vertical-bars @position-history-chart-data "Position history")]])]))



(defn allianz-loss-report []
  (when (empty? @(rf/subscribe [:allianz-loss-report])) (rf/dispatch [:get-allianz-loss-report]))
  [box :class "subbody rightelement" :child
   (gt/element-box-generic "allianz-loss-report-table" max-width "Allianz P&L budget"
                           {:target-id "allianz-loss-report-table" :on-click-action #(tools/csv-link @(rf/subscribe [:allianz-loss-report]) "allianz")}
                           [[:> ReactTable
                             {:data           (sort-by :Bond @(rf/subscribe [:allianz-loss-report]))
                              :columns        (conj
                                                (map (fn [x] {:Header x :columns [(tables/nb-col "Loss budget %" (str x "_loss_budget_pct") 120 #(tables/nb-cell-format "%.1f%" 1. %) tables/sum-rows)
                                                                                  (tables/nb-col "EUR gross P&L" (str x "_eur_gross_pnl") 120 tables/nb-thousand-cell-format tables/sum-rows)]})
                                                     ["IALEEMCD" "IAUNEMCD" "IAPKEMCD" "IAKLEMCD"])
                                                {:Header "Bond" :columns [{:Header "Name" :accessor "Bond" :width 120}
                                                                          {:Header "ISIN" :accessor "ISIN" :width 120}]})
                              :showPagination true :defaultPageSize 20 :className "-striped -highlight" :filterable true :defaultFilterMethod tables/text-filter-OR}]])])