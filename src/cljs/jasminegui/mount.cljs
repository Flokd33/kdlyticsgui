(ns jasminegui.mount
  (:require
    [reagent.core :as r]
    [jasminegui.static :as static]
    [re-frame.core :as rf]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [jasminegui.tables :as tables]
    [jasminegui.tools :as tools]
    [cljs-time.core :refer [today]]
    ;[re-pressed.core :as rp]
    )
  (:require-macros [cljs.core.async.macros :refer [go]])
  )


(def default-db {
                 ;data
                 :positions                                          []
                 :positions-new                                      {} ;map will be portfolio -> sub positions
                 :rating-to-score                                    nil
                 ;:pivoted-positions                                  []
                 :portfolios                                         []
                 :ex-emcd-portfolios                                 []
                 :total-positions                                    {}
                 :qt-date                                            ""
                 :attribution-date                                   ""
                 :country-codes                                      nil
                 :large-exposures                                    []

                 ;navigation
                 :navigation/active-view                             :entry ;:home
                 :navigation/active-home                             :summary
                 :navigation/active-var                              :overview
                 :navigation/active-qs                               :table
                 :navigation/active-attribution                      :summary
                 :navigation/success-modal                           {:show false :on-close nil :response nil}
                 :navigation/show-mounting-modal                     false ;

                 ;time machine
                 :time-machine/enabled                               false
                 :time-machine/date                                  (tools/int-to-gdate 20191230)
                 :time-machine/model                                 "None"
                 :time-machine/has-rebuilt                           nil

                 ;single-portfolio view
                 :single-portfolio-risk/display-style                "Table"
                 :single-portfolio-risk/portfolio                    "OGEMCORD"
                 :single-portfolio-risk/filter                       {1 :region 2 :country 3 :issuer}
                 :single-portfolio-risk/hide-zero-holdings           true
                 :single-portfolio-risk/table-filter                 []
                 :single-portfolio-risk/shortcut                     1

                 ;multiple-portfolio view
                 :multiple-portfolio-risk/display-style              "Table"
                 :multiple-portfolio-risk/field-number               "One"
                 :multiple-portfolio-risk/field-one                  :nav
                 :multiple-portfolio-risk/field-two                  "None"
                 :multiple-portfolio-risk/selected-portfolios        (set nil) ;["OGEMCORD"]
                 :multiple-portfolio-risk/filter                     {1 :region 2 :country 3 :issuer}
                 :multiple-portfolio-risk/hide-zero-holdings         true
                 :multiple-portfolio-risk/shortcut                   1
                 :multiple-portfolio-risk/table-filter               []

                 ;portfolio-alignment-view
                 :portfolio-alignment/display-style                  "Tree"
                 :portfolio-alignment/field                          :nav
                 :portfolio-alignment/filter                         {1 :region 2 :country 3 :issuer}
                 :portfolio-alignment/group                          :cembi
                 :portfolio-alignment/threshold                      :zero
                 :portfolio-alignment/shortcut                       1
                 :portfolio-alignment/table-filter                   []

                 ;var view
                 :var/portfolio                                      "OGEMCORD"
                 :var/result                                         nil
                 :var/proxies                                        nil
                 :var/history                                        nil
                 :var/data                                           nil
                 :var/dates                                          nil
                 :var/chart-period                                   :daily-3y

                 ;trade history
                 :trade-history/active-bond                          nil
                 :trade-history/history                              nil

                 ;single-portfolio attribution
                 :single-portfolio-attribution/display-style         "Tree"
                 :single-portfolio-attribution/portfolio             "OGEMCORD"
                 :single-portfolio-attribution/filter                {1 :region 2 :country 3 :issuer}
                 :single-portfolio-attribution/period                "ytd"
                 :single-portfolio-attribution/table-filter          []
                 :single-portfolio-attribution/shortcut              1
                 :single-portfolio-attribution/table                 []

                 ;multiple-portfolio attribution
                 :multiple-portfolio-attribution/display-style       "Tree"
                 :multiple-portfolio-attribution/field-number        "One"
                 :multiple-portfolio-attribution/period              "ytd"
                 :multiple-portfolio-attribution/field-one           :total-effect
                 :multiple-portfolio-attribution/field-two           "None"
                 :multiple-portfolio-attribution/selected-portfolios (set nil) ;["OGEMCORD"]
                 :multiple-portfolio-attribution/filter              {1 :region 2 :country 3 :issuer}
                 :multiple-portfolio-attribution/shortcut            1
                 :multiple-portfolio-attribution/table-filter        []
                 :multiple-portfolio-attribution/table               []

                 :attribution/summary                                []
                 :attribution/available-months                       []

                 :attribution-index-returns/portfolio               "OGEMCORD"
                 :attribution-index-returns/period                  "ytd"
                 :attribution-index-returns/x-filter                :sector
                 :attribution-index-returns/y-filter                :region
                 :attribution-index-returns/table                   []
                 :attribution-index-returns/x-top-15                false

                 :single-bond-trade-history/data                     []
                 :single-bond-trade-history/flat-data                []
                 :single-bond-trade-history/bond                     nil
                 :single-bond-trade-history/show-modal               false
                 :single-bond-trade-history/show-flat-modal          false
                 :single-bond-trade-history/show-throbber            false
                 :portfolio-trade-history/data                       []
                 :portfolio-trade-history/portfolio                  "OGEMCORD"
                 :portfolio-trade-history/start-date                 (tools/int-to-gdate 20200101)
                 :portfolio-trade-history/end-date                   (tools/int-to-gdate (today))
                 :portfolio-trade-history/performance                "No"

                 :portfolio-review/portfolio                         "OGEMCORD"
                 :portfolio-review/active-tab                        :summary
                 :portfolio-review/summary-data                      nil
                 :portfolio-review/contribution-chart-data           nil
                 :portfolio-review/alpha-chart-data                  nil
                 :portfolio-review/jensen-chart-data                 nil
                 :portfolio-review/marginal-beta-chart-data          nil
                 :portfolio-review/historical-beta-chart-data        nil
                 :portfolio-review/historical-performance-chart-data nil

                 :betas/table                                        nil

                 :bond-price-history/price                          []
                 :bond-price-history/name                          []

                 :esg/refinitiv-ids                       nil
                 :esg/active-home                         :find-issuers
                 :esg/selected-companies                  []
                 :esg/data                                []
                 :esg/data-detailed                                []
                 :esg/refinitiv-structure                 []
                 :esg/selected-pillars                    (set nil)

                 :quant-model/model-output                []
                 :quant-model/calculator-spreads          {:legacy nil :new nil :svr nil}
                 :quant-model/rating-curves               []


                 })

(rf/reg-event-db ::initialize-db (fn [_ _] default-db))
(doseq [k (keys default-db)] (rf/reg-sub k (fn [db] (k db))))


(doseq [k [:navigation/active-view
           :navigation/active-home
           :navigation/active-var
           :navigation/active-qs
           :navigation/active-attribution
           :navigation/show-mounting-modal
           :rating-to-score
           :country-codes
           :large-exposures
           ;:pivoted-positions
           :total-positions
           :var/proxies
           :var/dates
           :var/data
           :var/portfolio
           :var/chart-period
           
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
           :multiple-portfolio-risk/shortcut
           :multiple-portfolio-risk/table-filter
           
           :portfolio-alignment/display-style
           :portfolio-alignment/field
           :portfolio-alignment/group
           :portfolio-alignment/threshold
           :portfolio-alignment/shortcut
           :portfolio-alignment/table-filter

           :single-portfolio-attribution/portfolio
           :single-portfolio-attribution/display-style
           :single-portfolio-attribution/period
           :single-portfolio-attribution/table-filter
           :single-portfolio-attribution/table

           :multiple-portfolio-attribution/display-style
           :multiple-portfolio-attribution/field-number
           :multiple-portfolio-attribution/field-one
           :multiple-portfolio-attribution/field-two
           :multiple-portfolio-attribution/selected-portfolios
           :multiple-portfolio-attribution/hide-zero-holdings
           :multiple-portfolio-attribution/shortcut
           :multiple-portfolio-attribution/table-filter
           :multiple-portfolio-attribution/table
           :multiple-portfolio-attribution/period

           :attribution/summary
           :attribution/available-months

           :attribution-index-returns/portfolio
           :attribution-index-returns/period
           :attribution-index-returns/x-filter
           :attribution-index-returns/y-filter
           :attribution-index-returns/table
           :attribution-index-returns/x-top-15

           :single-bond-trade-history/show-flat-modal
           ;:single-bond-trade-history/flat-data ; dispatched elsewhere
           :single-bond-trade-history/show-modal
           ;:single-bond-trade-history/data ; dispatched elsewhere
           :single-bond-trade-history/bond
           :single-bond-trade-history/show-throbber
           :portfolio-trade-history/portfolio
           :portfolio-trade-history/start-date
           :portfolio-trade-history/end-date
           :portfolio-trade-history/performance

           :portfolio-review/portfolio
           :portfolio-review/active-tab
           :portfolio-review/summary-data
           :portfolio-review/contribution-chart-data
           :portfolio-review/alpha-chart-data
           :portfolio-review/jensen-chart-data
           :portfolio-review/marginal-beta-chart-data
           :portfolio-review/historical-beta-chart-data
           :portfolio-review/historical-performance-chart-data

           :betas/table

           :bond-price-history/price
           :bond-price-history/name

           :esg/refinitiv-ids
           :esg/active-home
           :esg/selected-pillars


           :quant-model/calculator-spreads
           :quant-model/rating-curves               []

           :time-machine/enabled
           :time-machine/date
           :time-machine/model


           ]] (rf/reg-event-db k (fn [db [_ data]] (assoc db k data))))


(rf/reg-event-db
  :positions
  (fn [db [_ positions]]
    (let [res (mapv #(into {} (for [k (keys positions)] [k (nth (positions k) %)])) (range (count (positions (first (keys positions))))))]
      (assoc db                                             ;:positions positions
        :positions res
        :all-instrument-ids (distinct (map :id res))
        ;:pivoted-positions (static/get-pivoted-data res)
        :navigation/show-mounting-modal false))))

;(rf/reg-event-db
;  :pivoted-positions
;  (fn [db [_ pivoted-positions]]
;    (assoc db                                               ;:positions positions
;      :pivoted-positions (mapv #(into {} (for [k (keys pivoted-positions)] [k (nth (pivoted-positions k) %)])) (range (count (pivoted-positions (first (keys pivoted-positions))))))
;      :navigation/show-mounting-modal false)))

;(rf/reg-event-db
;  :quant-model/model-output
;  (fn [db [_ model]]
;    (assoc db :quant-model/model-output model
;              :navigation/show-mounting-modal false)))

(rf/reg-event-db
  :quant-model/model-output
  (fn [db [_ model]]
    (assoc db :quant-model/model-output (mapv #(into {} (for [k (keys model)] [k (nth (model k) %)])) (range (count (model (first (keys model)))))) ;5 seconds faster
              :navigation/show-mounting-modal false)))

(rf/reg-event-db
  :positions-new
  (fn [db [_ portfolio positions]]
    (-> db
        (assoc-in [:positions-new portfolio] positions)
        (assoc :navigation/show-mounting-modal false))))

(rf/reg-event-db
  :portfolios
  (fn [db [_ portfolios]]
      (assoc db :portfolios portfolios
                :multiple-portfolio-risk/selected-portfolios (set portfolios)
                :multiple-portfolio-attribution/selected-portfolios (set portfolios))))

(doseq [k [:single-portfolio-risk/filter
           :multiple-portfolio-risk/filter
           :portfolio-alignment/filter
           :single-portfolio-attribution/filter
           :multiple-portfolio-attribution/filter]]
  (rf/reg-event-db
    k
    (fn [db [_ id f]] (assoc-in db [k id] f))))

(rf/reg-event-db
  :qt-date
  (fn [db [_ qt-date]] (assoc db :qt-date (.replace ^string qt-date "\"" ""))))

(rf/reg-event-db
  :attribution-date
  (fn [db [_ attribution-date]] (assoc db :attribution-date (.replace ^string attribution-date "\"" ""))))

;THIS IS A DUMMY - IN PRACTICE WE'D DO MORE THINGS HERE
(rf/reg-event-db
  :single-portfolio-risk/shortcut
  (fn [db [_ snapshot]]
    (case snapshot
      1 (assoc db :single-portfolio-risk/shortcut snapshot)
      2 (assoc db :single-portfolio-risk/shortcut snapshot)
      3 (assoc db :single-portfolio-risk/shortcut snapshot)
      4 (assoc db :single-portfolio-risk/shortcut snapshot))))

(rf/reg-event-db
  :cycle-shortcut
  (fn [db [_ _ _]]
    (let [shortcut-key (keyword (str (name (:navigation/active-home db)) "-risk/shortcut"))
          shortcut-value (shortcut-key db)]
      (cond
        (< shortcut-value 4) (assoc db shortcut-key (inc shortcut-value))
        :else (assoc db shortcut-key 1)))))

(rf/reg-event-db
  :tree-table
  (fn [db [_ _ _]]
    (let [shortcut-key (keyword (str (name (:navigation/active-home db)) "-risk/display-style"))]
      (case (shortcut-key db)
        "Tree"  (assoc db shortcut-key "Table")
        "Table" (assoc db shortcut-key "Tree")))))

;;;;;;;;;;;;;;;;;;;;;;;
;;HTTP GET DEFINITION;;
;;;;;;;;;;;;;;;;;;;;;;;

(defn http-get-dispatch [request]
  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
  (go (let [response (<! (http/get (:url request)))]
        ;(println (:body response))
        (rf/dispatch (conj (:dispatch-key request) (:body response)))
        (if (:flag request) (rf/dispatch [(:flag request) (:flag-value request)])))))

(rf/reg-fx :http-get-dispatch http-get-dispatch)

(defn http-post-dispatch [request]
  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
  (go (let [response (<! (http/post (:url request) {:edn-params (:edn-params request)}))]
        (rf/dispatch (conj (:dispatch-key request) (:body response)))
        (if (:flag request) (rf/dispatch [(:flag request) (:flag-value request)])))))

(rf/reg-fx :http-post-dispatch http-post-dispatch)


(def simple-http-get-events
  [                                                         ;{:get-key :get-positions           :url-tail "positions"           :dis-key :positions :mounting-modal true}
   {:get-key :get-positions           :url-tail "position-array"           :dis-key :positions :mounting-modal true}
   {:get-key :get-rating-to-score     :url-tail "rating-to-score"     :dis-key :rating-to-score}
   {:get-key :get-portfolios          :url-tail "portfolios"          :dis-key :portfolios}
   ;{:get-key :get-pivoted-positions   :url-tail "pivoted-positions"   :dis-key :pivoted-positions}
   ;{:get-key :get-pivoted-positions   :url-tail "pivoted-position-array"   :dis-key :pivoted-positions}
   {:get-key :get-total-positions     :url-tail "total-positions"     :dis-key :total-positions}
   {:get-key :get-qt-date             :url-tail "qt-date"             :dis-key :qt-date}
   {:get-key :get-large-exposures     :url-tail "large-exposures"     :dis-key :large-exposures}
   {:get-key :get-var-proxies         :url-tail "var-proxies"         :dis-key :var/proxies}
   {:get-key :get-var-dates           :url-tail "var-dates"           :dis-key :var/dates}
   {:get-key :get-betas               :url-tail "beta-table"          :dis-key :betas/table}
   {:get-key :get-refinitiv-ids       :url-tail "refinitiv-ids"       :dis-key :esg/refinitiv-ids}
   {:get-key :get-refinitiv-structure :url-tail "refinitiv-structure" :dis-key :esg/refinitiv-structure}
   ;{:get-key :get-quant-model         :url-tail "quant-model-output"  :dis-key :quant-model/model-output :mounting-modal true}
   {:get-key :get-quant-model         :url-tail "quant-model-output-array"  :dis-key :quant-model/model-output :mounting-modal true}
   {:get-key :get-quant-rating-curves :url-tail "quant-rating-curves" :dis-key :quant-model/rating-curves}
   {:get-key :get-country-codes       :url-tail "countries"           :dis-key :country-codes}
   {:get-key :get-time-machine-status :url-tail "time-machine-status" :dis-key :time-machine-status}
   {:get-key :get-attribution-date    :url-tail "attribution?query-type=attribution-date" :dis-key :attribution-date}
   {:get-key :get-attribution-summary    :url-tail "attribution?query-type=summary" :dis-key :attribution/summary}
   {:get-key :get-attribution-available-months    :url-tail "attribution?query-type=available-months" :dis-key :attribution/available-months}
   ])


(doseq [line simple-http-get-events]
  (rf/reg-event-fx
    (:get-key line)
    (fn [{:keys [db]} [_]]
      (if (zero? (count (get-in db [(:dis-key line)])))     ;if it wasn't mounted yet we need to load it
        {:db (if (:mounting-modal line) (assoc db :navigation/show-mounting-modal true) db) ;some events take time, let's show a throbber
         :http-get-dispatch {:url           (str static/server-address (:url-tail line))
                             :dispatch-key  [(:dis-key line)]}}))))

;(rf/reg-event-fx
;  :get-positions-new
;  (fn [{:keys [db]} [_ portfolio]]
;    {:http-get-dispatch {:url          (str static/server-address "positions-new?portfolio=" portfolio)
;                         :dispatch-key [:positions-new portfolio]}}))

(rf/reg-event-fx
  :get-var-data
  (fn [{:keys [db]} [_ portfolio]]
    {:http-get-dispatch {:url          (str static/server-address "var-data?portfolio=" portfolio)
                         :dispatch-key [:var/data]}}))

(rf/reg-event-fx
  :get-portfolio-var
  (fn [{:keys [db]} [_ portfolio]]
    {:db (assoc db :var/portfolio portfolio)
     :http-get-dispatch {:url          (str static/server-address "var-data?portfolio=" portfolio)
                         :dispatch-key [:var/data]}}))

;SINGLE ATTRIBUTION
(rf/reg-event-fx
  :get-single-attribution
  (fn [{:keys [db]} [_ portfolio period]]
    {:http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" portfolio "&period=" period)
                         :dispatch-key [:single-portfolio-attribution/table]}}))

(rf/reg-event-fx
  :change-single-attribution-portfolio
  (fn [{:keys [db]} [_ portfolio]]
    {:db (assoc db :single-portfolio-attribution/portfolio portfolio)
     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" portfolio "&period=" (:single-portfolio-attribution/period db))
                         :dispatch-key [:single-portfolio-attribution/table]}}))

(rf/reg-event-fx
  :change-single-attribution-period
  (fn [{:keys [db]} [_ period]]
    {:db (assoc db :single-portfolio-attribution/period period)
     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" (:single-portfolio-attribution/portfolio db) "&period=" period)
                         :dispatch-key [:single-portfolio-attribution/table]}}))

;MULTIPLE ATTRIBUTION
(rf/reg-event-fx
  :get-multiple-attribution
  (fn [{:keys [db]} [_ target period]]
    {:http-get-dispatch {:url          (str static/server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" period)
                         :dispatch-key [:multiple-portfolio-attribution/table]}}))

(rf/reg-event-fx
  :change-multiple-attribution-target
  (fn [{:keys [db]} [_ ktarget]]
    (let [target (.replace ^string (get-in tables/attribution-table-columns [ktarget :accessor]) "-" " ")]
      {:db                (assoc db :multiple-portfolio-attribution/field-one ktarget)
       :http-get-dispatch {:url          (str static/server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" (:multiple-portfolio-attribution/period db))
                           :dispatch-key [:multiple-portfolio-attribution/table]}})))

(rf/reg-event-fx
  :change-multiple-attribution-period
  (fn [{:keys [db]} [_ period]]
    (let [target (.replace ^string (get-in tables/attribution-table-columns [(:multiple-portfolio-attribution/field-one db) :accessor]) "-" " ")]
      {:db                (assoc db :multiple-portfolio-attribution/period period)
       :http-get-dispatch {:url          (str static/server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" period)
                           :dispatch-key [:multiple-portfolio-attribution/table]}})))


;INDEX RETURNS
(rf/reg-event-fx
  :get-attribution-index-returns-portfolio
  (fn [{:keys [db]} [_ portfolio]]
    {:db (assoc db :attribution-index-returns/portfolio portfolio)
     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" portfolio "&period=" (:attribution-index-returns/period db))
                         :dispatch-key [:attribution-index-returns/table]}}))

(rf/reg-event-fx
  :get-attribution-index-returns-period
  (fn [{:keys [db]} [_ period]]
    {:db (assoc db :attribution-index-returns/period period)
     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" (:attribution-index-returns/portfolio db) "&period=" period)
                         :dispatch-key [:attribution-index-returns/table]}}))
