(ns jasminegui.static)

(def server-address ({:prod "http://iamlfilive:3501/" :dev "http://localhost:3501/"} :dev)) ;WARNING
(def ta-server-address "http://iamlfilive:3500/")

(def main-navigation                                        ;:get-pivoted-positions                                       ;
  (let [home-events [:get-qt-date :get-total-positions   :get-naked-positions :get-instruments] ;:get-positions
        attr-events [:get-attribution-date :get-attribution-summary :get-attribution-available-months [:get-single-attribution "OGEMCORD" "ytd"] [:get-attribution-index-returns-portfolio "OGEMCORD" "ytd"] [:get-multiple-attribution "Total Effect" "ytd"] [:get-portfolio-review-summary-data "OGEMCORD"]]
        quant-events [:get-quant-model :get-country-codes :get-generic-rating-curves :get-jpm-sectors :get-model-portfolios :get-issuer-coverage :get-analysts]
        var-events [:get-var-dates :get-var-proxies [:get-portfolio-var "OGEMCORD"]]]
  [{:code :home             :name "Holdings"          :dispatch :home             :subs nil :load-events (conj home-events :get-portfolio-checks) :mounting-modal true}
   {:code :trade-history    :name "Trade history"     :dispatch :trade-history    :subs nil :load-events [:get-country-codes :get-jpm-sectors :get-model-portfolios :get-quant-model]}
   {:code :attribution      :name "Performance"       :dispatch :attribution      :subs nil :load-events attr-events}
   {:code :portfolio-review :name "Portfolio review"  :dispatch :portfolio-review :subs nil :load-events (concat home-events attr-events var-events [:get-large-exposures]) :mounting-modal true} ;var-events
   {:code :betas            :name "Bond betas"        :dispatch :betas            :subs nil :load-events [:get-betas]  :mounting-modal true}
   {:code :quant-scores     :name "Quant scores"      :dispatch :quant-scores     :subs nil :load-events quant-events :mounting-modal true}
   {:code :scorecard        :name "Scorecard"         :dispatch :scorecard        :subs nil :load-events (concat [:get-attribution-date [:get-scorecard-attribution "OGEMCORD"]] quant-events home-events) :mounting-modal true}
   {:code :esg              :name "ESG"               :dispatch :esg              :subs nil :load-events (concat home-events [:get-country-codes :get-refinitiv-ids :get-refinitiv-structure :get-msci-scores])}
   {:code :trade-analyser   :name "Trade analyser"    :dispatch :home             :subs nil :href "http://iamlfilive:8192/tradeanalyser/app/"}
   {:code :administration   :name "Administration"    :dispatch :administration   :subs nil}
   {:code :ta2022           :name "TA2022"            :dispatch :ta2022           :subs nil :load-events quant-events :mounting-modal true}]))

(def risk-navigation
  [{:code :summary             :name "Overview"}
   {:code :single-portfolio    :name "Single portfolio"}
   {:code :all-portfolios      :name "Multiple portfolios"}
   {:code :portfolio-checks    :name "Portfolios checks"}
   {:code :portfolio-alignment :name "Portfolio alignment"}
   {:code :concentration-risk  :name "Concentration risk"}
   {:code :irrisk              :name "Interest rate risk"}
   {:code :large-exposures     :name "Large exposures"}
   {:code :var                 :name "VaR and Beta"}
   {:code :proxies             :name "Bond proxies"}
   {:code :position-history    :name "Position history"}
   ])

(def trade-history-navigation
  [{:code :single-portfolio   :name "Single portfolio"}
   {:code :multiple-portfolio :name "Multiple portfolio"}
   {:code :recent-trades      :name "Recent trades"}
   ])

(def attribution-navigation
  [{:code :summary             :name "Overview"}
   {:code :single-portfolio    :name "Single portfolio"}
   {:code :all-portfolios      :name "Multiple portfolios"}
   {:code :index-returns       :name "Index returns"}])

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
   {:code :add-bonds            :name "Add bonds"}
   {:code :methodology          :name "Methodology"}
   {:code :issuer-coverage      :name "Issuer coverage"}
   {:code :model-portfolios     :name "Model portfolios (WIP)"}
   {:code :score-vs-outlook2    :name "Up/down candidates"}
   ])

(def esg-navigation
  [{:code :msci                 :name "MSCI"}
   {:code :holdings             :name "Holdings through MSCI"}
   {:code :esg-scores           :name "ESG summary report"}
   {:code :refinitiv            :name "Refinitiv"}
   {:code :esg-calculator       :name "Green bond calculator (beta)"}
   {:code :esg-engagements      :name "ESG interactions"}
   ])

(def ta2022-navigation
  [{:code :main                 :name "Table"}
   {:code :trade-view           :name "Trade view"}
   {:code :journal              :name "Journal"}
   ])

(def risk-choice-map
  [{:id "None"         :label "None"}
   {:id :region        :label "Region"}
   {:id :country       :label "Country"}
   {:id :issuer        :label "Issuer"}
   {:id :rating-score  :label "Rating"}
   {:id :sector        :label "Sector"}
   {:id :maturity-band :label "Maturity"}
   {:id :emd-region    :label "EMD region"}
   ])

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
  [{:id :cembi      :label "CEMBI"      :portfolios ["OGEMCORD" "ICSCEMCD" "IPPFCORP" "IVGVEMCD" "IEZVKEMD" "IMETEMCD" "IKZVKEMD"]}
   {:id :allianz    :label "Allianz"    :portfolios ["IALEEMCD" "IAUNEMCD" "IAPKEMCD" "IAKLEMCD"]}
   {:id :tr         :label "TR"         :portfolios ["AIFGLBCD" "OOGEMTRC" "INMIEMCD"]}
   {:id :ig         :label "IG"         :portfolios ["OGEMIGC" "ICIFEMD" "IBNPPEMD" "IKPOEMCD" "IYELEMCD"]}
   {:id :munichre   :label "Munich Re"  :portfolios ["IMRAGEMD" "IMEREMD1" "IMEREMD3" "IMRUSEMD"]}
   {:id :talanx     :label "Talanx USD" :portfolios ["ITLXEMD" "ITLNXEMD" "ITLXEMD3" "ITLXEMD5"]}
   {:id :otheremcd  :label "Other EMCD" :portfolios ["ITLXEMD4" "OGEMEMSD" "OGADB"]}
   {:id :hcd        :label "HCD"        :portfolios ["OGEMHCD" "IUSSEMD"]}
   {:id :dummies    :label "Models"     :portfolios ["OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE"]}
   ])

;{:id "None"            :label "None"}
(def risk-field-choices
  [{:id :nav                              :label "NAV"}
   {:id :weight-delta                     :label "NAV delta"}
   {:id :contrib-mdur                     :label "M dur contribution"}
   {:id :mdur-delta                       :label "M dur delta"}
   {:id :value                            :label "Value"}
   {:id :nominal                          :label "Nominal"}
   {:id :contrib-yield                    :label "Yield contribution"}
   {:id :contrib-zspread                  :label "Z-spread contribution"}
   {:id :contrib-gspread                  :label "G-spread contribution"}
   {:id :contrib-beta                     :label "EMCD Beta"}
   {:id :contrib-BBG_CEMBI_D1Y_BETA       :label "Bbg Beta"}
   {:id :contrib-delta-BBG_CEMBI_D1Y_BETA :label "Bbg Beta delta"}
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
   {:id :quarter        :label "0.25"}
   {:id :half           :label "0.50"}
   {:id :threequarters  :label "0.75"}
   {:id :one            :label "1.00"}])

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

(def position-historical-dates ["31Dec18"
                                "29Mar19"
                                "28Jun19"
                                "30Sep19"
                                "31Dec19"
                                "31Mar20"
                                "30Jun20"
                                "29Sep20"                            ; "30Sep20"
                                "31Dec20"
                                "29Jan21"
                                "26Feb21"
                                "31Mar21"
                                "29Apr21"                            ; "30Apr21"
                                "28May21"
                                "30Jun21"
                                "30Jul21"
                                "31Aug21"
                                "30Sep21"
                                "02Nov21"                             ; "29Oct21"
                                "30Nov21"
                                "31Dec21"
                                "31Jan22"
                                "28Feb22"
                                "31Mar22"])