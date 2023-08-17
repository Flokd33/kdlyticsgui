(ns kdlyticsgui.positions
  (:require [kdlyticsgui.guitools :as gt]
            [kdlyticsgui.chart :as chart]
            [kdlyticsgui.tools :as t]
            [kdlyticsgui.mrttables :as mrt]
            [re-frame.core :as rf]
            [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                                 single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                                 input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
            [helix.core :refer [defnc $]]
            [goog.string :as gstring]
            )
  )

(def halfrw "850px")
(def maxrw "1790px")

(rf/reg-event-db
  :price-history/close-modal
  (fn [db [_]]
    (assoc db :price-history/ticker nil
              :price-history/name   nil
              :price-history/data []
              :price-history/show-modal false)))

(defn modal-price-history []
  (let [modal-data @(rf/subscribe [:price-history/data])
        show-modal @(rf/subscribe [:price-history/show-modal])]
    (if show-modal
      [modal-panel
       :wrap-nicely? true
       :backdrop-on-click #(rf/dispatch [:price-history/close-modal])
       :child
       [v-box :gap "10px"
        :children [[h-box :gap "20px" :align :center
                    :children [[title :label "Weekly price history since 2002" :level :level2]
                               [gap :size "1"]
                               [md-circle-icon-button :md-icon-name "zmdi-close" :on-click #(rf/dispatch [:price-history/close-modal])]]]
                   (if @(rf/subscribe [:price-history/show-throbber])
                     [box :align :center :child [throbber :size :large]]
                     [h-box :gap "20px" :children [[t/vega-lite (chart/line-chart-price-hover modal-data)]
                                                   ]]
                     )]]])))


(defn summary-display []
  (when (empty? @(rf/subscribe [:positions-summary])) (rf/dispatch [:get-positions-summary]))
  (when (empty? @(rf/subscribe [:positions-top10])) (rf/dispatch [:get-positions-top10]))
  (when (empty? @(rf/subscribe [:positions-characteristics])) (rf/dispatch [:get-positions-characteristics]))
  (when (empty? @(rf/subscribe [:positions-strategy-exposure])) (rf/dispatch [:get-positions-strategy-exposure]))
  (let [data-summary @(rf/subscribe [:positions-summary])
        data-top10 @(rf/subscribe [:positions-top10])
        data-characteristics @(rf/subscribe [:positions-characteristics])
        data-strategy-exposure @(rf/subscribe [:positions-strategy-exposure])
        data-strategy-exposure-clean (map #(assoc % :value-display (gstring/format "%.2f%" (* 100. (% :nav-eur-perc))) ) data-strategy-exposure)
        columns-summary [{:header "Description" :id "description" :columns [(mrt/text-col "Ticker" "ticker" 60)
                                                                    (mrt/text-col "Cat." "asset-class" 60)
                                                                    (mrt/text-col "Acc." "account" 60)
                                                                    (mrt/text-col "CCY" "currency" 60)
                                                                    (mrt/text-col "Name" "shortName" 200)]}
                 {:header "Position & PnL" :id "position" :columns [(mrt/nb-col "Qt" "quantity" 50 mrt/round0)
                                                                    (mrt/nb-col "CPU" "cost-per-unit" 50 mrt/round1)
                                                                    (mrt/nb-col "Price" "regularMarketPrice" 50 mrt/round1)
                                                                    (mrt/nb-col "Nav lcl" "nav-local" 50 mrt/round0)
                                                                    (mrt/nb-col "Nav €" "nav-eur" 50 mrt/round0)
                                                                    (mrt/nb-col "Nav € %" "nav-eur-perc" 50 mrt/round2pc100) ;formating >5%
                                                                    (mrt/nb-col "Pnl lcl" "pnl-local" 50 mrt/round0)
                                                                    (mrt/nb-col "Pnl €" "pnl-eur" 50 mrt/round0)
                                                                    (mrt/nb-col "Pnl € %" "pnl-eur-perc" 50 mrt/round2pc100)]}
                 {:header "Allocation" :id "allocation" :columns [(mrt/text-col "#" "nb-strategies" 50)
                                                                  (mrt/text-col "Strategy 1" "strategy-1" 50)
                                                                  (mrt/text-col "Strategy 2" "strategy-2" 50)
                                                                  (mrt/text-col "Strategy 3" "strategy-3" 50)
                                                                  (mrt/nb-col "Alloc. 1" "alloc-strat-1" 50 mrt/round0)
                                                                  (mrt/nb-col "Alloc. 2" "alloc-strat-2" 50 mrt/round0)
                                                                  (mrt/nb-col "Alloc. 3" "alloc-strat-3" 50 mrt/round0)
                                                                  (mrt/nb-col "Total" "alloc-strat-total" 50 mrt/round0)
                                                                  (assoc (mrt/nb-col "Delta" "alloc-strat-delta" 50 mrt/round0) :muiTableBodyCellProps mrt/allocation-delta-formatting)]}
                 {:header "Quant metrics" :id "quant" :columns [(mrt/nb-col "Mkt Cap $mil" "marketCap" 50 mrt/nb-thousand-cell-format)
                                                                (mrt/nb-col "Margin" "profitMargin" 50 mrt/round0)
                                                                (mrt/nb-col "TrailEPS" "trailingEps" 50 mrt/round0)
                                                                (mrt/nb-col "FwdEPS" "forwardEps" 50 mrt/round0)
                                                                (mrt/nb-col "YTD" "ytdReturn" 50 mrt/round1pc)
                                                                (mrt/nb-col "1Y" "52WeekChange" 50 mrt/round1pc)
                                                                (mrt/nb-col "High1Y" "fiftyTwoWeekHigh" 50 mrt/round1)
                                                                (mrt/nb-col "Low1Y" "fiftyTwoWeekLow" 50 mrt/round1)
                                                                (mrt/nb-col "Beta" "beta" 50 mrt/round1)
                                                                (mrt/nb-col "PE" "trailingPE" 50 mrt/round1)
                                                                (mrt/nb-col "FwdPE" "forwardPE" 50 mrt/round1)
                                                                (mrt/nb-col "PB" "priceToBook" 50 mrt/round0)
                                                                (mrt/nb-col "EV/EB" "enterpriseToEbitda" 50 mrt/round2)
                                                                (mrt/nb-col "BV" "bookValue" 50 mrt/round0)
                                                                (mrt/nb-col "Div last" "lastDividendValue" 50 mrt/round2)
                                                                (mrt/nb-col "Div %" "dividendYield" 50 mrt/round2pc100)
                                                                (mrt/nb-col "Div % 5Y" "fiveYearAvgDividendYield" 50 mrt/round2pc)
                                                                (mrt/nb-col "Payout" "payoutRatio" 50 mrt/round2pc100)]}]
        columns-characteristics [(mrt/text-col "Metric" "metric" 30) (mrt/nb-col "Value" "value" 90 mrt/round2)]
        ]
    (println data-strategy-exposure-clean)
    ;(rf/dispatch [:get-price-history ticker])
    [v-box :gap "10px"
     :children [[h-box :class "subbody rightelement" :gap "20px" :children [[t/vega-lite (chart/pie-chart-strategy data-strategy-exposure-clean "Strategy %")]
                                                                            ($ mrt/material-react-table-template-basic
                                                                               {:clj-data data-characteristics
                                                                                :clj-columns columns-characteristics
                                                                                :clj-option-map   {:enableGrouping false :enablePinning false :enablePagination false}
                                                                                :js-initial-state #js {"density" "compact" "showColumnFilters" false "pagination" #js {"pageSize" 50} "grouping" #js []}
                                                                                :toolbar          mrt/mrt-table-toolbar
                                                                                :download-fn      (mrt/mrt-default-download-fn "characteristics-summary" columns-characteristics)
                                                                                :photo-id         "characteristics-summary"})]
                 ]

                [gt/mrt-right-element-box-generic "positions-summary" maxrw "" {}
                 [($ mrt/material-react-table-template-fast
                     {:clj-data data-summary
                      :clj-columns columns-summary
                      :clj-option-map   {:enableGrouping false :enablePinning true :enablePagination true :muiTableBodyRowProps mrt/positions-full-row-formatting :muiTableBodyProps nil}  ;to avoid the cell formatting to mess up this the row formatting :muiTableBodyRowProps, we set the :muiTableBodyProps to nil, cell format override row formating
                      :js-initial-state #js {"density" "compact"
                                             "showColumnFilters" true
                                             "pagination" #js {"pageSize" 50}
                                             "grouping" #js []
                                             "sorting" #js [ #js{"id" "nav-eur-perc" "desc" true}]
                                             "columnVisibility" #js {"nav-local" false "pnl-local" false "strategy-3" false "alloc-strat-1" false "alloc-strat-2" false "alloc-strat-3" false}}
                      :toolbar          mrt/mrt-table-toolbar
                      :download-fn      (mrt/mrt-default-download-fn "positions-summary" columns-summary)
                      :photo-id         "positions-summary"})
                  ]]]

     ]
    ))
