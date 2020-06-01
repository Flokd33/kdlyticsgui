(ns jasminegui.tradehistory
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
    [jasminegui.static :as static]))


;THIS WILL BE A QT CALL DIRECT
(rf/reg-event-fx
  :get-trade-history
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str mount/server-address "var-proxies") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:var/proxies]
                         :kwk          false}}))
