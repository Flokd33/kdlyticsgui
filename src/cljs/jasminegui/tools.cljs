(ns jasminegui.tools)

(defn vector-of-maps->csv [vector-of-maps]
  (let [cols (keys (last vector-of-maps))]                  ;use last not first as first is totals that are different
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


