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

    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]])
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )

(def sector (r/atom "All"))

(defn attribution-control []
  (let [table  @(rf/subscribe [:scorecard/attribution-table])
        sectors (distinct (map :Sector table))]
    (fn []
      [h-box
       :class "element" :width "100%" :gap "20px" :align :center
       :children [[label :label "Select sector and compress data:"]
                  [single-dropdown :width "250px" :model sector :choices (into [] (for [x (sort (conj sectors "All"))] {:id x :label x})) :filter-box? true :on-change #(reset! sector %)]
                  [label :label (if (= @sector "All") "" "Top/bottom 10 YTD, top/bottom 5 weekly, sorted by YTD and adding Total.")]
                  ]])))

(defn compress-data [table sector]
  (let [res (filter #(= (:Sector %) sector) table)
        issuers-ytd (map :Issuer (sort-by :Total-Effect-ytd res)) issuers-wtd (map :Issuer (sort-by :Total-Effect-wtd res))
        low-10-ytd (take 10 issuers-ytd) top-10-ytd (take-last 10 issuers-ytd)
        low-5-ytd (take 5 issuers-wtd)   top-5-ytd (take-last 5 issuers-wtd)
        all-issuers (distinct (concat low-10-ytd top-10-ytd low-5-ytd top-5-ytd))
        grp (group-by #(not (some #{(:Issuer %)} all-issuers)) res)
        rest-line (merge {:Issuer "Rest" :Country "Rest" :Sector sector}
                         (into {} (for [k (keys (first res)) :when (not (some #{k} [:Issuer :Country :Sector]))] [k (reduce + (map k (grp true)))])))
        total-line (merge {:Issuer "Total" :Country "Total" :Sector sector}
                          (into {} (for [k (keys (first res)) :when (not (some #{k} [:Issuer :Country :Sector]))] [k (reduce + (map k res))])))]
    (conj (reverse (sort-by :Total-Effect-ytd (conj (grp false) rest-line))) total-line)))

(defn attribution-display [txt]
  (let [display (if (= @sector "All") @(rf/subscribe [:scorecard/attribution-table]) (compress-data @(rf/subscribe [:scorecard/attribution-table]) @sector))]
    [v-box :class "element" :width "100%" :gap "5px"
     :children [[title :level :level2 :label txt]
    [:> ReactTable
     {:data display :defaultFilterMethod tables/case-insensitive-filter
      :columns [{:Header "Groups" :columns (mapv tables/attribution-table-columns [:issuer :country :sector ])}
                {:Header "Weekly" :columns (mapv tables/attribution-table-columns [:total-effect-wtd :contribution-wtd :bm-contribution-wtd])}
                {:Header "Year to date" :columns (mapv tables/attribution-table-columns [:total-effect-ytd :contribution-ytd :bm-contribution-ytd])}
                {:Header "YTD weights" :columns (mapv tables/attribution-table-columns [:xs-weight-ytd :weight-ytd :bm-weight-ytd])}]
      :showPagination true :sortable true :filterable true :pageSize 31 :className "-striped -highlight"}]]]))

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

(def standard-box-width "1200px")
(defn active-home []
  (.scrollTo js/window 0 0)                             ;on view change we go back to top
  [v-box :width standard-box-width
   :gap "20px"
   :padding "80px 20px"
   :class "rightelement"
   :children
              (case (:scorecard @(rf/subscribe [:navigation/active]))
                                                                                             :filter [[p "hi"]]
                                                                                             :risk [[p "hi"]]
                                                                                             :value [[p "hi"]]
                                                                                             :ogemcord-perf (do (rf/dispatch [:get-scorecard-attribution "OGEMCORD"]) [[attribution-control] [attribution-display "OGEMCORD"]])
                                                                                             :ogemigc-perf (do (rf/dispatch [:get-scorecard-attribution "OGEMIGC"]) [[attribution-control] [attribution-display "OGEMIGC"]])
                                                                                             [[:div.output "nothing to display"]])])


(defn view []
  [h-box :gap "10px"
   ;:style {:overflow "hidden"}
   :padding "0px"
   :children [[nav-scorecard-bar] [active-home]]])

