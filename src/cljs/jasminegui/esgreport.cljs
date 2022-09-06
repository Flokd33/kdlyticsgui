(ns jasminegui.esgreport
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [cljs-time.core :refer [today]]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button v-split
                         single-dropdown hyperlink typeahead md-circle-icon-button selection-list progress-bar modal-panel alert-box throbber
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.guitools :as gt]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.charting :as charting]
    [oz.core :as oz]
    [reagent.core :as r]
    [jasminegui.tools :as tools]
    [jasminegui.riskviews :as riskviews]
    [jasminegui.tools :as t])
  )


(def standard-box-width "1600px")
(def question-width "450px")
(def answer-width "600px")
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
(def today-date (tools/gdate->yyyyMMdd (today)))
(def analyst-name (r/atom nil))

(def other-disabled? (r/atom true))
(def year-disabled? (r/atom true))
(def sbti-disabled? (r/atom true))

(def esg-report-selected (r/atom "GB_AYDEMT_2022-09-02"))
(def gb-isin (r/atom "XS2368781477"))
(def gb-date (r/atom "2022-09-02"))
(def report-type (r/atom "green-bond"))

(def yes-no-choice [{:id "Yes" :label "Yes"} {:id "No"  :label "No"}])
(def yes-no-choice-2 [{:id "Yes1" :label "Yes (small)"} {:id "Yes2"  :label "Yes (big)"} {:id "No"  :label "No"}])
(def yes-no-choice-3 [{:id "Yes" :label "Yes"} {:id "Yes2"  :label "In line"} {:id "No"  :label "No"}])


(rf/reg-event-fx
  :post-esg-report-upload
  (fn [{:keys [db]} [_ answers]]
    {:db (assoc db :esg/success-modal {:show true :on-close :close-rebuild-esg :response nil})
     :http-post-dispatch {:url (str static/server-address "post-esg-report-upload")
                          :edn-params answers
                          :dispatch-key [:has-loaded]
                          }}))
(rf/reg-event-db
  :has-loaded
  (fn [db [_ data]]
    (assoc-in db [:esg/success-modal :response] (:text-response data))
    ))

(rf/reg-event-fx
  :get-esg-report-list
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str static/server-address "esg-report-list")
                         :dispatch-key [:esg-report-list]}}))

(rf/reg-event-fx
  :post-esg-report-extract
  (fn [{:keys [db]} [_ isin date report-type]]
    { :http-post-dispatch {:url (str static/server-address "post-esg-report-extract")
                          :edn-params {:isin isin :date date :type report-type}
                          :dispatch-key [:esg-report-extract]}}))

(rf/reg-event-db
  :esg-report-extract
  (fn [db [_ data]]
    (assoc db :esg-report-extract data))
    )

(rf/reg-event-db
  :close-rebuild-esg
  (fn [db [_]]
    (assoc db :esg/success-modal {:show false :on-close nil :response nil})))

(defn modal-success []
  (let [modal-data @(rf/subscribe [:esg/success-modal])]
    (if (:show modal-data)
      [modal-panel
       :wrap-nicely? false
       :backdrop-on-click #(rf/dispatch [(:on-close modal-data)])
       :child [alert-box :padding "15px" :style {:width "450px"} :heading (if-let [x (:response modal-data)] x ) :closeable? true :on-close #(rf/dispatch [(:on-close modal-data)])]])
    )
  )

(def analyst-names-list
  [{:id "vharling" :label "Vic"} {:id "tlloyd" :label "Tammy"} {:id "sxie" :label "Stacy"} {:id "aalmosni" :label "Alex"} {:id "rbhat" :label "Rahul"} {:id "dnaumenko" :label "Daria"}
   {:id "asiow" :label "Alan"} {:id "aluizgomes" :label "Antonio"} {:id "cliang" :label "Chris"} {:id "achan" :label "Adrian"} {:id "ksalisbury" :label  "Kevan"}])

(def project-sub-categories
  [{:id "climate" :label "Climate change adaptation (including efforts to make infrastructure more resilient to impacts of climate change, as well as information support systems, such as climate observation and early warning systems)", :group "Climate change adaptation"}
   {:id "renewable" :label "Renewable energy (including production, transmission, appliances and products)", :group "Climate change adaptation"}
   {:id "green" :label "Green buildings (buildings that meet regional, national or internationally recognised standards or certifications for environmental performance)", :group "Climate change adaptation"}
   {:id "energy" :label "Energy efficiency (such as in new and refurbished buildings, energy storage, district heating, smart grids, appliances and products)", :group "Climate change adaptation"}
   {:id "clean" :label "Clean transportation (such as electric, hybrid, public, rail, non-motorised, multi-modal transportation, infrastructure for clean energy vehicles and reduction of harmful emissions)", :group "Climate change adaptation"}
   {:id "pollution" :label "Pollution prevention and control (including reduction of air emissions, greenhouse gas control, soil remediation, waste prevention, waste reduction, waste recycling and energy/emission-efficient waste to energy)", :group "Pollution prevention and control"}
   {:id "eco" :label "Eco-efficient and/or circular economy adapted products, production technologies and processes (such as the design and introduction of reusable, recyclable and refurbished materials, components and products; circular tools and services", :group "Pollution prevention and control"}
   {:id "environmentally" :label "Environmentally sustainable management of living natural resources and land use (including environmentally sustainable agriculture; environmentally sustainable animal husbandry; climate smart farm inputs such as biological crop protection or drip-irrigation; environmentally sustainable fishery and aquaculture; environmentally-sustainable forestry, including afforestation or reforestation, and preservation or restoration of natural landscapes)", :group "Biodiversity conservation"}
   {:id "terrestrial" :label "Terrestrial and aquatic biodiversity conservation (including the protection of coastal, marine and watershed environments)", :group "Biodiversity conservation"}
   {:id "sustainable" :label "Sustainable water and wastewater management (including sustainable infrastructure for clean and/or drinking water, wastewater treatment, sustainable urban drainage systems and river training and other forms of flooding mitigation)", :group "Biodiversity conservation"}
   {:id "other" :label "Other" , :group "None of the above"}])

(def second-opinion-choices
  [{:id "spo" :label "SPO"} {:id "sustainalytics"  :label "Sustainalytics"} {:id "cicero"  :label "CICERO"}
   {:id "svn-gl"  :label "DVN GL"} {:id "moodys-vigeo"  :label "Moody/Vigeo"} {:id "iss-esg"  :label "ISS ESG"} {:id "none"  :label "None of the above"}])

(def independent-verification-choices
  [{:id "second-party-opinion" :label "The bond is certified by an independent second party opinion"} {:id "green-bond-framework"  :label "The bond is certified by an external green bond framework"}
   {:id "external-scoring"  :label "There is an external scoring or rating on the sustainability element"} {:id "none"  :label "None of the above"}])

(def ringfencing-choices
  [{:id "sub-account" :label "A specific sub account has been created"} {:id "green-account"  :label "A specific green account has been created"}
   {:id "virtual-green"  :label "A virtual green account has been created"} {:id "none"  :label "None of the above"}])

(def tracking-choices
  [{:id "verified" :label "The internal tracking will be verified by an auditor"}
   {:id "tracked"  :label "The proceeds are ringfenced or otherwise specifically tracked"} {:id "none"  :label "None of the above"}])

(def existing-choices
  [{:id "refinancing" :label "Refinancing (add % refinanced if applicable, in summary notes)"}
   {:id "initial"  :label "Initial"}
   {:id "both"  :label "Both"}])

(def categories-if-yes [{:id "commited" :label "Commited"} {:id "verified" :label "Verified"}])

(def tf-sectors-choices [{:id "energy" :label "Energy"} {:id "transport"  :label "Transport"} {:id "industry"  :label "Industry"}
                         {:id "buildings"  :label "Buildings"} {:id "agriculture_forestry"  :label "Agriculture/Forestry"}])

(def tf-category-choices [{:id "transitioned" :label "Transitioned"} {:id "transitioning" :label "Transitioning"} {:id "committed"  :label "Committed to transition"} {:id "enabler"  :label "Transition enabler"}
                          {:id "interim"  :label "Interim to phase out"} {:id "aiming"  :label "Aiming to transition"}])

(def tf-reduced-activities-choices [{:id "avoid" :label "Carbon avoided"} {:id "reduce"  :label "Carbon reduced"} {:id "reduce2"  :label "Carbon reduced (intensity)"} {:id "both"  :label "Both"} {:id "none"  :label "None"}])

(def gb-calculator-summary (r/atom {:project-evaluation/categories                         {:question_id 1  :question_category "new-issue" :analyst_answer nil  :analyst_score 0},
                                    :project-evaluation/categories-other                   {:question_id 2  :question_category "new-issue" :analyst_answer ""       :analyst_score 0},
                                    :project-evaluation/description                        {:question_id 3  :question_category "new-issue" :analyst_answer ""       :analyst_score 0},
                                    :project-evaluation/controversies                      {:question_id 4  :question_category "new-issue" :analyst_answer "Yes2"    :analyst_score 0},
                                    :project-evaluation/controversies-comment              {:question_id 27  :question_category "new-issue" :analyst_answer ""    :analyst_score 0}
                                    :independent-verification/independent-verification     {:question_id 5  :question_category "new-issue" :analyst_answer "No"   :analyst_score 0},
                                    :independent-verification/second-opinion               {:question_id 6 :question_category "new-issue" :analyst_answer ""     :analyst_score 0}
                                    :proceed-management/ringfencing                        {:question_id 7 :question_category "new-issue" :analyst_answer "No"   :analyst_score 0},
                                    :proceed-management/tracked                            {:question_id 8 :question_category "new-issue" :analyst_answer "No"   :analyst_score 0},
                                    :proceed-management/use                                {:question_id 9 :question_category "new-issue" :analyst_answer "No"   :analyst_score 0},
                                    :proceed-management/refi-or-exi                        {:question_id 10 :question_category "new-issue" :analyst_answer nil   :analyst_score 0},
                                    :country-framework/country-framework-list              {:question_id 11  :question_category "new-issue" :analyst_answer nil       :analyst_score 0},
                                    :country-framework/better-than-national                {:question_id 12 :question_category "new-issue" :analyst_answer "No"     :analyst_score 0},
                                    :reporting-ni/reporting                                {:question_id 13 :question_category "new-issue" :analyst_answer "No"   :analyst_score 0},
                                    :additional/net-zero                                   {:question_id 14 :question_category "new-issue" :analyst_answer "No"     :analyst_score 0}
                                    :additional/net-zero-year                              {:question_id 15 :question_category "new-issue" :analyst_answer ""     :analyst_score 0}
                                    :additional/sbti                                       {:question_id 26 :question_category "new-issue" :analyst_answer "No"     :analyst_score 0}
                                    :additional/sbti-cat                                   {:question_id 23 :question_category "new-issue" :analyst_answer nil     :analyst_score 0}
                                    :additional/reference-sources                          {:question_id 24 :question_category "new-issue" :analyst_answer ""       :analyst_score 0},
                                    :additional/text                                       {:question_id 25 :question_category "new-issue" :analyst_answer ""       :analyst_score 0},

                                    :reporting/project-on-track                            {:question_id 16 :question_category "reporting" :analyst_answer "No"     :analyst_score 0},
                                    :reporting/project-expanded                            {:question_id 17 :question_category "reporting" :analyst_answer "No"     :analyst_score 0},
                                    :reporting/increased-green-funding                     {:question_id 18 :question_category "reporting" :analyst_answer "No"     :analyst_score 0},
                                    :reporting/annual-report                               {:question_id 19 :question_category "reporting" :analyst_answer "No"     :analyst_score 0},
                                    :reporting/project-kpis                                {:question_id 20 :question_category "reporting" :analyst_answer "No"     :analyst_score 0},
                                    :reporting/half-proceeds-green                         {:question_id 21 :question_category "reporting" :analyst_answer "No"     :analyst_score 0},
                                    :reporting/reconciliation                              {:question_id 22 :question_category "reporting" :analyst_answer "No"     :analyst_score 0}
                                   }))

(def score-1 10)
(def score-2 5)

(def gb-scoring {:project-evaluation/controversies                    {:Yes1 score-2  :Yes2 0 :No score-1}
                 :independent-verification/independent-verification   {:Yes score-1 :No 0}
                 :proceed-management/use                              {:Yes score-1 :No 0}
                 :proceed-management/ringfencing                      {:Yes score-1 :No 0}
                 :proceed-management/tracked                          {:Yes score-1 :No 0}
                 :reporting-ni/reporting                              {:Yes score-1 :No 0}
                 :country-framework/better-than-national              {:Yes score-1 :Yes2 score-2 :No 0}

                 :reporting/project-on-track                          {:Yes 20 :No 0}
                 :reporting/project-expanded                          {:Yes 15 :No 0}
                 :reporting/increased-green-funding                   {:Yes 15 :No 0}
                 :reporting/annual-report                             {:Yes 10 :No 0}
                 :reporting/project-kpis                              {:Yes 15 :No 0}
                 :reporting/half-proceeds-green                       {:Yes 15 :No 0}
                 :reporting/reconciliation                            {:Yes 10 :No 0}})

(defn gb-score-calculator []
  (doseq [a (keys @gb-calculator-summary)] (reset! (r/cursor gb-calculator-summary [a :analyst_score]) (case (get-in gb-scoring [a (keyword (get-in @gb-calculator-summary [a :analyst_answer]))])
                                                                                                           nil 0
                                                                                                           (get-in gb-scoring [a (keyword (get-in @gb-calculator-summary [a :analyst_answer]))]))))
  (let [summary @gb-calculator-summary
        new_issue-total-score (reduce + (into [] (for [e (keys summary)] (if (not= (get-in summary [e :question_category]) "reporting") (get-in summary [e :analyst_score]) 0))))
        reporting-total-score (reduce + (into [] (for [e (keys summary)] (if (= (get-in summary [e :question_category]) "reporting") (get-in summary [e :analyst_score]) 0))))]
    (reset! gb-score-new-issue new_issue-total-score)
    (reset! gb-score-follow-up reporting-total-score)
    )
  )


(defn gb-summary-generator [is-reporting]
  (let [answers @gb-calculator-summary
        answers_clean  (if (= is-reporting true)
                         (into {} (for [[k v] answers :when (= (:question_category v) "reporting")] [k v]))
                         (into {} (for [[k v] answers :when (not= (:question_category v) "reporting")] [k v])))
        summary (for [k (keys answers_clean)] {:question_id (get-in answers_clean [k :question_id]) :analyst_code @analyst-name :date today-date :security_identifier @identifier
                                               :analyst_answer (if (nil? (get-in answers_clean [k :analyst_answer])) "" (get-in answers_clean [k :analyst_answer]))
                                               :analyst_score (get-in answers_clean [k :analyst_score])})]
    (rf/dispatch [:post-esg-report-upload summary])
    ))


(defn green-bond-scoring-display []
  (let [country-names-sorted (mapv (fn [x] {:id x :label x}) (sort (distinct (map :LongName @(rf/subscribe [:country-codes])))))]
  [v-box :width "1280px" :gap "5px" :class "element"
   :children [[modal-success]
              [title :label "Green bond calculator" :level :level1]
              [h-box :gap "10px" :align :center
               :children [[box :width question-width :child [title :label "ISIN" :level :level2]]
                          [input-text :width categories-list-width-long :placeholder "MAX 12 characters" :model identifier :attr {:maxlength 12}
                                                                      :on-change #(reset! identifier %)]]]
              [h-box :gap "10px" :align :center
               :children [[box :width question-width :child [title :label "Analyst" :level :level2]]
                          [single-dropdown :width dropdown-width :choices analyst-names-list :model analyst-name
                           :on-change #(reset! analyst-name %)]]]
              [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "New issue score" :level :level2]] [progress-bar :width categories-list-width-long :model (js/parseInt (str (* @gb-score-new-issue (/ 100 70)))) ]]]
              [title :label "Project Evaluation" :level :level2]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Category:"]
                          [single-dropdown :width categories-list-width-long  :placeholder "Please select..." :choices project-sub-categories :model (r/cursor gb-calculator-summary [:project-evaluation/categories :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:project-evaluation/categories :analyst_answer])%)
                                           (if (= "other" %) (reset! other-disabled? false) (reset! other-disabled? true))
                                           (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Other:"]
                          [input-text :width categories-list-width-long  :model (r/cursor gb-calculator-summary [:project-evaluation/categories-other :analyst_answer]) :disabled? other-disabled?
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:project-evaluation/categories-other :analyst_answer]) %))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Project description:"]
                          [input-textarea :width categories-list-width-long :model (r/cursor gb-calculator-summary [:project-evaluation/description :analyst_answer ])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:project-evaluation/description :analyst_answer]) %))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is there a potential for social risks and/or other controversies?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice-2 :model (r/cursor gb-calculator-summary [:project-evaluation/controversies :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:project-evaluation/controversies :analyst_answer]) %) (gb-score-calculator))]]]
              (case (get-in @gb-calculator-summary [:project-evaluation/controversies :analyst_answer])
                            "No" nil
                             [h-box :gap "10px" :align :center
                                    :children [[label :width question-width :label "Comment if there is a risk of controversies:"]
                                               [input-textarea :width categories-list-width-long :model (r/cursor gb-calculator-summary [:project-evaluation/controversies-comment :analyst_answer ])
                                                :on-change #(do (reset! (r/cursor gb-calculator-summary [:project-evaluation/controversies-comment :analyst_answer]) %))]]])

              [title :label "Independent Verification" :level :level2]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the green bond have independent verification?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:independent-verification/independent-verification :analyst_answer ])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:independent-verification/independent-verification :analyst_answer ]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Who provides the independent verification?"]
                          [input-text :width categories-list-width-long  :model (r/cursor gb-calculator-summary [:independent-verification/second-opinion :analyst_answer ])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:independent-verification/second-opinion :analyst_answer]) %))]]]

              [title :label "Use and Management of Proceeds" :level :level2 ]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are all the proceeds used for financing/refinancing green projects?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:proceed-management/use :analyst_answer ])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:proceed-management/use :analyst_answer ]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Refinancing of an existing project or initial financing? "]
                          [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices existing-choices
                           :model (r/cursor gb-calculator-summary [:proceed-management/refi-or-exi :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:proceed-management/refi-or-exi :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are the use of proceeds tracked?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:proceed-management/tracked :analyst_answer ])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:proceed-management/tracked :analyst_answer ]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are the use of proceeds ringfenced?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:proceed-management/ringfencing :analyst_answer ])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:proceed-management/ringfencing :analyst_answer ]) %) (gb-score-calculator))]]]

              [title :label "Reporting" :level :level2 ]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is there regular reporting on the impact stemming from the green projects??"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:reporting-ni/reporting :analyst_answer ])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:reporting-ni/reporting :analyst_answer ]) %) (gb-score-calculator))]]]

              [title :label "Country Framework" :level :level2 ]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the company framework better than the national framework?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice-3 :model (r/cursor gb-calculator-summary [:country-framework/better-than-national :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:country-framework/better-than-national :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Country:"]
                          [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices country-names-sorted :filter-box? true :model (r/cursor gb-calculator-summary [:country-framework/country-framework-list :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:country-framework/country-framework-list :analyst_answer]) %) (gb-score-calculator))]]]

              [title :label "Additional Information" :level :level2 ]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the company net-zero committed?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:additional/net-zero :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:additional/net-zero :analyst_answer]) %) (if (= "Yes" %) (reset! year-disabled? false) (reset! year-disabled? true))
                                           (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "If yes please indicate the year "]
                          [input-text :width dropdown-width  :validation-regex #"^[0-9]*$" :attr {:maxlength 12} :model (r/cursor gb-calculator-summary [:additional/net-zero-year :analyst_answer]) :disabled? year-disabled?
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:additional/net-zero-year :analyst_answer]) %))]]]

              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the company SBTi aligned and if so, which category?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:additional/sbti :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:additional/sbti :analyst_answer]) %) (if (= "Yes" %) (reset! sbti-disabled? false) (reset! sbti-disabled? true))
                                           (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "If yes please indicate the category"]
                          [single-dropdown :width categories-list-width-long :placeholder "Please select..." :choices categories-if-yes :model (r/cursor gb-calculator-summary [:additional/sbti-cat :analyst_answer]) :disabled? sbti-disabled?
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:additional/sbti-cat :analyst_answer]) %))]]]

              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Reference sources:"]
                          [input-textarea  :width categories-list-width-long :model (r/cursor gb-calculator-summary [:additional/reference-sources :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:additional/reference-sources :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[box :width question-width :child [title :label "Analyst summary/notes"]]
                          [input-textarea :width categories-list-width-long :model (r/cursor gb-calculator-summary [:additional/text :analyst_answer ])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:additional/text :analyst_answer]) %))]]]
              [gap :size "10px"]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label ""]
                          [button :label "Save new issue report" :class "btn btn-primary btn-block" :on-click #(do (gb-score-calculator) (gb-summary-generator false))]]]
              [gap :size "20px"]
              [line :size  "2px" :color "black"] ;[gap :size "50px"]
              [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "Follow-up score" :level :level2]]
                                                             [progress-bar :width categories-list-width-long :model gb-score-follow-up ]]]

              [title :label "Reporting" :level :level2]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the project on track?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:reporting/project-on-track :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:reporting/project-on-track :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the green project expanded?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:reporting/project-expanded :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:reporting/project-expanded :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Has the company increased green funding as % of spending?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:reporting/increased-green-funding :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:reporting/increased-green-funding :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the company undertakes to produce an annual report?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:reporting/annual-report :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:reporting/annual-report :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Does the company reports detailed projects KPIs?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:reporting/project-kpis :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:reporting/project-kpis :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Are more than 50% of the proceeds spent on green projects?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:reporting/half-proceeds-green :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:reporting/half-proceeds-green :analyst_answer]) %) (gb-score-calculator))]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "On a ongoing basis, does the company reconciled proceeds with uses?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor gb-calculator-summary [:reporting/reconciliation :analyst_answer])
                           :on-change #(do (reset! (r/cursor gb-calculator-summary [:reporting/reconciliation :analyst_answer]) %) (gb-score-calculator))]]]
              [gap :size "10px"]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label ""]
                          [button :label "Extract follow-up report" :class "btn btn-primary btn-block" :on-click #(do (gb-score-calculator) (gb-summary-generator true))]]]
              ]]
    ))

(defn reporting-display []
  ;(rf/dispatch [:post-esg-report-extract @gb-isin @gb-date])
  (let [esg-reports @(rf/subscribe [:esg-report-list])
        qt @(rf/subscribe [:quant-model/model-output])
        esg-reports-clean (for [i esg-reports] (assoc i :unique_id (str (if (= (i :report) "green-bond") "GB" "TF") "_" (:Ticker (first (t/chainfilter {:ISIN (i :security_identifier)} qt))) "_" (i :date2))))
        esg-reports-clean-input (mapv (fn [x] {:id x :label x}) (sort (distinct (map :unique_id esg-reports-clean))))
        report-selected @(rf/subscribe [:esg-report-extract])
        isin ((first report-selected) :security_identifier)
        qt-isin (first (t/chainfilter {:ISIN isin} qt))
        ticker (:Ticker qt-isin)
        country (:LongName (first (t/chainfilter {:CountryCode (:Country qt-isin)} @(rf/subscribe [:country-codes]))))
        sector (:Sector qt-isin)
        name (:Bond qt-isin)
        coupon (:COUPON qt-isin)
        amt-out (:AMT_OUTSTANDING qt-isin)
        analyst-score (reduce + (map :analyst_score report-selected))
        report-category (case @report-type
             "transition-fund" "Transition Finance Report"
             "green-bond" (if (= (:category (first report-selected)) "reporting") "Follow up reporting" "New issue report")
             nil
             )
        ]
    [v-box :gap "5px" :children
    [[v-box :width "1280px" :gap "10px" :class "element"
     :children [[modal-success]
                [title :label "ESG report" :level :level1]
                [h-box :gap "10px" :align :center
                 :children [[label :width question-width :label "Report"]
                            [single-dropdown :width categories-list-width-long :choices esg-reports-clean-input :filter-box? true :model esg-report-selected
                             :on-change #(do (reset! esg-report-selected %)
                                             (reset! gb-isin (:security_identifier (first (t/chainfilter {:unique_id %} esg-reports-clean))))
                                             (reset! gb-date (:date2 (first (t/chainfilter {:unique_id %} esg-reports-clean))))
                                             (reset! report-type (:report (first (t/chainfilter {:unique_id %} esg-reports-clean))))
                                             (rf/dispatch [:post-esg-report-extract @gb-isin @gb-date @report-type]))]
                            ]]
                ]]
    [v-box :width "1280px" :gap "5px" :class "element"
     :children (concat [[h-box :gap "10px" :align :center :children [[:img {:width "37px" :height "64px" :src "assets/91-logo-green.png"}] [title :label report-category :level :level1]]]
                        [gap :size "20px"]
                        [title :label "Issue Information" :level :level2]
                        [h-box :gap "10px" :align :center :children [[label :width question-width :label "Name"] [p {:style {:width "500px" :text-align :justify}} name]]]
                        [h-box :gap "10px" :align :center :children [[label :width question-width :label "Isin"] [p {:style {:width "500px" :text-align :justify}} isin]]]
                        [h-box :gap "10px" :align :center :children [[label :width question-width :label "Ticker"] [p {:style {:width "500px" :text-align :justify}} ticker]]]
                        [h-box :gap "10px" :align :center :children [[label :width question-width :label "Country"] [p {:style {:width "500px" :text-align :justify}} country]]]
                        [h-box :gap "10px" :align :center :children [[label :width question-width :label "Sector"] [p {:style {:width "500px" :text-align :justify}} sector]]]
                        [h-box :gap "10px" :align :center :children [[label :width question-width :label "Amount outstanding"] [p {:style {:width "500px" :text-align :justify} } (tools/tnfmt amt-out)]]] ;:Cell tables/nfcell2 (tools/tnfmt (:total-trade @leg))
                        [h-box :gap "10px" :align :center :children [[label :width question-width :label "Coupon"] [p {:style {:width "500px" :text-align :justify}} coupon]]]
                        [gap :size "1"]]
                       (case @report-type
                         "green-bond" (if (not= report-category "Follow up reporting")
                         [[h-box :gap "10px" :align :center :children [[box :width question-width :child [title :label "New Issue Score" :level :level2]] [progress-bar :width categories-list-width-long :model (Math/round (/ analyst-score 0.7))]]]
                          [title :label "Summary" :level :level2]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Analyst summary:"] [p {:style {:width "500px" :text-align :justify}} (str (:analyst_answer (first (t/chainfilter {:description_short "text"} report-selected))))]]]
                          [gap :size "1"]
                          [title :label "Project Evaluation" :level :level2]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Category:"] [p {:style {:width "500px"}} (str (:label (first (t/chainfilter {:id (:analyst_answer (first (t/chainfilter {:description_short "categories"} report-selected)))} project-sub-categories))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Description:"] [p {:style {:width "500px" :text-align :justify}} (str (:analyst_answer (first (t/chainfilter {:description_short "description"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is there a potential for social risks and/or other controversies?"] [p (str (:label (first (t/chainfilter {:id (:analyst_answer (first (t/chainfilter {:description_short "controversies"} report-selected)))} yes-no-choice-2))))]]] ;(str (:label (first (t/chainfilter {:id (:analyst_answer (first (t/chainfilter {:description_short "net-zero"} report-selected)))} yes-no-choice-2))))
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Controversies comment:"] [p {:style {:width "500px" :text-align :justify}} (str (:analyst_answer (first (t/chainfilter {:description_short "controversies-comment"} report-selected))))]]]
                          [gap :size "1"]
                          [title :label "Independent Verification" :level :level2]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Who provides second opinion?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "second-opinion"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Independent verification:"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "independent-verification"} report-selected))))]]]
                          [title :label "Use and Management of Proceeds" :level :level2]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Refinancing of an existing project or initial financing?"] [p {:style {:width "500px"}} (str (:analyst_answer (first (t/chainfilter {:description_short "use"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Are all the proceeds used for financing/refinancing green projects?"] [p {:style {:width "500px"}} (str (:label (first (t/chainfilter {:id (:analyst_answer (first (t/chainfilter {:description_short "refi-or-exi"} report-selected)))} existing-choices))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Are the use of proceeds ringfenced?"] [p {:style {:width "500px"}} (str (:analyst_answer (first (t/chainfilter {:description_short "ringfencing"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Are the use of proceeds tracked?"] [p {:style {:width "500px"}} (str (:analyst_answer (first (t/chainfilter {:description_short "tracked"} report-selected))))]]]
                          [title :label "Reporting" :level :level2]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is there regular reporting on the impact stemming from the green projects?"] [p {:style {:width "500px"}} (str (:analyst_answer (first (t/chainfilter {:description_short "reporting"} report-selected))))]]]
                          [title :label "Country Framework" :level :level2]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Country:"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "country-framework-list"} report-selected))))]]] ;[:img {:src (str "assets/png100px/mw"  ".png")}]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is the company framework better than the national framework?"] [p (str (:label (first (t/chainfilter {:id (:analyst_answer (first (t/chainfilter {:description_short "better-than-national"} report-selected)))} yes-no-choice-3))))]]]
                          [title :label "Additional Information" :level :level2]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is the company net-zero committed?"] [p {:style {:width "500px" :text-align :justify}} (str (:analyst_answer (first (t/chainfilter {:description_short "net-zero"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "If yes please indicate the year:"] [p {:style {:width "500px" :text-align :justify}} (str (:analyst_answer (first (t/chainfilter {:description_short "net-zero-year"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is the company SBTi aligned and if so, which category?"] [p {:style {:width "500px" :text-align :justify}} (str (:analyst_answer (first (t/chainfilter {:description_short "sbti"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "If yes please indicate the category:"] [p {:style {:width "500px" :text-align :justify}} (str (:label (first (t/chainfilter {:id (:analyst_answer (first (t/chainfilter {:description_short "sbti-cat"} report-selected)))} categories-if-yes))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Reference sources:"] [p {:style {:width "500px"}} (str (:analyst_answer (first (t/chainfilter {:description_short "reference-sources"} report-selected))))]]]
                          ]
                         [[h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "Reporting" :level :level2]] [progress-bar :width categories-list-width-long :model analyst-score]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is the project on track?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "project-on-track"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is the green project expanded?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "project-expanded"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Has the company increased green funding as % of spending?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "increased-green-funding"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Does the company undertakes to produce an annual report?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "annual-report"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Does the company reports detailed projects KPIs?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "project-kpis"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Are more than 50% of the proceeds spent on green projects?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "half-proceeds-green"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "On a ongoing basis, does the company reconciled proceeds with uses?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "reconciliation"} report-selected))))]]]]
                         )
                         "transition-fund"
                         [[h-box :gap "10px" :align :center :children [[box :width question-width :child [title :label "Transition fund score" :level :level2]] [progress-bar :width categories-list-width-long :model analyst-score]]]
                          [title :label "Eligibility" :level :level2]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is the company/issuer working towards net zero alignment?"] [p {:style {:width "500px"}} (str (:analyst_answer (first (t/chainfilter {:description_short "net-zero"} report-selected)))) ]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is the company or activity to be financed supporting one of the five transition sectors?"] [p {:style {:width "500px" :text-align :justify}} (str (:analyst_answer (first (t/chainfilter {:description_short "sectors"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Sector:"] [p {:style {:width "500px" :text-align :justify}} (str (:label (first (t/chainfilter {:id (:analyst_answer (first (t/chainfilter {:description_short "sectors-choice"} report-selected)))} tf-sectors-choices))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Comment:"] [p {:style {:width "500px" :text-align :justify}} (str (:analyst_answer (first (t/chainfilter {:description_short "sectors-comment"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Does the company have emissions intensity close to zero or a large majority (95%) of green revenue?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "intensity"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Does the company have clear plans to transition??"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "clear-plans"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is the company/asset required to enable the transition to net zero for other sectors?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "other-sectors"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is the company ahead of its peer group on climate-related metrics?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "ahead-peers"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Is the company/issuer expanding misaligned activities?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "misaligned"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Misaligned activities comment:"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "misaligned-comment"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "What is the most appropriate classification for this transition investment?"] [p (str (:label (first (t/chainfilter {:id (:analyst_answer (first (t/chainfilter {:description_short "category"} report-selected)))} tf-category-choices))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Categorisation comment:"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "category-comment"} report-selected))))]]]
                          [gap :size "1"]
                          [title :label "Additional questions" :level :level2]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Reduced activities:"] [p (str (:label (first (t/chainfilter {:id (:analyst_answer (first (t/chainfilter {:description_short "activities"} report-selected)))} tf-reduced-activities-choices))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "What is the annual carbon avoided figure?"] [p (str (if (= (tools/tnfmt (:analyst_answer (first (t/chainfilter {:description_short "avoided-figure"} report-selected)))) "0") "" (tools/tnfmt (:analyst_answer (first (t/chainfilter {:description_short "avoided-figure"} report-selected))))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Short-term (2030) targets which are at or near Paris aligned?"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "paris"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Comment on target:"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "target-comment"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Target base year:"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "target-year"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Emission scopes included:"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "scope-comment"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Base year emissions:"] [p (str (if (= (tools/tnfmt (:analyst_answer (first (t/chainfilter {:description_short "emissions-year"} report-selected)))) "0") "" (tools/tnfmt (:analyst_answer (first (t/chainfilter {:description_short "emissions-year"} report-selected))))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Most recent emissions year:"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "recent-emissions-year"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Most recent emissions:"] [p (str (if (= (tools/tnfmt (:analyst_answer (first (t/chainfilter {:description_short "recent-emissions"} report-selected)))) "0") "" (tools/tnfmt (:analyst_answer (first (t/chainfilter {:description_short "recent-emissions"} report-selected))))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Reduction target year:"] [p (str (:analyst_answer (first (t/chainfilter {:description_short "reduction-target-year"} report-selected))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Reduction target:"] [p (str (if (= (tools/tnfmt (:analyst_answer (first (t/chainfilter {:description_short "reduction-target"} report-selected)))) "0") "" (tools/tnfmt (:analyst_answer (first (t/chainfilter {:description_short "reduction-target"} report-selected))))))]]]
                          [h-box :gap "10px" :align :center :children [[label :width question-width :label "Total absolute emissions reduction:"] [p (str (if (= (tools/tnfmt (:analyst_answer (first (t/chainfilter {:description_short "total-emissions"} report-selected)))) "0") "" (tools/tnfmt (:analyst_answer (first (t/chainfilter {:description_short "total-emissions"} report-selected))))))]]]
                          ]
                         nil
                         ))]
     ]
     ]
    ))

(def tf-total-score (r/atom 0))
(def tf-analyst-name (r/atom ""))
(def tf-identifier (r/atom ""))
(def is-tf-eligible (r/atom "No"))

(def tf-calculator-summary (r/atom {:eligibility/net-zero            {:question_id 50 :analyst_answer "" :analyst_score 0},
                                    :eligibility/sectors             {:question_id 66 :analyst_answer "" :analyst_score 0},
                                    :eligibility/sectors-choice      {:question_id 67 :analyst_answer "" :analyst_score 0},
                                    :eligibility/sectors-comment     {:question_id 68 :analyst_answer "" :analyst_score 0},
                                    :eligibility/intensity           {:question_id 69 :analyst_answer "" :analyst_score 0},
                                    :eligibility/clear-plans         {:question_id 51 :analyst_answer "" :analyst_score 0},
                                    :eligibility/other-sectors       {:question_id 52 :analyst_answer "" :analyst_score 0},
                                    :eligibility/ahead-peers         {:question_id 53 :analyst_answer "" :analyst_score 0},
                                    :eligibility/misaligned          {:question_id 70 :analyst_answer "" :analyst_score 0},
                                    :eligibility/misaligned-comment  {:question_id 71 :analyst_answer "" :analyst_score 0},
                                    :eligibility/category            {:question_id 54 :analyst_answer "" :analyst_score 0},
                                    :eligibility/category-comment    {:question_id 55 :analyst_answer "" :analyst_score 0},
                                    :subs/activities                 {:question_id 56 :analyst_answer "" :analyst_score 0},
                                    :subs/avoided-figure             {:question_id 57 :analyst_answer "" :analyst_score 0},
                                    :subs/paris                      {:question_id 58 :analyst_answer "" :analyst_score 0},
                                    :subs/target-comment             {:question_id 59 :analyst_answer "" :analyst_score 0},
                                    :subs/target-year                {:question_id 60 :analyst_answer "" :analyst_score 0},
                                    :subs/scope-comment              {:question_id 61 :analyst_answer "" :analyst_score 0},
                                    :subs/emissions-year             {:question_id 62 :analyst_answer "" :analyst_score 0},
                                    :subs/recent-emissions-year      {:question_id 72 :analyst_answer "" :analyst_score 0},
                                    :subs/recent-emissions           {:question_id 63 :analyst_answer "" :analyst_score 0},
                                    :subs/reduction-target-year      {:question_id 73 :analyst_answer "" :analyst_score 0},
                                    :subs/reduction-target           {:question_id 64 :analyst_answer "" :analyst_score 0},
                                    :subs/total-emissions            {:question_id 65 :analyst_answer "" :analyst_score 0}}))

(def tf-scoring {:eligibility/net-zero      {:Yes 30 :No 0}
                 :eligibility/intensity     {:Yes 10 :No 0}
                 :eligibility/clear-plans   {:Yes 10 :No 0}
                 :eligibility/other-sectors {:Yes 10 :No 0}
                 :eligibility/ahead-peers   {:Yes 10 :No 0}
                 :subs/activities           {:avoid 40 :reduce 20 :both 40 :none 0}
                 :subs/paris                {:Yes 20 :No 0}})

(defn tf-eligible []
  (let [answers @tf-calculator-summary]
    (if (and (= (get-in answers [:eligibility/net-zero :analyst_answer]) "Yes")
             (or (= (get-in answers [:eligibility/intensity :analyst_answer]) "Yes")
                 (= (get-in answers [:eligibility/clear-plans :analyst_answer]) "Yes")
                 (= (get-in answers [:eligibility/other-sectors :analyst_answer]) "Yes")
                 (= (get-in answers [:eligibility/ahead-peers :analyst_answer]) "Yes")))
      (reset! is-tf-eligible "Yes")
      (reset! is-tf-eligible "No"))))

(defn tf-score-calculator []
  (doseq [a (keys @tf-calculator-summary)] (reset! (r/cursor tf-calculator-summary [a :analyst_score]) (case (get-in tf-scoring [a (keyword (get-in @tf-calculator-summary [a :analyst_answer]))])
                                                                                                         nil 0
                                                                                                         (get-in tf-scoring [a (keyword (get-in @tf-calculator-summary [a :analyst_answer]))]))))
  (let [summary @tf-calculator-summary
        total-score (reduce + (into [] (for [e (keys summary)] (get-in summary [e :analyst_score]))))]
    (reset! tf-total-score total-score)
    )
  )

(defn tf-summary-generator []
  (let [answers @tf-calculator-summary
        summary (for [k (keys answers)] {:question_id (get-in answers [k :question_id]) :analyst_code @tf-analyst-name :date today-date
                                         :security_identifier @tf-identifier :analyst_answer (get-in answers [k :analyst_answer]) :analyst_score (get-in answers [k :analyst_score])})]
    (rf/dispatch [:post-esg-report-upload summary]) ; new system table with scores for each questions?
    ))

(defn clean-report! []
  (doseq [q @tf-calculator-summary] (reset! (r/cursor tf-calculator-summary [(key q) :analyst_answer]) ""))
  )

(def question-width-label "423px")

(defn transition-fund-scoring-display []
    [v-box :width "1280px" :gap "5px" :class "element"
     :children [[modal-success]
                [title :label "Transition fund calculator" :level :level1]
                [h-box :gap "10px" :align :center
                 :children [[box :width question-width :child [title :label "ISIN" :level :level2]]
                            [input-text :width categories-list-width-long :placeholder "MAX 12 characters" :model tf-identifier :attr {:maxlength 12}
                             :on-change #(do (reset! tf-identifier %)
                                             (clean-report!)
                                             (reset! is-tf-eligible "No"))
                             ]]]
                [h-box :gap "10px" :align :center
                 :children [[box :width question-width :child [title :label "Analyst" :level :level2]]
                            [single-dropdown :width dropdown-width :choices analyst-names-list :model tf-analyst-name
                             :on-change #(reset! tf-analyst-name %)]
                            ]]
                [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "Score" :level :level2]] [progress-bar :width categories-list-width-long :model @tf-total-score ]]]
                [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "Transition fund eligibility" :level :level2]]
                                                               [box :width dropdown-width :child [button :label @is-tf-eligible :disabled? true :style {:width dropdown-width :color "black" :backgroundColor (if (= @is-tf-eligible "Yes") "Chartreuse" "Red" ) :textAlign "center"}]]]]
                [h-box :gap "10px" :align :center
                 :children [[label :width question-width-label :label "Is the company/issuer working towards net zero alignment?"]
                            [info-button :info "All Transition Investments should have a commitment to achieve carbon neutrality in the future. This includes both an explicit target or a public commitment (without a target date)" :position :left-center]
                            [single-dropdown :width dropdown-width :choices yes-no-choice
                             :model (r/cursor tf-calculator-summary [:eligibility/net-zero :analyst_answer])
                             :on-change #(do (reset! (r/cursor tf-calculator-summary [:eligibility/net-zero :analyst_answer]) %)
                                             (tf-eligible)
                                             (tf-score-calculator)
                                             (if (= % "No") (do (reset! (r/cursor tf-calculator-summary [:eligibility/intensity           :analyst_answer]) "")
                                                                (reset! (r/cursor tf-calculator-summary [:eligibility/clear-plans         :analyst_answer]) "")
                                                                (reset! (r/cursor tf-calculator-summary [:eligibility/other-sectors       :analyst_answer]) "")
                                                                (reset! (r/cursor tf-calculator-summary [:eligibility/ahead-peers         :analyst_answer]) "")
                                                                (reset! (r/cursor tf-calculator-summary [:eligibility/category            :analyst_answer]) "")
                                                                (reset! (r/cursor tf-calculator-summary [:eligibility/category-comment    :analyst_answer]) "")
                                                                (reset! (r/cursor tf-calculator-summary [:eligibility/sectors             :analyst_answer]) "")
                                                                (reset! (r/cursor tf-calculator-summary [:eligibility/sectors-comment     :analyst_answer]) "")
                                                                (reset! (r/cursor tf-calculator-summary [:eligibility/sectors-choice      :analyst_answer]) "")
                                                                (reset! (r/cursor tf-calculator-summary [:eligibility/misaligned          :analyst_answer]) "")
                                                                (reset! (r/cursor tf-calculator-summary [:eligibility/misaligned-comment  :analyst_answer]) "")
                                                                ))
                                             )]]]

                (if (= (get-in @tf-calculator-summary [:eligibility/net-zero :analyst_answer]) "Yes") ;first level eligibility
                  (concat
                    [[v-box  :gap "5px" :children [
                   [h-box :gap "10px" :align :center
                    :children [[label :width question-width-label :label "Is the company or activity to be financed supporting one of the five transition sectors?"]
                               [info-button :info "bla bla " :position :left-center]
                               [single-dropdown :width dropdown-width :choices yes-no-choice
                                :model (r/cursor tf-calculator-summary [:eligibility/sectors :analyst_answer])
                                :on-change #(do (reset! (r/cursor tf-calculator-summary [:eligibility/sectors :analyst_answer]) %)
                                                (tf-score-calculator)
                                                )]]]
                   (case (get-in @tf-calculator-summary [:eligibility/sectors :analyst_answer])
                     "Yes" [h-box :gap "10px" :align :center
                      :children [[label :width question-width :label "Select sector:"]
                                 [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices tf-sectors-choices
                                  :model (r/cursor tf-calculator-summary [:eligibility/sectors-choice :analyst_answer])
                                  :on-change #(reset! (r/cursor tf-calculator-summary [:eligibility/sectors-choice :analyst_answer]) %)]]]
                     "No" [h-box :gap "10px" :align :start
                      :children [[label :width question-width :label "Sector comment:"]
                                 [input-textarea :width categories-list-width-long :rows 5
                                  :model (r/cursor tf-calculator-summary [:eligibility/sectors-comment :analyst_answer])
                                  :on-change #(do (reset! (r/cursor tf-calculator-summary [:eligibility/sectors-comment :analyst_answer]) %))]]]
                     nil
                     )
                     [h-box :gap "10px" :align :center
                      :children [[label :width question-width :label "Does the company have emissions intensity close to zero or a large majority (95%) of green revenue?"]
                                 [single-dropdown :width dropdown-width :choices yes-no-choice
                                  :model (r/cursor tf-calculator-summary [:eligibility/intensity :analyst_answer])
                                  :on-change #(do (reset! (r/cursor tf-calculator-summary [:eligibility/intensity :analyst_answer]) %)
                                                  (tf-eligible)
                                                  (tf-score-calculator))]]]
                    [h-box :gap "10px" :align :center
                     :children [[label :width question-width :label "Does the company have clear plans to transition?"]
                                [single-dropdown :width dropdown-width :choices yes-no-choice
                                 :model (r/cursor tf-calculator-summary [:eligibility/clear-plans :analyst_answer])
                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:eligibility/clear-plans :analyst_answer]) %)
                                                 (tf-eligible)
                                                 (tf-score-calculator))]]]
                    [h-box :gap "10px" :align :center
                     :children [[label :width question-width :label "Is the company/asset required to enable the transition to net zero for other sectors?"]
                                [single-dropdown :width dropdown-width :choices yes-no-choice
                                 :model (r/cursor tf-calculator-summary [:eligibility/other-sectors :analyst_answer])
                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:eligibility/other-sectors :analyst_answer]) %)
                                                 (tf-eligible)
                                                 (tf-score-calculator))]]]
                    [h-box :gap "10px" :align :center
                     :children [[label :width question-width :label "Is the company ahead of its peer group on climate-related metrics?"]
                                [single-dropdown :width dropdown-width :choices yes-no-choice
                                 :model (r/cursor tf-calculator-summary [:eligibility/ahead-peers :analyst_answer])
                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:eligibility/ahead-peers :analyst_answer]) %)
                                                 (tf-eligible)
                                                 (tf-score-calculator))]]]
                     [h-box :gap "10px" :align :center
                      :children [[label :width question-width :label "Is the company/issuer expanding misaligned activities?"]
                                 [single-dropdown :width dropdown-width :choices yes-no-choice
                                  :model (r/cursor tf-calculator-summary [:eligibility/misaligned :analyst_answer])
                                  :on-change #(do (reset! (r/cursor tf-calculator-summary [:eligibility/misaligned :analyst_answer]) %)
                                                  (tf-score-calculator))]]]
                      (if (= (get-in @tf-calculator-summary [:eligibility/misaligned :analyst_answer]) "Yes")
                        [h-box :gap "10px" :align :start
                         :children [[label :width question-width :label "Misaligned activities comment:"]
                                    [input-textarea :width categories-list-width-long :rows 5
                                     :model (r/cursor tf-calculator-summary [:eligibility/misaligned-comment :analyst_answer])
                                     :on-change #(do (reset! (r/cursor tf-calculator-summary [:eligibility/misaligned-comment :analyst_answer]) %))]]]
                        nil
                        )
                    [h-box :gap "10px" :align :center
                     :children [[label :width question-width :label "What is the most appropriate classification for this transition investment?"]
                                [single-dropdown :placeholder "Please select..." :width categories-list-width-long :choices tf-category-choices
                                 :model (r/cursor tf-calculator-summary [:eligibility/category :analyst_answer])
                                 :on-change #(reset! (r/cursor tf-calculator-summary [:eligibility/category :analyst_answer]) %)]]]
                    [h-box :gap "10px" :align :start
                     :children [[label :width question-width :label "Categorisation comment"]
                                [input-textarea :width categories-list-width-long :rows 5
                                 :model (r/cursor tf-calculator-summary [:eligibility/category-comment :analyst_answer])
                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:eligibility/category-comment :analyst_answer]) %))]]]
                                                  ]]]
                    )
                  )
                (if (= @is-tf-eligible "Yes")
                  (concat
                    [[v-box  :gap "5px" :children
                     [[title :label "Additional questions" :level :level2 ]
                      [h-box :gap "10px" :align :center
                      :children [[label :width question-width :label "Reduced activities:"]
                                [single-dropdown :placeholder "Please select..." :width categories-list-width-long
                                 :choices tf-reduced-activities-choices
                                 :model (r/cursor tf-calculator-summary [:subs/activities :analyst_answer])
                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/activities :analyst_answer]) %)
                                                 (tf-score-calculator))]]]
                      (case (get-in @tf-calculator-summary [:subs/activities :analyst_answer])
                        "avoid" (concat
                          [[h-box :gap "10px" :align :center
                             :children [[label :width question-width :label "What is the annual carbon avoided figure?"]
                                        [input-text :width categories-list-width-long
                                         :validation-regex #"^[0-9]*$"
                                         :model (r/cursor tf-calculator-summary [:subs/avoided-figure :analyst_answer])
                                         :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/avoided-figure :analyst_answer]) %)
                                                         (tf-score-calculator))]]]])
                        (or "reduce" "reduce2") (concat
                                   [[v-box  :gap "5px" :children
                                     [[h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Short-term (2030) targets which are at or near Paris aligned?"]
                                                [single-dropdown :width dropdown-width
                                                 :choices yes-no-choice
                                                 :model (r/cursor tf-calculator-summary [:subs/paris :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/paris :analyst_answer]) %)
                                                                 (tf-score-calculator))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Comment on target:"]
                                                [input-textarea :width categories-list-width-long :rows 5
                                                 :model (r/cursor tf-calculator-summary [:subs/target-comment :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/target-comment :analyst_answer]) %))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Target base year:"]
                                                [input-text :width categories-list-width-long
                                                 :validation-regex #"^[0-9]*$"
                                                 :model (r/cursor tf-calculator-summary [:subs/target-year :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/target-year :analyst_answer]) %)
                                                                 (tf-score-calculator))]]]
                                      [h-box :gap "10px" :align :center
                                       :children [[label :width question-width :label "Base year emissions/intensity:"]
                                                  [input-text :width categories-list-width-long
                                                   :validation-regex #"^[0-9]*$"
                                                   :model (r/cursor tf-calculator-summary [:subs/emissions-year :analyst_answer])
                                                   :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/emissions-year :analyst_answer]) %)
                                                                   (tf-score-calculator))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Emission scopes included:"]
                                                [input-textarea :width categories-list-width-long :rows 5
                                                 :model (r/cursor tf-calculator-summary [:subs/scope-comment :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/scope-comment :analyst_answer]) %))]]]

                                      [h-box :gap "10px" :align :center
                                       :children [[label :width question-width :label "Most recent emissions year:"]
                                                  [input-text :width categories-list-width-long
                                                   :validation-regex #"^[0-9]*$"
                                                   :model (r/cursor tf-calculator-summary [:subs/recent-emissions-year :analyst_answer])
                                                   :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/recent-emissions-year :analyst_answer]) %))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Most recent emissions/intensity:"]
                                                [input-text :width categories-list-width-long
                                                 :validation-regex #"^[0-9]*$"
                                                 :model (r/cursor tf-calculator-summary [:subs/recent-emissions :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/recent-emissions :analyst_answer]) %)
                                                                 (tf-score-calculator))]]]
                                      [h-box :gap "10px" :align :center
                                       :children [[label :width question-width :label "Reduction target year:"]
                                                  [input-text :width categories-list-width-long
                                                   :validation-regex #"^[0-9]*$"
                                                   :model (r/cursor tf-calculator-summary [:subs/reduction-target-year :analyst_answer])
                                                   :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/reduction-target-year :analyst_answer]) %))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Reduction target:"]
                                                [input-text :width categories-list-width-long
                                                 :validation-regex #"^[0-9]*$"
                                                 :model (r/cursor tf-calculator-summary [:subs/reduction-target :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/reduction-target :analyst_answer]) %)
                                                                 (tf-score-calculator))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Total absolute emissions reduction:"]
                                                [input-text :width categories-list-width-long
                                                 :validation-regex #"^[0-9]*$"
                                                 :model (r/cursor tf-calculator-summary [:subs/total-emissions :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/total-emissions :analyst_answer]) %)
                                                                 (tf-score-calculator))]]]
                                    ]]])
                        "both" (concat
                                 [[h-box :gap "10px" :align :center
                                   :children [[label :width question-width :label "What is the annual carbon avoided figure?"]
                                              [input-text :width categories-list-width-long
                                               :validation-regex #"^[0-9]*$"
                                               :model (r/cursor tf-calculator-summary [:subs/avoided-figure :analyst_answer])
                                               :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/avoided-figure :analyst_answer]) %)
                                                               (tf-score-calculator))]]]]
                                 [[v-box  :gap "5px" :children
                                   [[h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Short-term (2030) targets which are at or near Paris aligned?"]
                                                [single-dropdown :width dropdown-width
                                                 :choices yes-no-choice
                                                 :model (r/cursor tf-calculator-summary [:subs/paris :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/paris :analyst_answer]) %)
                                                                 (tf-score-calculator))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Comment on target:"]
                                                [input-textarea :width categories-list-width-long :rows 5
                                                 :model (r/cursor tf-calculator-summary [:subs/target-comment :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/target-comment :analyst_answer]) %))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Target base year:"]
                                                [input-text :width categories-list-width-long
                                                 :validation-regex #"^[0-9]*$"
                                                 :model (r/cursor tf-calculator-summary [:subs/target-year :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/target-year :analyst_answer]) %)
                                                                 (tf-score-calculator))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Base year emissions/intensity:"]
                                                [input-text :width categories-list-width-long
                                                 :validation-regex #"^[0-9]*$"
                                                 :model (r/cursor tf-calculator-summary [:subs/emissions-year :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/emissions-year :analyst_answer]) %)
                                                                 (tf-score-calculator))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Emission scopes included:"]
                                                [input-textarea :width categories-list-width-long :rows 5
                                                 :model (r/cursor tf-calculator-summary [:subs/scope-comment :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/scope-comment :analyst_answer]) %))]]]

                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Most recent emissions year:"]
                                                [input-text :width categories-list-width-long
                                                 :validation-regex #"^[0-9]*$"
                                                 :model (r/cursor tf-calculator-summary [:subs/recent-emissions-year :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/recent-emissions-year :analyst_answer]) %))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Most recent emissions/intensity:"]
                                                [input-text :width categories-list-width-long
                                                 :validation-regex #"^[0-9]*$"
                                                 :model (r/cursor tf-calculator-summary [:subs/recent-emissions :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/recent-emissions :analyst_answer]) %)
                                                                 (tf-score-calculator))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Reduction target year:"]
                                                [input-text :width categories-list-width-long
                                                 :validation-regex #"^[0-9]*$"
                                                 :model (r/cursor tf-calculator-summary [:subs/reduction-target-year :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/reduction-target-year :analyst_answer]) %))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Reduction target:"]
                                                [input-text :width categories-list-width-long
                                                 :validation-regex #"^[0-9]*$"
                                                 :model (r/cursor tf-calculator-summary [:subs/reduction-target :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/reduction-target :analyst_answer]) %)
                                                                 (tf-score-calculator))]]]
                                    [h-box :gap "10px" :align :center
                                     :children [[label :width question-width :label "Total absolute emissions reduction:"]
                                                [input-text :width categories-list-width-long
                                                 :validation-regex #"^[0-9]*$"
                                                 :model (r/cursor tf-calculator-summary [:subs/total-emissions :analyst_answer])
                                                 :on-change #(do (reset! (r/cursor tf-calculator-summary [:subs/total-emissions :analyst_answer]) %)
                                                                 (tf-score-calculator))]]]
                                    ]]])
                        "none" nil
                        nil)]]]))
                [gap :size "10px"]
                [h-box :gap "10px" :align :center
                 :children [[label :width question-width :label ""]
                            [button :label "Save transition fund report" :class "btn btn-primary btn-block" :on-click #(do (tf-score-calculator) (tf-summary-generator))]]]
                [gap :size "20px"]
                ]]
    )