(ns jasminegui.quantscores
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink md-circle-icon-button selection-list modal-panel typeahead throbber
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.tools :as t]
    [reagent.core :as reagent]
    [reagent.core :as r]
    [oz.core :as oz]
    [goog.string :as gstring]
    [goog.string.format]
    [reagent-contextmenu.menu :as rcm])
  )

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;Following used for historical charts
(def typeahead-bond-nickname (r/atom nil))
(def isin-historical-charts (r/atom "ISIN not found"))
(def bond-historical-charts (r/atom ""))
(def show-historical-cheapness (r/atom true))
(def show-historical-spreads (r/atom false))
(def show-universe-scores (r/atom false))
(def show-historical-scores (r/atom false))
(def show-rating-history (r/atom false))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(rf/reg-event-fx
  :get-calculator-spread
  (fn [{:keys [db]} [_ country sector rating duration]]
    ;warning country and sector have ampersands & - this is a killer
    {:http-get-dispatch {:url          (str static/server-address "quant-model-calculator?country=" (.replace ^string country "&" "@") "&sector=" (.replace ^string sector "&" "@") "&rating=" rating "&duration=" duration)
                         :dispatch-key [:quant-model/calculator-spreads]}}))

(rf/reg-event-fx
  :get-historical-quant-scores
  (fn [{:keys [db]} [_ isin]]
    {:http-get-dispatch {:url          (str static/server-address "quant-model-isin-history?isin=" isin)
                         :dispatch-key [:quant-model/isin-history]}}))

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

(defn esg-span [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div [:span {:title (clojure.string/join " " [(if (.includes x "G") "Green")
                                                     (if (.includes x "S") "Social")
                                                     (if (.includes x "T") "Sustainable")
                                                     (if (.includes x "L") "Sutainability-linked")])} x]]
      "-")))

(def quant-score-table-columns
  {:ISIN                      {:Header "ISIN" :accessor "ISIN" :width 100}
   :Country                   {:Header "Country" :accessor "Country" :width 55}
   :Sector                    {:Header "Sector" :accessor "Sector" :width 80}
   :Ticker                    {:Header "Ticker" :accessor "Ticker" :width 80}
   :Use                       {:Header "Use" :accessor "Use" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true}
   :Bond                      {:Header "Bond" :accessor "Bond" :width 130}
   :SENIOR                    {:Header "Snr" :accessor "SENIOR" :width 35}
   :SENIOR-WIDE               {:Header "Senior" :accessor "SENIOR" :width 50 :style {:textAlign "center"}}
   :HYBRID-WIDE               {:Header "Hybrid" :accessor "HYBRID" :width 50 :style {:textAlign "center"}}
   :ESG                       {:Header "ESG" :accessor "ESG" :width 50 :style {:textAlign "center"} :Cell esg-span}
   :COUPON                    {:Header "Coupon" :accessor "COUPON" :width 55 :style {:textAlign "right"} :filterable true :filterMethod tables/compare-nb}
   :cembi                     {:Header "CEMBI" :accessor "cembi" :width 52 :style {:textAlign "center"}}
   :cembi-ig                  {:Header "CEMBI IG" :accessor "cembi-ig" :width 62  :style {:textAlign "center"}}
   :embi                     {:Header "EMBI" :accessor "embi" :width 52 :style {:textAlign "center"}}
   :embi-ig                  {:Header "EMBI IG" :accessor "embi-ig" :width 62  :style {:textAlign "center"}}
   :us-agg                     {:Header "US agg" :accessor "us-agg" :width 55 :style {:textAlign "center"}}
   :global-agg                  {:Header "Glb agg" :accessor "global-agg" :width 55  :style {:textAlign "center"}}
   :CRNCY                     {:Header "Currency" :accessor "CRNCY" :width 50}
   :Bond-sticky               {:Header "Bond" :accessor "Bond" :width 130 :className "sticky-rt-column" :headerClassName "sticky-rt-column"}
   :Used_Price                {:Header "Price" :accessor "Used_Price" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :Rating_String             {:Header "Rating source" :accessor "Rating_String" :width 110 :filterable true :filterMethod tables/compare-nb-d100}
   :Used_Rating_Score         {:Header "Rating" :accessor "Used_Rating_Score" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :Used_ZTW                  {:Header "ZTW" :accessor "Used_ZTW" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :Used_YTW                  {:Header "YTW" :accessor "Used_YTW" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/yield-format :filterable true :filterMethod tables/compare-nb}
   :Used_Duration             {:Header "Duration" :accessor "Used_Duration" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round1 :filterable true :filterMethod tables/compare-nb}

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
   :AMT_OUTSTANDING                     {:Header "Outstanding"    :accessor "AMT_OUTSTANDING" :width 85 :style {:textAlign "right"} :aggregate tables/median :Cell tables/nfcell2 :filterable true :filterMethod tables/compare-nb}
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
   :implied_rating_legacy_2                      {:Header "Implied R" :accessor "implied_rating_legacy" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :implied_rating_new_2                         {:Header "Implied R"    :accessor "implied_rating_new" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}
   :implied_rating_svr_2                         {:Header "Implied R"    :accessor "implied_rating_svr" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/compare-nb}

   :gross-cheapness                               {:Header "Gross cheapness" :accessor "gross-cheapness" :style {:textAlign "right"} :aggregate tables/median :Cell tables/nb-thousand-cell-format :filterable true :filterMethod tables/compare-nb}

   :upside1y                                    {:Header "Upside" :accessor "upside1y" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :expected1y                                  {:Header "Median" :accessor "expected1y" :width 75  :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :downside1y                                  {:Header "Downside" :accessor "downside1y" :width 75  :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/compare-nb}
   :z1ymin                                      {:Header "Tight" :accessor "z1ymin" :width 65  :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :z1ymax                                      {:Header "Wide" :accessor "z1ymax" :width 65  :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :z1ymedian                                   {:Header "Median" :accessor "z1ymedian" :width 65  :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}
   :z1yvalid                                    {:Header "Days" :accessor "z1yvalid" :width 65 :style {:textAlign "right"} :aggregate tables/median  :filterable true :filterMethod tables/compare-nb}

   :difference_svr_2_2d                         {:Header "Delta 2D" :accessor "difference_svr_2d" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/compare-nb}

   :gross_4d_value                              {:Header "4D value"    :accessor "gross_4d_value" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/compare-nb}
   :gross_2d_value                              {:Header "2D value"    :accessor "gross_2d_value" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/compare-nb}
   :gross_4d_value_pos                          {:Header "4D value"    :accessor "gross_4d_value_pos" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/compare-nb}
   :gross_2d_value_pos                          {:Header "2D value"    :accessor "gross_2d_value_pos" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/compare-nb}
   :gross_4d_value_neg                          {:Header "4D value"    :accessor "gross_4d_value_neg" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/compare-nb}
   :gross_2d_value_neg                          {:Header "2D value"    :accessor "gross_2d_value_neg" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/compare-nb}
   :gross_4d_value_pos_pct                      {:Header "4D value"    :accessor "gross_4d_value_pos_pct" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.1f%" 100.)}
   :gross_2d_value_pos_pct                      {:Header "2D value"    :accessor "gross_2d_value_pos_pct" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.1f%" 100.)}
   :LongCountry                                 {:Header "Country"     :accessor "LongCountry" :width 125}
   :StringRating                                {:Header "Rating"     :accessor "StringRating" :width 125}
   :AMT_OUTSTANDING_2                           {:Header "($ bn)"    :accessor "AMT_OUTSTANDING" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/compare-nb}
   :AMT_OUTSTANDING_3                           {:Header "$ m"    :accessor "AMT_OUTSTANDING" :width 45 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.0f" 0.000001) :filterable true :filterMethod tables/compare-nb}
   :DurationGroup                               {:Header "Duration"  :accessor "DurationGroup" :width 125}
   })


;isin_id
;S&P
;Moodys
;Fitch
;S&P-score
;Fitch-score
;Moodys-score
;

(defn fnevt [state rowInfo instance evt]
  (rcm/context!
    evt
    [(aget rowInfo "original" "Bond")                                         ; <---- string is a section title
     ["Copy ISIN" (fn [] (t/copy-to-clipboard (aget rowInfo "original" "ISIN")))]
     ["Historical charts" (fn [] ((reset! isin-historical-charts (aget rowInfo "original" "ISIN"))
                                  (reset! bond-historical-charts (aget rowInfo "original" "Bond"))
                                  (rf/dispatch [:navigation/active-qs :historical-charts]) (rf/dispatch [:get-historical-quant-scores (aget rowInfo "original" "ISIN")])))]         ; <---- the name is a span
     ;["Build ticket" (fn [] (prn "my-fn"))]
     ]))

(defn on-click-context [state rowInfo instance]
  (clj->js {:onClick (partial fnevt state rowInfo instance) :style {:cursor "pointer"}}))


(def table-style (reagent/atom "Screener (SVR)"))

(def qs-table-view (atom nil))

(defn table-style->qs-table-col [table-style]
  (case table-style
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
     {:Header "Rank change" :columns (mapv quant-score-table-columns [:URS_rank_legacy_D1D_2 :URS_rank_legacy_D1W_2 :URS_rank_legacy_D1M_2])}]
    "New"
    [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR])}
     {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
     {:Header "Model outputs" :columns (mapv quant-score-table-columns [:predicted_spread_new_2 :difference_new_2 :URV_new_2 :HRV_new_2 :implied_rating_new_2])}
     {:Header "Ranking" :columns (mapv quant-score-table-columns [:URS_rank_new_2 :URS_rank_new_1D_2 :URS_rank_new_1W_2 :URS_rank_new_1M_2])}
     {:Header "Rank change" :columns (mapv quant-score-table-columns [:URS_rank_new_D1D_2 :URS_rank_new_D1W_2 :URS_rank_new_D1M_2])}]
    "SVR"
    [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR])}
     {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
     {:Header "Model outputs" :columns (mapv quant-score-table-columns [:predicted_spread_svr_2 :difference_svr_2 :URV_svr_2 :HRV_svr_2 :implied_rating_svr_2])}
     {:Header "Ranking" :columns (mapv quant-score-table-columns [:URS_rank_svr_2 :URS_rank_svr_1D_2 :URS_rank_svr_1W_2 :URS_rank_svr_1M_2])}
     {:Header "Rank change" :columns (mapv quant-score-table-columns [:URS_rank_svr_D1D_2 :URS_rank_svr_D1W_2 :URS_rank_svr_D1M_2])}]
    "Upside/Downside"
    [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR-WIDE :HYBRID-WIDE :cembi :cembi-ig])}
     {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration])}
     {:Header "Target returns (%)" :columns (mapv quant-score-table-columns [:upside1y :expected1y :downside1y])}
     {:Header "260d Z-spreads" :columns (mapv quant-score-table-columns [:z1ymin :z1ymedian :z1ymax :z1yvalid])}]
    "Screener (SVR)"
    [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR-WIDE :HYBRID-WIDE :ESG :AMT_OUTSTANDING_3 :COUPON])}
     {:Header "Index inclusion" :columns (mapv quant-score-table-columns [:cembi :cembi-ig :embi :embi-ig :us-agg :global-agg])}
     {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
     {:Header "Model outputs" :columns (mapv quant-score-table-columns [:predicted_spread_svr_2 :difference_svr_2 :implied_rating_svr_2 :difference_svr_2_2d])}]
    )
  )

(defn qs-table [mytitle data]
     [v-box :class "element"  :gap "20px" :width "1640px"
      :children [[title :label mytitle :level :level1]
                 [h-box :align :center :gap "20px"
                  :children (concat (into [] (for [c ["Summary" "Full" "Legacy" "New" "SVR" "Upside/Downside" "Screener (SVR)"]]
                                               ^{:key c}    ;; key should be unique among siblings
                                               [radio-button
                                                :label c
                                                :value c
                                                :model table-style
                                                :on-change #(reset! table-style %)]))
                                    [[gap :size "1"]
                                     [md-circle-icon-button :md-icon-name "zmdi-filter-list" :tooltip "Download current view" :on-click #(t/react-table-to-csv @qs-table-view "quant-model-output"  (mapv :accessor (apply concat (map :columns (table-style->qs-table-col @table-style)))))] ;
                                     [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download full model" :on-click #(t/csv-link data "quant-model-output")]]
                                    )]
                 [:> ReactTable
                  {:data                data
                   :columns             (table-style->qs-table-col @table-style)
                   :showPagination      true
                   :defaultPageSize     15
                   :pageSizeOptions     [15 25 50 100]
                   :filterable          true
                   :ref                 #(reset! qs-table-view %)
                   :defaultFilterMethod tables/case-insensitive-filter
                   :getTrProps          on-click-context
                   :className           "-striped -highlight"}]]])

(def calculator-sector (r/atom "Oil & Gas"))
(def calculator-country (r/atom "BR"))
(def calculator-duration (r/atom "9.0"))
(def calculator-rating (r/atom "13"))
(def show-bond-labels (r/atom true))
(def chart-other-countries (r/atom false))
(def chart-rating-neighbours (r/atom false))
(def chart-country-neighbours (r/atom false))
(def show-duration-modal (r/atom false))

(defn get-implied-rating [txt]
  (if-let [x (first (first (filter #(= (subs (second %) 0 2) (if (= 1 (count txt)) (str "0" txt) txt)) @(rf/subscribe [:rating-to-score]))))] (name x) "error"))

(def performance-colors ["#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E"])
(def performance-colors-harvest ["#134848" "#009D80" "#FDAA94" "#74908D" "#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E"])

(defn comparable-chart [duration legacy new svr table]
  (let [prepare-data (fn [tbl txt] (for [line tbl] {:field txt :duration (line :Used_Duration) :spread (line :Used_ZTW) :txt (line :Bond)}))
        rating-score (cljs.reader/read-string @calculator-rating)
        other (str "Other " (get-implied-rating (str rating-score)))
        other-country (str "Other " @calculator-country " " (get-implied-rating (str rating-score)))
        rating-up (get-implied-rating (str (inc rating-score)))
        rating-dw (get-implied-rating (str (dec rating-score)))
        qmt @(rf/subscribe [:quant-model/model-output])
        data
        (concat
          (prepare-data table "comp")
          [{:field "legacy" :duration duration :spread legacy :txt "legacy"}
           {:field "new" :duration duration :spread new :txt "new"}
           {:field "svr" :duration duration :spread svr :txt "svr"}]
          ;(filter #(and (= (:Sector %) @calculator-sector) (= (:Used_Rating_Score %) rating-score) (not= (:Country %) @calculator-country)) @(rf/subscribe [:quant-model/model-output]))
          ;(t/chainfilter {:Sector @calculator-sector :Used_Rating_Score rating-score :Country #(not= % @calculator-country)})
          (if @chart-other-countries    (prepare-data (t/chainfilter {:Sector @calculator-sector :Used_Rating_Score rating-score :Country #(not= % @calculator-country)} qmt) other))
          (if @chart-rating-neighbours  (prepare-data (t/chainfilter {:Sector @calculator-sector :Used_Rating_Score (inc rating-score)} qmt) rating-up))
          (if @chart-rating-neighbours  (prepare-data (t/chainfilter {:Sector @calculator-sector :Used_Rating_Score (dec rating-score)} qmt) rating-dw))
          (if @chart-country-neighbours (prepare-data (t/chainfilter {:Country @calculator-country :Used_Rating_Score rating-score :Sector #(not= % @calculator-sector)} qmt) other-country))
          ;(if @chart-other-countries (prepare-data (filter #(and (= (:Sector %) @calculator-sector) (= (:Used_Rating_Score %) rating-score) (not= (:Country %) @calculator-country)) qmt) other))
          ;(if @chart-rating-neighbours (prepare-data (filter #(and (= (:Sector %) @calculator-sector) (= (:Used_Rating_Score %) (inc rating-score))) qmt) rating-up))
          ;(if @chart-rating-neighbours (prepare-data (filter #(and (= (:Sector %) @calculator-sector) (= (:Used_Rating_Score %) (dec rating-score))) qmt) rating-dw))
          ;(if @chart-country-neighbours (prepare-data (filter #(and (= (:Country %) @calculator-country) (= (:Used_Rating_Score %) rating-score) (not= (:Sector %) @calculator-sector)) qmt) other-country))

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
                                       :text {:field "txt" :type "nominal"}}}]))
         :width  1000
         :height 500}]
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
      :showPagination false :pageSize 4 :filterable false}]))

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
                                                                                     [h-box :gap "10px" :children [[label :width "130px" :label "Duration"] [gap :size "50px"] [label :width "100px" :label "Rating score"] [label :width "100px" :label "Rating"]]]
                                                                                     [h-box :gap "10px" :align :center :children [[input-text :width "100px" :model calculator-duration :on-change #(do (reset! calculator-duration %) (rf/dispatch [:quant-model/calculator-spreads nil]))]
                                                                                                                                  [box :width "20px" :child [md-circle-icon-button :md-icon-name "zmdi-help" :size :smaller :on-click #(reset! show-duration-modal true)]]
                                                                                                                                  [gap :size "50px"]
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

(def typeahead-model (atom nil))

(defn spot-chart []
  (let [data @(rf/subscribe [:quant-model/model-output])
        issuer-choices (into [] (map (fn [i] {:id i :label i}) (sort (distinct (map :Ticker data)))))
        ]
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
                      [                                     [gap :size "10px"]
                       [title :label "Rating curves" :level :level3]
                       [selection-list :model spot-chart-rating-choice :choices (into [] (map (fn [i] {:id i :label (get-implied-rating (str i))}) (range 2 19))) :on-change #(reset! spot-chart-rating-choice %)]]))
          ]
         [v-box :gap "0px" :width "150px" :children
          [[title :label "Issuers" :level :level3]
           [selection-list :model spot-chart-issuer-choice :width "100%" :height "460px" :choices issuer-choices :on-change #(reset! spot-chart-issuer-choice %)]
           [gap :size "10px"]
           [typeahead
            :width "100%"
            :model typeahead-model
            :data-source (fn [s] (into [] (take 4 (for [n issuer-choices :when (re-find (re-pattern (str "(?i)" s)) (:label n))] n))))
            :render-suggestion (fn [{:keys [label]}] [:span [:i {:style {:width "40px"}}] label])
            :suggestion-to-string (fn [_] "")              ;#(:name %)
            :placeholder "Or search here"
            :on-change #(swap! spot-chart-issuer-choice (if (contains? @spot-chart-issuer-choice (:id %)) disj conj) (:id %))
            :change-on-blur? true :immediate-model-update? false :rigid? false :disabled? false]]]

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
                [qs-table (str (dec (count comparables)) " bonds scoring better") comparables]]]))

(defn duration-grouping-fn
  [m]
  (let [duration (:Used_Duration m)]
    (condp >= duration
      3 "0-3Y"
      5 "3-5Y"
      7 "5-7Y"
      10 "7-10Y"
      100 "10Y+"
      "uncategorized")))

(def top-bottom-ignore-subs? (r/atom false))
(def top-bottom-ignore-sovs? (r/atom true))
(def top-bottom-how-many (r/atom 3))

(defn top-bottom-str [this]
  (let [coll (js->clj (aget this "value"))]
    (r/as-element
      [v-box :children (mapv (fn [line]
                               [label
                                :style {:color (if (pos? (get-in line ["difference_svr"])) "darkgreen" "darkred")}
                                :label (str (get-in line ["Bond"]) " (" (Math/round (get-in line ["difference_svr"])) ")")]) coll)])))

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
                  (sort-by #(.indexOf ["0-3Y" "3-5Y" "5-7Y" "7-10Y" "10Y+"] (:duration-bucket %))))]
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
                                               {:Header "C" :accessor "LRG6" :width 200 :Cell top-bottom-str}]
                              :showPagination false :pageSize 6 :sortable false :filterable false}]]]]]))


(defn universe-str [this]
  (let [coll (js->clj (aget this "value"))]
    (r/as-element (if (= coll [0 0 0]) [p "-"]
                                     [v-box :children [[label :label (str (first coll) " issuers")]
                                                       [label :label (str (second coll) " bonds")]
                                                       [label :label (str (gstring/format "%.1f" (* 0.000000001 (last coll))) " bn $")]]]))))

(defn cntry-translate [this]
  (let [cntry (js->clj (aget this "value"))]
    (r/as-element (if (= cntry "Total") "Total" (:LongName (first (filter #(= (:CountryCode %) cntry) @(rf/subscribe [:country-codes]))))))))

(defn cntry-translate-sub [code] (if (= code "Total") "Total" (:LongName (first (filter #(= (:CountryCode %) code) @(rf/subscribe [:country-codes]))))))

;Navigation for universe overview
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def universe-ignore-sovs-govts? (r/atom true))
(def universe-hyigall (r/atom :all))                        ;one of :all :ig :hy
(def statistics (r/atom :stats))                           ;one of :stats :d4 :d2
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn country-display-fn [this]
  (let [country (aget this "value")]
    (r/as-element
      [v-box :children [[label :label country]
                        (if (or (= country "Total") (= country "Supranational")) [p ""] [:img {:src (str "assets/png100px/" (.toLowerCase (aget this "row" "_original" "code")) ".png")}])]])))

(defn universe-overview []
  (let
    [source-data @(rf/subscribe [:quant-model/model-output])
     market-cap (fn [lines] (reduce + (remove nil? (map :AMT_OUTSTANDING (filter (fn [line] (some #{(:CRNCY line)} ["USD" "EUR" "GBP"])) lines)))))
     ;qvalue (fn [lines] (reduce + (remove nil? (map))))
     data (filter (fn [line] (and
                             (if @universe-ignore-sovs-govts? (not (some #{(:Sector line)} ["Sovereign" "Government"])) true)
                             (case @universe-hyigall :all true :ig (<= (:Used_Rating_Score line) 10) :hy (> (:Used_Rating_Score line) 10))))
                  source-data)
     dsec (sort (distinct (map :Sector data)))
     cgrp (group-by :Country data)
     res (into [(merge
                  (into {:Country "Total" :code "Total"} (for [s dsec] (let [bonds (filter #(= (:Sector %) s) data)] [s [(count (distinct (map :Ticker bonds))) (count bonds) (market-cap bonds)]])))
                  {"Total" [(count (distinct (map :Ticker data))) (count data) (market-cap data)]})]
               (for [[c grp] (sort-by first cgrp)]
                 (merge
                   (into {:Country (cntry-translate-sub c) :code c} (for [s dsec] (let [bonds (filter #(= (:Sector %) s) grp)] [s [(count (distinct (map :Ticker bonds))) (count bonds) (market-cap bonds)]])))
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
                              :columns        (concat [{:Header "Country" :accessor "Country" :width col-width :Cell country-display-fn :filterable true :filterMethod tables/case-insensitive-filter}]
                                                      (mapv (fn [s] {:Header s :accessor s :width col-width :Cell universe-str  :filterable false}) dsec)
                                                      [{:Header "Total" :accessor "Total" :width col-width :Cell universe-str :filterable false}])
                              :showPagination true :showPageSizeOptions true :pageSizeOptions [6 10 20] :defaultPageSize 6}]]]]]))

(defn duration-modal []
  (let [maturity (r/atom nil)
        coupon (r/atom nil)]
    (fn []
      (if @show-duration-modal
        [modal-panel
         :wrap-nicely? true
         :backdrop-on-click #(reset! show-duration-modal false)
         :child [v-box :gap "10px" :align :center :children
                 [[title :label "Calculate modified duration" :level :level2]
                  [input-text :width "200px" :model maturity :placeholder "Maturity in years" :on-change #(reset! maturity %)]
                  [input-text :width "200px" :model coupon :placeholder "Coupon in %" :on-change #(reset! coupon %)]
                  [label :label "Assumes semi-annual coupons"]
                  [button :label "OK" :on-click #(do
                                                   (reset! calculator-duration
                                                           (str (/ (Math/round (* 100 (t/semi-bond-modified-duration
                                                                                        (cljs.reader/read-string @maturity)
                                                                                        (/ (cljs.reader/read-string @coupon) 100)))) 100)))
                                                   (reset! show-duration-modal false))]]]]))))


(defn quant-isin-history-chart [cheapness? spread? universe? historical? rating?]
  (let [data @(rf/subscribe [:quant-model/isin-history])]
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :title   nil                                           ;(str @(rf/subscribe [:single-bond-trade-history/bond]) " trading history")
     :data    {:values data :format {:parse {:Date "date:'%Y%m%d'" :HRS_legacy "quantitative" :REH_legacy "quantitative" :HCS "quantitative" :URS_legacy "quantitative" :Median_Rating "quantitative"}}}
     :vconcat (remove nil? [
                            (if cheapness?
                              {:mark "line" :width 800 :height 400
                               :encoding {:x {:field "Date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y {:field "REH_legacy" :type "quantitative" :axis {:title "Cheapness (bps)"}}}})
                            (if spread?
                              {:mark "line" :width 800 :height 400
                               :encoding {:x {:field "Date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y {:field "HCS" :type "quantitative" :axis {:title "Z-spread"}}}})
                            (if universe?
                              {:mark "line" :width 800 :height 400
                               :encoding {:x {:field "Date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y {:field "URS_legacy" :type "quantitative" :axis {:title "Universe"}}}})
                            (if historical?
                              {:mark "line" :width 800 :height 400
                               :encoding {:x {:field "Date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y {:field "HRS_legacy" :type "quantitative" :axis {:title "Historical"}}}})
                            (if rating?
                              {:mark "line" :width 800 :height 400
                               :encoding {:x {:field "Date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y {:field "Median_Rating" :type "quantitative" :scale {:domain [(dec (apply min (map :Median_Rating data))) (inc (apply max (map :Median_Rating data)))]} :axis {:title "Rating"}}}})
                            ])}))


(defn qs-historical-charts []
  (let [source-data @(rf/subscribe [:quant-model/model-output])
        bond-choices (into [] (map (fn [i] {:id i :label i}) (sort (distinct (map :Bond source-data)))))]
    [v-box :padding "80px 10px" :class "rightelement" :gap "20px"
     :children [[v-box :class "element" :gap "20px" :width "1620px"
                 :children [[title :level :level1 :label "Historical charts"]
                            [h-box :gap "100px" :align :start
                             :children [[v-box :gap "10px" :children
                                         [[checkbox :model show-historical-cheapness  :label "Show cheapness?"        :on-change #(reset! show-historical-cheapness %)]
                                          [checkbox :model show-historical-spreads    :label "Show spreads?"          :on-change #(reset! show-historical-spreads %)]
                                          [checkbox :model show-universe-scores       :label "Show universe score?"   :on-change #(reset! show-universe-scores %)]
                                          [checkbox :model show-historical-scores     :label "Show historical score?" :on-change #(reset! show-historical-scores %)]
                                          [checkbox :model show-rating-history        :label "Show rating history?"   :on-change #(reset! show-rating-history %)]
                                          [gap :size "30px"]
                                          [label :width "200px" :label (str @bond-historical-charts " " @isin-historical-charts)]
                                          [typeahead
                                           :width "200px"
                                           :model typeahead-bond-nickname
                                           :data-source (fn [s] (into [] (take 8 (for [n bond-choices :when (re-find (re-pattern (str "(?i)" s)) (:label n))] n))))
                                           :render-suggestion (fn [{:keys [label]}] [:span [:i {:style {:width "40px"}}] label])
                                           :suggestion-to-string (fn [_] "")              ;#(:name %)
                                           :placeholder "Search here"
                                           :on-change #(do (let [isin (:ISIN (first (filter (fn [line] (= (:Bond line) (:id %))) source-data)))]
                                                             (reset! isin-historical-charts isin)
                                                             (reset! bond-historical-charts (:id %))
                                                             (rf/dispatch [:get-historical-quant-scores isin])))
                                           :change-on-blur? true :immediate-model-update? false :rigid? true :disabled? false]]]
                                        [oz/vega-lite (quant-isin-history-chart @show-historical-cheapness @show-historical-spreads @show-universe-scores @show-historical-scores @show-rating-history)]]]]]]]))

;;; HARVEST UNIVERSE STUFF ;;;
(def exclude-outliers? (r/atom true))
(def exclude-chinaHK? (r/atom false))
(def harvest-filters (r/atom {1 :LongCountry 2 :Sector 3 "None"}))

(def harvest-table-ref (r/atom nil))

(defn harvest-table []
  (let [source-data @(rf/subscribe [:quant-model/model-output])
        data (->> source-data
                  (filter (fn [line] (and
                                       (if @universe-ignore-sovs-govts? (not (some #{(:Sector line)} ["Sovereign" "Government"])) true)
                                       (case @universe-hyigall :all true :ig (<= (:Used_Rating_Score line) 10) :hy (> (:Used_Rating_Score line) 10))
                                       (if @exclude-outliers? (< -200 (:difference_svr_2d line) 200) true)
                                       (if @exclude-chinaHK? (not (some #{(:Country line)} ["CN" "HK"])) true))))
                  (map #(assoc % :LongCountry (cntry-translate-sub (:Country %))
                                 :DurationGroup (duration-grouping-fn %)
                                 :StringRating (get-implied-rating (str (:Used_Rating_Score %)))
                                 :gross_4d_value_pos (if (pos? (:gross_4d_value %)) (:gross_4d_value %) 0)
                                 :gross_2d_value_pos (if (pos? (:gross_2d_value %)) (:gross_2d_value %) 0)
                                 :gross_4d_value_neg (if (neg? (:gross_4d_value %)) (:gross_4d_value %) 0)
                                 :gross_2d_value_neg (if (neg? (:gross_2d_value %)) (:gross_2d_value %) 0))))
        total-line (merge {:LongCountry "Total" :StringRating "Total" :Sector "Total" :Bond "Total" :DurationGroup "Total"}
                          (into {} (for [k [:gross_4d_value :gross_2d_value :gross_4d_value_pos :gross_2d_value_pos :gross_4d_value_neg :gross_2d_value_neg :AMT_OUTSTANDING]] [k (reduce + (map k data))]))
                          {:difference_svr (tables/median (map :difference_svr data)) :difference_svr_2d (tables/median (map :difference_svr_2d data))})
        display (map
                  #(assoc % :gross_4d_value_pos_pct (/ (:gross_4d_value_pos %) (:gross_4d_value_pos total-line))
                           :gross_2d_value_pos_pct (/ (:gross_2d_value_pos %) (:gross_2d_value_pos total-line)))
                  (conj data total-line))
        risk-choices (let [rfil @harvest-filters] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :Bond))] (quant-score-table-columns r)))
        accessors (mapv :accessor grouping-columns)]
    [:> ReactTable
     {:data                display
      :columns             [{:Header "Groups" :columns (mapv #(assoc % :width 125) grouping-columns)}
                            {:Header "Stock" :columns (mapv quant-score-table-columns [:AMT_OUTSTANDING_2])}
                            {:Header "Median cheapness" :columns (mapv #(assoc % :filterable false) (mapv quant-score-table-columns [:difference_svr_2 :difference_svr_2_2d]))}
                            {:Header "Gross value ($ bn)" :columns (mapv #(assoc % :filterable false) (mapv quant-score-table-columns [:gross_4d_value :gross_2d_value]))}
                            {:Header "Gross negative value ($ bn)" :columns (mapv #(assoc % :filterable false) (mapv quant-score-table-columns [:gross_4d_value_neg :gross_2d_value_neg]))}
                            {:Header "Gross positive value ($ bn)" :columns (mapv #(assoc % :filterable false) (mapv quant-score-table-columns [:gross_4d_value_pos :gross_2d_value_pos]))}
                            {:Header "Gross positive value %" :columns (mapv #(assoc % :filterable false) (mapv quant-score-table-columns [:gross_4d_value_pos_pct :gross_2d_value_pos_pct]))}]
      :showPagination      false
      :sortable            true
      :defaultSorted              [{:id :gross_2d_value_pos_pct :desc true}]
      :filterable          false
      :ref                 #(reset! harvest-table-ref %)
      :pageSize            (count (distinct (map (keyword (first accessors)) display))) ;(inc (count display))
      :showPageSizeOptions false
      :className           "-striped -highlight"
      :pivotBy             accessors
      }]))

(def dropdown-width "150px")

(defn filtering-row []
  (into [] (for [i (range 1 4)] [single-dropdown :width dropdown-width :model (r/cursor harvest-filters [i]) :choices static/quant-harvest-choice-map :on-change #(r/rswap! harvest-filters assoc i %)])))

(defn add-mid-points [sd]
  (let [points (conj (reductions + (map :value sd)) 0.0)
        mids (map #(* 0.5 (+ %1 %2)) (rest points) (drop-last points))]
    (map #(assoc %1 :mid %2) sd mids)))

(defn get-harvest-bar-plot-data [harvest]
  (if harvest
    (let [data (js->clj (. (.getResolvedState harvest) -sortedData))
          top5 (take 7 (rest (map #(select-keys % ["_pivotVal" "gross_4d_value_pos_pct" "gross_2d_value_pos_pct"]) data)))
          addrest (conj (vec top5) {"_pivotVal" "Rest" "gross_4d_value_pos_pct" (- 1 (reduce + (map #(get % "gross_4d_value_pos_pct") top5))) "gross_2d_value_pos_pct" (- 1 (reduce + (map #(get % "gross_2d_value_pos_pct") top5)))})
          d2 (add-mid-points (map (fn [line] {:performance "2D" :value (get line "gross_2d_value_pos_pct") :group (get line "_pivotVal")}) addrest))
          d4 (add-mid-points (map (fn [line] {:performance "4D" :value (get line "gross_4d_value_pos_pct") :group (get line "_pivotVal")}) addrest))]
      (concat d4 d2))))

(defn stacked-vertical-bars [data]
  (let [groups (distinct (mapv :group data))
        colors (take (count (distinct (mapv :group data))) performance-colors-harvest)
        new-data (mapv #(assoc %1 :order (.indexOf groups (:group %1))) data)]
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :data    {:values new-data},
     :width   800,
     :height  600,
     :layer
              [{:mark "bar",
                :scale {:padding-left 60}
                :encoding
                {:x     {:field "performance", :type "nominal",
                         :axis {:title nil :labelFontSize 12 :labelAngle 0}
                         :sort (distinct (mapv :performance data))
                         :scale {:paddingInner 0.5}},
                 :y     {:field "value", :type "quantitative", :axis {:title nil :labelFontSize 12}},
                 :order {:field "order", :type "quantitative"}
                 :color {:field "group", :type "nominal", :scale {:domain (distinct (map :group new-data)) :range colors} :legend nil}}}
               {:mark {:type "text" :fontSize 12 :color "white"},
                :encoding
                      {:x    {:field "performance", :type "nominal", :axis {:title nil}, :sort (distinct (mapv :performance data))},
                       :y    {:field "mid", :type "quantitative"},
                       :text {:field "group", :type "nominal"}}}]}))

(defn get-harvest-scatter-plot-data [harvest]
  (if harvest
    (let [data (js->clj (. (.getResolvedState harvest) -sortedData))
          slice (remove #(= (get % "_pivotVal") "Total") (map #(select-keys % ["_pivotVal" "gross_4d_value" "gross_2d_value" "gross_4d_value_pos" "gross_2d_value_pos"]) data))
          net (into [] (for [s slice] {:txt (get s "_pivotVal") :d2 (get s "gross_2d_value") :d4 (get s "gross_4d_value") :field "Net value"}))
          positive (into [] (for [s slice] {:txt (get s "_pivotVal") :d2 (get s "gross_2d_value_pos") :d4 (get s "gross_4d_value_pos") :field "Positive value"}))
          ]
      (->> (concat net positive (map (fn [i] {:txt "" :r1 (/ i 100.)}) (range -100 101)))                           ;(map #({:r1 (/ % 100.)}) (range 0 101))
           (map #(update % :d2 / 1000000000))
           (map #(update % :d4 / 1000000000))
           ))))

(defn scatter-harvest-spec [data]
  {:title nil
   :data  {:values data}
   :transform [{:calculate "sin(datum.r1 * PI)", :as "x"} {:calculate "cos(datum.r1 * PI)", :as "y"} {:calculate "2 * sin(datum.r1 * PI)", :as "x2"} {:calculate "2 * cos(datum.r1 * PI)", :as "y2"}]
   :layer (concat [{:mark     {:type "point" :filled true}
                    :encoding {:x       {:field "d2" :type "quantitative" :axis {:title "2D: rating bucket" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}} ;:scale {:domain [0. (inc (apply max (map d2 data)))]}
                               :y       {:field "d4" :type "quantitative" :axis {:title "4D: curve fair value" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}}
                               :color   {:field "field" :scale {:domain ["Net value" "Positive value"] :range ["#FDAA94" "#026E62"]} :legend {:labelFontSize 14 :title nil}} ;"#134848" "#009D80" ""
                               :tooltip [{:field "txt" :type "nominal" :title "Item"}
                                         {:field "d2" :type "quantitative", :title "2D value"}
                                         {:field "d4" :type "quantitative", :title "4D value"}]}}]
                    [{:mark     {:type "text" :dx 6 :align "left"}
                      :encoding {:x    {:field "d2" :type "quantitative"}
                                 :y    {:field "d4" :type "quantitative"}
                                 :text {:field "txt" :type "nominal"}}}]
                  [{:mark "line"
                    :encoding {:x {:field "x" :type "quantitative"}
                               :y {:field "y" :type "quantitative"}
                               :order {:field "r1", :type "quantitative"}
                               :color {:value "lightgrey"}
                               }}]
                  [{:mark "line"
                    :encoding {:x {:field "x2" :type "quantitative"}
                               :y {:field "y2" :type "quantitative"}
                               :order {:field "r1", :type "quantitative"}
                               :color {:value "lightgrey"}
                               }}]
                  )
   :width  1000
   :height 500}
  )

(defn universe-harvest []
  [box :class "subbody rightelement" :child
   [v-box :class "element" :align-self :center :justify :center :gap "20px"
    :children [[title :label "Universe harvest" :level :level1]
               [h-box :gap "50px"
                :children [[v-box :gap "10px"
                            :children [[h-box :gap "10px"
                                        :children [[checkbox :model universe-ignore-sovs-govts? :label "Ignore sovereigns and provinces?" :on-change #(reset! universe-ignore-sovs-govts? %)] [gap :size "20px"]
                                                   [checkbox :model exclude-outliers? :label "Exclude outliers (>200bps on 2D)?" :on-change #(reset! exclude-outliers? %)] [gap :size "20px"]
                                                   [checkbox :model exclude-chinaHK? :label "Exclude China & HK?" :on-change #(reset! exclude-chinaHK? %)]]]
                                       [h-box :gap "10px" :align :center
                                        :children (into [] (concat [[radio-button :model universe-hyigall :label "All bonds" :value :all :on-change #(reset! universe-hyigall %)]
                                                                    [radio-button :model universe-hyigall :label "IG only" :value :ig :on-change #(reset! universe-hyigall %)]
                                                                    [radio-button :model universe-hyigall :label "HY only" :value :hy :on-change #(reset! universe-hyigall %)]]
                                                                   [[gap :size "20px"] [title :label "Filter:" :level :level3]] (filtering-row)))]]]]]
               [harvest-table]
               [gap :size "20px"]
               [title :label "Gross positive contribution" :level :level1]
               (if-let [d (get-harvest-bar-plot-data @harvest-table-ref)] [oz/vega-lite (stacked-vertical-bars d)] [p ""])
               [gap :size "20px"]
               [title :label "Net vs positive gross contribution" :level :level1]
               (if-let [d (get-harvest-scatter-plot-data @harvest-table-ref)] [oz/vega-lite (scatter-harvest-spec d)] [p ""])
               [gap :size "20px"]
               [title :label "Outliers" :level :level1]
               [:> ReactTable
                {:data           (filter (fn [line] (>= (Math/abs (:difference_svr_2d line)) 200)) @(rf/subscribe [:quant-model/model-output]))
                 :columns        [{:Header "Groups" :columns (mapv #(assoc % :width 125) (mapv quant-score-table-columns [:Bond :Country :Sector ]))}
                                  {:Header "Stock" :columns (mapv quant-score-table-columns [:AMT_OUTSTANDING_2])}
                                  {:Header "Cheapness" :columns (mapv #(assoc % :filterable false) (mapv quant-score-table-columns [:difference_svr_2 :difference_svr_2_2d]))}]
                 :showPagination true :sortable true :defaultSorted [{:id :difference_svr_2d :desc true}] :pageSize 20 :className "-striped -highlight"}]]]])

;;; END HARVEST UNIVERSE STUFF ;;;

(rf/reg-event-db :quant-model/new-bond-entry (fn [db [_ k v]] (assoc-in db [:quant-model/new-bond-entry k] v)))

(rf/reg-event-fx
  :quant-model-new-bond/check-isin
  (fn [{:keys [db]} [_ isin]]
    (let [ISIN (.toUpperCase isin)]
      {:http-get-dispatch {:url (str static/server-address "quant-model-new-bond-check?ISIN=" ISIN) :dispatch-key [:quant-model/new-bond-entry-result]}
       :db (-> db (assoc :quant-model/new-bond-tested false
                         :quant-model/new-bond-already-exists false
                         :quant-model/new-bond-entry {:ISINREGS ISIN :JPM_SECTOR nil :CNTRY_OF_RISK nil :NAME nil}))})))

(rf/reg-event-db
  :quant-model/new-bond-entry-result
  (fn [db [_  data]]
    (-> db
        (assoc :quant-model/new-bond-static-data data :quant-model/new-bond-tested true :quant-model/new-bond-already-exists (:already-exists data))
        (assoc-in [:quant-model/new-bond-entry :NAME] (if-let [x (get-in data [:static :SECURITY_NAME])] x ""))
        (assoc-in [:quant-model/new-bond-entry :CNTRY_OF_RISK] (get-in data [:static :CNTRY_OF_RISK]))
        (assoc-in [:quant-model/new-bond-entry :JPM_SECTOR] (if-let [x (get-in data [:static :JPM_SECTOR])] x "")))))


(defn save-new-bond-impossible []
  (or (nil? (:JPM_SECTOR @(rf/subscribe [:quant-model/new-bond-entry])))
      (= (:JPM_SECTOR @(rf/subscribe [:quant-model/new-bond-entry])) "")
      (nil? (:NAME @(rf/subscribe [:quant-model/new-bond-entry])))))

(defn new-bond-entry []
  (let [new-bond (rf/subscribe [:quant-model/new-bond-entry])
        isinregs (r/cursor new-bond [:ISINREGS])
        name     (r/cursor new-bond [:NAME])
        sector   (r/cursor new-bond [:JPM_SECTOR])
        country  (r/cursor new-bond [:CNTRY_OF_RISK])
        new-bond-tested @(rf/subscribe [:quant-model/new-bond-tested])
        hb (fn [v] [h-box  :gap "10px" :align :center :children v])]
     [v-box :width "400px" :gap "10px" :class "element"
      :children [[title :label "Add bond to universe" :level :level1]
                 [hb [[label :width "100px" :label "REGS ISIN"] [input-text :width "250px" :model isinregs :on-change #(rf/dispatch [:quant-model/new-bond-entry :ISINREGS %])]]]
                 [hb [(if new-bond-tested
                        [button :style {:width "360px"} :label "Check Bloomberg!" :on-click #(rf/dispatch [:quant-model-new-bond/check-isin @isinregs])]
                        [throbber :size :small])]]
                 [hb [[label :width "100px" :label "Name"][input-text :width "250px" :model name :on-change #(rf/dispatch [:quant-model/new-bond-entry :NAME %])]]]
                 [hb [[label :width "100px" :label "JPM sector"][single-dropdown :width "250px" :model sector :choices (into [] (for [x @(rf/subscribe [:jpm-sectors])] {:id x :label x})) :filter-box? true :on-change #(rf/dispatch [:quant-model/new-bond-entry :JPM_SECTOR %])]]]
                 [hb [[label :width "100px" :label "Country"][single-dropdown :width "250px" :model country :choices (mapv #(clojure.set/rename-keys % {:CountryCode :id :LongName :label}) @(rf/subscribe [:country-codes])) :filter-box? true :on-change #(rf/dispatch [:quant-model/new-bond-entry :CNTRY_OF_RISK %])]]]
                 [hb [(if @(rf/subscribe [:quant-model/new-bond-already-exists])
                        [label :label "Can't save, bond already in database."]
                        [button :style {:width "360px"} :label "Save to bond universe!" :disabled? (save-new-bond-impossible)
                         :on-click #(rf/dispatch [:quant-model-new-bond/save-to-bond-universe @new-bond])])]]]]))

(defn add-bonds [] [box :padding "80px 10px" :class "rightelement" :child [new-bond-entry]])

(defn active-home []
  (let [active-qs @(rf/subscribe [:navigation/active-qs])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-qs
      :table              [qs-table-container]
      :calculator         [calculator-controller]
      :spot-charts        [spot-chart]
      :historical-charts  [qs-historical-charts]
      :top-bottom         [top-bottom]
      :trade-finder       [trade-finder]
      :universe-des       [universe-overview]
      :universe-harvest   [universe-harvest]
      :add-bonds          [add-bonds]
      :methodology        [methodology]
      [:div.output "nothing to display"])))


(defn view []
  [h-box :gap "10px" :padding "0px" :children [[nav-qs-bar] [active-home] [duration-modal] [rcm/context-menu]]])
