(ns jasminegui.core
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [jasminegui.views :as views]
   [jasminegui.mount :as mount])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (r/render [views/main-panel]
            (.getElementById js/document "app")))

(defn init []
  (rf/dispatch-sync [::mount/initialize-db])
  (mount-root))

(rf/dispatch [:get-portfolios])
(rf/dispatch [:get-positions])
(rf/dispatch [:get-pivoted-positions])
(rf/dispatch [:get-total-positions])
(rf/dispatch [:get-rating-to-score])

