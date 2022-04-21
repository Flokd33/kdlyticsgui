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


(defn single-alert [alert-key alert-number]
  (let [trade-entry (rf/subscribe [:trade-entry])
        bloomberg-request-security-1 (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/bloomberg-request-security-1] [alert-key :tradeanalyser.alert/bloomberg-request-security-1]))
        bloomberg-request-field-1    (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/bloomberg-request-field-1] [alert-key :tradeanalyser.alert/bloomberg-request-field-1]))
        description                  (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/description] [alert-key :tradeanalyser.alert/description]))
        comparison                   (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/comparison] [alert-key :tradeanalyser.alert/comparison]))
        comparison-value             (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/comparison-value] [alert-key :tradeanalyser.alert/comparison-value]))
        guess-description            (if (= @bloomberg-request-security-1 (str (:tradeanalyser.trade/ISIN @trade-entry) " Corp"))
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
     :children [                                              ;[hb [[label :width lw :label "Description"] [input-textarea :width "600px" :rows "1" :model description :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/description %])]]]
                [hb [[label :width lw :label "Condition"]
                     [md-icon-button :md-icon-name "zmdi zmdi-link" :size :smaller :on-click #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/bloomberg-request-security-1 (str (:tradeanalyser.trade/ISIN @trade-entry) " Corp")])]
                     [box  :width "165px" :child [input-text :width "100%" :placeholder "BRL Curncy" :model bloomberg-request-security-1 :status (tools/bbg-security-status @bloomberg-request-security-1) :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/bloomberg-request-security-1 %])]]
                     [box  :child [typeahead :data-source tools/bbg-field-finder :change-on-blur? true :placeholder "PX_LAST" :rigid? false :model bloomberg-request-field-1 :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/bloomberg-request-field-1 %])]]
                     [box  :width "120px" :child [single-dropdown :width "100%" :choices [{:id ">" :label "above"} {:id "<" :label "below"}] :model comparison :title? false :max-height "200px" :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/comparison %])]]
                     [box  :width "120px" :child [input-text :width "100px" :model comparison-value :status (tools/not-number-error-status @comparison-value) :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/comparison-value %])]]
                     ]]
                [hb [[label :width lw :label "Description"]
                     [md-icon-button :md-icon-name "zmdi zmdi-flare" :size :smaller :on-click #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/description guess-description])]
                     [input-textarea :width "600px" :rows "1" :model description :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/description %])]]]
                ]]))

(defn spread-alert [alert-key alert-number]
  (let [trade-entry                  (rf/subscribe [:trade-entry])
        trade-entry-alert            (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number] [alert-key]))
        bloomberg-request-security-1 (r/cursor trade-entry-alert [:tradeanalyser.alert/bloomberg-request-security-1])
        bloomberg-request-field-1    (r/cursor trade-entry-alert [:tradeanalyser.alert/bloomberg-request-field-1] )
        bloomberg-request-security-2 (r/cursor trade-entry-alert [:tradeanalyser.alert/bloomberg-request-security-2])
        bloomberg-request-field-2    (r/cursor trade-entry-alert [:tradeanalyser.alert/bloomberg-request-field-2])
        operator                     (r/cursor trade-entry-alert [:tradeanalyser.alert/operator])
        description                  (r/cursor trade-entry-alert [:tradeanalyser.alert/description])
        comparison                   (r/cursor trade-entry-alert [:tradeanalyser.alert/comparison])
        comparison-value             (r/cursor trade-entry-alert [:tradeanalyser.alert/comparison-value])]
    ;bloomberg-request-security-1 (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/bloomberg-request-security-1] [alert-key :tradeanalyser.alert/bloomberg-request-security-1]))
    ;bloomberg-request-field-1    (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/bloomberg-request-field-1] [alert-key :tradeanalyser.alert/bloomberg-request-field-1]))
    ;bloomberg-request-security-2 (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/bloomberg-request-security-2] [alert-key :tradeanalyser.alert/bloomberg-request-security-2]))
    ;bloomberg-request-field-2    (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/bloomberg-request-field-2] [alert-key :tradeanalyser.alert/bloomberg-request-field-2]))
    ;operator                     (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/operator] [alert-key :tradeanalyser.alert/operator]))
    ;description                  (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/description] [alert-key :tradeanalyser.alert/description]))
    ;comparison                   (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/comparison] [alert-key :tradeanalyser.alert/comparison]))
    ;comparison-value             (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/comparison-value] [alert-key :tradeanalyser.alert/comparison-value]))]
    [v-box :gap "5px"
     :children [[hb [[label :width lw :label "Description"] [input-textarea :width "600px" :rows "1" :model description :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/description %])]]]
                [hb [[label :width lw :label "Security 1"]
                     [md-icon-button :md-icon-name "zmdi zmdi-link" :size :smaller :on-click #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/bloomberg-request-security-1 (str (:tradeanalyser.trade/ISIN @trade-entry) " Corp")])]
                     [input-text :width "165px" :placeholder "BRL Curncy" :model bloomberg-request-security-1 :status (tools/bbg-security-status @bloomberg-request-security-1) :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/bloomberg-request-security-1 %])]
                     [box   :child [typeahead :data-source tools/bbg-field-finder :change-on-blur? true :placeholder "PX_LAST" :rigid? false :model bloomberg-request-field-1 :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/bloomberg-request-field-1 %])]]]]
                [hb [[label :width lw :label "Operator"] [single-dropdown :width "120px" :max-height "200px" :placeholder "operator" :model operator :title? false :choices [{:id "-" :label "minus"} {:id "/" :label "divided by"}] :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/operator %])]]]
                [hb [[label :width lw :label "Security 2"]
                     [md-icon-button :md-icon-name "zmdi zmdi-link" :size :smaller :on-click #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/bloomberg-request-security-2 (str (:tradeanalyser.trade/ISIN @trade-entry) " Corp")])]
                     [input-text :width "165px" :placeholder "SPX Index" :model bloomberg-request-security-2 :status (tools/bbg-security-status @bloomberg-request-security-2) :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/bloomberg-request-security-2 %])]
                     [box   :child [typeahead :data-source tools/bbg-field-finder :change-on-blur? true :placeholder "PX_LAST" :rigid? false :model bloomberg-request-field-2 :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/bloomberg-request-field-2 %])]]]]
                [hb [[label :width lw :label "Comparison"]
                     [single-dropdown :width "120px" :choices [{:id ">" :label "above"} {:id "<" :label "below"}] :model comparison :title? false :max-height "200px" :on-change   #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/comparison %])]
                     [input-text :width "120px" :model comparison-value :status (tools/not-number-error-status @comparison-value) :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/comparison-value %])]]]
                ]]))

(defn fundamental-alert [alert-key alert-number]
  (let [trade-entry (rf/subscribe [:trade-entry])
        description (r/cursor trade-entry (if (= alert-key :tradeanalyser.trade/other-alerts) [alert-key alert-number :tradeanalyser.alert/description] [alert-key :tradeanalyser.alert/description]))]
    [h-box :padding "0px 30px 0px 0px" :gap "10px" :align :center
     :children [[label :width "150px" :label "Description"]
                [input-textarea :width "500px" :rows "10" :model description :on-change #(rf/dispatch [:trade-entry/alert alert-key alert-number :tradeanalyser.alert/description %])]]]))

(defn trade-alert [title-header alert-key alert-number]
  (let [trade-entry (rf/subscribe [:trade-entry])
        alert-type (if (= alert-key :tradeanalyser.trade/other-alerts) (r/cursor trade-entry [:tradeanalyser.trade/other-alerts alert-number :tradeanalyser.alert/alert-type]) (r/cursor trade-entry [alert-key :tradeanalyser.alert/alert-type]))
        alert-details (fn [] (case @alert-type
                               "single" [single-alert alert-key alert-number]
                               "spread" [spread-alert alert-key alert-number]
                               "fundamental" [fundamental-alert alert-key alert-number]))]
    [v-box :gap "10px" :style {:border "solid 1px grey"} :class "element"
     :children [[title :label title-header :level :level1]
                [h-box :gap "10px" :align :center
                 :children [[label :width lw :label "Alert type"]
                            [h-box :gap "10px"
                             :children [[radio-button :label "Market data (single)" :value "single"       :model alert-type :on-change #(rf/dispatch [:trade-entry/alert-type alert-key alert-number %])]
                                        [radio-button :label "Market data (spread)" :value "spread"       :model alert-type :on-change #(rf/dispatch [:trade-entry/alert-type alert-key alert-number %])]
                                        [radio-button :label "Fundamental data"     :value "fundamental"  :model alert-type :on-change #(rf/dispatch [:trade-entry/alert-type alert-key alert-number %])]]]]]
                [alert-details]]]))

(defn custom-alerts [nbalerts]
  [v-box :children (into [] (for [i (range nbalerts)] [trade-alert (str "Custom alert " (inc i))]))])