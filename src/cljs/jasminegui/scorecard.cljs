(ns jasminegui.scorecard
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
    ["react-table-v6" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]
    [jasminegui.tools :as tools]
    [jasminegui.tables :as tables]

    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [jasminegui.tools :as t]
    [jasminegui.riskviews :as riskviews]
    [jasminegui.quantscores :as quantscores]
    [oz.core :as oz])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )

;(def sector (r/atom "All"))
;
;(defn attribution-control []
;  (let [table  @(rf/subscribe [:scorecard/attribution-table])
;        sectors (distinct (map :Sector table))]
;    [h-box
;     :class "element" :width "100%" :gap "20px" :align :center
;     :children [[label :label "Select sector and compress data:"]
;                [single-dropdown :width "250px" :model sector :choices (into [] (for [x (sort (conj sectors "All"))] {:id x :label x})) :filter-box? true :on-change #(reset! sector %)]
;                [label :label (if (= @sector "All") "" "Top/bottom 5 YTD, top/bottom 5 weekly, sorted by YTD and adding Total.")]
;                ]]))

(def standard-box-width-nb 1800)
(def standard-box-width (str standard-box-width-nb "px"))

(defn compress-data [table sector]
  (let [res (filter #(= (:Sector %) sector) table)
        issuers-ytd (map :Issuer (sort-by :Total-Effect-ytd res)) issuers-wtd (map :Issuer (sort-by :Total-Effect-wtd res))
        low-10-ytd (take 5 issuers-ytd) top-10-ytd (take-last 5 issuers-ytd)
        low-5-ytd (take 5 issuers-wtd)   top-5-ytd (take-last 5 issuers-wtd)
        all-issuers (distinct (concat low-10-ytd top-10-ytd low-5-ytd top-5-ytd))
        grp (group-by #(not (some #{(:Issuer %)} all-issuers)) res)
        rest-line (merge {:Issuer "Rest" :Country "Rest" :Sector sector}
                         (into {} (for [k (keys (first res)) :when (not (some #{k} [:Issuer :Country :Sector]))] [k (reduce + (map k (grp true)))])))
        total-line (merge {:Issuer "Total" :Country "Total" :Sector sector}
                          (into {} (for [k (keys (first res)) :when (not (some #{k} [:Issuer :Country :Sector]))] [k (reduce + (map k res))])))]
    (conj (reverse (sort-by :Total-Effect-ytd (conj (grp false) rest-line))) total-line)))

;(defn attribution-display [txt]
;  (let [display (if (= @sector "All") @(rf/subscribe [:scorecard/attribution-table]) (compress-data @(rf/subscribe [:scorecard/attribution-table]) @sector))]
;    [v-box :class "element" :width "100%" :gap "5px"
;     :children [[title :level :level2 :label txt]
;    [:> ReactTable
;     {:data display :defaultFilterMethod tables/case-insensitive-filter
;      :columns [{:Header "Groups" :columns (mapv tables/attribution-table-columns [:issuer :country :sector ])}
;                {:Header "Weekly" :columns (mapv tables/attribution-table-columns [:total-effect-wtd :contribution-wtd :bm-contribution-wtd])}
;                {:Header "Year to date" :columns (mapv tables/attribution-table-columns [:total-effect-ytd :contribution-ytd :bm-contribution-ytd])}
;                {:Header "YTD weights" :columns (mapv tables/attribution-table-columns [:xs-weight-ytd :weight-ytd :bm-weight-ytd])}]
;      :showPagination true :sortable true :filterable true :pageSize 31 :className "-striped -highlight"}]]]))

(defn nav-scorecard-bar []
  (let [active-home (:scorecard @(rf/subscribe [:navigation/active]))]
    [h-box
     :children [
                [v-box
                 :gap "20px"
                 :class "leftnavbar"
                 :children (into (if @(rf/subscribe [:time-machine/enabled])
                                   [[alert-box :alert-type :danger :heading "Time machine is ON" :body (str "Date " (subs (str @(rf/subscribe [:time-machine/date])) 0 8))]]
                                   [])
                                 (for [item static/scorecard-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-home (:code item))) " active"))
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:navigation/active :scorecard (:code item)])]))]
                ]]))

(rf/reg-sub
  :scorecard-risk/table
  (fn [db [_ portfolio sector]]
    (let [
          positions (:positions db)
          portfolio-total-line (assoc ((:total-positions db) (keyword portfolio)) :qt-iam-int-lt-median-rating "Total" :qt-iam-int-lt-median-rating-score "00 Total")
          viewable-positions (t/chainfilter {:portfolio portfolio :qt-jpm-sector sector :original-quantity pos?} positions)
          risk-choices (let [rfil @(rf/subscribe [:single-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r [:name :sector]] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))]
      (conj (sort-by (apply juxt (concat [(comp riskviews/first-level-sort (first accessors-k))] (rest accessors-k))) viewable-positions)))))

(rf/reg-sub
  :scorecard-risk/tree
  (fn [db [_ portfolio sector]]
    (let [positions (:positions db)
          portfolio-total-line (assoc ((:total-positions db) (keyword portfolio)) :qt-iam-int-lt-median-rating "Total" :qt-iam-int-lt-median-rating-score "00 Total")
          is-tree true
          viewable-positions (t/chainfilter {:portfolio portfolio :qt-jpm-sector sector} positions)
          risk-choices (let [rfil @(rf/subscribe [:single-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))]
      (conj (sort-by (apply juxt (concat [(comp riskviews/first-level-sort (first accessors-k))] (rest accessors-k))) viewable-positions)))))

(rf/reg-sub
  :scorecard-risk/multiple-tree
  (fn [db]
    (let [                                                  ;pivoted-positions (:pivoted-positions db)
          kselected-portfolios (map keyword (:portfolios db))
          hide-zero-risk true
          display-key-one :nav
          is-tree true
          risk-choices (let [rfil @(rf/subscribe [:multiple-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? [:name :issuer :sector])] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          ;pivoted-data (map #(merge % ((keyword (get-in tables/risk-table-columns [display-key-one :accessor])) %)) pivoted-positions)
          pivoted-data (riskviews/get-pivoted-data (:positions db) (:portfolios db) (:all-instrument-ids db) (keyword (get-in tables/risk-table-columns [display-key-one :accessor])))
          thfil (fn [line] (not (every? zero? (map line kselected-portfolios))))
          pivoted-data-hide-zero (t/chainfilter {:qt-jpm-sector (:scorecard/sector db)} (filter thfil pivoted-data))]
      (riskviews/add-total-line-to-pivot (sort-by (apply juxt (concat [(comp riskviews/first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-hide-zero) (map keyword (:portfolios db))))))

(defn spot-chart-vega-spec [bond-isin-set]
  (let [raw-data @(rf/subscribe [:quant-model/rating-curves])
        bonds (filter #(contains? bond-isin-set (:ISIN %)) @(rf/subscribe [:quant-model/model-output]))
        rtgs (map :Used_Rating_Score bonds)
        data (filter #(contains? (set (range (apply min rtgs) (inc (apply max rtgs)))) (:Rating %)) raw-data)                                       ;(filter #(< 3 (:Duration %) 10) raw-data)
        target "predicted_spread_svr"
        ktarget (keyword target)
        bond-data (map #(select-keys % [:Bond :rule-max :rule-min :cheap :Used_Duration :Used_ZTW ktarget :Duration :Rating])
                       (map #(assoc %
                               :rule-max (max (ktarget %) (:Used_ZTW %))
                               :rule-min (min (ktarget %) (:Used_ZTW %))
                               :cheap (if (< (ktarget %) (:Used_ZTW %)) "cheap" "expensive"))
                            bonds))
        min-domain (max (dec (apply min (map :Used_Duration bond-data))) 0.)
        max-domain (min (inc (apply max (map :Used_Duration bond-data))) 25)
        rating-text-data (into [] (for [line (filter #(= (:Duration %) (Math/round (* 0.25 (+ min-domain max-domain)))) data)] {:Duration (:Duration line) :spread (ktarget line) :txt (quantscores/get-implied-rating (str (:Rating line)))}))
        ]
    {:title  nil
     :data   {:values (concat bond-data data rating-text-data)}
     :layer  [
              {:selection {:grid {:type "interval" :bind "scales"}}
               :mark      {:type "line" :clip true}
               :encoding  {:x     {:field "Duration" :type "quantitative" :axis {:title "Duration" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".1f"} :scale {:domain [min-domain max-domain]}} ;:scale {:domain [0. 30.]}
                           :y     {:field target :type "quantitative" :axis {:title "Spread" :titleFontSize 14 :labelFontSize 14 :tickMinStep 0.5 :format ".0f"}}
                           :color {:field "Rating" :type "quantitative" :legend nil}}}
              {:mark     {:type "text" :dy -10}
               :encoding {:x    {:field "Duration" :type "quantitative"}
                          :y    {:field "spread" :type "quantitative"}
                          :text {:field "txt" :type "nominal"}}}
              {:mark     {:type "rule"}
               :encoding {:x     {:field "Used_Duration" :type "quantitative"}
                          :y     {:field "rule-min" :type "quantitative"}
                          :y2    {:field "rule-max" :type "quantitative"}
                          :color {:field "cheap" :type "nominal" :scale {:domain ["cheap" "expensive"] :range ["#134848" "#FDAA94"]} :legend nil}}}
              {:mark     {:type "point" :filled true}
               :encoding {:x       {:field "Used_Duration" :type "quantitative"} ;:scale {:domain [0. 30.]}
                          :y       {:field "Used_ZTW" :type "quantitative"}
                          :color   {:value "black"}
                          :tooltip [{:field "Bond" :type "nominal" :title "Bond"}
                                    {:field "Used_Duration" :type "quantitative", :title "Duration"}
                                    {:field "Used_ZTW" :type "quantitative", :title "Spread"}
                                    {:field target :type "quantitative", :title "Model"}]}}
              {:mark     {:type "text" :dx 6 :align "left"}
               :encoding {:x    {:field "Used_Duration" :type "quantitative"} ;:scale {:domain [0. 30.]}
                          :y    {:field "Used_ZTW" :type "quantitative"}
                          :text {:field "Bond" :type "nominal"}}}

              ]
     :width  (- (* 0.75 standard-box-width-nb) 200)
     :height 625}))


(defn risk-view []
  (let [
        portfolio @(rf/subscribe [:scorecard/portfolio])
        sector @(rf/subscribe [:scorecard/sector])
        vdisplay
        (map #(assoc % :difference_svr (:difference_svr (first (t/chainfilter {:ISIN (:isin %)} @(rf/subscribe [:quant-model/model-output]))))
                      :difference_svr_2d (:difference_svr_2d (first (t/chainfilter {:ISIN (:isin %)} @(rf/subscribe [:quant-model/model-output])))))
          (reverse (sort-by :weight @(rf/subscribe [:scorecard-risk/table portfolio sector]))))
        tdisplay @(rf/subscribe [:scorecard-risk/tree portfolio sector])]
    [v-box :gap "20px" :align :start
     :children [[h-box :class "element" :width "75%" :gap "75px" :align :center
                 :children [[title :level :level2 :label "Portfolio and sector selection"]
                            [single-dropdown :width "250px" :model (rf/subscribe [:scorecard/portfolio]) :choices (into [] (for [x @(rf/subscribe [:portfolios])] {:id x :label x})) :filter-box? true :on-change #(do (rf/dispatch [:get-scorecard-attribution "OGEMCORD"]) (rf/dispatch [:scorecard/portfolio %]))]
                            [single-dropdown :width "250px" :model (rf/subscribe [:scorecard/sector]) :choices (into [] (for [x @(rf/subscribe [:jpm-sectors])] {:id x :label x})) :filter-box? true :on-change #(rf/dispatch [:scorecard/sector %])]]]
                [v-box :class "element" :width "75%" :gap "10px"
                 :children [[title :level :level2 :label (str portfolio " " sector " risk")]
                            [:> ReactTable
                             {:data           vdisplay
                              :columns        [{:Header "Bond" :columns [(assoc (:name tables/risk-table-columns) :Header "NAV" :width 150 :filterable false)
                                                                         (assoc (:rating tables/risk-table-columns) :Header "silent")
                                                                         (assoc (:rating-score tables/risk-table-columns) :Header "Rating" :width 60 :filterable false)]}
                                               {:Header "Contribution" :columns [(assoc (:nav tables/risk-table-columns) :Header "NAV" :filterable false)
                                                                                 (assoc (:contrib-mdur tables/risk-table-columns) :Header "Dur" :filterable false)
                                                                                 (assoc (:contrib-yield tables/risk-table-columns) :Header "Yield" :filterable false)
                                                                                 (assoc (:contrib-zspread tables/risk-table-columns) :Header "Z-spd" :filterable false)
                                                                                 (assoc (:contrib-beta tables/risk-table-columns) :Header "Beta" :filterable false)
                                                                                 (assoc (:quant-value-4d tables/risk-table-columns) :Header "QM4D" :filterable false)
                                                                                 (assoc (:quant-value-2d tables/risk-table-columns) :Header "QM2D" :filterable false)]}
                                               {:Header "Bond analytics" :columns (map #(assoc % :filterable false)
                                                                                       (concat
                                                                                         (mapv tables/risk-table-columns [:yield :z-spread :g-spread :duration :total-return-ytd :cembi-beta-last-year :cembi-beta-previous-year :jensen-ytd])
                                                                                         (mapv #(assoc % :getProps tables/red-negatives) (mapv quantscores/quant-score-table-columns [:difference_svr_2 :difference_svr_2_2d]))))}
                                               {:Header "Position" :columns [(assoc (:nominal tables/risk-table-columns) :filterable false)]}]
                              :showPagination false :sortable true :pageSize (count vdisplay) :showPageSizeOptions false :className "-striped -highlight"}]]]
                [v-box :class "element" :width "75%" :gap "10px"
                 :children [[title :level :level2 :label (str portfolio " " sector " risk country pivot")]
                            [:> ReactTable
                             {:data           tdisplay
                              :columns        [{:Header "Bond" :columns [(assoc (:sector tables/risk-table-columns) :filterable false)
                                                                         (assoc (:country tables/risk-table-columns) :filterable false)
                                                                         (assoc (:name tables/risk-table-columns) :Header "NAV" :width 150 :filterable false)
                                                                         (assoc (:rating tables/risk-table-columns) :Header "silent")
                                                                         (assoc (:rating-score tables/risk-table-columns) :Header "Rating" :width 60 :filterable false)]}
                                               {:Header "NAV" :columns (map #(assoc % :getProps tables/red-negatives) (mapv tables/risk-table-columns [:nav :bm-weight :weight-delta]))}
                                               {:Header "Duration" :columns (map #(assoc % :getProps tables/red-negatives) (mapv tables/risk-table-columns [:contrib-mdur :bm-contrib-eir-duration :mdur-delta]))}
                                               {:Header "Yield" :columns (mapv tables/risk-table-columns [:contrib-yield :bm-contrib-yield])}
                                               {:Header "Z-spread" :columns (mapv tables/risk-table-columns [:contrib-zspread])}
                                               {:Header "Beta" :columns (mapv tables/risk-table-columns [:contrib-beta])}
                                               {:Header "Quant model" :columns (mapv tables/risk-table-columns [:quant-value-4d :quant-value-2d])}]
                              :showPagination false :sortable true :pageSize 2 :showPageSizeOptions false :className "-striped -highlight"
                              :pivotBy        [:qt-jpm-sector :qt-risk-country-name] :expanded [{0 false}] :sorted [{:id :bm-weight :desc true}]}]]]
                [v-box :class "element" :width "75%" :gap "10px"
                 :children [[title :level :level2 :label (str portfolio " " sector " bonds held")]
                            [oz/vega-lite (spot-chart-vega-spec (set (map :isin vdisplay)))]]]
                [v-box :class "element" :width "75%" :gap "10px"
                 :children [[title :level :level2 :label (str portfolio " " sector " attribution, top/bottom 5 YTD and weekly")]
                            (let [data (compress-data @(rf/subscribe [:scorecard/attribution-table]) sector)]
                              [:> ReactTable
                               {:data           data :defaultFilterMethod tables/case-insensitive-filter
                                :columns        [{:Header "Groups" :columns (mapv tables/attribution-table-columns [:issuer :country])}
                                                 {:Header "Weekly" :columns (mapv tables/attribution-table-columns [:total-effect-wtd :contribution-wtd :bm-contribution-wtd])}
                                                 {:Header "Year to date" :columns (mapv tables/attribution-table-columns [:total-effect-ytd :contribution-ytd :bm-contribution-ytd])}
                                                 {:Header "YTD weights" :columns (mapv tables/attribution-table-columns [:xs-weight-ytd :weight-ytd :bm-weight-ytd])}]
                                :showPagination false :sortable true :filterable false :pageSize (count data) :className "-striped -highlight"}])]]

                [v-box :class "element" :width "100%" :gap "10px"
                 :children [[title :level :level2 :label (str sector " NAV across portfolios, grouped by issuer")]
                            (let [cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (not (some #{p} ["OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE" "OGEMHCD" "IUSSEMD"]))]
                                                  {:Header p :accessor (name p) :width "100px" :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2*100-if-pos
                                                   }))]
                            [:> ReactTable
                             {:data           @(rf/subscribe [:scorecard-risk/multiple-tree])
                              :columns        (concat (mapv tables/risk-table-columns [:issuer :name]) cols)
                              :showPagination false :sortable true :filterable false :pageSize (count (distinct (map :TICKER @(rf/subscribe [:scorecard-risk/multiple-tree]))))
                              :showPageSizeOptions false :className "-striped -highlight" :pivotBy [:TICKER] :defaultSorted [{:id :OGEMCORD :desc true}]}])]]


                ]]))


;(defn active-home []
;  (.scrollTo js/window 0 0)                             ;on view change we go back to top
;  [v-box :width standard-box-width
;   :gap "20px"
;   :padding "80px 20px"
;   :class "subbody "
;   :children [[risk-view]]
;
;
;   ])


(defn view []
  (rf/dispatch [:get-scorecard-attribution "OGEMCORD"])
  [box :width standard-box-width :padding "80px 20px" :class "subbody" :child [risk-view]])

