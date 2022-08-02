(ns jasminegui.implementation
  (:require
    [re-frame.core :as rf]
    [reagent.core :as r]
    [jasminegui.static :as static]
    [jasminegui.tools :as tools]
    [re-com.core     :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                             single-dropdown modal-panel throbber alert-box typeahead selection-list md-icon-button input-password
                             input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box      :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util     :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.tables :as tables]
    [cljs-time.core    :refer [today days minus plus day-of-week before?]]
    )

  )


(def trade-implementation-leg-template
  {
   :buysell "B"
   :ISIN "NEW ISSUE"
   :NAME nil
   :price "100"
   :value "100"
   :cast-parent-id nil
   :CRNCY "USD"
   :trade-type nil
   :target-type nil
   :target-level nil
   :limit-type nil
   :limit-level nil
   ;:parent-bond nil
   :final-or-inc "Incremental NAV"                                        ;["Final NAV" "Incremental NAV"]
   :allocation nil
   :notes nil
   :total-trade 0
   })

(def trade-implementation-template
  {:tradeanalyser.implementation/implementation-id nil
   :tradeanalyser.implementation/analyst nil
   :tradeanalyser.implementation/approver-1 nil
   :tradeanalyser.implementation/approver-2 "None"
   :tradeanalyser.implementation/sector nil
   :tradeanalyser.implementation/country nil
   :tradeanalyser.implementation/IGHY nil                                                ;"IG"
   :tradeanalyser.implementation/note-for-dealers ""


   :tradeanalyser.implementation/entry-date (today)
   :tradeanalyser.implementation/strategy nil                                            ;(:id (first strategy-choices))
   :tradeanalyser.implementation/thinkfolio-reason nil                                   ;(:id (first thinkfolio-reason-choices))
   :tradeanalyser.implementation/thinkfolio-summary nil
   :tradeanalyser.implementation/reasons-for nil
   :tradeanalyser.implementation/reasons-against nil
   :tradeanalyser.implementation/esg-considerations nil
   :tradeanalyser.implementation/trade-legs {0 trade-implementation-leg-template}
   :tradeanalyser.implementation/parent-exposure nil

   })

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;TRADE IMPLEMENTATION EVENTS;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(rf/reg-event-db
  :trade-implementation/reset
  (fn [db [_ ]]
    (assoc db :implementation/trade-implementation
              (assoc-in trade-implementation-template
                        [:tradeanalyser.implementation/trade-legs 0 :allocation]
                        (into {} (for [p (db :portfolios) :when (not (some #{p} ["OG-LESS-CHRE" "OG-INF-HDG" "OG-EQ-HDG"]))] [(keyword p) {:existing 0 :target "0" :trade-notional 0}])))
              :tradeanalyser.implementation/parent-exposure (into {} (for [p (db :portfolios) :when (not (some #{p} ["OG-LESS-CHRE" "OG-INF-HDG" "OG-EQ-HDG"]))] [(keyword p) {:existing 0 :change 0 :final 0}])))))


(rf/reg-event-db :trade-implementation/trade-item (fn [db [_  k v]] (assoc-in db [:implementation/trade-implementation k] v)))

(defn parent-exposure-impact [db leg-number kportfolio]
  (let [leg (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number])]
    (- (get-in leg [:allocation kportfolio :target]) (case (:final-or-inc leg)
                                                       "Final NAV" (get-in leg [:allocation kportfolio :existing])
                                                       "Final parent NAV" (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/parent-exposure kportfolio :existing])
                                                       0))))

;(defn parent-exposure-impact [db leg-number kportfolio]
;  (let [leg (get-in db [:implementation/trade-implementation :trade-legs leg-number])]
;    (- (get-in leg [:allocation kportfolio :target]) (if (= (:final-or-inc leg) "Final NAV") (get-in leg [:allocation kportfolio :existing]) 0))))

(defn recalculate-parent-exposure [db kportfolio]
  (let [cast-parent-id-0 (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs 0 :cast-parent-id])
        good-leg-numbers (keys (filter #(= (:cast-parent-id (second %)) cast-parent-id-0) (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs])))
        impact (reduce + (map #(parent-exposure-impact db % kportfolio) good-leg-numbers))]
    (-> db
        (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/parent-exposure kportfolio :change] impact)
        (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/parent-exposure kportfolio :final] (+ (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/parent-exposure kportfolio :existing]) impact)))))

(defn full-recalculate-parent-exposure [db]
  (reduce #(recalculate-parent-exposure %1 (keyword %2)) db (:portfolios db)))

(defn recalculate-trade-notional [db leg-number kportfolio]
  (let [leg (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number])
        value (:value leg)
        target (get-in leg [:allocation kportfolio :target])
        final-or-inc (:final-or-inc leg)
        existing (case final-or-inc
                   "Final NAV" (get-in leg [:allocation kportfolio :existing])
                   "Final parent NAV" (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/parent-exposure kportfolio :existing])
                   0)
        value-usd (* (get-in db [:implementation/fx (keyword (:CRNCY leg))]) value)
        portfolio-nav-usd (* (get-in db [:implementation/fx (keyword (get-in db [:implementation/portfolio-nav kportfolio :ccy]))]) (get-in db [:implementation/portfolio-nav kportfolio :nav]))]
    (assoc-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :allocation kportfolio :trade-notional] (/ (* 0.01 (- target existing) portfolio-nav-usd) (* 0.01 value-usd)))))

(defn recalculate-trade-notional-all-portfolios [db leg-number]
  (reduce #(recalculate-trade-notional %1 leg-number (keyword %2)) db (:portfolios db)))

(defn map-target-data [db leg-number final-or-inc]
  (let [f (fn [start-db p]
            (assoc-in start-db
                      [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :allocation (keyword p) :target]
                      (case final-or-inc
                        "Final NAV" (str (get-in start-db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :allocation (keyword p) :existing]))
                        "Final parent NAV" (str (if-let [x (get-in start-db [:implementation/trade-implementation :tradeanalyser.implementation/parent-exposure (keyword p) :existing])] x 0))
                        "0")))]
    (reduce f db (:portfolios db))))

(defn recalculate-full-trade-notional [db leg-number]
  (if-let [allocation (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :allocation])]
    (assoc-in db
              [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :total-trade]
              (reduce + (map #(get-in allocation [(keyword %) :trade-notional]) (:portfolios db))))
    db))

(rf/reg-event-db
  :trade-implementation/trade-leg
  (fn [db [_ leg-number key value]]
    (if (= key :final-or-inc)
      (-> db
          (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number key] value)
          (map-target-data leg-number value)
          (recalculate-trade-notional-all-portfolios leg-number)
          (recalculate-full-trade-notional leg-number)
          (full-recalculate-parent-exposure))
      (assoc-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number key] value))))

(rf/reg-event-db
  :trade-implementation/hard-recalc
  (fn [db [_ leg-number]]
    (-> db
        (recalculate-trade-notional-all-portfolios leg-number)
        (recalculate-full-trade-notional leg-number)
        (full-recalculate-parent-exposure))))

(rf/reg-event-db
  :trade-implementation/allocation
  (fn [db [_ leg-number portfolio target]]
    (full-recalculate-parent-exposure
      (recalculate-full-trade-notional
        (recalculate-trade-notional
          (assoc-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :allocation portfolio :target] target)
          leg-number portfolio) leg-number))))

(rf/reg-event-db
  :trade-implementation/copy-existing-positions
  (fn [db [_ leg-number]]
    (-> db
        (map-target-data leg-number "Final NAV")
        (recalculate-trade-notional-all-portfolios leg-number)
        (recalculate-full-trade-notional leg-number)
        (full-recalculate-parent-exposure))))

(rf/reg-event-db
  :trade-implementation/target-0
  (fn [db [_ leg-number]]
    (-> db
        (map-target-data leg-number "Incremental NAV")
        (recalculate-trade-notional-all-portfolios leg-number)
        (recalculate-full-trade-notional leg-number)
        (full-recalculate-parent-exposure))))

(rf/reg-event-db
  :trade-implementation/add-leg
  (fn [db [_ ]]
    (assoc-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs  (count (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs]))]
              (assoc trade-implementation-leg-template :allocation (into {} (for [p (db :portfolios) :when (not (some #{p} ["OG-LESS-CHRE" "OG-INF-HDG" "OG-EQ-HDG"]))] [(keyword p) {:existing 0 :target "0" :trade-notional 0}]))))))

(rf/reg-event-db
  :trade-implementation/remove-leg
  (fn [db [_ ]]
    (update-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs] dissoc (dec (count (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs]))))))

(defn trade-implementation-format-before-saving
  [trade]
  (let [encode-uri-component (fn [x] (js/encodeURIComponent x))]
    (-> trade
        (update :tradeanalyser.implementation/entry-date tools/gdate->yyyyMMdd)
        (update :tradeanalyser.implementation/reasons-for encode-uri-component)
        (update :tradeanalyser.implementation/reasons-against encode-uri-component)
        (update :tradeanalyser.implementation/esg-considerations encode-uri-component))))

(rf/reg-event-fx
  :trade-implementation/send-email
  (fn [{:keys [db]} [_ trade]]
    {:db (assoc db :implementation/success-modal {:show true :on-close :trade-implementation/saved :response nil})
     :http-post-dispatch {:url         (str static/server-address "trade-implementation-save-email")
                          :edn-params  (trade-implementation-format-before-saving trade)
                          :dispatch-key [:trade-implementation-save-response]}}))

(rf/reg-event-fx
  :trade-implementation/save
  (fn [{:keys [db]} [_ trade]]
    {:db (assoc db :implementation/success-modal {:show true :on-close :trade-implementation/saved :response nil})
     :http-post-dispatch {:url         (str static/server-address "trade-implementation-save")
                          :edn-params  (trade-implementation-format-before-saving trade)
                          :dispatch-key [:trade-implementation-save-response]}}))

(rf/reg-event-db
  :trade-implementation-save-response
  (fn [db [_ data]]
    (rf/dispatch [:implementation-list-request])
    (assoc-in db [:implementation/success-modal :response] (:text-response data))))

(rf/reg-event-db
  :trade-implementation/saved
  (fn [db [_]] (assoc db :implementation/success-modal {:show false :on-close nil :response nil})))

(rf/reg-event-fx
  :trade-implementation/open
  (fn [{:keys [db]} [_ filename]]
    {:db db
     :http-get-dispatch {:url (str static/server-address "trade-implementation-open?filename=" (first (seq filename))) :dispatch-key [:trade-implementation-open-response]}}))

(rf/reg-event-db
  :trade-implementation-open-response
  ; here we de-keywordize the trade-legs ids from :22 to 22 as this is not supported behaviour, and is caused by cljs-http
  (fn [db [_ data]]
    (assoc db :implementation/trade-implementation (-> data
                                        (update :tradeanalyser.implementation/reasons-for #(try (js/decodeURIComponent %) (catch js/Error e %)))
                                        (update :tradeanalyser.implementation/reasons-against #(try (js/decodeURIComponent %) (catch js/Error e %)))
                                        (update :tradeanalyser.implementation/esg-considerations #(try (js/decodeURIComponent %) (catch js/Error e %)))
                                        (update :tradeanalyser.implementation/entry-date #(tools/int->gdate (js/parseInt %)))
                                        (assoc :tradeanalyser.implementation/trade-legs (into {} (for [[k v] (:tradeanalyser.implementation/trade-legs data)] [(cljs.reader/read-string (name k)) v]))))
              :implementation/show-implementation-selector false)))

;(rf/reg-event-fx
;  :trade-implementation/check-isin-old
;  (fn [{:keys [db]} [_ leg-number isin]]
;    {:http-get-dispatch {:url (str static/server-address "bond-static-data?ISIN=" isin) :dispatch-key [:trade-implementation/bond-static-data leg-number]}}))

(rf/reg-event-fx
  :trade-implementation/check-isin
  (fn [{:keys [db]} [_ leg-number ISIN]]
    (let [data (first (filter #(= (:ISIN %) ISIN) (db :quant-model/model-output)))
          f (fn [start-db p] (assoc-in
                               start-db
                               [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :allocation (keyword p) :existing]
                               (if-let [x (get-in (:implementation/live-positions db) [p ISIN])] x 0)))]
      (println data)
      {:db (reduce f
                   (-> db
                       (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :NAME] (if data (:Bond data) "not found"))
                       (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :CRNCY] (if data (:CRNCY data) "not found")))
                   (:portfolios db))})))


(rf/reg-event-fx
  :trade-implementation/check-pricing
  (fn [{:keys [db]} [_ leg-number isin]]
    {:http-get-dispatch {:url (str static/server-address "bond-pricing?ISIN=" isin) :dispatch-key [:trade-implementation/bond-pricing leg-number]}}))


(defn fill-parent-exposure [db cast-parent-id]
  (let [get-exposure (fn [database portfolio] (assoc-in database [:implementation/trade-implementation :tradeanalyser.implementation/parent-exposure (keyword portfolio) :existing] (* 100. (get-in db [:implementation/live-cast-parent-positions portfolio (str cast-parent-id)]))))]
    (reduce get-exposure db (:portfolios db))))

(defn fill-quant-value [db leg-number qmd]
  (if (some? qmd)
    (update-in db [:implementation/trade-implementation :tradeanalyser.implementation/reasons-for]
               #(str % "\n-------\n"
                     (:Bond qmd) " cheapness to svr models: 4D " (Math/round (:difference_svr qmd)) "bps 2D " (Math/round (:difference_svr_2d qmd))
                     "\n 1Y TR targets: To 4D FV " (:svr4d1yrtn qmd) "% To 2D FV " (:svr2d1yrtn qmd) "% To tight " (:upside1y qmd) "% To median " (:expected1y qmd) "% To wide " (:downside1y qmd) "%"

                     ;" universe score " (get qmd "URV_svr") " historical score " (get qmd "HRV_svr")

                     ))
    db))

(defn fill-static [db leg-number qmd]
  (if (and (zero? leg-number) (some? qmd))
    (-> db
        (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/analyst] (case (:Sector qmd)
                                                                                  "Sovereign" "Thys"
                                                                                  "TMT" "Rahul"
                                                                                  "Utilities" "Rahul"
                                                                                  "Metals & Mining" "Rahul"
                                                                                  "Oil & Gas" "Kevan"
                                                                                  "Financial" "Stacy"
                                                                                  "Real Estate" "Alan"
                                                                                  "Industrial" "Antonio"
                                                                                  "Pulp & Paper" "Rahul"
                                                                                  "Consumer" "Antonio"
                                                                                  "Infrastructure" "Antonio"
                                                                                  "Diversified" "Rahul"
                                                                                  "Transport" "Antonio"
                                                                                  ""))
        (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/sector] (:Sector qmd))
        (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/country] (:Country qmd))
        (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/IGHY] (if (<= (:Used_Rating_Score qmd) 10) "IG" "HY")))
    db))

;todo force USD here?
(rf/reg-event-db
  :trade-implementation/bond-pricing
  (fn [db [_ leg-number data]]
    (let [qmd (first (filter #(= (:ISIN %) (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :ISIN])) (db :quant-model/model-output)))]
      (->
        (recalculate-trade-notional-all-portfolios
          (let [[p v c] (if (:price data) [(:price data) (:value data) (str (:cast-parent-id data))] [100. 100. ""])]
            (-> (if (zero? leg-number) (fill-parent-exposure db (str (:cast-parent-id data))) db)
                (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :price] p)
                (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :value] v)
                (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :cast-parent-id] c)))
          leg-number)
        (fill-static leg-number qmd)                        ;(:quant-model data)
        (fill-quant-value leg-number qmd)))))               ;(:quant-model data)

;(rf/reg-event-db
;  :trade-implementation/bond-static-data
;  (fn [db [_ leg-number data]]
;    (let [ISIN (get-in db [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :ISIN])
;          f (fn [start-db p] (assoc-in
;                               start-db
;                               [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :allocation (keyword p) :existing]
;                               (if-let [x (get-in (:implementation/live-positions db) [p ISIN])] x 0)))]
;      (reduce f
;              (-> db
;                  (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :NAME] (if data (:NAME data) "not found"))
;                  (assoc-in [:implementation/trade-implementation :tradeanalyser.implementation/trade-legs leg-number :CRNCY] (if data (:CRNCY data) "not found")))
;              (:portfolios db)))))

(rf/reg-event-fx
  :trade-implementation/add-to-trade-analyzer
  (fn [{:keys [db]} [_ trade]]
    {:db (assoc db :implementation/success-modal {:show true :on-close :trade-implementation/saved-to-TA :response nil})
     :http-post-dispatch {:url         (str static/server-address "trade-implementation-to-TA")
                          :edn-params  (update-in trade [:tradeanalyser.implementation/entry-date] tools/gdate->yyyyMMdd)
                          :dispatch-key [:implementation/trade-implementation-to-TA-response]}}))

(rf/reg-event-db
  :trade-implementation-to-TA-response
  (fn [db [_ data]]
    (rf/dispatch [:trade-database-request (:active-portfolio db)])
    (assoc-in db [:implementation/success-modal :response] (:text-response data))))

(rf/reg-event-db
  :trade-implementation/saved-to-TA
  (fn [db [_]] (assoc db :implementation/success-modal {:show false :on-close nil :response nil})))

(rf/reg-event-db
  :trade-implementation/get-parent-exposure
  (fn [db [_ leg-number cast-parent-id]] (if (zero? leg-number) (fill-parent-exposure db cast-parent-id) db)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def default-width "900px")

(def thinkfolio-reason-choices-vector
  [
   {:group "Compliance" :id "Cash Management"}              ;
   {:group "Compliance" :id "Correcting Overdraft"}         ;
   {:group "Compliance" :id "Compliance Rebalance"}         ;

   {:group "Interest rate management" :id "Increase Duration Exposure (Scorecard)"} ;used for pure interest rate stuff
   {:group "Interest rate management" :id "Decreasing Duration Exposure (Scorecard)"} ;used for pure interest rate stuff

   {:group "Adding credit risk" :id "Improving Credit Score (Fundamentals)"} ;credit calls
   {:group "Adding credit risk" :id "Improving Credit Score (Overall)"} ;
   {:group "Adding credit risk" :id "Improving Credit Score (Technicals)"} ;
   {:group "Adding credit risk" :id "Improving Credit Score (Valuation)"} ;

   {:group "Reducing credit risk" :id "Deteriorating Credit Score (Fundamentals)"} ;credit calls
   {:group "Reducing credit risk" :id "Deteriorating Credit Score (Overall)"} ;
   {:group "Reducing credit risk" :id "Deteriorating Credit Score (Technicals)"} ;
   {:group "Reducing credit risk" :id "Deteriorating Credit Score (Valuation)"} ;


   {:group "Rebalancing" :id "Efficient Portfolio Management"} ;portfolio management
   {:group "Rebalancing" :id "Flow from Client (Inflow)"}   ;
   {:group "Rebalancing" :id "Flow to Client (Outflow)"}    ;
   {:group "Rebalancing" :id "Implementing Curve Strategy (See Comment)"} ;
   {:group "Rebalancing" :id "Rebalancing due to Index changes"} ;
   {:group "Rebalancing" :id "Rebalancing Portfolio"}       ;
   {:group "Rebalancing" :id "Reinvesting Maturity/Coupon"} ;
   {:group "Rebalancing" :id "Switch - Cash Neutral"}       ;
   {:group "Rebalancing" :id "Switch - Duration Neutral"}   ;


   {:group "DO NOT USE" :id "Increasing Credit Exposure (See Comment)"} ;;;;we should get rid of - no opposite
   {:group "DO NOT USE" :id "Reducing Credit Exposure (Scorecard)"} ;;;;we should get rid of - no opposite
   {:group "DO NOT USE" :id "Decrease Duration Exposure (See Comment)"} ;;;;;we should get rid of - no opposite
   ])

(def thinkfolio-reason-choices (into [] (for [k thinkfolio-reason-choices-vector] (assoc k :label (:id k)))))

(defn portfolio-position-entry
  "We are going through every portfolio. Allocation needs to be between 0 and 100."
  [leg-number]
  (let [trade-implementation (rf/subscribe [:implementation/trade-implementation])
        undo-fn (fn [fleg p] (case (:final-or-inc @fleg)
                               "Final NAV" (str (if-let [x (get-in @fleg [:allocation (keyword p) :existing])] x 0))
                               "Final parent NAV" (str (if-let [x (get-in @trade-implementation [:tradeanalyser.implementation/parent-exposure (keyword p) :existing])] x 0))
                               "0"))
        leg (r/cursor trade-implementation [:tradeanalyser.implementation/trade-legs leg-number])
        portfolios @(rf/subscribe [:portfolios])
        dw "100px"]

    [v-box  :gap "0px" :padding "10px" :width "450px" :align :start :style {:border "solid 1px grey"}
     :children
     (concat
       [[h-box :children [[label :label "Clean price used" :width "200px"] [gap :size "20px"] [label :label (gstring/format "%.2f" (:price @leg))]]]
        [gap :size "10px"]
        [h-box :children [[label :label "Total expected trade" :width "200px"] [gap :size "20px"] [label :label (tools/tnfmt (:total-trade @leg))]]]
        [gap :size "20px"]
        [h-box :width "100%" :justify :between :align :center
         :children [[title :level :level3 :label "Portfolio"]
                    [title :level :level3 :label "Existing (%)"]
                    [title :level :level3 :label (case (:final-or-inc @leg) "Final NAV" "Final (%)" "Final parent NAV" "P. final (%)" "Change (%)")]
                    [title :level :level3 :label "Trade notional"]]]
        [box :align-self :center :width "100%" :child [line :color "#134848" :size "1px"]]
        [gap :size "10px"]]
       (into [] (apply concat (for [p portfolios :when (not (some #{p} ["OG-LESS-CHRE" "OG-INF-HDG" "OG-EQ-HDG"]))]
                           (let [pos (r/cursor leg [:allocation (keyword p) :target])]
                             (conj (if (some #{p} ["IALEEMCD" "AIFGLBCD" "OGEMIGC" "IMRAGEMD" "ITLXEMD" "OGEMEMSD" "OGEMHCD" "IMETEMCD" "ITLXEMD4" "WISHLIST"])
                                     [[gap :size "5px"] [box :align-self :center :width "100%" :child [line :color "#134848" :size "1px"]] [gap :size "5px"]] [])
                                   [h-box :width "100%" :align :center :justify :between
                                    :children [[box :width dw :child [label :label p]]
                                               [box :width dw :child [label :width "100%" :style {:display "block" :text-align "center" :width "100%"} :label (gstring/format "%.2f" (if-let [x (get-in @leg [:allocation (keyword p) :existing])] x 0))]]
                                               [box :width dw :child [input-text :width "100%" :model pos :status (tools/not-number-m100-to-100-error-status @pos) :on-change #(rf/dispatch [:trade-implementation/allocation leg-number (keyword p) %])]]
                                               [md-icon-button :md-icon-name "zmdi zmdi-undo" :size :smaller :on-click #(rf/dispatch [:trade-implementation/allocation leg-number (keyword p) (undo-fn leg p)])]
                                               [box :width dw :child [label :width "100%" :style {:display "block" :text-align "center" :width "100%"} :label (tools/tnfmt (if-let [x (get-in @leg [:allocation (keyword p) :trade-notional])] x 0))]]]])))))
       [[h-box :width "100%" :align :center :justify :around
         :children [[button :label "Copy existing" :on-click #(rf/dispatch [:trade-implementation/copy-existing-positions leg-number])]
                    [button :label "Reset to 0" :on-click #(rf/dispatch [:trade-implementation/target-0 leg-number])]
                    [button :label "Hard recalc" :on-click #(rf/dispatch [:trade-implementation/hard-recalc leg-number])]]]]
       )]))

(defn on-isin-change [leg-number i]
  (rf/dispatch [:trade-implementation/trade-leg leg-number :ISIN i])
  (rf/dispatch [:trade-implementation/check-isin leg-number i])
  (rf/dispatch [:trade-implementation/check-pricing leg-number i]))

(rf/reg-event-fx
  :implementation/on-isin-change
  (fn [{:keys [db]} [_ leg-number i]]
    {:db db
     :fx [[:dispatch [:trade-implementation/trade-leg leg-number :ISIN i]]
          [:dispatch [:trade-implementation/check-isin leg-number i]]
          [:dispatch [:trade-implementation/check-pricing leg-number i]]]}))

(defn hb [x] [h-box :gap "15px" :align :center :children x])

(defn trade-description []
  (let [fw "150px"
        lw "300px"
        trade-implementation  (rf/subscribe [:implementation/trade-implementation])
        first-leg-isin        (r/cursor trade-implementation [:tradeanalyser.implementation/trade-legs 0 :ISIN])
        analyst-map           (into [] (for [x @(rf/subscribe [:analysts]) :when (not (some #{x} ["Juliet" "Esther" "Leah" "Tammy"]))] {:id x :label x}))
        analyst               (r/cursor trade-implementation [:tradeanalyser.implementation/analyst])
        sector                (r/cursor trade-implementation [:tradeanalyser.implementation/sector])
        country               (r/cursor trade-implementation [:tradeanalyser.implementation/country])
        approver-1            (r/cursor trade-implementation [:tradeanalyser.implementation/approver-1])
        approver-2            (r/cursor trade-implementation [:tradeanalyser.implementation/approver-2])
        thinkfolio-reason     (r/cursor trade-implementation [:tradeanalyser.implementation/thinkfolio-reason])
        thinkfolio-summary    (r/cursor trade-implementation [:tradeanalyser.implementation/thinkfolio-summary])
        reasons-for           (r/cursor trade-implementation [:tradeanalyser.implementation/reasons-for])
        reasons-against       (r/cursor trade-implementation [:tradeanalyser.implementation/reasons-against])
        esg-considerations    (r/cursor trade-implementation [:tradeanalyser.implementation/esg-considerations])
        ighy                  (r/cursor trade-implementation [:tradeanalyser.implementation/IGHY])
        strategy              (r/cursor trade-implementation [:tradeanalyser.implementation/strategy])
        entry-date            (r/cursor trade-implementation [:tradeanalyser.implementation/entry-date])
        note-for-dealers      (r/cursor trade-implementation [:tradeanalyser.implementation/note-for-dealers])]
    [v-box :gap "10px" :class "element" :style {:border "solid 1px grey"}
     :children [[title :label "Overview" :level :level1]
                [hb [[label :width fw :label "Entry date"]
                     [datepicker-dropdown :model entry-date
                      :minimum (tools/int->gdate 20220101) :maximum (today)
                      :selectable-fn #(< (day-of-week %) 6) :start-of-week 0 :format "dd/MM/yyyy" :show-today? true
                      :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/entry-date %])]]]
                [hb [[label :width fw :label "ISIN of first leg"][input-text :width lw :model first-leg-isin :on-change #(rf/dispatch [:implementation/on-isin-change 0 %])]]] ;(partial on-isin-change 0)
                [hb [[label :width fw :label "Analyst"] [single-dropdown :width lw :model analyst :choices analyst-map :filter-box? true :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/analyst %])]]]
                [hb [[label :width fw :label "Sector"][single-dropdown :width lw :model sector :choices (into [] (for [x @(rf/subscribe [:jpm-sectors])] {:id x :label x})) :filter-box? true :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/sector %])]]]
                [hb [[label :width fw :label "Country"][single-dropdown :width lw :model country :choices (sort-by :label (mapv #(clojure.set/rename-keys % {:CountryCode :id :LongName :label}) @(rf/subscribe [:country-codes]))) :filter-box? true :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/country %])]]]
                [hb [[label :width fw :label "Rating group"][single-dropdown :width lw :model ighy :choices (into [] (for [x ["IG" "HY"]] {:id x :label x})) :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/IGHY %])]]]
                [hb [[label :width fw :label "Strategy"]  [single-dropdown :width lw :model strategy :choices jasminegui.ta2022.tables/strategy-choices :filter-box? true :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/strategy %])]]]
                [hb [[label :width fw :label "ThinkFolio reason"][single-dropdown :width lw :model thinkfolio-reason :choices thinkfolio-reason-choices :filter-box? true :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/thinkfolio-reason %])]]]
                [hb [[label :width fw :label "Trade agreed by (1/2):"] [single-dropdown :width lw :model approver-1 :choices (conj analyst-map {:id "None" :label "None"}) :filter-box? true :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/approver-1 %])]]]
                [hb [[label :width fw :label "Trade agreed by (2/2):"][single-dropdown :width lw :model approver-2 :choices (conj analyst-map {:id "None" :label "None"}) :filter-box? true :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/approver-2 %])]]]
                [hb [[label :width fw :label "ThinkFolio summary"][input-text :width "600px" :model thinkfolio-summary :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/thinkfolio-summary %])]]]
                [hb [[label :width fw :label "Reasons for the trade"][input-textarea :width "600px" :rows "10" :model reasons-for :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/reasons-for %])]]]
                [hb [[label :width fw :label "Reasons against the trade"] [input-textarea :width "600px" :rows "10" :model reasons-against :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/reasons-against %])]]]
                [hb [[label :width fw :label "ESG considerations"] [input-textarea :width "600px" :rows "10" :model esg-considerations :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/esg-considerations %])]]]
                [hb [[label :width fw :label "Note for dealers"]  [input-text :width "600px" :model note-for-dealers :on-change #(rf/dispatch [:trade-implementation/trade-item :tradeanalyser.implementation/note-for-dealers %])]]]]]))

(defn trade-leg [leg-number]
  (let [fw "100px"
        lw "200px"
        trade-implementation (rf/subscribe [:implementation/trade-implementation])
        on-cast-parent-change  (fn [i]
                                 (rf/dispatch [:trade-implementation/trade-leg leg-number :cast-parent-id i])
                                 (rf/dispatch [:trade-implementation/get-parent-exposure leg-number i]))
        leg           (r/cursor trade-implementation [:tradeanalyser.implementation/trade-legs leg-number])
        buysell       (r/cursor leg [:buysell])
        ISIN          (r/cursor leg [:ISIN])
        CRNCY         (r/cursor leg [:CRNCY])
        NAME          (r/cursor leg [:NAME])
        cast-parent   (r/cursor leg [:cast-parent-id])
        trade-type    (r/cursor leg [:trade-type])
        target-type   (r/cursor leg [:target-type])
        target-level  (r/cursor leg [:target-level])
        limit-type    (r/cursor leg [:limit-type])
        limit-level   (r/cursor leg [:limit-level])
        final-or-inc  (r/cursor leg [:final-or-inc])
        notes         (r/cursor leg [:notes])]
    [v-box
     :gap "10px" :style {:border "solid 1px grey"} :class "element" :width "500px"
     :children [[title :label (str "Trade leg " (inc leg-number)) :level :level1]
                [hb [[label :width fw :label "Buy/Sell"]         [single-dropdown :width lw :model buysell :choices [{:id "Buy" :label "Buy"} {:id "Sell" :label "Sell"}] :on-change #(rf/dispatch [:trade-implementation/trade-leg leg-number :buysell %])]]]
                [hb [[label :width fw :label "ISIN"]             [input-text :width lw :model ISIN :on-change #(rf/dispatch [:implementation/on-isin-change leg-number %])]]] ;(partial on-isin-change leg-number)
                [hb [[label :width fw :label "Currency"]         [input-text :width lw :model CRNCY :on-change #(rf/dispatch [:trade-implementation/trade-leg leg-number :CRNCY %])]]]
                [hb [[label :width fw :label "Name"]             [input-text :width lw :model NAME :on-change #(rf/dispatch [:trade-implementation/trade-leg leg-number :NAME %])]]]
                [hb [[label :width fw :label "Cast parent id"]   [input-text :width lw :model cast-parent :on-change on-cast-parent-change]]]
                [hb [[label :width fw :label "Trade type"]       [single-dropdown :width lw :model trade-type :choices (mapv (fn [x] {:id x :label x}) ["New Issue" "Outright Buy" "Outright Sell" "RV Switch"]) :on-change #(rf/dispatch [:trade-implementation/trade-leg leg-number :trade-type %])]]]
                [hb [[label :width fw :label "Target type"]      [single-dropdown :width lw :model target-type :choices (mapv (fn [x] {:id x :label x}) ["At market" "Price" "Yield" "Z-spread" "G-spread"]) :on-change #(rf/dispatch [:trade-implementation/trade-leg leg-number :target-type %])]]]
                [hb [[label :width fw :label "Target level"]     [input-text :width lw :model target-level :on-change #(rf/dispatch [:trade-implementation/trade-leg leg-number :target-level %])]]]
                [hb [[label :width fw :label "Limit type"]       [single-dropdown :width lw :model limit-type :choices (mapv (fn [x] {:id x :label x}) ["At market" "Price" "Yield" "Z-spread" "G-spread"]) :on-change #(rf/dispatch [:trade-implementation/trade-leg leg-number :limit-type %])]]]
                [hb [[label :width fw :label "Limit level"]      [input-text :width lw :model limit-level :on-change #(rf/dispatch [:trade-implementation/trade-leg leg-number :limit-level %])]]]
                [hb [[label :width fw :label "Target NAV type"]  [single-dropdown :width lw :model final-or-inc :choices (mapv (fn [x] {:id x :label x}) ["Incremental NAV" "Final NAV" "Final parent NAV"]) :on-change #(rf/dispatch [:trade-implementation/trade-leg leg-number :final-or-inc %])]]]
                [hb [[label :width fw :label "Allocation"]]]
                [hb [[box :size "5" :child [portfolio-position-entry leg-number]]]]
                [hb [[label :width fw :label "Notes"]            [input-text :width "300px" :model notes :on-change #(rf/dispatch [:trade-implementation/trade-leg leg-number :notes %])]]]]]))

(defn parent-id-exposure []
  (let [trade-implementation (rf/subscribe [:implementation/trade-implementation])
        parent-exposure (r/cursor trade-implementation [:tradeanalyser.implementation/parent-exposure])
        portfolios @(rf/subscribe [:portfolios])
        dw "100px"]
    [v-box
     :gap "10px" :style {:border "solid 1px grey"} :class "element" :width "500px"
     :children [[title :label (str "Parent exposure") :level :level1]
                (if (apply = (map :cast-parent-id (vals (:tradeanalyser.implementation/trade-legs @trade-implementation))))
                  [:label "All legs have the same cast parent id, all good."]
                  [:label "Legs have different cast parent id, returning total parent exposure for leg 1 only."])
                [v-box  :gap "10px" :padding "10px" :width "450px" :align :start :style {:border "solid 1px grey"}
                 :children [[hb [[label :width dw :label "Portfolio"] [label :width dw :label "Existing (%)"] [label :width dw :label "Change (%)"] [label :width dw :label "Final (%)"]]]
                            (doall (for [p portfolios]
                                     (let [g (fn [k] (gstring/format "%.2f" (if-let [x (get-in @parent-exposure [(keyword p) k])] x 0)))]
                                       ^{:key p} [hb [[label :width dw :label p]
                                                             [label :width dw :style {:display "block" :text-align "center" :width "100%"} :label (g :existing)]
                                                             [label :width dw :style {:display "block" :text-align "center" :width "100%"} :label (g :change)]
                                                             [label :width dw :style {:display "block" :text-align "center" :width "100%"} :label (g :final)]]])))]]]]))


;(def cash (r/atom nil))
;(reset! cash (into {} (for [p @(rf/subscribe [:portfolios])] [(keyword p) (gstring/format "%.2f" (get (first (tools/chainfilter {:portfolio p} @(rf/subscribe [:summary-display/table]))) :cash-pct))])))


;where full-recalculate-parent-exposure create full-recalculate-cash-change
(defn cash-impact []
      (let [
            ;data @(rf/subscribe [:summary-display/table])
            ;portfolios @(rf/subscribe [:portfolios])
            ;;existing-cash (zipmap (map :portfolio @(rf/subscribe [:summary-display/table])) (map :cash-pct @(rf/subscribe [:summary-display/table])))
            ;trade-implementation (rf/subscribe [:implementation/trade-implementation])
            ;existing-cash (into {} (for [p portfolios] [(keyword p) (gstring/format "%.2f" (get (first (tools/chainfilter {:portfolio p} data)) :cash-pct))]))
            ;legs @(r/cursor trade-implementation [:tradeanalyser.implementation/trade-legs])
            ;clean_legs (for [leg (keys legs)] {(keyword (str "leg_number_" (str leg) "_")) (:allocation (legs leg))})
            ;aggregated-allocation (into {} (for [p portfolios]
            ;                                 [(keyword p) {:target (gstring/format "%.2f" (- (reduce + (for [leg clean_legs] (js/parseFloat (if (nil? (get-in leg [(first (first leg)) (keyword p) :target]))
            ;                                                                                                                                  0
            ;                                                                                                                                  (get-in leg [(first (first leg)) (keyword p) :target]))
            ;                                                                                                                                )))))}]))
            ;final-cash (into {} (for [p portfolios] [(keyword p) {:final (gstring/format "%.2f" (reduce + [(js/parseFloat (get existing-cash (keyword p))) (js/parseFloat (:target ((keyword p) aggregated-allocation)))]))}]))
            dw "100px"
            ]
        ;(println existing-cash)
        [v-box
         :gap "10px" :style {:border "solid 1px grey"} :class "element" :width "500px"
         :children [[title :label (str "Cash impact") :level :level1]
                    ;[:label "Based on T-1 projected cash  (not physical). Position change is aggregated"]
                    ;[v-box :gap "10px" :padding "10px" :width "450px" :align :start :style {:border "solid 1px grey"}
                    ; :children [[hb [[label :width dw :label "Portfolio"]
                    ;                 [label :width dw :label "Existing Cash (%)"]
                    ;                 [label :width dw :label "Cash Change (%)"]
                    ;                 [label :width dw :label "Final Cash (%)"]]]
                    ;            (doall (for [p portfolios]
                    ;                     ^{:key p} [hb [[label :width dw :label p]
                    ;                                    [label :width dw :style {:display "block" :text-align "center" :width "100%"} :label (get existing-cash (keyword p))]
                    ;                                    [label :width dw :style {:display "block" :text-align "center" :width "100%"} :label (:target ((keyword p) aggregated-allocation))]
                    ;                                    [label :width dw :style {:display "block" :text-align "center" :width "100%"} :label (:final ((keyword p) final-cash))]]]))]]
                    ]]
        )
  )




(defn trade-implementation-input []
  [v-box :class "rightelement" :gap "20px" :padding "80px 20px" :width default-width
   :children [[trade-description]
              [h-box :gap "10px" :children (into [] (for [i (range (count (:tradeanalyser.implementation/trade-legs @(rf/subscribe [:implementation/trade-implementation]))))] [trade-leg i]))]
              [h-box :gap "10px" :children [[parent-id-exposure] [cash-impact]]]
              ]])

(rf/reg-event-fx
  :implementation/show-implementation-selector
  (fn [{:keys [db]} [_ b]]
    (merge {:db (assoc db :implementation/show-implementation-selector b)}
           (if b {:fx [[:dispatch [:implementation-list-request]]]}))))

(defn trade-implementation-control []
  [v-box :gap "10px" :class "leftnavbar"
   :children [[box :child [button :style {:width "100%"} :label "Open trade"            :on-click #(rf/dispatch [:implementation/show-implementation-selector true])]]
              [box :child [button :style {:width "100%"} :label "Save trade"            :on-click #(rf/dispatch [:trade-implementation/save @(rf/subscribe [:implementation/trade-implementation])])]]
              [box :child [button :style {:width "100%"} :label "Save and email trade"  :on-click #(rf/dispatch [:trade-implementation/send-email @(rf/subscribe [:implementation/trade-implementation])])]]
              [gap :size "20px"]
              [box :child [button :style {:width "100%"} :label "Add leg"               :on-click #(rf/dispatch [:trade-implementation/add-leg])]]
              [box :child [button :style {:width "100%"} :label "Remove leg"            :on-click #(rf/dispatch [:trade-implementation/remove-leg]) :disabled? (< (count (:tradeanalyser.implementation/trade-legs @(rf/subscribe [:implementation/trade-implementation]))) 2)]]
              [gap :size "20px"]
              [box :child [button :style {:width "100%"} :label "Clear trade"           :on-click #(rf/dispatch [:trade-implementation/reset])]]
              ]])

(def trade-to-open (r/atom (set [])))

(defn modal-open-implementation []
  (if @(rf/subscribe [:implementation/show-implementation-selector])
    [modal-panel :wrap-nicely? true :backdrop-on-click #(rf/dispatch [:implementation/show-implementation-selector false])
     :child [v-box :class "modal-ta-dlg" :gap "10px"
             :children [[label :label "Select trade:"]
                        [selection-list :max-height "500px" :model trade-to-open :multi-select? false :choices (into [] (for [x @(rf/subscribe [:implementation/implementation-list]) ] {:id x :label x})) :on-change #(reset! trade-to-open %)]
                        [button :style {:width "100%"} :label "Open" :on-click #(rf/dispatch [:trade-implementation/open @trade-to-open])]]]]))



(defn modal-success []
  (let [modal-data @(rf/subscribe [:implementation/success-modal])]
    (if (:show modal-data)
      [modal-panel
       :wrap-nicely? false
       :backdrop-on-click #(rf/dispatch [(:on-close modal-data)])
       :child [alert-box
               :padding "15px"
               :style {:width "450px"}
               :heading (if-let [x (:response modal-data)] x [box :align :center :child [throbber :size :large]])
               :closeable? true
               :on-close #(rf/dispatch [(:on-close modal-data)])]])))

(defn trade-implementation-view []
  (when-not @(rf/subscribe [:implementation/trade-implementation]) (rf/dispatch [:trade-implementation/reset]))
  [h-box :gap "10px" :padding "0px" :children [[trade-implementation-control] [trade-implementation-input] [modal-open-implementation] [modal-success]]])
