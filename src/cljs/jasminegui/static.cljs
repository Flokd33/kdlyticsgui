(ns jasminegui.static)


(def main-navigation
  [{:code :home :name "Home" :dispatch :home :subs nil}
   {:code :trade-history :name "Trade history" :dispatch :trade-drilldown :subs [{:code :description :name "Description"} {:code :history :name "History"}]}
   {:code :administration :name "Administration" :dispatch :administration :subs nil}])

(def home-navigation
  [{:code :summary :name "Overview"}
   {:code :single-portfolio :name "Single portfolio"}
   {:code :all-portfolios :name "Multiple portfolios"}
   {:code :portfolio-alignment :name "Portfolio alignment"}])

(def risk-choice-map [{:id "None" :label "None"}
                      {:id :region :label "Region"}
                      {:id :country :label "Country"}
                      {:id :issuer :label "Issuer"}
                      {:id :rating-score :label "Rating"}
                      {:id :sector :label "Sector"}])

(def portfolio-alignment-groups [{:id :cembi :label "CEMBI" :portfolios ["OGEMCORD" "AIFGLBCD" "IBSGEMD" "IPPFCORP" "IVGVEMCD" "IMETEMCD" "IKZVKEMD"]}
                                 {:id :allianz :label "Allianz" :portfolios ["IALEEMCD" "IAUNEMCD" "IAPKEMCD" "IAKLEMCD"]}
                                 {:id :ig :label "IG" :portfolios ["OGEMIGC" "ICIFEMD" "IBNPEMD"]}
                                 {:id :talanx :label "Talanx" :portfolios ["ITLNXEMD" "ITLXEMD" "ITLXEMD3"]}])

(def field-choices
  [{:id "None" :label "None"}
   {:id :nav :label "NAV"}
   {:id :weight-delta :label "NAV delta"}
   {:id :contrib-mdur :label "M dur contribution"}
   {:id :mdur-delta :label "M dur delta"}
   {:id :value :label "Value"}
   {:id :nominal :label "Nominal"}
   {:id :contrib-yield :label "Yield contribution"}
   {:id :contrib-zspread :label "Z-spread contribution"}
   {:id :contrib-gspread :label "G-spread contribution"}])

(def field-choices-alignment
  [{:id :nav :label "NAV"}
   {:id :contrib-mdur :label "M dur contribution"}]
  )

(def threshold-choices-alignment
  [{:id :zero           :label "0.00"}
   {:id :quarter        :label "0.25"}
   {:id :half           :label "0.50"}
   {:id :threequarters  :label "0.75"}
   {:id :one            :label "1.00"}])