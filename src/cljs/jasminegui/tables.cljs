(ns jasminegui.tables
  (:require
    [re-frame.core :as rf]
    [reagent.core :as r]
    [goog.string :as gstring]
    [cljs-time.core :refer [today]]
    [goog.string.format]
    [jasminegui.tools :as t]
    [goog.object :as gobj]
    ["react-table-v6" :as rt :default ReactTable])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format)))

;;;;;;;;;;;;;
;AGGREGATION;
;;;;;;;;;;;;;

(defn sum-rows [vals] (reduce + vals))

(defn median [coll]
  (let [sorted (sort (remove nil? coll))
        cnt (count sorted)
        halfway (quot cnt 2)]
    (cond
      (zero? cnt) nil
      (odd? cnt) (nth sorted halfway)
      :else (let [bottom (dec halfway) bottom-val (nth sorted bottom) top-val (nth sorted halfway)] (* 0.5 (+ bottom-val top-val))))))

(def nff (NumberFormat. Format/DECIMAL))
(defn nf [x] (.format nff (str x)))

(defn nfcell2 [this]
  (if-let [x (aget this "value")] (.format nff x) "-"))

;;;;;;;;;;;;;;;;;;;
;COLUMN FORMATTING;
;;;;;;;;;;;;;;;;;;;

(defn red-negatives
  "right align, with red text if negative"
  [state rowInfo column]
  (if (and (some? rowInfo) (neg? (gobj/getValueByKeys rowInfo "row" (gobj/get column "id"))))
    #js {:style #js {:color "red" :textAlign "right"}}
    #js {:style #js {:textAlign "right"}}))

(defn breach-status-color
  "if status = 0 green background, if status = 1 orange (warning) background,if status = 2 (breach) red background,"
  [state rowInfo column]
  (case  (gobj/getValueByKeys rowInfo "row" (gobj/get column "id"))
    0 #js {:style #js {:color "Chartreuse" :backgroundColor "Chartreuse"  :textAlign "center"}}
    1 #js {:style #js {:color "DarkOrange" :backgroundColor "DarkOrange" :textAlign "center"}}
    2 #js {:style #js {:color "Crimson" :backgroundColor "Crimson" :textAlign "center"}}
    #js {}))

(defn red-negatives-bold-if-a-b
  "right align, with red text if negative, bold if is row-name and col-name"
  [row-header row-name col-name state rowInfo column]
  (let [cid (gobj/get column "id")]
    (if (and (some? rowInfo) (neg? (gobj/getValueByKeys rowInfo "row" cid))) ;(aget rowInfo "row" (aget column "id"))
      #js {:style #js {:color "red" :textAlign "right" :fontWeight (if (and (= cid col-name) (= (aget rowInfo "original" row-header) row-name)) "bold" "normal")}}
      #js {:style #js {:textAlign "right" :fontWeight (if (and (= cid col-name) (= (aget rowInfo "original" row-header) row-name)) "bold" "normal")}})))

;;;;;;;;;;;;;;;;
;CELL RENDERING;
;;;;;;;;;;;;;;;;

(defn nb-cell-format
  "This will write a single cell.
  Note that [this] has access to the full row so conditional evaluation is possible (e.g. change column B based on values in column A)
  Here we take the input value if it's there, scale it (useful for percentages) and format it."
  [fmt m this]
  (if-let [x (aget this "value")] (gstring/format fmt (* m x)) "-"))

(defn nb-thousand-cell-format
  "This will write a single cell."
  [this]
  (if-let [x (aget this "value")] (.format (NumberFormat. Format/DECIMAL) (str (js/Math.round x))) "-"))

(defn lower-case-s-in-value?
  "Checks if s (already assumed lower case) is in value. If s starts by -, excludes it"
  [s value]
  (if value                                                 ;checks for nil
    (case (.charAt s 0)
      ">" (> value (* 1 (cljs.reader/read-string (subs s 1))))
      "<" (< value (* 1 (cljs.reader/read-string (subs s 1))))
      "=" (= value (* 1 (cljs.reader/read-string (subs s 1))))
      "-" (not (.includes ^js/String (.toLowerCase ^js/String value) (.substring s 1)))
      (if (number? value) (= (cljs.reader/read-string s) value) (.includes ^js/String (.toLowerCase ^js/String value) s)))))

;(defn lower-case-s-in-value-stable?
;  "Checks if s (already assumed lower case) is in value. If s starts by -, excludes it"
;  [^js/String s ^js/String value]
;  (if value                                                 ;checks for nil
;    (if (= (.charAt s 0) "-")
;      (not (.includes ^js/String (.toLowerCase ^js/String value) (.substring s 1)))
;      (.includes ^js/String (.toLowerCase ^js/String value) s))))

(defn text-filter-OR
  "filterfn is {id: column_name value: text_in_filter_box}
  OR through comma separation, AND through &"
  [filterfn row]
  (let [id (.toLowerCase ^string (str (aget row (aget filterfn "id"))))]
    (some true?
          (map (fn [line] (every? true? (map #(lower-case-s-in-value? % id) (.split ^js/String line "&"))))
               (.split ^js/String (.replaceAll (.toLowerCase ^js/String (aget filterfn "value")) " " "") ",")))))

;(defn text-filter-OR-old [filterfn row]
;  "filterfn is {id: column_name value: text_in_filter_box}
;  OR through comma separation"
;  (let [filter-values (clojure.string/split (.toLowerCase ^string (aget filterfn "value")) ",")]
;    (some true? (map (fn [s]  (if (= (.charAt s 0) "-")
;                                (not (.includes ^string (.toLowerCase ^string (str (aget row (aget filterfn "id")))) (.substring s 1)))
;                                (.includes ^string (.toLowerCase ^string (str (aget row (aget filterfn "id")))) s)))
;                     filter-values))))


(defn cljs-text-filter-OR-fn
  "Used for pivot tables - creates the filter function which will filter the source data directly. Slow as re-renders everytime."
  [filterfn]
  (let [filter-chain (into {} (for [line filterfn] [(keyword (aget line "id")) (aget line "value")]))]
    (into {} (for [[k filter-values] filter-chain]
               [k
                (fn [line]
                  (some true?
                        (map (fn [subline] (every? true? (map #(lower-case-s-in-value? % line) (.split ^js/String subline "&"))))
                             (.split (.replaceAll (.toLowerCase ^js/String filter-values) " " "") ","))))]))))


(defn cljs-text-filter-OR-fn-alpha
  "Used for pivot tables - creates the filter function which will filter the source data directly. Slow as re-renders everytime."
  [filterfn]
  (let [filter-chain (into {} (for [line filterfn] [(keyword (aget line "id")) (aget line "value")]))]
    (into {} (for [[k filter-values] filter-chain]
               [k
                (fn [line]
                  (some true?
                        (map #(lower-case-s-in-value? % line)
                             (.split (.toLowerCase ^js/String filter-values) ","))))]))))

(defn cljs-text-filter-OR
  "Combining the latter two functions to filter the source data"
  [filterfn table]
  (t/chainfilter (cljs-text-filter-OR-fn filterfn) table))

(defn comparator-read [rowval mult input]
  (case (subs input 0 1)
    ">" (> rowval (* mult (cljs.reader/read-string (subs input 1))))
    "<" (< rowval (* mult (cljs.reader/read-string (subs input 1))))
    "=" (= rowval (* mult (cljs.reader/read-string (subs input 1))))
    (= rowval (* mult (cljs.reader/read-string input)))))

(defn nb-filter-OR-AND
  "filterfn is {id: column_name value: text_in_filter_box
  comma separation is OR. Within comma separation, & is AND."
  [filterfn row]
  (let [compread #(comparator-read (aget row (aget filterfn "id")) 1. %)]
    (some true?
          (map (fn [line] (every? true? (map compread (.split ^js/String line "&"))))
               (.split ^js/String (.toLowerCase ^js/String (aget filterfn "value")) ",")))))

(defn nb-filter-OR-AND-x100
  "filterfn is {id: column_name value: text_in_filter_box
  comma separation is OR. Within comma separation, & is AND."
  [filterfn row]
  (let [compread #(comparator-read (aget row (aget filterfn "id")) 0.01 %)]
    (some true?
          (map (fn [line] (every? true? (map compread (.split ^js/String line "&"))))
               (.split ^js/String (.toLowerCase ^js/String (aget filterfn "value")) ",")))))

(defn txt-format [fmt m this]    (if-let [x (aget this "value")] (gstring/format fmt (* m x)) "-"))
;Using anonymous function instead of partial below as slightly faster (non variadic)
(def round3         #(txt-format "%.3f" 1. %))
(def round2         #(txt-format "%.2f" 1. %))
(def round1         #(txt-format "%.1f" 1. %))
(def round0         #(txt-format "%.0f" 1. %))
(def yield-format   #(txt-format "%.2f%" 1. %))
(def yield-format*100 #(txt-format "%.2f%" 100. %))
(def zspread-format #(txt-format "%.0fbps" 1. %))
(def round2*100     #(txt-format "%.2f" 100. %))
(def round1*100     #(txt-format "%.1f" 100. %))
(defn round2-if-nb [this] (if-let [x (aget this "value")] (if (number? x) (gstring/format "%.2f" x) x) "-")) ;(r/as-element (if-let [x (aget this "value")] (if (number? x) (gstring/format "%.2f" x) x) "-"))
(defn dash-for-nil-and-big-nb [this] (if-let [x (aget this "value")] (if (and (number? x) (> x 1000.)) (nf x) x) "-")) ;(defn dash-for-nil-and-big-nb [this] (r/as-element (if-let [x (aget this "value")] (if (and (number? x) (> x 1000.)) (nf x) x) "-")))

(defn rating-sort [a b]
  (let [t @(rf/subscribe [:rating-to-score])] (<= (t (keyword a)) (t (keyword b)))))

(defn round2*100-if-not0 [this] (if-let [x (aget this "value")] (if (and (number? x) (not (zero? x))) (gstring/format "%.2f" (* 100. x)) "-") "-"))
(defn round0*100-if-not0 [this] (if-let [x (aget this "value")] (if (and (number? x) (not (zero? x))) (gstring/format "%.0fbps" (* 100. x)) "-") "-"))
(defn round2-if-not0 [this] (if-let [x (aget this "value")] (if (and (number? x) (not (zero? x))) (gstring/format "%.2f" x) "-") "-"))

(defn roundpc [fmt this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div {:style {:color (if (neg? x) "red" "black")}} (gstring/format fmt (* 100 x))]
      "-")))

(defn roundpc-no-mult [fmt this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div {:style {:color (if (neg? x) "red" "black")}} (gstring/format fmt x)]
      "-")))

(defn roundpc-no-color [fmt this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div {:style {:color "black"}} (gstring/format fmt (* 100 x))]
      "-")))

(defn roundpc-italic [fmt this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div {:style {:color (if (neg? x) "red" "black") :font-style "italic"}} (str "*" (gstring/format fmt (* 100 x)))]
      "-")))

(defn sort-msci-rating [a b]
  (let [ax (.indexOf ["Total" "AAA" "AA" "A" "BBB" "BB" "B" "CCC" "NA"] a )
        bx (.indexOf ["Total" "AAA" "AA" "A" "BBB" "BB" "B" "CCC" "NA"] b)]
    (<= ax bx)))

(def round0pc #(roundpc "%.0f%" %))
(def round1pc #(roundpc "%.1f%" %))
(def round2pc #(roundpc "%.2f%" %))
(def round2pc-no-mult #(roundpc-no-mult "%.2f%" %))
(def round2pc-no-red #(roundpc-no-color "%.2f%" %))
(def round3pc #(roundpc "%.3f%" %))

(def this-year (str (.getYear (today))))

(defn ytd-ita [this]
  (r/as-element
    (if-let [x (aget this "value")]
      (if (= (str (subs (aget this "row" "FIRST_SETTLE_DT" ) 0 4)) this-year)
        [:div {:style {:color (if (neg? x) "red" "black") :font-style "italic"}} (str "*" (gstring/format "%.2f%" (* 100 x)))]
        [:div {:style {:color (if (neg? x) "red" "black")}} (gstring/format "%.2f%" (* 100 x))])
      "-")))

(defn sub-low-level-rating-score-to-string [x]
  (let [i (dec (js/parseInt x))]
    (if (<= 0 i 23)
      (nth ["AAA" "AA+" "AA" "AA-" "A+" "A" "A-" "BBB+" "BBB" "BBB-" "BB+" "BB" "BB-" "B+" "B" "B-" "CCC+" "CCC" "CCC-" "CC" "C" "D" "NM" "NR"] i)
      "NA")))

(defn low-level-rating-score-to-string
  [this]
  (if-let [x (aget this "value")]
    (sub-low-level-rating-score-to-string x)
     "NA"))


(defn rating-score-to-string [this] (aget this "row" "qt-iam-int-lt-median-rating"))

(defn total-txt [row] "Total")

(defn text-col [header accessor width] {:Header header :accessor accessor :width width})
(defn nb-col
  ([header accessor width cell aggregate]
   (assoc (nb-col header accessor width cell) :aggregate aggregate))
  ([header accessor width cell]
   {:Header header :accessor accessor :width width :getProps red-negatives :Cell cell :filterable true :filterMethod nb-filter-OR-AND}))


(def risk-table-columns
  (let [round2 #(nb-cell-format "%.2f" 1. %)
        round1 #(nb-cell-format "%.1f" 1. %)
        round2pc #(nb-cell-format "%.2f%" 1. %)]
    {:id                               {:Header "ID" :accessor "id" :show false}
     :id-show                          (text-col "ID" "id" 65)
     :region                           (text-col "Region" "jpm-region" 120)
     :emd-region                       (text-col "Region" "emd-region" 120)
     :country                          (text-col "Country" "qt-risk-country-name" 120)
     :issuer                           (text-col "Issuer" "TICKER" 120)
     :sector                           (text-col "Sector" "qt-jpm-sector" 120)
     :maturity-band                    (text-col "Maturity" "qt-final-maturity-band" 120)
     :rating                           {:Header "Rating" :accessor "qt-iam-int-lt-median-rating" :show false}
     :rating-score                     {:Header "Rating" :width 120 :accessor "qt-iam-int-lt-median-rating-score" :aggregate first} ; :Cell rating-score-to-string
     :financial-seniority              (text-col "Style" "financial-seniority" 120)
     :name                             (text-col "Name" "NAME" 120)
     :isin                             (text-col "ISIN" "isin" 110)

     :description                      (text-col "thinkFolio ID" "description" 400)
     :nav                              (nb-col "Fund" "weight" 50 round2 sum-rows)
     :bm-weight                        (nb-col "Index" "bm-weight" 50 round2 sum-rows)
     :weight-delta                     (nb-col "Delta" "weight-delta" 50 round2 sum-rows)
     :nominal                          (nb-col "Nominal" "original-quantity" 100 nb-thousand-cell-format sum-rows)
     :value                            (nb-col "Value" "base-value" 100 nb-thousand-cell-format sum-rows)

     :z-spread                         (nb-col "Z" "qt-libor-spread" 45 nb-thousand-cell-format median)
     :g-spread                         (nb-col "G" "qt-govt-spread" 45 nb-thousand-cell-format median)
     :duration                         (nb-col "M dur" "qt-modified-duration" 45 round1 median)
     :yield                            (nb-col "Yield" "qt-yield" 45 round2 median)

     :contrib-gspread                  (nb-col "G-spread" "contrib-gspread" 60 round1 sum-rows)
     :contrib-zspread                  (nb-col "Fund" "contrib-zspread" 60 round1 sum-rows)
     :contrib-yield                    (nb-col "Fund" "contrib-yield" 50 round2pc sum-rows)
     :contrib-mdur                     (nb-col "Fund" "contrib-mdur" 50 round2 sum-rows)
     :bm-contrib-yield                 (nb-col "Index" "bm-contrib-yield" 50 round2pc sum-rows)
     :bm-contrib-eir-duration          (nb-col "Index" "bm-contrib-eir-duration" 50 round2 sum-rows)

     :cash-pct                         (nb-col "Cash" "cash-pct" 50 round2pc sum-rows)
     :contrib-bond-yield               (nb-col "Bond yield" "contrib-bond-yield" 70 round2pc sum-rows)

     :mdur-delta                       (nb-col "Delta" "mdur-delta" 50 round2 sum-rows)
     :contrib-beta                     (nb-col "EMCD" "contrib-beta-1y-daily" 50 round2 sum-rows)
     :cembi-beta-last-year             (nb-col (gstring/unescapeEntities "&beta;") "cembi-beta-last-year" 45 round1 median)
     :cembi-beta-previous-year         (nb-col (gstring/unescapeEntities "LY &beta;") "cembi-beta-previous-year" 45 round1 median)

     :contrib-BBG_CEMBI_D1Y_BETA       (nb-col "Fund Bbg" "contrib-BBG_CEMBI_D1Y_BETA" 65 round2 sum-rows)
     :bm-contrib-BBG_CEMBI_D1Y_BETA    (nb-col "Index Bbg" "bm-contrib-BBG_CEMBI_D1Y_BETA" 65 round2 sum-rows)
     :contrib-delta-BBG_CEMBI_D1Y_BETA (nb-col "Delta Bbg" "contrib-delta-BBG_CEMBI_D1Y_BETA" 65 round2 sum-rows)

     :total-return-ytd                 (nb-col "YTD TR" "total-return-ytd" 50 #(nb-cell-format "%.1f%" 100. %) median)
     :jensen-ytd                       (nb-col "Jensen" "jensen-ytd" 50 #(nb-cell-format "%.1f%" 100. %) median)

     :quant-value-2d                   (nb-col "2D" "quant-value-2d" 50 round2 sum-rows)
     :quant-value-4d                   (nb-col "4D" "quant-value-4d" 50 round2 sum-rows)
     :msci-rating                      (assoc (text-col "Rating" "msci-rating" 75) :sortMethod sort-msci-rating)
     }))

(defn invrtg-to-string [this] (aget this "row" "Rating"))

(def attribution-table-columns
  (let [performance-attributes {:width 70 :aggregate sum-rows :Cell #(nb-cell-format "%.2f%" 1. %) :getProps red-negatives :filterable true}
        performance-attributes-bps {:width 70 :aggregate sum-rows :Cell #(nb-cell-format "%.0f bps" 100. %) :getProps red-negatives :filterable true}]
    {:region          {:Header "Region" :accessor "Region" :width 140}
     :country         {:Header "Country" :accessor "Country" :width 140}
     :issuer          {:Header "Issuer" :accessor "Issuer" :width 140}
     :sector          {:Header "Sector" :accessor "Sector" :width 140}
     :maturity-band   {:Header "Maturity" :accessor "Duration-Bucket" :width 140}
     :portfolio       {:Header "Portfolio" :accessor "Fund" :width 140}

     :total-effect    (merge {:Header "Fund" :accessor "Total-Effect"} performance-attributes)
     :xs-weight       (merge {:Header "Excess" :accessor "Average-Excess-Weight"} performance-attributes)
     :weight          (merge {:Header "Fund" :accessor "Average-Fund-Weight"} performance-attributes)
     :bm-weight       (merge {:Header "Index" :accessor "Average-Index-Weight"} performance-attributes)
     :contribution    (merge {:Header "Fund" :accessor "Fund-Contribution"} performance-attributes)
     :bm-contribution (merge {:Header "Index" :accessor "Index-Contribution"} performance-attributes)

     :total-effect-wtd    (merge {:Header "Effect" :accessor "Total-Effect-wtd"} performance-attributes-bps)
     :xs-weight-wtd       (merge {:Header "Excess" :accessor "Average-Excess-Weight-wtd"} performance-attributes)
     :weight-wtd          (merge {:Header "Fund" :accessor "Average-Fund-Weight-wtd"} performance-attributes)
     :bm-weight-wtd       (merge {:Header "Index" :accessor "Average-Index-Weight-wtd"} performance-attributes)
     :contribution-wtd    (merge {:Header "Fund cont." :accessor "Fund-Contribution-wtd"} performance-attributes-bps)
     :bm-contribution-wtd (merge {:Header "Index cont." :accessor "Index-Contribution-wtd"} performance-attributes-bps)

     :total-effect-ytd    (merge {:Header "Effect" :accessor "Total-Effect-ytd"} performance-attributes-bps)
     :xs-weight-ytd       (merge {:Header "Excess %" :accessor "Average-Excess-Weight-ytd"} performance-attributes)
     :weight-ytd          (merge {:Header "Fund %" :accessor "Average-Fund-Weight-ytd"} performance-attributes)
     :bm-weight-ytd       (merge {:Header "Index %" :accessor "Average-Index-Weight-ytd"} performance-attributes)
     :contribution-ytd    (merge {:Header "Fund cont." :accessor "Fund-Contribution-ytd"} performance-attributes-bps)
     :bm-contribution-ytd (merge {:Header "Index cont." :accessor "Index-Contribution-ytd"} performance-attributes-bps)

     :total-effect-pwtd    (merge {:Header "Effect" :accessor "Total-Effect-pwtd"} performance-attributes-bps)
     :xs-weight-pwtd       (merge {:Header "Excess" :accessor "Average-Excess-Weight-pwtd"} performance-attributes)
     :weight-pwtd          (merge {:Header "Fund" :accessor "Average-Fund-Weight-pwtd"} performance-attributes)
     :bm-weight-pwtd       (merge {:Header "Index" :accessor "Average-Index-Weight-pwtd"} performance-attributes)
     :contribution-pwtd    (merge {:Header "Fund cont." :accessor "Fund-Contribution-pwtd"} performance-attributes-bps)
     :bm-contribution-pwtd (merge {:Header "Index cont." :accessor "Index-Contribution-pwtd"} performance-attributes-bps)

     :rating          {:Header "Rating" :accessor "Rating" :width 140 :show false}
     :rating-group    {:Header "Rating Group" :accessor "RatingGroup" :width 140}
     :code            {:Header "Code" :accessor "Code" :width 140}
     :ighy            {:Header "IGHY" :accessor "IGHY" :width 140}
     :invrtg          {:Header "Rating" :accessor "INVRTG" :width 140 :Cell invrtg-to-string :aggregate first}
     :period          {:Header "Period" :accessor "Period" :width 140}
     :security        {:Header "Security" :accessor "Security" :width 140}
     }))

(defn tree-table-risk-table
  [data columns is-tree accessors ref table-filter expander get-tr-props-fn]
  [:> ReactTable
   {:data @(rf/subscribe [data]) :columns columns
    :showPagination (not is-tree) :pageSize (if is-tree 1 18) :showPageSizeOptions false
    :sortable true
    :defaultFilterMethod (if is-tree (fn [filterfn row] true) text-filter-OR)
    :ref #(reset! ref %)
    :expanded @(rf/subscribe [expander]) :onExpandedChange #(rf/dispatch [expander %])
    :pivotBy (if is-tree (concat [:totaldummy] accessors) [])
    :className "-striped -highlight" :getTrProps (if is-tree (fn [state rowInfo instance] #js {}) get-tr-props-fn)
    :filterable true :defaultFiltered @(rf/subscribe [table-filter]) :onFilteredChange #(rf/dispatch [table-filter %])}])