(ns jasminegui.static)


(def main-navigation
  [{:code :home   :name "Home"            :dispatch :home   :subs nil}
   {:code :trade-history  :name "Trade history"      :dispatch :trade-drilldown  :subs [{:code :description :name "Description"} {:code :history :name "History"}]}
   {:code :administration   :name "Administration"  :dispatch :administration   :subs nil}
   ])


(def home-navigation
  [{:code :summary               :name "Overview"}
   {:code :single-portfolio                :name "Single portfolio"}
   {:code :all-portfolios            :name "Multiple portfolios"}
   {:code :portfolio-alignment      :name "Portfolio alignment"}
   ]
  )



(def risk-choice-map [{:id "None" :label "None"}
                      {:id :region :label "Region"}
                      {:id :country :label "Country"}
                      {:id :issuer :label "Issuer"}
                      ;{:id :rating :label "Rating"}
                      {:id :rating-score :label "Rating"}
                      {:id :sector :label "Sector"}])


(def field-choices
  [{:id "None" :label "None"}
   {:id :nav :label "NAV"}
   {:id :value :label "Value"}
   {:id :nominal :label "Nominal"}
   {:id :contrib-yield :label "Yield contribution"}
   {:id :contrib-zspread :label "Z-spread contribution"}
   {:id :contrib-gspread :label "G-spread contribution"}
   {:id :contrib-mdur :label "M dur contribution"}
   ])