(ns jasminegui.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as dom]

   [re-frame.core :as rf]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [re-pressed.core :as rp]
   [jasminegui.views :as views]
   [jasminegui.mount :as mount])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (dom/render [views/main-panel]
            (.getElementById js/document "app")))

(defn init []
  (rf/dispatch-sync [::mount/initialize-db])
  (rf/dispatch-sync [::rp/add-keyboard-event-listener "keypress"])
  (mount-root))

(rf/dispatch [:get-portfolios])
(rf/dispatch [:get-positions])
(rf/dispatch [:get-pivoted-positions])
(rf/dispatch [:get-total-positions])
(rf/dispatch [:get-rating-to-score])
(rf/dispatch [:get-qt-date])
(rf/dispatch [:get-var-proxies])
(rf/dispatch [:get-var-dates])
(rf/dispatch [:get-var-data "OGEMCORD"])

;letter v or V, then t or T
(rf/dispatch [::rp/set-keypress-rules {:event-keys [[[:cycle-shortcut] [{:keyCode 86}] [{:keyCode 118}]]
                                                    [[:tree-table] [{:keyCode 84}] [{:keyCode 116}]]]}])

