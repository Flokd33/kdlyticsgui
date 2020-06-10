(ns jasminegui.attribution
  (:require
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







(defn strategy-pop-up [this]
  (r/as-element [:div [:span {:title (aget this "row" "strategy")} (aget this "row" "strategy-shortcut")]]))

(defn last-price-props [this]
  (if-not (nil? this)
    (let [status (aget this "row" "status")
          prefix (if (= status "CLOSED") "(c) " "")]
      (r/as-element (str prefix (gstring/format "%.2f" (aget this "value")))))
    (clj->js {:style nil})))


(def dropdown-width "150px")

(defn single-portfolio-attribution-display []
  (let [
        is-tree (= @(rf/subscribe [:single-portfolio-attribution/display-style]) "Tree")
        risk-choices (let [rfil @(rf/subscribe [:single-portfolio-attribution/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :security))] (tables/attribution-table-columns r)))
        additional-des-cols (remove (set (conj risk-choices "None")) (map :id static/attribution-choice-map))
        accessors (mapv :accessor grouping-columns)
        display  @(rf/subscribe [:single-portfolio-attribution/clean-table])]
    ;(println additional-des-cols)
    [:> ReactTable
     {:data                display
      :defaultFilterMethod tables/case-insensitive-filter
      :columns [
                {:Header "Groups" :columns grouping-columns}
                {:Header "Effect" :columns (mapv tables/attribution-table-columns [:total-effect])}
                {:Header "Contribution" :columns (mapv tables/attribution-table-columns [:contribution :bm-contribution])}
                {:Header "Weight" :columns (mapv tables/attribution-table-columns [:xs-weight :weight :bm-weight])}
                {:Header "Additional information" :columns (mapv tables/attribution-table-columns (concat additional-des-cols [:code :rating]))}
                            ]
      :showPagination      (not is-tree)
      :sortable            (not is-tree)
      :filterable          (not is-tree)
      :pageSize            (if is-tree (inc (count (distinct (map (keyword (first accessors)) display)))) 25) ;(inc (count display))
      :className           "-striped -highlight"
      :pivotBy             (if is-tree accessors [])
      :defaultFiltered     (if is-tree [] @(rf/subscribe [:single-portfolio-attribution/table-filter]))
      :onFilteredChange    #(rf/dispatch [:single-portfolio-attribution/table-filter %])
      ;
      }]

    ))


(defn multiple-portfolio-attribution-display []
  (let [display-key-one @(rf/subscribe [:multiple-portfolio-attribution/field-one])
        width-one 100                                      ;(get-in tables/table-columns [display-key-one :width])
        is-tree (= @(rf/subscribe [:multiple-portfolio-attribution/display-style]) "Tree")
        attribution-choices (let [rfil @(rf/subscribe [:multiple-portfolio-attribution/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj attribution-choices :security))] (tables/attribution-table-columns r)))
        accessors (mapv :accessor grouping-columns)
        display-one @(rf/subscribe [:multiple-portfolio-attribution/clean-table])
        cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (some #{p} @(rf/subscribe [:multiple-portfolio-attribution/selected-portfolios]))]
                        {:Header p
                         :accessor p
                         :width width-one
                         :style {:textAlign "right"}
                         :aggregate tables/sum-rows
                         :Cell (get-in tables/attribution-table-columns [display-key-one :Cell])
                         :filterable false}))]
    ;(println (nth display-one 800))
    [:> ReactTable
     {:data                display-one
      :defaultFilterMethod tables/case-insensitive-filter
      :columns             [{:Header "Groups" :columns grouping-columns}
                            {:Header (str "Portfolio " (name display-key-one)) :columns cols}
                            {:Header "Description" :columns (mapv tables/attribution-table-columns [:code :rating])}
                            ]
      :showPagination      (not is-tree)
      :sortable            (not is-tree)
      :filterable          (not is-tree)
      :pageSize            (if is-tree (inc (count (distinct (map (keyword (first accessors)) display-one)))) 25)
      :className           "-striped -highlight"
      :pivotBy             (if is-tree accessors [])
      :defaultFiltered     (if is-tree [] @(rf/subscribe [:multiple-portfolio-attribution/table-filter])) ; [{:id "analyst" :value "Tammy"}]
      :onFilteredChange    #(rf/dispatch [:multiple-portfolio-attribution/table-filter %])}]

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
                :choices static/attribution-choice-map
                :on-change #(rf/dispatch [key i %])]))))

(defn csv-link [data filename]
  (tools/download-object-as-csv (clj->js (tools/vector-of-maps->csv data)) (str filename ".csv")))

(defn single-portfolio-attribution-controller []
  (let [portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:single-portfolio-attribution/display-style])
        portfolio (rf/subscribe [:single-portfolio-attribution/portfolio])
        period (rf/subscribe [:single-portfolio-attribution/period])]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Attribution drill-down " @(rf/subscribe [:attribution-date])) :level :level1]
                 [h-box :gap "50px"
                  :children [
                             [v-box :gap "15px"
                              :children [
                                         [h-box
                                          :gap "10px"
                                          :children [
                                                     [title :label "Display type:" :level :level3]
                                                     [gap :size "1"]
                                                     [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(rf/dispatch [:single-portfolio-attribution/display-style %])]]]
                                         [h-box
                                          :gap "10px"
                                          :children [
                                                     [title :label "Period:" :level :level3]
                                                     [gap :size "1"]
                                                     [single-dropdown :width dropdown-width :model period :choices static/attribution-period-choices :on-change #(rf/dispatch [:change-single-attribution-period %])]]]
                                         ]]
                             [v-box :gap "10px" :children [
                                                           [h-box :gap "10px" :children
                                                            (into [] (concat [[title :label "Filtering:" :level :level3]
                                                                              [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:change-single-attribution-portfolio %])]]
                                                                             (filtering-row :single-portfolio-attribution/filter)))]
                                                           [h-box :gap "20px" :children (into [] (concat
                                                                                                   (shortcut-row :single-portfolio-attribution/shortcut)
                                                                                                   [[gap :size "50px"]
                                                                                                    [title :label "Download:" :level :level3]
                                                                                                    [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(csv-link @(rf/subscribe [:single-portfolio-attribution/table]) @portfolio)]]))]]]]]
                 [single-portfolio-attribution-display]]]]))


;(defn csv-link-multiple-portfolio []
;  (tools/download-object-as-csv
;    (clj->js (tools/vector-of-maps->csv @(rf/subscribe [:multiple-portfolio-risk/table])))
;    "pivot.csv"))

(defn multiple-portfolio-attribution-controller []
  (let [portfolio-map (into [] (for [p  @(rf/subscribe [:portfolios])] {:id p :label p}))
        display-style (rf/subscribe [:multiple-portfolio-attribution/display-style])
        portfolios @(rf/subscribe [:portfolios])
        selected-portfolios (rf/subscribe [:multiple-portfolio-attribution/selected-portfolios])
        field-one (rf/subscribe [:multiple-portfolio-attribution/field-one])
        period (rf/subscribe [:multiple-portfolio-attribution/period])]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label (str "Attribution drill-down " @(rf/subscribe [:attribution-date])) :level :level1]
                 [h-box :gap "50px"
                  :children
                  [
                   [v-box :gap "20px"
                    :children [
                               [h-box :gap "10px" :children [[title :label "Display type:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model display-style :choices static/tree-table-choices :on-change #(rf/dispatch [:multiple-portfolio-attribution/display-style %])]]]
                               [h-box :gap "10px" :children [[title :label "Period:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model period :choices static/attribution-period-choices :on-change #(rf/dispatch [:change-multiple-attribution-period %])]]]
                               [h-box :gap "10px" :children [[title :label "Field:" :level :level3] [gap :size "1"] [single-dropdown :width dropdown-width :model field-one :choices static/attribution-field-choices :on-change #(rf/dispatch [:change-multiple-attribution-target %])]]]]]
                   [v-box :gap "10px"
                    :children [[title :label "Portfolios:" :level :level3]
                               [button :style {:width "100%"} :label "All"      :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios (set portfolios)])]
                               [button :style {:width "100%"} :label "None"     :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios #{}])]
                               [button :style {:width "100%"} :label "CEMBI"    :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :cembi)) static/portfolio-alignment-groups))))])]
                               [button :style {:width "100%"} :label "Allianz"  :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :allianz)) static/portfolio-alignment-groups))))])]
                               [button :style {:width "100%"} :label "IG"       :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :ig)) static/portfolio-alignment-groups))))])]
                               [button :style {:width "100%"} :label "Talanx"   :on-click #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :talanx)) static/portfolio-alignment-groups))))])]]]
                   [selection-list :width dropdown-width :model selected-portfolios :choices portfolio-map :on-change #(rf/dispatch [:multiple-portfolio-attribution/selected-portfolios %])]
                   [v-box :gap "20px"
                    :children [[h-box :gap "10px" :children (into [] (concat [[title :label "Filtering:" :level :level3]] (filtering-row :multiple-portfolio-attribution/filter)))]
                               [h-box :gap "10px" :children (shortcut-row :multiple-portfolio-attribution/shortcut)]
                               [h-box :gap "10px" :children [ [title :label "Download:" :level :level3]
                                                             [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(csv-link @(rf/subscribe [:multiple-portfolio-attribution/table]) "pivot")]]]]]]]
                 [multiple-portfolio-attribution-display]
                 ]]]
    ))




(defn go-to-attribution-risk [state rowInfo instance] (clj->js {:onClick #(do (rf/dispatch-sync [:active-attribution :single-portfolio]) (rf/dispatch [:change-single-attribution-portfolio (aget rowInfo "row" "portfolio")])) :style {:cursor "pointer"}}))

(defn summary-display []
  (let [fmt {:width 90 :style {:textAlign "right"} :Cell tables/round2colpct}
        timeframes [["Year to date" "ytd"] ["Month to date" "mtd"] ["Week to date" "wtd"] ["Daily" "day"]]
        targets [["Fund" "-Fund-Contribution"] ["Benchmark" "-Index-Contribution"] ["Relative" "-Total-Effect"]]]
  [box :class "subbody rightelement" :child
   [v-box :class "element" :gap "20px"
    :children [[title :label (str "Summary " @(rf/subscribe [:attribution-date])) :level :level1]
               [:> ReactTable
                {:data           @(rf/subscribe [:attribution/summary])
                 :columns        (into [{:Header "Portfolio" :accessor "portfolio" :width 120}]
                                       (for [[k1 v1] timeframes]
                                         {:Header k1
                                          :columns (into [] (for [[k2 v2] targets]
                                                              (merge {:Header k2
                                                                      :accessor (str v1 v2)}
                                                                     fmt)))}))
                 :showPagination false
                 :pageSize       (count @(rf/subscribe [:attribution/summary]))
                 :getTrProps     go-to-attribution-risk
                 :className      "-striped -highlight"}]]]]))


(defn nav-attribution-bar []
  (let [active-home @(rf/subscribe [:active-attribution])]
    [h-box
     ;:align :start
     :children [
                [v-box
                 :gap "20px"
                 :class "leftnavbar"
                 :children (into []
                                 (for [item static/attribution-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-home (:code item))) " active"))
                                    ;:style {:font-size "12px"}
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:active-attribution (:code item)])]))]
                ;[line :color "#CA3E47" :class "separatorvline"]
                ]]))

(defn active-home []
  (.scrollTo js/window 0 0)                             ;on view change we go back to top
  (case @(rf/subscribe [:active-attribution])
    :summary                        [summary-display]
    :single-portfolio               [single-portfolio-attribution-controller]
    :all-portfolios                 [multiple-portfolio-attribution-controller]
    [:div.output "nothing to display"]))


(defn home-view []
  [h-box :gap "10px"
   ;:style {:overflow "hidden"}
   :padding "0px"
   :children [[nav-attribution-bar] [active-home]]])

