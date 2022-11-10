(ns jasminegui.ta2022.tradeview
  (:require
    [re-frame.core :as rf]
    [reagent.core :as r]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink alert-box md-circle-icon-button modal-panel throbber
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.guitools :as gt]
    [jasminegui.qs.qstables :as qstables]
    [jasminegui.qs.qscharts :as qscharts]
    [jasminegui.qs.quantscores :as quantscores]
    [jasminegui.tools :as t]
    [jasminegui.ta2022.tables :as tatables]
    [jasminegui.ta2022.alerts :as taalerts]
    [jasminegui.ta2022.actions :as taactions]
    [oz.core :as oz]
    [cljs-time.core :refer [today interval plus days in-days]]
    ;["@react-pdf/renderer" :as pdf-renderer]
    ;import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
    )
  )

(def element-box-width "1600px")
(def dw "850px")
(defn hb [x] [h-box :gap "10px" :width "1024px" :align :center :children x])
(def btc "btn btn-primary btn-block")
(defn t3 [txt] [title :level :level3 :label txt])

(defn rt-int->date
  [accessor this]
  (if (aget this "value")
    (t/int->dd-MM-yyyy (aget this "original" accessor)) "No"))

(defn trade-static-and-pricing
  [isin qdata last-trade alerts triggers]
  (let [fmt-rtn (fn [this] (if-let [x (aget this "value")] (gstring/format "%.1f%" (* 100. x)) (r/as-element [p {:style {:color "red" :padding "0px" :font-style "italic"}} "Triggered"])))
        fmt-rtn-1 (fn [this] (if-let [x (aget this "value")] (gstring/format "%.1f" x) (r/as-element [p {:style {:color "red" :padding "0px" :font-style "italic"}} "Triggered"])))
        fmt-rtn-2 (fn [this] (if-let [x (aget this "value")] (gstring/format "%.1f" x) "-"))
        fmt-rtn-3 (fn [this] (if-let [x (aget this "value")] (gstring/format "%.1f%" x) "-"))
        data (if triggers (assoc qdata
                            :relval (get-in triggers [(last-trade :ta2022.trade/relval-alert-uuid) :implied-tr-1y])
                            :target (get-in triggers [(last-trade :ta2022.trade/target-alert-uuid) :implied-tr-1y])
                            :review (get-in triggers [(last-trade :ta2022.trade/review-alert-uuid) :implied-tr-1y])
                            :relval-price (get-in triggers [(last-trade :ta2022.trade/relval-alert-uuid) :implied-price])
                            :target-price (get-in triggers [(last-trade :ta2022.trade/target-alert-uuid) :implied-price])
                            :review-price (get-in triggers [(last-trade :ta2022.trade/review-alert-uuid) :implied-price])
                            :relval-start-price (get-in alerts [(last-trade :ta2022.trade/relval-alert-uuid) :ta2022.alert/start-implied-price])
                            :target-start-price (get-in alerts [(last-trade :ta2022.trade/target-alert-uuid) :ta2022.alert/start-implied-price])
                            :review-start-price (get-in alerts [(last-trade :ta2022.trade/review-alert-uuid) :ta2022.alert/start-implied-price]))
                          qdata)
        ]
    (gt/element-box-generic "trade-static" element-box-width "Bond data" nil
                            [(if qdata [:> ReactTable
                                        {:data [qdata] :columns (qstables/table-style->qs-table-col "TA2022" nil) :showPagination false :pageSize 1 :filterable false}]
                                       [p "loading..."])
                             (if (and qdata triggers)
                               [h-box :gap "20px"
                                :children [
                                           [:> ReactTable
                                            {:data           [data]
                                             :columns        [{:Header  "Current alert implied prices"
                                                               :columns [{:Header "Target" :accessor "target-price" :width 60 :style {:textAlign "right"} :Cell fmt-rtn-1}
                                                                         {:Header "Relval" :accessor "relval-price" :width 60 :style {:textAlign "right"} :Cell fmt-rtn-1}
                                                                         {:Header "Review" :accessor "review-price" :width 60 :style {:textAlign "right"} :Cell fmt-rtn-1}]}
                                                              {:Header  "Original alert implied prices"
                                                               :columns [{:Header "Target" :accessor "target-start-price" :width 60 :style {:textAlign "right"} :Cell fmt-rtn-2}
                                                                         {:Header "Relval" :accessor "relval-start-price" :width 60 :style {:textAlign "right"} :Cell fmt-rtn-2}
                                                                         {:Header "Review" :accessor "review-start-price" :width 60 :style {:textAlign "right"} :Cell fmt-rtn-2}]}]
                                             :showPagination false :pageSize 1 :filterable false}]
                                           [:> ReactTable
                                            {:data           [data]
                                             :columns        [{:Header  "Expected returns with 1y coupon"
                                                               :columns [{:Header "4D" :accessor "svr4d1yrtn" :width 60 :style {:textAlign "right"} :Cell fmt-rtn-3}
                                                                         {:Header "2D" :accessor "svr2d1yrtn" :width 60 :style {:textAlign "right"} :Cell fmt-rtn-3}
                                                                         {:Header "Tight" :accessor "upside1y" :width 60 :style {:textAlign "right"} :Cell fmt-rtn-3}
                                                                         {:Header "Median" :accessor "expected1y" :width 60 :style {:textAlign "right"} :Cell fmt-rtn-3}
                                                                         {:Header "Wide" :accessor "downside1y" :width 60 :style {:textAlign "right"} :Cell fmt-rtn-3}
                                                                         {:Header "Target" :accessor "target" :width 60 :style {:textAlign "right"} :Cell fmt-rtn}
                                                                         {:Header "Relval" :accessor "relval" :width 60 :style {:textAlign "right"} :Cell fmt-rtn}
                                                                         {:Header "Review" :accessor "review" :width 60 :style {:textAlign "right"} :Cell fmt-rtn}]}]
                                             :showPagination false :pageSize 1 :filterable false}]

                                           ]]
                               [p "loading..."])])))

(defn historical-chart
  [isin qdata sorted-trades triggers]
  (if (and sorted-trades triggers (:date (last @(rf/subscribe [:quant-model/history-result]))))
    (let [int-start-date (:ta2022.trade/entry-date (first sorted-trades))
          rectangle-dates (map :ta2022.trade/entry-date sorted-trades)
          rectangle-bins (partition 2 1 rectangle-dates)
          nb-rectangles (count rectangle-bins)
          vega-rectangles (for [[i [d1 d2]] (map-indexed vector rectangle-bins)]
                            {:mark     "rect"
                             :data     {:values {:x d1 :x2 d2} :format {:parse {:x "date:'%Y%m%d'" :x2 "date:'%Y%m%d'"}}}
                             :encoding {:x       {:field "x" :type "temporal"} :x2 {:field "x2" :type "temporal"}
                                        :opacity {:value (- 0.5 (/ (* i 0.5) nb-rectangles))}}})

          last-trade (last sorted-trades)
          relval-price (get-in triggers [(last-trade :ta2022.trade/relval-alert-uuid) :implied-price])
          target-price (get-in triggers [(last-trade :ta2022.trade/target-alert-uuid) :implied-price])
          review-price (get-in triggers [(last-trade :ta2022.trade/review-alert-uuid) :implied-price])
          last-entry-date (last rectangle-dates)
          last-date (.replaceAll (:date (last @(rf/subscribe [:quant-model/history-result]))) "-" "")
          range (remove nil? (conj (map :price (filter #(>= (int (.replaceAll (:date %) "-" "")) int-start-date) @(rf/subscribe [:quant-model/history-result]))) relval-price target-price review-price))
          ymin (- (apply min range) 2)
          ymax (+ (apply max range) 2)
          target-lines [
                        {:mark {:type "rule" :color "red"} :data {:values {:y review-price :x last-entry-date :x2 last-date} :format {:parse {:x "date:'%Y%m%d'" :x2 "date:'%Y%m%d'"}}} :encoding {:y {:field "y" :type "quantitative"} :x {:field "x" :type "temporal"} :x2 {:field "x2" :type "temporal"}}}
                        {:mark {:type "rule" :color "green"} :data {:values {:y relval-price :x last-entry-date :x2 last-date} :format {:parse {:x "date:'%Y%m%d'" :x2 "date:'%Y%m%d'"}}} :encoding {:y {:field "y" :type "quantitative"} :x {:field "x" :type "temporal"} :x2 {:field "x2" :type "temporal"}}}
                        {:mark {:type "rule" :color "yellow"} :data {:values {:y target-price :x last-entry-date :x2 last-date} :format {:parse {:x "date:'%Y%m%d'" :x2 "date:'%Y%m%d'"}}} :encoding {:y {:field "y" :type "quantitative"} :x {:field "x" :type "temporal"} :x2 {:field "x2" :type "temporal"}}}
                        {:mark {:type "text" :dx -20 :dy -15} :data {:values [{:label "review" :price review-price :dt last-date}] :format {:parse {:dt "date:'%Y%m%d'" :price "quantitative"}}} :encoding {:y {:field "price" :type "quantitative"} :x {:field "dt" :type "temporal"} :text {:field "label" :type "nominal"}}}
                        {:mark {:type "text" :dx -20 :dy -15} :data {:values [{:label "relval" :price relval-price :dt last-date}] :format {:parse {:dt "date:'%Y%m%d'" :price "quantitative"}}} :encoding {:y {:field "price" :type "quantitative"} :x {:field "dt" :type "temporal"} :text {:field "label" :type "nominal"}}}
                        {:mark {:type "text" :dx -20 :dy -15} :data {:values [{:label "target" :price target-price :dt last-date}] :format {:parse {:dt "date:'%Y%m%d'" :price "quantitative"}}} :encoding {:y {:field "price" :type "quantitative"} :x {:field "dt" :type "temporal"} :text {:field "label" :type "nominal"}}}]
          ]

      (gt/element-box-generic "history-chart" element-box-width "Trade history" nil
                              [(if qdata
                                 (let [vega-spec (qscharts/quant-isin-history-chart-map
                                                   (quantscores/merge-pricing-with-prediction @(rf/subscribe [:quant-model/history-result]) @(rf/subscribe [:quant-model/history-result-prediction]))
                                                   int-start-date
                                                   {:price true :ztw true :cheapness4D true}
                                                   [{:ISIN isin :bond (qdata :Bond)}]
                                                   "Absolute"
                                                   {:price (concat vega-rectangles target-lines) :ztw vega-rectangles :cheapness4D vega-rectangles})] ;(concat vega-rectangles target-lines)
                                   [oz/vega-lite (assoc-in vega-spec [:vconcat 0 :layer 0 :encoding :y :scale :domain] [ymin ymax])]);super hacky
                                 [p "loading..."])]))
    [p "loading..."]))



(defn positions-and-performance-table
  [trades performances]
  (let [data @(rf/subscribe [:ta2022/trade-view-position-and-performance-table])
        cdata (->> data
                   (filter #(not (some #{(:portfolio %)} ["OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE"])))
                   (map #(update % :nav (fn [x] (if (zero? x) nil x))))
                   (map #(update % :position (fn [x] (if (zero? x) nil x)))))
        leg-by-leg-data (conj (mapv #(merge % (get performances (:ta2022.trade/uuid %))) trades)
                              {:strategy                "Sum"
                               :entry-date              (:ta2022.trade/entry-date (first trades))
                               :exit-date               (:ta2022.trade/exit-date (last trades))
                               :tr                  (reduce + (remove nil? (map :tr (vals performances))))
                               :tr-vs-index         (reduce + (remove nil? (map :tr-vs-index (vals performances))))
                               :tr-vs-index-rating  (reduce + (remove nil? (map :tr-vs-index-rating (vals performances))))
                               :tr-vs-index-country (reduce + (remove nil? (map :tr-vs-index-country (vals performances))))
                               :tr-vs-index-sector  (reduce + (remove nil? (map :tr-vs-index-sector (vals performances))))})]
    
    (gt/element-box-generic "position-table" element-box-width "Positions and performance" nil
                            [
                             [title :label "Actual performance" :level :level2]
                             [:> ReactTable
                              {:data       cdata
                               :columns    [
                                            {:Header "Description" :columns [
                                                                             {:Header "Portfolio" :accessor :portfolio :width 100 :style {:textAlign "left"}}
                                                                             {:Header "NAV" :accessor :nav :width 100 :style {:textAlign "right"} :Cell tables/round2pc}
                                                                             {:Header "Nominal" :accessor :position :width 100 :style {:textAlign "right"} :Cell tables/nb-thousand-cell-format}
                                                                             {:Header "Entry date" :accessor :avg-entry-date :width 100 :style {:textAlign "right"}}
                                                                             {:Header "Entry price" :accessor :avg-entry-price :width 100 :style {:textAlign "right"} :Cell tables/round2}]}
                                            {:Header "Life to date TR" :columns [
                                                                                 {:Header "Gross" :accessor :tr-ltd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Index" :accessor :tr-vs-index-ltd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Rating" :accessor :tr-vs-index-rating-ltd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Country" :accessor :tr-vs-index-country-ltd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Sector" :accessor :tr-vs-index-sector-ltd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}]}
                                            {:Header "Year to date TR" :columns [
                                                                                 {:Header "Gross" :accessor :tr-ytd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Index" :accessor :tr-vs-index-ytd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Rating" :accessor :tr-vs-index-rating-ytd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Country" :accessor :tr-vs-index-country-ytd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Sector" :accessor :tr-vs-index-sector-ytd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}]}
                                            {:Header "Statpro YTD" :columns [(assoc (tables/nb-col "Bond contrib" :statpro-ytd-contribution 85 #(tables/nb-cell-format "%.2f%" 1 %) tables/sum-rows) :filterable false)
                                                                             (assoc (tables/nb-col "Ticker effect" :statpro-ytd-issuer-effect 85 #(tables/nb-cell-format "%.2f%" 1 %) tables/sum-rows) :filterable false)]}
                                            ]
                               :filterable false :showPagination false :pageSize (count cdata) :showPageSizeOptions false :className "-striped -highlight"}]
                             [title :label "Leg by leg performance" :level :level2]
                             [:> ReactTable
                              {:data       leg-by-leg-data
                               :columns    [
                                            {:Header "Strategy" :accessor :strategy :width 150 :style {:textAlign "left"}} ; :Cell tables/nb-thousand-cell-format
                                            {:Header "Entry date" :accessor :entry-date :width 100 :style {:textAlign "right"} :Cell #(rt-int->date "entry-date" %)}
                                            {:Header "Exit date" :accessor :exit-date :width 100 :style {:textAlign "right"} :Cell #(rt-int->date "exit-date" %)}
                                            {:Header "Gross" :accessor :tr :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                            {:Header "Index" :accessor :tr-vs-index :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                            {:Header "Rating" :accessor :tr-vs-index-rating :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                            {:Header "Country" :accessor :tr-vs-index-country :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                            {:Header "Sector" :accessor :tr-vs-index-sector :width 65 :style {:textAlign "right"} :Cell tables/round1pc}]
                               :filterable false :showPagination false :pageSize (count leg-by-leg-data) :showPageSizeOptions false :className "-striped -highlight"}]])))



(defn attachments
  [isin]
  (gt/element-box-generic "attachments" element-box-width "Attachments" nil
                          [[v-box :children (let [c (into [] (for [k @(rf/subscribe [:ta2022/trade-attachments])] [hyperlink-href :href (str static/cms-address isin "/" k) :label k :target "_blank"]))] (if (pos? (count c)) c [[p "No attachments"]]))]]))

(defn alert-sort [data]
  (sort-by #(.indexOf ["target" "relval" "price" "review" "other"] (:ta2022.alert/alert-scope %)) data))

(defn alert-table [data with-triggers]
  [:> ReactTable
   {:data       (alert-sort data)
    :columns    (remove nil? [{:Header "UUID" :accessor :uuid :width 300 :style {:textAlign "left"} :Cell (fn [this] (if-let [x (aget this "value")] (str x) "-")) :show false}
                              ;{:Header "Start date" :accessor :start-date :width 100 :style {:textAlign "left"} :Cell (fn [this] (if-let [x (aget this "value")] (t/format-date-from-int x)))}
                              {:Header "Type" :accessor :alert-type :width 100 :style {:textAlign "left"} :show false}
                              {:Header "Scope" :accessor :alert-scope :width 100 :style {:textAlign "left"}}
                              {:Header "Description" :accessor :description :width 400 :style {:textAlign "left"}}
                              {:Header "Query" :accessor :description :width 300 :style {:textAlign "left"}
                               :Cell (fn [this] (if-let [x (aget this "value")]
                                                  (str (aget this "original" "bloomberg-request") " "
                                                       (aget this "original" "comparison") " "
                                                       (aget this "original" "comparison-value")) "-"))
                               :show   false}
                              (if with-triggers {:Header "Implied price" :accessor :implied-price :width 85 :Cell tables/round2 :style {:textAlign "right"}})
                              {:Header "Start level" :accessor :start-level :width 85 :Cell tables/round2 :style {:textAlign "right"}}
                              (if with-triggers {:Header "Latest" :accessor :latest-market-price :width 85 :Cell tables/round2 :style {:textAlign "right"}})
                              (if with-triggers {:Header "Distance" :accessor :distance-to-trigger :width 85 :Cell tables/round0pc :style {:textAlign "right"}})
                              {:Header "Triggered?" :accessor :triggered :width 85 :style {:textAlign "left"} :Cell #(rt-int->date "triggered-date" %)}])
    :filterable false :showPagination false :pageSize (count data) :showPageSizeOptions false :className "-striped -highlight"}])


(defn trade-description
  [sorted-trades alerts triggers]
  (if (pos? (count sorted-trades))
    (let [t0 (first sorted-trades) tl (last sorted-trades)]
      (gt/element-box-generic "trade-description" element-box-width "Trade description" nil
                              (concat [
                                       [v-box :gap "5px" :children [[title :label "Original trade" :level :level2]
                                                                    [hb [[box :size "1" :child [t3 "Internal ID"]] [box :size "3" :child [label :label (str (:ta2022.trade/uuid t0))]]]]
                                                                    [hb [[box :size "1" :child [t3 "Analyst"]] [box :size "3" :child [label :label (:ta2022.trade/analyst t0)]]]]
                                                                    [hb [[box :size "1" :child [t3 "Strategy"]] [box :size "3" :child [label :label (:ta2022.trade/strategy t0)]]]]
                                                                    [hb [[box :size "1" :child [t3 "Entry date"]] [box :size "3" :child [label :label (t/int->dd-MM-yyyy (:ta2022.trade/entry-date t0))]]]]
                                                                    [hb [[box :size "1" :child [t3 "Entry rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/entry-rationale t0)) (catch js/Error e (:ta2022.trade/entry-rationale t0)))]]]]]]]
                                      (if (> (count sorted-trades) 1)
                                        [[v-box :gap "5px" :children [[title :label (str "Latest update (no." (count sorted-trades) ")") :level :level2]
                                                                      [hb [[box :size "1" :child [t3 "Internal ID"]] [box :size "3" :child [label :label (str (:ta2022.trade/uuid tl))]]]]
                                                                      [hb [[box :size "1" :child [t3 "Analyst"]] [box :size "3" :child [label :label (:ta2022.trade/analyst tl)]]]]
                                                                      [hb [[box :size "1" :child [t3 "Strategy"]] [box :size "3" :child [label :label (:ta2022.trade/strategy tl)]]]]
                                                                      [hb [[box :size "1" :child [t3 "Entry date"]] [box :size "3" :child [label :label (t/int->dd-MM-yyyy (:ta2022.trade/entry-date tl))]]]]
                                                                      [hb [[box :size "1" :child [t3 "Entry rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/entry-rationale tl)) (catch js/Error e (:ta2022.trade/entry-rationale tl)))]]]]
                                                                      [hb [[box :size "1" :child [t3 "Exit date"]] [box :size "3" :child [label :label (t/int->dd-MM-yyyy (:ta2022.trade/exit-date tl))]]]]
                                                                      [hb [[box :size "1" :child [t3 "Exit rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/exit-rationale tl)) (catch js/Error e (:ta2022.trade/exit-rationale tl)))]]]]]]])
                                      [[title :label "Current triggers" :level :level2]
                                       [alert-table (map #(taalerts/alert->alert-with-triggers triggers %)
                                                         (taalerts/trade->alerts tl alerts)) true]])))))

(defn trade-history
  [sorted-trades alerts]
  (gt/element-box-generic "trade-history" element-box-width "Trade history" nil
                          (into [] (for [[n tl] (map-indexed list sorted-trades)]
                                     [v-box :gap "5px" :children [[title :label (str "Trade " (inc n) "/" (count sorted-trades)) :level :level2]
                                                                  [hb [[box :size "1" :child [t3 "Internal ID"]] [box :size "3" :child [label :label (str (:ta2022.trade/uuid tl))]]]]
                                                                  [hb [[box :size "1" :child [t3 "Analyst"]] [box :size "3" :child [label :label (:ta2022.trade/analyst tl)]]]]
                                                                  [hb [[box :size "1" :child [t3 "Strategy"]] [box :size "3" :child [label :label (:ta2022.trade/strategy tl)]]]]
                                                                  [hb [[box :size "1" :child [t3 "Entry date"]] [box :size "3" :child [label :label (t/int->dd-MM-yyyy (:ta2022.trade/entry-date tl))]]]]
                                                                  [hb [[box :size "1" :child [t3 "Entry rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/entry-rationale tl)) (catch js/Error e (:ta2022.trade/entry-rationale tl)))]]]]
                                                                  [hb [[box :size "1" :child [t3 "Exit date"]] [box :size "3" :child [label :label (t/int->dd-MM-yyyy (:ta2022.trade/exit-date tl))]]]]
                                                                  [hb [[box :size "1" :child [t3 "Exit rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/exit-rationale tl)) (catch js/Error e (:ta2022.trade/exit-rationale tl)))]]]]
                                                                  [hb [[box :size "1" :child [t3 "Alerts"]] [box :size "3" :child [alert-table (taalerts/trade->alerts tl alerts) false]]]]
                                                                  ]]))))

(defn isin-picker
  [trades]
  (let [too-old?
        (try (> (in-days (interval (t/int->gdate (:ta2022.trade/entry-date (last trades))) (t/int->gdate (today)))) 4) (catch js/Error e true))
        ]
    (gt/element-box-generic "isin-picker" element-box-width "Actions" {:no-icons true}
                            [[h-box :gap "10px" :align :center
                              :children [[label :label "Pick an ISIN:"]
                                         [input-text :model (rf/subscribe [:ta2022/trade-isin]) :on-change #(rf/dispatch [:ta2022/trade-isin %])]
                                         [button :label "Fetch data" :class btc :on-click #(rf/dispatch [:ta2022/go-to-active-trade @(rf/subscribe [:ta2022/trade-isin])])]
                                         [gap :size "1"]
                                         [button :label "Amend latest entry" :class btc :disabled? (or (not trades) too-old?) :on-click #(rf/dispatch [:ta2022/show-modal {:type :amend-latest-trade}])]
                                         [button :label (if trades "Morph trade" "New trade") :class btc :on-click #(rf/dispatch [:ta2022/show-modal {:type :morph-trade}])]
                                         [button :label "Close trade" :class btc :disabled? (not trades) :on-click #(rf/dispatch [:ta2022/show-modal {:type :close-trade}])]
                                         [button :label "Add attachment" :disabled? (not @(rf/subscribe [:ta2022/trade-isin])) :class btc :on-click #(rf/dispatch [:ta2022/show-modal {:type :add-attachment}])]]]])))

(defn trade-view
  []
  (let [isin @(rf/subscribe [:ta2022/trade-isin])
        qdata (first (t/chainfilter {:ISIN isin} @(rf/subscribe [:quant-model/model-output])))
        th @(rf/subscribe [:ta2022/trade-history])
        {:keys [trades alerts performances triggers]} th]
    [v-box :gap "10px"
     :children [[isin-picker trades]
                [trade-static-and-pricing isin qdata (last trades) alerts triggers]
                [trade-description trades alerts triggers]
                [historical-chart isin qdata trades triggers]
                [attachments isin]
                [positions-and-performance-table trades performances]
                [trade-history trades alerts]
                ]])
  )


(defn row-action [action rowInfo] (clj->js {:onClick #(rf/dispatch [action (aget rowInfo "row" "_original" "isin")]) :style {:cursor "pointer"}}))
(defn go-to-active-trade! [state rowInfo instance] (row-action :ta2022/go-to-active-trade rowInfo))

(rf/reg-event-db :ta2022/filter-change (fn [db [_ k v]] (-> db (assoc :ta2022/main-table-data []) (assoc-in [:ta2022/filter k] v))))
(rf/reg-sub :ta2022/filter-value (fn [db [_ k]] (get-in db [:ta2022/filter k])))

(def expanded (r/atom {0 {}}))

(defn distance-fmt [this]
  (if-let [x (aget this "value")] (if (< x 1) (gstring/format "%.0f%" (* 100 x)) (r/as-element [p {:style {:color "red" :padding "0px" :font-style "italic"}} "Triggered"])) "-"))


(defn main-table []
  (let [data @(rf/subscribe [:ta2022/main-table-data])
        qsdata @(rf/subscribe [:quant-model/model-output])
        all-analysts @(rf/subscribe [:analysts])
        all-sectors (conj (map (fn [x] {:id x :label x}) (sort (distinct (map :Sector qsdata)))) {:id "All" :label "All"})
        all-countries (conj (map (fn [x] {:id x :label (:LongName (first (filter #(= (:CountryCode %) x) @(rf/subscribe [:country-codes]))))}) (sort (distinct (map :Country qsdata)))) {:id "All" :label "All"})
        price-fmt (fn [distance this] (if-let [d (aget this "original" distance)]
                                        (if (= d 1) (r/as-element [p {:style {:color "red" :padding "0px" :font-style "italic"}} "Trgrd."]) (if (number? (aget this "value")) (gstring/format "%.1f" (aget this "value")) "-")) "-"))
        download-columns (flatten
                                [[:db-id :strategy :isin :uuid :weight :analyst :Country]
                                 [:Bond :Used_Price :Used_YTW :Used_ZTW :Used_Duration :G_SPREAD_MID_CALC :difference_svr :difference_svr_2d :Rating_String]
                                 (map (fn [k] [(keyword (str k "-alert-description")) (keyword (str k "-alert-distance")) (keyword (str k "-alert-value")) (keyword (str k "-alert-implied-price")) (keyword (str k "-alert-triggered-date"))]) ["target" "relval" "review"])
                                 (map keyword ["target-alert-tr-1y" "relval-alert-tr-1y" "review-alert-tr-1y" "svr4d1yrtn" "svr2d1yrtn" "upside1y" "expected1y" "downside1y"])])
        mtvs (rf/subscribe [:ta2022/main-table-view-selector])
        mtp (rf/subscribe [:ta2022/main-table-pivot])
        is-table (= @mtp "No")]
    ;(println data)
    [v-box :gap "10px"
     :children [(gt/element-box-generic "isin-picker" element-box-width "Filtering" {:no-icons true}
                                        [[h-box :gap "10px" :align :center
                                          :children [[single-dropdown :model (rf/subscribe [:ta2022/filter-value :analyst]) :choices (conj (for [k all-analysts] {:id k :label k}) {:id "All" :label "All"}) :on-change #(rf/dispatch [:ta2022/filter-change :analyst %]) :placeholder "Analyst" :filter-box? true]
                                                     [single-dropdown :model (rf/subscribe [:ta2022/filter-value :sector]) :choices all-sectors :on-change #(rf/dispatch [:ta2022/filter-change :sector %]) :placeholder "Sector" :filter-box? true]
                                                     [single-dropdown :model (rf/subscribe [:ta2022/filter-value :country]) :choices all-countries :on-change #(rf/dispatch [:ta2022/filter-change :country %]) :placeholder "Country" :filter-box? true]
                                                     [single-dropdown :model (rf/subscribe [:ta2022/filter-value :portfolio]) :choices (conj (for [k @(rf/subscribe [:portfolios])] {:id k :label k}) {:id "All" :label "All"}) :on-change #(rf/dispatch [:ta2022/filter-change :portfolio %]) :placeholder "Portfolio" :filter-box? true]
                                                     [button :label "Fetch data" :class btc :on-click #(rf/dispatch [:ta2022/post-main-table-data @(rf/subscribe [:ta2022/filter-value :analyst]) @(rf/subscribe [:ta2022/filter-value :sector]) @(rf/subscribe [:ta2022/filter-value :country]) @(rf/subscribe [:ta2022/filter-value :portfolio])])]]]])
                (gt/element-box-generic "ta-output" element-box-width "Results"
                                        {:on-click-action #(t/csv-link data "trade-analyser-output.csv" download-columns)}
                                        [[h-box :align :center :gap "10px"
                                          :children [[label :label "View:"]
                                                     [radio-button :model mtvs :value "Scorecard" :label "Scorecard" :on-change #(rf/dispatch [:ta2022/main-table-view-selector %])]
                                                     [radio-button :model mtvs :value "Distances" :label "Distances" :on-change #(rf/dispatch [:ta2022/main-table-view-selector %])]
                                                     [radio-button :model mtvs :value "Total returns (1Y)" :label "Total returns (1Y)" :on-change #(rf/dispatch [:ta2022/main-table-view-selector %])]
                                                     [gap :size "50px"]
                                                     [label :label "Pivot:"]
                                                     [radio-button :model mtp :value "No" :label "No" :on-change #(rf/dispatch [:ta2022/main-table-pivot %])]
                                                     [radio-button :model mtp :value "Strategy" :label "Strategy" :on-change #(rf/dispatch [:ta2022/main-table-pivot %])]
                                                     [radio-button :model mtp :value "Analyst" :label "Analyst" :on-change #(rf/dispatch [:ta2022/main-table-pivot %])]
                                                     [radio-button :model mtp :value "Country" :label "Country" :on-change #(rf/dispatch [:ta2022/main-table-pivot %])]
                                                     [gap :size "50px"]
                                                     [checkbox :label "Show relval spread" :model (rf/subscribe [:ta2022/main-table-show-relval-value]) :on-change #(rf/dispatch [:ta2022/main-table-show-relval-value %])]
                                                     [gap :size "50px"]
                                                     [label :label (if is-table "" "Median values shown for pivot except NAV (sum)") :style {:font-style "italic"}]
                                                     ]]
                                         (if @(rf/subscribe [:ta2022/throbber])
                                           [throbber :size :large]
                                           [h-box :children [[:> ReactTable
                                                              {:data            (if is-table (tatables/strategy-sort data) (map #(assoc % :totaldummy "") (tatables/strategy-sort data)))
                                                               :columns         (concat [{:Header  "Trade description"
                                                                                          :columns (remove nil? (conj (map tatables/table-columns (remove nil? (conj [:ISIN (if (= @mtp "Strategy") :strategy-pivot :strategy) :NAME (if-not is-table :analyst) (if-not is-table :country)] (if (and @(rf/subscribe [:ta2022/filter-value :portfolio]) (not= @(rf/subscribe [:ta2022/filter-value :portfolio]) "All")) :weight))))
                                                                                                                      (if-not is-table {:Header "" :accessor "totaldummy" :width 30 :Aggregated tables/total-txt})
                                                                                                                      ))}
                                                                                         {:Header "Pricing" :columns (mapv tatables/table-columns [:price :yield :z-spread :g-spread :duration :rating-string :difference_svr :difference_svr_2d])}]

                                                                                        (case @mtvs
                                                                                          "Scorecard"
                                                                                          [{:Header "Target" :columns (remove nil? [(if is-table {:Header "Description" :accessor "target-alert-description" :width 140})
                                                                                                                                    {:Header "Price" :accessor "target-alert-implied-price" :width (if is-table 45 60) :style {:textAlign "right"} :Cell (if is-table #(price-fmt "target-alert-distance" %) #(tables/nb-cell-format "%.1f" 1. %)) :aggregate tables/median}
                                                                                                                                    ])}
                                                                                           {:Header "Relval" :columns (remove nil? [(if is-table {:Header "Description" :accessor "relval-alert-description" :width 140})
                                                                                                                                    {:Header "Price" :accessor "relval-alert-implied-price" :width (if is-table 45 60) :style {:textAlign "right"} :Cell (if is-table #(price-fmt "relval-alert-distance" %) #(tables/nb-cell-format "%.1f" 1. %)) :aggregate tables/median}
                                                                                                                                    (if @(rf/subscribe [:ta2022/main-table-show-relval-value]) {:Header "Sprd" :accessor "relval-alert-value" :width 45 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.0f" 1. %) :aggregate #(str "-")})
                                                                                                                                    ])}
                                                                                           {:Header "Review" :columns (remove nil? [(if is-table {:Header "Description" :accessor "review-alert-description" :width 140})
                                                                                                                                    {:Header "Price" :accessor "review-alert-implied-price" :width (if is-table 45 60) :style {:textAlign "right"} :Cell (if is-table #(price-fmt "review-alert-distance" %) #(tables/nb-cell-format "%.1f" 1. %)) :aggregate tables/median}
                                                                                                                                    ])}
                                                                                           {:Header "Performance year to date" :columns (mapv tatables/table-columns [:ytd-return :ytd-return-vs-cembi :ytd-return-vs-cembi-rating :ytd-return-vs-cembi-country :ytd-return-vs-cembi-sector :return-portfolio])}
                                                                                           ]
                                                                                          "Distances"
                                                                                          [{:Header "Target" :columns [{:Header "Implied price" :accessor "target-alert-implied-price" :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f" 1. %) :aggregate tables/median}
                                                                                                                       {:Header "Distance" :accessor "target-alert-distance" :width 85 :style {:textAlign "right"} :Cell distance-fmt :aggregate tables/median}]}
                                                                                           {:Header "Relval" :columns [{:Header "Implied price" :accessor "relval-alert-implied-price" :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f" 1. %) :aggregate tables/median}
                                                                                                                       {:Header "Distance" :accessor "relval-alert-distance" :width 85 :style {:textAlign "right"} :Cell distance-fmt :aggregate tables/median}]}
                                                                                           {:Header "Review" :columns [{:Header "Implied price" :accessor "review-alert-implied-price" :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f" 1. %) :aggregate tables/median}
                                                                                                                       {:Header "Distance" :accessor "review-alert-distance" :width 85 :style {:textAlign "right"} :Cell distance-fmt :aggregate tables/median}]}
                                                                                           {:Header "Performance year to date" :columns (mapv tatables/table-columns [:ytd-return :ytd-return-vs-cembi :ytd-return-vs-cembi-rating :ytd-return-vs-cembi-country :ytd-return-vs-cembi-sector :return-portfolio])}
                                                                                           ]
                                                                                          "Total returns (1Y)"
                                                                                          [{:Header "Analyst" :columns [{:Header "Target" :accessor "target-alert-tr-1y" :width 75 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 100. %) :aggregate tables/median}
                                                                                                                        {:Header "Relval" :accessor "relval-alert-tr-1y" :width 75 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 100. %) :aggregate tables/median}
                                                                                                                        {:Header "Review" :accessor "review-alert-tr-1y" :width 75 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 100. %) :aggregate tables/median}]}
                                                                                           {:Header "Model" :columns [{:Header "4D" :accessor "svr4d1yrtn" :width 75 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 1. %) :aggregate tables/median}
                                                                                                                      {:Header "2D" :accessor "svr2d1yrtn" :width 75 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 1. %) :aggregate tables/median}]}
                                                                                           {:Header "History" :columns [{:Header "Tight" :accessor "upside1y" :width 75 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 1. %) :aggregate tables/median}
                                                                                                                        {:Header "Median" :accessor "expected1y" :width 75 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 1. %) :aggregate tables/median}
                                                                                                                        {:Header "Wide" :accessor "downside1y" :width 75 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 1. %) :aggregate tables/median}]}
                                                                                           {:Header "Contribution" :columns [{:Header "Target" :accessor "target-alert-tr-1y-contribution" :width 85 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f%" 100. %) :aggregate tables/sum-rows}]}

                                                                                           ]
                                                                                          )

                                                                                        ) ;:new-issue
                                                               :pivotBy         (case @mtp "No" [] "Strategy" [:totaldummy :strategy] "Analyst" [:totaldummy :analyst] "Country" [:totaldummy :Country])
                                                               :expanded        @expanded :onExpandedChange #(reset! expanded %)
                                                               :defaultPageSize 20 :showPagination true :getTrProps (if is-table go-to-active-trade! (fn [a b c] #js {})) :className "-striped -highlight"}]]])

                                         ])]]))

(def alert-columns-for-amend-trigger-tables
  (into [] (for [k ["Target" "Relval" "Review"]]
             {:Header k :columns [(tables/nb-col "Implied price" (str (.toLowerCase k) "-alert-implied-price") 85 #(tables/nb-cell-format "%.1f" 1. %) tables/median)
                                  (tables/nb-col "Distance" (str (.toLowerCase k) "-alert-distance") 85 distance-fmt tables/median)]})))

(defn journal-table []
  (when-not @(rf/subscribe [:ta2022/journal-data])
    (rf/dispatch [:ta2022/post-journal-data]))
  (let [jd @(rf/subscribe [:ta2022/journal-data])]
    [v-box :gap "10px"
     :children [(gt/element-box-generic "trades-amended" element-box-width "Trades amended over the past week" (:trades-changed jd)
                                        [[h-box :children [[:> ReactTable
                                                            {:data       (tatables/strategy-sort (:trades-changed jd))
                                                             :columns    (concat [{:Header "Trade description" :columns (mapv tatables/table-columns (remove nil? (conj [:analyst :ISIN :strategy :NAME])))} ;:id :strategy-shortcut
                                                                                  {:Header "Pricing" :columns (mapv tatables/table-columns [:price :yield :z-spread :g-spread :duration :rating-string :difference_svr :difference_svr_2d])}]
                                                                                 alert-columns-for-amend-trigger-tables)
                                                             :filterable true :pageSize 10 :showPagination true :getTrProps go-to-active-trade! :className "-striped -highlight"}]]]])
                (gt/element-box-generic "trades-triggered" element-box-width "Trades triggered over the past week" (:trades-triggered jd)
                                        [[h-box :children [[:> ReactTable
                                                            {:data     (tatables/strategy-sort (:trades-triggered jd))
                                                             :columns  (concat [{:Header "Trade description" :columns (mapv tatables/table-columns (remove nil? (conj [:analyst :ISIN :strategy :NAME])))} ;:id :strategy-shortcut
                                                                                {:Header "Pricing" :columns (mapv tatables/table-columns [:price :yield :z-spread :g-spread :duration :rating-string :difference_svr :difference_svr_2d])}]
                                                                               alert-columns-for-amend-trigger-tables)
                                                             :filterable true :pageSize 20 :showPagination true :getTrProps go-to-active-trade! :className "-striped -highlight"}]]]])]]))

(defn active-home []
  (let [active-ta2022 @(rf/subscribe [:ta2022/active-home])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    [box :padding "80px 20px" :class "rightelement"
     :child (case active-ta2022
              :main [main-table]
              :trade-view [trade-view]
              :journal [journal-table]
              [:div.output "nothing to display"])]))


(defn modal-ta2022 []
  (if-let [modal-data @(rf/subscribe [:ta2022/show-modal])]
    [modal-panel
     :child [scroller :h-scroll :off :v-scroll :on
             :child
             (case (modal-data :type)
               :amend-latest-trade [taactions/amend-latest-trade-modal]
               :close-trade [taactions/close-trade-modal]
               :morph-trade [taactions/morph-trade-modal]
               :add-attachment [taactions/modal-add-attachment @(rf/subscribe [:ta2022/trade-isin])]
               nil)]]))

;(defn make-pdf-test []
;  (let [
;        styles (pdf-renderer/StyleSheet.create {:page {:flexDirection "row" :backgroundColor "#E4E4E4"}
;                                                :section {:margin 10 :padding 10 :flexGrow 1}})
;        my-document (fn []
;                      (str
;                        "
;                        <Document>
;                        <Page size=\"A4\" style="
;                        (.page styles) ">
;                        <View style="
;                        (.section styles) ">
;                        <Text>Section #1</Text>
;                        </View>
;                        <View style="
;                        (.section styles) ">
;                        <Text>Section #2</Text>
;                        </View>
;                        </Page>
;                        </Document>"))
;        viewer (fn [] [:PDFViewer [:MyDocument]])
;        ]
;    (dom/render [viewer] (.getElementById js/document "pdf-placeholder"))))

(defn ta2022-view []
  ;(set! (. js/document -title) "Trade analyser")
  [h-box :gap "10px" :padding "0px" :children [(gt/left-nav-bar static/ta2022-navigation :ta2022/active-home) [active-home] [modal-ta2022]]])
