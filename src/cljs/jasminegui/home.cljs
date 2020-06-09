(ns jasminegui.home
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]
    [jasminegui.riskviews :as riskviews])
  )


(defn nav-home-bar []
  (let [active-home @(rf/subscribe [:active-home])]
    (println active-home)
    [h-box
     ;:align :start
     :children [
                [v-box
                 :gap "20px"
                 :class "leftnavbar"
                 :children (into []
                                 (for [item static/risk-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-home (:code item))) " active"))
                                    ;:style {:font-size "12px"}
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:active-home (:code item)])]))]
                ;[line :color "#CA3E47" :class "separatorvline"]
                ]]))

(defn active-home []
  (let [active-home @(rf/subscribe [:active-home])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-home
      :summary                        [riskviews/summary-display]
      :single-portfolio               [riskviews/single-portfolio-risk-controller]
      :all-portfolios                 [riskviews/multiple-portfolio-risk-controller]
      :portfolio-alignment            [riskviews/portfolio-alignment-risk-controller]
      [:div.output "nothing to display"])))


(defn home-view []
  [h-box :gap "10px"
   ;:style {:overflow "hidden"}
   :padding "0px"
   :children [[nav-home-bar] [active-home]]])

