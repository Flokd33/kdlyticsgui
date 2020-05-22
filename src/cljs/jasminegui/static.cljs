(ns jasminegui.static)


(def main-navigation
  [{:code :home           :name "Holdings"       :dispatch :home            :subs nil}
   {:code :trade-history  :name "Trade history"  :dispatch :trade-drilldown :subs [{:code :description :name "Description"} {:code :history :name "History"}]}
   {:code :trade-analyser :name "Trade analyser" :dispatch :home            :subs nil :href "http://iamlfilive:8192/tradeanalyser/app/"}
   {:code :performance    :name "Performance"    :dispatch :home            :subs nil :href "https://iamqsense.investecam.com/qsensesso/qps/logout?targetUri=https://iamqsense.investecam.com/qsensesso/sense/app/3bfbbbc8-1ee7-4416-821f-972aab0ff5f6/sheet/89876e6f-f163-4d38-86bd-95f863397253/state/analysis"}
   {:code :administration :name "Administration" :dispatch :administration  :subs nil}])

(def home-navigation
  [{:code :summary             :name "Overview"}
   {:code :single-portfolio    :name "Single portfolio"}
   {:code :all-portfolios      :name "Multiple portfolios"}
   {:code :portfolio-alignment :name "Portfolio alignment"}])

(def risk-choice-map [{:id "None"         :label "None"}
                      {:id :region        :label "Region"}
                      {:id :country       :label "Country"}
                      {:id :issuer        :label "Issuer"}
                      {:id :rating-score  :label "Rating"}
                      {:id :sector        :label "Sector"}])

(def portfolio-alignment-groups [{:id :cembi   :label "CEMBI"   :portfolios ["OGEMCORD" "AIFGLBCD" "IBSGEMD" "IPPFCORP" "IVGVEMCD" "IMETEMCD" "IKZVKEMD"]}
                                 {:id :allianz :label "Allianz" :portfolios ["IALEEMCD" "IAUNEMCD" "IAPKEMCD" "IAKLEMCD"]}
                                 {:id :ig      :label "IG"      :portfolios ["OGEMIGC" "ICIFEMD" "IBNPPEMD"]}
                                 {:id :talanx  :label "Talanx"  :portfolios ["ITLNXEMD" "ITLXEMD" "ITLXEMD3"]}])

(def field-choices
  [{:id "None"            :label "None"}
   {:id :nav              :label "NAV"}
   {:id :weight-delta     :label "NAV delta"}
   {:id :contrib-mdur     :label "M dur contribution"}
   {:id :mdur-delta       :label "M dur delta"}
   {:id :value            :label "Value"}
   {:id :nominal          :label "Nominal"}
   {:id :contrib-yield    :label "Yield contribution"}
   {:id :contrib-zspread  :label "Z-spread contribution"}
   {:id :contrib-gspread  :label "G-spread contribution"}])

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