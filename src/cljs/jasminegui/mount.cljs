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



(def default-db {
                 ;data
                 :positions                                   []
                 :rating-to-score                             nil
                 :pivoted-positions                           []
                 :portfolios                                  []
                 :total-positions                             {}
                 :qt-date                                     "undefined"
                 :attribution-date                            "undefined"

                 ;navigation
                 :active-view                                 :home
                 :active-home                                 :summary
                 :active-var                                  :overview
                 :active-attribution                          :summary
                 :success-modal                               {:show false :on-close nil :response nil}
                 :show-mounting-modal                         true

                 ;single-portfolio view
                 :single-portfolio-risk/display-style         "Tree"
                 :single-portfolio-risk/portfolio             "OGEMCORD"
                 :single-portfolio-risk/filter                {1 :region 2 :country 3 :issuer}
                 :single-portfolio-risk/hide-zero-holdings    true
                 :single-portfolio-risk/table-filter          []
                 :single-portfolio-risk/shortcut              1

                 ;multiple-portfolio view
                 :multiple-portfolio-risk/display-style       "Table"
                 :multiple-portfolio-risk/field-number        "One"
                 :multiple-portfolio-risk/field-one           :nav
                 :multiple-portfolio-risk/field-two           "None"
                 :multiple-portfolio-risk/selected-portfolios (set nil) ;["OGEMCORD"]
                 :multiple-portfolio-risk/filter              {1 :region 2 :country 3 :issuer}
                 :multiple-portfolio-risk/hide-zero-holdings    true
                 :multiple-portfolio-risk/shortcut            1
                 :multiple-portfolio-risk/table-filter          []

                 ;portfolio-alignment-view
                 :portfolio-alignment/display-style           "Tree"
                 :portfolio-alignment/field                   :nav
                 :portfolio-alignment/filter                  {1 :region 2 :country 3 :issuer}
                 :portfolio-alignment/group                   :cembi
                 :portfolio-alignment/threshold               :quarter
                 :portfolio-alignment/shortcut                1
                 :portfolio-alignment/table-filter          []

                 ;var view
                 :var/portfolio                              "OGEMCORD"
                 :var/result                                 nil
                 :var/proxies                                nil
                 :var/history                                nil
                 :var/data                                   nil
                 :var/dates                                  nil
                 :var/chart-period                          :daily-3y

                 ;trade history
                 :trade-history/active-bond                  nil
                 :trade-history/history                      nil

                 ;single-portfolio attribution
                 :single-portfolio-attribution/display-style         "Tree"
                 :single-portfolio-attribution/portfolio             "OGEMCORD"
                 :single-portfolio-attribution/filter                {1 :region 2 :country 3 :issuer}
                 :single-portfolio-attribution/period               "ytd"
                 :single-portfolio-attribution/table-filter          []
                 :single-portfolio-attribution/shortcut              1
                 :single-portfolio-attribution/table                  []

                 ;multiple-portfolio attribution
                 :multiple-portfolio-attribution/display-style       "Tree"
                 :multiple-portfolio-attribution/field-number        "One"
                 :multiple-portfolio-attribution/period               "ytd"
                 :multiple-portfolio-attribution/field-one           :total-effect
                 :multiple-portfolio-attribution/field-two           "None"
                 :multiple-portfolio-attribution/selected-portfolios (set nil) ;["OGEMCORD"]
                 :multiple-portfolio-attribution/filter              {1 :region 2 :country 3 :issuer}
                 :multiple-portfolio-attribution/shortcut            1
                 :multiple-portfolio-attribution/table-filter          []
                 :multiple-portfolio-attribution/table                []

                 :attribution/summary                                 []

                 :single-bond-trade-history/data                                 []
                 :single-bond-trade-history/flat-data                 []
                 :single-bond-trade-history/bond                      nil
                 :single-bond-trade-history/show-modal                false
                 :single-bond-trade-history/show-flat-modal           false
                 :single-bond-trade-history/show-throbber             true




                 })

(rf/reg-event-db ::initialize-db (fn [_ _] default-db))
(doseq [k (keys default-db)] (rf/reg-sub k (fn [db] (k db))))


(defn first-level-sort [x]
  (case x
    "Cash"        "AAA"
    "Collateral"  "ZZZ"
    "Forwards"    "ZZZ"
    "Equities"    "ZZZ"
    x))

(defn add-total-line-to-pivot [pivoted-table kportfolios]
  (let [total-line (merge
                     {:jpm-region           "Total"
                      :qt-jpm-sector        "Total"
                      :qt-risk-country-name "Total"
                      :TICKER               "Total"
                      :NAME                 "Total"
                      :description          "Total"
                      :isin                 "Total"
                      :qt-iam-int-lt-median-rating-score "Total"}
                     (into {} (for [p kportfolios] [p (reduce + (map p pivoted-table))])))]
    (conj pivoted-table total-line)))

(defn add-total-line-to-attribution-pivot [pivoted-table kportfolios]
  (let [template (into {} (for [[k v] (first pivoted-table)] [k "Total"]))
        total-line (merge
                     template
                     (into {} (for [p kportfolios] [p (reduce + (map p pivoted-table))])))]
    (conj pivoted-table total-line)))


(rf/reg-sub
  :single-portfolio-risk/table
  (fn [db]
    (let [positions (:positions db)
          portfolio (:single-portfolio-risk/portfolio db)
          portfolio-total-line (assoc ((:total-positions db) (keyword portfolio)) :qt-iam-int-lt-median-rating "Total" :qt-iam-int-lt-median-rating-score "00 Total")
          is-tree (= (:single-portfolio-risk/display-style db) "Tree")
          portfolio-positions (filter #(= (:portfolio %) portfolio) positions)
          viewable-positions (if (and (not is-tree) (:single-portfolio-risk/hide-zero-holdings db)) (filter #(not= (:weight %) 0) portfolio-positions) portfolio-positions)
          risk-choices (let [rfil @(rf/subscribe [:single-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))]
  (conj (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) viewable-positions) portfolio-total-line))))

(rf/reg-sub
  :single-portfolio-attribution/clean-table
  (fn [db]
    (let [data (:single-portfolio-attribution/table db)
          template (into {} (for [[k v] (first data)] [k "Total"]))
          portfolio-total-line (assoc template
                                 :Total-Effect (reduce + (map :Total-Effect data))
                                 :Average-Excess-Weight (reduce + (map :Average-Excess-Weight data))
                                 :Average-Fund-Weight (reduce + (map :Average-Fund-Weight data))
                                 :Average-Index-Weight (reduce + (map :Average-Index-Weight data))
                                 :Fund-Contribution (reduce + (map :Fund-Contribution data))
                                 :Index-Contribution (reduce + (map :Index-Contribution data)))
          risk-choices (let [rfil (:single-portfolio-attribution/filter db)] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :security))] (tables/attribution-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))]
      (conj (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) data) portfolio-total-line))))


(rf/reg-sub
  :multiple-portfolio-risk/table
  (fn [db]
    (let [pivoted-positions (:pivoted-positions db)
          kselected-portfolios (mapv keyword (:multiple-portfolio-risk/selected-portfolios db))
          hide-zero-risk (:multiple-portfolio-risk/hide-zero-holdings db)
          display-key-one (:multiple-portfolio-risk/field-one db)
          is-tree (= (:multiple-portfolio-risk/display-style db) "Tree")
          risk-choices (let [rfil @(rf/subscribe [:multiple-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (map #(merge % ((keyword (get-in tables/risk-table-columns [display-key-one :accessor])) %)) pivoted-positions)
          thfil (fn [line] (not (every? zero? (map line kselected-portfolios))))
          pivoted-data-hide-zero (if (and (not is-tree) hide-zero-risk) (filter thfil pivoted-data) pivoted-data)]
    (add-total-line-to-pivot (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-hide-zero) (map keyword (:portfolios db))))))

(rf/reg-sub
  :multiple-portfolio-attribution/clean-table
  (fn [db]
    (let [pivoted-positions (:multiple-portfolio-attribution/table db)
          kselected-portfolios (mapv keyword (:multiple-portfolio-attribution/selected-portfolios db))
          display-key-one (:multiple-portfolio-attribution/field-one db)
          attribution-choices (let [rfil @(rf/subscribe [:multiple-portfolio-attribution/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj attribution-choices :security))] (tables/attribution-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (map #(merge % ((keyword (get-in tables/attribution-table-columns [display-key-one :accessor])) %)) pivoted-positions)]
      ;(println pivoted-data)
      (add-total-line-to-attribution-pivot (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data) (map keyword (:portfolios db)))
      ;(println (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k)))
      ;pivoted-data
      ;(sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data)
      )

    )

  )


(rf/reg-sub
  :portfolio-alignment/table
  (fn [db]
    (let [group (map keyword (:portfolios (first (filter #(= (:id %) (:portfolio-alignment/group db)) static/portfolio-alignment-groups))))
          pivoted-positions (:pivoted-positions db)
          base-kportfolio (first group)
          kportfolios (rest group)
          risk-choices (let [rfil @(rf/subscribe [:portfolio-alignment/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
          grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
          accessors-k (mapv keyword (mapv :accessor grouping-columns))
          pivoted-data (map #(merge % ((keyword (get-in tables/risk-table-columns [(:portfolio-alignment/field db) :accessor])) %)) pivoted-positions)
          differentiate (fn [line] (reduce
                                     (fn [temp-line p] (assoc temp-line p (- (p temp-line) (base-kportfolio temp-line))))
                                     line
                                     kportfolios))
          pivoted-data-diff (map differentiate pivoted-data)
          threshold (* 0.01 (cljs.reader/read-string (:label (first (filter #(= (:id %) (:portfolio-alignment/threshold db)) static/threshold-choices-alignment)))))
          thfil (fn [line] (some (fn [x] (or (< x (- threshold)) (> x threshold))) (map line kportfolios)))
          pivoted-data-diff-post-th (filter thfil pivoted-data-diff)]
      (add-total-line-to-pivot (sort-by (apply juxt (concat [(comp first-level-sort (first accessors-k))] (rest accessors-k))) pivoted-data-diff-post-th) kportfolios))))

(rf/reg-sub
  :summary-display/table
  (fn [db]
    (into [] (for [p (:portfolios db)]
               (merge
                 {:portfolio       p}
                 (into {} (for [k [:cash-pct :base-value :contrib-yield :contrib-zspread :contrib-gspread :contrib-mdur :qt-iam-int-lt-median-rating :qt-iam-int-lt-median-rating-score :contrib-beta-1y-daily]] [k (get-in (:total-positions db) [(keyword p) k])]))
                               {:contrib-bond-yield (- (get-in (:total-positions db) [(keyword p) :contrib-yield]) (reduce + (map :contrib-yield (filter #(and (= (:portfolio %) p) (not= (:asset-class %) "BONDS")) (:positions db)))))})))))

(doseq [k [:active-view
           :active-home
           :active-var
           :active-attribution
           :rating-to-score
           :pivoted-positions
           :total-positions
           :var/proxies
           :var/dates
           :var/data
           :var/portfolio
           :var/chart-period
           
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
           :multiple-portfolio-risk/table-filter
           
           :portfolio-alignment/display-style
           :portfolio-alignment/field
           :portfolio-alignment/group
           :portfolio-alignment/threshold
           :portfolio-alignment/shortcut
           :portfolio-alignment/table-filter

           :single-portfolio-attribution/portfolio
           :single-portfolio-attribution/display-style
           :single-portfolio-attribution/period
           :single-portfolio-attribution/table-filter
           :single-portfolio-attribution/table

           :multiple-portfolio-attribution/display-style
           :multiple-portfolio-attribution/field-number
           :multiple-portfolio-attribution/field-one
           :multiple-portfolio-attribution/field-two
           :multiple-portfolio-attribution/selected-portfolios
           :multiple-portfolio-attribution/hide-zero-holdings
           :multiple-portfolio-attribution/shortcut
           :multiple-portfolio-attribution/table-filter
           :multiple-portfolio-attribution/table
           :multiple-portfolio-attribution/period

           :attribution/summary

           :single-bond-trade-history/show-flat-modal
           :single-bond-trade-history/flat-data
           :single-bond-trade-history/show-modal
           :single-bond-trade-history/data
           :single-bond-trade-history/bond
           :single-bond-trade-history/show-throbber




           ]] (rf/reg-event-db k (fn [db [_ data]] (assoc db k data))))


(rf/reg-event-db
  :positions
  (fn [db [_ positions]]
    (assoc db :positions positions
              :show-mounting-modal false)))

(rf/reg-event-db
  :single-bond-trade-history/data
  (fn [db [_ data]]
    (assoc db :single-bond-trade-history/data data
              :single-bond-trade-history/show-throbber false)))

(rf/reg-event-db
  :single-bond-trade-history/flat-data
  (fn [db [_ data]]
    (assoc db :single-bond-trade-history/flat-data data
              :single-bond-trade-history/show-throbber false)))


(rf/reg-event-db
  :portfolios
  (fn [db [_ portfolios]]
      (assoc db :portfolios portfolios
                :multiple-portfolio-risk/selected-portfolios (set portfolios)
                :multiple-portfolio-attribution/selected-portfolios (set portfolios))))

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

(rf/reg-event-db
  :single-portfolio-attribution/filter
  (fn [db [_ id f]] (assoc-in db [:single-portfolio-attribution/filter id] f)))

(rf/reg-event-db
  :multiple-portfolio-attribution/filter
  (fn [db [_ id f]] (assoc-in db [:multiple-portfolio-attribution/filter id] f)))

(rf/reg-event-db
  :attribution-date
  (fn [db [_ attribution-date]] (assoc db :attribution-date (clojure.string/replace attribution-date "\"" ""))))

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

(defn http-post-dispatch [request]
  (go (let [response (<! (http/post (:url request) {:edn-params (:edn-params request)}))]
        (rf/dispatch (conj (:dispatch-key request)
                           (if (:kwk request)
                             (js->clj (js/JSON.parse (:body response)) :keywordize-keys true)
                             (:body response))))
        (if (:flag request) (rf/dispatch [(:flag request) (:flag-value request)])))))

(rf/reg-fx :http-post-dispatch http-post-dispatch)


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

(rf/reg-event-fx
  :get-var-proxies
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "var-proxies") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:var/proxies]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-var-dates
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "var-dates") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:var/dates]
                         :kwk          true}}))

(rf/reg-event-fx
  :get-var-data
  (fn [{:keys [db]} [_ portfolio]]
    {:http-get-dispatch {:url          (str server-address "var-data?portfolio=" portfolio) ;(srotr "http://iamlfilive:3501/positions")
                         :dispatch-key [:var/data]
                         :kwk          true}}))


(rf/reg-event-fx
  :get-portfolio-var
  (fn [{:keys [db]} [_ portfolio]]
    {:db (assoc db :var/portfolio portfolio)
     :http-get-dispatch {:url          (str server-address "var-data?portfolio=" portfolio) ;(srotr "http://iamlfilive:3501/positions")
                         :dispatch-key [:var/data]
                         :kwk          true}}))



(rf/reg-event-fx
  :get-attribution-date
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "attribution?query-type=attribution-date") ;(str "http://iamlfilive:3501/positions")
                         :dispatch-key [:attribution-date]
                         :kwk          false}}))

;SINGLE ATTRIBUTION
(rf/reg-event-fx
  :get-single-attribution
  (fn [{:keys [db]} [_ portfolio period]]
    {:http-get-dispatch {:url          (str server-address "attribution?query-type=single-portfolio&portfolio=" portfolio "&period=" period) ;(srotr "http://iamlfilive:3501/positions")
                         :dispatch-key [:single-portfolio-attribution/table]
                         :kwk          true}}))

(rf/reg-event-fx
  :change-single-attribution-portfolio
  (fn [{:keys [db]} [_ portfolio]]
    {:db (assoc db :single-portfolio-attribution/portfolio portfolio)
     :http-get-dispatch {:url          (str server-address "attribution?query-type=single-portfolio&portfolio=" portfolio "&period=" (:single-portfolio-attribution/period db)) ;(srotr "http://iamlfilive:3501/positions")
                         :dispatch-key [:single-portfolio-attribution/table]
                         :kwk          true}}))

(rf/reg-event-fx
  :change-single-attribution-period
  (fn [{:keys [db]} [_ period]]
    {:db (assoc db :single-portfolio-attribution/period period)
     :http-get-dispatch {:url          (str server-address "attribution?query-type=single-portfolio&portfolio=" (:single-portfolio-attribution/portfolio db) "&period=" period) ;(srotr "http://iamlfilive:3501/positions")
                         :dispatch-key [:single-portfolio-attribution/table]
                         :kwk          true}}))

;MULTIPLE ATTRIBUTION
(rf/reg-event-fx
  :get-multiple-attribution
  (fn [{:keys [db]} [_ target period]]
    {:http-get-dispatch {:url          (str server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" period) ;(srotr "http://iamlfilive:3501/positions")
                         :dispatch-key [:multiple-portfolio-attribution/table]
                         :kwk          true}}))

(rf/reg-event-fx
  :change-multiple-attribution-target
  (fn [{:keys [db]} [_ ktarget]]
    (let [target (clojure.string.replace (get-in tables/attribution-table-columns [ktarget :accessor]) "-" " ")]
      {:db                (assoc db :multiple-portfolio-attribution/field-one ktarget)
       :http-get-dispatch {:url          (str server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" (:multiple-portfolio-attribution/period db)) ;(srotr "http://iamlfilive:3501/positions")
                           :dispatch-key [:multiple-portfolio-attribution/table]
                           :kwk          true}})))

(rf/reg-event-fx
  :change-multiple-attribution-period
  (fn [{:keys [db]} [_ period]]
    (let [target (clojure.string.replace (get-in tables/attribution-table-columns [(:multiple-portfolio-attribution/field-one db) :accessor]) "-" " ")]
      {:db                (assoc db :multiple-portfolio-attribution/period period)
       :http-get-dispatch {:url          (str server-address "attribution?query-type=multiple-portfolio&target=" target "&period=" period) ;(srotr "http://iamlfilive:3501/positions")
                           :dispatch-key [:multiple-portfolio-attribution/table]
                           :kwk          true}})))

;SUMMARY ATTRIBUTION
(rf/reg-event-fx
  :get-attribution-summary
  (fn [{:keys [db]} [_]]
    {:http-get-dispatch {:url          (str server-address "attribution?query-type=summary") ;(srotr "http://iamlfilive:3501/positions")
                         :dispatch-key [:attribution/summary]
                         :kwk          true}}))
