(ns jasminegui.guitools
  (:require
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-frame.core :as rf]
    [jasminegui.tools :as t]
    )
  )

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

