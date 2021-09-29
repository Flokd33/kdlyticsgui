(ns jasminegui.var
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink alert-box
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
                 :children (into (if @(rf/subscribe [:time-machine/enabled])
                                   [[alert-box :alert-type :danger :heading "Time machine is ON" :body (str "Date " (subs (str @(rf/subscribe [:time-machine/date])) 0 8))]]
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
  (gt/element-box "var-table" standard-box-width "Backtested VaR" @(rf/subscribe [:var/table]) [[var-table] [p "(*) Max loss goes backwards in time hence can be smaller than VaR."]]))

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
  (let [portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
        portfolio (rf/subscribe [:var/portfolio])
        chart-period (rf/subscribe [:var/chart-period])]
     [h-box
      :class "element" :width standard-box-width :gap "20px" :justify :between
      :children [[title :label "Display selection" :level :level1]
                 [v-box :gap "5px" :children [[title :label "Portfolio:" :level :level3][single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:get-portfolio-var %])]]]
                 [v-box :gap "5px" :children [[title :label "Chart period:" :level :level3][single-dropdown :width dropdown-width :model chart-period :choices static/var-charts-choice-map :on-change #(rf/dispatch [:var/chart-period %])]]]
                 ]]))

(defn proxy-table []
  (let [data @(rf/subscribe [:var/proxies])
        display (sort-by :bond (into [] (for [[k v] data] (update (merge {:bond k} v) :adjdur str))))]
    [:> ReactTable
     {:data                display
      :columns             [{:Header "Bond"             :accessor "bond"    :width 150}
                            {:Header "Proxy"            :accessor "proxy"   :width 150}
                            {:Header "Adjust duration?" :accessor "adjdur"  :width 150}]
      :showPagination true :sortable false :filterable true :defaultFilterMethod tables/text-filter-OR :pageSize 25 :className "-striped"}]))

(defn proxy-table-view []
  [box :class "subbody rightelement"
   :child [v-box :class "element" :gap "20px" :children [[title :label "Bond proxies" :level :level1] [proxy-table]]]])

(defn portfolio-proxies []
   [v-box :class "element" :width "100%" :gap "20px"
    :children [[title :label "Bond proxies" :level :level1] [portfolio-proxy-table]]])

(defn main-var-view
  "Quite ugly micro-optimisation to save on mounting time"
  []
  (when (nil? @(rf/subscribe [:var/proxies]))
    (doseq [k [:get-var-dates :get-var-proxies [:get-portfolio-var "OGEMCORD"]]]
      (rf/dispatch (if (vector? k) k [k]))))
  [v-box :width standard-box-width
   :gap "20px"
   :padding "80px 20px"
   :class "rightelement"  :children [[h-box :align :start :children [[var-controller]]]
                                     [h-box :align :start :children [[var-table-view] ]]
                                     [h-box :align :start :children [[backtest-chart]]]
                                     [h-box :align :start :children [[histogram-chart]]]
                                     [h-box :align :start :children [[regression-chart]]]]])

(defn main-proxy-view []
  [v-box :width standard-box-width :gap "20px" :padding "80px 20px" :class "rightelement"
   :children [[h-box :align :start :children [[portfolio-proxies]]]]])

(defn active-home []
  (let [active-var @(rf/subscribe [:navigation/active-var])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-var
      :overview                       [v-box :width standard-box-width
                                       :gap "20px" :padding "80px 20px"
                                       :class "rightelement"  :children [[h-box :align :start :children [[var-controller]]]
                                                                         [h-box :align :start :children [[var-table-view] ]]
                                                                         [h-box :align :start :children [[backtest-chart]]]
                                                                         [h-box :align :start :children [[histogram-chart]]]
                                                                         [h-box :align :start :children [[regression-chart]]]]]
      :proxies [v-box :width standard-box-width :gap "20px" :padding "80px 20px" :class "rightelement"
                :children [[h-box :align :start :children [[portfolio-proxies]]]]]
      [:div.output "nothing to display"])))


(defn var-view
  []
  [h-box :gap "10px" :padding "0px" :children [[nav-var-bar] [active-home]]])
