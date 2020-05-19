(ns jasminegui.mount
  (:require
    [reagent.core :as r]
    [jasminegui.static :as static]
    [re-frame.core :as rf]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [jasminegui.tables :as tables]
    ;[re-pressed.core :as rp]
    )
  (:require-macros [cljs.core.async.macros :refer [go]])
  )


(def dev-server-address "http://localhost:3501/")
(def prod-server-address "http://iamlfilive:3501/")
(def server-address prod-server-address)              ;"http://localhost:3501/



(def default-db {:positions                                   []
                 :rating-to-score                             nil
                 :pivoted-positions                           []
                 :portfolios                                  []
                 :total-positions                             {}
                 :active-view                                 :home
                 :active-home                                 :summary
                 :qt-date                                     "undefined"

                 :single-portfolio-risk/display-style         "Tree"
                 :single-portfolio-risk/portfolio             "OGEMCORD"
                 :single-portfolio-risk/filter                {1 :region 2 :country 3 :issuer}
                 :single-portfolio-risk/hide-zero-holdings    true
                 :single-portfolio-risk/table-filter          []
                 :single-portfolio-risk/shortcut              1

                 :multiple-portfolio-risk/display-style       "Table"
                 :multiple-portfolio-risk/field-number        "One"
                 :multiple-portfolio-risk/field-one           :nav
                 :multiple-portfolio-risk/field-two           "None"
                 :multiple-portfolio-risk/selected-portfolios (set nil) ;["OGEMCORD"]
                 :multiple-portfolio-risk/filter              {1 :region 2 :country 3 :issuer}
                 :multiple-portfolio-risk/hide-zero-holdings    true
                 :multiple-portfolio-risk/shortcut            1

                 :portfolio-alignment/display-style           "Tree"
                 :portfolio-alignment/field                   :nav
                 :portfolio-alignment/filter                  {1 :region 2 :country 3 :issuer}
                 :portfolio-alignment/group                   :cembi
                 :portfolio-alignment/threshold               :quarter
                 :portfolio-alignment/shortcut                1

                 })

(rf/reg-event-db ::initialize-db (fn [_ _] default-db))
(doseq [k (keys default-db)] (rf/reg-sub k (fn [db] (k db))))


(defn first-level-sort [x]
  (case x
    "Cash"        "AAA"
    "Collateral"  "AAA"
    "Forwards"    "AAA"
    "Equities"    "AAA"
    x))

(defn add-total-line-to-pivot [pivoted-table portfolios]
  (let [total-line (merge
                     {:jpm-region           "Total"
                      :qt-jpm-sector        "Total"
                      :qt-risk-country-name "Total"
                      :TICKER               "Total"
                      :NAME                 "Total"
                      :description          "Total"
                      :isin                 "Total"
                      :qt-iam-int-lt-median-rating-score "Total"}
                     (into {} (for [p portfolios] [(keyword p) (reduce + (map (keyword p) pivoted-table))])))]
    (conj pivoted-table total-line)))


(rf/reg-sub
  :multiple-portfolio-risk/table
  (fn [db]
    (let [
          pivoted-positions (:pivoted-positions db)
          kselected-portfolios (mapv keyword (:multiple-portfolio-risk/selected-portfolios db))
          portfolios (:portfolios db)
          hide-zero-risk (:multiple-portfolio-risk/hide-zero-holdings db)
          display-key-one (:multiple-portfolio-risk/field-one db)
          is-tree (= (:multiple-portfolio-risk/display-style db) "Tree")
          risk-filter (:multiple-portfolio-risk/filter db)
          risk-choice-1 (if (not= "None" (risk-filter 1)) (risk-filter 1))
          risk-choice-2 (if (not= "None" (risk-filter 2)) (risk-filter 2))
          risk-choice-3 (if (not= "None" (risk-filter 3)) (risk-filter 3))
          grouping-columns (into [] (for [r (remove nil? [risk-choice-1 risk-choice-2 risk-choice-3 :name])] (tables/table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (map #(merge % ((keyword (get-in tables/table-columns [display-key-one :accessor])) %)) pivoted-positions)
          thfil (fn [line] (not (every? zero? (map line kselected-portfolios))))
          pivoted-data-hide-zero (if (and (not is-tree) hide-zero-risk) (filter thfil pivoted-data) pivoted-data)]
    (add-total-line-to-pivot (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-hide-zero) portfolios))))

(doseq [k [:active-view
           :active-home
           :positions
           :rating-to-score
           :pivoted-positions
           :total-positions
           :single-portfolio-risk/portfolio
           :single-portfolio-risk/display-style
           :single-portfolio-risk/hide-zero-holdings
           :single-portfolio-risk/table-filter
           :multiple-portfolio-risk/display-style
           :multiple-portfolio-risk/field-number
           :multiple-portfolio-risk/field-one
           :multiple-portfolio-risk/field-two
           :multiple-portfolio-risk/selected-portfolios
           :multiple-portfolio-risk/hide-zero-holdings
           :multiple-portfolio-risk/shortcut
           :portfolio-alignment/display-style
           :portfolio-alignment/field
           :portfolio-alignment/group
           :portfolio-alignment/threshold
           :portfolio-alignment/shortcut
           ]] (rf/reg-event-db k (fn [db [_ data]] (assoc db k data))))

(rf/reg-event-db
  :portfolios
  (fn [db [_ portfolios]]
      (assoc db :portfolios portfolios
                :multiple-portfolio-risk/selected-portfolios (set portfolios))))

(rf/reg-event-db
  :single-portfolio-risk/filter
  (fn [db [_ id f]] (assoc-in db [:single-portfolio-risk/filter id] f)))

(rf/reg-event-db
  :multiple-portfolio-risk/filter
  (fn [db [_ id f]] (assoc-in db [:multiple-portfolio-risk/filter id] f)))

(rf/reg-event-db
  :portfolio-alignment/filter
  (fn [db [_ id f]] (assoc-in db [:portfolio-alignment/filter id] f)))

(rf/reg-event-db
  :qt-date
  (fn [db [_ qt-date]] (assoc db :qt-date (clojure.string/replace qt-date "\"" ""))))

;THIS IS A DUMMY - IN PRACTICE WE'D DO MORE THINGS HERE
(rf/reg-event-db
  :single-portfolio-risk/shortcut
  (fn [db [_ snapshot]]
    (case snapshot
      1 (assoc db :single-portfolio-risk/shortcut snapshot)
      2 (assoc db :single-portfolio-risk/shortcut snapshot)
      3 (assoc db :single-portfolio-risk/shortcut snapshot)
      4 (assoc db :single-portfolio-risk/shortcut snapshot))))

(rf/reg-event-db
  :cycle-shortcut
  (fn [db [_ _ _]]
    (let [shortcut-key (keyword (str (name (:active-home db)) "-risk/shortcut"))
          shortcut-value (shortcut-key db)]
      (cond
        (< shortcut-value 4) (assoc db shortcut-key (inc shortcut-value))
        :else (assoc db shortcut-key 1)))))

(rf/reg-event-db
  :tree-table
  (fn [db [_ _ _]]
    (let [shortcut-key (keyword (str (name (:active-home db)) "-risk/display-style"))]
      (case (shortcut-key db)
        "Tree"  (assoc db shortcut-key "Table")
        "Table" (assoc db shortcut-key "Tree")))))

;;;;;;;;;;;;;;;;;;;;;;;
;;HTTP GET DEFINITION;;
;;;;;;;;;;;;;;;;;;;;;;;

(defn http-get-dispatch [request]
  (go (let [response (<! (http/get (:url request)))]
        (rf/dispatch (conj (:dispatch-key request)
                           (if (:kwk request)
                             (js->clj (js/JSON.parse (:body response)) :keywordize-keys true)
                             (:body response))))
        (if (:flag request) (rf/dispatch [(:flag request) (:flag-value request)])))))

(rf/reg-fx :http-get-dispatch http-get-dispatch)

(rf/reg-event-fx
  :get-positions
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "positions") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:positions]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-rating-to-score
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "rating-to-score") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:rating-to-score]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-portfolios
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "portfolios") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:portfolios]
                         :kwk          true}}))


(rf/reg-event-fx
  :get-pivoted-positions
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "pivoted-positions") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:pivoted-positions]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-total-positions
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "total-positions") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:total-positions]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-qt-date
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "qt-date") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:qt-date]
                         :kwk          false}}))







