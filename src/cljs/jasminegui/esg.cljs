(ns jasminegui.esg
  (:require
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink typeahead
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
    [reagent.core :as r]))

(def standard-box-width "1000px")
(def dropdown-width "150px")


(rf/reg-event-db
  :esg/add-company
  (fn [db [_ line]]
    (update db :esg/selected-companies conj (assoc line :remove 1))))

(rf/reg-event-db
  :esg/clear-table
  (fn [db [_]]
    (assoc db :esg/selected-companies [])))

(rf/reg-event-fx
  :esg/fetch-data
  (fn [{:keys [db]} [_]]
    {:db                db
     :http-get-dispatch {:url          (str static/server-address "refinitiv-data?companies=" (db :esg/selected-companies))
                         :dispatch-key [:esg/data]
                         :kwk          true}}))


(defn find-issuers []
  (let [choices  @(rf/subscribe [:esg/refinitiv-ids])
        suggestion-result (fn [n] {:name n})
        suggestions-for-search (fn [s] (into [] (take 8 (for [n choices :when (re-find (re-pattern (str "(?i)" s)) (:name n))] n))))
        typeahead-model (r/atom "")
        typeahead-on-change-value (reagent/atom nil)
        status                    (reagent/atom nil)]
    [v-box :width standard-box-width :gap "20px" :class "element"
     :children [[title :label "Refinitiv entity chooser" :level :level2]
                [h-box :gap "20px" :children [
                                              [typeahead
                                               :model typeahead-model
                                               :data-source suggestions-for-search
                                               :render-suggestion (fn [{:keys [name]}] [:span [:i {:style {:width "40px"}}] name])
                                               :suggestion-to-string (fn [_] "") ;#(:name %)
                                               :status @status
                                               :status-icon? false
                                               :status-tooltip ""
                                               :width "300px"
                                               :placeholder "Type company name here"
                                               :on-change #(do (reset! typeahead-on-change-value %)  (rf/dispatch [:esg/add-company %]))
                                               :change-on-blur? true
                                               :immediate-model-update? false
                                               :rigid? false
                                               :disabled? false
                                               ]
                                              [:> ReactTable
                                               {:data           (sort-by :name @(rf/subscribe [:esg/selected-companies]))
                                                :columns        [{:Header "ID" :accessor "id" :width 200}
                                                                 {:Header "Name" :accessor "name" :width 300}
                                                                 ;{:Header "Remove?" :accessor "remove" :width 70}
                                                                 ]
                                                :pageSize       10
                                                :showPagination false
                                                :className      "-striped -highlight"}]]]
                [h-box :gap "10px" :children [[button :label "Fetch data" :disabled? true :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:esg/fetch-data])]
                                              [button :label "Clear table" :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:esg/clear-table])]]]

                ]]))

(defn table-top-view [] nil)
(defn table-detailed-view [] nil)

(defn nav-esg-bar []
  (let [active-esg @(rf/subscribe [:esg/active-home])]
    [h-box
     :children [[v-box
                 :gap "20px" :class "leftnavbar"
                 :children (into []
                                 (for [item static/esg-navigation]
                                   [button
                                    :class (str "btn btn-primary btn-block" (if (and (= active-esg (:code item))) " active"))
                                    :label (:name item)
                                    :on-click #(rf/dispatch [:esg/active-home (:code item)])]))]]]))

(defn active-home []
  (let [active-esg @(rf/subscribe [:esg/active-home])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-esg
      :find-issuers [box :padding "80px 20px" :class "rightelement" :child [find-issuers]]
      :table-top-view                     [table-top-view]
      :table-detailed-view                     [table-detailed-view]

      ;:proxies [v-box :width standard-box-width :gap "20px" :padding "80px 20px" :class "rightelement"
      ;          :children [[h-box :align :start :children [[portfolio-proxies]]]]]
      [:div.output "nothing to display"])))

(defn esg-view []
  [h-box :gap "10px" :padding "0px" :children [[nav-esg-bar] [active-home]]])

