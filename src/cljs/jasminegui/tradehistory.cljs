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
    [jasminegui.tables :as tables]
    [jasminegui.tools :as tools])
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
      "")))

(rf/reg-event-db
  :single-bond-trade-history/close-modal
  (fn [db [_]]
    (assoc db :single-bond-trade-history/bond nil
              :single-bond-trade-history/data []
              :single-bond-trade-history/flat-data []
              :single-bond-trade-history/show-modal false
              :single-bond-trade-history/show-flat-modal false)))


(defn modal-single-bond-trade-history []
  (let [
        modal-data (get-in @(rf/subscribe [:single-bond-trade-history/data]) [(keyword @(rf/subscribe [:single-portfolio-risk/portfolio]))])
        show-modal @(rf/subscribe [:single-bond-trade-history/show-modal])
        display (reverse (remove #(= (:TransactionTypeName %) "Coupon Payment") modal-data))]
    ;(println modal-data)
    (if show-modal

      [modal-panel
       :wrap-nicely? true
       :backdrop-on-click #(rf/dispatch [:single-bond-trade-history/close-modal])
       :child
       [v-box :gap "10px"
        :children [
                   [h-box :gap "20px" :align :center
                    :children [
                               [title :label (str @(rf/subscribe [:single-bond-trade-history/bond]) " trades since 2019-01-01") :level :level2]
                               [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link display "trade-history")]]]
                   (if @(rf/subscribe [:single-bond-trade-history/show-throbber])
                     [box :align :center :child [throbber :size :large]]
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
                                         :className      "-striped -highlight"}])]]])))

;(tools/download-object-as-csv (clj->js (tools/vector-of-maps->csv data)) (str filename ".csv"))
;[title :label "Download:" :level :level3]
;[md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(csv-link @(rf/subscribe [:single-portfolio-risk/table]) @portfolio)]]))]]]]]

(defn modal-single-bond-flat-trade-history []
  (let [
        modal-data @(rf/subscribe [:single-bond-trade-history/flat-data])
        show-modal @(rf/subscribe [:single-bond-trade-history/show-flat-modal])
        display (reverse (sort-by :date (remove #(some #{(:trade %)} ["Coupon Payment" "Scrip Transfer"]) modal-data)))]
    (println modal-data)
    (if show-modal

      [modal-panel
       :wrap-nicely? true
       :backdrop-on-click #(rf/dispatch [:single-bond-trade-history/close-modal])
       :child
       [v-box :gap "20px"
        :children [[h-box :gap "20px" :align :center
                    :children [[title :label (str @(rf/subscribe [:single-bond-trade-history/bond]) " trades since 2019-01-01") :level :level2]
                               [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link display "trade-history")]]]
                               (if @(rf/subscribe [:single-bond-trade-history/show-throbber])
                                 [box :align :center :child [throbber :size :large]]
                                 [:> ReactTable
                                  {:data           display
                                   :columns        [{:Header "Date" :accessor "date" :width 100}
                                                    {:Header "Type" :accessor "trade" :width 75}
                                                    {:Header "Price" :accessor "price" :width 70 :style {:textAlign "right"} :Cell tables/round2}
                                                    {:Header "Portfolio" :columns (into []
                                                                                        (for [p @(rf/subscribe [:portfolios])]
                                                                                          {:Header p :accessor p :width 90 :style {:textAlign "right"} :Cell nfh}))}
                                                    ]
                                   :showPagination false
                                   :pageSize       (count display)
                                   :className      "-striped -highlight"}])]]])))