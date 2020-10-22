(ns jasminegui.static)

(def server-address ({:prod "http://iamlfilive:3501/" :dev "http://localhost:3501/"} :prod))

(def main-navigation
  (let [home-events [:get-qt-date :get-positions :get-pivoted-positions :get-total-positions :get-large-exposures]
        attr-events [:get-attribution-date :get-attribution-summary :get-attribution-available-months [:get-single-attribution "OGEMCORD" "ytd"] [:get-attribution-index-returns-portfolio "OGEMCORD" "ytd"] [:get-multiple-attribution "Total Effect" "ytd"] [:get-portfolio-review-summary-data "OGEMCORD"]]
        var-events  [:get-var-dates :get-var-proxies [:get-portfolio-var "OGEMCORD"]]]
  [{:code :home             :name "Holdings"          :dispatch :home             :subs nil :load-events home-events :mounting-modal true}
   {:code :attribution      :name "Performance"       :dispatch :attribution      :subs nil :load-events attr-events}
   {:code :var              :name "VaR"               :dispatch :var              :subs nil :load-events var-events}
   {:code :portfolio-review :name "Portfolio review"  :dispatch :portfolio-review :subs nil :load-events (concat home-events attr-events var-events) :mounting-modal true}
   {:code :betas            :name "Bond betas"        :dispatch :betas            :subs nil :load-events [:get-betas]}
   {:code :quant-scores     :name "Quant scores WIP"  :dispatch :quant-scores     :subs nil :load-events [:get-quant-model :get-country-codes :get-quant-rating-curves] :mounting-modal true}
   {:code :esg              :name "Refinitiv"         :dispatch :esg              :subs nil :load-events [:get-refinitiv-ids :get-refinitiv-structure]}
   {:code :trade-analyser   :name "Trade analyser"    :dispatch :home             :subs nil :href "http://iamlfilive:8192/tradeanalyser/app/"}
   {:code :administration   :name "Administration"    :dispatch :administration   :subs nil}]))

(def risk-navigation
  [{:code :summary             :name "Overview"}
   {:code :single-portfolio    :name "Single portfolio"}
   {:code :all-portfolios      :name "Multiple portfolios"}
   {:code :portfolio-alignment :name "Portfolio alignment"}
   {:code :trade-history       :name "Trade history"}
   {:code :large-exposures     :name "Large exposures"}])

(def attribution-navigation
  [{:code :summary             :name "Overview"}
   {:code :single-portfolio    :name "Single portfolio"}
   {:code :all-portfolios      :name "Multiple portfolios"}
   {:code :index-returns       :name "Index returns"}])

(def var-navigation
  [{:code :overview            :name "Overview"}
   ;   {:code :marginal            :name "Marginals"}
   {:code :proxies             :name "Proxies"}])

(def qs-navigation
  [{:code :table              :name "Table"}
   {:code :calculator         :name "Calculator"}
   {:code :spot-charts        :name "Spot charts"}
   {:code :historical-charts  :name "Historical charts - WIP"}
   {:code :top-bottom         :name "Most expensive / cheap"}
   {:code :trade-finder       :name "Trade finder"}
   {:code :methodology        :name "Methodology"}])

(def esg-navigation
  [{:code :find-issuers            :name "Find issuer"}
   {:code :table-top-view          :name "Top level results"}
   {:code :table-detailed-view     :name "Detailed results"}])

(def risk-choice-map
  [{:id "None"         :label "None"}
   {:id :region        :label "Region"}
   {:id :country       :label "Country"}
   {:id :issuer        :label "Issuer"}
   {:id :rating-score  :label "Rating"}
   {:id :sector        :label "Sector"}
   {:id :maturity-band :label "Maturity"}])

(def attribution-choice-map
  [{:id "None"         :label "None"}
   {:id :region        :label "Region"}
   {:id :country       :label "Country"}
   {:id :issuer        :label "Issuer"}
   {:id :invrtg        :label "Rating"}
   {:id :sector        :label "Sector"}
   {:id :maturity-band :label "Maturity"}])


(def portfolio-alignment-groups
  [{:id :cembi   :label "CEMBI"   :portfolios ["OGEMCORD" "AIFGLBCD" "IBSGEMD" "IPPFCORP" "IVGVEMCD" "IMETEMCD" "IKZVKEMD"]}
   {:id :allianz :label "Allianz" :portfolios ["IALEEMCD" "IAUNEMCD" "IAPKEMCD" "IAKLEMCD"]}
   {:id :ig      :label "IG"      :portfolios ["OGEMIGC" "ICIFEMD" "IBNPPEMD"]}
   {:id :talanx  :label "Talanx"  :portfolios ["ITLNXEMD" "ITLXEMD" "ITLXEMD3"]}])

(def risk-field-choices
  [{:id "None"            :label "None"}
   {:id :nav              :label "NAV"}
   {:id :weight-delta     :label "NAV delta"}
   {:id :contrib-mdur     :label "M dur contribution"}
   {:id :mdur-delta       :label "M dur delta"}
   {:id :value            :label "Value"}
   {:id :nominal          :label "Nominal"}
   {:id :contrib-yield    :label "Yield contribution"}
   {:id :contrib-zspread  :label "Z-spread contribution"}
   {:id :contrib-gspread  :label "G-spread contribution"}
   {:id :contrib-beta     :label "Beta contribution"}])

(def attribution-field-choices
  [{:id "None"            :label "None"}
   {:id :total-effect     :label "Effect"}
   {:id :xs-weight        :label "Excess weight"}
   {:id :contribution     :label "Contribution"}
   {:id :bm-contribution  :label "BM contribution"}
   {:id :weight           :label "Weight"}
   {:id :bm-weight        :label "BM weight"}])

(def attribution-period-choices
  [{:id "ytd"     :label "YTD"}
   {:id "mtd"     :label "MTD"}
   {:id "wtd"     :label "WTD"}
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

(def tree-table-choices
  [{:id "Table" :label "Table"} {:id "Tree" :label "Tree"}])

(def var-charts-choice-map [{:id :daily-1y   :label "Daily 1y"   :frequency :daily   :period 1}
                            {:id :daily-3y   :label "Daily 3y"   :frequency :daily   :period 3}
                            {:id :weekly-1y  :label "Weekly 1y"  :frequency :weekly  :period 1}
                            {:id :weekly-3y  :label "Weekly 3y"  :frequency :weekly  :period 3}
                            {:id :monthly-1y :label "Monthly 1y" :frequency :monthly :period 1}
                            {:id :monthly-3y :label "Monthly 3y" :frequency :monthly :period 3}])
