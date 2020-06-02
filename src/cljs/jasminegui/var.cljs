(ns jasminegui.var
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.charting :as charting]
    [oz.core :as oz])
  )


;
;{:daily {:beta 1.2260532296491367, :rsq 0.8849355266051778},
; :weekly {:beta 1.318406056405913, :rsq 0.9682877396734104},
; :monthly {:beta 1.3517721344251228, :rsq 0.9896161636479072}}
;
;
;
;
;
;
;
;{:daily {:sd-3y 0.05075792288462579,
;         :sd-1y 0.08181622471933907,
;         :var-3y-99pct -0.01575246019256893,
;         :var-3y-95pct -0.0027800223125257206,
;         :var-1y-99pct -0.027673840035470465,
;         :var-1y-95pct -0.007117672811373987,
;         :maxd-1y -0.1179462293850927,
;         :maxd-3y -0.14836531983027934},
; :weekly {:sd-3y 0.08738352600045841,
;          :sd-1y 0.14156626769555813,
;          :var-3y-99pct -0.08792046764255501,
;          :var-3y-95pct -0.007750608408804038,
;          :var-1y-99pct -0.08792046764255501,
;          :var-1y-95pct -0.017187007926761422,
;          :maxd-1y -0.11505966664407652,
;          :maxd-3y -0.14467278052642674},
; :monthly {:sd-3y 0.13930849870633258,
;           :sd-1y 0.21764709073569768,
;           :var-3y-99pct -0.18965485658006875,
;           :var-3y-95pct -0.02340672603291527,
;           :var-1y-99pct -0.18965485658006875,
;           :var-1y-95pct -0.0021206313396463505,
;           :maxd-1y -0.10090678426046451,
;           :maxd-3y -0.1357390240242926}}



(rf/reg-sub
  :var/table
  (fn [db]
    (let [regression (get-in db [:var/data :regression])
          risk (get-in db [:var/data :risk])]
      [{:id "Daily 1y"    :std (get-in risk [:daily :sd-1y])    :beta (get-in regression [:daily :beta-1y])   :rsq (get-in regression [:daily :rsq-1y])   :var95 (get-in risk [:daily :var-1y-95pct])   :var99 (get-in risk [:daily :var-1y-99pct])   :maxd (get-in risk [:daily :maxd-1y])}
       {:id "Daily 3y"    :std (get-in risk [:daily :sd-3y])    :beta (get-in regression [:daily :beta-3y])   :rsq (get-in regression [:daily :rsq-3y])   :var95 (get-in risk [:daily :var-3y-95pct])   :var99 (get-in risk [:daily :var-3y-99pct])   :maxd (get-in risk [:daily :maxd-3y])}
       {:id "Weekly 1y"   :std (get-in risk [:weekly :sd-1y])   :beta (get-in regression [:weekly :beta-1y])  :rsq (get-in regression [:weekly :rsq-1y])  :var95 (get-in risk [:weekly :var-1y-95pct])  :var99 (get-in risk [:weekly :var-1y-99pct])  :maxd (get-in risk [:weekly :maxd-1y])}
       {:id "Weekly 3y"   :std (get-in risk [:weekly :sd-3y])   :beta (get-in regression [:weekly :beta-3y])  :rsq (get-in regression [:weekly :rsq-3y])  :var95 (get-in risk [:weekly :var-3y-95pct])  :var99 (get-in risk [:weekly :var-3y-99pct])  :maxd (get-in risk [:weekly :maxd-3y])}
       {:id "Monthly 1y"  :std (get-in risk [:monthly :sd-1y])  :beta (get-in regression [:monthly :beta-1y]) :rsq (get-in regression [:monthly :rsq-1y]) :var95 (get-in risk [:monthly :var-1y-95pct]) :var99 (get-in risk [:monthly :var-1y-99pct]) :maxd (get-in risk [:monthly :maxd-1y])}
       {:id "Monthly 3y"  :std (get-in risk [:monthly :sd-3y])  :beta (get-in regression [:monthly :beta-3y]) :rsq (get-in regression [:monthly :rsq-3y]) :var95 (get-in risk [:monthly :var-3y-95pct]) :var99 (get-in risk [:monthly :var-3y-99pct]) :maxd (get-in risk [:monthly :maxd-3y])}])))

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


;(defn var-navigation-dispatch [item]
;  (println item)
;  (rf/dispatch [:active-var (:code item)])
;  (when (and (= item :overview) (nil? @(rf/subscribe [:var/data])))
;    ;this is the first run
;    (rf/dispatch [:get-var-data "OGEMCORD"])))

(defn nav-var-bar []
  (let [active-var @(rf/subscribe [:active-var])]
    [h-box
     :children [[v-box
                 :gap "20px"
                 :class "leftnavbar"
                 :children (into []
                                 (for [item static/var-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-var (:code item))) " active"))
                                    ;:style {:font-size "12px"}
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:active-var (:code item)])]))]
                ;(rf/dispatch [:active-var (:code item)])
                ;[line :color "#CA3E47" :class "separatorvline"]
                ]]))

(defn overview []
  [label :label "hi"])

(defn marginal []
  [label :label "hi"])


(defn portfolio-proxy-table []
  ;(println @(rf/subscribe [:var/portfolio-proxies]))
  [:> ReactTable
   {:data                @(rf/subscribe [:var/portfolio-proxies])
    :columns             [{:Header "Bond"             :accessor "bond"    :width 150}
                          {:Header "Days with data"   :accessor "days"    :width 150}
                          {:Header "Proxy"            :accessor "proxy"   :width 150}
                          {:Header "Adjust duration?" :accessor "adjdur"  :width 150}]
    :showPagination      true
    :sortable            false
    :filterable          true
    :defaultFilterMethod tables/case-insensitive-filter
    :pageSize            25
    :className           "-striped"}])

(defn var-table []
    [:> ReactTable
     {:data                @(rf/subscribe [:var/table])
      :columns             [{:Header "Period"     :accessor "id"     :width 90}
                            {:Header "Volatility" :accessor "std"    :width 90 :style {:textAlign "right"} :Cell tables/round1pc}
                            {:Header "Index Beta" :accessor "beta"   :width 90 :style {:textAlign "right"} :Cell tables/round1}
                            {:Header "Index R2"   :accessor "rsq"    :width 90 :style {:textAlign "right"} :Cell tables/round0pc}
                            {:Header "95% VaR"    :accessor "var95"  :width 90 :style {:textAlign "right"} :Cell tables/round1pc}
                            {:Header "99% VaR"    :accessor "var99"  :width 90 :style {:textAlign "right"} :Cell tables/round1pc}
                            {:Header "Max loss (*)"   :accessor "maxd"   :width 90 :style {:textAlign "right"} :Cell tables/round1pc}
                            ]
      :showPagination      false
      :sortable            false
      :filterable          false
      :pageSize            6
      :className           "-striped"}])


(def dropdown-width "150px")


(defn var-table-view []
  [v-box :class "element" :align-self :center :justify :center :gap "20px"
   :children [[title :label "Backtested VaR" :level :level1]
              [var-table]
              [p "(*) Max loss goes backwards in time hence can be smaller than VaR."]]])


(defn backtest-chart []
  (let [dates @(rf/subscribe [:var/dates])
        data @(rf/subscribe [:var/data])
        chart-period @(rf/subscribe [:var/chart-period])
        line (first (filter #(= (:id %) chart-period) static/var-charts-choice-map))
        days (case (line :frequency) :daily (* (line :period) 250) :weekly (* (line :period) 52) :monthly (* (line :period) 12))]
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label "Backtested portfolio value" :level :level1]
                 [oz/vega-lite (charting/backtest-chart
                                 (take-last days (get-in dates [(line :frequency)]))
                                 (take-last days (get-in data [:portfolio-value (line :frequency)]))
                                 550 550)]]]))

(defn histogram-chart []
  (let [dates @(rf/subscribe [:var/dates])
        data @(rf/subscribe [:var/data])
        chart-period @(rf/subscribe [:var/chart-period])
        line (first (filter #(= (:id %) chart-period) static/var-charts-choice-map))
        days (case (line :frequency) :daily (* (line :period) 250) :weekly (* (line :period) 52) :monthly (* (line :period) 12))]
    [v-box :class "element" :align-self :center :justify :center :gap "20px"
     :children [[title :label "Return histogram" :level :level1]
                [oz/vega-lite (charting/return-histogram
                                (take-last days (get-in data [:portfolio-returns (line :frequency)]))
                                550 550)]
                ]]))


(defn var-controller []
  (let [portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
        portfolio (rf/subscribe [:var/portfolio])
        chart-period (rf/subscribe [:var/chart-period])]
     [v-box :class "element" :align-self :center :justify :center :gap "20px"
      :children [[title :label "Display selection" :level :level1]
                 [h-box :gap "20px" :padding "0px 20px 0px 0px"
                  :children [[title :label "Portfolio:" :level :level3]
                             [single-dropdown :width dropdown-width :model portfolio :choices portfolio-map :on-change #(rf/dispatch [:get-portfolio-var %])]
                             [gap :size "20px"]
                             [title :label "Chart period:" :level :level3]
                             [single-dropdown :width dropdown-width :model chart-period :choices static/var-charts-choice-map :on-change #(rf/dispatch [:var/chart-period %])]]]]]))




;;;;;;;;;;;;;;;;;;;;;;;;;



(defn proxy-table []
  (let [data @(rf/subscribe [:var/proxies])
        display (sort-by :bond (into [] (for [[k v] data] (update (merge {:bond k} v) :adjdur str))))]
    [:> ReactTable
     {:data                display
      :columns             [{:Header "Bond"             :accessor "bond"    :width 150}
                            {:Header "Proxy"            :accessor "proxy"   :width 150}
                            {:Header "Adjust duration?" :accessor "adjdur"  :width 150}]
      :showPagination      true
      :sortable            false
      :filterable          true
      :defaultFilterMethod tables/case-insensitive-filter
      :pageSize            25
      :className           "-striped"}]))

(defn proxy-table-view []
   [v-box :class "element" :align-self :center :justify :center :gap "20px"
    :children [[title :label "Bond proxies" :level :level1]
               [proxy-table]]])

(defn portfolio-proxies []
   [v-box :class "element" :align-self :center :justify :center :gap "20px"
    :children [[title :label "Bond proxies" :level :level1]
               [portfolio-proxy-table]]])

(defn active-home []
  (let [active-var @(rf/subscribe [:active-var])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-var
      :overview                       [v-box :width "850px"
                                       :gap "20px"
                                       :padding "80px 20px"
                                       :class "rightelement"  :children [[h-box :align :start :children [[var-controller] ]]
                                                                                   [h-box :align :start :children [[var-table-view] ]]
                                                                                   [h-box :align :start :children [[backtest-chart]]]
                                                                         [h-box :align :start :children [[histogram-chart]]]
                                                                                  [h-box :align :start :children [[portfolio-proxies]]]]]
      :marginal                       [marginal]
      :proxies [proxy-table-view]
      [:div.output "nothing to display"])))


(defn var-view []
  [h-box :gap "10px"
   ;:style {:overflow "hidden"}
   :padding "0px"
   :children [[nav-var-bar] [active-home]]])
