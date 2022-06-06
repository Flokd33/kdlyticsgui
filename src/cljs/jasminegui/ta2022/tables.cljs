(ns jasminegui.ta2022.tables
  (:require
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.tables :as tables]
    [jasminegui.tools :as t]
  )
  )

(def strategy-choices [{:id "Growth risk on"          :label "Growth risk on"         :group "Top down"             :shortcut "TD growth" :order 5}
                       {:id "Duration risk on"        :label "Duration risk on"       :group "Top down"             :shortcut "TD duration" :order 6}
                       {:id "Risk off"                :label "Risk off"               :group "Top down"             :shortcut "TD risk off" :order 7}
                       {:id "Long end technical bid"  :label "Long end technical bid" :group "Top down"             :shortcut "TD lifers" :order 8}
                       {:id "Momentum"                :label "Momentum"               :group "Bottom up"            :shortcut "BU momentum" :order 4}
                       {:id "Value high conviction"   :label "Value high conviction"  :group "Bottom up"            :shortcut "BU HC" :order 1}
                       {:id "Value relative"          :label "Value relative"         :group "Bottom up"            :shortcut "BU relval" :order 2}
                       {:id "Value low conviction"    :label "Value low conviction"   :group "Bottom up"            :shortcut "BU LC" :order 3}
                       {:id "Market perform"          :label "Market perform"         :group "Market perform"       :shortcut "MP" :order 11}
                       {:id "Cash proxy"              :label "Cash proxy"             :group "Available for sale"   :shortcut "FS cash" :order 12}
                       {:id "Keen to sell"            :label "Keen to sell"           :group "Available for sale"   :shortcut "FS keen" :order 13}
                       {:id "Active exit"             :label "Active exit"            :group "Available for sale"   :shortcut "FS exit" :order 14}
                       {:id "Hedging"                 :label "Hedging"                :group "Other"                :shortcut "Oth hedge" :order 9}
                       {:id "Event driven"            :label "Event driven"           :group "Other"                :shortcut "Oth event" :order 10}])

(def strategy->shortcut (into {} (for [line strategy-choices] [(:id line) (:shortcut line)])))
(def ordered-strategy-names (map :id (sort-by :order strategy-choices)))
(defn strategy-sort [data] (sort-by #(.indexOf ordered-strategy-names (:strategy %)) data))

(def table-columns
  {:id                          {:Header "ID" :accessor "id" :show false}
   :id-show                     {:Header "ID" :accessor "id" :width 60}
   ;:strategy-shortcut           {:Header "Strategy"       :accessor "strategy-shortcut"           :width 80 :style {:textAlign "center"} :filterMethod tables/text-filter-OR :Cell tables/strategy-pop-up}
   :strategy                    {:Header "Strategy" :accessor "strategy" :Cell #(if-let [x (aget % "value")] (strategy->shortcut x) "-")  :width 80 :style {:textAlign "center"} :filterMethod tables/text-filter-OR} ;we need to have it in the table for the props
   :strategy-pivot              {:Header "Strategy" :accessor "strategy" :width 180} ; :Aggregated #(str "hi")
   ;:entry-date                  {:Header "Entry date"     :accessor "entry-date"                  :width 80 :style {:textAlign "center"} :Cell tables/format-date-from-int-rt}
   ;:exit-date                   {:Header "Exit date"      :accessor "exit-date"                   :width 70 :style {:textAlign "center"} :Cell tables/exit-date-props :filterMethod tables/exit-date-filter}
   :analyst                     {:Header "Analyst"        :accessor "analyst"                     :width 75 :style {:textAlign "center"} :filterMethod tables/text-filter-OR}
   :NAME                        {:Header "Name" :accessor "Bond" :width 120 :style {:textAlign "center"} :filterMethod tables/text-filter-OR}
   :portfolio                   {:Header "Portfolio" :accessor "portfolio" :width 135 :style {:textAlign "center"} :filterMethod tables/text-filter-OR}
   :ISIN                        {:Header "ISIN" :accessor "ISIN" :width 125 :style {:textAlign "center"} :show false}
   :status                      {:Header "Status" :accessor "status" :show false} ;we need to have it in the table for the props
   :status-show                 {:Header "Status" :accessor "status" :width 60 :style {:textAlign "center"}} ;we need to have it in the table for the props
   :thisyear                    {:Header "thisyear" :accessor "thisyear" :show false} ;we need to have it in the table for the props
   :position                    {:Header "Model" :accessor "position" :width 50 :style {:textAlign "right"} :Cell tables/round2pc :filterMethod tables/nb-filter-OR-AND}
   :weight               {:Header "Actual" :accessor "weight" :width 50 :style {:textAlign "right"} :Cell tables/round2pc :filterMethod tables/nb-filter-OR-AND}
   :entry-price                 {:Header "Entry" :accessor "entry-price" :width 60 :style {:textAlign "right"} :Cell tables/round2 :filterMethod tables/nb-filter-OR-AND}
   :price                       {:Header "Price" :accessor "Used_Price" :width 50 :style {:textAlign "right"} :Cell tables/round2 :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :yield                       {:Header "Yield" :accessor "Used_YTW" :width 50 :style {:textAlign "right"} :Cell tables/yield-format :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :z-spread                    {:Header "Z-Sprd" :accessor "Used_ZTW" :width 55 :style {:textAlign "right"} :Cell tables/zspread-format :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :g-spread                    {:Header "G-Sprd" :accessor "G_SPREAD_MID_CALC" :width 55 :style {:textAlign "right"} :Cell tables/zspread-format :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :duration                    {:Header "Dur." :accessor "Used_Duration" :width 45 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f" 1. %) :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :rating-string               {:Header "Rating" :accessor "Rating_String" :width 110 :style {:textAlign "center"} :aggregate #(str "-")}
   :difference_svr              {:Header "4D" :accessor "difference_svr" :width 35 :getProps tables/red-negatives :Cell #(tables/nb-cell-format "%.0f" 1. %) :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :difference_svr_2d           {:Header "2D" :accessor "difference_svr_2d" :width 35 :getProps tables/red-negatives :Cell #(tables/nb-cell-format "%.0f" 1. %) :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :ltd-return                  {:Header "Raw" :accessor "ltd-return" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND :aggregate tables/median} ;:getProps fp4
   :ltd-return-vs-cembi         {:Header "CEMBI" :accessor "ltd-return-vs-cembi" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND :aggregate tables/median} ;:getProps fp4
   :ltd-return-vs-cembi-rating  {:Header "IGHY" :accessor "ltd-return-vs-cembi-rating" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :ltd-return-vs-cembi-country {:Header "Cntry" :accessor "ltd-return-vs-cembi-country" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :ltd-return-vs-cembi-sector  {:Header "Sctr" :accessor "ltd-return-vs-cembi-sector" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :ytd-return                  {:Header "Gross" :accessor "tr-ytd" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND :aggregate tables/median} ;:getProps fp4
   :ytd-return-vs-cembi         {:Header "Index" :accessor "tr-vs-index-ytd" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND :aggregate tables/median} ;:getProps fp4
   :ytd-return-vs-cembi-rating  {:Header "IGHY" :accessor "tr-vs-index-rating-ytd" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :ytd-return-vs-cembi-country {:Header "Cntry" :accessor "tr-vs-index-country-ytd" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :ytd-return-vs-cembi-sector  {:Header "Sctr" :accessor "tr-vs-index-sector-ytd" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND :aggregate tables/median}
   :return-portfolio            {:Header "Source" :accessor "portfolio" :width 80 :aggregate #(str "-")}
   :new-issue                   {:Header "NI" :accessor "full-ytd" :width 30 :style {:textAlign "center"} :Cell (fn [this] (if (not (aget this "value")) "x" "")) :filterMethod tables/nb-filter-OR-AND}
   :price-target                {:Header "Target" :accessor "price-target" :width 55 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f" 1. %) :filterMethod tables/nb-filter-OR-AND}
   :review-target               {:Header "Target" :accessor "implied-price-review" :width 55 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f" 1. %) :filterMethod tables/nb-filter-OR-AND}
   :relval-target-description   {:Header "Description" :accessor "relval-target-description" :width 170} ;:getProps fp4 ; :headerClassName "wordwrap"
   :relval-target-latest        {:Header "Latest" :accessor "relval-target-value" :width 50 :style {:textAlign "right"} :Cell tables/round2 :filterMethod tables/nb-filter-OR-AND} ;:getProps fp4 ; :headerClassName "wordwrap"
   :relval-target-distance                    {:Header "Relval"         :accessor "relval-target-distance"                    :width 50 :style {:textAlign "right"} :Cell tables/round0pc :filterMethod tables/nb-filter-OR-AND}
   :target-alert-implied-price  {:Header "Price" :accessor "target-alert-implied-price" :width 45 :style {:textAlign "right"} :aggregate tables/median}
   :relval-alert-implied-price  {:Header "Price" :accessor "relval-alert-implied-price" :width 45 :style {:textAlign "right"} :aggregate tables/median}
   :review-alert-implied-price  {:Header "Price" :accessor "review-alert-implied-price" :width 45 :style {:textAlign "right"} :aggregate tables/median}

   :target-alert-tr-1y          {:Header "Target" :accessor "target-alert-tr-1y" :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 100. %) :aggregate tables/median}
   :relval-alert-tr-1y          {:Header "Relval" :accessor "relval-alert-tr-1y" :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 100. %) :aggregate tables/median}
   :review-alert-tr-1y          {:Header "Review" :accessor "review-alert-tr-1y" :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 100. %) :aggregate tables/median}
   :svr4d1yrtn                  {:Header "4D"     :accessor "svr4d1yrtn"         :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 1. %) :aggregate tables/median}
   :svr2d1yrtn                  {:Header "2D"     :accessor "svr2d1yrtn"         :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 1. %) :aggregate tables/median}
   :upside1y                    {:Header "Tight"  :accessor "upside1y"           :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 1. %) :aggregate tables/median}
   :expected1y                  {:Header "Median" :accessor "expected1y"         :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 1. %) :aggregate tables/median}
   :downside1y                  {:Header "Wide"   :accessor "downside1y"         :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 1. %) :aggregate tables/median}

   })