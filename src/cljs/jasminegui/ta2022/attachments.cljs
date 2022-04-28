(ns jasminegui.ta2022.attachments
  (:require
    [reagent.core :as r]
    [reagent.dom :as rd]
    [re-frame.core :as rf]
    [cljs-drag-n-drop.core :as dnd]
    [jasminegui.tools :as t]
    )

  )


(def default-message [p "Drag and drop files here (no directories!)..."])
(def drag-drop-file-name (r/atom default-message))

(def temporary-file-holder (atom nil))

(rf/reg-event-fx
  :upload-file
  (fn [{:keys [db]} [_ req]]
    (let [trade (first (t/filterkey= :tradeanalyser.trade/id (keyword (db :active-trade)) (db :trade-database)))]
      {:db                db
       :http-put-dispatch (update req :multipart-params conj ["isin" (:tradeanalyser.trade/ISIN trade)])})))

(rf/reg-event-fx
  :received-attachment
  (fn [{:keys [db]} [_ req]]
    (let [trade (first (t/filterkey= :tradeanalyser.trade/id (keyword (:active-trade db)) (:trade-database db)))]
      (reset! drag-drop-file-name default-message)
      {:db                (assoc db :show-add-attachment-modal false)
       :http-get-dispatch [{:url (str static/server-address "trade-attachments?isin=" (:tradeanalyser.trade/ISIN trade)) :dispatch-key [:active-trade-attachments]}]
       })))

(defn drag-and-drop-subscribe! []
  (dnd/subscribe! (js/document.querySelector "div#drag-and-drop-data-here") :drag-and-drop-data-here
                  {:start (fn [e] )                         ;(println "d1 start")
                   :enter (fn [e] )                         ;(println "d1 enter")
                   :drop  (fn [e files]
                            ;(println "d1 drop")
                            (reset! drag-drop-file-name [v-box :children (into [] (for [file files] [p (str "Added " (aget file "name"))]))])
                            (reset! temporary-file-holder (into [] (for [f files] ["files" f]))))
                   :leave (fn [e] )                         ;(println "d1 leave")
                   :end   (fn [e] )}))                      ;(println "d1 end")