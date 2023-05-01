(ns kdlyticsgui.home
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink alert-box md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [kdlyticsgui.static :as static]
    [reagent.core :as r]
    [reagent-contextmenu.menu :as rcm]
    [kdlyticsgui.guitools :as gt]

    [oz.core :as oz]
    ;["react-table-v6" :as rt :default ReactTable]
    ))


;(defn mod-date [date]  (str (subs date 0 4) (subs date 5 7) (subs date 8 10) ))


(defn active-home []
  (let [active-home @(rf/subscribe [:navigation/active-home])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-home
      :summary                        []
      ;:single-portfolio               [riskviews/single-portfolio-risk-display]

      [:div.output "nothing to display"])))


(defn home-view []
  [h-box :gap "10px" :padding "0px"
   :children [[gt/left-nav-bar static/risk-navigation :navigation/active-home]
              [active-home]
              ;[tradehistory/modal-single-bond-flat-trade-history]
              [rcm/context-menu]]])

