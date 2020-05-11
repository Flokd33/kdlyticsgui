(ns jasminegui.mount
  (:require
    [reagent.core :as r]
    [jasminegui.static :as static]
    [re-frame.core :as rf]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  )


(def dev-server-address "http://localhost:3501/")
(def prod-server-address "http://iamlfilive:3501/")
(def server-address dev-server-address)              ;"http://localhost:3501/



(def default-db {:positions                                   []
                 :rating-to-score                             nil
                 :pivoted-positions                           []
                 :portfolios                                  []
                 :total-positions                             {}
                 :active-view                                 :home
                 :active-home                                 :summary

                 :single-portfolio-risk/display-style         "Tree"
                 :single-portfolio-risk/portfolio             "OGEMCORD"
                 :single-portfolio-risk/filter                {1 :region 2 :country 3 :issuer}
                 :single-portfolio-risk/hide-zero-holdings    true
                 :single-portfolio-risk/table-filter          []

                 :multiple-portfolio-risk/display-style       "Table"
                 :multiple-portfolio-risk/field-number        "One"
                 :multiple-portfolio-risk/field-one           :nav
                 :multiple-portfolio-risk/field-two           "None"
                 :multiple-portfolio-risk/selected-portfolios (set nil) ;["OGEMCORD"]
                 :multiple-portfolio-risk/filter              {1 :region 2 :country 3 :issuer}
                 :multiple-portfolio-risk/hide-zero-holdings    true

                 :portfolio-alignment/display-style           "Tree"
                 :portfolio-alignment/field                   :nav
                 :portfolio-alignment/filter                  {1 :region 2 :country 3 :issuer}
                 :portfolio-alignment/group                   :cembi
                 :portfolio-alignment/threshold               :quarter

                 })

(rf/reg-event-db ::initialize-db (fn [_ _] default-db))
(doseq [k (keys default-db)] (rf/reg-sub k (fn [db] (k db))))
(doseq [k [:active-view
           :active-home
           :positions
           :rating-to-score
           :pivoted-positions
           :total-positions
           :single-portfolio-risk/portfolio
           :single-portfolio-risk/display-style
           :single-portfolio-risk/hide-zero-holdings
           :single-portfolio-risk/table-filter
           :multiple-portfolio-risk/display-style
           :multiple-portfolio-risk/field-number
           :multiple-portfolio-risk/field-one
           :multiple-portfolio-risk/field-two
           :multiple-portfolio-risk/selected-portfolios
           :multiple-portfolio-risk/hide-zero-holdings
           :portfolio-alignment/display-style
           :portfolio-alignment/field
           :portfolio-alignment/group
           :portfolio-alignment/threshold
           ]] (rf/reg-event-db k (fn [db [_ data]] (assoc db k data))))

(rf/reg-event-db
  :portfolios
  (fn [db [_ portfolios]]
      (assoc db :portfolios portfolios
                :multiple-portfolio-risk/selected-portfolios (set portfolios))))

(rf/reg-event-db
  :single-portfolio-risk/filter
  (fn [db [_ id f]] (assoc-in db [:single-portfolio-risk/filter id] f)))

(rf/reg-event-db
  :multiple-portfolio-risk/filter
  (fn [db [_ id f]] (assoc-in db [:multiple-portfolio-risk/filter id] f)))

(rf/reg-event-db
  :portfolio-alignment/filter
  (fn [db [_ id f]] (assoc-in db [:portfolio-alignment/filter id] f)))

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
    {:http-get-dispatch {:url          (str server-address "positions") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:positions]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-rating-to-score
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "rating-to-score") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:rating-to-score]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-portfolios
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "portfolios") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:portfolios]
                         :kwk          true}}))


(rf/reg-event-fx
  :get-pivoted-positions
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "pivoted-positions") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:pivoted-positions]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-total-positions
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "total-positions") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:total-positions]
                         :kwk          true}}))





