(ns jasminegui.portfolioreview

  (:require
    [re-frame.core :as rf]
    [reagent.core :as r]
    [goog.string :as gstring]
    [goog.string.format]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button md-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    ["react-table-v6" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]
    [jasminegui.tools :as tools]
    [jasminegui.tables :as tables]
    [cljs-time.core :as cljs-time]

    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [oz.core :as oz]
    [jasminegui.charting :as charting]
    [jasminegui.riskviews :as riskviews]
    [jasminegui.tradehistory :as th]
    [jasminegui.tools :as t]
    )
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )

;;;;;;;;;;;;
;; EVENTS ;;
;;;;;;;;;;;;

(rf/reg-event-fx
  :change-portfolio
  (fn [{:keys [db]} [_ portfolio]]
    {:db (assoc db :portfolio-review/portfolio portfolio
                   :portfolio-review/active-tab :summary)
    :http-get-dispatch {:url          (str static/server-address "portfolio-review?query-type=summary&portfolio=" portfolio)
                         :dispatch-key [:portfolio-review/summary-data]}})
  )

(rf/reg-event-fx
  :get-portfolio-review-summary-data
  (fn [{:keys [db]} [_ portfolio]]
    {:http-get-dispatch {:url          (str static/server-address "portfolio-review?query-type=summary&portfolio=" portfolio)
                         :dispatch-key [:portfolio-review/summary-data]}}))

(rf/reg-event-fx
  :get-portfolio-review-contribution-chart-data
  (fn [{:keys [db]} [_ portfolio period grouping]]
    {:http-get-dispatch {:url          (str static/server-address "portfolio-review?query-type=contribution&portfolio=" portfolio "&period=" period "&grouping=" grouping)
                         :dispatch-key [:portfolio-review/contribution-chart-data]}}))

(rf/reg-event-fx
  :get-portfolio-review-alpha-chart-data
  (fn [{:keys [db]} [_ portfolio grouping]]
    {:http-get-dispatch {:url          (str static/server-address "portfolio-review?query-type=alpha&portfolio=" portfolio "&grouping=" grouping)
                         :dispatch-key [:portfolio-review/alpha-chart-data]}}))

(rf/reg-event-fx
  :get-portfolio-review-jensen-chart-data
  (fn [{:keys [db]} [_ portfolio grouping]]
    {:http-get-dispatch {:url          (str static/server-address "portfolio-review?query-type=jensen&portfolio=" portfolio "&grouping=" grouping)
                         :dispatch-key [:portfolio-review/jensen-chart-data]
                         }}))

(rf/reg-event-fx
  :get-portfolio-review-marginal-beta-chart-data
  (fn [{:keys [db]} [_ portfolio grouping]]
    {:http-get-dispatch {:url          (str static/server-address "portfolio-review?query-type=marginal-beta&portfolio=" portfolio "&grouping=" grouping)
                         :dispatch-key [:portfolio-review/marginal-beta-chart-data]}}))

(rf/reg-event-fx
  :get-portfolio-review-historical-beta-chart-data
  (fn [{:keys [db]} [_ portfolio countries]]
    {:http-get-dispatch {:url          (str static/server-address "portfolio-review?query-type=historical-beta&portfolio=" portfolio "&countries=" countries)
                         :dispatch-key [:portfolio-review/historical-beta-chart-data]}}))

(rf/reg-event-fx
  :get-portfolio-review-historical-performance-chart-data
  (fn [{:keys [db]} [_ portfolio]]
    {:http-get-dispatch {:url          (str static/server-address "attribution?query-type=history&portfolio=" portfolio)
                         :dispatch-key [:portfolio-review/historical-performance-chart-data]}}))

(def standard-box-width "1600px")
(def standard-box-height "1024px")
(def standard-box-width-nb 1600)
(def standard-box-height-nb 1024)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;VEGA-LITE CHART DEFINITIONS;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def performance-colors ["#134848" "#009D80" "#FDAA94" "#74908D" "#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E"])
(def chart-text-size 16)

(defn grouped-horizontal-bars [data title]
  "The data is of the form [{:group TXT :performance txt :value 0}]"
  (let [individual-height (if (> (count (distinct (map :group data))) 10) 20 60) ; (/ (+ standard-box-height-nb 400) (* 5 (count (distinct (map :group data)))))
        perf-sort (reverse (distinct (mapv :performance data)))
        colors (reverse (take (count (distinct (mapv :performance data))) performance-colors))
        scl (/ (max (apply max (map :value data)) (- (apply min (map :value data)))) 40)]
    {:$schema   "https://vega.github.io/schema/vega-lite/v4.json",
     :data      {:values data},
     :transform [{:calculate (str "datum.value >= 0 ? datum.value + " scl " : datum.value - " scl), :as "valuetxt"}],
     :facet     {:row {:field "group", :type "ordinal", :sort (mapv :group data), :title "", :header {:labelAngle 0, :labelFontSize chart-text-size, :labelAlign "left"}}},
     :spec      {:layer
                 [{:mark   "bar",
                   :width  (- standard-box-width-nb 400),
                   :height individual-height
                   :encoding {:x     {:aggregate "sum", :field "value", :type "quantitative",
                                      :axis {:title title, :titleFontSize chart-text-size, :titleFontWeight "normal" :labelFontSize chart-text-size, :gridColor {:condition {:test "datum.value === 0", :value "black"}}}},
                              :y     {:field "performance", :type "nominal", :sort perf-sort, :axis {:title "", :labels false}},
                              :color {:field "performance", :type "nominal", :scale {:range colors}, :legend {:title "", :labelFontSize chart-text-size}}}}
                  {:mark   {:type "text", :fontSize chart-text-size},
                   :width  (- standard-box-width-nb 400),
                   :height individual-height
                   :encoding {:x     {:aggregate "sum", :field "valuetxt", :type "quantitative", :axis {:title nil}},
                              :y     {:field "performance", :type "nominal", :sort perf-sort, :axis {:title "", :labels false}},
                              :color {:field "performance", :type "nominal", :scale {:range colors}, :legend nil},
                              :text  {:field "value" :format ".0f"}}}]},
     :config    {:view {:stroke "transparent"}, :axis {:domainWidth 1}}}))

(defn simple-horizontal-bars [data title fmt dc nbcols textdx scale]
  "The data is of the form [{:group TXT :value 0}]"
  (let [individual-height (if (> (count (distinct (map :group data))) 10) 20 60) ; (/ (+ standard-box-height-nb 400) (* 5 (count (distinct (map :group data)))))
        scl (* dc (/ (max (apply max (map :value data)) (- (apply min (map :value data)))) 40))]
    {:$schema   "https://vega.github.io/schema/vega-lite/v4.json",
     :data      {:values data},
     :transform [{:calculate (str "datum.value >= 0 ? datum.value + " scl " : datum.value - " scl), :as "valuetxt"}],
     :facet     {:row {:field "group", :type "ordinal", :sort (mapv :group data), :title "", :header {:labelAngle 0, :labelFontSize chart-text-size, :labelAlign "left"}}},
     :spec      {:layer
                 [{:mark     "bar",
                   :width    (- (/ standard-box-width-nb nbcols) 250),
                   :height   individual-height
                   :encoding {:x     (merge (if scale scale)
                                            {:aggregate "sum", :field "value", :type "quantitative",
                                             :axis      {:title title, :titleFontSize chart-text-size, :titleFontWeight "normal" :labelFontSize chart-text-size, :gridColor {:value "white" :condition {:test "datum.value === 0", :value "black"}}}}),
                              :y     {:field "performance", :type "nominal", :axis {:title "", :labels false}},
                              :color {:field "performance", :type "nominal", :scale {:range [(first performance-colors)]}, :legend nil}}}
                  {:mark     (merge {:type "text", :fontSize chart-text-size} (if textdx {:dx textdx})),
                   :width    (- (/ standard-box-width-nb nbcols) 250),
                   :height   individual-height
                   :encoding {:x     {:aggregate "sum", :field "valuetxt", :type "quantitative", :axis {:title ""}},
                              :y     {:field "performance", :type "nominal", :axis {:title "", :labels false}},
                              :color {:field "performance", :type "nominal", :scale {:range [(first performance-colors)]}, :legend nil},
                              :text  {:field "value" :format fmt}}}]}
     :config    {:view {:stroke "transparent"}, :axis {:domainWidth 1}}})
    )

(defn stacked-vertical-bars [data title]
  (let [groups (distinct (mapv :group data))
        colors (take (count (distinct (mapv :group data))) performance-colors)
        new-data (mapv #(assoc %1 :order (.indexOf groups (:group %1))) data)]
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :data    {:values new-data},
     :width   (- standard-box-width-nb 800),
     :height  (- standard-box-height-nb 400),
     :layer
              [{:mark "bar",
                :scale {:padding-left 60}
                :encoding
                      {:x     {:field "performance", :type "nominal",
                               :axis {:title nil :labelFontSize chart-text-size :labelAngle 0}
                               :sort (distinct (mapv :performance data))
                               :scale {:paddingInner 0.5}},
                       :y     {:field "value", :type "quantitative", :axis {:title nil :labelFontSize chart-text-size}},
                       :order {:field "order", :type "quantitative"}
                       :color
                              {:field "group", :type "nominal", :scale {:domain (distinct (map :group new-data))
                                                                        :range colors} :legend nil}}}
               {:mark {:type "text" :fontSize chart-text-size :color "white"},
                :encoding
                      {:x    {:field "performance", :type "nominal", :axis {:title nil}, :sort (distinct (mapv :performance data))},
                       :y    {:field "mid", :type "quantitative"},
                       :text {:field "group", :type "nominal"}}}]}))

(defn area-chart [data]
  (let [nb-countries (count (distinct (map :country data)))
        ordered-countries (reverse (conj (remove #(= % "Rest") (map :country (sort-by :value (take-last nb-countries data)))) "Rest"))
        colors (take (count (distinct (mapv :country data))) performance-colors)
        new-data (mapv #(assoc %1 :order (.indexOf ordered-countries (:country %1))) data)]
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :data    {:values new-data :format {:parse {:date "date:'%Y%m%d'"}}},
     :width   (- standard-box-width-nb 400),
     :height  (- standard-box-height-nb 400),
     :layer
              [{:mark  "area",
                :scale {:padding-left 60}
                :encoding
                       {:x     {:field "date", :type  "temporal",
                                :axis  {:title nil :labelFontSize chart-text-size :labelAngle 0}},
                        :y     {:field "value", :type "quantitative", :axis {:title nil :labelFontSize chart-text-size}},
                        :order {:field "order", :type "quantitative"}
                        :color {:field  "country", :type "nominal", :scale {:domain (reverse ordered-countries) :range (reverse colors)}
                                :legend {:title nil :labelFontSize chart-text-size}}}}]}))

(defn grouped-vertical-bars [data title]
  "The data is of the form [{:date dt :group TXT :value 0}]"
  (let [individual-weights (if (> (count (distinct (map :group data))) 10) 20 35) ; (/ (+ standard-box-height-nb 400) (* 5 (count (distinct (map :group data)))))
        colors (take (count (distinct (mapv :group data))) performance-colors)
        scl (/ (max (apply max (map :value data)) (- (apply min (map :value data)))) 40)]
    ;(println data)
    {:$schema   "https://vega.github.io/schema/vega-lite/v4.json",
     :data      {:values data :format {:parse {:date "date:'%Y%m%d'"}}},
     :title     nil
     :transform [{:calculate (str "datum.value >= 0 ? datum.value + " scl " : datum.value - " scl), :as "valuetxt"}],
     :facet     {:column {:field "date", :type "temporal", :sort (mapv :group data), :title "", :header {:labelAngle 0, :labelFontSize chart-text-size, :labelAlign "center" :format "%b"}}},
     :spec      {:layer
                 [{:mark     "bar",
                   :width    individual-weights,
                   :height   (- standard-box-height-nb 400)
                   :encoding {:x     {:field "group", :type "nominal",
                                      :sort  (distinct (mapv :group data))
                                      :axis  {:title nil, :titleFontSize chart-text-size, :titleFontWeight "normal" :labels false :labelFontSize chart-text-size, :gridColor {:condition {:test "datum.value === 0", :value "black"}}}},
                              :y     {:field "value", :type "quantitative", :axis {:title "Contribution (%)", :titleFontSize chart-text-size :labels true :labelFontSize chart-text-size}},
                              :color {:field "group", :type "nominal", :scale {:range (reverse colors)}, :legend {:title "", :labelFontSize chart-text-size}}}}
                  ;{:mark   {:type "text", :fontSize text-size},
                  ; :width  individual-height,
                  ; :height (- standard-box-height-nb 400)
                  ; :encoding {:x     {:aggregate "sum", :field "group", :type "quantitative", :axis {:title nil}},
                  ;            :y     {:field "value", :type "quantitative", :sort perf-sort, :axis {:title "", :labels false}},
                  ;            :color {:field "group", :type "nominal", :scale {:range colors}, :legend nil},
                  ;            :text  {:field "value" :format ".0f"}}}

                  ]},
     :config    {:view {:stroke "transparent"}, :axis {:domainWidth 1}}}))

(defn vertical-waterfall [data title]
  "The data is of the form [{:date dt :group TXT :value 0}]"
  (let [individual-height (if (> (count (distinct (map :group data))) 10) 20 60) ; (/ (+ standard-box-height-nb 400) (* 5 (count (distinct (map :group data)))))
        new-data (map (fn [line] (update line :value #(Math/round (* 100. %))))
                      (concat ;[{:date "Begin", :value 0}]
                        data [{:date "YTD", :value 0}]))]
    {:$schema
             "https://vega.github.io/schema/vega-lite/v4.json",
     :data {:values new-data},
     :width 600,
     :height (- standard-box-height-nb 400),
     :title nil
     :transform                                             ;
             [{:window [{:op "sum", :field "value", :as "sum"}]}
              {:window [{:op "lead", :field "date", :as "lead"}]}
              {:calculate "datum.lead === null ? datum.date : datum.lead", :as "lead"}
              {:calculate "datum.date === 'YTD' ? 0 : datum.sum - datum.value", :as "previous_sum"}
              {:calculate "datum.date === 'YTD' ? datum.sum : datum.value", :as "value"}
              {:calculate "(datum.date !== 'Begin' && datum.date !== 'YTD' && datum.value > 0 ? '+' : '') + datum.value", :as "text_amount"}
              {:calculate "(datum.sum + datum.previous_sum) / 2", :as "center"}
              {:calculate "datum.sum < datum.previous_sum ? datum.sum : ''", :as "sum_dec"}
              {:calculate "datum.sum > datum.previous_sum ? datum.sum : ''", :as "sum_inc"}],
     :encoding
             {:x
              {:field "date", :type "ordinal", :sort nil, :axis {:labelAngle 0, :title nil :labelFontSize chart-text-size}}},
     :layer
             [{:mark {:type "bar", :size 45},
               :encoding
                     {:y {:field "previous_sum", :type "quantitative", :title "Effect (bps)"
                           :axis {:labelFontSize chart-text-size :titleFontSize chart-text-size} },
                      :y2 {:field "sum"},
                      :color
                          {:condition
                                  [{:test "datum.date === 'Begin' || datum.date === 'YTD'", :value (second performance-colors)}
                                   {:test "datum.sum < datum.previous_sum", :value (nth performance-colors 4)}],
                           :value (first performance-colors)}}}
              {:mark
               {:type "rule", :color "#404040", :opacity 1, :strokeWidth 2, :xOffset -22.5, :x2Offset 22.5},
               :encoding {:x2 {:field "lead"}, :y {:field "sum", :type "quantitative"}}}
              {:mark
               {:type "text", :dy -4, :baseline "bottom"},
               :encoding {:y {:field "sum_inc", :type "quantitative"}, :text {:field "sum_inc", :type "nominal" }}}
              {:mark
               {:type "text", :dy 4, :baseline "top"},
               :encoding {:y {:field "sum_dec", :type "quantitative"}, :text {:field "sum_dec", :type "nominal" }}}
              {:mark
               {:type "text", :fontWeight "bold", :baseline "middle"},
               :encoding
               {:y {:field "center", :type "quantitative"}, :text {:field "text_amount", :type "nominal"  },
                :color
                   {:condition [{:test "datum.date === 'Begin' || datum.date === 'YTD'", :value "white"}],
                    :value "white"}}}],
     :config
             {:text {:fontWeight "bold", :color "#404040"}}}))

(defn quant-value-waterfall-chart [data max-total]
  "The data is of the form [{:date dt :group TXT :value 0}]"
  (let [new-data (map (fn [line] (update line :value #(/ (Math/round (* 100 %)) 100))) (concat data [{:group "Total", :value 0}]))]
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :data   {:values new-data},
     :width  1100,
     :height (- standard-box-height-nb 400),
     :title  nil
     :transform                                             ;
             [{:window [{:op "sum", :field "value", :as "sum"}]}
              {:window [{:op "lead", :field "group", :as "lead"}]}
              {:calculate "datum.lead === null ? datum.group : datum.lead", :as "lead"}
              {:calculate "datum.group === 'Total' ? 0 : datum.sum - datum.value", :as "previous_sum"}
              {:calculate "datum.group === 'Total' ? datum.sum : datum.value", :as "value"}
              {:calculate "(datum.group !== 'Begin' && datum.group !== 'Total' && datum.value > 0 ? '+' : '') + datum.value", :as "text_amount"}
              {:calculate "(datum.sum + datum.previous_sum) / 2", :as "center"}
              {:calculate "datum.sum < datum.previous_sum ? datum.sum : ''", :as "sum_dec"}
              {:calculate "datum.sum > datum.previous_sum ? datum.sum : ''", :as "sum_inc"}],
     :encoding {:x {:field "group", :type "nominal", :sort nil, :axis {:labelAngle 0, :title nil :labelFontSize chart-text-size}}},
     :layer
             [{:mark {:type "bar", :size 70},
               :encoding
                     {:y {:field "previous_sum", :type "quantitative", :title "Cheapness", :scale {:domain [0 max-total]}
     :axis   {:labelFontSize chart-text-size :titleFontSize chart-text-size}},
                      :y2 {:field "sum"},
                      :color
                          {:condition [{:test "datum.group === 'Begin' || datum.group === 'Total'", :value (second performance-colors)} {:test "datum.sum < datum.previous_sum", :value (nth performance-colors 4)}],
                           :value (first performance-colors)}}}
              {:mark {:type "rule", :color "#404040", :opacity 1, :strokeWidth 2, :xOffset -35, :x2Offset 35}, :encoding {:x2 {:field "lead"}, :y {:field "sum", :type "quantitative"}}}
              {:mark {:type "text", :dy -4, :baseline "bottom"},              :encoding {:y {:field "sum_inc", :type "quantitative"}, :text {:field "sum_inc", :type "nominal" :format "0.2f"}}}
              {:mark {:type "text", :dy 4, :baseline "top"},                  :encoding {:y {:field "sum_dec", :type "quantitative"}, :text {:field "sum_dec", :type "nominal"}}}
              {:mark {:type "text", :fontWeight "bold", :baseline "middle"},
               :encoding {:y {:field "center", :type "quantitative"}, :text {:field "text_amount", :type "nominal" :format "0.2f"},
                          :color {:condition [{:test "datum.group === 'Begin' || datum.group === 'Total'", :value "white"}], :value     "white"}}}],
     :config {:text {:fontWeight "bold", :color "#404040"}}}))

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
  (into [{:title "Year to date monthly performance" :nav-request :ytd-performance :data-request [:get-portfolio-review-historical-performance-chart-data "portfolio"]}]
        (for [p [["MTD" "mtd"] ["YTD" "ytd"]] k risk-breakdowns]
          {:title (str (first p) " Contribution by " (first k)) :nav-request :contribution :data-request [:get-portfolio-review-contribution-chart-data "portfolio" (second p) (second k)]})))

(def alpha-pages
  (into [] (for [k risk-breakdowns]
             {:title (str "Alpha by " (first k)) :nav-request :alpha :data-request [:get-portfolio-review-alpha-chart-data "portfolio" (second k)]})))

(def top-bottom-pages
  (into []
        (for [p [["MTD" "mtd"] ["YTD" "ytd"]]
              k [["top" "top"] ["bottom" "bottom"]]]
          {:title        (str (first p) " " (first k) " contributors")
           :nav-request  :top-bottom
           :data-request [:get-single-attribution "portfolio" (second p)]})))

(def jensen-pages
  (into [] (for [k risk-breakdowns]
             {:title (str "Jensen by " (first k)) :nav-request :jensen :data-request [:get-portfolio-review-jensen-chart-data "portfolio" (second k)]})))

(def risk-pages
  (conj
    (into [{:title "Beta evolution over time" :nav-request :risk :data-request [:get-portfolio-review-historical-beta-chart-data "portfolio" ["BR", "CN", "AR", "TR", "MX"]]}
           {:title "Top issuer risk"          :nav-request :risk :data-request nil}
           ]
          (for [k risk-breakdowns p ["weights" "beta contribution" "deviation from index"]]
            {:title        (str "Risk by " (first k) ": " p)
             :nav-request  :risk
             :grouping     k
             :subgrouping  p
             :data-request (if (= p "beta contribution") [:get-portfolio-review-marginal-beta-chart-data "portfolio" (second k)])}))))

(def activity-pages
  [{:title "Trades over the past 15 days"
    :nav-request :activity
    :data-request [:get-portfolio-trade-history "portfolio" (tools/gdate-to-yyyymmdd (cljs-time/plus (cljs-time/today) (cljs-time/days -15))) (tools/gdate-to-yyyymmdd (cljs-time/today))]}])

(def quant-value-pages
  (into [] (for [k risk-breakdowns p ["curve normalisation (4D)" "sector and country normalisation (2D)"]]
             {:title (str "Quant value by " (first k) ": " p) :nav-request :quant-value :grouping k :subgrouping p :data-request nil})))


(def pages (into {} (map-indexed
                      vector
                      (concat
                        [{:title "Summary" :nav-request :summary :data-request nil}]
                         contribution-pages
                         alpha-pages
                         top-bottom-pages
                         jensen-pages
                        [{:title "Three year daily backtest" :nav-request :backtest-history :data-request nil}]
                        activity-pages
                        quant-value-pages
                        risk-pages
                        [{:title "Interest rate breakdown" :nav-request :ir-breakdown :data-request nil :dur-key :contrib-mdur}
                         {:title "Interest rate breakdown vs index" :nav-request :ir-breakdown :data-request nil :dur-key :mdur-delta}]
                        [{:title "The End" :nav-request :end :data-request nil}]
                        ))))

(def portfolio-review-navigation
  (mapv (fn [line] (assoc line :page-start (apply min (keys (filter #(= (:nav-request (second %)) (:code line)) pages)))))
        [{:code :summary          :name "Summary"           }
         {:code :contribution     :name "Contribution"      }
         {:code :alpha            :name "Alpha"             }
         {:code :top-bottom       :name "Top contributors"  }
         {:code :jensen           :name "Jensen"            }
         {:code :backtest-history :name "Backtest"          }
         {:code :activity         :name "Activity"          }
         {:code :quant-value      :name "Quant value"       }
         {:code :risk             :name "Risk"              }
         {:code :ir-breakdown     :name "Interest rate risk"}]))

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

(defn portfolio-review-box-template [children]
  [box :class "subbody rightelement" :width standard-box-width :height standard-box-height
   :child [v-box :gap "40px" :class "element" :width "100%" :height "100%" :children (concat [[heading-box]] children)]])

(defn end [] (portfolio-review-box-template nil))

(defn summary-text []
  (let [portfolio @(rf/subscribe [:portfolio-review/portfolio])
        data @(rf/subscribe [:portfolio-review/summary-data])
        positions (filter #(= (:portfolio %) portfolio) @(rf/subscribe [:positions]))
        f (fn [x] (if x (gstring/format "%.0fbps" (* 100 x)) ""))
        g (fn [x] (if x (gstring/format "%.2f" x) ""))
        h (fn [x] (if x (gstring/format "%.1f" x) ""))]
    (reset! current-page 0)                                 ;HACK WHEN CHANGING PORTFOLIO
    (portfolio-review-box-template [[title :level :level2 :label (str "MTD, " portfolio " returned " (f (get-in data [:mtd :portfolio])) " vs " (f (get-in data [:mtd :index])) " for the index, " (f (get-in data [:mtd :alpha])) " of alpha.")]
                                    [title :level :level2 :label (str "YTD, " portfolio " returned " (f (get-in data [:ytd :portfolio])) " vs " (f (get-in data [:ytd :index])) " for the index, " (f (get-in data [:ytd :alpha])) " of alpha.")]
                                    [title :level :level2 :label (str "The portfolio yield is " (g (* 100 (reduce + (map :contrib-yield positions)))) "% vs " (g (* 100 (reduce + (map :bm-contrib-yield positions)))) "% for the index.")]
                                    [title :level :level2 :label (str "Our duration is " (h (reduce + (map :contrib-mdur positions))) " vs " (h (reduce + (map :bm-contrib-eir-duration positions))) " for the index.")]
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
                                    [p (str "Performance data as of " @(rf/subscribe [:attribution-date]) ". Risk data as of " @(rf/subscribe [:qt-date]) ".")]])))

(defn ytd-performance []
  (let [data @(rf/subscribe [:portfolio-review/historical-performance-chart-data])
        monthmap {"01" "Jan" "02" "Feb" "03" "Mar" "04" "Apr" "05" "May" "06" "Jun"
                  "07" "Jul" "08" "Aug" "09" "Sep" "10" "Oct" "11" "Nov" "12" "Dec"}
        total-alpha (get-in @(rf/subscribe [:portfolio-review/summary-data]) [:ytd :alpha])
        gamma (- total-alpha (reduce + (map :value (filter #(= (:group %) "Total-Effect") data))))]
    (portfolio-review-box-template
      [[h-box :gap "20px"
        :children [[oz/vega-lite (grouped-vertical-bars
                                   (sort-by (juxt :date (fn [x] (if (= (:group x) "Index") 2 1)))
                                            (map (fn [line]
                                                   (update line :group #({"Fund-Contribution"  @(rf/subscribe [:portfolio-review/portfolio])
                                                                          "Index-Contribution" "Index"} %)))
                                                 (remove #(= (:group %) "Total-Effect") data))) "Basis points")]
                    [oz/vega-lite (vertical-waterfall
                                    (concat
                                      (map (fn [line] (update line :date #(monthmap (subs % 4 6))))
                                           (filter #(= (:group %) "Total-Effect") data))
                                      [{:date "Gamma" :group "Total-Effect" :value gamma}]) "")]]]])))

(defn contribution-or-alpha-chart [data]
  (portfolio-review-box-template
    [[oz/vega-lite (grouped-horizontal-bars data "Basis points")]
     [gap :size "1"]
     [v-box :width "100%" :gap "0px" :align :end
      :children [[p {:style {:text-align "right" :z-index 500}} @(rf/subscribe [:attribution-date])]
                 [p {:style {:text-align "right" :z-index 500}} "UST categorized as cash"]]]]))

(defn historical-beta []
  (portfolio-review-box-template [[oz/vega-lite (area-chart @(rf/subscribe [:portfolio-review/historical-beta-chart-data]))]]))

(defn top-contributors []
  (let [display (sort-by :Total-Effect
                         (remove #(or (some #{(:Sector %)} ["Total"])
                                      (and (= (:Sector %) "Cash") (some? (:Security %)) (not= "T" (subs (:Security %) 0 1))))
                                 @(rf/subscribe [:single-portfolio-attribution/clean-table])))]
    (portfolio-review-box-template
      [[h-box :width "1600px" :gap "20px"
        :children [[:> ReactTable
                    {:data                (take 20 (if (= (subs (get-in pages [@current-page :title]) 4 7) "top") (reverse display) display))
                     :columns             [{:Header "Bond" :columns (mapv tables/attribution-table-columns [:security :country :sector])}
                                           {:Header "Effect" :columns (mapv tables/attribution-table-columns [:total-effect])}
                                           {:Header "Contribution" :columns (mapv tables/attribution-table-columns [:contribution :bm-contribution])}
                                           {:Header "Weight" :columns (mapv tables/attribution-table-columns [:xs-weight :weight :bm-weight])}]
                     :showPagination      false :sortable false :filterable false :pageSize 20 :className "-striped -highlight"}]
                   [:> ReactTable
                    {:data                display
                     :columns             [{:Header "Issuer" :columns (mapv tables/attribution-table-columns [:issuer])}
                                           {:Header "Effect" :columns (mapv tables/attribution-table-columns [:total-effect])}
                                           {:Header "Contribution" :columns (mapv tables/attribution-table-columns [:contribution :bm-contribution])}
                                           {:Header "Weight" :columns (mapv tables/attribution-table-columns [:xs-weight :weight :bm-weight])}]
                     :showPagination      false :sortable false :defaultSorted [{:id :Total-Effect :desc (= (subs (get-in pages [@current-page :title]) 4 7) "top")}] :filterable false :pageSize 20 :className "-striped -highlight" :pivotBy [:Issuer]}]]]])))

(defn backtest-history-page []
  (rf/dispatch [:get-portfolio-var @(rf/subscribe [:portfolio-review/portfolio])])
  (rf/dispatch [:var/chart-period :daily-3y])
  (let [dates @(rf/subscribe [:var/dates])
        data @(rf/subscribe [:var/data])
        chart-period @(rf/subscribe [:var/chart-period])
        line (first (filter #(= (:id %) chart-period) static/var-charts-choice-map))
        days (case (line :frequency) :daily (* (line :period) 250) :weekly (* (line :period) 52) :monthly (* (line :period) 12))]
    (portfolio-review-box-template
      [[oz/vega-lite (charting/backtest-chart
                       (take-last days (get-in dates [(line :frequency)]))
                       (take-last days (get-in data [:portfolio-value (line :frequency)]))
                       (take-last days (get-in data [:benchmark-value (line :frequency)]))
                       (- standard-box-width-nb 200) (- standard-box-height-nb 400))]
       [p {:style {:width "250px" :min-width "250px"}} "Note that portfolio is price move only, but benchmark includes carry hence only 100d displayed" ]])))

(defn risk-betas-table-support [data]
  (let [display (into [] (for [[g v] (group-by :group data)] (merge {:group g} (into {} (for [line v] [(:performance line) (:value line)])))))
        portfolio @(rf/subscribe [:portfolio-review/portfolio])
        idx (first (remove #{portfolio :group} (keys (first display))))
        displaywithdiff (map #(assoc % :delta (- (% portfolio) (% idx))) display)
        sorted-display (if (some #{"Rest"} (map :group displaywithdiff))
                         (vec (let [p (group-by #(= (:group %) "Rest")  (sort-by #(get % portfolio) displaywithdiff))] (concat (p true) (p false)))) ;(vec (let [p (partition-by #(= (:group %) "Rest")  (sort-by #(get % portfolio) displaywithdiff))] (concat (last p) (first p))))
                         (vec (sort-by #(get % portfolio) displaywithdiff)))]
    ;(println (vec (let [p (group-by #(= (:group %) "Rest")  (sort-by #(get % portfolio) displaywithdiff))] (concat (p true) (p false)))))
  [:> ReactTable
   {:data           sorted-display
    :columns        [{:Header "Item" :accessor "group" :width 150}
                     {:Header portfolio :accessor portfolio :width 100 :Cell (partial tables/nb-cell-format "%.2f" 1.)}
                     {:Header idx :accessor idx :width 100 :Cell (partial tables/nb-cell-format "%.2f" 1.)}
                     {:Header "Delta" :accessor "delta" :width 100 :Cell (partial tables/nb-cell-format "%.2f" 1.)}]
    :showPagination false :sortable false :filterable false :pageSize (count displaywithdiff) :showPageSizeOptions false :className "-striped -highlight"}]))

(defn risk-betas []
  (let [data @(rf/subscribe [:portfolio-review/marginal-beta-chart-data])
        groups (distinct (mapv :group data))
        new-data (mapv #(assoc %1 :order (.indexOf groups (:group %1))) data)]
    (portfolio-review-box-template [[h-box :justify :between :children [[oz/vega-lite (stacked-vertical-bars new-data "Beta contribution")] [risk-betas-table-support new-data]]]])))

(def group-name-to-key
  {"Region"          :jpm-region
   "Country"         :qt-risk-country-name
   "Sector"          :qt-jpm-sector
   "RatingGroup"     :rating-group
   "Duration Bucket" :qt-final-maturity-band})

(defn risk-weights []
  (let [g (second (get-in pages [@current-page :grouping]))
        grouping (group-name-to-key g)
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
                     chart-data)
        clean-data-sorted (case g
                            "RatingGroup" (map #(update % :group subs 3) (sort-by :group (reverse (sort-by :performance clean-data))))
                            "Duration Bucket" (sort-by (fn [x] (.indexOf ["0 - 1 year" "1 - 3 years" "3 - 5 years" "5 - 7 years" "7 - 10 years" "10 - 20 years" "20 years +"] (:group x))) (reverse (sort-by :performance clean-data)))
                            (sort-by :group (reverse (sort-by :performance clean-data))))]
    (portfolio-review-box-template [[oz/vega-lite (grouped-horizontal-bars clean-data-sorted "Share of total risk")]])))

(defn risk-deltas []
  (let [g (second (get-in pages [@current-page :grouping]))
        grouping (group-name-to-key g)
        data (filter #(= (:portfolio %) @(rf/subscribe [:portfolio-review/portfolio])) @(rf/subscribe [:positions]))
        ;totals (get-in @(rf/subscribe [:total-positions]) [(keyword @(rf/subscribe [:portfolio-review/portfolio]))])
        grp (group-by grouping data)
        risks [["weight" :weight-delta] ["mod duration" :mdur-delta] ]
        chart-data (into [] (for [[k g] grp r risks] {:group k :performance (first r) :value (* (if (= (first r) "weight") 100. 1.) (reduce + (map (second r) g)))}))
        clean-data (case g
                     "Region" (remove #(some #{(:group %)} ["Collateral" "Forwards" "Equities"]) chart-data)
                     "Country" (let [top-countries (map :group (take-last 8 (sort-by #(Math/abs (:value %)) (filter (fn [x] (= (:performance x) "weight")) chart-data))))]
                                 (sort-by :group (filter #(some #{(:group %)} top-countries) chart-data)))
                     "RatingGroup" (remove #(some #{(:group %)} ["08 C" "08 CC" "08 D" "09 NM"]) chart-data)
                     "Sector" (remove #(some #{(:group %)} ["Collateral" "Forwards" "Equities" "Cash" "Corporate"]) chart-data)
                     chart-data)
        clean-data-sorted (case g
                            "RatingGroup" (map #(update % :group subs 3) (sort-by :group (reverse (sort-by :performance clean-data))))
                            "Duration Bucket" (sort-by (fn [x] (.indexOf ["0 - 1 year" "1 - 3 years" "3 - 5 years" "5 - 7 years" "7 - 10 years" "10 - 20 years" "20 years +"] (:group x))) (reverse (sort-by :performance clean-data)))
                            (sort-by :group (reverse (sort-by :performance clean-data))))]
    (portfolio-review-box-template
      [[h-box :gap "20px"
        :children [[oz/vega-lite (simple-horizontal-bars (filter #(= (:performance %) "weight") clean-data-sorted) "Weight vs index" ".0f" 1.5 2 nil nil)]
                   [oz/vega-lite (simple-horizontal-bars (filter #(= (:performance %) "mod duration") clean-data-sorted) "Duration vs index" ".1f" 2.0 2 nil nil)]]]])))

(defn top-issuer-table []
  (let [portfolio @(rf/subscribe [:portfolio-review/portfolio])]
    [:> ReactTable
     {:data           (conj (filter #(and (= (:portfolio %) portfolio) (pos? (:weight %)))
                                    @(rf/subscribe [:positions]))
                            (@(rf/subscribe [:total-positions]) (keyword portfolio)))
      :columns        [(:issuer tables/risk-table-columns)
                       (assoc (:name tables/risk-table-columns) :Header "Held bonds" :width 500)
                       (assoc (:nav tables/risk-table-columns) :Header "NAV" :filterable false :width 100)
                       (assoc (:contrib-mdur tables/risk-table-columns) :Header "Duration" :width 100)
                       (assoc (:contrib-beta tables/risk-table-columns) :Header "Beta" :width 100)]
      :showPagination true :sortable true :filterable false :pageSize 15 :showPageSizeOptions false :className "-striped -highlight" :pivotBy [:TICKER] :defaultSorted [{:id :contrib-beta-1y-daily :desc true}]}]))

(defn risk-page []
  (cond
    (clojure.string/includes? (get-in pages [@current-page :title]) "evolution")  [historical-beta]
    (clojure.string/includes? (get-in pages [@current-page :title]) "issuer")     (portfolio-review-box-template [[top-issuer-table]])
    (clojure.string/includes? (get-in pages [@current-page :title]) "weights")    [risk-weights]
    (clojure.string/includes? (get-in pages [@current-page :title]) "beta")       [risk-betas]
    (clojure.string/includes? (get-in pages [@current-page :title]) "deviation")  [risk-deltas]
    :else [p "no data"]))

(defn aggregate-trade-table []
  (let [data @(rf/subscribe [:portfolio-trade-history/data])
        nav (:base-value (first (filter #(= (:portfolio %) @(rf/subscribe [:portfolio-review/portfolio])) @(rf/subscribe [:summary-display/table]))))
        grp (group-by :NAME data)
        grouped-data (into [] (for [[n g] grp]
                                (let [proceeds (Math/round (- (reduce + (map #(* %1 %2 0.01) (map :Quantity g) (map :PriceLcl g)))))]
                                  (assoc (first g) :TotalQuantity (reduce + (map :Quantity g))
                                                   :Proceeds proceeds
                                                   :ProceedsNAV (/ proceeds nav)))))
        display (concat [{:NAME "Total (net)" :ISIN "" :LocalCcy "USD" :TotalQuantity (reduce + (map :TotalQuantity grouped-data)) :Proceeds (reduce + (map :Proceeds grouped-data)) :ProceedsNAV (reduce + (map :ProceedsNAV grouped-data))}
                         (let [g (filter (comp pos? :TotalQuantity) grouped-data)] {:NAME "Total (buys)" :ISIN "" :LocalCcy "USD" :TotalQuantity (reduce + (map :TotalQuantity g)) :Proceeds (reduce + (map :Proceeds g)) :ProceedsNAV (reduce + (map :ProceedsNAV g))})
                         (let [g (filter (comp neg? :TotalQuantity) grouped-data)] {:NAME "Total (sells)" :ISIN "" :LocalCcy "USD" :TotalQuantity (reduce + (map :TotalQuantity g)) :Proceeds (reduce + (map :Proceeds g)) :ProceedsNAV (reduce + (map :ProceedsNAV g))})]
                        (sort-by :Proceeds grouped-data))]
    (if @(rf/subscribe [:single-bond-trade-history/show-throbber])
      [box :align :center :child [throbber :size :large]]
      [box :align :center
       :child [:> ReactTable
               {:data                display
                :columns             (concat [{:Header "Instrument" :accessor "NAME" :width 200}
                                              {:Header "ISIN" :accessor "ISIN" :width 125}
                                              {:Header "CCY" :accessor "LocalCcy" :width 60}
                                              {:Header "Notional" :accessor "TotalQuantity" :width 100 :style {:textAlign "right"} :Cell th/nfh} ;
                                              {:Header "Proceeds" :accessor "Proceeds" :width 100 :style {:textAlign "right"} :Cell th/nfh}
                                              {:Header "NAV proceeds" :accessor "ProceedsNAV" :width 100 :style {:textAlign "right"} :Cell (partial tables/nb-cell-format "%.1f%" 100.)}
                                              {:Header "Country" :accessor "CNTRY_OF_RISK" :width 75}
                                              {:Header "Region" :accessor "JPMRegion" :width 100}
                                              {:Header "Sector" :accessor "JPM_SECTOR" :width 125}])
                :showPagination      (> (count display) 15)
                :defaultPageSize     (min 15 (count display))
                :filterable          true
                :defaultFilterMethod tables/text-filter-OR
                :className           "-striped -highlight"}]])))

(defn activity-page [] (portfolio-review-box-template [[aggregate-trade-table]]))

(defn quant-value-page []
  (when (= (get-in pages [@current-page :nav-request]) :quant-value) ;there is a risk here from using re-frame + reagent atoms together - race condition, reagent updated beforey
    (let [g (second (get-in pages [@current-page :grouping]))
          r (if (clojure.string/includes? (get-in pages [@current-page :title]) "4D") :quant-value-4d :quant-value-2d)
          grouping (group-name-to-key g)
          data (filter #(= (:portfolio %) @(rf/subscribe [:portfolio-review/portfolio])) @(rf/subscribe [:positions]))
          total (reduce + (map r data))
          max-total (apply max (map #(reduce + (map % data)) [:quant-value-4d :quant-value-2d]))
          grp (group-by grouping data)
          chart-data (into [] (for [[k g] grp] {:group k :value (reduce + (map r g))}))
          clean-data (case g
                       "Region" (reverse (sort-by :value (remove #(some #{(:group %)} ["Collateral" "Forwards" "Equities" "Cash"]) chart-data)))
                       "Country" (let [top-countries (map :group (take-last 8 (sort-by #(Math/abs (:value %)) chart-data)))
                                       top-countries-values (sort-by :value (filter #(some #{(:group %)} top-countries) chart-data))]
                                   (reverse (conj top-countries-values {:group "Rest" :value (- total (reduce + (map :value top-countries-values)))})))
                       "RatingGroup" (let [top-ratings (remove #(some #{%} ["01 AAA" "02 AA" "08 C" "08 D" "09 NM"]) (map :group chart-data))
                                           top-ratings-values (reverse (sort-by :group (filter #(some #{(:group %)} top-ratings) chart-data)))]
                                       (reverse (conj top-ratings-values {:group "99 Rest" :value (- total (reduce + (map :value top-ratings-values)))})))
                       "Sector" (reverse (sort-by :value (remove #(some #{(:group %)} ["Collateral" "Forwards" "Equities" "Cash" "Corporate"]) chart-data)))
                       chart-data)
          clean-data-sorted (case g
                              "RatingGroup" (map #(update % :group subs 3) clean-data)
                              "Duration Bucket" (sort-by (fn [x] (.indexOf ["0 - 1 year" "1 - 3 years" "3 - 5 years" "5 - 7 years" "7 - 10 years" "10 - 20 years" "20 years +"] (:group x))) clean-data)
                              clean-data)]
      (portfolio-review-box-template [[oz/vega-lite (quant-value-waterfall-chart clean-data-sorted max-total)]]))))

(defn ir-breakdown []
  (let [dur-key (get-in pages [@current-page :dur-key])
        positions (t/chainfilter {:portfolio @(rf/subscribe [:portfolio-review/portfolio]) } @(rf/subscribe [:positions])) ;:original-quantity #(not (zero? %))
        ust (t/chainfilter {:TICKER "T"} positions)
        bbb-flat-and-better (t/chainfilter {:TICKER #(not= % "T") :rating-score #(< % 10)} positions)
        bbb-minus-and-worse (t/chainfilter {:TICKER #(not= % "T") :rating-score #(>= % 10)} positions) ;futures have no rating
        durations ["0 - 1 year" "1 - 3 years" "3 - 5 years" "5 - 7 years" "7 - 10 years" "10 - 20 years" "20 years +"]
        prep (fn [data] (into [] (for [m durations] {:performance "portfolio" :group m :value (reduce + (map dur-key (t/chainfilter {:qt-final-maturity-band m} data)))})))
        dust (prep ust) dig (prep bbb-flat-and-better) dhy (prep bbb-minus-and-worse)
        maxd (apply max (concat (map :value dust) (map :value dig) (map :value dhy)))
        st (fn [data] (str (gstring/format "%.1f" (reduce + (map dur-key data))) "y"))
        chartfn (fn [data title] [oz/vega-lite (simple-horizontal-bars data title ".1f" 0.5 3 20 {:scale {:domain [0 (inc (int maxd))]}})])]
    (portfolio-review-box-template
      [[h-box :gap "20px" :children [(chartfn dust (str "UST: " (st ust))) (chartfn dig (str "BBB and better: " (st bbb-flat-and-better))) (chartfn dhy (str "BBB- and weaker: " (st bbb-minus-and-worse)))]]])))

(defn active-home []
  (let [active-tab @(rf/subscribe [:portfolio-review/active-tab])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-tab
      :summary                       [summary-text]
      :ytd-performance               [ytd-performance]
      :contribution                  [contribution-or-alpha-chart @(rf/subscribe [:portfolio-review/contribution-chart-data])]
      :alpha                         [contribution-or-alpha-chart @(rf/subscribe [:portfolio-review/alpha-chart-data])] ;(sort-by :group (reverse (sort-by :performance @(rf/subscribe [:portfolio-review/alpha-chart-data]))))
      :top-bottom                    [top-contributors]
      :jensen                        [contribution-or-alpha-chart @(rf/subscribe [:portfolio-review/jensen-chart-data])]
      :backtest-history              [backtest-history-page]
      :activity                      [activity-page]
      :quant-value                   [quant-value-page]
      :risk                          [risk-page]
      :ir-breakdown                  [ir-breakdown]
      :end                           [end]
      [:div.output "nothing to display"])))

(defn portfolio-change [portfolio]
  ;(reset! current-page 0)                                   ;(go-to-page 0 portfolio)
  (rf/dispatch [:change-portfolio portfolio])               ;THERE WILL BE A HACK IN DISPLAY SUMMARY
  ;(reset! current-page 0)
  ;(rf/dispatch [:portfolio-review/portfolio portfolio])
  ;(rf/dispatch [:get-portfolio-review-summary-data portfolio])
  )

(defn nav []
  (let [active-tab @(rf/subscribe [:portfolio-review/active-tab])
        portfolio-map (into [] (for [p @(rf/subscribe [:portfolios])] {:id p :label p}))
        portfolio @(rf/subscribe [:portfolio-review/portfolio])]
    [h-box
     :children [[v-box
                 :gap "20px"
                 :class "leftnavbar"
                 :children (into (vec (remove nil? [(if @(rf/subscribe [:time-machine/enabled]) [alert-box :alert-type :danger :heading "Time machine is ON" :body (str "Date " (subs (str @(rf/subscribe [:time-machine/date])) 0 8))])
                                                    [h-box :children [[md-icon-button :md-icon-name "zmdi-forward" :class "zmdi-hc-flip-horizontal" :size :larger :style {:color "white"} :on-click previous-page!]
                                                                      [box :size "1" :align :center :child [label :label (str (inc @current-page) "/" maximum-page) :style {:width "135px" :color "white" :text-align "center"}]]
                                                                      [md-icon-button :md-icon-name "zmdi-forward" :size :larger :style {:color "white"} :on-click next-page!]]]
                                                    [line :color "#CA3E47" :class "separatornavline"]
                                                    [single-dropdown :width "100%" :model portfolio :choices portfolio-map :on-change portfolio-change]
                                                    [line :color "#CA3E47" :class "separatornavline"]]))
                                 (for [item portfolio-review-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-tab (:code item))) " active"))
                                    :label (:name item)
                                    :on-click #(go-to-block! (:code item))]))]]]))

(defn view [] [h-box :gap "10px" :padding "0px" :children [[nav] [active-home]]])
