(ns jasminegui.greenbondcalculator
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [cljs-time.core :refer [today]]
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

(def gb-score-new-issue-2 (r/atom 0))
(def gb-score-follow-up-2 (r/atom 0))

(def identifier (r/atom ""))
(def today-date (tools/gdate-to-yyyymmdd (today)))
(def analyst-name (r/atom nil))

(def other-disabled? (r/atom false))

(def yes-no-choice [{:id "Yes" :label "Yes"} {:id "No"  :label "No"}])

(rf/reg-event-fx
  :post-greenbondcalculator-upload
  (fn [{:keys [db]} [_ answers]]
    {:db db
     :http-post-dispatch {:url (str static/server-address "greenbondcalculator-upload")
                          :edn-params answers
                          :dispatch-key [:dummy]            ;instead of dummy event that show pop up
                          }}))


(def analyst-names-list
  [{:id "vharling" :label "Vic"}
   {:id "tlloyd" :label "Tammy"}
   {:id "sxie" :label "Stacy"}
   {:id "aalmosni" :label "Alex"}
   {:id "rbhat" :label "Rahul"}
   {:id "asiow" :label "Alan"}
   {:id "aluizgomes" :label "Antonio"}
   {:id "cliang" :label "Chris"}
   {:id "achan" :label "Adrian"}
   {:id "ksalisbury" :label  "Kevan"}
   ])

(def project-sub-categories
  [{:id "climate" :label "Climate change adaptation (including information support systems, such as climate observation and early warning systems)", :group "Climate change adaptation"}
   {:id "renewable" :label "Renewable energy (including production, transmission, appliances and products)", :group "Climate change adaptation"}
   {:id "green" :label "Green buildings which meet regional, national or internationally recognised standards or certifications", :group "Climate change adaptation"}
   {:id "energy" :label "Energy efficiency (such as in new and refurbished buildings, energy storage, district heating, smart grids, appliances and products)", :group "Climate change adaptation"}
   {:id "clean" :label "Clean transportation (such as electric, hybrid, public, rail, non-motorised, multi-modal transportation, infrastructure for clean energy vehicles and reduction of harmful emissions)", :group "Climate change adaptation"}
   {:id "pollution" :label "Pollution prevention and control (including reduction of air emissions, greenhouse gas control, soil remediation, waste prevention, waste reduction, waste recycling and energy/emission-efficient waste to energy)", :group "Pollution prevention and control"}
   {:id "eco" :label "Eco-efficient and/or circular economy adapted products, production technologies and processes (such as development and introduction of environmentally", :group "Pollution prevention and control"}
   {:id "environmentally" :label "Environmentally sustainable management of living natural resources and land use (including environmentally sustainable agriculture; environmentally sustainable animal husbandry; climate smart farm inputs such as biological crop protection or drip-irrigation; environmentally sustainable fishery and aquaculture; environmentally-sustainable forestry, including afforestation or reforestation, and preservation or restoration of natural landscapes)", :group "Biodiversity conservation"}
   {:id "terrestrial" :label "Terrestrial and aquatic biodiversity conservation (including the protection of coastal, marine and watershed environments)", :group "Biodiversity conservation"}
   {:id "sustainable" :label "Sustainable water and wastewater management (including sustainable infrastructure for clean and/or drinking water, wastewater treatment, sustainable urban drainage systems and river training and other forms of flooding mitigation)", :group "Biodiversity conservation"}
   {:id "other" :label "Other" , :group "None of the above"}
   ])

(def esg-calculator-summary (r/atom {:project-selection/description {:question_id 1 :question_category "project-selection" :analyst_answer "" :analyst_score 0},
                                   :project-selection/categories {:question_id 2 :question_category "project-selection" :analyst_answer "other" :analyst_score 7},
                                   :project-selection/categories-other {:question_id 3 :question_category "project-selection" :analyst_answer "" :analyst_score 0},
                                   :project-evaluation/independent-verification {:question_id 4 :question_category "project-evaluation" :analyst_answer "none" :analyst_score 0},
                                   :project-evaluation/credibility {:question_id 5 :question_category "project-evaluation" :analyst_answer "No" :analyst_score 0},
                                   :project-evaluation/materiality {:question_id 6 :question_category "project-evaluation" :analyst_answer "No" :analyst_score 0},
                                   :project-evaluation/discipline {:question_id 7 :question_category "project-evaluation" :analyst_answer "No" :analyst_score 0},
                                   :project-evaluation/controversies {:question_id 8 :question_category "project-evaluation" :analyst_answer "Yes" :analyst_score 0},
                                   :project-evaluation/country-framework-list {:question_id 9 :question_category "project-evaluation" :analyst_answer "" :analyst_score 0},
                                   :project-evaluation/national-framework-best-practice {:question_id 10 :question_category "project-evaluation" :analyst_answer "No" :analyst_score 0},
                                   :project-evaluation/better-than-national {:question_id 11 :question_category "project-evaluation" :analyst_answer "No" :analyst_score 0},
                                   :project-evaluation/aligned-with-country-sector-pathway {:question_id 12 :question_category "project-evaluation" :analyst_answer "No" :analyst_score 0},
                                   :project-evaluation/reference-sources {:question_id 13 :question_category "project-evaluation" :analyst_answer "" :analyst_score 0},
                                   :proceed-management/ringfencing {:question_id 14 :question_category "project-management" :analyst_answer "none" :analyst_score 0},
                                   :proceed-management/tracked {:question_id 15 :question_category "project-management" :analyst_answer "none" :analyst_score 0},
                                   :reporting/project-on-track {:question_id 16 :question_category "reporting" :analyst_answer "No" :analyst_score 0},
                                   :reporting/project-expanded {:question_id 17 :question_category "reporting" :analyst_answer "No" :analyst_score 0},
                                   :reporting/increased-green-funding {:question_id 18 :question_category "reporting" :analyst_answer "No" :analyst_score 0},
                                   :reporting/annual-report {:question_id 19 :question_category "reporting" :analyst_answer "No" :analyst_score 0},
                                   :reporting/project-kpis {:question_id 20 :question_category "reporting" :analyst_answer "No" :analyst_score 0},
                                   :reporting/half-proceeds-green {:question_id 21 :question_category "reporting" :analyst_answer "No" :analyst_score 0},
                                   :reporting/reconciliation {:question_id 22 :question_category "reporting" :analyst_answer "No" :analyst_score 0},
                                   :analyst-evaluation/text {:question_id 23 :question_category "project-evaluation" :analyst_answer "" :analyst_score 0}
                                   }))

(def gb-scoring {:project-selection/categories {:climate 14 :renewable 14 :green 14 :energy 14 :clean 14 :pollution 14 :eco 14 :environmentally 14 :terrestrial 14 :sustainable 14 :other 7}
                 :project-evaluation/independent-verification {:second-party-opinion 10 :green-bond-framework 8 :external-scoring 6 :none 0} ;;;;
                 :project-evaluation/credibility {:Yes 8 :No 0}
                 :project-evaluation/materiality {:Yes 8 :No 0}
                 :project-evaluation/discipline {:Yes 8 :No 0}
                 :project-evaluation/controversies {:Yes 0 :No 8}
                 :project-evaluation/national-framework-best-practice {:Yes 6 :No 0}
                 :project-evaluation/better-than-national {:Yes 8 :No 0}
                 :project-evaluation/aligned-with-country-sector-pathway {:Yes 10 :No 0}
                 :proceed-management/ringfencing {:sub-account 9 :green-account 9 :virtual-account 9 :none 0}
                 :proceed-management/tracked {:verified 11 :tracked 8 :none 0}
                 :reporting/project-on-track {:Yes 20 :No 0}
                 :reporting/project-expanded {:Yes 15 :No 0}
                 :reporting/increased-green-funding {:Yes 15 :No 0}
                 :reporting/annual-report {:Yes 10 :No 0}
                 :reporting/project-kpis {:Yes 15 :No 0}
                 :reporting/half-proceeds-green {:Yes 15 :No 0}
                 :reporting/reconciliation {:Yes 10 :No 0}})

(defn gb-score-calculator []
  (doseq [a (keys @esg-calculator-summary)] (reset! (r/cursor esg-calculator-summary [a :analyst_score]) (case (get-in gb-scoring [a (keyword (get-in @esg-calculator-summary [a :analyst_answer]))])
                                                                                                           nil 0
                                                                                                           (get-in gb-scoring [a (keyword (get-in @esg-calculator-summary [a :analyst_answer]))]))))
  (let [summary @esg-calculator-summary
        new_issue-total-score (reduce + (into [] (for [e (keys summary)] (if (not= (get-in summary [e :question_category]) "reporting") (get-in summary [e :analyst_score]) 0))))
        reporting-total-score (reduce + (into [] (for [e (keys summary)] (if (= (get-in summary [e :question_category]) "reporting") (get-in summary [e :analyst_score]) 0))))]
    (reset! gb-score-new-issue new_issue-total-score)
    (reset! gb-score-follow-up reporting-total-score))
  )

(defn gb-eligible []
  (let [answers @esg-calculator-summary]
  (if (and (= (get-in answers [:project-evaluation/controversies :analyst_answer]) "No") (= (get-in answers [:project-evaluation/credibility :analyst_answer]) "Yes") (= (get-in answers [:project-evaluation/materiality :analyst_answer]) "Yes") (= (get-in answers [:project-evaluation/discipline :analyst_answer]) "Yes"))
    {:color "Chartreuse" :text "YES"}
    {:color "Red" :text "NO"})))

(defn gb-summary-generator [is-reporting]
  (let [answers @esg-calculator-summary
        answers_clean  (if (= is-reporting true)
                         (into {} (for [[k v] answers :when (= (:question_category v) "reporting")] [k v]))
                         (into {} (for [[k v] answers :when (not= (:question_category v) "reporting")] [k v])))
        summary (for [k (keys answers_clean)] {:question_id (get-in answers_clean [k :question_id]) :analyst_code @analyst-name :date today-date :security_identifier @identifier :analyst_answer (get-in answers_clean [k :analyst_answer]) :analyst_score (get-in answers_clean [k :analyst_score])})]
    (rf/dispatch [:post-greenbondcalculator-upload summary])
    ))

(defn esg-calculator-display []
  (let [country-names-sorted (mapv (fn [x] {:id x :label x}) (sort (distinct (map :LongName @(rf/subscribe [:country-codes])))))]
    ;(println @esg-calculator-summary)
  [v-box :width "1280px" :gap "5px" :class "element"
   :children [[title :label "Green bond calculator" :level :level1]
              [h-box :gap "10px" :align :center
               :children [[box :width question-width :child [title :label "ISIN" :level :level2]]
                          [input-text :width categories-list-width-long :model identifier
                                                                      :on-change #(reset! identifier %)]]]
              [h-box :gap "10px" :align :center
               :children [[box :width question-width :child [title :label "Analyst" :level :level2]]
                          [single-dropdown :width dropdown-width :choices analyst-names-list :model analyst-name
                           :on-change #(reset! analyst-name %)]
                          ]]
              [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "New issue score" :level :level2]] [progress-bar :width categories-list-width-long :model gb-score-new-issue ]]]
              [title :label "Project description" :level :level2]

              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Category:"]
                          [single-dropdown :width categories-list-width-long  :placeholder "Please select..." :choices project-sub-categories :model (r/cursor esg-calculator-summary [:project-selection/categories :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-selection/categories :analyst_answer])%)
                                           (if (= "other" %) (reset! other-disabled? false) (reset! other-disabled? true))
                                           (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Other:"]
                          [input-text :width categories-list-width-long  :model (r/cursor esg-calculator-summary [:project-selection/categories-other :analyst_answer]) :disabled? other-disabled?
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-selection/categories-other :analyst_answer]) %))]]]
              [h-box :gap "10px" :align :start
               :children [[label :width question-width :label "Details:"]
                          [input-textarea :width categories-list-width-long :rows 10 :model (r/cursor esg-calculator-summary [:project-selection/description :analyst_answer ])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-selection/description :analyst_answer ]) %))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Independent verification:"]
                          [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices [{:id "second-party-opinion" :label "The bond is certified by an independent second party opinion"} {:id "green-bond-framework"  :label "The bond is certified by an external green bond framework"} {:id "external-scoring"  :label "There is an external scoring or rating on the sustainability element"} {:id "none"  :label "None of the above"}]
                           :model (r/cursor esg-calculator-summary [:project-evaluation/independent-verification :analyst_answer ])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-evaluation/independent-verification :analyst_answer ]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "Green bond eligibility" :level :level2]]
                                                             [box :width dropdown-width :child [button :label (:text (gb-eligible)) :disabled? true :style {:width dropdown-width :color "black" :backgroundColor (:color (gb-eligible)) :textAlign "center"}]]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are green projects credible?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:project-evaluation/credibility :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-evaluation/credibility :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is related spending material?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:project-evaluation/materiality :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-evaluation/materiality :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the green bond fit within a disciplined approach to sustainability?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:project-evaluation/discipline :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-evaluation/discipline :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is there a potential for social risks and/or other controversies?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:project-evaluation/controversies :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-evaluation/controversies :analyst_answer]) %) (gb-score-calculator))]]]
              [title :label "Management of proceeds" :level :level2 ]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Ringfencing:"]
                          [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices [{:id "sub-account" :label "A specific sub account has been created"} {:id "green-account"  :label "A specific green account has been created"} {:id "virtual-green"  :label "A virtual green account has been created"} {:id "none"  :label "None of the above"}]
                           :model (r/cursor esg-calculator-summary [:proceed-management/ringfencing :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:proceed-management/ringfencing :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Tracking:"]
                          [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices [{:id "verified" :label "The internal tracking will be verified by an auditor"} {:id "tracked"  :label "The proceeds are ringfenced or otherwise specifically tracked"} {:id "none"  :label "None of the above"}]
                           :model (r/cursor esg-calculator-summary [:proceed-management/tracked :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:proceed-management/tracked :analyst_answer]) %) (gb-score-calculator))]]]
              [title :label "Country framework" :level :level2 ]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Country:"]
                          [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices country-names-sorted :filter-box? true :model (r/cursor esg-calculator-summary [:project-evaluation/country-framework-list :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-evaluation/country-framework-list :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the country have a transition plan with ST targets and LT net zero target?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:project-evaluation/national-framework-best-practice :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-evaluation/national-framework-best-practice :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the company framework better than the national framework?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:project-evaluation/better-than-national :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-evaluation/better-than-national :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the project aligned with the country-specific sector pathway?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:project-evaluation/aligned-with-country-sector-pathway :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-evaluation/aligned-with-country-sector-pathway :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Reference sources:"]
                          [input-textarea  :width categories-list-width-long :model (r/cursor esg-calculator-summary [:project-evaluation/pathway-source :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:project-evaluation/pathway-source :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[box :width question-width :child [title :label "Analyst summary" :level :level2 ]]
                          [input-textarea :width categories-list-width-long :model (r/cursor esg-calculator-summary [:analyst-evaluation/text :analyst_answer ])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:analyst-evaluation/text :analyst_answer]) %))]]]
              [gap :size "10px"]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label ""]
                          [button :label "Save new issue report" :class "btn btn-primary btn-block" :on-click #(do (gb-score-calculator) (gb-summary-generator false))]]]
              [gap :size "20px"]
              [line :size  "2px" :color "black"] ;[gap :size "50px"]
              [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "Follow-up score" :level :level2]]
                                                             [progress-bar :width "200px" :model gb-score-follow-up ]]]
              [title :label "Reporting" :level :level2]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the project on track?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:reporting/project-on-track :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:reporting/project-on-track :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the green project expanded?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:reporting/project-expanded :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:reporting/project-expanded :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Has the company increased green funding as % of spending?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:reporting/increased-green-funding :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:reporting/increased-green-funding :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the company undertakes to produce an annual report?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:reporting/annual-report :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:reporting/annual-report :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the company reports detailed projects KPIs?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:reporting/project-kpis :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:reporting/project-kpis :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are more than 50% of the proceeds spent on green projects?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:reporting/half-proceeds-green :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:reporting/half-proceeds-green :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "On a ongoing basis, does the company reconciled proceeds with uses?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-summary [:reporting/reconciliation :analyst_answer])
                           :on-change #(do (reset! (r/cursor esg-calculator-summary [:reporting/reconciliation :analyst_answer]) %) (gb-score-calculator))]]]
              [gap :size "10px"]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label ""]
                          [button :label "Extract follow-up report" :class "btn btn-primary btn-block" :on-click #(do (gb-score-calculator) (gb-summary-generator true))]]]

              ]]
    ))