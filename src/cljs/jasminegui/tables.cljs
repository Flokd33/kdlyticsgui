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


(defn nfcell [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div  (nf (int x))]
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

(defn txt-format [fmt this]    (r/as-element (if-let [x (aget this "value")] (gstring/format fmt x) "-")))
(def round3         (partial txt-format "%.3f"))
(def round2         (partial txt-format "%.2f"))
(def round1         (partial txt-format "%.1f"))
(def yield-format   (partial txt-format "%.2f%"))
(def zspread-format (partial txt-format "%.0fbps"))

(defn rating-sort [a b]
  (let [t @(rf/subscribe [:rating-to-score])] (<= (t (keyword a)) (t (keyword b)))))



(defn roundpc [fmt this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div {:style {:color (if (neg? x) "red" "black")}} (gstring/format fmt (* 100 x))]
      "-")))

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



(defn rating-score-to-string [this] (aget this "row" "qt-iam-int-lt-median-rating"))


(def table-columns
  {:id                          {:Header "ID"             :accessor "id"                          :show false}
   :id-show                     {:Header "ID"             :accessor "id"                          :width 75}
   :region                      {:Header "Region"         :accessor "jpm-region" :width 140 }
   :country                     {:Header "Country"        :accessor "qt-risk-country-name" :width 140}
   :issuer                      {:Header "Issuer"         :accessor "TICKER" :width 140 }
   :sector                      {:Header "Sector"         :accessor "qt-jpm-sector" :width 140}
   :rating                      {:Header "Rating"         :accessor "qt-iam-int-lt-median-rating" :show false}  ; :show false
   ;  :rating                      {:Header "Rating" :accessor "qt-iam-int-lt-median-rating"  :show false} :sortMethod rating-sort} ; :show false
   :rating-score                {:Header "Rating"         :accessor "qt-iam-int-lt-median-rating-score" :Cell rating-score-to-string :aggregate first}
   :name                        {:Header "Name"           :accessor "NAME" :width 140} ;  :filterMethod case-insensitive-filter
   :isin                        {:Header "ISIN"           :accessor "isin"                        :width 125 } ;:style {:textAlign "center"}
   :description                 {:Header "thinkFolio ID"  :accessor "description" :width 500}
   :nav                         {:Header "Fund"           :accessor "weight" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable true :filterMethod compare-nb}
   :bm-weight                   {:Header "Index"          :accessor "bm-weight" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable true :filterMethod compare-nb}
   :nominal                     {:Header "Nominal"        :accessor "original-quantity" :width 120 :style {:textAlign "right"} :aggregate sum-rows :Cell nfcell :filterable true :filterMethod compare-nb}
   :z-spread                    {:Header "Z-spread"       :accessor "qt-libor-spread" :width 80 :style {:textAlign "right"} :aggregate median :Cell nfcell :filterable true :filterMethod compare-nb}
   :g-spread                    {:Header "G-spread"       :accessor "qt-govt-spread" :width 80 :style {:textAlign "right"} :aggregate median :Cell nfcell :filterable true :filterMethod compare-nb}
   :duration                    {:Header "M dur"          :accessor "qt-modified-duration" :width 60 :style {:textAlign "right"} :aggregate median :Cell round2 :filterable true :filterMethod compare-nb}
   :yield                       {:Header "Yield"          :accessor "qt-yield" :width 60 :style {:textAlign "right"} :aggregate median :Cell round2pc :filterable true :filterMethod compare-nb}
   :value                       {:Header "Value"          :accessor "base-value" :width 120 :style {:textAlign "right"} :aggregate sum-rows :Cell nfcell :filterable true :filterMethod compare-nb}
   :contrib-gspread             {:Header "G-spread"       :accessor "contrib-gspread" :width 80 :style {:textAlign "right"} :aggregate sum-rows :Cell round1 :filterable false}
   :contrib-zspread             {:Header "Fund"           :accessor "contrib-zspread" :width 80 :style {:textAlign "right"} :aggregate sum-rows :Cell round1 :filterable false}
   :contrib-yield               {:Header "Fund"           :accessor "contrib-yield" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2pc :filterable false}
   :contrib-mdur                {:Header "Fund"           :accessor "contrib-mdur" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
   :bm-contrib-yield            {:Header "Index"          :accessor "bm-contrib-yield" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2pc :filterable false}
   :bm-contrib-eir-duration     {:Header "Index"          :accessor "bm-contrib-eir-duration" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}
   :cash-pct                    {:Header "Cash"           :accessor "cash-pct" :width 60 :style {:textAlign "right"} :Cell yield-format :filterable false}
   :contrib-bond-yield          {:Header "Bond yield"     :accessor "contrib-bond-yield" :width 80 :style {:textAlign "right"} :Cell round2pc :filterable false}
   :weight-delta                {:Header "Delta"          :accessor "weight-delta" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable true :filterMethod compare-nb}
   :mdur-delta                  {:Header "Delta"          :accessor "mdur-delta" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2 :filterable false}

   })

