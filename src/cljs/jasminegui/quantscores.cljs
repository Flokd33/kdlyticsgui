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
    [jasminegui.tools :as tools]
    [reagent.core :as reagent])
  )


(defn nav-qs-bar []
  (let [active-var @(rf/subscribe [:navigation/active-qs])]
    [h-box
     :children [[v-box
                 :gap "20px" :class "leftnavbar"
                 :children (into []
                                 (for [item static/qs-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-var (:code item))) " active"))
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:navigation/active-qs (:code item)])]))]]]))

(def quant-score-table-columns
  {
   :ISIN                      {:Header "ISIN" :accessor "ISIN" :width 115}
   :Country                   {:Header "Country" :accessor "Country" :width 65}
   :Sector                    {:Header "Sector" :accessor "Sector" :width 100}
   :Ticker                    {:Header "Ticker" :accessor "Ticker" :width 100}
   :Use                       {:Header "Use" :accessor "Use" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true}
   :Bond                      {:Header "Bond" :accessor "Bond" :width 160}
   :Bond-sticky               {:Header "Bond" :accessor "Bond" :width 160 :className "sticky-rt-column" :headerClassName "sticky-rt-column"}
   :Used_Price                {:Header "Price" :accessor "Used_Price" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :Rating_String             {:Header "Rating source" :accessor "Rating_String" :width 120 :filterable true :filterMethod tables/compare-nb-d100}
   :Used_Rating_Score         {:Header "Rating" :accessor "Used_Rating_Score" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :Used_ZTW                  {:Header "ZTW" :accessor "Used_ZTW" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :Used_YTW                  {:Header "YTW" :accessor "Used_YTW" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/yield-format :filterable true :filterMethod tables/compare-nb}
   :Used_Duration             {:Header "Duration" :accessor "Used_Duration" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round1 :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_legacy_1 {:Header "Legacy" :accessor "predicted_spread_legacy" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_new_1    {:Header "New" :accessor "predicted_spread_new" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_svr_1    {:Header "SVR" :accessor "predicted_spread_svr" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :difference_legacy_1       {:Header "Legacy" :accessor "difference_legacy" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :difference_new_1          {:Header "New" :accessor "difference_new" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :difference_svr_1          {:Header "SVR" :accessor "difference_svr" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_upgrade_legacy_1   {:Header "Legacy" :accessor "predicted_spread_upgrade_legacy" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_upgrade_new_1      {:Header "New"    :accessor "predicted_spread_upgrade_new" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_upgrade_svr_1      {:Header "SVR"    :accessor "predicted_spread_upgrade_svr" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_downgrade_legacy_1 {:Header "Legacy" :accessor "predicted_spread_downgrade_legacy" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_downgrade_new_1    {:Header "New"    :accessor "predicted_spread_downgrade_new" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_downgrade_svr_1    {:Header "SVR"    :accessor "predicted_spread_downgrade_svr" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :URS_legacy_1                        {:Header "Legacy" :accessor "URS_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :URS_new_1                           {:Header "New"    :accessor "URS_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :URS_svr_1                           {:Header "SVR"    :accessor "URS_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :HRS_legacy_1                        {:Header "Legacy" :accessor "HRS_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell  tables/round2 :filterable true :filterMethod tables/compare-nb}
   :HRS_new_1                           {:Header "New"    :accessor "HRS_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell  tables/round2 :filterable true :filterMethod tables/compare-nb}
   :HRS_svr_1                           {:Header "SVR"    :accessor "HRS_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell  tables/round2 :filterable true :filterMethod tables/compare-nb}
   :URV_legacy_1                        {:Header "Legacy" :accessor "URV_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URV_new_1                           {:Header "New"    :accessor "URV_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URV_svr_1                           {:Header "SVR"    :accessor "URV_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :HRV_legacy_1                        {:Header "Legacy" :accessor "HRV_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :HRV_new_1                           {:Header "New"    :accessor "HRV_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :HRV_svr_1                           {:Header "SVR"    :accessor "HRV_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :FORCE_INCLUSION                     {:Header "Force"    :accessor "FORCE_INCLUSION" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round1 :filterable true }
   :AMT_OUTSTANDING                     {:Header "Outstanding"    :accessor "AMT_OUTSTANDING" :width 100 :style {:textAlign "right"} :aggregate tables/median :Cell tables/nfcell2 :filterable true :filterMethod tables/compare-nb}
   :Price-source                        {:Header "Price"    :accessor "Price" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :ZTW-source                          {:Header "ZTW"    :accessor "ZTW" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :YTW-source                          {:Header "YTW"    :accessor "YTW" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :Duration-source                     {:Header "Duration"    :accessor "Duration" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :Rating-source                       {:Header "Rating"    :accessor "Rating_Score" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :Override                            {:Header "Override"    :accessor "Override" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true}
   :OverrideRating                      {:Header "O. Rating"    :accessor "OverrideRating" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true }
   :OverrideValuation                   {:Header "O. Price"    :accessor "OverrideValuation" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true}
   :Workout_date                        {:Header "Workout_date"    :accessor "Workout_date" :width 100 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :Workout_price                       {:Header "Workout_price"    :accessor "Workout_price" :width 100 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :Used_Large_Rating_Score                       {:Header "Rating"    :accessor "Used_Large_Rating_Score" :width 100 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :avg_rat_grp_diff_legacy_1                        {:Header "Legacy" :accessor "avg_rat_grp_diff_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :avg_rat_grp_diff_new_1                           {:Header "New"    :accessor "avg_rat_grp_diff_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :avg_rat_grp_diff_svr_1                           {:Header "SVR"    :accessor "avg_rat_grp_diff_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :std_rat_grp_diff_legacy_1                        {:Header "Legacy" :accessor "std_rat_grp_diff_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :std_rat_grp_diff_new_1                           {:Header "New"    :accessor "std_rat_grp_diff_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :std_rat_grp_diff_svr_1                           {:Header "SVR"    :accessor "std_rat_grp_diff_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_1                        {:Header "Legacy" :accessor "URS_rank_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_1                           {:Header "New"    :accessor "URS_rank_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_1                           {:Header "SVR"    :accessor "URS_rank_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}

   })


;isin_id
;S&P
;Moodys
;Fitch
;S&P-score
;Fitch-score
;Moodys-score
;


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


(def table-style (reagent/atom "Summary"))
(defn qs-table []
  (let [data @(rf/subscribe [:quant-model/model-output])
        default-beta-line {:width 75 :Cell tables/round2 :style {:textAlign "right"} :filterable true :filterMethod tables/compare-nb}
        ]
    [box :padding "80px 10px" :class "rightelement"  :child
     [v-box :class "element"  :gap "20px" :width "1620px"
      :children [[h-box :align :center :children [[title :label (str "Quant model output") :level :level1]
                                                  [gap :size "1"]
                                                  [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link data "quant-model-output")]]]
                 [h-box :align :center :gap "20px"
                  :children (into [] (for [c ["Summary" "Full" "Legacy" "New" "SVR"]] ;; Notice the ugly "doall"
                                       ^{:key c}            ;; key should be unique among siblings
                                       [radio-button
                                        :label c
                                        :value c
                                        :model table-style
                                        :on-change #(reset! table-style %)]))]
                 [:> ReactTable
                  {:data                (sort-by (juxt :Country :Ticker :Used_Duration) data)
                   :columns             (remove nil? [{:Header "Description" :columns (mapv quant-score-table-columns [(if (= @table-style "Summary") :Bond :Bond-sticky) :ISIN :Country :Sector])}
                                                      {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
                                                      {:Header "Model prediction" :columns (mapv quant-score-table-columns [:predicted_spread_legacy_1 :predicted_spread_new_1 :predicted_spread_svr_1])}
                                                      {:Header "Prediction - Actual" :columns (mapv quant-score-table-columns [:difference_legacy_1 :difference_new_1 :difference_svr_1])}
                                                      (if (= @table-style "Full") {:Header "Universe score detail" :columns (mapv quant-score-table-columns [:URS_legacy_1 :URS_new_1 :URS_svr_1])})
                                                      (if (= @table-style "Full") {:Header "Historical score detail" :columns (mapv quant-score-table-columns [:URS_legacy_1 :URS_new_1 :URS_svr_1])})
                                                      {:Header "Universe score" :columns (mapv quant-score-table-columns [:URV_legacy_1 :URV_new_1 :URV_svr_1])}
                                                      {:Header "Historical score" :columns (mapv quant-score-table-columns [:HRV_legacy_1 :HRV_new_1 :HRV_svr_1])}
                                                      (if (= @table-style "Full") {:Header "Rank today" :columns (mapv quant-score-table-columns [:URS_rank_legacy_1 :URS_rank_new_1 :URS_rank_svr_1])})
                                                      ;(if (= @table-style "Full") {:Header "Rank yesterday" :columns (mapv quant-score-table-columns [:avg_rat_grp_diff_legacy_1 :avg_rat_grp_diff_new_1 :avg_rat_grp_diff_svr_1])})
                                                      ;(if (= @table-style "Full") {:Header "Rank a week ago" :columns (mapv quant-score-table-columns [:avg_rat_grp_diff_legacy_1 :avg_rat_grp_diff_new_1 :avg_rat_grp_diff_svr_1])})
                                                      ;(if (= @table-style "Full") {:Header "Rank a month ago" :columns (mapv quant-score-table-columns [:avg_rat_grp_diff_legacy_1 :avg_rat_grp_diff_new_1 :avg_rat_grp_diff_svr_1])})
                                                      (if (= @table-style "Full") {:Header "Group" :columns (mapv quant-score-table-columns [:Used_Large_Rating_Score])})
                                                      (if (= @table-style "Full") {:Header "Mean group difference" :columns (mapv quant-score-table-columns [:avg_rat_grp_diff_legacy_1 :avg_rat_grp_diff_new_1 :avg_rat_grp_diff_svr_1])})
                                                      (if (= @table-style "Full") {:Header "Std group difference" :columns (mapv quant-score-table-columns [:std_rat_grp_diff_legacy_1 :std_rat_grp_diff_new_1 :std_rat_grp_diff_svr_1])})
                                                      (if (= @table-style "Full") {:Header "Debugging: source data" :columns (mapv quant-score-table-columns [:FORCE_INCLUSION :AMT_OUTSTANDING :Use :Price-source :Used_YTW :ZTW-source :Duration-source :Rating-source :Override :OverrideRating :OverrideValuation :Workout_date :Workout_price])})
                                                      ;{:Header "Upgrade spread" :columns  (mapv quant-score-table-columns [:predicted_spread_upgrade_legacy_1 :predicted_spread_upgrade_new_1 :predicted_spread_upgrade_svr_1])}
                                                      ;{:Header "Downgrade spread" :columns  (mapv quant-score-table-columns [:predicted_spread_downgrade_legacy_1 :predicted_spread_downgrade_new_1 :predicted_spread_downgrade_svr_1])}
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
                                                      ])
                   :showPagination      true
                   :defaultPageSize     15
                   :pageSizeOptions     [15 25 50 100]
                   :filterable          true
                   :defaultFilterMethod tables/case-insensitive-filter
                   :className           "-striped -highlight"}]]]]))




(defn qs-controller []
  nil)

(defn qs-table-view []
  [v-box                                                    ;:width standard-box-width
   :gap "20px"
   :padding "80px 20px"
   :class "rightelement"  :children [[qs-controller] [qs-table]]])

(defn active-home []
  (let [active-qs @(rf/subscribe [:navigation/active-qs])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-qs
      :table                       [qs-table]
      :calculator [qs-table-view]
      :spot-charts [qs-table-view]
      :historical-charts [qs-table-view]
      [:div.output "nothing to display"])))


(defn view []
  [h-box :gap "10px" :padding "0px" :children [[nav-qs-bar] [active-home]]])
