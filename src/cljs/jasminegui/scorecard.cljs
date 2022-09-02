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
    ;[jasminegui.tools :as tools]
    [jasminegui.tables :as tables]

    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [jasminegui.tools :as t]
    [jasminegui.riskviews :as riskviews]
    [jasminegui.qs.quantscores :as quantscores]
    [jasminegui.qs.qstables :as qstables]
    [cljs-time.core :refer [today plus days]]
    [cljs-time.format :as ctf]
    [oz.core :as oz]
    [goog.object :as gobj]
    [jasminegui.guitools :as gt])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )

(def qdb-sectors
  {
   "Consumer" "CONSUMERS"
   "Financial" "FINANCIALS"
   "Industrials" "INDUSTRIALS"
   "Infrastructure" "INFRASTRUCTURES"
   "Metals & Mining" "METALSMINING"
   "Oil & Gas" "OILGAS"
   "Pulp & Paper" "PULPPAPER"
   "Real Estate" "REALESTATE"
   "TMT" "TELECOMS"
   "Transport" "Transport"                                  ;;doesn't exist
   "Utilities" "UTILITIES"})

(def qdb-server "https://ldprdfiorcdc1:6100/v1/emcd/")

(rf/reg-event-fx
  :get-qdb-securities
  (fn [{:keys [db]} [_ sector]]
    {:http-get-dispatch {:url (str qdb-server "sectors?sectors=" sector "&include_inactive=False") :dispatch-key [:get-qdb-scores]}}))

;old request
;(rf/reg-event-fx
;  :get-qdb-securities
;  (fn [{:keys [db]} [_ sector]]
;    {:http-get-dispatch {:url (str qdb-server "securities?sectors=" sector) :dispatch-key [:get-qdb-scores]}}))

(rf/reg-event-fx
  ;TODO THIS NEEDS TO REVERT TO PREVIOUS DATE = 1
  :get-qdb-scores
  (fn [{:keys [db]} [_ qdb-securities]]
    (let [isins (get-in qdb-securities [:result 0 :security_ids])
          latest-date (first (get-in qdb-securities [:result 0 :upload_dates]))
          previous-date (nth (get-in qdb-securities [:result 0 :upload_dates]) 2)] ;(second (get-in qdb-securities [:result 0 :upload_dates]))
      {:db (assoc db :scorecard/qdb-securities isins :scorecard/latest-date latest-date :scorecard/previous-date previous-date)
       :http-json-post-dispatch
           [{:url (str qdb-server "scores")
             :json-params {:security_ids isins :metrics [] :date_params  {:as_at_date latest-date :max_stale_days 0}} ;:start_date "2021-02-01" :end_date "2021-02-07" ;(ctf/unparse (ctf/formatter "yyyy-MM-dd") (today)) :max_stale_days 25
             :dispatch-key [:clean-qdb-scores]}
            {:url (str qdb-server "scores")
             :json-params {:security_ids isins :metrics [] :date_params  {:as_at_date previous-date :max_stale_days 0}} ;:start_date "2021-02-01" :end_date "2021-02-07";{:as_at_date (ctf/unparse (ctf/formatter "yyyy-MM-dd") (plus (today) {:days -14})) :max_stale_days 25}
             :dispatch-key [:clean-qdb-scores-previous]}
            ]})))

(rf/reg-event-db
  :clean-qdb-scores
  (fn [db [_ data]]
    (let [isins (distinct (map :security_id (:result data)))
          subqm (into {} (for [line (filter #(some #{(:ISIN %)} isins) (:quant-model/model-output db))] [(:ISIN line) line]))]
      (assoc db :scorecard/qdb-scores (into [] (for [[s block] (group-by :security_id (:result data)) :when (some #{s} (keys subqm))] (into (subqm s) (for [line block] [(:metric line) (:value line)]))))))))

(rf/reg-event-db
  :clean-qdb-scores-previous
  (fn [db [_ data]]
    (let [isins (distinct (map :security_id (:result data)))]
      (assoc db :scorecard/qdb-scores-previous (into [] (for [[s block] (group-by :security_id (:result data))] (into {:ISIN s} (for [line block] [(:metric line) (:value line)]))))))))

(rf/reg-sub
  :scorecard/qdb-scores-with-difference
  (fn [db]
    ;(println "db" (:scorecard/qdb-scores db))
    ;(println "spot-rank" (t/naive-rank (map #(get % "EMCD_TOTAL") (:scorecard/qdb-scores db)) false))
    (let [spot (:scorecard/qdb-scores db)
          spot-rank (t/naive-rank (map #(get % "EMCD_TOTAL") spot) false)
          spot-with-rank (mapv #(assoc %1 "RANK" %2) spot spot-rank)
          prev (:scorecard/qdb-scores-previous db)
          prev-rank (t/naive-rank (map #(get % "EMCD_TOTAL") prev) false)
          prev-with-rank (mapv #(assoc %1 "RANK" %2) prev prev-rank)
          prev-map (into {} (for [line prev-with-rank] [(:ISIN line) line]))
          k (keys (first (vals prev-map)))
          dc (zipmap k (map #(str % "-PREV") k))
          both (into [] (for [line spot-with-rank] (merge line (clojure.set/rename-keys (prev-map (:ISIN line)) dc))))
          ]
      (into [] (for [line both] (assoc line "RANK-CHANGE" (- (get line "RANK-PREV") (get line "RANK"))))))))

(def standard-box-width-nb 1800)
(def standard-box-width (str standard-box-width-nb "px"))

(def group-headers [{:group-header "Description" :id :description :style {:textAlign "left" :backgroundColor "#deeaee"}}
                    {:group-header "Pricing" :id :pricing :style {:textAlign "right" :backgroundColor "#E2EEDB"}}
                     {:group-header "Valuation" :id :valuation  :style {:textAlign "right" :backgroundColor "#FFE4C4"}}
                     {:group-header "Fundamentals" :id :quality  :style {:textAlign "right" :backgroundColor "#D8EBF1"}}
                     {:group-header "Technicals" :id :technicals  :style {:textAlign "right" :backgroundColor "#FBC8E0"}}
                     {:group-header "Total" :id :total :style {:textAlign "right" :backgroundColor "#E4E4E4"}}
                     {:group-header "ESG" :id :esg :style {:textAlign "right" :backgroundColor "#C7DEB8"}}])

(defn score-cell-format
  "This will write a single cell.
  Note that [this] has access to the full row so conditional evaluation is possible (e.g. change column B based on values in column A)"
  ;TODO remove esg override
  [this]
  (if-let [x (aget this "value")]
    (if-let [y (aget this "row" "_original" (str (aget this "column" "id") "-PREV"))]
      (str x (if (and (not (some #{(aget this "column" "id")} ["EMCD_ESG_CREDIT_RATING_IMPACT" "EMCD_ESG_SENSITIVITY_RISK" "EMCD_ESG_CREDIT_IMPACT"])) (not= x y))
               (let [d (- (js/parseInt x) (js/parseInt y))]
                 (str " (" (if (pos? d) "+") d ")"))))
      (str x " (na)"))
    "-"))

(defn rank-change-format [this]
  (if-let [x (aget this "value")]
    (if (pos? x) (str "+" x) (str x))
    "-"))

(def score-fields
  [
   {:Header "Bond" :grp :description :accessor "Bond" :width 130}
   ;{:accessor "ISIN" :grp :description :Header "ISIN" :width 110}

  {:Header "Price" :accessor "Used_Price" :grp :pricing :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round2  :filterMethod tables/nb-filter-OR-AND}
  {:Header "Rating source" :grp :description :accessor "Rating_String" :width 120 :filterMethod tables/nb-filter-OR-AND-x100}
  {:Header "Rating" :accessor "Used_Rating_Score" :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell nil  :filterMethod tables/nb-filter-OR-AND}
  {:Header "ZTW" :accessor "Used_ZTW" :grp :pricing :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterMethod tables/nb-filter-OR-AND}
  {:Header "G" :accessor "G_SPREAD_MID_CALC" :grp :pricing :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/zspread-format :filterMethod tables/nb-filter-OR-AND}
  {:Header "YTW" :accessor "Used_YTW" :grp :pricing :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/yield-format  :filterMethod tables/nb-filter-OR-AND}
  {:Header "Dur." :accessor "Used_Duration" :grp :pricing :width 50 :style {:textAlign "right"} :aggregate tables/median :Cell tables/round1 :filterMethod tables/nb-filter-OR-AND}

   {:accessor "EMCD_VAL_UNIVERSAL_REL" :grp :valuation :Header "Univ." :Cell score-cell-format}
   {:accessor "EMCD_VAL_HISTORICAL_REL" :grp :valuation :Header "Hist."  :Cell score-cell-format}
   {:accessor "EMCD_VAL_QUALITATIVE" :grp :valuation :Header "Quality"  :Cell score-cell-format}
   {:accessor "EMCD_VAL_TOTAL" :grp :valuation :Header "Total" :Cell tables/round2}

   {:accessor "EMCD_QUAL_CORP_GOVERNANCE" :grp :quality :Header "Corp. gov."  :Cell score-cell-format}
   {:accessor "EMCD_QUAL_M_A" :grp :quality :Header "M&A"  :Cell score-cell-format}
   {:accessor "EMCD_QUAL_CAPEX_FLEX" :grp :quality :Header "Capex flex"  :Cell score-cell-format}
   {:accessor "EMCD_QUAL_REFIN_RISK" :grp :quality :Header "Refi risk"  :Cell score-cell-format}
   {:accessor "EMCD_QUAL_GOV_SUPPORT" :grp :quality :Header "Govt. / Reg."  :Cell score-cell-format}
   {:accessor "EMCD_QUAL_EBITDA_GROWTH" :grp :quality :Header "EBITDA growth" :Cell score-cell-format}
   {:accessor "EMCD_QUAL_EDITDA_MARGIN" :grp :quality :Header "EBITDA margin" :Cell score-cell-format}
   {:accessor "EMCD_QUAL_LEVERAGE" :grp :quality :Header "Lvrg." :Cell score-cell-format}
   {:accessor "EMCD_QUAL_TOTAL" :grp :quality :Header "Total" :Cell tables/round2}

   {:accessor "EMCD_TECH_S_D" :grp :technicals :Header "Supply / D" :Cell score-cell-format}
   {:accessor "EMCD_TECH_INDEX_INV_BASE" :grp :technicals :Header "Index inv." :Cell score-cell-format}
   {:accessor "EMCD_TECH_LIQUIDITY" :grp :technicals :Header "Liqdty." :Cell score-cell-format}
   {:accessor "EMCD_TECH_TOTAL" :grp :technicals :Header "Total" :Cell tables/round2}

   {:accessor "EMCD_TOTAL" :grp :total :Header "Total score" :Cell tables/round2}
   {:accessor "RANK" :grp :total :Header "Rank"}
   {:accessor "RANK-PREV" :grp :total :Header "Prev. Rank"}
   {:accessor "RANK-CHANGE" :grp :total :Header "Rank change" :Cell rank-change-format :getProps tables/red-negatives}

   {:accessor "EMCD_ESG_CREDIT_RATING_IMPACT" :grp :esg :Header "Rating impact" :Cell score-cell-format}
   {:accessor "EMCD_ESG_SENSITIVITY_RISK" :grp :esg :Header "Sensty. risk" :Cell score-cell-format}
   {:accessor "EMCD_ESG_CREDIT_IMPACT" :grp :esg :Header "Total" :Cell score-cell-format}

   ])

(defn scorecard-table []
  (let [sector @(rf/subscribe [:scorecard/sector])
        data @(rf/subscribe [:scorecard/qdb-scores-with-difference])]
    (gt/element-box "scorecard-scores" "100%" (str "Scorecard for " sector " " @(rf/subscribe [:scorecard/latest-date]) " vs " @(rf/subscribe [:scorecard/previous-date])) data
                    [[:> ReactTable
                      {:data     (reverse (sort-by #(get % "EMCD_TOTAL") data))
                       :columns  (into []
                                       (for [group group-headers]
                                         {:Header (:group-header group) :columns (into [] (for [row (t/chainfilter {:grp (:id group)} score-fields)]
                                                                                            (assoc row
                                                                                              :width (if (contains? row :width) (row :width) 50)
                                                                                              :headerStyle {:overflow nil :whiteSpace "pre-line" :wordWrap "break-word"}
                                                                                              :style (:style group)
                                                                                              )))}))
                       :pageSize (count data) :showPagination false :sortable true :showPageSizeOptions false}]])))

(defn recent-trades-display-date
  [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [p (str (subs x 0 10))])))

(defn recent-trades-display
  [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [v-box :children (into [] (for [t x]
                                  [p (first t) " " (second t) " " (str (/ (int (second (next t))) 1000) "k ") (str (gstring/format "%.0f" (js/parseFloat (second (next (next t))) )) "bps") " @" (last t)]
                                  ))]
      "-")))

(defn trade-history-sc []
  ;(rf/dispatch [:get-recent-trade-data (t/int-to-gdate(plus (today) (days -10))) (t/int-to-gdate (today))])
  (let [ports (remove #(some #{%} ["OGEMHCD" "IUSSEMD" "OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE"]) @(rf/subscribe [:portfolios]))
        port-cembi (mapcat :portfolios (t/chainfilter {:label "CEMBI"} static/portfolio-alignment-groups))
        port-ig (mapcat :portfolios (t/chainfilter {:label "IG"} static/portfolio-alignment-groups))
        port-munich (mapcat :portfolios (t/chainfilter {:label #(= % "Munich Re")} static/portfolio-alignment-groups))
        port-talanx (mapcat :portfolios (t/chainfilter {:label #(= % "Talanx USD")} static/portfolio-alignment-groups))
        port-allianz (mapcat :portfolios (t/chainfilter {:label #(= % "Allianz")} static/portfolio-alignment-groups))
        port-other (mapcat :portfolios (t/chainfilter {:label #(or (= % "Other EMCD") (= % "TR"))} static/portfolio-alignment-groups))
        data (map #(select-keys % (conj ports :date)) @(rf/subscribe [:recent-trade-data/trades]))
        sector @(rf/subscribe [:scorecard/sector])
        empty-filter (fn [line] (pos? (reduce + (map count (vals (dissoc line :date))))))
        sector-filter (fn [row] (if (= sector "Sector") true (= (second (next (next (next (next row))))) sector)))
        final-data (->> data
                        (map #(into {} (for [[k v] %] [k (if (= k :date) v (filter sector-filter v))])))
                        (filter empty-filter))
        ]
    (gt/element-box "scorecard-scores" "100%" (str "14 day trade history " sector) final-data
                    (concat
                      [[title :label "Main" :level :level2]]
                      [[:> ReactTable
                      {:data      (reverse final-data)
                       :columns   (into [{:Header "Date" :accessor "date" :Cell recent-trades-display-date :width 100 :style {:textAlign "center" :justifyContent "center"}}]
                                        (sort-by #(.indexOf (mapcat :portfolios static/portfolio-alignment-groups) (:accessor %))
                                                 (for [p port-cembi]
                                                   {:Header p :accessor p :Cell recent-trades-display :width 250})))
                       :className "-striped -highlight" :pageSize (count (reverse final-data))}]]
                      [[title :label "Allianz" :level :level2]]
                      [[:> ReactTable
                        {:data      (reverse final-data)
                         :columns   (into [{:Header "Date" :accessor "date" :Cell recent-trades-display-date :width 100 :style {:textAlign "center" :justifyContent "center"}}]
                                          (sort-by #(.indexOf (mapcat :portfolios static/portfolio-alignment-groups) (:accessor %))
                                                   (for [p port-allianz]
                                                     {:Header p :accessor p :Cell recent-trades-display :width 250})))
                         :className "-striped -highlight" :pageSize (count (reverse final-data))}]]
                      [[title :label "IG" :level :level2]]
                      [[:> ReactTable
                      {:data      (reverse final-data)
                       :columns   (into [{:Header "Date" :accessor "date" :Cell recent-trades-display-date :width 100 :style {:textAlign "center" :justifyContent "center"}}]
                                        (sort-by #(.indexOf (mapcat :portfolios static/portfolio-alignment-groups) (:accessor %))
                                                 (for [p port-ig]
                                                   {:Header p :accessor p :Cell recent-trades-display :width 250})))
                       :className "-striped -highlight" :pageSize (count (reverse final-data))}]]
                      [[title :label "Munich" :level :level2]]
                    [[:> ReactTable
                      {:data      (reverse final-data)
                       :columns   (into [{:Header "Date" :accessor "date" :Cell recent-trades-display-date :width 100 :style {:textAlign "center" :justifyContent "center"}}]
                                        (sort-by #(.indexOf (mapcat :portfolios static/portfolio-alignment-groups) (:accessor %))
                                                 (for [p port-munich]
                                                   {:Header p :accessor p :Cell recent-trades-display :width 250})))
                       :className "-striped -highlight" :pageSize (count (reverse final-data))}]]
                      [[title :label "Talanx" :level :level2]]
                      [[:> ReactTable
                        {:data      (reverse final-data)
                         :columns   (into [{:Header "Date" :accessor "date" :Cell recent-trades-display-date :width 100 :style {:textAlign "center" :justifyContent "center"}}]
                                          (sort-by #(.indexOf (mapcat :portfolios static/portfolio-alignment-groups) (:accessor %))
                                                   (for [p port-talanx]
                                                     {:Header p :accessor p :Cell recent-trades-display :width 250})))
                         :className "-striped -highlight" :pageSize (count (reverse final-data))}]]
                      [[title :label "Other" :level :level2]]
                    [[:> ReactTable
                      {:data      (reverse final-data)
                       :columns   (into [{:Header "Date" :accessor "date" :Cell recent-trades-display-date :width 100 :style {:textAlign "center" :justifyContent "center"}}]
                                        (sort-by #(.indexOf (mapcat :portfolios static/portfolio-alignment-groups) (:accessor %))
                                                 (for [p port-other]
                                                   {:Header p :accessor p :Cell recent-trades-display :width 250})))
                       :className "-striped -highlight" :pageSize (count (reverse final-data))}]]
                            ))))

(defn compress-data [table sector]
  (let [res (filter #(= (:Sector %) sector) table)
        issuers-ytd (map :Issuer (sort-by :Total-Effect-ytd res)) issuers-wtd (map :Issuer (sort-by :Total-Effect-wtd res)) issuers-pwtd (map :Issuer (sort-by :Total-Effect-pwtd res))
        low-5-ytd (take 5 issuers-ytd) top-5-ytd (take-last 5 issuers-ytd)
        low-5-wtd (take 5 issuers-wtd)   top-5-wtd (take-last 5 issuers-wtd)
        low-5-pwtd (take 5 issuers-pwtd)   top-5-pwtd (take-last 5 issuers-pwtd)
        all-issuers (distinct (concat low-5-ytd top-5-ytd low-5-wtd top-5-wtd low-5-pwtd top-5-pwtd))
        grp (group-by #(not (some #{(:Issuer %)} all-issuers)) res)
        rest-line (merge {:Issuer "Rest" :Country "Rest" :Sector sector}
                         (into {} (for [k (keys (first res)) :when (not (some #{k} [:Issuer :Country :Sector]))] [k (reduce + (map k (grp true)))])))
        total-line (merge {:Issuer "Total" :Country "Total" :Sector sector}
                          (into {} (for [k (keys (first res)) :when (not (some #{k} [:Issuer :Country :Sector]))] [k (reduce + (map k res))])))]
    (conj (reverse (sort-by :Total-Effect-ytd (conj (grp false) rest-line))) total-line)))

(rf/reg-sub
  :scorecard-risk/table
  (fn [db]
    (let [qm (:quant-model/model-output db)
          ta (:scorecard/trade-analyser-data db)
          viewable-positions (into [] (comp
                                        (map #(update % :weight * 100.))
                                        (map #(update % :bm-weight * 100.))
                                        (map #(update % :weight-delta * 100.))
                                        (map #(update % :qt-yield * 100.))
                                        (map #(update % :total-return-ytd * 100.))
                                        (map #(update % :jensen-ytd * 100.))
                                        (map #(update % :contrib-yield * 100.))
                                        (map #(update % :bm-contrib-yield * 100.)))
                                   (t/chainfilter {:portfolio (:scorecard/portfolio db) :qt-jpm-sector (:scorecard/sector db) :original-quantity pos?} (:positions db)))
          grouping-columns (into [] (for [r [:name :sector]] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          res (conj (sort-by (apply juxt (concat [(comp riskviews/first-level-sort (first accessors-k))] (rest accessors-k))) viewable-positions))]
      (map #(merge % (select-keys (first (t/chainfilter {:ISIN (:isin %)} qm)) [:difference_svr :difference_svr_2d])
                   (if ta (update (ta (keyword (:isin %))) :strategy static/ta-strategy-choices) {}))
           (reverse (sort-by :weight res))))))

(rf/reg-sub
  :scorecard-risk/tree
  (fn [db]
    (let [viewable-positions (into [] (comp
                                        (map #(update % :weight * 100.))
                                        (map #(update % :bm-weight * 100.))
                                        (map #(update % :weight-delta * 100.))
                                        (map #(update % :qt-yield * 100.))
                                        (map #(update % :total-return-ytd * 100.))
                                        (map #(update % :jensen-ytd * 100.))
                                        (map #(update % :contrib-yield * 100.))
                                        (map #(update % :bm-contrib-yield * 100.)))
                                   (t/chainfilter {:portfolio (:scorecard/portfolio db) :qt-jpm-sector (:scorecard/sector db)} (:positions db)))
          risk-choices (let [rfil @(rf/subscribe [:single-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))]
      ;(println (t/chainfilter {:TICKER "PROMIG"} viewable-positions)) :qt-risk-country-name
      (conj (sort-by (apply juxt (concat [(comp riskviews/first-level-sort (first accessors-k))] (rest accessors-k))) viewable-positions)))))

(rf/reg-sub
  :scorecard-risk/multiple-tree
  (fn [db]
    (let [kselected-portfolios (map keyword (:portfolios db))
          display-key-one :nav
          grouping-columns (into [] (for [r (remove nil? [:name :issuer :sector])] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (riskviews/get-pivoted-data (get db :instruments) (:positions db) (:portfolios db) (:all-instrument-ids db) (keyword (get-in tables/risk-table-columns [display-key-one :accessor])))
          thfil (fn [line] (not (every? zero? (map line kselected-portfolios))))
          pivoted-data-hide-zero (t/chainfilter {:qt-jpm-sector (:scorecard/sector db)} (filter thfil pivoted-data))]
      (riskviews/add-total-line-to-pivot (sort-by (apply juxt (concat [(comp riskviews/first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-hide-zero) (map keyword (:portfolios db))))))

(defn spot-chart-vega-spec [bond-isin-set]
  (let [raw-data (:base @(rf/subscribe [:quant-model/generic-rating-curves]))
        bonds (filter #(contains? bond-isin-set (:ISIN %)) @(rf/subscribe [:quant-model/model-output]))
        rtgs (remove nil? (map :Used_Rating_Score bonds))
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
        rating-text-data (into [] (for [line (filter #(= (:Duration %) (Math/round (* 0.25 (+ min-domain max-domain)))) data)] {:Duration (:Duration line) :spread (ktarget line) :txt (qstables/get-implied-rating (str (:Rating line)))}))]
    {:title  nil
     :data   {:values (concat bond-data data rating-text-data)}
     :layer  [{:selection {:grid {:type "interval" :bind "scales"}}
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
                          :text {:field "Bond" :type "nominal"}}}]
     :width  (- (* 0.75 standard-box-width-nb) 200)
     :height 625}))


(rf/reg-event-fx
  :scorecard/change-portfolio
  (fn [{:keys [db]} [_ portfolio]]
    {:db (assoc db :scorecard/portfolio portfolio)
     :fx [[:dispatch [:ta2022/post-sub-table-data {:portfolio portfolio
                                                   :isinseq   (map :isin (t/chainfilter {:portfolio portfolio :qt-jpm-sector (:scorecard/sector db) :original-quantity pos?} (:positions db)))}]]
          [:dispatch [:get-scorecard-attribution portfolio]]
          ]}))

(rf/reg-event-fx
  :scorecard/change-sector
  (fn [{:keys [db]} [_ sector]]
    {:db (assoc db :scorecard/sector sector)
     :fx [[:dispatch [:get-qdb-securities (qdb-sectors sector)]]
          [:dispatch [:ta2022/post-sub-table-data {:portfolio (:scorecard/portfolio db)
                                                   :isinseq (map :isin (t/chainfilter {:portfolio (:scorecard/portfolio db) :qt-jpm-sector sector :original-quantity pos?} (:positions db)))}]]]
     }))

(def expander (r/atom {0 {}}))
(def expander-fins (r/atom {0 {}}))
(def fins-pivot-filter (r/atom []))

(defn risk-view []
  (let [portfolio @(rf/subscribe [:scorecard/portfolio])
        sector @(rf/subscribe [:scorecard/sector])
        vdisplay @(rf/subscribe [:scorecard-risk/table])
        filtered-tree (tables/cljs-text-filter-OR @fins-pivot-filter @(rf/subscribe [:scorecard-risk/tree]))]
    [v-box :gap "20px" :align :start
     :children [[h-box :class "element" :gap "20px"
                 :children [[title :level :level1 :label "Portfolio and sector selection"]
                            [box :align-self :center :child (gt/portfolio-dropdown-selector :scorecard/portfolio :scorecard/change-portfolio)]
                            [box :align-self :center :child [single-dropdown :width "250px" :placeholder "Sector" :model (rf/subscribe [:scorecard/sector]) :choices (into [] (for [x @(rf/subscribe [:jpm-sectors])] {:id x :label x})) :filter-box? true
                                                      :on-change #(do (rf/dispatch [:scorecard/change-sector %]) (rf/dispatch [:get-recent-trade-data (t/int->gdate (plus (today) (days -10))) (t/int->gdate (today))]))]]
                            ]]
                (gt/element-box "scorecard-risk" "100%" (str portfolio " " sector " risk") vdisplay
                             [[:> ReactTable
                               {:data           vdisplay
                                :columns        [{:Header "" :columns [(assoc (:name tables/risk-table-columns) :Header "Bond" :width 150 :filterable false)]}
                                                 {:Header  "Contribution"
                                                  :columns (into [] (for [[k v] [[:nav "NAV"] [:contrib-mdur "Dur"] [:contrib-yield "Yield"] [:contrib-zspread "Z"] [:contrib-beta "Beta"] [:quant-value-4d "Q4D"] [:quant-value-2d "Q2D"]]]
                                                                      (assoc (k tables/risk-table-columns) :Header v :filterable false :width 45)))}
                                                 {:Header "Bond analytics" :columns (map #(assoc % :filterable false)
                                                                                         (concat
                                                                                           [(assoc (:rating tables/risk-table-columns) :Header "silent")
                                                                                            (assoc (:rating-score tables/risk-table-columns) :Header "Rating" :width 60 :filterable false)]
                                                                                           (mapv tables/risk-table-columns [:yield :z-spread :g-spread :duration :total-return-ytd :cembi-beta-last-year :cembi-beta-previous-year :jensen-ytd])
                                                                                           [{:Header (gstring/unescapeEntities "4D &Delta;") :accessor "difference_svr" :width 45 :Cell (partial tables/nb-cell-format "%0.0f" 1.) :getProps tables/red-negatives}
                                                                                            {:Header (gstring/unescapeEntities "2D &Delta;") :accessor "difference_svr_2d" :width 45 :Cell (partial tables/nb-cell-format "%0.0f" 1.) :getProps tables/red-negatives}]))}
                                                 {:Header "Trade analyser target" :columns [{:Header "Strategy" :accessor "strategy" :width 70}
                                                                                            {:Header "Description" :accessor "relval-target-description" :width 240}
                                                                                            {:Header "Level" :accessor "relval-alert-level" :width 40 :style {:textAlign "right"} :Cell (partial tables/nb-cell-format "%0.1f" 1)}
                                                                                            {:Header "Triggered?" :accessor "relval-target-triggered-date" :width 80 :style {:textAlign "right"} :Cell (partial tables/nb-cell-format "%0.0f" 1)}]}]
                                :showPagination false :sortable true :pageSize (count vdisplay) :showPageSizeOptions false :className "-striped -highlight"}]])
                (gt/element-box "scorecard-risk-pivot" "100%" (str portfolio " " sector " risk country pivot") @(rf/subscribe [:scorecard-risk/tree])
                                [[:> ReactTable
                                  {:data           @(rf/subscribe [:scorecard-risk/tree])
                                   :columns        [{:Header "Bond" :columns [(assoc (:sector tables/risk-table-columns) :filterable false)
                                                                              (assoc (:country tables/risk-table-columns) :filterable false)
                                                                              (assoc (:name tables/risk-table-columns) :Header "NAV" :width 150 :filterable false)
                                                                              (assoc (:rating tables/risk-table-columns) :Header "silent")
                                                                              (assoc (:rating-score tables/risk-table-columns) :Header "Rating" :width 60 :filterable false)]}
                                                    {:Header "NAV" :columns (map #(assoc % :getProps tables/red-negatives :filterable false) (mapv tables/risk-table-columns [:nav :bm-weight :weight-delta]))}
                                                    {:Header "Duration" :columns (map #(assoc % :getProps tables/red-negatives) (mapv tables/risk-table-columns [:contrib-mdur :bm-contrib-eir-duration :mdur-delta]))}
                                                    {:Header "Yield" :columns (mapv tables/risk-table-columns [:contrib-yield :bm-contrib-yield])}
                                                    {:Header "Z-spread" :columns (mapv tables/risk-table-columns [:contrib-zspread])}
                                                    {:Header "Beta (Bbg vs CEMBIBD)" :columns (mapv #(assoc % :filterable false)
                                                                                                    [(tables/risk-table-columns :contrib-beta)
                                                                                                     (tables/risk-table-columns :contrib-BBG_CEMBI_D1Y_BETA)
                                                                                                     (tables/risk-table-columns :bm-contrib-BBG_CEMBI_D1Y_BETA)
                                                                                                     (tables/risk-table-columns :contrib-delta-BBG_CEMBI_D1Y_BETA)])}
                                                    ;{:Header "Beta" :columns (mapv tables/risk-table-columns [:contrib-beta])}
                                                    {:Header "Quant model" :columns (mapv #(assoc % :filterable false) (mapv tables/risk-table-columns [:quant-value-4d :quant-value-2d]))}]
                                   :showPagination false :sortable true :pageSize 2 :showPageSizeOptions false :className "-striped -highlight"
                                   :pivotBy        [:qt-jpm-sector :qt-risk-country-name]
                                   :expanded       @expander :onExpandedChange #(reset! expander %)
                                   :sorted         [{:id :bm-weight :desc true}]}]])
                (if (= sector "Financial")
                  (gt/element-box "scorecard-risk-pivot" "100%" (str portfolio " " sector " risk country pivot") filtered-tree
                                  [[:> ReactTable
                                    {:data           filtered-tree
                                     :columns        [{:Header "Bond" :columns [(assoc (:sector tables/risk-table-columns) :filterable false)
                                                                                (assoc (:financial-seniority tables/risk-table-columns) :filterable true)
                                                                                (assoc (:country tables/risk-table-columns) :filterable true)
                                                                                (assoc (:name tables/risk-table-columns) :Header "NAV" :width 150 :filterable false)
                                                                                (assoc (:rating tables/risk-table-columns) :Header "silent")
                                                                                (assoc (:rating-score tables/risk-table-columns) :Header "Rating" :width 60 :filterable false)]}
                                                      {:Header "NAV" :columns (map #(assoc % :getProps tables/red-negatives :filterable false) (mapv tables/risk-table-columns [:nav :bm-weight :weight-delta]))}
                                                      {:Header "Duration" :columns (map #(assoc % :getProps tables/red-negatives) (mapv tables/risk-table-columns [:contrib-mdur :bm-contrib-eir-duration :mdur-delta]))}
                                                      {:Header "Yield" :columns (mapv tables/risk-table-columns [:contrib-yield :bm-contrib-yield])}
                                                      {:Header "Z-spread" :columns (mapv tables/risk-table-columns [:contrib-zspread])}
                                                      {:Header "Beta (Bbg vs CEMBIBD)" :columns (mapv #(assoc % :filterable false)
                                                                                                      [(tables/risk-table-columns :contrib-beta)
                                                                                                       (tables/risk-table-columns :contrib-BBG_CEMBI_D1Y_BETA)
                                                                                                       (tables/risk-table-columns :bm-contrib-BBG_CEMBI_D1Y_BETA)
                                                                                                       (tables/risk-table-columns :contrib-delta-BBG_CEMBI_D1Y_BETA)])}
                                                      {:Header "Quant model" :columns (mapv #(assoc % :filterable false) (mapv tables/risk-table-columns [:quant-value-4d :quant-value-2d]))}]
                                     :showPagination false :sortable true :pageSize 2 :showPageSizeOptions false :className "-striped -highlight"
                                     :pivotBy        [:qt-jpm-sector :financial-seniority :qt-risk-country-name]
                                     :filterable      true :defaultFilterMethod (fn [filterfn row] true)
                                     :onFilteredChange #(reset! fins-pivot-filter %)
                                     :expanded       @expander-fins :onExpandedChange #(reset! expander-fins %)
                                     :sorted         [{:id :bm-weight :desc true}]}]])
                  [gap :size "1px"]
                  )
                (gt/element-box "scorecard-risk-chart" "100%" (str portfolio " " sector " bonds held") (filter #(contains? (set (map :isin vdisplay)) (:ISIN %)) @(rf/subscribe [:quant-model/model-output]))
                                [[oz/vega-lite (spot-chart-vega-spec (set (map :isin vdisplay)))]])
                (let [data (compress-data @(rf/subscribe [:scorecard/attribution-table]) sector)]
                  (gt/element-box "scorecard-attribution" "100%" (str portfolio " " sector " attribution, top/bottom 5 YTD and weekly as of " @(rf/subscribe [:attribution-date])) data
                                  [[:> ReactTable
                                    {:data           data
                                     :columns        [{:Header "Groups" :columns (mapv tables/attribution-table-columns [:issuer :country])}
                                                      {:Header "Weekly" :columns (mapv tables/attribution-table-columns [:total-effect-wtd :contribution-wtd :bm-contribution-wtd])}
                                                      {:Header "Previous week" :columns (mapv tables/attribution-table-columns [:total-effect-pwtd :contribution-pwtd :bm-contribution-pwtd])}
                                                      {:Header "Year to date" :columns (mapv tables/attribution-table-columns [:total-effect-ytd :contribution-ytd :bm-contribution-ytd])}
                                                      {:Header "YTD weights" :columns (mapv tables/attribution-table-columns [:xs-weight-ytd :weight-ytd :bm-weight-ytd])}]
                                     :showPagination false :sortable true :filterable false :pageSize (count data) :className "-striped -highlight"}]]))
                (gt/element-box "scorecard-nav-portfolios" "100%" (str sector " NAV across portfolios, grouped by issuer") @(rf/subscribe [:scorecard-risk/multiple-tree])
                                [(let [cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (not (some #{p} ["OG-EQ-HDG" "OG-INF-HDG" "OG-LESS-CHRE" "OGEMHCD" "IUSSEMD"]))]
                                                       {:Header p :accessor (name p) :width "100px" :style {:textAlign "right"} :aggregate tables/sum-rows :Cell tables/round2*100-if-not0}))]
                                   [:> ReactTable
                                    {:data                @(rf/subscribe [:scorecard-risk/multiple-tree])
                                     :columns             (concat (mapv tables/risk-table-columns [:issuer :name]) cols)
                                     :showPagination      false :sortable true :filterable false :pageSize (count (distinct (map :TICKER @(rf/subscribe [:scorecard-risk/multiple-tree]))))
                                     :showPageSizeOptions false :className "-striped -highlight" :pivotBy [:TICKER] :defaultSorted [{:id :OGEMCORD :desc true}]}])])
                [scorecard-table]
                [trade-history-sc]
                ]]))

(defn view []
  (rf/dispatch [:get-qdb-securities "CONSUMERS"])
  [box :width standard-box-width :padding "80px 20px" :class "subbody" :child [risk-view]])

