(ns kdlyticsgui.views
  (:require
    [re-frame.core :as rf]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [reagent-contextmenu.menu :as rcm]
    [cljs-time.core :refer [today]]

    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [kdlyticsgui.mount :as mount]
    [kdlyticsgui.guitools :as t]
    [kdlyticsgui.static :as static]
    [kdlyticsgui.guitools :as gt]
    [kdlyticsgui.wealth :as wealth]
    [kdlyticsgui.positions :as positions]
    [kdlyticsgui.cellar :as cellar]
    [kdlyticsgui.vault :as vault]
    [kdlyticsgui.mui :as mui]
    [goog.string :as gstring]
    ["@mui/material" :as mm :refer ( Button )]
    [helix.core :refer [defnc $]]
    ))
;-----------------------------------------------------------------------------------------------------------------------
(defn modal-mounting []
  (if @(rf/subscribe [:navigation/show-mounting-modal])
    [modal-panel
     :wrap-nicely? false
     :child [alert-box :padding "15px" :style {:width "120px"} :heading [box :align :center :child [throbber :size :large]] :closeable? false]]))

(defn entry [] [box :padding "280px 0px" :class "subbody" :child
                [v-box :align-self :center :class "titlescreen" :children
                 [[:p {:class "titlescreen"} "Hello"]
                  [:p ""] ;2nd [:p] to avoid the cursor blinking next to the logo
                  ;($ Button {:color "inherit" :size "large" :sx #js {:color "grey"} :onClick #(rf/dispatch [:change-active-section 2])} "LET'S GO")
                  ]
                 ]])

;(defn navigation-event
;  "This is really not pure. But it saves loading time at mount."
;  [item]
;  (set! (. js/document -title) (:name item))
;  (doseq [k (:load-events item)]
;    (rf/dispatch (if (vector? k) k [k])))                                      ;send http-requests sequentially
;  (rf/dispatch [:navigation/active-section (:code item)]))


;(defn top-nav-bar []
;  (let [active-view  @(rf/subscribe [:navigation/active-section])]                                       ;@(rf/subscribe [:navigation/active-view])
;    [v-box
;     :align :start
;     :children [[h-box
;                 :class "navbar"
;                 :align :stretch
;                 :children (into [] (concat (into [] (for [item main-navigation]
;                                                       [box
;                                                        :width (if (= (:code item) :wealth) "150px" "150px")
;                                                        :class (if (= active-view (:code item)) "dropdown-active" "dropdown")
;                                                        :child (if (:href item)
;                                                                 [hyperlink-href :label (:name item) :href (:href item)]
;                                                                 [hyperlink :label (:name item) :on-click #(navigation-event item)])])) ;#(rf/dispatch [:navigation/active-view (:code item)])
;                                            [[gap :size "1"]
;                                             [box :align-self :center :height "50%" :width "3px" :child [line :color "#2bcff0" :size "3px"]]
;                                             [box :width "3px" :child ""] ;this is just equal to line above - ugly hack
;                                             [box :width "150px" :class "dropdown" :child [hyperlink :label (gstring/unescapeEntities "kdlytics &trade;") :on-click #(do (set! (. js/document -title) "kdlytics") (rf/dispatch [:navigation/active-section :entry]))]]
;                                             ]))]
;                [line :color "#2bcff0" :class "separatorline"]]]))

;(defn left-nav-bar [choices navigation-key]
;  (println navigation-key)
;  [v-box :gap "20px" :class "leftnavbar"
;   :children (into []
;                   (for [item choices]
;                     ^{:key item}
;                     [button
;                      :class (str "btn btn-primary btn-block" (if (= @(rf/subscribe [navigation-key]) (:code item)) " active")) ;@(rf/subscribe [navigation-key])
;                      :label (:name item)
;                      :on-click #(rf/dispatch [navigation-key (:code item)])]))])

;-----------------------------------------------------------------------------------------------------------------------
;(def wealth-navigation
;  [{:code :summary          :name "Summary"}
;   {:code :projection       :name "Projection"}
;   ])

;(defn wealth-active-view []
;  (let [active-view @(rf/subscribe [:navigation/active-view-wealth])]
;    (.scrollTo js/window 0 0)                             ;on view change we go back to top
;    (case active-view
;      :summary                          [wealth/summary-display]
;      :projection                       [wealth/projection-display]
;      [:div.output "nothing to display"])
;    [wealth/summary-display]
;    ))

(defn wealth-view []
  [h-box :gap "10px" :padding "0px"
   :children [[box :class "subbody" :child [wealth/summary-display]]
              [rcm/context-menu]]])
;-----------------------------------------------------------------------------------------------------------------------
(defn positions-view []
  [h-box :gap "10px" :padding "0px"
   :children [[box :class "subbody" :child [positions/summary-display]]
              [positions/modal-price-history]
              [rcm/context-menu]]])
;-----------------------------------------------------------------------------------------------------------------------
(defn vault-view []
  [h-box :gap "10px" :padding "0px"
   :children [[rcm/context-menu]]])
;-----------------------------------------------------------------------------------------------------------------------
(defn cellar-view []
  [h-box :gap "10px" :padding "0px"
   :children [[box :class "subbody" :child [cellar/summary-display]]
              [rcm/context-menu]]])
;-----------------------------------------------------------------------------------------------------------------------
(defn tools-view []
  [h-box :gap "10px" :padding "0px"
   :children [[box :class "subbody" :child [t/mui-dev]]
              [rcm/context-menu]]])

;-----------------------------------------------------------------------------------------------------------------------
(defn active-section []
  (println @(rf/subscribe [:navigation/active-section]))
  ;(println "HELLO")
  (.scrollTo js/window 0 0)
  (case @(rf/subscribe [:navigation/active-section])
    :entry            [entry]
    :wealth           [wealth-view]
    :positions        [positions-view]
    :vault            [vault-view]
    :cellar           [cellar-view]
    :tools            [tools-view]
    [:div.output "nothing to display"]))


(defn main-panel []
  [v-box
   :gap "0px"
   :class "body"
   :children [($ mui/navigation)
              [modal-mounting]
              [active-section]]
   ])
