(ns jasminegui.ta2022.tradeview
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink alert-box md-circle-icon-button
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
    [jasminegui.tools :as t]
    [oz.core :as oz])

  )

(def element-box-width "1280px")

(defn trade-static-and-pricing
  [isin qdata]
  (gt/element-box-generic "trade-static" element-box-width "Bond data" nil
                          [(if qdata [:> ReactTable
                                      {:data           [qdata]
                                       :columns        (qstables/table-style->qs-table-col "TA2022" nil)
                                       :showPagination false
                                       :pageSize       1
                                       :filterable     false}]
                                     [p "loading..."])])

  )


(defn historical-chart
  [isin qdata]
  (rf/dispatch [:post-model-history-pricing :pricing [isin]])
  (gt/element-box-generic "history-chart" element-box-width "Trade history" nil [(if qdata
                                                                                   [oz/vega-lite (jasminegui.qs.qscharts/quant-isin-history-chart true false true false false isin nil (qdata :Bond) nil 0 "Absolute")]
                                                                                   [p "loading..."])])
  )

(rf/reg-event-fx
  :get-ta2022-trade-view-position-and-performance-table
  (fn [{:keys [db]} [_ isin]]
    {:db db
     :http-get-dispatch {:url          (str static/server-address "ta2022-positions?isin=" isin)
                         :dispatch-key [:ta2022/trade-view-position-and-performance-table]}}))

(defn positions-and-performance-table
  [isin]
  (let [data @(rf/subscribe [:ta2022/trade-view-position-and-performance-table])
        cdata (->> data
                   (filter #(not (some #{(:portfolio %)} ["OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE"])))
                   (map #(update % :nav (fn [x] (if (zero? x) nil x))))
                   (map #(update % :position (fn [x] (if (zero? x) nil x))))
                   )]
    (gt/element-box-generic "position-table" element-box-width "Positions and performance" nil


                            [
                             [:> ReactTable
                              {:data       cdata
                               :columns    [{:Header "Portfolio" :accessor :portfolio :width 100 :style {:textAlign "left"}}
                                            {:Header "NAV" :accessor :nav :width 100 :style {:textAlign "right"} :Cell tables/round2pc}
                                            {:Header "Nominal" :accessor :position :width 100 :style {:textAlign "right"} :Cell tables/nb-thousand-cell-format}
                                            {:Header "Entry date" :accessor :avg-entry-date :width 100 :style {:textAlign "right"}}
                                            {:Header "Entry price" :accessor :avg-entry-price :width 100 :style {:textAlign "right"} :Cell tables/round2}
                                            {:Header "LTD TR" :accessor :tr-ltd :width 100 :style {:textAlign "right"} :Cell tables/round1pc}
                                            {:Header "YTD TR" :accessor :tr-ytd :width 100 :style {:textAlign "right"} :Cell tables/round1pc}

                                            ]
                               :filterable false :showPagination false :pageSize (count cdata) :showPageSizeOptions false :className "-striped -highlight"}]

                             ])
    )


  )

(rf/reg-event-fx
  :get-ta2022-trade-view-history
  (fn [{:keys [db]} [_ isin]]
    {:db db
     :http-get-dispatch {:url          (str static/server-address "ta2022-history?isin=" isin)
                         :dispatch-key [:ta2022/trade-history]}}))


(defn attachments
  [isin]
  (gt/element-box-generic "attachments" element-box-width "Attachments" nil [])
  ;[h-box :width dw :gap "10px" :children [[box :size "1" :child [label :label "Attachments"]] [box :size "3" :child [v-box :children (let [c (into [] (for [k @(rf/subscribe [:active-trade-attachments])] [hyperlink-href :href (str static/cms-address (:tradeanalyser.trade/ISIN trade) "/" k) :label k :target "_blank"]))] (if (pos? (count c)) c [[p "No attachments"]]))]]]]
  )

(defn alert-table [data]
  [:> ReactTable
   {:data       data
    :columns    [{:Header "UUID" :accessor :uuid :width 300 :style {:textAlign "left"} :Cell (fn [this] (if-let [x (aget this "value")] (str x) "-")) :show false}
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
                  :show false}

                 {:Header "Start level" :accessor :start-level :width 100 :Cell tables/round2 :style {:textAlign "right"}}
                 {:Header "Triggered?" :accessor :triggered :width 100 :style {:textAlign "left"} :Cell (fn [this] (if (aget this "value")
                                                                                                                     (t/format-date-from-int (aget this "original" "triggered-date")) "No"))}
                 ]
    :filterable false :showPagination false :pageSize (count data) :showPageSizeOptions false :className "-striped -highlight"}]
  )

(defn trade-description
  [trades alerts]
  ;(when (nil? @(rf/subscribe [:ta2022/trade-history]))
  ;  (rf/dispatch [:get-ta2022-trade-view-history isin]))
  (let [                                                    ;[trades alerts] @(rf/subscribe [:ta2022/trade-history])
        dw "850px"
        t0 (first trades)
        tl (last trades)
        ]
    (gt/element-box-generic "trade-description" element-box-width "Trade description" nil [
                                                                                   ;[p (str trades)]
                                                                                   [v-box :gap "5px" :children [[title :label "Original trade" :level :level2]
                                                                                                                [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Internal ID"]] [box :size "3" :child [label :label (str (:ta2022.trade/uuid t0))]]]]
                                                                                                                [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Analyst"]] [box :size "3" :child [label :label (:ta2022.trade/analyst t0)]]]]
                                                                                                                [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Strategy"]] [box :size "3" :child [label :label (:ta2022.trade/strategy t0)]]]]
                                                                                                                [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Entry date"]] [box :size "3" :child [label :label (t/format-date-from-int (:ta2022.trade/entry-date t0))]]]]
                                                                                                                [h-box :width dw :gap "10px" :children [[box :size "1" :child [title :level :level3 :label "Entry rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/entry-rationale t0)) (catch js/Error e (:ta2022.trade/entry-rationale t0)))]]]]]]
                                                                                   [v-box :gap "5px" :children [[title :label (str "Latest update (no." (count trades) ")") :level :level2]
                                                                                                                [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Internal ID"]] [box :size "3" :child [label :label (str (:ta2022.trade/uuid tl))]]]]
                                                                                                                [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Analyst"]] [box :size "3" :child [label :label (:ta2022.trade/analyst tl)]]]]
                                                                                                                [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Strategy"]] [box :size "3" :child [label :label (:ta2022.trade/strategy tl)]]]]
                                                                                                                [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Entry date"]] [box :size "3" :child [label :label (t/format-date-from-int (:ta2022.trade/entry-date tl))]]]]
                                                                                                                [h-box :width dw :gap "10px" :children [[box :size "1" :child [title :level :level3 :label "Entry rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/entry-rationale tl)) (catch js/Error e (:ta2022.trade/entry-rationale tl)))]]]]
                                                                                                                [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Exit date"]] [box :size "3" :child [label :label (t/format-date-from-int (:ta2022.trade/exit-date tl))]]]]
                                                                                                                [h-box :width dw :gap "10px" :children [[box :size "1" :child [title :level :level3 :label "Exit rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/exit-rationale tl)) (catch js/Error e (:ta2022.trade/exit-rationale tl)))]]]]]]
                                                                                   [title :label "Current triggers" :level :level2]
                                                                                   (let [latest-alerts (filter #(= (:ta2022.alert/start-date %) (apply max (map :ta2022.alert/start-date alerts))) alerts)]
                                                                                     [alert-table latest-alerts])
                                                                                           ;[p (str (keys (first alerts)))]
                                                                                   ;[:> ReactTable
                                                                                   ; {:data       (reverse alerts)
                                                                                   ;  :columns    [{:Header "UUID" :accessor :uuid :width 300 :style {:textAlign "left"} :Cell (fn [this] (if-let [x (aget this "value")] (str x) "-")) :show false}
                                                                                   ;               {:Header "Start date" :accessor :start-date :width 100 :style {:textAlign "left"}}
                                                                                   ;               {:Header "Type" :accessor :alert-type :width 100 :style {:textAlign "left"}}
                                                                                   ;               {:Header "Description" :accessor :description :width 400 :style {:textAlign "left"}}
                                                                                   ;               {:Header "Query" :accessor :description :width 300 :style {:textAlign "left"} :Cell (fn [this] (if-let [x (aget this "value")]
                                                                                   ;
                                                                                   ;                                                                                                                (str (aget this "original" "bloomberg-request")
                                                                                   ;                                                                                                                     " "
                                                                                   ;                                                                                                                     (aget this "original" "comparison")
                                                                                   ;                                                                                                                     " "
                                                                                   ;                                                                                                                     (aget this "original" "comparison-value")
                                                                                   ;                                                                                                                     ) "-"))}
                                                                                   ;
                                                                                   ;
                                                                                   ;               ]
                                                                                   ;  :filterable false :showPagination false :pageSize (count alerts) :showPageSizeOptions false :className "-striped -highlight"}]

                                                                                   ]))

  )

(defn trade-history
  [trades alerts]
  (let [dw "1200px"]
  (gt/element-box-generic "trade-history" element-box-width "Trade history" nil
                          (into [] (for [[n tl] (map-indexed list trades)]
                                     [v-box :gap "5px" :children [[title :label (str "Trade " (inc n) "/" (count trades)) :level :level2]
                                                                  [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Internal ID"]] [box :size "3" :child [label :label (str (:ta2022.trade/uuid tl))]]]]
                                                                  [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Analyst"]] [box :size "3" :child [label :label (:ta2022.trade/analyst tl)]]]]
                                                                  [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Strategy"]] [box :size "3" :child [label :label (:ta2022.trade/strategy tl)]]]]
                                                                  [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Entry date"]] [box :size "3" :child [label :label (t/format-date-from-int (:ta2022.trade/entry-date tl))]]]]
                                                                  [h-box :width dw :gap "10px" :children [[box :size "1" :child [title :level :level3 :label "Entry rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/entry-rationale tl)) (catch js/Error e (:ta2022.trade/entry-rationale tl)))]]]]
                                                                  [h-box :width dw :gap "10px" :align :center :children [[box :size "1" :child [title :level :level3 :label "Exit date"]] [box :size "3" :child [label :label (t/format-date-from-int (:ta2022.trade/exit-date tl))]]]]
                                                                  [h-box :width dw :gap "10px" :children [[box :size "1" :child [title :level :level3 :label "Exit rationale"]] [box :size "3" :child [p {:style {:white-space "pre-line"}} (try (js/decodeURIComponent (:ta2022.trade/exit-rationale tl)) (catch js/Error e (:ta2022.trade/exit-rationale tl)))]]]]
                                                                  [h-box :width dw :gap "10px" :children [[box :size "1" :child [title :level :level3 :label "Alerts"]] [box :size "3" :child (let [latest-alerts (filter #(= (:ta2022.alert/start-date %) (:ta2022.trade/entry-date tl)) alerts)] [alert-table latest-alerts])]]]
                                                                  ]])))))


(defn trade-view
  []
  (let [isin @(rf/subscribe [:ta2022/trade-isin])
        qdata (first (t/chainfilter {:ISIN isin} @(rf/subscribe [:quant-model/model-output])))]
    (when (nil? @(rf/subscribe [:ta2022/trade-history]))
      (rf/dispatch [:get-ta2022-trade-view-history isin]))
    (let [[trades alerts] @(rf/subscribe [:ta2022/trade-history])]
      [v-box :gap "10px" :padding "80px 20px" :class "subbody"
       :children [[trade-static-and-pricing isin qdata]
                  [historical-chart isin qdata]
                  [trade-description trades alerts]
                  [attachments isin]
                  [positions-and-performance-table isin]
                  [trade-history trades alerts]
                  ]

       ]))

  )