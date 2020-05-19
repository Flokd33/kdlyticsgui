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

    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )



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


;(defn sum-rows [vals] (reduce + vals))


(def dropdown-width "150px")

(defn single-portfolio-risk-display []
  (let [positions @(rf/subscribe [:positions])
        portfolio @(rf/subscribe [:single-portfolio-risk/portfolio])
        portfolio-total-line (assoc (@(rf/subscribe [:total-positions]) (keyword portfolio)) :qt-iam-int-lt-median-rating "Total" :qt-iam-int-lt-median-rating-score "00 Total")
        is-tree (= @(rf/subscribe [:single-portfolio-risk/display-style]) "Tree")
        portfolio-positions (filter #(= (:portfolio %) portfolio) positions)
        viewable-positions (if (and (not is-tree) @(rf/subscribe [:single-portfolio-risk/hide-zero-holdings])) (filter #(not= (:weight %) 0) portfolio-positions) portfolio-positions)
        risk-filter @(rf/subscribe [:single-portfolio-risk/filter])
        risk-choice-1 (if (not= "None" (risk-filter 1)) (risk-filter 1))
        risk-choice-2 (if (not= "None" (risk-filter 2)) (risk-filter 2))
        risk-choice-3 (if (not= "None" (risk-filter 3)) (risk-filter 3))
        additional-des-cols (remove #{"None" risk-choice-1 risk-choice-2 risk-choice-3} (map :id static/risk-choice-map))
        grouping-columns (into [] (for [r (remove nil? [risk-choice-1 risk-choice-2 risk-choice-3 :name])] (tables/table-columns r)))
        accessors (mapv :accessor grouping-columns)
        accessors-k (mapv keyword accessors)
        display (conj (sort-by (apply juxt (concat [(comp mount/first-level-sort (first accessors-k))] (rest accessors-k))) viewable-positions) portfolio-total-line)
        ]
    ;(println @(rf/subscribe [:single-portfolio-risk/table-filter]))
    [:> ReactTable
     {:data                display
      :defaultFilterMethod tables/case-insensitive-filter
      :columns             [{:Header "Groups" :columns grouping-columns}
                            {:Header "NAV" :columns (mapv tables/table-columns [:nav :bm-weight :weight-delta])}
                            {:Header "Duration" :columns (mapv tables/table-columns [:contrib-mdur :bm-contrib-eir-duration :mdur-delta])}
                            {:Header "Yield" :columns (mapv tables/table-columns [:contrib-yield :bm-contrib-yield])}
                            {:Header "Z-spread" :columns (mapv tables/table-columns [:contrib-zspread ])}
                            {:Header "Position" :columns (mapv tables/table-columns [:value :nominal])}
                            ;{:Header "Index contribution" :columns (mapv tables/table-columns [:bm-contrib-yield :bm-contrib-eir-duration])}
                            {:Header (if is-tree "Bond analytics (median)" "Bond analytics") :columns (mapv tables/table-columns [:yield :z-spread :g-spread :duration])}
                            {:Header "Description" :columns (mapv tables/table-columns (into [] (concat [:rating :isin] additional-des-cols [:description])))}]
      :showPagination      (not is-tree)
      :sortable            (not is-tree)
      :filterable          (not is-tree)
      :pageSize            (if is-tree (inc (count (distinct (map (first accessors-k) portfolio-positions)))) 25) ;(inc (count display))
      :className           "-striped -highlight"
      :pivotBy             (if is-tree accessors [])
      :defaultFiltered     (if is-tree [] @(rf/subscribe [:single-portfolio-risk/table-filter])) ; [{:id "analyst" :value "Tammy"}]
      :onFilteredChange    #(rf/dispatch [:single-portfolio-risk/table-filter %])
      }]

        ))


(defn multiple-portfolio-risk-display []
  (let [
        selected-portfolios @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        portfolios  @(rf/subscribe [:portfolios])
        display-key-one @(rf/subscribe [:multiple-portfolio-risk/field-one])
        cell-one (get-in tables/table-columns [display-key-one :Cell])
        width-one 100                                      ;(get-in tables/table-columns [display-key-one :width])
        is-tree (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
        risk-filter @(rf/subscribe [:multiple-portfolio-risk/filter])
        risk-choice-1 (if (not= "None" (risk-filter 1)) (risk-filter 1))
        risk-choice-2 (if (not= "None" (risk-filter 2)) (risk-filter 2))
        risk-choice-3 (if (not= "None" (risk-filter 3)) (risk-filter 3))
        grouping-columns (into [] (for [r (remove nil? [risk-choice-1 risk-choice-2 risk-choice-3 :name])] (tables/table-columns r)))
        accessors (mapv :accessor grouping-columns)
        accessors-k (mapv keyword accessors)
        display-one @(rf/subscribe [:multiple-portfolio-risk/table])
        ]
    [:> ReactTable
     {:data                display-one
      :defaultFilterMethod tables/case-insensitive-filter
      :columns               [{:Header "Groups" :columns grouping-columns}
                              {:Header  (str "Portfolio " (name display-key-one))
                               :columns (into [] (for [p portfolios :when (some #{p} selected-portfolios)] {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :Cell cell-one :filterable false}))}
                              {:Header  "Description"
                               :columns (mapv tables/table-columns [:rating :isin :description])}]


      :showPagination      (not is-tree)
      :sortable            (not is-tree)
      :filterable          (not is-tree)
      :pageSize            (if is-tree (inc (count (distinct (map (first accessors-k) display-one)))) 25)
      :className           "-striped -highlight"
      :pivotBy             (if is-tree accessors [])
      :defaultFiltered     (if is-tree [] @(rf/subscribe [:single-portfolio-risk/table-filter])) ; [{:id "analyst" :value "Tammy"}]
      :onFilteredChange    #(rf/dispatch [:single-portfolio-risk/table-filter %])

      }]

    ))

(defn multiple-portfolio-risk-display-old []
  (let [
        pivoted-positions @(rf/subscribe [:pivoted-positions])
        selected-portfolios @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        kselected-portfolios (mapv keyword selected-portfolios)
        portfolios  @(rf/subscribe [:portfolios])
        hide-zero-risk @(rf/subscribe [:multiple-portfolio-risk/hide-zero-holdings])
        number-of-fields @(rf/subscribe [:multiple-portfolio-risk/field-number])
        display-key-one @(rf/subscribe [:multiple-portfolio-risk/field-one])
        cell-one (get-in tables/table-columns [display-key-one :Cell])
        display-key-two @(rf/subscribe [:multiple-portfolio-risk/field-two])
        cell-two (get-in tables/table-columns [display-key-two :Cell])
        width-one 100                                      ;(get-in tables/table-columns [display-key-one :width])
        is-tree (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
        risk-filter @(rf/subscribe [:multiple-portfolio-risk/filter])
        risk-choice-1 (if (not= "None" (risk-filter 1)) (risk-filter 1))
        risk-choice-2 (if (not= "None" (risk-filter 2)) (risk-filter 2))
        risk-choice-3 (if (not= "None" (risk-filter 3)) (risk-filter 3))
        grouping-columns (into [] (for [r (remove nil? [risk-choice-1 risk-choice-2 risk-choice-3 :name])] (tables/table-columns r)))
        accessors (mapv :accessor grouping-columns)
        accessors-k (mapv keyword accessors)
        pivoted-data (map #(merge % ((keyword (get-in tables/table-columns [display-key-one :accessor])) %)) pivoted-positions)
        thfil (fn [line] (not (every? zero? (map line kselected-portfolios))))
        pivoted-data-hide-zero (if (and (not is-tree) hide-zero-risk) (filter thfil pivoted-data) pivoted-data)
        display-one (mount/add-total-line-to-pivot (sort-by
                                               (apply juxt (concat [(comp mount/first-level-sort (first accessors-k))] (rest accessors-k)))
                                               pivoted-data-hide-zero) portfolios)
        ]
    [:> ReactTable
     {:data                display-one
      :defaultFilterMethod tables/case-insensitive-filter
      :columns             (if (= number-of-fields "One")

                             [{:Header "Groups" :columns grouping-columns}
                              {:Header  (str "Portfolio " (name display-key-one))
                               :columns (into [] (for [p portfolios :when (some #{p} selected-portfolios)] {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :Cell cell-one :filterable false}))}
                              {:Header  "Description"
                               :columns (mapv tables/table-columns [:rating :isin :description])}]

                             )
      :showPagination      (not is-tree)
      :sortable            (not is-tree)
      :filterable          (not is-tree)
      :pageSize            (if is-tree (inc (count (distinct (map (first accessors-k) display-one)))) 25)
      :className           "-striped -highlight"
      :pivotBy             (if is-tree accessors [])
      :defaultFiltered     (if is-tree [] @(rf/subscribe [:single-portfolio-risk/table-filter])) ; [{:id "analyst" :value "Tammy"}]
      :onFilteredChange    #(rf/dispatch [:single-portfolio-risk/table-filter %])

      }]

    ))

(defn multiple-portfolio-alignment-risk-display []
  (let [
        group (:portfolios (first (filter #(= (:id %) @(rf/subscribe [:portfolio-alignment/group])) static/portfolio-alignment-groups)))
        pivoted-positions @(rf/subscribe [:pivoted-positions])
        base-portfolio (first group)
        portfolios (rest group)
        kportfolios (mapv keyword portfolios)
        display-key @(rf/subscribe [:portfolio-alignment/field])
        cell-one (get-in tables/table-columns [display-key :Cell])
        width-one 100
        is-tree (= @(rf/subscribe [:portfolio-alignment/display-style]) "Tree")
        risk-filter @(rf/subscribe [:portfolio-alignment/filter])
        risk-choice-1 (if (not= "None" (risk-filter 1)) (risk-filter 1))
        risk-choice-2 (if (not= "None" (risk-filter 2)) (risk-filter 2))
        risk-choice-3 (if (not= "None" (risk-filter 3)) (risk-filter 3))
        grouping-columns (into [] (for [r (remove nil? [risk-choice-1 risk-choice-2 risk-choice-3 :name])] (tables/table-columns r)))
        accessors (mapv :accessor grouping-columns)
        accessors-k (mapv keyword accessors)
        pivoted-data (map #(merge % ((keyword (get-in tables/table-columns [display-key :accessor])) %)) pivoted-positions)
        differentiate (fn [line] (reduce
                                   (fn [temp-line p] (assoc temp-line p (- (p temp-line) ((keyword base-portfolio) temp-line))))
                                   line
                                   kportfolios))
        pivoted-data-diff (map differentiate pivoted-data)
        threshold (cljs.reader/read-string (:label (first (filter #(= (:id %) @(rf/subscribe [:portfolio-alignment/threshold])) static/threshold-choices-alignment))))
        thfil (fn [line] (some (fn [x] (or (< x (- threshold)) (> x threshold))) (map line kportfolios)))
        pivoted-data-diff-post-th (filter thfil pivoted-data-diff)
        display (mount/add-total-line-to-pivot (sort-by
                                               (apply juxt (concat [(comp mount/first-level-sort (first accessors-k))] (rest accessors-k)))
                                               pivoted-data-diff-post-th) portfolios)
        ]
    (println kportfolios)
    [:> ReactTable
     {:data                display
      :defaultFilterMethod tables/case-insensitive-filter
      :columns

                             [{:Header "Groups" :columns grouping-columns}
                              {:Header  (str "Portfolio " (name display-key) " vs " base-portfolio)
                               :columns (into [] (for [p portfolios] {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :Cell cell-one :filterable false}))}
                              {:Header  "Description"
                               :columns [{:Header "thinkFolio ID" :accessor "description" :width 500} (tables/table-columns :rating)]}]

      :showPagination      (not is-tree)
      :sortable            (not is-tree)
      :filterable          (not is-tree)
      :pageSize            (if is-tree (inc (count (distinct (map (first accessors-k) display)))) 25)
      :className           "-striped -highlight"
      :pivotBy             (if is-tree accessors [])}]

    ))

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

(defn csv-link-single-portfolio []
  (let [portfolio @(rf/subscribe [:single-portfolio-risk/portfolio])]
    (tools/download-object-as-csv
      (clj->js (tools/vector-of-maps->csv (filter #(= (:portfolio %) portfolio) @(rf/subscribe [:positions]))))
      (str portfolio ".csv"))))

(defn single-portfolio-risk-controller []
  (let [portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:single-portfolio-risk/display-style])
        portfolio (rf/subscribe [:single-portfolio-risk/portfolio])
        hide-zero-risk (rf/subscribe [:single-portfolio-risk/hide-zero-holdings])]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Portfolio drill-down " @(rf/subscribe [:qt-date])) :level :level1]
                 [h-box
                  :gap "50px"
                  :children [
                             [v-box
                              :gap "15px"
                              :children [
                                         [h-box
                                          :gap "10px"
                                          :children [
                                                     [title :label "Display type:" :level :level3]
                                                     [single-dropdown :width dropdown-width :model display-style :choices [{:id "Table" :label "Table"} {:id "Tree" :label "Tree"}] :on-change #(rf/dispatch [:single-portfolio-risk/display-style %])]]]
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
                                                                                                     [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(csv-link-single-portfolio)]
                                                                                                    ]))
                                                            ]
                                                           ]]
                             ]




                             ]
                 ;[h-box :gap "10px" :children [[title :label "Shortcuts:"]]]
                 [single-portfolio-risk-display]]]])
  )
;

(defn csv-link-multiple-portfolio []
  (tools/download-object-as-csv
    (clj->js (tools/vector-of-maps->csv @(rf/subscribe [:multiple-portfolio-risk/table])))
    "pivot.csv"))

(defn multiple-portfolio-risk-controller []
  (let [
        portfolio-map (into [] (for [p  @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:multiple-portfolio-risk/display-style])
        risk-filter (rf/subscribe [:multiple-portfolio-risk/filter])
        portfolios @(rf/subscribe [:portfolios])
        selected-portfolios (rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        number-of-fields (rf/subscribe [:multiple-portfolio-risk/field-number])
        field-one (rf/subscribe [:multiple-portfolio-risk/field-one])
        field-two (rf/subscribe [:multiple-portfolio-risk/field-two])
        hide-zero-risk (rf/subscribe [:multiple-portfolio-risk/hide-zero-holdings])
        ]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Portfolio drill-down " @(rf/subscribe [:qt-date])) :level :level1]
                 [h-box :gap "50px"
                  :children
                             [
                              [v-box
                               :gap "20px"
                               :children [
                                          [h-box :gap "10px" :children [[title :label "Display type:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model display-style :choices [{:id "Table" :label "Table"} {:id "Tree" :label "Tree"}] :on-change #(rf/dispatch [:multiple-portfolio-risk/display-style %])]]]
                                          [checkbox :model hide-zero-risk :label "Hide zero positions in table view" :disabled? (= @display-style "Tree") :on-change #(rf/dispatch [:multiple-portfolio-risk/hide-zero-holdings %])]
                                          [h-box :gap "10px" :children [[title :label "Field:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model field-one :choices static/field-choices :on-change #(rf/dispatch [:multiple-portfolio-risk/field-one %])]]]
                                          ]]
                              [v-box
                               :gap "10px"
                               :children [[title :label "Portfolios:" :level :level3]
                                          [button :style {:width "100%"} :label "All"      :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set portfolios)])]
                                          [button :style {:width "100%"} :label "None"     :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios #{}])]
                                          [button :style {:width "100%"} :label "CEMBI"    :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :cembi)) static/portfolio-alignment-groups))))])]
                                          [button :style {:width "100%"} :label "Allianz"  :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :allianz)) static/portfolio-alignment-groups))))])]
                                          [button :style {:width "100%"} :label "IG"       :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :ig)) static/portfolio-alignment-groups))))])]
                                          [button :style {:width "100%"} :label "Talanx"   :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :talanx)) static/portfolio-alignment-groups))))])]]
                               ]
                              [selection-list :width dropdown-width :model selected-portfolios :choices portfolio-map :on-change #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios %])]
                              [v-box
                               :gap "20px"
                               :children [
                                          [h-box :gap "10px" :children (into [] (concat [[title :label "Filtering:" :level :level3]] (filtering-row :multiple-portfolio-risk/filter)))]
                                          [h-box :gap "10px" :children (shortcut-row :multiple-portfolio-risk/shortcut)]
                                          [h-box :gap "10px" :children [ [title :label "Download:" :level :level3]
                                                                        [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(csv-link-multiple-portfolio)]]]
                                          ]
                               ]


                              ]










                  ;(into [] (concat [
                  ;                            [v-box :gap "15px" :children [[title :label "Display type:" :level :level3] ;[title :label "Fields:" :level :level3]
                  ;                                                          [title :label "Field:" :level :level3] ;[title :label "Field two:" :level :level3]
                  ;                                                          ]]
                  ;                            [v-box :gap "10px" :children [[single-dropdown :width dropdown-width :model display-style :choices [{:id "Table" :label "Table"} {:id "Tree" :label "Tree"}] :on-change #(rf/dispatch [:multiple-portfolio-risk/display-style %])]
                  ;                                                          ;[single-dropdown :width dropdown-width :model number-of-fields :choices [{:id "One" :label "One"} {:id "Two" :label "Two"}] :on-change #(rf/dispatch [:multiple-portfolio-risk/field-number %])]
                  ;                                                          [single-dropdown :width dropdown-width :model field-one :choices static/field-choices :on-change #(rf/dispatch [:multiple-portfolio-risk/field-one %])]
                  ;                                                          ;[single-dropdown :width dropdown-width :model field-two :choices static/field-choices :on-change #(rf/dispatch [:multiple-portfolio-risk/field-two %])]
                  ;                                                          ]]
                  ;                            [gap :size "50px"]
                  ;                            [title :label "Filtering:" :level :level3]
                  ;                            [selection-list :width dropdown-width :height "250px" :model selected-portfolios :choices portfolio-map :on-change #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios %])]]
                  ;                           (into [] (for [i (range 1 4)] [single-dropdown :width dropdown-width :model (r/cursor risk-filter [i]) :choices static/risk-choice-map :on-change #(rf/dispatch [:multiple-portfolio-risk/filter i %])]))
                  ;                           [[gap :size "50px"]
                  ;                            [checkbox :model hide-zero-risk :label "Hide zero positions in table view" :disabled? (= @display-style "Tree") :on-change #(rf/dispatch [:multiple-portfolio-risk/hide-zero-holdings %])]]))

                  ]
                 ;[h-box :gap "10px" :children [[title :label "Shortcuts:"]]]
                 [multiple-portfolio-risk-display]]]])
  )

(defn portfolio-alignment-risk-controller []
  (let [
        display-style (rf/subscribe [:portfolio-alignment/display-style])
        risk-filter (rf/subscribe [:portfolio-alignment/filter])
        portfolio-alignment-group (rf/subscribe [:portfolio-alignment/group])
        field (rf/subscribe [:portfolio-alignment/field])
        threshold (rf/subscribe [:portfolio-alignment/threshold])
        ]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Portfolio drill-down " @(rf/subscribe [:qt-date])) :level :level1]
                 [h-box :gap "10px"
                  :children (into [] (concat [
                                              [v-box :gap "15px" :children [[title :label "Display type:" :level :level3] [title :label "Field:" :level :level3] [title :label "Threshold:" :level :level3]]]
                                              [v-box :gap "10px" :children [[single-dropdown :width dropdown-width :model display-style :choices [{:id "Table" :label "Table"} {:id "Tree" :label "Tree"}] :on-change #(rf/dispatch [:portfolio-alignment/display-style %])]
                                                                            [single-dropdown :width dropdown-width :model field :choices static/field-choices-alignment :on-change #(rf/dispatch [:portfolio-alignment/field %])]
                                                                            [single-dropdown :width dropdown-width :model threshold :choices static/threshold-choices-alignment :on-change #(rf/dispatch [:portfolio-alignment/threshold %])]
                                                                            ]]
                                              [gap :size "50px"]
                                              [title :label "Filtering:" :level :level3]
                                              [single-dropdown :width dropdown-width :model portfolio-alignment-group :choices static/portfolio-alignment-groups :on-change #(rf/dispatch [:portfolio-alignment/group %])]]
                                             (into [] (for [i (range 1 4)] [single-dropdown :width dropdown-width :model (r/cursor risk-filter [i]) :choices static/risk-choice-map :on-change #(rf/dispatch [:portfolio-alignment/filter i %])]))))]
                 ;[h-box :gap "10px" :children [[title :label "Shortcuts:"]]]
                 [multiple-portfolio-alignment-risk-display]

                 ]]])
  )


(defn go-to-portfolio-risk [state rowInfo instance] (clj->js {:onClick #(do (rf/dispatch-sync [:active-home :single-portfolio]) (rf/dispatch [:single-portfolio-risk/portfolio (aget rowInfo "row" "portfolio")])) :style {:cursor "pointer"}}))


(defn summary-display []
  (let [positions @(rf/subscribe [:positions])
        portfolios @(rf/subscribe [:portfolios])
        totals @(rf/subscribe [:total-positions])
        display (into [] (for [p portfolios]
                           (merge
                             {:portfolio       p}
                             (into {} (for [k [:cash-pct :base-value :contrib-yield :contrib-zspread :contrib-gspread :contrib-mdur :qt-iam-int-lt-median-rating :qt-iam-int-lt-median-rating-score]] [k (get-in totals [(keyword p) k])]))
                             {
                              ;:cash-pct (reduce + (map :weight (filter #(and (= (:portfolio %) p) (= (:jpm-region %) "Cash")) positions)))
                              :contrib-bond-yield (- (get-in totals [(keyword p) :contrib-yield]) (reduce + (map :contrib-yield (filter #(and (= (:portfolio %) p) (not= (:asset-class %) "BONDS")) positions))))
                              })))]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Summary " @(rf/subscribe [:qt-date])) :level :level1]
    [:> ReactTable
     {:data           display
      :columns        [{:Header "Portfolio" :accessor "portfolio" :width 120}
                       {:Header "Balance" :columns (mapv tables/table-columns [:value :cash-pct])}
                       {:Header "Value" :columns [(assoc (tables/table-columns :contrib-yield) :Header "Yield")
                                                  (tables/table-columns :contrib-bond-yield)
                                                  (assoc (tables/table-columns :contrib-mdur) :Header "M Dur")
                                                  (tables/table-columns :rating)
                                                  (assoc (tables/table-columns :rating-score) :width 60  )
                                                  (assoc (tables/table-columns :contrib-zspread) :Header "Z-spread")
                                                  (assoc (tables/table-columns :contrib-gspread) :Header "G-spread")]}
                       ]
      :showPagination false
      :pageSize       (count portfolios)
      :getTrProps     go-to-portfolio-risk
      :className      "-striped -highlight"}]]]]))
