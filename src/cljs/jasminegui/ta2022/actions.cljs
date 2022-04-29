(ns jasminegui.ta2022.actions
  (:require [re-frame.core :as rf]
            [jasminegui.static :as static]
            )
  )


(rf/reg-event-fx
  :ta2022/send-trade-to-test
  (fn [{:keys [db]} [_ trade-entry]]
    (println trade-entry)
    {:db db
     :http-post-dispatch {:url          (str static/server-address "ta2022-post-data")
                          :edn-params {:action :test-trade
                                       :trade-entry trade-entry}
                          :dispatch-key [:ta2022/post-test-result]}}))

(defn checknb [res k] (and (some? (res k)) (number? (res k))))

(rf/reg-event-db
  :ta2022/post-test-result
  (fn [db [_ data]]
    (if data
      (let [oth (vals (get-in data [:other-alerts]))
            main-check-fn (fn [res] (and (not (get res :triggered))
                                         (checknb res :implied-price)
                                         (or
                                           (checknb res :latest-market-price)
                                           (and (checknb res :latest-market-price-1) (checknb res :latest-market-price-2) (checknb res :latest-market-spread)))))
            other-check-fn (fn [res] (and (some? (:latest-market-price res)) (number? (:latest-market-price res)) (not (get res :triggered))))]
        (-> db
            (assoc :ta2022/test-result data
                   :ta2022/can-morph (every? identity
                                             (apply concat
                                                    [(main-check-fn (:relval-alert data))
                                                     (main-check-fn (:target-alert data))
                                                     (main-check-fn (:review-alert data))]
                                                    (map other-check-fn oth))))))
      (assoc db :ta2022/test-result nil :ta2022/can-morph false))))

(rf/reg-event-fx
  :ta2022/save-new-trade
  (fn [{:keys [db]} [_ last-leg-uuid exit-rationale trade-entry]]
    {:db                 db
     :http-post-dispatch {:url          (str static/server-address "ta2022-post-data")
                          :edn-params   {:action        :save-trade
                                         :last-leg-uuid last-leg-uuid
                                         :exit-rationale exit-rationale
                                         :trade-entry   trade-entry
                                         :test-result   (:test-result db)}
                          :dispatch-key [:ta2022/post-save-result]}}))

(rf/reg-event-fx
  :ta2022/amend-trade
  (fn [{:keys [db]} [_ trade-entry]]
    {:db                 db
     :http-post-dispatch {:url          (str static/server-address "ta2022-post-data")
                          :edn-params   {:action        :amend-trade
                                         :trade-entry   trade-entry
                                         :test-result   (:test-result db)}
                          :dispatch-key [:ta2022/post-amended-result]}}))


(rf/reg-event-fx
  :ta2022/go-to-active-trade
  (fn [{:keys [db]} [_ isin]]
    {:db                 (assoc db :ta2022/active-home :trade-view
                                   :ta2022/trade-isin isin
                                   :ta2022/trade-history nil)
     :fx       [[:dispatch [:get-ta2022-trade-view-history isin]]
                [:dispatch [:post-model-history-pricing :pricing [isin]]]
                [:dispatch [:get-ta2022-trade-view-position-and-performance-table isin]]]}))