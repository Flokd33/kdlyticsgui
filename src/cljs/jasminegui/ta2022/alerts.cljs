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
    [jasminegui.ta2022.actions :as taactions :refer [checknb]]
)
  )

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

(def bloomberg-asset-keys #{"Govt" "Corp" "Mtge" "M-Mkt" "Muni" "Pfd" "Equity" "Comdty" "Index" "Curncy" "Client"})
(def bloomberg-field-suggestions ["PX_LAST" "YLD_YTM_MID" "Z_SPRD_MID" "YAS_BOND_YLD" "YAS_ZSPREAD" "BLOOMBERG_MID_G_SPREAD" "NET_DEBT_TO_EBITDA" "TOT_DEBT_TO_EBITDA" "SHORT_AND_LONG_TERM_DEBT" "NET_DEBT" "EBITDA"])
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
          txt (str
                (if (:triggered res) "Already triggered!" "Not triggered.")
                (if market-price? (if (res :latest-market-spread)
                                    (str " Latest market prices and spread " (:latest-market-price-1 res) " / " (:latest-market-price-2 res) " / " (:latest-market-spread res))
                                    (str " Latest market price " (:latest-market-price res))) " No market price!")
                (if implied-price? (str " Implied price: " (:implied-price res)) " No implied bond price!"))]
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
        guess-description            (if (= @bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp"))
                                       (case @bloomberg-request-field-1
                                         "PX_LAST" (str "price " @comparison " " @comparison-value)
                                         "YLD_YTM_MID" (str "yield " @comparison " " @comparison-value)
                                         "YAS_BOND_YLD" (str "yield " @comparison " " @comparison-value)
                                         "Z_SPRD_MID" (str "zspread " @comparison " " @comparison-value)
                                         "YAS_ZSPREAD" (str "zspread " @comparison " " @comparison-value)
                                         "BLOOMBERG_MID_G_SPREAD" (str "gspread " @comparison " " @comparison-value)
                                         "Failed to guess")
                                       "Failed to guess")]
    [v-box :gap "5px"
     :children [[hb [[label :width lw :label "Condition"]
                     [md-icon-button :md-icon-name "zmdi zmdi-link" :size :smaller :on-click #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp")))]
                     [input-text :width "165px" :placeholder "BRL Curncy" :model bloomberg-request-security-1 :status (bbg-security-status @bloomberg-request-security-1) :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-security-1 %))]
                     [typeahead :width "200px" :data-source bbg-field-finder :change-on-blur? true :placeholder "PX_LAST" :rigid? false :model bloomberg-request-field-1 :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! bloomberg-request-field-1 %))]
                     [single-dropdown :width "100px" :choices [{:id ">" :label "above"} {:id "<" :label "below"}] :model comparison :title? false :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! comparison %))]
                     [input-text :width "75px" :model comparison-value :status (not-number-error-status @comparison-value) :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! comparison-value %))]]]
                [hb [[label :width lw :label "Description"]
                     [md-icon-button :md-icon-name "zmdi zmdi-flare" :size :smaller :on-click #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! description guess-description))]
                     [input-text :width "570px"  :model description :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! description %))]]]
                [hb [[label :width lw :label "Test"] [test-result alert-key alert-number]]]
                ]]))

(defn spread-alert [trade-entry alert-key alert-number]
  (let [trade-entry-alert            (r/cursor trade-entry (if (= alert-key :other-alerts) [alert-key alert-number] [alert-key]))
        bloomberg-request-security-1 (r/cursor trade-entry-alert [:bloomberg-request-security-1])
        bloomberg-request-field-1    (r/cursor trade-entry-alert [:bloomberg-request-field-1] )
        bloomberg-request-security-2 (r/cursor trade-entry-alert [:bloomberg-request-security-2])
        bloomberg-request-field-2    (r/cursor trade-entry-alert [:bloomberg-request-field-2])
        operator                     (r/cursor trade-entry-alert [:operator])
        description                  (r/cursor trade-entry-alert [:description])
        comparison                   (r/cursor trade-entry-alert [:comparison])
        comparison-value             (r/cursor trade-entry-alert [:comparison-value])]
    [v-box :gap "5px"
     :children [[hb [[label :width lw :label "Security 1"]
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
                [hb [[label :width lw :label "Description"] [input-text :width "570px" :model description :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! description %))]]]
                [hb [[label :width lw :label "Test?"] [test-result alert-key alert-number]]]
                ]]))

(defn fundamental-alert [trade-entry alert-key alert-number]
  (let [description (r/cursor trade-entry (if (= alert-key :other-alerts) [alert-key alert-number :description] [alert-key :description]))]
    [h-box :padding "0px 30px 0px 0px" :gap "10px" :align :center
     :children [[label :width lw :label "Description"]
                [input-textarea :width "570px" :rows "5" :model description :on-change #(reset! description %)]]]))

(defn trade-alert [trade-entry title-header alert-key alert-number]
  (let [alert-type (if (= alert-key :other-alerts) (r/cursor trade-entry [:other-alerts alert-number :alert-type]) (r/cursor trade-entry [alert-key :alert-type]))
        alert-details (fn [] (case @alert-type
                               "single" [single-alert trade-entry alert-key alert-number]
                               "spread" [spread-alert trade-entry alert-key alert-number]
                               "fundamental" [fundamental-alert trade-entry alert-key alert-number]))]
    [v-box :gap "10px" :style {:border "solid 1px grey"} :class "element"
     :children [[title :label title-header :level :level2]
                [h-box :gap "10px" :align :center
                 :children [[label :width lw :label "Alert type"]
                            [h-box :gap "10px"
                             :children [[radio-button :label "Market data (single)" :value "single"       :model alert-type :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! alert-type %))]
                                        [radio-button :label "Market data (spread)" :value "spread"       :model alert-type :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! alert-type %))]
                                        [radio-button :label "Fundamental data"     :value "fundamental"  :model alert-type :on-change #(do (rf/dispatch [:ta2022/post-test-result nil]) (reset! alert-type %))]]]]]
                [alert-details]]]))

(defn custom-alerts
  [nbalerts]
  [v-box :children (into [] (for [i (range nbalerts)] [trade-alert (str "Custom alert " (inc i))]))])

(defn trade-alert-input
  [trade-entry]
  (let [other-alerts (r/cursor trade-entry [:other-alerts])]
    (fn []
      [v-box :gap "10px" :width default-width
       :children (conj (into [[trade-alert trade-entry "Relval alert" :relval-alert 0]
                              [trade-alert trade-entry "Price alert" :target-alert 0]
                              [trade-alert trade-entry "Review alert" :review-alert 0]]
                             (for [i (range (count @other-alerts))] [trade-alert trade-entry (str "Custom alert " (inc i)) :other-alerts i]))
                       [h-box :gap "10px" :children [[button :style {:width "100%"} :label "Add alert" :on-click #(do (rf/dispatch [:ta2022/post-test-result nil]) (swap! other-alerts assoc (count @other-alerts) single-alert-template))]
                                                     [button :style {:width "100%"} :label "Remove alert" :on-click #(do (rf/dispatch [:ta2022/post-test-result nil]) (swap! other-alerts dissoc (dec (count @other-alerts))))]]])])))