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
    ["react-table-v6" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.charting :as charting]
    [jasminegui.guitools :as gt]
    [jasminegui.qs.qstables :as qstables]
    [jasminegui.qs.qscharts :as qscharts]
    [jasminegui.tools :as t]
    [jasminegui.ta2022.tables :as tatables]
    [oz.core :as oz])
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

(def fundamental-alert-template {:alert-type "fundamental"
                                 :description nil})

(def bloomberg-asset-keys #{"Govt" "Corp" "Mtge" "M-Mkt" "Muni" "Pfd" "Equity" "Comdty" "Index" "Curncy" "Client"})

(def bloomberg-field-suggestions ["PX_LAST" "YLD_YTM_MID" "Z_SPRD_MID" "YAS_BOND_YLD" "YAS_ZSPREAD" "BLOOMBERG_MID_G_SPREAD" "NET_DEBT_TO_EBITDA" "TOT_DEBT_TO_EBITDA" "SHORT_AND_LONG_TERM_DEBT" "NET_DEBT" "EBITDA"])

(defn bbg-field-finder [s] (take 3 (for [field bloomberg-field-suggestions :when (re-find (re-pattern (str "(?i)" s)) field)] field)))

(defn clean-case [t] (+ (.toUpperCase (.charAt t 0)) (.toLowerCase (.slice t 1))))

(defn bbg-security-status [s] (try (if-not (some #{(clean-case (last (.split s " ")))} bloomberg-asset-keys) :error nil) (catch js/Error e :error)))

(defn not-number-error-status [s] (if-not (number? (cljs.reader/read-string s)) :error nil))



(rf/reg-event-db
  :trade-entry/add-alert
  (fn [db [_ ]]
    (-> db
        (assoc-in [:trade-entry :tradeanalyser.trade/other-alerts (count (get-in db [:trade-entry :tradeanalyser.trade/other-alerts]))] single-alert-template)
        (assoc :can-allocate false))))

(rf/reg-event-db
  :trade-entry/remove-alert
  (fn [db [_ ]]
    (-> db
        (update-in [:trade-entry :tradeanalyser.trade/other-alerts] dissoc (dec (count (get-in db [:trade-entry :tradeanalyser.trade/other-alerts]))))
        (assoc :can-allocate false))))


(defn single-alert [trade-entry alert-key alert-number]
  (let [                                                    ;trade-entry (rf/subscribe [:trade-entry])
        bloomberg-request-security-1 (r/cursor trade-entry (if (= alert-key :other-alerts) [alert-key alert-number :bloomberg-request-security-1] [alert-key :bloomberg-request-security-1]))
        bloomberg-request-field-1    (r/cursor trade-entry (if (= alert-key :other-alerts) [alert-key alert-number :bloomberg-request-field-1] [alert-key :bloomberg-request-field-1]))
        description                  (r/cursor trade-entry (if (= alert-key :other-alerts) [alert-key alert-number :description] [alert-key :description]))
        comparison                   (r/cursor trade-entry (if (= alert-key :other-alerts) [alert-key alert-number :comparison] [alert-key :comparison]))
        comparison-value             (r/cursor trade-entry (if (= alert-key :other-alerts) [alert-key alert-number :comparison-value] [alert-key :comparison-value]))
        guess-description            (if (= @bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp"))
                                       (cond
                                         (and (= @bloomberg-request-field-1 "PX_LAST")) (str "price " @comparison " " @comparison-value)
                                         (and (= @bloomberg-request-field-1 "YLD_YTM_MID")) (str "yield " @comparison " " @comparison-value)
                                         (and (= @bloomberg-request-field-1 "YAS_BOND_YLD")) (str "yield " @comparison " " @comparison-value)
                                         (and (= @bloomberg-request-field-1 "Z_SPRD_MID")) (str "zspread " @comparison " " @comparison-value)
                                         (and (= @bloomberg-request-field-1 "YAS_ZSPREAD")) (str "zspread " @comparison " " @comparison-value)
                                         (and (= @bloomberg-request-field-1 "BLOOMBERG_MID_G_SPREAD")) (str "gspread " @comparison " " @comparison-value)
                                         :else "Failed to guess")
                                       "Failed to guess")
        ]
    [v-box :gap "5px"
     :children [[hb [[label :width lw :label "Condition"]
                     [md-icon-button :md-icon-name "zmdi zmdi-link" :size :smaller :on-click #(reset! bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp"))]
                     [input-text :width "165px" :placeholder "BRL Curncy" :model bloomberg-request-security-1 :status (bbg-security-status @bloomberg-request-security-1) :on-change #(reset! bloomberg-request-security-1 %)]
                     [typeahead :width "200px" :data-source bbg-field-finder :change-on-blur? true :placeholder "PX_LAST" :rigid? false :model bloomberg-request-field-1 :on-change #(reset! bloomberg-request-field-1 %)]
                     [single-dropdown :width "100px" :choices [{:id ">" :label "above"} {:id "<" :label "below"}] :model comparison :title? false :on-change #(reset! comparison %)]
                     [input-text :width "75px" :model comparison-value :status (not-number-error-status @comparison-value) :on-change #(reset! comparison-value %)]]]
                [hb [[label :width lw :label "Description"]
                     [md-icon-button :md-icon-name "zmdi zmdi-flare" :size :smaller :on-click #(reset! description guess-description)]
                     [input-text :width "570px"  :model description :on-change #(reset! description %)]]]
                [hb [[label :width lw :label "Test?"] [label :label "Not tested"]]]
                ]]))

(defn spread-alert [trade-entry alert-key alert-number]
  (let [                                                    ;trade-entry                  (rf/subscribe [:trade-entry])
        trade-entry-alert            (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number] [alert-key]))
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
                     [md-icon-button :md-icon-name "zmdi zmdi-link" :size :smaller :on-click #(reset! bloomberg-request-security-1 (str (:ISIN @trade-entry) " Corp"))]
                     [input-text :width "165px" :placeholder "BRL Curncy" :model bloomberg-request-security-1 :status (bbg-security-status @bloomberg-request-security-1) :on-change #(reset! bloomberg-request-security-1 %)]
                     [typeahead :width "200px" :data-source bbg-field-finder :change-on-blur? true :placeholder "PX_LAST" :rigid? false :model bloomberg-request-field-1 :on-change #(reset! bloomberg-request-field-1 %)]]]
                [hb [[label :width lw :label "Operator"] [single-dropdown :width "120px" :max-height "200px" :placeholder "operator" :model operator :title? false :choices [{:id "-" :label "minus"} {:id "/" :label "divided by"}] :on-change #(reset! operator %)]]]
                [hb [[label :width lw :label "Security 2"]
                     [md-icon-button :md-icon-name "zmdi zmdi-link" :size :smaller :on-click #(reset! bloomberg-request-security-2 (str (:ISIN @trade-entry) " Corp"))]
                     [input-text :width "165px" :placeholder "SPX Index" :model bloomberg-request-security-2 :status (bbg-security-status @bloomberg-request-security-2) :on-change #(reset! bloomberg-request-security-2 %)]
                     [typeahead :width "200px" :data-source bbg-field-finder :change-on-blur? true :placeholder "PX_LAST" :rigid? false :model bloomberg-request-field-2 :on-change #(reset! bloomberg-request-field-2 %)]]]
                [hb [[label :width lw :label "Comparison"]
                     [single-dropdown :width "100px" :choices [{:id ">" :label "above"} {:id "<" :label "below"}] :model comparison :title? false :on-change   #(reset! comparison %)]
                     [input-text :width "75px" :model comparison-value :status (not-number-error-status @comparison-value) :on-change #(reset! comparison-value %)]]]
                [hb [[label :width lw :label "Description"] [input-text :width "570px" :model description :on-change #(reset! description %)]]]
                [hb [[label :width lw :label "Test?"] [label :label "Not tested"]]]
                ]]))

(defn fundamental-alert [trade-entry alert-key alert-number]
  (let [                                                    ;trade-entry (rf/subscribe [:trade-entry])
        description (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :description] [alert-key :description]))]
    [h-box :padding "0px 30px 0px 0px" :gap "10px" :align :center
     :children [[label :width lw :label "Description"]
                [input-textarea :width "570px" :rows "5" :model description :on-change #(reset! description %)]]]))

(defn trade-alert [trade-entry title-header alert-key alert-number]
  (let [                                                    ;trade-entry (rf/subscribe [:trade-entry])
        alert-type (if (= alert-key :other-alerts) (r/cursor trade-entry [:other-alerts alert-number :alert-type]) (r/cursor trade-entry [alert-key :alert-type]))
        alert-details (fn [] (case @alert-type
                               "single" [single-alert trade-entry alert-key alert-number]
                               "spread" [spread-alert trade-entry alert-key alert-number]
                               "fundamental" [fundamental-alert trade-entry alert-key alert-number]))]
    [v-box :gap "10px" :style {:border "solid 1px grey"} :class "element"
     :children [[title :label title-header :level :level2]
                [h-box :gap "10px" :align :center
                 :children [[label :width lw :label "Alert type"]
                            [h-box :gap "10px"
                             :children [[radio-button :label "Market data (single)" :value "single"       :model alert-type :on-change #(reset! alert-type %)]
                                        [radio-button :label "Market data (spread)" :value "spread"       :model alert-type :on-change #(reset! alert-type %)]
                                        [radio-button :label "Fundamental data"     :value "fundamental"  :model alert-type :on-change #(reset! alert-type %)]]]]]
                [alert-details]]]))

(defn custom-alerts [nbalerts]
  [v-box :children (into [] (for [i (range nbalerts)] [trade-alert (str "Custom alert " (inc i))]))])

(defn trade-alert-input [trade-entry]
  (let [other-alerts (r/cursor trade-entry [:other-alerts])]
    (fn []
      [v-box :gap "10px" :width default-width
       :children (conj (into [[trade-alert trade-entry "Relval alert" :relval-alert 0]
                              [trade-alert trade-entry "Price alert" :target-alert 0]
                              [trade-alert trade-entry "Review alert" :review-alert 0]]
                             (for [i (range (count @other-alerts))] [trade-alert trade-entry (str "Custom alert " (inc i)) :other-alerts i]))
                       [h-box :gap "10px" :children [[button :style {:width "100%"} :label "Add alert" :on-click #(swap! other-alerts assoc (count @other-alerts) single-alert-template)]
                                                     [button :style {:width "100%"} :label "Remove alert" :on-click #(swap! other-alerts dissoc (dec (count @other-alerts)))]]])
       ])))