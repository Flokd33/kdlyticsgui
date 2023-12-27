(ns kdlyticsgui.mui
  (:require
    [cljs-time.core :refer [today]]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [helix.core :refer [defnc $]]
    [helix.dom :as d]
    [helix.hooks :refer [use-state use-effect use-memo]]
    ["react" :as react :refer (useMemo useState)]
    ["@mui/material" :as mm :refer ( Button IconButton Tooltip Box Divider InputLabel Select createTheme ThemeProvider useTheme Drawer CssBaseline AppBar Toolbar List Typography
                                            ListItem ListItemButton ListItemIcon ListItemText
                                            MenuItem Item FormControl Slider Autocomplete TextField  RadioGroup Radio FormLabel FormControlLabel Switch
                                            ListSubheader Unstable_Grid2 Grid Card CardActions CardContent Modal
                                            FormControl
                                            DrawerHeader
                                            )]
    ;["@mui/material/FormControl" :default MuiFormControl]
    ["@mui/material/styles" :refer [styled useTheme]]
    ;["@mui/material/styles" :refer (useTheme styled)]

    ["@mdi/js" :refer ( mdiGold mdiFinance mdiBottleWine mdiTools mdiPiggyBank)]
    ["@mdi/react" :refer ( Icon )]

    ["@mui/icons-material/MoveToInbox" :default InboxIcon]
    ["@mui/icons-material/PhotoCamera" :default PhotoCameraIcon]
    ["@mui/icons-material/Download" :default DownloadIcon]
    ["@mui/icons-material/ChevronLeft" :default ChevronLeftIcon]
    ["@mui/icons-material/ChevronRight" :default ChevronRightIcon]
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

    ;["@material-ui/core/styles" :refer [withStyles]]

    ;["@mui/x-date-pickers" :refer ( DatePicker LocalizationProvider)]
    ;["@mui/x-date-pickers/AdapterDayjs" :refer ( AdapterDayjs )]
    ;["dayjs" :as dayjs]
    ;["dayjs/locale/en-gb"]

    ))
;--------------------------------------------------------USEFUL----------------------------------------------------------
;https://github.com/reagent-project/reagent/blob/e70c52531341bba83636e88eb7b60ff5796195b1/examples/material-ui/src/example/core.cljs#L78-L93
;https://github.com/dakra/mui-templates/blob/master/src/mui_templates/views/components.cljs#L55-L58
;for custom styling we can
;   1) use @mui/material/styles and recreate a new component (e.g https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/forms/form-elements/select/)
;or 2) format in the CSS (example in extra.css)
;or 3) sx https://stackoverflow.com/questions/73196850/i-want-to-change-the-hover-color-to-red-wrote-a-topic-for-this-element-does-not
;--------------------------------------------------------TOOLS----------------------------------------------------------
(def classes (let [prefix "rmui-example"]
               {:root       (str prefix "-root")
                :button     (str prefix "-button")
                :text-field (str prefix "-text-field")}))

(defn event-value
  [e]
  (.. e -target -value))

;(defn event-value-date
;  [e]
;  (println (. e -Tvalue))
;  (. e -Tvalue))

(defn synthetic-event-value
  [v]
  "Here we already get the value by taking the second argument %2 of the Autocomplete on-change event"
  "https://stackoverflow.com/questions/70426718/getting-syntheticbaseevent-object-instead-of-the-simple-event-when-using-react"
  "(fn [_ choice] (println (:label (js->clj [_ e] {:keywordize-keys true})) ))"
  (:label (js->clj v {:keywordize-keys true}))
  )

;(def custom-theme
;  {:palette {:primary   colors/purple
;             :secondary colors/green}})

;--------------------------------------------------NAVIGATION-----------------------------------------------------------
(def main-navigation
  (let [home-events nil]
    [{:code :wealth      :name "Summary"     :subs nil   :load-events home-events   :mounting-modal true  :icon-mui Savings    :icon-mdi mdiPiggyBank       :index 1}
     {:code :positions   :name "Positions"   :subs nil   :load-events home-events   :mounting-modal true  :icon-mui ShowChart  :icon-mdi mdiFinance         :index 2}
     {:code :vault       :name "Vault"       :subs nil   :load-events home-events   :mounting-modal true  :icon-mui Fort       :icon-mdi mdiGold            :index 3}
     {:code :cellar      :name "Cellar"      :subs nil   :load-events home-events   :mounting-modal true  :icon-mui WineBar    :icon-mdi mdiBottleWine      :index 4}
     {:code :tools       :name "Tools"       :subs nil   :load-events home-events   :mounting-modal true  :icon-mui Build      :icon-mdi mdiTools           :index 5}
     ]))

(rf/reg-event-fx
  :change-active-section
  (fn [{:keys [db]} [_ index]]
    (let [main-navigation-grp (group-by :index main-navigation)]
      {:db (assoc db :navigation/active-section (if (= 0 index) :entry (:code (first (main-navigation-grp index)))))})))
;----------------------------------------------SIMPLE RESPONSIVE NAVIGATION---------------------------------------------
;(defnc navigation-simple []
;(let [[selectedIndex setSelectedIndex] (use-state 2)
;      handleListItemClick (fn [event index] (setSelectedIndex index))
;      x (use-effect [selectedIndex] (rf/dispatch [:change-active-section selectedIndex]))]
;  ($ Box {:sx #js {:display "flex"} }
;     ($ CssBaseline
;        ($ AppBar {:position "fixed" :sx #js {:height appbar-height :width "100%" :zIndex 200 :backgroundColor "#2bcff0" :borderBottom #js {"min-height" "50px"}}}
;           ($ Toolbar {:sx #js {:backgroundColor "#353535" "&.MuiToolbar-root" #js {"min-height" "51px"}}} ;toolbar height is 64px default => @media muitoolbar etc
;              ;($ IconButton {:size "large" :edge "start" :color "inherit" :aria-label "menu" :sx #js {:mr 0}} ($ MenuIcon))
;              ($ Typography {:variant "h5" :noWrap true :component "div" :sx #js {:flexGrow 1 :pl 4 }} "AppName") ;just a text, flexGrow to make sure the following button is at the right end of the element
;              ($ Button {:color "inherit" :size "large" :onClick #(rf/dispatch [:navigation/active-section :entry])} "AppLogo")))
;        ($ Drawer {:variant "permanent" :anchor "left"
;                   :sx #js {:position "absolute" :zIndex 1 "& .MuiDrawer-paper" #js {:paddingTop appbar-height :width drawer-width :boxSizing "border-box" :backgroundColor "#353535" :color "white"}}}
;           ($ List
;              (for [item main-navigation]
;                ($ ListItem {:key (:code item) :disablePadding true :onClick #(handleListItemClick % (:index item))}
;                   ($ ListItemButton {:selected (= selectedIndex (:index item))
;                                      ;https://stackoverflow.com/questions/71984986/how-can-i-override-styling-for-listitembutton-when-its-selected
;                                      ;https://stackoverflow.com/questions/61486061/how-to-set-selected-and-hover-color-of-listitem-in-material-ui
;                                      :sx       #js {"&:hover"        #js {:backgroundColor "#8cecff"} ;PRIMARY 400
;                                                     "&.Mui-selected" #js {:backgroundColor "#2bcff0"}
;                                                     "&.Mui-selected:hover" #js {:backgroundColor "#2bcff0"}
;                                                     "&& .MuiTouchRipple-child" #js {:backgroundColor "black"}  ;animation when clicked
;                                                     "&& .MuiTouchRipple-rippleVisible" #js {:opacity 0.5 :animation-duration "600ms"}  ;animation when clicked
;                                                     }}
;                      ($ ListItemIcon ($ (:icon item) {:sx #js {:color "white"}}))
;                      ($ ListItemText {:primary (:name item)})
;                      )
;                   )))
;           ;($ Divider {:textAlign "left" :light true :sx #js {:backgroundColor "#353535" :color "white"  :fontSize 10 "&.MuiDivider-root" #js {"&::before, &::after" #js {:borderColor  "#2bcff0"}}}} "Cat2")
;           )))))
;-----------------------------------------PERSISTENT RESPONSIVE NAVIGATION----------------------------------------------
;https://github.com/dakra/mui-templates/blob/master/src/mui_templates/dashboard.cljss

(def color-logitech "#2bcff0")
(def color-dark-100 "#000000")
(def color-dark-200 "#1e1e1e")
(def color-dark-300 "#3f3f3f")

(def drawer-width 165)                                      ;same as (def drawer-width "165px")
(def appbar-height 53)

(defnc navigation []
  (let [theme (useTheme)

        [open setOpen] (use-state false)
        handleDrawerOpen (fn [] (setOpen true))
        handleDrawerClose (fn [] (setOpen false))

        [selectedIndex setSelectedIndex] (use-state 0)
        handleListItemClick (fn [event index] (setSelectedIndex index))
        x (use-effect [selectedIndex] (rf/dispatch [:change-active-section selectedIndex]))

        backToEntry (fn [] (do (handleDrawerClose) (setSelectedIndex 0)))
        ]
    ($ Box {:sx #js {:display "flex"}}
       ($ CssBaseline
          ($ AppBar {:position "fixed"
                     :sx #js {:height appbar-height :backgroundColor color-logitech :width "100%" ;(if open (str "calc(100% - " drawer-width ")") "100%")
                              :zIndex (+ (.. theme -zIndex -drawer) 1)  ;(if open 0 (+ (.. theme -zIndex -drawer) 1))
                              :transition (.. theme -transitions (create #js ["width" "margin"]
                                                                         #js {:easing (.. theme -transitions -easing -sharp)
                                                                              :duration (if open (.. theme -transitions -duration -leavingScreen) (.. theme -transitions -duration -enteringScreen))}))}}
             ($ Toolbar {:sx #js {:backgroundColor color-dark-200 "&.MuiToolbar-root" #js {:minHeight (- appbar-height 2) :padding 0}}} ;there is a default padding right/left at 24px
                ($ Button {:color "inherit" :size "large" :sx #js {:width drawer-width :fontSize "20px" :textTransform "none"} :onClick (if open handleDrawerClose handleDrawerOpen)} "Kdlytics") ;:textTransform to avoid conversion to upper case
                ($ Button {:color "inherit" :size "large" :sx #js {:width drawer-width :marginLeft (str "calc(100% - " (* 2 drawer-width) "px)")} :onClick #(backToEntry)} "Logo")
                ;Alternatives:
                ;($ IconButton {:color "inherit" :aria-label "open drawer" :edge "start" :size "large" :onClick handleDrawerOpen} ($ MenuIcon))
                ;($ Typography {:variant "h6" :noWrap true :component "div" } "Kdlytics")
                ;(if open ($ IconButton {:onClick handleDrawerClose } ($ ChevronLeftIcon)) ($ IconButton {:onClick handleDrawerOpen } ($ ChevronRightIcon)))
                ))

          ($ Drawer {:variant "persistent" :anchor "left" :open open ;for variant with icon display :open true
                     :sx #js {"& .MuiDrawer-paper" #js {:paddingTop (str appbar-height "px") :width drawer-width :boxSizing "border-box" :backgroundColor color-dark-200 :color "white"}}} ;for variant with icon display (if open drawer-width "50px")
             ($ List  {:sx #js {:paddingBottom 0 :paddingTop 0}} ;there is a default padding top/bottom at 8px => :p 0 works as well
                (for [item main-navigation]
                  ($ ListItem {:key (:code item) :disablePadding true :onClick #(handleListItemClick % (:index item))} ;:justifyContent "flex-start"
                     ($ ListItemButton {:selected (= selectedIndex (:index item))
                                        ;https://stackoverflow.com/questions/71984986/how-can-i-override-styling-for-listitembutton-when-its-selected
                                        ;https://stackoverflow.com/questions/61486061/how-to-set-selected-and-hover-color-of-listitem-in-material-ui
                                        :sx       #js {"&:hover"        #js {:backgroundColor color-dark-300}
                                                       "&.Mui-selected" #js {:backgroundColor color-logitech}
                                                       "&.Mui-selected:hover" #js {:backgroundColor color-logitech}
                                                       "&& .MuiTouchRipple-child" #js {:backgroundColor "black"}                         ;animation when clicked
                                                       "&& .MuiTouchRipple-rippleVisible" #js {:opacity 0.5 :animationDuration "600ms"} ;animation when clicked
                                                       }}
                        ;($ ListItemIcon ($ (:icon-mui item) {:sx #js {:color "white"}}))
                        ($ ListItemIcon ($ Icon  {:path (:icon-mdi item) :size 1 :color "white"})) ;:sx #js {"& .MuiListItemIcon-root"  #js {:minWidth "max-content"}} per default the ListItemIcon comes with spaces hence why we set up .MuiListItemIcon-root, we need ml 2 below
                        ($ ListItemText {:primary (:name item) :sx #js {:ml -2}}) ;margin-left to position text vs icon
                        )
                     )))
             )
          ))
    ))

;----------------------------------------------------INPUT/DISPLAY COMPONENTS-------------------------------------------
(defnc slider-simple
  [{:keys [width on-change]}]
  ($ Slider {:defaultValue 50 :marks false :step 10 :aria-label "Small steps" :size "normal" :valueLabelDisplay "on"
             :sx #js {"color" color-logitech
                      "width" width}
             :onChange on-change
             }))

(defnc text-simple
  "variant is one of h1, h2, ... , h6, subtitle1, subtitle2, body1, body2, button, caption, overline"
  [{:keys [variant text color]}]
  ($ Typography {:variant variant :color color} text)
  )

(defnc title-screen [{:keys [text]}] ($ Typography {:class "titlescreen"} text))

(defnc button-simple
  "variant is one of text, contained, outlined"
  [{:keys [variant text on-click]}]
  ($ Button {:variant variant :onClick on-click
             :sx #js {"color" "white"
                      "&.MuiButton-contained" #js {:backgroundColor color-logitech}
                      "&.MuiButton-contained:hover" #js {:color "black"}
                      "&.MuiButton-outlined" #js {:borderColor "white"}
                      "&.MuiButton-outlined:hover" #js {:borderColor color-logitech :color color-logitech}}
             } text)
  )

(defnc radio-button
  [{:keys [text]}]
  ($ Radio {} text)
  )

(defnc radio-group-button
  [{:keys [title list on-change]}]
  ($ FormControl
     ($ FormLabel {:id "demo-radio-buttons-group-label" :sx #js {:color "white" "&.Mui-focused" #js {:color color-logitech}}} title)
     ($ RadioGroup {:row true  :aria-labelledby "demo-row-radio-buttons-group-label" :name "row-radio-buttons-group" :onChange on-change }
        (for [item list] ($ FormControlLabel {:value (:value item) :label (:label item)
                                              :sx #js {"color" "white"}
                                              :control ($ Radio ;radio buttons are SVG!... => https://stackoverflow.com/questions/60493740/how-to-change-border-color-of-radio-button-in-material-ui
                                                          {:sx #js {"& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)" #js {:fill "white"}
                                                                    "& .MuiSvgIcon-root + .MuiSvgIcon-root" #js {:fill color-logitech}
                                                                    }})})))))

(defnc select-input-simple
  [{:keys [label-text value choices on-change]}]
  ($ FormControl {:key "unique" :variant "outlined" :fullWidth false ;:size "small"
                  :sx #js {"m" 0 "minWidth" 150
                           "& .MuiOutlinedInput-notchedOutline" #js {:border (str "1.5px solid" color-logitech)}
                           "&& .Mui-focused .MuiOutlinedInput-notchedOutline" #js {:border "2px solid purple"}
                           "&& :hover .MuiOutlinedInput-notchedOutline" #js {:border "1.5px solid purple"}
                           "& .MuiSvgIcon-root" #js {:fill color-logitech}
                           }}
     ($ InputLabel {:id "demo-simple-select-label" :sx #js {"fontSize" 16 "fontWeight" "Bold"
                                                            "color" "white"
                                                            "&.Mui-focused " #js {:color color-logitech}}} label-text)
     ($ Select {:id "demo-simple-small" :labelId "demo-simple-select-label" :className (:text-field classes)
                :label (str label-text "1")                    ;help the size of label text
                :defaultValue (:id (first choices))            ;defaulted value
                ;:value value                                  ;selected value?
                :onChange on-change
                :sx #js {"& .MuiSelect-select" #js {:color "red"}}
                :children (for [c choices] ($ MenuItem {:key (:id c) ; we need a unique key to avoid warning in console
                                                        :value (:id c)
                                                        :sx #js {:color "white"}}
                                              (:label c)
                                              ))
                :MenuProps  #js {:PaperProps #js {:sx #js {:maxHeight 300 :background-color color-dark-200 :border (str "1.5px solid" color-logitech)
                                                           "& .Mui-selected" #js {:color color-logitech}
                                                           }}}
                })))

(defnc select-input-search
  [{:keys [label-text choices on-change]}]
  ($ Autocomplete
     {:id "combo-box-demo"
      :options (clj->js (into [] (for [c choices] {:label (:label c) })))
      :sx #js { "width" 200 "height" 50 "fontSize" 30
               ;LABEL
               "& .MuiFormLabel-root" #js {"fontSize" "1.25rem" "fontWeight" "Bold" "color" "white"}
               "& label.Mui-focused" #js {:color color-logitech}
               ;MENU
               "& .MuiOutlinedInput-root" #js {:color "red"}
               ;https://stackoverflow.com/questions/71942822/materialui-v5-how-to-style-autocomplete-options
               ;BOX
               "& .MuiOutlinedInput-notchedOutline" #js {:border (str "1.5px solid" color-logitech)}
               "&& .Mui-focused .MuiOutlinedInput-notchedOutline" #js {:border "2px solid purple"}
               "&& :hover .MuiOutlinedInput-notchedOutline" #js {:border "1.5px solid purple"}
               ;ICON
               "& .MuiSvgIcon-root" #js {:fill color-logitech}}
      ;:PaperComponent #js {:Paper #js {:sx #js {:color "green"}}}
      :ListboxProps #js {:sx #js {:color "white"
                                  :background-color color-dark-200 :border (str "1.5px solid" color-logitech)
                                  ;https://mui.com/material-ui/api/autocomplete/#css
                                  ;" &.MuiAutocomplete-paper " #js {:background-color "#2bcff0"}
                                  ;"& .MuiAutocomplete-input[aria-selected='true']" #js {:color "#2bcff0"}
                                  }}

      :defaultValue (:label (first choices))
      :renderInput (fn [^js params]
                     (set! (.-variant params) "outlined")
                     (set! (.-label params) label-text)
                     ;(set! (.-size params) "30px")
                     (js/console.log (clj->js params))
                     (r/create-element mm/TextField params)
                     )
      :onChange on-change}))

;(defnc select-input-grouping
;  [{:keys [label-text choices on-change]}]
;  ($ FormControl {:key "unique" :fullWidth false :size "small" :sx #js {"m" 0 "minWidth" 150}} ; :key is needed as a unique key?
;     ($ InputLabel {:htmlFor "grouped-select" :sx #js {"fontSize" 16 "fontWeight" "Bold" :color "white" "&.Mui-focused" #js {:color logi-blue}} } label-text) ;Portfolio is the label text
;     ($ Select {:id "grouped-select" :className (:text-field classes)
;                :label (str label-text "1")
;                :defaultValue (first (:portfolios (first choices)))
;                ;:value value                                      ;selected value?
;                :onChange on-change
;                :children (into [] (concat (for [g choices]
;                                             [($ ListSubheader (:label g))
;                                              (for [p (:portfolios g)] ($ MenuItem {:value p :key p} p))])))
;                :MenuProps  #js {:PaperProps #js {:sx #js {:maxHeight 300 }}}
;                }))
;  )

;(defnc date-picker
;  "This is the typical switch at the top right of a box to display or hide it"
;  [{:keys [title default-start-date on-change]}]
;  [
;   ($ LocalizationProvider {:dateAdapter AdapterDayjs :adapterLocale "en-gb"}
;      ($ DatePicker {:label title
;                     :sx #js { "width" 200 "height" 50  "& .MuiFormLabel-root" #js {"fontSize" "1.25rem" "fontWeight" "Bold"}}
;                     ;:inputFormat "d/MM/yyyy"
;                     :defaultValue (dayjs default-start-date)
;                     :onChange on-change
;                     })
;      )
;   ])

(defnc switch
  "This is the typical switch at the top right of a box to display or hide it"
  [{:keys [checked-atom default-checked]}]
  (let [[checked setChecked] (use-state default-checked)
        x (use-effect [checked] (reset! checked-atom checked))]
    ($ Switch {:size "small" :checked checked :onChange (fn [e] (setChecked (aget e "target" "checked")))})))

(defnc card-simple
  [{:keys [title value]}]
  ($ Card {:sx #js { :minWidth 170 :maxHeight 95 :borderRadius "15px" :backgroundColor color-dark-300}}
     ($ CardContent
        ($ Box {:sx #js { :width 160 :height 42 :backgroundColor color-dark-300}}
           ($ Typography {:variant "h5" :color "white"} title))
        ;($ Typography {:variant "p" :color "grey"} "bla bla")
        ($ Typography {:variant "h6" :color "white"} value)
        )
     ))


(defnc modal-button-simple
  [{:keys [title text]}]
  (let [[is-open, setOpen] (use-state false)
        handleOpen (fn [] (setOpen true))
        handleClose (fn [] (setOpen false))]
    [   ($ Button {:onClick handleOpen} "Open modal")
     ($ Modal {:open is-open :onClose handleClose
               :aria-labelledby "modal-modal-title"
               :aria-describedby "modal-modal-description"}
        ($ Box {:sx #js {:position "absolute" :top "50%" :left "50%" :transform "translate(-50%, -50%)"
                         :bgcolor "background.paper"
                         :border "2px solid #0000"
                         :width 400 :boxShadow 24 :p 4 }}
           ($ Typography {:variant "h6"} title)
           ($ Typography {:variant "h6"} text)
           )
        )]
    )
  )
;-------------------------------------------------GRID COMPONENTS-------------------------------------------------------
(defnc mui-body-box [{:keys [class gap children]}]
  ($ Box
     {:class class}
     ($ Grid {:container true :direction "column" :spacing (or gap "0px")
              :justifyContent "flexStart" :alignItems "start"} ;flexStart for reactive expandable content of the body
        (mapv #($ Grid {:item true} %) children))))

(defnc my-grid [{:keys [class direction gap align width children]}]
  ($ Box
     {:class (or class "my-grid")} ;:sx #js {"& .MuiGrid-root" #js {:width width}}
     ($ Grid {:container true :direction direction :spacing (or gap "0px")
              :justifyContent "flexStart" :alignItems (or align "start")}
        (mapv #($ Grid {:item true} %) children))))

(defn right-element-box-generic
  [id width title children ]
  (d/div {:id id}
         ($ my-grid {:class "right-element" :direction "column" :gap "20px" :align "start" :width width :children [($ text-simple {:variant "h4" :text title :color "white"}) children]})))

;NOT MY STUFF

(defnc mui-grid-component [{:keys [direction class align pt pb pl pr gap children width height justify]}]
  (let [m (merge {:border "1px dashed red" :pt pt :pb pb :pl pl :pr pr}
                 (if width {:width (int (.replace ^js/String width "px" ""))})
                 (if height {:height (int (.replace ^js/String height "px" ""))})
                 (if class {:class class})
                 )]
    ($ Box
       {& m}                                                ;careful syntax for props
       ($ Grid {:container      true :direction direction   :spacing (or gap "0px") ;:gap would also work
                :justifyContent (or justify "flexStart") :alignItems (or align "center")} ;:display "flex"
          (mapv #($ Grid {:item true} %) children)))))


(defnc mui-hbox-component [m] ($ mui-grid-component {& (assoc m :direction "row")}))
(defnc mui-vbox-component [m] ($ mui-grid-component {& (assoc m :direction "column")}))

(defn mui-hbox
  ;We are using the same signature as re-com h-box
  [& {:keys [size width height min-width min-height max-width max-height justify align align-self margin padding gap children class style attr]
      :or   {size "none" justify :start align :stretch}
      :as   args}]
  (let [padding-array (if padding (js/split. padding " ") ["0px"])
        pt (nth padding-array 0)
        pb pt
        pl (if (= (count padding-array) 1) (nth padding-array 0) (nth padding-array 1))
        pr pl]
    ($ mui-hbox-component {:class class :width width :height height :align align :justify justify :pt pt :pb pb :pl pl :pr pr :gap gap :children children})))

(defn mui-vbox
  [& {:keys [size width height min-width min-height max-width max-height justify align align-self margin padding gap children class style attr]
      :or   {size "none" justify :start align :stretch}
      :as   args}]
  (let [padding-array (if padding (js/split. padding " ") ["0px"])
        pt (aget padding-array 0)
        pb pt
        pl (if (= (count padding-array) 1) (aget padding-array 1) (aget padding-array 0))
        pr pl]
    ($ mui-vbox-component {:class class :width width :height height :align align :pt pt :pb pb :pl pl :pr pr :gap gap :children children})))






