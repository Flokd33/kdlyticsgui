(ns jasminegui.qs.qstables
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

(defn get-implied-rating [txt]
  (if-let [x (first (first (filter #(= (subs (second %) 0 2) (if (= 1 (count txt)) (str "0" txt) txt)) @(rf/subscribe [:rating-to-score]))))] (name x) "error"))

;(defn rating-score-to-txt [this]
;  (r/as-element
;    [:span
;     (if-let [x (aget this "value")]
;       (if (number? x)
;         (nth ["AAA" "AA+" "AA" "AA-" "A+" "A" "A-" "BBB+" "BBB" "BBB-" "BB+" "BB" "BB-" "B+" "B" "B-" "CCC+" "CCC" "CCC-"] (dec x))
;         "NR")
;       "NR")]))


(defn esg-span [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div [:span {:title (clojure.string/join " " [(if (.includes x "G") "Green")
                                                     (if (.includes x "S") "Social")
                                                     (if (.includes x "T") "Sustainable")
                                                     (if (.includes x "L") "Sutainability-linked")])} x]]
      "-")))

;(defn model-weight-input-cell
;  [this]
;  (if (= @(rf/subscribe [:model-portfolios/hide-zeros]) "Build")
;    (r/as-element
;      [input-text
;       :width "50px"
;       :model (r/cursor (rf/subscribe [:model-portfolios/weights]) ["ModelOne" (aget this "row" "ISIN")])
;       :on-change #(rf/dispatch [:model-portfolios/weights "ModelOne" (aget this "row" "ISIN") %])])
;    (tables/round1 this)))

(defn model-portfolio-weights-props
  [state rowInfo column]
  (let [default #js {:style #js {:textAlign "right"}}]
    (if (some? rowInfo)
      (let [objective (aget rowInfo "row" (str (aget column "id") "-objective"))
            value (aget rowInfo "row" (aget column "id"))]
        (if (and (number? value) (not (zero? value)))
          (case objective
            "Active risk" #js {:style #js {:backgroundColor "lightgreen" :textAlign "right"}}
            "Diversifier" #js {:style #js {:backgroundColor "lightsalmon" :textAlign "right"}}
            "For sale" #js {:style #js {:backgroundColor "orangered" :textAlign "right"}}
            default) default)) default)))

(defn bnc
  [header accessor width]
  {:Header header :accessor accessor :width width :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2-if-not0 :filterable true :filterMethod tables/nb-filter-OR-AND})

(def quant-score-table-columns
  {:ISIN                                {:Header "ISIN" :accessor "ISIN" :width 100}
   :Country                             {:Header "Country" :accessor "Country" :width 55}
   :Sector                              {:Header "Sector" :accessor "Sector" :width 80}
   :Ticker                              {:Header "Ticker" :accessor "Ticker" :width 80}
   :Use                                 {:Header "Use" :accessor "Use" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true}
   :Bond                                {:Header "Bond" :accessor "Bond" :width 130}
   :SENIOR                              {:Header "Snr" :accessor "SENIOR" :width 35}
   :SENIOR-WIDE                         {:Header "Senior" :accessor "SENIOR" :width 50 :style {:textAlign "center"}}
   :HYBRID-WIDE                         {:Header "Hybrid" :accessor "HYBRID" :width 50 :style {:textAlign "center"}}
   :INTERNATIONAL_SUKUK                 {:Header "Sukuk" :accessor "INTERNATIONAL_SUKUK" :width 50 :style {:textAlign "center"}}
   :ESG                                 {:Header "ESG" :accessor "ESG" :width 50 :style {:textAlign "center"} :Cell esg-span}
   :MSCI-SCORE                          {:Header "MSCI" :accessor "msci-IVA_COMPANY_RATING" :width 50 :style {:textAlign "center"}}
   :COUPON                              {:Header "Coupon" :accessor "COUPON" :width 55 :style {:textAlign "right"} :filterable true :filterMethod tables/nb-filter-OR-AND}
   :cembi                               {:Header "CEMBI" :accessor "cembi" :width 52 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2-if-not0 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :cembi-ig                            {:Header "CEMBI IG" :accessor "cembi-ig" :width 62 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2-if-not0 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :embi                                {:Header "EMBI" :accessor "embi" :width 52 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2-if-not0 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :embi-ig                             {:Header "EMBI IG" :accessor "embi-ig" :width 62 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2-if-not0 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :us-agg                              {:Header "US agg" :accessor "us-agg" :width 55 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2-if-not0 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :global-agg                          {:Header "Glb agg" :accessor "global-agg" :width 55 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2-if-not0 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :CRNCY                               {:Header "Currency" :accessor "CRNCY" :width 65}
   :Bond-sticky                         {:Header "Bond" :accessor "Bond" :width 130 :className "sticky-rt-column" :headerClassName "sticky-rt-column"}
   :Used_Price                          {:Header "Price" :accessor "Used_Price" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :Rating_String                       {:Header "Rating source" :accessor "Rating_String" :width 110 :filterable true :filterMethod tables/nb-filter-OR-AND-x100}
   :Used_Rating_Score                   {:Header "Rating" :accessor "Used_Rating_Score" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :Used_ZTW                            {:Header "ZTW" :accessor "Used_ZTW" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :G-SPREAD                            {:Header "G" :accessor "G_SPREAD_MID_CALC" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :Used_YTW                            {:Header "YTW" :accessor "Used_YTW" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/yield-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :Used_Duration                       {:Header "Duration" :accessor "Used_Duration" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round1 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :FIRST_SETTLE_DT                     {:Header "Issued" :accessor "FIRST_SETTLE_DT" :width 80 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.0f" 1 %) :filterable true}

   :predicted_spread_legacy_1           {:Header "Legacy" :accessor "predicted_spread_legacy" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_new_1              {:Header "New" :accessor "predicted_spread_new" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_svr_1              {:Header "SVR" :accessor "predicted_spread_svr" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :difference_legacy_1                 {:Header "Legacy" :accessor "difference_legacy" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :difference_new_1                    {:Header "New" :accessor "difference_new" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :difference_svr_1                    {:Header "SVR" :accessor "difference_svr" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_upgrade_legacy_1   {:Header "Legacy" :accessor "predicted_spread_upgrade_legacy" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_upgrade_new_1      {:Header "New" :accessor "predicted_spread_upgrade_new" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_upgrade_svr_1      {:Header "SVR" :accessor "predicted_spread_upgrade_svr" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_downgrade_legacy_1 {:Header "Legacy" :accessor "predicted_spread_downgrade_legacy" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_downgrade_new_1    {:Header "New" :accessor "predicted_spread_downgrade_new" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_downgrade_svr_1    {:Header "SVR" :accessor "predicted_spread_downgrade_svr" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_legacy_1                        {:Header "Legacy" :accessor "URS_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_new_1                           {:Header "New" :accessor "URS_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_svr_1                           {:Header "SVR" :accessor "URS_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRS_legacy_1                        {:Header "Legacy" :accessor "HRS_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRS_new_1                           {:Header "New" :accessor "HRS_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRS_svr_1                           {:Header "SVR" :accessor "HRS_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URV_legacy_1                        {:Header "Legacy" :accessor "URV_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URV_new_1                           {:Header "New" :accessor "URV_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URV_svr_1                           {:Header "SVR" :accessor "URV_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRV_legacy_1                        {:Header "Legacy" :accessor "HRV_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRV_new_1                           {:Header "New" :accessor "HRV_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRV_svr_1                           {:Header "SVR" :accessor "HRV_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}

   :predicted_spread_legacy_2           {:Header "Predicted" :accessor "predicted_spread_legacy" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_new_2              {:Header "Predicted" :accessor "predicted_spread_new" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_svr_2              {:Header "Predicted" :accessor "predicted_spread_svr" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :difference_legacy_2                 {:Header "Delta" :accessor "difference_legacy" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :difference_new_2                    {:Header "Delta" :accessor "difference_new" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :difference_svr_2                    {:Header "Delta" :accessor "difference_svr" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_upgrade_legacy_2   {:Header "Legacy" :accessor "predicted_spread_upgrade_legacy" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_upgrade_new_2      {:Header "New" :accessor "predicted_spread_upgrade_new" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_upgrade_svr_2      {:Header "SVR" :accessor "predicted_spread_upgrade_svr" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_downgrade_legacy_2 {:Header "Legacy" :accessor "predicted_spread_downgrade_legacy" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_downgrade_new_2    {:Header "New" :accessor "predicted_spread_downgrade_new" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :predicted_spread_downgrade_svr_2    {:Header "SVR" :accessor "predicted_spread_downgrade_svr" :width 60 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_legacy_2                        {:Header "Legacy" :accessor "URS_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_new_2                           {:Header "New" :accessor "URS_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_svr_2                           {:Header "SVR" :accessor "URS_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRS_legacy_2                        {:Header "Legacy" :accessor "HRS_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRS_new_2                           {:Header "New" :accessor "HRS_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRS_svr_2                           {:Header "SVR" :accessor "HRS_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URV_legacy_2                        {:Header "Univ." :accessor "URV_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URV_new_2                           {:Header "Univ." :accessor "URV_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URV_svr_2                           {:Header "Univ." :accessor "URV_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRV_legacy_2                        {:Header "Hist." :accessor "HRV_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRV_new_2                           {:Header "Hist." :accessor "HRV_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :HRV_svr_2                           {:Header "Hist." :accessor "HRV_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}

   :FORCE_INCLUSION                     {:Header "Force" :accessor "FORCE_INCLUSION" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round1 :filterable true}
   :AMT_OUTSTANDING                     {:Header "Outstanding" :accessor "AMT_OUTSTANDING" :width 85 :style {:textAlign "right"} :aggregate tables/median :Cell tables/nfcell2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :Price-source                        {:Header "Price" :accessor "Price" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :ZTW-source                          {:Header "ZTW" :accessor "ZTW" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :YTW-source                          {:Header "YTW" :accessor "YTW" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :Duration-source                     {:Header "Duration" :accessor "Duration" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :Rating-source                       {:Header "Rating" :accessor "Rating_Score" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :Override                            {:Header "Override" :accessor "Override" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true}
   :OverrideRating                      {:Header "O. Rating" :accessor "OverrideRating" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true}
   :OverrideValuation                   {:Header "O. Price" :accessor "OverrideValuation" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true}
   :Workout_date                        {:Header "Workout_date" :accessor "Workout_date" :width 100 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :Workout_price                       {:Header "Workout_price" :accessor "Workout_price" :width 100 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :Used_Large_Rating_Score             {:Header "Rating" :accessor "Used_Large_Rating_Score" :width 100 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :avg_rat_grp_diff_legacy_1           {:Header "Legacy" :accessor "avg_rat_grp_diff_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :avg_rat_grp_diff_new_1              {:Header "New" :accessor "avg_rat_grp_diff_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :avg_rat_grp_diff_svr_1              {:Header "SVR" :accessor "avg_rat_grp_diff_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :std_rat_grp_diff_legacy_1           {:Header "Legacy" :accessor "std_rat_grp_diff_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :std_rat_grp_diff_new_1              {:Header "New" :accessor "std_rat_grp_diff_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :std_rat_grp_diff_svr_1              {:Header "SVR" :accessor "std_rat_grp_diff_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :implied_rating_legacy_1             {:Header "Legacy" :accessor "implied_rating_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :implied_rating_new_1                {:Header "New" :accessor "implied_rating_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :implied_rating_svr_1                {:Header "SVR" :accessor "implied_rating_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}

   :URS_rank_legacy_1                   {:Header "Legacy" :accessor "URS_rank_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_1                      {:Header "New" :accessor "URS_rank_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_1                      {:Header "SVR" :accessor "URS_rank_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_1D_1                {:Header "Legacy" :accessor "URS_rank_legacy_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_1D_1                   {:Header "New" :accessor "URS_rank_new_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_1D_1                   {:Header "SVR" :accessor "URS_rank_svr_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_1W_1                {:Header "Legacy" :accessor "URS_rank_legacy_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_1W_1                   {:Header "New" :accessor "URS_rank_new_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_1W_1                   {:Header "SVR" :accessor "URS_rank_svr_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_1M_1                {:Header "Legacy" :accessor "URS_rank_legacy_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_1M_1                   {:Header "New" :accessor "URS_rank_new_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_1M_1                   {:Header "SVR" :accessor "URS_rank_svr_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_D1D_1               {:Header "Legacy" :accessor "URS_rank_legacy_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_D1D_1                  {:Header "New" :accessor "URS_rank_new_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_D1D_1                  {:Header "SVR" :accessor "URS_rank_svr_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_D1W_1               {:Header "Legacy" :accessor "URS_rank_legacy_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_D1W_1                  {:Header "New" :accessor "URS_rank_new_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_D1W_1                  {:Header "SVR" :accessor "URS_rank_svr_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_D1M_1               {:Header "Legacy" :accessor "URS_rank_legacy_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_D1M_1                  {:Header "New" :accessor "URS_rank_new_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_D1M_1                  {:Header "SVR" :accessor "URS_rank_svr_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}

   :URS_rank_legacy_2                   {:Header "Today" :accessor "URS_rank_legacy" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_2                      {:Header "Today" :accessor "URS_rank_new" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_2                      {:Header "Today" :accessor "URS_rank_svr" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_1D_2                {:Header "1D" :accessor "URS_rank_legacy_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_1D_2                   {:Header "1D" :accessor "URS_rank_new_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_1D_2                   {:Header "1D" :accessor "URS_rank_svr_1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_1W_2                {:Header "1W" :accessor "URS_rank_legacy_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_1W_2                   {:Header "1W" :accessor "URS_rank_new_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_1W_2                   {:Header "1W" :accessor "URS_rank_svr_1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_1M_2                {:Header "1M" :accessor "URS_rank_legacy_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_1M_2                   {:Header "1M" :accessor "URS_rank_new_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_1M_2                   {:Header "1M" :accessor "URS_rank_svr_1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_D1D_2               {:Header "1D" :accessor "URS_rank_legacy_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_D1D_2                  {:Header "1D" :accessor "URS_rank_new_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_D1D_2                  {:Header "1D" :accessor "URS_rank_svr_D1D" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_D1W_2               {:Header "1W" :accessor "URS_rank_legacy_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_D1W_2                  {:Header "1W" :accessor "URS_rank_new_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_D1W_2                  {:Header "1W" :accessor "URS_rank_svr_D1W" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_legacy_D1M_2               {:Header "1M" :accessor "URS_rank_legacy_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_new_D1M_2                  {:Header "1M" :accessor "URS_rank_new_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :URS_rank_svr_D1M_2                  {:Header "1M" :accessor "URS_rank_svr_D1M" :width 55 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :implied_rating_legacy_2             {:Header "Implied R" :accessor "implied_rating_legacy" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :implied_rating_new_2                {:Header "Implied R" :accessor "implied_rating_new" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}
   :implied_rating_svr_2                {:Header "Implied R" :accessor "implied_rating_svr" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell nil :filterable true :filterMethod tables/nb-filter-OR-AND}

   :sp_to_sov_legacy                    {:Header "Vs sov" :accessor "sp_to_sov_legacy" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :sp_to_sov_new                       {:Header "Vs sov" :accessor "sp_to_sov_new" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :sp_to_sov_svr                       {:Header "Vs sov" :accessor "sp_to_sov_svr" :width 70 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}

   :gross-cheapness                     {:Header "Gross cheapness" :accessor "gross-cheapness" :style {:textAlign "right"} :aggregate tables/median :Cell tables/nb-thousand-cell-format :filterable true :filterMethod tables/nb-filter-OR-AND}

   :upside1y                            {:Header "Upside" :accessor "upside1y" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :expected1y                          {:Header "Median" :accessor "expected1y" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :downside1y                          {:Header "Downside" :accessor "downside1y" :width 75 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :z1ymin                              {:Header "Tight" :accessor "z1ymin" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :z1ymax                              {:Header "Wide" :accessor "z1ymax" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :z1ymedian                           {:Header "Median" :accessor "z1ymedian" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :z1yvalid                            {:Header "Days" :accessor "z1yvalid" :width 65 :style {:textAlign "right"} :aggregate tables/median :filterable true :filterMethod tables/nb-filter-OR-AND}
   :ytd-z-delta                         {:Header (gstring/unescapeEntities "&Delta; ZTW") :accessor "ytd-z-delta" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}
   :ytd-return                          {:Header "TR %" :accessor "ytd-return" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2pc :filterable true :filterMethod tables/nb-filter-OR-AND}


   :difference_svr_2_2d                 {:Header "Delta 2D" :accessor "difference_svr_2d" :width 65 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterable true :filterMethod tables/nb-filter-OR-AND}

   :gross_4d_value                      {:Header "4D value" :accessor "gross_4d_value" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/nb-filter-OR-AND}
   :gross_2d_value                      {:Header "2D value" :accessor "gross_2d_value" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/nb-filter-OR-AND}
   :gross_4d_value_pos                  {:Header "4D value" :accessor "gross_4d_value_pos" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/nb-filter-OR-AND}
   :gross_2d_value_pos                  {:Header "2D value" :accessor "gross_2d_value_pos" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/nb-filter-OR-AND}
   :gross_4d_value_neg                  {:Header "4D value" :accessor "gross_4d_value_neg" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/nb-filter-OR-AND}
   :gross_2d_value_neg                  {:Header "2D value" :accessor "gross_2d_value_neg" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/nb-filter-OR-AND}
   :gross_4d_value_pos_pct              {:Header "4D value" :accessor "gross_4d_value_pos_pct" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.1f%" 100.)}
   :gross_2d_value_pos_pct              {:Header "2D value" :accessor "gross_2d_value_pos_pct" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.1f%" 100.)}
   :LongCountry                         {:Header "Country" :accessor "LongCountry" :width 125}
   :StringRating                        {:Header "Rating" :accessor "StringRating" :width 125}
   :AMT_OUTSTANDING_2                   {:Header "($ bn)" :accessor "AMT_OUTSTANDING" :width 100 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.2f" 0.000000001) :filterable true :filterMethod tables/nb-filter-OR-AND}
   :AMT_OUTSTANDING_3                   {:Header "$ m" :accessor "AMT_OUTSTANDING" :width 45 :style {:textAlign "right"} :aggregate tables/sum-rows :Cell (partial tables/nb-cell-format "%.0f" 0.000001) :filterable true :filterMethod tables/nb-filter-OR-AND}
   :DurationGroup                       {:Header "Duration" :accessor "DurationGroup" :width 125}

   :days-to-call                        {:Header "Days" :accessor "days-to-call" :width 80 :style {:textAlign "right"} :aggregate tables/median :Cell (partial tables/nb-cell-format "%.0f" 1) :filterable true :filterMethod tables/nb-filter-OR-AND}
   :price-vs-call                       {:Header "Price vs call" :accessor "price-vs-call" :width 80 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2 :filterable true :filterMethod tables/nb-filter-OR-AND}
   :NXT_CALL_DT                         {:Header "Date" :accessor "NXT_CALL_DT" :width 80 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.0f" 1 %) :filterable true}
   :NXT_CALL_PX                         {:Header "Call price" :accessor "NXT_CALL_PX" :width 80 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round3 :filterable true :filterMethod tables/nb-filter-OR-AND}

   ;:model-weight                        {:Header "Weight" :accessor "model-weight" :width 65 :Cell model-weight-input-cell :style {:textAlign "right"} :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND}
   :CEMBI-model                         {:Header "Main" :accessor "CEMBI-model" :width 65 :Cell tables/round2-if-not0 :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND :getProps model-portfolio-weights-props}
   :Allianz-model                         {:Header "Allianz" :accessor "Allianz-model" :width 65 :Cell tables/round2-if-not0  :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND :getProps model-portfolio-weights-props}
   :IG-model                         {:Header "IG" :accessor "IG-model" :width 65 :Cell tables/round2-if-not0  :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND :getProps model-portfolio-weights-props}
   :BNP-model                         {:Header "BNP" :accessor "BNP-model" :width 65 :Cell tables/round2-if-not0 :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND :getProps model-portfolio-weights-props}
   :TR-model                         {:Header "TR" :accessor "TR-model" :width 65 :Cell tables/round2-if-not0  :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND :getProps model-portfolio-weights-props}

   :CEMBI-model-objective                         {:Header "Main" :accessor "CEMBI-model-objective" :width 65 :show false}
   :Allianz-model-objective                         {:Header "Allianz" :accessor "Allianz-model-objective" :width 65 :show false}
   :IG-model-objective                         {:Header "IG" :accessor "IG-model-objective" :width 65 :show false}
   :BNP-model-objective                         {:Header "BNP" :accessor "BNP-model-objective" :width 65 :show false}
   :TR-model-objective                         {:Header "TR" :accessor "TR-model-objective" :width 65 :show false}

   :CEMBI-model-dur       {:Header "Main" :accessor "CEMBI-model-dur" :width 65 :Cell tables/round2-if-not0 :style {:textAlign "right"} :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND}
   :CEMBI-model-dur-x-sp  {:Header "Main" :accessor "CEMBI-model-dur-x-sp" :width 65 :Cell tables/round2-if-not0 :style {:textAlign "right"} :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND}
   :IG-model-dur       {:Header "IG" :accessor "IG-model-dur" :width 65 :Cell tables/round2-if-not0 :style {:textAlign "right"} :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND}
   :IG-model-dur-x-sp  {:Header "IG" :accessor "IG-model-dur-x-sp" :width 65 :Cell tables/round2-if-not0 :style {:textAlign "right"} :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND}
   :TR-model-dur       {:Header "TR" :accessor "TR-model-dur" :width 65 :Cell tables/round2-if-not0 :style {:textAlign "right"} :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND}
   :TR-model-dur-x-sp  {:Header "TR" :accessor "TR-model-dur-x-sp" :width 65 :Cell tables/round2-if-not0 :style {:textAlign "right"} :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND}
   :cembi-dur       {:Header "CEMBI" :accessor "cembi-dur" :width 65 :Cell tables/round2-if-not0 :style {:textAlign "right"} :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND}
   :cembi-dur-x-sp  {:Header "CEMBI" :accessor "cembi-dur-x-sp" :width 65 :Cell tables/round2-if-not0 :style {:textAlign "right"} :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND}
   :cembi-ig-dur       {:Header "CEMBI IG" :accessor "cembi-ig-dur" :width 65 :Cell tables/round2-if-not0 :style {:textAlign "right"} :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND}
   :cembi-ig-dur-x-sp  {:Header "CEMBI IG" :accessor "cembi-ig-dur-x-sp" :width 65 :Cell tables/round2-if-not0 :style {:textAlign "right"} :aggregate tables/sum-rows :filterMethod tables/nb-filter-OR-AND}


   :totaldummy   {:Header " " :accessor "totaldummy" :width 30}
   })


(def table-style (reagent/atom "Screener (SVR)"))

(def qs-table-view (atom nil))

(defn table-style->qs-table-col [table-style checkboxes]
  (letfn [(c [title col-names] {:Header title :columns (mapv quant-score-table-columns col-names)})]
    (case table-style
      "Summary"
      [(c "Description" [:Bond :ISIN :Country :Sector :SENIOR])
       ;{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR])}
       {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
       {:Header "Model prediction" :columns (mapv quant-score-table-columns [:predicted_spread_legacy_1 :predicted_spread_new_1 :predicted_spread_svr_1])}
       {:Header "Cheapness (>0)" :columns (mapv quant-score-table-columns [:difference_legacy_1 :difference_new_1 :difference_svr_1])}
       {:Header "Universe score" :columns (mapv quant-score-table-columns [:URV_legacy_1 :URV_new_1 :URV_svr_1])}
       {:Header "Historical score" :columns (mapv quant-score-table-columns [:HRV_legacy_1 :HRV_new_1 :HRV_svr_1])}]
      "Full"
      [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond-sticky :ISIN :Country :Sector :SENIOR :FIRST_SETTLE_DT])}
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
      [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR])}
       {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
       {:Header "Model outputs" :columns (mapv quant-score-table-columns [:predicted_spread_legacy_2 :difference_legacy_2 :URV_legacy_2 :HRV_legacy_2 :implied_rating_legacy_2 :sp_to_sov_legacy])}
       {:Header "Ranking" :columns (mapv quant-score-table-columns [:URS_rank_legacy_2 :URS_rank_legacy_1D_2 :URS_rank_legacy_1W_2 :URS_rank_legacy_1M_2])}
       {:Header "Rank change" :columns (mapv quant-score-table-columns [:URS_rank_legacy_D1D_2 :URS_rank_legacy_D1W_2 :URS_rank_legacy_D1M_2])}]
      "New"
      [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR])}
       {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
       {:Header "Model outputs" :columns (mapv quant-score-table-columns [:predicted_spread_new_2 :difference_new_2 :URV_new_2 :HRV_new_2 :implied_rating_new_2 :sp_to_sov_new])}
       {:Header "Ranking" :columns (mapv quant-score-table-columns [:URS_rank_new_2 :URS_rank_new_1D_2 :URS_rank_new_1W_2 :URS_rank_new_1M_2])}
       {:Header "Rank change" :columns (mapv quant-score-table-columns [:URS_rank_new_D1D_2 :URS_rank_new_D1W_2 :URS_rank_new_D1M_2])}]
      "SVR"
      [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR])}
       {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :Used_Duration :Used_Rating_Score :Rating_String])}
       {:Header "Model outputs" :columns (mapv quant-score-table-columns [:predicted_spread_svr_2 :difference_svr_2 :URV_svr_2 :HRV_svr_2 :implied_rating_svr_2 :sp_to_sov_svr])}
       {:Header "Ranking" :columns (mapv quant-score-table-columns [:URS_rank_svr_2 :URS_rank_svr_1D_2 :URS_rank_svr_1W_2 :URS_rank_svr_1M_2])}
       {:Header "Rank change" :columns (mapv quant-score-table-columns [:URS_rank_svr_D1D_2 :URS_rank_svr_D1W_2 :URS_rank_svr_D1M_2])}]
      "Upside/Downside"
      [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR-WIDE :HYBRID-WIDE :cembi :cembi-ig :embi :embi-ig])}
       {:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :G-SPREAD :Used_Duration])}
       {:Header "Target returns (%)" :columns (mapv quant-score-table-columns [:upside1y :expected1y :downside1y])}
       {:Header "260d Z-spreads" :columns (mapv quant-score-table-columns [:z1ymin :z1ymedian :z1ymax :z1yvalid])}
       {:Header "YTD performance" :columns (mapv quant-score-table-columns [:ytd-return :ytd-z-delta])}]
      "Screener (SVR)"
      (concat [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Country :Sector :SENIOR-WIDE :HYBRID-WIDE :INTERNATIONAL_SUKUK :ESG :MSCI-SCORE :AMT_OUTSTANDING_3 :COUPON])}]
              (if (:indices checkboxes) [{:Header "Index inclusion" :columns (mapv quant-score-table-columns [:cembi :cembi-ig :embi :embi-ig :us-agg :global-agg])}])
              (if (:calls checkboxes) [{:Header "Call schedule" :columns (mapv quant-score-table-columns [:NXT_CALL_DT :NXT_CALL_PX :days-to-call :price-vs-call])}])
              [{:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :G-SPREAD :Used_Duration :Used_Rating_Score :Rating_String])}
               {:Header "Model outputs (ZTW)" :columns (mapv quant-score-table-columns [:predicted_spread_svr_2 :difference_svr_2 :implied_rating_svr_2 :difference_svr_2_2d :sp_to_sov_svr])}
               {:Header "YTD performance" :columns (mapv quant-score-table-columns [:ytd-return :ytd-z-delta])}])
      "Model portfolios"
      (concat [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :ISIN :Ticker :Country :Sector :SENIOR-WIDE :HYBRID-WIDE :INTERNATIONAL_SUKUK  :ESG :AMT_OUTSTANDING_3 :COUPON])}]
              [{:Header "Model weights" :columns (mapv quant-score-table-columns [:CEMBI-model :IG-model :TR-model :CEMBI-model-objective :IG-model-objective :TR-model-objective])}]
              (if (:indices checkboxes) [{:Header "Index inclusion" :columns (mapv quant-score-table-columns [:cembi :cembi-ig :embi :embi-ig :us-agg :global-agg])}])
              (if (:calls checkboxes) [{:Header "Call schedule" :columns (mapv quant-score-table-columns [:NXT_CALL_DT :NXT_CALL_PX :days-to-call :price-vs-call])}])
              [{:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :G-SPREAD :Used_Duration :Used_Rating_Score :Rating_String])}
               {:Header "Model outputs (ZTW)" :columns (mapv quant-score-table-columns [:predicted_spread_svr_2 :difference_svr_2 :implied_rating_svr_2 :difference_svr_2_2d])}])
      "Advanced spot charts"
      (concat [{:Header "Description" :columns (mapv quant-score-table-columns [:Bond :Ticker :CRNCY :Country :Sector :SENIOR-WIDE :HYBRID-WIDE :INTERNATIONAL_SUKUK :ESG :AMT_OUTSTANDING_3 :COUPON])}]
              [{:Header "Index inclusion" :columns (mapv quant-score-table-columns [:cembi :cembi-ig :embi :embi-ig :us-agg :global-agg])}]
              [{:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :G-SPREAD :Used_Duration :Used_Rating_Score])}
               {:Header "Model outputs (ZTW)" :columns (mapv quant-score-table-columns [:predicted_spread_svr_2 :difference_svr_2 :difference_svr_2_2d])}])
      "IndexCrawler"
      (concat [{:Header " " :columns (mapv quant-score-table-columns [:totaldummy])}
               {:Header "Description" :columns (mapv quant-score-table-columns [:Country :Sector :SENIOR-WIDE :HYBRID-WIDE :INTERNATIONAL_SUKUK :ESG :MSCI-SCORE :AMT_OUTSTANDING_3 :COUPON :FIRST_SETTLE_DT :Bond])}]
              [{:Header "Index weight" :columns (mapv quant-score-table-columns [:cembi :cembi-ig :embi :embi-ig :us-agg :global-agg])}]
              [{:Header "Call schedule" :columns (mapv quant-score-table-columns [:NXT_CALL_DT :NXT_CALL_PX :days-to-call :price-vs-call])}]
              [{:Header "Valuation" :columns (mapv quant-score-table-columns [:Used_Price :Used_YTW :Used_ZTW :G-SPREAD :Used_Duration :Used_Rating_Score :Rating_String])}
               {:Header "Model outputs (ZTW)" :columns (mapv quant-score-table-columns [:predicted_spread_svr_2 :difference_svr_2 :implied_rating_svr_2 :difference_svr_2_2d :sp_to_sov_svr])}
               {:Header "YTD performance" :columns (mapv quant-score-table-columns [:ytd-return :ytd-z-delta])}])
      ))
  )

(def table-checkboxes (r/atom {:indices false :calls false}))