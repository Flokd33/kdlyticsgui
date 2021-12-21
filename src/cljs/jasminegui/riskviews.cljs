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
                                   (update :contrib-yield * 100.) (update :bm-contrib-yield * 100.)
                                   )
          ;(assoc ((:total-positions db) (keyword portfolio)) :qt-iam-int-lt-median-rating "Total" :qt-iam-int-lt-median-rating-score "00 Total")
          ;portfolio-positions (filter #(= (:portfolio %) portfolio) (:positions db))
          ;viewable-positions (if (:single-portfolio-risk/hide-zero-holdings db) (filter #(not= (:original-quantity %) 0) portfolio-positions) portfolio-positions)
          xform (comp
                  (filter #(= (:portfolio %) portfolio))
                  (if (:single-portfolio-risk/hide-zero-holdings db) (filter #(not= (:original-quantity %) 0)) identity)
                  (map #(update % :weight * 100.))
                  (map #(update % :bm-weight * 100.))
                  (map #(update % :weight-delta * 100.))
                  (map #(update % :qt-yield * 100.))
                  (map #(update % :total-return-ytd * 100.))
                  (map #(update % :jensen-ytd * 100.))
                  (map #(update % :contrib-yield * 100.))
                  (map #(update % :bm-contrib-yield * 100.)))
          v2 (into [] xform (:positions db))
          risk-choices (let [rfil (:single-portfolio-risk/filter db)] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          sorted-data (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) v2)] ;viewable-positions
      (clj->js
        (if (= (:single-portfolio-risk/display-style db) "Tree")
          (tables/cljs-text-filter-OR (:single-portfolio-risk/table-filter db) (mapv #(assoc %1 :totaldummy "") sorted-data))
          (conj sorted-data portfolio-total-line)))
      )))

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


;(defn seek [coll] (first (remove nil? coll)))

(defn get-pivoted-data [instrument-definition table portfolios instruments field]
  (let [grp (group-by (juxt :id :portfolio) table)]
    (into [] (for [instrument instruments]
               (into (get instrument-definition instrument)
                     (for [p portfolios] [(keyword p) (reduce + (map field (get-in grp [[instrument p]])))]))))))

;(defn get-pivoted-data [instrument-definition table portfolios instruments field]
;  (let [grp (group-by (juxt :id :portfolio) table)]
;    (into [] (for [instrument instruments]
;               (into (get instrument-definition instrument)
;                     (for [p portfolios]
;                       [(keyword p) (reduce + (map field (get-in grp [[instrument p]])))]
;                       ;[(keyword p) (if (seq (get-in grp [[instrument p]])) (reduce + (map field (get-in grp [[instrument p]]))) 0.)]
;                       ))))))

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
          pivoted-data (get-pivoted-data (get db :instruments) pos (:multiple-portfolio-risk/selected-portfolios db) (distinct (map :id pos)) (keyword (get-in tables/risk-table-columns [display-key-one :accessor])))
          thfil (fn [line] (not (every? zero? (map line kselected-portfolios))))
          pivoted-data-hide-zero (if hide-zero-risk (filter thfil pivoted-data) pivoted-data)
          sorted-data (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-hide-zero)]
      (if (= (:multiple-portfolio-risk/display-style db) "Tree")
        (tables/cljs-text-filter-OR (:multiple-portfolio-risk/table-filter db) (mapv #(assoc %1 :totaldummy "") sorted-data))
        (add-total-line-to-pivot sorted-data kselected-portfolios)))))

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
        (add-total-line-to-pivot  sorted-data kportfolios))
      )))

(rf/reg-sub
  :summary-display/table
  (fn [db]
    (into [] (for [p (:portfolios db)]

               (reduce #(update %1 %2 * 100.)
                       (merge
                         {:portfolio p}
                         (into {} (for [k [:cash-pct
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
                                           :contrib-delta-BBG_CEMBI_D1Y_BETA]]
                                    [k (get-in (:total-positions db) [(keyword p) k])]))
                         {:contrib-bond-yield (- (get-in (:total-positions db) [(keyword p) :contrib-yield]) (reduce + (map :contrib-yield (filter #(and (= (:portfolio %) p) (not= (:asset-class %) "BONDS")) (:positions db)))))})
                       [:cash-pct :contrib-yield :contrib-bond-yield]
                       )))))

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
    [(aget rowInfo "original" "NAME")                                         ; <---- string is a section title
     ["Copy ISIN" (fn [] (tools/copy-to-clipboard (aget rowInfo "original" "isin")))]
     ["Trade history" (fn [] (single-bond-trade-history-event state rowInfo instance))]         ; <---- the name is a span
     ;["Build ticket" (fn [] (prn "my-fn"))]
     ]))

(defn on-click-context [state rowInfo instance]
  (clj->js {:onClick #(fnevt state rowInfo instance %) :style {:cursor "pointer"}}))



;(defn single-bond-trade-flat-history [state rowInfo instance]
;  (clj->js {:onClick #(rf/dispatch [:get-single-bond-flat-history
;                                   (aget rowInfo "row" "_original" "NAME")
;                                   (aget rowInfo "row" "_original" "id")
;                                   @(rf/subscribe [:portfolios])
;                                   "01Jan2019"
;                                   @(rf/subscribe [:qt-date])])
;            :style {:cursor "pointer"}}))

(def multiple-portfolio-risk-display-view (atom nil))

(defn multiple-bond-trade-history-event [state rowInfo instance]
  (do (rf/dispatch [:get-single-bond-flat-history
                    (aget rowInfo "row" "_original" "NAME")
                    (aget rowInfo "row" "_original" "id")
                    (filter @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]) @(rf/subscribe [:portfolios]))
                    "01Jan2019"
                    @(rf/subscribe [:qt-date])
                    "nominal"
                    ])))


(defn multiple-bond-trade-history-nav-event [state rowInfo instance]
  (do (rf/dispatch [:get-single-bond-flat-history
                    (aget rowInfo "row" "_original" "NAME")
                    (aget rowInfo "row" "_original" "id")
                    (filter @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]) @(rf/subscribe [:portfolios]))
                    "01Jan2019"
                    @(rf/subscribe [:qt-date])
                    "nav"])))

(defn fnevt-multiple [state rowInfo instance evt]
  (rcm/context!
    evt
    [(aget rowInfo "original" "NAME")                                         ; <---- string is a section title
     ["Copy ISIN" (fn [] (tools/copy-to-clipboard (aget rowInfo "original" "isin")))]
     ["Trade history" (fn [] (multiple-bond-trade-history-event state rowInfo instance))]         ; <---- the name is a span
     ["Trade history (% NAV)" (fn [] (multiple-bond-trade-history-nav-event state rowInfo instance))]         ; <---- the name is a span
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
        cell-one (let [v (get-in tables/risk-table-columns [display-key :Cell])] (case display-key :nav tables/round2*100-if-not0 :contrib-mdur tables/round2-if-not0 v)) ;(get-in tables/risk-table-columns [display-key :Cell])
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

(defn single-portfolio-risk-display []
  (let [portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:single-portfolio-risk/display-style])
        portfolio (rf/subscribe [:single-portfolio-risk/portfolio])
        hide-zero-risk (rf/subscribe [:single-portfolio-risk/hide-zero-holdings])
        is-tree (= @(rf/subscribe [:single-portfolio-risk/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:single-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
        additional-des-cols (remove (set (conj risk-choices "None")) (map :id static/risk-choice-map))
        download-columns (map #(get-in tables/risk-table-columns [% :accessor]) (remove nil? (concat [:isin] (conj risk-choices :name) [:nav :bm-weight :weight-delta :contrib-mdur :bm-contrib-eir-duration :mdur-delta :contrib-yield :bm-contrib-yield :contrib-zspread :contrib-beta :quant-value-4d :quant-value-2d :value :nominal :yield :z-spread :g-spread :duration :total-return-ytd :cembi-beta-last-year :cembi-beta-previous-year :jensen-ytd] additional-des-cols [:rating :description])))]
    ;(println (nth @(rf/subscribe [:single-portfolio-risk/table]) 5))
    [box :class "subbody rightelement" :child
     (gt/element-box-generic "single-portfolio-risk" max-width (str "Portfolio drill-down " @(rf/subscribe [:qt-date]))
                             {:target-id "single-portfolio-risk-table" :on-click-action #(tools/react-table-to-csv @single-portfolio-risk-display-view @portfolio download-columns is-tree)}
                             [[h-box :gap "10px" :align :center
                       :children (concat
                                   [[title :label "Display:" :level :level3]
                                    [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(do (rf/dispatch [:single-portfolio-risk/display-style %]) (rf/dispatch [:single-portfolio-risk/hide-zero-holdings (= % "Table")]))]
                                    [gap :size "30px"]
                                    [checkbox :model hide-zero-risk :label "Hide zero positions? (index won't sum to 100!)" :on-change #(rf/dispatch [:single-portfolio-risk/hide-zero-holdings %])]
                                    [gap :size "30px"]]
                                   (into [] (concat [[title :label "Filtering:" :level :level3]
                                                     [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:single-portfolio-risk/portfolio %])]]
                                                    (filtering-row :single-portfolio-risk/filter)
                                                    [[gap :size "30px"]]))
                                   (shortcut-row :single-portfolio-risk/shortcut))]
                              [:div {:id "single-portfolio-risk-table"}
                               [tables/tree-table-risk-table
                                :single-portfolio-risk/table
                                [{:Header (str "Groups (" @(rf/subscribe [:single-portfolio-risk/portfolio]) " " @(rf/subscribe [:qt-date]) ")" ) :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
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
  (let [portfolio-map (into [] (for [p  @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:multiple-portfolio-risk/display-style])
        portfolios @(rf/subscribe [:portfolios])
        selected-portfolios (rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        ;number-of-fields (rf/subscribe [:multiple-portfolio-risk/field-number])
        field-one (rf/subscribe [:multiple-portfolio-risk/field-one])
        ;field-two (rf/subscribe [:multiple-portfolio-risk/field-two])
        hide-zero-risk (rf/subscribe [:multiple-portfolio-risk/hide-zero-holdings])
        is-tree (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
        ;download-columns-old (concat (map keyword portfolios) (map keyword (remove nil? (map #(get-in tables/risk-table-columns [% :accessor]) (map :id static/risk-choice-map)))) [:isin :description])
        download-columns (concat ["NAME" "isin" "description"] (filter @selected-portfolios portfolios) (map name (remove nil? (map #(get-in tables/risk-table-columns [% :accessor]) (map :id static/risk-choice-map)))))
        toggle-portfolios (fn [seqp] (let [setseqp (set seqp)] (if (clojure.set/subset? setseqp @selected-portfolios) (clojure.set/difference @selected-portfolios setseqp) (clojure.set/union @selected-portfolios setseqp))))
        ]
    [box :class "subbody rightelement" :child
     (gt/element-box-generic "multiple-portfolio-risk" max-width (str "Portfolio drill-down " @(rf/subscribe [:qt-date])) {:target-id "multiple-portfolio-risk-table" :on-click-action #(tools/react-table-to-csv @multiple-portfolio-risk-display-view "pivot" download-columns is-tree)}
                             [[h-box :gap "50px"
                       :children
                       [[v-box :gap "20px"
                         :children [[h-box :gap "10px" :children [[title :label "Display type:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(do (rf/dispatch [:multiple-portfolio-risk/display-style %])  (rf/dispatch [:multiple-portfolio-risk/hide-zero-holdings (= % "Table")]))]]]
                                    [checkbox :model hide-zero-risk :label "Hide zero lines?"  :on-change #(rf/dispatch [:multiple-portfolio-risk/hide-zero-holdings %])] ;:disabled? (= @display-style "Tree")
                                    [h-box :gap "10px" :children [[title :label "Field:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model field-one :choices static/risk-field-choices :on-change #(rf/dispatch [:multiple-portfolio-risk/field-one %])]]]]]
                        [v-box :gap "10px"
                         :children (concat [[title :label "Portfolios:" :level :level3]
                                            [button :style {:width "100%"} :label "All" :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set portfolios)])]
                                            [button :style {:width "100%"} :label "None" :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios #{}])]]
                                           (into [] (for [line static/portfolio-alignment-groups]
                                                      [button :style {:width "100%"} :label (:label line) :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (toggle-portfolios (:portfolios (first (filter (fn [x] (= (:id x) (:id line))) static/portfolio-alignment-groups))))])])))]
                        [selection-list :width dropdown-width :model selected-portfolios :choices portfolio-map :on-change #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios %])]
                        [v-box :gap "20px"
                         :children [[h-box :gap "10px" :children (into [] (concat [[title :label "Filtering:" :level :level3]] (filtering-row :multiple-portfolio-risk/filter) [[gap :size "30px"]] (shortcut-row :multiple-portfolio-risk/shortcut)))]]]]]
                      ;[multiple-portfolio-risk-display]
                      (let [display-key-one @(rf/subscribe [:multiple-portfolio-risk/field-one])
                            width-one 80
                            risk-choices (let [rfil @(rf/subscribe [:multiple-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
                            grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
                            cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (some #{p} @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]))]
                                            {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :filterable false
                                             :Cell   (let [v (get-in tables/risk-table-columns [display-key-one :Cell])] (case display-key-one :nav tables/round2*100-if-not0 :contrib-mdur tables/round2-if-not0 v))}))]
                        [:div {:id "multiple-portfolio-risk-table"}
                         [tables/tree-table-risk-table
                          :multiple-portfolio-risk/table
                          [{:Header (str "Groups (" @(rf/subscribe [:qt-date]) ")") :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
                           {:Header (str "Portfolio " (name display-key-one)) :columns cols}
                           {:Header "Description" :columns (mapv tables/risk-table-columns [:rating :isin :description])}]
                          (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
                          (mapv :accessor grouping-columns)
                          multiple-portfolio-risk-display-view
                          :multiple-portfolio-risk/table-filter
                          :multiple-portfolio-risk/expander
                          on-click-context-multiple]])

                      ])]))

(defn portfolio-alignment-risk-controller []
  (let [display-style (rf/subscribe [:portfolio-alignment/display-style])
        ;risk-filter (rf/subscribe [:portfolio-alignment/filter])
        portfolio-alignment-group (rf/subscribe [:portfolio-alignment/group])
        field (rf/subscribe [:portfolio-alignment/field])
        threshold (rf/subscribe [:portfolio-alignment/threshold])]
    [box :class "subbody rightelement" :child
     (gt/element-box "pivot-portfolio-risk" max-width (str "Portfolio alignment " @(rf/subscribe [:qt-date])) nil #(tools/react-table-to-csv @portfolio-alignment-risk-display-view
                                                                                                                                             "alignment"
                                                                                                                                             (map name (concat [:NAME :description :isin :jpm-region :qt-risk-country-name :qt-jpm-sector :qt-iam-int-lt-median-rating] (map keyword (:portfolios (first (filter (fn [x] (= (:id x) @(rf/subscribe [:portfolio-alignment/group]))) static/portfolio-alignment-groups)))))))
                     [[h-box :gap "50px"
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
                                    [h-box :gap "10px" :children (shortcut-row :portfolio-alignment/shortcut)]]]]]

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

      (let [portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
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
            ]
        [box :class "subbody rightelement" :child
         (gt/element-box "irrisk" "100%" (str "Interest rate risk " @(rf/subscribe [:qt-date])) data
                         [[h-box :gap "5px" :align :center  :children [[title :level :level3 :label "Portfolio:"] [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:single-portfolio-risk/portfolio %])]
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
                            :showPagination false :pageSize 20 :className "-striped -highlight"}]])]))))

(defn concentration-risk []
  (let [index-cut-off 0.01 overweight-multiplier 2 breakdown (r/atom :country-sector)]
    (fn []
      (let [portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
            portfolio (rf/subscribe [:single-portfolio-risk/portfolio])
            positions (t/chainfilter {:portfolio @(rf/subscribe [:single-portfolio-risk/portfolio])} @(rf/subscribe [:positions])) ;:original-quantity #(not (zero? %))
            grp (group-by (case @breakdown
                            :country-sector (juxt :qt-risk-country-name :qt-jpm-sector)
                            :country-rating (juxt :qt-risk-country-name #(> (:rating-score %) 10))
                            :sector-rating (juxt :qt-jpm-sector #(> (:rating-score %) 10)))  positions)
            exposures (into [] (for [[[f1 f2] v] grp] (merge {:f1 f1 :f2 f2} (into {} (for [metric [:weight :bm-weight :contrib-mdur :bm-contrib-eir-duration]] [metric (reduce + (map metric v))])))))
            exposures-post-cut-off (->> exposures (filter #(> (:bm-weight %) index-cut-off)) (filter #(> (/ (:weight %) (:bm-weight %)) overweight-multiplier)))
            display (reverse
                      (sort-by :weight-multiplier
                               (into [] (for [line exposures-post-cut-off] (assoc line :bucket (str (:f1 line) " " (if (= @breakdown :country-sector) (:f2 line) (if (:f2 line) "HY" "IG")))
                                                                          :weight-multiplier (/ (:weight line) (:bm-weight line))
                                                                          :mdur-multiplier (/ (:contrib-mdur line) (:bm-contrib-eir-duration line)))))))]
        [box :class "subbody rightelement" :child
         (gt/element-box "concentrationrisk" "100%" (str "Concentration risk " @(rf/subscribe [:qt-date])) display
                         [[title :level :level4 :label "Filtering for buckets of risk where the index is above 1% and we hold more than 2x the index size."]
                          [h-box :gap "20px" :align :center  :children [[title :level :level3 :label "Portfolio:"]
                                                                        [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:single-portfolio-risk/portfolio %])]
                                                                        [title :level :level3 :label "Breakdown:"]
                                                                        [radio-button :model breakdown :label "Country / Sector" :value :country-sector :on-change #(reset! breakdown %)]
                                                                        [radio-button :model breakdown :label "Country / Rating" :value :country-rating :on-change #(reset! breakdown  %)]
                                                                        [radio-button :model breakdown :label "Sector / Rating" :value :sector-rating :on-change #(reset! breakdown  %)]
                                                                        ]]


                          [:> ReactTable
                           {:data           display
                            :columns        [{:Header "Bucket overweight" :columns [{:Header "Bucket" :accessor "bucket" :width 240}
                                                                                    (assoc (tables/nb-col "Maturity multiplier" "weight-multiplier" 120 tables/round1 nil) :filterable false)
                                                                                    (assoc (tables/nb-col "Duration multiplier" "mdur-multiplier" 120 tables/round1 nil) :filterable false)]}
                                             {:Header "NAV" :columns [(assoc (tables/nb-col "Fund" "weight" 120 tables/round2pc nil) :filterable false)
                                                                      (assoc (tables/nb-col "Index" "bm-weight" 120 tables/round2pc nil) :filterable false)]}
                                             {:Header "Duration" :columns [(assoc (tables/nb-col "Fund" "contrib-mdur" 120 tables/round2 nil) :filterable false)
                                                                           (assoc (tables/nb-col "Index" "bm-contrib-eir-duration" 120 tables/round2 nil) :filterable false)]}]
                            :showPagination false  :pageSize (count display) :className "-striped -highlight"}]
                          ])]))))

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
                        :showPagination false :pageSize (count @(rf/subscribe [:portfolios])) :getTrProps go-to-portfolio-risk :className "-striped -highlight"}]]
                     )

     ]))



(defn large-exposures
  "another ugly microoptimisation"
  []
  (when-not (seq @(rf/subscribe [:large-exposures])) (rf/dispatch [:get-large-exposures]))
  [box :class "subbody rightelement" :child
   (gt/element-box "large-exposures" "100%" (str "Large exposures (>5%) " @(rf/subscribe [:qt-date])) @(rf/subscribe [:large-exposures])
                   [[:> ReactTable
                     {:data           (reverse (sort-by :pct_held @(rf/subscribe [:large-exposures])))
                      :columns        [(tables/risk-table-columns :name)
                                       (tables/risk-table-columns :isin)
                                       (tables/risk-table-columns :issuer)
                                       {:Header "Held %" :accessor "pct_held" :width 80 :Cell #(tables/nb-cell-format "%.1f%" 100. %) :style {:textAlign "right"}}
                                       (assoc (tables/risk-table-columns :nominal) :filterable false)
                                       {:Header "Outstanding" :accessor "AMT_OUTSTANDING" :width 100 :Cell tables/nb-thousand-cell-format :style {:textAlign "right"}}]
                      :filterable true :defaultFilterMethod tables/text-filter-OR :showPagination true :pageSize 20 :showPageSizeOptions false :className "-striped -highlight"}]])])