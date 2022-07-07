(ns jasminegui.tools
  (:require ["html2canvas" :as html2canvas]
            [goog.string :as gstring]
            [goog.string.format]
            [cljs-time.format :as tf])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )

(defn int->gdate [x] (goog.date.UtcDateTime.fromIsoString. (str x)))
(defn gdate->yyyyMMdd [x] (subs (.toString x) 0 8))
(defn gdate->yyyy-MM-dd [x] (let [a (subs (.toString x) 0 8)] (str (subs a 0 4) "-" (subs a 4 6) "-" (subs a 6 8))))

(defn ddMMMyyyy->gdate [x] (tf/parse (tf/formatter "dd MMMyyyy") (str (subs x 0 2) " " (subs x 2))))
(defn gdate->ddMMMyy [x] (tf/unparse (cljs-time.format/formatter "ddMMMyy") x))
;(defn gdate->yyyyMMdd [x] (tf/unparse (cljs-time.format/formatter "yyyyMMdd") x))


(defn int->dd-MM-yyyy [x]
  (let [sx (str x)]
    (str (subs sx 6 8) "-" (subs sx 4 6) "-" (subs sx 0 4))))

(defn filterkey= [k v coll] (filter #(= (get % k) v) coll))

(defn chainfilter
  "Chain filter (boolean AND). Defaults to equality if predicate is not a function.
  example: (chainfilter {:portfolio #(= % \"OGEMCORD\") :weight pos?} @positions)
  equivalent to (chainfilter {:portfolio \"OGEMCORD\" :weight pos?} @positions)"
  [m coll]
  (reduce-kv
    (fn [erg k pred]
      (filter #(if (fn? pred) (pred (get % k)) (= pred (get % k))) erg)) coll m))

;(defn vector-of-maps->csv
;  ([vector-of-maps] (vector-of-maps->csv vector-of-maps (keys (last vector-of-maps)))) ;use last not first as first is totals that are different)
;  ([vector-of-maps cols] (vector-of-maps->csv vector-of-maps cols ","))
;  ([vector-of-maps cols sep]
;   (reduce #(str %1 (clojure.string/join sep (mapv %2 cols)) "\n")
;           (str (clojure.string/join sep (map name cols)) "\n")
;           vector-of-maps)))

(defn vector-of-maps->csv-atomic
  "Much less memory hungry, and faster too"
  ([vector-of-maps] (vector-of-maps->csv-atomic vector-of-maps (keys (last vector-of-maps)))) ;use last not first as first is totals that are different)
  ([vector-of-maps cols] (vector-of-maps->csv-atomic vector-of-maps cols ","))
  ([vector-of-maps cols sep]
   (let [res (atom (str (clojure.string/join sep (map name cols)) "\n"))]
     (doseq [line vector-of-maps]
       (swap! res str (clojure.string/join sep (mapv #(get line %) cols)) "\n"))
     @res)))

(defn download-object-as-csv
  "This creates a temporary download link"
  [text export-name]
  (let [data-blob (js/Blob. #js [text] #js {:type "text/csv"})
        link (.createElement js/document "a")]
    (set! (.-href link) (.createObjectURL js/URL data-blob))
    (.setAttribute link "download" export-name)
    (.appendChild (.-body js/document) link)
    (.click link)
    (.removeChild (.-body js/document) link)))

(defn csv-link
  ([data filename] (download-object-as-csv (clj->js (vector-of-maps->csv-atomic data)) (str filename ".csv")))
  ([data filename cols] (csv-link data filename cols ","))
  ([data filename cols sep]
   (download-object-as-csv (clj->js (vector-of-maps->csv-atomic data cols sep)) (str filename ".csv"))))

(defn react-table-pivot-to-csv [view]         ;_pivotVal
  (let [pivot (first (js->clj (. (.getResolvedState view) -sortedData)))
        subrows (pivot "_subRows")]
    (into [(dissoc pivot "_subRows")] (for [row subrows] (dissoc row "_subRows")))))

(defn react-table-to-csv
  ([view filename cols]
   (csv-link (js->clj (. (.getResolvedState view) -sortedData)) filename cols))
  ([view filename cols pivoted?]
   (if pivoted?
     (csv-link (react-table-pivot-to-csv view) filename (concat ["_pivotVal"] cols))
     (react-table-to-csv view filename cols))))

(defn copy-to-clipboard [val]
  (let [el (js/document.createElement "textarea")]
    (set! (.-value el) val)
    (.appendChild js/document.body el)
    (.select el)
    (js/document.execCommand "copy")
    (.removeChild js/document.body el)))

(defn semi-bond-modified-duration [years coupon]
  (let [periods (* 2 years)
        semi-coupon (* 0.5 coupon)
        discount-at-period (fn [n] (/ 1 (Math/pow (inc semi-coupon) n)))]
    (/
      (reduce +
              (conj (map #(* 0.5 % semi-coupon (discount-at-period %)) (range 1 (inc periods)))
                    (* 0.5 periods (discount-at-period periods))))
      (inc semi-coupon))))

;;;

(defn naive-rank
  "We care about top ranks, so we replace nil values accordingly
  BUGS: some nil comes as Double/NaN which also needs to be filtered for"
  [coll ascending?]
  (let [clean-coll (map #(if (some? %) % (if ascending? js/Infinity (- js/Infinity))) coll)]
    (map inc
         (map
           (clojure.set/map-invert
             (into {} (map (comp first second) (group-by second (map-indexed vector (sort (if ascending? < >) clean-coll))))))
           clean-coll))))

;;;;;
(defn save-png
  "From https://stackoverflow.com/questions/31656689/how-to-save-img-to-users-local-computer-using-html2canvas"
  [uri filename]
  (let [el (js/document.createElement "a")]
    (set! (.-href el) uri)
    (set! (.-download el) filename)
    (.appendChild js/document.body el)
    (.click el)
    (.removeChild js/document.body el)))

(defn save-image
  "Returning a function. Refers to https://clojurescript.org/guides/promise-interop"
  [id]
  (fn []
    (-> (html2canvas (js/document.querySelector (str "#" id)) {}) ;js/document.body
        (.then #(save-png (.toDataURL %) (str id "-" (gdate->yyyyMMdd (cljs-time.core/today)))))
        (.catch #(js/console.log %))
        (.finally #(js/console.log "cleanup")))))

(defn open-image-in-new-tab
  "Returning a function. Refers to https://clojurescript.org/guides/promise-interop"
  [id]
  (fn []
    (-> (html2canvas (js/document.querySelector (str "#" id)) {})
        (.then #(.toDataURL % "png"))
        (.then #((let [w (js/window.open "about:blank")
                       el (.document.createElement w "iframe")]
                   (set! (.. el -style -cssText) "border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;")
                   (set! (.-src (.document.body.appendChild w el)) %)
                   (.document.close w)))))))

;;; below from https://gist.github.com/daveliepmann/cf923140702c8b1de301 ;;;
(defn local-storage-set-item!
  "Set `key' in browser's localStorage to `val`."
  [key val]
  (.setItem (.-localStorage js/window) key val))

(defn local-storage-get-item
  "Returns value of `key' from browser's localStorage."
  [key]
  (.getItem (.-localStorage js/window) key))

(defn local-storage-remove-item!
  "Remove the browser's localStorage value for the given `key`"
  [key]
  (.removeItem (.-localStorage js/window) key))

;;;
(def nff (NumberFormat. Format/DECIMAL))
(defn nf [x] (.format nff (str x)))
(defn round-to-thousand [x] (* 1000 (int (/ x 1000.))))
(def tnfmt (comp nf round-to-thousand))

(defn not-number-m100-to-100-error-status [s]
  ;allows negative numbers for wishlist
  (try
    (let [k (cljs.reader/read-string s)]
      (if-not (and (number? k) (<= -100 k 100)) :error nil))
    (catch :default e
      :error)))