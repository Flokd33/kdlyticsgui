(ns jasminegui.tables
  (:require
    ; [oz.core :as oz]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [goog.string :as gstring]
    [goog.string.format])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))

    )

;AGGREGATION
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
;(defn round-to-thousand [x] (* 1000 (int (/ x 1000.))))
;(def tnfmt (comp nf round-to-thousand))

;(defn nf2 [x] (.format nff x))

;(defn nfcell [this]
;  (r/as-element
;    (if-let [x (aget this "value")]
;      [:div  (nf (int x))]
;      "-")))

(defn nfcell2 [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div  (.format nff x)]
      "-")))

;COLUMN FORMATTING

(defn red-negatives [state rowInfo column]
  "right align, with red text if negative"
  (if (and (some? rowInfo) (neg? (aget rowInfo "row" (aget column "id"))))
    (clj->js {:style {:color "red" :textAlign "right"}})
    (clj->js {:style {:textAlign "right"}})))


;CELL RENDERING

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

;(defn boolean-cell-to-yes-no [this] (if (aget this "value") "Y" "N")) ; nil and false are the same
;
;(defn boolean-filter-yes-no [filterfn row]
;  (let [yes-no (aget filterfn "value")
;        rowval (aget row (aget filterfn "id"))]
;    (cond
;      (or (= yes-no "Y") (= yes-no "y")) rowval
;      (or (= yes-no "Y") (= yes-no "y")) (not rowval)
;      :else false)))

(defn text-filter-OR [filterfn row]
  "filterfn is {id: column_name value: text_in_filter_box}
  OR through comma separation"
  (let [filter-values (clojure.string/split (.toLowerCase ^string (aget filterfn "value")) ",")]
    (some true? (map (fn [s]  (if (= (.charAt s 0) "-")
                                (not (.includes ^string (.toLowerCase ^string (str (aget row (aget filterfn "id")))) (.substring s 1)))
                                (.includes ^string (.toLowerCase ^string (str (aget row (aget filterfn "id")))) s)))
                     filter-values))))

(defn comparator-read [rowval mult input]
  (case (subs input 0 1)
    ">" (> rowval (* mult (cljs.reader/read-string (subs input 1))))
    "<" (< rowval (* mult (cljs.reader/read-string (subs input 1))))
    "=" (= rowval (* mult (cljs.reader/read-string (subs input 1))))
    (= rowval (* mult (cljs.reader/read-string input)))))

(defn nb-filter-OR-AND [filterfn row]
  "filterfn is {id: column_name value: text_in_filter_box
  comma separation is OR. Within comma separation, & is AND."
  (let [compread (partial comparator-read (aget row (aget filterfn "id")) 1.)]
    (some true?
          (map (fn [line] (every? true? (map compread (.split ^js/String line "&"))))
               (.split ^js/String (.toLowerCase ^js/String (aget filterfn "value")) ",")))))

(defn nb-filter-OR-AND-x100 [filterfn row]
  "filterfn is {id: column_name value: text_in_filter_box
  comma separation is OR. Within comma separation, & is AND."
  (let [compread (partial comparator-read (aget row (aget filterfn "id")) 0.01)]
    (some true?
          (map (fn [line] (every? true? (map compread (.split ^js/String line "&"))))
               (.split ^js/String (.toLowerCase ^js/String (aget filterfn "value")) ",")))))

;(defn compare-nb-old [filterfn row]
;  "filterfn is {id: column_name value: text_in_filter_box"
;  (let [input (aget filterfn "value")
;        rowval (aget row (aget filterfn "id"))]
;    (case (subs input 0 1)
;      ">" (> rowval (cljs.reader/read-string (subs input 1)))
;      "<" (< rowval (cljs.reader/read-string (subs input 1)))
;      "=" (= rowval (cljs.reader/read-string (subs input 1)))
;      (= rowval (cljs.reader/read-string input)))))
;
;(defn compare-nb-d100-old [filterfn row]
;  "filterfn is {id: column_name value: text_in_filter_box"
;  (let [input (aget filterfn "value")
;        rowval (aget row (aget filterfn "id"))]
;    (case (subs input 0 1)
;      ">" (> rowval (* 0.01 (cljs.reader/read-string (subs input 1))))
;      "<" (< rowval (* 0.01 (cljs.reader/read-string (subs input 1))))
;      "=" (= rowval (* 0.01 (cljs.reader/read-string (subs input 1))))
;      (= rowval (* 0.01 (cljs.reader/read-string input))))))




(defn txt-format [fmt m this]    (r/as-element (if-let [x (aget this "value")] (gstring/format fmt (* m x)) "-")))
(def round3         (partial txt-format "%.3f" 1.))
(def round2         (partial txt-format "%.2f" 1.))
(def round1         (partial txt-format "%.1f" 1.))
(def yield-format   (partial txt-format "%.2f%" 1.))
(def zspread-format (partial txt-format "%.0fbps" 1.))
(def round2*100     (partial txt-format "%.2f" 100.))
(def round1*100     (partial txt-format "%.1f" 100.))
(defn round2-if-nb [this] (r/as-element (if-let [x (aget this "value")] (if (number? x) (gstring/format "%.2f" x) x) "-")))
(defn dash-for-nil-and-big-nb [this] (r/as-element (if-let [x (aget this "value")] (if (and (number? x) (> x 1000.)) (nf x) x) "-")))

(defn rating-sort [a b]
  (let [t @(rf/subscribe [:rating-to-score])] (<= (t (keyword a)) (t (keyword b)))))

(defn round2*100-if-pos [this] (r/as-element (if-let [x (aget this "value")] (if (and (number? x) (pos? x)) (gstring/format "%.2f" (* 100. x)) "-") "-")))
(defn round2-if-pos [this] (r/as-element (if-let [x (aget this "value")] (if (and (number? x) (pos? x)) (gstring/format "%.2f" x) "-") "-")))

(defn roundpc [fmt this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div {:style {:color (if (neg? x) "red" "black")}} (gstring/format fmt (* 100 x))]
      "-")))

(def round0pc (partial roundpc "%.0f%"))
(def round1pc (partial roundpc "%.1f%"))
(def round2pc (partial roundpc "%.2f%"))

;(defn round1pcytd  [this]
;  (r/as-element
;    (if-let [x (aget this "value")]
;      (let [style (merge (if (neg? x) {:color "red"} {:color "black"})
;                         (if (aget this "row" "thisyear") {:font-style "italic"} {}))]
;        [:div {:style style} (gstring/format "%.1f%" (* 100 x))])
;      "-")))


;(defn round2colpct  [this]
;  (r/as-element
;    (if-let [x (aget this "value")]
;      (letfn [(colorize [c v] [:div {:style {:color c}} (gstring/format "%.2f%" v)])]
;        (cond
;          (>= x 0.0) (colorize "black" x)
;          (< x 0.0) (colorize "red" x)
;          :else "-"))
;      "-")))

;(defn round2colpct*100  [this]
;  (r/as-element
;    (if-let [x (aget this "value")]
;      (letfn [(colorize [c v] [:div {:style {:color c}} (gstring/format "%.2f%" (* 100. v))])]
;        (cond
;          (>= x 0.0) (colorize "black" x)
;          (< x 0.0) (colorize "red" x)
;          :else "-"))
;      "-")))

(defn rating-score-to-string [this] (aget this "row" "qt-iam-int-lt-median-rating"))


(def risk-table-columns
  (let [nb1000 {:style {:textAlign "right"} :Cell nb-thousand-cell-format :filterable true :filterMethod nb-filter-OR-AND}]
    {:id                       {:Header "ID" :accessor "id" :show false}
     :id-show                  {:Header "ID" :accessor "id" :width 65}
     :region                   {:Header "Region" :accessor "jpm-region" :width 120}
     :country                  {:Header "Country" :accessor "qt-risk-country-name" :width 120}
     :issuer                   {:Header "Issuer" :accessor "TICKER" :width 80}
     :sector                   {:Header "Sector" :accessor "qt-jpm-sector" :width 120}
     :maturity-band            {:Header "Maturity" :accessor "qt-final-maturity-band" :width 120}
     :rating                   {:Header "Rating" :accessor "qt-iam-int-lt-median-rating" :show false} ; :show false
     ;  :rating                      {:Header "Rating" :accessor "qt-iam-int-lt-median-rating"  :show false} :sortMethod rating-sort} ; :show false
     :rating-score             {:Header "Rating" :accessor "qt-iam-int-lt-median-rating-score" :Cell rating-score-to-string :aggregate first}
     :name                     {:Header "Name" :accessor "NAME" :width 120} ;  :filterMethod case-insensitive-filter
     :isin                     {:Header "ISIN" :accessor "isin" :width 110} ;:style {:textAlign "center"}
     :description              {:Header "thinkFolio ID" :accessor "description" :width 400}
     :nav                      {:Header "Fund" :accessor "weight" :width 50 :style {:textAlign "right"} :aggregate sum-rows :Cell round2*100 :filterable true :filterMethod nb-filter-OR-AND-x100}
     :bm-weight                {:Header "Index" :accessor "bm-weight" :width 50 :style {:textAlign "right"} :aggregate sum-rows :Cell round2*100 :filterable true :filterMethod nb-filter-OR-AND-x100}

     :nominal                  (merge {:Header "Nominal" :accessor "original-quantity" :width 100 :aggregate sum-rows} nb1000)
     :z-spread                 (merge {:Header "Z" :accessor "qt-libor-spread" :width 45 :aggregate median} nb1000)
     :g-spread                 (merge {:Header "G" :accessor "qt-govt-spread" :width 45 :aggregate median} nb1000)
     ;:nominal                  {:Header "Nominal" :accessor "original-quantity" :width 120 :style {:textAlign "right"} :aggregate sum-rows :Cell nfcell :filterable true :filterMethod compare-nb}
     ;:z-spread                 {:Header "Z-spread" :accessor "qt-libor-spread" :width 80 :style {:textAlign "right"} :aggregate median :Cell nfcell :filterable true :filterMethod compare-nb}
     ;:g-spread                 {:Header "G-spread" :accessor "qt-govt-spread" :width 80 :style {:textAlign "right"} :aggregate median :Cell nfcell :filterable true :filterMethod compare-nb}

     :duration                 {:Header "M dur" :accessor "qt-modified-duration" :width 45 :style {:textAlign "right"} :aggregate median :Cell round1 :filterable true :filterMethod nb-filter-OR-AND}
     :yield                    {:Header "Yield" :accessor "qt-yield" :width 45 :style {:textAlign "right"} :aggregate median :Cell round2*100 :filterable true :filterMethod nb-filter-OR-AND-x100}
     :value                    (merge {:Header "Value" :accessor "base-value" :width 100 :aggregate sum-rows} nb1000)
     ;:value                    {:Header "Value" :accessor "base-value" :width 120 :style {:textAlign "right"} :aggregate sum-rows :Cell nfcell :filterable true :filterMethod compare-nb}
     :contrib-gspread          {:Header "G-spread" :accessor "contrib-gspread" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round1 :filterable false}
     :contrib-zspread          {:Header "Fund" :accessor "contrib-zspread" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round1 :filterable false}
     :contrib-yield            {:Header "Fund" :accessor "contrib-yield" :width 50 :style {:textAlign "right"} :aggregate sum-rows :Cell round2pc :filterable false}
     :contrib-mdur             {:Header "Fund" :accessor "contrib-mdur" :width 50 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
     :bm-contrib-yield         {:Header "Index" :accessor "bm-contrib-yield" :width 50 :style {:textAlign "right"} :aggregate sum-rows :Cell round2pc :filterable false}
     :bm-contrib-eir-duration  {:Header "Index" :accessor "bm-contrib-eir-duration" :width 50 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
     :cash-pct                 {:Header "Cash" :accessor "cash-pct" :width 50 :style {:textAlign "right"} :Cell round2pc :filterable false}
     :contrib-bond-yield       {:Header "Bond yield" :accessor "contrib-bond-yield" :width 70 :style {:textAlign "right"} :Cell round2pc :filterable false}
     :weight-delta             {:Header "Delta" :accessor "weight-delta" :width 50 :style {:textAlign "right"} :aggregate sum-rows :Cell round2*100 :filterable true :filterMethod nb-filter-OR-AND-x100}
     :mdur-delta               {:Header "Delta" :accessor "mdur-delta" :width 50 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
     :contrib-beta             {:Header "Fund" :accessor "contrib-beta-1y-daily" :width 50 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
     :cembi-beta-last-year     {:Header (gstring/unescapeEntities "&beta;") :accessor "cembi-beta-last-year" :width 45 :style {:textAlign "right"} :aggregate median :Cell round1 :filterable false}
     :cembi-beta-previous-year {:Header (gstring/unescapeEntities "LY &beta;") :accessor "cembi-beta-previous-year" :width 45 :style {:textAlign "right"} :aggregate median :Cell round1 :filterable false}
     :total-return-ytd         {:Header "YTD TR" :accessor "total-return-ytd" :width 50 :style {:textAlign "right"} :aggregate median :Cell round1*100 :filterable true :filterMethod nb-filter-OR-AND-x100}
     :jensen-ytd               {:Header "Jensen" :accessor "jensen-ytd" :width 50 :style {:textAlign "right"} :aggregate sum-rows :Cell round1*100 :filterable true :filterMethod nb-filter-OR-AND}
     :quant-value-2d           {:Header "2D" :accessor "quant-value-2d" :width 50 :aggregate sum-rows :Cell (partial nb-cell-format "%.2f" 1.) :getProps red-negatives :filterable true :filterMethod nb-filter-OR-AND}
     :quant-value-4d           {:Header "4D" :accessor "quant-value-4d" :width 50 :aggregate sum-rows :Cell (partial nb-cell-format "%.2f" 1.) :getProps red-negatives :filterable true :filterMethod nb-filter-OR-AND}

     }))

(defn invrtg-to-string [this] (aget this "row" "Rating"))

(def attribution-table-columns
  (let [performance-attributes {:width 70 :aggregate sum-rows :Cell (partial nb-cell-format "%.2f%" 1.) :getProps red-negatives :filterable false}]
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

     :total-effect-wtd    (merge {:Header "Effect" :accessor "Total-Effect-wtd"} performance-attributes)
     :xs-weight-wtd       (merge {:Header "Excess" :accessor "Average-Excess-Weight-wtd"} performance-attributes)
     :weight-wtd          (merge {:Header "Fund" :accessor "Average-Fund-Weight-wtd"} performance-attributes)
     :bm-weight-wtd       (merge {:Header "Index" :accessor "Average-Index-Weight-wtd"} performance-attributes)
     :contribution-wtd    (merge {:Header "Fund cont." :accessor "Fund-Contribution-wtd"} performance-attributes)
     :bm-contribution-wtd (merge {:Header "Index cont." :accessor "Index-Contribution-wtd"} performance-attributes)

     :total-effect-ytd    (merge {:Header "Effect" :accessor "Total-Effect-ytd"} performance-attributes)
     :xs-weight-ytd       (merge {:Header "Excess %" :accessor "Average-Excess-Weight-ytd"} performance-attributes)
     :weight-ytd          (merge {:Header "Fund %" :accessor "Average-Fund-Weight-ytd"} performance-attributes)
     :bm-weight-ytd       (merge {:Header "Index %" :accessor "Average-Index-Weight-ytd"} performance-attributes)
     :contribution-ytd    (merge {:Header "Fund cont." :accessor "Fund-Contribution-ytd"} performance-attributes)
     :bm-contribution-ytd (merge {:Header "Index cont." :accessor "Index-Contribution-ytd"} performance-attributes)

     ;:total-effect                {:Header "Fund" :accessor "Total-Effect"  :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}
     ;:xs-weight                   {:Header "Excess"   :accessor "Average-Excess-Weight"  :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}
     ;:weight                      {:Header "Fund"   :accessor "Average-Fund-Weight" :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}
     ;:bm-weight                   {:Header "Index"   :accessor "Average-Index-Weight" :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}
     ;:contribution                {:Header "Fund"   :accessor "Fund-Contribution" :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}
     ;:bm-contribution             {:Header "Index"   :accessor "Index-Contribution" :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}

     :rating          {:Header "Rating" :accessor "Rating" :width 140 :show false}
     :rating-group    {:Header "Rating Group" :accessor "RatingGroup" :width 140}
     :code            {:Header "Code" :accessor "Code" :width 140}
     :ighy            {:Header "IGHY" :accessor "IGHY" :width 140}
     :invrtg          {:Header "Rating" :accessor "INVRTG" :width 140 :Cell invrtg-to-string :aggregate first}
     :period          {:Header "Period" :accessor "Period" :width 140}
     :security        {:Header "Security" :accessor "Security" :width 140}
     }))

