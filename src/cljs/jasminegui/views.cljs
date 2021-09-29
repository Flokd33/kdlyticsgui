(ns jasminegui.views
  (:require
    [re-frame.core :as rf]
    ;   [reagent.core :as reagent]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]
    [jasminegui.home :as home]
    [jasminegui.var :as var]
    [jasminegui.attribution :as attribution]
    [jasminegui.administration :as administration]
    [jasminegui.portfolioreview :as pr]
    [jasminegui.betas :as betas]
    [jasminegui.esg :as esg]
    [jasminegui.scorecard :as scorecard]
    [jasminegui.qs.quantscores :as quantscores]
    [jasminegui.riskviews :as riskviews]
    [goog.string :as gstring]
    [jasminegui.tradehistory :as th]))


(defn navigation-event
  "This is really not pure. But it saves loading time at mount."
  [item]
  (doseq [k (:load-events item)]
    (rf/dispatch (if (vector? k) k [k])))                                      ;send http-requests sequentially
  (rf/dispatch [:navigation/active-view (:code item)]))

;(defn sub-navigation-event
;  [subitem]
;  (doseq [k (:load-events subitem)]
;    (let [kv (if (vector? k) k [k]) v @(rf/subscribe [kv])]
;      (if (or (nil? v) (and (seq? v) (zero? (count v))))
;        (rf/dispatch (if (vector? k) k [k]))
;
;        ))
;    (rf/dispatch (if (vector? k) k [k])))
;  )

(defn nav-bar []
  (let [active-view @(rf/subscribe [:navigation/active-view])]
    [v-box
     :align :start
     :children [[h-box
                 :class "navbar"
                 :align :stretch
                 :children (into [] (concat (into [] (for [item static/main-navigation]
                                                       [box
                                                        :width (if (= (:code item) :home) "200px" "150px")
                                                        :class (if (= active-view (:code item)) "dropdown-active" "dropdown")
                                                        :child (if (:href item)
                                                                 [hyperlink-href :label (:name item) :href (:href item)]
                                                                 [hyperlink :label (:name item) :on-click #(navigation-event item)])])) ;#(rf/dispatch [:navigation/active-view (:code item)])
                                            [[gap :size "1"]
                                             [box :align-self :center :height "50%" :width "3px" :child [line :color "#CA3E47" :size "3px"]]
                                             [box :width "3px" :child ""] ;this is just equal to line above - ugly hack
                                             [box :width "150px" :class "dropdown" :child [hyperlink :label (gstring/unescapeEntities "pampar &trade;") :on-click #(rf/dispatch [:navigation/active-view :entry])]]]))]
                [line :color "#CA3E47" :class "separatorline"]]]))

(defn modal-global-password []
  (if @(rf/subscribe [:show-global-password-modal])
    (let [pw (reagent.core/atom nil)]
      [modal-panel
       :wrap-nicely? true
       :backdrop-opacity "1.0"
       :child [v-box
               :width "250px"
               :height "75px"
               :gap "10px"
               :children [[label :label "Team password:"]
                          [input-password :width "200px" :model pw :on-change #(do (reset! pw %) (rf/dispatch [:global-password-check %]))]]]])))

(defn modal-mounting []
  (if @(rf/subscribe [:navigation/show-mounting-modal])
    [modal-panel
     :wrap-nicely? false
     :child [alert-box
             :padding "15px"
             :style {:width "120px"}
             :heading [box  :align :center :child [throbber :size :large]]
             :closeable? false]]))

(defn entry [] [box :padding "280px 0px" :class "subbody" :child
                [v-box :align-self :center :class "titlescreen" :children
                 ;[label :label "Please select an item at the top."]
                 [[:p {:class "titlescreen"} "pampar"] [:p ""]] ;2nd [:p] to avoid the cursor blinking next to the logo
                 ]])

(defn active-view []
  (let [active-view @(rf/subscribe [:navigation/active-view])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-view
      :entry            [entry]
      :home             [home/home-view]
      :trade-history    [th/trade-history]
      :attribution      [attribution/home-view]
      :var              [var/var-view]
      :portfolio-review [pr/view]
      :betas            [betas/view]
      :quant-scores     [quantscores/view]
      :esg              [esg/esg-view]
      :scorecard        [scorecard/view]
      :administration   [administration/administration-view]
      [:div.output "nothing to display"])))


(defn main-panel []
  [v-box
   :gap "0px"
   :class "body"
   :children [[modal-mounting] [nav-bar] [active-view]]])
