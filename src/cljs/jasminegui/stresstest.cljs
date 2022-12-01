(ns jasminegui.stresstest

  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink alert-box md-circle-icon-button selection-list
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [reagent.core :as r]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.charting :as charting]
    [jasminegui.guitools :as gt]
    [jasminegui.tools :as t]
    [oz.core :as oz]))


(rf/reg-sub
  :var/table
  (fn [db]
    (let [regression (get-in db [:var/data :regression])
          risk (get-in db [:var/data :risk])]
      (into []
            (for [d [:daily :weekly :monthly] y ["1y" "3y"]]
              {:id    (str (clojure.string/capitalize (name d)) " " y)
               :std   (get-in risk        [d (keyword (str "sd-" y))])
               :beta  (get-in regression  [d (keyword (str "beta-" y))])
               :beta-up (get-in regression  [d (keyword (str "beta-" y "-up"))])
               :beta-dw (get-in regression  [d (keyword (str "beta-" y "-dw"))])
               :rsq   (get-in regression  [d (keyword (str "rsq-" y))])
               :var95 (get-in risk        [d (keyword (str "var-" y "-95pct"))])
               :var99 (get-in risk        [d (keyword (str "var-" y "-99pct"))])
               :maxd  (get-in risk        [d (keyword (str "maxd-" y))])})))))


(rf/reg-sub
  :var/portfolio-proxies
  (fn [db]
    (let [all-proxies (get-in db [:var/proxies])
          days-with-data (get-in db [:var/data :days-with-data])
          total-days (count (get-in db [:var/dates :daily]))]
      (sort-by :days (into [] (for [[kb d] days-with-data]
                                (update
                                  (merge {:bond (name kb) :days (- total-days d)} (get-in all-proxies [kb]))
                                  :adjdur str) ))))))

(defn nav-var-bar []
  (let [active-var @(rf/subscribe [:navigation/active-var])]
    [h-box
     :children [[v-box
                 :gap "20px" :class "leftnavbar"
                 :children (into (if false                  ;@(rf/subscribe [:time-machine/enabled])
                                   []                       ;[alert-box :alert-type :danger :heading "Time machine is ON" :body (str "Date " (subs (str @(rf/subscribe [:time-machine/date])) 0 8))]
                                   [])
                                 (for [item static/var-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-var (:code item))) " active"))
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:navigation/active-var (:code item)])]))]]]))

(defn portfolio-proxy-table []
  [:> ReactTable
   {:data                @(rf/subscribe [:var/portfolio-proxies])
    :columns             [{:Header "Bond"             :accessor "bond"    :width 150}
                          {:Header "Days with data"   :accessor "days"    :width 150}
                          {:Header "Proxy"            :accessor "proxy"   :width 150}
                          {:Header "Adjust duration?" :accessor "adjdur"  :width 150}]
    :showPagination true :sortable false :filterable true :defaultFilterMethod tables/text-filter-OR :pageSize 25 :className "-striped"}])

(defn var-table []
  [:> ReactTable
   {:data                @(rf/subscribe [:var/table])
    :columns             [{:Header "Period"       :accessor "id"     :width 90}
                          {:Header "Volatility"   :accessor "std"    :width 80 :style {:textAlign "right"} :Cell tables/round1pc}
                          {:Header (gstring/unescapeEntities "Index &beta;")   :accessor "beta"   :width 80 :style {:textAlign "right"} :Cell tables/round2}
                          {:Header (gstring/unescapeEntities "Up days &beta;")   :accessor "beta-up"   :width 80 :style {:textAlign "right"} :Cell tables/round2}
                          {:Header (gstring/unescapeEntities "Down days &beta;")   :accessor "beta-dw"   :width 80 :style {:textAlign "right"} :Cell tables/round2}
                          {:Header "Index R2"     :accessor "rsq"    :width 80 :style {:textAlign "right"} :Cell tables/round0pc}
                          {:Header "95% VaR"      :accessor "var95"  :width 80 :style {:textAlign "right"} :Cell tables/round1pc}
                          {:Header "99% VaR"      :accessor "var99"  :width 80 :style {:textAlign "right"} :Cell tables/round1pc}
                          {:Header "Max loss (*)" :accessor "maxd"   :width 80 :style {:textAlign "right"} :Cell tables/round1pc}]
    :showPagination false :sortable false :filterable false :pageSize 6 :className "-striped"}])

(def standard-box-width "850px")
(def dropdown-width "150px")

(defn var-table-view []
  (let [download-columns [:id :std :beta :beta-up :beta-dw :rsq :var95 :var99	:maxd]]
    ;(println @(rf/subscribe [:var/table]))
    [:div {:id "var-table"}
     [v-box :class "element" :align-self :center :justify :center :gap "20px" :width standard-box-width
      :children (concat [[h-box :gap "10px" :align :center
                          :children [[title :label "Backtested VaR" :level :level1]
                                     [gap :size "1"]
                                     [md-circle-icon-button :md-icon-name "zmdi-camera" :tooltip "Open image in new tab" :tooltip-position :above-center :on-click (t/open-image-in-new-tab (if-let [tid (:target-id {:download-table @(rf/subscribe [:var/table])})] tid "var-table"))]
                                     [md-circle-icon-button :md-icon-name "zmdi-image" :tooltip "Save table as image" :tooltip-position :above-center :on-click (t/save-image (if-let [tid (:target-id {:download-table @(rf/subscribe [:var/table])})] tid "var-table"))]
                                     [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download table" :tooltip-position :above-center :on-click (if-let [ocl (:on-click-action {:download-table @(rf/subscribe [:var/table])})] ocl #(t/csv-link (:download-table {:download-table @(rf/subscribe [:var/table])}) (str "var-table" "-" (t/gdate->yyyyMMdd (cljs-time.core/today))) download-columns))]]]]
                        [[var-table] [p "(*) Max loss goes backwards in time hence can be smaller than VaR."]])]]))

(defn backtest-chart []
  (let [dates @(rf/subscribe [:var/dates])
        data @(rf/subscribe [:var/data])
        chart-period @(rf/subscribe [:var/chart-period])
        line (first (filter #(= (:id %) chart-period) static/var-charts-choice-map))
        days (case (line :frequency) :daily (* (line :period) 250) :weekly (* (line :period) 52) :monthly (* (line :period) 12))]
    [v-box
     :class "element" :width standard-box-width :gap "20px"
     :children [[title :label "Backtested portfolio value" :level :level1]
                [oz/vega-lite (charting/backtest-chart
                                (take-last days (get-in dates [(line :frequency)]))
                                (take-last days (get-in data [:portfolio-value (line :frequency)]))
                                nil
                                (- (cljs.reader/read-string (subs standard-box-width 0 3)) 150) 550)]]]))

(defn histogram-chart []
  (let [data @(rf/subscribe [:var/data])
        chart-period @(rf/subscribe [:var/chart-period])
        line (first (filter #(= (:id %) chart-period) static/var-charts-choice-map))
        days (case (line :frequency) :daily (* (line :period) 250) :weekly (* (line :period) 52) :monthly (* (line :period) 12))]
    [v-box
     :class "element" :width standard-box-width :gap "20px"
     :children [[title :label "Return histogram" :level :level1]
                [oz/vega-lite (charting/return-histogram
                                (take-last days (get-in data [:portfolio-returns (line :frequency)]))
                                (- (cljs.reader/read-string (subs standard-box-width 0 3)) 150) 550)]]]))

(defn regression-chart []
  (let [data @(rf/subscribe [:var/data])
        chart-period @(rf/subscribe [:var/chart-period])
        line (first (filter #(= (:id %) chart-period) static/var-charts-choice-map))
        days (case (line :frequency) :daily (* (line :period) 250) :weekly (* (line :period) 52) :monthly (* (line :period) 12))]
    [v-box
     :class "element" :width standard-box-width :gap "20px"
     :children [[title :label "Regression" :level :level1]
                [oz/vega-lite (charting/regression-output
                                (take-last days (get-in data [:portfolio-returns (line :frequency)]))
                                (take-last days (get-in data [:benchmark-returns (line :frequency)]))
                                (get-in data [:regression (line :frequency) (if (= 3 (line :period)) :alpha-3y :alpha-1y)])
                                (get-in data [:regression (line :frequency) (if (= 3 (line :period)) :beta-3y :beta-1y)])
                                (- (cljs.reader/read-string (subs standard-box-width 0 3)) 150) 550)]]]))

(defn var-controller []
  (let [chart-period (rf/subscribe [:var/chart-period])]
    [h-box
     :class "element" :width standard-box-width :gap "20px"
     :children [[title :label "Display selection" :level :level1]
                [gap :size "1"]
                [v-box :gap "5px" :children [[title :label "Portfolio:" :level :level3](gt/portfolio-dropdown-selector :var/portfolio :get-portfolio-var)]]
                [v-box :gap "5px" :children [[title :label "Chart period:" :level :level3][single-dropdown :width dropdown-width :model chart-period :choices static/var-charts-choice-map :on-change #(rf/dispatch [:var/chart-period %])]]]
                ]]))

(defn view
  "Quite ugly micro-optimisation to save on mounting time"
  []
  (when (zero? (count @(rf/subscribe [:stresstest/scenarios])))
    (rf/dispatch [:get-stress-test-scenarios])
    (rf/dispatch [:get-stress-test-results]))
  (let [selected-portfolios (rf/subscribe [:stresstest/selected-portfolios])
        portfolios @(rf/subscribe [:portfolios])
        toggle-portfolios (fn [seqp] (let [setseqp (set seqp)] (if (clojure.set/subset? setseqp @selected-portfolios) (clojure.set/difference @selected-portfolios setseqp) (clojure.set/union @selected-portfolios setseqp))))
        rules-handler  (fn [x] (r/as-element [v-box :children (mapv (fn [v] [label :label v]) (js->clj (aget x "original" "rules")))])) ;[v-box :children [[label :label "a"] [label :label "b"]]]
        ]

    [v-box :class "subbody rightelement" :gap "20px"
     :children [
                [v-box :class "element" :gap "10px"
                 :children [[title :label "Scenario definitions" :level :level1]
                            [:> ReactTable
                             {:data           @(rf/subscribe [:stresstest/scenarios])
                              :columns        [{:Header "Scenario" :accessor "nickname" :width 100 :style {:whiteSpace "unset"}}
                                               {:Header "Name" :accessor "name" :width 100 :style {:whiteSpace "unset"}}
                                               {:Header "Description" :accessor "description" :width 300 :style {:whiteSpace "unset"}}
                                               {:Header "Rules" :accessor "rules" :width 900 :style {:textAlign "right"} :Cell rules-handler}]
                              :showPagination false :pageSize (count @(rf/subscribe [:stresstest/scenarios])) :className "-striped -highlight"}]]]
                [v-box :class "element" :gap "10px"
                 :children [[title :label "NAV impact" :level :level1]
                            [h-box :class "element" :gap "10px "
                             :children [[title :label "Portfolios:" :level :level3]
                                        [gap :size "10px"]
                                        [v-box :gap "2px" :children [[button :style {:width "75px"} :label "All" :on-click #(rf/dispatch [:stresstest/selected-portfolios (set portfolios)])]
                                                                     [button :style {:width "75px"} :label "None" :on-click #(rf/dispatch [:stresstest/selected-portfolios #{}])]]]
                                        (for [line (t/chainfilter {:id #(not (some #{%} [:dummies]))} static/portfolio-alignment-groups)]
                                          (let [possible-portfolios (:portfolios (first (filter (fn [x] (= (:id x) (:id line))) (t/chainfilter {:id #(not (some #{%} [:dummies]))} static/portfolio-alignment-groups))))]
                                            [v-box :gap "2px" :children
                                             [[button :style {:width "125px"} :label (:label line) :on-click #(rf/dispatch [:stresstest/selected-portfolios (toggle-portfolios possible-portfolios)])]
                                              [selection-list :width "125px" :model selected-portfolios :choices (into [] (for [p possible-portfolios] {:id p :label p})) :on-change #(rf/dispatch [:stresstest/selected-portfolios %])]]]))]
                             ]
                            (let [cols (into [{:Header "Scenario" :accessor "nickname" :width 120 :style {:textAlign "left"}}] (for [p @(rf/subscribe [:portfolios]) :when (some #{p} @(rf/subscribe [:stresstest/selected-portfolios]))] ;@(rf/subscribe [:portfolios])
                                                  {:Header p :accessor p :width 80 :style {:textAlign "right"}  :Cell tables/round2pc}))]
                              [:> ReactTable
                               {:data                @(rf/subscribe [:stresstest/results])
                                :columns             cols
                                :showPagination      false :sortable false :false false :pageSize (count @(rf/subscribe [:stresstest/scenarios]))
                                :showPageSizeOptions false :className "-striped -highlight"}])]]]]))



