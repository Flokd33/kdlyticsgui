(ns jasminegui.riskviews
  (:require
    [oz.core :as oz]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [goog.string :as gstring]
    [goog.string.format]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    ["react-table" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]

    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )


(def nff (NumberFormat. Format/DECIMAL))
(defn nf [x] (.format nff (str x)))
(defn round-to-thousand [x] (* 1000 (int (/ x 1000.))))
(def tnfmt (comp nf round-to-thousand))


(defn nfcell [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div  (nf (int x))]
      "-")))


(defn case-insensitive-filter [filterfn row]
  "filterfn is {id: column_name value: text_in_filter_box"
  ;(println row)
  (.includes (.toLowerCase (str (aget row (aget filterfn "id")))) (.toLowerCase (aget filterfn "value")))

  ;(or
  ;  (.includes (.toLowerCase (str (aget row (aget filterfn "id")))) (.toLowerCase (aget filterfn "value")))
  ;  (.includes (.toLowerCase (str (aget row (aget filterfn "_pivotId")))) (.toLowerCase (aget filterfn "value")))
  ;  )

  )

(defn txt-format [fmt this]    (r/as-element (if-let [x (aget this "value")] (gstring/format fmt x) "-")))
(def round3         (partial txt-format "%.3f"))
(def round2         (partial txt-format "%.2f"))
(def round1         (partial txt-format "%.1f"))
(def yield-format   (partial txt-format "%.2f%"))
(def zspread-format (partial txt-format "%.0fbps"))

(defn rating-sort [a b]
  (let [t @(rf/subscribe [:rating-to-score])] (<= (t (keyword a)) (t (keyword b)))))

(defn sum-rows [vals] (reduce + vals))

(defn median [coll]
  (let [sorted (sort (remove nil? coll))
        cnt (count sorted)
        halfway (quot cnt 2)]
    (cond
      (zero? cnt) nil
      (odd? cnt) (nth sorted halfway)
      :else (let [bottom (dec halfway) bottom-val (nth sorted bottom) top-val (nth sorted halfway)] (* 0.5 (+ bottom-val top-val))))))


(defn roundpc [fmt this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div {:style {:color (if (neg? x) "red" "black")}} (gstring/format fmt (* 100 x))]
      "-")))

(def round1pc (partial roundpc "%.1f%"))
(def round2pc (partial roundpc "%.2f%"))

(defn round1pcytd  [this]
  (r/as-element
    (if-let [x (aget this "value")]
      (let [style (merge (if (neg? x) {:color "red"} {:color "black"})
                         (if (aget this "row" "thisyear") {:font-style "italic"} {}))]
        [:div {:style style} (gstring/format "%.1f%" (* 100 x))])
      "-")))

(defn round0pc-trigger  [this]
  (r/as-element
    (if-let [x (aget this "value")]
      (letfn [(colorize [c v] [:div {:style {:color c}} (gstring/format "%.0f%" (* 100 v))])]
        (cond
          (>= x 1.0) (colorize "red" x)
          (>= x 0.5) (colorize "orange" x)
          (>= x 0.0) (colorize "black" x)
          (< x 0.0) "<0%"
          :else "-"))
      "-")))

(defn strategy-pop-up [this]
  (r/as-element [:div [:span {:title (aget this "row" "strategy")} (aget this "row" "strategy-shortcut")]]))

(defn last-price-props [this]
  (if-not (nil? this)
    (let [status (aget this "row" "status")
          prefix (if (= status "CLOSED") "(c) " "")]
      (r/as-element (str prefix (gstring/format "%.2f" (aget this "value")))))
    (clj->js {:style nil})))

;(defn format-date-from-int-rt [this] (tools/format-date-from-int (aget this "value")))
;
;(defn status-props [this]
;  (if-not (nil? this)
;    (let [status (aget this "row" "status")]
;      (r/as-element (if (= status "CLOSED") (tools/format-date-from-int (aget this "row" "exit-date")) status)))
;    (clj->js {:style nil})))
;
;(defn exit-date-props [this]
;  (if-not (nil? this)
;    (let [status (aget this "row" "status")]
;      (r/as-element (if (= status "CLOSED") (tools/format-date-from-int (aget this "row" "exit-date")) status)))
;    (clj->js {:style nil})))

;(defn case-insensitive-filter [filterfn row]
;  "filterfn is {id: column_name value: text_in_filter_box"
;  (.includes  (.toLowerCase (str (aget row (aget filterfn "id"))))  (.toLowerCase (aget filterfn "value"))))
;
;(defn exit-date-filter [filterfn row]
;  "if user types LIVE, filters by today's exit date"
;  (if (.includes "live" (.toLowerCase (aget filterfn "value")))
;    (.includes (.toLowerCase (str (aget row (aget filterfn "id")))) (tools/gdate-to-yyyymmdd static/gtoday))
;    (.includes (.toLowerCase (str (aget row (aget filterfn "id")))) (.toLowerCase (aget filterfn "value")))))
;

(defn rating-score-to-string [this] (aget this "row" "qt-iam-int-lt-median-rating"))


(def table-columns
  {:id                          {:Header "ID"             :accessor "id"                          :show false}
   :id-show                     {:Header "ID"             :accessor "id"                          :width 75}
   :region                      {:Header "Region" :accessor "Region" :width 140 }
   :country                     {:Header "Country" :accessor "Country" :width 140}
   :issuer                      {:Header "Issuer" :accessor "TICKER" :width 140 }
   :sector                      {:Header "Sector" :accessor "JPM_SECTOR" :width 140}
   :rating                      {:Header "Rating" :accessor "qt-iam-int-lt-median-rating" :show false}  ; :show false
  ;  :rating                      {:Header "Rating" :accessor "qt-iam-int-lt-median-rating"  :show false} :sortMethod rating-sort} ; :show false
   :rating-score                {:Header "Rating" :accessor "qt-iam-int-lt-median-rating-score" :Cell rating-score-to-string :aggregate first}
   :name                        {:Header "Name" :accessor "NAME" :width 140} ;  :filterMethod case-insensitive-filter
   :isin                        {:Header "ISIN"           :accessor "isin"                        :width 125 } ;:style {:textAlign "center"}
   :description                 {:Header "thinkFolio ID" :accessor "description" :width 500}
   :nav                         {:Header "NAV" :accessor "weight" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
   :nominal                     {:Header "Nominal" :accessor "original-quantity" :width 120 :style {:textAlign "right"} :aggregate sum-rows :Cell nfcell :filterable false}
   :z-spread                    {:Header "Z-spread" :accessor "qt-libor-spread" :width 80 :style {:textAlign "right"} :aggregate median :Cell nfcell :filterable false}
   :g-spread                    {:Header "G-spread" :accessor "qt-govt-spread" :width 80 :style {:textAlign "right"} :aggregate median :Cell nfcell :filterable false}
   :duration                    {:Header "M dur" :accessor "qt-modified-duration" :width 60 :style {:textAlign "right"} :aggregate median :Cell round2 :filterable false}
   :yield                       {:Header "Yield" :accessor "qt-yield" :width 60 :style {:textAlign "right"} :aggregate median :Cell round2pc :filterable false}
   :value                       {:Header "Value" :accessor "base-value" :width 120 :style {:textAlign "right"} :aggregate sum-rows :Cell nfcell :filterable false}
   :contrib-gspread             {:Header "G-spread" :accessor "contrib-gspread" :width 80 :style {:textAlign "right"} :aggregate sum-rows :Cell round1 :filterable false}
   :contrib-zspread                         {:Header "Z-spread" :accessor "contrib-zspread" :width 80 :style {:textAlign "right"} :aggregate sum-rows :Cell round1 :filterable false}
   :contrib-yield                         {:Header "Yield" :accessor "contrib-yield" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2pc :filterable false}
   :contrib-mdur                         {:Header "M dur" :accessor "contrib-mdur" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
   :cash-pct                         {:Header "Cash" :accessor "cash-pct" :width 60 :style {:textAlign "right"} :Cell yield-format :filterable false}
   :contrib-bond-yield                         {:Header "Bond yield" :accessor "contrib-bond-yield" :width 80 :style {:textAlign "right"} :Cell round2pc :filterable false}

   })


;(defn sum-rows [vals] (reduce + vals))

(defn first-level-sort [x]
  (case x
    "Cash" "AAA"
    x))

(defn add-total-line-to-pivot [pivoted-table portfolios]
  (let [total-line (merge
                     {:Region      "Total"
                      :JPM_SECTOR  "Total"
                      :Country     "Total"
                      :TICKER      "Total"
                      :NAME        "Total"
                      :description "Total"
                      }
                     (into {} (for [p portfolios] [(keyword p) (reduce + (map (keyword p) pivoted-table))]))
                     )]
    (conj pivoted-table total-line)))


(def dropdown-width "150px")

(defn single-portfolio-risk-display []
  (let [positions @(rf/subscribe [:positions])
        portfolio @(rf/subscribe [:single-portfolio-risk/portfolio])
        portfolio-total-line (assoc (@(rf/subscribe [:total-positions]) (keyword portfolio)) :qt-iam-int-lt-median-rating "Total" :qt-iam-int-lt-median-rating-score "00 Total")
        is-tree (= @(rf/subscribe [:single-portfolio-risk/display-style]) "Tree")
        portfolio-positions (filter #(= (:portfolio %) portfolio) positions)
        risk-filter @(rf/subscribe [:single-portfolio-risk/filter])
        risk-choice-1 (if (not= "None" (risk-filter 1)) (risk-filter 1))
        risk-choice-2 (if (not= "None" (risk-filter 2)) (risk-filter 2))
        risk-choice-3 (if (not= "None" (risk-filter 3)) (risk-filter 3))
        grouping-columns (into [] (for [r (remove nil? [risk-choice-1 risk-choice-2 risk-choice-3 :name])] (table-columns r)))
        accessors (mapv :accessor grouping-columns)
        accessors-k (mapv keyword accessors)
        display (conj (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) portfolio-positions) portfolio-total-line)
        ]
    [:> ReactTable
         {:data           display
          :defaultFilterMethod case-insensitive-filter
          :columns        [{:Header "Groups" :columns grouping-columns}
                           {:Header "Position" :columns (mapv table-columns [:nav :value :nominal])}
                           {:Header "Contribution" :columns (mapv table-columns [:contrib-yield :contrib-zspread :contrib-mdur])}
                           {:Header (if is-tree "Bond analytics (median)" "Bond analytics") :columns (mapv table-columns [:yield :z-spread :g-spread :duration])}
                           {:Header "Description" :columns (mapv table-columns [:rating :isin :description])}]
          :showPagination false
          :sortable       (not is-tree)
          :filterable     (not is-tree)
          :pageSize       (if is-tree (inc (count (distinct (map (first accessors-k) portfolio-positions)))) (inc (count display)))
          :className      "-striped -highlight"
          :pivotBy        (if is-tree accessors [])}]

        ))


(defn multiple-portfolio-risk-display []
  (let [
        pivoted-positions @(rf/subscribe [:pivoted-positions])
        selected-portfolios @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        portfolios  @(rf/subscribe [:portfolios])
        number-of-fields @(rf/subscribe [:multiple-portfolio-risk/field-number])
        display-key-one @(rf/subscribe [:multiple-portfolio-risk/field-one])
        cell-one (get-in table-columns [display-key-one :Cell])
        display-key-two @(rf/subscribe [:multiple-portfolio-risk/field-two])
        cell-two (get-in table-columns [display-key-two :Cell])
        width-one 100                                      ;(get-in table-columns [display-key-one :width])
        is-tree (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
        risk-filter @(rf/subscribe [:multiple-portfolio-risk/filter])
        risk-choice-1 (if (not= "None" (risk-filter 1)) (risk-filter 1))
        risk-choice-2 (if (not= "None" (risk-filter 2)) (risk-filter 2))
        risk-choice-3 (if (not= "None" (risk-filter 3)) (risk-filter 3))
        grouping-columns (into [] (for [r (remove nil? [risk-choice-1 risk-choice-2 risk-choice-3 :name])] (table-columns r)))
        accessors (mapv :accessor grouping-columns)
        accessors-k (mapv keyword accessors)
        pivoted-data (map #(merge % ((keyword (get-in table-columns [display-key-one :accessor])) %)) pivoted-positions)
        display-one (add-total-line-to-pivot (sort-by
                      (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k)))
                      pivoted-data) portfolios)
        ]
    [:> ReactTable
     {:data                display-one
      :defaultFilterMethod case-insensitive-filter
      :columns             (if (= number-of-fields "One")

                             [{:Header "Groups" :columns grouping-columns}
                              {:Header  (str "Portfolio " (name display-key-one))
                               :columns (into [] (for [p portfolios :when (some #{p} selected-portfolios)] {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate sum-rows :Cell cell-one :filterable false}))}
                              {:Header  "Description"
                               :columns (mapv table-columns [:rating :isin :description])}]


                             )
      :showPagination      false
      :sortable            (not is-tree)
      :filterable          (not is-tree)
      :pageSize            (if is-tree (inc (count (distinct (map (first accessors-k) display-one)))) (inc (count display-one)))
      :className           "-striped -highlight"
      :pivotBy             (if is-tree accessors [])}]

    ))

;(def differentiate-pivoted-positions [table base]
;  (into []
;        (for [line table]
;          (for [key quantitative-fields]
;
;            )
;          (for p portfolios)
;
;          )
;        )
;  )

(defn multiple-portfolio-alignment-risk-display []
  (let [
        pivoted-positions @(rf/subscribe [:pivoted-positions])
        base-portfolio @(rf/subscribe [:portfolio-alignment/base-portfolio])
        selected-portfolios @(rf/subscribe [:portfolio-alignment/selected-portfolios])
        selected-portfolios @(rf/subscribe [:portfolio-alignment/nav-threshold])
        portfolios  @(rf/subscribe [:portfolios])
        display-key-one @(rf/subscribe [:multiple-portfolio-risk/field-one])
        cell-one (get-in table-columns [display-key-one :Cell])
        display-key-two @(rf/subscribe [:multiple-portfolio-risk/field-two])
        cell-two (get-in table-columns [display-key-two :Cell])
        width-one 100                                      ;(get-in table-columns [display-key-one :width])
        is-tree (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
        risk-filter @(rf/subscribe [:multiple-portfolio-risk/filter])
        risk-choice-1 (if (not= "None" (risk-filter 1)) (risk-filter 1))
        risk-choice-2 (if (not= "None" (risk-filter 2)) (risk-filter 2))
        risk-choice-3 (if (not= "None" (risk-filter 3)) (risk-filter 3))
        grouping-columns (into [] (for [r (remove nil? [risk-choice-1 risk-choice-2 risk-choice-3 :name])] (table-columns r)))
        accessors (mapv :accessor grouping-columns)
        accessors-k (mapv keyword accessors)
        ;pivoted-position-delta (into []
        ;                             (for [line pivoted-positions k quantitative-fields])
        ;
        ;                             )
        pivoted-data (map #(merge % ((keyword (get-in table-columns [display-key-one :accessor])) %)) pivoted-positions)
        display-one (add-total-line-to-pivot (sort-by
                                               (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k)))
                                               pivoted-data) portfolios)
        ;display-two (if (not= display-key-two "None") (sort-by
        ;                                                (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) (map #(merge % ((keyword (get-in table-columns [display-key-two :accessor])) %)) pivoted-positions)))
        ]
    [:> ReactTable
     {:data                display-one
      :defaultFilterMethod case-insensitive-filter
      :columns

                             [{:Header "Groups" :columns grouping-columns}
                              {:Header  (str "Portfolio " (name display-key-one))
                               :columns (into [] (for [p portfolios :when (some #{p} selected-portfolios)] {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate sum-rows :Cell cell-one :filterable false}))}
                              {:Header  "Description"
                               :columns [{:Header "thinkFolio ID" :accessor "description" :width 500} (table-columns :rating)]}]

      :showPagination      false
      :sortable            (not is-tree)
      :filterable          (not is-tree)
      :pageSize            (if is-tree (inc (count (distinct (map (first accessors-k) display-one)))) (inc (count display-one)))
      :className           "-striped -highlight"
      :pivotBy             (if is-tree accessors [])}]

    ))

(defn single-portfolio-risk-controller []
  (let [
        portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:single-portfolio-risk/display-style])
        portfolio (rf/subscribe [:single-portfolio-risk/portfolio])
        risk-filter (rf/subscribe [:single-portfolio-risk/filter])
        ]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label "Portfolio drill-down" :level :level1]
                 [h-box :gap "10px"
                  :children [(concat [
                                      [title :label "Display type:" :level :level3]
                                      [single-dropdown :width dropdown-width :model display-style :choices [{:id "Table" :label "Table"} {:id "Tree" :label "Tree"}] :on-change #(rf/dispatch [:single-portfolio-risk/display-style %])]
                                      [gap :size "50px"]
                                      [title :label "Filtering:" :level :level3]
                                      [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:single-portfolio-risk/portfolio %])]]
                                     (into [] (for [i (range 1 4)] [single-dropdown :width dropdown-width :model (r/cursor risk-filter [i]) :choices static/risk-choice-map :on-change #(rf/dispatch [:single-portfolio-risk/filter i %])])))
                             ]]
                 ;[h-box :gap "10px" :children [[title :label "Shortcuts:"]]]
                 [single-portfolio-risk-display]]]])
  )
;

(defn multiple-portfolio-risk-controller []
  (let [
        portfolio-map (into [] (for [p  @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:multiple-portfolio-risk/display-style])
        risk-filter (rf/subscribe [:multiple-portfolio-risk/filter])
        selected-portfolios (rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        number-of-fields (rf/subscribe [:multiple-portfolio-risk/field-number])
        field-one (rf/subscribe [:multiple-portfolio-risk/field-one])
        field-two (rf/subscribe [:multiple-portfolio-risk/field-two])
        ]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label "Portfolio drill-down" :level :level1]
                 [h-box :gap "10px"
                  :children (concat [
                                     [v-box :gap "15px" :children [[title :label "Display type:" :level :level3] [title :label "Fields:" :level :level3] [title :label "Field one:" :level :level3] [title :label "Field two:" :level :level3]]]
                                     [v-box :gap "10px" :children [[single-dropdown :width dropdown-width :model display-style :choices [{:id "Table" :label "Table"} {:id "Tree" :label "Tree"}] :on-change #(rf/dispatch [:multiple-portfolio-risk/display-style %])]
                                                                   [single-dropdown :width dropdown-width :model number-of-fields :choices [{:id "One" :label "One"} {:id "Two" :label "Two"}] :on-change #(rf/dispatch [:multiple-portfolio-risk/field-number %])]
                                                                   [single-dropdown :width dropdown-width :model field-one :choices static/field-choices :on-change #(rf/dispatch [:multiple-portfolio-risk/field-one %])]
                                                                   [single-dropdown :width dropdown-width :model field-two :choices static/field-choices :on-change #(rf/dispatch [:multiple-portfolio-risk/field-two %])]
                                                                   ]]
                                     [gap :size "50px"]
                                     [title :label "Filtering:" :level :level3]
                                     [selection-list :width dropdown-width :height "250px" :model selected-portfolios :choices portfolio-map :on-change #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios %])]]
                                    (into [] (for [i (range 1 4)] [single-dropdown :width dropdown-width :model (r/cursor risk-filter [i]) :choices static/risk-choice-map :on-change #(rf/dispatch [:multiple-portfolio-risk/filter i %])])))]
                 ;[h-box :gap "10px" :children [[title :label "Shortcuts:"]]]
                 [multiple-portfolio-risk-display]]]])
  )





(defn summary-display []
  (let [positions @(rf/subscribe [:positions])
        portfolios @(rf/subscribe [:portfolios])
        portfolio @(rf/subscribe [:single-portfolio-risk/portfolio])
        totals @(rf/subscribe [:total-positions])
        portfolio-positions (filter #(= (:portfolio %) portfolio) positions)
        accessors-k (mapv keyword nil)
        display (into [] (for [p portfolios]
                           (merge
                             {:portfolio       p}
                             (into {} (for [k [:base-value :contrib-yield :contrib-zspread :contrib-gspread :contrib-mdur :qt-iam-int-lt-median-rating :qt-iam-int-lt-median-rating-score]] [k (get-in totals [(keyword p) k])]))
                             {:cash-pct (reduce + (map :weight (filter #(and (= (:portfolio %) p) (= (:Region %) "Cash")) positions)))
                              :contrib-bond-yield (- (get-in totals [(keyword p) :contrib-yield]) (reduce + (map :contrib-yield (filter #(and (= (:portfolio %) p) (= (:Region %) "Cash")) positions))))
                              }
                             )

                           ))
        ]
    (println display)
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label "Summary" :level :level1]
    [:> ReactTable
     {:data           display
      :columns        [{:Header "Portfolio" :accessor "portfolio" :width 120 }
                       {:Header "Balance" :columns (mapv table-columns [:value :cash-pct])}
                       {:Header "Value" :columns (mapv table-columns [:contrib-yield :contrib-bond-yield :contrib-zspread :contrib-gspread])}
                       {:Header "Risk" :columns (mapv table-columns [:contrib-mdur :rating-score :rating])}
                       ]
      :showPagination false
      :pageSize       (count portfolios)
      :className      "-striped -highlight"}]
]]]


    ))
