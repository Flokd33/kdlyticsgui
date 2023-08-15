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
            [cljs-time.core :refer [today]]
            [helix.hooks :refer [use-state use-effect use-memo]]
            ["material-react-table" :as rt :default MaterialReactTable :refer ( MRT_ShowHideColumnsButton MRT_ToggleDensePaddingButton MRT_FullScreenToggleButton )] ;<MRT_FullScreenToggleButton table={table} />
            ["@mui/material" :as mm :refer ( Button IconButton Tooltip Box Divider)]
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

(defn get-js-row-key [row key] (gobj/getValueByKeys row "row" "original" key))

(defn held-formatting [row]
  (if-let [x (get-js-row-key row "held")]
    (condp = x
      1   #js {:sx #js {"cursor" "pointer" "backgroundColor" "#9CD7AB"}}
      0 (if (odd? (.-index (.-row row)))
          #js {:sx #js {"cursor" "pointer" "backgroundColor" "#F5F5F5"}}
          #js {:sx #js {"cursor" "pointer"}})
      #js{}
      )
    #js{}))


(defn held-formatting-qs [this]
  (let [r (.-row this)]
    (case (.-n91held ^js/Object (.-original r))
      1 #js {:sx #js {"cursor" "pointer" "backgroundColor" "#9CD7AB"}} ;DOES NOT WORK! [#js {"cursor" "pointer" :backgroundColor "#9CD7AB"} #js {"&:hover" #js {"cursor" "pointer" :backgroundColor "#7CAC88"}}]
      0 (if (odd? (.-index r))
          #js {:sx #js {"cursor" "pointer" "backgroundColor" "#F5F5F5"}}
          #js {:sx #js {"cursor" "pointer"}}))))


(defn median [coll]
  (let [sorted (sort (remove nil? coll))     ;(remove zero? (remove nil? coll))
        cnt (count sorted)
        halfway (quot cnt 2)]
    (cond
      (zero? cnt) nil
      (odd? cnt) (nth sorted halfway)
      :else (let [bottom (dec halfway) bottom-val (nth sorted bottom) top-val (nth sorted halfway)] (* 0.5 (+ bottom-val top-val))))))

(defn mrt-median [columnId leafRows childRows]
  ;(println (map #(.getValue % columnId) leafRows))
  (median (map #(.getValue % columnId) leafRows)))

;(defn median [coll coll2]
;  (println (clj->js coll2))
;  (let [sorted (sort (remove nil? coll))     ;(remove zero? (remove nil? coll))
;        cnt (count sorted)
;        halfway (quot cnt 2)]
;    (cond
;      (zero? cnt) nil
;      (odd? cnt) (nth sorted halfway)
;      :else (let [bottom (dec halfway) bottom-val (nth sorted bottom) top-val (nth sorted halfway)] (* 0.5 (+ bottom-val top-val))))))

(def nff (NumberFormat. Format/DECIMAL))

(defn cell-value [c] (.getValue (.-cell c)))

(defn nb-cell-format
  "This will write a single cell.
  Note that [this] has access to the full row so conditional evaluation is possible (e.g. change column B based on values in column A)
  Here we take the input value if it's there, scale it (useful for percentages) and format it."
  [fmt m this]
  (let [x (cell-value this)]
    (if (js/isNaN x) "-" (gstring/format fmt (* m x)))))

(defn nb-cell-format-no0
  "This will write a single cell.
  Note that [this] has access to the full row so conditional evaluation is possible (e.g. change column B based on values in column A)
  Here we take the input value if it's there, scale it (useful for percentages) and format it."
  [fmt m this]
  (let [x (cell-value this)]
    (if (or (js/isNaN x) (zero? x) (nil? x)) "-" (gstring/format fmt (* m x)))))

(def round2 #(nb-cell-format "%.2f" 1. %))
(def round3 #(nb-cell-format "%.3f" 1. %))
(def round0 #(nb-cell-format "%.0f" 1. %))
(def round1 #(nb-cell-format "%.1f" 1. %))
(def round4 #(nb-cell-format "%.4f" 1. %))
(def round0pc #(nb-cell-format "%.0f%" 1. %))
(def round1pc #(nb-cell-format "%.1f%" 1. %))
(def round2pc #(nb-cell-format "%.2f%" 1. %))
(def round0*1000000 #(nb-cell-format "%.2f%" 1000000. %))
(def round0pc100 #(nb-cell-format "%.0f%" 100. %))
(def round1pc100 #(nb-cell-format "%.1f%" 100. %))
(def round2pc100 #(nb-cell-format "%.2f%" 100. %))
(def round2*100 #(nb-cell-format "%.2f" 100. %))
(def yield-format   #(nb-cell-format "%.2f%" 1. %))
(def round2-no0 #(nb-cell-format-no0 "%.2f" 1. %))
(def round2pc-no0 #(nb-cell-format-no0 "%.2f%" 1. %))
(def zspread-format #(nb-cell-format "%.0fbps" 1. %))
(def performance-attributes-bps #(nb-cell-format "%.0fbps" 100. %))
(def date-sc #(nb-cell-format "%0.0f" 1. %))

(defn nb-thousand-cell-format
  "This will write a single cell."
  [this]
  (let [x (cell-value this)]
    (if (js/isNaN x) "-" (.format nff (str (js/Math.round x))))))

(defn red-negatives
  "right align, with red text if negative"
  [cell]
  (if (and (some? cell) (neg? (cell-value cell)))
    #js {"align" "right" "sx" #js {"color" "red" "borderRight" "1px solid rgba(224,224,224,1)"}}
    #js {"align" "right" "sx" #js {"borderRight" "1px solid rgba(224,224,224,1)"}}))

(defn red-negatives-pinned
  "right align, with red text if negative"
  [cell]
  (if (and (some? cell) (neg? (cell-value cell)))
    #js {"align" "right" "sx" #js {"backgroundColor" "inherit" "color" "red" "borderRight" "1px solid rgba(224,224,224,1)" }}
    #js {"align" "right" "sx" #js {"backgroundColor" "inherit" "borderRight" "1px solid rgba(224,224,224,1)" }}))

(def this-year (str (.getYear (today))))

(defn ytd-ita [cell]
  (if-let [x (get-js-row-key cell "FIRST_SETTLE_DT")        ; (aget cell "row" "original" "FIRST_SETTLE_DT")
           ]
    (if (= (str (subs x 0 4)) this-year)
      #js {"align" "right" "sx" #js {"color" (if (and (some? cell) (neg? (cell-value cell))) "red" "black") "borderRight" "1px solid rgba(224,224,224,1)" "font-style" "italic"}}
      #js {"align" "right" "sx" #js {"color" (if (and (some? cell) (neg? (cell-value cell))) "red" "black") "borderRight" "1px solid rgba(224,224,224,1)" "font-style" "normal"}})))


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

;(defn text-filter-OR-old
;  "OR through comma separation, AND through &"
;  [row ^string id ^string filterValue]
;  (let [id (.toLowerCase ^string (if-let [v (.getValue row id)] v ""))]
;    (true?
;      (some true?
;            (map (fn [line] (every? true? (map #(lower-case-s-in-value? % id) (.split ^js/String line "&"))))
;                 (.split ^js/String (.replaceAll (.toLowerCase ^string filterValue) " " "") ","))))))

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

;(defn nb-filter-OR-AND-old
;  "filterfn is {id: column_name value: text_in_filter_box
;  comma separation is OR. Within comma separation, & is AND."
;  [row ^string id ^string filterValue]
;  (let [compread #(comparator-read (.getValue row id) %)]
;    (true?                                                  ;required
;      (some true?
;            (map (fn [line] (every? true? (map compread (.split ^js/String line "&"))))
;                 (.split (.toLowerCase ^string filterValue) ","))))))

(defn ampersand-comp [compread line] (.every (.split ^js/String line "&") compread))

(defn nb-filter-OR-AND
  "filterfn is {id: column_name value: text_in_filter_box
  comma separation is OR. Within comma separation, & is AND."
  [row ^string id ^string filterValue]
  (let [compread #(comparator-read (.getValue row id) %)]
    (.some (.split (.toLowerCase ^string filterValue) ",")
           #(ampersand-comp compread %))))

(defn ds-text-col
  "Simple text column in MRT"
  [header accessor width]
  {:header                               header
   :id                                   accessor
   :accessorFn                           #(do (println %) (get % accessor))
   :size                                 width
   :muiTableHeadCellFilterTextFieldProps {:placeholder "" :sx {:minWidth (str width "px")}}
   :filterFn                             text-filter-OR})

(defn ds-nb-col
  "Simple number column in MRT, by default aligned right with red negatives"
  ([header accessor width cell aggregate AggregatedCell]
   (assoc (ds-nb-col header accessor width cell) :aggregate aggregate :AggregatedCell AggregatedCell))
  ([header accessor width cell]
   {:header header
    :id accessor
    :accessorFn #(get % accessor)
    :size width
    :muiTableBodyCellProps red-negatives
    :Cell cell
    :muiTableHeadCellFilterTextFieldProps {:placeholder "" :sx {:minWidth (str width "px")}}
    :filterFn nb-filter-OR-AND}))

(defn text-col-pinned
  "Simple text column in MRT"
  ([header accessor width]
   {:header                               header
    :accessorKey                          accessor
    :size                                 width
    :enablePinning                        false
    :muiTableHeadCellFilterTextFieldProps {:placeholder "" :sx {:minWidth "0px"}}
    :filterFn                             text-filter-OR
    :muiTableBodyCellProps                #js {"sx" #js {"borderRight" "1px solid rgba(224,224,224,1)" "backgroundColor" "inherit"}}})
  ([header accessor width cell]
   (assoc (text-col-pinned header accessor width) :Cell cell))
  )

(defn text-col
  "Simple text column in MRT"
  ([header accessor width]
   {:header                               header
    :accessorKey                          accessor
    :size                                 width
    :enablePinning                        false
    :muiTableHeadCellFilterTextFieldProps {:placeholder "" :sx {:minWidth "0px"}}
    :filterFn                             text-filter-OR
    :muiTableBodyCellProps                #js {"sx" #js {"borderRight" "1px solid rgba(224,224,224,1)" "backgroundColor" "inherit"}}})
  ([header accessor width cell]
   (assoc (text-col header accessor width) :Cell cell)))

(defn text-col-multiline
  "Simple text column in MRT"
  ([header accessor width]
   {:header                               header
    :accessorKey                          accessor
    :size                                 width
    :enablePinning                        false
    :muiTableHeadCellFilterTextFieldProps {:placeholder "" :sx {:minWidth "0px"}}
    :filterFn                             text-filter-OR
    :muiTableBodyCellProps                #js {"sx" #js {"borderRight" "1px solid rgba(224,224,224,1)" "backgroundColor" "inherit" "wordWrap" "break-word" "whiteSpace" "pre-line"}}})
  ([header accessor width cell]
   (assoc (text-col-multiline header accessor width) :Cell cell)))

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

(defn nb-col-pinned
  "Simple number column in MRT, by default aligned right with red negatives"
  ([header accessor width cell aggregate AggregatedCell]
   (assoc (nb-col-pinned header accessor width cell) :aggregationFn aggregate :AggregatedCell AggregatedCell))
  ([header accessor width cell aggregate]
   (assoc (nb-col-pinned header accessor width cell) :aggregationFn aggregate :AggregatedCell cell))
  ([header accessor width cell]
   {:header                               header
    :accessorKey                          accessor
    :size                                 width
    :muiTableBodyCellProps                red-negatives-pinned
    :Cell                                 cell
    :enablePinning                        false
    :muiTableHeadCellFilterTextFieldProps {:placeholder "" :sx {:minWidth "0px"}}
    :filterFn                             nb-filter-OR-AND}))

;;;;;; ACTUAL TABLE IMPLEMENTATION ;;;;;;

;(defn icon-element-button
;  [icon tooltip-text on-click-fn]
;  (r/create-element
;    Tooltip
;    #js {"arrow" true "title" tooltip-text "key" tooltip-text}
;    (r/create-element
;      IconButton
;      #js {"onClick" on-click-fn}
;      (r/create-element icon))))

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

(defnc ta-table-toolbar
  "This returns the top right Toolbar function with the standard actions"
  [{:keys [table data download-fn photo-id]}]
  [($ icon-element-button-helix {:key "BarChart" :icon BarChartIcon :tooltip-text "Bar chart" :on-click-fn (fn [] (rf/dispatch [:single-portfolio-risk/chart "bar"]))})
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

(defnc single-attribution-table-toolbar
  "This returns the top right Toolbar function with the standard actions"
  [{:keys [table data download-fn photo-id]}]
  [($ icon-element-button-helix {:key "BarChart" :icon BarChartIcon :tooltip-text "Bar chart" :on-click-fn (fn [] (rf/dispatch [:single-portfolio-attribution/modal "bar"]))})
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

(defnc risk-table-toolbar
  "This returns the top right Toolbar function with the standard actions"
  [{:keys [table data download-fn photo-id]}]
  [($ icon-element-button-helix {:key "Filter1Icon" :icon Filter1Icon :tooltip-text "View 1" :on-click-fn (fn [] (rf/dispatch [(photo-id->shortcut-key photo-id) 1 table]))})
   ($ icon-element-button-helix {:key "Filter2Icon" :icon Filter2Icon :tooltip-text "View 2" :on-click-fn (fn [] (rf/dispatch [(photo-id->shortcut-key photo-id) 2 table]))})
   ($ icon-element-button-helix {:key "Filter3Icon" :icon Filter3Icon :tooltip-text "View 3" :on-click-fn (fn [] (rf/dispatch [(photo-id->shortcut-key photo-id) 3 table]))})
   ($ icon-element-button-helix {:key "Filter4Icon" :icon Filter4Icon :tooltip-text "View 4" :on-click-fn (fn [] (rf/dispatch [(photo-id->shortcut-key photo-id) 4 table]))})
   ($ Divider {:key "divider" :variant "middle" :orientation "vertical"})
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
   ;($ icon-element-button-helix {:key "PhotoCameraIcon" :icon PhotoCameraIcon :tooltip-text "Open image" :on-click-fn (fn [] (t/open-image-in-new-tab-mrt photo-id))})
   ($ icon-element-button-helix {:key "SystemUpdateAltIcon" :icon SystemUpdateAltIcon :tooltip-text "Download view" :on-click-fn (fn [] (download-view table download-fn photo-id))}) ;(t/csv-link (download-table-view table) filename)
   ($ icon-element-button-helix {:key "DownloadIcon" :icon DownloadIcon :tooltip-text "Full download" :on-click-fn (fn [] (download-fn data))})]) ;(t/csv-link data filename)

(defn mrt-default-download-fn [id clj-cols]
  (let [nested? (contains? (first clj-cols) :columns)
        dw-cols (->> (if nested? (apply concat (map :columns clj-cols)) clj-cols)
                     (map :accessorKey)
                     (map keyword))]
    (fn [js-data] (t/csv-link (js->clj js-data {:keywordize-keys true}) id dw-cols))))

(defn mrt-th-download-fn [id clj-cols]
  (let [nested? (contains? (first clj-cols) :columns)
        dw-cols (->> (if nested? (apply concat (map :columns clj-cols)) clj-cols)
                     (map :accessorKey)
                     (map keyword))]
    (fn [js-data] (t/csv-link (js->clj js-data {:keywordize-keys true}) id dw-cols "|"))))

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

(defnc mrt-qs-table-toolbar
  "This returns the top right Toolbar function with the standard actions"
  [{:keys [table data download-fn photo-id stars]}]
  [($ icon-element-button-helix {:key "HelpCenter" :icon HelpCenterIcon :tooltip-text "Help" :on-click-fn #(rf/dispatch [:generic-modal help-modal])})
   ($ Divider {:key "divider1" :variant "middle" :orientation "vertical"})
   ($ icon-element-button-helix {:key "Flag" :icon FlagIcon :tooltip-text "Show flags" :on-click-fn (fn [] (show-if-any-is-hidden table (set (map name [:SENIOR-WIDE :BASEL_III_DESIGNATION :CAPITAL_TRIGGER_TYPE :HYBRID-WIDE :INTERNATIONAL_SUKUK :ESG :MSCI-SCORE :Transition_finance_universe]))))}) ;
   ($ icon-element-button-helix {:key "WorkSpaces" :icon WorkspacesIcon :tooltip-text "Show index membership" :on-click-fn (fn [] (show-if-any-is-hidden table (set (map name [:cembi :cembi-ig :embi :embi-ig :us-agg :global-agg :jaci]))))})
   ($ icon-element-button-helix {:key "CallEnd" :icon CallEndIcon :tooltip-text "Show calls" :on-click-fn (fn [] (show-if-any-is-hidden table (set (map name [:NXT_CALL_DT :NXT_CALL_PX :days-to-call :price-vs-call :MATURITY]))))})
   ($ Divider {:key "divider2" :variant "middle" :orientation "vertical"})
   ($ icon-element-button-helix {:key "StarIcon" :icon StarIcon :tooltip-text "Filter stars" :on-click-fn (fn [] (.setColumnFilters table #js [ #js {"id" "star" "value" (clojure.string/join "," @stars)}]))})
   ($ icon-element-button-helix {:key "FilterListOffIcon" :icon FilterListOffIcon :tooltip-text "Clear filters" :on-click-fn (fn [] (.resetColumnFilters table #js []))})
   ($ icon-element-button-helix {:key "StarBorderIcon" :icon StarBorderIcon :tooltip-text "Clear stars" :on-click-fn (fn [] (reset! stars (set nil)))})
   ($ Divider {:key "divider3" :variant "middle" :orientation "vertical"})
   ($ icon-element-button-helix {:key "ExpandIcon" :icon ExpandIcon :tooltip-text "Show more rows" :on-click-fn (fn [] (.setPageSize table (if (= (.-pageSize (.-pagination (.getState table))) 200) 15 200)))})
   ($ MRT_ShowHideColumnsButton {:table table :key "show-columns"})
   ;($ icon-element-button-helix {:key "PhotoCameraIcon" :icon PhotoCameraIcon :tooltip-text "Open image" :on-click-fn (fn [] (t/open-image-in-new-tab-mrt photo-id))})
   ($ icon-element-button-helix {:key "SystemUpdateAltIcon" :icon SystemUpdateAltIcon :tooltip-text "Download view" :on-click-fn (fn [] (download-fn (.map (.-rows (.getPrePaginationRowModel table)) (fn [row] (.-original row)))))}) ;(t/csv-link (download-table-view table) filename)
   ($ icon-element-button-helix {:key "DownloadIcon" :icon DownloadIcon :tooltip-text "Full download" :on-click-fn (fn [] (download-fn data))})])

(def advanced-spot-chart-isins (r/atom []))

(defn base-props
  "note use of or as subsitute for (if value-is-not-nil value default). This is to make the basic table subset of fast table"
  [mdata mcolumns clj-option-map js-initial-state toolbar download-fn photo-id]
  (merge {:data                         mdata
          :columns                      mcolumns
          :enableColumnActions          false
          :initialState                 (or js-initial-state #js {"density" "compact" "showColumnFilters" true "columnFilters" #js [] "pagination" #js {}})
          :displayColumnDefOptions      #js {"mrt-row-expand" #js {"size" 75 "muiTableBodyCellProps" #js {"sx" #js {"backgroundColor" "inherit"}}}}
          :muiTableHeadCellProps        #js {"sx" #js {"borderRight" "1px solid rgba(224,224,224,1)"}} ; "flex" "0 0 auto"
          :muiTableBodyProps            #js {"sx" #js {"& tr:nth-of-type(odd)" #js {"backgroundColor" "#f5f5f5"}}}
          :muiTableBodyCellProps        #js {"sx" #js {"borderRight" "1px solid rgba(224,224,224,1)"}} ; "flex" "0 0 auto"
          :renderToolbarInternalActions (fn [x] ($ (or toolbar mrt-table-toolbar) {:table (.-table x) :data mdata :download-fn (or download-fn (mrt-default-download-fn photo-id (js->clj mcolumns {:keywordize-keys true}))) :photo-id photo-id}))}
         clj-option-map))

(defnc material-react-table-template
  "The magic is in useEffect which will communicate back and forth with reagent
  Note you need to add extra key with a dummy value that changes every time you want full re-render!!!
  "
  [{:keys [clj-data clj-columns clj-option-map js-initial-state external-state-reference initial-external-state toolbar download-fn photo-id]}]
  (let [pinned-cols (clj->js (conj (mapv :accessorKey (:columns (first clj-columns))) "mrt-row-expand"))
        [ffilter setFilter] (use-state (. initial-external-state -columnFilters))
        [grouping setGrouping] (use-state (. initial-external-state -grouping))
        [expanded setExpanded] (use-state (. initial-external-state -expanded))
        mdata (use-memo [clj-data clj-option-map]
                        (if (array? clj-data)
                          (do (when (:enableGrouping clj-option-map) (.forEach clj-data #(aset % "dummy" ""))) clj-data)
                          (clj->js (if (:enableGrouping clj-option-map) (map #(assoc % :dummy "") clj-data) clj-data))))
        mcolumns (use-memo [clj-columns] (clj->js clj-columns))
        x (use-effect
            [ffilter grouping expanded]
            ;(println "DEBUG TABLE, DISABLE IN PROD!" ffilter grouping expanded);TODO DEBUG TOGGLE
            (let [target #js {"columnFilters" ffilter "grouping" grouping "expanded" expanded}]
              (if (keyword? external-state-reference) (rf/dispatch [external-state-reference target]) (reset! external-state-reference target))))
        props (merge
                (base-props mdata mcolumns clj-option-map js-initial-state toolbar download-fn photo-id)
                {:onGroupingChange      setGrouping
                 :onColumnFiltersChange setFilter
                 :onExpandedChange      setExpanded
                 :state                 #js {"columnFilters" ffilter "grouping" grouping "expanded" expanded "columnPinning" #js {"left" pinned-cols "right" #js []}}
                 })]
    ($ "div" {:id photo-id} ($ MaterialReactTable {& props}))))

(defnc material-react-table-template-managed
  "The magic is in useEffect which will communicate back and forth with reagent
  Note you need to add extra key with a dummy value that changes every time you want full re-render!!!
  "
  [{:keys [clj-data clj-columns clj-option-map js-initial-state external-state-reference toolbar download-fn photo-id]}]
  ;None of the props should change, except js-initial-state, which is only used on first mount
  (let [[ffilter setFilter] (use-state (. js-initial-state -columnFilters))
        [grouping setGrouping] (use-state (. js-initial-state -grouping))
        [expanded setExpanded] (use-state (. js-initial-state -expanded))
        mdata (use-memo [clj-data] (if (array? clj-data) clj-data (clj->js clj-data)))
        mcolumns (use-memo [clj-columns] (clj->js clj-columns))
        x (use-effect
            [ffilter grouping expanded]
            ;(println "DEBUG TABLE, DISABLE IN PROD!" ffilter grouping expanded);TODO DEBUG TOGGLE
            (let [target #js {"columnFilters" ffilter "grouping" grouping "expanded" expanded}]
              (if (keyword? external-state-reference) (rf/dispatch [external-state-reference target]) (reset! external-state-reference target))))
        props (merge
                (base-props mdata mcolumns clj-option-map js-initial-state toolbar download-fn photo-id)
                {:enableGrouping        true
                 :enableExpanding       true
                 :enablePinning         true
                 :onGroupingChange      setGrouping
                 :onColumnFiltersChange setFilter
                 :onExpandedChange      setExpanded
                 :state                 #js {"columnFilters" ffilter "grouping" grouping "expanded" expanded}})]
    ($ "div" {:id photo-id} ($ MaterialReactTable {& props}))))

(defnc material-react-table-template-ta
  "Same as material-react-table-template + only pin grouping
  "
  [{:keys [clj-data clj-columns clj-option-map js-initial-state external-state-reference initial-external-state toolbar download-fn photo-id]}]
  (let [pinned-cols (clj->js (conj (mapv :accessorKey (:columns (first clj-columns))) "mrt-row-expand"))
        [ffilter setFilter] (use-state (. initial-external-state -columnFilters))
        [grouping setGrouping] (use-state (. initial-external-state -grouping))
        [expanded setExpanded] (use-state (. initial-external-state -expanded))
        mdata (use-memo [clj-data clj-option-map]
                        (if (array? clj-data)
                          (do (when (:enableGrouping clj-option-map) (.forEach clj-data #(aset % "dummy" ""))) clj-data)
                          (clj->js (if (:enableGrouping clj-option-map) (map #(assoc % :dummy "") clj-data) clj-data))))
        mcolumns (use-memo [clj-columns] (clj->js clj-columns))
        x (use-effect
            [ffilter grouping expanded]
            ;(println "DEBUG TABLE, DISABLE IN PROD!" ffilter grouping expanded);TODO DEBUG TOGGLE
            (let [target #js {"columnFilters" ffilter "grouping" grouping "expanded" expanded}]
              (if (keyword? external-state-reference) (rf/dispatch [external-state-reference target]) (reset! external-state-reference target))))
        props (merge
                (base-props mdata mcolumns clj-option-map js-initial-state toolbar download-fn photo-id)
                {:onGroupingChange      setGrouping
                 :onColumnFiltersChange setFilter
                 :onExpandedChange      setExpanded
                 ;:tableInstanceRef      jasminegui.ta2022.tradeview/ta-table-ref
                 :state                 #js {"columnFilters" ffilter "grouping" grouping "expanded" expanded "columnPinning" #js {"left" grouping "right" #js []}}
                 })]
    ($ "div" {:id photo-id} ($ MaterialReactTable {& props}))))

(defnc material-react-table-template-fast
  "No external state hence a lot faster
  Note you need to add extra key with a dummy value that changes every time you want full re-render!!!"
  [{:keys [clj-data clj-columns clj-option-map js-initial-state toolbar download-fn photo-id]}]
  (let [pinned-cols (mapv :accessorKey (:columns (first clj-columns)))
        mdata (use-memo [clj-data clj-option-map]
                        (if (array? clj-data)
                          (do (when (:enableGrouping clj-option-map) (.forEach clj-data #(aset % "dummy" ""))) clj-data)
                          (clj->js (if (:enableGrouping clj-option-map) (mapv #(assoc % :dummy "") clj-data) clj-data))))
        mcolumns (use-memo [clj-columns] (clj->js clj-columns))
        props (merge
                (base-props mdata mcolumns clj-option-map js-initial-state toolbar download-fn photo-id)
                (if (seq pinned-cols) {:state #js {"columnPinning" #js {"left" (clj->js pinned-cols) "right" #js []}}}))]
    ($ "div" {:id photo-id} ($ MaterialReactTable {& props}))))

(defnc material-react-table-template-basic
  [argument-map]
  ($ material-react-table-template-fast {& (update argument-map :clj-option-map #(merge {:enablePagination false :enableBottomToolbar false} %))}))

(def risk-table-columns
  {
   :id-show                          (text-col "ID" "id" 65)
   :region                           (text-col "Region" "jpm-region" 120)
   :emd-region                       (text-col "EMD region" "emd-region" 120)
   :country                          (text-col "Country" "qt-risk-country-name" 120)
   :issuer                           (text-col "Issuer" "TICKER" 120)
   :sector                           (text-col "Sector" "qt-jpm-sector" 120)
   :sector-baml                      (text-col "Sector BAML3" "qt-BAML-level-3" 120)
   :sector-gics                      (text-col "Sector GICS" "qt-gics-sector" 120)
   :maturity-band                    (text-col "Maturity" "qt-final-maturity-band" 120)
   :rating                           (text-col "Rating" "qt-iam-int-lt-median-rating" 60)
   :rating-score                     (text-col "Rating" "qt-iam-int-lt-median-rating-score" 120) ;{:header "Rating" :size 120 :accessorKey "qt-iam-int-lt-median-rating-score" :aggregate first} ; :Cell rating-score-to-string
   :financial-seniority              (text-col "Style" "financial-seniority" 120)
   :name                             (text-col "Name" "NAME" 120)
   :isin                             (text-col "ISIN" "isin" 110)
   :dummy                            (text-col "Total" "dummy" 50)

   :description                      (text-col "thinkFolio ID" "description" 400)
   :nav                              (nb-col "Fund" "weight" 50 round2 "sum")
   :bm-weight                        (nb-col "Index" "bm-weight" 50 round2 "sum")
   :weight-delta                     (nb-col "Delta" "weight-delta" 50 round2 "sum")
   :nominal                          (nb-col "Nominal" "original-quantity" 100 nb-thousand-cell-format "sum")
   :value                            (nb-col "Value" "base-value" 100 nb-thousand-cell-format "sum")

   :z-spread                         (nb-col "Z" "qt-libor-spread" 45 nb-thousand-cell-format median)
   :g-spread                         (nb-col "G" "qt-govt-spread" 45 nb-thousand-cell-format median)
   :duration                         (nb-col "M dur" "qt-modified-duration" 45 round1 median)
   :yield                            (nb-col "Yield" "qt-yield" 45 round2*100 median)

   :contrib-gspread                  (nb-col "G-spread" "contrib-gspread" 60 round0 "sum")
   :contrib-zspread                  (nb-col "Fund" "contrib-zspread" 60 round0 "sum")
   :contrib-yield                    (nb-col "Fund" "contrib-yield" 50 round2pc "sum")
   :contrib-yield-summary            (nb-col "Fund" "contrib-yield" 50 round2pc100 "sum")
   :contrib-mdur                     (nb-col "Fund" "contrib-mdur" 50 round2 "sum")
   :bm-contrib-yield                 (nb-col "Index" "bm-contrib-yield" 50 round2pc "sum")
   :bm-contrib-eir-duration          (nb-col "Index" "bm-contrib-eir-duration" 50 round2 "sum")
   :duration-times-spread-weight     (nb-col "DTS" "duration-times-spread-weight" 45 round0 "sum")

   :cash-pct                         (nb-col "Cash" "cash-pct" 50 round2pc100 "sum")
   :contrib-bond-yield-summary       (nb-col "Bond yield" "contrib-bond-yield" 70 round2pc100 "sum")

   :mdur-delta                       (nb-col "Delta" "mdur-delta" 50 round2 "sum")
   :contrib-beta                     (nb-col "EMCD" "contrib-beta-1y-daily" 50 round2 "sum")
   :cembi-beta-last-year             (nb-col (gstring/unescapeEntities "&beta;") "cembi-beta-last-year" 45 round1 median)
   :cembi-beta-previous-year         (nb-col (gstring/unescapeEntities "LY &beta;") "cembi-beta-previous-year" 45 round1 median)

   :contrib-BBG_CEMBI_D1Y_BETA       (nb-col "Fund Bbg" "contrib-BBG_CEMBI_D1Y_BETA" 65 round2 "sum")
   :bm-contrib-BBG_CEMBI_D1Y_BETA    (nb-col "Index Bbg" "bm-contrib-BBG_CEMBI_D1Y_BETA" 65 round2 "sum")
   :contrib-delta-BBG_CEMBI_D1Y_BETA (nb-col "Delta Bbg" "contrib-delta-BBG_CEMBI_D1Y_BETA" 65 round2 "sum")

   :contrib-BBG_EMBI_D1Y_BETA       (nb-col "Fund Bbg" "contrib-BBG_EMBI_D1Y_BETA" 65 round2 "sum")
   :bm-contrib-BBG_EMBI_D1Y_BETA    (nb-col "Index Bbg" "bm-contrib-BBG_EMBI_D1Y_BETA" 65 round2 "sum")
   :contrib-delta-BBG_EMBI_D1Y_BETA (nb-col "Delta Bbg" "contrib-delta-BBG_EMBI_D1Y_BETA" 65 round2 "sum")
   :contrib-BBG_CEMBIIG_D1Y_BETA       (nb-col "Fund Bbg" "contrib-BBG_CEMBIIG_D1Y_BETA" 65 round2 "sum")
   :bm-contrib-BBG_CEMBIIG_D1Y_BETA    (nb-col "Index Bbg" "bm-contrib-BBG_CEMBIIG_D1Y_BETA" 65 round2 "sum")
   :contrib-delta-BBG_CEMBIIG_D1Y_BETA (nb-col "Delta Bbg" "contrib-delta-BBG_CEMBIIG_D1Y_BETA" 65 round2 "sum")

   :total-return-ytd                 (nb-col "YTD TR" "total-return-ytd" 50 #(nb-cell-format "%.1f%" 100. %) median)
   :jensen-ytd                       (nb-col "Jensen" "jensen-ytd" 50 #(nb-cell-format "%.1f%" 100. %) median)

   :quant-value-2d                   (nb-col "2D" "quant-value-2d" 50 round2 "sum")
   :quant-value-4d                   (nb-col "4D" "quant-value-4d" 50 round2 "sum")
   :msci-rating                      (assoc (text-col "Rating" "msci-rating" 75) :sortMethod nil ) ;:sortMethod sort-msci-rating
   })



(def attribution-table-columns
  {:region           (text-col "Region" "Region" 140)
   :country          (text-col "Country" "Country" 140)
   :issuer           (text-col "Issuer" "Issuer" 140)
   :sector           (text-col "Sector" "Sector" 140)
   :maturity-band    (text-col "Maturity" "Duration-Bucket" 140)
   :portfolio        (text-col "Portfolio" "Fund" 140)

   :total-effect     (nb-col "Fund" "Total-Effect" 80 round2pc "sum")
   :xs-weight        (nb-col "Excess" "Average-Excess-Weight" 70 round2pc "sum")
   :weight           (nb-col "Fund" "Average-Fund-Weight" 70 round2pc "sum")
   :bm-weight        (nb-col "Index" "Average-Index-Weight" 70 round2pc "sum")
   :contribution     (nb-col "Fund" "Fund-Contribution" 70 round2pc "sum")
   :bm-contribution  (nb-col "Index" "Index-Contribution" 70 round2pc "sum")

   :index-return     (nb-col "Index" "Index-Return" 70 round2pc median)
   :fund-return      (nb-col "Fund" "Fund-Return" 70 round2pc median)

   :total-effect-wtd     (nb-col "Effect" "Total-Effect-wtd" 70 performance-attributes-bps "sum")
   :xs-weight-wtd        (nb-col "Excess" "Average-Excess-Weight-wtd" 70 round2pc "sum")
   :weight-wtd           (nb-col "Fund" "Average-Fund-Weight-wtd" 70 round2pc "sum")
   :bm-weight-wtd        (nb-col "Index" "Average-Index-Weight-wtd" 70 round2pc "sum")
   :contribution-wtd     (nb-col "Fund cont." "Fund-Contribution-wtd" 70 performance-attributes-bps "sum")
   :bm-contribution-wtd  (nb-col "Index cont." "Index-Contribution-wtd" 70 performance-attributes-bps "sum")

   :total-effect-ytd     (nb-col "Effect" "Total-Effect-ytd" 70 performance-attributes-bps"sum" )
   :xs-weight-ytd        (nb-col "Excess %" "Average-Excess-Weight-ytd" 70 round2pc "sum")
   :weight-ytd           (nb-col "Fund %" "Average-Fund-Weight-ytd" 70 round2pc "sum")
   :bm-weight-ytd        (nb-col "Index %" "Average-Index-Weight-ytd" 70 round2pc "sum")
   :contribution-ytd     (nb-col "Fund cont." "Fund-Contribution-ytd" 70 performance-attributes-bps "sum")
   :bm-contribution-ytd  (nb-col "Index cont." "Index-Contribution-ytd" 70 performance-attributes-bps "sum")

   :total-effect-pwtd     (nb-col "Effect" "Total-Effect-pwtd" 70 performance-attributes-bps "sum")
   :xs-weight-pwtd        (nb-col "Excess" "Average-Excess-Weight-pwtd" 70 round2pc "sum")
   :weight-pwtd           (nb-col "Fund" "Average-Fund-Weight-pwtd" 70 round2pc "sum")
   :bm-weight-pwtd        (nb-col "Index" "Average-Index-Weight-pwtd" 70 round2pc "sum")
   :contribution-pwtd     (nb-col "Fund cont." "Fund-Contribution-pwtd" 70 performance-attributes-bps "sum")
   :bm-contribution-pwtd  (nb-col "Index cont." "Index-Contribution-pwtd" 70 performance-attributes-bps "sum")

   :rating           (text-col "Rating" "Rating" 140)
   :rating-group     (text-col "Rating Group" "RatingGroup" 140)
   :code             (text-col "Code" "Code" 140)
   :ighy             (text-col "IGHY" "IGHY" 140)
   :invrtg           (text-col "Rating" "INVRTG" 140)
   :period           (text-col "Period" "Period" 140)
   :security         (text-col "Security" "Security" 140)
   :dummy            (text-col "Total" "dummy" 50)})


(defn sub-low-level-rating-score-to-string [x]
  (let [i (dec (js/parseInt x))]
    (if (<= 0 i 23)
      (nth ["AAA" "AA+" "AA" "AA-" "A+" "A" "A-" "BBB+" "BBB" "BBB-" "BB+" "BB" "BB-" "B+" "B" "B-" "CCC+" "CCC" "CCC-" "CC" "C" "D" "NM" "NR"] i)
      "NA")))

(defn low-level-rating-score-to-string
  [c]
  (if-let [x (cell-value c)]
    (sub-low-level-rating-score-to-string x)
    "NA"))

(defn breach-status-color
  "if status = 0 green background, if status = 1 orange (warning) background,if status = 2 (breach) red background,"
  [cell]
  (case (cell-value cell) 0 #js {:sx #js {:color "Chartreuse" :backgroundColor "Chartreuse" :textAlign "center"}} 1 #js {:sx #js {:color "DarkOrange" :backgroundColor "DarkOrange" :textAlign "center"}} 2 #js {:sx #js {:color "Crimson" :backgroundColor "Crimson" :textAlign "center"}} #js {}))

(defn breach-status-color-rules
  "if status = 0 green background, if status = 1 orange (warning) background,if status = 2 (breach) red background,"
  [cell]
  (case (cell-value cell) "Y" #js {:sx #js {:color "Chartreuse" :backgroundColor "Chartreuse" :textAlign "center"}} "N" #js {:sx #js {:color "Crimson" :backgroundColor "Crimson" :textAlign "center"}} #js {}))


(defn breach-status-color-true-false
  ""
  [cell]
  (case (cell-value cell) true #js {:sx #js {:color "Chartreuse" :backgroundColor "Chartreuse" :textAlign "center"}} false #js {:sx #js {:color "Crimson" :backgroundColor "Crimson" :textAlign "center"}}  #js {}))

(defn breach-status-color-is-100
  ""
  [cell]
  (case (cell-value cell) 100.0000 #js {:sx #js {:color "Chartreuse" :backgroundColor "Chartreuse" :textAlign "center"}}  #js {:sx #js {:color "Crimson" :backgroundColor "Crimson" :textAlign "center"}}))

(defn breach-status-color-attribution-scale
  ""
  [cell]
  (condp > (cell-value cell)
    1   #js {:sx #js {:color "Chartreuse" :backgroundColor "Chartreuse" :textAlign "center"}}
    10  #js {:sx #js {:color "DarkOrange" :backgroundColor "DarkOrange" :textAlign "center"}}
    999 #js {:sx #js {:color "Crimson" :backgroundColor "Crimson" :textAlign "center"}}
    #js {:sx #js {:color "darkmagenta" :backgroundColor "darkmagenta" :textAlign "center"}})
  )