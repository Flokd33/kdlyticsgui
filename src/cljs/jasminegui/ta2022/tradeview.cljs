(ns jasminegui.ta2022.tradeview
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink alert-box md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.charting :as charting]
    [jasminegui.guitools :as gt]
    [jasminegui.qs.qstables :as qstables]
    [jasminegui.tools :as t]
    [oz.core :as oz])

  )

(def element-box-width "1280px")

(defn trade-static-and-pricing
  [isin]
  (gt/element-box-generic "trade-static" element-box-width "Bond data" nil
                          [[:> ReactTable
                            {:data           (t/chainfilter {:ISIN "USU1065PAA94"} @(rf/subscribe [:quant-model/model-output]))
                             :columns (qstables/table-style->qs-table-col "TA2022" nil)
                             :showPagination false
                             :pageSize 1
                             :filterable     false}]])

  )

(defn historical-chart
  [isin]
  (gt/element-box-generic "history-chart" element-box-width "Trade history" nil [])
  )

(defn positions-and-performance-table
  [isin]
  (gt/element-box-generic "position-table" element-box-width "Positions and performance" nil [])
  ;{:Header "Trade" :columns
  ; [{:accessor "portfolio"}
  ;  {:accessor "nav"}
  ;  {:accessor "notional"}
  ;  {:accessor "avg-entry-price"}
  ;  {:accessor "avg-entry-date"}
  ;  {:accessor "TR"}]}
  ;{:Header "YTD performance" :columns
  ; [{:accessor "rawytd"}
  ;  {:accessor "indexytd"}
  ;  {:accessor "ighyytd"}
  ;  {:accessor "cntryytd"}
  ;  {:accessor "sectorytd"}]}
  ;{:Header "LTD performance" :columns
  ; [{:accessor "rawltd"}
  ;  {:accessor "indexltd"}
  ;  {:accessor "ighyltd"}
  ;  {:accessor "cntryltd"}
  ;  {:accessor "sectorltd"}]}
  )

(defn current-targets-and-triggers
  [isin]
  (gt/element-box-generic "current-target" element-box-width "Current targets and triggers" nil [])
  )

(defn attachments
  [isin]
  (gt/element-box-generic "attachments" element-box-width "Attachments" nil [])
  ;[h-box :width dw :gap "10px" :children [[box :size "1" :child [label :label "Attachments"]] [box :size "3" :child [v-box :children (let [c (into [] (for [k @(rf/subscribe [:active-trade-attachments])] [hyperlink-href :href (str static/cms-address (:tradeanalyser.trade/ISIN trade) "/" k) :label k :target "_blank"]))] (if (pos? (count c)) c [[p "No attachments"]]))]]]]
  )

(defn trade-rationale-history
  [isin]
  )


(defn trade-view
  [isin]
  [v-box :gap "10px" :padding "80px 20px" :class "subbody"
   :children [[trade-static-and-pricing isin]
              [historical-chart isin]
              [positions-and-performance-table isin]
              [current-targets-and-triggers isin]
              [attachments isin]
              [trade-rationale-history isin]
              ]

   ]

  )