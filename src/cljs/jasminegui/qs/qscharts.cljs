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
    ;[tech.v3.dataset :as ds]
    )

  )

(def n91-color-palette (take 50 (cycle ["#134848" "#009D80" "#FDAA94" "#74908D" "#591739" "#0D3232" "#026E62" "#C0746D" "#54666D" "#3C0E2E"])))

(defn spot-chart-vega-spec-quant-model [model chart-type ratings issuers rating-curves-key]
  ;(println (ds/column-names @(rf/subscribe [:quant-model/model-output-ds])))
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
        ;bond-data (-> @(rf/subscribe [:quant-model/model-output-ds])
        ;              (ds/select-columns [:Ticker :Bond :Used_ZTW :Used_Duration ktarget :Duration])
        ;              (ds/filter-column :Ticker #(contains? issuers %))
        ;              (ds/column-map :rule-max #(max %1 %2) [ktarget :Used_ZTW])
        ;              (ds/column-map :rule-min #(min %1 %2) [ktarget :Used_ZTW])
        ;              (ds/column-map :cheap #(if (< %1 %2) "cheap" "expensive") [ktarget :Used_ZTW])
        ;              (ds/rows)
        ;              )
        min-domain (max (dec (apply min (map :Used_Duration bond-data))) 0.)
        max-domain (min (inc (apply max (map :Used_Duration bond-data))) 25)
        rating-text-data (into [] (for [line (filter #(= (:Duration %) (Math/round (* 0.25 (+ min-domain max-domain)))) data)] {:Duration (:Duration line) :spread (ktarget line) :txt (qstables/get-implied-rating (str (:Rating line)))}))
        ]
    {:title  nil
     :data   {:values (concat bond-data data rating-text-data)}
     :layer  [{:selection {:grid {:type "interval" :bind "scales"}}
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
                          :text {:field "Bond" :type "nominal"}}}]
     :width  1000
     :height 625}))

(defn spot-chart-vega-spec-spread-range [chart-type issuers]
  (let [bonds (filter #(contains? issuers (:Ticker %)) @(rf/subscribe [:quant-model/model-output]))
        bond-data (map #(select-keys % [:Bond :Used_Duration :Used_ZTW :z1ymin :z1ymax :Ticker]) bonds)
        min-domain (max (dec (apply min (map :Used_Duration bond-data))) 0.)
        max-domain (min (inc (apply max (map :Used_Duration bond-data))) 25)]
    {:title  nil
     :data   {:values bond-data}
     :layer  [{:mark      {:type "point" :filled true}
               :selection {:grid {:type "interval" :bind "scales"}}
               :encoding  {:x       {:field "Used_Duration" :type "quantitative" :axis {:title "Duration" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"} :scale {:domain [min-domain max-domain]}} ;:scale {:domain [0. 30.]}
                           :y       {:field :Used_ZTW :type "quantitative" :axis {:title "ZTW vs 1y range" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".0f"}}
                           :color   {:field "Ticker" :scale {:range n91-color-palette}}
                           :tooltip [{:field "Bond" :type "nominal" :title "Bond"}
                                     {:field "Used_Duration" :type "quantitative", :title "Duration"}
                                     {:field "Used_ZTW" :type "quantitative", :title "ZTW"}
                                     {:field "z1ymin" :type "quantitative", :title "1y tight"}
                                     {:field "z1ymax" :type "quantitative", :title "1y wide"}]}}
              {:mark     {:type "rule"}
               :encoding {:x       {:field "Used_Duration" :type "quantitative"}
                          :y       {:field "z1ymin" :type "quantitative"}
                          :y2      {:field "z1ymax" :type "quantitative"}
                          :color   {:field "Ticker" :scale {:range n91-color-palette}}}}
              {:mark     {:type "text" :dx 6 :align "left"}
               :encoding {:x    {:field "Used_Duration" :type "quantitative"} ;:scale {:domain [0. 30.]}
                          :y    {:field :Used_ZTW :type "quantitative"}
                          :text {:field "Bond" :type "nominal"}}}]
     :width  1000
     :height 625})
  )


(defn spot-chart-vega-spec [model chart-type ratings issuers rating-curves-key]
  (case chart-type
    :quant-model (spot-chart-vega-spec-quant-model model chart-type ratings issuers rating-curves-key)
    :ztw-1y-range (spot-chart-vega-spec-spread-range chart-type issuers)
    (let [bonds (filter #(contains? issuers (:Ticker %)) @(rf/subscribe [:quant-model/model-output]))
          bond-data (map #(select-keys % [:Bond :Used_Duration (if (= chart-type :yield) :Used_YTW :Used_Price) :Ticker]) bonds)
          min-domain (max (dec (apply min (map :Used_Duration bond-data))) 0.)
          max-domain (min (inc (apply max (map :Used_Duration bond-data))) 25)]
      {:title  nil
       :data   {:values bond-data}
       :layer  [{:mark      {:type "point" :filled true}
                 :selection {:grid {:type "interval" :bind "scales"}}
                 :encoding  {:x       {:field "Used_Duration" :type "quantitative" :axis {:title "Duration" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"} :scale {:domain [min-domain max-domain]}} ;:scale {:domain [0. 30.]}
                             :y       {:field (name (if (= chart-type :yield) :Used_YTW :Used_Price)) :type "quantitative" :axis {:title (name (if (= chart-type :yield) "YTW" "Price")) :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".0f"}}
                             :color   {:field "Ticker" :scale {:range n91-color-palette}}
                             :tooltip [{:field "Bond" :type "nominal" :title "Bond"}
                                       {:field "Used_Duration" :type "quantitative", :title "Duration"}
                                       {:field (name (if (= chart-type :yield) :Used_YTW :Used_Price)) :type "quantitative", :title (name (if (= chart-type :yield) "YTW" "Price"))}]}}
                {:mark     {:type "text" :dx 6 :align "left"}
                 :encoding {:x    {:field "Used_Duration" :type "quantitative"} ;:scale {:domain [0. 30.]}
                            :y    {:field (name (if (= chart-type :yield) :Used_YTW :Used_Price)) :type "quantitative"}
                            :text {:field "Bond" :type "nominal"}}}]
       :width  1000
       :height 625})
    ))

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
               :encoding {:x {:field "Duration" :type "quantitative"} :y {:field "spread" :type "quantitative"} :text {:field "txt" :type "nominal"}}}
              {:mark     {:type "rule"}
               :encoding {:x {:field "Used_Duration" :type "quantitative"} :y {:field "rule-min" :type "quantitative"} :y2 {:field "rule-max" :type "quantitative"}
                          :color   {:field "cheap" :type "nominal" :scale {:domain ["cheap" "expensive"] :range ["#134848" "#FDAA94"]} :legend {:title nil :labelFontSize 14}}}}
              {:mark     {:type "point" :filled true}
               :encoding {:x     {:field "Used_Duration" :type "quantitative"} :y     {:field "Used_ZTW" :type "quantitative"} :color {:value "black"}
                          :tooltip [{:field "Bond" :type "nominal" :title "Bond"}
                                    {:field "Used_Duration" :type "quantitative", :title "Duration"}
                                    {:field "Used_ZTW" :type "quantitative", :title "Spread"}
                                    {:field target :type "quantitative", :title "Model"}]}}
              {:mark     {:type "text" :dx 6 :align "left"}
               :encoding {:x     {:field "Used_Duration" :type "quantitative"} :y     {:field "Used_ZTW" :type "quantitative"} :text {:field "Bond" :type "nominal"}}}

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
        decimals (if (some #{target} ["ytd-return" "Used_YTW" "Used_Duration" "r1w-return" "r1m-return" "r1w-return"]) ".2f" ".0f")]
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

(defn graph
  "extras are things we add on any one chart as extra layers, can be lines, rectangles, etc."
  ([field title key data]
   {:mark      "line" :width 1000 :height 400
    :selection {:grid {:type "interval" :bind "scales"}}
    :encoding  {:x     {:field "date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                :y     {:field field :type "quantitative" :axis {:title title}
                        :scale {:domain [(dec (apply min (map key data))) (inc (apply max (map key data)))]}}
                :color {:field "Bond" :type "nominal" :scale {:range ["#134848" "#FDAA94"]}}}})
  ([field title key data extras]
   {:layer (vec (remove nil? (concat [(graph field title key data)] extras)))}))



(defn update-keyseq-to-opposite
  [coll keyseq]
  (map
    (fn [line] (reduce
                 (fn [m k] (update m k (fn [x] (* -1 x))))
                 line
                 keyseq))
    coll))




(defn quant-isin-history-chart-map [data start-date-yyyymmdd-int which? bond-isin-names choice extras]
  (let [two-bonds? (= (count (remove (comp nil? :bond) bond-isin-names)) 2)
        grp (group-by :ISIN data)                   ;faster than 2 filters
        data-pricing-1 (grp (:ISIN (first bond-isin-names)))
        data-pricing-2 (grp (:ISIN (second bond-isin-names)))
        first-date-isin1-yyyymmdd-int (js/parseInt (clojure.string/replace (if-let [x (first (sort (map :date data-pricing-1)))] x "0") "-" ""))
        first-date-isin2-yyyymmdd-int (js/parseInt (clojure.string/replace (if-let [x (first (sort (map :date data-pricing-2)))] x "0") "-" ""))
        by-date (group-by :date data)
        clean-by-date (if two-bonds? (into {} (for [[d v] by-date :when (= (count v) 2)] [d v])) by-date)
        final-data (cond
                     (not two-bonds?) data-pricing-1
                     (= choice "absolute") data
                     :else (let [data-pricing-clean (sort-by :date
                                                             (into [] (for [[d g] clean-by-date]
                                                                        (let [h (sort-by #(.indexOf (map :ISIN bond-isin-names) (:ISIN %)) g)]
                                                                          (reduce #(assoc %1 %2 (- (%2 (first h)) (%2 (second h)))) {:date d} (keys which?))))))]

                             (if(= choice "relative1")
                               data-pricing-clean
                               (update-keyseq-to-opposite data-pricing-clean (keys which?)))))
        final-start-date (max first-date-isin1-yyyymmdd-int first-date-isin2-yyyymmdd-int start-date-yyyymmdd-int) ;0 by default

        data-pricing-filtered (filter #(> (js/parseInt (clojure.string/replace (:date %) "-" "")) final-start-date) final-data)
        lbl (if two-bonds?                      ; for legend when a-b or b-a
              (case choice
                "relative1" (str (:bond (first bond-isin-names)) " - " (:bond (second bond-isin-names)))
                "relative2" (str (:bond (second bond-isin-names)) " - " (:bond (first bond-isin-names)))
                "absolute" "nthg")
              (:bond (first bond-isin-names)))
        mapping (into {} (for [line bond-isin-names] [(:ISIN line) (:bond line)]))
        data-to-plot (map (if
                            (and two-bonds? (= choice "absolute"))
                            #(assoc % :Bond (mapping (% :ISIN)))
                            #(assoc % :Bond lbl))
                          data-pricing-filtered)]
    ;(println data-pricing-1)
    {:$schema "https://vega.github.io/schema/vega-lite/v5.json",
     :resolve {:scale {:color "independent"}}
     :title   nil
     :data    {:values data-to-plot :format {:parse {:Bond "nominal" :date "date:'%Y-%m-%d'" :ztw "quantitative" :ytw "quantitative" :duration "quantitative" :price "quantitative" :rating_score "quantitative"}}}
     :vconcat (vec (->> [[:price "Price"] [:ytw "YTW"] [:ztw "ZTW"] [:duration "Duration"] [:rating_score "Rating"] [:cheapness2D "2D cheapness"] [:cheapness4D "4D cheapness"]]
                        (mapv #(if ((first %) which?) (graph (name (first %)) (second %) (first %) data-to-plot ((first %) extras))))
                        (remove nil?)))}))                  ;vec so it's not lazy

(def curve-type-mapping {:two-d-curves "2D" :four-d-sovereign-curves "4D" :two-d-curves-sovs "2DSov" :two-d-curves-corps "2DCorp"})

(defn quant-isin-history-chart-curves [param nb-curve start-date choice-curves serie-2 isin1 ticker1]
  (let [tenor-curve-1 (param :curve-one/tenor)
        tenor-curve-2 (param :curve-two/tenor)
        selection-curve-1 (param :curve-one/selection)
        selection-curve-2 (param :curve-two/selection)
        model-curve-1 (curve-type-mapping (param :curve-one/type))
        model-curve-2 (curve-type-mapping (param :curve-two/type))

        data-pricing (filter #(= (:ISIN %) isin1) @(rf/subscribe [:quant-model/history-result]))
        first-date-isin1-yyyymmdd-int (js/parseInt (clojure.string/replace (if-let [x (first (sort (map :date data-pricing)))] x "0") "-" ""))
        last-date-isin1-yyyymmdd-int (js/parseInt (clojure.string/replace (if-let [x (last (sort (map :date data-pricing)))] x "0") "-" ""))

        data-pricing-1 (map #(clojure.set/rename-keys % {:ztw :tenor-choice}) data-pricing) ; rename key to match curve data map
        data-pricing-2 (for [e data-pricing-1] (assoc e :Curve ticker1))  ; add identification key accordingly to curve map...

        data-curve-1-raw @(rf/subscribe [:quant-model/history-result-curves-one])
        data-curve-2-raw @(rf/subscribe [:quant-model/history-result-curves-two])
        first-date-curve1-yyyymmdd-int (js/parseInt (clojure.string/replace (if-let [x (first (sort (map :date data-curve-1-raw)))] x "0") "-" ""))
        last-date-curve1-yyyymmdd-int (js/parseInt (clojure.string/replace (if-let [x (last (sort (map :date data-curve-1-raw)))] x "0") "-" ""))
        first-date-curve2-yyyymmdd-int (js/parseInt (clojure.string/replace (if-let [x (first (sort (map :date data-curve-2-raw)))] x "0") "-" ""))
        last-date-curve2-yyyymmdd-int (js/parseInt (clojure.string/replace (if-let [x (last (sort (map :date data-curve-2-raw)))] x "0") "-" ""))

        data-curve-1-enhanced (for [e data-curve-1-raw] (assoc e :T2Y5Y (- (:T5Y e) (:T2Y e)) :T2Y10Y (- (:T10Y e) (:T2Y e)) :T2Y30Y (- (:T30Y e) (:T2Y e)) :T5Y10Y (- (:T10Y e) (:T5Y e)) :T5Y30Y (- (:T30Y e) (:T5Y e)) :T10Y30Y (- (:T30Y e) (:T10Y e))))
        data-curve-2-enhanced (for [e data-curve-2-raw] (assoc e :T2Y5Y (- (:T5Y e) (:T2Y e)) :T2Y10Y (- (:T10Y e) (:T2Y e)) :T2Y30Y (- (:T30Y e) (:T2Y e)) :T5Y10Y (- (:T10Y e) (:T5Y e)) :T5Y30Y (- (:T30Y e) (:T5Y e)) :T10Y30Y (- (:T30Y e) (:T10Y e))))
        data-curve-1 (for [e data-curve-1-enhanced] (assoc e :Curve (str model-curve-1 " " (if (not= model-curve-1 "4D") (qstables/get-implied-rating (str selection-curve-1)) selection-curve-1) " " tenor-curve-1) :model-type model-curve-1 :tenor-choice (e  (keyword (str "T" tenor-curve-1)))))
        data-curve-2 (for [e data-curve-2-enhanced] (assoc e :Curve (str model-curve-2 " " (if (not= model-curve-2 "4D") (qstables/get-implied-rating (str selection-curve-2)) selection-curve-2) " " tenor-curve-2) :model-type model-curve-2 :tenor-choice (e  (keyword (str "T" tenor-curve-2)))))

        data-to-plot (if (= nb-curve 2)
                       (case serie-2
                        "curve" (concat data-curve-1 data-curve-2)
                       "bond"  (concat data-curve-1 data-pricing-2))
                       data-curve-1 )

        by-date (group-by :date data-to-plot)
        step1 (into [] (for [[d g] by-date] (let [h (sort-by :ISIN g)] {:date d :tenor-choice (- (:tenor-choice (first h)) (:tenor-choice (second h)))})))

        data-curves-clean (sort-by :date step1)
        opposite (->> data-curves-clean (map #(update % :tenor-choice (fn [x] (* -1 x)))))
        data-curves-clean-final (if (= nb-curve 2)
                                      (case choice-curves
                                        "relative1-curves" data-curves-clean
                                        "relative2-curves" opposite
                                        "absolute-curves" data-to-plot)
                                      data-to-plot)
        final-start-date (if (= nb-curve 2)
                           (case serie-2
                             "curve" (max first-date-curve1-yyyymmdd-int first-date-curve2-yyyymmdd-int start-date)
                             "bond" (max first-date-curve1-yyyymmdd-int first-date-isin1-yyyymmdd-int start-date))
                             (max first-date-curve1-yyyymmdd-int start-date))

        final-end-date (if (= nb-curve 2)
                           (case serie-2
                             "curve" (min last-date-curve1-yyyymmdd-int last-date-curve2-yyyymmdd-int)
                             "bond" (min last-date-curve1-yyyymmdd-int last-date-isin1-yyyymmdd-int))
                           (min last-date-curve1-yyyymmdd-int))

        data-to-plot-2 (filter #(and (> (int (js/parseInt (clojure.string/replace (:date %) "-" "" ))) final-start-date) (< (int (js/parseInt (clojure.string/replace (:date %) "-" "" ))) final-end-date)) data-curves-clean-final)

        data-to-plot-2 (if (= nb-curve 2)                         ; for LEGEND
                         (case serie-2
                                   "curve" (case choice-curves
                                    "relative1-curves" (for [e data-to-plot-2] (assoc e :Curve (str model-curve-1 " " (if (not= model-curve-1 "4D") (qstables/get-implied-rating (str selection-curve-1)) selection-curve-1) " " tenor-curve-1 " - " model-curve-2 " " (if (not= model-curve-2 "4D") (qstables/get-implied-rating (str selection-curve-2)) selection-curve-2) " " tenor-curve-2)  ))
                                    "relative2-curves" (for [e data-to-plot-2] (assoc e :Curve (str model-curve-2 " " (if (not= model-curve-2 "4D") (qstables/get-implied-rating (str selection-curve-2)) selection-curve-2) " " tenor-curve-2 " - "  model-curve-1 " " (if (not= model-curve-1 "4D") (qstables/get-implied-rating (str selection-curve-1)) selection-curve-1) " " tenor-curve-1 )  ))
                                    "absolute-curves" data-to-plot-2)
                                   "bond" (case choice-curves
                                           "relative1-curves" (for [e data-to-plot-2] (assoc e :Curve (str model-curve-1 " " (if (not= model-curve-1 "4D") (qstables/get-implied-rating (str selection-curve-1)) selection-curve-1) " " tenor-curve-1 " - " ticker1)))
                                           "relative2-curves" (for [e data-to-plot-2] (assoc e :Curve (str ticker1 " - "  model-curve-1 " " (if (not= model-curve-1 "4D") (qstables/get-implied-rating (str selection-curve-1)) selection-curve-1) " " tenor-curve-1)))
                                           "absolute-curves" data-to-plot-2)
                                  )
                         data-to-plot-2)]

    {:$schema "https://vega.github.io/schema/vega-lite/v5.json",
     :resolve {:scale {:color "independent"}}
     :title   nil
     :data    {:values data-to-plot-2 :format {:parse {:Curve "nominal" :date "date:'%Y-%m-%d'" :tenor-choice "quantitative"}}}
     :vconcat [
               {:mark      "line" :width 1000 :height 400
                :selection {:grid {:type "interval" :bind "scales"}}
                :encoding  {:x     {:field "date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                            :y     {:field "tenor-choice" :type "quantitative" :axis {:title "Spread"}
                                    :scale {:domain [(dec (apply min (map :tenor-choice data-to-plot-2))) (inc (apply max (map :tenor-choice data-to-plot-2)))]}}
                            :color {:field "Curve" :type "nominal" :scale {:range ["#134848" "#FDAA94"]}}}}]}))

(defn stacked-vertical-bars [data colour-universe]
  (let [groups (distinct (mapv :group data))
        colors (take (count (distinct (mapv :group data))) colour-universe)
        new-data (mapv #(assoc %1 :order (.indexOf groups (:group %1))) data)]
    {:$schema "https://vega.github.io/schema/vega-lite/v5.json",
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
   :layer (concat [{:selection {:grid {:type "interval" :bind "scales"}}
                    :mark     {:type "point" :filled true}
                    :encoding {:x       {:field "d2" :type "quantitative" :axis {:title "2D: rating bucket" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}} ;:scale {:domain [0. (inc (apply max (map d2 data)))]}
                               :y       {:field "d4" :type "quantitative" :axis {:title "4D: curve fair value" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"}}
                               :color   {:field "field" :scale {:domain ["Net value" "Positive value"] :range ["#FDAA94" "#026E62"]} :legend {:labelFontSize 14 :title nil}} ;"#134848" "#009D80" ""
                               :tooltip [{:field "txt" :type "nominal" :title "Item"}
                                         {:field "d2" :type "quantitative", :title "2D value"}
                                         {:field "d4" :type "quantitative", :title "4D value"}]}}]
                  [{:mark     {:type "text" :dx 6 :align "left"}
                    :encoding {:x    {:field "d2" :type "quantitative"} :y {:field "d4" :type "quantitative"} :text {:field "txt" :type "nominal"}}}]
                  [{:mark "line"
                    :encoding {:x {:field "x" :type "quantitative"} :y {:field "y" :type "quantitative"} :order {:field "r1", :type "quantitative"} :color {:value "lightgrey"}}}]
                  [{:mark "line"
                    :encoding {:x {:field "x2" :type "quantitative"} :y {:field "y2" :type "quantitative"} :order {:field "r1", :type "quantitative"} :color {:value "lightgrey"}}}])
   :width  1000 :height 500})

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