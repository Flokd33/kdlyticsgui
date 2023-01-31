(ns jasminegui.static)

(def server-address ({:prod "http://iamlfilive:3501/" :dev "http://localhost:3501/"} :prod)) ;WARNING
(def ta-server-address "http://iamlfilive:3500/")
(def cms-address "http://iamlfilive:8192/tradeanalyser/cms/")

(def main-navigation                                        ;:get-pivoted-positions                                       ;
  (let [home-events [:get-qt-date :get-total-positions :get-naked-positions :get-instruments :get-quant-model]
        attr-events [:get-top-bottom-price-change :get-attribution-date :get-attribution-summary :get-attribution-available-months :get-list-dates-month-end-calendar [:get-portfolio-review-summary-data "OGEMCORD"]] ;[:get-single-attribution "OGEMCORD" "ytd"] [:get-attribution-index-returns-portfolio "OGEMCORD" "ytd"] [:get-multiple-attribution "Total Effect" "ytd"]
        quant-events [:get-betas :get-esg-report-list :get-model-date :get-quant-model :get-country-codes :get-generic-rating-curves :get-jpm-sectors :get-model-portfolios :get-issuer-coverage :get-analysts :get-master-security-fields :get-analysts [:post-esg-report-extract "XS2368781477" "2022-09-02" "green-bond"]]
        var-events [:get-var-dates :get-var-proxies [:get-portfolio-var "OGEMCORD"]]
        implementation-events (conj home-events :get-quant-model :get-analysts :get-country-codes :get-jpm-sectors :fx-request :portfolio-nav-request :get-live-cast-parent-positions :get-analyst-coverage)
        trounceflow-events [:get-trounce-flow-cash :get-trounce-flow-duration :get-trounce-flow-country :get-trounce-flow-country-change :get-trounce-flow-date :get-trounce-flow-cash-embi :get-trounce-flow-cash-embi-local :get-trounce-flow-duration-embi :get-trounce-flow-duration-embi-local]
        ]
  [{:code :home             :name "Holdings"          :dispatch :home             :subs nil :load-events (conj home-events  :get-list-dates-position-history :get-portfolio-checks ) :mounting-modal true}
   {:code :trade-history    :name "Trade history"     :dispatch :trade-history    :subs nil :load-events (concat home-events [:get-country-codes :get-jpm-sectors :get-model-portfolios :get-quant-model])} ;need load position to identify what we still own among list of trade- not effici
   ;
   ; ~}@:/etn , need to review with Alex
   {:code :attribution      :name "Performance"       :dispatch :attribution      :subs nil :load-events attr-events}
   {:code :portfolio-review :name "Portfolio review"  :dispatch :portfolio-review :subs nil :load-events (concat home-events attr-events var-events [:get-large-exposures]) :mounting-modal true} ;var-events
   ;{:code :betas            :name "Bond betas"        :dispatch :betas            :subs nil :load-events [:get-betas]  :mounting-modal true}
   {:code :quant-scores     :name "Quant scores"      :dispatch :quant-scores     :subs nil :load-events quant-events :mounting-modal true}
   {:code :scorecard        :name "Scorecard"         :dispatch :scorecard        :subs nil :load-events (concat [:get-attribution-date [:get-scorecard-attribution "OGEMCORD"]] quant-events home-events) :mounting-modal true}
   {:code :esg              :name "ESG"               :dispatch :esg              :subs nil :load-events (concat home-events [:get-esg-carbon-jasmine :get-analysts-emcd :get-esg-tf-report-analytics :get-esg-gb-report-analytics :get-esg-report-list  [:post-esg-report-extract "XS2368781477" "2022-09-02" "green-bond"]  :get-analysts :get-country-codes :get-refinitiv-ids :get-refinitiv-structure :get-msci-scores :get-quant-model])}
   ;{:code :trade-analyser   :name "Trade analyser"    :dispatch :home             :subs nil :href "http://iamlfilive:8192/tradeanalyser/app/"}
   {:code :ta2022           :name "Trade analyser"            :dispatch :ta2022           :subs nil :load-events quant-events :mounting-modal true}
   {:code :implementation   :name "Implementation"    :dispatch :implementation   :subs nil :load-events implementation-events :mounting-modal true}
   {:code :knowledge             :name "Knowledge"          :dispatch :knowledge             :subs nil}
   {:code :administration   :name "Administration"    :dispatch :administration   :subs nil}
   ]))


(def risk-navigation
  [{:code :summary                :name "Overview"}
   {:code :single-portfolio       :name "Single portfolio"}
   {:code :all-portfolios         :name "Multiple portfolios"}
   {:code :portfolio-checks       :name "Portfolios checks"}
   {:code :portfolio-alignment    :name "Portfolio alignment"}
   {:code :concentration-risk     :name "Concentration risk"}
   {:code :irrisk                 :name "Single IR risk"}
   {:code :irrisk-multiple        :name "Multiple IR risk"}
   {:code :large-exposures        :name "Large exposures"}
   {:code :var                    :name "VaR and Beta"}
   {:code :proxies                :name "Bond proxies"}
   {:code :stresstest             :name "Stress test"}
   {:code :portfolio-history      :name "Portfolio history"}
   {:code :position-history       :name "Position history"}


   ])

(def trade-history-navigation
  [{:code :single-portfolio   :name "Single portfolio"}
   {:code :multiple-portfolio :name "Multiple portfolio"}
   {:code :recent-trades      :name "Recent trades"}
   {:code :recent-trades-perf :name "Recent trades 2"}])

(def attribution-navigation
  [{:code :summary             :name "Overview"}
   {:code :single-portfolio    :name "Single portfolio"}
   {:code :all-portfolios      :name "Multiple portfolios"}
   {:code :history             :name "History"}
   {:code :analytics           :name "Analytics"}
   {:code :index-returns       :name "Index returns"}
   {:code :top-bottom-pr       :name "Top/bottom universe"}
   {:code :strategies          :name "Strategies"}
   {:code :emd-weekly          :name "EMD weekly"}])

(def var-navigation
  [{:code :overview            :name "Overview"}
   {:code :proxies             :name "Proxies"}])

(def qs-navigation
  [{:code :table                :name "Table"}
   {:code :calculator           :name "Calculator"}
   {:code :spot-charts          :name "Spot charts"}
   {:code :advanced-spot-charts :name "Advanced spot charts"}
   {:code :historical-charts    :name "Historical charts"}
   {:code :top-bottom           :name "Most expensive / cheap"}
   {:code :median               :name "Median spreads"}
   {:code :histograms           :name "Histograms"}
   {:code :trade-finder         :name "Trade finder"}
   {:code :universe-des         :name "Universe overview"}
   {:code :universe-harvest     :name "Universe harvest"}
   {:code :index-crawler        :name "Index crawler"}
   {:code :master-security      :name "Security master"}
   ;{:code :methodology          :name "Methodology"}
   {:code :issuer-coverage      :name "Issuer coverage"}
   {:code :model-portfolios     :name "Model portfolios (WIP)"}
   {:code :score-vs-outlook2    :name "Up/down candidates"}
   {:code :betas                :name "Bond betas"}])

;{:code :msci                       :name "MSCI"}
(def esg-navigation
  [{:code :esg-data                   :name "ESG data"}
   {:code :holdings                   :name "Holdings through MSCI"}
   {:code :ungc                       :name "UNGC problem securities"}
   {:code :esg-scores                 :name "ESG summary report"}
   {:code :esg-commentary             :name "ESG analyst commentary"}
   {:code :refinitiv                  :name "Refinitiv"}
   {:code :gb-scoring                 :name "Green bond scoring (beta)"}
   {:code :tf-scoring                 :name "Transition fund scoring (beta)"}
   {:code :reporting                  :name "Scoring report (beta)"}
   {:code :esg-report-analytics-gb    :name "Scoring analytics GB (beta)"}
   {:code :esg-report-analytics-tf    :name "Scoring analytics TF (beta)"}
   {:code :esg-engagements            :name "ESG interactions"}])

(def ta2022-navigation
  [{:code :main                 :name "Table"}
   {:code :trade-view           :name "Trade view"}
   {:code :journal              :name "Journal"}])

(def knowledge-navigation
  [                                                         ;{:code :entry             :name "Home"}
   {:code :mandates             :name "Mandates"}
   {:code :exclusions           :name "Exclusions"}
   {:code :cre                 :name "China real estate"}
   {:code :allianz-loss-report    :name "Allianz P&L budget"}                   ;"Allianz P&L budget"
   {:code :gdel                   :name "Global debt levels"}
   {:code :trounce-flow           :name "Trounceflow"}])

(def risk-choice-map
  [{:id "None"         :label "None"}
   {:id :region        :label "Region"}
   {:id :country       :label "Country"}
   {:id :issuer        :label "Issuer"}
   {:id :rating-score  :label "Rating"}
   {:id :sector        :label "Sector"}
   {:id :maturity-band :label "Maturity"}
   {:id :emd-region    :label "EMD region"}])

(def risk-choice-map-history
  [{:id "None"                      :label "None"}
   {:id :jpm-region                 :label "Region"}
   {:id :qt-risk-country-code       :label "Country"}
   {:id :issuer                     :label "Issuer"}
   {:id :rating-score               :label "Rating"}
   {:id :sector                     :label "Sector"}
   {:id :maturity-band              :label "Maturity"}
   {:id :emd-region                 :label "EMD region"}])

(def attribution-choice-map
  [{:id "None"         :label "None"}
   {:id :region        :label "Region"}
   {:id :country       :label "Country"}
   {:id :issuer        :label "Issuer"}
   {:id :invrtg        :label "Rating"}
   {:id :sector        :label "Sector"}
   {:id :maturity-band :label "Maturity"}])

(def quant-harvest-choice-map
  [{:id "None"         :label "None"}
   {:id :LongCountry   :label "Country"}
   {:id :StringRating  :label "Rating"}
   {:id :Sector        :label "Sector"}
   {:id :DurationGroup :label "Duration"}])

(def scorecard-navigation
  [{:code :risk             :name "Risk"}
   {:code :ogemcord-perf    :name "OGEMCORD attribution"}
   {:code :ogemigc-perf     :name "OGEMIGC attribution"}])


(def portfolio-alignment-groups
  [{:id :cembi      :label "CEMBI"      :portfolios ["OGEMCORD" "ICSCEMCD" "IVGVEMCD" "IEZVKEMD" "IKZVKEMD"]}
   {:id :allianz    :label "Allianz"    :portfolios ["IALEEMCD" "IAUNEMCD" "IAPKEMCD" "IAKLEMCD"]}
   {:id :tr         :label "TR"         :portfolios ["AIFGLBCD" "OOGEMTRC" "INMIEMCD" "INLIEMCD"]}
   {:id :ig         :label "IG"         :portfolios ["OGEMIGC" "ICIFEMD" "IKPOEMCD" "IYELEMCD"]}
   {:id :munichre   :label "Munich Re"  :portfolios ["IMRAGEMD" "IMEREMD1" "IMEREMD3" "IMRUSEMD"]}
   {:id :talanx     :label "Talanx USD" :portfolios ["ITLXEMD" "ITLNXEMD" "ITLXEMD3" "ITLXEMD5"]}
   {:id :otheremcd  :label "Other EMCD" :portfolios ["ITLXEMD4" "OGADB" "OGEMCRED"]}
   {:id :hcd        :label "HCD"        :portfolios ["OGEMHCD" "IUSSEMD" "IOTPEMHC" "IOTPECON" ]}
   {:id :models     :label "Models"     :portfolios ["TRANSLIQU" "CEMBIHY" "INLFROMINM" "INLFROMCEMBI" "OGTRCRED"]}
   {:id :dummies    :label "Models"     :portfolios ["CEMBI"]}
   ;{:id :dummies    :label "Models"     :portfolios ["OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE"]}
   ])

(def portfolio-alignment-groups-eq
  [{:id :cembi      :label "CEMBI"      :portfolios ["OGEMCORD" "ICSCEMCD" "IVGVEMCD" "IEZVKEMD" "IKZVKEMD"]}
   {:id :allianz    :label "Allianz"    :portfolios ["IALEEMCD" "IAUNEMCD" "IAPKEMCD" "IAKLEMCD"]}
   {:id :tr         :label "TR"         :portfolios ["AIFGLBCD" "OOGEMTRC"]}
   {:id :nationwide :label "Nationwide" :portfolios ["INMIEMCD" "INLIEMCD"]}
   {:id :ig         :label "IG"         :portfolios ["OGEMIGC" "ICIFEMD" "IKPOEMCD" "IYELEMCD"]}
   {:id :munichre   :label "Munich Re"  :portfolios ["IMRAGEMD" "IMEREMD1" "IMEREMD3" "IMRUSEMD"]}
   {:id :talanx     :label "Talanx USD" :portfolios ["ITLXEMD" "ITLNXEMD" "ITLXEMD3" "ITLXEMD5"]}
   {:id :otheremcd  :label "Other EMCD" :portfolios ["ITLXEMD4" "OGADB" "OGEMCRED"]}
   {:id :hcd        :label "HCD"        :portfolios ["OGEMHCD" "IUSSEMD" "IOTPEMHC" "IOTPECON"]}
   {:id :equity-tc  :label "4F TCORP"   :portfolios ["OGEMEQU" "IMAKOEME" "ITCOREME"]}
   {:id :equity-eme :label "4F Core"    :portfolios ["OGEMEQU" "AUTEME" "IAMPEME" "IBOMCAEME" "IFSBAEME" "IGARDEME" "IGESBEME" "IHOSTEME" "IMGIEMEQ" "INEPTUNE" "ITASEME2" "O40EME" "OGEMMAE" "OLLCEMEQ" "U4EMEQY" "ICPRLEME" "IHPEEEME"]}
   {:id :equity-india :label "4F India" :portfolios ["OGEMEQU" "IGARDEME" "IMERGEME"]}
   {:id :equity-esg :label "4F ESG"     :portfolios ["OGEMEQU" "IAEM1EME" "IBRUNEME" "IBTNZEME" "IHARRIER"]}
   ])

;{:id "None"            :label "None" }
(def risk-field-choices
  [{:id :nav                              :label "NAV"}
   {:id :weight-delta                     :label "NAV delta"}
   {:id :contrib-mdur                     :label "M dur contribution"}
   {:id :mdur-delta                       :label "M dur delta"}
   {:id :contrib-beta                     :label "EMCD Beta"}
   {:id :nominal                          :label "Nominal"}
   {:id :duration-times-spread-weight     :label "DTS"}
   {:id :value                            :label "Value"}
   {:id :contrib-yield                    :label "Yield contribution"}
   {:id :contrib-zspread                  :label "Z-spread contribution"}
   {:id :contrib-gspread                  :label "G-spread contribution"}
   {:id :contrib-BBG_CEMBI_D1Y_BETA       :label "Bbg CEMBI Beta"}
   {:id :contrib-delta-BBG_CEMBI_D1Y_BETA :label "Bbg CEMBI Beta delta"}
   {:id :contrib-BBG_CEMBIIG_D1Y_BETA       :label "Bbg CEMBI IG Beta"}
   {:id :contrib-delta-BBG_CEMBIIG_D1Y_BETA :label "Bbg CEMBI IG Beta delta"}
   {:id :contrib-BBG_EMBI_D1Y_BETA       :label "Bbg EMBI Beta"}
   {:id :contrib-delta-BBG_EMBI_D1Y_BETA :label "Bbg EMBI Beta delta"}
   {:id :quant-value-4d                   :label "Quant value 4D"}
   {:id :quant-value-2d                   :label "Quant value 2D"}])


(def attribution-field-choices
  [
   ;{:id "None"            :label "None"}
   {:id :total-effect     :label "Effect"}
   {:id :xs-weight        :label "Excess weight"}
   {:id :contribution     :label "Contribution"}
   {:id :bm-contribution  :label "BM contribution"}
   {:id :weight           :label "Weight"}
   {:id :bm-weight        :label "BM weight"}])

(def attribution-period-choices
  [{:id "ytd"     :label "YTD"}
   {:id "mtd"     :label "MTD"}
   {:id "wtd"     :label "Weekly"}
   {:id "day"     :label "Day"}])

(def field-choices-alignment
  [{:id :nav          :label "NAV"}
   {:id :contrib-mdur :label "M dur contribution"}])

(def threshold-choices-alignment
  [{:id :zero           :label "0.00"}
   {:id :tenth          :label "0.10"}
   {:id :quarter        :label "0.25"}
   {:id :half           :label "0.50"}
   {:id :threequarters  :label "0.75"}
   {:id :one            :label "1.00"}])

(def threshold-choices-attribution                          ; 1 => 1bps
  [{:id :zero          :label "0"}
   {:id :one           :label "1"}
   {:id :two           :label "2"}
   {:id :three         :label "3"}
   {:id :five          :label "5"}
   {:id :ten           :label "10"}
   {:id :quarter       :label "25"}
   {:id :half          :label "50"}
   {:id :one-perc      :label "100"}])

(def tree-table-choices [{:id "Table" :label "Table"} {:id "Tree" :label "Tree"}])

(def var-charts-choice-map [{:id :daily-1y   :label "Daily 1y"   :frequency :daily   :period 1}
                            {:id :daily-3y   :label "Daily 3y"   :frequency :daily   :period 3}
                            {:id :weekly-1y  :label "Weekly 1y"  :frequency :weekly  :period 1}
                            {:id :weekly-3y  :label "Weekly 3y"  :frequency :weekly  :period 3}
                            {:id :monthly-1y :label "Monthly 1y" :frequency :monthly :period 1}
                            {:id :monthly-3y :label "Monthly 3y" :frequency :monthly :period 3}])

(def other-portfolios
  [{:strategy "Blend" :portfolios ["FOGEMBLCR" "FU4EMBLCR" "FOLLCBLN" "FNYEMD" "FNYAKEMD" "ICOMPEMD" "ITOPEMD" "IWHITEMD" "INSWIEMD" "IGARDEMD" "OGEMMUL" "FAPFCEMD" "IBPEMCRD"]}
   {:strategy "Hard currency" :portfolios ["OGEMHCD" "IUSSEMD"]}
   {:strategy "Target return" :portfolios ["OGGBOND" "OLLCGUF"]}])


(def ta-strategy-choices
  (into {} (for [line
                 [{:id "Growth risk on"           :label "Growth risk on"         :group "Top down"           :shortcut "TD growth"}
                  {:id "Duration risk on"         :label "Duration risk on"       :group "Top down"           :shortcut "TD duration"}
                  {:id "Risk off"                 :label "Risk off"               :group "Top down"           :shortcut "TD risk off"}
                  {:id "Long end technical bid"   :label "Long end technical bid" :group "Top down"           :shortcut "TD lifers"}
                  {:id "Momentum"                 :label "Momentum"               :group "Bottom up"          :shortcut "BU momentum"}
                  {:id "Value high conviction"    :label "Value high conviction"  :group "Bottom up"          :shortcut "BU HC"}
                  {:id "Value relative"           :label "Value relative"         :group "Bottom up"          :shortcut "BU relval"}
                  {:id "Value low conviction"     :label "Value low conviction"   :group "Bottom up"          :shortcut "BU LC"}
                  {:id "Market perform"           :label "Market perform"         :group "Available for sale" :shortcut "FS MP"}
                  {:id "Cash proxy"               :label "Cash proxy"             :group "Available for sale" :shortcut "FS cash"}
                  {:id "Keen to sell"             :label "Keen to sell"           :group "Available for sale" :shortcut "FS keen"}
                  {:id "Active exit"              :label "Active exit"            :group "Available for sale" :shortcut "FS exit"}
                  {:id "Hedging"                  :label "Hedging"                :group "Other"              :shortcut "Oth hedge"}
                  {:id "Event driven"             :label "Event driven"           :group "Other"              :shortcut "Oth event"}
                  ]] [(line :id) (line :shortcut)])))


(def position-historical-dates ["20181231"
                                "20190329"
                                "20190628"
                                "20190930"
                                "20191231"
                                "20200331"
                                "20200630"
                                "20200929"                            ; "30Sep20"
                                "20201231"
                                "20210129"
                                "20210226"
                                "20210331"
                                "20210429"                            ; "30Apr21"
                                "20210528"
                                "20210630"
                                "20210730"
                                "20210831"
                                "20210930"
                                "20211102"                             ; "29Oct21"
                                "20211130"

                                "20211231"
                                "20220131"
                                "20220228"
                                "20220331"
                                "20220430"
                                "20220531"
                                "20220630"
                                "20220729"
                                ])



