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
                                            MenuItem Item FormControl Slider Autocomplete TextField  RadioGroup Radio FormLabel FormControl FormControlLabel Switch
                                            ListSubheader Unstable_Grid2 Grid Card CardActions CardContent
                                            )]
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

    ;["@mui/x-date-pickers" :refer ( DatePicker LocalizationProvider)]
    ;["@mui/x-date-pickers/AdapterDayjs" :refer ( AdapterDayjs )]
    ;["dayjs" :as dayjs]
    ;["dayjs/locale/en-gb"]

    ))
;--------------------------------------------------------USEFUL----------------------------------------------------------
;https://github.com/reagent-project/reagent/blob/e70c52531341bba83636e88eb7b60ff5796195b1/examples/material-ui/src/example/core.cljs#L78-L93
;https://github.com/dakra/mui-templates/blob/master/src/mui_templates/views/components.cljs#L55-L58

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
        ($ AppBar {:position "fixed" :sx #js {:height top-bar-height :width "100%" :zIndex 200 :backgroundColor "#2bcff0" :borderBottom #js {"min-height" "50px"}
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
  "Here we already get the value by taking the second argument %2 of the Autocomplete on-change event "
  "https://stackoverflow.com/questions/70426718/getting-syntheticbaseevent-object-instead-of-the-simple-event-when-using-react"
  "(fn [_ choice] (println (:label (js->clj [_ e] {:keywordize-keys true})) ))"

  (:label (js->clj v {:keywordize-keys true}))
  )

;(def custom-theme
;  {:palette {:primary   colors/purple
;             :secondary colors/green}})

;(defmacro react-component
;  "Helper for creating anonymous React components with Reagent"
;  "From arttuka/reagent-material-ui \"5.11.12-0\""
;  {:arglists '([[props] & body])}
;  [bindings & body]
;  (assert (vector? bindings) "react-component requires a vector for its bindings")
;  (let [argsyms (repeatedly (count bindings) #(gensym "arg"))]
;    `(fn [~@argsyms]
;       (let [~@(interleave bindings (for [sym argsyms]
;                                      (list 'reagent-mui.util/js->clj' sym)))]
;         (reagent.core/as-element (do ~@body))))))

;----------------------------------------------------INPUT/DISPLAY COMPONENTS-------------------------------------------
(defnc slider-simple
  [{:keys [width on-change]}]
  ($ Slider {:defaultValue 50 :marks true :step 10 :aria-label "Small steps" :size "normal" :valueLabelDisplay "on" :sx #js {"width" width}
             :onChange on-change
             })
  )

(defnc text-simple
  "variant is one of h1, h2, ... , h6, subtitle1, subtitle2, body1, body2, button, caption, overline"
  [{:keys [variant text]}]
  ($ Typography {:variant variant } text)
  )

(defnc button-simple
  "variant is one of text, contained, outlined"
  [{:keys [variant text on-click]}]
  ($ Button {:variant variant :onClick on-click } text)   ;:endIcon [($ SendIcon)]
  )

(defnc radio-button
  [{:keys [text]}]
  ($ Radio {} text)
  )

(defnc radio-group-button
  [{:keys [title list on-change]}]
  ($ FormControl
     ($ FormLabel {:id "demo-radio-buttons-group-label"} title)
     ($ RadioGroup {:row true :aria-labelledby "demo-row-radio-buttons-group-label" :name "row-radio-buttons-group" :onChange on-change}
        (for [item list] ($ FormControlLabel {:value (:value item) :label (:label item) :control ($ Radio)}))))
  )

(defnc select-input-simple
  [{:keys [label-text value choices on-change]}]
  ($ FormControl {:key "unique" :fullWidth false :size "small" :sx #js {"m" 0 "minWidth" 150}} ;small is a bit too small for the label display but match re-com size.. :key is needed as a unique key
     ($ InputLabel {:id "demo-simple-select-label" :sx #js {"fontSize" 16 "fontWeight" "Bold"} } label-text) ;Portfolio is the label text
     ($ Select {:id "demo-simple-small" :labelId "demo-simple-select-label" :className (:text-field classes)
                :label (str label-text "1")                    ;help the size of label text
                :defaultValue (:id (first choices))            ;defaulted value
                ;:value value                                  ;selected value?
                :onChange on-change
                :children (for [c choices] ($ MenuItem {:value (:id c) :key (:id c)} (:label c))) ; we need a unique key to avoid warning in console
                :MenuProps  #js {:PaperProps #js {:sx #js {:maxHeight 300 }}}
                }))
  )

(defnc select-input-grouping
  [{:keys [label-text choices on-change]}]
  ($ FormControl {:key "unique" :fullWidth false :size "small" :sx #js {"m" 0 "minWidth" 150 }} ; :key is needed as a unique key?
     ($ InputLabel {:htmlFor "grouped-select" :sx #js {"fontSize" 16 "fontWeight" "Bold"} } label-text) ;Portfolio is the label text
     ($ Select {:id "grouped-select" :className (:text-field classes)
                :label (str label-text "1")                         ;help the size of label text
                :defaultValue (first (:portfolios (first choices))) ;defaulted value
                ;:value value                                      ;selected value?
                :onChange on-change
                :children (into [] (concat (for [g choices]
                                             [($ ListSubheader (:label g))
                                              (for [p (:portfolios g)] ($ MenuItem {:value p :key p} p))])))
                :MenuProps  #js {:PaperProps #js {:sx #js {:maxHeight 300 }}}
                }))
  )


(defnc select-input-search
  [{:keys [label-text choices on-change]}]
  ($ Autocomplete
     {:id "combo-box-demo"
      :options (clj->js (into [] (for [c choices] {:label (:label c) })))
      :sx #js { "width" 200 "height" 50 "fontSize" 30 "& .MuiFormLabel-root" #js {"fontSize" "1.25rem" "fontWeight" "Bold"}}
      :defaultValue (:label (first choices))
      :renderInput (fn [^js params]
                     (set! (.-variant params) "outlined")
                     (set! (.-label params) label-text)
                     ;(set! (.-size params) "30px")
                     (js/console.log (clj->js params))
                     (r/create-element mm/TextField params)
                     )
      :onChange on-change
      }
     )
  )

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
  [{:keys [title text]}]
  ($ Card {:sx #js { :minWidth 190 :maxHeight 120}}
     ($ CardContent
        ($ Typography {:variant "h3"} title)
        ($ Typography {:variant "h5"} text)


        )

     ))

;-------------------------------------------------GRID COMPONENTS-------------------------------------------------------
;MAKE MY OWN


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

;(defnc mui-hbox-component [{:keys [align pt pb pl pr gap children width height justify]}]
;  (let [m (merge {:border "1px dashed red" :pt pt :pb pb :pl pl :pr pr }
;                 (if width {:width (int (.replace ^js/String width "px" ""))})
;                 (if height {:height (int (.replace ^js/String height "px" ""))}))]
;    ($ Box
;       {& m}                                                ;careful syntax for props
;       ($ Grid {:container      true :direction "row"   :spacing (or gap "0px") ;:gap would also work
;                :justifyContent (or justify "flexStart") :alignItems (or align "center")} ;:display "flex"
;          (mapv #($ Grid {:item true} %) children)))))


;(defnc mui-vbox-component [{:keys [align pt pb pl pr gap children width height justify]}]
;  (let [m (merge {:border "1px dashed red" :pt pt :pb pb :pl pl :pr pr }
;                 (if width {:width (int (.replace ^js/String width "px" ""))})
;                 (if height {:height (int (.replace ^js/String height "px" ""))}))]
;    ($ Box
;       {& m}                                                ;careful syntax for props
;       ($ Grid {:container      true :direction "column" :spacing (or gap "0px")
;                :justifyContent (or justify "flexStart") :alignItems (or align "center")} ;:display "flex"
;          (mapv #($ Grid {:item true} %) children)))))

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
  ;We are using the same signature as re-com v-box
  [& {:keys [size width height min-width min-height max-width max-height justify align align-self margin padding gap children class style attr]
      :or   {size "none" justify :start align :stretch}
      :as   args}]
  (let [padding-array (if padding (js/split. padding " ") ["0px"])
        pt (aget padding-array 0)
        pb pt
        pl (if (= (count padding-array) 1) (aget padding-array 1) (aget padding-array 0))
        pr pl]
    ($ mui-vbox-component {:class class :width width :height height :align align :pt pt :pb pb :pl pl :pr pr :gap gap :children children})))


(defn mrt-right-element-box-generic
  "This is the box we'll use most of the time, in particular when there's a NAV bar at the left and only one box at the right."
  [id width title-str opts children]
  (let [show-element (r/atom true)]
    (fn [id width title-str opts children]                  ;see https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md need to repeat the arguments!
      (d/div {:id id}
             (mui-vbox :class "rightelement" :gap "20px" :width width
                       :children (concat [(mui-hbox :align :center :children (into [($ text-simple {:variant "head1" :text title-str})

                                                                                    ]
                                                                                   (if (:show-hide opts) [($ switch {:checked-atom show-element :default-checked (not (:hide-by-default opts))})])))]
                                         (if @show-element children)))))))



