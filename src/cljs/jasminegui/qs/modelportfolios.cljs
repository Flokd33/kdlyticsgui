(ns jasminegui.qs.modelportfolios
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink md-circle-icon-button selection-list modal-panel typeahead throbber
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    ["react-table-v6" :as rt :default ReactTable]
    [jasminegui.mount :as mount]
    [jasminegui.tables :as tables]
    [jasminegui.static :as static]
    [jasminegui.tools :as t]
    [reagent.core :as reagent]
    [reagent.core :as r]
    [oz.core :as oz]
    [goog.string :as gstring]
    [goog.string.format]
    [reagent-contextmenu.menu :as rcm]
    [jasminegui.qs.qstables :as qstables]
    )
  )

(def active-bond (r/atom {:portfolio :CEMBI :row nil}))
(def show-change-model-portfolio-modal (r/atom nil))

(def model-portfolio-universe {:CEMBI-model   "CEMBI model"
                               :Allianz-model "Allianz model"
                               :IG-model      "IG model"
                               :BNP-model     "BNP model"
                               :TR-model      "TR model"})

;;;;;;;;;;;;
(rf/reg-sub
  :simple-quant-model
  (fn [db]
    (let [qm (:quant-model/model-output db) ks (into [] (for [k (keys (first qm)) :when (not (or (clojure.string/includes? (name k) "legacy") (clojure.string/includes? (name k) "new")))] k))]
      (mapv #(merge (select-keys % ks) (zipmap (keys model-portfolio-universe) (repeat 0.0)) {:totaldummy ""}) qm))))

(rf/reg-event-fx
  :change-model-portfolio
  (fn [{:keys [db]} [_]]
    (println @active-bond)
    {
     ;:http-post-dispatch {:url (str static/server-address "quant-model-save-new-chart")
     ;                     :edn-params {:id id :model-type model-type :rating-curves (remove nil? (seq rating-curves)) :issuers (remove nil? (seq issuers)) :rating-curves-sov-only spot-chart-2d-curves-sov-only}
     ;                     :dispatch-key [:dummy]}
     :db db
     }))

(def agg-order (r/atom "Region / Country" "Sector / Country"))


(defn fnevt [state rowInfo instance evt]
  (rcm/context!
    evt
    [(aget rowInfo "original" "Bond")                                         ; <---- string is a section title
     ["Copy ISIN" (fn [] (t/copy-to-clipboard (aget rowInfo "original" "ISIN")))]
     ["Change position"
      (into [] (for [[k id] model-portfolio-universe]
                 [id #(do (reset! active-bond {:portfolio k :row (aget rowInfo "original")}) (rf/dispatch [:change-model-portfolio]))]))]]))

(defn on-click-context [state rowInfo instance]
  (clj->js {:onClick #(fnevt state rowInfo instance %) :style {:cursor "pointer"}}))


(defn model-portfolios []
  [box :padding "80px 10px" :class "rightelement" :child
   (let [data (mapv #(assoc % :model-weight (if-let [mw (get-in @(rf/subscribe [:model-portfolios/weights]) ["ModelOne" (% :ISIN)])] (js/parseFloat mw) 0.0)) @(rf/subscribe [:simple-quant-model]))]
     [v-box :class "element" :gap "20px" :width "1690px"
      :children [[title :label "Model portfolios" :level :level1]
                 [h-box :align :center :gap "20px" :children [[button :label "Open" :on-click #()] [button :label "Save" :on-click #()]]]
                 [h-box :align :center :gap "20px"
                  :children (concat
                              (into [] (for [c ["Build" "Explore" "Tree"]]
                                         ^{:key c} [radio-button :label c :value c :model (rf/subscribe [:model-portfolios/display]) :on-change #(rf/dispatch [:model-portfolios/display %])])) ;; key should be unique among siblings
                              [
                               [gap :size "20px"]
                               [checkbox :model (r/cursor qstables/table-checkboxes [:indices]) :label "Show index membership?" :on-change #(swap! qstables/table-checkboxes assoc-in [:indices] %)]
                               [checkbox :model (r/cursor qstables/table-checkboxes [:calls]) :label "Show calls?" :on-change #(swap! qstables/table-checkboxes assoc-in [:calls] %)]
                               [gap :size "1"]
                               [md-circle-icon-button :md-icon-name "zmdi-filter-list" :tooltip "Download current view" :on-click #(t/react-table-to-csv @qstables/qs-table-view "quant-model-output" (mapv :accessor (apply concat (map :columns (qstables/table-style->qs-table-col @qstables/table-style @qstables/table-checkboxes)))))] ;
                               [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download full model" :on-click #(t/csv-link data "quant-model-output" (conj (keys (first data)) :ISIN))]])]
                 (println (first data))
                 [:> ReactTable
                  {:data            data
                   :columns         (concat
                                      (if
                                        (= @(rf/subscribe [:model-portfolios/display]) "Tree")
                                        [{:Header "" :columns [{:Header "" :accessor "totaldummy" :width 30 :filterable false}]}]
                                        [])
                                      (qstables/table-style->qs-table-col "Model portfolios" @qstables/table-checkboxes))
                   :showPagination  true :defaultPageSize 10
                   :filterable      true :defaultFilterMethod tables/text-filter-OR
                   :pivotBy         (if (= @(rf/subscribe [:model-portfolios/display]) "Tree") ["totaldummy" "Country" "Ticker"] [])
                   ;:onFilteredChange #(println %)
                   :defaultFiltered (if (= @(rf/subscribe [:model-portfolios/display]) "Build") [] [{:id "model-weight" :value ">0"}])
                   ;:defaultFiltered @qs-table-filter  ; SEE NOTE ABOVE
                   ;:ref             #(reset! qs-table-view %)
                   :getTrProps      on-click-context
                   :className       "-striped -highlight"}]]])])

(defn modal-change-model-portfolio []
  (let [nickname (r/atom "")
        chart-to-open (r/atom #{})]
    (fn []
      (let [a 3]
        (case @show-change-model-portfolio-modal
          :change
          [modal-panel :backdrop-on-click #(reset! show-change-model-portfolio-modal nil)
           :child [v-box  :width "400px" :gap "10px" :padding "20px"
                   :children [[title :label "Change model portfolio position" :level :level1]
                              [h-box :gap "10px" :children []]
                              [input-text :placeholder "Nickname" :model nickname :on-change #(reset! nickname %)]
                              [label :label "Use same nickname to override existing configuration."]
                              [h-box :gap "10px" :children [[button :label "Save" :on-click #(do  nil)]
                                                            [button :label "Cancel" :on-click #(reset! show-change-model-portfolio-modal nil)]]]]]]


          nil
          )))))