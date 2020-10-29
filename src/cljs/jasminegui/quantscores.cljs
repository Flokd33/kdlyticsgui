(ns jasminegui.quantscores
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink md-circle-icon-button selection-list
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.tools :as tools]
    [reagent.core :as reagent]
    [reagent.core :as r]
    [oz.core :as oz]
    [goog.string :as gstring]
    [goog.string.format]
    )
  )

(rf/reg-event-fx
  :get-calculator-spread
  (fn [{:keys [db]} [_ country sector rating duration]]
    ;warning country and sector have ampersands & - this is a killer
    (println country)
    {:http-get-dispatch {:url          (str static/server-address "quant-model-calculator?country=" (.replace country "&" "@") "&sector=" (.replace sector "&" "@") "&rating=" rating "&duration=" duration)
                         :dispatch-key [:quant-model/calculator-spreads]
                         :kwk          true}}))

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
   :Sector                    {:Header "Sector" :accessor "Sector" :width 90}
   :Ticker                    {:Header "Ticker" :accessor "Ticker" :width 100}
   :Use                       {:Header "Use" :accessor "Use" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true}
   :Bond                      {:Header "Bond" :accessor "Bond" :width 150}
   :SENIOR                    {:Header "Snr" :accessor "SENIOR" :width 40}
   :CRNCY                     {:Header "Currency" :accessor "CRNCY" :width 60}
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

   :predicted_spread_legacy_2 {:Header "Predicted" :accessor "predicted_spread_legacy" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_new_2    {:Header "Predicted" :accessor "predicted_spread_new" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_svr_2    {:Header "Predicted" :accessor "predicted_spread_svr" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :difference_legacy_2       {:Header "Delta" :accessor "difference_legacy" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :difference_new_2          {:Header "Delta" :accessor "difference_new" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :difference_svr_2          {:Header "Delta" :accessor "difference_svr" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_upgrade_legacy_2   {:Header "Legacy" :accessor "predicted_spread_upgrade_legacy" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_upgrade_new_2      {:Header "New"    :accessor "predicted_spread_upgrade_new" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_upgrade_svr_2      {:Header "SVR"    :accessor "predicted_spread_upgrade_svr" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_downgrade_legacy_2 {:Header "Legacy" :accessor "predicted_spread_downgrade_legacy" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_downgrade_new_2    {:Header "New"    :accessor "predicted_spread_downgrade_new" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :predicted_spread_downgrade_svr_2    {:Header "SVR"    :accessor "predicted_spread_downgrade_svr" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :URS_legacy_2                        {:Header "Legacy" :accessor "URS_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :URS_new_2                           {:Header "New"    :accessor "URS_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :URS_svr_2                           {:Header "SVR"    :accessor "URS_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :HRS_legacy_2                        {:Header "Legacy" :accessor "HRS_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell  tables/round2 :filterable true :filterMethod tables/compare-nb}
   :HRS_new_2                           {:Header "New"    :accessor "HRS_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell  tables/round2 :filterable true :filterMethod tables/compare-nb}
   :HRS_svr_2                           {:Header "SVR"    :accessor "HRS_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell  tables/round2 :filterable true :filterMethod tables/compare-nb}
   :URV_legacy_2                        {:Header "Univ." :accessor "URV_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URV_new_2                           {:Header "Univ."    :accessor "URV_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URV_svr_2                           {:Header "Univ."    :accessor "URV_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :HRV_legacy_2                        {:Header "Hist." :accessor "HRV_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :HRV_new_2                           {:Header "Hist."    :accessor "HRV_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :HRV_svr_2                           {:Header "Hist."    :accessor "HRV_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}

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
   :implied_rating_legacy_1                        {:Header "Legacy" :accessor "implied_rating_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :implied_rating_new_1                           {:Header "New"    :accessor "implied_rating_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :implied_rating_svr_1                           {:Header "SVR"    :accessor "implied_rating_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}

   :URS_rank_legacy_1                        {:Header "Legacy" :accessor "URS_rank_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_1                           {:Header "New"    :accessor "URS_rank_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_1                           {:Header "SVR"    :accessor "URS_rank_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_1D_1                        {:Header "Legacy" :accessor "URS_rank_legacy_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_1D_1                           {:Header "New"    :accessor "URS_rank_new_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_1D_1                           {:Header "SVR"    :accessor "URS_rank_svr_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_1W_1                        {:Header "Legacy" :accessor "URS_rank_legacy_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_1W_1                           {:Header "New"    :accessor "URS_rank_new_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_1W_1                           {:Header "SVR"    :accessor "URS_rank_svr_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_1M_1                        {:Header "Legacy" :accessor "URS_rank_legacy_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_1M_1                           {:Header "New"    :accessor "URS_rank_new_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_1M_1                           {:Header "SVR"    :accessor "URS_rank_svr_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_D1D_1                        {:Header "Legacy" :accessor "URS_rank_legacy_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_D1D_1                           {:Header "New"    :accessor "URS_rank_new_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_D1D_1                           {:Header "SVR"    :accessor "URS_rank_svr_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_D1W_1                        {:Header "Legacy" :accessor "URS_rank_legacy_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_D1W_1                           {:Header "New"    :accessor "URS_rank_new_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_D1W_1                           {:Header "SVR"    :accessor "URS_rank_svr_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_D1M_1                        {:Header "Legacy" :accessor "URS_rank_legacy_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_D1M_1                           {:Header "New"    :accessor "URS_rank_new_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_D1M_1                           {:Header "SVR"    :accessor "URS_rank_svr_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}

   :URS_rank_legacy_2                        {:Header "Today" :accessor "URS_rank_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_2                           {:Header "Today"    :accessor "URS_rank_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_2                           {:Header "Today"    :accessor "URS_rank_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_1D_2                        {:Header "1D" :accessor "URS_rank_legacy_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_1D_2                           {:Header "1D"    :accessor "URS_rank_new_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_1D_2                           {:Header "1D"    :accessor "URS_rank_svr_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_1W_2                        {:Header "1W" :accessor "URS_rank_legacy_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_1W_2                           {:Header "1W"    :accessor "URS_rank_new_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_1W_2                           {:Header "1W"    :accessor "URS_rank_svr_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_1M_2                        {:Header "1M" :accessor "URS_rank_legacy_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_1M_2                           {:Header "1M"    :accessor "URS_rank_new_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_1M_2                           {:Header "1M"    :accessor "URS_rank_svr_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_D1D_2                        {:Header "1D" :accessor "URS_rank_legacy_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_D1D_2                           {:Header "1D"    :accessor "URS_rank_new_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_D1D_2                           {:Header "1D"    :accessor "URS_rank_svr_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_D1W_2                        {:Header "1W" :accessor "URS_rank_legacy_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_D1W_2                           {:Header "1W"    :accessor "URS_rank_new_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_D1W_2                           {:Header "1W"    :accessor "URS_rank_svr_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_legacy_D1M_2                        {:Header "1M" :accessor "URS_rank_legacy_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_new_D1M_2                           {:Header "1M"    :accessor "URS_rank_new_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :URS_rank_svr_D1M_2                           {:Header "1M"    :accessor "URS_rank_svr_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :implied_rating_legacy_2                        {:Header "Implied R" :accessor "implied_rating_legacy" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :implied_rating_new_2                           {:Header "Implied R"    :accessor "implied_rating_new" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :implied_rating_svr_2                           {:Header "Implied R"    :accessor "implied_rating_svr" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}

   })


;isin_id
;S&P
;Moodys
;Fitch
;S&P-score
;Fitch-score
;Moodys-score
;




(def table-style (reagent/atom "SVR"))

(defn qs-table [mytitle data]
     [v-box :class "element"  :gap "20px" :width "1640px"
      :children [[h-box :align :center :children [[title :label mytitle :level :level1]
                                                  [gap :size "1"]
                                                  [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link data "quant-model-output")]]]
                 [h-box :align :center :gap "20px"
                  :children (into [] (for [c ["Summary" "Full" "Legacy" "New" "SVR"]]
                                       ^{:key c}            ;; key should be unique among siblings
                                       [radio-button
                                        :label c
                                        :value c
                                        :model table-style
                                        :on-change #(reset! table-style %)]))]
                 [:> ReactTable
                  {:data                data
                   :columns             (case @table-style
                                          "Summary"
                                          [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR])}
                                           {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
                                           {:Header "Model prediction" :columns (mapv quant-score-table-columns [:predicted_spread_legacy_1 :predicted_spread_new_1 :predicted_spread_svr_1])}
                                           {:Header "Cheapness (>0)" :columns (mapv quant-score-table-columns [:difference_legacy_1 :difference_new_1 :difference_svr_1])}
                                           {:Header "Universe score" :columns (mapv quant-score-table-columns [:URV_legacy_1 :URV_new_1 :URV_svr_1])}
                                           {:Header "Historical score" :columns (mapv quant-score-table-columns [:HRV_legacy_1 :HRV_new_1 :HRV_svr_1])}]
                                          "Full"
                                          [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond-sticky :ISIN :Country :Sector :SENIOR])}
                                           {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
                                           {:Header "Model prediction" :columns (mapv quant-score-table-columns [:predicted_spread_legacy_1 :predicted_spread_new_1 :predicted_spread_svr_1])}
                                           {:Header "Cheapness (>0)" :columns (mapv quant-score-table-columns [:difference_legacy_1 :difference_new_1 :difference_svr_1])}
                                           {:Header "Universe score detail" :columns (mapv quant-score-table-columns [:URS_legacy_1 :URS_new_1 :URS_svr_1])}
                                           {:Header "Historical score detail" :columns (mapv quant-score-table-columns [:HRS_legacy_1 :HRS_new_1 :HRS_svr_1])}
                                           {:Header "Universe score" :columns (mapv quant-score-table-columns [:URV_legacy_1 :URV_new_1 :URV_svr_1])}
                                           {:Header "Historical score" :columns (mapv quant-score-table-columns [:HRV_legacy_1 :HRV_new_1 :HRV_svr_1])}
                                           {:Header "Implied rating" :columns (mapv quant-score-table-columns [:implied_rating_legacy_1 :implied_rating_new_1 :implied_rating_svr_1])}
                                           {:Header "Rank today" :columns (mapv quant-score-table-columns [:URS_rank_legacy_1 :URS_rank_new_1 :URS_rank_svr_1])}
                                           {:Header "Rank yesterday" :columns (mapv quant-score-table-columns [:URS_rank_legacy_1D_1 :URS_rank_new_1D_1 :URS_rank_svr_1D_1])}
                                           {:Header "Rank a week ago" :columns (mapv quant-score-table-columns [:URS_rank_legacy_1W_1 :URS_rank_new_1W_1 :URS_rank_svr_1W_1])}
                                           {:Header "Rank a month ago" :columns (mapv quant-score-table-columns [:URS_rank_legacy_1M_1 :URS_rank_new_1M_1 :URS_rank_svr_1M_1])}
                                           {:Header "One day rank change" :columns (mapv quant-score-table-columns [:URS_rank_legacy_D1D_1 :URS_rank_new_D1D_1 :URS_rank_svr_D1D_1])}
                                           {:Header "One week rank change" :columns (mapv quant-score-table-columns [:URS_rank_legacy_D1W_1 :URS_rank_new_D1W_1 :URS_rank_svr_D1W_1])}
                                           {:Header "One month rank change" :columns (mapv quant-score-table-columns [:URS_rank_legacy_D1M_1 :URS_rank_new_D1M_1 :URS_rank_svr_D1M_1])}
                                           {:Header "Group" :columns (mapv quant-score-table-columns [:Used_Large_Rating_Score])}
                                           {:Header "Mean group difference" :columns (mapv quant-score-table-columns [:avg_rat_grp_diff_legacy_1 :avg_rat_grp_diff_new_1 :avg_rat_grp_diff_svr_1])}
                                           {:Header "Std group difference" :columns (mapv quant-score-table-columns [:std_rat_grp_diff_legacy_1 :std_rat_grp_diff_new_1 :std_rat_grp_diff_svr_1])}
                                           {:Header "Debugging: source data" :columns (mapv quant-score-table-columns [:FORCE_INCLUSION :AMT_OUTSTANDING :Use :Price-source :Used_YTW :ZTW-source :Duration-source :Rating-source :Override :OverrideRating :OverrideValuation :Workout_date :Workout_price])}]
                                          "Legacy"
                                          [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector  :SENIOR])}
                                           {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
                                           {:Header "Model outputs" :columns (mapv quant-score-table-columns [:predicted_spread_legacy_2 :difference_legacy_2 :URV_legacy_2 :HRV_legacy_2 :implied_rating_legacy_2])}
                                           {:Header "Ranking" :columns (mapv quant-score-table-columns [:URS_rank_legacy_2 :URS_rank_legacy_1D_2 :URS_rank_legacy_1W_2 :URS_rank_legacy_1M_2])}
                                           {:Header "Rank change" :columns (mapv quant-score-table-columns [:URS_rank_legacy_D1D_2 :URS_rank_legacy_D1W_2 :URS_rank_legacy_D1M_2])}
                                           ]
                                          "New"
                                          [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR])}
                                           {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
                                           {:Header "Model outputs" :columns (mapv quant-score-table-columns [:predicted_spread_new_2 :difference_new_2 :URV_new_2 :HRV_new_2 :implied_rating_new_2])}
                                           {:Header "Ranking" :columns (mapv quant-score-table-columns [:URS_rank_new_2 :URS_rank_new_1D_2 :URS_rank_new_1W_2 :URS_rank_new_1M_2])}
                                           {:Header "Rank change" :columns (mapv quant-score-table-columns [:URS_rank_new_D1D_2 :URS_rank_new_D1W_2 :URS_rank_new_D1M_2])}
                                           ]
                                          "SVR"
                                          [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR])}
                                           {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
                                           {:Header "Model outputs" :columns (mapv quant-score-table-columns [:predicted_spread_svr_2 :difference_svr_2 :URV_svr_2 :HRV_svr_2 :implied_rating_svr_2])}
                                           {:Header "Ranking" :columns (mapv quant-score-table-columns [:URS_rank_svr_2 :URS_rank_svr_1D_2 :URS_rank_svr_1W_2 :URS_rank_svr_1M_2])}
                                           {:Header "Rank change" :columns (mapv quant-score-table-columns [:URS_rank_svr_D1D_2 :URS_rank_svr_D1W_2 :URS_rank_svr_D1M_2])}
                                           ]


                                          )
                   :showPagination      true
                   :defaultPageSize     15
                   :pageSizeOptions     [15 25 50 100]
                   :filterable          true
                   :defaultFilterMethod tables/case-insensitive-filter
                   :className           "-striped -highlight"}]]])

(def calculator-sector (r/atom "Oil & Gas"))
(def calculator-country (r/atom "BR"))
(def calculator-duration (r/atom "9.0"))
(def calculator-rating (r/atom "13"))
(def show-bond-labels (r/atom true))
(def chart-other-countries (r/atom false))
(def chart-rating-neighbours (r/atom false))
(def chart-country-neighbours (r/atom false))

(defn get-implied-rating [txt]
  (if-let [x (first (first (filter #(= (subs (second %) 0 2) (if (= 1 (count txt)) (str "0" txt) txt)) @(rf/subscribe [:rating-to-score]))))] (name x) "error"))

(def performance-colors [    "#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E"])

(defn comparable-chart [duration legacy new svr table]
  (let [prepare-data (fn [tbl txt] (for [line tbl] {:field txt :duration (line :Used_Duration) :spread (line :Used_ZTW) :txt (line :Bond)}))
        rating-score (cljs.reader/read-string @calculator-rating)
        other (str "Other " (get-implied-rating (str rating-score)))
        other-country (str "Other " @calculator-country " " (get-implied-rating (str rating-score)))
        rating-up (get-implied-rating (str (inc rating-score)))
        rating-dw (get-implied-rating (str (dec rating-score)))
        data
        (concat
          (prepare-data table "comp")
          [{:field "legacy" :duration duration :spread legacy :txt "legacy"}
           {:field "new" :duration duration :spread new :txt "new"}
           {:field "svr" :duration duration :spread svr :txt "svr"}]
          (if @chart-other-countries (prepare-data (filter #(and (= (:Sector %) @calculator-sector) (= (:Used_Rating_Score %) rating-score) (not= (:Country %) @calculator-country)) @(rf/subscribe [:quant-model/model-output])) other))
          (if @chart-rating-neighbours (prepare-data (filter #(and (= (:Sector %) @calculator-sector) (= (:Used_Rating_Score %) (inc rating-score))) @(rf/subscribe [:quant-model/model-output])) rating-up))
          (if @chart-rating-neighbours (prepare-data (filter #(and (= (:Sector %) @calculator-sector) (= (:Used_Rating_Score %) (dec rating-score))) @(rf/subscribe [:quant-model/model-output])) rating-dw))
          (if @chart-country-neighbours (prepare-data (filter #(and (= (:Country %) @calculator-country) (= (:Used_Rating_Score %) rating-score) (not= (:Sector %) @calculator-sector)) @(rf/subscribe [:quant-model/model-output])) other-country))
          )
        color-domain-scale (merge {"comp" "#134848" "legacy" "red" "new" "orange" "svr" "blue"}
                                  (if @chart-other-countries {other "#009D80"})
                                  (if @chart-rating-neighbours {rating-up "#FDAA94" rating-dw "#74908D"})
                                  (if @chart-country-neighbours {other-country "#591739"}))
        vega-spec
        {:title nil
         :data  {:values data}
         :layer (concat [{:mark     {:type "point" :filled true}
                          :encoding {:x       {:field "duration" :type "quantitative" :axis {:title nil :labelFontSize 14 :tickMinStep 0.5 :format ".1f"} :scale {:domain [0. (inc (apply max (map :duration data)))]}}
                                     :y       {:field "spread" :type "quantitative" :axis {:title nil :labelFontSize 14 :tickMinStep 0.5 :format ".0f"}}
                                     :color   {:field "field" :scale {:domain (keys color-domain-scale) :range (vals color-domain-scale)} :legend {:labelFontSize 14 :title nil}}
                                     :tooltip [{:field "txt" :type "nominal" :title "Bond"}
                                               {:field "duration" :type "quantitative", :title "Duration"}
                                               {:field "spread" :type "quantitative", :title "Spread"}]}}]
                        (if @show-bond-labels
                          [{:mark     {:type "text" :dx 6 :align "left"}
                            :encoding {:x    {:field "duration" :type "quantitative"}
                                       :y    {:field "spread" :type "quantitative"}
                                       :text {:field "txt" :type "nominal"}
                                       }}]))
         :width  1000
         :height 500}]
    ;(println (prepare-data (filter #(and (= (:Country %) @calculator-country) (= (:Used_Rating_Score %) rating-score) (not= (:Sector %) @calculator-sector)) @(rf/subscribe [:quant-model/model-output])) other-country))
    [v-box :class "element"  :gap "10px" :width "1620px"
     :children [[title :label "Comparables chart" :level :level1]
                [checkbox :model show-bond-labels :label "Bond labels" :on-change #(reset! show-bond-labels %)]
                [h-box :gap "50px" :children [[checkbox :model chart-other-countries :label "Other countries (same sector and rating)" :on-change #(reset! chart-other-countries %)]
                                              [checkbox :model chart-rating-neighbours :label "Rating neighbours (same sector, rating up/down a notch)" :on-change #(reset! chart-rating-neighbours %)]
                                              [checkbox :model chart-country-neighbours :label "Country neighbours (same country and rating)" :on-change #(reset! chart-country-neighbours %)]]]
                [oz/vega-lite vega-spec]]]))

(defn calculator-result-table []
  (let [data @(rf/subscribe [:quant-model/model-output])
        calc-data @(rf/subscribe [:quant-model/calculator-spreads])
        display (into [] (for [[k txt c] [[:d4 "Four factor" (count (filter #(and (= (:Country %) @calculator-country) (= (:Sector %) @calculator-sector) (= (:Used_Rating_Score %) (cljs.reader/read-string @calculator-rating))) data))]
                                          [:d3country (str @calculator-country " " @calculator-duration "y " (get-implied-rating @calculator-rating)) (count (filter #(and (= (:Country %) @calculator-country) (= (:Used_Rating_Score %) (cljs.reader/read-string @calculator-rating))) data))]
                                          [:d3sector (str @calculator-sector " " @calculator-duration "y " (get-implied-rating @calculator-rating)) (count (filter #(and (= (:Sector %) @calculator-sector) (= (:Used_Rating_Score %) (cljs.reader/read-string @calculator-rating))) data))]
                                          [:d2 (str @calculator-duration "y " (get-implied-rating @calculator-rating)) (count (filter #(and (= (:Used_Rating_Score %) (cljs.reader/read-string @calculator-rating))) data))]]]
                           {:model txt :svr (get-in calc-data [:svr k]) :legacy (get-in calc-data [:legacy k]) :new (get-in calc-data [:new k]) :comps c}))]
    [:> ReactTable
     {:data           display
      :columns        [{:Header "Model" :accessor "model" :width 200}
                       {:Header "Legacy" :accessor "legacy" :width 60 :style {:textAlign "right"} :Cell tables/zspread-format}
                       {:Header "New" :accessor "new" :width 60 :style {:textAlign "right"} :Cell tables/zspread-format}
                       {:Header "SVR" :accessor "svr" :width 60 :style {:textAlign "right" :background-color "lightgrey"} :Cell tables/zspread-format}
                       {:Header "Comparables" :accessor "comps" :width 100 :style {:textAlign "right"}}]
      :showPagination false
      :pageSize       4
      :filterable     false}]))

(defn calculator-controller []
  (let [country-codes @(rf/subscribe [:country-codes])
        data @(rf/subscribe [:quant-model/model-output])
        sectors (mapv (fn [x] {:id x :label x}) (sort (distinct (map :Sector data))))
        countries (mapv (fn [x] {:id x :label (:LongName (first (filter #(= (:CountryCode %) x) country-codes)))}) (sort (distinct (map :Country data))))
        comparables (sort-by
                      :Used_Duration
                      (filter #(and (= (:Country %) @calculator-country)
                                    (= (:Sector %) @calculator-sector)
                                    (= (:Used_Rating_Score %) (cljs.reader/read-string @calculator-rating)))
                              data))
        infer-rating-fn (fn [country] (reset! calculator-rating (str (:Used_Rating_Score (first (filter #(and (= (:Country %) country) (= (:Sector %) "Sovereign")) data))))))
        update-sector-fn (fn [sector] (do (reset! calculator-sector sector)
                                          (when (= sector "Sovereign") (reset! calculator-rating (infer-rating-fn @calculator-country)))))
        update-country-fn (fn [country] (do (reset! calculator-country country)
                                            (when (= @calculator-sector "Sovereign") (reset! calculator-rating (infer-rating-fn @calculator-country)))))
        ]
    [v-box :padding "80px 10px" :class "rightelement" :gap "20px"
     :children [
                [v-box :class "element" :gap "0px" :width "1620px"
                 :children [[title :label "New issue calculator" :level :level1]
                            [gap :size "20px"]
                            [h-box :gap "50px" :align :center
                             :children [[v-box :gap "0px" :align :start :children [[h-box :gap "10px" :children [[label :width "200px" :label "Country"] [label :width "200px" :label "Sector"]]]
                                                                                     [h-box :gap "10px" :children [[single-dropdown :width "200px" :model calculator-country :choices countries :on-change #(do (update-country-fn %) (rf/dispatch [:quant-model/calculator-spreads nil])) :filter-box? true]
                                                                                                                   [single-dropdown :width "200px" :model calculator-sector :choices sectors :on-change #(do (update-sector-fn %) (rf/dispatch [:quant-model/calculator-spreads nil]))  :filter-box? true]]]
                                                                                     [gap :size "20px"]
                                                                                     [h-box :gap "10px" :children [[label :width "100px" :label "Duration"] [label :width "100px" :label "Rating score"] [label :width "100px" :label "Rating"]]]
                                                                                     [h-box :gap "10px" :align :center :children [[input-text :width "100px" :model calculator-duration :on-change #(do (reset! calculator-duration %) (rf/dispatch [:quant-model/calculator-spreads nil]))]
                                                                                                                   [input-text :width "100px" :model calculator-rating :on-change #(do (reset! calculator-rating %) (rf/dispatch [:quant-model/calculator-spreads nil]))]
                                                                                                                   [label :width "100px" :label (get-implied-rating @calculator-rating)]]]]]

                                        [button :style {:width "100px"} :label "Calculate" :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:get-calculator-spread @calculator-country @calculator-sector @calculator-rating @calculator-duration])]
                                        [calculator-result-table]]]]]
                [comparable-chart
                 (cljs.reader/read-string @calculator-duration)
                 (get-in @(rf/subscribe [:quant-model/calculator-spreads]) [:legacy :d4])
                 (get-in @(rf/subscribe [:quant-model/calculator-spreads]) [:new :d4])
                 (get-in @(rf/subscribe [:quant-model/calculator-spreads]) [:svr :d4])
                 comparables]
                [qs-table (str "Comparables table") (sort-by (juxt :Country :Ticker :Used_Duration) comparables)]]]))

(defn qs-table-container []
  [box :padding "80px 10px" :class "rightelement" :child [qs-table "Quant model output" (sort-by (juxt :Country :Ticker :Used_Duration) @(rf/subscribe [:quant-model/model-output]))]])

(def spot-chart-model-choice (r/atom "SVR"))
(def spot-chart-rating-choice (r/atom #{3 6 9 12 15 18}))               ;3 6 9 12 15 18
(def spot-chart-issuer-choice (r/atom (set nil)))           ;["BRAZIL"]

(defn spot-chart-vega-spec [model ratings issuers]
  (let [raw-data @(rf/subscribe [:quant-model/rating-curves])
        data (filter #(contains? ratings (:Rating %)) raw-data)                                       ;(filter #(< 3 (:Duration %) 10) raw-data)
        target (case model "Legacy" "predicted_spread_legacy" "New" "predicted_spread_new" "SVR" "predicted_spread_svr")
        ktarget (keyword target)
        bonds (filter #(contains? issuers (:Ticker %)) @(rf/subscribe [:quant-model/model-output]))
        bond-data (map #(select-keys % [:Bond :rule-max :rule-min :cheap :Used_Duration :Used_ZTW ktarget :Duration :Rating])
                       (map #(assoc %
                               :rule-max (max (ktarget %) (:Used_ZTW %))
                               :rule-min (min (ktarget %) (:Used_ZTW %))
                               :cheap (if (< (ktarget %) (:Used_ZTW %)) "cheap" "expensive"))
                            bonds))
        min-domain (max (dec (apply min (map :Used_Duration bond-data))) 0.)
        max-domain (min (inc (apply max (map :Used_Duration bond-data))) 25)
        rating-text-data (into [] (for [line (filter #(= (:Duration %) (Math/round (* 0.25 (+ min-domain max-domain)))) data)] {:Duration (:Duration line) :spread (ktarget line) :txt (get-implied-rating (str (:Rating line)))}))
        ]
    {:title  nil
     :data   {:values (concat bond-data data rating-text-data)}
     :layer  [
              {:mark     {:type "line" :clip true}
               :encoding {:x     {:field "Duration" :type "quantitative" :axis {:title "Duration" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"} :scale {:domain [min-domain max-domain]}} ;:scale {:domain [0. 30.]}
                          :y     {:field target :type "quantitative" :axis {:title "Spread" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".0f"}}
                          :color {:field "Rating" :type "quantitative" :legend nil}}}
              {:mark     {:type "text" :dy -10}
               :encoding {:x     {:field "Duration" :type "quantitative"}
                          :y     {:field "spread" :type "quantitative"}
                          :text {:field "txt" :type "nominal"}}}
              {:mark     {:type "rule"}
               :encoding {:x       {:field "Used_Duration" :type "quantitative"}
                          :y       {:field "rule-min" :type "quantitative"}
                          :y2      {:field "rule-max" :type "quantitative"}
                          :color   {:field "cheap" :type "nominal" :scale {:domain ["cheap" "expensive"] :range ["#134848" "#FDAA94"]} :legend {:title nil :labelFontSize 14}}}}
              {:mark     {:type "point" :filled true}
               :encoding {:x     {:field "Used_Duration" :type "quantitative"} ;:scale {:domain [0. 30.]}
                          :y     {:field "Used_ZTW" :type "quantitative"}
                          :color {:value "black"}
                          :tooltip [{:field "Bond" :type "nominal" :title "Bond"}
                                    {:field "Used_Duration" :type "quantitative", :title "Duration"}
                                    {:field "Used_ZTW" :type "quantitative", :title "Spread"}
                                    {:field target :type "quantitative", :title "Model"}]}}
              {:mark     {:type "text" :dx 6 :align "left"}
               :encoding {:x     {:field "Used_Duration" :type "quantitative"} ;:scale {:domain [0. 30.]}
                          :y     {:field "Used_ZTW" :type "quantitative"}
                          :text {:field "Bond" :type "nominal"}}}
              ]
     :width  1000
     :height 625}))

(defn spot-chart []
  (let [data @(rf/subscribe [:quant-model/model-output])]
    [box :padding "80px 10px" :class "rightelement" :child
     [v-box :class "element" :gap "50px" :width "1620px" :children
      [[title :label "Spot charts" :level :level1]
       [h-box :gap "50px" :children
        [[v-box :gap "0px" :width "125px" :children
          (into [] (concat
                      (into [[title :label "Model type" :level :level3]]
                            (for [c ["Legacy" "New" "SVR"]]
                              ^{:key c}                     ;; key should be unique among siblings
                              [radio-button
                               :label c
                               :value c
                               :model spot-chart-model-choice
                               :on-change #(reset! spot-chart-model-choice %)]))
                      [[gap :size "10px"]
                       [title :label "Rating curves" :level :level3]
                       [selection-list :model spot-chart-rating-choice :choices (into [] (map (fn [i] {:id i :label (get-implied-rating (str i))}) (range 2 19))) :on-change #(reset! spot-chart-rating-choice %)]]))
          ]
         [v-box :gap "0px" :width "150px" :children
          [[title :label "Issuers" :level :level3]
           [selection-list :model spot-chart-issuer-choice :width "100%" :height "600px" :choices (into [] (map (fn [i] {:id i :label i}) (sort (distinct (map :Ticker data))))) :on-change #(reset! spot-chart-issuer-choice %)]]]
         [oz/vega-lite (spot-chart-vega-spec @spot-chart-model-choice @spot-chart-rating-choice @spot-chart-issuer-choice)]                                                 ; [p "chart comes here"]                             ;[oz/vega-lite nil]
         ]]]]]))

(defn methodology []
  [box :padding "80px 10px" :class "rightelement" :child
   [v-box :class "element" :children
    [[title :label "Methodology" :level :level1]
     [gap :size "20px"]
     [title :label "General" :level :level3]
     [p "We are running a four factor model, regressing spreads against country, sector, rating and duration. Country and sector are categorical variables while rating and duration are numerical. The latter are normalised before the regression."]
     [title :label "Legacy model" :level :level3]
     [p "We run log(spread) = a.Duration + b.Rating + categorical variables. This correctly takes into account spreads widening faster as we go down credit ratings. However, it will be misleading (too high spreads) for long dated bonds, especially low rated credits, as it will keep curves quite steep."]
     [title :label "New model" :level :level3]
     [p "We run log(spread) = a.log(Duration) + b.Rating + categorical variables. This correctly takes into account spreads widening faster as we go down credit ratings. It also creates curves that are flatter (better) in the long end, but too steep in the short end (too low spreads), especially for low rated credits."]
     [title :label "Support vector regression (SVR)" :level :level3]
     [p "We run spread = SVR(Duration, Rating, categorical variables), using the RBF Kernel and C=1000, e=0.01. C and e are roughly calibrated to match the explanatory power of the legacy and new model. The SVR model moves the data into a hyperspace where it can better be linearly explained. It will correctly reflect that high grade credit curves are steep while high yield ones are flat to inverted. On the other hand, it may overfit curves with very few bonds. For more on SVR: " [hyperlink-href :label "Wikipedia" :href "https://en.wikipedia.org/wiki/Support_vector_machine"]]
     [title :label "Curve shapes: the big issue with the legacy and new model" :level :level3]
     [p "The legacy and new model will give the same curve steepness to all credits: the steepness is independent from the spread level which is intuitively and factually wrong. In the legacy model, the spread ratio between durations is a fixed ratio of the duration difference, while in the new model, it's a fixed ratio of the duration ratio. Convexity makes the approach slightly better in the legacy model, and even worse in the new model."]
     ]]]
  )

(def trade-finder-isin (r/atom nil))
(defn trade-finder []
  (let [data @(rf/subscribe [:quant-model/model-output])
        bond-data (first (filter #(= (:ISIN %) @trade-finder-isin) data))
        duration (:Used_Duration bond-data)
        rating (:Used_Rating_Score bond-data)
        cheapness (:difference_svr bond-data)
        bond-name (:Bond bond-data)
        comparables (->> data
                         (remove (comp nil? :Used_Duration))
                         (remove (comp nil? :Used_Rating_Score))
                         (remove (comp nil? :difference_svr))
                         (filter #(and
                                    (<= (dec duration) (:Used_Duration %) (inc duration))
                                    (<= (dec rating) (:Used_Rating_Score %) (inc rating))
                                    (>= (:difference_svr %) cheapness))) ;so we include the source bond - useful to see its score
                         (sort-by :difference_svr)
                         (reverse))]
    [v-box :padding "80px 10px" :class "rightelement" :gap "20px"
     :children [
                [v-box :class "element" :gap "10px" :width "1620px"
                 :children [[title :label "Existing bond ISIN" :level :level1]
                            [input-text :model trade-finder-isin :on-change #(reset! trade-finder-isin %)]
                            [label :label bond-name]
                            [p (str "We will look for bonds rated within 1 notch of the above, with duration within 1 year of the above, and scoring cheaper through the SVR model.")]]]
                [qs-table (str (count comparables) " bonds scoring better") comparables]]]))

(defn duration-grouping-fn
  "we put .00001 because bbg duration is rounded to 2 digits"
  [m]
  (let [duration (:Used_Duration m)]
    (condp >= duration
      3 "0-3Y"
      5 "3-5Y"
      7 "5-7Y"
      10 "7-10Y"
      15 "10-15Y"
      100 "15Y+"
      "uncategorized")))

;(cond
;  (< 0 duration 3.00001) "0-3Y"
;  (< 3.00001 duration 5.00001) "3-5Y"
;  (< 5.00001 duration 7.00001) "5-7Y"
;  (< 7.00001 duration 10.00001) "7-10Y"
;  (< 10.00001 duration 15.00001) "10-15Y"
;  (< 15.00001 duration) "15Y+"
;  :else "uncategorized")))

(def top-bottom-ignore-subs? (r/atom false))
(def top-bottom-ignore-sovs? (r/atom true))
(def top-bottom-how-many (r/atom 3))

(defn top-bottom-str [this]
  (let [coll (js->clj (aget this "value"))]
    (r/as-element
      [v-box :children (mapv (fn [line]
                               [label
                                :style {:color (if (pos? (get-in line ["difference_svr"])) "darkgreen" "darkred")}
                                :label (str (get-in line ["Bond"]) " (" (Math/round (get-in line ["difference_svr"])) ")")]) coll)]
      )))

(defn top-bottom []
  (let [data @(rf/subscribe [:quant-model/model-output])
        fdata (filter #(and
                         (some? (:difference_svr %))
                         (if @top-bottom-ignore-sovs? (not= (:Sector %) "Sovereign") true)
                         (if @top-bottom-ignore-subs? (not= (:SENIOR %) "N") true))
                      data)
        res (into []
                  (for [[duration-bucket durgrp] (group-by duration-grouping-fn fdata)]
                      (apply merge
                             {:duration-bucket duration-bucket}
                             (for [[large-rating-group lrgroup] (group-by :Used_Large_Rating_Score durgrp)]
                               {(keyword (str "LRG" large-rating-group)) (let [s (reverse (sort-by :difference_svr lrgroup))] (concat (take @top-bottom-how-many (filter (comp pos? :difference_svr) s)) (take-last @top-bottom-how-many (filter (comp neg? :difference_svr) s))))}))))
        sres (->> res
                  (remove #(= (:duration-bucket %) "uncategorized"))
                  (sort-by #(.indexOf ["0-3Y" "3-5Y" "5-7Y" "7-10Y" "10-15Y" "15Y+"] (:duration-bucket %))))]
    [v-box :padding "80px 10px" :class "rightelement" :gap "20px"
     :children [[v-box :class "element" :gap "20px" :width "1620px"
                 :children [[title :level :level1 :label "Most expensive / cheap bonds by category"]
                            [h-box :gap "20px" :align :center
                             :children [[checkbox :model top-bottom-ignore-sovs? :label "Ignore sovereign bonds?" :on-change #(reset! top-bottom-ignore-sovs? %)]
                                        [checkbox :model top-bottom-ignore-subs? :label "Ignore subordinated bonds?" :on-change #(reset! top-bottom-ignore-subs? %)]
                                        [label :label "How many:"] [single-dropdown :width "75px" :model top-bottom-how-many :choices [{:id 3 :label 3} {:id 5 :label 5} {:id 10 :label 10}] :on-change #(reset! top-bottom-how-many %)]]]
                            [:> ReactTable
                             {:data           sres
                              :columns        [{:Header "Duration bucket" :accessor "duration-bucket" :width 200 :style {:textAlign "center" :display "flex" :flexDirection "column" :justifyContent "center"}}
                                               {:Header "AA" :accessor "LRG1" :width 200 :Cell top-bottom-str}
                                               {:Header "A" :accessor "LRG2" :width 200 :Cell top-bottom-str}
                                               {:Header "BBB" :accessor "LRG3" :width 200 :Cell top-bottom-str}
                                               {:Header "BB" :accessor "LRG4" :width 200 :Cell top-bottom-str}
                                               {:Header "B" :accessor "LRG5" :width 200 :Cell top-bottom-str}
                                               {:Header "C" :accessor "LRG6" :width 200 :Cell top-bottom-str}
                                               ;{:Header "New" :accessor "new" :width 60 :style {:textAlign "right"} :Cell tables/zspread-format}
                                               ;{:Header "SVR" :accessor "svr" :width 60 :style {:textAlign "right" :background-color "lightgrey"} :Cell tables/zspread-format}
                                               ;{:Header "Comparables" :accessor "comps" :width 100 :style {:textAlign "right"}}
                                               ]
                              ;getTdProps={() => ({
                              ;                    style: {
                              ;                            display: 'flex',
                              ;                            flexDirection: 'column',
                              ;                            justifyContent: 'center'
                              ;                            }
                              ;                    })
                              ;
                              ;:getTdProps #(clj->js {:style {:verticalAlign "center"}})
                              :showPagination false
                              :pageSize       6
                              :sortable       false
                              :filterable     false}]
                            ]]]])
  )


(defn universe-str [this]
  (let [coll (js->clj (aget this "value"))]
    ;    (println this)
    (r/as-element (if (= coll [0 0 0]) [p "-"]
                                     [v-box :children [[label :label (str (first coll) " issuers")]
                                                       [label :label (str (second coll) " bonds")]
                                                       [label :label (str (gstring/format "%.1f" (* 0.000000001 (last coll))) " bn $")]
                                                       ]])
                  )))

(defn cntry-translate [this]
  (let [cntry (js->clj (aget this "value"))]
    (r/as-element (if (= cntry "Total") "Total" (:LongName (first (filter #(= (:CountryCode %) cntry) @(rf/subscribe [:country-codes]))))))))

(defn cntry-translate-sub [code] (if (= code "Total") "Total" (:LongName (first (filter #(= (:CountryCode %) code) @(rf/subscribe [:country-codes]))))))

(def universe-ignore-sovs-govts? (r/atom true))
(def universe-hyigall (r/atom :all))

(defn universe-overview []
  (let
    [source-data @(rf/subscribe [:quant-model/model-output])
     market-cap (fn [lines] (reduce + (remove nil? (map :AMT_OUTSTANDING (filter (fn [line] (some #{(:CRNCY line)} ["USD" "EUR" "GBP"])) lines)))))
     data (filter (fn [line] (and
                             (if @universe-ignore-sovs-govts? (not (some #{(:Sector line)} ["Sovereign" "Government"])) true)
                             (case @universe-hyigall :all true :ig (<= (:Used_Rating_Score line) 10) :hy (> (:Used_Rating_Score line) 10))))
                  source-data)
     dsec (sort (distinct (map :Sector data)))
     cgrp (group-by :Country data)
     res (into [(merge
                  (into {:Country "Total"} (for [s dsec] (let [bonds (filter #(= (:Sector %) s) data)] [s [(count (distinct (map :Ticker bonds))) (count bonds) (market-cap bonds)]])))
                  {"Total" [(count (distinct (map :Ticker data))) (count data) (market-cap data)]})]
               (for [[c grp] (sort-by first cgrp)]
                 (merge
                   (into {:Country (cntry-translate-sub c)} (for [s dsec] (let [bonds (filter #(= (:Sector %) s) grp)] [s [(count (distinct (map :Ticker bonds))) (count bonds) (market-cap bonds)]])))
                   {"Total" [(count (distinct (map :Ticker grp))) (count grp) (market-cap grp)]})))
     col-width (if @universe-ignore-sovs-govts? 120 100)]
    [v-box :padding "80px 10px" :class "rightelement" :gap "20px"
     :children [[v-box :class "element" :gap "20px" :width "1620px"
                 :children [[title :level :level1 :label "Universe overview"]
                            [h-box :gap "20px" :align :center
                             :children [[checkbox :model universe-ignore-sovs-govts? :label "Ignore sovereigns and provinces?" :on-change #(reset! universe-ignore-sovs-govts? %)]
                                        [gap :size "20px"]
                                        [radio-button :model universe-hyigall :label "All bonds" :value :all :on-change #(reset! universe-hyigall %)]
                                        [radio-button :model universe-hyigall :label "IG only" :value :ig :on-change #(reset! universe-hyigall %)]
                                        [radio-button :model universe-hyigall :label "HY only" :value :hy :on-change #(reset! universe-hyigall %)]]]
                            [:> ReactTable
                             {:data           res
                              :columns        (concat [{:Header "Country" :accessor "Country" :width col-width :filterable true :filterMethod tables/case-insensitive-filter}]
                                                      (mapv (fn [s] {:Header s :accessor s :width col-width :Cell universe-str  :filterable false}) dsec)
                                                      [{:Header "Total" :accessor "Total" :width col-width :Cell universe-str :filterable false}])
                              :showPagination true
                              :pageSize       8}]]]]]))


(defn active-home []
  (let [active-qs @(rf/subscribe [:navigation/active-qs])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-qs
      :table      [qs-table-container]
      :calculator [calculator-controller]
      :spot-charts [spot-chart]
      :historical-charts [qs-table-container]
      :top-bottom [top-bottom]
      :trade-finder [trade-finder]
      :universe-des [universe-overview]
      :methodology [methodology]
      [:div.output "nothing to display"])))


(defn view []
  [h-box :gap "10px" :padding "0px" :children [[nav-qs-bar] [active-home]]])
