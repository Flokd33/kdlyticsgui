(ns kdlyticsgui.views
  (:require
    [re-frame.core :as rf]
    ;[re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
    ;                     single-dropdown hyperlink modal-panel alert-box throbber input-password
    ;                     input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    ;
    [reagent-contextmenu.menu :as rcm]
    [cljs-time.core :refer [today]]
    ;[re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    ;
    [kdlyticsgui.mount :as mount]
    [kdlyticsgui.guitools :as t]
    [kdlyticsgui.static :as static]
    [kdlyticsgui.wealth :as wealth]
    [kdlyticsgui.positions :as positions]
    [kdlyticsgui.cellar :as cellar]
    [kdlyticsgui.vault :as vault]
    [kdlyticsgui.mui :as mui]
    [helix.core :refer [defnc $]]
    ))

;-----------------------------------------------------------------------------------------------------------------------
;(defn modal-mounting []
;  (if @(rf/subscribe [:navigation/show-mounting-modal])
;    [modal-panel
;     :wrap-nicely? false
;     :child [alert-box :padding "15px" :style {:width "120px"} :heading [box :align :center :child [throbber :size :large]] :closeable? false]]))
;-----------------------------------------------------------------------------------------------------------------------
(defnc entry-view [] ($ mui/mui-body-box {:class "center-element" :children [($ mui/title-screen {:text "hello"})]}))
(defnc wealth-view [] ($ mui/mui-body-box {:class "body" :children [($ wealth/summary-display)]}))
(defnc positions-view [] ($ mui/mui-body-box {:class "body" :children [($ positions/summary-display) ($ positions/modal-price-history)]}))
(defnc vault-view [] ($ mui/mui-body-box {:class "body" :children []}))
(defnc cellar-view [] ($ mui/mui-body-box {:class "body" :children [($ cellar/summary-display)]}))
(defnc tools-view [] ($ mui/mui-body-box {:class "body" :children [($ t/mui-dev)]}))

(defnc active-section []
  (.scrollTo js/window 0 0)
  (case @(rf/subscribe [:navigation/active-section])
    :entry            ($ entry-view)
    :wealth           ($ wealth-view)
    :positions        ($ positions-view)
    :vault            ($ vault-view)
    :cellar           ($ cellar-view)
    :tools            ($ tools-view)
    ))

(defn main-panel []
  (println "HELLO")
  (println @(rf/subscribe [:navigation/active-section]))
  ($ mui/mui-body-box
     {:class "body"
      :children [($ mui/navigation)
                 ($ active-section)
                 ;[modal-mounting]
                 ]}
     ))