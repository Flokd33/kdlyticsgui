(ns jasminegui.charting
  (:require [jasminegui.tools :as t])
  (:require [jasminegui.static :as static]))

;
;;(def five-color-scale [(:Sea100 static/emcd-colors) (:Sky100 static/emcd-colors) (:Sea80 static/emcd-colors) (:Sky80 static/emcd-colors) (:Sea60 static/emcd-colors)])
;(def five-color-scale ["#ffa07a" (:Sea100 static/emcd-colors) (:Sky100 static/emcd-colors) (:Sea80 static/emcd-colors) (:Sky80 static/emcd-colors)])
;
;(defn performance-bar-chart [trade lyk width height]
;  {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
;   :title   (str (if (= lyk :ltd) "LTD" "YTD") " performance comparison (%)")
;   :width   width
;   :height  height
;   :data
;            {:values
;             [{:instrument (:NAME trade) :performance (* 100 (if (= lyk :ltd) (:ltd-return trade) (:ytd-return trade)))}
;              {:instrument "CEMBI" :performance (* 100 (if (= lyk :ltd) (:cembi-return-ltd trade) (:cembi-return-ytd trade)))}
;              {:instrument "Rating" :performance (* 100 (if (= lyk :ltd) (:cembi-rating-return-ltd trade) (:cembi-rating-return-ytd trade)))}
;              {:instrument "Country" :performance (* 100 (if (= lyk :ltd) (:cembi-country-return-ltd trade) (:cembi-country-return-ytd trade)))}
;              {:instrument "Sector" :performance (* 100 (if (= lyk :ltd) (:cembi-sector-return-ltd trade) (:cembi-sector-return-ytd trade)))}
;              ]},
;   :encoding
;            {:x     {:field "instrument" :type "ordinal" :sort [(:NAME trade) "CEMBI" "Rating" "Country" "Sector"] :axis {:title nil}},
;             :y     {:field "performance" :type "quantitative" :axis {:title nil}}
;             :color {:field "instrument" :type "nominal" :sort [(:NAME trade) "CEMBI" "Rating" "Country" "Sector"] :scale {:range five-color-scale} :legend nil}}
;   :layer   [{:mark "bar"}
;             {:mark {:type "text" :align "top" :baseline "middle" :dx -10 :dy -10} :encoding {:text {:field "performance" :type "quantitative" :format ".1f"}}}]
;   })
;
;
;
;(defn reshape-history-for-vega [data]
;  (let [ks (keys (dissoc (last data) :date))
;        f (fn [x] (map (fn [y] {:date (:date x) :symbol (name y) :return (x y)}) ks))]
;    (apply concat (map f data))))
;
;(defn performance-history-chart [trade source-data lyk width height]
;  (let [data (reshape-history-for-vega source-data)
;        ymin (* 0.99 (apply min (map :return data)))
;        ymax (* 1.01 (apply max (map :return data)))
;        ]
;    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
;     :title (str (if (= lyk :ltd) "LTD" "YTD") " performance history")
;     :width width
;     :height height
;     :data {:values data :format {:parse {:date "date:'%Y%m%d'" :return "quantitative"}}}
;     :mark "line",
;     :encoding
;              {:x 	   {:field "date"  :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
;               :y     {:field "return" :type "quantitative"  :scale {:domain [ymin ymax]}  :axis {:title nil}}
;               :color {:field "symbol"
;                       :type "nominal"
;                       :sort [(:NAME trade) (get-in trade [:indices :main]) (get-in trade [:indices :rating]) (get-in trade [:indices :country]) (get-in trade [:indices :sector])]
;                       :scale {:range five-color-scale}}}}))
;
;(defn price-history-with-triggers-chart [trade data width height]
;  (let [relval-price (get-in trade [:relval-alert :implied-price])
;        target-price (get-in trade [:target-alert :implied-price])
;        review-price (get-in trade [:review-alert :implied-price])
;        range (remove nil? (concat (mapv (keyword (:NAME trade)) data) [relval-price target-price review-price]))
;        ymin (- (apply min range) 2)
;        ymax (+ (apply max range) 2)]
;    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
;     :title   (str (:NAME trade) " trade history vs triggers")
;     :width   width
;     :height  height
;     :data    {:values data :format {:parse {:date "date:'%Y%m%d'" :return "quantitative"}}}
;     :layer   [{:mark "line" :encoding {:x {:field "date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}} :y {:field (:NAME trade) :type "quantitative" :scale {:domain [ymin ymax]} :axis {:title nil}}}}
;               {:mark {:type "rule" :color "red"} :data {:values {:y review-price}} :encoding {:y {:field "y"}}}
;               {:mark {:type "rule" :color "green"} :data {:values {:y relval-price}} :encoding {:y {:field "y"}}}
;               {:mark {:type "rule" :color "yellow"} :data {:values {:y target-price}} :encoding {:y {:field "y"}}}
;               {:mark {:type "text" :dx -20 :dy -15} :data {:values [{:label "review" :price review-price :dt (:date (last data))}] :format {:parse {:dt "date:'%Y%m%d'" :price "quantitative"}}} :encoding {:y {:field "price" :type "quantitative"} :x {:field "dt" :type "temporal"} :text {:field "label" :type "nominal"}}}
;               {:mark {:type "text" :dx -20 :dy -15} :data {:values [{:label "relval" :price relval-price :dt (:date (last data))}] :format {:parse {:dt "date:'%Y%m%d'" :price "quantitative"}}} :encoding {:y {:field "price" :type "quantitative"} :x {:field "dt" :type "temporal"} :text {:field "label" :type "nominal"}}}
;               {:mark {:type "text" :dx -20 :dy -15} :data {:values [{:label "price" :price target-price :dt (:date (last data))}] :format {:parse {:dt "date:'%Y%m%d'" :price "quantitative"}}} :encoding {:y {:field "price" :type "quantitative"} :x {:field "dt" :type "temporal"} :text {:field "label" :type "nominal"}}}
;               ]}))

(defn backtest-chart [portfolio-dates portfolio-value benchmark-value width height]
  (let [pv (mapv (fn [a b] {:date a :price (* 100 b) :category "Portfolio"}) portfolio-dates portfolio-value)
        bv (if benchmark-value (mapv (fn [a b] {:date a :price (/ b (last benchmark-value) 0.01) :category "Benchmark"}) portfolio-dates benchmark-value) [])
        data (concat pv (take-last 125 bv))                 ;super hacky - for portfolio review - as indices have carry
        ymin (* 0.99 (apply min (map :price data)))
        ymax (* 1.01 (apply max (map :price data)))]
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :title   nil
     :width   (if benchmark-value (- width 75) width)             ; 75 for the legend
     :height  height
     :data    {:values data :format {:parse {:date "date:'%Y-%m-%d'" :price "number" :benchmark "number"}}}
     :mark    "line",
     :encoding
              (merge {:x {:field "date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 14 :title nil} :sort "descending"}
                      :y {:field "price" :type "quantitative" :scale {:domain [ymin ymax]} :axis {:labelFontSize 14 :title nil}}}
                     (if benchmark-value
                       {:color {:field "category" :legend {:title nil :labelFontSize 14} :scale {:domain ["Portfolio" "Benchmark"], :range ["#134848" "#009D80"]}}}))}))

(defn r5 [x] (* 5 (int (/ (+ x 4) 5))))

(defn return-histogram [returns width height]
  (let [data (mapv (fn [x] {:return (* 100 x)}) returns)
        absmax (r5 (Math/ceil (* 100 (apply max (map #(Math/abs %) returns)))))]
    ;(print "absmax" (apply max (map #(Math/abs %) returns)))
    {:title    nil
     :data     {:values data
                :format {:type "json" :parse {:return "number"}}}
     :encoding {:x {:bin {:step 0.5}
                    :field "return"
                    :type "quantitative"
                    :scale {:domain [(- absmax), absmax]}
                    :axis {:title nil
                           :labelFontSize 14
                           :values (vec (range (- absmax) (+ absmax 5) 0.5))
                           :format ".1f"}}                           ;
                :y {:aggregate "count" :type "quantitative" :axis {:title nil :labelFontSize 14}}}
     :mark     "bar"
     :width    width
     :height   height}))

(defn regression-output [portfolio-returns benchmark-returns alpha beta width height]
  (let [data (mapv (fn [y x] {:portfolio (* 100 y)
                              :benchmark (* 100 x)
                              :predict   (* 100 (+ alpha (* beta x)))})
                           portfolio-returns benchmark-returns)]
    {:title    nil
     :data     {:values data
                :format {:type "json" :parse {:portfolio "number" :benchmark "number" :predict "number"}}}
     :layer [{:mark {:type "point" :filled true}
              :encoding {:x {:field "benchmark" :type "quantitative" :axis {:title nil :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}}
                         :y {:field "portfolio" :type "quantitative" :axis {:title nil :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}}}}
             {:mark {:type "line" :color "firebrick"}
              :encoding {:x {:field "benchmark" :type "quantitative"}
                         :y {:field "predict" :type "quantitative" :axis {:title nil :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}}}}
             {:mark {:type "rule", :color "green", :strokeDash [10 10]},
              :encoding {:x {:datum -2.5, :type "quantitative"}, :y {:datum -2.5, :type "quantitative"}, :x2 {:datum 2.5, :type "quantitative"}, :y2 {:datum 2.5, :type "quantitative"}}}]
     :width width :height height}))

(def performance-colors ["#134848" "#009D80" "#FDAA94" "#74908D" "#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E"])
(def chart-text-size 12)
(def standard-box-width "1600px")
(def standard-box-height "1024px")
(def standard-box-width-nb 800)
(def standard-box-height-nb 600)

(defn stacked-vertical-bars [rt-pivot-data title]
  (let [grp (group-by #(get % "_pivotVal") rt-pivot-data)
        xfields (remove #(= % "_pivotVal") (keys (first rt-pivot-data)))
        colors (take (count (keys grp)) performance-colors)
        new-data (into [] (for [g (keys grp) x xfields] {:ygroup g :xgroup (t/gdate->ddMMMyy (t/int->gdate x)) :value (get (first (grp g)) x)}))]
    (println (mapv #(t/gdate->ddMMMyy (t/int->gdate %)) xfields))
    {:$schema  "https://vega.github.io/schema/vega-lite/v4.json",
     :data     {:values new-data},
     :width    (* 30 (count colors)) :height 400
     :mark     "bar"
     :encoding {:column  {:field  "xgroup" :type "nominal" :title nil
                          :header {:orient "bottom" :labelFontSize chart-text-size},
                          :sort   (mapv #(t/gdate->ddMMMyy (t/int->gdate %)) xfields)}
                :x       {:field "ygroup" :type "nominal" :axis {:title nil :labels false}}
                :y       {:field "value", :type "quantitative", :axis {:title nil :labelFontSize chart-text-size}}
                :tooltip [{:field "xgroup" :type "nominal"} {:field "ygroup" :type "nominal"} {:field "value" :type "quantitative"}]
                :color   {:field "ygroup", :type "nominal", :scale {:domain (keys grp) :range colors} :legend {:title "Group"}}}}))