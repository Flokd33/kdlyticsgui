(ns kdlyticsgui.chart
  (:require [re-frame.core :as rf])
  (:require [kdlyticsgui.static :as static]))
;
;
;(defn backtest-chart [portfolio-dates portfolio-value benchmark-value width height]
;  (let [pv (mapv (fn [a b] {:date a :price (* 100 b) :category "Portfolio"}) portfolio-dates portfolio-value)
;        bv (if benchmark-value (mapv (fn [a b] {:date a :price (/ b (last benchmark-value) 0.01) :category "Benchmark"}) portfolio-dates benchmark-value) [])
;        data (concat pv (take-last 125 bv))                 ;super hacky - for portfolio review - as indices have carry
;        ymin (* 0.99 (apply min (map :price data)))
;        ymax (* 1.01 (apply max (map :price data)))]
;    {:$schema "https://vega.github.io/schema/vega-lite/v5.json",
;     :title   nil
;     :width   (if benchmark-value (- width 75) width)             ; 75 for the legend
;     :height  height
;     :data    {:values data :format {:parse {:date "date:'%Y-%m-%d'" :price "number" :benchmark "number"}}}
;     :mark    "line",
;     :encoding
;              (merge {:x {:field "date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 14 :title nil} :sort "descending"}
;                      :y {:field "price" :type "quantitative" :scale {:domain [ymin ymax]} :axis {:labelFontSize 14 :title nil}}}
;                     (if benchmark-value
;                       {:color {:field "category" :legend {:title nil :labelFontSize 14} :scale {:domain ["Portfolio" "Benchmark"], :range ["#134848" "#009D80"]}}}))}))
;
;(defn r5 [x] (* 5 (int (/ (+ x 4) 5))))
;
;(defn return-histogram [returns width height]
;  (let [data (mapv (fn [x] {:return (* 100 x)}) returns)
;        absmax (r5 (Math/ceil (* 100 (apply max (map #(Math/abs %) returns)))))]
;    {:title    nil
;     :data     {:values data
;                :format {:type "json" :parse {:return "number"}}}
;     :encoding {:x {:bin {:step 0.5}
;                    :field "return"
;                    :type "quantitative"
;                    :scale {:domain [(- absmax), absmax]}
;                    :axis {:title nil
;                           :labelFontSize 14
;                           :values (vec (range (- absmax) (+ absmax 5) 0.5))
;                           :format ".1f"}}                           ;
;                :y {:aggregate "count" :type "quantitative" :axis {:title nil :labelFontSize 14}}}
;     :mark     "bar"
;     :width    width
;     :height   height}))
;
;(defn regression-output [portfolio-returns benchmark-returns alpha beta width height]
;  (let [data (mapv (fn [y x] {:portfolio (* 100 y)
;                              :benchmark (* 100 x)
;                              :predict   (* 100 (+ alpha (* beta x)))})
;                           portfolio-returns benchmark-returns)]
;    {:title    nil
;     :data     {:values data
;                :format {:type "json" :parse {:portfolio "number" :benchmark "number" :predict "number"}}}
;     :layer [{:mark {:type "point" :filled true}
;              :encoding {:x {:field "benchmark" :type "quantitative" :axis {:title nil :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}}
;                         :y {:field "portfolio" :type "quantitative" :axis {:title nil :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}}}}
;             {:mark {:type "line" :color "firebrick"}
;              :encoding {:x {:field "benchmark" :type "quantitative"}
;                         :y {:field "predict" :type "quantitative" :axis {:title nil :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}}}}
;             {:mark {:type "rule", :color "green", :strokeDash [10 10]},
;              :encoding {:x {:datum -2.5, :type "quantitative"}, :y {:datum -2.5, :type "quantitative"}, :x2 {:datum 2.5, :type "quantitative"}, :y2 {:datum 2.5, :type "quantitative"}}}]
;     :width width :height height}))
;
;(def performance-colors ["#134848" "#009D80" "#FDAA94" "#74908D" "#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E"])
;(def esg-colors ["#134848" "#009D80" "#FDAA94" "#74908D" "#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E" "#C87A1B" "#0A3323" "#9A293D"]) ; based on 13 sectors
;(def chart-text-size 12)
;(def standard-box-width "1600px")
;(def standard-box-height "1024px")
;(def standard-box-width-nb 800)
;(def standard-box-height-nb 600)
;
;(defn stacked-vertical-bars [rt-pivot-data title]
;  (let [grp (group-by #(get % "_pivotVal") rt-pivot-data)
;        xfields (remove #(= % "_pivotVal") (keys (first rt-pivot-data)))
;        colors (take (count (keys grp)) performance-colors)
;        new-data (into [] (for [g (keys grp) x xfields] {:ygroup g :xgroup (t/gdate->ddMMMyy (t/int->gdate x)) :value (get (first (grp g)) x)}))]
;      {:$schema  "https://vega.github.io/schema/vega-lite/v5.json",
;     :data     {:values new-data},
;     :width    (* 35 (count colors)) :height 500
;     :mark     "bar"
;     :encoding {:column  {:field  "xgroup" :type "nominal" :title nil
;                          :header {:orient "bottom" :labelFontSize chart-text-size},
;                          :sort   (mapv #(t/gdate->ddMMMyy (t/int->gdate %)) (sort xfields))}
;                :x       {:field "ygroup" :type "nominal" :axis {:title nil :labels false}}
;                :y       {:field "value", :type "quantitative", :axis {:title nil :labelFontSize chart-text-size}}
;                :tooltip [{:field "xgroup" :type "nominal"} {:field "ygroup" :type "nominal"} {:field "value" :type "quantitative"}]
;                :color   {:field "ygroup", :type "nominal", :scale {:domain (keys grp) :range colors} :legend {:title "Group"}}}}))
;
;
;(defn stacked-vertical-bars-esg [rt-pivot-data field-pivot field-chart pivot ]
;  (let [country_codes @(rf/subscribe [:country-codes])
;        country_codes-indexed (zipmap (map :CountryCode country_codes) country_codes)
;        data-sorted (reverse (sort-by :val (for [m rt-pivot-data] {:field (first (vals m)) :val (second (vals m))})))
;        data-clean (if (= pivot "country") (take 15 data-sorted) data-sorted)
;        data-adjusted (if (= "emissions_evic" (subs field-chart 0 14) ) (map (fn [x] (update x :val * 1000000)) data-clean) data-clean)
;        data_final (if (= pivot "country") (map #(assoc % :field (:LongName (get country_codes-indexed (:field %)))) data-adjusted) data-adjusted)
;        xfields (map :field data_final)    ;(map #(get % "_pivotVal") rt-pivot-data)
;        yfields (map :val data_final)
;        colors (take (count xfields) esg-colors)
;        ]
;    {:$schema  "https://vega.github.io/schema/vega-lite/v5.json"
;     :title {:text (str field-chart " per " field-pivot) :fontSize 20}
;     :data     {:values data_final}
;     :width 1000
;     :height 600
;     :mark "bar"
;     :encoding {:x       {:field "field" :type "nominal" :axis {:title (clojure.string/capitalize field-pivot) :labels xfields :labelFontSize 15 :titleFontSize 15} :sort {:field "val" :order "descending"} }
;                :y       {:field "val", :type "quantitative" :axis {:title field-chart :labels yfields :labelFontSize 15 :titleFontSize 15}}
;                :tooltip [{:field "field" :type "nominal" :title field-pivot} {:field "val" :type "quantitative" :title field-chart :titleFontSize 15 :format ",.0f"}] ;mils ",.2s"
;                :color   {:field "field", :type "nominal", :scale {:domain xfields :range colors} :legend {:title (clojure.string/capitalize field-pivot) :labelFontSize 15 :titleFontSize 15}}
;                }}
;    ))
;
;(defn scatter-esg [raw-data pivot show-tickers]
;  (let [data-raw-clean (if (= pivot "no")
;                         raw-data
;                         (for [f (flatten (for [t raw-data] (get t "_subRows")))] (get f "_original") ))
;        data-clean (map (fn [x] (update x "emissions_evic_1_2" * 1000000)) data-raw-clean)
;        second-mark (if show-tickers
;                      {:mark     {:type "text" :dx 10 :align "left"}
;                       :encoding {:x       {:field "amt_carbon_intensity_1_2" :type "quantitative" :scale {:zero false} :axis {:title "Intensity" :labelFontSize 15 :titleFontSize 15}}
;                                  :y       {:field "emissions_evic_1_2" :type "quantitative" :scale {:zero false} :axis {:title "Footprint" :labelFontSize 15 :titleFontSize 15}}
;                                  :text    {:field "Ticker" :type "nominal"}
;                                  }}
;                      nil
;                      )
;        ]
;    {:$schema  "https://vega.github.io/schema/vega-lite/v5.json",
;     :data     {:values data-clean}
;     :title {:text "Footprint/Intensity - Scope 1 and 2 " :fontSize 20}
;     ;:params {:name "grid" :select "interval" :bind "scales"}
;     :width    1000
;     :height   800
;     :layer (remove nil? (concat [{:selection {:grid {:type "interval" :bind "scales"}}
;              :mark     {:opacity 0.5 :type "circle" }
;              :encoding {:x       {:field "amt_carbon_intensity_1_2" :type "quantitative" :scale {:zero false} :axis {:title "Intensity" :labelFontSize 15 :titleFontSize 15}}
;                         :y       {:field "emissions_evic_1_2" :type "quantitative" :scale {:zero false} :axis {:title "Footprint" :labelFontSize 15 :titleFontSize 15}}
;                         :text    {:field "Ticker" :type "nominal"}
;                         ;:shape   {:field "method_cat_scope_1", :type "nominal" :legend {:title "Method" :labelFontSize 15 :titleFontSize 15}} ;method_cat_scope_1
;                         :color   {:field "sector", :type "nominal" :scale {:range esg-colors} :legend {:title "Sector" :labelFontSize 15 :titleFontSize 15}}
;                         :size   {:field "amt_carbon_emissions_1_2" :type "quantitative" :legend {:title "Emissions" :labelFontSize 15 :titleFontSize 15}}
;                         :tooltip [{:field "Ticker" :type "nominal" :title "Ticker"} {:field "sector" :type "nominal" :title "Sector"}
;                                   {:field "cat_scope_1_method" :type "nominal" :title "Method Scope 1"}
;                                   {:field "cat_scope_2_method" :type "nominal" :title "Method Scope 2"}
;                                   {:field "amt_carbon_emissions_1_2" :type "quantitative" :title "Emissions" :format ",.2s"}
;                                   {:field "amt_carbon_intensity_1_2" :type "quantitative" :title "Intensity" :format ",.0f"}
;                                   {:field "emissions_evic_1_2" :type "quantitative" :title "Footprint" :format ",.0f"}
;                                   ]
;                         }
;              }
;             second-mark
;             ]))
;     }
;    ))
;
;(defn stacked-vertical-bars-2 [data title]
;  (let [new-data (->> (sort-by :date data)
;                      (map #(update % :weight * 100))
;                      (map #(assoc % :date-mmm-yy ((comp t/gdate->MMM-yy t/int->gdate :date) %)))) ]
;    {:$schema  "https://vega.github.io/schema/vega-lite/v5.json",
;     :data     {:values new-data},
;     :width    800
;     :height   400
;     :encoding {:x       {:field "date-mmm-yy" :type "nominal" :axis {:title nil :labelFontSize 15} :sort {:field "date"}}}
;     :layer [{:mark      {:type "bar" :color "#134848"}
;              :encoding {:y       {:field "original-quantity" :type "quantitative" :axis {:title "Nominal" :format ",.2s" :labelFontSize 15 :titleFontSize 15 :titleColor "#134848"}}}}
;              {:mark     {:type "line" :color "#D83949"}
;               :encoding {:y       {:field "weight" :type "quantitative" :axis {:title "Weight %" :labelFontSize 15 :titleFontSize 15 :titleColor "#D83949"}}}}]
;     :resolve {:scale {:y "independent" }}}))
;
;(defn stacked-vertical-bars-3 [data-weight data-price title]
;  (let [new-data (->> data-weight
;                      (map #(update % :weight * 100))
;                      (map #(assoc % :price (:price (first (t/chainfilter {:date (t/gdate->yyyy-MM-dd (t/int->gdate (% :date)))} data-price)))))
;                      (map #(assoc % :date-mmm-yy ((comp t/gdate->MMM-yy t/int->gdate :date) %))))]
;    {:$schema  "https://vega.github.io/schema/vega-lite/v5.json",
;     :data     {:values new-data},
;     :width    800
;     :height   400
;     :encoding {:x       {:field "date-mmm-yy" :type "nominal" :axis {:title nil :labelFontSize 15} :sort {:field "date"}}}
;     :layer [{:mark      {:type "line" :color "#134848"}    ;#7F6EBC
;              :encoding {:y       {:field "price" :type "quantitative" :axis {:title "Price" :labelFontSize 15 :titleFontSize 15 :titleColor "#134848"}}}} ;#7F6EBC
;             {:mark     {:type "line" :color "#D83949"}
;              :encoding {:y       {:field "weight" :type "quantitative" :axis {:title "Weight %" :labelFontSize 15 :titleFontSize 15 :titleColor "#D83949"}}}}]
;     :resolve {:scale {:y "independent" }}}))
;
;

(def colors-risk ["#19A68C" "#E89687" "#B2A896" "#652043" "#392B5E" "#CF6F13" "#809A96" "#222222" "#DB4857" "#E8E5CE" "#FFB43D" "#004042" "#134848" "#009D80" "#FDAA94" "#74908D" "#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E" "#C87A1B" "#0A3323" "#9A293D"])
(defn add-colors [vec-map field colors] (map #(assoc %1 :color %2) (sort-by field > vec-map) colors))

(defn pie-chart-strategy [data title]
  (let [data-with-color (add-colors data :nav-eur-perc (cycle colors-risk))]
    {:$schema  "https://vega.github.io/schema/vega-lite/v5.json"
     :title {:text title :fontSize 20 :color "white"}
     :data  {:values data-with-color}
     :background "#1e1e1e"                                  ;DARK 200  1e1e1e

     :width 400 :height 350
     :encoding {:theta  {:field "nav-eur-perc" :type "quantitative" :stack true}}
     :layer [{:mark {:type "arc" :outerRadius 115}
            :encoding {:color {:field "color" :type "nominal" :scale nil :legend nil}
                       :order {:field "nav-eur-perc" :type "quantitative"}}}
           {:mark {:type "text" :radius 130 :size 14 :color "white"}
            :encoding {:text {:field "strategy" :type "nominal" }
                       :order {:field "nav-eur-perc" :type "quantitative"}}}
           {:mark {:type "text" :radius 80 :size 10 :fontWeight "bold"}
            :encoding {:text {:field "value-display" :type "nominal"}
                       :order {:field "nav-eur-perc" :type "quantitative"}}}
           ]})
  )

(defn bullet-chart-characteristic [data title]
  (let []
    {:$schema  "https://vega.github.io/schema/vega-lite/v5.json"
     :title {:text title :fontSize 20 :color "white" }
     :data  {:values data}
     :background "#1e1e1e"
     :facet {:row {:field "title" :type "ordinal" :header {:labelAngle 0 :title "" :labelColor "white"}} }
     :spacing 10
     :spec {:encoding {:x  {:type "quantitative" :scale {:nice false} :title ""}}
            :layer [{:mark {:type "bar" :color "#eee"}
                     :encoding {:x {:field "ranges[2]"}}}
                    {:mark {:type "bar" :color "#ddd"}
                     :encoding {:x {:field "ranges[1]"}}}
                    {:mark {:type "bar" :color "#ccc"}
                     :encoding {:x {:field "ranges[0]"}}}

                    {:mark {:type "bar" :color "lightsteelblue" :size 10}
                     :encoding {:x {:field "measures[1]"}}}
                    {:mark {:type "bar" :color "steelblue" :size 10}
                     :encoding {:x {:field "measures[0]"}}}

                    {:mark {:type "tick" :color "black" :size 10}
                     :encoding {:x {:field "markers[0]"}}}
                    ]
            }
     :resolve {:scale {:x "independent"}}
     :config {:tick {:thickness 2} :scale {:barBandPaddingInner 0}}


     })

  )




;
;(defn mod-date [date]  (str (subs date 0 4) (subs date 5 7) (subs date 8 10) ))
;
;(defn bar-chart-countries [data field title]
;  {:$schema  "https://vega.github.io/schema/vega-lite/v5.json" :title {:text title :fontSize 20}
;   :data     {:values data} :width 1300 :height 600
;   :layer [{:mark {:type "bar":color "#4C3C84"}
;            :encoding {:x       {:field field :type "quantitative"  :axis {:title "%" :labelFontSize 15 :titleFontSize 15}}
;                       :y       {:field "asset", :type "nominal" :axis {:title "%" :labelFontSize 15 :titleFontSize 15} :sort {:field field :order "descending" :op "sum"}}
;                       :tooltip [{:field field :type "quantitative" :title "%" } {:field "asset" :type "nominal" :title "Country" }]}
;            }]}
;  )
;
;(defn bar-chart-rating [data title]
;  (let [data-renamed (mapv #(clojure.set/rename-keys % {:bb_ratings :BB :d_ratings :D :cc_ratings :CC :ccc_ratings :CCC :bbb_ratings :BBB :b_ratings :B :aaa_ratings :AAA :aa_ratings :AA :c_ratings :C :a_ratings  :A}) (flatten data))
;        data-reformat (vec (flatten (for [d data-renamed] (for [k d] {:date (d :date) :value (val k) :rating (name (key k))}))))
;        data-clean (t/chainfilter {:rating #(not (= % "date" )) } data-reformat)
;        ]
;    {:$schema  "https://vega.github.io/schema/vega-lite/v5.json" :title {:text title :fontSize 20}
;     :data     {:values data-clean} :width 1300 :height 600
;     :layer [{:mark {:type "bar":color "#4C3C84"}
;              :encoding {:x       {:field "date" :type "nominal"  :axis {:title "Date" :labelFontSize 15 :titleFontSize 15 :labelAngle -60 :labelLimit 0} }
;                         :y       {:field "value", :type "quantitative" :axis {:title "%" :labelFontSize 15 :titleFontSize 15} :scale {:domain [0 100]}}
;                         :color   {:field "rating" :type "nominal" :scale {:range ["#134848" "#009D80" "#FDAA94" "#74908D" "#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E"]}}
;                         :tooltip [{:field "date" :type "nominal" :title "Date" }{:field "rating" :type "nominal" :title "Rating"}{:field "value" :type "quantitative" :title "%"}]
;                         }
;              }]}
;    )
;  )
;
;
;(defn bar-chart-duration [data-raw color title]
;  (let [data-duration-clean (for [d data-raw] (assoc d :diff (- (:duration d) (:benchmark d))))
;        data-duration-clean-filtered (t/chainfilter {:date #(> (t/int->gdate (js/parseInt (mod-date %))) (t/int->gdate 20160929))} data-duration-clean) ;; no BM data before Sept 16'. (->> data-weight
;        ]
;    {:$schema  "https://vega.github.io/schema/vega-lite/v5.json"
;     :title {:text title :fontSize 20}
;     :data     {:values data-duration-clean-filtered}
;     :width 1500 :height 600
;     :layer [{:mark {:type "bar" :color color}
;              :encoding {:x       {:field "date" :type "temporal"  :axis {:title "Date" :labelFontSize 15 :titleFontSize 15 :labelAngle -60 :labelLimit 0 :format "%b-%y"}}
;                         :y       {:field "diff", :type "quantitative" :axis {:title "Net allocation vs CEMBI" :labelFontSize 15 :titleFontSize 15}}
;                         :tooltip [{:field "date" :type "temporal" :title "Date" } {:field "diff" :type "quantitative" :title "diff" }
;                                   {:field "duration" :type "quantitative" :title "Funds" } {:field "benchmark" :type "quantitative" :title "BM" }]}}
;             {:mark {:type "rule"}
;              :encoding {:y       {:field "diff", :type "quantitative" :aggregate "mean"}
;                         :color {:value "#C33345"}
;                         :size {:value 3}}}]}))
;
;(defn bar-chart-cash [data-raw color title]
;  (let []
;    {:$schema  "https://vega.github.io/schema/vega-lite/v5.json"
;     :title {:text title :fontSize 20}
;     :data     {:values data-raw}
;     :width 1500 :height 600
;     :layer [{:mark {:type "bar" :color color}
;              :encoding {:x       {:field "date" :type "temporal" :axis {:title "Date" :labelFontSize 15 :titleFontSize 15 :labelAngle -60 :labelLimit 0 :format "%b-%y"}}
;                         :y       {:field "cash", :type "quantitative" :axis {:title "% Cash" :labelFontSize 15 :titleFontSize 15}}
;                         :tooltip [{:field "date" :type "temporal" :title "Date" } {:field "cash" :type "quantitative" :title "% cash" }]}}
;             {:mark {:type "rule"}
;              :encoding {:y       {:field "cash", :type "quantitative" :aggregate "mean"}
;                         :color {:value "#C33345"}
;                         :size {:value 3}}}]}))

(defn line-chart-price-simple [data]
  (let []
    {:$schema  "https://vega.github.io/schema/vega-lite/v5.json"
     :title    {:text @(rf/subscribe [:price-history/name]) :fontSize 15}
     :width    1000
     :height   400
     :data     {:values data :format {:parse {:date "date:'%Y-%m-%d'" :price "number"}}}
     :mark     "line"
     :selection {:grid {:type "interval" :bind "scales"}}
     :encoding {:y  {:field "close" :type "quantitative" :axis {:title "Price" :titleFontSize 14 :labelFontSize 12} :scale {:domain [(dec (apply min (map :close data))) (inc (apply max (map :close data)))]}}
                :x  {:field "date" :type "temporal" :axis {:title "Date" :titleFontSize 14 :labelFontSize 12 :format "%b-%y" }  :sort "ascending"}
                :tooltip [{:field "date" :type "temporal", :title "Date"}
                          {:field "close" :type "quantitative" :title "Close price"}]
                ;:color {:field "Bond" :type "nominal" :scale {:range ["#134848" "#FDAA94"]}}
                }}))


(defn line-chart-price-hover [data]
  "2 marks: line, circle"
  (let []
    {:$schema  "https://vega.github.io/schema/vega-lite/v5.json"
     :title    {:text @(rf/subscribe [:price-history/name]) :fontSize 15} :width 1000  :height 400
     :data     {:values data :format {:parse {:date "date:'%Y-%m-%d'" :price "number"}}}
     :encoding {:x  {:field "date" :type "temporal" :axis {:title "Date" :titleFontSize 14 :labelFontSize 12 :format "%b-%y" }  :sort "ascending"}
                :y  {:field "close" :type "quantitative" :axis {:title "Price" :titleFontSize 14 :labelFontSize 12} :scale {:domain [(dec (apply min (map :close data))) (inc (apply max (map :close data)))]}}}
     :layer [{:mark     "line" :selection {:grid {:type "interval" :bind "scales"}}}
             {:mark     {:type "circle" }
              :encoding {:opacity {:condition {:test {:param "hover" :empty false} :value 1} :value 0}
                         :size {:condition {:test {:param "hover" :empty false} :value 100} :value 0}
                         :tooltip [{:field "date" :type "temporal", :title "Date"} {:field "close" :type "quantitative" :title "Close price"}]
                         :color {:value "#4dfffc"}
                         }
              :params [{:name "hover" :select {:type "point" :fields ["date"] :nearest true :on "mouseover" :clear "mouseout"}}]}
             ]
     }))




