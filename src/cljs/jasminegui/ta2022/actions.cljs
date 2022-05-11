(ns jasminegui.ta2022.actions
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                                 single-dropdown hyperlink alert-box md-circle-icon-button modal-panel
                                 input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
            [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
            [re-com.util :refer [px]]
            [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
            [goog.string :as gstring]
            [goog.string.format]
            [jasminegui.static :as static]
            [jasminegui.tools :as t]
            [jasminegui.ta2022.tables :as tatables]
            [jasminegui.ta2022.alerts :as taalerts]
            [jasminegui.ta2022.attachments :as attachments]
            )
  )

(def btc "btn btn-primary btn-block")

(rf/reg-event-fx
  :ta2022/post-main-table-data
  (fn [{:keys [db]} [_ analyst sector country portfolio]]
    {:db                db
     :http-post-dispatch {:url          (str static/server-address "ta2022-main-table-data")
                          :edn-params {:kind :main-table :analyst (if analyst analyst "All") :sector (if sector sector "All") :country (if country country "All") :portfolio (if portfolio portfolio "All")}
                          :dispatch-key [:ta2022/main-table-data]}}))

(rf/reg-event-fx
  :ta2022/post-journal-data
  (fn [{:keys [db]} [_]]
    {:db                db
     :http-post-dispatch {:url          (str static/server-address "ta2022-main-table-data")
                          :edn-params {:kind :journal}
                          :dispatch-key [:ta2022/journal-data]}}))

(rf/reg-event-fx
  :get-ta2022-trade-view-history
  (fn [{:keys [db]} [_ isin]]
    {:db db
     :http-get-dispatch {:url          (str static/server-address "ta2022-history?isin=" isin)
                         :dispatch-key [:ta2022/trade-history]}}))

(rf/reg-event-fx
  :get-ta2022-trade-view-position-and-performance-table
  (fn [{:keys [db]} [_ isin]]
    {:db db
     :http-get-dispatch {:url          (str static/server-address "ta2022-positions?isin=" isin)
                         :dispatch-key [:ta2022/trade-view-position-and-performance-table]}}))

(rf/reg-event-fx
  :ta2022/send-trade-to-test
  (fn [{:keys [db]} [_ trade-entry]]
    {:db db
     :http-post-dispatch {:url          (str static/server-address "ta2022-post-data")
                          :edn-params {:action :test-trade
                                       :trade-entry trade-entry}
                          :dispatch-key [:ta2022/post-test-result]}}))

(defn checknb [res k] (and res (some? (res k)) (number? (res k))))

(rf/reg-event-db
  :ta2022/post-test-result
  (fn [db [_ data]]
    (if data
      (let [oth (vals (get-in data [:other-alerts]))
            main-check-fn (fn [res] (and (not (get res :triggered))
                                         (checknb res :implied-price)
                                         (or
                                           (checknb res :latest-market-price)
                                           (and (checknb res :latest-market-price-1) (checknb res :latest-market-price-2) (checknb res :latest-market-spread)))))
            other-check-fn (fn [res] (and (some? (:latest-market-price res)) (number? (:latest-market-price res)) (not (get res :triggered))))
            implied-price-consistent? (if (and (main-check-fn (:relval-alert data)) (main-check-fn (:target-alert data)))
                                        (< (Math/abs (/ (- (get-in data [:relval-alert :implied-price]) (get-in data [:target-alert :implied-price]))
                                                   (get-in data [:target-alert :implied-price])))
                                           0.01))
            px (get (first (t/chainfilter {:ISIN (db :ta2022/trade-isin)} (db :quant-model/model-output))) :Used_Price)
            upside-vs-downside? (and (main-check-fn (:target-alert data))
                                     (main-check-fn (:review-alert data))
                                     (>= (/ (- (get-in data [:target-alert :implied-price]) px ) (- px (get-in data [:review-alert :implied-price]) )) 0.5))
            ]
        (-> db
            (assoc :ta2022/test-result data
                   :ta2022/can-morph (every? identity
                                             (concat
                                                    [(main-check-fn (:relval-alert data))
                                                     (main-check-fn (:target-alert data))
                                                     (main-check-fn (:review-alert data))
                                                     implied-price-consistent?
                                                     upside-vs-downside?
                                                     ]
                                                    (map other-check-fn oth)))
                   :ta2022/upside-vs-downside (/ (- (get-in data [:target-alert :implied-price]) px ) (- px (get-in data [:review-alert :implied-price]) ))
                   :ta2022/implied-price-difference (if (and (main-check-fn (:relval-alert data)) (main-check-fn (:target-alert data)))
                                                      (Math/abs (/ (- (get-in data [:relval-alert :implied-price]) (get-in data [:target-alert :implied-price]))
                                                                   (get-in data [:target-alert :implied-price])))))))
      (assoc db :ta2022/test-result nil :ta2022/can-morph false :ta2022/implied-price-difference nil))))

(rf/reg-event-fx
  :ta2022/post-save-result
  (fn [{:keys [db]} [_ result]]
    {:db                 (assoc db :ta2022/show-modal nil)
     :fx [[:dispatch [:get-ta2022-trade-view-history (db :ta2022/trade-isin)]]
          [:dispatch [:post-model-history-pricing :pricing [(db :ta2022/trade-isin)]]]
          [:dispatch [:get-ta2022-trade-view-position-and-performance-table (db :ta2022/trade-isin)]]]}))

(rf/reg-event-fx
  :ta2022/save-new-trade
  (fn [{:keys [db]} [_ last-leg-uuid exit-rationale trade-entry test-result]]
    {:db                 db
     :http-post-dispatch {:url          (str static/server-address "ta2022-post-data")
                          :edn-params   {:action        :save-trade
                                         :last-leg-uuid last-leg-uuid
                                         :exit-rationale exit-rationale
                                         :trade-entry   trade-entry
                                         :test-result   test-result}
                          :dispatch-key [:ta2022/post-save-result]}}))

(rf/reg-event-fx
  :ta2022/amend-trade
  (fn [{:keys [db]} [_ current-leg-uuid trade-entry test-result]]
    {:db                 db
     :http-post-dispatch {:url          (str static/server-address "ta2022-post-data")
                          :edn-params   {:action        :amend-trade
                                         :current-leg-uuid current-leg-uuid
                                         :trade-entry   trade-entry
                                         :test-result   test-result}
                          :dispatch-key [:ta2022/post-save-result]}}))

(rf/reg-event-fx
  :ta2022/close-trade
  (fn [{:keys [db]} [_ last-leg-uuid exit-rationale]]
    {:db                 db
     :http-post-dispatch {:url          (str static/server-address "ta2022-post-data")
                          :edn-params   {:action        :close-trade
                                         :last-leg-uuid last-leg-uuid
                                         :exit-rationale exit-rationale}
                          :dispatch-key [:ta2022/post-save-result]}}))

(rf/reg-event-fx
  :ta2022/get-attachments
  (fn [{:keys [db]} [_ isin]]
    (println isin)
    {:db db
     :http-get-dispatch {:url (str static/server-address "ta2022-trade-attachments?isin=" isin) :dispatch-key [:ta2022/trade-attachments]}}))

(rf/reg-event-fx
  :ta2022/go-to-active-trade
  (fn [{:keys [db]} [_ isin]]
    {:db (assoc db :ta2022/active-home :trade-view
                   :ta2022/trade-isin isin
                   :ta2022/trade-history nil)
     :fx [[:dispatch [:get-ta2022-trade-view-history isin]]
          [:dispatch [:post-model-history-pricing :pricing [isin]]]
          [:dispatch [:post-model-history-prediction :prediction [isin]]]
          [:dispatch [:get-ta2022-trade-view-position-and-performance-table isin]]
          [:dispatch [:ta2022/get-attachments isin]]]}))

(rf/reg-event-db :ta2022/close-modal (fn [db [_]] (assoc db :ta2022/show-modal nil :ta2022/test-result nil)))


(defn close-trade-modal []
  (let [exit-rationale (r/atom nil)
        last-leg-uuid (:ta2022.trade/uuid (last (:trades @(rf/subscribe [:ta2022/trade-history]))))]
    (fn []
      [v-box :width "850px" :height "300px" :gap "10px" :padding "20px"
       :children [[h-box :align :center :children [[title :label "Close trade" :level :level1] [gap :size "1"] [md-circle-icon-button :md-icon-name "zmdi-close" :on-click #(rf/dispatch [:ta2022/close-modal])]]]
                  [label :label "Exit rationale"] [input-textarea :model exit-rationale :status (if (zero? (count @exit-rationale)) :error) :on-change #(reset! exit-rationale %) :width "600px" :rows 5]
                  [line]
                  [h-box :gap "10px" :children [[button :class btc :label "Close trade" :on-click #(rf/dispatch [:ta2022/close-trade last-leg-uuid @exit-rationale])]
                                                [button :class btc :label "Cancel" :on-click #(rf/dispatch [:ta2022/close-modal])]]]
                  ]])))


(defn morph-or-amend-trade-modal [morph?]
  (let [last-trade (last (:trades @(rf/subscribe [:ta2022/trade-history])))
        exit-rationale (r/atom nil)
        trade-entry
        (if morph?
          (r/atom {:analyst         (:ta2022.trade/analyst last-trade)
                   :strategy        nil
                   :entry-rationale nil
                   :ISIN            @(rf/subscribe [:ta2022/trade-isin])
                   :relval-alert    (assoc taalerts/spread-alert-template :comparison "<" :bloomberg-request-security-1 (str @(rf/subscribe [:ta2022/trade-isin]) " Corp") :bloomberg-request-field-1 "Z_SPRD_MID" :operator "-" :bloomberg-request-security-2 "JBCDCBZW Index" :bloomberg-request-field-2 "PX_LAST")
                   :target-alert    (assoc taalerts/single-alert-template :comparison "<" :bloomberg-request-security-1 (str @(rf/subscribe [:ta2022/trade-isin]) " Corp") :bloomberg-request-field-1 "G_SPREAD_MID_CALC")
                   :review-alert    (assoc taalerts/single-alert-template :comparison ">" :bloomberg-request-security-1 (str @(rf/subscribe [:ta2022/trade-isin]) " Corp") :bloomberg-request-field-1 "G_SPREAD_MID_CALC")
                   :other-alerts    {}})
          (let [all-alerts (let [x (taalerts/trade->alerts last-trade (:alerts @(rf/subscribe [:ta2022/trade-history])))] (zipmap (map :ta2022.alert/uuid x) x))]
            (r/atom {:analyst         (:ta2022.trade/analyst last-trade)
                     :strategy        (:ta2022.trade/strategy last-trade)
                     :entry-rationale (:ta2022.trade/entry-rationale last-trade)
                     :ISIN            @(rf/subscribe [:ta2022/trade-isin])
                     :relval-alert    (taalerts/alert-from-backend (all-alerts (:ta2022.trade/relval-alert-uuid last-trade)))
                     :target-alert    (taalerts/alert-from-backend (all-alerts (:ta2022.trade/target-alert-uuid last-trade)))
                     :review-alert    (taalerts/alert-from-backend (all-alerts (:ta2022.trade/review-alert-uuid last-trade)))
                     :other-alerts    (into {} (for [[i u] (map-indexed vector (:ta2022.trade/other-alert-uuids last-trade))] [i (taalerts/alert-from-backend (all-alerts u))]))})))
        entry-rationale (r/cursor trade-entry [:entry-rationale])
        strategy (r/cursor trade-entry [:strategy])
        analyst (r/cursor trade-entry [:analyst])
        last-leg-uuid (:ta2022.trade/uuid last-trade)]
    (fn []
      [v-box :width "850px" :height "750px" :gap "10px" :padding "20px"
       :children [

                  [h-box :align :center :children [(if morph? [title :label (if last-leg-uuid "Morph trade" "New trade") :level :level1] [title :label "Amend latest trade" :level :level1]) [gap :size "1"] [md-circle-icon-button :md-icon-name "zmdi-close" :on-click #(rf/dispatch [:ta2022/close-modal])]]]
                  [gap :size "20px"]

                  (if (and morph? last-leg-uuid) [label :label "Exit rationale"])
                  (if (and morph? last-leg-uuid) [input-textarea :model exit-rationale :status (if (zero? (count @exit-rationale)) :error) :on-change #(reset! exit-rationale %) :width "600px" :rows 5])
                  [h-box :align :center :children [[label :width "125px" :label "New analyst"]
                                                   [single-dropdown :width "200px" :choices (for [k @(rf/subscribe [:analysts])] {:id k :label k}) :model analyst :on-change #(reset! analyst %)]]]
                  [h-box :align :center :children [[label :width "125px" :label "New strategy"]
                                                   [single-dropdown :width "200px" :choices tatables/strategy-choices :model strategy :on-change #(reset! strategy %)]]]
                  [label :label "New trade rationale"] [input-textarea :model entry-rationale :status (if (zero? (count @entry-rationale)) :error) :on-change #(reset! entry-rationale %) :width "600px" :rows 10]
                  [taalerts/trade-alert-input trade-entry]
                  (if-let [x @(rf/subscribe [:ta2022/implied-price-difference])] [label :label (str "Implied upside price difference (has to be <1%) " (gstring/format "%.1f%" (* 100 x)))])
                  (if (< @(rf/subscribe [:ta2022/upside-vs-downside]) 0.5) [label :label (str "Upside/downside too poor (has to be > 0.5) " (gstring/format "%.1f" @(rf/subscribe [:ta2022/upside-vs-downside])))])
                  [line]
                  [h-box :gap "10px" :children [[button :class btc :label "Test alerts" :on-click #(rf/dispatch [:ta2022/send-trade-to-test @trade-entry])]

                                                (if morph?
                                                  [button :class btc :label "Morph trade" :disabled? (not @(rf/subscribe [:ta2022/can-morph])) :on-click #(rf/dispatch [:ta2022/save-new-trade last-leg-uuid @exit-rationale @trade-entry @(rf/subscribe [:ta2022/test-result])])]
                                                  [button :class btc :label "Amend trade" :disabled? (not @(rf/subscribe [:ta2022/can-morph])) :on-click #(rf/dispatch [:ta2022/amend-trade last-leg-uuid @trade-entry @(rf/subscribe [:ta2022/test-result])])]
                                                  )

                                                [button :class btc :label "Cancel" :on-click #(do (rf/dispatch [:ta2022/test-result nil]) (rf/dispatch [:ta2022/close-modal]))]]]
                  ]]))
  )

(defn morph-trade-modal [] (morph-or-amend-trade-modal true))

(defn amend-latest-trade-modal [] (morph-or-amend-trade-modal false))

(defn modal-add-attachment [isin]
  (let [close-fn (fn []
                   (reset! attachments/temporary-file-holder nil)
                   (reset! attachments/drag-drop-file-name attachments/default-message)
                   (rf/dispatch [:ta2022/close-modal]))]
    (do
      (js/setTimeout #(attachments/drag-and-drop-subscribe!) 500) ;tricky and dirty but necessary because the div needs to exist first!!!
      [v-box :width "640px" :height "480px" :gap "10px" :padding "20px"
       :children [[h-box :align :center :children [[title :label "Add attachments" :level :level1]
                                                   [gap :size "1"]
                                                   [md-circle-icon-button :md-icon-name "zmdi-close" :on-click #(close-fn)]]]
                  [:div {:id "drag-and-drop-data-here"}
                   [box :width "100%" :height "200px" :style {:border "dashed 1px black" :background "gainsboro"} :child @attachments/drag-drop-file-name]]
                  [line]
                  [h-box :gap "10px" :children [[button :class btc :label "Upload" :on-click #(rf/dispatch [:ta2022/upload-file
                                                                                                            {:url              (str static/server-address "upload-attachment")
                                                                                                             :multipart-params @attachments/temporary-file-holder}
                                                                                                            :dispatch-key     [:ta2022/get-attachments]
                                                                                                            isin])]
                                                [button :class btc :label "Cancel" :on-click #(close-fn)]]]]])))
