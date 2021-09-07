(ns jasminegui.guitools
  (:require
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [jasminegui.tools :as t]
    )
  )

(defn element-box

  ([id width title-str download-table children]
   [:div {:id id}
    [v-box :class "element" :align-self :center :justify :center :gap "20px" :width width
     :children (concat [[h-box :gap "10px" :align :center
                         :children [[title :label title-str :level :level1]
                                    [gap :size "1"]
                                    [md-circle-icon-button :md-icon-name "zmdi-camera" :tooltip "Open image in new tab" :tooltip-position :above-center :on-click (t/open-image-in-new-tab id)]
                                    [md-circle-icon-button :md-icon-name "zmdi-image" :tooltip "Save table as image" :tooltip-position :above-center :on-click (t/save-image id)]
                                    [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download table" :tooltip-position :above-center :on-click #(t/csv-link download-table (str id "-" (t/gdate-to-yyyymmdd (cljs-time.core/today))))]]]]
                       children)]])
  ([id width title-str download-table on-click-action children]
   [:div {:id id}
    [v-box :class "element" :align-self :center :justify :center :gap "20px" :width width
     :children (concat [[h-box :gap "10px" :align :center
                         :children [[title :label title-str :level :level1]
                                    [gap :size "1"]
                                    [md-circle-icon-button :md-icon-name "zmdi-camera" :tooltip "Open image in new tab" :tooltip-position :above-center :on-click (t/open-image-in-new-tab id)]
                                    [md-circle-icon-button :md-icon-name "zmdi-image" :tooltip "Save table as image" :tooltip-position :above-center :on-click (t/save-image id)]
                                    [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download table" :tooltip-position :above-center :on-click on-click-action]]]]
                       children)]])

  )