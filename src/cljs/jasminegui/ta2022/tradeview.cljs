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
    [jasminegui.tools :as t]
    [oz.core :as oz])

  )

(defn trade-static-and-pricing
  [isin]
  )

(defn historical-chart
  [isin]
  )

(defn positions-and-performance-table
  [isin]
  {:Header "Trade" :columns
   [{:accessor "portfolio"}
    {:accessor "nav"}
    {:accessor "notional"}
    {:accessor "avg-entry-price"}
    {:accessor "avg-entry-date"}
    {:accessor "TR"}]}
  {:Header "YTD performance" :columns
   [{:accessor "rawytd"}
    {:accessor "indexytd"}
    {:accessor "ighyytd"}
    {:accessor "cntryytd"}
    {:accessor "sectorytd"}]}
  {:Header "LTD performance" :columns
   [{:accessor "rawltd"}
    {:accessor "indexltd"}
    {:accessor "ighyltd"}
    {:accessor "cntryltd"}
    {:accessor "sectorltd"}]}
  )

(defn current-target-and-trigger
  [isin]
  )

(defn attachments
  [isin]
  )

(defn trade-rationale-history
  [isin]
  )


(defn trade-view
  [isin]
  [v-box :width "1024px" :padding "80px 20px" :class "subbody"
   :children [[trade-static-and-pricing isin]
              [historical-chart isin]
              [positions-and-performance-table isin]
              [current-target-and-trigger isin]
              [attachments isin]
              [trade-rationale-history isin]
              ]

   ]

  )