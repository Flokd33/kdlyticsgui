(ns jasminegui.home
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink alert-box
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [jasminegui.static :as static]
    [jasminegui.riskviews :as riskviews]
    [jasminegui.tradehistory :as tradehistory]
    [jasminegui.var :as var]
    [reagent-contextmenu.menu :as rcm]
    [jasminegui.guitools :as gt]))


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
      :allianz-loss-report            [riskviews/allianz-loss-report]
      :position-history-sec           [riskviews/position-history-isin]
      [:div.output "nothing to display"])))


(defn home-view []
  [h-box :gap "10px" :padding "0px"
   :children [[gt/left-nav-bar static/risk-navigation :navigation/active-home]
              [active-home]
              [tradehistory/modal-single-bond-trade-history]
              [tradehistory/modal-single-bond-flat-trade-history]
              [rcm/context-menu]]])

