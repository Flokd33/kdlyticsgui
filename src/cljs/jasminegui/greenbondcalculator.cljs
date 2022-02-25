(ns jasminegui.greenbondcalculator
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button v-split
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
(def question-width "450px")
(def question-width-long "1000px")
(def categories-list-width "250px")
(def categories-list-width-long "500px")
(def countries-list-width "150px")
(def dropdown-width "100px")

(def gb-score-new-issue (r/atom 0))
(def gb-score-follow-up (r/atom 0))


(def other-disabled? (r/atom true))

(def yes-no-choice
  [{:id "Yes" :label "Yes"}
   {:id "No"  :label "No"}])

;(def project-categories
;  [{:id "Climate change adaptation" :label "Climate change adaptation"}
;   {:id "Pollution prevention and control" :label "Pollution prevention and control"}
;   {:id "Biodiversity conservation" :label "Biodiversity conservation"}
;   {:id "Other" :label "Other"}])

(def project-sub-categories
  [{:id "Climate change adaptation)" :label "Climate change adaptation (including information support systems, such as climate observation and early warning systems)", :group "Climate change adaptation"}
   {:id "Renewable energy" :label "Renewable energy (including production, transmission, appliances and products)", :group "Climate change adaptation"}
   {:id "Green buildings" :label "Green buildings which meet regional, national or internationally recognised standards or certifications", :group "Climate change adaptation"}
   {:id "Energy efficiency" :label "Energy efficiency (such as in new and refurbished buildings, energy storage, district heating, smart grids, appliances and products)", :group "Climate change adaptation"}
   {:id "Clean transportation" :label "Clean transportation (such as electric, hybrid, public, rail, non-motorised, multi-modal transportation, infrastructure for clean energy vehicles and reduction of harmful emissions)", :group "Climate change adaptation"}
   {:id "Pollution prevention and control" :label "Pollution prevention and control (including reduction of air emissions, greenhouse gas control, soil remediation, waste prevention, waste reduction, waste recycling and energy/emission-efficient waste to energy)", :group "Pollution prevention and control"}
   {:id "Eco-efficient" :label "Eco-efficient and/or circular economy adapted products, production technologies and processes (such as development and introduction of environmentally", :group "Pollution prevention and control"}
   {:id "Environmentally sustainable management" :label "Environmentally sustainable management of living natural resources and land use (including environmentally sustainable agriculture; environmentally sustainable animal husbandry; climate smart farm inputs such as biological crop protection or drip-irrigation; environmentally sustainable fishery and aquaculture; environmentally-sustainable forestry, including afforestation or reforestation, and preservation or restoration of natural landscapes)", :group "Biodiversity conservation"}
   {:id "Terrestrial and aquatic biodiversity conservation" :label "Terrestrial and aquatic biodiversity conservation (including the protection of coastal, marine and watershed environments)", :group "Biodiversity conservation"}
   {:id "Sustainable water and wastewater management" :label "Sustainable water and wastewater management (including sustainable infrastructure for clean and/or drinking water, wastewater treatment, sustainable urban drainage systems and river training and other forms of flooding mitigation)", :group "Biodiversity conservation"}
   {:id "Other" :label "Other" , :group "None of the above"}
   ])


(def esg-calculator-input (r/atom {:project-selection/identifier ""
                                   :project-selection/description ""
                                   :project-selection/categories nil
                                   :project-selection/categories-yes-no "No"
                                   :project-selection/sub-categories ""
                                   :project-selection/categories-other ""
                                   :project-evaluation/independent-verification nil
                                   :project-evaluation/certified-framework "No"
                                   :project-evaluation/certified-opinion "No"
                                   :project-evaluation/external-scoring "No"
                                   :project-evaluation/credibility "No"
                                   :project-evaluation/materiality "No"
                                   :project-evaluation/discipline "No"
                                   :project-evaluation/controversies "Yes"
                                   :project-evaluation/national-framework-best-practice "No"
                                   :project-evaluation/better-than-national "No"
                                   :project-evaluation/country-framework-list nil
                                   :project-evaluation/aligned-with-country-sector-pathway "No"
                                   :proceed-management/ringfencing nil
                                   :proceed-management/sub-account "No"
                                   :proceed-management/green-account "No"
                                   :proceed-management/virtual-green "No"
                                   :proceed-management/tracked nil
                                   :proceed-management/audited "No"
                                   :proceed-management/ring-fenced-2 "No"
                                   :reporting/project-on-track "No"
                                   :reporting/project-expanded "No"
                                   :reporting/increased-green-funding "No"
                                   :reporting/annual-report "No"
                                   :reporting/project-kpis "No"
                                   :reporting/half-proceeds-green "No"
                                   :reporting/reconciliation "No"
                                   :analyst-evaluation/text ""
                                   }))

(def gb-follow-up-scoring [{:id :reporting/project-on-track :Yes 20 :No 0}
                         {:id :reporting/project-expanded :Yes 15 :No 0}
                         {:id :reporting/increased-green-funding :Yes 15 :No 0}
                         {:id :reporting/annual-report :Yes 10 :No 0}
                         {:id :reporting/project-kpis :Yes 15 :No 0}
                         {:id :reporting/half-proceeds-green :Yes 15 :No 0}
                         {:id :reporting/reconciliation :Yes 10 :No 0}])

(def gb-new-issue-scoring [{:id :project-selection/categories-yes-no :Yes 14 :No 7}
                         {:id :project-evaluation/certified-opinion :Yes 10 :No 0}
                         {:id :project-evaluation/certified-framework :Yes 8 :No 0}
                         {:id :project-evaluation/external-scoring :Yes 6 :No 0}
                         {:id :project-evaluation/credibility :Yes 8 :No 0}
                         {:id :project-evaluation/materiality :Yes 8 :No 0}
                         {:id :project-evaluation/discipline :Yes 8 :No 0}
                         {:id :project-evaluation/controversies :Yes 0 :No 8}
                         {:id :project-evaluation/national-framework-best-practice :Yes 6 :No 0}
                         {:id :project-evaluation/better-than-national :Yes 8 :No 0}
                         {:id :project-evaluation/aligned-with-country-sector-pathway :Yes 10 :No 0}
                         {:id :proceed-management/sub-account :Yes 9 :No 0}
                         {:id :proceed-management/green-account :Yes 9 :No 0}
                         {:id :proceed-management/virtual-green :Yes 9 :No 0}
                         {:id :proceed-management/audited :Yes 11 :No 0}
                         {:id :proceed-management/ring-fenced-2 :Yes 8 :No 0}])

(defn gb-summary-generator []
  (let [answers @esg-calculator-input
        scores-mapping  (concat gb-follow-up-scoring gb-new-issue-scoring)
        final-scores (into {} [[:new-issue-score @gb-score-new-issue] [:follow-up-score @gb-score-follow-up]])])
  ;export to txt ?
  )

(defn gb-score-calculator [answers follow-up-scoring new-issue-scoring]
  (let [follow-up-scores (into [] (for [e follow-up-scoring] {:id (:id e) :score (e (keyword ((:id e) answers))) }))
        follow-up-final-score (reduce + (map #(get % :score) follow-up-scores))
        new-issue-scores (into [] (for [e new-issue-scoring] {:id (:id e) :score (e (keyword ((:id e) answers))) }))
        new-issue-final-score (reduce + (map #(get % :score) new-issue-scores))]
    (reset! gb-score-follow-up follow-up-final-score)
    (reset! gb-score-new-issue new-issue-final-score)
    )
  )

(defn gb-eligible []
  (let [answers @esg-calculator-input]
  (if (and (= (answers :project-evaluation/controversies) "No") (= (answers :project-evaluation/credibility) "Yes") (= (answers :project-evaluation/materiality) "Yes") (= (answers :project-evaluation/discipline) "Yes"))
    {:color "Chartreuse" :text "YES"}
    {:color "Red" :text "NO"})))

(defn esg-calculator-display []
  (let [country-names-sorted (mapv (fn [x] {:id x :label x}) (sort (distinct (map :LongName @(rf/subscribe [:country-codes])))))]
    (println (gb-eligible))
  [v-box :width "1280px" :gap "5px" :class "element"
   :children [[title :label "Green bond calculator" :level :level1]
              [h-box :gap "10px" :align :center
               :children [[box :width question-width :child [title :label "ISIN" :level :level2]]
                          [input-text :width categories-list-width-long :model (r/cursor esg-calculator-input [:project-selection/identifier]) :on-change #(reset! (r/cursor esg-calculator-input [:project-selection/identifier]) %)]]]
              [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "New issue score" :level :level2]] [progress-bar :width categories-list-width-long :model gb-score-new-issue ]]]

              [title :label "Project description" :level :level2]

              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Category:"]
                          [single-dropdown :width categories-list-width-long  :placeholder "Please select..." :choices project-sub-categories :model (r/cursor esg-calculator-input [:project-selection/categories])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-selection/categories]) %)
                                           (if (= "Other" %) (do (reset! (r/cursor esg-calculator-input [:project-selection/categories-other]) "Please fill ") (reset! (r/cursor esg-calculator-input [:project-selection/categories-yes-no]) "No") (reset! other-disabled? false))
                                                             (do (reset! other-disabled? true) (reset! (r/cursor esg-calculator-input [:project-selection/categories-other]) "") (reset! (r/cursor esg-calculator-input [:project-selection/categories-yes-no]) "Yes")))
                                           (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Other:"]
                          [input-text :width categories-list-width-long  :model (r/cursor esg-calculator-input [:project-selection/categories-other]) :disabled? other-disabled?
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-selection/categories-other]) %)
                                                      (if (not (= "" %)) (do (reset! (r/cursor esg-calculator-input [:project-selection/categories]) "Other") (reset! (r/cursor esg-calculator-input [:project-selection/categories-yes-no]) "No") (reset! (r/cursor esg-calculator-input [:project-selection/sub-categories]) "Other")))
                                           (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :start
               :children [[label :width question-width :label "Details:"]
                          [input-textarea :width categories-list-width-long :rows 10 :model (r/cursor esg-calculator-input [:project-selection/description]) :on-change #(reset! (r/cursor esg-calculator-input [:project-selection/description]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Independent verification:"]
                          [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices [{:id "second-party-opinion" :label "The bond is certified by an independent second party opinion"} {:id "green-bond-framework"  :label "The bond is certified by an external green bond framework"} {:id "external scoring"  :label "There is an external scoring or rating on the sustainability element"} {:id "none"  :label "None of the above"}] :model (r/cursor esg-calculator-input [:project-evaluation/independent-verification])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/independent-verification]) %)
                                           (case %
                                             "second-party-opinion" (do (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-opinion]) "Yes") (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-framework]) "No") (reset! (r/cursor esg-calculator-input [:project-evaluation/external-scoring]) "No"))
                                             "green-bond-framework"  (do (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-opinion]) "No") (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-framework]) "Yes") (reset! (r/cursor esg-calculator-input [:project-evaluation/external-scoring]) "No"))
                                             "external scoring" (do (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-opinion]) "No") (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-framework]) "No") (reset! (r/cursor esg-calculator-input [:project-evaluation/external-scoring]) "Yes"))
                                             "none" (do (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-opinion]) "No") (reset! (r/cursor esg-calculator-input [:project-evaluation/certified-framework]) "No") (reset! (r/cursor esg-calculator-input [:project-evaluation/external-scoring]) "No")))
                                           (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "Green bond eligibility" :level :level2]]
                                                             [box :width dropdown-width :child [button :label (:text (gb-eligible)) :disabled? true :style {:width dropdown-width :color "black" :backgroundColor (:color (gb-eligible)) :textAlign "center"}]]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are green projects credible?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/credibility])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/credibility]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is related spending material?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/materiality])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/materiality]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the green bond fit within a disciplined approach to sustainability?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/discipline])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/discipline]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is there a potential for social risks and/or other controversies?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/controversies])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/controversies]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [title :label "Management of proceeds" :level :level2 ]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Ringfencing:"]
                          [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices [{:id "sub-account" :label "A specific sub account has been created"} {:id "green-account"  :label "A specific green account has been created"} {:id "virtual-green"  :label "A virtual green account has been created"} {:id "none"  :label "None of the above"}] :model (r/cursor esg-calculator-input [:proceed-management/ringfencing])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:proceed-management/ringfencing]) %)
                                           (case %
                                             "sub-account" (do (reset! (r/cursor esg-calculator-input [:proceed-management/sub-account]) "Yes") (reset! (r/cursor esg-calculator-input [:proceed-management/green-account]) "No") (reset! (r/cursor esg-calculator-input [:proceed-management/virtual-green]) "No"))
                                             "green-account"  (do (reset! (r/cursor esg-calculator-input [:proceed-management/sub-account]) "No") (reset! (r/cursor esg-calculator-input [:proceed-management/green-account]) "Yes") (reset! (r/cursor esg-calculator-input [:proceed-management-evaluation/virtual-green]) "No"))
                                             "virtual-green" (do (reset! (r/cursor esg-calculator-input [:proceed-management/sub-account]) "No") (reset! (r/cursor esg-calculator-input [:proceed-management/green-account]) "No") (reset! (r/cursor esg-calculator-input [:proceed-management/virtual-green]) "Yes"))
                                             "none" (do (reset! (r/cursor esg-calculator-input [:proceed-management/sub-account]) "No")(reset! (r/cursor esg-calculator-input [:proceed-management/green-account]) "No") (reset! (r/cursor esg-calculator-input [:proceed-management/virtual-green]) "No")))
                                           (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Tracking:"]
                          [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices [{:id "verified" :label "The internal tracking will be verified by an auditor"} {:id "tracked"  :label "The proceeds are ringfenced or otherwise specifically tracked"} {:id "none"  :label "None of the above"}]
                           :model (r/cursor esg-calculator-input [:proceed-management/tracked])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:proceed-management/tracked]) %)
                                           (case %
                                             "verified" (do (reset! (r/cursor esg-calculator-input [:proceed-management/audited]) "Yes") (reset! (r/cursor esg-calculator-input [:proceed-management/ring-fenced-2]) "No"))
                                             "tracked"  (do (reset! (r/cursor esg-calculator-input [:proceed-management/audited]) "No") (reset! (r/cursor esg-calculator-input [:proceed-management/ring-fenced-2]) "Yes"))
                                             "none" (do (reset! (r/cursor esg-calculator-input [:proceed-management/audited]) "No") (reset! (r/cursor esg-calculator-input [:proceed-management/ring-fenced-2]) "No")))
                                           (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]

              [title :label "Country framework" :level :level2 ]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Country:"]
                          [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices country-names-sorted :filter-box? true :model (r/cursor esg-calculator-input [:project-evaluation/country-framework-list])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/country-framework-list]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the country have a transition plan with ST targets and LT net zero target?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/national-framework-best-practice])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/national-framework-best-practice]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the company framework better than the national framework?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/better-than-national])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/better-than-national]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]

              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the project aligned with the country-specific sector pathway?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/aligned-with-country-sector-pathway])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-evaluation/aligned-with-country-sector-pathway]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Reference sources:"]
                          [input-textarea  :width categories-list-width-long :model (r/cursor esg-calculator-input [:project-selection/pathway-source])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:project-selection/pathway-source]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]

              [h-box :gap "10px" :align :center
               :children [[box :width question-width :child [title :label "Analyst summary" :level :level2 ]]
                          [input-textarea :width categories-list-width-long :model (r/cursor esg-calculator-input [:analyst-evaluation/text])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:analyst-evaluation/text]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [gap :size "10px"]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label ""]
                          [button :label "Save new issue report" :class "btn btn-primary btn-block" :on-click #(do (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring) (gb-summary-generator))]]]
              [gap :size "20px"]
              [line :size  "2px" :color "black"] ;[gap :size "50px"]
              [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "Follow-up score" :level :level2]]
                                                             [progress-bar :width "200px" :model gb-score-follow-up ]]]
              [title :label "Reporting" :level :level2]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the project on track?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/project-on-track])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:reporting/project-on-track]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the green project expanded?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/project-expanded])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:reporting/project-expanded]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Has the company increased green funding as % of spending?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/increased-green-funding])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:reporting/increased-green-funding]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the company undertakes to produce an annual report?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/annual-report])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:reporting/annual-report]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the company reports detailed projects KPIs?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/project-kpis])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:reporting/project-kpis]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are more than 50% of the proceeds spent on green projects?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/half-proceeds-green])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:reporting/half-proceeds-green]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "On a ongoing basis, does the company reconciled proceeds with uses?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:reporting/reconciliation])
                           :on-change #(do (reset! (r/cursor esg-calculator-input [:reporting/reconciliation]) %) (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring))]]]
              [gap :size "10px"]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label ""]
                          [button :label "Extract follow-up report" :class "btn btn-primary btn-block" :on-click #(do (gb-score-calculator @esg-calculator-input gb-follow-up-scoring gb-new-issue-scoring)
                                                                                                                      (gb-summary-generator))]]]

              ]]
    ))