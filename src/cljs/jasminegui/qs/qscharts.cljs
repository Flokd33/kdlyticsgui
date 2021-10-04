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

(defn quant-isin-history-chart [cheapness? spread? universe? historical? rating?]
  (let [data @(rf/subscribe [:quant-model/isin-history])]
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :title   nil                                           ;(str @(rf/subscribe [:single-bond-trade-history/bond]) " trading history")
     :data    {:values data :format {:parse {:Date "date:'%Y%m%d'" :HRS_legacy "quantitative" :REH_legacy "quantitative" :HCS "quantitative" :URS_legacy "quantitative" :Median_Rating "quantitative"}}}
     :vconcat (remove nil? [
                            (if cheapness?
                              {:mark "line" :width 800 :height 400
                               :encoding {:x {:field "Date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y {:field "REH_legacy" :type "quantitative" :axis {:title "Cheapness (bps)"}}}})
                            (if spread?
                              {:mark "line" :width 800 :height 400
                               :encoding {:x {:field "Date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y {:field "HCS" :type "quantitative" :axis {:title "Z-spread"}}}})
                            (if universe?
                              {:mark "line" :width 800 :height 400
                               :encoding {:x {:field "Date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y {:field "URS_legacy" :type "quantitative" :axis {:title "Universe"}}}})
                            (if historical?
                              {:mark "line" :width 800 :height 400
                               :encoding {:x {:field "Date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y {:field "HRS_legacy" :type "quantitative" :axis {:title "Historical"}}}})
                            (if rating?
                              {:mark "line" :width 800 :height 400
                               :encoding {:x {:field "Date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                                          :y {:field "Median_Rating" :type "quantitative" :scale {:domain [(dec (apply min (map :Median_Rating data))) (inc (apply max (map :Median_Rating data)))]} :axis {:title "Rating"}}}})
                            ])}))

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
                                 :color   {:field "field" :scale {:domain (keys color-domain-scale) :range (vals color-domain-scale)} :legend {:labelFontSize 14 :title nil}}
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
   :width  1000
   :height 500}

  )