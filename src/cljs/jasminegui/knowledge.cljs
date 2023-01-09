(ns jasminegui.knowledge
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         vertical-bar-tabs single-dropdown hyperlink md-circle-icon-button md-icon-button selection-list modal-panel typeahead throbber
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    ["react-table-v6" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.tools :as t]
    [reagent.core :as reagent]
    [reagent.core :as r]
    [oz.core :as oz]
    [goog.string :as gstring]
    [cljs-time.core :refer [today]]
    [jasminegui.esgreport :as esg]
    [goog.string.format]
    [reagent-contextmenu.menu :as rcm]
    [jasminegui.charting :as charting]
    [jasminegui.guitools :as gt]
    [goog.object :as gobj]
    [markdown.core :refer [md->html md->html-with-meta]])

  )

(def trounceflow-index-choice (r/atom "cembi"))
(def index-choices [{:id "cembi" :label "CEMBI"} {:id "embi" :label "EMBI"} {:id "embi-local" :label "GBI-EM"} {:id "jaci" :label "JACI"}])

(defn trounce-flow-display []
  (when (zero? (count @(rf/subscribe [:trounce-flow-date]))) (rf/dispatch [:get-trounce-flow-date]))

  (when (zero? (count @(rf/subscribe [:trounce-flow-cash]))) (rf/dispatch [:get-trounce-flow-cash]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-cash-embi]))) (rf/dispatch [:get-trounce-flow-cash-embi]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-cash-embi-local]))) (rf/dispatch [:get-trounce-flow-cash-embi-local]))
  ;(when (zero? (count @(rf/subscribe [:trounce-flow-cash-jaci]))) (rf/dispatch [:get-trounce-flow-cash-jaci]))

  (when (zero? (count @(rf/subscribe [:trounce-flow-duration]))) (rf/dispatch [:get-trounce-flow-duration]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-duration-embi]))) (rf/dispatch [:get-trounce-flow-duration-embi]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-duration-embi-local]))) (rf/dispatch [:get-trounce-flow-duration-embi-local]))

  (when (zero? (count @(rf/subscribe [:trounce-flow-country]))) (rf/dispatch [:get-trounce-flow-country]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-country-embi]))) (rf/dispatch [:get-trounce-flow-country-embi]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-country-embi-local]))) (rf/dispatch [:get-trounce-flow-country-embi-local]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-country-jaci]))) (rf/dispatch [:get-trounce-flow-country-jaci]))

  (when (zero? (count @(rf/subscribe [:trounce-flow-country-change]))) (rf/dispatch [:get-trounce-flow-country-change]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-country-change-embi]))) (rf/dispatch [:get-trounce-flow-country-change-embi]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-country-change-embi-local]))) (rf/dispatch [:get-trounce-flow-country-change-embi-local]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-country-change-jaci]))) (rf/dispatch [:get-trounce-flow-country-change-jaci]))

  (when (zero? (count @(rf/subscribe [:trounce-flow-rating]))) (rf/dispatch [:get-trounce-flow-rating]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-rating-embi]))) (rf/dispatch [:get-trounce-flow-rating-embi]))
  (when (zero? (count @(rf/subscribe [:trounce-flow-rating-embi-local]))) (rf/dispatch [:get-trounce-flow-rating-embi-local]))
  ;(when (zero? (count @(rf/subscribe [:trounce-flow-rating-jaci]))) (rf/dispatch [:get-trounce-flow-rating-jaci]))

  (let [choice-label (:label (first (t/chainfilter {:id @trounceflow-index-choice} index-choices )))]
    [box :class "subbody rightelement" :child
     [v-box :gap "20px" :class "element" :width "1600px"
      :children [[h-box :align :center :children [[title :label (str "Trounceflow: "choice-label" ("  @(rf/subscribe [:trounce-flow-date]) ")") :level :level1]]]
                 [single-dropdown :width "150px" :model trounceflow-index-choice :choices index-choices :on-change #(reset! trounceflow-index-choice %)]
                 (case @trounceflow-index-choice
                   "cembi" (concat
                             [[h-box :align :center :children [[oz/vega-lite (charting/bar-chart-cash @(rf/subscribe [:trounce-flow-cash]) "#19A68C" "Cash allocation CEMBI" )]]] ; could str with (:label (first (t/chainfilter {:id @trounceflow-index-choice} index-choices ))
                              [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-duration @(rf/subscribe [:trounce-flow-duration]) "#19A68C" "Duration allocation (net vs CEMBI)")]]]
                              [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-countries @(rf/subscribe [:trounce-flow-country]) "average_positioning" "Latest average positioning across countries (CEMBI)" )]]]
                              [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-countries @(rf/subscribe [:trounce-flow-country-change]) "average_positioning_change" "Latest average positioning 1m change across countries (CEMBI)" )]]]
                              [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-rating @(rf/subscribe [:trounce-flow-rating]) "Rating allocation (CEMBI)" )]]]
                              ])
                   "embi" (concat
                            [[h-box :align :center :children [[oz/vega-lite (charting/bar-chart-cash @(rf/subscribe [:trounce-flow-cash-embi]) "#19A68C" "Cash allocation EMBI" )]]]
                             [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-duration @(rf/subscribe [:trounce-flow-duration-embi]) "#19A68C" "Duration allocation (net vs EMBI)")]]]
                             [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-countries @(rf/subscribe [:trounce-flow-country-embi]) "average_positioning" "Latest average positioning across countries (EMBI)" )]]]
                             [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-countries @(rf/subscribe [:trounce-flow-country-change-embi]) "average_positioning_change" "Latest average positioning 1m change across countries (EMBI)" )]]]
                             [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-rating @(rf/subscribe [:trounce-flow-rating-embi]) "Rating allocation (EMBI)" )]]]
                             ])
                   "embi-local" (concat
                                  [[h-box :align :center :children [[oz/vega-lite (charting/bar-chart-cash @(rf/subscribe [:trounce-flow-cash-embi-local]) "#19A68C" "Cash allocation GBI-EM" )]]]
                                   [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-duration @(rf/subscribe [:trounce-flow-duration-embi-local]) "#19A68C" "Duration allocation (net vs GBI-EM)")]]]
                                   [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-countries @(rf/subscribe [:trounce-flow-country-embi-local]) "average_positioning" "Latest average positioning across countries (GBI-EM)" )]]]
                                   [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-countries @(rf/subscribe [:trounce-flow-country-change-embi-local]) "average_positioning_change" "Latest average positioning 1m change across countries (GBI-EM)" )]]]
                                   [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-rating @(rf/subscribe [:trounce-flow-rating-embi-local]) "Rating allocation (GBI-EM)" )]]]
                                   ])
                   "jaci" (concat
                            [;[h-box :align :center :children [[oz/vega-lite (charting/bar-chart-cash @(rf/subscribe [:trounce-flow-cash]) "#19A68C" "Cash allocation CEMBI" )]]]
                             ;no duration for jaci..
                             [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-countries @(rf/subscribe [:trounce-flow-country-jaci]) "average_positioning" "Latest average positioning across countries (JACI)" )]]]
                             [h-box :align :center :children [[oz/vega-lite (charting/bar-chart-countries @(rf/subscribe [:trounce-flow-country-change-jaci]) "average_positioning_change" "Latest average positioning 1m change across countries (JACI)" )]]]
                             ])
                   )
                 ;[h-box :align :center :children [[oz/vega-lite (charting/bar-chart-cash @(rf/subscribe [:trounce-flow-cash]) "#19A68C" "Cash allocation CEMBI" )]]]
                 ;[h-box :align :center :children [[oz/vega-lite (charting/bar-chart-cash @(rf/subscribe [:trounce-flow-cash-embi]) "#591739" "Cash allocation EMBI (hard)")]]]
                 ;[h-box :align :center :children [[oz/vega-lite (charting/bar-chart-cash @(rf/subscribe [:trounce-flow-cash-embi-local]) "#CF6F13" "Cash allocation EMBI (local)")]]]
                 ;[h-box :align :center :children [[oz/vega-lite (charting/bar-chart-duration @(rf/subscribe [:trounce-flow-duration]) "#19A68C" "Duration allocation (net vs CEMBI)")]]]
                 ;[h-box :align :center :children [[oz/vega-lite (charting/bar-chart-duration @(rf/subscribe [:trounce-flow-duration-embi]) "#591739" "Duration allocation (net vs EMBI hard)")]]]
                 ;[h-box :align :center :children [[oz/vega-lite (charting/bar-chart-duration @(rf/subscribe [:trounce-flow-duration-embi-local]) "#CF6F13" "Duration allocation (net vs EMBI local)")]]]
                 ]
      ]]
    ))


(defn conditional-color [state rowInfo column]
  (if-let [x (gobj/getValueByKeys rowInfo "row" "Nominal_Debt_%_Owned")]
    (condp >= x
      0.05   #js {:style #js {:backgroundColor "#FFFF99"}}
      0.1    #js {:style #js {:backgroundColor "#BCEC90"}}
      0.251  #js {:style #js {:backgroundColor "#FFCCCC"}}
      1      #js {:style #js {:backgroundColor "#FFC000"}}
      #js {})
    #js{}))

(defn global-debt-and-equity-levels []
  (let [data @(rf/subscribe [:global-debt-and-equity-levels])
        header-style {:overflow nil :whiteSpace "pre-line" :wordWrap "break-word"}]
    (when (zero? (count data)) (rf/dispatch [:get-global-debt-and-equity-levels]))
    [box :class "subbody rightelement" :child
     (gt/element-box
       "global-debt-levels" "1675px" "Global debt and equity levels" data
       [[:> ReactTable
         {:data                (if-not (string? data) data [])
          :columns             [{:Header "IAM Ultimate Parent Name" :accessor "IAM_Ultimate_Parent_Name" :width 200 :headerStyle header-style}
                                {:Header "IAM Risk Parent Name" :accessor "IAM_Risk_Parent_Name" :width 200 :headerStyle header-style}
                                {:Header "Obligor Name" :accessor "Obligor_Name" :width 200 :headerStyle header-style}
                                {:Header "Entity Name" :accessor "Entity_Name" :width 200 :headerStyle header-style}
                                (assoc (tables/nb-col "Nominal Debt % Owned" "Nominal_Debt_%_Owned" 75 #(tables/nb-cell-format "%.1f" 100 %)) :headerStyle header-style)
                                (assoc (tables/nb-col "Gross Nominal Debt Owned (USDm)" "Gross_Nominal_Debt_Owned_(USDm)" 100 #(tables/nb-cell-format "%.1f" 1 %)) :headerStyle header-style)
                                (assoc (tables/nb-col "Nominal Debt Issued (USDm)" "Nominal_Debt_Issued_(USDm)" 100 tables/nb-thousand-cell-format) :headerStyle header-style)
                                (assoc (tables/nb-col "IAM Risk Parent & Subsidiaries Debt Issued (USDm)" "IAM_Risk_Parent_&_Subsidiaries_Debt_Issued_(USDm)" 100 tables/nb-thousand-cell-format) :headerStyle header-style)
                                (assoc (tables/nb-col "IAM Risk Parent & Subsidiaries Total % Owned" "IAM_Risk_Parent_&_Subsidiaries_Total_%_Owned" 100 #(tables/nb-cell-format "%.1f" 100 %)) :headerStyle header-style)
                                (assoc (tables/nb-col "IAM Ultimate Parent & Subsidiaries Debt Issued (USDm)" "IAM_Ultimate_Parent_&_Subsidiaries_Debt_Issued_(USDm)" 100 tables/nb-thousand-cell-format) :headerStyle header-style)
                                (assoc (tables/nb-col "IAM Ultimate Parent & Subsidiaries Total % Owned" "IAM_Ultimate_Parent_&_Subsidiaries_Total_%_Owned" 100 #(tables/nb-cell-format "%.1f" 100 %)) :headerStyle header-style)]
          :defaultPageSize 20 :showPagination true :getTrProps conditional-color :filterable true :defaultFilterMethod tables/text-filter-OR :className "-highlight"}]])]))

(rf/reg-event-fx
  :knowledge/select-mandate
  (fn [{:keys [db]} [_ portfolio]]
    {:db (assoc db :knowledge/selected-mandate portfolio)
     :http-get-dispatch {:url (str static/server-address "mandate?portfolio=" portfolio) :dispatch-key [:knowledge/mandate-description]}}))


(defn mandates []
  (let [x (md->html
            "- **Benchmark**:\n        - 63% CEMBIBD IG `JBCDIGIG Index`\n        - 27% EMBIBD IG `JPGCIG Index`\n        - 7% CEMBIBD HY `JBCDNOIG Index`\n        - 3% EMBIBD HY `JPGCHY Index`\n    - **universe:**\n        - bonds in benchmark\n        - USD bonds whose ultimate parent `DX065` has constituents in the benchmark\n        - USD bonds from ultimate parent country `DY011` that is EM as defined by benchmark\n        - UST\n        - Sukuks under intl law with ISIN and listing, but no Sukuk al-Mudharabah\n        - non call perps are not acceptable (but callable perps are OK)\n        - Convertibles are OK\n        - no supranationals\n        - currency: only USD\n    - **duration:** +/- 0.5 years\n    - **limits:** max limit in % of USD market value. At ultimate parent level\n Bloomberg `DX065`.\n        - {{[[table]]}}\n            - Item\n                - Corporates\n                    - Sovereigns\n                        - Total\n            - Cash\n                -  \n                    -  \n                        - 3%\n            - UST\n                -  \n                    - 100%\n            - A- to AA+\n                - 5%\n                    - 5%\n            - BBB to BBB+\n                - 3%\n                    - 4%\n            - BBB-\n                - 2%\n                    - 2.5%\n            - B- to BB+\n                - 1%\n                    - 1.5%\n            - Below\n                - 0%\n                    - 0%\n            - NR\n                -  \n                    -  \n                        - 3%\n            - BRIC\n                -  \n                    -  \n                        - 35%\n            - HY\n                -  \n                    -  \n                        - 20%\n            - BBB+/BBB/BBB-\n                -  \n                    -  \n                        - 75%\n        - **Negative list:** not permitted\n        - Subordinated corporate debt is weighted 1.5x\n        - Insurers are halved, Bloomberg `DS201`\n        - New issue unrated with pending rating is OK\n        - Note you can have both corps and sovs of the same parent issuer, and you add the limits!\n    - rating methodology: one rating permissible, if two or more ratings the second best applies. For senior debt, if issue is unrated the issuer rating will apply\n    - Fallen angels to be notified with suggested action\n    - No borrowing or short selling.\n- **Ultimate parent overrides**: use TAM definition in place of `DX065`, tfolio has something called talanx ultimate parent\n

            ")]
    (println x)

    [box :class "subbody rightelement" :child
     (gt/element-box
       "mandates" "1675px" "Mandates" nil
       [
        [h-box :gap "20px" :children [[vertical-bar-tabs :model (rf/subscribe [:knowledge/selected-mandate]) :tabs (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p})) :on-change #(rf/dispatch [:knowledge/select-mandate %])]
                          [box :child [:div {:dangerouslySetInnerHTML {:__html x}}]]]]

        ])]))

(defn exclusions []
  [box :class "subbody rightelement" :child
   (gt/element-box
     "mandates" "1675px" "Exclusions" nil
     [
      [h-box :children [
                        [vertical-bar-tabs :model (rf/subscribe [:knowledge/selected-mandate])  :tabs (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p})) :on-change #(rf/dispatch [:knowledge/select-mandate %])]]]

      ])])

(defn cre []
  (when (zero? (count @(rf/subscribe [:factsheet/cre]))) (rf/dispatch [:get-cre-factsheet]))
  (let [data @(rf/subscribe [:factsheet/cre])]
    [box :class "subbody rightelement" :child
     (gt/element-box
       "global-debt-levels" "1675px" "China real estate summary" data
       [[:> ReactTable
         {:data                data
          :columns             [{:Header "Company" :accessor "Company" :width 100  :style {:whiteSpace "unset"}}
                                {:Header "Profile" :accessor "Profile" :width 300  :style {:whiteSpace "unset"}}
                                {:Header "Latest results" :accessor "Latest results" :width 300  :style {:whiteSpace "unset"}}
                                {:Header "Latest update" :accessor "Latest update" :width 350  :style {:whiteSpace "unset"}}
                                {:Header "Restructuring comment" :accessor "Restructuring comment" :width 350  :style {:whiteSpace "unset"}}]
          :defaultPageSize (count data) :showPagination false :filterable true :defaultFilterMethod tables/text-filter-OR}]])]))

(defn active-home []
  (let [active-qs @(rf/subscribe [:navigation/active-knowledge])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-qs
      :entry              [p "Hello"]
      :mandates           [mandates]
      :exclusions         [exclusions]
      :cre                [cre]
      :trounce-flow                   [trounce-flow-display]
      :gdel                           [global-debt-and-equity-levels]
      [:div.output "nothing to display"]))

  )

(defn view []
  ;(set! (. js/document -title) "Quant scores")
  [h-box :gap "10px" :padding "0px" :children [(gt/left-nav-bar static/knowledge-navigation :navigation/active-knowledge) [active-home] ]])