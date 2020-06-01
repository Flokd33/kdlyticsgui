(ns jasminegui.charting
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

(defn backtest-chart [portfolio-dates portfolio-value width height]
  (let [data (mapv (fn [a b] {:date a :price (* 100 b)}) portfolio-dates portfolio-value)
        ymin (* 0.99 (apply min (map :price data)))
        ymax (* 1.01 (apply max (map :price data)))
        ]
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :title nil
     :width width
     :height height
     :data {:values data :format {:parse {:date "date:'%Y-%m-%d'" :return "quantitative"}}}
     :mark "line",
     :encoding
              {:x 	   {:field "date"  :type "temporal" :axis {:format "%b-%y", :labelFontSize 12 :title nil} :sort "descending"}
               :y     {:field "price" :type "quantitative"  :scale {:domain [ymin ymax]}  :axis {:labelFontSize 12 :title nil}}}}))
