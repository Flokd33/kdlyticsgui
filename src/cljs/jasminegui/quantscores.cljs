(ns jasminegui.quantscores
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.tools :as tools])
  )

(def quant-score-table-columns
  {
   :ISIN                      {:Header "ISIN" :accessor "ISIN" :width 120}
   :Country                   {:Header "Country" :accessor "Country" :width 80}
   :Sector                    {:Header "Sector" :accessor "Sector" :width 100}
   :Ticker                    {:Header "Ticker" :accessor "Ticker" :width 100}
   :Use                       {:Header "Use" :accessor "Use" :width 60 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2*100 :filterable true :filterMethod tables/compare-nb-d100}
   :Bond                      {:Header "Bond" :accessor "Bond" :width 120}
   :Used_Price                {:Header "Price" :accessor "Used_Price" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :Rating_String             {:Header "Rating source" :accessor "Rating_String" :width 120 :filterable true :filterMethod tables/compare-nb-d100}
   :Used_Rating_Score         {:Header "Rating" :accessor "Used_Rating_Score" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell nil :filterable true :filterMethod tables/compare-nb}
   :Used_ZTW                  {:Header "ZTW" :accessor "Used_ZTW" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :Used_YTW                  {:Header "YTW" :accessor "Used_YTW" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/yield-format :filterable true :filterMethod tables/compare-nb}
   :Used_Duration             {:Header "Duration" :accessor "Used_Duration" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round1 :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_legacy_1 {:Header "Legacy" :accessor "predicted_spread_legacy" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_new_1    {:Header "New" :accessor "predicted_spread_new" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_svr_1    {:Header "SVR" :accessor "predicted_spread_svr" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :difference_legacy_1       {:Header "Legacy" :accessor "difference_legacy" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :difference_new_1          {:Header "New" :accessor "difference_new" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :difference_svr_1          {:Header "SVR" :accessor "difference_svr" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_upgrade_legacy_1   {:Header "Legacy" :accessor "predicted_spread_upgrade_legacy" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_upgrade_new_1      {:Header "New" :accessor "predicted_spread_upgrade_new" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_upgrade_svr_1      {:Header "SVR" :accessor "predicted_spread_upgrade_svr" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_downgrade_legacy_1 {:Header "Legacy" :accessor "predicted_spread_downgrade_legacy" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_downgrade_new_1    {:Header "New" :accessor "predicted_spread_downgrade_new" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_downgrade_svr_1    {:Header "SVR" :accessor "predicted_spread_downgrade_svr" :width 70 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}

   })


;isin_id
;FORCE_INCLUSION
;AMT_OUTSTANDING
;Price
;ZTW
;YTW
;Duration
;S&P
;Moodys
;Fitch
;S&P-score
;Fitch-score
;Moodys-score
;Rating_Score
;Override
;OverrideRating
;OverrideValuation
;Workout_date
;Workout_price
;
;Used_Large_Rating_Score
;avg_rat_grp_diff_legacy
;avg_rat_grp_diff_new
;avg_rat_grp_diff_svr
;std_rat_grp_diff_legacy
;std_rat_grp_diff_new
;std_rat_grp_diff_svr
;URS_legacy
;URV_legacy
;URS_new
;URV_new
;URS_svr
;URV_svr
;HRS_legacy
;HRV_legacy
;HRS_new
;HRV_new
;HRS_svr
;HRV_svr
;URS_rank_legacy
;URS_rank_new
;URS_rank_svr
;URS_rank_legacy_1D
;URS_rank_legacy_1W
;URS_rank_legacy_1M
;URS_rank_legacy_D1D
;URS_rank_legacy_D1W
;URS_rank_legacy_D1M
;URS_rank_new_1D
;URS_rank_new_1W
;URS_rank_new_1M
;URS_rank_new_D1D
;URS_rank_new_D1W
;URS_rank_new_D1M
;URS_rank_svr_1D
;URS_rank_svr_1W
;URS_rank_svr_1M
;URS_rank_svr_D1D
;URS_rank_svr_D1W
;URS_rank_svr_D1M



(defn view []
  (let [data @(rf/subscribe [:quant-model/model-output])
        default-beta-line {:width 75 :Cell tables/round2 :style {:textAlign "right"} :filterable true :filterMethod tables/compare-nb}]
    [box :padding "80px 25px" :child
     [v-box :class "subbody element"  :gap "20px"
      :children [[h-box :align :center :children [[title :label (str "Quant model output") :level :level1]
                                                  [gap :size "1"]
                                                  [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link data "quant-model-output")]]]
                 [:> ReactTable
                  {:data                (sort-by (juxt :Country :Ticker :Used_Duration) data)
                   :columns             [{:Header "Description" :columns (concat [{:Header "Bond" :accessor "Bond" :width 160 :className "sticky-rt-column" :headerClassName "sticky-rt-column"}] (mapv quant-score-table-columns [:ISIN :Country :Sector]))}
                                         {:Header "Valuation" :columns  (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String ])}
                                         {:Header "Model prediction" :columns  (mapv quant-score-table-columns [:predicted_spread_legacy_1 :predicted_spread_new_1 :predicted_spread_svr_1])}
                                         {:Header "Prediction - Actual" :columns  (mapv quant-score-table-columns [:difference_legacy_1 :difference_new_1 :difference_svr_1])}
                                         {:Header "Upgrade spread" :columns  (mapv quant-score-table-columns [:predicted_spread_upgrade_legacy_1 :predicted_spread_upgrade_new_1 :predicted_spread_upgrade_svr_1])}
                                         {:Header "Downgrade spread" :columns  (mapv quant-score-table-columns [:predicted_spread_downgrade_legacy_1 :predicted_spread_downgrade_new_1 :predicted_spread_downgrade_svr_1])}
                                         ;{:Header "Pricing" :columns (mapv tables/risk-table-columns [:yield :g-spread :z-spread :duration])}
                                         ;{:Header "Total return" :columns (mapv tables/risk-table-columns [:total-return-ytd :jensen-ytd])}
                                         ;{:Header  "Excess return"
                                         ; :columns (into [] (for [line [{:Header "6M" :accessor "xsr-6m"}
                                         ;                               {:Header "9M" :accessor "xsr-9m"}
                                         ;                               {:Header "12M" :accessor "xsr-12m"}]]
                                         ;                     (merge line default-beta-line)))}
                                         ;{:Header  "CEMBI betas"
                                         ; :columns (into [] (for [line [{:Header "Broad" :accessor "cembi-beta-last-year"}
                                         ;                               {:Header "Broad LY" :accessor "cembi-beta-previous-year"}
                                         ;                               {:Header "IG" :accessor "beta-vs-cembi-ig"}
                                         ;                               {:Header "HY" :accessor "beta-vs-cembi-hy"}
                                         ;                               {:Header "Country" :accessor "beta-vs-cembi-country"}
                                         ;                               {:Header "Rating" :accessor "beta-vs-cembi-rating"}
                                         ;                               {:Header "Sector" :accessor "beta-vs-cembi-sector"}
                                         ;                               {:Header "Duration" :accessor "beta-vs-cembi-duration"}]]
                                         ;                     (merge line default-beta-line)))}
                                         ;{:Header  "EMBI betas"
                                         ; :columns (into [] (for [line [{:Header "Broad" :accessor "beta-vs-embi"}
                                         ;                               {:Header "Country" :accessor "beta-vs-embi-country"}]]
                                         ;                     (merge line default-beta-line)))}
                                         ;{:Header  "Other betas"
                                         ; :columns (into [] (for [line [{:Header "USIG" :accessor "beta-vs-usig"}
                                         ;                               {:Header "USHY" :accessor "beta-vs-ushy"}
                                         ;                               {:Header "UST5-7Y" :accessor "beta-vs-ust"}
                                         ;                               {:Header "BLEND" :accessor "beta-vs-blend"}]]
                                         ;                     (merge line default-beta-line)))}
                                         ]
                   :showPagination      true
                   :defaultPageSize     15
                   :pageSizeOptions    [15 25 50 100]
                   :filterable          true
                   :defaultFilterMethod tables/case-insensitive-filter
                   :className           "-striped -highlight"}]]]]))