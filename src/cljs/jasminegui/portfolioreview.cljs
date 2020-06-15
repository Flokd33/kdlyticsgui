(ns jasminegui.portfolioreview

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



;{
; "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
;          "data": {"values": [
;                              {"country": "Argentina", "period": "ytd", "performance": 3.0},
;                              {"country": "Argentina", "period": "mtd", "performance": 5.0},
;                              {"country": "Brazil", "period": "ytd", "performance": -2.0},
;                              {"country": "Brazil", "period": "mtd", "performance":  1.0}]},
; "transform": [
;               {"filter": "datum.performance >= -50"},
;               {"calculate": "datum.period == 2 ? 'Female' : 'Male'", "as": "gender"}
;               ],
; "width": {"step": 12},
; "mark": "bar",
; "encoding": {
;              "row": {"field": "country", "type": "ordinal", "spacing": 10},
;                   "x": {
;                         "aggregate": "sum",
;                                    "field": "performance",
;                         "type": "quantitative",
;                                    "axis": {"title": "Performance",
;                                                    "gridColor": {"condition": {"test": "datum.value === 0", "value": "black"}}}
;                         },
;              "y": {"field": "period", "type": "nominal", "axis": {"title": ""}},
;                   "color": {
;                             "field": "period",
;                                    "type": "nominal",
;                             "scale": {"range": ["#675193", "#ca8861"]}
;                             }
;              },
; "config": {"view": {"stroke": "transparent"}, "axis": {"domainWidth": 1}}
; }




(defn portfolio-vs-index-horizontal-bars [title data width height]
  {:$schema
          "https://vega.github.io/schema/vega-lite/v4.json",
   :data
          {:values
           [{:country "Argentina",
             :period "ytd",
             :performance 3}
            {:country "Argentina",
             :period "mtd",
             :performance 5}
            {:country "Brazil",
             :period "ytd",
             :performance -2}
            {:country "Brazil",
             :period "mtd",
             :performance 1}]},
   :transform
          [{:filter "datum.performance >= -50"}
           {:calculate "datum.period == 2 ? 'Female' : 'Male'", :as "gender"}],
   :width {:step 12},
   :mark "bar",
   :encoding
          {:row
           {:field "country",
            :type "ordinal",
            :spacing 10},
           :x
           {:aggregate "sum", :field "performance", :type "quantitative",
            :axis {:title "Performance", :gridColor {:condition {:test "datum.value === 0", :value "black"}}}},
           :y
           {:field "period",
            :type "nominal",
            :axis {:title ""}},
           :color
           {:field "period",
            :type "nominal",
            :scale {:range ["#675193" "#ca8861"]}}},
   :config
          {:view {:stroke "transparent"},
           :axis {:domainWidth 1}}}
  )

(def portfolio-review-navigation
  [{:code :summary             :name "Summary"}
   {:code :performance         :name "Contribution"}
   {:code :alpha               :name "Alpha"}
   {:code :top-contributors    :name "Top contributors"}
   {:code :jensen              :name "Jensen"}
   {:code :risk                :name "Risk"}])

(def standard-box-width "800px")

(defn summary-text []
  (let [portfolio @(rf/subscribe [:portfolio-review/portfolio])
        data @(rf/subscribe [:portfolio-review/summary-data])
        f tables/zspread-format
        g tables/round1]
    [box :class "subbody rightelement"
     :child
     [v-box :gap "10px" :class "element"
      :children

      [[title :label "Summary" :level :level1]
       [p (str "MTD, " portfolio " returned " (f (get-in data [:mtd :portfolio])) " vs " (f (get-in data [:mtd :index])) " for the index, " (f (get-in data [:mtd :alpha])) " of alpha.")]
       [p (str "YTD, " portfolio " returned " (f (get-in data [:ytd :portfolio])) " vs " (f (get-in data [:ytd :index])) " for the index, " (f (get-in data [:ytd :alpha])) " of alpha.")]
       [p (str "We currently run a beta of "
               (get-in data [:beta :total]) "x with top contributors being "
               (get-in data [:beta :country-1]) " (" (g (get-in data [:beta :value-1])) "x), "
               (get-in data [:beta :country-2]) " (" (g (get-in data [:beta :value-2])) "x), "
               (get-in data [:beta :country-3]) " (" (g (get-in data [:beta :value-3])) "x).")]]]]))

(defn active-home []
  (let [active-tab @(rf/subscribe [:portfolio-review/active-tab])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-tab
      :summary                       [summary-text]
      :performance [:div.output "nothing to display"]
      :alpha [:div.output "nothing to display"]
      :top-contributors [:div.output "nothing to display"]
      :jensen [:div.output "nothing to display"]
      :risk [:div.output "nothing to display"]
      [:div.output "nothing to display"])))


(defn nav []
  (let [active-tab @(rf/subscribe [:portfolio-review/active-tab])]
    [h-box
     :children [
                [v-box
                 :gap "20px"
                 :class "leftnavbar"
                 :children (into []
                                 (for [item static/portfolio-review-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-tab (:code item))) " active"))
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:portfolio-review/active-tab (:code item)])]))]
                ]]))

(defn view []
  [h-box :gap "10px"
   ;:style {:overflow "hidden"}
   :padding "0px"
   :children [[nav] [active-home]]])
