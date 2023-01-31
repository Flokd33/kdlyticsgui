(ns jasminegui.playground

      (:require
        ; [oz.core :as oz]
        [re-frame.core :as rf]
        [reagent.core :as r]
        [goog.string :as gstring]
        [goog.string.format]
        [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                             single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                             input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
        [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
        [re-com.util :refer [px]]
        [jasminegui.mount :as mount]
        [jasminegui.static :as static]

        [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
        [jasminegui.tools :as t]
        [cljs-time.core :refer [today]]
        ["react-table-v6" :as rt :default ReactTable]
        ["react" :as react :default useMemo]
        ;[tech.v3.dataset :as ds]
        [goog.object :as gobj]

        )

  )

(def data (map #(zipmap [:a :b :c] [%1 %2 %3]) (range 100) (range 100) (range 100)))

;(def datads (ds/->dataset data))
;
;(defn testtable []
;  (when (nil? @(rf/subscribe [:test-data])) (rf/dispatch [:get-test-data]))
;  (when @(rf/subscribe [:test-data])
;    (println (ds/data->dataset (gobj/get @(rf/subscribe [:test-data]) "rep"))) ; "tag" also gives something
;    )
;   ;(.-tag x) also gives something
;  [:> ReactTable
;   {:data           (apply array (ds/rows (ds/select-columns datads [:a :b]))) ;here we have a javascript array of clojure maps
;    :columns        [{:Header "A" :id "a" :accessor (fn [row index] (get row :a)) :width 120} ;because of this we need a clojure function in the accessor
;                     {:Header "B" :id "b" :accessor (fn [row index] (get row :b)) }
;                     ]
;    :pageSize (count data) :className "-striped -highlight"}]
;
;
;  )