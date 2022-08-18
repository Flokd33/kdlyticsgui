(ns jasminegui.guitools
  (:require
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [jasminegui.tools :as t]
    [jasminegui.static :as static]))

(defn element-box-generic
  "opts will have either :download-table or :on-click-action, and can have target-id"
  [id width title-str opts children]
  [:div {:id id}
   [v-box :class "element" :align-self :center :justify :center :gap "20px" :width width
    :children (concat [[h-box :gap "10px" :align :center
                        :children (concat [[title :label title-str :level :level1]
                                           [gap :size "1"]]
                                          (if (:shortcuts opts)
                                            (mapv (fn [i] [md-circle-icon-button :md-icon-name (str "zmdi-collection-item-" i) :tooltip (str "Saved view " i) :tooltip-position :above-center :class (if (= @(rf/subscribe [(:shortcuts opts)]) i) "active" "default") :on-click #(rf/dispatch [(:shortcuts opts) i])])
                                                  (range 1 5)))
                                          (if-not (:no-icons opts)
                                            [[md-circle-icon-button :md-icon-name "zmdi-camera" :tooltip "Open image in new tab" :tooltip-position :above-center :on-click (t/open-image-in-new-tab (if-let [tid (:target-id opts)] tid id))]
                                             [md-circle-icon-button :md-icon-name "zmdi-image" :tooltip "Save table as image" :tooltip-position :above-center :on-click (t/save-image (if-let [tid (:target-id opts)] tid id))]
                                             [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download table" :tooltip-position :above-center :on-click (if-let [ocl (:on-click-action opts)] ocl #(t/csv-link (:download-table opts) (str id "-" (t/gdate->yyyyMMdd (cljs-time.core/today)))))]]))]]
                      children)]])

(defn element-box
  ([id width title-str download-table children] (element-box-generic id width title-str {:download-table download-table} children))
  ([id width title-str download-table on-click-action children] (element-box-generic id width title-str {:on-click-action on-click-action} children)))

(defn element-box-generic-with-cols
  "opts will have either :download-table or :on-click-action, and can have target-id"
  [id width title-str opts children cols]
  [:div {:id id}
   [v-box :class "element" :align-self :center :justify :center :gap "20px" :width width
    :children (concat [[h-box :gap "10px" :align :center
                        :children (concat [[title :label title-str :level :level1]
                                           [gap :size "1"]]
                                          (if (:shortcuts opts)
                                            (mapv (fn [i] [md-circle-icon-button :md-icon-name (str "zmdi-collection-item-" i) :class (if (= @(rf/subscribe [key]) i) "active" "default") :on-click #(rf/dispatch [key i])])
                                                  (range 1 5)))
                                          [[md-circle-icon-button :md-icon-name "zmdi-camera" :tooltip "Open image in new tab" :tooltip-position :above-center :on-click (t/open-image-in-new-tab (if-let [tid (:target-id opts)] tid id))]
                                           [md-circle-icon-button :md-icon-name "zmdi-image" :tooltip "Save table as image" :tooltip-position :above-center :on-click (t/save-image (if-let [tid (:target-id opts)] tid id))]
                                           [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download table" :tooltip-position :above-center :on-click (if-let [ocl (:on-click-action opts)] ocl #(t/csv-link (:download-table opts) (str id "-" (t/gdate->yyyyMMdd (cljs-time.core/today))) cols))]])]]
                      children)]])

(defn element-box-with-cols
  ([id width title-str download-table children cols] (element-box-generic-with-cols id width title-str {:download-table download-table} children cols))
  ([id width title-str download-table on-click-action children cols] (element-box-generic-with-cols id width title-str {:on-click-action on-click-action} children cols)))

(defn portfolio-dropdown-selector
  ([re-frame-db-key]
   [single-dropdown :width "125px" :filter-box? true :model (rf/subscribe [re-frame-db-key]) :choices @(rf/subscribe [:portfolio-dropdown-map]) :on-change #(rf/dispatch [re-frame-db-key %])])
  ([re-frame-db-key on-change-key-event]
   [single-dropdown :width "125px" :filter-box? true :model (rf/subscribe [re-frame-db-key]) :choices @(rf/subscribe [:portfolio-dropdown-map]) :on-change #(rf/dispatch [on-change-key-event %])]))

(rf/reg-event-db
  :quant-model-new-bond/save-bond-response
  (fn [db [_  data]]
    (if (:success data)
      (assoc db :quant-model/new-bond-entry nil :quant-model/new-bond-saved-message (:message data))
      (assoc db :quant-model/new-bond-saved-message (:message data)))))

(rf/reg-event-db
  :tree-table-toggle
  (fn [db [_  table-keyword-string display-style]]
    (assoc db
      (keyword table-keyword-string "display-style") display-style
      (keyword table-keyword-string "hide-zero-holdings") (= display-style "Table"))))

(defn tree-table-selector
  [table-keyword-string]
  [single-dropdown
   :width "125px"
   :model (rf/subscribe [(keyword table-keyword-string "display-style")])
   :choices static/tree-table-choices
   :on-change #(rf/dispatch [:tree-table-toggle table-keyword-string %])])

(rf/reg-event-db
  :filtering-row-change
  (fn [db [_ risk-filter-key risk-filter-nb value]]
    (-> db
        (assoc-in [risk-filter-key risk-filter-nb] value)
        (assoc :portfolio-history/data nil))))

(defn filtering-row [key]
  (let [risk-filter (rf/subscribe [key])]
    [h-box :gap "10px" :align :center
     :children (into [] (for [i (range 1 4)]
                          ^{:key (str "filtering" i)}
                          [single-dropdown
                           :width "125px"
                           :model (r/cursor risk-filter [i])
                           :choices (if (.includes ^string (str key) "attribution") static/attribution-choice-map static/risk-choice-map)
                           :disabled? (and (= i 3) (some #{key} [:portfolio-history/filter :attribution-history/filter]))
                           :on-change #(rf/dispatch [:filtering-row-change key i %])]))]))

(defn left-nav-bar
  [choices navigation-key]
  [v-box :gap "20px" :class "leftnavbar"
   :children (into []
                   (for [item choices]
                     ^{:key item}
                     [button
                      :class (str "btn btn-primary btn-block" (if (= @(rf/subscribe [navigation-key]) (:code item)) " active"))
                      :label (:name item)
                      :on-click #(rf/dispatch [navigation-key (:code item)])]))])