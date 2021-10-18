(ns jasminegui.qs.harvest
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
    [reagent-contextmenu.menu :as rcm]
    [jasminegui.qs.qstables :as qstables]
    [jasminegui.qs.qscharts :as qscharts]
    )
  )

(def performance-colors-harvest ["#134848" "#009D80" "#FDAA94" "#74908D" "#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E"])

;TOP BOTTOM AND MEDIAN

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

;(def top-bottom-ignore-subs? (r/atom false))
;(def top-bottom-ignore-sovs? (r/atom true))
(def top-bottom-how-many (r/atom 3))
(def top-bottom-ignore (r/atom {:subs false :sovs true :corps false}))

(defn top-bottom-str [this]
  (let [coll (js->clj (aget this "value"))]
    (r/as-element
      [v-box :children (mapv (fn [line]
                               [label
                                :style {:color (if (pos? (get-in line ["difference_svr"])) "darkgreen" "darkred")}
                                :label (str (get-in line ["Bond"]) " (" (Math/round (get-in line ["difference_svr"])) ")")]) coll)])))

(defn top-bottom []
  (let [data @(rf/subscribe [:quant-model/model-output])
        fdata (t/chainfilter {:difference_svr some?
                              :Sector   #(cond
                                           (and (:sovs @top-bottom-ignore) (:corps @top-bottom-ignore)) false
                                           (:corps @top-bottom-ignore) (= % "Sovereign")
                                           (:sovs @top-bottom-ignore) (not= % "Sovereign")
                                           :else true)
                              :SENIOR   #(if (:subs @top-bottom-ignore) (not= % "N") true)} data)

        ;(filter #(and
        ;                 (some? (:difference_svr %))
        ;                 (if @top-bottom-ignore-sovs? (not= (:Sector %) "Sovereign") true)
        ;                 (if @top-bottom-ignore-subs? (not= (:SENIOR %) "N") true))
        ;              data)
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
                             :children [[checkbox :model (r/cursor top-bottom-ignore [:sovs]) :label "Ignore sovereign bonds?" :on-change #(swap! top-bottom-ignore assoc :sovs %)]
                                        [checkbox :model (r/cursor top-bottom-ignore [:corps]) :label "Ignore corporate bonds?" :on-change #(swap! top-bottom-ignore assoc :corps %)]
                                        [checkbox :model (r/cursor top-bottom-ignore [:subs]) :label "Ignore subordinated bonds?" :on-change #(swap! top-bottom-ignore assoc :subs %)]
                                        [label :label "How many:"] [single-dropdown :width "75px" :model top-bottom-how-many :choices [{:id 3 :label 3} {:id 5 :label 5} {:id 10 :label 10}] :on-change #(reset! top-bottom-how-many %)]
                                        ]]

                            ;[h-box :gap "20px" :align :center
                            ; :children [[checkbox :model top-bottom-ignore-sovs? :label "Ignore sovereign bonds?" :on-change #(reset! top-bottom-ignore-sovs? %)]
                            ;            [checkbox :model top-bottom-ignore-subs? :label "Ignore subordinated bonds?" :on-change #(reset! top-bottom-ignore-subs? %)]
                            ;            [label :label "How many:"] [single-dropdown :width "75px" :model top-bottom-how-many :choices [{:id 3 :label 3} {:id 5 :label 5} {:id 10 :label 10}] :on-change #(reset! top-bottom-how-many %)]]]
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

(def median-ignore (r/atom {:subs false :sovs true :corps false}))

(defn median-str [this]
  (let [coll (js->clj (aget this "value"))]
    (if (or (nil? (first coll)) (<= (js/parseInt (first coll)) 1))
      "-"
      (r/as-element
        [v-box :children [[h-box :justify :between :children [[label :width "50px" :label "Bonds:"] [label :width "50px" :style {:text-align "right"} :label (first coll)]]]
                          [h-box :justify :between :children [[label :width "50px" :label "1st quartile:"] [label :width "50px" :style {:text-align "right"} :label (gstring/format "%.0fbps" (js/parseFloat (second coll)))]]]
                          [h-box :justify :between :children [[label :width "50px" :label "Median:"] [label :width "50px" :style {:text-align "right"} :label (gstring/format "%.0fbps" (js/parseFloat (nth coll 2)))]]]
                          [h-box :justify :between :children [[label :width "50px" :label "3rd quartile:"] [label :width "50px" :style {:text-align "right"} :label (gstring/format "%.0fbps" (js/parseFloat (last coll)))]]]
                          ]]))))

(defn median-table []
  (let [data @(rf/subscribe [:quant-model/model-output])
        fdata (t/chainfilter {:Used_ZTW some? :Used_Large_Rating_Score some? :Used_Duration some?
                              :Sector   #(cond
                                           (and (:sovs @median-ignore) (:corps @median-ignore)) false
                                           (:corps @median-ignore) (= % "Sovereign")
                                           (:sovs @median-ignore) (not= % "Sovereign")
                                           :else true)
                              :SENIOR   #(if (:subs @median-ignore) (not= % "N") true)} data)
        fdata2 (map #(assoc % :duration-bucket (duration-grouping-fn %)
                              :RatingGroup (nth ["AAA" "AA" "A" "BBB" "BB" "B" "C"] (:Used_Large_Rating_Score %))) fdata)
        res (into []
                  (for [[duration-bucket durgrp] (group-by :duration-bucket fdata2)]
                    (apply merge
                           {:duration-bucket duration-bucket}
                           (for [[large-rating-group lrgroup] (group-by :Used_Large_Rating_Score durgrp)]
                             (let [v (sort (map :Used_ZTW lrgroup)) n (count v) p (partition (int (/ n 4)) v)]
                               {(keyword (str "LRG" large-rating-group)) [n (last (first p)) (last (second p)) (last (nth p 2))]})))))
        sres (->> res
                  (remove #(= (:duration-bucket %) "uncategorized"))
                  (sort-by #(.indexOf ["0-3Y" "3-5Y" "5-7Y" "7-10Y" "10Y+"] (:duration-bucket %))))]
    [v-box :padding "80px 10px" :class "rightelement" :gap "20px"
     :children [[v-box :class "element" :gap "20px" :width "1620px"
                 :children [[title :level :level1 :label "Z-spread range by category"]
                            [h-box :gap "20px" :align :center
                             :children [[checkbox :model (r/cursor median-ignore [:sovs]) :label "Ignore sovereign bonds?" :on-change #(swap! median-ignore assoc :sovs %)]
                                        [checkbox :model (r/cursor median-ignore [:corps]) :label "Ignore corporate bonds?" :on-change #(swap! median-ignore assoc :corps %)]
                                        [checkbox :model (r/cursor median-ignore [:subs]) :label "Ignore subordinated bonds?" :on-change #(swap! median-ignore assoc :subs %)]]]
                            [:> ReactTable
                             {:data           sres
                              :columns        [{:Header "Duration bucket" :accessor "duration-bucket" :width 150 :style {:textAlign "center" :display "flex" :flexDirection "column" :justifyContent "center"}}
                                               {:Header "AA" :accessor "LRG1" :width 150 :Cell median-str}
                                               {:Header "A" :accessor "LRG2" :width 150 :Cell median-str}
                                               {:Header "BBB" :accessor "LRG3" :width 150 :Cell median-str}
                                               {:Header "BB" :accessor "LRG4" :width 150 :Cell median-str}
                                               {:Header "B" :accessor "LRG5" :width 150 :Cell median-str}
                                               {:Header "C" :accessor "LRG6" :width 150 :Cell median-str}]
                              :showPagination false :pageSize 5 :sortable false :filterable false}]
                            [oz/vega-lite (qscharts/median-z-spread-error-bar fdata2)]]]]]))

;UNIVERSE

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
     col-width (if @universe-ignore-sovs-govts? 110 95)]
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
                              :columns        (concat [{:Header "Country" :accessor "Country" :width col-width :Cell country-display-fn :filterable true :filterMethod tables/text-filter-OR}]
                                                      (mapv (fn [s] {:Header s :accessor s :width col-width :Cell universe-str  :filterable false}) dsec)
                                                      [{:Header "Total" :accessor "Total" :width col-width :Cell universe-str :filterable false}])
                              :showPagination true :showPageSizeOptions true :pageSizeOptions [6 10 20] :defaultPageSize 6}]]]]]))


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
                                 :StringRating (qstables/get-implied-rating (str (:Used_Rating_Score %)))
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
        grouping-columns (into [] (for [r (remove nil? (conj risk-choices :Bond))] (qstables/quant-score-table-columns r)))
        accessors (mapv :accessor grouping-columns)]
    [:> ReactTable
     {:data                display
      :columns             [{:Header "Groups" :columns (mapv #(assoc % :width 125) grouping-columns)}
                            {:Header "Stock" :columns (mapv qstables/quant-score-table-columns [:AMT_OUTSTANDING_2])}
                            {:Header "Median cheapness" :columns (mapv #(assoc % :filterable false) (mapv qstables/quant-score-table-columns [:difference_svr_2 :difference_svr_2_2d]))}
                            {:Header "Gross value ($ bn)" :columns (mapv #(assoc % :filterable false) (mapv qstables/quant-score-table-columns [:gross_4d_value :gross_2d_value]))}
                            {:Header "Gross negative value ($ bn)" :columns (mapv #(assoc % :filterable false) (mapv qstables/quant-score-table-columns [:gross_4d_value_neg :gross_2d_value_neg]))}
                            {:Header "Gross positive value ($ bn)" :columns (mapv #(assoc % :filterable false) (mapv qstables/quant-score-table-columns [:gross_4d_value_pos :gross_2d_value_pos]))}
                            {:Header "Gross positive value %" :columns (mapv #(assoc % :filterable false) (mapv qstables/quant-score-table-columns [:gross_4d_value_pos_pct :gross_2d_value_pos_pct]))}]
      :showPagination      false
      :sortable            true
      :defaultSorted       [{:id :gross_2d_value_pos_pct :desc true}]
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



(defn get-harvest-scatter-plot-data [harvest]
  (if harvest
    (let [data (js->clj (. (.getResolvedState harvest) -sortedData))
          slice (remove #(= (get % "_pivotVal") "Total") (map #(select-keys % ["_pivotVal" "gross_4d_value" "gross_2d_value" "gross_4d_value_pos" "gross_2d_value_pos"]) data))
          net (into [] (for [s slice] {:txt (get s "_pivotVal") :d2 (get s "gross_2d_value") :d4 (get s "gross_4d_value") :field "Net value"}))
          positive (into [] (for [s slice] {:txt (get s "_pivotVal") :d2 (get s "gross_2d_value_pos") :d4 (get s "gross_4d_value_pos") :field "Positive value"}))]
      (->> (concat net positive (map (fn [i] {:txt "" :r1 (/ i 100.)}) (range -100 101)))                           ;(map #({:r1 (/ % 100.)}) (range 0 101))
           (map #(update % :d2 / 1000000000))
           (map #(update % :d4 / 1000000000))))))



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
               (if-let [d (get-harvest-bar-plot-data @harvest-table-ref)] [oz/vega-lite (qscharts/stacked-vertical-bars d performance-colors-harvest)] [p ""])
               [gap :size "20px"]
               [title :label "Net vs positive gross contribution" :level :level1]
               (if-let [d (get-harvest-scatter-plot-data @harvest-table-ref)] [oz/vega-lite (qscharts/scatter-harvest-spec d)] [p ""])
               [gap :size "20px"]
               [title :label "Outliers" :level :level1]
               [:> ReactTable
                {:data           (filter (fn [line] (>= (Math/abs (:difference_svr_2d line)) 200)) @(rf/subscribe [:quant-model/model-output]))
                 :columns        [{:Header "Groups" :columns (mapv #(assoc % :width 125) (mapv qstables/quant-score-table-columns [:Bond :Country :Sector ]))}
                                  {:Header "Stock" :columns (mapv qstables/quant-score-table-columns [:AMT_OUTSTANDING_2])}
                                  {:Header "Cheapness" :columns (mapv #(assoc % :filterable false) (mapv qstables/quant-score-table-columns [:difference_svr_2 :difference_svr_2_2d]))}]
                 :showPagination true :sortable true :defaultSorted [{:id :difference_svr_2d :desc true}] :pageSize 20 :className "-striped -highlight"}]]]])

;;; END HARVEST UNIVERSE STUFF ;;;