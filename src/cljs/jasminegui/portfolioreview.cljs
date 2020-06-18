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

(defn portfolio-vs-index-horizontal-bars [data]
  (let [individual-height (if (> (count (distinct (map :group data))) 10) 20 60) ; (/ (+ standard-box-height-nb 400) (* 5 (count (distinct (map :group data)))))
        text-size 16
        scl (int (/ (max (apply max (map :value data)) (- (apply min (map :value data)))) 30))]
    ;    (println (count (distinct (map :group data))) individual-height)
    {:$schema   "https://vega.github.io/schema/vega-lite/v4.json",
     ;   :width     (- standard-box-width-nb 400),
     ;:height    {:step (/ (- standard-box-height-nb 0) (* 3.0 (count (distinct (map :group data)))))},
     :data      {:values data},
     :transform [{:calculate (str "datum.value >= 0 ? datum.value + " scl " : datum.value - " scl), :as "valuetxt"}],
     :facet     { :row {:field "group", :type "ordinal", :sort (mapv :group data), :title "", :header {:labelAngle 0, :labelFontSize text-size, :labelAlign "left"}}},
     :spec
                {:layer
                 [{:mark   "bar",
                   :width  (- standard-box-width-nb 400),
                   :height individual-height
                   :encoding
                           {:x
                                   {:aggregate "sum", :field "value", :type "quantitative",
                                    :axis      {:title "Basis points", :titleFontSize text-size, :titleFontWeight "normal" :labelFontSize text-size, :gridColor {:condition {:test "datum.value === 0", :value "black"}}}},
                            :y
                                   {:field "performance", :type "nominal", :axis {:title "", :labels false}},
                            :color {:field "performance", :type "nominal", :sort "descending", :scale {:range ["#134848" "#009D80"]}, :legend {:title "", :labelFontSize text-size}}}}
                  {:mark   {:type "text", :fontSize text-size},
                   :width  (- standard-box-width-nb 400),
                   :height individual-height
                   :encoding
                           {:x    {:aggregate "sum", :field "valuetxt", :type "quantitative", :axis {:title nil}},
                            :y    {:field "performance", :type "nominal", :axis {:title "", :labels false}},
                            :color
                                  {:field "performance", :type "nominal", :sort "descending", :scale {:range ["#134848" "#009D80"]}, :legend nil},
                            :text {:field "value" :format ".0f"}
                            }}]},
     :config
                {:view {:stroke "transparent"},
                 :axis {:domainWidth 1}}})
    )


;;;;;;;;;;;;;;;;
;;;NAVIGATION;;;
;;;;;;;;;;;;;;;;



(def contribution-pages
  (into []
        (for [p [["MTD" "mtd"]
                 ["YTD" "ytd"]]
              k [["Region" "Region"]
                 ["Country" "Country"]
                 ["Sector" "Sector"]
                 ["Rating" "RatingGroup"]
                 ["Duration" "Duration Bucket"]]]
          {:title        (str (first p) " Contribution by " (first k))
           :nav-request  :contribution
           :data-request [:get-portfolio-review-contribution-chart-data "portfolio" (second p) (second k)]})))

(def alpha-pages
  (into []
        (for [k [["Region" "Region"]
                 ["Country" "Country"]
                 ["Sector" "Sector"]
                 ["Rating" "RatingGroup"]
                 ["Duration" "Duration Bucket"]]]
          {:title        (str "Alpha by " (first k))
           :nav-request  :alpha
           :data-request [:get-portfolio-review-alpha-chart-data "portfolio" (second k)]})))

(def top-bottom-pages
  (into []
        (for [p [["MTD" "mtd"]
                 ["YTD" "ytd"]]
              k [["top" "top"]
                 ["bottom" "bottom"]]]
          {:title        (str (first p) " " (first k) " contributors")
           :nav-request  :top-bottom
           :data-request [:get-single-attribution "portfolio" (second p)]})))

(def jensen-pages
  (into []
        (for [k [["Region" "Region"]
                 ["Country" "Country"]
                 ["Sector" "Sector"]
                 ["Rating" "RatingGroup"]
                 ["Duration" "Duration Bucket"]]]
          {:title        (str "Jensen by " (first k))
           :nav-request  :jensen
           :data-request [:get-portfolio-review-jensen-chart-data "portfolio" (second k)]})))

(def pages (into {} (map-indexed
                      vector
                      (concat
                        [{:title "Summary"                      :nav-request :summary         :data-request nil}]
                         contribution-pages
                         alpha-pages
                         top-bottom-pages
                         jensen-pages
                        [{:title "Three year daily backtest"   :nav-request :backtest-history  :data-request nil}]
                        ))))

(def portfolio-review-navigation
  [{:code :summary      :name "Summary"           :page-start 0}
   {:code :contribution :name "Contribution"      :page-start (apply min (keys (filter #(= (:nav-request (second %)) :contribution) pages)))}
   {:code :alpha        :name "Alpha"             :page-start (apply min (keys (filter #(= (:nav-request (second %)) :alpha) pages)))}
   {:code :top-bottom   :name "Top contributors"  :page-start (apply min (keys (filter #(= (:nav-request (second %)) :top-bottom) pages)))}
   {:code :jensen       :name "Jensen"            :page-start (apply min (keys (filter #(= (:nav-request (second %)) :jensen) pages)))}
   {:code :backtest-history       :name "Backtest"            :page-start (apply min (keys (filter #(= (:nav-request (second %)) :backtest-history) pages)))}
   {:code :risk         :name "Risk"              :page-start 40}])

;(def pages {
;            1  {:title "Summary"                      :nav-request :summary         :data-request nil}
;            2  {:title "MTD Contribution by Region"   :nav-request :contribution    :data-request [:get-portfolio-review-contribution-chart-data "portfolio" "mtd" "Region"]}
;            3  {:title "MTD Contribution by Country"  :nav-request :contribution    :data-request [:get-portfolio-review-contribution-chart-data "portfolio" "mtd" "Country"]}
;            4  {:title "MTD Contribution by Sector"   :nav-request :contribution    :data-request [:get-portfolio-review-contribution-chart-data "portfolio" "mtd" "Sector"]}
;            5  {:title "MTD Contribution by Rating"   :nav-request :contribution    :data-request [:get-portfolio-review-contribution-chart-data "portfolio" "mtd" "RatingGroup"]}
;            6  {:title "MTD Contribution by Rating"   :nav-request :contribution    :data-request [:get-portfolio-review-contribution-chart-data "portfolio" "mtd" "RatingGroup"]}
;
;            6  {:title "YTD Contribution by Region"   :nav-request :contribution    :data-request [:get-portfolio-review-contribution-chart-data "portfolio" "ytd" "Region"]}
;            7  {:title "YTD Contribution by Country"  :nav-request :contribution    :data-request [:get-portfolio-review-contribution-chart-data "portfolio" "ytd" "Country"]}
;            8  {:title "YTD Contribution by Sector"   :nav-request :contribution    :data-request [:get-portfolio-review-contribution-chart-data "portfolio" "ytd" "Sector"]}
;            9  {:title "YTD Contribution by Rating"   :nav-request :contribution    :data-request [:get-portfolio-review-contribution-chart-data "portfolio" "ytd" "RatingGroup"]}
;            10 {:title "Alpha by Region"              :nav-request :alpha           :data-request [:get-portfolio-review-alpha-chart-data "portfolio" "Region"]}
;            11 {:title "Alpha by Country"             :nav-request :alpha           :data-request [:get-portfolio-review-alpha-chart-data "portfolio" "Country"]}
;            12 {:title "Alpha by Sector"              :nav-request :alpha           :data-request [:get-portfolio-review-alpha-chart-data "portfolio" "Sector"]}
;            13 {:title "Alpha by Rating"              :nav-request :alpha           :data-request [:get-portfolio-review-alpha-chart-data "portfolio" "RatingGroup"]}
;            14 {:title "MTD top contributors"         :nav-request :top-bottom      :data-request [:get-single-attribution "portfolio" "mtd"]}
;            15 {:title "MTD bottom contributors"      :nav-request :top-bottom      :data-request [:get-single-attribution "portfolio" "mtd"]}
;            16 {:title "YTD top contributors"         :nav-request :top-bottom      :data-request [:get-single-attribution "portfolio" "ytd"]}
;            17 {:title "YTD bottom contributors"      :nav-request :top-bottom      :data-request [:get-single-attribution "portfolio" "ytd"]}
;            18 {:title "Fund relative performance"    :nav-request :relative-perf   :data-request nil}
;            19 {:title "Jensen by Region"             :nav-request :jensen          :data-request [:get-portfolio-review-alpha-chart-data "portfolio" "Region"]}
;            20 {:title "Jensen by Country"            :nav-request :jensen          :data-request [:get-portfolio-review-alpha-chart-data "portfolio" "Country"]}
;            21 {:title "Jensen by Sector"             :nav-request :jensen          :data-request [:get-portfolio-review-alpha-chart-data "portfolio" "Sector"]}
;            22 {:title "Jensen by Rating"             :nav-request :jensen          :data-request [:get-portfolio-review-alpha-chart-data "portfolio" "RatingGroup"]}
;            })

(def maximum-page (count pages))
(def current-page (r/atom 0))

(defn go-to-page [n portfolio]
  (reset! current-page n)
  ;(println (replace {"portfolio" portfolio} (get-in pages [n :data-request])))
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
  [h-box :gap "20px" :align :center :children [[:img {:width "37px" :height "64px" :src "../assets/91-logo-green.png"}] [title :label (get-in pages [@current-page :title]) :level :level1]]])

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
                                         (g (get-in data [:beta :total])) "x with top contributors being "
               (get-in data [:beta :country-1]) " (" (g (get-in data [:beta :value-1])) "x), "
               (get-in data [:beta :country-2]) " (" (g (get-in data [:beta :value-2])) "x), and "
               (get-in data [:beta :country-3]) " (" (g (get-in data [:beta :value-3])) "x).")]]]]))

(defn contribution-or-alpha-chart [data]
  ;(println data)
    [box :class "subbody rightelement" :width standard-box-width :height standard-box-height
     :child
     [v-box :gap "40px" :class "element" :width "100%" :height "100%"
      :children
      [[heading-box]                                        ; [title :label (get-in pages [@current-page :title]) :level :level1]
       [oz/vega-lite (portfolio-vs-index-horizontal-bars data)]]]])

(defn top-contributors []
  (let [display (sort-by :Total-Effect (remove #(or (some #{(:Sector %)} ["Total"])
                                                         (= (subs (:Security %) 0 16) "Foreign Currency")
                                                         (= (subs (:Security %) 4 22) "Settlement Account"))
                                                    @(rf/subscribe [:single-portfolio-attribution/clean-table])))
        ttl (get-in pages [@current-page :title])]
    [box :class "subbody rightelement" :width standard-box-width :height standard-box-height
     :child
     [v-box :gap "10px" :class "element" :width "100%" :height "100%"
      :children
      [[heading-box]                                        ; [title :label ttl :level :level1]
       [:> ReactTable
        {:data                (take 20 (if (= (subs ttl 4 7) "top") (reverse display) display))
         :defaultFilterMethod tables/case-insensitive-filter
         :columns             [
                               {:Header "Bond  " :columns (mapv tables/attribution-table-columns [:security :country :sector])}
                               {:Header "Effect" :columns (mapv tables/attribution-table-columns [:total-effect])}
                               {:Header "Contribution" :columns (mapv tables/attribution-table-columns [:contribution :bm-contribution])}
                               {:Header "Weight" :columns (mapv tables/attribution-table-columns [:xs-weight :weight :bm-weight])}
                               ;{:Header "Additional information" :columns (mapv tables/attribution-table-columns (concat additional-des-cols [:code :rating]))}
                               ]
         :showPagination      false
         :sortable            false
         :filterable          false
         :pageSize            20
         :className           "-striped -highlight"
         }]]]]
    ))

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
      [[heading-box]                                        ; [title :label (get-in pages [@current-page :title]) :level :level1]
       [oz/vega-lite (charting/backtest-chart
                       (take-last days (get-in dates [(line :frequency)]))
                       (take-last days (get-in data [:portfolio-value (line :frequency)]))
                       (- standard-box-width-nb 200) (- standard-box-height-nb 300))]]]]))


(defn active-home []
  (let [active-tab @(rf/subscribe [:portfolio-review/active-tab])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-tab
      :summary                       [summary-text]
      :contribution                  [contribution-or-alpha-chart @(rf/subscribe [:portfolio-review/contribution-chart-data])]
      :alpha                         [contribution-or-alpha-chart @(rf/subscribe [:portfolio-review/alpha-chart-data])]
      :top-bottom                    [top-contributors]
      :jensen                        [contribution-or-alpha-chart @(rf/subscribe [:portfolio-review/jensen-chart-data])]
      :backtest-history                          [backtest-history]
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
