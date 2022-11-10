(ns jasminegui.betas
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.tools :as tools]
    [reagent.core :as r]))

(def table-checkboxes (r/atom {:Pricing? true :Returns? true :CEMBI? true :EMBI? true :Blend? false :Other? false}))

(defn view []
  (let [data @(rf/subscribe [:betas/table])
        default-beta-line {:width 75 :Cell tables/round2 :style {:textAlign "right"} :filterable true :filterMethod tables/nb-filter-OR-AND}
        download-columns [:NAME :isin :qt-risk-country-name :qt-jpm-sector :qt-final-maturity-band :qt-yield :qt-govt-spread :qt-libor-spread :qt-modified-duration :total-return-ytd :jensen-ytd :xsr-6m :xsr-9m :xsr-12m :beta-vs-cembi-duration :beta-vs-cembi-sector  :beta-vs-cembi-country  :beta-vs-cembi-up :beta-vs-cembi-dw  :beta-vs-cembi-rating :beta-vs-embi-country :beta-vs-cembi-ig :beta-vs-ust :beta-vs-embi :beta-vs-ushy :beta-vs-blend333333 :beta-vs-blend502525 :beta-vs-gbiem  :beta-vs-blend5050  :cembi-beta-last-year :beta-vs-spx :cembi-beta-previous-year :beta-vs-usig :beta-vs-cembi-hy ]
        f (fn [line] (merge line default-beta-line))]
    ;(set! (. js/document -title) "Bond betas")
    [box :padding "80px 25px" :child
     [v-box :class "subbody element"  :gap "20px"
      :children [[h-box :align :center :children [[title :label (str "One year betas vs benchmarks") :level :level1]
                                                  [gap :size "1"]
                                                  [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link data "betas_vs_bm" download-columns)]]]
                 [h-box :align :center :gap "20px" :children (into [] (for [k (keys @table-checkboxes)]
                                                            [checkbox :model (r/cursor table-checkboxes [k]) :label (name k) :on-change #(swap! table-checkboxes assoc k %)] ))] ;bit hacky order maintained as small map
                 [:> ReactTable
                  {:data           (sort-by (juxt :qt-risk-country-name :qt-jpm-sector :NAME) data)
                   :columns        (vec (remove nil? (concat
                                                       [{:Header "Description" :columns (concat [{:Header "BOND" :accessor "NAME" :width 140 :className "sticky-rt-column" :headerClassName "sticky-rt-column"}] (mapv tables/risk-table-columns [:isin :country :sector]))}]
                                                       (if (@table-checkboxes :Pricing?) [{:Header "Pricing" :columns (mapv tables/risk-table-columns [:yield :g-spread :z-spread :duration])}])


                                                       (if (@table-checkboxes :Returns?) [{:Header "Total return" :columns (mapv tables/risk-table-columns [:total-return-ytd :jensen-ytd])}
                                                                                          {:Header  "Excess return"
                                                                                           :columns (mapv f [{:Header "6M" :accessor "xsr-6m"}
                                                                                                             {:Header "9M" :accessor "xsr-9m"}
                                                                                                             {:Header "12M" :accessor "xsr-12m"}])}])
                                                       (if (@table-checkboxes :CEMBI?) [{:Header  "CEMBI betas"
                                                                                         :columns (mapv f [{:Header "Broad" :accessor "cembi-beta-last-year"}
                                                                                                           {:Header "Broad LY" :accessor "cembi-beta-previous-year"}
                                                                                                           {:Header "IG" :accessor "beta-vs-cembi-ig"}
                                                                                                           {:Header "HY" :accessor "beta-vs-cembi-hy"}
                                                                                                           {:Header "Country" :accessor "beta-vs-cembi-country"}
                                                                                                           {:Header "Rating" :accessor "beta-vs-cembi-rating"}
                                                                                                           {:Header "Sector" :accessor "beta-vs-cembi-sector"}
                                                                                                           {:Header "Duration" :accessor "beta-vs-cembi-duration"}])}])
                                                       (if (@table-checkboxes :EMBI?) [{:Header  "EMBI betas"
                                                                                        :columns (mapv f [{:Header "Broad" :accessor "beta-vs-embi"}
                                                                                                          {:Header "Country" :accessor "beta-vs-embi-country"}])}])
                                                       (if (@table-checkboxes :Blend?) [{:Header  "Blend betas"
                                                                                         :columns (mapv f [{:Header "502525" :accessor "beta-vs-blend502525"}
                                                                                                           {:Header "5050HCLC" :accessor "beta-vs-blend5050"}
                                                                                                           {:Header "333333" :accessor "beta-vs-blend333333"}
                                                                                                           {:Header "GBIEM" :accessor "beta-vs-gbiem"}])}])
                                                       (if (@table-checkboxes :Other?) [{:Header  "Other betas"
                                                                                         :columns (mapv f [{:Header "USIG" :accessor "beta-vs-usig"}
                                                                                                           {:Header "USHY" :accessor "beta-vs-ushy"}
                                                                                                           {:Header "UST5-7Y" :accessor "beta-vs-ust"}
                                                                                                           {:Header "S&P500" :accessor "beta-vs-spx"}
                                                                                                           {:Header "CEMBI UP" :accessor "beta-vs-cembi-up"}
                                                                                                           {:Header "CEMBI DW" :accessor "beta-vs-cembi-dw"}])}]))))
                   :showPagination true :defaultPageSize 15 :pageSizeOptions [15 25 50 100] :filterable true :defaultFilterMethod tables/text-filter-OR :className "-striped -highlight"}]]]]))