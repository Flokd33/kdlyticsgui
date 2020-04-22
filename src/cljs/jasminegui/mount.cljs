(ns jasminegui.mount
  (:require
    [reagent.core :as r]
    [jasminegui.static :as static]
    [re-frame.core :as rf]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  )






(def default-db {:positions []
                 :pivoted-positions []
                 :portfolios []
                 :active-view :home
                 :active-home :overview
                 :single-portfolio-risk-display-style "Table"
                 :single-portfolio-risk-portfolio "OGEMCORD"
                 :single-portfolio-risk-filter {1 :region 2 :country 3 :issuer}
                 :multiple-portfolio-risk-display-style "Table"
                 :multiple-portfolio-field-number "One"
                 :multiple-portfolio-field-one :weight
                 :multiple-portfolio-field-two "None"
                 :multiple-portfolio-risk-selected-portfolios (set nil) ;["OGEMCORD"]
                 :multiple-portfolio-risk-filter {1 :region 2 :country 3 :issuer}
                 })

(rf/reg-event-db ::initialize-db (fn [_ _] default-db))
(doseq [k (keys default-db)] (rf/reg-sub k (fn [db] (k db))))
(doseq [k [:active-view
           :active-home
           :single-portfolio-risk-portfolio
           :single-portfolio-risk-display-style
           :multiple-portfolio-risk-display-style
           :multiple-portfolio-field-number
           :multiple-portfolio-field-one
           :multiple-portfolio-field-two
           :multiple-portfolio-risk-selected-portfolios]] (rf/reg-event-db k (fn [db [_ data]] (assoc db k data))))

(rf/reg-event-db
  :portfolios
  (fn [db [_ data]]
    (let [portfolios (remove #{"WISHLIST" "IGWISHLIST"} data)]
      (assoc db :portfolios portfolios
                :multiple-portfolio-risk-selected-portfolios (set portfolios)))))

(rf/reg-event-db
  :single-portfolio-risk-filter
  (fn [db [_ id f]] (assoc-in db [:single-portfolio-risk-filter id] f)))
(rf/reg-event-db
  :multiple-portfolio-risk-filter
  (fn [db [_ id f]] (assoc-in db [:single-portfolio-risk-filter id] f)))

(rf/reg-event-db
  :positions
  (fn [db [_ positions]]
    (let [instruments (distinct (map :description positions))
          grp (group-by (juxt :description :portfolio) positions)
          portfolios (distinct (map :portfolio positions))
          keys [:weight :original-quantity :base-value :contrib-mdur :contrib-zspread :contrib-yield :contrib-gspread]
          ]
      ;      (println instruments)
      (assoc db :positions positions
                :pivoted-positions (remove nil? (into [] (for [instrument instruments]
                                                           (let [template (ffirst (remove nil? (map #(get-in grp [[instrument %]]) portfolios)))]
                                                             (if true ;(not= "Cash" (:Region template))
                                                               (merge template
                                                                      (into {}
                                                                            (for [k keys]
                                                                              [k
                                                                               (into {} (for [p portfolios] [(keyword p) (if-let [x (first (get-in grp [[instrument p]]))] (k x) 0.)]))]))))))))

                ))))

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






