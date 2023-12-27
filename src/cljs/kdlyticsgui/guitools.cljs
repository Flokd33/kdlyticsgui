(ns kdlyticsgui.guitools
  (:require
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [kdlyticsgui.tools :as t]
    [kdlyticsgui.static :as static]
    [clojure.set :as cset]
    [kdlyticsgui.mrttables :as mrt]
    [helix.core :refer [$ defnc]]
    [kdlyticsgui.mui :as mui]
    ["@mui/material" :as mm :refer ( Switch)]
    [helix.hooks :refer [use-state use-effect use-memo]]
    [helix.dom :as d]
    ))

(defn mrt-right-element-box-generic
  [id width title-str opts children]
  (let [show-element (r/atom true)]
    (fn [id width title-str opts children]                  ;see https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md need to repeat the arguments!
      [v-box :class "subbody rightelement" :gap "0px" :width width
       :children (concat [[h-box :align :center :children (into [[title :label title-str :level :level1] [gap :size "1"]]
                                                                (if (:show-hide opts) [($ mui/switch {:checked-atom show-element :default-checked (not (:hide-by-default opts))})]))]]
                         (if @show-element children))])))

(def slider-result (r/atom "Slider result"))
(def select-result (r/atom "Simple select result"))
(def grouping-result (r/atom "Grouping select result"))
(def autocomplete-result (r/atom "Autocomplete result"))
(def radio-group-result (r/atom "RadioGroup result"))
(def button-result (r/atom "Button result"))
(def start-date-result (r/atom "Date result"))


(defnc mui-dev []
  (let [portfolio ["PORTFOLIO 1" "PORTFOLIO 2"]
        ;portfolio-grp static/portfolio-alignment-groups
        ;start-date (rf/subscribe [:portfolio-trade-history/start-date])
        ;end-date (rf/subscribe [:portfolio-trade-history/end-date])
        ]
    [(mui/right-element-box-generic "test" "1800px" "My Components"
                             [($ mui/my-grid {:direction "row" :gap "30px"
                                              :children [($ mui/my-grid {:direction "column" :gap "20px" :children
                                                                         [($ mui/select-input-simple {:label-text "Portfolio"
                                                                                                      :choices (into [] (for [ p portfolio] {:id p :label p}))
                                                                                                      :on-change #(reset! select-result (mui/event-value %))})
                                                                          ($ mui/text-simple {:variant "body1" :text @select-result :color "white"})]})
                                                         ($ mui/my-grid {:direction "column" :gap "20px" :children
                                                                         [($ mui/select-input-search {:label-text "Select a portfolio"
                                                                                                      :choices (into [] (for [ p portfolio] {:id p :label p}))
                                                                                                      :on-change #(reset! autocomplete-result (mui/synthetic-event-value %2))})
                                                                          ($ mui/text-simple {:variant "body1" :text @autocomplete-result :color "white"})]})

                                                         ($ mui/my-grid {:direction "column" :gap "20px" :children
                                                                         [($ mui/radio-group-button {:title "Make a choice"
                                                                                                     :list [{:value "choice1" :label "Choice 1"} {:value "choice2" :label "Choice 2"}]
                                                                                                     :on-change #(reset! radio-group-result (mui/event-value %)) })
                                                                          ($ mui/text-simple {:variant "body1" :text @radio-group-result :color "white"})
                                                                          ]})
                                                         ($ mui/my-grid {:direction "column" :gap "20px" :children
                                                                         [($ mui/slider-simple {:width "200px" :on-change #(reset! slider-result (mui/event-value %))})
                                                                          ($ mui/text-simple {:variant "body1" :text @slider-result :color "white"})]})
                                                         ($ mui/my-grid {:direction "column" :gap "20px" :children
                                                                         [($ mui/button-simple {:variant "contained" :text "Fetch" :on-click #(reset! button-result "Fetch") })
                                                                          ($ mui/button-simple {:variant "outlined" :text "Refresh" :on-click #(do (reset! button-result "Refresh")) })
                                                                          ($ mui/text-simple {:variant "body1" :text @button-result :color "white"})]})
                                                         ;(mui/mui-vbox :children
                                                         ;              [($ mui/select-input-grouping {:label-text "Portfolio"
                                                         ;                                             :choices portfolio-grp
                                                         ;                                             :on-change #(reset! grouping-result (mui/event-value %))})
                                                         ;               [gap :size "10px"]
                                                         ;               ($ mui/text-simple {:variant "body1" :text @grouping-result :color "white"})]
                                                         ;              )
                                                       ;(mui/mui-vbox :children
                                                       ;              [($ mui/date-picker {:title "Start date"
                                                       ;                                   :default-start-date "2023-02-01"
                                                       ;                                   :on-change #(do (reset! start-date-result (.format % "YYYY/MM/DD" )))})
                                                       ;               [gap :size "10px"]
                                                       ;               ($ mui/text-simple {:variant "body1" :text @start-date-result :color "white"})
                                                       ;               ]
                                                       ;              )
                                                       ]})])]))


