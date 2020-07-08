(ns jasminegui.betas
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table" :as rt :default ReactTable]
    [goog.string :as gstring]
    [goog.string.format]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.charting :as charting]
    [oz.core :as oz]
    [jasminegui.tools :as tools])

  )


(defn view []
  (let [data @(rf/subscribe [:betas/table])
        default-beta-line {:width 75 :Cell tables/round2 :style {:textAlign "right"} :filterable true :filterMethod tables/compare-nb}]
    [box  :padding "80px 25px" :child
     [v-box :class "subbody element"  :gap "20px"
      :children [[h-box :align :center :children [[title :label (str "One year betas across portfolios") :level :level1] [gap :size "1"] [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link data "betas")]]]
                 [:> ReactTable
                  {:data                (sort-by (juxt :qt-risk-country-name :qt-jpm-sector :NAME) data)
                   :columns             [{:Header "Description" :columns (mapv tables/risk-table-columns [:name :country :sector])}
                                         {:Header "Pricing" :columns (mapv tables/risk-table-columns [:yield :g-spread :z-spread :duration])}
                                         {:Header "Total return" :columns (mapv tables/risk-table-columns [:total-return-ytd :jensen-ytd])}
                                         {:Header  "CEMBI"
                                          :columns (into [] (for [line [{:Header "Broad" :accessor "cembi-beta-last-year"}
                                                                        {:Header "Broad LY" :accessor "cembi-beta-previous-year"}
                                                                        {:Header "IG" :accessor "beta-vs-cembi-ig"}
                                                                        {:Header "HY" :accessor "beta-vs-cembi-hy"}
                                                                        {:Header "Country" :accessor "beta-vs-cembi-country"}
                                                                        {:Header "Rating" :accessor "beta-vs-cembi-rating"}
                                                                        {:Header "Sector" :accessor "beta-vs-cembi-sector"}
                                                                        {:Header "Duration" :accessor "beta-vs-cembi-duration"}]]
                                                              (merge line default-beta-line)))}
                                         {:Header  "EMBI"
                                          :columns (into [] (for [line [{:Header "Broad" :accessor "beta-vs-embi"}
                                                                        {:Header "Country" :accessor "beta-vs-embi-country"}]]
                                                              (merge line default-beta-line)))}
                                         {:Header  "Other"
                                          :columns (into [] (for [line [{:Header "USIG" :accessor "beta-vs-usig"}
                                                                        {:Header "USHY" :accessor "beta-vs-ushy"}
                                                                        {:Header "UST5-7Y" :accessor "beta-vs-ust"}]]
                                                              (merge line default-beta-line)))}
                                         ]
                   :showPagination      true
                   :defaultPageSize     20
                   :filterable          true
                   :defaultFilterMethod tables/case-insensitive-filter
                   :className           "-striped -highlight"}]
                 ]]])
  )