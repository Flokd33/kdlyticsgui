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
    [jasminegui.quantscores :as quantscores]
    [goog.string :as gstring]))


(defn navigation-event [item]
  "This is really not pure. But it saves loading time at mount."
  (doseq [k (:load-events item)]
    (rf/dispatch [k]))                                      ;send http-requests sequentially
  (rf/dispatch [:navigation/active-view (:code item)]))

(defn nav-bar []
  (let [active-view @(rf/subscribe [:navigation/active-view])]
    [v-box
     :align :start
     :children [
                [h-box
                 :class "navbar"
                 :align :stretch
                 :children (into [] (concat (into [] (for [item static/main-navigation]
                                                       [box
                                                        :width (if (= (:code item) :home) "250px" "150px")
                                                        :class (if (= active-view (:code item)) "dropdown-active" "dropdown")
                                                        :child (if (:href item)
                                                                 [hyperlink-href :label (:name item) :href (:href item)]
                                                                 [hyperlink :label (:name item) :on-click #(navigation-event item)])])) ;#(rf/dispatch [:navigation/active-view (:code item)])
                                            [[gap :size "1"]
                                             [box :align-self :center :height "50%" :width "3px" :child [line :color "#CA3E47" :size "3px"]]
                                             [box :width "3px" :child ""] ;this is just equal to line above - ugly hack
                                             [box :width "150px" :class "dropdown" :child [hyperlink :label (gstring/unescapeEntities "pampar &trade;") :on-click nil]]]))


                 ;[(for [item static/main-navigation]
                 ;             ^{:key (:code item)}
                 ;             [box
                 ;              :width (if (= (:code item) :home) "250px" "150px")
                 ;              :class (if (= active-view (:code item)) "dropdown-active" "dropdown")
                 ;              :child [hyperlink :label (:name item) :on-click #(rf/dispatch [:active-view (:code item)])]])
                 ;           [gap :size "1"]
                 ;           [box :align-self :center :height "50%" :width "3px" :child [line :color "#CA3E47" :size "3px"]]
                 ;           [box :width "3px" :child ""]                  ;this is just equal to line above - ugly hack
                 ;           [box :width "150px" :class "dropdown" :child [hyperlink :label "Jasmine" :on-click nil] ]]
                 ;

                 ]
                [line :color "#CA3E47" :class "separatorline"]]]))

;[hyperlink :label @(rf/subscribe [:active-portfolio]) :on-click #(rf/dispatch [:show-portfolio-selector true])]
;
;(defn modal-portfolio-selector []
;  (if @(rf/subscribe [:show-portfolio-selector])
;    [modal-panel
;     :wrap-nicely? true
;     :backdrop-on-click #(rf/dispatch [:show-portfolio-selector false])
;     :child [v-box
;             :width "250px"
;             :height "75px"
;             :gap "10px"
;             :children [[label :label "Select portfolio:"]
;                        [single-dropdown
;                         :width "200px"
;                         :model (rf/subscribe [:active-portfolio])
;                         :choices (into [] (for [x (conj @(rf/subscribe [:portfolios]) "All portfolios")] {:id x :label x}))
;                         :on-change #(rf/dispatch [:active-portfolio %])]]]]))

;(defn modal-success []
;  (let [modal-data @(rf/subscribe [:success-modal])]
;    (if (:show modal-data)
;      [modal-panel
;       :wrap-nicely? false
;       :backdrop-on-click #(rf/dispatch [(:on-close modal-data)])
;       :child [alert-box
;               :padding "15px"
;               :style {:width "450px"}
;               :heading (if-let [x (:response modal-data)] x [box :align :center :child [throbber :size :large]])
;               :closeable? true
;               :on-close #(rf/dispatch [(:on-close modal-data)])]])))

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
                          [input-password :width "200px" :model pw :on-change #(do
                                                                                 (reset! pw %)
                                                                                 ;(rf/dispatch [:show-global-password-modal (not= % static/global-password-EMCD)])
                                                                                 (rf/dispatch [:global-password-check %])
                                                                                 )]]]])))

(defn modal-mounting []
  (if @(rf/subscribe [:navigation/show-mounting-modal])
    [modal-panel
     :wrap-nicely? false
     ;:backdrop-opacity "1.0"
     :child [alert-box
             :padding "15px"
             :style {:width "120px"}
             :heading [box  :align :center :child [throbber :size :large]]
             :closeable? false]]))


(defn active-view []
  (let [active-view @(rf/subscribe [:navigation/active-view])]
    (.scrollTo js/window 0 0)                             ;on view change we go back to top
    (case active-view
      :home   [home/home-view]
      :attribution [attribution/home-view]
      :var    [var/var-view]
      :portfolio-review [pr/view]
      :betas            [betas/view]
      :quant-scores     [quantscores/view]
      :esg              [esg/esg-view]
      ;:trade-drilldown  [tradeview/trade-description-view]
      ;:trade-entry      [tradeentry/trade-entry-view]
      ;:sim-trades       [tables/simulated-trades-view]
      :administration   [administration/administration-view]
      ;:implementation   [implementation/trade-implementation-view]
      [:div.output "nothing to display"])))


(defn main-panel []
  [v-box
   :gap "0px"
   :class "body"
   :children [
              ;[modal-global-password]
              [modal-mounting]
              [nav-bar] [active-view]
              ;[modal-portfolio-selector] [modal-success]
              ]])
