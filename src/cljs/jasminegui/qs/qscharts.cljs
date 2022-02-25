(ns jasminegui.qs.qscharts
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink md-circle-icon-button selection-list modal-panel typeahead throbber
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.tools :as t]
    [cljs-time.core :as datecore]
    [reagent.core :as reagent]
    [reagent.core :as r]
    [oz.core :as oz]
    [goog.string :as gstring]
    [goog.string.format]
    [reagent-contextmenu.menu :as rcm]
    [jasminegui.qs.qstables :as qstables]
    )

  )

(defn spot-chart-vega-spec [model ratings issuers rating-curves-key]
  ;(println @(rf/subscribe [:quant-model/generic-rating-curves]))
  (let [raw-data (@(rf/subscribe [:quant-model/generic-rating-curves]) rating-curves-key)
        data (filter #(contains? ratings (:Rating %)) raw-data)                                       ;(filter #(< 3 (:Duration %) 10) raw-data)
        target (case model "Legacy" "predicted_spread_legacy" "New" "predicted_spread_new" "SVR" "predicted_spread_svr")
        ktarget (keyword target)
        bonds (filter #(contains? issuers (:Ticker %)) @(rf/subscribe [:quant-model/model-output]))
        bond-data (map #(select-keys % [:Bond :rule-max :rule-min :cheap :Used_Duration :Used_ZTW ktarget :Duration :Rating])
                       (map #(assoc %
                               :rule-max (max (ktarget %) (:Used_ZTW %))
                               :rule-min (min (ktarget %) (:Used_ZTW %))
                               :cheap (if (< (ktarget %) (:Used_ZTW %)) "cheap" "expensive"))
                            bonds))
        min-domain (max (dec (apply min (map :Used_Duration bond-data))) 0.)
        max-domain (min (inc (apply max (map :Used_Duration bond-data))) 25)
        rating-text-data (into [] (for [line (filter #(= (:Duration %) (Math/round (* 0.25 (+ min-domain max-domain)))) data)] {:Duration (:Duration line) :spread (ktarget line) :txt (qstables/get-implied-rating (str (:Rating line)))}))
        ]
    {:title  nil
     :data   {:values (concat bond-data data rating-text-data)}
     :layer  [
              {:selection {:grid {:type "interval" :bind "scales"}}
               :mark     {:type "line" :clip true}
               :encoding {:x     {:field "Duration" :type "quantitative" :axis {:title "Duration" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"} :scale {:domain [min-domain max-domain]}} ;:scale {:domain [0. 30.]}
                          :y     {:field target :type "quantitative" :axis {:title "Spread" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".0f"}}
                          :color {:field "Rating" :type "quantitative" :legend nil}}}
              {:mark     {:type "text" :dy -10}
               :encoding {:x     {:field "Duration" :type "quantitative"}
                          :y     {:field "spread" :type "quantitative"}
                          :text {:field "txt" :type "nominal"}}}
              {:mark     {:type "rule"}
               :encoding {:x       {:field "Used_Duration" :type "quantitative"}
                          :y       {:field "rule-min" :type "quantitative"}
                          :y2      {:field "rule-max" :type "quantitative"}
                          :color   {:field "cheap" :type "nominal" :scale {:domain ["cheap" "expensive"] :range ["#134848" "#FDAA94"]} :legend {:title nil :labelFontSize 14}}}}
              {:mark     {:type "point" :filled true}
               :encoding {:x     {:field "Used_Duration" :type "quantitative"} ;:scale {:domain [0. 30.]}
                          :y     {:field "Used_ZTW" :type "quantitative"}
                          :color {:value "black"}
                          :tooltip [{:field "Bond" :type "nominal" :title "Bond"}
                                    {:field "Used_Duration" :type "quantitative", :title "Duration"}
                                    {:field "Used_ZTW" :type "quantitative", :title "Spread"}
                                    {:field target :type "quantitative", :title "Model"}]}}
              {:mark     {:type "text" :dx 6 :align "left"}
               :encoding {:x     {:field "Used_Duration" :type "quantitative"} ;:scale {:domain [0. 30.]}
                          :y     {:field "Used_ZTW" :type "quantitative"}
                          :text {:field "Bond" :type "nominal"}}}

              ]
     :width  1000
     :height 625}))

(defn advanced-spot-chart-vega-spec [isins model ratings rating-curves-key]
  (let [raw-data (@(rf/subscribe [:quant-model/generic-rating-curves]) rating-curves-key)
        ;raw-data (if sov-only-2d @(rf/subscribe [:quant-model/rating-curves-sov-only]) @(rf/subscribe [:quant-model/rating-curves]))
        data (filter #(contains? ratings (:Rating %)) raw-data)                                       ;(filter #(< 3 (:Duration %) 10) raw-data)
        target (case model "Legacy" "predicted_spread_legacy" "New" "predicted_spread_new" "SVR" "predicted_spread_svr")
        ktarget (keyword target)
        bonds (filter #(contains? (set isins) (:ISIN %)) @(rf/subscribe [:quant-model/model-output]))
        bond-data (map #(select-keys % [:Bond :rule-max :rule-min :cheap :Used_Duration :Used_ZTW ktarget :Duration :Rating])
                       (map #(assoc %
                               :rule-max (max (ktarget %) (:Used_ZTW %))
                               :rule-min (min (ktarget %) (:Used_ZTW %))
                               :cheap (if (< (ktarget %) (:Used_ZTW %)) "cheap" "expensive"))
                            bonds))
        min-domain (max (dec (apply min (map :Used_Duration bond-data))) 0.)
        max-domain (min (inc (apply max (map :Used_Duration bond-data))) 25)
        rating-text-data (into [] (for [line (filter #(= (:Duration %) (Math/round (* 0.25 (+ min-domain max-domain)))) data)] {:Duration (:Duration line) :spread (ktarget line) :txt (qstables/get-implied-rating (str (:Rating line)))}))
        ]
    {:title  nil
     :data   {:values (concat bond-data data rating-text-data)}
     :layer  [
              {:selection {:grid {:type "interval" :bind "scales"}}
               :mark     {:type "line" :clip true}
               :encoding {:x     {:field "Duration" :type "quantitative" :axis {:title "Duration" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"} :scale {:domain [min-domain max-domain]}} ;:scale {:domain [0. 30.]}
                          :y     {:field target :type "quantitative" :axis {:title "Spread" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".0f"}}
                          :color {:field "Rating" :type "quantitative" :legend nil}}}
              {:mark     {:type "text" :dy -10}
               :encoding {:x     {:field "Duration" :type "quantitative"}
                          :y     {:field "spread" :type "quantitative"}
                          :text {:field "txt" :type "nominal"}}}
              {:mark     {:type "rule"}
               :encoding {:x       {:field "Used_Duration" :type "quantitative"}
                          :y       {:field "rule-min" :type "quantitative"}
                          :y2      {:field "rule-max" :type "quantitative"}
                          :color   {:field "cheap" :type "nominal" :scale {:domain ["cheap" "expensive"] :range ["#134848" "#FDAA94"]} :legend {:title nil :labelFontSize 14}}}}
              {:mark     {:type "point" :filled true}
               :encoding {:x     {:field "Used_Duration" :type "quantitative"} ;:scale {:domain [0. 30.]}
                          :y     {:field "Used_ZTW" :type "quantitative"}
                          :color {:value "black"}
                          :tooltip [{:field "Bond" :type "nominal" :title "Bond"}
                                    {:field "Used_Duration" :type "quantitative", :title "Duration"}
                                    {:field "Used_ZTW" :type "quantitative", :title "Spread"}
                                    {:field target :type "quantitative", :title "Model"}]}}
              {:mark     {:type "text" :dx 6 :align "left"}
               :encoding {:x     {:field "Used_Duration" :type "quantitative"} ;:scale {:domain [0. 30.]}
                          :y     {:field "Used_ZTW" :type "quantitative"}
                          :text {:field "Bond" :type "nominal"}}}

              ]
     :width  1000
     :height 625}))

;"selection": {
;              "series": {
;                         "type": "multi",
;                               "encodings": ["color"],
;                         "on": "click",
;                               "bind": "legend"
;                         }

(defn histogram-chart-vega-spec [isins target target-label exclude-outliers]
  (let [bonds (filter #(contains? (set isins) (:ISIN %)) @(rf/subscribe [:quant-model/model-output]))
        ktarget (keyword target)
        bond-data (sort-by ktarget (filter #(some? (% ktarget)) (map #(select-keys % [:Bond ktarget]) bonds)))
        nbonds (count bond-data)
        ntail (int (* nbonds (/ exclude-outliers 100.)))
        cut-bond-data (if (zero? nbonds) bond-data (drop ntail (drop-last ntail bond-data)))
        decimals (if (some #{target} ["ytd-return" "Used_YTW" "Used_Duration"]) ".2f" ".0f")]
    {:title  target-label
     :data   {:values cut-bond-data}
     :layer  [
              {:mark      {:type "bar"}                      ;:tooltip {:content "bin_maxbins_20_ytd_return"}
               :encoding  {:x       {:bin {:maxbins 20} :field target :type "quantitative" :axis {:title nil :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format decimals}} ;:scale {:domain [0. 30.]}
                           :y       {:aggregate "count" :axis {:title nil :labelFontSize 14 :tickMinStep 0.5 :format ".0f"}}
                           :color   {:value "#134848"}};:tooltip [{:field "datum.bin_maxbins_20_ytd_return"}]
               ;:selection {:series {:type "single" :on "click" :bind #(println %)}}
               }]
     :width  1000
     :height 625}))

(def select-values (comp vals select-keys))

(defn graph [field title key data] {:mark     "line" :width 1000 :height 400
                               :selection {:grid {:type "interval" :bind "scales"}}
                               :encoding {:x     {:field "date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y     {:field field :type "quantitative" :axis {:title title}
                                                  :scale {:domain [(dec (apply min (map key data))) (inc (apply max (map key data)))]}}
                                          :color {:field "Bond" :type "nominal"}}})

(defn quant-isin-history-chart [price? ytw? ztw? duration? rating? isin1 isin2 ticker1 ticker2 nb-bond choice-historical-graph]
  (let [mapping (into {(keyword isin1) (str ticker1) (keyword isin2) (str ticker2)})
        data-pricing @(rf/subscribe [:quant-model/history-result])
        data-pricing-1 (filter #(= (:ISIN %) isin1) data-pricing)
        data-pricing-2 (if (= nb-bond 2) (filter #(= (:ISIN %) isin2) data-pricing) nil)

        first-date-isin1-yyyymmdd-int (js/parseInt(.replace (.replace (str (get (first (sort-by :date data-pricing-1)) :date)) "-" "")"-" ""))
        first-date-isin2-yyyymmdd-int (js/parseInt(.replace (.replace (str (get (first (sort-by :date data-pricing-2)) :date)) "-" "")"-" ""))
        start-date-yyyymmdd-int (js/parseInt (t/gdate-to-yyyymmdd @(rf/subscribe [:quant-model/history-start-date])))

        data-pricing-all (if (= nb-bond 2) (concat data-pricing-1 data-pricing-2) data-pricing-1)
        by-date (group-by :date data-pricing-all)
        step1 (into [] (for [[d g] by-date] (let [h (sort-by :ISIN g)] {:date   d
                                                                        :price (- (:price (first h)) (:price (second h)))
                                                                        :ytw (- (:ytw (first h)) (:ytw (second h)))
                                                                        :ztw (- (:ztw (first h)) (:ztw (second h)))
                                                                        :duration (- (:duration (first h)) (:duration (second h)))
                                                                        :rating_score (- (:rating_score (first h)) (:rating_score (second h)))
                                                                        })))
        data-pricing-clean (sort-by :date step1)
        opposite (->> data-pricing-clean
                      (map #(update % :price (fn [x] (* -1 x))))
                      (map #(update % :ytw (fn [x] (* -1 x))))
                      (map #(update % :ztw (fn [x] (* -1 x))))
                      (map #(update % :duration (fn [x] (* -1 x))))
                      (map #(update % :rating_score (fn [x] (* -1 x)))))
        data-pricing-clean-final (if (= nb-bond 2)
                                      (case choice-historical-graph
                                        "relative1" data-pricing-clean
                                        "relative2" opposite
                                        "absolute" data-pricing-all)
                                      (filter #(= (:ISIN %) isin1) data-pricing-all))

        final-start-date (if (= nb-bond 2)
                              (max first-date-isin1-yyyymmdd-int first-date-isin2-yyyymmdd-int start-date-yyyymmdd-int)
                              (max first-date-isin1-yyyymmdd-int start-date-yyyymmdd-int))

        data-pricing-filtered (filter #(> (int (.replace (.replace (:date %) "-" "") "-" "")) final-start-date) data-pricing-clean-final)
        data-to-plot (for [e data-pricing-filtered] (assoc e :Bond (mapping (keyword (e :ISIN)))))
        ]
    (println start-date-yyyymmdd-int)
    (println first-date-isin1-yyyymmdd-int)
    (println first-date-isin2-yyyymmdd-int)
    (println final-start-date)
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :resolve {:scale {:color "independent"}}
     :title   nil
     :data    {:values data-to-plot :format {:parse {:Bond "nominal" :date "date:'%Y-%m-%d'" :ztw "quantitative" :ytw "quantitative" :duration "quantitative" :price "quantitative" :rating_score "quantitative"}}}
     :vconcat (remove nil? [(if price? (graph "price" "Price" :price data-to-plot))
                            (if ytw?(graph "ytw" "YTW" :ytw data-to-plot))
                            (if ztw? (graph "ztw" "ZTW" :ztw data-to-plot))
                            (if duration? (graph "duration" "Duration" :duration data-to-plot))
                            (if rating? (graph "rating_score" "Rating" :rating_score data-to-plot))])}))

(defn quant-isin-history-chart-prediction [show-2d? show-4d? isin1 isin2 ticker1 ticker2 nb-bond choice-historical-graph]
  (let [mapping (into {(keyword isin1) (str ticker1) (keyword isin2) (str ticker2)})
        data-pricing @(rf/subscribe [:quant-model/history-result])
        data-prediction @(rf/subscribe [:quant-model/history-result-prediction])
        data-pricing-1 (filter #(= (:ISIN %) isin1) data-pricing)
        data-pricing-2 (if (= nb-bond 2) (filter #(= (:ISIN %) isin2) data-pricing) nil)
        first-date-isin1-yyyymmdd-int (js/parseInt(.replace (.replace (str (get (first (sort-by :date data-pricing-1)) :date)) "-" "")"-" ""))
        first-date-isin2-yyyymmdd-int (js/parseInt(.replace (.replace (str (get (first (sort-by :date data-pricing-2)) :date)) "-" "")"-" ""))
        start-date-yyyymmdd-int (js/parseInt (t/gdate-to-yyyymmdd @(rf/subscribe [:quant-model/history-start-date])))
        data-prediction-1 (filter #(= (:ISIN %) isin1) data-prediction)
        data-prediction-2 (if (= nb-bond 2) (filter #(= (:ISIN %) isin2) data-prediction) nil)
        ;----------------------------------------------------ISIN1--------------------------------------------
        cheapness-one-2d (map #(- (:ztw %1) (:pred2d %2)) (sort-by :date (filter #(= (:ISIN %) isin1) data-pricing-1)) (sort-by :date (filter #(= (:ISIN %) isin1) data-prediction-1)))
        data-cheapness-one-2d (map #(assoc %1 :cheapness2D %2) data-prediction-1 cheapness-one-2d)
        cheapness-one-4d (map #(- (:ztw %1) (:pred4d %2)) (sort-by :date (filter #(= (:ISIN %) isin1) data-pricing-1)) (sort-by :date (filter #(= (:ISIN %) isin1) data-prediction-1)))
        data-cheapness-one-4d (map #(assoc %1 :cheapness4D %2) data-prediction-1 cheapness-one-4d)
        ;---------------------------------------------------ISIN2--------------------------------------------
        cheapness-two-2d (map #(- (:ztw %1) (:pred2d %2)) (sort-by :date (filter #(= (:ISIN %) isin2) data-pricing-2)) (sort-by :date (filter #(= (:ISIN %) isin2) data-prediction-2)))
        data-cheapness-two-2d (map #(assoc %1 :cheapness2D %2) data-prediction-2 cheapness-two-2d)
        cheapness-two-4d (map #(- (:ztw %1) (:pred4d %2)) (sort-by :date (filter #(= (:ISIN %) isin2) data-pricing-2)) (sort-by :date (filter #(= (:ISIN %) isin2) data-prediction-2)))
        data-cheapness-two-4d (map #(assoc %1 :cheapness4D %2) data-prediction-2 cheapness-two-4d)
        ;---------------------------------------------------AGGREGATE 2D and 4D--------------------------------------------
        cheapness-one (map #(assoc %1 :cheapness4D (:cheapness4D %2)) data-cheapness-one-2d data-cheapness-one-4d)
        cheapness-two (map #(assoc %1 :cheapness4D (:cheapness4D %2)) data-cheapness-two-2d data-cheapness-two-4d)
        ;---------------------------------------------------AGGREGATE ISIN1 and ISIN2 (if one)--------------------------------------------
        cheapness-all (if (= nb-bond 2) (concat cheapness-one cheapness-two) cheapness-one)
        ;------------------------------------------------------------------------------------------------

        by-date (group-by :date cheapness-all)
        step1 (into [] (for [[d g] by-date] (let [h (sort-by :ISIN g)] {:date   d
                                                                        :cheapness2D (- (:cheapness2D (first h)) (:cheapness2D (second h)))
                                                                        :cheapness4D (- (:cheapness4D (first h)) (:cheapness4D (second h)))})))
        ;step1 (into [] (for [[d g] by-date] (let [h (group-by :ISIN g)] {:date   d
        ;                                                                 :pred2d (- (:pred2d (h isin1)) (:pred2d (h isin2)))
        ;                                                                 :pred4d (- (:pred4d (h isin1)) (:pred4d (h isin2)))})))
        data-prediction-clean (sort-by :date step1)
        opposite (->> data-prediction-clean
                      (map #(update % :cheapness2D (fn [x] (* -1 x))))
                      (map #(update % :cheapness4D (fn [x] (* -1 x)))))
        data-prediction-clean-final (if (= nb-bond 2)
                                 (case choice-historical-graph
                                   "relative1" data-prediction-clean
                                   "relative2" opposite
                                   "absolute" cheapness-all)
                                 (filter #(= (:ISIN %) isin1) cheapness-all))

        final-start-date (if (= nb-bond 2)
                           (max first-date-isin1-yyyymmdd-int first-date-isin2-yyyymmdd-int start-date-yyyymmdd-int)
                           (max first-date-isin1-yyyymmdd-int start-date-yyyymmdd-int))

        data-prediction-filtered (filter #(> (int (.replace (.replace (:date %) "-" "") "-" "")) final-start-date) data-prediction-clean-final)
        data-to-plot (for [e data-prediction-filtered] (assoc e :Bond (mapping (keyword (e :ISIN)))))
        ]
    ;(println cheapness-all)
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :resolve {:scale {:color "independent"}}
     :title    nil
     :data    {:values data-to-plot :format {:parse {:Bond "nominal" :date "date:'%Y-%m-%d'" :cheapness2D "quantitative" :cheapness4D "quantitative"}}}
     :vconcat (remove nil? [(if show-2d? (graph "cheapness2D" "2D cheapness" :cheapness2D data-to-plot))
                            (if show-4d? (graph "cheapness4D" "4D cheapness" :cheapness4D data-to-plot))])}
    ))

(defn quant-isin-history-chart-curves [param nb-curve]
  (let [ nb nb-curve
        tenor-curve-1 (param :curve-one/tenor)
        tenor-curve-2 (param :curve-two/tenor)
        selection-curve-1 (param :curve-one/selection)
        selection-curve-2 (param :curve-two/selection)
        model-curve-1 (if (= (param :curve-one/type) :two-d-curves) "2D" "4D")
        model-curve-2 (if (= (param :curve-two/type) :two-d-curves) "2D" "4D")
        data-curve-1-raw @(rf/subscribe [:quant-model/history-result-curves-one])
        data-curve-2-raw @(rf/subscribe [:quant-model/history-result-curves-two])
        data-curve-1-enhanced (for [e data-curve-1-raw] (assoc e
                                                      :T2Y5Y (- (:T5Y e) (:T2Y e))
                                                      :T2Y10Y (- (:T10Y e) (:T2Y e))
                                                      :T2Y30Y (- (:T30Y e) (:T2Y e))
                                                      :T5Y10Y (- (:T10Y e) (:T5Y e))
                                                      :T5Y30Y (- (:T30Y e) (:T5Y e))
                                                      :T10Y30Y (- (:T30Y e) (:T10Y e))))
        data-curve-2-enhanced (for [e data-curve-2-raw] (assoc e
                                                      :T2Y5Y (- (:T5Y e) (:T2Y e))
                                                      :T2Y10Y (- (:T10Y e) (:T2Y e))
                                                      :T2Y30Y (- (:T30Y e) (:T2Y e))
                                                      :T5Y10Y (- (:T10Y e) (:T5Y e))
                                                      :T5Y30Y (- (:T30Y e) (:T5Y e))
                                                      :T10Y30Y (- (:T30Y e) (:T10Y e))))
        data-curve-1 (for [e data-curve-1-enhanced] (assoc e :Curve (str (if (= model-curve-1 "2D") (qstables/get-implied-rating (str selection-curve-1)) selection-curve-1) " " tenor-curve-1) :model-type model-curve-1 :tenor-choice (e  (keyword (str "T" tenor-curve-1)))))
        data-curve-2 (for [e data-curve-2-enhanced] (assoc e :Curve (str (if (= model-curve-2 "2D") (qstables/get-implied-rating (str selection-curve-2)) selection-curve-2) " " tenor-curve-2) :model-type model-curve-2 :tenor-choice (e  (keyword (str "T" tenor-curve-2)))))
        data-to-plot (if (= nb 2)  (concat data-curve-1 data-curve-2) data-curve-1 )
        ]
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :resolve {:scale {:color "independent"}}
     :title    nil
     :data    {:values data-to-plot :format {:parse {:Curve "nominal" :date "date:'%Y-%m-%d'" :tenor-choice "quantitative" }}}
     :vconcat [
                              {:mark "line" :width 1000 :height 400
                               :selection {:grid {:type "interval" :bind "scales"}}
                               :encoding {:x {:field "date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y {:field "tenor-choice" :type "quantitative" :axis {:title "Spread"}
                                              :scale {:domain [(dec (apply min (map :tenor-choice data-to-plot))) (inc (apply max (map :tenor-choice data-to-plot)))]}
                                              }
                                          :color {:field "Curve" :type "nominal" }}}
                            ]}
    ))

(defn stacked-vertical-bars [data colour-universe]
  (let [groups (distinct (mapv :group data))
        colors (take (count (distinct (mapv :group data))) colour-universe)
        new-data (mapv #(assoc %1 :order (.indexOf groups (:group %1))) data)]
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :data    {:values new-data},
     :width   800,
     :height  600,
     :layer
              [{:mark "bar",
                :scale {:padding-left 60}
                :encoding
                {:x     {:field "performance", :type "nominal",
                         :axis {:title nil :labelFontSize 12 :labelAngle 0}
                         :sort (distinct (mapv :performance data))
                         :scale {:paddingInner 0.5}},
                 :y     {:field "value", :type "quantitative", :axis {:title nil :labelFontSize 12}},
                 :order {:field "order", :type "quantitative"}
                 :color {:field "group", :type "nominal", :scale {:domain (distinct (map :group new-data)) :range colors} :legend nil}}}
               {:mark {:type "text" :fontSize 12 :color "white"},
                :encoding
                      {:x    {:field "performance", :type "nominal", :axis {:title nil}, :sort (distinct (mapv :performance data))},
                       :y    {:field "mid", :type "quantitative"},
                       :text {:field "group", :type "nominal"}}}]}))

(defn scatter-harvest-spec [data]
  {:title nil
   :data  {:values data}
   :transform [{:calculate "sin(datum.r1 * PI)", :as "x"} {:calculate "cos(datum.r1 * PI)", :as "y"} {:calculate "2 * sin(datum.r1 * PI)", :as "x2"} {:calculate "2 * cos(datum.r1 * PI)", :as "y2"}]
   :layer (concat [{:mark     {:type "point" :filled true}
                    :encoding {:x       {:field "d2" :type "quantitative" :axis {:title "2D: rating bucket" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}} ;:scale {:domain [0. (inc (apply max (map d2 data)))]}
                               :y       {:field "d4" :type "quantitative" :axis {:title "4D: curve fair value" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}}
                               :color   {:field "field" :scale {:domain ["Net value" "Positive value"] :range ["#FDAA94" "#026E62"]} :legend {:labelFontSize 14 :title nil}} ;"#134848" "#009D80" ""
                               :tooltip [{:field "txt" :type "nominal" :title "Item"}
                                         {:field "d2" :type "quantitative", :title "2D value"}
                                         {:field "d4" :type "quantitative", :title "4D value"}]}}]
                  [{:mark     {:type "text" :dx 6 :align "left"}
                    :encoding {:x    {:field "d2" :type "quantitative"}
                               :y    {:field "d4" :type "quantitative"}
                               :text {:field "txt" :type "nominal"}}}]
                  [{:mark "line"
                    :encoding {:x {:field "x" :type "quantitative"}
                               :y {:field "y" :type "quantitative"}
                               :order {:field "r1", :type "quantitative"}
                               :color {:value "lightgrey"}
                               }}]
                  [{:mark "line"
                    :encoding {:x {:field "x2" :type "quantitative"}
                               :y {:field "y2" :type "quantitative"}
                               :order {:field "r1", :type "quantitative"}
                               :color {:value "lightgrey"}
                               }}]
                  )
   :width  1000
   :height 500}
  )

(defn median-z-spread-error-bar [data]
  {:data  {:values (filter #(>= (:Used_Large_Rating_Score %) 1) data)},
   :facet {:row {:field "RatingGroup" :sort ["AAA" "AA" "A" "BBB" "BB" "B" "C"] :axis {:title nil} :header {:labelFontSize 11 :labelAngle 0 :labelAlign "left"}} }
   :spec  {:layer
           [{:mark   {:type "errorbar", :extent "iqr"},
             :width 1200
             :encoding {:x {:field "Used_ZTW", :type "quantitative", :scale {:zero false}  :axis {:title "Z-spread" :titleFontSize 11 :labelFontSize 11}},
                        :y {:field "duration-bucket", :type "ordinal" :sort ["0-3Y", "3-5Y", "5-7Y", "7-10Y", "10Y+"] :axis {:title nil :labelFontSize 11}}}}
            {:mark   {:type "point", :filled true, :color "black"},
             :width 1200
             :encoding {:x {:field "Used_ZTW", :type "quantitative", :aggregate "median" :axis {:title "Z-spread" :titleFontSize 11 :labelFontSize 11}},
                        :y {:field "duration-bucket", :type "ordinal" :sort ["0-3Y", "3-5Y", "5-7Y", "7-10Y", "10Y+"] :axis {:title nil}}}}]}}
  )

(defn fair-value-calculator-chart [data color-domain-scale show-bond-labels show-rating-curve rating-data]
  {:title  nil
   :data   {:values (concat data (if show-rating-curve rating-data))}
   :layer  (concat [{:selection {:grid {:type "interval" :bind "scales"}}
                     :mark      {:type "point" :filled true}
                     :encoding  {:x       {:field "duration" :type "quantitative" :axis {:title nil :labelFontSize 14 :tickMinStep 0.5 :format ".1f"} :scale {:domain [0. (inc (apply max (map :duration data)))]}}
                                 :y       {:field "spread" :type "quantitative" :axis {:title nil :labelFontSize 14 :tickMinStep 0.5 :format ".0f"}}
                                 :color   {:field "field" :scale {:domain (keys color-domain-scale) :range (vals color-domain-scale)} :legend nil} ; :legend {:labelFontSize 14 :title nil}
                                 :tooltip [{:field "txt" :type "nominal" :title "Bond"}
                                           {:field "duration" :type "quantitative", :title "Duration"}
                                           {:field "spread" :type "quantitative", :title "Spread"}]}}]
                   (if show-bond-labels
                     [{:mark     {:type "text" :dx 6 :align "left"}
                       :encoding {:x    {:field "duration" :type "quantitative"}
                                  :y    {:field "spread" :type "quantitative"}
                                  :text {:field "txt" :type "nominal"}}}])
                   (if show-rating-curve
                     [{:mark     {:type "line" :clip true}
                       :encoding {:x     {:field "Duration" :type "quantitative" :axis {:title "Duration" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"} :scale {:domain [0. (inc (apply max (map :duration data)))]}} ;:scale {:domain [0. 30.]}
                                  :y     {:field "predicted_spread_svr" :type "quantitative" :axis {:title "Spread" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".0f"}}
                                  :color {:field "Rating" :type "quantitative" :legend nil}}}])
                   )
   :width  1150
   :height 500}

  )