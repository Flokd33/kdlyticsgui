(ns jasminegui.ta2022.tradeview
  (:require
    [re-frame.core :as rf]
    [reagent.core :as r]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink alert-box md-circle-icon-button modal-panel
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.charting :as charting]
    [jasminegui.guitools :as gt]
    [jasminegui.qs.qstables :as qstables]
    [jasminegui.qs.qscharts :as qscharts]
    [jasminegui.tools :as t]
    [jasminegui.ta2022.tables :as tatables]
    [jasminegui.ta2022.alerts :as taalerts]
    [oz.core :as oz])

  )

(def element-box-width "1280px")
(def dw "850px")
(defn hb [x] [h-box :gap "10px" :width "1024px" :align :center :children x])
(def btc "btn btn-primary btn-block")

(defn rt-int->date
  [accessor this]
  (if (aget this "value")
    (t/format-date-from-int (aget this "original" accessor)) "No"))

(defn trade-static-and-pricing
  [isin qdata last-trade triggers]
  (let [fmt-rtn (fn [this] (if-let [x (aget this "value")] (gstring/format "%.2f" (* 100. x)) (r/as-element [p {:style {:color "red" :padding "0px" :font-style "italic"}} "Triggered"])))
        fmt-rtn-1 (fn [this] (if-let [x (aget this "value")] (gstring/format "%.2f" x) (r/as-element [p {:style {:color "red" :padding "0px" :font-style "italic"}} "Triggered"])))]
    (gt/element-box-generic "trade-static" element-box-width "Bond data" nil
                            [(if qdata [:> ReactTable
                                        {:data [qdata] :columns (qstables/table-style->qs-table-col "TA2022" nil) :showPagination false :pageSize 1 :filterable false}]
                                       [p "loading..."])
                             (if (and qdata triggers)
                               [:> ReactTable
                                {:data           [(assoc qdata
                                                    :relval (get-in triggers [(last-trade :ta2022.trade/relval-alert-uuid) :implied-tr-1y])
                                                    :target (get-in triggers [(last-trade :ta2022.trade/target-alert-uuid) :implied-tr-1y])
                                                    :price (get-in triggers [(last-trade :ta2022.trade/price-alert-uuid) :implied-tr-1y])
                                                    :relval-price (get-in triggers [(last-trade :ta2022.trade/relval-alert-uuid) :implied-price])
                                                    :target-price (get-in triggers [(last-trade :ta2022.trade/target-alert-uuid) :implied-price])
                                                    :price-price (get-in triggers [(last-trade :ta2022.trade/price-alert-uuid) :implied-price]))]
                                 :columns        [{:Header  "Current alert implied prices"
                                                   :columns [{:Header "Relval" :accessor "relval-price" :width 70 :style {:textAlign "right"} :Cell fmt-rtn-1}
                                                             {:Header "Target" :accessor "target-price" :width 70 :style {:textAlign "right"} :Cell fmt-rtn-1}
                                                             {:Header "Review" :accessor "price-price" :width 70 :style {:textAlign "right"} :Cell fmt-rtn-1}]}
                                                  {:Header  "Target returns with 1y coupon (%)"
                                                   :columns [{:Header "4D" :accessor "svr4d1yrtn" :width 70 :style {:textAlign "right"} :Cell tables/round2}
                                                             {:Header "2D" :accessor "svr2d1yrtn" :width 70 :style {:textAlign "right"} :Cell tables/round2}
                                                             {:Header "Tight" :accessor "upside1y" :width 70 :style {:textAlign "right"} :Cell tables/round2}
                                                             {:Header "Median" :accessor "expected1y" :width 70 :style {:textAlign "right"} :Cell tables/round2}
                                                             {:Header "Wide" :accessor "downside1y" :width 70 :style {:textAlign "right"} :Cell tables/round2}
                                                             {:Header "Relval" :accessor "relval" :width 70 :style {:textAlign "right"} :Cell fmt-rtn}
                                                             {:Header "Target" :accessor "target" :width 70 :style {:textAlign "right"} :Cell fmt-rtn}
                                                             {:Header "Review" :accessor "price" :width 70 :style {:textAlign "right"} :Cell fmt-rtn}]}]
                                 :showPagination false :pageSize 1 :filterable false}]
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
                        {:mark {:type "text" :dx -20 :dy -15} :data {:values [{:label "price" :price target-price :dt last-date}] :format {:parse {:dt "date:'%Y%m%d'" :price "quantitative"}}} :encoding {:y {:field "price" :type "quantitative"} :x {:field "dt" :type "temporal"} :text {:field "label" :type "nominal"}}}]
          ]

      (gt/element-box-generic "history-chart" element-box-width "Trade history" nil
                              [(if qdata
                                 (let [vega-spec (qscharts/quant-isin-history-chart-map
                                                   @(rf/subscribe [:quant-model/history-result])
                                                   int-start-date
                                                   {:price true :ztw true}
                                                   [{:ISIN isin :bond (qdata :Bond)}]
                                                   "Absolute"
                                                   {:price (concat vega-rectangles target-lines) :ztw vega-rectangles})] ;(concat vega-rectangles target-lines)
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
                                                                                 {:Header "Index" :accessor :tr-vs-index-ltd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Rating" :accessor :tr-vs-index-rating-ltd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Country" :accessor :tr-vs-index-country-ltd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Sector" :accessor :tr-vs-index-sector-ltd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}]}
                                            {:Header "Year to date TR" :columns [
                                                                                 {:Header "Gross" :accessor :tr-ytd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Index" :accessor :tr-vs-index-ytd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Rating" :accessor :tr-vs-index-rating-ytd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Country" :accessor :tr-vs-index-country-ytd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}
                                                                                 {:Header "Sector" :accessor :tr-vs-index-sector-ytd :width 65 :style {:textAlign "right"} :Cell tables/round1pc}]}]
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
                               :filterable false :showPagination false :pageSize (count leg-by-leg-data) :showPageSizeOptions false :className "-striped -highlight"}]
                             ])))



(defn attachments
  [isin]
  (gt/element-box-generic "attachments" element-box-width "Attachments" nil [[p "No attachments found."]])
  ;[h-box :width dw :gap "10px" :children [[box :size "1" :child [label :label "Attachments"]] [box :size "3" :child [v-box :children (let [c (into [] (for [k @(rf/subscribe [:active-trade-attachments])] [hyperlink-href :href (str static/cms-address (:tradeanalyser.trade/ISIN trade) "/" k) :label k :target "_blank"]))] (if (pos? (count c)) c [[p "No attachments"]]))]]]]
  )

(defn alert-sort [data]
  (sort-by #(.indexOf ["relval" "target" "price" "review" "other"] (:ta2022.alert/alert-scope %)) data))

(defn alert-table [data with-triggers]
  [:> ReactTable
   {:data       (alert-sort data)
    :columns    (remove nil? [{:Header "UUID" :accessor :uuid :width 300 :style {:textAlign "left"} :Cell (fn [this] (if-let [x (aget this "value")] (str x) "-")) :show false}
                              ;{:Header "Start date" :accessor :start-date :width 100 :style {:textAlign "left"} :Cell (fn [this] (if-let [x (aget this "value")] (t/format-date-from-int x)))}
                              {:Header "Type" :accessor :alert-type :width 100 :style {:textAlign "left"} :show false}
                              {:Header "Scope" :accessor :alert-scope :width 100 :style {:textAlign "left"}}
                              {:Header "Description" :accessor :description :width 400 :style {:textAlign "left"}}
                              {:Header "Query" :accessor :description :width 300 :style {:textAlign "left"} :Cell (fn [this] (if-let [x (aget this "value")]

                                                                                                                               (str (aget this "original" "bloomberg-request")
                                                                                                                                    " "
                                                                                                                                    (aget this "original" "comparison")
                                                                                                                                    " "
                                                                                                                                    (aget this "original" "comparison-value")
                                                                                                                                    ) "-"))
                               :show   false}
                              {:Header "Start level" :accessor :start-level :width 100 :Cell tables/round2 :style {:textAlign "right"}}
                              (if with-triggers {:Header "Latest" :accessor :latest-market-price :width 100 :Cell tables/round2 :style {:textAlign "right"}})
                              (if with-triggers {:Header "Distance" :accessor :distance-to-trigger :width 100 :Cell tables/round0pc :style {:textAlign "right"}})
                              {:Header "Triggered?" :accessor :triggered :width 100 :style {:textAlign "left"} :Cell #(rt-int->date "triggered-date" %)}
                              ])
    :filterable false :showPagination false :pageSize (count data) :showPageSizeOptions false :className "-striped -highlight"}]
  )

(defn alert->alert-with-triggers [triggers a]
  (clojure.set/rename-keys (merge a (triggers (:ta2022.alert/uuid a))) {:latest-market-spread :latest-market-price}))

(defn trade->alerts [trade alerts]
  (remove nil? (concat [(if-let [a (:ta2022.trade/relval-alert-uuid trade)] (assoc (alerts a) :ta2022.alert/alert-scope "relval"))
                        (if-let [a (:ta2022.trade/target-alert-uuid trade)] (assoc (alerts a) :ta2022.alert/alert-scope "target"))
                        (if-let [a (:ta2022.trade/review-alert-uuid trade)] (assoc (alerts a) :ta2022.alert/alert-scope "review"))
                        (if-let [a (:ta2022.trade/price-alert-uuid trade)] (assoc (alerts a) :ta2022.alert/alert-scope "price"))]
                       (if (and (:ta2022.trade/other-alert-uuids trade) (pos? (count (:ta2022.trade/other-alert-uuids trade))))
                         (mapv #(assoc (alerts %) :ta2022.alert/alert-scope "other") (:ta2022.trade/other-alert-uuids trade))))))

(defn trade-description
  [sorted-trades alerts triggers]
  (let [t0 (first sorted-trades) tl (last sorted-trades)]
    (gt/element-box-generic "trade-description" element-box-width "Trade description" nil
                            (concat [[v-box :gap "5px" :children [[title :label "Original trade" :level :level2]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Internal ID"]] [box :size "3" :child [label :label (str (:ta2022.trade/uuid t0))]]]]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Analyst"]] [box :size "3" :child [label :label (:ta2022.trade/analyst t0)]]]]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Strategy"]] [box :size "3" :child [label :label (:ta2022.trade/strategy t0)]]]]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Entry date"]] [box :size "3" :child [label :label (t/format-date-from-int (:ta2022.trade/entry-date t0))]]]]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Entry rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/entry-rationale t0)) (catch js/Error e (:ta2022.trade/entry-rationale t0)))]]]]]]]
                                    (if (> (count sorted-trades) 1)
                                      [[v-box :gap "5px" :children [[title :label (str "Latest update (no." (count sorted-trades) ")") :level :level2]
                                                                    [hb [[box :size "1" :child [title :level :level3 :label "Internal ID"]] [box :size "3" :child [label :label (str (:ta2022.trade/uuid tl))]]]]
                                                                    [hb [[box :size "1" :child [title :level :level3 :label "Analyst"]] [box :size "3" :child [label :label (:ta2022.trade/analyst tl)]]]]
                                                                    [hb [[box :size "1" :child [title :level :level3 :label "Strategy"]] [box :size "3" :child [label :label (:ta2022.trade/strategy tl)]]]]
                                                                    [hb [[box :size "1" :child [title :level :level3 :label "Entry date"]] [box :size "3" :child [label :label (t/format-date-from-int (:ta2022.trade/entry-date tl))]]]]
                                                                    [hb [[box :size "1" :child [title :level :level3 :label "Entry rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/entry-rationale tl)) (catch js/Error e (:ta2022.trade/entry-rationale tl)))]]]]
                                                                    [hb [[box :size "1" :child [title :level :level3 :label "Exit date"]] [box :size "3" :child [label :label (t/format-date-from-int (:ta2022.trade/exit-date tl))]]]]
                                                                    [hb [[box :size "1" :child [title :level :level3 :label "Exit rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/exit-rationale tl)) (catch js/Error e (:ta2022.trade/exit-rationale tl)))]]]]]]])
                                       [[title :label "Current triggers" :level :level2] [alert-table (map #(alert->alert-with-triggers triggers %)
                                                                                                           (trade->alerts tl alerts)) true]]))))

(defn trade-history
  [sorted-trades alerts]
  (gt/element-box-generic "trade-history" element-box-width "Trade history" nil
                          (into [] (for [[n tl] (map-indexed list sorted-trades)]
                                     [v-box :gap "5px" :children [[title :label (str "Trade " (inc n) "/" (count sorted-trades)) :level :level2]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Internal ID"]] [box :size "3" :child [label :label (str (:ta2022.trade/uuid tl))]]]]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Analyst"]] [box :size "3" :child [label :label (:ta2022.trade/analyst tl)]]]]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Strategy"]] [box :size "3" :child [label :label (:ta2022.trade/strategy tl)]]]]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Entry date"]] [box :size "3" :child [label :label (t/format-date-from-int (:ta2022.trade/entry-date tl))]]]]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Entry rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/entry-rationale tl)) (catch js/Error e (:ta2022.trade/entry-rationale tl)))]]]]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Exit date"]] [box :size "3" :child [label :label (t/format-date-from-int (:ta2022.trade/exit-date tl))]]]]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Exit rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/exit-rationale tl)) (catch js/Error e (:ta2022.trade/exit-rationale tl)))]]]]
                                                                  [hb [[box :size "1" :child [title :level :level3 :label "Alerts"]] [box :size "3" :child [alert-table (trade->alerts tl alerts) false]]]]
                                                                  ]]))))

(defn isin-picker []
  (let [isin (r/atom nil)]
    (fn []
      (gt/element-box-generic "isin-picker" element-box-width "ISIN chooser" nil
                              [[h-box :gap "10px" :align :center :children [[label :label "Pick an ISIN"]
                                                                            [input-text :model isin :on-change #(reset! isin %)]
                                                                            [button :label "Fetch data" :class btc :on-click #(do (rf/dispatch [:ta2022/trade-isin @isin])
                                                                                                                                                          (rf/dispatch [:get-ta2022-trade-view-history @isin])
                                                                                                                                                          (rf/dispatch [:get-ta2022-trade-view-position-and-performance-table @isin]))]]]]
                              ))))

(defn actions []
  (gt/element-box-generic "actions" element-box-width "Actions" nil
                          [[h-box  :gap "10px" :children [
                                                            [button :label "Amend latest entry" :class btc :on-click #(rf/dispatch [:ta2022/show-modal {:type :amend-latest-trade}])]
                                                            [button :label "Morph trade" :class btc :on-click #(rf/dispatch [:ta2022/show-modal {:type :morph-trade}])]
                                                            [button :label "Close trade" :class btc :on-click #(rf/dispatch [:ta2022/show-modal {:type :close-trade}])]
                                                            [button :label "Add attachment" :class btc :on-click #(do)]]]]))

(defn trade-view
  []
  (let [isin @(rf/subscribe [:ta2022/trade-isin])
        qdata (first (t/chainfilter {:ISIN isin} @(rf/subscribe [:quant-model/model-output])))]
    (when (nil? @(rf/subscribe [:ta2022/trade-history]))
      (rf/dispatch [:get-ta2022-trade-view-history isin])
      (rf/dispatch [:post-model-history-pricing :pricing [isin]]))
    (when (zero? (count @(rf/subscribe [:ta2022/trade-view-position-and-performance-table])))
      (rf/dispatch [:get-ta2022-trade-view-position-and-performance-table isin]))
    (let [th @(rf/subscribe [:ta2022/trade-history])
          {:keys [trades alerts performances triggers]} th]
      [v-box :gap "10px"
       :children [[isin-picker]
                  [trade-static-and-pricing isin qdata (last trades) triggers]
                  [trade-description trades alerts triggers]
                  [historical-chart isin qdata trades triggers]
                  [attachments isin]
                  [positions-and-performance-table trades performances]
                  [trade-history trades alerts]
                  [actions]]])))




(def table-columns
  {:id                          {:Header "ID" :accessor "id" :show false}
   :id-show                     {:Header "ID" :accessor "id" :width 60}
   ;:strategy-shortcut           {:Header "Strategy"       :accessor "strategy-shortcut"           :width 80 :style {:textAlign "center"} :filterMethod tables/text-filter-OR :Cell tables/strategy-pop-up}
   :strategy                    {:Header "Strategy" :accessor "strategy" :Cell #(if-let [x (aget % "value")] (tatables/strategy->shortcut x) "-")  :width 80 :style {:textAlign "center"} :filterMethod tables/text-filter-OR} ;we need to have it in the table for the props
   ;:entry-date                  {:Header "Entry date"     :accessor "entry-date"                  :width 80 :style {:textAlign "center"} :Cell tables/format-date-from-int-rt}
   ;:exit-date                   {:Header "Exit date"      :accessor "exit-date"                   :width 70 :style {:textAlign "center"} :Cell tables/exit-date-props :filterMethod tables/exit-date-filter}
   ;:analyst                     {:Header "Analyst"        :accessor "analyst"                     :width 50 :style {:textAlign "center"} :filterMethod tables/text-filter-OR}
   :NAME                        {:Header "Name" :accessor "Bond" :width 120 :style {:textAlign "center"} :filterMethod tables/text-filter-OR}
   :portfolio                   {:Header "Portfolio" :accessor "portfolio" :width 135 :style {:textAlign "center"} :filterMethod tables/text-filter-OR}
   :ISIN                        {:Header "ISIN" :accessor "ISIN" :width 125 :style {:textAlign "center"} :show false}
   :status                      {:Header "Status" :accessor "status" :show false} ;we need to have it in the table for the props
   :status-show                 {:Header "Status" :accessor "status" :width 60 :style {:textAlign "center"}} ;we need to have it in the table for the props
   :thisyear                    {:Header "thisyear" :accessor "thisyear" :show false} ;we need to have it in the table for the props
   :position                    {:Header "Model" :accessor "position" :width 50 :style {:textAlign "right"} :Cell tables/round2pc :filterMethod tables/nb-filter-OR-AND}
   :weight               {:Header "Actual" :accessor "weight" :width 50 :style {:textAlign "right"} :Cell tables/round2pc :filterMethod tables/nb-filter-OR-AND}
   :entry-price                 {:Header "Entry" :accessor "entry-price" :width 60 :style {:textAlign "right"} :Cell tables/round2 :filterMethod tables/nb-filter-OR-AND}
   :price                       {:Header "Price" :accessor "Used_Price" :width 50 :style {:textAlign "right"} :Cell tables/round2 :filterMethod tables/nb-filter-OR-AND}
   :yield                       {:Header "Yield" :accessor "Used_YTW" :width 50 :style {:textAlign "right"} :Cell tables/yield-format :filterMethod tables/nb-filter-OR-AND}
   :z-spread                    {:Header "Z-Sprd" :accessor "Used_ZTW" :width 55 :style {:textAlign "right"} :Cell tables/zspread-format :filterMethod tables/nb-filter-OR-AND}
   :g-spread                    {:Header "G-Sprd" :accessor "G_SPREAD_MID_CALC" :width 55 :style {:textAlign "right"} :Cell tables/zspread-format :filterMethod tables/nb-filter-OR-AND}
   :duration                    {:Header "Dur." :accessor "Used_Duration" :width 45 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f" 1. %) :filterMethod tables/nb-filter-OR-AND}
   :rating-string               {:Header "Rating" :accessor "Rating_String" :width 110 :style {:textAlign "center"}}
   :difference_svr              {:Header "4D" :accessor "difference_svr" :width 35 :getProps tables/red-negatives :Cell #(tables/nb-cell-format "%.0f" 1. %) :filterMethod tables/nb-filter-OR-AND}
   :difference_svr_2d           {:Header "2D" :accessor "difference_svr_2d" :width 35 :getProps tables/red-negatives :Cell #(tables/nb-cell-format "%.0f" 1. %) :filterMethod tables/nb-filter-OR-AND}

   ;:d-target                    {:Header "Price"          :accessor "d-target"                    :width 50 :style {:textAlign "right"} :Cell tables/round0pc-trigger :filterMethod tables/nb-filter-OR-AND}
   ;:d-review                    {:Header "Review"         :accessor "d-review"                    :width 50 :style {:textAlign "right"} :Cell tables/round0pc-trigger :filterMethod tables/nb-filter-OR-AND}
   ;:max-d-others                {:Header "Others"         :accessor "max-d-others"                :width 50 :style {:textAlign "right"} :Cell tables/round0pc-trigger :filterMethod tables/nb-filter-OR-AND}
   ;:ytd-return                  {:Header "Raw"            :accessor "ytd-return"                  :width 50 :style {:textAlign "right"} :Cell tables/round1pcytd :filterMethod tables/nb-filter-OR-AND} ;:getProps fp4
   ;:ytd-return-vs-cembi         {:Header "CEMBI"       :accessor "ytd-return-vs-cembi"         :width 50 :style {:textAlign "right"} :Cell tables/round1pcytd :filterMethod tables/nb-filter-OR-AND} ;:getProps fp4
   ;:ytd-return-vs-cembi-rating  {:Header "IGHY"        :accessor "ytd-return-vs-cembi-rating"  :width 50 :style {:textAlign "right"} :Cell tables/round1pcytd :filterMethod tables/nb-filter-OR-AND}
   ;:ytd-return-vs-cembi-country {:Header "Cntry"       :accessor "ytd-return-vs-cembi-country" :width 50 :style {:textAlign "right"} :Cell tables/round1pcytd :filterMethod tables/nb-filter-OR-AND}
   ;:ytd-return-vs-cembi-sector  {:Header "Sctr"      :accessor "ytd-return-vs-cembi-sector"  :width 50 :style {:textAlign "right"} :Cell tables/round1pcytd :filterMethod tables/nb-filter-OR-AND}
   :ltd-return                  {:Header "Raw" :accessor "ltd-return" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND} ;:getProps fp4
   :ltd-return-vs-cembi         {:Header "CEMBI" :accessor "ltd-return-vs-cembi" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND} ;:getProps fp4
   :ltd-return-vs-cembi-rating  {:Header "IGHY" :accessor "ltd-return-vs-cembi-rating" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND}
   :ltd-return-vs-cembi-country {:Header "Cntry" :accessor "ltd-return-vs-cembi-country" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND}
   :ltd-return-vs-cembi-sector  {:Header "Sctr" :accessor "ltd-return-vs-cembi-sector" :width 50 :style {:textAlign "right"} :Cell tables/round1pc :filterMethod tables/nb-filter-OR-AND}
   :price-target                {:Header "Target" :accessor "price-target" :width 55 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f" 1. %) :filterMethod tables/nb-filter-OR-AND}
   :review-target               {:Header "Target" :accessor "implied-price-review" :width 55 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.1f" 1. %) :filterMethod tables/nb-filter-OR-AND}
   :relval-target-description   {:Header "Description" :accessor "relval-target-description" :width 170} ;:getProps fp4 ; :headerClassName "wordwrap"
   :relval-target-latest        {:Header "Latest" :accessor "relval-target-value" :width 50 :style {:textAlign "right"} :Cell tables/round2 :filterMethod tables/nb-filter-OR-AND} ;:getProps fp4 ; :headerClassName "wordwrap"
   :relval-target-distance                    {:Header "Relval"         :accessor "relval-target-distance"                    :width 50 :style {:textAlign "right"} :Cell tables/round0pc :filterMethod tables/nb-filter-OR-AND}

   ;:implied-total-return-1y-review {:Header "Review"         :accessor "implied-total-return-1y-review"        :width 60 :style {:textAlign "right"} :Cell tables/round1pcsign :filterMethod tables/nb-filter-OR-AND}
   ;:implied-total-return-1y-target {:Header "Price"         :accessor "implied-total-return-1y-target"        :width 60 :style {:textAlign "right"} :Cell tables/round1pcsign :filterMethod tables/nb-filter-OR-AND}
   ;:implied-total-return-1y-relval {:Header "Relval"         :accessor "implied-total-return-1y-relval"        :width 60 :style {:textAlign "right"} :Cell tables/round1pcsign :filterMethod tables/nb-filter-OR-AND}
   ;:svr4d1yrtn {:Header "4D"         :accessor "svr4d1yrtn"        :width 60 :style {:textAlign "right"} :Cell tables/round1pcsign :filterMethod tables/nb-filter-OR-AND}
   ;:svr2d1yrtn {:Header "2D"         :accessor "svr2d1yrtn"        :width 60 :style {:textAlign "right"} :Cell tables/round1pcsign :filterMethod tables/nb-filter-OR-AND}
   ;:upside1y {:Header "Tight"         :accessor "upside1y"        :width 60 :style {:textAlign "right"} :Cell tables/round1pcsign  :filterMethod tables/nb-filter-OR-AND}
   ;:expected1y {:Header "Median"         :accessor "expected1y"        :width 60 :style {:textAlign "right"} :Cell tables/round1pcsign  :filterMethod tables/nb-filter-OR-AND}
   ;:downside1y {:Header "Wide"         :accessor "downside1y"        :width 60 :style {:textAlign "right"} :Cell tables/round1pcsign :filterMethod tables/nb-filter-OR-AND}

   })


(defn row-action [action rowInfo] (clj->js {:onClick #(rf/dispatch [action (aget rowInfo "row" "_original" "isin")]) :style {:cursor "pointer"}}))
(defn go-to-active-trade! [state rowInfo instance] (row-action :ta2022/go-to-active-trade rowInfo))

(defn main-table []
  (let [analyst (r/atom nil)
        sector (r/atom nil)
        country (r/atom nil)
        portfolio (r/atom nil)
        qsdata @(rf/subscribe [:quant-model/model-output])]
    (fn []
      (let [data @(rf/subscribe [:ta2022/main-table-data])]
        [v-box :gap "10px"
         :children [
                    (gt/element-box-generic "isin-picker" element-box-width "Filtering" nil
                                            [[h-box :gap "10px" :align :center
                                              :children [[single-dropdown :model analyst :choices (conj (for [k @(rf/subscribe [:analysts])] {:id k :label k}) {:id "All" :label "All"}) :on-change #(do (rf/dispatch [:ta2022/main-table-data []]) (reset! analyst %)) :placeholder "Analyst" :filter-box? true]
                                                         [single-dropdown :model sector :choices (conj (map (fn [x] {:id x :label x}) (sort (distinct (map :Sector qsdata)))) {:id "All" :label "All"}) :on-change #(do (rf/dispatch [:ta2022/main-table-data []]) (reset! sector %)) :placeholder "Sector" :filter-box? true]
                                                         [single-dropdown :model country :choices (conj (map (fn [x] {:id x :label (:LongName (first (filter #(= (:CountryCode %) x) @(rf/subscribe [:country-codes]))))}) (sort (distinct (map :Country qsdata)))) {:id "All" :label "All"}) :on-change #(do (rf/dispatch [:ta2022/main-table-data []]) (reset! country %)) :placeholder "Country" :filter-box? true]
                                                         [single-dropdown :model portfolio :choices (conj (for [k @(rf/subscribe [:portfolios])] {:id k :label k}) {:id "All" :label "All"}) :on-change #(do (rf/dispatch [:ta2022/main-table-data []]) (reset! portfolio %)) :placeholder "Portfolio" :filter-box? true]
                                                         [button :label "Fetch data" :class btc :on-click #(rf/dispatch [:ta2022/post-main-table-data @analyst @sector @country @portfolio])]
                                                         ]]])

                    (gt/element-box-generic "isin-picker" element-box-width "Results" nil
                                            [[:> ReactTable
                                              {:data           (tatables/strategy-sort data)
                                               :columns        [{:Header "Trade description" :columns (mapv table-columns (remove nil? (conj [:ISIN :strategy :NAME] (if (and @portfolio (not= @portfolio "All")) :weight))))} ;:id :strategy-shortcut
                                                                {:Header "Pricing" :columns (mapv table-columns [:price :yield :z-spread :g-spread :duration :rating-string :difference_svr :difference_svr_2d])}
                                                                {:Header "Relative value target" :columns (mapv table-columns [:relval-target-description :relval-target-latest :relval-target-distance])}
                                                                ;{:Header "Price target" :columns (mapv table-columns [:price-target :d-target])}
                                                                ;{:Header "Review target" :columns (mapv table-columns [:review-target :d-review])}
                                                                ;{:Header "Performance since inception" :columns (mapv table-columns [:ltd-return :ltd-return-vs-cembi :ltd-return-vs-cembi-rating :ltd-return-vs-cembi-country :ltd-return-vs-cembi-sector])}
                                                                ;{:Header "Performance year to date" :columns (mapv table-columns [:ytd-return :ytd-return-vs-cembi :ytd-return-vs-cembi-rating :ytd-return-vs-cembi-country :ytd-return-vs-cembi-sector])}
                                                                ]
                                               :pageSize       20
                                               :showPagination true
                                               :getTrProps       go-to-active-trade!
                                               :className      "-striped -highlight"}]

                                             ]

                                            )
                    ]

         ])))

  )

(defn active-home []
  (let [active-ta2022 @(rf/subscribe [:ta2022/active-home])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    [box :padding "80px 20px" :class "rightelement"
     :child (case active-ta2022
              :main [main-table]
              :trade-view [trade-view]
              [:div.output "nothing to display"])]))

(defn nav-ta2022-bar []
  (let [active-esg @(rf/subscribe [:ta2022/active-home])]
    [h-box
     :children [[v-box
                 :gap "20px" :class "leftnavbar"
                 :children (into []
                                 (for [item static/ta2022-navigation]
                                   [button
                                    :class (str btc (if (and (= active-esg (:code item))) " active"))
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:ta2022/active-home (:code item)])]))]]]))

(defn close-trade-modal []
  (let [exit-rationale (r/atom nil)
        last-leg-uuid (:ta2022.trade/uuid (last (sort-by :ta2022.trade/entry-date (first @(rf/subscribe [:ta2022/trade-history])))))]
    (fn []
      [v-box :width "1024px" :height "300px" :gap "10px" :padding "20px"
       :children [[title :label "Close trade" :level :level1]
                  [label :label "Exit rationale"] [input-textarea :model exit-rationale :on-change #(reset! exit-rationale %) :width "600px" :rows 5]
                  [line]
                  [h-box :gap "10px" :children [[button :class btc :label "Close trade" :disabled? (not @(rf/subscribe [:ta2022/can-morph])) :on-click #(rf/dispatch [:ta2022/close-trade last-leg-uuid @exit-rationale])]
                                                [button :class btc :label "Cancel" :on-click #(rf/dispatch [:ta2022/show-modal nil])]]]
                  ]])))

(defn morph-trade-modal []
  (let [last-trade (last (sort-by :ta2022.trade/entry-date (first @(rf/subscribe [:ta2022/trade-history]))))
        exit-rationale (r/atom nil)
        trade-entry (r/atom {:analyst         (:ta2022.trade/analyst last-trade)
                             :strategy        nil
                             :entry-rationale nil
                             :ISIN            @(rf/subscribe [:ta2022/trade-isin])
                             :relval-alert    (assoc taalerts/spread-alert-template :comparison "<" :bloomberg-request-security-1 (str @(rf/subscribe [:ta2022/trade-isin]) " Corp") :bloomberg-request-field-1 "Z_SPRD_MID" :operator "-" :bloomberg-request-security-2 "JBCDCBZW Index" :bloomberg-request-field-2 "PX_LAST")
                             :target-alert    (assoc taalerts/single-alert-template :comparison ">" :bloomberg-request-security-1 (str @(rf/subscribe [:ta2022/trade-isin]) " Corp") :bloomberg-request-field-1 "PX_LAST")
                             :review-alert    (assoc taalerts/single-alert-template :comparison "<" :bloomberg-request-security-1 (str @(rf/subscribe [:ta2022/trade-isin]) " Corp") :bloomberg-request-field-1 "PX_LAST")
                             :other-alerts    {}})
        entry-rationale (r/cursor trade-entry [:entry-rationale])
        strategy (r/cursor trade-entry [:strategy])
        analyst (r/cursor trade-entry [:analyst])
        last-leg-uuid (:ta2022.trade/uuid last-trade)]
    (fn []
      [v-box :width "1024px" :height "800px" :gap "10px" :padding "20px"
       :children [[title :label "Morph trade" :level :level1]
                  [label :label "Exit rationale"] [input-textarea :model exit-rationale :on-change #(reset! exit-rationale %) :width "600px" :rows 5]
                  [h-box :align :center :children [[label :width "125px" :label "New analyst"]
                                                   [single-dropdown :width "200px" :choices (for [k @(rf/subscribe [:analysts])] {:id k :label k}) :model analyst :on-change #(reset! analyst %)]]]
                  [h-box :align :center :children [[label :width "125px" :label "New strategy"]
                                                   [single-dropdown :width "200px" :choices tatables/strategy-choices :model strategy :on-change #(reset! strategy %)]]]
                  [label :label "New trade rationale"] [input-textarea :model entry-rationale :on-change #(reset! entry-rationale %) :width "600px" :rows 10]
                  [taalerts/trade-alert-input trade-entry]
                  (if-let [x @(rf/subscribe [:ta2022/implied-price-difference])] [label :label (str "Implied upside price difference (has to be <1%) " (gstring/format "%.1f%" (* 100 x)))])
                  [line]
                  [h-box :gap "10px" :children [[button :class btc :label "Test alerts" :on-click #(rf/dispatch [:ta2022/send-trade-to-test @trade-entry])]
                                                [button :class btc :label "Morph trade" :disabled? (not @(rf/subscribe [:ta2022/can-morph])) :on-click #(rf/dispatch [:ta2022/save-new-trade last-leg-uuid @exit-rationale @trade-entry])]
                                                [button :class btc :label "Cancel" :on-click #(do (rf/dispatch [:ta2022/test-result nil]) (rf/dispatch [:ta2022/show-modal nil]))]]]
                  ]])))

(defn amend-latest-trade-modal []
  (let [last-trade (last (sort-by :ta2022.trade/entry-date (first @(rf/subscribe [:ta2022/trade-history]))))
        all-alerts (let [x (trade->alerts last-trade (second @(rf/subscribe [:ta2022/trade-history])))] (zipmap (map :ta2022.alert/uuid x) x))
        trade-entry (r/atom {:analyst         (:ta2022.trade/analyst last-trade)
                             :strategy        (:ta2022.trade/strategy last-trade)
                             :entry-rationale (:ta2022.trade/entry-rationale last-trade)
                             :ISIN            @(rf/subscribe [:ta2022/trade-isin])
                             :relval-alert    (taalerts/alert-from-backend (all-alerts (:ta2022.trade/relval-alert-uuid last-trade)))
                             :target-alert    (taalerts/alert-from-backend (all-alerts (:ta2022.trade/target-alert-uuid last-trade)))
                             :review-alert    (taalerts/alert-from-backend (all-alerts (:ta2022.trade/review-alert-uuid last-trade))) ;TODO IS IT PRICE OR REVIEW!!!
                             :other-alerts    {}})          ;TODO
        entry-rationale (r/cursor trade-entry [:entry-rationale])
        strategy (r/cursor trade-entry [:strategy])
        analyst (r/cursor trade-entry [:analyst])
        last-leg-uuid (:ta2022.trade/uuid (last (first @(rf/subscribe [:ta2022/trade-history]))))]
    ;    (println last-trade)
    (fn []
      [v-box :width "1024px" :height "800px" :gap "10px" :padding "20px"
       :children [[title :label "Amend latest trade" :level :level1]
                  [h-box :align :center :children [[label :width "125px" :label "New analyst"]
                                                   [single-dropdown :width "200px" :choices (for [k @(rf/subscribe [:analysts])] {:id k :label k}) :model analyst :on-change #(reset! analyst %)]]]
                  [h-box :align :center :children [[label :width "125px" :label "New strategy"]
                                                   [single-dropdown :width "200px" :choices tatables/strategy-choices :model strategy :on-change #(reset! strategy %)]]]
                  [label :label "New trade rationale"] [input-textarea :model entry-rationale :on-change #(reset! entry-rationale %) :width "600px" :rows 10]
                  [taalerts/trade-alert-input trade-entry]
                  [line]
                  [h-box :gap "10px" :children [[button :class btc :label "Test alerts" :on-click #(rf/dispatch [:ta2022/send-trade-to-test @trade-entry])]
                                                [button :class btc :label "Amend trade" :disabled? (not @(rf/subscribe [:ta2022/can-morph])) :on-click #(rf/dispatch [:ta2022/amend-latest-trade last-leg-uuid @trade-entry])]
                                                [button :class btc :label "Cancel" :on-click #(do (rf/dispatch [:ta2022/test-result nil]) (rf/dispatch [:ta2022/show-modal nil]))]]]
                  ]])))

(defn modal-ta2022 []
  (if-let [modal-data @(rf/subscribe [:ta2022/show-modal])]
    [modal-panel
     :child [scroller :h-scroll :off :v-scroll :on
             :child
             (case (modal-data :type)
               :amend-latest-trade [amend-latest-trade-modal]
               :close-trade [close-trade-modal]
               :morph-trade [morph-trade-modal]
               :add-attachment nil
               nil

               )
             ]])

  )

(defn ta2022-view []
  [h-box :gap "10px" :padding "0px" :children [[nav-ta2022-bar] [active-home] [modal-ta2022]]])