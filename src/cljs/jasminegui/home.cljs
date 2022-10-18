(ns jasminegui.home
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink alert-box md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [jasminegui.static :as static]
    [jasminegui.riskviews :as riskviews]
    [jasminegui.tradehistory :as tradehistory]
    [jasminegui.var :as var]
    [reagent-contextmenu.menu :as rcm]
    [jasminegui.guitools :as gt]
    [jasminegui.tools :as tools]
    [jasminegui.tables :as tables]
    [goog.object :as gobj]
    [oz.core :as oz]
    [jasminegui.tools :as t]
    [jasminegui.charting :as charting]
    ["react-table-v6" :as rt :default ReactTable]))


(defn conditional-color [state rowInfo column]
  (if-let [x (gobj/getValueByKeys rowInfo "row" "Nominal_Debt_%_Owned")]
    (condp >= x
           0.05   #js {:style #js {:backgroundColor "#FFFF99"}}
           0.1    #js {:style #js {:backgroundColor "#BCEC90"}}
           0.251  #js {:style #js {:backgroundColor "#FFCCCC"}}
           1      #js {:style #js {:backgroundColor "#FFC000"}}
           #js {})
    #js{}))

(defn global-debt-and-equity-levels []
  (let [data @(rf/subscribe [:global-debt-and-equity-levels])
        header-style {:overflow nil :whiteSpace "pre-line" :wordWrap "break-word"}]
    (when (zero? (count data)) (rf/dispatch [:get-global-debt-and-equity-levels]))
    [box :class "subbody rightelement" :child
    (gt/element-box
      "global-debt-levels" "1675px" "Global debt and equity levels" data
      [[:> ReactTable
        {:data                (if-not (string? data) data [])
         :columns             [{:Header "IAM Ultimate Parent Name" :accessor "IAM_Ultimate_Parent_Name" :width 200 :headerStyle header-style}
                               {:Header "IAM Risk Parent Name" :accessor "IAM_Risk_Parent_Name" :width 200 :headerStyle header-style}
                               {:Header "Obligor Name" :accessor "Obligor_Name" :width 200 :headerStyle header-style}
                               {:Header "Entity Name" :accessor "Entity_Name" :width 200 :headerStyle header-style}
                               (assoc (tables/nb-col "Nominal Debt % Owned" "Nominal_Debt_%_Owned" 75 #(tables/nb-cell-format "%.1f" 100 %)) :headerStyle header-style)
                               (assoc (tables/nb-col "Gross Nominal Debt Owned (USDm)" "Gross_Nominal_Debt_Owned_(USDm)" 100 #(tables/nb-cell-format "%.1f" 1 %)) :headerStyle header-style)
                               (assoc (tables/nb-col "Nominal Debt Issued (USDm)" "Nominal_Debt_Issued_(USDm)" 100 tables/nb-thousand-cell-format) :headerStyle header-style)
                               (assoc (tables/nb-col "IAM Risk Parent & Subsidiaries Debt Issued (USDm)" "IAM_Risk_Parent_&_Subsidiaries_Debt_Issued_(USDm)" 100 tables/nb-thousand-cell-format) :headerStyle header-style)
                               (assoc (tables/nb-col "IAM Risk Parent & Subsidiaries Total % Owned" "IAM_Risk_Parent_&_Subsidiaries_Total_%_Owned" 100 #(tables/nb-cell-format "%.1f" 100 %)) :headerStyle header-style)
                               (assoc (tables/nb-col "IAM Ultimate Parent & Subsidiaries Debt Issued (USDm)" "IAM_Ultimate_Parent_&_Subsidiaries_Debt_Issued_(USDm)" 100 tables/nb-thousand-cell-format) :headerStyle header-style)
                               (assoc (tables/nb-col "IAM Ultimate Parent & Subsidiaries Total % Owned" "IAM_Ultimate_Parent_&_Subsidiaries_Total_%_Owned" 100 #(tables/nb-cell-format "%.1f" 100 %)) :headerStyle header-style)]
         :defaultPageSize 20 :showPagination true :getTrProps conditional-color :filterable true :defaultFilterMethod tables/text-filter-OR :className "-highlight"}]])]))

(defn mod-date [date]  (str (subs date 0 4) (subs date 5 7) (subs date 8 10) ))

(defn trounce-flow-display []
  (when (zero? (count @(rf/subscribe [:trounce-flow-cash]))) (rf/dispatch [:get-trounce-flow-cash]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-duration]))) (rf/dispatch [:get-trounce-flow-duration]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-country]))) (rf/dispatch [:get-trounce-flow-country]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-country-change]))) (rf/dispatch [:get-trounce-flow-country-change]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-date]))) (rf/dispatch [:get-trounce-flow-date]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-cash-embi]))) (rf/dispatch [:get-trounce-flow-cash-embi]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-cash-embi-local]))) (rf/dispatch [:get-trounce-flow-cash-embi-local]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-duration-embi]))) (rf/dispatch [:get-trounce-flow-duration-embi]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-duration-embi-local]))) (rf/dispatch [:get-trounce-flow-duration-embi-local]))
  (let []
    [box :class "subbody rightelement" :child
     [v-box :gap "20px" :class "element" :width "1600px"
     :children [[h-box :align :center :children [[title :label (str "Trounceflow ("  @(rf/subscribe [:trounce-flow-date]) ")") :level :level1]]]
                [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-cash @(rf/subscribe [:trounce-flow-cash]) "#19A68C" "Cash allocation CEMBI" )]]]
                [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-cash @(rf/subscribe [:trounce-flow-cash-embi]) "#591739" "Cash allocation EMBI (hard)")]]]
                [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-cash @(rf/subscribe [:trounce-flow-cash-embi-local]) "#CF6F13" "Cash allocation EMBI (local)")]]]
                [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-duration @(rf/subscribe [:trounce-flow-duration]) "#19A68C" "Duration allocation (net vs CEMBI)")]]]
                [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-duration @(rf/subscribe [:trounce-flow-duration-embi]) "#591739" "Duration allocation (net vs EMBI hard)")]]]
                [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-duration @(rf/subscribe [:trounce-flow-duration-embi-local]) "#CF6F13" "Duration allocation (net vs EMBI local)")]]]
                [h-box :align :center :children
                 [[oz/vega-lite
                   {:$schema  "https://vega.github.io/schema/vega-lite/v4.json" :title {:text "Latest average positioning across countries (CEMBI)" :fontSize 20}
                    :data     {:values @(rf/subscribe [:trounce-flow-country])} :width 1300 :height 600
                    :layer [{:mark {:type "bar":color "#4C3C84"}
                             :encoding {:x       {:field "average_positioning" :type "quantitative"  :axis {:title "%" :labelFontSize 15 :titleFontSize 15}}
                                        :y       {:field "asset", :type "nominal" :axis {:title "%" :labelFontSize 15 :titleFontSize 15} :sort {:field "average_positioning" :order "descending" :op "sum"}}
                                        :tooltip [{:field "average_positioning" :type "quantitative" :title "%" } {:field "asset" :type "nominal" :title "Country" }]}
                             }]}]]]
                [h-box :align :center :children
                 [[oz/vega-lite
                   {:$schema  "https://vega.github.io/schema/vega-lite/v4.json" :title {:text "Latest average positioning change across countries (CEMBI)" :fontSize 20}
                    :data     {:values @(rf/subscribe [:trounce-flow-country-change])} :width 1300 :height 600
                    :layer [{:mark {:type "bar" :color "#4C3C84"}
                             :encoding {:x       {:field "average_positioning_change" :type "quantitative"  :axis {:title "%" :labelFontSize 15 :titleFontSize 15}}
                                        :y       {:field "asset", :type "nominal" :axis {:title "%" :labelFontSize 15 :titleFontSize 15} :sort {:field "average_positioning_change" :order "descending" :op "sum"}}
                                        :tooltip [{:field "average_positioning_change" :type "quantitative" :title "%" } {:field "asset" :type "nominal" :title "Country" }]}
                             }]}]]]
                ]
      ]]
    ))

(defn active-home []
  (let [active-home @(rf/subscribe [:navigation/active-home])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-home
      :summary                        [riskviews/summary-display]
      :single-portfolio               [riskviews/single-portfolio-risk-display]
      :all-portfolios                 [riskviews/multiple-portfolio-risk-controller]
      :portfolio-alignment            [riskviews/portfolio-alignment-risk-controller]
      :portfolio-checks               [riskviews/portfolio-checks-display]
      :concentration-risk             [riskviews/concentration-risk]
      :irrisk                         [riskviews/irrisk]
      :large-exposures                [riskviews/large-exposures]
      :var                            [var/main-var-view]
      :proxies                        [var/main-proxy-view]
      :portfolio-history              [riskviews/portfolio-history]
      :position-history               [riskviews/position-history]
      :allianz-loss-report            [riskviews/allianz-loss-report]
      :gdel                           [global-debt-and-equity-levels]
      :trounce-flow                   [trounce-flow-display]
      [:div.output "nothing to display"])))


(defn home-view []
  [h-box :gap "10px" :padding "0px"
   :children [[gt/left-nav-bar static/risk-navigation :navigation/active-home]
              [active-home]
              [tradehistory/modal-single-bond-trade-history]
              [tradehistory/modal-single-bond-flat-trade-history]
              [rcm/context-menu]]])

