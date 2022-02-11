(ns jasminegui.greenbondcalculator
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink typeahead md-circle-icon-button selection-list progress-bar
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.charting :as charting]
    [oz.core :as oz]
    [reagent.core :as r]
    [jasminegui.tools :as tools]
    [jasminegui.riskviews :as riskviews]
    [jasminegui.tools :as t]))


(def standard-box-width "1600px")
(def question-width "500px")
(def question-width-long "1000px")
(def categories-list-width "250px")
(def categories-list-width-long "500px")
(def countries-list-width "150px")
(def dropdown-width "100px")

(def esg-score-new-issue (r/atom 75))
(def esg-score-follow-up (r/atom 50))

(def esg-calculator-input (r/atom {
                                   :project-selection/description ""
                                   :project-selection/categories ""
                                   :project-selection/sub-categories ""
                                   :project-selection/categories-other ""

                                   :project-evaluation/certified-opinion "Yes"
                                   :project-evaluation/certified-framework "No"
                                   :project-evaluation/external-scoring "No"
                                   :project-evaluation/credibility "Yes"
                                   :project-evaluation/materiality "Yes"
                                   :project-evaluation/discipline "Yes"
                                   :project-evaluation/controversies "Yes"
                                   :project-evaluation/national-framework-best-practice "Yes"
                                   :project-evaluation/better-than-national "Yes"
                                   :project-evaluation/country-framework-list []
                                   :project-evaluation/aligned-with-country-sector-pathway "Yes"
                                   :project-evaluation/pathway-source ""

                                   :proceed-management/sub-account "Yes"
                                   :proceed-management/green-account "No"
                                   :proceed-management/virtual-green "No"
                                   :proceed-management/ring-fenced "No"
                                   :proceed-management/audited "Yes"
                                   :proceed-management/ring-fenced-2 "No"

                                   :reporting/project-on-track "Yes"
                                   :reporting/project-expanded "Yes"
                                   :reporting/increased-green-funding "Yes"
                                   :reporting/annual-report "Yes"
                                   :reporting/project-kpis "Yes"
                                   :reporting/half-proceeds-green "Yes"
                                   :reporting/reconciliation "Yes"

                                   :analyst-evaluation/text ""
                                   }))

(def yes-no-choice
  [{:id "Yes" :label "Yes"}
   {:id "No"  :label "No"}])

(def project-categories
  [{:id "Climate change adaptation" :label "Climate change adaptation"}
   {:id "Pollution prevention and control" :label "Pollution prevention and control"}
   {:id "Biodiversity conservation" :label "Biodiversity conservation"}
   {:id "Other" :label "Other"}])

(def project-sub-categories
  [{:id "Climate change adaptation)" :label "Climate change adaptation (including information support systems, such as climate observation and early warning systems)"}
   {:id "Renewable energy" :label "Renewable energy (including production, transmission, appliances and products)"}
   {:id "Green buildings" :label "Green buildings which meet regional, national or internationally recognised standards or certifications"}
   {:id "Energy efficiency" :label "Energy efficiency (such as in new and refurbished buildings, energy storage, district heating, smart grids, appliances and products)"}
   {:id "Clean transportation" :label "Clean transportation (such as electric, hybrid, public, rail, non-motorised, multi-modal transportation, infrastructure for clean energy vehicles and reduction of harmful emissions)"}
   {:id "Pollution prevention and control" :label "Pollution prevention and control (including reduction of air emissions, greenhouse gas control, soil remediation, waste prevention, waste reduction, waste recycling and energy/emission-efficient waste to energy)"}
   {:id "Eco-efficient" :label "Eco-efficient and/or circular economy adapted products, production technologies and processes (such as development and introduction of environmentally"}
   {:id "Environmentally sustainable management" :label "Environmentally sustainable management of living natural resources and land use (including environmentally sustainable agriculture; environmentally sustainable animal husbandry; climate smart farm inputs such as biological crop protection or drip-irrigation; environmentally sustainable fishery and aquaculture; environmentally-sustainable forestry, including afforestation or reforestation, and preservation or restoration of natural landscapes)"}
   {:id "Terrestrial and aquatic biodiversity conservation" :label "Terrestrial and aquatic biodiversity conservation (including the protection of coastal, marine and watershed environments)"}
   {:id "Other" :label "Other"}
   ])

(defn esg-calculator-display []
  (let [country-names-sorted (mapv (fn [x] {:id x :label x}) (sort (distinct (map :LongName @(rf/subscribe [:country-codes])))))]

    (println @(r/cursor esg-calculator-input [:project-selection/categories-other]))
  [v-box :width standard-box-width :gap "5px" :class "element"
   :children [[title :label "Green bond calculator" :level :level1]
              [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "New issue score" :level :level2]] [progress-bar :width "200px" :model esg-score-new-issue ]]]
              [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "Follow-up score" :level :level2]] [progress-bar :width "200px" :model esg-score-follow-up ]]]
              [title :label "Project selection" :level :level2]
              [h-box :gap "10px" :align :start
               :children [[label :width question-width :label "Project description"]
                          [input-textarea  :model (r/cursor esg-calculator-input [:project-selection/description])
                           :on-change #(reset! (r/cursor esg-calculator-input [:project-selection/description]) %)]]]

              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Project category:"]
                          [single-dropdown :width categories-list-width :choices project-categories :model (r/cursor esg-calculator-input [:project-selection/categories])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-selection/categories]) %)
                                           (if (= "Other" %) (reset! (r/cursor esg-calculator-input [:project-selection/sub-categories]) "Other"))
                                           (if (= "Other" %) (reset! (r/cursor esg-calculator-input [:project-selection/categories-other]) "Please fill "))
                                           (if (not (= "Other" %)) (reset! (r/cursor esg-calculator-input [:project-selection/categories-other]) "NA"))
                                           )]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Project sub-category:"]
                          [single-dropdown :width categories-list-width-long :choices project-sub-categories :model (r/cursor esg-calculator-input [:project-selection/sub-categories])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-selection/sub-categories]) %)
                                           ;(if (= "Other" %) (reset! (r/cursor esg-calculator-input [:project-selection/categories]) "Other"))
                                           ;(if (= "Other" %) (reset! (r/cursor esg-calculator-input [:project-selection/categories-other]) "Please fill "))
                                           (if (not (= "Other" %)) (reset! (r/cursor esg-calculator-input [:project-selection/categories-other]) "NA"))
                                           )]]]

              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "If other:"]
                          [input-textarea  :model (r/cursor esg-calculator-input [:project-selection/categories-other])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-selection/categories-other]) %)
                                                      (if (not (= "" %)) (reset! (r/cursor esg-calculator-input [:project-selection/categories]) "Other"))
                                                     (if (not (= "" %)) (reset! (r/cursor esg-calculator-input [:project-selection/sub-categories]) "Other"))

                                           )]]] ;!!!

              [title :label "Project evaluation" :level :level2 ]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the bond certified by an independent second party opinion?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/certified-opinion])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-opinion]) %)
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-framework]) "No"))
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:project-evaluation/external-scoring]) "No")))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the bond certified by an external green bond framework?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/certified-framework])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-framework]) %)
                                            (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-opinion]) "No"))
                                            (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:project-evaluation/external-scoring]) "No")))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is there any other external scoring or rating on the sustainability element?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/external-scoring])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/external-scoring]) %)
                                            (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-framework]) "No"))
                                            (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-opinion]) "No")))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are green projects credible?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/credibility]) :on-change #(reset! (r/cursor esg-calculator-input [:project-evaluation/credibility]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are the related spending material?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/materiality]) :on-change #(reset! (r/cursor esg-calculator-input [:project-evaluation/materiality]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the green bond fits within a disciplined approach to sustainability?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/discipline]) :on-change #(reset! (r/cursor esg-calculator-input [:project-evaluation/discipline]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is national framework best practice?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/controversies]) :on-change #(reset! (r/cursor esg-calculator-input [:project-evaluation/controversies]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the bond better than national framework?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/national-framework-best-practice]) :on-change #(reset! (r/cursor esg-calculator-input [:project-evaluation/national-framework-best-practice]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Country framework:"]
                          [single-dropdown :width countries-list-width :choices country-names-sorted  :model (r/cursor esg-calculator-input [:project-evaluation/country-framework-list]) :on-change #(reset! (r/cursor esg-calculator-input [:project-evaluation/country-framework-list]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the project aligned with country-specific sector pathway?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/aligned-with-country-sector-pathway]) :on-change #(reset! (r/cursor esg-calculator-input [:project-evaluation/aligned-with-country-sector-pathway]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Reference source:"]
                          [input-textarea  :model (r/cursor esg-calculator-input [:project-selection/pathway-source]) :on-change #(reset! (r/cursor esg-calculator-input [:project-selection/pathway-source]) %)]]]
              [title :label "Management of proceeds" :level :level2 ]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is there a specific sub-account created?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:proceed-management/sub-account])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:proceed-management/sub-account]) %)
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/green-account]) "No"))
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/virtual-green]) "No"))
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/ring-fenced]) "No")))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is there a separate green account created?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:proceed-management/green-account])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:proceed-management/green-account]) %)
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/sub-account]) "No"))
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/virtual-green]) "No"))
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/ring-fenced]) "No")))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is there a virtual green account created?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:proceed-management/virtual-green])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:proceed-management/virtual-green]) %)
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/sub-account]) "No"))
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/green-account]) "No"))
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/ring-fenced]) "No")))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are the proceeds not ringfenced?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:proceed-management/ring-fenced])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:proceed-management/ring-fenced]) %)
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/sub-account]) "No"))
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/green-account]) "No"))
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/virtual-green]) "No")))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the internal tracking will be verified by an auditor?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:proceed-management/audited])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:proceed-management/audited]) %)
                                      (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/ring-fenced-2]) "No")))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are the proceeds ringfenced or otherwise specifically tracked?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:proceed-management/ring-fenced-2])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:proceed-management/ring-fenced-2]) %)
                                           (if (= "Yes" %) (reset! (r/cursor esg-calculator-input [:proceed-management/audited]) "No")))]]]
              [title :label "Analyst summary" :level :level2 ]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Summary:"]
                          [input-textarea  :model (r/cursor esg-calculator-input [:analyst-evaluation/text]) :on-change #(reset! (r/cursor esg-calculator-input [:analyst-evaluation/text]) %)]]]
              [title :label "Reporting" :level :level2]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the project on track?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/project-on-track]) :on-change #(reset! (r/cursor esg-calculator-input [:reporting/project-on-track]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the green project expanded?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/project-expanded]) :on-change #(reset! (r/cursor esg-calculator-input [:reporting/project-expanded]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Has the company increased green funding as % of spending?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/increased-green-funding]) :on-change #(reset! (r/cursor esg-calculator-input [:reporting/increased-green-funding]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the company undertakes to produce an annual report?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/annual-report]) :on-change #(reset! (r/cursor esg-calculator-input [:reporting/annual-report]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the company reports detailed projects KPIs?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/project-kpis]) :on-change #(reset! (r/cursor esg-calculator-input [:reporting/project-kpis]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are more than 50% of the proceeds spent on green projects?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/half-proceeds-green]) :on-change #(reset! (r/cursor esg-calculator-input [:reporting/half-proceeds-green]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "On a ongoing basis, does the company reconciled proceeds with uses?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/reconciliation]) :on-change #(reset! (r/cursor esg-calculator-input [:reporting/reconciliation]) %)]]]
              ]]))
(def esg-score-calculator []
  ;use reactive atom inputs to calc score ...
  ;(swap! ....atom)
  ;(reset! ....atom)
  )

