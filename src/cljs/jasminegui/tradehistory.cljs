(ns jasminegui.tradehistory
  (:require
    ; [oz.core :as oz]
    [re-frame.core :as rf]
    [reagent.core :as r]
    [goog.string :as gstring]
    [goog.string.format]
    [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                         single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                         input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
    [re-com.box :refer [h-box-args-desc v-box-args-desc box-args-desc gap-args-desc line-args-desc scroller-args-desc border-args-desc flex-child-style]]
    [re-com.util :refer [px]]
    [jasminegui.mount :as mount]
    [jasminegui.static :as static]
    [cljs-time.core :as time]
    [cljs-time.core :refer [today]]
    ["react-table-v6" :as rt :default ReactTable]
    [jasminegui.riskviews :as riskviews]
    [re-com.validate :refer [string-or-hiccup? alert-type? vector-of-maps?]]
    [jasminegui.tables :as tables]
    [jasminegui.tools :as tools]
    [jasminegui.guitools :as gt]
    [reagent-contextmenu.menu :as rcm]
    [oz.core :as oz]
    [jasminegui.tools :as t]
    )
  )

;;;;;;;;;;;;
;; EVENTS ;;
;;;;;;;;;;;;

(rf/reg-event-fx
  :get-single-bond-history
  (fn [{:keys [db]} [_ name bond-sedol portfolios start-date end-date]]
    {:db (assoc db :single-bond-trade-history/bond name
                   :single-bond-trade-history/show-modal true
                   :single-bond-trade-history/show-throbber true)
     :http-get-dispatch {:url          (str static/server-address "single-bond-history?id=" bond-sedol "&portfolios=" portfolios "&start-date=" start-date "&end-date=" end-date)
                         :dispatch-key [:single-bond-trade-history/data]}}))

(rf/reg-event-fx
  :get-bond-price-history
  (fn [{:keys [db]} [_ name start-date end-date]]
    {:db (assoc db :bond-price-history/name name)
     :http-get-dispatch {:url          (str static/server-address "bond-price-history?name=" name "&start-date=" start-date "&end-date=" end-date)
                         :dispatch-key [:bond-price-history/price]}}))

(rf/reg-event-fx
  :get-single-bond-flat-history
  (fn [{:keys [db]} [_ name bond-sedol portfolios start-date end-date datatype]]
    {:db (assoc db :single-bond-trade-history/bond name
                   :single-bond-trade-history/show-flat-modal true
                   :single-bond-trade-history/show-throbber true)
     :http-get-dispatch {:url          (str static/server-address "flat-bond-history?id=" bond-sedol "&portfolios=" portfolios "&start-date=" start-date "&end-date=" end-date "&datatype=" datatype)
                         :dispatch-key [:single-bond-trade-history/flat-data]}}))

(rf/reg-event-fx
  :get-portfolio-trade-history
  (fn [{:keys [db]} [_ portfolio start-date end-date]]
    {:db                (assoc db :portfolio-trade-history/data nil
                                  :single-bond-trade-history/show-throbber true)
     :http-get-dispatch {:url          (str static/server-address "portfolio-trade-history?portfolio=" portfolio "&start-date=" (tools/gdate->yyyyMMdd start-date) "&end-date=" (tools/gdate->yyyyMMdd end-date))
                         :dispatch-key [:portfolio-trade-history/data]}}))

(rf/reg-event-fx
  :get-multiple-portfolio-trade-history
  (fn [{:keys [db]} [_ start-date end-date]]
    {:db (assoc db :multiple-portfolio-trade-history/data [])
     :http-get-dispatch {:url          (str static/server-address "multiple-portfolio-trade-history?date-from=" start-date "&date-to=" end-date)
                         :dispatch-key [:multiple-portfolio-trade-history/data]}}))

(rf/reg-sub
  :get-multiple-portfolio-trade-history/clean-table
  (fn [db]
    (let [data (:multiple-portfolio-trade-history/data db)
          portfolios @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
          res (->> data
                   (map #(select-keys % (concat [:description :jpm-region :qt-jpm-sector :NAME :qt-risk-country-name :TICKER] portfolios)))
                   (filter #(not= 0.0 (reduce + (map % portfolios)))))
          ;data-clean1 (into []  (for [trade data] (select-keys trade (concat [:description :jpm-region :qt-jpm-sector :NAME :qt-risk-country-name] portfolios))))
          ;data-clean2 (filter #(not= 0.0 (reduce + (map % portfolios))) data-clean1)
          ]
      res
      )))

(rf/reg-event-fx
  :get-recent-trade-data
  (fn [{:keys [db]} [_ date-from date-to]]
    {:db (assoc db :recent-trade-data/trades [])
     :http-get-dispatch {:url          (str static/server-address "portfolio-recent-trades?date-from=" date-from "&date-to=" date-to)
                         :dispatch-key [:recent-trade-data/trades]}}))

(rf/reg-event-fx
  :get-traded-since-date-output
  (fn [{:keys [db]} [_ date-from date-to]]
    {:db (assoc db :traded-since-date-output/trades []
                   :recent-trade-data/show-throbber true
                   )
     :http-get-dispatch {:url          (str static/server-address "traded-since-date-output?date-from=" date-from "&date-to=" date-to)
                         :dispatch-key [:traded-since-date-output/trades]}}))

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
  :traded-since-date-output/trades
  (fn [db [_ data]]
    (assoc db :traded-since-date-output/flat-data data
              :recent-trade-data/show-throbber false)))

(rf/reg-event-db
  :portfolio-trade-history/data
  (fn [db [_ data]]
    (let [qs (db :quant-model/model-output)
          subqs (t/chainfilter {:isin_id #(some #{%} (distinct (map :ISIN data)))} qs)
          mqs (zipmap (map :isin_id subqs) subqs)
          data-with-ud (map (fn [e] (assoc e :svr4d1yrtn (/ (:svr4d1yrtn (get mqs (e :ISIN))) 100)
                                             :svr2d1yrtn (/ (:svr2d1yrtn (get mqs (e :ISIN))) 100)
                                             :ytd-return (:ytd-return (get mqs (e :ISIN)))))
                            data)]
      (assoc db :portfolio-trade-history/data data-with-ud
                :single-bond-trade-history/show-throbber false))))

(defn subs10 [this]
  (r/as-element (if-let [x (aget this "value")] [:div (subs x 0 10)] "-")))

(defn nfh [this]
  (r/as-element (if-let [x (aget this "value")] [:div (tables/nf x)] "")))

(defn facet-trade-history-chart []
  (let [data @(rf/subscribe [:single-bond-trade-history/chart-data])
        ymin (* 0.99 (apply min (remove nil? (map :price data))))
        ymax (* 1.01 (apply max (remove nil? (map :price data))))]
    {:$schema "https://vega.github.io/schema/vega-lite/v4.json",
     :title   nil                                           ;(str @(rf/subscribe [:single-bond-trade-history/bond]) " trading history")
     :data    {:values data :format {:parse {:date "date:'%Y%m%d'" :price "quantitative" :buy "quantitative" :sell "quantitative"}}}
     :vconcat [{:layer
                [{:mark     "line",
                  :width 600
                  :height 400
                  :encoding {:x {:field "date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                             :y {:field "price" :type "quantitative" :scale {:domain [ymin ymax]} :axis {:title "Price"}}}}
                 {:mark     {:type "point", :shape "triangle-up", :color "green"}
                  :encoding {:x {:field "date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                             :y {:field "buy" :type "quantitative" :scale {:domain [ymin ymax]} :axis {:title nil}}}}
                 {:mark     {:type "point", :shape "triangle-down", :color "red"}
                  :encoding {:x {:field "date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                             :y {:field "sell" :type "quantitative" :scale {:domain [ymin ymax]} :axis {:title nil}}}}]}
               {:mark     "line",
                :height   200
                :width    600
                :encoding {:x {:field "date" :type "temporal" :axis {:format "%b-%y", :labelFontSize 10 :title nil}}
                           :y {:field "nav" :type "quantitative" :scale {:domain [0 (int (inc (apply max (remove nil? (map :nav data)))))]} :axis {:title "NAV %"}}}}]}))

(rf/reg-event-db
  :single-bond-trade-history/close-modal
  (fn [db [_]]
    (assoc db :single-bond-trade-history/bond nil
              :single-bond-trade-history/data []
              :single-bond-trade-history/flat-data []
              :single-bond-trade-history/show-modal false
              :single-bond-trade-history/show-flat-modal false)))

(rf/reg-sub
  :single-bond-trade-history/chart-data
  (fn [db]
    (let [portfolio (db :single-portfolio-risk/portfolio)
          name (db :bond-price-history/name)
          data (filter (comp some? :price) (db :bond-price-history/price))
          trade-data (reverse (remove #(= (:TransactionTypeName %) "Coupon Payment") (get-in (db :single-bond-trade-history/data) [(keyword portfolio)])))
          buys (into [] (for [line (filter (comp pos? :Quantity) trade-data)] {:date (clojure.string/replace (subs (:TradeDate line) 0 10) "-" "") :buy (:PriceLcl line) :value (* 0.01 (:PriceLcl line) (:Quantity line))}))
          sells (into [] (for [line (filter (comp neg? :Quantity) trade-data)] {:date (clojure.string/replace (subs (:TradeDate line) 0 10) "-" "") :sell  (:PriceLcl line) :value (* 0.01 (:PriceLcl line) (:Quantity line))}))
          all-data (concat data buys sells)
          bydate (sort-by :date (map (partial apply merge) (vals (group-by :date all-data))))
          pos-line (first (filter #(and (= (:NAME %) name) (= (:portfolio %) portfolio)) (db :positions)))
          nav (:weight pos-line)
          fund-nav (/ (:local-value pos-line) nav)
          rbydate (map #(assoc % :trade-nav (if-let [x (:value %)] (/ x fund-nav) 0.0)) (reverse bydate))
          rwchange (reverse (map #(assoc %1 :nav (- nav %2)) rbydate (conj (drop-last (reductions + (map :trade-nav rbydate))) 0))) ;here we put a zero *at the beginning*
          final (map #(update % :nav * 100) rwchange)]
      final)))

(defn modal-single-bond-trade-history []
  (let [modal-data (get-in @(rf/subscribe [:single-bond-trade-history/data]) [(keyword @(rf/subscribe [:single-portfolio-risk/portfolio]))])
        show-modal @(rf/subscribe [:single-bond-trade-history/show-modal])
        display (reverse (remove #(= (:TransactionTypeName %) "Coupon Payment") modal-data))]
    @(rf/subscribe [:single-bond-trade-history/chart-data])
    (if show-modal
      [modal-panel
       :wrap-nicely? true
       :backdrop-on-click #(rf/dispatch [:single-bond-trade-history/close-modal])
       :child
       [v-box :gap "10px"
        :children [[h-box :gap "20px" :align :center
                    :children [[title :label (str @(rf/subscribe [:single-bond-trade-history/bond]) " trades since 2019-01-01") :level :level2]
                               [md-circle-icon-button :md-icon-name "zmdi-close" :on-click #(rf/dispatch [:single-bond-trade-history/close-modal])]
                               [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link display "trade-history")]]]
                   (if @(rf/subscribe [:single-bond-trade-history/show-throbber])
                     [box :align :center :child [throbber :size :large]]
                     [h-box :gap "20px" :children [
                                                   [v-box :children [[:> ReactTable
                                                                      {:data           display
                                                                       :columns        [{:Header "Date" :accessor "TradeDate" :width 100 :Cell subs10}
                                                                                        {:Header "Type" :accessor "TransactionTypeName" :width 90}
                                                                                        {:Header "Notional" :accessor "Quantity" :width 90 :style {:textAlign "right"} :Cell nfh}
                                                                                        {:Header "Vs NAV(*)" :accessor "bps" :width 90 :getProps tables/red-negatives :Cell tables/zspread-format}
                                                                                        {:Header "Price" :accessor "PriceLcl" :width 90 :style {:textAlign "right"} :Cell tables/round2}
                                                                                        {:Header "Counterparty" :accessor "counterparty_code" :width 90}]
                                                                       :showPagination false :pageSize (count display) :className "-striped -highlight"}]
                                                                     [p "(*) based on latest NAV, not at time of trade"]
                                                                     ]]
                                                   [oz/vega-lite (facet-trade-history-chart)]]])]]])))

(defn modal-single-bond-flat-trade-history []
  (let [modal-data @(rf/subscribe [:single-bond-trade-history/flat-data])
        show-modal @(rf/subscribe [:single-bond-trade-history/show-flat-modal])
        bond-name @(rf/subscribe [:single-bond-trade-history/bond])
        display (reverse (sort-by :date (remove #(some #{(:trade %)} ["Coupon Payment" "Scrip Transfer"]) modal-data)))
        nominal (> (Math/abs (first (vals (dissoc (first display) :date :trade :price)))) 100000) ;if bigger than 100k, it's a nominal, otherwise bps
        ]
    ;(println modal-data)
    (if show-modal
      [modal-panel
       :wrap-nicely? true
       :backdrop-on-click #(rf/dispatch [:single-bond-trade-history/close-modal])
       :child
       [v-box :gap "20px"
        :children [[h-box :gap "20px" :align :center
                    :children [[title :label (str bond-name " trades since 2019-01-01") :level :level2]
                               [md-circle-icon-button :md-icon-name "zmdi-close" :on-click #(rf/dispatch [:single-bond-trade-history/close-modal])]
                               [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link display (str bond-name "-trade-history") (concat [:date :trade :price] (map keyword @(rf/subscribe [:portfolios]))))]]]
                   (if @(rf/subscribe [:single-bond-trade-history/show-throbber])
                     [box :align :center :child [throbber :size :large]]
                     [:> ReactTable
                      {:data           display
                       :columns        [{:Header "Date" :accessor "date" :width 100}
                                        {:Header "Type" :accessor "trade" :width 75}
                                        {:Header "Price" :accessor "price" :width 70 :style {:textAlign "right"} :Cell tables/round2}
                                        {:Header "Portfolio" :columns (into []
                                                                            (for [p (filter @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]) @(rf/subscribe [:portfolios]))] ;@(rf/subscribe [:portfolios])
                                                                              {:Header p :accessor p :width 90 :getProps tables/red-negatives :Cell (if nominal nfh tables/zspread-format)}))}]
                       :showPagination false :pageSize (count display) :className "-striped -highlight"}])
                   [p (if nominal "" "bps based on latest NAV, not at time of trade")]
                   ]]])))

(def show-modal-commentary (r/atom {:show false :txt nil}))

(defn on-click-context [state rowInfo instance]
  (clj->js {:onClick #(reset! show-modal-commentary {:show true :txt (aget rowInfo "original" "trader_comments")}) :style {:cursor "pointer"}}))


(defn portfolio-history-table []                            ; need to load positions when TH launch
  (let [data @(rf/subscribe [:portfolio-trade-history/data])
        pivot @(rf/subscribe [:portfolio-trade-history/pivot])
        position-name-list (map :NAME (t/chainfilter {:portfolio #(= % @(rf/subscribe [:portfolio-trade-history/portfolio])) :weight pos?} @(rf/subscribe [:positions])))
        position-ticker-list (map :TICKER (t/chainfilter {:portfolio #(= % @(rf/subscribe [:portfolio-trade-history/portfolio])) :weight pos?} @(rf/subscribe [:positions])))
        data-with-held (for [trade data] (assoc trade :held (if (some #(= (trade :NAME) %) position-name-list) 1 0)
                                                      :held-name (if (some #(= (trade :TICKER) %) position-ticker-list) 1 0)))
        ]
    (if @(rf/subscribe [:single-bond-trade-history/show-throbber])
      [box :align-self :center :align :center :child [throbber :size :large]]
      [box :align :center
       :child
       (if (= pivot "No")
         [:> ReactTable
          {:data                data-with-held
           :columns             (concat [{:Header  "Trade"
                                          :columns [{:Header "Trade Date" :accessor "TradeDate" :width 80 :Cell subs10 }
                                                    {:Header "Type" :accessor "TransactionTypeName" :width 75}
                                                    {:Header "Instrument" :accessor "NAME" :width 80}
                                                    {:Header "Ticker" :accessor "TICKER" :width 80}
                                                    {:Header "ISIN" :accessor "ISIN" :width 100}
                                                    {:Header "CCY" :accessor "LocalCcy" :width 45}
                                                    {:Header "Notional" :accessor "Quantity" :width 80 :style {:textAlign "right"} :Cell nfh :filterMethod tables/nb-filter-OR-AND}
                                                    {:Header "Price" :accessor "PriceLcl" :width 65 :style {:textAlign "right"} :Cell tables/round2}
                                                    {:Header "Vs NAV(*)" :accessor "bps" :width 80 :getProps tables/red-negatives :Cell tables/zspread-format :filterMethod tables/nb-filter-OR-AND :aggregate tables/sum-rows}
                                                    {:Header "Counterparty" :accessor "counterparty_code" :width 90}
                                                    {:Header "Country" :accessor "CNTRY_OF_RISK" :width 65}
                                                    {:Header "Region" :accessor "JPMRegion" :width 85}
                                                    {:Header "Sector" :accessor "JPM_SECTOR" :width 100}
                                                    {:Header "Rating" :accessor "Used_Rating_Score" :width 60 :Cell tables/low-level-rating-score-to-string}
                                                    ]
                                          }
                                         {:Header  "Held?"
                                          :columns [{:Header "Bond" :accessor "held" :width 45 :style {:textAlign "right"} :Cell tables/round0}
                                                    {:Header "Ticker" :accessor "held-name" :width 45 :style {:textAlign "right"} :Cell tables/round0}
                                                    ]
                                          }
                                         ]
                                        (if (= @(rf/subscribe [:portfolio-trade-history/fwd-return]) "Yes")
                                          [{:Header "1Y fwd return (predicted)"
                                            :columns [{:Header "4D" :accessor "svr4d1yrtn" :width 80 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.2f%" 100. %)}
                                                      {:Header "2D" :accessor "svr2d1yrtn" :width 80 :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.2f%" 100. %)}
                                                      ]
                                            }
                                           {:Header "Bond TR"
                                            :columns [{:Header "YTD %" :accessor "ytd-return" :width 80 :style {:textAlign "right"} :getProps tables/red-negatives :Cell #(tables/nb-cell-format "%.2f%" 100. %)}
                                                      ]
                                            }
                                           ])
                                        (if (= @(rf/subscribe [:portfolio-trade-history/comments]) "Yes")
                                          [{:Header "Comments"
                                            :columns [{:Header "< 1st settle?" :accessor "NEW_ISSUE" :width 80 :style {:textAlign "center"}}
                                                      {:Header "Input Date" :accessor "InputDate" :width 80 :Cell subs10}
                                                      {:Header "Exec. time" :accessor "Time_to_trade" :width 80 :style {:textAlign "right"}}
                                                      {:Header "Order reason" :accessor "order_reason" :width 220}
                                                      {:Header "Trader" :accessor "trader" :width 110}
                                                      {:Header "Trader Comment" :accessor "trader_comments" :width 300 :style {:whiteSpace "unset"}}
                                                      {:Header "PM" :accessor "portfolio_manager" :width 120}
                                                      {:Header "PM Instruction" :accessor "pm_instruction" :width 150}
                                                      ]
                                            }
                                           ])
                                        (if (= @(rf/subscribe [:portfolio-trade-history/performance]) "Yes")
                                          [{:Header "TR of the trade" :columns
                                            (into [{:Header "Last price" :accessor "last-price" :width 70 :style {:textAlign "right"} :Cell tables/round2}
                                                   ]
                                                  (for [[h a] [["Gross" "total-return"] ["CEMBI" "tr-vs-cembi"] ["CEMBIHY" "tr-vs-cembihy"] ["CEMBIIG" "tr-vs-cembiig"] ["EMBI" "tr-vs-embi"] ["EMBIIG" "tr-vs-embiig"]]]
                                                    {:Header h :accessor a :width 70 :getProps tables/red-negatives :Cell #(tables/nb-cell-format "%.2f%" 100. %)}))}])
                                        )
           :showPagination      (> (count data) 50)
           :defaultPageSize     (min 50 (count data))
           :pivotBy             []
           :filterable          true
           :defaultFilterMethod tables/text-filter-OR
           :className           "-striped -highlight"
           :getTrProps      on-click-context
           }
          ]
         ;TODO FIND OUT HOW TO SORT THROUGH PIVOT
         [:> ReactTable
          {:data            (sort-by (case pivot "Region" :JPMRegion "Sector" :JPM_SECTOR "Country" :CNTRY_OF_RISK "Rating" :Used_Rating_Score :NAME) (map #(-> % (update :Quantity int)) data))
           :columns         [;{:Header "" :accessor "totaldummy" :width 30 :filterable false}
                             {:Header "Issuer" :accessor "TICKER" :width 160}
                             {:Header "Instrument" :accessor "NAME" :width 180}
                             {:Header "ISIN" :accessor "ISIN" :width 105}
                             {:Header "CCY" :accessor "LocalCcy" :width 50}
                             {:Header "Notional" :accessor "Quantity" :width 90 :style {:textAlign "right"} :Cell nfh :filterMethod tables/nb-filter-OR-AND :aggregate tables/sum-rows}
                             {:Header "Vs NAV(*)" :accessor "bps" :width 90 :getProps tables/red-negatives :Cell tables/zspread-format :filterMethod tables/nb-filter-OR-AND :aggregate tables/sum-rows}
                             {:Header "Country" :accessor "CNTRY_OF_RISK" :width 120}
                             {:Header "Sector" :accessor "JPM_SECTOR" :width 120}
                             {:Header "Region" :accessor "JPMRegion" :width 120}
                             {:Header "Rating" :accessor "Used_Rating_Score" :width 120 :PivotValue (fn [x] (str (tables/sub-low-level-rating-score-to-string (aget x "row" "_pivotVal")) " (" (count (aget x "row" "_subRows")) ")"))}]
           :defaultPageSize (count (distinct (map (case pivot "Region" :JPMRegion "Sector" :JPM_SECTOR "Country" :CNTRY_OF_RISK :NAME) data)))
           :filterable      false
           ;:defaultSorted   [{:id :Quantity :desc true}]
           :pivotBy         [(case pivot "Region" :JPMRegion "Sector" :JPM_SECTOR "Country" :CNTRY_OF_RISK "Rating" :Used_Rating_Score "Issuer" :TICKER :NAME) :TICKER :NAME]
           :className       "-striped -highlight"}]

         )])



      )
    )



(defn trade-history []
  (let [portfolio (rf/subscribe [:portfolio-trade-history/portfolio])
        start-date (rf/subscribe [:portfolio-trade-history/start-date])
        end-date (rf/subscribe [:portfolio-trade-history/end-date])
        download-columns [:TradeDate :NEW_ISSUE	:TransactionTypeName :NAME :TICKER :ISIN :CRNCY :Quantity :PriceLcl :bps	:counterparty_code :CNTRY_OF_RISK :JPMRegion :JPM_SECTOR :Used_Rating_Score :last-price :total-return :tr-vs-cembi :tr-vs-cembiig :tr-vs-embi :tr-vs-embiig]
        ]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :gap "20px" :align :start
      :children [[title :label (str "Trade history for " @portfolio) :level :level1]
                 [h-box :gap "50px"
                  :children [[v-box :gap "15px"
                              :children [[h-box
                                          :width "1700px"
                                          :gap "6px"
                                          :children [[title :label "Portfolio:" :level :level3]
                                                     [single-dropdown
                                                      :width riskviews/dropdown-width
                                                      :model portfolio
                                                      :filter-box? true
                                                      :choices (into [] (for [line (concat [{:strategy "EMCD" :portfolios @(rf/subscribe [:portfolios])}] static/other-portfolios) p (:portfolios line)] {:id p :label p :group (:strategy line)}))
                                                      :on-change #(do (rf/dispatch [:portfolio-trade-history/data []]) (rf/dispatch [:portfolio-trade-history/portfolio %]))]
                                                     [gap :size "20px"]
                                                     [title :label "Start:" :level :level3]
                                                     [datepicker-dropdown
                                                      :model start-date
                                                      :minimum (tools/int->gdate 20120101)
                                                      :maximum (today)
                                                      :format "dd/MM/yyyy" :show-today? true :on-change #(do (rf/dispatch [:portfolio-trade-history/data []]) (rf/dispatch [:portfolio-trade-history/start-date %]))]
                                                     [gap :size "20px"]
                                                     [title :label "End:" :level :level3]
                                                     [datepicker-dropdown
                                                      :model end-date
                                                      :minimum (tools/int->gdate 20120101)
                                                      :maximum (today)
                                                      :format "dd/MM/yyyy" :show-today? false :on-change #(do (rf/dispatch [:portfolio-trade-history/data []]) (rf/dispatch [:portfolio-trade-history/end-date %]))]
                                                     [gap :size "20px"]
                                                     [title :label "Get performance?" :level :level3]
                                                     [single-dropdown :width riskviews/mini-dropdown-width :model (rf/subscribe [:portfolio-trade-history/performance]) :choices [{:id "No" :label "No"} {:id "Yes" :label "Yes"}] :on-change #(rf/dispatch [:portfolio-trade-history/performance %])]
                                                     [gap :size "20px"]
                                                     [title :label "Get trade comments?" :level :level3]
                                                     [single-dropdown :width riskviews/mini-dropdown-width :model (rf/subscribe [:portfolio-trade-history/comments]) :choices [{:id "No" :label "No"} {:id "Yes" :label "Yes"}] :on-change #(rf/dispatch [:portfolio-trade-history/comments %])]
                                                     [gap :size "20px"]
                                                     [title :label "Get forward return?" :level :level3]
                                                     [single-dropdown :width riskviews/mini-dropdown-width :model (rf/subscribe [:portfolio-trade-history/fwd-return]) :choices [{:id "No" :label "No"} {:id "Yes" :label "Yes"}] :on-change #(rf/dispatch [:portfolio-trade-history/fwd-return %])]
                                                     [gap :size "20px"]
                                                     [title :label "Pivot?" :level :level3]
                                                     [single-dropdown :width riskviews/dropdown-width :model (rf/subscribe [:portfolio-trade-history/pivot]) :choices (into [] (for [k ["No" "Country" "Region" "Sector" "Rating" "Issuer"]] {:id k :label k})) :on-change #(rf/dispatch [:portfolio-trade-history/pivot %])]
                                                     [gap :size "20px"]
                                                     [button :label "Fetch" :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:get-portfolio-trade-history @portfolio @start-date @end-date])]
                                                     [gap :size "20px"]
                                                     [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link @(rf/subscribe [:portfolio-trade-history/data]) @portfolio download-columns)]

                                                     ]]]]]]
                 [portfolio-history-table]
                 [p "(*) bps of NAV calculated vs latest NAV, not at time of trade. Rating is latest, not at time of trade."]
                 ]]]))

(defn txt-format [fmt m this]    (if-let [x (aget this "value")] (gstring/format fmt (* m x)) "-"))

(defn recent-trades-display [this]
  (r/as-element
    (if-let [x (aget this "value")]
      [v-box :children (into [] (for [t x]
                                  [p (first t) " " (second t) " " (str (gstring/format "%.0f" (js/parseFloat (second (next (next t))) )) "bps") " @" (gstring/format "%.3f" (last t))]
                                  ))]
      "-"))
  )

(defn recent-trades-display-date [this]
  (r/as-element (if-let [x (aget this "value")] [p (str (subs x 0 10))])))

(defn portfolio-history-table-recent []
  (let [data (map #(select-keys % (conj @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]) :date)) @(rf/subscribe [:recent-trade-data/trades]))
        sector (rf/subscribe [:recent-trade-data/sector])
        country (rf/subscribe [:recent-trade-data/country])
        empty-filter (fn [line] (pos? (reduce + (map count (vals (dissoc line :date))))))
        sector-filter (fn [row] (if (= @sector "All") true (= (first (drop 5 row)) @sector)))
        country-filter (fn [row] (if (= @country "All") true (= (first (drop 4 row)) @country)))
        final-data (->> data
                        (map #(into {} (for [[k v] %] [k (if (= k :date) v (filter sector-filter v))])))
                        (map #(into {} (for [[k v] %] [k (if (= k :date) v (filter country-filter v))])))
                        (filter empty-filter)
                        )
        ]
    [box :align :center
     :child
     [:> ReactTable
      {:data      (reverse final-data)                  ;latest first
       :columns   (into [{:Header "Date" :accessor "date" :Cell recent-trades-display-date :width 100 :style {:textAlign "center" :justifyContent "center"}}]
                        (sort-by #(.indexOf (mapcat :portfolios static/portfolio-alignment-groups) (:accessor %))
                                 (for [p @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios])]
                                   {:Header p :accessor p :Cell recent-trades-display :width 200})))
       :className "-striped -highlight"}]]))


(defn trade-history-recent-perf-table []
  (let [data @(rf/subscribe [:traded-since-date-output/flat-data])
        selected-portfolios @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        data-filtered  (t/chainfilter {:portfolio #(some #{%} selected-portfolios)} data)
        ]
    (if @(rf/subscribe [:recent-trade-data/show-throbber])
      [box :align-self :center :align :center :child [throbber :size :large]]
  [box :align :center
   :child
   [:> ReactTable
    {:data                data-filtered
     :columns             (concat [{:Header  "Trade"
                                    :columns [{:Header "Name" :accessor "NAME" :width 80 }
                                              {:Header "Trade Date" :accessor "TradeDate" :width 80 :Cell subs10}
                                              {:Header "Input Date" :accessor "InputDate" :width 80 :Cell subs10}
                                              {:Header "Exec. time" :accessor "Time_to_trade" :width 70 :style {:textAlign "right"} }
                                              {:Header "Portfolio" :accessor "portfolio" :width 80 }
                                              {:Header "Trade" :accessor "TransactionTypeName" :width 80}
                                              {:Header "Country" :accessor "CNTRY_OF_RISK" :width 80}
                                              {:Header "Sector" :accessor "JPM_SECTOR" :width 80}
                                              {:Header "Quantity" :accessor "Quantity" :width 80 :style {:textAlign "right"} :Cell nfh :filterMethod tables/nb-filter-OR-AND}
                                              {:Header "bps" :accessor "bps" :width 80 :getProps tables/red-negatives :Cell tables/zspread-format :filterMethod tables/nb-filter-OR-AND :aggregate tables/sum-rows}
                                              {:Header "Price" :accessor "PriceLcl" :width 80  :style {:textAlign "right"} :Cell tables/round2}
                                              {:Header "Last Price" :accessor "last-price" :width 80  :style {:textAlign "right"} :Cell tables/round2}
                                              ]
                                    }
                                   {:Header  "Beta vs Cembi"
                                    :columns [{:Header "Issue" :accessor "beta-vs-cembi" :width 80 :style {:textAlign "right"} :Cell tables/round2}
                                              {:Header "Trade Contrib" :accessor "beta-vs-cembi-contri" :width 80 :style {:textAlign "right"} :Cell tables/round3}
                                              ]
                                    }
                                   {:Header  "Performance"
                                    :columns [{:Header "TR" :accessor "total-return" :width 80 :getProps tables/red-negatives :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.2f%" 100. %)}
                                              {:Header "TR CEMBI" :accessor "tr-vs-cembi" :width 80 :getProps tables/red-negatives :style {:textAlign "right"} :Cell #(tables/nb-cell-format "%.2f%" 100. %)}
                                              ]
                                    }
                                   {:Header  "Comments"
                                    :columns [{:Header "Order Reason" :accessor "order_reason" :width 250 }
                                              ;{:Header "Trader comment" :accessor "trader_comments" :width 300 } ;:style {:whiteSpace "unset"}
                                              {:Header "PM comment" :accessor "pm_instruction" :width 100 }
                                              ]
                                    }
                                   ]
                                  )
     :showPagination      (> (count data) 50)
     :defaultPageSize     (min 50 (count data))
     :pivotBy             []
     :filterable          true
     :defaultFilterMethod tables/text-filter-OR
     :className           "-striped -highlight"
     :getTrProps      on-click-context
     }]]))

    )

(defn trade-history-recent-perf []
  (let [start-date (rf/subscribe [:portfolio-trade-history/start-date])
        end-date (rf/subscribe [:portfolio-trade-history/end-date])
        portfolios @(rf/subscribe [:portfolios])
        selected-portfolios (rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        toggle-portfolios (fn [seqp] (let [setseqp (set seqp)] (if (clojure.set/subset? setseqp @selected-portfolios) (clojure.set/difference @selected-portfolios setseqp) (clojure.set/union @selected-portfolios setseqp))))
        ]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :gap "20px" :align :start
      :children [[title :label (str "Recent trade history with performance") :level :level1]
                 [h-box :gap "5px"  :children
                  (into [[title :label "Portfolios:" :level :level3]
                         [gap :size "20px"]
                         [v-box :gap "2px" :children [[button :style {:width "75px"} :label "All" :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set portfolios)])]
                                                      [button :style {:width "75px"} :label "None" :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios #{}])]]]]
                        (for [line static/portfolio-alignment-groups]
                          (let [possible-portfolios (:portfolios (first (filter (fn [x] (= (:id x) (:id line))) static/portfolio-alignment-groups)))]
                            [v-box :gap "2px" :children
                             [[button :style {:width "125px"} :label (:label line) :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (toggle-portfolios possible-portfolios)])]
                              [selection-list :width "125px" :model selected-portfolios :choices (into [] (for [p possible-portfolios] {:id p :label p})) :on-change #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios %])]]])))]
                 [h-box :gap "50px"
                  :children [[v-box :gap "15px"
                              :children [[h-box
                                          :width "1700px"
                                          :gap "10px"
                                          :children [[title :label "Start:" :level :level3]
                                                     [datepicker-dropdown
                                                      :model start-date
                                                      :minimum (tools/int->gdate 20120101)
                                                      :maximum (today)
                                                      :format "dd/MM/yyyy" :show-today? true :on-change #(do (rf/dispatch [:portfolio-trade-history/start-date %]))]
                                                     [gap :size "20px"]
                                                     [title :label "End:" :level :level3]
                                                     [datepicker-dropdown
                                                      :model end-date
                                                      :minimum (tools/int->gdate 20120101)
                                                      :maximum (today)
                                                      :format "dd/MM/yyyy" :show-today? false :on-change #(do (rf/dispatch [:portfolio-trade-history/end-date %]))]
                                                     [gap :size "20px"]
                                                     [button :label "Fetch" :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:get-traded-since-date-output @start-date @end-date])]
                                                     [gap :size "20px"]
                                                     [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/csv-link @(rf/subscribe [:traded-since-date-output/flat-data]) "multi-port-recent-trades-perf" [:portfolio :TransactionTypeName :NAME :TradeDate :JPM_SECTOR :bps :PriceLcl :last-price :total-return :tr-vs-cembi :beta-vs-cembi :beta-vs-cembi-contri :pm_instruction :order-reason :trader_comments])]
                                                     ]]]]]]
                 [trade-history-recent-perf-table]
                 [p "(*) bps of NAV calculated vs latest NAV, not at time of trade. Rating is latest, not at time of trade."]
                 ]]]))



(defn trade-history-recent
  "Create the inputs in the body + add the output table at the end"
  []
  (let [portfolios @(rf/subscribe [:portfolios])
        selected-portfolios (rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        toggle-portfolios (fn [seqp] (let [setseqp (set seqp)] (if (clojure.set/subset? setseqp @selected-portfolios) (clojure.set/difference @selected-portfolios setseqp) (clojure.set/union @selected-portfolios setseqp))))
        date-from (rf/subscribe [:recent-trade-data/date-from])
        date-to (rf/subscribe [:recent-trade-data/date-to])
        data @(rf/subscribe [:quant-model/model-output])
        country-codes @(rf/subscribe [:country-codes])
        countries (concat [{:id "All" :label "All"}] (mapv (fn [x] {:id x :label (:LongName (first (filter #(= (:CountryCode %) x) country-codes)))}) (sort (distinct (map :Country data)))))
        sectors (concat [{:id "All" :label "All"}] (mapv (fn [x] {:id x :label x}) (sort (distinct (map :Sector data)))))
        download-columns (concat ["TradeDate"] (filter @selected-portfolios portfolios))
        ]
    [box :class "subbody rightelement" :child
     [v-box :class "element" :gap "20px" :align :start
      :children [[title :label (str "Recent trade history") :level :level1]
                 [h-box :gap "5px"  :children
                  (into [[title :label "Portfolios:" :level :level3]
                         [gap :size "20px"]
                         [v-box :gap "2px" :children [[button :style {:width "75px"} :label "All" :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set portfolios)])]
                                                      [button :style {:width "75px"} :label "None" :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios #{}])]]]]
                        (for [line static/portfolio-alignment-groups]
                          (let [possible-portfolios (:portfolios (first (filter (fn [x] (= (:id x) (:id line))) static/portfolio-alignment-groups)))]
                            [v-box :gap "2px" :children
                             [[button :style {:width "125px"} :label (:label line) :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (toggle-portfolios possible-portfolios)])]
                              [selection-list :width "125px" :model selected-portfolios :choices (into [] (for [p possible-portfolios] {:id p :label p})) :on-change #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios %])]]])))]
                 [h-box :align :center :gap "20px" :children [[title :label "From:" :level :level3]
                                                              [datepicker-dropdown
                                                               :model date-from
                                                               :minimum (tools/int->gdate 20210101)
                                                               :maximum (today)
                                                               :format "DD/MM/YYYY"
                                                               :show-today? true
                                                               :on-change #(do (rf/dispatch [:get-recent-trade-data []]) (rf/dispatch [:recent-trade-data/date-from %]))]
                                                              [title :label "To:" :level :level3]
                                                              [datepicker-dropdown
                                                               :model date-to
                                                               :minimum (tools/int->gdate 20210101)
                                                               :maximum (today)
                                                               :format "DD/MM/YYYY"
                                                               :show-today? true
                                                               :on-change #(do (rf/dispatch [:get-recent-trade-data []]) (rf/dispatch [:recent-trade-data/date-to %]))]
                                                              [title :label "Country:" :level :level3]
                                                              [single-dropdown :width "200px"
                                                               :model (rf/subscribe [:recent-trade-data/country])
                                                               :choices countries
                                                               :on-change #(do  (rf/dispatch [:recent-trade-data/country %]))
                                                               :filter-box? true]
                                                              [title :label "Sector:" :level :level3]
                                                              [single-dropdown :width "200px"
                                                               :model (rf/subscribe [:recent-trade-data/sector])
                                                               :choices sectors
                                                               :on-change #(do  (rf/dispatch [:recent-trade-data/sector %]))
                                                               :filter-box? true]
                                                              [button :label "Fetch" :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:get-recent-trade-data @date-from @date-to])]
                                                              [md-circle-icon-button :md-icon-name "zmdi-download" :on-click #(tools/react-table-to-csv @portfolio-history-table-recent "recent_trades_multiple_portfolio" download-columns)] ;
                                                              ]]
                 [portfolio-history-table-recent]               ]]]))


(defn filtering-row [key]
  (let [risk-filter (rf/subscribe [key])]
    (into [] (for [i (range 1 4)]
               [single-dropdown :width "125px" :model (r/cursor risk-filter [i]) :choices static/risk-choice-map :on-change #(rf/dispatch [key i %])]))))

(defn shortcut-row [key]
  (let [shortcut (rf/subscribe [key])]
    (into [] (concat [[title :label "Shortcuts:" :level :level3]]
                     (into [] (for [i (range 1 5)]
                                [md-circle-icon-button :md-icon-name (str "zmdi-collection-item-" i) :class (if (= @shortcut i) "active" "default") :on-click #(rf/dispatch [key i])]))))))

(def multiple-portfolio-risk-display-view-th (atom nil))

(defn multiple-bond-trade-history-event-th [state rowInfo instance]
  (rf/dispatch [:get-single-bond-flat-history
                (aget rowInfo "row" "_original" "NAME")
                (aget rowInfo "row" "_original" "id")
                (filter @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]) @(rf/subscribe [:portfolios]))
                "01Jan2019"
                @(rf/subscribe [:qt-date])
                "nominal"
                ]))

(defn multiple-bond-trade-history-nav-event-th [state rowInfo instance]
  (rf/dispatch [:get-single-bond-flat-history
                (aget rowInfo "row" "_original" "NAME")
                (aget rowInfo "row" "_original" "id")
                (filter @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]) @(rf/subscribe [:portfolios]))
                "01Jan2019"
                @(rf/subscribe [:qt-date])
                "nav"]))

(defn fnevt-multiple-th [state rowInfo instance evt]
  (rcm/context!
    evt
    [(aget rowInfo "original" "NAME")                                         ; <---- string is a section title
     ["Copy ISIN" (fn [] (tools/copy-to-clipboard (aget rowInfo "original" "isin")))]
     ["Trade history" (fn [] (multiple-bond-trade-history-event-th state rowInfo instance))]         ; <---- the name is a span
     ["Trade history (% NAV)" (fn [] (multiple-bond-trade-history-nav-event-th state rowInfo instance))]         ; <---- the name is a span
     ["Trade analyser" (fn [] (rf/dispatch [:quant-screen-to-ta2022 (aget rowInfo "original" "isin")]))]
     ;["Build ticket" (fn [] (prn "my-fn"))]
     ]))

(defn on-click-context-multiple-th [state rowInfo instance]
  (clj->js {:onClick #(fnevt-multiple-th state rowInfo instance %) :style {:cursor "pointer"}}))

(rf/reg-event-db
  :multiple-portfolio-trade-history/data
  (fn [db [_ data]] (assoc db :multiple-portfolio-trade-history/data (map #(clojure.set/rename-keys % {:IssueName :description :ISIN :isin :JPM_SECTOR :qt-jpm-sector :CNTRY_OF_RISK :qt-risk-country-name :JPMRegion :jpm-region}) data))))


(defn multiple-portfolio-history-table []
  (let [data @(rf/subscribe [:multiple-portfolio-trade-history/data])
        date-from (rf/subscribe [:multiple-portfolio-trade-history/start-date])
        date-to (rf/subscribe [:multiple-portfolio-trade-history/end-date])
        hide-zero-risk (rf/subscribe [:multiple-portfolio-risk/hide-zero-holdings])
        portfolios @(rf/subscribe [:portfolios])
        display-style (rf/subscribe [:multiple-portfolio-risk/display-style])
        field-one (rf/subscribe [:multiple-portfolio-risk/field-one])
        is-tree (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
        selected-portfolios (rf/subscribe [:multiple-portfolio-risk/selected-portfolios])
        download-columns (concat ["NAME" "isin" "description" "TICKER" "jpm-region" "emd-region" "qt-risk-country-name" "qt-iam-int-lt-median-rating-score" "qt-jpm-sector" "qt-final-maturity-band"] (filter @selected-portfolios portfolios))
        toggle-portfolios (fn [seqp] (let [setseqp (set seqp)] (if (clojure.set/subset? setseqp @selected-portfolios) (clojure.set/difference @selected-portfolios setseqp) (clojure.set/union @selected-portfolios setseqp))))
        ]
    [box :class "subbody rightelement" :child
     (gt/element-box-generic "multiple-portfolio-risk" "1675px" (str "Trade history - portfolio drill-down ") {:target-id "multiple-portfolio-risk-table" :on-click-action #(tools/react-table-to-csv @multiple-portfolio-risk-display-view-th "multiple_portfolio_trade_history" download-columns is-tree)}
                             [[h-box :gap "50px" :align :center
                               :children
                               [[title :label "Start:" :level :level3]
                                [datepicker-dropdown
                                 :model date-from
                                 :minimum (tools/int->gdate 20120101)
                                 :maximum (today)
                                 :format "dd/MM/yyyy" :show-today? true :on-change #(do (rf/dispatch [:get-multiple-portfolio-trade-history []]) (rf/dispatch [:multiple-portfolio-trade-history/start-date %]))]
                                [title :label "End:" :level :level3]
                                [datepicker-dropdown
                                 :model date-to
                                 :minimum (tools/int->gdate 20120101)
                                 :maximum (today)          ;:get-multiple-portfolio-trade-history
                                 :format "dd/MM/yyyy" :show-today? false :on-change #(do (rf/dispatch [:get-multiple-portfolio-trade-history []]) (rf/dispatch [:multiple-portfolio-trade-history/end-date %]))]
                                [button :label "Fetch" :class "btn btn-primary btn-block" :on-click #(rf/dispatch [:get-multiple-portfolio-trade-history @date-from @date-to])]
                                ]]
                              [h-box :gap "50px" :align :center
                               :children
                               [[h-box :gap "5px" :align :center :children [[title :label "Display type:" :level :level3] [gap :size "1"] [single-dropdown :width "125px" :model display-style :choices static/tree-table-choices :on-change #(do (rf/dispatch [:multiple-portfolio-risk/display-style %])  (rf/dispatch [:multiple-portfolio-risk/hide-zero-holdings (= % "Table")]))]]]
                                [checkbox :model hide-zero-risk :label "Hide zero lines?"  :on-change #(rf/dispatch [:multiple-portfolio-risk/hide-zero-holdings %])]
                                [h-box :gap "5px" :align :center :children [[title :label "Field:" :level :level3] [gap :size "1"] [single-dropdown :width "125px" :model field-one :choices static/risk-field-choices :on-change #(rf/dispatch [:multiple-portfolio-risk/field-one %])]]]
                                [h-box :gap "5px" :align :center :children (into [] (concat [[title :label "Filtering:" :level :level3]] (filtering-row :multiple-portfolio-risk/filter) [[gap :size "30px"]] (shortcut-row :multiple-portfolio-risk/shortcut)))]
                                ]]
                              [h-box :gap "5px" :children
                               (into [[title :label "Portfolios:" :level :level3]
                                      [gap :size "20px"]
                                      [v-box :gap "2px" :children [[button :style {:width "75px"} :label "All" :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (set portfolios)])]
                                                                   [button :style {:width "75px"} :label "None" :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios #{}])]
                                                                   ]]]
                                     (for [line static/portfolio-alignment-groups]
                                       (let [possible-portfolios (:portfolios (first (filter (fn [x] (= (:id x) (:id line))) static/portfolio-alignment-groups)))]
                                         [v-box :gap "2px" :children
                                          [[button :style {:width "125px"} :label (:label line) :on-click #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios (toggle-portfolios possible-portfolios)])]
                                           [selection-list :width "125px" :model selected-portfolios :choices (into [] (for [p possible-portfolios] {:id p :label p})) :on-change #(rf/dispatch [:multiple-portfolio-risk/selected-portfolios %])]]])))]

                              (let [display-key-one @(rf/subscribe [:multiple-portfolio-risk/field-one])
                                    data @(rf/subscribe [:multiple-portfolio-trade-history/data])
                                    width-one 80
                                    risk-choices (let [rfil @(rf/subscribe [:multiple-portfolio-risk/filter])] (mapv #(if (not= "None" (rfil %)) (rfil %)) (range 1 4)))
                                    grouping-columns (into [] (for [r (remove nil? (conj risk-choices :name))] (tables/risk-table-columns r)))
                                    cols (into [] (for [p @(rf/subscribe [:portfolios]) :when (some #{p} @(rf/subscribe [:multiple-portfolio-risk/selected-portfolios]))]
                                                    {:Header p :accessor p :width width-one :style {:textAlign "right"} :aggregate tables/sum-rows :filterable false :getProps tables/red-negatives
                                                     :Cell   (let [v (get-in tables/risk-table-columns [display-key-one :Cell])] (case display-key-one :nav tables/round0*100-if-not0 :contrib-mdur tables/round2-if-not0 ))}))
                                    ]
                                [:div {:id "multiple-portfolio-risk-table"}
                                 [tables/tree-table-risk-table
                                  ;:multiple-portfolio-trade-history/data
                                  :get-multiple-portfolio-trade-history/clean-table
                                  [{:Header (str "Groups (" @(rf/subscribe [:qt-date]) ")") :columns (concat (if is-tree [{:Header "" :accessor "totaldummy" :width 30 :filterable false}] []) (if is-tree (update grouping-columns 0 assoc :Aggregated tables/total-txt) grouping-columns))}
                                   {:Header (str "Portfolio " (name display-key-one)) :columns cols}
                                   {:Header "Description" :columns (mapv tables/risk-table-columns [:rating :isin :description])}]
                                  (= @(rf/subscribe [:multiple-portfolio-risk/display-style]) "Tree")
                                  (mapv :accessor grouping-columns)
                                  multiple-portfolio-risk-display-view-th
                                  :multiple-portfolio-risk/table-filter
                                  :multiple-portfolio-risk/expander
                                  on-click-context-multiple-th]])

                              ])]
    )
  )

(defn modal-commentary []
  (if (:show @show-modal-commentary)
    ;(println @(rf/subscribe show-modal-commentary [:txt]))
    [modal-panel
     :wrap-nicely? true
     :backdrop-on-click #(reset! show-modal-commentary [:show false])
     :child
     [v-box :gap "10px" :width "400px"
      :children [[h-box :gap "20px" :align :center :width "400px"
                  :children [[v-box :gap "20px" :align :center
                              :children [[title :label "Trader Comments" :level :level2]
                                         [label :width "350px" :label (:txt @show-modal-commentary)] ;(rf/subscribe show-modal-commentary [:txt])
                                         ]]
                             [md-circle-icon-button :md-icon-name "zmdi-close" :on-click #(reset! show-modal-commentary [:show false])]
                             ]]
                 ]]])
  )

(defn active-home
  "Create the body with trade-history"
  []
  (.scrollTo js/window 0 0)                             ;on view change we go back to top
  (case @(rf/subscribe [:trade-history/active-home])
    :single-portfolio [trade-history]
    :multiple-portfolio [multiple-portfolio-history-table]
    :recent-trades [trade-history-recent]
    :recent-trades-perf [trade-history-recent-perf]
    [:div.output "nothing to display"]))

(defn trade-history-view
  "Create the full view with sidebar and body"
  []
  [h-box :gap "10px" :padding "0px" :children [(gt/left-nav-bar static/trade-history-navigation :trade-history/active-home) [active-home] [modal-commentary]]])


