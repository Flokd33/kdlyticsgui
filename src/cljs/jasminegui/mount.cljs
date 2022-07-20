(ns jasminegui.mount
  (:require
    [jasminegui.static :as static]
    [re-frame.core :as rf]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [jasminegui.tables :as tables]
    [cljs-time.core :refer [today]]
    [jasminegui.tools :as t])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(def default-db {
                 ;data
                 :positions                                          []
                 :naked-positions                                    []
                 :instruments                                        {}
                 :rating-to-score                                    nil
                 :portfolios                                         []
                 :ex-emcd-portfolios                                 []
                 :total-positions                                    {}
                 :qt-date                                            ""
                 :attribution-date                                   ""
                 :country-codes                                      nil
                 :gb-reports                                         []
                 :gb-report-extract                                  []
                 :jpm-sectors                                        nil
                 :large-exposures                                    []

                 ;local-storage-cache
                 :naked-positions-last-timestamp                     nil
                 :quant-scores-last-timestamp                        nil

                 ;navigation
                 :navigation/active-view                             :entry ;:home
                 :navigation/active-home                             :summary
                 :navigation/active-var                              :overview
                 :navigation/active-qs                               :table
                 :navigation/active-attribution                      :summary
                 :navigation/active-scorecard                        :filter
                 :navigation/active                                  {:view        :entry
                                                                      :home        :summary
                                                                      :var         :overview
                                                                      :qs          :table
                                                                      :attribution :summary
                                                                      :scorecard   :filter}
                 :navigation/success-modal                           {:show false :on-close nil :response nil}
                 :esg/success-modal                                  {:show false :on-close nil :response nil}
                 :navigation/show-mounting-modal                     false ;

                 ;time machine
                 ;:time-machine/enabled                               false
                 ;:time-machine/date                                  (t/int-to-gdate 20191230)
                 ;:time-machine/model                                 "None"
                 ;:time-machine/has-rebuilt                           nil

                 ;single-portfolio view
                 :single-portfolio-risk/display-style                "Table"
                 :single-portfolio-risk/portfolio                    "OGEMCORD"
                 :single-portfolio-risk/filter                       {1 :region 2 :country 3 :issuer}
                 :single-portfolio-risk/hide-zero-holdings           true
                 :single-portfolio-risk/table-filter                 []
                 :single-portfolio-risk/expander                     {0 {}}
                 :single-portfolio-risk/shortcut                     1

                 ;multiple-portfolio view
                 :multiple-portfolio-risk/display-style              "Table"
                 :multiple-portfolio-risk/field-number               "One"
                 :multiple-portfolio-risk/field-one                  :nav
                 :multiple-portfolio-risk/field-two                  "None"
                 :multiple-portfolio-risk/selected-portfolios        (set nil)
                 :multiple-portfolio-risk/filter                     {1 :region 2 :country 3 :issuer}
                 :multiple-portfolio-risk/hide-zero-holdings         true
                 :multiple-portfolio-risk/shortcut                   1
                 :multiple-portfolio-risk/table-filter               []
                 :multiple-portfolio-risk/expander                   {0 {}}

                 ;portfolio-alignment-view
                 :portfolio-alignment/display-style                  "Tree"
                 :portfolio-alignment/field                          :nav
                 :portfolio-alignment/filter                         {1 :region 2 :country 3 :issuer}
                 :portfolio-alignment/group                          :cembi
                 :portfolio-alignment/threshold                      :zero
                 :portfolio-alignment/shortcut                       1
                 :portfolio-alignment/table-filter                   []
                 :portfolio-alignment/expander                       {0 {}}

                 ;var view
                 :var/portfolio                                      "OGEMCORD"
                 :var/result                                         nil
                 :var/proxies                                        nil
                 :var/history                                        nil
                 :var/data                                           nil
                 :var/dates                                          nil
                 :var/chart-period                                   :daily-3y

                 ;position-history
                 :position-history/portfolio                         "OGEMCORD"
                 :position-history/start-period                      "20211231"
                 :position-history/end-period                        "20220630"
                 :position-history/filter                            {1 :region 2 :country 3 :issuer}
                 :position-history/hide-zero-holdings                true
                 :position-history/table-filter                      []
                 :position-history/expander                          {0 {}}
                 :position-history/shortcut                          1
                 :position-history/display-style                     "Tree"
                 :position-history/field-one                         :nav
                 :position-history/breakdown                         "Start/End"
                 :position-history/absdiff                           :absolute
                 :position-history/data                              []


                 ;trade history
                 :trade-history/active-bond                          nil
                 :trade-history/history                              nil
                 :trade-history/active-home                          :single-portfolio

                 ;single-portfolio attribution
                 :single-portfolio-attribution/display-style         "Tree"
                 :single-portfolio-attribution/portfolio             "OGEMCORD"
                 :single-portfolio-attribution/filter                {1 :region 2 :country 3 :issuer}
                 :single-portfolio-attribution/period                "ytd"
                 :single-portfolio-attribution/table-filter          []
                 :single-portfolio-attribution/shortcut              1
                 :single-portfolio-attribution/table                 []
                 :single-portfolio-attribution/expander              {0 {}}

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
                 :multiple-portfolio-attribution/expander            {0 {}}
                 :multiple-portfolio-attribution/threshold           :zero

                 :attribution/summary                                []
                 :attribution/available-months                       []

                 :attribution-index-returns/portfolio                "OGEMCORD"
                 :attribution-index-returns/period                   "ytd"
                 :attribution-index-returns/x-filter                 :sector
                 :attribution-index-returns/y-filter                 :region
                 :attribution-index-returns/table                    []
                 :attribution-index-returns/x-top-15                 false

                 ;attribution-history
                 :attribution-history/portfolio                         "OGEMCORD"
                 :attribution-history/filter                            {1 :region 2 :country 3 :issuer}
                 :attribution-history/hide-zero-holdings                true
                 :attribution-history/table-filter                      []
                 :attribution-history/expander                          {0 {}}
                 :attribution-history/shortcut                          1
                 :attribution-history/display-style                     "Tree"
                 :attribution-history/field-one                         :total-effect
                 :attribution-history/report-type                       :yearly
                 :attribution-history/data                              []

                 :top-bottom-price-change                            []

                 :single-bond-trade-history/data                     []
                 :single-bond-trade-history/flat-data                []
                 :single-bond-trade-history/bond                     nil
                 :single-bond-trade-history/show-modal               false
                 :single-bond-trade-history/show-flat-modal          false
                 :single-bond-trade-history/show-throbber            false

                 :recent-trade-data/show-throbber                    false
                 :traded-since-date-output/flat-data                 []

                 :portfolio-trade-history/data                       []
                 :portfolio-trade-history/portfolio                  "OGEMCORD"
                 :portfolio-trade-history/start-date                 (t/int->gdate 20220101)
                 :portfolio-trade-history/end-date                   (t/int->gdate (today))
                 :portfolio-trade-history/performance                "Yes"
                 :portfolio-trade-history/fwd-return                 "No"
                 :portfolio-trade-history/pivot                      "No"
                 :portfolio-trade-history/comments                   "No"

                 :multiple-portfolio-trade-history/data              []
                 :multiple-portfolio-trade-history/start-date        (t/int->gdate 20220101)
                 :multiple-portfolio-trade-history/end-date          (t/int->gdate (today))
                 :multiple-portfolio-trade-history/pivot             "No"

                 :recent-trade-data/trades                           []
                 :traded-since-date-output/trades                    []
                 :recent-trade-data/date-from                        (t/int->gdate 20220101)
                 :recent-trade-data/date-to                          (t/int->gdate (today))
                 :recent-trade-data/sector                           "All"
                 :recent-trade-data/country                          "All"

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

                 :bond-price-history/price                           []
                 :bond-price-history/name                            []

                 :esg/refinitiv-ids                                  nil
                 :esg/active-home                                    :msci
                 :esg/selected-companies                             []
                 :esg/data                                           []
                 :esg/data-detailed                                  []
                 :esg/refinitiv-structure                            []
                 :esg/selected-pillars                               (set nil)
                 :esg/msci-scores                                    []
                 :esg/summary-report                                 []
                 :esg/engagements                                    []
                 :esg/security-notes                                 []
                 :esg/tamale-body                                    ""
                 :esg/engagement-throbber                            false
                 :esg/ungc-problem-securities                        []

                 :quant-model/model-output                           []
                 :quant-model/model-js-output                        #js []
                 :quant-model/bond-isin-map                          {}
                 :quant-model/calculator-spreads                     {:legacy nil :new nil :svr nil}
                 :quant-model/rating-curves                          []
                 :quant-model/rating-curves-sov-only                 []
                 :quant-model/generic-rating-curves                  {}
                 :quant-model/isin-history                           []
                 :quant-model/isin-history-2                         []
                 :quant-model/new-bond-entry                         nil
                 :quant-model/new-bond-tested                        true
                 :quant-model/new-bond-saved-message                 ""
                 :quant-model/new-bond-already-exists                false
                 :quant-model/saved-charts                           {}
                 :quant-model/saved-advanced-charts                  {}
                 :quant-model/issuer-coverage                        []
                 :quant-model/model-date                             ""


                 :quant-model/history-result                         []
                 :quant-model/history-result-prediction              []
                 :quant-model/history-result-curves-one              []
                 :quant-model/history-result-curves-two              []
                 :quant-model/history-throbber                       false
                 :quant-model/history-prediction-throbber            false
                 :quant-model/curves-throbber                        false
                 :quant-model/history-start-date                     (t/int->gdate 20150101)
                 ;:quant-model/history-end-date            (t/int-to-gdate (today))
                 :quant-model/master-security-current-field-db       {:id-choice "ISIN_REGS"}
                 :quant-model/master-security-update-field-db        {}



                 :model-portfolios/trades                            {}
                 :model-portfolios/hide-zeros                        false
                 :model-portfolios/aggregation                       "Region"

                 :scorecard/portfolio                                "OGEMCORD"
                 :scorecard/sector                                   nil ;"Consumer"
                 :scorecard/ogemcord-risk                            []
                 :scorecard/attribution-table                        []
                 :scorecard/trade-analyser-data                      nil
                 :scorecard/qdb-securities                           []
                 :scorecard/qdb-scores                               []
                 :scorecard/qdb-scores-previous                      []
                 :scorecard/latest-date                              nil
                 :scorecard/previous-date                            nil

                 :last-updated-logs                                  nil
                 :integrity                                          nil
                 :portfolio-checks                                   {}
                 :talanx-checks                                      {}

                 :analysts                                           nil

                 :master-security-fields-list                        nil

                 :ta2022/trade-view-position-and-performance-table   []
                 :ta2022/trade-isin                                  nil
                 :ta2022/trade-attachments                           []
                 :ta2022/trade-latest-targets-and-triggers           nil
                 :ta2022/trade-history                               {}
                 :ta2022/active-home                                 :main
                 :ta2022/main-table-data                             []
                 :ta2022/main-table-pivot                            "No"
                 :ta2022/main-table-show-relval-value                false
                 :ta2022/main-table-view-selector                    "Scorecard"
                 :ta2022/journal-data                                nil
                 :ta2022/show-modal                                  nil
                 :ta2022/test-result                                 nil
                 :ta2022/can-morph                                   false
                 :ta2022/implied-price-difference                    nil
                 :ta2022/upside-vs-downside                          0.0
                 :ta2022/throbber                                    false
                 :ta2022/filter                                      {:analyst nil :sector nil :country nil :portfolio nil}

                 :implementation/portfolio-nav                       nil
                 :implementation/fx                                  nil
                 :implementation/security-to-issuer-map              nil
                 :implementation/live-positions                      nil
                 :implementation/live-cast-parent-positions          nil
                 :implementation/implementation-list                 []

                 ; Trade implementation
                 :implementation/trade-implementation                nil
                 :implementation/show-implementation-selector        false
                 :implementation/success-modal                       {:show false :on-close nil :response nil}

                 :dummy                                              nil                                 ;can be useful
                 })

(rf/reg-event-db ::initialize-db (fn [_ _] default-db))
(doseq [k (keys default-db)] (rf/reg-sub k (fn [db] (k db))))


(doseq [k [:navigation/active-view
           :navigation/active-home
           :navigation/active-var
           :navigation/active-qs
           :navigation/active-attribution
           :navigation/active-scorecard
           :navigation/show-mounting-modal
           :rating-to-score
           :country-codes
           :gb-reports
           :jpm-sectors
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
           :single-portfolio-risk/expander
           
           :multiple-portfolio-risk/display-style
           :multiple-portfolio-risk/field-number
           :multiple-portfolio-risk/field-one
           :multiple-portfolio-risk/field-two
           :multiple-portfolio-risk/selected-portfolios
           :multiple-portfolio-risk/hide-zero-holdings
           ;:multiple-portfolio-risk/shortcut
           :multiple-portfolio-risk/table-filter
           :multiple-portfolio-risk/expander

           :portfolio-alignment/display-style
           :portfolio-alignment/field
           :portfolio-alignment/group
           :portfolio-alignment/threshold
           ;:portfolio-alignment/shortcut
           :portfolio-alignment/table-filter
           :portfolio-alignment/expander

           :position-history/portfolio
           :position-history/start-period
           :position-history/end-period
           :position-history/hide-zero-holdings
           :position-history/table-filter
           :position-history/expander
           :position-history/shortcut
           :position-history/display-style
           :position-history/breakdown
           :position-history/field-one
           :position-history/absdiff

           :attribution-history/portfolio
           :attribution-history/hide-zero-holdings
           :attribution-history/table-filter
           :attribution-history/expander
           :attribution-history/shortcut
           :attribution-history/display-style
           :attribution-history/field-one
           :attribution-history/report-type

           :single-portfolio-attribution/portfolio
           :single-portfolio-attribution/display-style
           :single-portfolio-attribution/period
           :single-portfolio-attribution/table-filter
           :single-portfolio-attribution/expander
           ;:single-portfolio-attribution/table

           :multiple-portfolio-attribution/display-style
           :multiple-portfolio-attribution/field-number
           :multiple-portfolio-attribution/field-one
           :multiple-portfolio-attribution/field-two
           :multiple-portfolio-attribution/selected-portfolios
           :multiple-portfolio-attribution/hide-zero-holdings
           :multiple-portfolio-attribution/shortcut
           :multiple-portfolio-attribution/table-filter
           :multiple-portfolio-attribution/expander
           :multiple-portfolio-attribution/period
           :multiple-portfolio-attribution/threshold


           :attribution/summary
           :attribution/available-months

           :attribution-index-returns/portfolio
           :attribution-index-returns/period
           :attribution-index-returns/x-filter
           :attribution-index-returns/y-filter
           :attribution-index-returns/table
           :attribution-index-returns/x-top-15

           :top-bottom-price-change

           :single-bond-trade-history/show-flat-modal
           :single-bond-trade-history/show-modal
           :single-bond-trade-history/bond
           :single-bond-trade-history/show-throbber

           :recent-trade-data/show-throbber

           :portfolio-trade-history/portfolio
           :portfolio-trade-history/start-date
           :portfolio-trade-history/end-date
           :portfolio-trade-history/performance
           :portfolio-trade-history/fwd-return
           :portfolio-trade-history/comments
           :portfolio-trade-history/pivot

           :multiple-portfolio-trade-history/start-date
           :multiple-portfolio-trade-history/end-date
           :multiple-portfolio-trade-history/pivot

           :recent-trade-data/trades
           :traded-since-date-output/trades
           :recent-trade-data/date-from
           :recent-trade-data/date-to
           :recent-trade-data/country
           :recent-trade-data/sector

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
           :esg/msci-scores
           :esg/summary-report
           :esg/engagements
           :esg/security-notes
           :esg/tamale-body
           :esg/ungc-problem-securities

           :trade-history/active-home

           :quant-model/calculator-spreads
           :quant-model/rating-curves
           :quant-model/rating-curves-sov-only
           :quant-model/generic-rating-curves
           :quant-model/isin-history
           :quant-model/isin-history-2
           :quant-model/new-bond-tested
           :quant-model/new-bond-already-exists
           :quant-model/new-bond-saved-message
           :quant-model/saved-charts
           :quant-model/saved-advanced-charts
           :quant-model/issuer-coverage
           :quant-model/model-date
           :quant-model/history-start-date

           :scorecard/attribution-table
           :scorecard/portfolio
           :scorecard/sector
           :scorecard/trade-analyser-data
           :scorecard/qdb-securities
           :scorecard/qdb-scores
           :scorecard/qdb-scores-previous
           :scorecard/latest-date
           :scorecard/previous-date

           ;:time-machine/enabled
           ;:time-machine/date
           ;:time-machine/model

           :model-portfolios/trades
           :model-portfolios/hide-zeros
           :model-portfolios/aggregation

           :last-updated-logs
           :integrity
           :portfolio-checks
           :talanx-checks

           :analysts

           :master-security-fields-list
           :quant-model/master-security-current-field-db
           :quant-model/master-security-update-field-db

           :ta2022/trade-isin
           :ta2022/trade-attachments
           :ta2022/trade-view-position-and-performance-table
           :ta2022/trade-latest-targets-and-triggers
           :ta2022/trade-history
           :ta2022/active-home
           :ta2022/throbber
           :ta2022/main-table-pivot
           :ta2022/main-table-show-relval-value
           :ta2022/main-table-view-selector
           :ta2022/show-modal
           :ta2022/test-result
           :ta2022/can-morph
           :ta2022/implied-price-difference
           :ta2022/upside-vs-downside
           :ta2022/journal-data

           ; Trade implementation
           :implementation/show-implementation-selector
           :implementation/implementation-list
           :implementation/portfolio-nav
           :implementation/fx
           :implementation/live-cast-parent-positions

           :dummy

           ]] (rf/reg-event-db k (fn [db [_ data]] (assoc db k data))))

(rf/reg-event-db
  :navigation/active
  (fn [db [_ page sub-page]] (assoc-in db [:navigation/active page] sub-page)))

(rf/reg-event-db
  :single-portfolio-attribution/table
  (fn [db [_ data]] (assoc db :single-portfolio-attribution/table data :navigation/show-mounting-modal false)))

(rf/reg-event-db
  :multiple-portfolio-attribution/table
  (fn [db [_ data]] (assoc db :multiple-portfolio-attribution/table data :navigation/show-mounting-modal false)))

(defn array-of-lists->records-stable [data]
  (let [model (into {} (for [[k v] data] [k (vec v)]))]
    (mapv #(into {} (for [k (keys model)] [k (nth (model k) %)]))
          (range (count (model (first (keys model))))))))

(defn array-of-lists->records
  "Converts transit [[:key1 [values]] [:key2 [values]]] to [{:key1 val01 :key2 val02} {:key1 val11 :key2 val12}]
  This implementation is about 10-15% than the above."
  [data]
  (let [ks (mapv first data)                                ;mapv faster than map
        values (mapv vec (mapv second data))                ;mapv faster than map, but transducer fails for some reason
        n (count (first values))]
    (loop [i 0 records (transient [])]                      ;using transients. Atom failed on memory.
      (if (< i n)
        (recur (inc i) (conj! records (zipmap ks (mapv #(nth % i) values)))) ;mapv faster than map
        (persistent! records)))))


(rf/reg-event-db
  :quant-model/history-result
  (fn [db [_ data]] (assoc db :quant-model/history-result (array-of-lists->records data)
                              :quant-model/history-throbber false
                              :quant-model/curves-throbber false
                              )))

(rf/reg-event-db
  :quant-model/history-result-prediction
  (fn [db [_ data]] (assoc db :quant-model/history-result-prediction (array-of-lists->records data)
                              :quant-model/history-prediction-throbber false
                              )))

(rf/reg-event-db
  :quant-model/history-result-curves-one
  (fn [db [_ data]] (assoc db :quant-model/history-result-curves-one  (array-of-lists->records data)
                              :quant-model/curves-throbber false
                              )))

(rf/reg-event-db
  :quant-model/history-result-curves-two
  (fn [db [_ data]] (assoc db :quant-model/history-result-curves-two  (array-of-lists->records data)
                              :quant-model/curves-throbber false
                              )))

;(rf/reg-event-db
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
  :naked-positions
  (fn [{:keys [db]} [_ naked-positions]]
    (let [res (array-of-lists->records naked-positions)
          positions (if (and (= (:positions db) []) (:instruments db)) (mapv #(merge % (get-in db [:instruments (:id %)])) res))]
      {:db (assoc db :naked-positions res
                     :navigation/show-mounting-modal false
                     :positions positions
                     :implementation/live-positions (into {} (for [[p g] (group-by :portfolio positions)]
                                                               [p (into {} (for [line g :when (and (some? (:isin line)) (pos? (:weight line)))] [(:isin line) (* 100. (:weight line))]))]))
                     )
       ;fx below is tricky - this is so at mount you can go to quant screen then right click implementation. Probably a better way to do this
       :fx (let [isin (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs 0 :ISIN])]
             (if (and (some? isin) (not= isin "NEW ISSUE")) [[:dispatch [:implementation/on-isin-change 0 isin]]] []))
       })))



(rf/reg-event-fx
  :instruments
  (fn [{:keys [db]} [_ instruments]]
    (let [positions (if (and (= (:positions db) []) (:naked-positions db)) (mapv #(merge % (get-in db [:instruments (:id %)])) (:naked-positions db)))]
      {:db (assoc db :all-instrument-ids (keys instruments)
                     :instruments instruments
                     :positions positions
                     :implementation/live-positions (into {} (for [[p g] (group-by :portfolio positions)]
                                                               [p (into {} (for [line g :when (and (some? (:isin line)) (pos? (:weight line)))] [(:isin line) (* 100. (:weight line))]))]))
                     )})))

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
    (let [mo (array-of-lists->records model)]
      (assoc db
        :quant-model/model-output mo
        :quant-model/model-js-output (clj->js mo)           ;we do that once it's fast enough
        :navigation/show-mounting-modal false
        ;:quant-model/bond-isin-map (merge bond-isin (clojure.set/map-invert bond-isin))
        ))))

;(rf/reg-event-db
;  :positions-new
;  (fn [db [_ portfolio positions]]
;    (-> db
;        (assoc-in [:positions-new portfolio] positions)
;        (assoc :navigation/show-mounting-modal false))))

(rf/reg-event-db
  :portfolios
  (fn [db [_ portfolios]]
    (assoc db :portfolios portfolios
              :multiple-portfolio-risk/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :cembi)) static/portfolio-alignment-groups)))) ;(disj (set portfolios) "OGEMHCD" "IUSSEMD" "OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE")
              :multiple-portfolio-attribution/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :cembi)) static/portfolio-alignment-groups)))) ;(disj (set portfolios) "OGEMHCD" "IUSSEMD" "OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE")
              )))

(doseq [k [:single-portfolio-risk/filter
           :multiple-portfolio-risk/filter
           :portfolio-alignment/filter
           :single-portfolio-attribution/filter
           :multiple-portfolio-attribution/filter
           :position-history/filter
           :attribution-history/filter
           ]]
  (rf/reg-event-db k (fn [db [_ id f]] (assoc-in db [k id] f))))

(rf/reg-event-db
  :qt-date
  (fn [db [_ qt-date]] (let [dt (.replace ^string qt-date "\"" "")]
                         (assoc db :qt-date dt
                                   ;:position-history/end-period (str (subs dt 0 (- (count dt) 4)) (subs dt (- (count dt) 2)))
                                   ))))

(rf/reg-event-db
  :attribution-date
  (fn [db [_ attribution-date]] (assoc db :attribution-date (.replace ^string attribution-date "\"" ""))))

;THIS IS A DUMMY - IN PRACTICE WE'D DO MORE THINGS HERE
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
                  :single-portfolio-risk/filter {1 :country 2 :issuer 3 "None"})
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
      3 (assoc db :portfolio-alignment/shortcut snapshot)
      4 (assoc db :portfolio-alignment/shortcut snapshot))))

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
  (let [vr (if (vector? request) request [request])]
    (doseq [r vr]
      (go (let [response (<! (http/get (:url r)))]
            (rf/dispatch (conj (:dispatch-key r) (:body response)))
            (if (:flag r) (rf/dispatch [(:flag r) (:flag-value r)])))))))

(rf/reg-fx :http-get-dispatch http-get-dispatch)

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


;(defn http-json-post-dispatch [request]
;  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
;  (go (let [response (<! (http/post (:url request) {:json-params (:json-params request)}))]
;        (rf/dispatch (conj (:dispatch-key request) (:body response)))
;        (if (:flag request) (rf/dispatch [(:flag request) (:flag-value request)])))))

(rf/reg-fx :http-json-post-dispatch http-post-dispatch)

(defn http-put-dispatch [request]
  (go (let [response (<! (http/post (:url request) {:multipart-params (:multipart-params request)}))]
        (rf/dispatch (conj (:dispatch-key request) (:body response)))
        (if (:flag request) (rf/dispatch [(:flag request) (:flag-value request)])))))

(rf/reg-fx :http-put-dispatch http-put-dispatch)


(def simple-http-get-events
  [                                                         ;{:get-key :get-positions           :url-tail "positions"           :dis-key :positions :mounting-modal true}
   ;{:get-key :get-positions           :url-tail "position-array"           :dis-key :positions :mounting-modal true}
   ;{:get-key :get-positions           :url-tail "position-transit-array"           :dis-key :positions :mounting-modal true}
   {:get-key :get-naked-positions     :url-tail "naked-position-transit-array"           :dis-key :naked-positions :mounting-modal true}
   {:get-key :get-instruments         :url-tail "instruments"           :dis-key :instruments}
   {:get-key :get-rating-to-score     :url-tail "rating-to-score"     :dis-key :rating-to-score}
   {:get-key :get-portfolios          :url-tail "portfolios"          :dis-key :portfolios}
   ;{:get-key :get-pivoted-positions   :url-tail "pivoted-positions"   :dis-key :pivoted-positions}
   ;{:get-key :get-pivoted-positions   :url-tail "pivoted-position-array"   :dis-key :pivoted-positions}
   {:get-key :get-total-positions     :url-tail "total-positions"     :dis-key :total-positions}
   {:get-key :get-qt-date             :url-tail "qt-date"             :dis-key :qt-date}
   {:get-key :get-model-date          :url-tail "model-date"          :dis-key :quant-model/model-date}
   {:get-key :get-large-exposures     :url-tail "large-exposures"     :dis-key :large-exposures}
   {:get-key :get-var-proxies         :url-tail "var-proxies"         :dis-key :var/proxies}
   {:get-key :get-var-dates           :url-tail "var-dates"           :dis-key :var/dates}
   {:get-key :get-betas               :url-tail "beta-table"          :dis-key :betas/table}
   {:get-key :get-refinitiv-ids       :url-tail "refinitiv-ids"       :dis-key :esg/refinitiv-ids}
   {:get-key :get-refinitiv-structure :url-tail "refinitiv-structure" :dis-key :esg/refinitiv-structure}
   ;{:get-key :get-quant-model         :url-tail "quant-model-output"  :dis-key :quant-model/model-output :mounting-modal true}
   ;{:get-key :get-quant-model         :url-tail "quant-model-output-array"  :dis-key :quant-model/model-output :mounting-modal true}
   {:get-key :get-quant-model         :url-tail "quant-model-output-transit-array"  :dis-key :quant-model/model-output :mounting-modal true}
   {:get-key :get-quant-rating-curves :url-tail "quant-rating-curves" :dis-key :quant-model/rating-curves}
   {:get-key :get-quant-rating-curves-sov-only :url-tail "quant-rating-curves-sov-only" :dis-key :quant-model/rating-curves-sov-only}
   {:get-key :get-issuer-coverage               :url-tail "issuer-coverage"              :dis-key :quant-model/issuer-coverage}
   {:get-key :get-generic-rating-curves :url-tail "quant-generic-rating-curves" :dis-key :quant-model/generic-rating-curves}
   {:get-key :get-country-codes       :url-tail "countries"           :dis-key :country-codes}
   {:get-key :get-jpm-sectors     :url-tail "jpm-sectors"     :dis-key :jpm-sectors}
   ;{:get-key :get-time-machine-status :url-tail "time-machine-status" :dis-key :time-machine-status}
   {:get-key :get-attribution-date    :url-tail "attribution?query-type=attribution-date" :dis-key :attribution-date}
   {:get-key :get-attribution-summary    :url-tail "attribution?query-type=summary" :dis-key :attribution/summary}
   {:get-key :get-attribution-available-months    :url-tail "attribution?query-type=available-months" :dis-key :attribution/available-months}
   {:get-key :get-model-portfolios    :url-tail "model-portfolios" :dis-key :model-portfolios/trades}
   {:get-key :get-msci-scores    :url-tail "msci-scores" :dis-key :esg/msci-scores}
   {:get-key :get-last-updated-logs    :url-tail "last-updated" :dis-key :last-updated-logs}
   {:get-key :get-integrity    :url-tail "integrity" :dis-key :integrity}
   {:get-key :get-portfolio-checks    :url-tail "portfolio-checks" :dis-key :portfolio-checks}
   {:get-key :get-talanx-checks    :url-tail "talanx-checks" :dis-key :talanx-checks}
   {:get-key :get-analysts    :url-tail "analysts" :dis-key :analysts}
   {:get-key :get-gb-reports    :url-tail "gb-reports" :dis-key :gb-reports}
   {:get-key :get-esg-summary-report :url-tail "esg-summary-report" :dis-key :esg/summary-report}
   {:get-key :get-ungc-problem-securities :url-tail "ungc-problem-securities" :dis-key :esg/ungc-problem-securities}
   {:get-key :get-top-bottom-price-change :url-tail "top_bottom_price_change" :dis-key  :top-bottom-price-change}


   {:get-key :implementation-list-request         :url-tail "trade-implementation-list"   :dis-key :implementation/implementation-list}
   {:get-key :portfolio-nav-request               :url-tail "portfolio-nav"               :dis-key :implementation/portfolio-nav}
   {:get-key :fx-request                          :url-tail "fx"                          :dis-key :implementation/fx}
   ;{:rfk :security-to-issuer-map-request      :addr "security-to-issuer-map"      :dk :implementation/security-to-issuer-map}
   ;{:rfk :live-positions-request              :addr "live-positions"              :dk :live-positions}
   {:get-key :live-cast-parent-positions-request  :url-tail "live-parent-positions"       :dis-key :implementation/live-cast-parent-positions}
   {:get-key :get-master-security-fields :url-tail "master-security-fields-list" :dis-key :master-security-fields-list}

   ])



(doseq [line simple-http-get-events]
  (rf/reg-event-fx
    (:get-key line)
    (fn [{:keys [db]} [_]]
      (if (zero? (count (get-in db [(:dis-key line)])))     ;if it wasn't mounted yet we need to load it
        {:db (if (:mounting-modal line) (assoc db :navigation/show-mounting-modal true) db) ;some events take time, let's show a throbber
         :http-get-dispatch {:url           (str static/server-address (:url-tail line))
                             :dispatch-key  [(:dis-key line)]}}))))


(rf/reg-event-fx
  :check-naked-positions-timestamp
  (fn [{:keys [db]} [_ last-updated]]
    (let [last-position-timestamp (first (get last-updated :jasmine.positions/positions))]
      ;(println "last-position-timestamp" last-position-timestamp)
      (if (= last-position-timestamp (db :naked-positions-last-timestamp))
        (let [res (array-of-lists->records (t/local-storage-get-item "naked-positions"))
              positions (mapv #(merge % (get-in db [:instruments (:id %)])) res)]
          {:db (assoc db :naked-positions res
                         :navigation/show-mounting-modal false
                         :positions positions
                         :naked-positions-last-timestamp last-position-timestamp)}))
      {:db (assoc db :navigation/show-mounting-modal true)
       :http-get-dispatch {:url           (str static/server-address "naked-position-transit-array")
                           :dispatch-key  [:naked-positions]}})))


(rf/reg-event-fx
  :get-naked-positions-timestamp
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str static/server-address "last-updated")
                         :dispatch-key [:check-naked-positions-timestamp]}}))




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
    {:db (assoc db :single-portfolio-attribution/portfolio portfolio :navigation/show-mounting-modal true)
     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" portfolio "&period=" (:single-portfolio-attribution/period db))
                         :dispatch-key [:single-portfolio-attribution/table]}}))

(rf/reg-event-fx
  :change-single-attribution-period
  (fn [{:keys [db]} [_ period]]
    {:db (assoc db :single-portfolio-attribution/period period  :navigation/show-mounting-modal true)
     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" (:single-portfolio-attribution/portfolio db) "&period=" period)
                         :dispatch-key [:single-portfolio-attribution/table]}}))

;MULTIPLE ATTRIBUTION
(rf/reg-event-fx
  :get-multiple-attribution
  (fn [{:keys [db]} [_ target period]]
    {:db (assoc db  :navigation/show-mounting-modal true)
     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" period)
                         :dispatch-key [:multiple-portfolio-attribution/table]}}))

(rf/reg-event-fx
  :change-multiple-attribution-target
  (fn [{:keys [db]} [_ ktarget]]
    (let [target (.replace ^string (get-in tables/attribution-table-columns [ktarget :accessor]) "-" " ")]
      {:db                (assoc db :multiple-portfolio-attribution/field-one ktarget  :navigation/show-mounting-modal true)
       :http-get-dispatch {:url          (str static/server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" (:multiple-portfolio-attribution/period db))
                           :dispatch-key [:multiple-portfolio-attribution/table]}})))

(rf/reg-event-fx
  :change-multiple-attribution-period
  (fn [{:keys [db]} [_ period]]
    (let [target (.replace ^string (get-in tables/attribution-table-columns [(:multiple-portfolio-attribution/field-one db) :accessor]) "-" " ")]
      {:db                (assoc db :multiple-portfolio-attribution/period period  :navigation/show-mounting-modal true)
       :http-get-dispatch {:url          (str static/server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" period)
                           :dispatch-key [:multiple-portfolio-attribution/table]}})))

;scorecard

(rf/reg-event-fx
  :get-scorecard-attribution
  (fn [{:keys [db]} [_ portfolio]]
    {:http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio-wtd-ytd&portfolio=" portfolio)
                         :dispatch-key [:scorecard/attribution-table]}}))

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
