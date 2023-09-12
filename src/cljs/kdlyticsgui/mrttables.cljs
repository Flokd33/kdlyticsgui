(ns kdlyticsgui.mrttables
  (:require [goog.object :as gobj]
            [reagent.core :as r]
            [goog.string :as gstring]
            [goog.string.format]
            [re-com.core :refer [p]]
            [re-frame.core :as rf]
            [kdlyticsgui.tools :as t]
            [helix.core :refer [defnc $]]
            [helix.dom :as hd]
            [reagent-contextmenu.menu :as rcm]
            [cljs-time.core :refer [today]]
            [helix.hooks :refer [use-state use-effect use-memo]]
            ["material-react-table" :as rt :default MaterialReactTable :refer ( MRT_ShowHideColumnsButton MRT_ToggleDensePaddingButton MRT_FullScreenToggleButton )] ;<MRT_FullScreenToggleButton table={table} />
            ["@mui/material" :as mm :refer ( Button IconButton Tooltip Box Divider createTheme ThemeProvider useTheme)]
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
            ["react" :as react :refer (useMemo useState)]
            [clojure.set]
            )
  (:import (goog.i18n NumberFormat)
           (goog.i18n.NumberFormat Format))
  )

;---------------------------------------------------ON CLICK EVENTS-----------------------------------------------------

;(defn on-click-position-summary [ticker]
;  (fn [e]
;    (rcm/context!
;      e
;      (concat
;        [NAME
;         ["Copy ISIN" (fn [] (tools/copy-to-clipboard isin))]]
;        (case which
;          :single [["Trade history" (fn [] (rf/dispatch [:get-single-bond-trade-history NAME id [@(rf/subscribe [:single-portfolio-risk/portfolio])] "01Jan2019" @(rf/subscribe [:qt-date])]))]]
;          :multiple [["Trade history" (fn [] (multiple-bond-trade-history-event "nominal" NAME id))]
;                     ["Trade history (% NAV)" (fn [] (multiple-bond-trade-history-event "nav" NAME id))]])
;        [["Trade analyser" (fn [] (rf/dispatch [:quant-screen-to-ta2022 isin]))]
;         ["Ticker scorecard news" (fn [] (rf/dispatch [:get-ticker-scorecard-news (mrt/get-js-row-key row "TICKER")]))]
;         ])))
;  )
;---------------------------------------------------CONDITIONAL FORMATTING----------------------------------------------
(defn cell-value [c] (.getValue (.-cell c)))
(defn get-js-row-key [row key] (gobj/getValueByKeys row "row" "original" key))

(defn red-negatives
  "right align, with red text if negative"
  [cell]
  (if (and (some? cell) (neg? (cell-value cell)))
    #js {"align" "right" "sx" #js {"color" "red"
                                   "borderRight" "1px solid rgba(113,113,113,0.5)"
                                   "borderBottom" "1px solid rgba(113,113,113,0.5)"
                                   }}
    #js {"align" "right" "sx" #js {"color" "white"
                                   "borderRight" "1px solid rgba(113,113,113,0.5)"
                                   "borderBottom" "1px solid rgba(113,113,113,0.5)"}}))

(defn allocation-delta-formatting [this]
  (if-let [x (get-js-row-key this "alloc-strat-delta")]
    (condp > x
      -500   #js {:sx #js {"color" "white"
                           "backgroundColor" "#f08080"
                           "borderRight" "1px solid rgba(113,113,113,0.5)"
                           "borderBottom" "1px solid rgba(113,113,113,0.5)"}}
      500    #js{:sx #js {"color" "white"
                          "backgroundColor" "#4e4e4e"
                          "borderRight" "1px solid rgba(113,113,113,0.5)"
                          "borderBottom" "1px solid rgba(113,113,113,0.5)"
                          }}
      ;(if (odd? (.-index (.-row this)))
      ;         #js {:sx #js {"cursor" "pointer" "backgroundColor" "#F5F5F5"}}
      ;         #js {:sx #js {"cursor" "pointer"}})
      #js {:sx #js {"color" "white" "backgroundColor" "#9CD7AB"
                    "borderRight" "1px solid rgba(113,113,113,0.5)"
                    "borderBottom" "1px solid rgba(113,113,113,0.5)"}})
    #js{}))

(defn positions-full-row-formatting [this]
  "Include name formatting and on click event"
  ;(println (get-js-row-key this "ticker"))
  (case (get-js-row-key this "shortName")
    "CASH" #js {"sx" #js {"cursor" "pointer" "backgroundColor" "#696969" } ;DARK 500
                "onClick" #(do (rf/dispatch [:get-price-history (get-js-row-key this "ticker") (get-js-row-key this "shortName")]))
                }
    #js {"sx" #js {
                   ;{"& .MuiTableRow-root:hover" #js {"backgroundColor" "#c21717"}}
                   "cursor" "pointer"
                   "backgroundColor" "#4e4e4e"} ;DARK 400
         "onClick" #(do (rf/dispatch [:get-price-history (get-js-row-key this "ticker") (get-js-row-key this "shortName")]))}

    ;(if (odd? (.-index (.-row this)))
    ;   #js {:sx #js {"cursor" "pointer" "backgroundColor" "#F5F5F5"}}
    ;   #js {:sx #js {"cursor" "pointer"}})
    ))

(defn cellar-row-formatting [this]
  "Include name formatting and on click event"
  ;(println (get-js-row-key this "ticker"))
  (case (get-js-row-key this "type")
    "red" #js {"sx" #js {"cursor" "pointer" "backgroundColor" "#b42421"}} ;9C2421
    "white" #js {"sx" #js {"cursor" "pointer" "backgroundColor" "#f1f285"}}
    "sweet" #js {"sx" #js {"cursor" "pointer" "backgroundColor" "#eccd13"}}
    "champagne" #js {"sx" #js {"cursor" "pointer" "backgroundColor" "#F7E7CE"}}
    #js {"sx" #js {"cursor" "pointer"}}

    ;(if (odd? (.-index (.-row this)))
    ;   #js {:sx #js {"cursor" "pointer" "backgroundColor" "#F5F5F5"}}
    ;   #js {:sx #js {"cursor" "pointer"}})
    ))

(defn breach-status-color-nb
  "if status = 0 green background, if status = 1 orange (warning) background,if status = 2 (breach) red background,"
  [cell]
  (case (cell-value cell) 0 #js {:sx #js {:color "Chartreuse" :backgroundColor "Chartreuse" :textAlign "center"}} 1 #js {:sx #js {:color "DarkOrange" :backgroundColor "DarkOrange" :textAlign "center"}} 2 #js {:sx #js {:color "Crimson" :backgroundColor "Crimson" :textAlign "center"}} #js {}))

(defn breach-status-color-txt
  [cell]
  (case (cell-value cell) "Y" #js {:sx #js {:color "Chartreuse" :backgroundColor "Chartreuse" :textAlign "center"}} "N" #js {:sx #js {:color "Crimson" :backgroundColor "Crimson" :textAlign "center"}} #js {}))

(defn breach-status-color-boolean
  [cell]
  (case (cell-value cell) true #js {:sx #js {:color "Chartreuse" :backgroundColor "Chartreuse" :textAlign "center"}} false #js {:sx #js {:color "Crimson" :backgroundColor "Crimson" :textAlign "center"}}  #js {}))

(defn breach-status-color-scale
  [cell]
  (condp > (cell-value cell)
    1   #js {:sx #js {:color "Chartreuse" :backgroundColor "Chartreuse" :textAlign "center"}}
    10  #js {:sx #js {:color "DarkOrange" :backgroundColor "DarkOrange" :textAlign "center"}}
    999 #js {:sx #js {:color "Crimson" :backgroundColor "Crimson" :textAlign "center"}}
    #js {:sx #js {:color "darkmagenta" :backgroundColor "darkmagenta" :textAlign "center"}}))

;------------------------------------------------------MEDIANS----------------------------------------------------------

(defn median [coll]
  (let [sorted (sort (remove nil? coll))     ;(remove zero? (remove nil? coll))
        cnt (count sorted)
        halfway (quot cnt 2)]
    (cond
      (zero? cnt) nil
      (odd? cnt) (nth sorted halfway)
      :else (let [bottom (dec halfway) bottom-val (nth sorted bottom) top-val (nth sorted halfway)] (* 0.5 (+ bottom-val top-val))))))

(defn mrt-median [columnId leafRows childRows]
  (median (map #(.getValue % columnId) leafRows)))

;---------------------------------------------------CELL FORMATTING-----------------------------------------------------

(def nff (NumberFormat. Format/DECIMAL))

(defn nb-thousand-cell-format
  "This will write a single cell."
  [this]
  (let [x (cell-value this)]
    (if (js/isNaN x) "-" (.format nff (str (js/Math.round x))))))

(defn nb-cell-format
  "This will write a single cell.
  Note that [this] has access to the full row so conditional evaluation is possible (e.g. change col B based on values in col A)
  Here we take the input value if it's there, scale it (useful for percentages) and format it."
  [fmt m this]
  (let [x (cell-value this)]
    (if (js/isNaN x) "-" (gstring/format fmt (* m x)))))

(def round0 #(nb-cell-format "%.0f" 1. %))
(def round1 #(nb-cell-format "%.1f" 1. %))
(def round2 #(nb-cell-format "%.2f" 1. %))

(def round0pc #(nb-cell-format "%.0f%" 1. %))
(def round1pc #(nb-cell-format "%.1f%" 1. %))
(def round2pc #(nb-cell-format "%.2f%" 1. %))

(def round0pc100 #(nb-cell-format "%.0f%" 100. %))
(def round1pc100 #(nb-cell-format "%.1f%" 100. %))
(def round2pc100 #(nb-cell-format "%.2f%" 100. %))



;------------------------------------------------FILTERS----------------------------------------------------------------
(defn lower-case-s-in-value?
  "Checks if s (already assumed lower case) is in value. If s starts by -, excludes it"
  ;removed the = path which isn't a good path
  [^string s value]
  (if value                                                 ;checks for nil
    (case (.charAt s 0)
      ">" (> value (js/parseFloat (.substring s 1)))
      "<" (< value (js/parseFloat (.substring s 1)))
      "-" (not (.includes (.toLowerCase ^string value) (.substring s 1)))
      (if (js/isNaN value) (.includes (.toLowerCase ^string value) s) (= (js/parseFloat s) value)))))

(defn ampersand-truth [id line] (.every (.split ^js/String line "&") #(lower-case-s-in-value? % id)))
(defn text-filter-OR
  "OR through comma separation, AND through &"
  [row ^string id ^string filterValue]
  (.some (.split ^js/String (.replaceAll (.toLowerCase ^string filterValue) " " "") ",")
         #(ampersand-truth (.toLowerCase ^string (if-let [v (.getValue row id)] v "")) %)))

(defn comparator-read
  ([rowval ^string input mult]
   (case (.substring input 0 1)
     ">" (> rowval (* mult (js/parseFloat (.substring input 1))))
     "<" (< rowval (* mult (js/parseFloat (.substring input 1))))
     ;"=" (= rowval (* mult (cljs.reader/read-string (subs input 1))))
     (= rowval (* mult (js/parseFloat input)))))
  ([rowval ^string input] (comparator-read rowval input 1.)))


(defn ampersand-comp [compread line] (.every (.split ^js/String line "&") compread))
(defn nb-filter-OR-AND
  "filterfn is {id: column_name value: text_in_filter_box
  comma separation is OR. Within comma separation, & is AND."
  [row ^string id ^string filterValue]
  (let [compread #(comparator-read (.getValue row id) %)]
    (.some (.split (.toLowerCase ^string filterValue) ",")
           #(ampersand-comp compread %))))

;-----------------------------------------------COLUMNS TEMPLATES-------------------------------------------------------

(defn text-col
  "Simple text column in MRT"
  ([header accessor width]
   {:header                               header
    :accessorKey                          accessor
    :size                                 width
    :enablePinning                        false
    :muiTableHeadCellFilterTextFieldProps {:placeholder "" :sx {:minWidth "0px"}}
    :filterFn                             text-filter-OR
    :muiTableBodyRowProps                 #js {"sx" #js {"cursor" "pointer" "backgroundColor" "#8cecff"}} ;PRIMARY 400?
    :muiTableBodyCellProps                #js {"sx" #js {"color" "white"
                                                         "borderRight" "1px solid rgba(113,113,113,0.5)"
                                                         "borderBottom" "1px solid rgba(113,113,113,0.5)"
                                                         "backgroundColor" "inherit"}}})
  ([header accessor width cell]
   (assoc (text-col header accessor width) :Cell cell)))

(defn nb-col
  "Simple number column in MRT, by default aligned right with red negatives"
  ([header accessor width cell aggregate AggregatedCell]
   (assoc (nb-col header accessor width cell) :aggregationFn aggregate :AggregatedCell AggregatedCell))
  ([header accessor width cell aggregate]
   (assoc (nb-col header accessor width cell) :aggregationFn aggregate :AggregatedCell cell))
  ([header accessor width cell]
   {:header                               header
    :accessorKey                          accessor
    :size                                 width
    :muiTableBodyCellProps                red-negatives
    :Cell                                 cell
    :enablePinning                        false
    :muiTableHeadCellFilterTextFieldProps {:placeholder "" :sx {:minWidth "0px"}}
    :filterFn                             nb-filter-OR-AND}))

;(defn text-col-multiline
;  "Simple text column in MRT"
;  ([header accessor width]
;   {:header                               header
;    :accessorKey                          accessor
;    :size                                 width
;    :enablePinning                        false
;    :muiTableHeadCellFilterTextFieldProps {:placeholder "" :sx {:minWidth "0px"}}
;    :filterFn                             text-filter-OR
;    :muiTableBodyCellProps                #js {"sx" #js {"borderRight" "1px solid rgba(224,224,224,1)" "backgroundColor" "inherit" "wordWrap" "break-word" "whiteSpace" "pre-line"}}})
;  ([header accessor width cell]
;   (assoc (text-col-multiline header accessor width) :Cell cell)))


;---------------------------------------------TABLE IMPLEMENTATION------------------------------------------------------

(defnc icon-element-button-helix
  [{:keys [icon tooltip-text on-click-fn]}]
  ($ Tooltip {:arrow true :title tooltip-text :key tooltip-text}
     ($ IconButton {:onClick on-click-fn} ($ icon))))

(def photo-id->shortcut-key
  {"single-portfolio-risk-table" :single-portfolio-risk/shortcut
   "multiple-portfolio-risk-table" :multiple-portfolio-risk/shortcut
   "single-portfolio-trade-log-table" :single-portfolio-trade-log/shortcut
   "single-portfolio-attribution" :single-portfolio-attribution/shortcut})

(defn get-pivoted-data
  [table]
  (let [leaves (.filter (.getLeafRows (aget (.-rows (.getGroupedRowModel table)) 0))
                        (fn [line] (= (.-depth line) 1)))]
    (into [] (for [leaf leaves] (assoc (js->clj (.-_groupingValuesCache leaf)) "group" (.-groupingValue leaf))))))

(defn download-view
  "If the table is group, we get the pivoted data, otherwise we use the standard download function"
  [table download-fn photo-id]
  (if (pos? (count (.-grouping (.getState table))))
    (let [dw-cols (concat ["group"] (js->clj (.map (.filter (.getAllLeafColumns table) #(not (.getIsGrouped %))) #(.-id %))))]
      (t/csv-link (js->clj (get-pivoted-data table) {:keywordize-keys true}) photo-id dw-cols))
    (download-fn (.map (.-rows (.getPrePaginationRowModel table)) (fn [row] (.-original row))))))

(defnc single-risk-table-toolbar
  "This returns the top right Toolbar function with the standard actions"
  [{:keys [table data download-fn photo-id]}]
  [($ icon-element-button-helix {:key "BarChart" :icon BarChartIcon :tooltip-text "Bar chart" :on-click-fn (fn [] (rf/dispatch [:single-portfolio-risk/chart "bar"]))})
   ($ icon-element-button-helix {:key "PieChart" :icon PieChartIcon :tooltip-text "Pie chart" :on-click-fn (fn [] (rf/dispatch [:single-portfolio-risk/chart "pie"]))})
   ($ Divider {:key "divider0" :variant "middle" :orientation "vertical"})
   ($ icon-element-button-helix {:key "Filter1Icon" :icon Filter1Icon :tooltip-text "View 1" :on-click-fn (fn [] (rf/dispatch [(photo-id->shortcut-key photo-id) 1 table]))})
   ($ icon-element-button-helix {:key "Filter2Icon" :icon Filter2Icon :tooltip-text "View 2" :on-click-fn (fn [] (rf/dispatch [(photo-id->shortcut-key photo-id) 2 table]))})
   ($ icon-element-button-helix {:key "Filter3Icon" :icon Filter3Icon :tooltip-text "View 3" :on-click-fn (fn [] (rf/dispatch [(photo-id->shortcut-key photo-id) 3 table]))})
   ($ icon-element-button-helix {:key "Filter4Icon" :icon Filter4Icon :tooltip-text "View 4" :on-click-fn (fn [] (rf/dispatch [(photo-id->shortcut-key photo-id) 4 table]))})
   ($ Divider {:key "divider1" :variant "middle" :orientation "vertical"})
   ($ icon-element-button-helix {:key "ExpandIcon" :icon ExpandIcon :tooltip-text "Show more rows" :on-click-fn (fn [] (if (pos? (count (.-grouping (.getState table)))) (.setPageSize table 50) (.setPageSize table (if (= (.-pageSize (.-pagination (.getState table))) 200) 15 200))))})
   ($ icon-element-button-helix {:key "FilterListOffIcon" :icon FilterListOffIcon :tooltip-text "Clear filters" :on-click-fn (fn [] (.resetColumnFilters table #js []))})
   ($ MRT_ShowHideColumnsButton {:table table :key "show-columns"})
   ;($ icon-element-button-helix {:key "PhotoCameraIcon" :icon PhotoCameraIcon :tooltip-text "Open image" :on-click-fn (fn [] (t/open-image-in-new-tab-mrt photo-id))})
   ($ icon-element-button-helix {:key "SystemUpdateAltIcon" :icon SystemUpdateAltIcon :tooltip-text "Download view" :on-click-fn (fn [] (download-view table download-fn photo-id))})
   ($ icon-element-button-helix {:key "DownloadIcon" :icon DownloadIcon :tooltip-text "Full download" :on-click-fn (fn [] (download-fn data))})])

(defnc mrt-table-toolbar
  "This returns the top right Toolbar function with the standard actions"
  [{:keys [table data download-fn photo-id]} ]
  [($ icon-element-button-helix {:key "FilterListOffIcon" :icon FilterListOffIcon :tooltip-text "Clear filters" :on-click-fn (fn [] (.resetColumnFilters table #js []))})
   ($ MRT_ShowHideColumnsButton {:table table :key "show-columns"})
   ;($ MRT_FullScreenToggleButton {:table table :key "show-columns"})
   ($ icon-element-button-helix {:key "SystemUpdateAltIcon" :icon SystemUpdateAltIcon :tooltip-text "Download view" :on-click-fn (fn [] (download-view table download-fn photo-id))}) ;(t/csv-link (download-table-view table) filename)
   ($ icon-element-button-helix {:key "DownloadIcon" :icon DownloadIcon :tooltip-text "Full download" :on-click-fn (fn [] (download-fn data))})]) ;(t/csv-link data filename)

(defn mrt-default-download-fn [id clj-cols]
  (let [nested? (contains? (first clj-cols) :columns)
        dw-cols (->> (if nested? (apply concat (map :columns clj-cols)) clj-cols)
                     (map :accessorKey)
                     (map keyword))]
    (fn [js-data] (t/csv-link (js->clj js-data {:keywordize-keys true}) id dw-cols))))

(defn show-if-any-is-hidden [table groupset]
  (let [visible-ids (set (.map (.getVisibleLeafColumns table) #(.-id %)))
        group-visible? (clojure.set/subset? groupset visible-ids)]
    (if group-visible?
      (doseq [id groupset] (.toggleVisibility (.getColumn table id) false))
      (doseq [id groupset] (.toggleVisibility (.getColumn table id) true)))))

(def help-modal {:title "Help"
                 :throbber false
                 :content [p "Use , for OR. Use & for AND. Use - to exclude. Examples: AR,BR for Argentina or Brazil. >200&<300 for spreads between 200bps and 300bps. >0 to only see bonds in an index. -Sov to exclude sovereigns, -CN&-HK to exclude both countries."]})

(defn mrt-ref->filtered-col-seq
  "Takes a table ref and a column. Returns a cljs seq of the viewable (filtered and sorted) column values"
  [ref col]
  (js->clj (.map (.-rows (.getPrePaginationRowModel (aget ref "current"))) (fn [row] (aget (.-original ^js/Object row) col)))))

(defn mrt-ref->filtered-rows-seq [ref]
  (js->clj (.map (.-rows (.getPrePaginationRowModel (aget ref "current"))) (fn [row] (.-original ^js/Object row))) {:keywordize-keys true}))

(defn base-props-dark
  "note use of or as subsitute for (if value-is-not-nil value default). This is to make the basic table subset of fast table"
  [mdata mcolumns clj-option-map js-initial-state toolbar download-fn photo-id]
  (merge {:data                         mdata
          :columns                      mcolumns
          :enableColumnActions          false
          :initialState                 (or js-initial-state #js {"density" "compact" "showColumnFilters" true "columnFilters" #js [] "pagination" #js {}})
          :displayColumnDefOptions      #js {"mrt-row-expand" #js {"size" 75 "muiTableBodyCellProps" #js {"sx" #js {"backgroundColor" "inherit"}}}}

          :muiTableHeadCellProps        #js {"sx" #js {"borderRight" "1px solid rgba(113,113,113,0.5)"
                                                       "borderBottom" "1px solid rgba(113,113,113,0.5)"
                                                       "color" "white"
                                                       "backgroundColor" "#3f3f3f" }}
          :muiTableBodyCellProps        #js {"sx" #js {"borderRight" "1px solid rgba(113,113,113,0.5)"
                                                       "backgroundColor" "#3f3f3f"}}

          :muiTablePaperProps            #js {"sx" #js {"backgroundColor" "#1e1e1e" ;DARK 200
                                                        ;"borderTopLeftRadius" "20px" "borderTopRightRadius" "20px" "borderBottomLeftRadius" "20px" "borderBottomRightRadius" "20px"
                                                        }}  ;this is the ultimate element of the MUI Table, we can either match the radius with the one of the toolbar or just change the background color which is eaiser tbh
          :muiTableBodyProps            #js {"sx" #js {"backgroundColor" "#3f3f3f"}}
          :muiTableBodyContainerProps   #js {"sx" #js {"backgroundColor" "#3f3f3f"}}
          :muiTablePaginationProps      #js {"sx" #js {"backgroundColor" "#3f3f3f"}}

          :muiTopToolbarProps           #js {"sx" #js {"backgroundColor" "#3f3f3f"
                                                       "borderTopLeftRadius" "15px"
                                                       "borderTopRightRadius" "15px"}}
          :muiBottomToolbarProps           #js {"sx" #js {"backgroundColor" "#3f3f3f"
                                                          "borderBottomLeftRadius" "15px"
                                                          "borderBottomRightRadius" "15px"}}
          :muiTableContainerProps        #js {"sx" #js {"backgroundColor" "#3f3f3f"}} ;slider ..

          :renderToolbarInternalActions (fn [x] ($ (or toolbar mrt-table-toolbar) {:table (.-table x) :data mdata :download-fn (or download-fn (mrt-default-download-fn photo-id (js->clj mcolumns {:keywordize-keys true}))) :photo-id photo-id}))}
         clj-option-map))

;(defn base-props
;  "note use of or as subsitute for (if value-is-not-nil value default). This is to make the basic table subset of fast table"
;  [mdata mcolumns clj-option-map js-initial-state toolbar download-fn photo-id]
;  (merge {:data                         mdata
;          :columns                      mcolumns
;          :enableColumnActions          false
;          :initialState                 (or js-initial-state #js {"density" "compact" "showColumnFilters" true "columnFilters" #js [] "pagination" #js {}})
;          :displayColumnDefOptions      #js {"mrt-row-expand" #js {"size" 75 "muiTableBodyCellProps" #js {"sx" #js {"backgroundColor" "inherit"}}}}
;          :muiTableHeadCellProps        #js {"sx" #js {"borderRight" "1px solid rgba(224,224,224,1)"}} ; "flex" "0 0 auto"
;          :muiTableBodyProps            #js {};#js {"sx" #js {"& tr:nth-of-type(odd)" #js {"backgroundColor" "#f5f5f5"}}}
;          :muiTableBodyCellProps        #js {"sx" #js {"borderRight" "1px solid rgba(224,224,224,1)"}} ; "flex" "0 0 auto"
;          :renderToolbarInternalActions (fn [x] ($ (or toolbar mrt-table-toolbar) {:table (.-table x) :data mdata :download-fn (or download-fn (mrt-default-download-fn photo-id (js->clj mcolumns {:keywordize-keys true}))) :photo-id photo-id}))}
;         clj-option-map))

;------------------------------------------------------TEMPLATES--------------------------------------------------------

;(defnc material-react-table-template
;  "The magic is in useEffect which will communicate back and forth with reagent
;  Note you need to add extra key with a dummy value that changes every time you want full re-render!!!
;  "
;  [{:keys [clj-data clj-columns clj-option-map js-initial-state external-state-reference initial-external-state toolbar download-fn photo-id]}]
;  (let [pinned-cols (clj->js (conj (mapv :accessorKey (:columns (first clj-columns))) "mrt-row-expand"))
;        [ffilter setFilter] (use-state (. initial-external-state -columnFilters))
;        [grouping setGrouping] (use-state (. initial-external-state -grouping))
;        [expanded setExpanded] (use-state (. initial-external-state -expanded))
;        mdata (use-memo [clj-data clj-option-map]
;                        (if (array? clj-data)
;                          (do (when (:enableGrouping clj-option-map) (.forEach clj-data #(aset % "dummy" ""))) clj-data)
;                          (clj->js (if (:enableGrouping clj-option-map) (map #(assoc % :dummy "") clj-data) clj-data))))
;        mcolumns (use-memo [clj-columns] (clj->js clj-columns))
;        x (use-effect
;            [ffilter grouping expanded]
;            ;(println "DEBUG TABLE, DISABLE IN PROD!" ffilter grouping expanded);TODO DEBUG TOGGLE
;            (let [target #js {"columnFilters" ffilter "grouping" grouping "expanded" expanded}]
;              (if (keyword? external-state-reference) (rf/dispatch [external-state-reference target]) (reset! external-state-reference target))))
;        props (merge
;                (base-props mdata mcolumns clj-option-map js-initial-state toolbar download-fn photo-id)
;                {:onGroupingChange      setGrouping
;                 :onColumnFiltersChange setFilter
;                 :onExpandedChange      setExpanded
;                 :state                 #js {"columnFilters" ffilter "grouping" grouping "expanded" expanded "columnPinning" #js {"left" pinned-cols "right" #js []}}
;                 })]
;    ($ "div" {:id photo-id} ($ MaterialReactTable {& props}))))

(defnc material-react-table-template-fast
  "No external state hence a lot faster
  Note you need to add extra key with a dummy value that changes every time you want full re-render!!!"
  [{:keys [clj-data clj-columns clj-option-map js-initial-state toolbar download-fn photo-id]}]
  (let [pinned-cols (clj->js (conj (mapv :accessorKey (:columns (first clj-columns))) "mrt-row-expand"))
        mdata (use-memo [clj-data clj-option-map]
                        (if (array? clj-data)
                          (do (when (:enableGrouping clj-option-map) (.forEach clj-data #(aset % "dummy" ""))) clj-data)
                          (clj->js (if (:enableGrouping clj-option-map) (mapv #(assoc % :dummy "") clj-data) clj-data))))
        mcolumns (use-memo [clj-columns] (clj->js clj-columns))
        props (merge
                (base-props-dark mdata mcolumns clj-option-map js-initial-state toolbar download-fn photo-id)
                (if (seq pinned-cols) {:state #js {"columnPinning" #js {"left" pinned-cols "right" #js []}}}))]
    ($ "div" {:id photo-id :class "mrt-table-dark"} ($ MaterialReactTable {& props}))
    ;(println ($ "div" {:id photo-id} ($ MaterialReactTable {& props})))
    ))

(defnc material-react-table-template-basic
  [argument-map]
  ($ material-react-table-template-fast {& (update argument-map :clj-option-map #(merge {:enablePagination false :enableBottomToolbar false} %))}))











