(ns kdlyticsgui.core
  (:require
    [kdlyticsgui.views :as views]
    [kdlyticsgui.mount :as mount]

    [reagent.core :as r]
    [reagent.dom.client :as rdc]

    ;[reagent.dom :as dom]
    [re-frame.core :as rf]
    [re-pressed.core :as rp]
    ))

(defonce root (rdc/create-root (.getElementById js/document "app")
                               ))

(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (.render root  (r/as-element [(fn [] views/main-panel)])))

(defn init []
  (rf/dispatch-sync [::mount/initialize-db])
  ;(rf/dispatch-sync [::rp/add-keyboard-event-listener "keypress"])
  (mount-root))


;(rf/dispatch [:get-portfolios])
;(rf/dispatch [:get-portfolios-grp])
;(rf/dispatch [:get-rating-to-score])
;
;letter v or V, then t or T
;(rf/dispatch [::rp/set-keypress-rules {:event-keys [[[:cycle-shortcut] [{:keyCode 86}] [{:keyCode 118}]]
;                                                    [[:tree-table] [{:keyCode 84}] [{:keyCode 116}]]]}])

