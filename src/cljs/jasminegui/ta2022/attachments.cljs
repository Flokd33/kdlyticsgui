(ns jasminegui.ta2022.attachments
  (:require
    [cljs-drag-n-drop.core :as dnd]
    [jasminegui.tools :as t]
    [jasminegui.static :as static]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [re-com.core :refer [p v-box]]
    )

  )


(def default-message [p "Drag and drop files here (no directories!)..."])
(def drag-drop-file-name (r/atom default-message))

(def temporary-file-holder (atom nil))

(rf/reg-event-fx
  :ta2022/upload-file
  (fn [{:keys [db]} [_ req isin]]
    {:db                db
     :http-put-dispatch (update req :multipart-params conj ["isin" isin])}))

(rf/reg-event-fx
  :ta2022/get-attachments
  (fn [{:keys [db]} [_ isin]]
    (reset! drag-drop-file-name default-message)
    {
     :http-get-dispatch {:url (str static/server-address "trade-attachments?isin=" isin) :dispatch-key [:ta2022/trade-attachments]}}))

(rf/reg-event-fx
  :ta2022/upload-file-response
  (fn [{:keys [db]} [_ response]]
    {:fx [[:dispatch [:ta2022/get-attachments (:isin response)]]
          [:dispatch [:ta2022/close-modal]]]}))

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