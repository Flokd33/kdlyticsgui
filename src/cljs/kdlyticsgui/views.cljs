(ns kdlyticsgui.views
  (:require
    [re-frame.core :as rf]
    ;[reagent.core :as r]
    [reagent-contextmenu.menu :as rcm]

    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [kdlyticsgui.mount :as mount]
    [kdlyticsgui.static :as static]
    [kdlyticsgui.guitools :as gt]
    [kdlyticsgui.wealth :as wealth]
    [goog.string :as gstring]
    ))
;-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
(def main-navigation
  (let [home-events nil]                                                                                                                                                    ;[:get-qt-date]
    [{:code :wealth          :name "W"            :dispatch :wealth          :subs nil       :load-events home-events        :mounting-modal true}
     {:code :positions       :name "P"         :dispatch :positions       :subs nil       :load-events home-events        :mounting-modal true}
     {:code :vault           :name "V"             :dispatch :vault           :subs nil       :load-events home-events        :mounting-modal true}
     {:code :cellar          :name "C"            :dispatch :cellar          :subs nil       :load-events home-events        :mounting-modal true}
     {:code :tools           :name "T"             :dispatch :tools           :subs nil       :load-events home-events        :mounting-modal true}
     ]))

(defn modal-mounting []
  (if @(rf/subscribe [:navigation/show-mounting-modal])
    [modal-panel
     :wrap-nicely? false
     :child [alert-box :padding "15px" :style {:width "120px"} :heading [box :align :center :child [throbber :size :large]] :closeable? false]]))

(defn entry [] [box :padding "280px 0px" :class "subbody" :child
                [v-box :align-self :center :class "titlescreen" :children
                 ;[label :label "Please select an item at the top."]
                 [[:p {:class "titlescreen"} "kdlytics"] [:p ""]] ;2nd [:p] to avoid the cursor blinking next to the logo
                 ]])

(defn navigation-event
  "This is really not pure. But it saves loading time at mount."
  [item]
  (set! (. js/document -title) (:name item))
  (doseq [k (:load-events item)]
    (rf/dispatch (if (vector? k) k [k])))                                      ;send http-requests sequentially
  (rf/dispatch [:navigation/active-section (:code item)]))


(defn top-nav-bar []
  (let [active-view  @(rf/subscribe [:navigation/active-section])]                                       ;@(rf/subscribe [:navigation/active-view])
    [v-box
     :align :start
     :children [[h-box
                 :class "navbar"
                 :align :stretch
                 :children (into [] (concat (into [] (for [item main-navigation]
                                                       [box
                                                        :width (if (= (:code item) :wealth) "175px" "150px")
                                                        :class (if (= active-view (:code item)) "dropdown-active" "dropdown")
                                                        :child (if (:href item)
                                                                 [hyperlink-href :label (:name item) :href (:href item)]
                                                                 [hyperlink :label (:name item) :on-click #(navigation-event item)])])) ;#(rf/dispatch [:navigation/active-view (:code item)])
                                            [[gap :size "1"]
                                             [box :align-self :center :height "50%" :width "3px" :child [line :color "#C33345" :size "3px"]]
                                             [box :width "3px" :child ""] ;this is just equal to line above - ugly hack
                                             [box :width "150px" :class "dropdown" :child [hyperlink :label (gstring/unescapeEntities "kdlytics &trade;") :on-click #(do (set! (. js/document -title) "kdlytics") (rf/dispatch [:navigation/active-section :entry]))]]
                                             ]))]
                [line :color "#C33345" :class "separatorline"]]]))

(defn left-nav-bar [choices navigation-key]
  (println navigation-key)
  [v-box :gap "20px" :class "leftnavbar"
   :children (into []
                   (for [item choices]
                     ^{:key item}
                     [button
                      :class (str "btn btn-primary btn-block" (if (= @(rf/subscribe [navigation-key]) (:code item)) " active")) ;@(rf/subscribe [navigation-key])
                      :label (:name item)
                      :on-click #(rf/dispatch [navigation-key (:code item)])]))])
;-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
(def wealth-navigation
  [{:code :summary          :name "Summary"}
   {:code :projection       :name "Projection"}
   ])

(defn wealth-active-view []
  (let [active-view @(rf/subscribe [:navigation/active-view-wealth])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-view
      :summary                          [wealth/summary-display]
      :projection                       [wealth/projection-display]

      [:div.output "nothing to display"])))

(defn wealth-view []
  [h-box :gap "10px" :padding "0px"
   :children [
              [left-nav-bar wealth-navigation :navigation/active-view-wealth]
              [wealth-active-view]
              ;[tradehistory/modal-single-bond-flat-trade-history]
              [rcm/context-menu]]])

;-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
(def positions-navigation
  [{:code :summary          :name "Summary"}
   {:code :trades           :name "Trades"}
   ])


(defn positions-view []
  [h-box :gap "10px" :padding "0px"
   :children [[left-nav-bar positions-navigation :navigation/active-view-positions]

              [rcm/context-menu]]])


;-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
(def vault-navigation
  [{:code :inventory        :name "Inventory"}
   {:code :transaction      :name "Transactions"}
   ])


(defn vault-view []
  [h-box :gap "10px" :padding "0px"
   :children [[left-nav-bar vault-navigation :navigation/active-view-vault]

              [rcm/context-menu]]])

;-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
(def cellar-navigation
  [{:code :inventory        :name "Inventory"}
   {:code :transaction      :name "Transactions"}
   ])


(defn cellar-view []
  [h-box :gap "10px" :padding "0px"
   :children [[left-nav-bar cellar-navigation :navigation/active-view-cellar]


              [rcm/context-menu]]])

;-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
(def tools-navigation
  [{:code :scrapping        :name "Scraper"}
   ])


(defn tools-view []
  [h-box :gap "10px" :padding "0px"
   :children [[left-nav-bar tools-navigation :navigation/active-view-tools]

              [rcm/context-menu]]])

;-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
(defn active-section []
  ;(println @(rf/subscribe [:navigation/active-section]))
  (println "HELLO")
  (.scrollTo js/window 0 0)                             ;on view change we go back to top
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
   :children [[modal-mounting] [top-nav-bar] [active-section]]])
