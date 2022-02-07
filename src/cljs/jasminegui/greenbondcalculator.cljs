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
(def dropdown-width "100px")

(def esg-score (r/atom 75))

(def esg-calculator-input (r/atom {
                                   :project-selection/description ""
                                   :project-evaluation/certified-opinion "Yes"
                                   :project-evaluation/certified-framework "Yes"
                                   :project-evaluation/external-scoring "Yes"
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
                                   :proceed-management/green-account "Yes"
                                   :proceed-management/virtual-green "Yes"
                                   :proceed-management/ring-fenced "Yes"
                                   :proceed-management/audited "Yes"
                                   :proceed-management/ring-fenced-2 "Yes"
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


(defn esg-calculator-display []
  [v-box :width standard-box-width :gap "5px" :class "element"
   :children [
              [title :label "Green bond calculator" :level :level1]
              [h-box :gap "10px" :align :baseline :children [[box :width question-width :child [title :label "Total score" :level :level2]] [progress-bar :width "200px" :model esg-score ]]]
              [title :label "Project selection" :level :level2]
              [h-box :gap "10px" :align :start
               :children [[label :width question-width :label "Project description"]
                          [input-textarea  :model (r/cursor esg-calculator-input [:project-selection/description]) :on-change #(reset! (r/cursor esg-calculator-input [:project-selection/description]) %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the bond certified by an independent second party opinion?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model (r/cursor esg-calculator-input [:project-evaluation/certified-opinion]) :on-change #(reset! (r/cursor esg-calculator-input [:project-evaluation/certified-opinion]) %)]]]
              [title :label "Project evaluation" :level :level2 ]
              [title :label "Management of proceeds" :level :level2 ]
              [title :label "Reporting" :level :level2]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the project on track?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model esg-calculator-input :on-change #(reset! esg-calculator-input %)]]]
              [h-box :gap "10px" :align :center
               :children [[label :width question-width :label "Is the project on track?"]
                          [single-dropdown :width dropdown-width :choices yes-no-choice :model esg-calculator-input :on-change #(reset! esg-calculator-input %)]]]
              [title :label "Analyst summary" :level :level2 ]


              ]])

(def esg-score-calculator []
  ;use reactive atom inputs to calc score ...
  ;(swap! ....atom)
  ;(reset! ....atom)
  )

