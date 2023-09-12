(ns kdlyticsgui.mui
  (:require
    [re-frame.core :as rf]
    [helix.core :refer [defnc $]]
    [helix.dom :as hd]
    [cljs-time.core :refer [today]]
    [helix.hooks :refer [use-state use-effect use-memo]]
    ["react" :as react :refer (useMemo useState)]
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
    ["@mui/icons-material/Build" :default Build]
    ["@mui/icons-material/WineBar" :default WineBar]
    ["@mui/icons-material/Savings" :default Savings]
    ["@mui/icons-material/ShowChart" :default ShowChart]
    ["@mui/icons-material/Fort" :default Fort]
    ))

;------------------------------------------------------------NAVIGATION------------------------------------------------
(def left-bar-width "165px")  ;150px
(def top-bar-height "53px")

(def main-navigation
  (let [home-events nil]                                                                                                                                                    ;[:get-qt-date]
    [{:code :wealth          :name "Summary"            :dispatch :wealth          :subs nil        :load-events home-events        :mounting-modal true      :icon Savings}
     {:code :positions       :name "Positions"         :dispatch :positions       :subs nil           :load-events home-events        :mounting-modal true      :icon ShowChart}
     {:code :vault           :name "Vault"             :dispatch :vault           :subs nil       :load-events home-events        :mounting-modal true      :icon Fort}
     {:code :cellar          :name "Cellar"            :dispatch :cellar          :subs nil        :load-events home-events        :mounting-modal true      :icon WineBar}
     {:code :tools           :name "Tools"             :dispatch :tools           :subs nil       :load-events home-events        :mounting-modal true      :icon Build}
     ]))

;#353535; /*DARK 300*/
;#2bcff0; /* PRIMARY 100 */

(defn navigation []

  ($ Box {:sx #js {:display "flex"}}
     ($ CssBaseline
        ($ AppBar {:position "fixed" :sx #js {:height top-bar-height :width "100%" :zIndex 2 :backgroundColor "#2bcff0" :borderBottom #js {"min-height" "50px"}
                                              }} ;width: `calc(100% - ${drawerWidth}px)`  :width "2695px" :ml left-nav-bar-width
           ($ Toolbar {:sx #js {:backgroundColor "#353535"
                                "&.MuiToolbar-root" #js {"min-height" "51px"}
                                }} ;height is 64px default @media muitoolbar rott etc
              ;($ IconButton {:size "large" :edge "start" :color "inherit" :aria-label "menu" :sx #js {:mr 0}} ($ MenuIcon))
              ($ Typography {:variant "h5" :noWrap true :component "div" :sx #js {:flexGrow 1 :pl 4 }} "Kdlytics") ;just a text, flexGrow to make sure the following button is at the right end of the element
              ($ Button {:color "inherit" :size "large" :onClick #(rf/dispatch [:navigation/active-section :entry])} "LOGO") ;TODO add my logo
              ;($ MenuIcon)
              )
           )
        ($ Drawer {:variant "permanent" :anchor "left" :sx #js {:position "absolute" :zIndex 1
                                                                "& .MuiDrawer-paper" #js {:paddingTop top-bar-height :width left-bar-width :boxSizing "border-box" :backgroundColor "#353535" :color "white"}
                                                                }}
           ($ List
              (for [item main-navigation]
                ($ ListItem {:key (:code item) :disablePadding true :onClick #(rf/dispatch [:navigation/active-section (:code item)])}
                   ($ ListItemButton {:selected false ; need fct for dynamic true ;https://stackoverflow.com/questions/71984986/how-can-i-override-styling-for-listitembutton-when-its-selected
                                      :sx #js {"&:hover" #js {:backgroundColor "#2bcff0"}
                                               ;workaround would be JS :backgroundColor (if (= (:code item) @(rf/subscribe [:navigation/active-section])) "#000000" "#111111" )...must be slow
                                               "&.Mui-selected" #js {:backgroundColor "#000000"} ;this should work if  :selected = true, maybe the item is not selected when we click.. OnClick doenst change the state ?
                                               }}
                      ($ ListItemIcon ($ (:icon item) {:sx #js {:color "white"}} ))
                      ($ ListItemText {:primary (:name item)})
                      )
                   ))
              )
           ;($ Divider {:textAlign "left" :light true :sx #js {:backgroundColor "#353535" :color "white"  :fontSize 10 "&.MuiDivider-root" #js {"&::before, &::after" #js {:borderColor  "#2bcff0"}}}} "Cat2")
           )
        )
     )
  )
