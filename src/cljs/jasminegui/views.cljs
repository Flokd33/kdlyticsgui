(ns jasminegui.views
  (:require
    [oz.core :as oz]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [goog.string :as gstring]
    [goog.string.format]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    ["react-table" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]

    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )


(def nff (NumberFormat. Format/DECIMAL))
(defn nf [x] (.format nff (str x)))
(defn round-to-thousand [x] (* 1000 (int (/ x 1000.))))
(def tnfmt (comp nf round-to-thousand))


(defn nfcell [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [:div  (nf (int x))]
      "-")))

(defn txt-format [fmt this]    (r/as-element (if-let [x (aget this "value")] (gstring/format fmt x) "-")))
(def round3         (partial txt-format "%.3f"))
(def round2         (partial txt-format "%.2f"))
(def yield-format   (partial txt-format "%.2f%"))
(def zspread-format (partial txt-format "%.0fbps"))

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

(defn round0pc-trigger  [this]
  (r/as-element
    (if-let [x (aget this "value")]
      (letfn [(colorize [c v] [:div {:style {:color c}} (gstring/format "%.0f%" (* 100 v))])]
        (cond
          (>= x 1.0) (colorize "red" x)
          (>= x 0.5) (colorize "orange" x)
          (>= x 0.0) (colorize "black" x)
          (< x 0.0) "<0%"
          :else "-"))
      "-")))

(defn strategy-pop-up [this]
  (r/as-element [:div [:span {:title (aget this "row" "strategy")} (aget this "row" "strategy-shortcut")]]))

(defn last-price-props [this]
  (if-not (nil? this)
    (let [status (aget this "row" "status")
          prefix (if (= status "CLOSED") "(c) " "")]
      (r/as-element (str prefix (gstring/format "%.2f" (aget this "value")))))
    (clj->js {:style nil})))

;(defn format-date-from-int-rt [this] (tools/format-date-from-int (aget this "value")))
;
;(defn status-props [this]
;  (if-not (nil? this)
;    (let [status (aget this "row" "status")]
;      (r/as-element (if (= status "CLOSED") (tools/format-date-from-int (aget this "row" "exit-date")) status)))
;    (clj->js {:style nil})))
;
;(defn exit-date-props [this]
;  (if-not (nil? this)
;    (let [status (aget this "row" "status")]
;      (r/as-element (if (= status "CLOSED") (tools/format-date-from-int (aget this "row" "exit-date")) status)))
;    (clj->js {:style nil})))

;(defn case-insensitive-filter [filterfn row]
;  "filterfn is {id: column_name value: text_in_filter_box"
;  (.includes  (.toLowerCase (str (aget row (aget filterfn "id"))))  (.toLowerCase (aget filterfn "value"))))
;
;(defn exit-date-filter [filterfn row]
;  "if user types LIVE, filters by today's exit date"
;  (if (.includes "live" (.toLowerCase (aget filterfn "value")))
;    (.includes (.toLowerCase (str (aget row (aget filterfn "id")))) (tools/gdate-to-yyyymmdd static/gtoday))
;    (.includes (.toLowerCase (str (aget row (aget filterfn "id")))) (.toLowerCase (aget filterfn "value")))))
;

(def table-columns
  {:id                          {:Header "ID"             :accessor "id"                          :show false}
   :id-show                     {:Header "ID"             :accessor "id"                          :width 75}
   ;:strategy-shortcut           {:Header "Strategy"       :accessor "strategy-shortcut"           :width 110 :style {:textAlign "center"} :filterMethod case-insensitive-filter :Cell strategy-pop-up}
   ;:strategy                    {:Header "strategy-full"  :accessor "strategy"                    :show false};we need to have it in the table for the props
   ;:entry-date                  {:Header "Entry date"     :accessor "entry-date"                  :width 90 :style {:textAlign "center"} :Cell format-date-from-int-rt}
   ;:exit-date                   {:Header "Exit date"      :accessor "exit-date"                   :width 90 :style {:textAlign "center"} :Cell exit-date-props :filterMethod exit-date-filter}
   ;:analyst                     {:Header "Analyst"        :accessor "analyst"                     :width 65 :style {:textAlign "center"} :filterMethod case-insensitive-filter}
   ;:NAME                        {:Header "Name"           :accessor "NAME"                        :width 165 :style {:textAlign "center"} :filterMethod case-insensitive-filter}
   ;:portfolio                   {:Header "Portfolio"      :accessor "portfolio"                   :width 165 :style {:textAlign "center"} :filterMethod case-insensitive-filter}
   :ISIN                        {:Header "ISIN"           :accessor "ISIN"                        :width 125 :style {:textAlign "center"}}
   :status                      {:Header "Status"         :accessor "status"                      :show false} ;we need to have it in the table for the props
   :status-show                 {:Header "Status"         :accessor "status"                      :width 75 :style {:textAlign "center"}} ;we need to have it in the table for the props
   :thisyear                    {:Header "thisyear"       :accessor "thisyear"                    :show false} ;we need to have it in the table for the props
   :position                    {:Header "Model"          :accessor "position"                    :width 60 :style {:textAlign "right"} :Cell round2pc}

   :live-position               {:Header "Actual"         :accessor "live-position"               :width 60 :style {:textAlign "right"} :Cell round2pc}
   :entry-price                 {:Header "Entry"          :accessor "entry-price"                 :width 75 :style {:textAlign "right"} :Cell round2}
   :last-price                  {:Header "Last"           :accessor "last-price"                  :width 75 :style {:textAlign "right"} :Cell last-price-props}
   :last-yield                  {:Header "Yield"          :accessor "last-yield"                  :width 75 :style {:textAlign "right"} :Cell yield-format}
   :last-spread                 {:Header "Spread"         :accessor "last-spread"                 :width 75 :style {:textAlign "right"} :Cell zspread-format}
   :d-relval                    {:Header "Relval"         :accessor "d-relval"                    :width 60 :style {:textAlign "right"} :Cell round0pc-trigger}
   :d-target                    {:Header "Price"          :accessor "d-target"                    :width 60 :style {:textAlign "right"} :Cell round0pc-trigger}
   :d-review                    {:Header "Review"         :accessor "d-review"                    :width 60 :style {:textAlign "right"} :Cell round0pc-trigger}
   :max-d-others                {:Header "Others"         :accessor "max-d-others"                :width 60 :style {:textAlign "right"} :Cell round0pc-trigger}
   :ytd-return                  {:Header "Raw"            :accessor "ytd-return"                  :width 75 :style {:textAlign "right"} :Cell round1pcytd} ;:getProps fp4
   :ytd-return-vs-cembi         {:Header "vs CEMBI"       :accessor "ytd-return-vs-cembi"         :width 75 :style {:textAlign "right"} :Cell round1pcytd} ;:getProps fp4
   :ytd-return-vs-cembi-rating  {:Header "vs IGHY"        :accessor "ytd-return-vs-cembi-rating"  :width 75 :style {:textAlign "right"} :Cell round1pcytd}
   :ytd-return-vs-cembi-country {:Header "vs country"     :accessor "ytd-return-vs-cembi-country" :width 75 :style {:textAlign "right"} :Cell round1pcytd}
   :ytd-return-vs-cembi-sector  {:Header "vs sector"      :accessor "ytd-return-vs-cembi-sector"  :width 75 :style {:textAlign "right"} :Cell round1pcytd}
   :ltd-return                  {:Header "Raw"            :accessor "ltd-return"                  :width 75 :style {:textAlign "right"} :Cell round1pc} ;:getProps fp4
   :ltd-return-vs-cembi         {:Header "vs CEMBI"       :accessor "ltd-return-vs-cembi"         :width 75 :style {:textAlign "right"} :Cell round1pc} ;:getProps fp4
   :ltd-return-vs-cembi-rating  {:Header "vs IGHY"        :accessor "ltd-return-vs-cembi-rating"  :width 75 :style {:textAlign "right"} :Cell round1pc}
   :ltd-return-vs-cembi-country {:Header "vs country"     :accessor "ltd-return-vs-cembi-country" :width 75 :style {:textAlign "right"} :Cell round1pc}
   :ltd-return-vs-cembi-sector  {:Header "vs sector"      :accessor "ltd-return-vs-cembi-sector"  :width 75 :style {:textAlign "right"} :Cell round1pc}
   :price-target                {:Header "Target"         :accessor "price-target"                :width 60 :style {:textAlign "right"} :Cell last-price-props}
   :relval-target-description   {:Header "Description"    :accessor "relval-target-description"   :width 200} ;:getProps fp4 ; :headerClassName "wordwrap"
   :relval-target-latest        {:Header "Latest"         :accessor "relval-target-latest"        :width 60 :style {:textAlign "right"} :Cell round2} ;:getProps fp4 ; :headerClassName "wordwrap"
   })


(defn sum-rows [vals] (reduce + vals))

(defn first-level-sort [x]
  (case x
    "Cash" "AAA"
    x))

(defn risk-view-generic []
  "h1map {:fn :Region :header 'Region' :accessor 'Region'}"
  (let [h1map {:fn :Region :header "Region" :accessor "Region"}
        positions @(rf/subscribe [:positions])
        portfolio-positions (filter #(= (:portfolio %) "OGEMCORD") positions)
        display
        (conj
          (sort-by (juxt (comp first-level-sort (:fn h1map)) :Country :TICKER :NAME) portfolio-positions)
          {(:fn h1map) "Total" :Country "Total" :Ticker "Total" :NAME "Total" :weight (reduce + (map :weight portfolio-positions)) :original-quantity (reduce + (map :original-quantity portfolio-positions))}
          )
        ]

    [box :class "element"  :child
     [:> ReactTable {:data            display
                     :columns         [
                                       {:Header  "Groups"
                                        :columns [{:Header (:header h1map) :accessor (:accessor h1map) :width 140}
                                                  {:Header "Country" :accessor "Country" :width 140}
                                                  {:Header "Issuer" :accessor "TICKER" :width 140}
                                                  {:Header "Name" :accessor "NAME" :width 140}]}
                                       {:Header  "Position"
                                        :columns [{:Header "NAV" :accessor "weight" :width 60 :style {:textAlign "right"} :aggregate sum-rows :Cell round2}
                                                  {:Header "Nominal" :accessor "original-quantity" :width 120 :style {:textAlign "right"} :aggregate sum-rows :Cell nfcell}
                                                  ]}
                                       {:Header "Description"
                                        :columns [{:Header "Description" :accessor "description" :width 500}]}
                                       ]
                     :showPagination  false
                     :sortable        false
                     :defaultPageSize (count (distinct (map :Region portfolio-positions)))
                     :className       "-striped -highlight"
                     :pivotBy         [(:accessor h1map) "Country" "TICKER" "NAME"]
                     }]])
  )

(defn position-table []
  [risk-view-generic]

  )

(defn main-panel []
  [v-box :gap "20px" :class "body" :padding "20px" :children [[position-table] ]])
