(ns kdlyticsgui.static)

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
  [{:code :home             :name "Holdings"          :dispatch :home             :subs nil :load-events (conj home-events  :get-list-dates-position-history :get-portfolio-checks) :mounting-modal true}
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
   {:code :implementation   :name "Implementation"    :dispatch :implementation   :subs nil :load-events (concat implementation-events [:get-esg-carbon-jasmine :get-msci-scores]) :mounting-modal true}
   {:code :knowledge             :name "Knowledge"          :dispatch :knowledge             :subs nil}
   {:code :administration   :name "Administration"    :dispatch :administration   :subs nil}
   ]))


(def risk-navigation
  [{:code :summary                :name "Overview"}

   ])

