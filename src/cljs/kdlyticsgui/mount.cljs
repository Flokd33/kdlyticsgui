(ns kdlyticsgui.mount
  (:require
    [kdlyticsgui.static :as static]
    [re-frame.core :as rf]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [cljs-time.core :refer [today]]
    [kdlyticsgui.tools :as t]
    ;[tech.v3.dataset :as ds]
    )
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def default-db {:rot13                          false
                 :test-data                      nil

                 :navigation/active-section         :entry

                 ;:navigation/active-view-wealth     :summary
                 ;:navigation/active-view-positions  :summary
                 ;:navigation/active-view-vault      :inventory
                 ;:navigation/active-view-cellar     :inventory
                 ;:navigation/active-view-tools      :scrapping

                 ;:navigation/active              {:view        :entry :home        :summary}

                 :wealth-summary                    []

                 :positions-summary                 []
                 :positions-top10                   []
                 :positions-characteristics         []
                 :positions-strategy-exposure       []

                 :cellar-summary                    []
                 :vault-summary                     []

                 :price-history/data                []
                 :price-history/ticker              nil
                 :price-history/name                nil
                 :price-history/show-modal          false
                 :price-history/show-throbber       false

                 :navigation/success-modal       {:show false :on-close nil :response nil}
                 :navigation/success-compile     {:show false :on-close nil :response nil}
                 :navigation/show-mounting-modal false
                 :dummy                          nil                                 ;can be useful
                 })
(rf/reg-event-db ::initialize-db (fn [_ _] default-db))

;list of keys event for which a dispatch will assoc a value to the db given key event
(doseq [k (keys default-db)] (rf/reg-sub k (fn [db] (k db))))

(doseq [k [:rot13
           :test-data
           :navigation/active-section

           ;:navigation/active-view-wealth
           ;:navigation/active-view-positions
           ;:navigation/active-view-vault
           ;:navigation/active-view-cellar
           ;:navigation/active-view-tools

           :wealth-summary

           :positions-summary
           :positions-top10
           :positions-characteristics
           :positions-strategy-exposure

           :cellar-summary
           :vault-summary

           :price-history/data
           :price-history/ticker
           :price-history/name
           :price-history/show-modal
           :price-history/show-throbber

           :navigation/show-mounting-modal
           ]] (rf/reg-event-db k (fn [db [_ data]] (assoc db k data))))

(rf/reg-event-db
  :navigation/active
  (fn [db [_ page sub-page]] (assoc-in db [:navigation/active page] sub-page)))



;  :positions
;  (fn [db [_ positions]]
;    ;(println positions)
;    (let [res (array-of-lists->records positions)]                                             ;(mapv #(into {} (for [k (keys positions)] [k (nth (positions k) %)])) (range (count (positions (first (keys positions))))))
;      (assoc db                                             ;:positions positions
;        :positions res
;        :all-instrument-ids (distinct (map :id res))
;        ;:pivoted-positions (static/get-pivoted-data res)
;        :navigation/show-mounting-modal false))))

;(rf/reg-event-fx
;  :positions
;  (fn [{:keys [db]} [_ positions]]
;    (let [res (array-of-lists->records positions)]
;      {:db                 (assoc db :positions res :all-instrument-ids (distinct (map :id res)) :navigation/show-mounting-modal false)
;       :http-post-dispatch {:url          (str static/ta-server-address "scorecard-request")
;                            :edn-params   {:portfolio (:scorecard/portfolio db)
;                                           :isin-seq  (map :isin (t/chainfilter {:portfolio (:scorecard/portfolio db) :qt-jpm-sector (:scorecard/sector db) :original-quantity pos?} res))}
;                            :dispatch-key [:scorecard/trade-analyser-data]}})))

;(def nkp (atom nil))





(rf/reg-event-fx
  :instruments
  (fn [{:keys [db]} [_ instruments]]
    (let [positions (if (and (= (:positions db) []) (:naked-positions db)) (mapv #(merge % (get-in db [:instruments (:id %)])) (:naked-positions db)) [])
          ]
      {:db (assoc db :all-instrument-ids (keys instruments)
                     :instruments instruments
                     :positions positions
                     ;:positions-ds (ds/->dataset positions)
                     :navigation/show-mounting-modal (= positions [])
                     :implementation/live-positions (into {} (for [[p g] (group-by :portfolio positions)]
                                                               [p (into {} (for [line g :when (and (some? (:isin line)) (pos? (:weight line)))] [(:isin line) (:weight line)]))])) ;(* 100. (:weight line))
                     )})))





(doseq [k [:single-portfolio-risk/filter
           :multiple-portfolio-risk/filter
           :portfolio-alignment/filter
           :single-portfolio-attribution/filter
           :multiple-portfolio-attribution/filter
           :portfolio-history/filter
           :attribution-history/filter]]
  (rf/reg-event-db k (fn [db [_ id f]] (assoc-in db [k id] f))))

(rf/reg-event-db
  :qt-date
  (fn [db [_ qt-date]] (let [dt (.replace ^string qt-date "\"" "")]
                         (assoc db :qt-date dt
                                   :portfolio-history/end-period (t/gdate->yyyyMMdd (t/ddMMMyyyy->gdate dt))))))

;THIS IS A DUMMY - IN PRACTICE WE'D DO MORE THINGS HERE
(rf/reg-event-db
  :attribution-date
  (fn [db [_ attribution-date]] (assoc db :attribution-date (.replace ^string attribution-date "\"" ""))))

(rf/reg-event-db
  :single-portfolio-risk/shortcut
  (fn [db [_ snapshot]]
    (case snapshot
      1 (assoc db :single-portfolio-risk/shortcut snapshot
                  :single-portfolio-risk/display-style "Table"
                  :single-portfolio-risk/hide-zero-holdings true
                  :single-portfolio-risk/filter {1 :region 2 :country 3 :issuer})
      2 (assoc db :single-portfolio-risk/shortcut snapshot
                  :single-portfolio-risk/display-style "Tree"
                  :single-portfolio-risk/hide-zero-holdings true
                  :single-portfolio-risk/filter {1 :country 2 :sector 3 "None"})
      3 (assoc db :single-portfolio-risk/shortcut snapshot
                  :single-portfolio-risk/display-style "Tree"
                  :single-portfolio-risk/hide-zero-holdings true
                  :single-portfolio-risk/filter {1 :sector 2 :country 3 "None"})
      4 (assoc db :single-portfolio-risk/shortcut snapshot
                  :single-portfolio-risk/display-style "Tree"
                  :single-portfolio-risk/hide-zero-holdings true
                  :single-portfolio-risk/filter {1 :sector 2 :country 3 :issuer}))))

(rf/reg-event-db
  :multiple-portfolio-risk/shortcut
  (fn [db [_ snapshot]]
    (case snapshot
      1 (assoc db :multiple-portfolio-risk/shortcut snapshot
                  :multiple-portfolio-risk/display-style "Table"
                  :multiple-portfolio-risk/field-one :nav
                  :multiple-portfolio-risk/hide-zero-holdings true
                  :multiple-portfolio-risk/filter {1 :region 2 :country 3 :issuer})
      2 (assoc db :multiple-portfolio-risk/shortcut snapshot
                  :multiple-portfolio-risk/display-style "Tree"
                  :multiple-portfolio-risk/field-one :nav
                  :multiple-portfolio-risk/hide-zero-holdings true
                  :multiple-portfolio-risk/filter {1 :country 2 :issuer 3 "None"})
      3 (assoc db :multiple-portfolio-risk/shortcut snapshot
                  :multiple-portfolio-risk/display-style "Tree"
                  :multiple-portfolio-risk/field-one :nav
                  :multiple-portfolio-risk/hide-zero-holdings true
                  :multiple-portfolio-risk/filter {1 :sector 2 :country 3 "None"})
      4 (assoc db :multiple-portfolio-risk/shortcut snapshot))))

(rf/reg-event-db
  :portfolio-alignment/shortcut
  (fn [db [_ snapshot]]
    (case snapshot
      1 (assoc db :portfolio-alignment/shortcut snapshot
                  :portfolio-alignment/display-style "Table"
                  :portfolio-alignment/field-one :nav
                  :portfolio-alignment/filter {1 :region 2 :country 3 :issuer})
      2 (assoc db :portfolio-alignment/shortcut snapshot
                  :portfolio-alignment/display-style "Tree"
                  :portfolio-alignment/field-one :nav
                  :portfolio-alignment/filter {1 :country 2 :issuer 3 "None"})
      3 (assoc db :portfolio-alignment/shortcut snapshot
                  :portfolio-alignment/display-style "Tree"
                  :portfolio-alignment/field-one :nav
                  :portfolio-alignment/filter {1 :sector 2 :country 3 :issuer})
      4 (assoc db :portfolio-alignment/shortcut snapshot))))

(rf/reg-event-db
  :cycle-shortcut
  (fn [db [_ _ _]]
    (let [shortcut-key (keyword (str (name (:navigation/active-view db)) "-risk/shortcut"))
          shortcut-value (shortcut-key db)]
      (cond
        (< shortcut-value 4) (assoc db shortcut-key (inc shortcut-value))
        :else (assoc db shortcut-key 1)))))


;--------------------------------------HTTP GET/POST DEFINITION--------------------------------------------------------------

(rf/reg-event-db
  :tree-table
  (fn [db [_ _ _]]
    (let [shortcut-key (keyword (str (name (:navigation/active-view db)) "-risk/display-style"))]
      (case (shortcut-key db)
        "Tree"  (assoc db shortcut-key "Table")
        "Table" (assoc db shortcut-key "Tree")))))

(defn http-get-dispatch
  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
  [request]
  (let [vr (if (vector? request) request [request])]
    (doseq [r vr]
      (go (let [response (<! (http/get (:url r)))]
            (rf/dispatch (conj (:dispatch-key r) (:body response)))
            (if (:flag r) (rf/dispatch [(:flag r) (:flag-value r)])))))))

(rf/reg-fx :http-get-dispatch http-get-dispatch)

(defn http-get-asset
  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
  [request]
  (let [vr (if (vector? request) request [request])]
    (doseq [r vr]
      (go (let [response (<! (http/get (str static/server-address "asset?namespace=" (:namespace request) "&asset=" (:asset request))))]
            (rf/dispatch (conj (:dispatch-key r) (:body response)))
            (if (:flag r) (rf/dispatch [(:flag r) (:flag-value r)])))))))

(rf/reg-fx :http-get-asset http-get-asset)

(defn http-post-dispatch
  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
  [request]
  (let [vr (if (vector? request) request [request])]
    (doseq [r vr]
      (go (let [response (<! (http/post (:url r) (if (:edn-params r) {:edn-params (:edn-params r)} {:json-params (:json-params r)})))]
            (rf/dispatch (conj (:dispatch-key r) (:body response)))
            (if (:flag r) (rf/dispatch [(:flag r) (:flag-value r)])))))))

(rf/reg-fx :http-post-dispatch http-post-dispatch)

(defn http-post-dispatch-test
  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
  [request]
  (let [vr (if (vector? request) request [request])]
    (doseq [r vr]
      (go (let [response (<! (http/post (:url r) (if (:edn-params r) {:edn-params (:edn-params r) :content-type "application/json;charset=UTF-8"} {:json-params (:json-params r)  :content-type "application/json;charset=UTF-8"})))]
            (rf/dispatch (conj (:dispatch-key r) (:body response)))
            (if (:flag r) (rf/dispatch [(:flag r) (:flag-value r)])))))))


(rf/reg-fx :http-post-dispatch-test http-post-dispatch-test)
(rf/reg-fx :http-json-post-dispatch http-post-dispatch)

(defn http-put-dispatch [request]
  (go (let [response (<! (http/post (:url request) {:multipart-params (:multipart-params request)}))]
        (rf/dispatch (conj (:dispatch-key request) (:body response)))
        (if (:flag request) (rf/dispatch [(:flag request) (:flag-value request)])))))


(rf/reg-fx :http-put-dispatch http-put-dispatch)

;-----------------------------------------------------------------------------------------------------------------------

(def simple-http-get-events
  [{:get-key :get-naked-positions     :url-tail "naked-position-transit-array"           :dis-key :naked-positions :mounting-modal true}
   ])

(def simple-http-assets
  [{:get-key :get-portfolios              :namespace "common.static" :asset "portfolios"              :dispatch-key [:portfolios]}
   ])

(doseq [line simple-http-get-events]
  (rf/reg-event-fx
    (:get-key line)
    (fn [{:keys [db]} [_]]
      (if (zero? (count (get-in db [(:dis-key line)])))     ;if it wasn't mounted yet we need to load it
        {:db (if (:mounting-modal line) (assoc db :navigation/show-mounting-modal true) db) ;some events take time, let's show a throbber
         :http-get-dispatch {:url           (str static/server-address (:url-tail line))
                             :dispatch-key  [(:dis-key line)]}}))))

(doseq [line simple-http-assets]
  (rf/reg-event-fx
    (:get-key line)
    (fn [{:keys [db]} [_]]
      (if (zero? (count (get-in db (:dispatch-key line))))     ;if it wasn't mounted yet we need to load it
        {:db (if (:mounting-modal line) (assoc db :navigation/show-mounting-modal true) db) ;some events take time, let's show a throbber
         :http-get-asset line}))))

(rf/reg-event-fx
  :get-wealth-summary
  (fn [{:keys [db]} [_ ]]
    {:http-get-dispatch {:url          (str static/server-address "wealth-summary" )
                         :dispatch-key [:positions-summary]}}))

(rf/reg-event-fx
  :get-positions-summary
  (fn [{:keys [db]} [_ ]]
    {:http-get-dispatch {:url          (str static/server-address "positions-summary" )
                         :dispatch-key [:positions-summary]}}))

(rf/reg-event-fx
  :get-positions-top10
  (fn [{:keys [db]} [_ ]]
    {:http-get-dispatch {:url          (str static/server-address "positions-top10" )
                         :dispatch-key [:positions-top10]}}))

(rf/reg-event-fx
  :get-positions-characteristics
  (fn [{:keys [db]} [_ ]]
    {:http-get-dispatch {:url          (str static/server-address "positions-characteristics" )
                         :dispatch-key [:positions-characteristics]}}))
(rf/reg-event-fx
  :get-positions-strategy-exposure
  (fn [{:keys [db]} [_ ]]
    {:http-get-dispatch {:url          (str static/server-address "positions-strategy-exposure" )
                         :dispatch-key [:positions-strategy-exposure]}}))


(rf/reg-event-fx
  :get-vault-summary
  (fn [{:keys [db]} [_ ]]
    {:http-get-dispatch {:url          (str static/server-address "vault-summary" )
                         :dispatch-key [:vault-summary]}}))

(rf/reg-event-fx
  :get-cellar-summary
  (fn [{:keys [db]} [_ ]]
    {:http-get-dispatch {:url          (str static/server-address "cellar-summary" )
                         :dispatch-key [:cellar-summary]}}))


(rf/reg-event-db
  :receive-price-history-data
  (fn [db [_ data]] (assoc db :price-history/data data
                              :price-history/show-throbber false)))

(rf/reg-event-fx
  :get-price-history
  (fn [{:keys [db]} [_ ticker name]]
    {:db                (assoc db :price-history/ticker ticker
                                  :price-history/name   name
                                  :price-history/show-modal true
                                  :price-history/show-throbber true)
     :http-get-dispatch {:url          (str static/server-address "price-history?ticker=" ticker)
                         :dispatch-key [:receive-price-history-data]}}))

;(rf/reg-event-fx
;  :implementation-list-request
;  (fn [{:keys [db]} [_]]
;    {:db             db
;     :http-get-asset {:namespace "jasmine.implementation" :asset "list-all-implementations" :dispatch-key [:implementation/implementation-list]}}))
;
;(rf/reg-event-fx
;  :get-naked-positions-timestamp
;  (fn [{:keys [db]} [_]]
;    {:http-get-dispatch {:url          (str static/server-address "last-updated")
;                         :dispatch-key [:check-naked-positions-timestamp]}}))

;(rf/reg-event-fx
;  :get-attribution-index-returns-portfolio
;  (fn [{:keys [db]} [_ portfolio]]
;    {:db (assoc db :attribution-index-returns/portfolio portfolio)
;     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" portfolio "&period=" (:attribution-index-returns/period db))
;                         :dispatch-key [:attribution-index-returns/table]}}))
