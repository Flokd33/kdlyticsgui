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
    ["react-table-v6" :as rt :default ReactTable]))


;(defn nav-home-bar []
;  [v-box
;   :gap "20px"
;   :class "leftnavbar"
;   :children (into []
;                   (for [item static/risk-navigation]
;                     [button
;                      :class (str "btn btn-primary btn-block" (if (and (= @(rf/subscribe [:navigation/active-home]) (:code item))) " active"))
;                      :label (:name item)
;                      :on-click #(rf/dispatch [:navigation/active-home (:code item)])]))])

(defn conditional-color [state rowInfo column]
  (if-let [x (gobj/getValueByKeys rowInfo "row" "Nominal_Debt_%_Owned")]
    (condp > x
           0.05 #js {:style #js {:backgroundColor "#FFFF99"}}
           0.1 #js {:style #js {:backgroundColor "#BCEC90"}}
           0.251 #js {:style #js {:backgroundColor "#FFCCCC"}}
           1 #js {:style #js {:backgroundColor "#FFC000"}}
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
      :position-history               [riskviews/position-history]
      :position-history-isin          [riskviews/position-history-2]
      :allianz-loss-report            [riskviews/allianz-loss-report]
      :gdel                           [global-debt-and-equity-levels]
      [:div.output "nothing to display"])))


(defn home-view []
  [h-box :gap "10px" :padding "0px"
   :children [[gt/left-nav-bar static/risk-navigation :navigation/active-home]
              [active-home]
              [tradehistory/modal-single-bond-trade-history]
              [tradehistory/modal-single-bond-flat-trade-history]
              [rcm/context-menu]]])

