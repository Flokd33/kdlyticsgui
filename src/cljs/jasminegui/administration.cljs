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

    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [jasminegui.tools :as tools]
    [cljs-time.core :refer [today]])
  )

(rf/reg-event-fx
  :refresh-bloomberg-session
  (fn [{:keys [db]} [_]]
    {:db (assoc db :navigation/success-modal {:show true :on-close :close-bloomberg-session-refreshed :response nil})
     :http-post-dispatch {:url (str static/server-address "refresh-bloomberg-session") :edn-params {} :dispatch-key [:bloomberg-session-refreshed]}}))

(rf/reg-event-db :bloomberg-session-refreshed (fn [db [_ data]] (assoc-in db [:navigation/success-modal :response] (:text-response data))))
(rf/reg-event-db :close-bloomberg-session-refreshed (fn [db [_]] (assoc db :navigation/success-modal {:show false :on-close nil :response nil})))



(rf/reg-event-fx
  :rebuild
  (fn [{:keys [db]} [_]]
    {:db (assoc db :navigation/success-modal {:show true :on-close :close-rebuild :response nil})
     :http-post-dispatch {:url          (str static/server-address "rebuild")
                          :edn-params   {}
                          :dispatch-key [:has-rebuilt]
                          }}))

(rf/reg-event-fx
  :rebuild-pos
  (fn [{:keys [db]} [_]]
    {:db (assoc db :navigation/success-modal {:show true :on-close :close-rebuild :response nil})
     :http-post-dispatch {:url          (str static/server-address "rebuild-pos")
                          :edn-params   {}
                          :dispatch-key [:has-rebuilt-pos]
                          }}))

(rf/reg-event-db
  :has-rebuilt
  (fn [db [_ data]]
    (rf/dispatch [:get-portfolios])
    (rf/dispatch [:get-positions])
    ;(rf/dispatch [:get-pivoted-positions])
    (rf/dispatch [:get-total-positions])
    (rf/dispatch [:get-rating-to-score])
    (rf/dispatch [:get-qt-date])
    (rf/dispatch [:get-var-proxies])
    (rf/dispatch [:get-var-dates])
    (rf/dispatch [:get-portfolio-var "OGEMCORD"])
    (assoc-in db [:navigation/success-modal :response] (:text-response data))))

(rf/reg-event-db
  :has-rebuilt-pos
  (fn [db [_ data]]
    (rf/dispatch [:get-portfolios])
    (rf/dispatch [:get-positions])
    ;(rf/dispatch [:get-pivoted-positions])
    (rf/dispatch [:get-total-positions])
    (rf/dispatch [:get-rating-to-score])
    (rf/dispatch [:get-qt-date])
    (assoc-in db [:navigation/success-modal :response] (:text-response data))))

(rf/reg-event-db
  :close-rebuild
  (fn [db [_]]
    (assoc db :navigation/success-modal {:show false :on-close nil :response nil})))

(defn modal-success []
  (let [modal-data @(rf/subscribe [:navigation/success-modal])]
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
              [button :style {:width "100%"} :label "Rebuild positions and VaR!" :on-click #(rf/dispatch [:rebuild])]
              [button :style {:width "100%"} :label "Rebuild positions and integrity report!" :on-click #(rf/dispatch [:rebuild-pos])]
              [button :style {:width "100%"} :label "Refresh Bloomberg session!" :on-click #(rf/dispatch [:refresh-bloomberg-session])]]])


;(rf/reg-event-db
;  :rebuild-time-machine
;  (fn [db [_ enabled date]]
;    (assoc mount/default-db :time-machine/enabled enabled :time-machine/date date)))
;
;(rf/reg-event-db
;  :time-machine-status
;  (fn [db [_ m]]
;    ;(println m)
;    ;(println (= (:enabled m) true))
;    (assoc db :time-machine/enabled (:enabled m) :time-machine/date (tools/int-to-gdate (:date m)))))
;
;(rf/reg-event-fx
;  :rebuild-time-machine
;  (fn [{:keys [db]} [_ enabled date model]]
;    {:db                 (assoc mount/default-db
;                           :time-machine/enabled enabled
;                           :time-machine/date date
;                           :time-machine/model model
;                           :navigation/show-mounting-modal true
;                           :portfolios (:portfolios db)
;                           :rating-to-score (:rating-to-score db))
;     :http-post-dispatch {:url          (str static/server-address "time-machine")
;                          :edn-params   {:enabled enabled :date (tools/gdate-to-yyyymmdd date)}
;                          :dispatch-key [:time-machine/has-rebuilt]
;                          }}))
;
;(rf/reg-event-db
;  :time-machine/has-rebuilt
;  (fn [db [_ msg]]
;    ;(println msg)
;    (assoc db :time-machine/has-rebuilt msg
;              :navigation/show-mounting-modal false)))
;
;(defn time-machine []
;  [v-box
;   :gap "10px"
;   :width "600px"
;   :class "subbody element"
;   :children [[title :label "Time machine" :level :level1]
;              [h-box  :gap "10px" :align :center
;               :children (into [[label :label "Enable time machine:"]]
;                               (for [[c v] [["OFF" false] ["ON" true]]]
;                                 ^{:key c}                     ;; key should be unique among siblings
;                                 [radio-button
;                                  :label c
;                                  :value v
;                                  :model (rf/subscribe [:time-machine/enabled])
;                                  :on-change #(rf/dispatch [:time-machine/enabled %])]))]
;              [h-box  :gap "10px" :align :center
;               :children [[label :label "Date:"]
;                          [datepicker-dropdown
;                           :model (rf/subscribe [:time-machine/date])
;                           :minimum (tools/int-to-gdate 20190101)
;                           :maximum (today)
;                           :format "dd/MM/yyyy" :show-today? true :on-change #(rf/dispatch [:time-machine/date %])]
;                          ]]
;              [h-box :gap "10px" :align :center
;               :children [[label :label "OGEMCORD dummy:"]
;                          [single-dropdown :model (rf/subscribe [:time-machine/model]) :on-change #(rf/dispatch [:time-machine/model]) :choices (into [] (for [i ["None" "GIC special [not implemented] "]] {:id i :label i}))]
;                          ]]
;              [button :style {:width "100%"} :class "btn btn-primary btn-block" :label "Take me there!" :on-click #(rf/dispatch [:rebuild-time-machine @(rf/subscribe [:time-machine/enabled]) @(rf/subscribe [:time-machine/date]) @(rf/subscribe [:time-machine/model])])]
;              [p "Note: takes about 5 minutes to load. Tested dates include 30/12/19, 21/01/20, 23/03/20, 20/05/20, and July 2020 onwards (20/07/20 for GIC). Ask Alex for any other date."]
;              ]]
;  )

(defn last-updated-logs []
  ;(println (keys @(rf/subscribe [:last-updated-logs])))
  [v-box
   :gap "10px"
   :width "600px"
   :class "subbody element"
   :children
   (into [[title :label "Last updated logs" :level :level1]]
         (for [[k v] (sort-by first @(rf/subscribe [:last-updated-logs]))]
           [h-box :gap "5px" :children [[label :width "400px" :label (str k)]
                                        [v-box :width "200px" :gap "5px" :children (into [] (for [dt v] [label :label (subs dt 0 19)]))]
                                        ]]))]
  )

(defn integrity []
  (when (nil? @(rf/subscribe [:integrity])) (rf/dispatch [:get-integrity]))
  [v-box
   :gap "10px"
   :width "900px"
   :class "subbody element"
   :children
   (into [[title :label "Integrity report" :level :level1]]
         (for [[k v] (sort-by first @(rf/subscribe [:integrity]))]
           [h-box :gap "5px" :children [[label :width "400px" :label (str k)]
                                        [p (str v)]
                                        ]]))]
  )

(defn administration-view []
  (rf/dispatch [:get-last-updated-logs])                    ;very impure, very dirty
  [v-box                                                  ;:gap "10px"
   :gap "10px"
   :padding "80px 25px"
   :children [[modal-success] [debug-operations] [integrity] [last-updated-logs]]] ;[time-machine]
  )
