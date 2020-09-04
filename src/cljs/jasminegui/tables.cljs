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
(defn round-to-thousand [x] (* 1000 (int (/ x 1000.))))
(def tnfmt (comp nf round-to-thousand))

(defn nf2 [x] (.format nff x))

(defn nfcell [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div  (nf (int x))]
      "-")))

(defn nfcell2 [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div  (.format nff x)]
      "-")))


(defn case-insensitive-filter [filterfn row]
  "filterfn is {id: column_name value: text_in_filter_box"
  ;(println row)
  (.includes (.toLowerCase (str (aget row (aget filterfn "id")))) (.toLowerCase (aget filterfn "value")))

  ;(or
  ;  (.includes (.toLowerCase (str (aget row (aget filterfn "id")))) (.toLowerCase (aget filterfn "value")))
  ;  (.includes (.toLowerCase (str (aget row (aget filterfn "_pivotId")))) (.toLowerCase (aget filterfn "value")))
  ;  )

  )

(defn txt-format [fmt m this]    (r/as-element (if-let [x (aget this "value")] (gstring/format fmt (* m x)) "-")))
(def round3         (partial txt-format "%.3f" 1.))
(def round2         (partial txt-format "%.2f" 1.))
(def round1         (partial txt-format "%.1f" 1.))
(def yield-format   (partial txt-format "%.2f%" 1.))
(def zspread-format (partial txt-format "%.0fbps" 1.))
(def round2*100     (partial txt-format "%.2f" 100.))
(defn round2-if-nb [this] (r/as-element (if-let [x (aget this "value")] (if (number? x) (gstring/format "%.2f" x) x) "-")))
(defn dash-for-nil-and-big-nb [this] (r/as-element (if-let [x (aget this "value")] (if (and (number? x) (> x 1000.)) (nf x) x) "-")))

(defn rating-sort [a b]
  (let [t @(rf/subscribe [:rating-to-score])] (<= (t (keyword a)) (t (keyword b)))))



(defn roundpc [fmt this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div {:style {:color (if (neg? x) "red" "black")}} (gstring/format fmt (* 100 x))]
      "-")))

(def round0pc (partial roundpc "%.0f%"))
(def round1pc (partial roundpc "%.1f%"))
(def round2pc (partial roundpc "%.2f%"))

(defn round1pcytd  [this]
  (r/as-element
    (if-let [x (aget this "value")]
      (let [style (merge (if (neg? x) {:color "red"} {:color "black"})
                         (if (aget this "row" "thisyear") {:font-style "italic"} {}))]
        [:div {:style style} (gstring/format "%.1f%" (* 100 x))])
      "-")))

(defn compare-nb [filterfn row]
  "filterfn is {id: column_name value: text_in_filter_box"
  (let [input (aget filterfn "value")
        rowval (aget row (aget filterfn "id"))]
    (case (subs input 0 1)
      ">" (> rowval (cljs.reader/read-string (subs input 1)))
      "<" (< rowval (cljs.reader/read-string (subs input 1)))
      (> rowval (cljs.reader/read-string input)))))

(defn compare-nb-d100 [filterfn row]
  "filterfn is {id: column_name value: text_in_filter_box"
  (let [input (aget filterfn "value")
        rowval (aget row (aget filterfn "id"))]
    (case (subs input 0 1)
      ">" (> rowval (* 0.01 (cljs.reader/read-string (subs input 1))))
      "<" (< rowval (* 0.01 (cljs.reader/read-string (subs input 1))))
      (> rowval (* 0.01 (cljs.reader/read-string input))))))

(defn round2colpct  [this]
  (r/as-element
    (if-let [x (aget this "value")]
      (letfn [(colorize [c v] [:div {:style {:color c}} (gstring/format "%.2f%" v)])]
        (cond
          (>= x 0.0) (colorize "black" x)
          (< x 0.0) (colorize "red" x)
          :else "-"))
      "-")))

(defn round2colpct*100  [this]
  (r/as-element
    (if-let [x (aget this "value")]
      (letfn [(colorize [c v] [:div {:style {:color c}} (gstring/format "%.2f%" (* 100. v))])]
        (cond
          (>= x 0.0) (colorize "black" x)
          (< x 0.0) (colorize "red" x)
          :else "-"))
      "-")))

(defn rating-score-to-string [this] (aget this "row" "qt-iam-int-lt-median-rating"))


(def risk-table-columns
  {:id                          {:Header "ID"             :accessor "id"                          :show false}
   :id-show                     {:Header "ID"             :accessor "id"                          :width 75}
   :region                      {:Header "Region"         :accessor "jpm-region" :width 140 }
   :country                     {:Header "Country"        :accessor "qt-risk-country-name" :width 140}
   :issuer                      {:Header "Issuer"         :accessor "TICKER" :width 140 }
   :sector                      {:Header "Sector"         :accessor "qt-jpm-sector" :width 140}
   :maturity-band               {:Header "Maturity"       :accessor "qt-final-maturity-band" :width 140}
   :rating                      {:Header "Rating"         :accessor "qt-iam-int-lt-median-rating" :show false}  ; :show false
   ;  :rating                      {:Header "Rating" :accessor "qt-iam-int-lt-median-rating"  :show false} :sortMethod rating-sort} ; :show false
   :rating-score                {:Header "Rating"         :accessor "qt-iam-int-lt-median-rating-score" :Cell rating-score-to-string :aggregate first}
   :name                        {:Header "Name"           :accessor "NAME" :width 140} ;  :filterMethod case-insensitive-filter
   :isin                        {:Header "ISIN"           :accessor "isin"                        :width 125 } ;:style {:textAlign "center"}
   :description                 {:Header "thinkFolio ID"  :accessor "description" :width 500}
   :nav                         {:Header "Fund"           :accessor "weight" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2*100 :filterable true :filterMethod compare-nb-d100}
   :bm-weight                   {:Header "Index"          :accessor "bm-weight" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2*100 :filterable true :filterMethod compare-nb-d100}
   :nominal                     {:Header "Nominal"        :accessor "original-quantity" :width 120 :style {:textAlign "right"} :aggregate sum-rows :Cell nfcell :filterable true :filterMethod compare-nb}
   :z-spread                    {:Header "Z-spread"       :accessor "qt-libor-spread" :width 80 :style {:textAlign "right"} :aggregate median :Cell nfcell :filterable true :filterMethod compare-nb}
   :g-spread                    {:Header "G-spread"       :accessor "qt-govt-spread" :width 80 :style {:textAlign "right"} :aggregate median :Cell nfcell :filterable true :filterMethod compare-nb}
   :duration                    {:Header "M dur"          :accessor "qt-modified-duration" :width 60 :style {:textAlign "right"} :aggregate median :Cell round2 :filterable true :filterMethod compare-nb}
   :yield                       {:Header "Yield"          :accessor "qt-yield" :width 60 :style {:textAlign "right"} :aggregate median :Cell round2pc :filterable true :filterMethod compare-nb-d100}
   :value                       {:Header "Value"          :accessor "base-value" :width 120 :style {:textAlign "right"} :aggregate sum-rows :Cell nfcell :filterable true :filterMethod compare-nb}
   :contrib-gspread             {:Header "G-spread"       :accessor "contrib-gspread" :width 80 :style {:textAlign "right"} :aggregate sum-rows :Cell round1 :filterable false}
   :contrib-zspread             {:Header "Fund"           :accessor "contrib-zspread" :width 80 :style {:textAlign "right"} :aggregate sum-rows :Cell round1 :filterable false}
   :contrib-yield               {:Header "Fund"           :accessor "contrib-yield" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2pc :filterable false}
   :contrib-mdur                {:Header "Fund"           :accessor "contrib-mdur" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
   :bm-contrib-yield            {:Header "Index"          :accessor "bm-contrib-yield" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2pc :filterable false}
   :bm-contrib-eir-duration     {:Header "Index"          :accessor "bm-contrib-eir-duration" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
   :cash-pct                    {:Header "Cash"           :accessor "cash-pct" :width 60 :style {:textAlign "right"} :Cell round2pc :filterable false}
   :contrib-bond-yield          {:Header "Bond yield"     :accessor "contrib-bond-yield" :width 80 :style {:textAlign "right"} :Cell round2pc :filterable false}
   :weight-delta                {:Header "Delta"          :accessor "weight-delta" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2*100 :filterable true :filterMethod compare-nb-d100}
   :mdur-delta                  {:Header "Delta"          :accessor "mdur-delta" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
   :contrib-beta                {:Header "Fund"           :accessor "contrib-beta-1y-daily" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
   :cembi-beta-last-year        {:Header "1y beta"        :accessor "cembi-beta-last-year" :width 60 :style {:textAlign "right"} :aggregate median :Cell round2 :filterable false}
   :cembi-beta-previous-year    {:Header "LY beta"        :accessor "cembi-beta-previous-year" :width 60 :style {:textAlign "right"} :aggregate median :Cell round2 :filterable false}
   :total-return-ytd            {:Header "YTD TR"         :accessor "total-return-ytd" :width 60 :style {:textAlign "right"} :aggregate median :Cell round2*100 :filterable true :filterMethod compare-nb-d100}
   :jensen-ytd                  {:Header "Jensen"         :accessor "jensen-ytd" :width 60 :style {:textAlign "right"} :aggregate median :Cell round2*100 :filterable true :filterMethod compare-nb-d100}
   })

(defn invrtg-to-string [this] (aget this "row" "Rating"))

(def attribution-table-columns
  {:region                      {:Header "Region"         :accessor "Region" :width 140 }
   :country                     {:Header "Country"        :accessor "Country" :width 140}
   :issuer                      {:Header "Issuer"         :accessor "Issuer" :width 140 }
   :sector                      {:Header "Sector"         :accessor "Sector" :width 140}
   :maturity-band               {:Header "Maturity"       :accessor "Duration-Bucket" :width 140}
   :portfolio                   {:Header "Portfolio"       :accessor "Fund" :width 140}
   :total-effect                {:Header "Fund" :accessor "Total-Effect"  :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}
   :xs-weight                   {:Header "Excess"   :accessor "Average-Excess-Weight"  :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}
   :weight                      {:Header "Fund"   :accessor "Average-Fund-Weight" :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}
   :bm-weight                   {:Header "Index"   :accessor "Average-Index-Weight" :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}
   :contribution                {:Header "Fund"   :accessor "Fund-Contribution" :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}
   :bm-contribution             {:Header "Index"   :accessor "Index-Contribution" :width 70 :style {:textAlign "right"} :aggregate sum-rows :Cell round2colpct :filterable false}
   :rating                      {:Header "Rating"   :accessor "Rating" :width 140 :show false}
   :rating-group                {:Header "Rating Group"   :accessor "RatingGroup" :width 140}
   :code                        {:Header "Code" :accessor "Code" :width 140}
   :ighy                        {:Header "IGHY" :accessor "IGHY" :width 140}
   :invrtg                      {:Header "Rating" :accessor "INVRTG" :width 140  :Cell invrtg-to-string :aggregate first}
   :period                      {:Header "Period" :accessor "Period" :width 140}
   :security                    {:Header "Security" :accessor "Security" :width 140}
   })

