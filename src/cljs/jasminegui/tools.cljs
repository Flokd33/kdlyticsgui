(ns jasminegui.tools
  (:require ["html2canvas" :as html2canvas])
  )

(defn int-to-gdate [x] (goog.date.UtcDateTime.fromIsoString. (str x)))
(defn gdate-to-yyyymmdd [x] (subs (.toString x) 0 8))

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

(defn download-object-as-csv [text export-name]
  "This creates a temporary download link"
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

(defn react-table-to-csv [view filename cols]
  (csv-link (js->clj (. (.getResolvedState view) -sortedData)) filename cols))

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
  [hashid filename]
  (fn []
    (-> (html2canvas (js/document.querySelector hashid) {}) ;js/document.body
        (.then #(save-png (.toDataURL %) filename))
        (.catch #(js/console.log %))
        (.finally #(js/console.log "cleanup")))))