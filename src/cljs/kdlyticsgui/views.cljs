(ns kdlyticsgui.views
  (:require
    [re-frame.core :as rf]
    ;[reagent.core :as r]
    [reagent-contextmenu.menu :as rcm]

    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]


    [helix.core :refer [defnc $]]
    [helix.dom :as hd]
    [reagent-contextmenu.menu :as rcm]
    [cljs-time.core :refer [today]]
    [helix.hooks :refer [use-state use-effect use-memo]]
    ["material-react-table" :as rt :default MaterialReactTable :refer ( MRT_ShowHideColumnsButton MRT_ToggleDensePaddingButton MRT_FullScreenToggleButton )] ;<MRT_FullScreenToggleButton table={table} />
    ["@mui/material" :as mm :refer ( Button IconButton Tooltip Box Divider createTheme ThemeProvider useTheme Drawer CssBaseline AppBar Toolbar List Typography Divider ListItem ListItemButton ListItemIcon ListItemText )]
    ["@mui/icons-material/MoveToInbox" :default InboxIcon]
    ["@mui/icons-material/PhotoCamera" :default PhotoCameraIcon]
    ["@mui/icons-material/Download" :default DownloadIcon]
    ["@mui/icons-material/SystemUpdateAlt" :default SystemUpdateAltIcon]
    ["@mui/icons-material/Star" :default StarIcon]
    ["@mui/icons-material/StarBorder" :default StarBorderIcon]
    ["@mui/icons-material/FilterListOff" :default FilterListOffIcon]
    ["@mui/icons-material/Filter1" :default Filter1Icon]
    ["@mui/icons-material/Filter2" :default Filter2Icon]
    ["@mui/icons-material/Filter3" :default Filter3Icon]
    ["@mui/icons-material/Filter4" :default Filter4Icon]
    ["@mui/icons-material/HelpCenter" :default HelpCenterIcon]
    ["@mui/icons-material/CallEnd" :default CallEndIcon]
    ["@mui/icons-material/Flag" :default FlagIcon]
    ["@mui/icons-material/Workspaces" :default WorkspacesIcon]
    ["@mui/icons-material/BarChart" :default BarChartIcon]
    ["@mui/icons-material/PieChart" :default PieChartIcon]
    ["@mui/icons-material/Expand" :default ExpandIcon]
    ["@mui/icons-material/Menu" :default MenuIcon]
    ["react" :as react :refer (useMemo useState)]


    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [kdlyticsgui.mount :as mount]
    [kdlyticsgui.static :as static]
    [kdlyticsgui.guitools :as gt]
    [kdlyticsgui.wealth :as wealth]
    [kdlyticsgui.positions :as positions]
    [kdlyticsgui.cellar :as cellar]
    [kdlyticsgui.vault :as vault]
    [goog.string :as gstring]
    ))
;-----------------------------------------------------------------------------------------------------------------------
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
                 [[:p {:class "titlescreen"} "Hello"] [:p ""]] ;2nd [:p] to avoid the cursor blinking next to the logo
                 ]

                ;[v-box :align-self :center :class "page-section" :children
                ; ;[label :label "Please select an item at the top."]
                ; [[:p {:class "page-section"} ] [:p ""]] ;2nd [:p] to avoid the cursor blinking next to the logo
                ; ]

                ;[v-box :align-self :center :class "particles-js" :children
                ; ;[label :label "Please select an item at the top."]
                ; [[:p {:class "particles-js"} ] ]
                ; ]

                ])

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
                                                        :width (if (= (:code item) :wealth) "150px" "150px")
                                                        :class (if (= active-view (:code item)) "dropdown-active" "dropdown")
                                                        :child (if (:href item)
                                                                 [hyperlink-href :label (:name item) :href (:href item)]
                                                                 [hyperlink :label (:name item) :on-click #(navigation-event item)])])) ;#(rf/dispatch [:navigation/active-view (:code item)])
                                            [[gap :size "1"]
                                             [box :align-self :center :height "50%" :width "3px" :child [line :color "#2bcff0" :size "3px"]]
                                             [box :width "3px" :child ""] ;this is just equal to line above - ugly hack
                                             [box :width "150px" :class "dropdown" :child [hyperlink :label (gstring/unescapeEntities "kdlytics &trade;") :on-click #(do (set! (. js/document -title) "kdlytics") (rf/dispatch [:navigation/active-section :entry]))]]
                                             ]))]
                [line :color "#2bcff0" :class "separatorline"]]]))

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
;------------------------------------------------------------NEW NAV BAR------------------------------------------------

(def left-bar-width "160px")  ;150px
(def top-bar-height "50px")

;#353535; /*DARK 300*/
;#2bcff0; /* PRIMARY 100 */

(defn left-nav-bar []

  ($ Box {:sx #js {:display "flex"}}
     ($ CssBaseline
        ($ AppBar {:position "fixed" :sx #js {:height top-bar-height :width "100%" :zIndex 2 :backgroundColor "#2bcff0" :borderBottom #js {"min-height" "50px"}
                                              }} ;width: `calc(100% - ${drawerWidth}px)`  :width "2695px" :ml left-nav-bar-width
           ($ Toolbar {:sx #js {:backgroundColor "#353535"
                                "&.MuiToolbar-root" #js {"min-height" "49px"}

                                }} ;height is 64px default @media muitoolbar rott etc
              ($ IconButton {:size "large" :edge "start" :color "inherit" :aria-label "menu" :sx #js {:mr 0}}
                 ($ MenuIcon)                               ;TODO add my logo
                 )
              ($ Typography {:variant "h5" :noWrap true :component "div" :sx #js {:flexGrow 1}} "Kdlytics") ;just a text, flexGrow to make sure the following button is at the right end of the element
              ($ Button {:color "inherit" :size "large" } "LOGO") ;onclick back to load page?
              )
           )
        ($ Drawer {:variant "permanent"
                   :anchor "left"
                   :sx #js {:position "absolute"
                            :zIndex 1
                            "& .MuiDrawer-paper" #js {:paddingTop top-bar-height :width left-bar-width :boxSizing "border-box" :backgroundColor "#353535"
                                                      :color "white" }
                            }
                   }
           ($ List
              (for [item ["Inbox" "Starred" "Drafts"]]
                        ($ ListItem {:key item :disablePadding true}
                          ($ ListItemButton
                             ($ ListItemIcon
                                ($ InboxIcon {:sx #js {:color "white"}} )
                                )
                             ($ ListItemText {:primary item})
                             )
                           ))
              )
           ($ Divider {:textAlign "left" :light true :sx #js {:backgroundColor "#353535"
                                                              :color "white"  :fontSize 10
                                                              "&.MuiDivider-root" #js {"&::before, &::after" #js {:borderColor  "#2bcff0"}
                                                                                       }}} "Cat2")

           ($ List
              (for [item ["Inbox" "Starred" "Drafts"]]
                ($ ListItem {:key item :disablePadding true}
                   ($ ListItemButton
                      ($ ListItemIcon
                         ($ InboxIcon {:sx #js {:color "white"}} )
                         )
                      ($ ListItemText {:primary item})
                      )
                   ))
              )


           )
        )
     )
  )


;-----------------------------------------------------------------------------------------------------------------------
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
              [box :class "subbody" :child [wealth-active-view]]
              ;[wealth/modal-price-history]
              [rcm/context-menu]]])

;-----------------------------------------------------------------------------------------------------------------------
(def positions-navigation
  [{:code :summary          :name "Summary"}
   {:code :trades           :name "Trades"}
   ])

(defn positions-active-view []
  (let [active-view @(rf/subscribe [:navigation/active-view-positions])]
    (.scrollTo js/window 0 0)
    (case active-view
      :summary                          [positions/summary-display]
      ;:trades                          [positions/trades-display]
      [:div.output "nothing to display"])))

(defn positions-view []
  [h-box :gap "10px" :padding "0px"
   :children [[left-nav-bar positions-navigation :navigation/active-view-positions]
              [box :class "subbody" :child [positions-active-view]]
              [positions/modal-price-history]
              [rcm/context-menu]]])

;-----------------------------------------------------------------------------------------------------------------------
(def vault-navigation
  [{:code :inventory        :name "Inventory"}
   {:code :transaction      :name "Transactions"}
   ])

(defn vault-view []
  [h-box :gap "10px" :padding "0px"
   :children [[left-nav-bar vault-navigation :navigation/active-view-vault]

              [rcm/context-menu]]])

;-----------------------------------------------------------------------------------------------------------------------
(def cellar-navigation
  [{:code :inventory        :name "Inventory"}
   ;{:code :transaction      :name "Transactions"}
   ])

(defn cellar-active-view []
  (let [active-view @(rf/subscribe [:navigation/active-view-cellar])]
    (.scrollTo js/window 0 0)
    (case active-view
      :inventory                          [cellar/summary-display]
      ;:transaction                       [positions/trades-display]
      [:div.output "nothing to display"])))

(defn cellar-view []
  [h-box :gap "10px" :padding "0px"
   :children [[left-nav-bar cellar-navigation :navigation/active-view-cellar]
              [box :class "subbody" :child [cellar-active-view]]
              [rcm/context-menu]]])

;-----------------------------------------------------------------------------------------------------------------------
(def tools-navigation
  [{:code :scrapping        :name "Scraper"}
   ])


(defn tools-view []
  [h-box :gap "10px" :padding "0px"
   :children [[left-nav-bar tools-navigation :navigation/active-view-tools]

              [rcm/context-menu]]])

;-----------------------------------------------------------------------------------------------------------------------
(defn active-section []
  ;(println @(rf/subscribe [:navigation/active-section]))
  (println "HELLO")
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
   :children [[modal-mounting]
              ;[top-nav-bar]
              [active-section]]])
