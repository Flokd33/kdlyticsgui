;(rf/reg-event-fx
;  :check-naked-positions-timestamp
;  (fn [{:keys [db]} [_ last-updated]]
;    (let [last-position-timestamp (first (get last-updated :jasmine.positions/positions))]
;      ;(println "last-position-timestamp" last-position-timestamp)
;      (if (= last-position-timestamp (db :naked-positions-last-timestamp))
;        (let [res (array-of-lists->records (t/local-storage-get-item "naked-positions"))
;              positions (mapv #(merge % (get-in db [:instruments (:id %)])) res)]
;          {:db (assoc db :naked-positions res
;                         :navigation/show-mounting-modal false
;                         :positions positions
;                         :naked-positions-last-timestamp last-position-timestamp)}))
;      {:db (assoc db :navigation/show-mounting-modal true)
;       :http-get-dispatch {:url           (str static/server-address "naked-position-transit-array")
;                           :dispatch-key  [:naked-positions]}})))


(ns kdlyticsgui.mount
  (:require
    [kdlyticsgui.static :as static]
    [re-frame.core :as rf]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [cljs-time.core :refer [today]]
    ;[jasminegui.tools :as t]
    ;[tech.v3.dataset :as ds]
    )
  (:require-macros [cljs.core.async.macros :refer [go]]))
;
;(def default-db {
;                 ;global parameters
;                 :rot13                                             false
;                 ;data
;                 :test-data                                           nil
;                 :positions                                          []
;                 ;:positions-ds                                       (ds/->dataset nil)
;                 :naked-positions                                    []
;                 :instruments                                        {}
;                 :rating-to-score                                    nil
;                 :portfolios                                         []
;                 :portfolios-grp                                         []
;                 :portfolio-dropdown-map                             {}
;                 :ex-emcd-portfolios                                 []
;                 :total-positions                                    {}
;                 :qt-date                                            ""
;                 :attribution-date                                   ""
;                 :country-codes                                      nil
;                 :esg-report-list                                     []
;                 :esg-report-extract                                  []
;                 :jpm-sectors                                        nil
;                 :large-exposures                                    []
;
;                 :check-cash-proxy                                    []
;                 :check-coverage                                      []
;                 :check-missing-trades                                []
;                 :check-long-trades                                   []
;                 :check-trade-avg-life                                []
;                 :check-trigger-rate []
;
;                 :factsheet/cre                                       []
;                 :knowledge/selected-mandate                          ""
;                 :knowledge/mandate-description                       ""
;
;                 ;local-storage-cache
;                 :naked-positions-last-timestamp                     nil
;                 :quant-scores-last-timestamp                        nil
;
;                 ;navigation
;                 :navigation/active-view                             :entry ;:home
;                 :navigation/active-knowledge                        :mandates
;                 :navigation/active-home                             :summary
;                 :navigation/active-var                              :overview
;                 :navigation/active-qs                               :table
;                 :navigation/active-attribution                      :summary
;                 :navigation/active-scorecard                        :filter
;                 :navigation/active                                  {:view        :entry
;                                                                      :home        :summary
;                                                                      :var         :overview
;                                                                      :qs          :table
;                                                                      :attribution :summary
;                                                                      :scorecard   :filter}
;                 :navigation/success-modal                           {:show false :on-close nil :response nil}
;                 :esg/success-modal                                  {:show false :on-close nil :response nil}
;                 :navigation/success-compile                         {:show false :on-close nil :response nil}
;                 :navigation/show-mounting-modal                     false ;
;
;                 ;time machine
;                 ;:time-machine/enabled                               false
;                 ;:time-machine/date                                  (t/int-to-gdate 20191230)
;                 ;:time-machine/model                                 "None"
;                 ;:time-machine/has-rebuilt                           nil
;
;                 ;single-portfolio view
;                 :single-portfolio-risk/display-style                "Table"
;                 :single-portfolio-risk/portfolio                    "OGEMCORD"
;                 :single-portfolio-risk/filter                       {1 :region 2 :country 3 :issuer}
;                 :single-portfolio-risk/hide-zero-holdings           true
;                 :single-portfolio-risk/table-filter                 []
;                 :single-portfolio-risk/expander                     {0 {}}
;                 :single-portfolio-risk/shortcut                     1
;
;                 ;multiple-portfolio view
;                 :multiple-portfolio-risk/display-style              "Table"
;                 :multiple-portfolio-risk/field-number               "One"
;                 :multiple-portfolio-risk/field-one                  :nav
;                 :multiple-portfolio-risk/field-two                  "None"
;                 :multiple-portfolio-risk/selected-portfolios        #{}
;                 :multiple-portfolio-risk/filter                     {1 :region 2 :country 3 :issuer}
;                 :multiple-portfolio-risk/hide-zero-holdings         true
;                 :multiple-portfolio-risk/shortcut                   1
;                 :multiple-portfolio-risk/table-filter               []
;                 :multiple-portfolio-risk/expander                   {0 {}}
;
;                 ;portfolio-alignment-view
;                 :portfolio-alignment/display-style                  "Tree"
;                 :portfolio-alignment/field                          :nav
;                 :portfolio-alignment/filter                         {1 :sector 2 :country 3 "None"}
;                 :portfolio-alignment/group                          :cembi
;                 :portfolio-alignment/threshold                      :zero
;                 :portfolio-alignment/shortcut                       3
;                 :portfolio-alignment/table-filter                   []
;                 :portfolio-alignment/expander                       {0 {}}
;
;                 :multiple-ir-risk/selected-portfolios              #{}
;
;                 ;var view
;                 :var/portfolio                                      "OGEMCORD"
;                 :var/result                                         nil
;                 :var/proxies                                        nil
;                 :var/history                                        nil
;                 :var/data                                           nil
;                 :var/dates                                          nil
;                 :var/chart-period                                   :daily-3y
;
;                 :stresstest/scenarios                                []
;                 :stresstest/results                                []
;                 :stresstest/selected-portfolios                    #{"OGEMCORD" "OGEMIGC"}
;
;                 ;position-history
;                 :portfolio-history/portfolio                         "OGEMCORD"
;                 :portfolio-history/start-period                      "20221230"
;                 :portfolio-history/end-period                        "20220831"
;                 :portfolio-history/filter                            {1 :region 2 :country 3 :issuer}
;                 :portfolio-history/hide-zero-holdings                true
;                 :portfolio-history/table-filter                      []
;                 :portfolio-history/expander                          {0 {}}
;                 :portfolio-history/shortcut                          1
;                 :portfolio-history/display-style                     "Tree"
;                 :portfolio-history/field-one                         :nav
;                 :portfolio-history/breakdown                         "Start/End"
;                 :portfolio-history/absdiff                           :absolute
;                 :portfolio-history/data                              []
;
;                 :position-history/portfolio                    "OGEMCORD"
;                 :position-history/data                          []
;                 :position-history/isin                          ""
;                 :position-history/nickname                      ""
;                 :position-history/start-year                     "2018"
;                 :position-history/view                          :aggregate
;                 :position-history/throbber                       false
;
;
;                 ;trade history
;                 :trade-history/active-bond                          nil
;                 :trade-history/history                              nil
;                 :trade-history/active-home                          :single-portfolio
;
;                 ;single-portfolio attribution
;                 :single-portfolio-attribution/display-style         "Tree"
;                 :single-portfolio-attribution/portfolio             "OGEMCORD"
;                 :single-portfolio-attribution/filter                {1 :region 2 :country 3 :issuer}
;                 :single-portfolio-attribution/period                "ytd"
;                 :single-portfolio-attribution/table-filter          []
;                 :single-portfolio-attribution/shortcut              1
;                 :single-portfolio-attribution/table                 []
;                 :single-portfolio-attribution/expander              {0 {}}
;
;                 ;multiple-portfolio attribution
;                 :multiple-portfolio-attribution/display-style       "Tree"
;                 :multiple-portfolio-attribution/field-number        "One"
;                 :multiple-portfolio-attribution/period              "ytd"
;                 :multiple-portfolio-attribution/field-one           :total-effect
;                 :multiple-portfolio-attribution/field-two           "None"
;                 :multiple-portfolio-attribution/selected-portfolios #{}
;                 :multiple-portfolio-scorecard/selected-portfolios   #{"OGEMCORD" "ICSCEMCD" "IVGVEMCD" "IEZVKEMD" "IKZVKEMD"  "IALEEMCD" "IAKLEMCD" "IAUNEMCD"  "IAPKEMCD" "OGEMIGC" "ICIFEMD" "IKPOEMCD" "IYELEMCD"}
;                 :multiple-portfolio-attribution/filter              {1 :region 2 :country 3 :issuer}
;                 :multiple-portfolio-attribution/shortcut            1
;                 :multiple-portfolio-attribution/table-filter        []
;                 :multiple-portfolio-attribution/table               []
;                 :multiple-portfolio-attribution/expander            {0 {}}
;                 :multiple-portfolio-attribution/threshold           :zero
;
;                 :attribution/summary                                []
;                 :attribution/available-months                       []
;                 :attribution/emd-weekly                              []
;
;                 :attribution-index-returns/portfolio                "OGEMCORD"
;                 :attribution-index-returns/period                   "ytd"
;                 :attribution-index-returns/x-filter                 :sector
;                 :attribution-index-returns/y-filter                 :region
;                 :attribution-index-returns/table                    []
;                 :attribution-index-returns/x-top-15                 false
;
;                 ;attribution-history
;                 :attribution-history/portfolio                         "OGEMCORD"
;                 :attribution-history/filter                            {1 :region 2 :country 3 :issuer}
;                 :attribution-history/hide-zero-holdings                true
;                 :attribution-history/table-filter                      []
;                 :attribution-history/expander                          {0 {}}
;                 :attribution-history/shortcut                          1
;                 :attribution-history/display-style                     "Tree"
;                 :attribution-history/field-one                         :total-effect
;                 :attribution-history/report-type                       :yearly
;                 :attribution-history/data                              []
;
;                 :attribution-analytics/portfolio                       "IMRAGEMD"
;                 :attribution-analytics/month-end                       "20221231"
;                 :attribution-analytics/period                          "quarterly"
;                 :attribution-analytics/data                            []
;                 :list-dates-month-end-calendar                        []
;
;                 :top-bottom-price-change                            []
;                 :list-dates-position-history                        []
;
;                 :single-bond-trade-history/data                     []
;                 :single-bond-trade-history/flat-data                []
;                 :single-bond-trade-history/bond                     nil
;                 :single-bond-trade-history/show-modal               false
;                 :single-bond-trade-history/show-flat-modal          false
;                 :single-bond-trade-history/show-throbber            false
;
;                 :recent-trade-data/show-throbber                    false
;                 :traded-since-date-output/flat-data                 []
;
;                 :portfolio-trade-history/data                       []
;                 :portfolio-trade-history/portfolio                  "OGEMCORD"
;                 :portfolio-trade-history/start-date                 (t/int->gdate 20230101)
;                 :portfolio-trade-history/end-date                   (t/int->gdate (today))
;                 :portfolio-trade-history/performance                "Yes"
;                 :portfolio-trade-history/fwd-return                 "No"
;                 :portfolio-trade-history/pivot                      "No"
;                 :portfolio-trade-history/comments                   "No"
;
;                 :multiple-portfolio-trade-history/data              []
;                 :multiple-portfolio-trade-history/start-date        (t/int->gdate 20230101)
;                 :multiple-portfolio-trade-history/end-date          (t/int->gdate (today))
;                 :multiple-portfolio-trade-history/pivot             "No"
;
;                 :recent-trade-data/trades                           []
;                 :traded-since-date-output/trades                    []
;                 :recent-trade-data/date-from                        (t/int->gdate 20230101)
;                 :recent-trade-data/date-to                          (t/int->gdate (today))
;                 :recent-trade-data/sector                           "All"
;                 :recent-trade-data/country                          "All"
;
;                 :portfolio-review/portfolio                         "OGEMCORD"
;                 :portfolio-review/active-tab                        :summary
;                 :portfolio-review/summary-data                      nil
;                 :portfolio-review/contribution-chart-data           nil
;                 :portfolio-review/alpha-chart-data                  nil
;                 :portfolio-review/jensen-chart-data                 nil
;                 :portfolio-review/marginal-beta-chart-data          nil
;                 :portfolio-review/historical-beta-chart-data        nil
;                 :portfolio-review/historical-performance-chart-data nil
;
;                 :betas/table                                        nil
;
;                 :bond-price-history/price                           []
;                 :bond-price-history/name                            []
;
;                 :esg/refinitiv-ids                                  nil
;                 :esg/active-home                                    :esg-data
;                 :esg/selected-companies                             []
;                 :esg/data                                           []
;                 :esg/data-detailed                                  []
;                 :esg/refinitiv-structure                            []
;                 :esg/selected-pillars                               #{}
;                 :esg/msci-scores                                    nil
;                 :esg/summary-report                                 []
;                 :esg/gb-analytics                                   []
;                 :esg/tf-analytics                                   []
;                 :esg/engagements                                    []
;                 :esg/security-notes                                 []
;                 :esg/tamale-body                                    ""
;                 :esg/engagement-throbber                            false
;                 :esg/ungc-problem-securities                        []
;                 :esg/msci-ccc-weight                                []
;                 :esg/analyst-commentary                             []
;                 :esg/carbon-jasmine                                 []
;
;                 :trounce-flow-date                                  ""
;
;                 :trounce-flow-cash                                  []
;                 :trounce-flow-cash-embi                             []
;                 :trounce-flow-cash-embi-local                       []
;                 :trounce-flow-cash-embi-jaci                        []
;
;                 :trounce-flow-duration                              []
;                 :trounce-flow-duration-embi-local                   []
;                 :trounce-flow-duration-embi                         []
;
;                 :trounce-flow-country                               []
;                 :trounce-flow-country-embi                          []
;                 :trounce-flow-country-embi-local                    []
;                 :trounce-flow-country-jaci                          []
;
;                 :trounce-flow-country-change                        []
;                 :trounce-flow-country-change-embi                   []
;                 :trounce-flow-country-change-embi-local             []
;                 :trounce-flow-country-change-jaci                   []
;
;                 :trounce-flow-rating                                []
;                 :trounce-flow-rating-embi                           []
;                 :trounce-flow-rating-embi-local                     []
;                 :trounce-flow-rating-jaci                           []
;
;                 :esg/esg-report-selected                           "GB_AYDEMT27_2022-09-02"
;                 :esg/gb-isin                                       "XS2368781477"
;                 :esg/date                                          "2022-09-02"
;                 :esg/report-type                                   "green-bond"
;                 :esg/elig                                           "No"
;
;                 :quant-model/model-output                           []
;                 ;:quant-model/model-output-ds                        (ds/->dataset nil)
;                 :quant-model/model-js-output                        #js []
;                 :quant-model/model-overrides                        {}
;                 :quant-model/bond-isin-map                          {}
;                 :quant-model/calculator-spreads                     {:legacy nil :new nil :svr nil}
;                 :quant-model/rating-curves                          []
;                 :quant-model/rating-curves-sov-only                 []
;                 :quant-model/generic-rating-curves                  {}
;                 :quant-model/isin-history                           []
;                 :quant-model/isin-history-2                         []
;                 :quant-model/new-bond-entry                         nil
;                 :quant-model/new-bond-tested                        true
;                 :quant-model/new-bond-saved-message                 ""
;                 :quant-model/new-bond-already-exists                false
;                 :quant-model/saved-charts                           {}
;                 :quant-model/saved-advanced-charts                  {}
;                 :quant-model/issuer-coverage                        []
;                 :quant-model/analyst-coverage                       []
;                 :quant-model/model-date                             ""
;
;
;                 :quant-model/history-result                         []
;                 :quant-model/history-result-prediction              []
;                 :quant-model/history-result-curves-one              []
;                 :quant-model/history-result-curves-two              []
;                 :quant-model/history-throbber                       false
;                 :quant-model/history-prediction-throbber            false
;                 :quant-model/curves-throbber                        false
;                 :quant-model/history-start-date                     (t/int->gdate 20150101)
;                 ;:quant-model/history-end-date            (t/int-to-gdate (today))
;                 :quant-model/master-security-current-field-db       {:id-choice "ISIN_REGS"}
;                 :quant-model/master-security-update-field-db        {}
;                 :quant-model/mini-security-master                   []
;
;
;
;                 :model-portfolios/trades                            {}
;                 :model-portfolios/hide-zeros                        false
;                 :model-portfolios/aggregation                       "Region"
;
;                 :scorecard/portfolio                                "OGEMCORD"
;                 :scorecard/sector                                   nil ;"Consumer"
;                 :scorecard/ogemcord-risk                            []
;                 :scorecard/attribution-table                        []
;                 :scorecard/trade-analyser-data                      nil
;                 :scorecard/qdb-securities                           []
;                 :scorecard/qdb-scores                               []
;                 :scorecard/qdb-scores-previous                      []
;                 :scorecard/latest-date                              nil
;                 :scorecard/previous-date                            nil
;
;                 :last-updated-logs                                  nil
;                 :integrity                                          nil
;                 :portfolio-checks                                   {}
;                 :talanx-checks                                      {}
;                 :mure-checks                                        []
;
;                 :analysts                                           nil
;                 :analysts-emcd                                      nil
;
;                 :master-security-fields-list                        nil
;
;                 :ta2022/trade-view-position-and-performance-table   []
;                 :ta2022/trade-isin                                  nil
;                 :ta2022/trade-attachments                           []
;                 :ta2022/trade-latest-targets-and-triggers           nil
;                 :ta2022/trade-history                               {}
;                 :ta2022/active-home                                 :main
;                 :ta2022/main-table-data                             []
;                 :ta2022/main-table-pivot                            "No"
;                 :ta2022/main-table-show-relval-value                false
;                 :ta2022/main-table-view-selector                    "Scorecard"
;                 :ta2022/journal-data                                nil
;                 :ta2022/show-modal                                  nil
;                 :ta2022/test-result                                 nil
;                 :ta2022/can-morph                                   false
;                 :ta2022/implied-price-difference                    nil
;                 :ta2022/upside-vs-downside                          0.0
;                 :ta2022/throbber                                    false
;                 :ta2022/filter                                      {:analyst nil :sector nil :country nil :portfolio nil}
;
;                 :implementation/portfolio-nav                       nil
;                 :implementation/fx                                  nil
;                 :implementation/security-to-issuer-map              nil
;                 :implementation/live-positions                      nil
;                 :implementation/live-cast-parent-positions          nil
;                 :implementation/implementation-list                 []
;                 :trade-implementation-strategy                     nil
;
;                 ; Trade implementation
;                 :implementation/trade-implementation                nil
;                 :implementation/show-implementation-selector        false
;                 :implementation/success-modal                       {:show false :on-close nil :response nil}
;
;                 :allianz-loss-report                                []
;                 :mure-aum    []
;                 :ogemigc-nr-bucket                                  []
;                 :off-bm-exposure-map                         []
;                 :global-debt-and-equity-levels                       []
;                 :exclu-talanx []
;                 :exclu-allianz-aim []
;                 :exclu-allianz-grgr []
;                 :exclu-ezvk []
;                 :exclu-kzvk []
;                 :exclu-mure-og []
;                 :exclu-mure-x-rus-issuers []
;                 :exclu-mure-x-rus-gri []
;                 :exclu-mure-rus-issuers []
;                 :exclu-mure-rus-gri []
;
;                 :backtest-output                                   []
;
;
;                 :dummy                                              nil                                 ;can be useful
;                 })
;(rf/reg-event-db ::initialize-db (fn [_ _] default-db))
;
;;list of keys event for which a dispatch will assoc a value to the db given key event
;(doseq [k (keys default-db)] (rf/reg-sub k (fn [db] (k db))))
;
;(doseq [k [:rot13
;
;           :test-data
;
;           :navigation/active-view
;           :navigation/active-knowledge
;           :navigation/active-home
;           :navigation/active-var
;           :navigation/active-qs
;           :navigation/active-esg
;           :navigation/active-attribution
;           :navigation/active-scorecard
;           :navigation/show-mounting-modal
;           :rating-to-score
;           :country-codes
;           :esg-report-list
;           :jpm-sectors
;           :large-exposures
;           ;:pivoted-positions
;           :total-positions
;           :var/proxies
;           :var/dates
;           :var/data
;           :var/portfolio
;           :var/chart-period
;           :portfolios-grp
;
;           :check-cash-proxy
;           :check-coverage
;           :check-missing-trades
;           :check-long-trades
;           :check-trade-avg-life
;           :check-trigger-rate
;
;           :factsheet/cre
;           :knowledge/selected-mandate
;           :knowledge/mandate-description
;
;           :single-portfolio-risk/portfolio
;           :single-portfolio-risk/display-style
;           :single-portfolio-risk/hide-zero-holdings
;           :single-portfolio-risk/table-filter
;           :single-portfolio-risk/expander
;
;           :multiple-portfolio-risk/display-style
;           :multiple-portfolio-risk/field-number
;           :multiple-portfolio-risk/field-one
;           :multiple-portfolio-risk/field-two
;           :multiple-portfolio-risk/selected-portfolios
;           :multiple-portfolio-risk/hide-zero-holdings
;           ;:multiple-portfolio-risk/shortcut
;           :multiple-portfolio-risk/table-filter
;           :multiple-portfolio-risk/expander
;
;           :multiple-ir-risk/selected-portfolios
;
;           :portfolio-alignment/display-style
;           :portfolio-alignment/field
;           :portfolio-alignment/group
;           :portfolio-alignment/threshold
;           ;:portfolio-alignment/shortcut
;           :portfolio-alignment/table-filter
;           :portfolio-alignment/expander
;
;           :portfolio-history/portfolio
;           :portfolio-history/start-period
;           :portfolio-history/end-period
;           :portfolio-history/hide-zero-holdings
;           :portfolio-history/table-filter
;           :portfolio-history/expander
;           :portfolio-history/shortcut
;           :portfolio-history/display-style
;           :portfolio-history/breakdown
;           :portfolio-history/field-one
;           :portfolio-history/absdiff
;           :position-history/portfolio
;           :position-history/view
;           :position-history/isin
;           :position-history/nickname
;           :position-history/start-year
;           :position-history/throbber
;
;           :attribution-history/portfolio
;           :attribution-history/hide-zero-holdings
;           :attribution-history/table-filter
;           :attribution-history/expander
;           :attribution-history/shortcut
;           :attribution-history/display-style
;           :attribution-history/field-one
;           :attribution-history/report-type
;           :attribution-analytics/portfolio
;           :attribution-analytics/month-end
;           :attribution-analytics/period
;
;           :single-portfolio-attribution/portfolio
;           :single-portfolio-attribution/display-style
;           :single-portfolio-attribution/period
;           :single-portfolio-attribution/table-filter
;           :single-portfolio-attribution/expander
;           ;:single-portfolio-attribution/table
;
;           :multiple-portfolio-attribution/display-style
;           :multiple-portfolio-attribution/field-number
;           :multiple-portfolio-attribution/field-one
;           :multiple-portfolio-attribution/field-two
;           :multiple-portfolio-attribution/selected-portfolios
;           :multiple-portfolio-attribution/hide-zero-holdings
;           :multiple-portfolio-attribution/shortcut
;           :multiple-portfolio-attribution/table-filter
;           :multiple-portfolio-attribution/expander
;           :multiple-portfolio-attribution/period
;           :multiple-portfolio-attribution/threshold
;
;           :multiple-portfolio-scorecard/selected-portfolios
;
;           :attribution/summary
;           :attribution/available-months
;           :list-dates-month-end-calendar
;           :attribution/emd-weekly
;
;           :attribution-index-returns/portfolio
;           :attribution-index-returns/period
;           :attribution-index-returns/x-filter
;           :attribution-index-returns/y-filter
;           :attribution-index-returns/table
;           :attribution-index-returns/x-top-15
;
;           :top-bottom-price-change
;           :list-dates-position-history
;
;           :single-bond-trade-history/show-flat-modal
;           :single-bond-trade-history/show-modal
;           :single-bond-trade-history/bond
;           :single-bond-trade-history/show-throbber
;
;           :recent-trade-data/show-throbber
;
;           :portfolio-trade-history/portfolio
;           :portfolio-trade-history/start-date
;           :portfolio-trade-history/end-date
;           :portfolio-trade-history/performance
;           :portfolio-trade-history/fwd-return
;           :portfolio-trade-history/comments
;           :portfolio-trade-history/pivot
;
;           :multiple-portfolio-trade-history/start-date
;           :multiple-portfolio-trade-history/end-date
;           :multiple-portfolio-trade-history/pivot
;
;           :recent-trade-data/trades
;           :traded-since-date-output/trades
;           :recent-trade-data/date-from
;           :recent-trade-data/date-to
;           :recent-trade-data/country
;           :recent-trade-data/sector
;
;           :portfolio-review/portfolio
;           :portfolio-review/active-tab
;           :portfolio-review/summary-data
;           :portfolio-review/contribution-chart-data
;           :portfolio-review/alpha-chart-data
;           :portfolio-review/jensen-chart-data
;           :portfolio-review/marginal-beta-chart-data
;           :portfolio-review/historical-beta-chart-data
;           :portfolio-review/historical-performance-chart-data
;
;           :betas/table
;
;           :bond-price-history/price
;           :bond-price-history/name
;
;           :esg/refinitiv-ids
;           :esg/active-home
;           :esg/selected-pillars
;           :esg/msci-scores
;           :esg/summary-report
;           :esg/gb-analytics
;           :esg/tf-analytics
;           :esg/engagements
;           :esg/security-notes
;           :esg/tamale-body
;           :esg/ungc-problem-securities
;           :esg/msci-ccc-weight
;           :esg/analyst-commentary
;           :esg/carbon-jasmine
;
;           :esg/esg-report-selected
;           :esg/gb-isin
;           :esg/date
;           :esg/report-type
;           :esg/elig
;
;           :esg/active-home
;
;           :trounce-flow-date
;
;           :trounce-flow-cash
;           :trounce-flow-cash-embi
;           :trounce-flow-cash-embi-local
;           :trounce-flow-cash-embi-jaci
;
;           :trounce-flow-duration
;           :trounce-flow-duration-embi-local
;           :trounce-flow-duration-embi
;
;           :trounce-flow-country
;           :trounce-flow-country-embi
;           :trounce-flow-country-embi-local
;           :trounce-flow-country-jaci
;
;           :trounce-flow-country-change
;           :trounce-flow-country-change-embi
;           :trounce-flow-country-change-embi-local
;           :trounce-flow-country-change-jaci
;
;           :trounce-flow-rating
;           :trounce-flow-rating-embi
;           :trounce-flow-rating-embi-local
;           :trounce-flow-rating-jaci
;
;           :trade-history/active-home
;
;           :quant-model/calculator-spreads
;           :quant-model/rating-curves
;           :quant-model/rating-curves-sov-only
;           :quant-model/generic-rating-curves
;           :quant-model/isin-history
;           :quant-model/isin-history-2
;           :quant-model/new-bond-tested
;           :quant-model/new-bond-already-exists
;           :quant-model/new-bond-saved-message
;           :quant-model/saved-charts
;           :quant-model/saved-advanced-charts
;           :quant-model/issuer-coverage
;           :quant-model/analyst-coverage
;           :quant-model/model-date
;           :quant-model/history-start-date
;           :quant-model/mini-security-master
;
;           :scorecard/attribution-table
;           :scorecard/portfolio
;           :scorecard/sector
;           :scorecard/trade-analyser-data
;           :scorecard/qdb-securities
;           :scorecard/qdb-scores
;           :scorecard/qdb-scores-previous
;           :scorecard/latest-date
;           :scorecard/previous-date
;
;           ;:time-machine/enabled
;           ;:time-machine/date
;           ;:time-machine/model
;
;           :model-portfolios/trades
;           :model-portfolios/hide-zeros
;           :model-portfolios/aggregation
;
;           :last-updated-logs
;           :integrity
;           :portfolio-checks
;           :talanx-checks
;           :mure-checks
;
;           :analysts
;           :analysts-emcd
;
;           :master-security-fields-list
;           :quant-model/master-security-current-field-db
;           :quant-model/master-security-update-field-db
;
;           :ta2022/trade-isin
;           :ta2022/trade-attachments
;           :ta2022/trade-view-position-and-performance-table
;           :ta2022/trade-latest-targets-and-triggers
;           :ta2022/trade-history
;           :ta2022/active-home
;           :ta2022/throbber
;           :ta2022/main-table-pivot
;           :ta2022/main-table-show-relval-value
;           :ta2022/main-table-view-selector
;           :ta2022/show-modal
;           :ta2022/test-result
;           :ta2022/can-morph
;           :ta2022/implied-price-difference
;           :ta2022/upside-vs-downside
;           :ta2022/journal-data
;
;           ; Trade implementation
;           :implementation/show-implementation-selector
;           :implementation/implementation-list
;           :implementation/portfolio-nav
;           :implementation/fx
;           :implementation/live-cast-parent-positions
;           :trade-implementation-strategy
;
;           :allianz-loss-report
;           :mure-aum
;           :global-debt-and-equity-levels
;           :ogemigc-nr-bucket
;           :off-bm-exposure-map
;           :backtest-output
;           :dummy
;
;           :exclu-talanx
;           :exclu-allianz-aim
;           :exclu-allianz-grgr
;           :exclu-ezvk
;           :exclu-kzvk
;           :exclu-mure-og
;           :exclu-mure-x-rus-issuers
;           :exclu-mure-x-rus-gri
;           :exclu-mure-rus-issuers
;           :exclu-mure-rus-gri
;
;
;           :stresstest/selected-portfolios
;           :stresstest/scenarios
;           :stresstest/results
;
;           ]] (rf/reg-event-db k (fn [db [_ data]] (assoc db k data))))
;
;(rf/reg-event-db
;  :navigation/active
;  (fn [db [_ page sub-page]] (assoc-in db [:navigation/active page] sub-page)))
;
;(rf/reg-event-db
;  :single-portfolio-attribution/table
;  (fn [db [_ data]] (assoc db :single-portfolio-attribution/table data :navigation/show-mounting-modal false)))
;
;(rf/reg-event-db
;  :multiple-portfolio-attribution/table
;  (fn [db [_ data]] (assoc db :multiple-portfolio-attribution/table data :navigation/show-mounting-modal false)))
;
;(defn array-of-lists->records-stable [data]
;  (let [model (into {} (for [[k v] data] [k (vec v)]))]
;    (mapv #(into {} (for [k (keys model)] [k (nth (model k) %)]))
;          (range (count (model (first (keys model))))))))
;
;
;(defn array-of-lists->records
;  "Converts transit [[:key1 [values]] [:key2 [values]]] to [{:key1 val01 :key2 val02} {:key1 val11 :key2 val12}]
;  This implementation is about 10-15% than the above."
;  [data]
;  (let [ks (mapv first data)                                ;mapv faster than map
;        values (mapv vec (mapv second data))                ;mapv faster than map, but transducer fails for some reason
;        n (count (first values))]
;    (loop [i 0 records (transient [])]                      ;using transients. Atom failed on memory.
;      (if (< i n)
;        (recur (inc i) (conj! records (zipmap ks (mapv #(nth % i) values)))) ;mapv faster than map
;        (persistent! records)))))
;
;(rf/reg-event-db
;  :quant-model/history-result
;  (fn [db [_ data]] (assoc db :quant-model/history-result (array-of-lists->records data)
;                              :quant-model/history-throbber false
;                              :quant-model/curves-throbber false
;                              )))
;
;(rf/reg-event-db
;  :quant-model/history-result-prediction
;  (fn [db [_ data]] (assoc db :quant-model/history-result-prediction (array-of-lists->records data)
;                              :quant-model/history-prediction-throbber false
;                              )))
;
;(rf/reg-event-db
;  :quant-model/history-result-curves-one
;  (fn [db [_ data]] (assoc db :quant-model/history-result-curves-one  (array-of-lists->records data)
;                              :quant-model/curves-throbber false
;                              )))
;
;;(rf/reg-event-db
;;  :positions
;;  (fn [db [_ positions]]
;;    ;(println positions)
;;    (let [res (array-of-lists->records positions)]                                             ;(mapv #(into {} (for [k (keys positions)] [k (nth (positions k) %)])) (range (count (positions (first (keys positions))))))
;;      (assoc db                                             ;:positions positions
;;        :positions res
;;        :all-instrument-ids (distinct (map :id res))
;;        ;:pivoted-positions (static/get-pivoted-data res)
;;        :navigation/show-mounting-modal false))))
;
;;(rf/reg-event-fx
;;  :positions
;;  (fn [{:keys [db]} [_ positions]]
;;    (let [res (array-of-lists->records positions)]
;;      {:db                 (assoc db :positions res :all-instrument-ids (distinct (map :id res)) :navigation/show-mounting-modal false)
;;       :http-post-dispatch {:url          (str static/ta-server-address "scorecard-request")
;;                            :edn-params   {:portfolio (:scorecard/portfolio db)
;;                                           :isin-seq  (map :isin (t/chainfilter {:portfolio (:scorecard/portfolio db) :qt-jpm-sector (:scorecard/sector db) :original-quantity pos?} res))}
;;                            :dispatch-key [:scorecard/trade-analyser-data]}})))
;
;;(def nkp (atom nil))
;
;(rf/reg-event-db
;  :quant-model/history-result-curves-two
;  (fn [db [_ data]] (assoc db :quant-model/history-result-curves-two  (array-of-lists->records data)
;                              :quant-model/curves-throbber false
;                              )))
;
;
;
;(rf/reg-event-fx
;  :naked-positions
;  (fn [{:keys [db]} [_ naked-positions]]
;    (let [res (array-of-lists->records naked-positions)
;          positions (if (and (= (:positions db) []) (:instruments db)) (mapv #(merge % (get-in db [:instruments (:id %)])) res) [])]
;      ;(println (distinct (map :portfolio positions)))
;      {:db (assoc db :naked-positions res
;                     :navigation/show-mounting-modal (= positions [])
;                     :positions positions
;                     ;:positions-ds (ds/->dataset positions)
;                     :implementation/live-positions (into {} (for [[p g] (group-by :portfolio positions)]
;                                                               [p (into {} (for [line g :when (and (some? (:isin line)) (pos? (:weight line)))] [(:isin line) (:weight line)]))])) ;(* 100. (:weight line))
;                     )
;       ;fx below is tricky - this is so at mount you can go to quant screen then right click implementation. Probably a better way to do this
;       :fx (let [isin (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs 0 :ISIN])]
;             (if (and (some? isin) (not= isin "NEW ISSUE")) [[:dispatch [:implementation/on-isin-change 0 isin]]] []))
;       })))
;
;;(rf/reg-event-db
;;  :pivoted-positions
;;  (fn [db [_ pivoted-positions]]
;;    (assoc db                                               ;:positions positions
;;      :pivoted-positions (mapv #(into {} (for [k (keys pivoted-positions)] [k (nth (pivoted-positions k) %)])) (range (count (pivoted-positions (first (keys pivoted-positions))))))
;;      :navigation/show-mounting-modal false)))
;
;;(rf/reg-event-db
;;  :quant-model/model-output
;;  (fn [db [_ model]]
;;    (assoc db :quant-model/model-output model
;;              :navigation/show-mounting-modal false)))
;
;(rf/reg-event-fx
;  :instruments
;  (fn [{:keys [db]} [_ instruments]]
;    (let [positions (if (and (= (:positions db) []) (:naked-positions db)) (mapv #(merge % (get-in db [:instruments (:id %)])) (:naked-positions db)) [])
;          ]
;      {:db (assoc db :all-instrument-ids (keys instruments)
;                     :instruments instruments
;                     :positions positions
;                     ;:positions-ds (ds/->dataset positions)
;                     :navigation/show-mounting-modal (= positions [])
;                     :implementation/live-positions (into {} (for [[p g] (group-by :portfolio positions)]
;                                                               [p (into {} (for [line g :when (and (some? (:isin line)) (pos? (:weight line)))] [(:isin line) (:weight line)]))])) ;(* 100. (:weight line))
;                     )})))
;
;;(rf/reg-event-db
;;  :positions-new
;;  (fn [db [_ portfolio positions]]
;;    (-> db
;;        (assoc-in [:positions-new portfolio] positions)
;;        (assoc :navigation/show-mounting-modal false))))
;
;(rf/reg-event-db
;  :quant-model/model-output
;  (fn [db [_ model]]
;    (let [mo (array-of-lists->records model)]
;      (assoc db
;        ;:quant-model/model-output-ds (ds/->dataset mo)
;        :quant-model/model-output mo
;        :quant-model/model-js-output (clj->js mo)           ;we do that once it's fast enough
;        :navigation/show-mounting-modal false
;        ;:quant-model/bond-isin-map (merge bond-isin (clojure.set/map-invert bond-isin))
;        ))))
;
;(rf/reg-event-db
;  :portfolios
;  (fn [db [_ portfolios]]
;    (assoc db :portfolios portfolios
;              :multiple-portfolio-risk/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :cembi)) static/portfolio-alignment-groups)))) ;(disj (set portfolios) "OGEMHCD" "IUSSEMD" "OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE")
;              :multiple-portfolio-attribution/selected-portfolios (set (:portfolios (first (filter (fn [x] (= (:id x) :cembi)) static/portfolio-alignment-groups)))) ;(disj (set portfolios) "OGEMHCD" "IUSSEMD" "OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE")
;              :portfolio-dropdown-map (into [] (for [p portfolios] {:id p :label p :labelrot13 (t/rot13 p)}))
;              )))
;
;(doseq [k [:single-portfolio-risk/filter
;           :multiple-portfolio-risk/filter
;           :portfolio-alignment/filter
;           :single-portfolio-attribution/filter
;           :multiple-portfolio-attribution/filter
;           :portfolio-history/filter
;           :attribution-history/filter]]
;  (rf/reg-event-db k (fn [db [_ id f]] (assoc-in db [k id] f))))
;
;(rf/reg-event-db
;  :qt-date
;  (fn [db [_ qt-date]] (let [dt (.replace ^string qt-date "\"" "")]
;                         (assoc db :qt-date dt
;                                   :portfolio-history/end-period (t/gdate->yyyyMMdd (t/ddMMMyyyy->gdate dt))))))
;
;;THIS IS A DUMMY - IN PRACTICE WE'D DO MORE THINGS HERE
;(rf/reg-event-db
;  :attribution-date
;  (fn [db [_ attribution-date]] (assoc db :attribution-date (.replace ^string attribution-date "\"" ""))))
;
;(rf/reg-event-db
;  :single-portfolio-risk/shortcut
;  (fn [db [_ snapshot]]
;    (case snapshot
;      1 (assoc db :single-portfolio-risk/shortcut snapshot
;                  :single-portfolio-risk/display-style "Table"
;                  :single-portfolio-risk/hide-zero-holdings true
;                  :single-portfolio-risk/filter {1 :region 2 :country 3 :issuer})
;      2 (assoc db :single-portfolio-risk/shortcut snapshot
;                  :single-portfolio-risk/display-style "Tree"
;                  :single-portfolio-risk/hide-zero-holdings true
;                  :single-portfolio-risk/filter {1 :country 2 :sector 3 "None"})
;      3 (assoc db :single-portfolio-risk/shortcut snapshot
;                  :single-portfolio-risk/display-style "Tree"
;                  :single-portfolio-risk/hide-zero-holdings true
;                  :single-portfolio-risk/filter {1 :sector 2 :country 3 "None"})
;      4 (assoc db :single-portfolio-risk/shortcut snapshot
;                  :single-portfolio-risk/display-style "Tree"
;                  :single-portfolio-risk/hide-zero-holdings true
;                  :single-portfolio-risk/filter {1 :sector 2 :country 3 :issuer}))))
;
;(rf/reg-event-db
;  :multiple-portfolio-risk/shortcut
;  (fn [db [_ snapshot]]
;    (case snapshot
;      1 (assoc db :multiple-portfolio-risk/shortcut snapshot
;                  :multiple-portfolio-risk/display-style "Table"
;                  :multiple-portfolio-risk/field-one :nav
;                  :multiple-portfolio-risk/hide-zero-holdings true
;                  :multiple-portfolio-risk/filter {1 :region 2 :country 3 :issuer})
;      2 (assoc db :multiple-portfolio-risk/shortcut snapshot
;                  :multiple-portfolio-risk/display-style "Tree"
;                  :multiple-portfolio-risk/field-one :nav
;                  :multiple-portfolio-risk/hide-zero-holdings true
;                  :multiple-portfolio-risk/filter {1 :country 2 :issuer 3 "None"})
;      3 (assoc db :multiple-portfolio-risk/shortcut snapshot
;                  :multiple-portfolio-risk/display-style "Tree"
;                  :multiple-portfolio-risk/field-one :nav
;                  :multiple-portfolio-risk/hide-zero-holdings true
;                  :multiple-portfolio-risk/filter {1 :sector 2 :country 3 "None"})
;      4 (assoc db :multiple-portfolio-risk/shortcut snapshot))))
;
;(rf/reg-event-db
;  :portfolio-alignment/shortcut
;  (fn [db [_ snapshot]]
;    (case snapshot
;      1 (assoc db :portfolio-alignment/shortcut snapshot
;                  :portfolio-alignment/display-style "Table"
;                  :portfolio-alignment/field-one :nav
;                  :portfolio-alignment/filter {1 :region 2 :country 3 :issuer})
;      2 (assoc db :portfolio-alignment/shortcut snapshot
;                  :portfolio-alignment/display-style "Tree"
;                  :portfolio-alignment/field-one :nav
;                  :portfolio-alignment/filter {1 :country 2 :issuer 3 "None"})
;      3 (assoc db :portfolio-alignment/shortcut snapshot
;                  :portfolio-alignment/display-style "Tree"
;                  :portfolio-alignment/field-one :nav
;                  :portfolio-alignment/filter {1 :sector 2 :country 3 :issuer})
;      4 (assoc db :portfolio-alignment/shortcut snapshot))))
;
;(rf/reg-event-db
;  :cycle-shortcut
;  (fn [db [_ _ _]]
;    (let [shortcut-key (keyword (str (name (:navigation/active-home db)) "-risk/shortcut"))
;          shortcut-value (shortcut-key db)]
;      (cond
;        (< shortcut-value 4) (assoc db shortcut-key (inc shortcut-value))
;        :else (assoc db shortcut-key 1)))))
;
;;;;;;;;;;;;;;;;;;;;;;;;
;;;HTTP GET DEFINITION;;
;;;;;;;;;;;;;;;;;;;;;;;;
;
;(rf/reg-event-db
;  :tree-table
;  (fn [db [_ _ _]]
;    (let [shortcut-key (keyword (str (name (:navigation/active-home db)) "-risk/display-style"))]
;      (case (shortcut-key db)
;        "Tree"  (assoc db shortcut-key "Table")
;        "Table" (assoc db shortcut-key "Tree")))))
;
;(defn http-get-dispatch
;  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
;  [request]
;  (let [vr (if (vector? request) request [request])]
;    (doseq [r vr]
;      (go (let [response (<! (http/get (:url r)))]
;            (rf/dispatch (conj (:dispatch-key r) (:body response)))
;            (if (:flag r) (rf/dispatch [(:flag r) (:flag-value r)])))))))
;
;(rf/reg-fx :http-get-dispatch http-get-dispatch)
;
;(defn http-get-asset
;  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
;  [request]
;  (let [vr (if (vector? request) request [request])]
;    (doseq [r vr]
;      (go (let [response (<! (http/get (str static/server-address "asset?namespace=" (:namespace request) "&asset=" (:asset request))))]
;            (rf/dispatch (conj (:dispatch-key r) (:body response)))
;            (if (:flag r) (rf/dispatch [(:flag r) (:flag-value r)])))))))
;
;(rf/reg-fx :http-get-asset http-get-asset)
;
;(defn http-post-dispatch
;  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
;  [request]
;  (let [vr (if (vector? request) request [request])]
;    (doseq [r vr]
;      (go (let [response (<! (http/post (:url r) (if (:edn-params r) {:edn-params (:edn-params r)} {:json-params (:json-params r)})))]
;            (rf/dispatch (conj (:dispatch-key r) (:body response)))
;            (if (:flag r) (rf/dispatch [(:flag r) (:flag-value r)])))))))
;
;(rf/reg-fx :http-post-dispatch http-post-dispatch)
;
;(defn http-post-dispatch-test
;  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
;  [request]
;  (let [vr (if (vector? request) request [request])]
;    (doseq [r vr]
;      (go (let [response (<! (http/post (:url r) (if (:edn-params r) {:edn-params (:edn-params r) :content-type "application/json;charset=UTF-8"} {:json-params (:json-params r)  :content-type "application/json;charset=UTF-8"})))]
;            (rf/dispatch (conj (:dispatch-key r) (:body response)))
;            (if (:flag r) (rf/dispatch [(:flag r) (:flag-value r)])))))))
;
;
;;(defn http-json-post-dispatch [request]
;;  "if response header is application/json keys will get keywordized automatically - otherwise send as text/plain"
;;  (go (let [response (<! (http/post (:url request) {:json-params (:json-params request)}))]
;;        (rf/dispatch (conj (:dispatch-key request) (:body response)))
;;        (if (:flag request) (rf/dispatch [(:flag request) (:flag-value request)])))))
;
;(rf/reg-fx :http-post-dispatch-test http-post-dispatch-test)
;
;(rf/reg-fx :http-json-post-dispatch http-post-dispatch)
;
;(defn http-put-dispatch [request]
;  (go (let [response (<! (http/post (:url request) {:multipart-params (:multipart-params request)}))]
;        (rf/dispatch (conj (:dispatch-key request) (:body response)))
;        (if (:flag request) (rf/dispatch [(:flag request) (:flag-value request)])))))
;
;
;(rf/reg-fx :http-put-dispatch http-put-dispatch)
;
;
;(def simple-http-get-events
;  [
;   {:get-key :get-naked-positions     :url-tail "naked-position-transit-array"           :dis-key :naked-positions :mounting-modal true}
;   {:get-key :get-var-proxies         :url-tail "var-proxies"         :dis-key :var/proxies}
;   {:get-key :get-var-dates           :url-tail "var-dates"           :dis-key :var/dates}
;   {:get-key :get-refinitiv-ids       :url-tail "refinitiv-ids"       :dis-key :esg/refinitiv-ids}
;   {:get-key :get-refinitiv-structure :url-tail "refinitiv-structure" :dis-key :esg/refinitiv-structure}
;   {:get-key :get-quant-model         :url-tail "quant-model-output-transit-array"  :dis-key :quant-model/model-output :mounting-modal true}
;   {:get-key :get-attribution-date    :url-tail "attribution?query-type=attribution-date" :dis-key :attribution-date}
;   {:get-key :get-attribution-summary    :url-tail "attribution?query-type=summary" :dis-key :attribution/summary}
;   {:get-key :get-attribution-available-months    :url-tail "attribution?query-type=available-months" :dis-key :attribution/available-months}
;   {:get-key :get-model-portfolios    :url-tail "model-portfolios" :dis-key :model-portfolios/trades}
;   {:get-key :get-last-updated-logs    :url-tail "last-updated" :dis-key :last-updated-logs}
;   {:get-key :get-esg-report-list    :url-tail "esg-report-list" :dis-key :esg-report-list}
;   {:get-key :get-top-bottom-price-change :url-tail "top_bottom_price_change" :dis-key  :top-bottom-price-change}
;   {:get-key :get-list-dates-position-history :url-tail "list-dates-position-history" :dis-key  :list-dates-position-history}
;   {:get-key :get-list-dates-month-end-calendar :url-tail "list-dates-month-end-calendar" :dis-key  :list-dates-month-end-calendar}
;   {:get-key :get-test-data :url-tail "test-route" :dis-key  :test-data}
;
;   ])
;
;(def simple-http-assets
;  [{:get-key :get-portfolios              :namespace "common.static" :asset "portfolios"              :dispatch-key [:portfolios]}
;   {:get-key :get-portfolios-grp          :namespace "common.static" :asset "portfolios-grp"          :dispatch-key [:portfolios-grp]}
;   {:get-key :get-country-codes           :namespace "common.static" :asset "country-codes"           :dispatch-key [:country-codes]}
;   {:get-key :get-jpm-sectors             :namespace "common.static" :asset "jpm-sectors"             :dispatch-key [:jpm-sectors]}
;   {:get-key :get-analysts                :namespace "common.static" :asset "analysts"                :dispatch-key [:analysts]}
;   {:get-key :get-analysts-emcd           :namespace "common.static" :asset "analysts-emcd"           :dispatch-key [:analysts-emcd]}
;   {:get-key :get-master-security-fields  :namespace "common.static" :asset "master-security-fields"  :dispatch-key [:master-security-fields-list]}
;   {:get-key :get-rating-to-score         :namespace "common.static" :asset "rating-to-score-rating"  :dispatch-key [:rating-to-score]}
;   {:get-key :fx-request                  :namespace "common.static" :asset "fx"                      :dispatch-key [:implementation/fx]}
;   {:get-key :get-mini-security-master    :namespace "common.static"  :asset "mini-security-master"   :dispatch-key [:quant-model/mini-security-master]}
;   {:get-key :get-allianz-loss-report     :namespace "common.xlscsvassets" :asset  "allianz-pnl-loss" :dispatch-key [:allianz-loss-report]}
;   {:get-key :get-mure-aum                :namespace "common.xlscsvassets" :asset  "mure-aum"         :dispatch-key [:mure-aum]}
;
;   {:get-key :get-analyst-coverage            :namespace "common.xlscsvassets" :asset  "analyst-coverage"               :dispatch-key [:quant-model/analyst-coverage]}
;   {:get-key :get-emd-weekly                  :namespace "common.xlscsvassets" :asset  "emd-weekly-performance-sheet"   :dispatch-key [:attribution/emd-weekly]}
;   {:get-key :get-cre-factsheet               :namespace "common.xlscsvassets" :asset  "cre-factsheet"                  :dispatch-key [:factsheet/cre]}
;
;   {:get-key :portfolio-nav-request           :namespace "jasmine.positions"  :asset "sod-portfolio-nav"            :dispatch-key [:implementation/portfolio-nav]}
;   {:get-key :get-live-cast-parent-positions  :namespace "jasmine.positions"  :asset "live-positions-by-parent-id"  :dispatch-key [:implementation/live-cast-parent-positions]}
;   {:get-key :get-qt-date                     :namespace "jasmine.positions"  :asset "qt-date-atom"                 :dispatch-key [:qt-date]}
;   {:get-key :get-total-positions             :namespace "jasmine.positions"  :asset "total-lines"                  :dispatch-key [:total-positions]}
;   {:get-key :get-instruments                 :namespace "jasmine.positions"  :asset "instruments"                  :dispatch-key [:instruments]}
;   {:get-key :get-large-exposures             :namespace "jasmine.positions"  :asset "large-exposures"              :dispatch-key [:large-exposures]}
;
;   {:get-key :get-check-cash-proxy          :namespace "ta2022.api"  :asset "check-cash-proxy"                  :dispatch-key [:check-cash-proxy]}
;   {:get-key :get-check-coverage            :namespace "ta2022.api"  :asset "check-coverage"                    :dispatch-key [:check-coverage]}
;   {:get-key :get-check-missing-trades      :namespace "ta2022.api"  :asset "check-missing-trades"              :dispatch-key [:check-missing-trades]}
;   {:get-key :get-check-long-trades         :namespace "ta2022.api"  :asset "check-long-trades"                 :dispatch-key [:check-long-trades]}
;   {:get-key :get-check-trade-avg-life      :namespace "ta2022.api"  :asset "check-trade-avg-life"              :dispatch-key [:check-trade-avg-life]}
;   {:get-key :get-check-trigger-rate      :namespace "ta2022.api"  :asset "check-trigger-rate"                 :dispatch-key [:check-trigger-rate]}
;
;   {:get-key :get-trounce-flow-date                         :namespace "jasmine.trounceflow"  :asset "get-trounce-flow-date-as-of"        :dispatch-key [:trounce-flow-date]}
;   {:get-key :get-trounce-flow-cash                         :namespace "jasmine.trounceflow"  :asset "trounce-flow-cash"                  :dispatch-key [:trounce-flow-cash]}
;   {:get-key :get-trounce-flow-cash-embi                    :namespace "jasmine.trounceflow"  :asset "trounce-flow-cash-embi"             :dispatch-key [:trounce-flow-cash-embi]}
;   {:get-key :get-trounce-flow-cash-embi-local              :namespace "jasmine.trounceflow"  :asset "trounce-flow-cash-embi-local"       :dispatch-key [:trounce-flow-cash-embi-local]}
;   ;{:get-key :get-trounce-flow-cash-jaci                   :namespace "jasmine.positions"  :asset "trounce-flow-cash-jaci"               :dispatch-key [:trounce-flow-cash-jaci]}
;   {:get-key :get-trounce-flow-duration                     :namespace "jasmine.trounceflow"  :asset "trounce-flow-duration"              :dispatch-key [:trounce-flow-duration]}
;   {:get-key :get-trounce-flow-duration-embi                :namespace "jasmine.trounceflow"  :asset "trounce-flow-duration-embi"         :dispatch-key [:trounce-flow-duration-embi]}
;   {:get-key :get-trounce-flow-duration-embi-local          :namespace "jasmine.trounceflow"  :asset "trounce-flow-duration-embi-local"   :dispatch-key [:trounce-flow-duration-embi-local]}
;   {:get-key :get-trounce-flow-country                      :namespace "jasmine.trounceflow"  :asset "trounce-flow-country"               :dispatch-key [:trounce-flow-country]}
;   {:get-key :get-trounce-flow-country-embi                 :namespace "jasmine.trounceflow"  :asset "trounce-flow-country-embi"          :dispatch-key [:trounce-flow-country-embi]}
;   {:get-key :get-trounce-flow-country-embi-local           :namespace "jasmine.trounceflow"  :asset "trounce-flow-country-embi-local"    :dispatch-key [:trounce-flow-country-embi-local]}
;   {:get-key :get-trounce-flow-country-jaci                 :namespace "jasmine.trounceflow"  :asset "trounce-flow-country-jaci"          :dispatch-key [:trounce-flow-country-jaci]}
;   {:get-key :get-trounce-flow-country-change               :namespace "jasmine.trounceflow"  :asset "trounce-flow-country-change"        :dispatch-key [:trounce-flow-country-change]}
;   {:get-key :get-trounce-flow-country-change-embi          :namespace "jasmine.trounceflow"  :asset "trounce-flow-country-change-embi"   :dispatch-key [:trounce-flow-country-change-embi]}
;   {:get-key :get-trounce-flow-country-change-embi-local    :namespace "jasmine.trounceflow"  :asset "trounce-flow-country-change-embi-local"  :dispatch-key [:trounce-flow-country-change-embi-local]}
;   {:get-key :get-trounce-flow-country-change-jaci          :namespace "jasmine.trounceflow"  :asset "trounce-flow-country-change-jaci"   :dispatch-key [:trounce-flow-country-change-jaci]}
;   {:get-key :get-trounce-flow-rating                       :namespace "jasmine.trounceflow"  :asset "trounce-flow-rating"                  :dispatch-key [:trounce-flow-rating]}
;   {:get-key :get-trounce-flow-rating-embi                  :namespace "jasmine.trounceflow"  :asset "trounce-flow-rating-embi"             :dispatch-key [:trounce-flow-rating-embi]}
;   {:get-key :get-trounce-flow-rating-embi-local            :namespace "jasmine.trounceflow"  :asset "trounce-flow-rating-embi-local"       :dispatch-key [:trounce-flow-rating-embi-local]}
;   ;{:get-key :get-trounce-flow-rating-jaci                 :namespace "jasmine.trounceflow"  :asset "trounce-flow-rating-jaci"             :dispatch-key [:trounce-flow-rating-jaci]}
;
;   {:get-key :get-esg-summary-report                :namespace "jasmine.positions"  :asset  "esg-summary-report"          :dispatch-key [:esg/summary-report]}
;   {:get-key :get-esg-carbon-jasmine                :namespace "common.ninetyoneapi":asset "esg-jasmine-data-cache"       :dispatch-key [:esg/carbon-jasmine]}
;   {:get-key :get-ccc-weight                        :namespace "jasmine.positions"  :asset  "msci-ccc-weight"             :dispatch-key [:esg/msci-ccc-weight]}
;   {:get-key :get-esg-gb-report-analytics           :namespace "common.static" :asset  "gb-analytics"                  :dispatch-key [:esg/gb-analytics]}
;   {:get-key :get-esg-tf-report-analytics           :namespace "common.static" :asset  "tf-analytics"                  :dispatch-key [:esg/tf-analytics]}
;   {:get-key :get-betas                             :namespace "jasmine.betas" :asset "unique-bonds"          :dispatch-key [:betas/table]}
;   {:get-key :get-quant-rating-curves               :namespace "jasmine.quantscreen.qsdata" :asset "rating-curves" :dispatch-key [:quant-model/rating-curves]}
;   {:get-key :get-quant-rating-curves-sov-only      :namespace "jasmine.quantscreen.qsdata" :asset  "rating-curves-sov-only" :dispatch-key [:quant-model/rating-curves-sov-only]}
;   {:get-key :get-generic-rating-curves             :namespace "jasmine.quantscreen.qsdata" :asset "generic-rating-curves" :dispatch-key [:quant-model/generic-rating-curves]}
;   {:get-key :get-model-date                        :namespace "jasmine.quantscreen.qsdata" :asset "model-date"          :dispatch-key [:quant-model/model-date]}
;
;   {:get-key :get-integrity                         :namespace "jasmine.integrity"  :asset "integrity-map"        :dispatch-key [:integrity]}
;   {:get-key :get-portfolio-checks                  :namespace "jasmine.integrity"  :asset "portfolio-check-map" :dispatch-key [:portfolio-checks]}
;   {:get-key :get-talanx-checks                     :namespace "jasmine.integrity"  :asset "talanx-check-map"    :dispatch-key [:talanx-checks]}
;   {:get-key :get-mure-checks                       :namespace "jasmine.integrity"  :asset "mure-check-map"    :dispatch-key [:mure-checks]}
;   {:get-key :get-ogemigc-nr-bucket                 :namespace "jasmine.integrity"  :asset "ogemigc-nr-map"  :dispatch-key [:ogemigc-nr-bucket]}
;   {:get-key :get-off-bm-exposure                   :namespace "jasmine.integrity"  :asset "off-bm-exposure-map"  :dispatch-key [:off-bm-exposure-map]}
;   {:get-key :get-msci-scores                       :namespace "jasmine.quantscreen.msci"  :asset "esg-msci-data-cache" :dispatch-key [:esg/msci-scores]}
;   {:get-key :get-ungc-problem-securities           :namespace "jasmine.quantscreen.msci"  :asset "ungc-problem-securities" :dispatch-key [:esg/ungc-problem-securities]}
;   {:get-key :get-esg-analyst-commentary            :namespace "common.xlscsvassets"  :asset "esg-analyst-commentary" :dispatch-key [:esg/analyst-commentary]}
;   {:get-key :get-global-debt-and-equity-levels     :namespace "common.xlscsvassets"  :asset "global-debt-and-equity-levels" :dispatch-key [:global-debt-and-equity-levels]}
;
;   {:get-key :get-exclu-talanx                      :namespace "common.xlscsvassets"  :asset "exclu-talanx" :dispatch-key [:exclu-talanx]}
;   {:get-key :get-exclu-allianz-aim                 :namespace "common.xlscsvassets"  :asset "exclu-allianz-aim" :dispatch-key [:exclu-allianz-aim]}
;   {:get-key :get-exclu-allianz-grgr                :namespace "common.xlscsvassets"  :asset "exclu-allianz-grgr" :dispatch-key [:exclu-allianz-grgr]}
;   {:get-key :get-exclu-ezvk                        :namespace "common.xlscsvassets"  :asset "exclu-ezvk" :dispatch-key [:exclu-ezvk]}
;   {:get-key :get-exclu-kzvk                        :namespace "common.xlscsvassets"  :asset "exclu-kzvk" :dispatch-key [:exclu-kzvk]}
;   {:get-key :get-exclu-mure-og                     :namespace "common.xlscsvassets"  :asset "exclu-mure-og" :dispatch-key [:exclu-mure-og]}
;   {:get-key :get-exclu-mure-x-rus-issuers          :namespace "common.xlscsvassets"  :asset "exclu-mure-x-rus-issuers" :dispatch-key [:exclu-mure-x-rus-issuers]}
;   {:get-key :get-exclu-mure-x-rus-gri                   :namespace "common.xlscsvassets"  :asset "exclu-mure-x-rus-gri" :dispatch-key [:exclu-mure-x-rus-gri]}
;   {:get-key :get-exclu-mure-rus-issuers            :namespace "common.xlscsvassets"  :asset "exclu-mure-rus-issuers" :dispatch-key [:exclu-mure-rus-issuers]}
;   {:get-key :get-exclu-mure-rus-gri                :namespace "common.xlscsvassets"  :asset "exclu-mure-rus-gri" :dispatch-key [:exclu-mure-rus-gri]}
;
;
;   {:get-key :get-issuer-coverage                   :namespace "jasmine.quantscreen.issuernotes"  :asset "issuer-notes"              :dispatch-key [:quant-model/issuer-coverage]}
;   {:get-key :get-refresh-attribution               :namespace "jasmine.core"                 :asset "build-attribution!"              :dispatch-key [:dummy]}
;   {:get-key :get-refresh-sedols                    :namespace "jasmine.quantscreen.blpload"  :asset "refresh-sedols-sm!"              :dispatch-key [:dummy]}
;   {:get-key :get-refresh-tf-ids                    :namespace "jasmine.quantscreen.blpload"  :asset "refresh-tf-ids-sm!"              :dispatch-key [:dummy]}
;   {:get-key :get-backtest-output                   :namespace "jasmine.backtesting.momentum"  :asset "backtest-output"              :dispatch-key [:backtest-output]}
;   {:get-key :get-stress-test-results               :namespace "jasmine.stresstest"  :asset "stress-test-results"              :dispatch-key [:stresstest/results]}
;   {:get-key :get-stress-test-scenarios             :namespace "jasmine.stresstest"  :asset "stress-test-scenarios-for-gui"            :dispatch-key [:stresstest/scenarios]}
;
;   ])
;
;(doseq [line simple-http-get-events]
;  (rf/reg-event-fx
;    (:get-key line)
;    (fn [{:keys [db]} [_]]
;      (if (zero? (count (get-in db [(:dis-key line)])))     ;if it wasn't mounted yet we need to load it
;        {:db (if (:mounting-modal line) (assoc db :navigation/show-mounting-modal true) db) ;some events take time, let's show a throbber
;         :http-get-dispatch {:url           (str static/server-address (:url-tail line))
;                             :dispatch-key  [(:dis-key line)]}}))))
;
;(doseq [line simple-http-assets]
;  (rf/reg-event-fx
;    (:get-key line)
;    (fn [{:keys [db]} [_]]
;      (if (zero? (count (get-in db (:dispatch-key line))))     ;if it wasn't mounted yet we need to load it
;        {:db (if (:mounting-modal line) (assoc db :navigation/show-mounting-modal true) db) ;some events take time, let's show a throbber
;         :http-get-asset line}))))
;
;(rf/reg-event-fx
;  :implementation-list-request
;  (fn [{:keys [db]} [_]]
;    {:db             db
;     :http-get-asset {:namespace "jasmine.implementation" :asset "list-all-implementations" :dispatch-key [:implementation/implementation-list]}}))
;
;
;(rf/reg-event-fx
;  :get-var-data
;  (fn [{[db] :keys} [_ portfolio]]
;    {:http-get-dispatch {:url          (str static/server-address "var-data?portfolio=" portfolio)
;                         :dispatch-key [:var/data]}}))
;
;
;
;
;(rf/reg-event-fx
;  :get-naked-positions-timestamp
;  (fn [{:keys [db]} [_]]
;    {:http-get-dispatch {:url          (str static/server-address "last-updated")
;                         :dispatch-key [:check-naked-positions-timestamp]}}))
;
;(rf/reg-event-fx
;  :get-portfolio-var
;  (fn [{:keys [db]} [_ portfolio]]
;    {:db (assoc db :var/portfolio portfolio)
;     :http-get-dispatch {:url          (str static/server-address "var-data?portfolio=" portfolio)
;                         :dispatch-key [:var/data]}}))
;
;;SINGLE ATTRIBUTION
;(rf/reg-event-fx
;  :get-single-attribution
;  (fn [{:keys [db]} [_ portfolio period]]
;    {:http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" portfolio "&period=" period)
;                         :dispatch-key [:single-portfolio-attribution/table]}}))
;
;(rf/reg-event-fx
;  :change-single-attribution-portfolio
;  (fn [{:keys [db]} [_ portfolio]]
;    {:db (assoc db :single-portfolio-attribution/portfolio portfolio :navigation/show-mounting-modal true)
;     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" portfolio "&period=" (:single-portfolio-attribution/period db))
;                         :dispatch-key [:single-portfolio-attribution/table]}}))
;
;(rf/reg-event-fx
;  :change-single-attribution-period
;  (fn [{:keys [db]} [_ period]]
;    {:db (assoc db :single-portfolio-attribution/period period  :navigation/show-mounting-modal true)
;     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" (:single-portfolio-attribution/portfolio db) "&period=" period)
;                         :dispatch-key [:single-portfolio-attribution/table]}}))
;
;;MULTIPLE ATTRIBUTION
;(rf/reg-event-fx
;  :get-multiple-attribution
;  (fn [{:keys [db]} [_ target period]]
;    {:db (assoc db  :navigation/show-mounting-modal true)
;     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" period)
;                         :dispatch-key [:multiple-portfolio-attribution/table]}}))
;
;(rf/reg-event-fx
;  :change-multiple-attribution-target
;  (fn [{:keys [db]} [_ ktarget]]
;    (let [target (.replace ^string (get-in tables/attribution-table-columns [ktarget :accessor]) "-" " ")]
;      {:db                (assoc db :multiple-portfolio-attribution/field-one ktarget  :navigation/show-mounting-modal true)
;       :http-get-dispatch {:url          (str static/server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" (:multiple-portfolio-attribution/period db))
;                           :dispatch-key [:multiple-portfolio-attribution/table]}})))
;
;(rf/reg-event-fx
;  :change-multiple-attribution-period
;  (fn [{:keys [db]} [_ period]]
;    (let [target (.replace ^string (get-in tables/attribution-table-columns [(:multiple-portfolio-attribution/field-one db) :accessor]) "-" " ")]
;      {:db                (assoc db :multiple-portfolio-attribution/period period  :navigation/show-mounting-modal true)
;       :http-get-dispatch {:url          (str static/server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" period)
;                           :dispatch-key [:multiple-portfolio-attribution/table]}})))
;
;;scorecard
;
;(rf/reg-event-fx
;  :get-scorecard-attribution
;  (fn [{:keys [db]} [_ portfolio]]
;    {:http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio-wtd-ytd&portfolio=" portfolio)
;                         :dispatch-key [:scorecard/attribution-table]}}))
;
;;INDEX RETURNS
;(rf/reg-event-fx
;  :get-attribution-index-returns-portfolio
;  (fn [{:keys [db]} [_ portfolio]]
;    {:db (assoc db :attribution-index-returns/portfolio portfolio)
;     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" portfolio "&period=" (:attribution-index-returns/period db))
;                         :dispatch-key [:attribution-index-returns/table]}}))
;
;(rf/reg-event-fx
;  :get-attribution-index-returns-period
;  (fn [{:keys [db]} [_ period]]
;    {:db (assoc db :attribution-index-returns/period period)
;     :http-get-dispatch {:url          (str static/server-address "attribution?query-type=single-portfolio&portfolio=" (:attribution-index-returns/portfolio db) "&period=" period)
;                         :dispatch-key [:attribution-index-returns/table]}}))
