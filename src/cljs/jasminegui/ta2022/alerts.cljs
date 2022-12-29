(ns jasminegui.ta2022.alerts
  (:require
    [re-frame.core :as rf]
    [reagent.core :as r]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink alert-box md-circle-icon-button modal-panel typeahead md-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [jasminegui.tools :as t]
    [goog.string :as gstring]
    [goog.string.format]


    )
  )


(defn checknb [res k] (and res (some? (res k)) (number? (res k))))
(def default-width "800px")
(def lw "100px")
(defn hb [x] [h-box :gap "10px" :align :center :children x])

(def single-alert-template {:alert-type "single"
                            :description nil
                            :bloomberg-request-security-1 "" ;"security eg BRL Curncy"
                            :bloomberg-request-field-1 "" ;"field eg PX_LAST"
                            :comparison ">"
                            :comparison-value "100"})

(def spread-alert-template {:alert-type "spread"
                            :description nil
                            :bloomberg-request-security-1 "" ;"security eg BRL Curncy"
                            :bloomberg-request-field-1 "" ;"field eg PX_LAST"
                            :operator "-"
                            :bloomberg-request-security-2 "" ;"security eg BRL Curncy"
                            :bloomberg-request-field-2 "" ;"field eg PX_LAST"
                            :comparison "<"
                            :comparison-value "100"})

(def fundamental-alert-template {:alert-type "fundamental" :description nil})


(defn alert->alert-with-triggers [triggers a]
  (clojure.set/rename-keys (merge a (triggers (:ta2022.alert/uuid a))) {:latest-market-spread :latest-market-price}))

(defn alert->alert-with-triggers-sql [triggers a]
  (let [tkh nil]
    (clojure.set/rename-keys (merge a (triggers ((keyword tkh "uuid") a))) {:latest-market-spread :latest-market-price})))

(defn trade->alerts [trade alerts]
  (remove nil? (concat [(if-let [a (:ta2022.trade/relval-alert-uuid trade)] (assoc (alerts a) :ta2022.alert/alert-scope "relval"))
                        (if-let [a (:ta2022.trade/target-alert-uuid trade)] (assoc (alerts a) :ta2022.alert/alert-scope "target"))
                        (if-let [a (:ta2022.trade/review-alert-uuid trade)] (assoc (alerts a) :ta2022.alert/alert-scope "review"))
                        (if-let [a (:ta2022.trade/price-alert-uuid trade)] (assoc (alerts a) :ta2022.alert/alert-scope "price"))]
                       (if (and (:ta2022.trade/other-alert-uuids trade) (pos? (count (:ta2022.trade/other-alert-uuids trade))))
                         (mapv #(assoc (alerts %) :ta2022.alert/alert-scope "other") (:ta2022.trade/other-alert-uuids trade))))))

(defn trade->alerts-sql [trade alerts]
  (let [tkh nil]                   ;(if sql? nil "ta2022.alert")
    (remove nil? (concat [(if-let [a ((keyword tkh "relval_alert_uuid")  trade)] (assoc (alerts a) (keyword tkh "alert-scope") "relval"))
                          (if-let [a ((keyword tkh "target_alert_uuid") trade)] (assoc (alerts a) (keyword tkh "alert-scope") "target"))
                          (if-let [a ((keyword tkh "review_alert_uuid") trade)] (assoc (alerts a) (keyword tkh "alert-scope") "review"))
                          (if-let [a ((keyword tkh "price_alert_uuid") trade)] (assoc (alerts a) (keyword tkh "alert-scope") "price"))]

                         [(if-let [a ((keyword tkh "other_alert_uuid_1") trade)] (assoc (alerts a) (keyword tkh "alert-scope") "other"))
                          (if-let [a ((keyword tkh "other_alert_uuid_2") trade)] (assoc (alerts a) (keyword tkh "alert-scope") "other"))]
                         ;.... ;TODO add all alerts... 10..

                         ;(if sql?
                         ;  [(if-let [a ((keyword tkh "other-alert-uuid_1") trade)] (assoc (alerts a) (keyword tkh "alert-scope") "other"))
                         ;   (if-let [a ((keyword tkh "other-alert-uuid_2") trade)] (assoc (alerts a) (keyword tkh "alert-scope") "other"))] ;TODO add all alerts... 10..
                         ;  [(if (and (:ta2022.trade/other-alert-uuids  trade) (pos? (count (:ta2022.trade/other-alert-uuids trade)))) ;TODO TRICKY
                         ;     (mapv #(assoc (alerts %) :ta2022.alert/alert-scope "other") (:ta2022.trade/other-alert-uuids trade)))])

                         ))))

(defn alert-from-backend [alert]
  (-> (clojure.set/rename-keys alert
                               {:ta2022.alert/alert-type :alert-type
                                :ta2022.alert/description :description
                                :ta2022.alert/comparison :comparison
                                :ta2022.alert/comparison-value :comparison-value
                                :ta2022.alert/operator :operator})
      (update :comparison-value str)
      (assoc :bloomberg-request-security-1 (first ((if (= (:ta2022.alert/alert-type alert) "single") :ta2022.alert/bloomberg-request :ta2022.alert/bloomberg-request-1) alert)))
      (assoc :bloomberg-request-field-1 (second ((if (= (:ta2022.alert/alert-type alert) "single") :ta2022.alert/bloomberg-request :ta2022.alert/bloomberg-request-1) alert)))
      (assoc :bloomberg-request-security-2 (first ((if (= (:ta2022.alert/alert-type alert) "single") :ta2022.alert/bloomberg-request :ta2022.alert/bloomberg-request-2) alert)))
      (assoc :bloomberg-request-field-2 (second ((if (= (:ta2022.alert/alert-type alert) "single") :ta2022.alert/bloomberg-request :ta2022.alert/bloomberg-request-2) alert)))
      ))

(defn alert-from-backend-sql [alert]
  (let [tkhh nil                                            ;(if sql? nil "ta2022.alert")
        ]
    (-> (clojure.set/rename-keys alert
                               {(keyword tkhh "alert_type") :alert-type
                                (keyword tkhh "description") :description
                                (keyword tkhh "comparison") :comparison
                                (keyword tkhh "comparison_value") :comparison-value
                                (keyword tkhh "operator")  :operator})
      (update :comparison-value str)
      (assoc :bloomberg-request-security-1 ((if (= ((keyword tkhh "alert_type") alert) "single") (keyword tkhh "bloomberg_request_security") (keyword tkhh "bloomberg_request_security_1")) alert))
      (assoc :bloomberg-request-field-1 ((if (= ((keyword tkhh "alert_type") alert) "single") (keyword tkhh "bloomberg_request_field") (keyword tkhh "bloomberg_request_field_1")) alert))
      (assoc :bloomberg-request-security-2 ((if (= ((keyword tkhh "alert_type") alert) "single") (keyword tkhh "bloomberg_request_security") (keyword tkhh "bloomberg_request_security_2")) alert))
      (assoc :bloomberg-request-field-2 ((if (= ((keyword tkhh "alert_type") alert) "single") (keyword tkhh "bloomberg_request_field") (keyword tkhh "bloomberg_request_field_2")) alert))
      )
    ))


;(defn alert-from-backend-generic [alert sql?] ;TODO tricky with alerts since we know haev seperate fields for sec and field
;  (let [tkhh (if sql? nil "ta2022.alert")]
;    (-> (clojure.set/rename-keys alert
;                                 {(keyword tkhh "alert-type") :alert-type
;                                  (keyword tkhh "description") :description
;                                  (keyword tkhh "comparison") :comparison
;                                  (keyword tkhh "comparison-value") :comparison-value
;                                  (keyword tkhh "operator")  :operator})
;        (update :comparison-value str)
;        (assoc :bloomberg-request-security-1 (if sql?
;                                               ((if (= ((keyword tkhh "alert-type") alert) "single") (keyword tkhh "bloomberg-request-security") (keyword tkhh "bloomberg_request_security_1")) alert)
;                                               (first ((if (= (:ta2022.alert/alert-type alert) "single") :ta2022.alert/bloomberg-request :ta2022.alert/bloomberg-request-1) alert))))
;        (assoc :bloomberg-request-field-1 (if sql?
;                                            ((if (= ((keyword tkhh "alert-type") alert) "single") (keyword tkhh "bloomberg-request-field") (keyword tkhh "bloomberg_request_field_1")) alert)
;                                            (second ((if (= (:ta2022.alert/alert-type alert) "single") :ta2022.alert/bloomberg-request :ta2022.alert/bloomberg-request-1) alert))))
;        (assoc :bloomberg-request-security-2 (if sql?
;                                               ((if (= ((keyword tkhh "alert-type") alert) "single") (keyword tkhh "bloomberg-request-security") (keyword tkhh "bloomberg_request_security_2")) alert)
;                                               (first ((if (= (:ta2022.alert/alert-type alert) "single") :ta2022.alert/bloomberg-request :ta2022.alert/bloomberg-request-1) alert))))
;        (assoc :bloomberg-request-field-2 (if sql?
;                                            ((if (= ((keyword tkhh "alert-type") alert) "single") (keyword tkhh "bloomberg-request-field") (keyword tkhh "bloomberg_request_field_2")) alert)
;                                            (second ((if (= (:ta2022.alert/alert-type alert) "single") :ta2022.alert/bloomberg-request :ta2022.alert/bloomberg-request-1) alert))))
;        )))


(def bloomberg-asset-keys #{"Govt" "Corp" "Mtge" "M-Mkt" "Muni" "Pfd" "Equity" "Comdty" "Index" "Curncy" "Client"})
(def bloomberg-field-suggestions ["PX_LAST" "YLD_YTM_MID" "Z_SPRD_MID" "YAS_BOND_YLD" "YAS_ZSPREAD" "G_SPREAD_MID_CALC" "BLOOMBERG_MID_G_SPREAD" "NET_DEBT_TO_EBITDA" "TOT_DEBT_TO_EBITDA" "SHORT_AND_LONG_TERM_DEBT" "NET_DEBT" "EBITDA"])
(defn bbg-field-finder [s] (take 3 (for [field bloomberg-field-suggestions :when (re-find (re-pattern (str "(?i)" s)) field)] field)))
(defn clean-case [t] (+ (.toUpperCase (.charAt t 0)) (.toLowerCase (.slice t 1))))
(defn bbg-security-status [s] (try (if-not (some #{(clean-case (last (.split s " ")))} bloomberg-asset-keys) :error nil) (catch js/Error e :error)))
(defn not-number-error-status [s] (if-not (number? (cljs.reader/read-string s)) :error nil))

(defn test-result
  [alert-key alert-number]
  (if-let [data @(rf/subscribe [:ta2022/test-result])]
    (let [res (if (= alert-key :other-alerts) (get-in data [:other-alerts (keyword (str "k" alert-number))]) (get-in data [alert-key]))
          implied-price? (checknb res :implied-price)
          market-price? (or
                          (checknb res :latest-market-price)
                          (and (checknb res :latest-market-price-1) (checknb res :latest-market-price-2) (checknb res :latest-market-spread)))
          other-alert-ok? (and (not (get res :triggered)) market-price?)
          main-alert-ok? (and other-alert-ok? implied-price?)
          fmtfn (fn [x] (if (and x (number? x)) (gstring/format "%.2f" x) "-"))
          txt (str
                (if (:triggered res) "Already triggered!" "Not triggered.")
                (if market-price? (if (res :latest-market-spread)
                                    (str " Latest market prices and spread " (fmtfn (:latest-market-price-1 res)) " / " (fmtfn (:latest-market-price-2 res)) " / " (fmtfn (:latest-market-spread res)))
                                    (str " Latest market price " (fmtfn (:latest-market-price res)))) " No market price!")
                (if implied-price? (str " Implied price: " (fmtfn (:implied-price res))) " No implied bond price!"))]
      (if (= alert-key :other-alerts)
        [alert-box :padding "6px" :alert-type (if other-alert-ok? :info :danger) :body txt :style {:width "595px"}]
        [alert-box :padding "6px" :alert-type (if main-alert-ok? :info :danger) :body txt :style {:width "595px"}]))
    [alert-box :padding "6px" :alert-type :warning :body "Not tested" :style {:width "595px"}]))

(defn single-alert [trade-entry alert-key alert-number]
  (let [o? (= alert-key :other-alerts)
        bloomberg-request-security-1 (r/cursor trade-entry (if o? [alert-key alert-number :bloomberg-request-security-1] [alert-key :bloomberg-request-security-1]))
        bloomberg-request-field-1    (r/cursor trade-entry (if o? [alert-key alert-number :bloomberg-request-field-1] [alert-key :bloomberg-request-field-1]))
        description                  (r/cursor trade-entry (if o? [alert-key alert-number :description] [alert-key :description]))
        comparison                   (r/cursor trade-entry (if o? [alert-key alert-number :comparison] [alert-key :comparison]))
        comparison-value             (r/cursor trade-entry (if o? [alert-key alert-number :comparison-value] [alert-key :comparison-value]))
        guess-description (cond
                            (= @bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp")) (case @bloomberg-request-field-1
                                                                                                   "PX_LAST" (str "price " @comparison " " @comparison-value)
                                                                                                   "YLD_YTM_MID" (str "yield " @comparison " " @comparison-value)
                                                                                                   "YAS_BOND_YLD" (str "yield " @comparison " " @comparison-value)
                                                                                                   "Z_SPRD_MID" (str "Z " @comparison " " @comparison-value)
                                                                                                   "YAS_ZSPREAD" (str "Z " @comparison " " @comparison-value)
                                                                                                   "BLOOMBERG_MID_G_SPREAD" (str "G " @comparison " " @comparison-value)
                                                                                                   "G_SPREAD_MID_CALC" (str "G " @comparison " " @comparison-value)
                                                                                                   "Failed to guess")
                            (some #{(clean-case (last (.split @bloomberg-request-security-1 " ")))} ["Equity" "Comdty" "Index" "Curncy"]) (str (first (.split @bloomberg-request-security-1 " ")) " " @comparison " " @comparison-value)
                            :else "Failed to guess")]
    [v-box :gap "5px"
     :children [[hb [[label :width lw :label "Condition"]
                     [md-icon-button :md-icon-name "zmdi zmdi-link" :size :smaller :on-click #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp")))]
                     [input-text :width "165px" :placeholder "BRL Curncy" :model bloomberg-request-security-1 :status (bbg-security-status @bloomberg-request-security-1) :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-security-1 %))]
                     [typeahead :width "200px" :data-source bbg-field-finder :change-on-blur? true :placeholder "PX_LAST" :rigid? false :model bloomberg-request-field-1 :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-field-1 %))]
                     [single-dropdown :width "100px" :choices [{:id ">" :label "above"} {:id "<" :label "below"}] :model comparison :title? false :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! comparison %))]
                     [input-text :width "75px" :model comparison-value :status (not-number-error-status @comparison-value) :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! comparison-value %))]]]
                [hb [[label :width lw :label "Description"]
                     [md-icon-button :md-icon-name "zmdi zmdi-flare" :size :smaller :on-click #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! description guess-description))]
                     [input-text :width "570px" :model description :status (if (zero? (count @description)) :error) :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! description %))]]]
                [hb [[label :width lw :label "Test"] [test-result alert-key alert-number]]]
                ]]))

(defn spread-alert [trade-entry alert-key alert-number]
  (let [trade-entry-alert            (r/cursor trade-entry (if (= alert-key :other-alerts) [alert-key alert-number] [alert-key]))
        bloomberg-request-security-1 (r/cursor trade-entry-alert [:bloomberg_request_1_security]) ;TODO HERE FC
        bloomberg-request-field-1    (r/cursor trade-entry-alert [:bloomberg_request_1_field] )
        bloomberg-request-security-2 (r/cursor trade-entry-alert [:bloomberg_request_2_security])
        bloomberg-request-field-2    (r/cursor trade-entry-alert [:bloomberg_request_2_field])
        operator                     (r/cursor trade-entry-alert [:operator])
        description                  (r/cursor trade-entry-alert [:description])
        comparison                   (r/cursor trade-entry-alert [:comparison])
        comparison-value             (r/cursor trade-entry-alert [:comparison-value])
        all-isins                    (map :ISIN @(rf/subscribe [:quant-model/model-output]))
        guess-description (fn [] (cond
                                   (and (= @bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp")) (= @bloomberg-request-field-1 "Z_SPRD_MID")
                                        (= @bloomberg-request-security-2 "JBCDCBZW Index") (= @bloomberg-request-field-2 "PX_LAST")
                                        (= @operator "-") (= @comparison "<")) (str "< " @comparison-value " vs CEMBI")
                                   (and (= @bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp")) (= @bloomberg-request-field-1 "Z_SPRD_MID")
                                        (some #{(first (.split @bloomberg-request-security-2 " "))} all-isins) (= @bloomberg-request-field-2 "Z_SPRD_MID")
                                        (= @operator "-") (= @comparison "<")) (str "< " @comparison-value "z vs " (:Bond (first (t/chainfilter {:ISIN (first (.split @bloomberg-request-security-2 " "))} @(rf/subscribe [:quant-model/model-output])))))
                                   (and (= @bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp")) (= @bloomberg-request-field-1 "G_SPREAD_MID_CALC")
                                        (some #{(first (.split @bloomberg-request-security-2 " "))} all-isins) (= @bloomberg-request-field-2 "G_SPREAD_MID_CALC")
                                        (= @operator "-") (= @comparison "<")) (str "< " @comparison-value "g vs " (:Bond (first (t/chainfilter {:ISIN (first (.split @bloomberg-request-security-2 " "))} @(rf/subscribe [:quant-model/model-output])))))
                                   (and (= @bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp")) (= @bloomberg-request-field-1 "YLD_YTM_MID")
                                        (some #{(first (.split @bloomberg-request-security-2 " "))} all-isins) (= @bloomberg-request-field-2 "YLD_YTM_MID")
                                        (= @operator "-") (= @comparison "<")) (str "< " @comparison-value " yld vs " (:Bond (first (t/chainfilter {:ISIN (first (.split @bloomberg-request-security-2 " "))} @(rf/subscribe [:quant-model/model-output])))))
                                   (and (= @bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp")) (= @bloomberg-request-field-1 "PX_LAST")
                                        (some #{(first (.split @bloomberg-request-security-2 " "))} all-isins) (= @bloomberg-request-field-2 "PX_LAST")
                                        (= @operator "-") (= @comparison ">")) (str "> " @comparison-value " px vs " (:Bond (first (t/chainfilter {:ISIN (first (.split @bloomberg-request-security-2 " "))} @(rf/subscribe [:quant-model/model-output])))))
                                   :else "Failed to guess"))]
    (println  trade-entry-alert)
    [v-box :gap "5px"
     :children [[hb [[label :width lw :label "Suggestions:"] [v-box :children (vec (remove nil? (into [] (for [line (sort-by :name (:indexcomps @(rf/subscribe [:ta2022/trade-history])))] [p (str (:name line) "@" (:latest line) "bps, code " (:bbg-code line))]))))]]]
                [hb [[label :width lw :label "Security 1"]
                     [md-icon-button :md-icon-name "zmdi zmdi-link" :size :smaller :on-click #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp")))]
                     [input-text :width "165px" :placeholder "BRL Curncy" :model bloomberg-request-security-1 :status (bbg-security-status @bloomberg-request-security-1) :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-security-1 %))]
                     [typeahead :width "200px" :data-source bbg-field-finder :change-on-blur? true :placeholder "PX_LAST" :rigid? false :model bloomberg-request-field-1 :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-field-1 %))]]]
                [hb [[label :width lw :label "Operator"] [single-dropdown :width "120px" :max-height "200px" :placeholder "operator" :model operator :title? false :choices [{:id "-" :label "minus"} {:id "/" :label "divided by"}] :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! operator %))]]]
                [hb [[label :width lw :label "Security 2"]
                     [md-icon-button :md-icon-name "zmdi zmdi-link" :size :smaller :on-click #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-security-2 (str (:ISIN @trade-entry) " Corp")))]
                     [input-text :width "165px" :placeholder "SPX Index" :model bloomberg-request-security-2 :status (bbg-security-status @bloomberg-request-security-2) :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-security-2 %))]
                     [typeahead :width "200px" :data-source bbg-field-finder :change-on-blur? true :placeholder "PX_LAST" :rigid? false :model bloomberg-request-field-2 :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-field-2 %))]]]
                [hb [[label :width lw :label "Comparison"]
                     [single-dropdown :width "100px" :choices [{:id ">" :label "above"} {:id "<" :label "below"}] :model comparison :title? false :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! comparison %))]
                     [input-text :width "75px" :model comparison-value :status (not-number-error-status @comparison-value) :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! comparison-value %))]]]
                [hb [[label :width lw :label "Description"]
                     [md-icon-button :md-icon-name "zmdi zmdi-flare" :size :smaller :on-click #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! description (guess-description)))]
                     [input-text :width "570px"  :model description :status (if (zero? (count @description)) :error) :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! description %))]]]
                [hb [[label :width lw :label "Test?"] [test-result alert-key alert-number]]]
                ]]))

(defn fundamental-alert [trade-entry alert-key alert-number]
  (let [description (r/cursor trade-entry (if (= alert-key :other-alerts) [alert-key alert-number :description] [alert-key :description]))]
    [h-box :padding "0px 30px 0px 0px" :gap "10px" :align :center
     :children [[label :width lw :label "Description"]
                [input-textarea :width "570px" :rows "5" :model description :status (if (zero? (count @description)) :error) :on-change #(reset! description %)]]]))

(defn trade-alert [trade-entry title-header alert-key alert-number]
  (let [alert-type (if (= alert-key :other-alerts) (r/cursor trade-entry [:other-alerts alert-number :alert-type]) (r/cursor trade-entry [alert-key :alert-type]))
        alert-details (fn [] (case @alert-type
                               "single" [single-alert trade-entry alert-key alert-number]
                               "spread" [spread-alert trade-entry alert-key alert-number]
                               "fundamental" [fundamental-alert trade-entry alert-key alert-number]
                               [fundamental-alert trade-entry alert-key alert-number]
                               ))]
    [v-box :gap "10px" :style {:border "solid 1px grey"} :class "element"
     :children (remove nil? [[title :label title-header :level :level2]
                             (if (= alert-key :other-alerts)
                               [h-box :gap "10px" :align :center
                                :children [[label :width lw :label "Alert type"]
                                           [h-box :gap "10px"
                                            :children [[radio-button :label "Market data (single)" :value "single" :model alert-type :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! alert-type %))]
                                                       [radio-button :label "Market data (spread)" :value "spread" :model alert-type :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! alert-type %))]
                                                       [radio-button :label "Fundamental data" :value "fundamental" :model alert-type :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! alert-type %))]]]]])
                             [alert-details]])]))

(defn custom-alerts
  [nbalerts]
  [v-box :children (into [] (for [i (range nbalerts)] [trade-alert (str "Custom alert " (inc i))]))])

(defn trade-alert-input
  [trade-entry]
  (let [other-alerts (r/cursor trade-entry [:other-alerts])]
    (fn []
      [v-box :gap "10px" :width default-width
       :children (conj (into [[trade-alert trade-entry "Upside alert" :target-alert 0]
                              [trade-alert trade-entry "Upside relval alert" :relval-alert 0]
                              [trade-alert trade-entry "Downside alert" :review-alert 0]]
                             (for [i (range (count @other-alerts))] [trade-alert trade-entry (str "Custom alert " (inc i)) :other-alerts i]))
                       [h-box :gap "10px" :children [[button :style {:width "100%"} :label "Add alert" :on-click #(do (rf/dispatch [:ta2022/post-test-result nil]) (swap! other-alerts assoc (count @other-alerts) single-alert-template))]
                                                     [button :style {:width "100%"} :label "Remove alert" :on-click #(do (rf/dispatch [:ta2022/post-test-result nil]) (swap! other-alerts dissoc (dec (count @other-alerts))))]]])])))