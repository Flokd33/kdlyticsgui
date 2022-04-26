(ns jasminegui.ta2022.actions
  (:require [re-frame.core :as rf]
            [jasminegui.static :as static]
            )
  )


(rf/reg-event-fx
  :close-trade
  (fn [{:keys [db]} [_ id exit-rationale]]
    {:db (assoc db :show-morph-trade-modal false :success-modal {:show true :on-close :trade-morphed :response nil})
     :http-post-dispatch {:url         (str static/server-address "ta2022-close-trade")
                          :edn-params  {:id             (keyword id)
                                        ;:exit-date      (tools/gdate-to-yyyymmdd (today)) ;this will be assumed to be today
                                        :exit-rationale exit-rationale}
                          :dispatch-key [:close-response]}}))


(rf/reg-event-fx
  :morph-trade
  (fn [{:keys [db]} [_
                     id
                     amend?
                     exit-rationale
                     new-entry-rationale
                     new-analyst
                     new-strategy
                     relval-alert
                     target-alert
                     price-alert
                     review-alert
                     other-alerts]]
    (println "here")
    {:db (assoc db :show-morph-trade-modal false :success-modal {:show true :on-close :trade-morphed :response nil})
     :http-post-dispatch {:url         (str static/server-address "ta2022-morph-trade")
                          :edn-params  {:id             (keyword id)
                                        ;:exit-date      (tools/gdate-to-yyyymmdd (today)) ;this will be assumed to be today
                                        :exit-rationale exit-rationale}
                          :dispatch-key [:close-response]}}))