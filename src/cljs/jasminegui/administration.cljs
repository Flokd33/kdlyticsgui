(ns jasminegui.administration
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

    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]])
  )

(rf/reg-event-fx
  :rebuild
  (fn [{:keys [db]} [_]]
    {:db (assoc db :success-modal {:show true :on-close :close-rebuild :response nil})
     :http-post-dispatch {:url          (str mount/server-address "rebuild")
                          :edn-params   {}
                          :dispatch-key [:has-rebuilt]
                          :kwk          true}}))

(rf/reg-event-db
  :has-rebuilt
  (fn [db [_ data]]
    (rf/dispatch [:get-portfolios])
    (rf/dispatch [:get-positions])
    (rf/dispatch [:get-pivoted-positions])
    (rf/dispatch [:get-total-positions])
    (rf/dispatch [:get-rating-to-score])
    (rf/dispatch [:get-qt-date])
    (rf/dispatch [:get-var-proxies])
    (rf/dispatch [:get-var-dates])
    (rf/dispatch [:get-portfolio-var "OGEMCORD"])
    (assoc-in db [:success-modal :response] (:text-response data))))

(rf/reg-event-db
  :close-rebuild
  (fn [db [_]]
    (assoc db :success-modal {:show false :on-close nil :response nil})))

(defn modal-success []
  (let [modal-data @(rf/subscribe [:success-modal])]
    (if (:show modal-data)
      [modal-panel
       :wrap-nicely? false
       :backdrop-on-click #(rf/dispatch [(:on-close modal-data)])
       :child [alert-box
               :padding "15px"
               :style {:width "450px"}
               :heading (if-let [x (:response modal-data)] x [box :align :center :child [throbber :size :large]])
               :closeable? true
               :on-close #(rf/dispatch [(:on-close modal-data)])]])))


(defn debug-operations []
   [v-box
    :gap "10px"
    :width "400px"
    :class "subbody element"
    :children [[title :label "Debug operations" :level :level1]
               [h-box  :gap "10px" :align :center
                :children [[box  :size "1" :child [label :label "Rebuild positions and VaR:"]]
                           [box  :size "1" :child [button :style {:width "100%"} :label "Do it!" :on-click #(rf/dispatch [:rebuild])]]]]
               ]]
  )

(defn administration-view []
  [v-box                                                  ;:gap "10px"
   :gap "10px"
   :padding "80px 25px"
   :children [[modal-success] [debug-operations]]]
  )
