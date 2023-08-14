(ns kdlyticsgui.guitools
  (:require
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [kdlyticsgui.tools :as t]
    ;[jasminegui.static :as static]
    [clojure.set :as cset]
    [kdlyticsgui.mrttables :as mrt]
    [helix.core :refer [$ defnc]]
    ["@mui/material" :as mm :refer ( Switch)]
    [helix.hooks :refer [use-state use-effect use-memo]]
    ))



(defnc switch-helix
  [{:keys [checked-atom default-checked]}]
  (let [[checked setChecked] (use-state default-checked)
        x (use-effect [checked] (reset! checked-atom checked))]
    ($ Switch {:size "small" :checked checked :onChange (fn [e] (setChecked (aget e "target" "checked")))})))


(defn mrt-right-element-box-generic
  [id width title-str opts children]
  (let [show-element (r/atom true)]
    (fn [id width title-str opts children]                  ;see https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md need to repeat the arguments!
      [:div {:id id}
       [v-box :class "rightelement" :gap "20px" :width width
        :children (concat [[h-box :align :center :children (into [[title :label title-str :level :level1] [gap :size "1"]]
                                                                 (if (:show-hide opts) [($ switch-helix {:checked-atom show-element :default-checked (not (:hide-by-default opts))})]))]]
                          (if @show-element children))]])))

(defn mrt-element-box-generic
  [id width title-str opts children]
  (let [show-element (r/atom true)]
    (fn [id width title-str opts children]                  ;see https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md need to repeat the arguments!
      [:div {:id id}
       [v-box :class "element" :align-self :center :justify :center :gap "20px" :width width
        :children (concat [[h-box :gap "10px" :align :center
                            :children (conj [[title :label title-str :level :level1] [gap :size "1"]]
                                            ;(if (:show-hide opts) [($ switch-helix {:checked-atom show-element :default-checked (not (:hide-by-default opts))})])

                                            )]]
                          (if @show-element children))]])))

(defn mrt-element-box-generic-old
  [id width title-str opts children]
  (let [show-element (r/atom true)]
    (fn [id width title-str opts children]                  ;see https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md need to repeat the arguments!
      [:div {:id id}
       [v-box :class "element" :align-self :center :justify :center :gap "20px" :width width
        :children (concat [[h-box :gap "10px" :align :center
                            :children (concat [[title :label title-str :level :level1]
                                               [gap :size "1"]]
                                              (if (:shortcuts opts)
                                                (mapv (fn [i] [md-circle-icon-button :md-icon-name (str "zmdi-collection-item-" i) :tooltip (str "Saved view " i) :tooltip-position :above-center :class (if (= @(rf/subscribe [(:shortcuts opts)]) i) "active" "default") :on-click #(rf/dispatch [(:shortcuts opts) i])])
                                                      (range 1 5)))
                                              (if (:show-hide opts)
                                                [($ switch-helix {:checked-atom show-element :default-checked (not (:hide-by-default opts))})]))]]
                          (if @show-element children))]])))

(defn element-box-generic
  "opts will have either :download-table or :on-click-action, and can have target-id
  "
  ;TODO DIV ID MAY OR MAY NOT BE THERE
  ;NEED ABILITY TO ADD EXTRA TABLE DOWNLOAD (FULL OR VIEW)
  [id width title-str opts children]
  [:div {:id id}
   [v-box :class "element" :align-self :center :justify :center :gap "20px" :width width
    :children (concat [[h-box :gap "10px" :align :center
                        :children (concat [[title :label title-str :level :level1]
                                           [gap :size "1"]]
                                          (if (:shortcuts opts)
                                            (mapv (fn [i] [md-circle-icon-button :md-icon-name (str "zmdi-collection-item-" i) :tooltip (str "Saved view " i) :tooltip-position :above-center :class (if (= @(rf/subscribe [(:shortcuts opts)]) i) "active" "default") :on-click #(rf/dispatch [(:shortcuts opts) i])])
                                                  (range 1 5)))
                                          (if-not (:no-icons opts)
                                            [
                                             ;[md-circle-icon-button :md-icon-name "zmdi-camera" :tooltip "Open image in new tab" :tooltip-position :above-center :on-click (t/open-image-in-new-tab (if-let [tid (:target-id opts)] tid id))]
                                             ;[md-circle-icon-button :md-icon-name "zmdi-image" :tooltip "Save table as image" :tooltip-position :above-center :on-click (t/save-image (if-let [tid (:target-id opts)] tid id))
                                             ; ;(do (t/save-image (if-let [tid (:target-id opts)] tid "scorecard-risk")) (t/save-image (if-let [tid (:target-id opts)] tid "scorecard-risk-pivot")))
                                             ; ]
                                             ;[md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download table" :tooltip-position :above-center :on-click (if-let [ocl (:on-click-action opts)] ocl #(t/csv-link (:download-table opts) (str id "-" (t/gdate->yyyyMMdd (cljs-time.core/today)))))]
                                             ]))]]
                      children)]])

;(defn element-box-generic-new
;  "opts will have either :download-table-fn or :on-click-action, and can have target-id
;  it can also have :cols and :shortcuts and :no-icons"
;  [id width title-str opts children]
;  [:div {:id id}
;   [v-box :class "element" :align-self :center :justify :center :gap "20px" :width width
;    :children (concat [[h-box :gap "10px" :align :center
;                        :children (concat [[title :label title-str :level :level1]
;                                           [gap :size "1"]]
;                                          (if (:shortcuts opts)
;                                            (mapv (fn [i] [md-circle-icon-button :md-icon-name (str "zmdi-collection-item-" i) :tooltip (str "Saved view " i) :tooltip-position :above-center :class (if (= @(rf/subscribe [(:shortcuts opts)]) i) "active" "default") :on-click #(rf/dispatch [(:shortcuts opts) i])])
;                                                  (range 1 5)))
;                                          (if-not (:no-icons opts)
;                                            [[md-circle-icon-button :md-icon-name "zmdi-camera" :tooltip "Open image in new tab" :tooltip-position :above-center :on-click (t/open-image-in-new-tab (if-let [tid (:target-id opts)] tid id))]
;                                             [md-circle-icon-button :md-icon-name "zmdi-image" :tooltip "Save table as image" :tooltip-position :above-center :on-click (t/save-image (if-let [tid (:target-id opts)] tid id))]
;                                             (if-let [ocl (:on-click-action opts)] [md-circle-icon-button :md-icon-name "zmdi-filter-list" :tooltip "Download current view" :tooltip-position :above-center :on-click ocl])
;                                             (if-let [x (:download-table-fn opts)] [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download table" :tooltip-position :above-center :on-click (if-let [c (:cols opts)] #(t/csv-link (x) (str id "-" (t/gdate->yyyyMMdd (cljs-time.core/today))) c) #(t/csv-link (x) (str id "-" (t/gdate->yyyyMMdd (cljs-time.core/today)))))])]))]]
;                      children)]])

(defn element-box
  ([id width title-str download-table children] (element-box-generic id width title-str {:download-table download-table} children))
  ([id width title-str download-table on-click-action children] (element-box-generic id width title-str {:on-click-action on-click-action} children)))

;(defn mrt-element-box
;  ([id width title-str children] (mrt-element-box id width title-str  children))
;  ([id width title-str on-click-action children] (mrt-element-box-generic id width title-str {:on-click-action on-click-action} children)))


;(defn element-box-generic-with-cols
;  "opts will have either :download-table or :on-click-action, and can have target-id"
;  [id width title-str opts children cols]
;  [:div {:id id}
;   [v-box :class "element" :align-self :center :justify :center :gap "20px" :width width
;    :children (concat [[h-box :gap "10px" :align :center
;                        :children (concat [[title :label title-str :level :level1]
;                                           [gap :size "1"]]
;                                          (if (:shortcuts opts)
;                                            (mapv (fn [i] [md-circle-icon-button :md-icon-name (str "zmdi-collection-item-" i) :class (if (= @(rf/subscribe [key]) i) "active" "default") :on-click #(rf/dispatch [key i])])
;                                                  (range 1 5)))
;                                          [[md-circle-icon-button :md-icon-name "zmdi-camera" :tooltip "Open image in new tab" :tooltip-position :above-center :on-click (t/open-image-in-new-tab (if-let [tid (:target-id opts)] tid id))]
;                                           [md-circle-icon-button :md-icon-name "zmdi-image" :tooltip "Save table as image" :tooltip-position :above-center :on-click (t/save-image (if-let [tid (:target-id opts)] tid id))]
;                                           [md-circle-icon-button :md-icon-name "zmdi-download" :tooltip "Download table" :tooltip-position :above-center :on-click (if-let [ocl (:on-click-action opts)] ocl #(t/csv-link (:download-table opts) (str id "-" (t/gdate->yyyyMMdd (cljs-time.core/today))) cols))]])]]
;                      children)]])

;(defn element-box-with-cols
;  ([id width title-str download-table children cols] (element-box-generic-with-cols id width title-str {:download-table download-table} children cols))
;  ([id width title-str download-table on-click-action children cols] (element-box-generic-with-cols id width title-str {:on-click-action on-click-action} children cols)))

(defn portfolio-dropdown-selector
  ([re-frame-db-key] (portfolio-dropdown-selector re-frame-db-key re-frame-db-key))
  ([re-frame-db-key on-change-key-event]
   [single-dropdown :width "125px" :filter-box? true :model (rf/subscribe [re-frame-db-key])
    :choices (map (if @(rf/subscribe [:rot13]) #(clojure.set/rename-keys % {:labelrot13 :label}) identity) @(rf/subscribe [:portfolio-dropdown-map]))
    :on-change #(rf/dispatch [on-change-key-event %])]))

(rf/reg-event-db
  :quant-model-new-bond/save-bond-response
  (fn [db [_  data]]
    (if (:success data)
      (assoc db :quant-model/new-bond-entry nil :quant-model/new-bond-saved-message (:message data))
      (assoc db :quant-model/new-bond-saved-message (:message data)))))

(defn update-js-map
  ([m k v]
   (clj->js (assoc (js->clj m) k v)))
  ([m k1 v1 k2 v2]
   (clj->js (assoc (js->clj m) k1 v1 k2 v2))))

(rf/reg-event-db
  :update-table-js-state
  (fn [db [_ table item value]]
    (update db (keyword table "mrt-table-state") #(clj->js
                                                    (if
                                                      (= item "columnFilters")
                                                      (assoc (js->clj %) item value)
                                                      (assoc (js->clj %) item value "expanded" "dummy:"))))))


(rf/reg-event-db
  :tree-table-toggle
  (fn [db [_  tbl-kw-str display-style]]
    (let [grouping (if (clojure.string/includes? tbl-kw-str "attribution")
                     (conj (map :accessorKey (mapv mrt/attribution-table-columns (distinct (remove #{"None"} (vals (get db (keyword tbl-kw-str "filter"))))))) "dummy")
                     (conj (map :accessorKey (mapv mrt/risk-table-columns (distinct (remove #{"None"} (vals (get db (keyword tbl-kw-str "filter"))))))) "dummy"))]
      (if (clojure.string/includes? tbl-kw-str "attribution")
        (-> db
            (assoc (keyword tbl-kw-str "display-style") display-style)
            (update (keyword tbl-kw-str "mrt-table-state") #(if (= display-style "Table") (update-js-map % "grouping" [] "expanded" {}) (update-js-map % "grouping" grouping "expanded" {"dummy:" true}))))
        (-> db
            (assoc (keyword tbl-kw-str "display-style") display-style)
            (assoc (keyword tbl-kw-str "hide-zero-holdings") (= display-style "Table"))
            (update (keyword tbl-kw-str "mrt-table-state") #(if (= display-style "Table") (update-js-map % "grouping" [] "expanded" {}) (update-js-map % "grouping" grouping "expanded" {"dummy:" true}))))))))

(rf/reg-event-db
  :tree-table-toggle-alignment
  (fn [db [_  tbl-kw-str display-style is-equity?]]
    (let [;is-equity? (if (some #{@(rf/subscribe [:portfolio-alignment/group])} [:equity-tc :equity-eme :equity-india :equity-esg]) true false)
          risk-choices (vec (distinct (remove #{"None"} (vals (get db (keyword tbl-kw-str "filter"))))))
          risk-choices-clean (if is-equity? (if (= (some #{:sector} risk-choices) :sector) (vec (concat (conj (remove #(= % :sector) risk-choices) :sector-gics)) ) risk-choices) risk-choices)
          grouping (conj (map :accessorKey (mapv mrt/risk-table-columns risk-choices-clean)) "dummy")]
      ;(println is-equity?)
      ;(println grouping)
      (-> db
          (assoc (keyword tbl-kw-str "display-style") display-style)
          (update (keyword tbl-kw-str "mrt-table-state") #(if (= display-style "Table") (update-js-map % "grouping" [] "expanded" {}) (update-js-map % "grouping" grouping "expanded" {"dummy:" true})))))))

(rf/reg-event-db
  :tree-table-toggle-esg
  (fn [db [_  display-style]]
    (let [grouping (if (= display-style "sector") "sector" "country")]
      (-> db
          (assoc :esg/data-tree (not (= display-style "no")))
          (update :esg/mrt-table-state #(if (= display-style "no") (update-js-map % "grouping" [] "expanded" {}) (update-js-map % "grouping" (js->clj [grouping]) "expanded" {})))
          ))))

(rf/reg-event-db
  :tree-table-toggle-ta
  (fn [db [_  grp]]
    (-> db
        ;(assoc :ta2022/main-table-pivot display-style)
        (update :ta-trade-view/mrt-table-state #(if (= grp "No") (update-js-map % "grouping" [] "expanded" {}) (update-js-map % "grouping" (js->clj ["dummy"]) "expanded" {"dummy:" true})))
        )))


;(rf/reg-event-db
;  :tree-table-toggle-ta-col
;  (fn [db [_  view]]
;    (let [view2 (if (= view "Distances") {"country" false}
;                                       []
;                                       )]
;
;      (-> db
;          (update :ta-trade-view/mrt-table-state #(update-js-map % "columnVisibility" #js {"Country" false}))
;          ))))



;(defn tree-table-selector
;  [table-keyword-string]
;  [single-dropdown
;   :width "150px"
;   :model (rf/subscribe [(keyword table-keyword-string "display-style")])
;   :choices static/tree-table-choices
;   :on-change #(rf/dispatch [:tree-table-toggle table-keyword-string %])])

(rf/reg-event-db
  :filtering-row-change
  (fn [db [_ risk-filter-key risk-filter-nb value]]
    (let [tbl-kw-str (namespace risk-filter-key)
          rfv (assoc (get db risk-filter-key) risk-filter-nb value)
          grouping (if (clojure.string/includes? tbl-kw-str "attribution")
                     (conj (map :accessorKey (mapv mrt/attribution-table-columns (distinct (remove #{"None"} (vals rfv))))) "dummy")
                     (conj (map :accessorKey (mapv mrt/risk-table-columns (distinct (remove #{"None"} (vals rfv))))) "dummy"))]
      (-> db
          (assoc risk-filter-key rfv)
          (update (keyword tbl-kw-str "mrt-table-state") #(if (= (db (keyword tbl-kw-str "display-style")) "Table") (identity %) (update-js-map % "grouping" grouping "expanded" {"dummy:" true})))
          (assoc :portfolio-history/data [])))))

(defn redesign-table!
  [tbl table? grouping extra-pins]
  (let [all-cols (js->clj (.map (.filter (.getAllColumns tbl) #(not= (.-id %) "mrt-row-expand")) (fn [c] (.map (.-columns c) (fn [sc] (.-id sc))))))
        additional-cols (remove (set (concat grouping extra-pins)) (first all-cols))]
    (.setGrouping tbl (if table? #js [] (clj->js grouping)))
    (.setColumnPinning tbl (clj->js {:left (concat grouping extra-pins (if table? [] ["mrt-row-expand"])) :right []}))
    (.setExpanded tbl #js {"dummy:" true})
    (.setPagination tbl #js {"pageSize" (if table? 15 50)})
    (.setSorting tbl (clj->js (mapv (fn [g] {"id" g "desc" false}) ((if table? identity rest) (concat grouping extra-pins))))) ;we do not need to sort by dummy
    (.setColumnVisibility tbl (if table? #js {"dummy" false "mrt-row-expand" false} #js {"dummy" true "mrt-row-expand" true}))
    (.setColumnOrder tbl (clj->js (concat grouping extra-pins (if table? [] ["mrt-row-expand"]) (apply concat (rest all-cols)) additional-cols)))))

(rf/reg-event-fx
  :filtering-row-change-managed
  (fn [{:keys [db]} [_ risk-filter-key risk-filter-nb value tbl]]
    (let [tbl-kw-str (namespace risk-filter-key)
          rfv (assoc (get db risk-filter-key) risk-filter-nb value)
          grouping (if (clojure.string/includes? tbl-kw-str "attribution")
                     (conj (map :accessorKey (mapv mrt/attribution-table-columns (distinct (remove #{"None"} (vals rfv))))) "dummy")
                     (conj (map :accessorKey (mapv mrt/risk-table-columns (distinct (remove #{"None"} (vals rfv))))) "dummy"))
          ;table? (= (db (keyword tbl-kw-str "display-style")) "Table")
          ;extra-pins (if (clojure.string/includes? tbl-kw-str "attribution") [] [:NAME])
          ]
      ;(redesign-table! tbl table? grouping extra-pins)
      {:db (-> db
               (assoc risk-filter-key rfv)
               (update (keyword tbl-kw-str "mrt-table-state") #(if (= (db (keyword tbl-kw-str "display-style")) "Table") (identity %) (update-js-map % "grouping" grouping "expanded" {"dummy:" true})))
               (assoc :portfolio-history/data []))
       :fx [(if (clojure.string/includes? tbl-kw-str "attribution") [:dispatch [:redesign-single-attribution-table tbl]] [:dispatch [:redesign-single-portfolio-table tbl]])]
       })))

(rf/reg-event-fx
  :tree-table-toggle-managed
  (fn [{:keys [db]} [_ tbl-kw-str display-style tbl]]
    (let [grouping (if (clojure.string/includes? tbl-kw-str "attribution")
                     (conj (map :accessorKey (mapv mrt/attribution-table-columns (distinct (remove #{"None"} (vals (get db (keyword tbl-kw-str "filter"))))))) "dummy")
                     (conj (map :accessorKey (mapv mrt/risk-table-columns (distinct (remove #{"None"} (vals (get db (keyword tbl-kw-str "filter"))))))) "dummy"))
          extra-pins (if (clojure.string/includes? tbl-kw-str "attribution") [] [:NAME])]
      ;(redesign-table! tbl (= display-style "Table") grouping extra-pins)
      {:db (if (clojure.string/includes? tbl-kw-str "attribution")
             (-> db
                 (assoc (keyword tbl-kw-str "display-style") display-style)
                 (update (keyword tbl-kw-str "mrt-table-state") #(if (= display-style "Table") (update-js-map % "grouping" [] "expanded" {}) (update-js-map % "grouping" grouping "expanded" {"dummy:" true}))))
             (-> db
                 (assoc (keyword tbl-kw-str "display-style") display-style)
                 (assoc (keyword tbl-kw-str "hide-zero-holdings") (= display-style "Table"))
                 (update (keyword tbl-kw-str "mrt-table-state") #(if (= display-style "Table") (update-js-map % "grouping" [] "expanded" {}) (update-js-map % "grouping" grouping "expanded" {"dummy:" true})))))
       :fx [(if (clojure.string/includes? tbl-kw-str "attribution") [:dispatch [:redesign-single-attribution-table tbl]] [:dispatch [:redesign-single-portfolio-table tbl]])]
       })))

;(defn filtering-row
;  "key can be equal to :single-portfolio-risk/filter"
;  [key]
;  (let [risk-filter (rf/subscribe [key])]
;    [h-box :gap "10px" :align :center
;     :children (into [] (for [i (range 1 4)]
;                          ^{:key (str "filtering" i)}
;                          [single-dropdown
;                           :width "125px"
;                           :model (r/cursor risk-filter [i])
;                           :choices (if (.includes ^string (str key) "attribution") static/attribution-choice-map static/risk-choice-map)
;                           :disabled? (and (= i 3) (some #{key} [:portfolio-history/filter :attribution-history/filter]))
;                           :on-change #(rf/dispatch [:filtering-row-change key i %])]))]))
;
;(defn filtering-row-managed-table
;  "key can be equal to :single-portfolio-risk/filter"
;  [key table-ref]
;  (let [risk-filter (rf/subscribe [key])]
;    [h-box :gap "10px" :align :center
;     :children (into [] (for [i (range 1 4)]
;                          ^{:key (str "filtering" i)}
;                          [single-dropdown
;                           :width "125px"
;                           :model (r/cursor risk-filter [i])
;                           :choices (if (.includes ^string (str key) "attribution") static/attribution-choice-map static/risk-choice-map)
;                           :disabled? (and (= i 3) (some #{key} [:portfolio-history/filter :attribution-history/filter]))
;                           :on-change #(rf/dispatch [:filtering-row-change-managed key i % (.-current table-ref)])]))]))
;
;(defn tree-table-selector-managed-table
;  [table-keyword-string table-ref]
;  [single-dropdown
;   :width "150px"
;   :model (rf/subscribe [(keyword table-keyword-string "display-style")])
;   :choices static/tree-table-choices
;   :on-change #(rf/dispatch [:tree-table-toggle-managed table-keyword-string % (.-current table-ref)])])

(rf/reg-event-db
  :redesign-single-portfolio-table
  (fn [db [_ tbl]]
    (redesign-table! tbl
                     (= (db :single-portfolio-risk/display-style) "Table")
                     (conj (map :accessorKey (mapv mrt/risk-table-columns (distinct (remove #{"None"} (vals (db :single-portfolio-risk/filter)))))) "dummy")
                     [:NAME])
    db))

(rf/reg-event-db
  :redesign-single-attribution-table
  (fn [db [_ tbl]]
    (redesign-table! tbl
                     (= (db :single-portfolio-attribution/display-style) "Table")
                     (conj (map :accessorKey (mapv mrt/attribution-table-columns (distinct (remove #{"None"} (vals (db :single-portfolio-attribution/filter)))))) "dummy")
                     [:Security])
    db))

(rf/reg-event-fx
  :single-portfolio-risk/shortcut
  (fn [{:keys [db]} [_ snapshot tbl]]
    (let [shortcuts [{:empty 0}                             ;this is snapshot 0
                     {:display-style "Table" :hide-zero-holdings true  :filter {1 :region 2 :country 3 :issuer} :mrt-table-state #js {"columnFilters" #js [] "grouping" #js [] "expanded" #js {}}}
                     {:display-style "Tree"  :hide-zero-holdings false :filter {1 :country 2 :sector 3 "None"}  :mrt-table-state #js {"columnFilters" #js [] "grouping" #js ["dummy" "qt-risk-country-name" "qt-jpm-sector"] "expanded" #js {"dummy:" true}}}
                     {:display-style "Tree"  :hide-zero-holdings false :filter {1 :sector 2 :country 3 "None"}  :mrt-table-state #js {"columnFilters" #js [] "grouping" #js ["dummy" "qt-jpm-sector" "qt-risk-country-name"] "expanded" #js {"dummy:" true}}}
                     {:display-style "Tree"  :hide-zero-holdings false :filter {1 :sector 2 :country 3 :issuer} :mrt-table-state #js {"columnFilters" #js [] "grouping" #js ["dummy" "qt-jpm-sector" "qt-risk-country-name" "TICKER"] "expanded" #js {"dummy:" true}}}]]
      {:db (reduce-kv #(assoc %1 (keyword "single-portfolio-risk" (name %2)) %3) db (assoc (nth shortcuts snapshot) "shortcut" snapshot))
       :fx [[:dispatch [:redesign-single-portfolio-table tbl]]]})))

(rf/reg-event-fx
  :single-portfolio-attribution/shortcut
  (fn [{:keys [db]} [_ snapshot tbl]]
    (let [shortcuts [{:empty 0}                             ;this is snapshot 0
                     {:display-style "Tree" :filter {1 :region 2 :country 3 :issuer} :mrt-table-state #js {"columnFilters" #js [] "grouping" #js ["dummy" "Region" "Country" "Issuer"] "expanded" #js {"dummy:" true}}}
                     {:display-style "Tree" :filter {1 :country 2 :sector 3 :issuer} :mrt-table-state #js {"columnFilters" #js [] "grouping" #js ["dummy" "Region" "Sector" "Issuer"] "expanded" #js {"dummy:" true}}}
                     {:display-style "Tree" :filter {1 :sector 2 :country 3 :issuer} :mrt-table-state #js {"columnFilters" #js [] "grouping" #js ["dummy" "Sector" "Country" "Issuer"] "expanded" #js {"dummy:" true}}}
                     {:display-style "Tree" :filter {1 :issuer 2 "None" 3 "None"}    :mrt-table-state #js {"columnFilters" #js [] "grouping" #js ["dummy" "Issuer"] "expanded" #js {"dummy:" true}}}]]
      {:db (reduce-kv #(assoc %1 (keyword "single-portfolio-attribution" (name %2)) %3) db (assoc (nth shortcuts snapshot) "shortcut" snapshot))
       :fx [[:dispatch [:redesign-single-attribution-table tbl]]]})))


(defn left-nav-bar
  [choices navigation-key]
  [v-box :gap "20px" :class "leftnavbar"
   :children (into []
                   (for [item choices]
                     ^{:key item}
                     [button
                      :class (str "btn btn-primary btn-block" (if (= @(rf/subscribe [navigation-key]) (:code item)) " active"))
                      :label (:name item)
                      :on-click #(rf/dispatch [navigation-key (:code item)])]))])

;(defn portfolio-group-selector
;  "Usage: [portfolio-group-selector :stresstest/selected-portfolios [:dummies]]"
;  [selected-portfolios-key excluded-groups-seq]
;  (let [selected-portfolios (rf/subscribe [selected-portfolios-key])
;        toggle-portfolios (fn [setseqp] (if (cset/subset? setseqp @selected-portfolios) (cset/difference @selected-portfolios setseqp) (cset/union @selected-portfolios setseqp)))
;        groups (t/chainfilter {:id #(not (some #{%} excluded-groups-seq))} static/portfolio-alignment-groups)
;        all-portfolios-set (set (mapcat :portfolios groups))
;        all-portfolios-set-x-model  (set (mapcat :portfolios (t/chainfilter {:id #(not (some #{%} [:models :dummies]))} static/portfolio-alignment-groups)))
;        all-emcd (disj (set (mapcat :portfolios (t/chainfilter {:id #(not (some #{%} [:models :dummies :hcd :blend :dm]))} static/portfolio-alignment-groups))) "ITLXEMD4")
;        rot13? @(rf/subscribe [:rot13])]
;    ;(println static/portfolio-alignment-groups)
;    [h-box :gap "5px"
;     :children (into [[title :label "Portfolios:" :level :level3]
;                      [v-box :gap "2px" :children (remove nil? [(if-not (some #{:models} excluded-groups-seq) [button :style {:width "100px"} :label "EMCD USD" :on-click #(rf/dispatch [selected-portfolios-key all-emcd])])
;                                                                [button :style {:width "100px"} :label "All" :on-click #(rf/dispatch [selected-portfolios-key all-portfolios-set])]
;                                                                [button :style {:width "100px"} :label "None" :on-click #(rf/dispatch [selected-portfolios-key #{}])]])]]
;                     (for [line groups]
;                       (let [possible-portfolios (:portfolios line)]
;                         ^{:key (first possible-portfolios)}                           ;this is so React doesn't get confused by the for loop
;                         [v-box :gap "2px" :children
;                          [[button :style {:width "125px"} :label ((if rot13? t/rot13 identity) (:label line)) :on-click #(rf/dispatch [selected-portfolios-key (toggle-portfolios (set possible-portfolios))])]
;                           [selection-list :width "125px" :model selected-portfolios :choices (mapv (fn [p] {:id p :label ((if rot13? t/rot13 identity) p)}) possible-portfolios) :on-change #(rf/dispatch [selected-portfolios-key %])]]])))]))