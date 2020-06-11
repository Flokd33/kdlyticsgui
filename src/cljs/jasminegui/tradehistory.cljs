(ns jasminegui.tradehistory
  (:require
    ; [oz.core :as oz]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [goog.string :as gstring]
    [goog.string.format]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]
    ["react-table" :as rt :default ReactTable]


    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [jasminegui.tables :as tables])
  )



(defn subs10 [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div  (subs x 0 10)]
      "-")))

(defn nfh [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div  (tables/nf x)]
      "-")))

(defn modal-single-bond-trade-history []
  (let [
        modal-data (get-in @(rf/subscribe [:single-bond-trade-history/data]) [(keyword @(rf/subscribe [:single-portfolio-risk/portfolio]))])
        show-modal @(rf/subscribe [:single-bond-trade-history/show-modal])
        display (reverse (remove #(= (:TransactionTypeName %) "Coupon Payment") modal-data))
        ]
    (println modal-data)
    (if show-modal

      [modal-panel
       :wrap-nicely? true
       :backdrop-on-click #(do
                             (rf/dispatch [:single-bond-trade-history/data []])
                             (rf/dispatch [:single-bond-trade-history/show-modal false]))
       :child
       [v-box :gap "10px" :children [[title :label "Trades since 2019-01-01" :level :level2]
                                     [:> ReactTable
                                      {:data           display
                                       :columns        [{:Header "Date" :accessor "TradeDate" :width 100 :Cell subs10}
                                                        {:Header "Type" :accessor "TransactionTypeName" :width 100}
                                                        {:Header "Notional" :accessor "Quantity" :width 100 :style {:textAlign "right"} :Cell nfh}
                                                        {:Header "Price" :accessor "PriceLcl" :width 100 :style {:textAlign "right"} :Cell tables/round2}
                                                        {:Header "Counterparty" :accessor "counterparty_code" :width 100}
                                                        ]
                                       :showPagination false
                                       :pageSize       (count display)
                                       :className      "-striped -highlight"}]]]

       ])))

