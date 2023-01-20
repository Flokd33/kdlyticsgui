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
    [reagent.core :as r]
    [reagent-contextmenu.menu :as rcm]
    [jasminegui.guitools :as gt]
    [jasminegui.tools :as tools]
    [jasminegui.tables :as tables]
    [goog.object :as gobj]
    [oz.core :as oz]
    [jasminegui.tools :as t]
    [jasminegui.charting :as charting]
    [jasminegui.stresstest :as stresstest]
    ["react-table-v6" :as rt :default ReactTable]))


;(defn mod-date [date]  (str (subs date 0 4) (subs date 5 7) (subs date 8 10) ))


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
      :irrisk                         [riskviews/ir-risk-single-portfolio]
      :irrisk-multiple                [riskviews/ir-risk-multiple-portfolio]
      :large-exposures                [riskviews/large-exposures]
      :var                            [var/main-var-view]
      :stresstest                     [stresstest/view]
      :proxies                        [var/main-proxy-view]
      :portfolio-history              [riskviews/portfolio-history]
      :position-history               [riskviews/position-history]
      ;:allianz-loss-report            [riskviews/allianz-loss-report]


      [:div.output "nothing to display"])))


(defn home-view []
  [h-box :gap "10px" :padding "0px"
   :children [[gt/left-nav-bar static/risk-navigation :navigation/active-home]
              [active-home]
              [tradehistory/modal-single-bond-trade-history]
              [tradehistory/modal-single-bond-flat-trade-history]
              [rcm/context-menu]]])

