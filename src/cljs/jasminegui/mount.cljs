(ns jasminegui.mount
  (:require
    [reagent.core :as r]
    [re-frame.core :as rf]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  )
(def default-db {:positions []
                 :portfolios []
                 :single-portfolio-risk-display-style "Table"
                 :single-portfolio-risk-portfolio "OGEMCORD"
                 :single-portfolio-risk-filter {1 :region 2 :country 3 :issuer}
                 })

(rf/reg-event-db ::initialize-db (fn [_ _] default-db))
(doseq [k (keys default-db)] (rf/reg-sub k (fn [db] (k db))))
(doseq [k [:positions :portfolios :single-portfolio-risk-portfolio :single-portfolio-risk-display-style]] (rf/reg-event-db k (fn [db [_ data]] (assoc db k data))))

(rf/reg-event-db
  :single-portfolio-risk-filter
  (fn [db [_ id f]] (assoc-in db [:single-portfolio-risk-filter id] f)))

;;;;;;;;;;;;;;;;;;;;;;;
;;HTTP GET DEFINITION;;
;;;;;;;;;;;;;;;;;;;;;;;

(defn http-get-dispatch [request]
  (go (let [response (<! (http/get (:url request)))]
        (rf/dispatch (conj (:dispatch-key request)
                           (if (:kwk request)
                             (js->clj (js/JSON.parse (:body response)) :keywordize-keys true)
                             (:body response))))
        (if (:flag request) (rf/dispatch [(:flag request) (:flag-value request)])))))

(rf/reg-fx :http-get-dispatch http-get-dispatch)

(rf/reg-event-fx
  :get-positions
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str "http://localhost:3501/positions") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:positions]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-portfolios
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str "http://localhost:3501/portfolios") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:portfolios]
                         :kwk          true}}))










(def risk-choice-map [{:id "None" :label "None"}
                      {:id :region :label "Region"}
                      {:id :country :label "Country"}
                      {:id :issuer :label "Issuer"}
                      {:id :rating :label "Rating"}
                      {:id :sector :label "Sector"}])
