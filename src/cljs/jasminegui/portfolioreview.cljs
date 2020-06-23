(ns jasminegui.portfolioreview

  (:require
    [re-frame.core :as rf]
    [reagent.core :as r]
    [goog.string :as gstring]
    [goog.string.format]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    ["react-table" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]
    [jasminegui.tools :as tools]
    [jasminegui.tables :as tables]

    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [oz.core :as oz]
    [jasminegui.charting :as charting])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )

(def standard-box-width "1600px")
(def standard-box-height "1024px")
(def standard-box-width-nb 1600)
(def standard-box-height-nb 1024)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;VEGA-LITE CHART DEFINITIONS;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def performance-colors ["#134848" "#009D80" "#FDAA94" "#74908D" "#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E"])

(defn grouped-horizontal-bars [data title]
  "The data is of the form [{:group TXT :performance txt :value 0}]"
  (let [individual-height (if (> (count (distinct (map :group data))) 10) 20 60) ; (/ (+ standard-box-height-nb 400) (* 5 (count (distinct (map :group data)))))
        text-size 16
        perf-sort (reverse (distinct (mapv :performance data)))
        colors (reverse (take (count (distinct (mapv :performance data))) performance-colors))
        scl (/ (max (apply max (map :value data)) (- (apply min (map :value data)))) 40)]
    {:$schema   "https://vega.github.io/schema/vega-lite/v4.json",
     :data      {:values data},
     :transform [{:calculate (str "datum.value >= 0 ? datum.value + " scl " : datum.value - " scl), :as "valuetxt"}],
     :facet     {:row {:field "group", :type "ordinal", :sort (mapv :group data), :title "", :header {:labelAngle 0, :labelFontSize text-size, :labelAlign "left"}}},
     :spec      {:layer
                 [{:mark   "bar",
                   :width  (- standard-box-width-nb 400),
                   :height individual-height
                   :encoding {:x     {:aggregate "sum", :field "value", :type "quantitative",
                                    :axis {:title title, :titleFontSize text-size, :titleFontWeight "normal" :labelFontSize text-size, :gridColor {:condition {:test "datum.value === 0", :value "black"}}}},
                              :y     {:field "performance", :type "nominal", :sort perf-sort, :axis {:title "", :labels false}},
                              :color {:field "performance", :type "nominal", :scale {:range colors}, :legend {:title "", :labelFontSize text-size}}}}
                  {:mark   {:type "text", :fontSize text-size},
                   :width  (- standard-box-width-nb 400),
                   :height individual-height
                   :encoding {:x     {:aggregate "sum", :field "valuetxt", :type "quantitative", :axis {:title nil}},
                              :y     {:field "performance", :type "nominal", :sort perf-sort, :axis {:title "", :labels false}},
                              :color {:field "performance", :type "nominal", :scale {:range colors}, :legend nil},
                              :text  {:field "value" :format ".0f"}}}]},
     :config    {:view {:stroke "transparent"}, :axis {:domainWidth 1}}})
    )

(defn stacked-vertical-bars [data title]
  (let [text-size 16
        groups (distinct (mapv :group data))
        colors (take (count (distinct (mapv :group data))) performance-colors)
        new-data (mapv #(assoc %1 :order (.indexOf groups (:group %1))) data)
        ]
    (println new-data colors)
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :data    {:values new-data},
     :width   (- standard-box-width-nb 800),
     :height  (- standard-box-height-nb 400),

     :layer
              [{:mark "bar",
                :scale {:padding-left 60}
                :encoding
                      {:x     {:field "performance",
                               :type "nominal",
                               :axis {:title nil :labelFontSize text-size :labelAngle 0}
                               :sort (distinct (mapv :performance data))
                               :scale {:paddingInner 0.5}},
                       :y     {:field "value", :type "quantitative", :axis {:title nil :labelFontSize text-size}},
                       :order {:field "order", :type "quantitative"}
                       :color
                              {:field "group", :type "nominal", :scale {:domain (distinct (map :group new-data))
                                                                        :range colors} :legend nil}}}
               {:mark {:type "text" :fontSize text-size :color "white"},
                :encoding
                      {:x    {:field "performance", :type "nominal", :axis {:title nil}, :sort (distinct (mapv :performance data))},
                       :y    {:field "mid", :type "quantitative"},
                       :text {:field "group", :type "nominal"}}}]}))


;;;;;;;;;;;;;;;;
;;;NAVIGATION;;;
;;;;;;;;;;;;;;;;

(def risk-breakdowns
  [["Region" "Region"]
   ["Country" "Country"]
   ["Sector" "Sector"]
   ["Rating" "RatingGroup"]
   ["Duration" "Duration Bucket"]])

(def contribution-pages
  (into []
        (for [p [["MTD" "mtd"] ["YTD" "ytd"]] k risk-breakdowns]
          {:title        (str (first p) " Contribution by " (first k))
           :nav-request  :contribution
           :data-request [:get-portfolio-review-contribution-chart-data "portfolio" (second p) (second k)]})))

(def alpha-pages
  (into []
        (for [k risk-breakdowns]
          {:title        (str "Alpha by " (first k))
           :nav-request  :alpha
           :data-request [:get-portfolio-review-alpha-chart-data "portfolio" (second k)]})))

(def top-bottom-pages
  (into []
        (for [p [["MTD" "mtd"] ["YTD" "ytd"]]
              k [["top" "top"] ["bottom" "bottom"]]]
          {:title        (str (first p) " " (first k) " contributors")
           :nav-request  :top-bottom
           :data-request [:get-single-attribution "portfolio" (second p)]})))

(def jensen-pages
  (into []
        (for [k risk-breakdowns]
          {:title        (str "Jensen by " (first k))
           :nav-request  :jensen
           :data-request [:get-portfolio-review-jensen-chart-data "portfolio" (second k)]})))

(def risk-pages
  (into []
        (for [k risk-breakdowns p ["weights" "beta contribution" "deviation from index"]]
          {:title        (str "Risk by " (first k) ": " p)
           :nav-request  :risk
           :grouping k
           :subgrouping p
           :data-request (if (= p "beta contribution") [:get-portfolio-review-marginal-beta-chart-data "portfolio" (second k)])})))


(def pages (into {} (map-indexed
                      vector
                      (concat
                        [{:title "Summary"                      :nav-request :summary         :data-request nil}]
                         contribution-pages
                         alpha-pages
                         top-bottom-pages
                         jensen-pages
                        [{:title "Three year daily backtest"   :nav-request :backtest-history  :data-request nil}]
                        risk-pages
                        ))))

(def portfolio-review-navigation
  [{:code :summary          :name "Summary"           :page-start 0}
   {:code :contribution     :name "Contribution"      :page-start (apply min (keys (filter #(= (:nav-request (second %)) :contribution) pages)))}
   {:code :alpha            :name "Alpha"             :page-start (apply min (keys (filter #(= (:nav-request (second %)) :alpha) pages)))}
   {:code :top-bottom       :name "Top contributors"  :page-start (apply min (keys (filter #(= (:nav-request (second %)) :top-bottom) pages)))}
   {:code :jensen           :name "Jensen"            :page-start (apply min (keys (filter #(= (:nav-request (second %)) :jensen) pages)))}
   {:code :backtest-history :name "Backtest"          :page-start (apply min (keys (filter #(= (:nav-request (second %)) :backtest-history) pages)))}
   {:code :risk             :name "Risk"              :page-start (apply min (keys (filter #(= (:nav-request (second %)) :risk) pages)))}])

(def maximum-page (count pages))
(def current-page (r/atom 0))

(defn go-to-page [n portfolio]
  (reset! current-page n)
  (when-let [req (get-in pages [n :data-request])]
    (rf/dispatch (replace {"portfolio" portfolio} req)))
  (rf/dispatch [:portfolio-review/active-tab (get-in pages [n :nav-request])]))

(defn next-page! []
  (when (< @current-page (dec maximum-page))
    (go-to-page (inc @current-page) @(rf/subscribe [:portfolio-review/portfolio]))))

(defn previous-page! []
  (when (> @current-page 0)
    (go-to-page (dec @current-page) @(rf/subscribe [:portfolio-review/portfolio]))))

(defn go-to-block! [x]
  (go-to-page (:page-start (first (filter #(= (:code %) x) portfolio-review-navigation)))
              @(rf/subscribe [:portfolio-review/portfolio])))


;;;;;;;;;;;;;;;;;;;;;;;
;;;PAGE CONSTRUCTION;;;
;;;;;;;;;;;;;;;;;;;;;;;

(defn heading-box []
  [h-box :gap "20px" :align :center :children [[:img {:width "37px" :height "64px" :src "assets/91-logo-green.png"}] [title :label (get-in pages [@current-page :title]) :level :level1]]])

(defn summary-text []
  (let [portfolio @(rf/subscribe [:portfolio-review/portfolio])
        data @(rf/subscribe [:portfolio-review/summary-data])
        f (fn [x] (gstring/format "%.0fbps" (* 100 x)))
        g (fn [x] (gstring/format "%.2f" x))]
    [box :class "subbody rightelement" :width standard-box-width :height standard-box-height
     :child
     [v-box :gap "40px" :class "element" :width "100%" :height "100%"
      :children
      [[heading-box]
       [title :level :level2 :label (str "MTD, " portfolio " returned " (f (get-in data [:mtd :portfolio])) " vs " (f (get-in data [:mtd :index])) " for the index, " (f (get-in data [:mtd :alpha])) " of alpha.")]
       [title :level :level2 :label (str "YTD, " portfolio " returned " (f (get-in data [:ytd :portfolio])) " vs " (f (get-in data [:ytd :index])) " for the index, " (f (get-in data [:ytd :alpha])) " of alpha.")]
       [title :level :level2 :label (str "We currently run a beta of "
                                         (g (get-in data [:beta :total]))
                                         "x with top contributors being "
                                         (get-in data [:beta :country-1])
                                         " ("
                                         (g (get-in data [:beta :value-1]))
                                         "x), "
                                         (get-in data [:beta :country-2])
                                         " ("
                                         (g (get-in data [:beta :value-2]))
                                         "x), and "
                                         (get-in data [:beta :country-3])
                                         " ("
                                         (g (get-in data [:beta :value-3]))
                                         "x).")]
       [gap :size "1"]
       [p (str "Performance data as of " @(rf/subscribe [:attribution-date]) ". Risk data as of " @(rf/subscribe [:qt-date]) ".")]]]]))

(defn contribution-or-alpha-chart [data]
    [box :class "subbody rightelement" :width standard-box-width :height standard-box-height
     :child
     [v-box :gap "40px" :class "element" :width "100%" :height "100%"
      :children
      [[heading-box] [oz/vega-lite (grouped-horizontal-bars data "Basis points")]]]])

(defn top-contributors []
  (let [display (sort-by :Total-Effect
                         (remove #(or (some #{(:Sector %)} ["Total"])
                                      (= (subs (:Security %) 0 16) "Foreign Currency")
                                      (= (subs (:Security %) 4 22) "Settlement Account"))
                                 @(rf/subscribe [:single-portfolio-attribution/clean-table])))]
    [box :class "subbody rightelement" :width standard-box-width :height standard-box-height
     :child
     [v-box :gap "10px" :class "element" :width "100%" :height "100%"
      :children
      [[heading-box]                                        ; [title :label ttl :level :level1]
       [:> ReactTable
        {:data                (take 20 (if (= (subs (get-in pages [@current-page :title]) 4 7) "top") (reverse display) display))
         :defaultFilterMethod tables/case-insensitive-filter
         :columns             [{:Header "Bond  " :columns (mapv tables/attribution-table-columns [:security :country :sector])}
                               {:Header "Effect" :columns (mapv tables/attribution-table-columns [:total-effect])}
                               {:Header "Contribution" :columns (mapv tables/attribution-table-columns [:contribution :bm-contribution])}
                               {:Header "Weight" :columns (mapv tables/attribution-table-columns [:xs-weight :weight :bm-weight])}]
         :showPagination      false
         :sortable            false
         :filterable          false
         :pageSize            20
         :className           "-striped -highlight"}]]]]))

(defn backtest-history []
  (rf/dispatch [:get-portfolio-var @(rf/subscribe [:portfolio-review/portfolio])])
  (rf/dispatch [:var/chart-period :daily-3y])
  (let [dates @(rf/subscribe [:var/dates])
        data @(rf/subscribe [:var/data])
        chart-period @(rf/subscribe [:var/chart-period])
        line (first (filter #(= (:id %) chart-period) static/var-charts-choice-map))
        days (case (line :frequency) :daily (* (line :period) 250) :weekly (* (line :period) 52) :monthly (* (line :period) 12))]
    [box :class "subbody rightelement" :width standard-box-width :height standard-box-height
     :child
     [v-box :gap "10px" :class "element" :width "100%" :height "100%"
      :children
      [[heading-box]
       [oz/vega-lite (charting/backtest-chart
                       (take-last days (get-in dates [(line :frequency)]))
                       (take-last days (get-in data [:portfolio-value (line :frequency)]))
                       (- standard-box-width-nb 200) (- standard-box-height-nb 300))]]]]))


(defn risk-betas []
  (let [
        data @(rf/subscribe [:portfolio-review/marginal-beta-chart-data])
        portfolio @(rf/subscribe [:portfolio-review/portfolio])
        idx (first (remove #(= portfolio %) (map :performance data)))
        sort-order (reverse (map :group (sort-by :value (filter #(= (:performance %) portfolio) data))))
        sorted-data (sort-by #(.indexOf sort-order (:group %)) data)
        groups (distinct (mapv :group data))
        new-data (mapv #(assoc %1 :order (.indexOf groups (:group %1))) sorted-data)
        ]
    (println sort-order sorted-data)
    [box :class "subbody rightelement" :width standard-box-width :height standard-box-height
     :child
     [v-box :gap "40px" :class "element" :width "100%" :height "100%"
      :children [[heading-box] [oz/vega-lite (stacked-vertical-bars new-data "Beta contribution")]]]]))

(defn risk-beta-over-time [])


(defn risk-weights []
  (let [g (second (get-in pages [@current-page :grouping]))
        grouping (case g
                   "Region" :jpm-region
                   "Country" :qt-risk-country-name
                   "Sector" :qt-jpm-sector
                   "RatingGroup" :rating-group
                   "Duration Bucket" :qt-final-maturity-band)
        data (filter #(= (:portfolio %) @(rf/subscribe [:portfolio-review/portfolio])) @(rf/subscribe [:positions]))
        totals (get-in @(rf/subscribe [:total-positions]) [(keyword @(rf/subscribe [:portfolio-review/portfolio]))])
        grp (group-by grouping data)
        risks [["weight" :weight] ["mod duration" :contrib-mdur] ["duration x spread" :duration-times-spread-weight] ["beta" :contrib-beta-1y-daily]]
        chart-data (into [] (for [[k g] grp r risks] {:group k :performance (first r) :value (* 100 (/ (reduce + (map (second r) g)) ((second r) totals)))}))
        clean-data (case g
                     "Region" (remove #(some #{(:group %)} ["Collateral" "Forwards" "Equities"]) chart-data)
                     "Country" (let [top-countries (map :group (take-last 8 (sort-by #(Math/abs (:value %)) (filter (fn [x] (= (:performance x) "weight")) chart-data))))]
                                 (sort-by :group (filter #(some #{(:group %)} top-countries) chart-data)))
                     "RatingGroup" (remove #(some #{(:group %)} ["08 C" "08 CC" "08 D" "09 NM"]) chart-data)
                     "Sector" (remove #(some #{(:group %)} ["Collateral" "Forwards" "Equities" "Cash" "Corporate"]) chart-data)
                     chart-data
                     )
        clean-data-sorted (sort-by :group (reverse (sort-by :performance clean-data)))
        ]
    ;    (println clean-data)
    [box :class "subbody rightelement" :width standard-box-width :height standard-box-height
     :child
     [v-box :gap "40px" :class "element" :width "100%" :height "100%"
      :children [[heading-box] [oz/vega-lite (grouped-horizontal-bars clean-data-sorted "Share of total risk")]]]]))

(defn risk-deltas []
  (let [g (second (get-in pages [@current-page :grouping]))
        grouping (case g
                   "Region" :jpm-region
                   "Country" :qt-risk-country-name
                   "Sector" :qt-jpm-sector
                   "RatingGroup" :rating-group
                   "Duration Bucket" :qt-final-maturity-band)
        data (filter #(= (:portfolio %) @(rf/subscribe [:portfolio-review/portfolio])) @(rf/subscribe [:positions]))
        totals (get-in @(rf/subscribe [:total-positions]) [(keyword @(rf/subscribe [:portfolio-review/portfolio]))])
        grp (group-by grouping data)
        risks [["weight" :weight-delta] ["mod duration" :mdur-delta] ]
        chart-data (into [] (for [[k g] grp r risks] {:group k :performance (first r) :value (* (if (= (first r) "weight") 100. 1.) (reduce + (map (second r) g)))}))
        clean-data (case g
                     "Region" (remove #(some #{(:group %)} ["Collateral" "Forwards" "Equities"]) chart-data)
                     "Country" (let [top-countries (map :group (take-last 8 (sort-by #(Math/abs (:value %)) (filter (fn [x] (= (:performance x) "weight")) chart-data))))]
                                 (sort-by :group (filter #(some #{(:group %)} top-countries) chart-data)))
                     "RatingGroup" (remove #(some #{(:group %)} ["08 C" "08 CC" "08 D" "09 NM"]) chart-data)
                     "Sector" (remove #(some #{(:group %)} ["Collateral" "Forwards" "Equities" "Cash" "Corporate"]) chart-data)
                     chart-data
                     )
        clean-data-sorted (sort-by :group (reverse (sort-by :performance clean-data)))
        ]
    ;(println clean-data)
    [box :class "subbody rightelement" :width standard-box-width :height standard-box-height
     :child
     [v-box :gap "40px" :class "element" :width "100%" :height "100%"
      :children [[heading-box] [oz/vega-lite (grouped-horizontal-bars clean-data-sorted "Share of total risk")]]]]))


(defn risk []
  (cond
    (clojure.string/includes? (get-in pages [@current-page :title]) "weights")    [risk-weights]
    (clojure.string/includes? (get-in pages [@current-page :title]) "beta")       [risk-betas]
    (clojure.string/includes? (get-in pages [@current-page :title]) "deviation")  [risk-deltas]
    :else [p "no data"]))


(defn active-home []
  ;(println pages)
  (let [active-tab @(rf/subscribe [:portfolio-review/active-tab])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-tab
      :summary                       [summary-text]
      :contribution                  [contribution-or-alpha-chart @(rf/subscribe [:portfolio-review/contribution-chart-data])]
      :alpha                         [contribution-or-alpha-chart (sort-by :group (reverse (sort-by :performance @(rf/subscribe [:portfolio-review/alpha-chart-data]))))]
      :top-bottom                    [top-contributors]
      :jensen                        [contribution-or-alpha-chart @(rf/subscribe [:portfolio-review/jensen-chart-data])]
      :backtest-history                          [backtest-history]
      :risk                          [risk]
      [:div.output "nothing to display"])))


(defn nav []
  (let [active-tab @(rf/subscribe [:portfolio-review/active-tab])]
    [h-box
     :children [
                [v-box
                 :gap "20px"
                 :class "leftnavbar"
                 :children (into [
                                  [h-box :children [[box    :child [button :style {:width "90px"} :class "btn btn-primary btn-block" :label "Previous" :on-click previous-page!]]
                                                    [box :size "1" :align :center  :child [label :label (str (inc @current-page) "/" maximum-page) :style {:width "70px" :color "white" :text-align "center"}]]
                                                    [box    :child [button :style {:width "90px"} :class "btn btn-primary btn-block" :label "Next"  :on-click next-page!]]]]
                                  [line :color "#CA3E47" :class "separatornavline"]

                                  ]
                                 (for [item portfolio-review-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-tab (:code item))) " active"))
                                    :label (:name item)
                                    :on-click #(go-to-block! (:code item)) ;#(rf/dispatch [:portfolio-review/active-tab (:code item)])

                                    ]))]
                ]]))

(defn view []
  [h-box :gap "10px"
   ;:style {:overflow "hidden"}
   :padding "0px"
   :children [[nav] [active-home]]])
