(ns jasminegui.tools)

(defn int-to-gdate [x] (goog.date.UtcDateTime.fromIsoString. (str x)))
(defn gdate-to-yyyymmdd [x] (subs (.toString x) 0 8))


(defn vector-of-maps->csv
  ([vector-of-maps]
   (vector-of-maps->csv vector-of-maps (keys (last vector-of-maps)))) ;use last not first as first is totals that are different)
  ([vector-of-maps cols]
   (reduce #(str %1 (clojure.string/join "," (mapv %2 cols)) "\n")
           (str (clojure.string/join "," (map name cols)) "\n")
           vector-of-maps)))

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
  ([data filename]
   (download-object-as-csv (clj->js (vector-of-maps->csv data)) (str filename ".csv")))
  ([data filename cols]
   (download-object-as-csv (clj->js (vector-of-maps->csv data cols)) (str filename ".csv"))))

(defn react-table-to-csv [view filename cols]
  (csv-link (js->clj (. (.getResolvedState view) -sortedData)) filename cols))

(defn copy-to-clipboard [val]
  (let [el (js/document.createElement "textarea")]
    (set! (.-value el) val)
    (.appendChild js/document.body el)
    (.select el)
    (js/document.execCommand "copy")
    (.removeChild js/document.body el)))