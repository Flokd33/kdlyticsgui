(ns kdlyticsgui.wealth
  (:require [kdlyticsgui.guitools :as gt]
            [re-frame.core :as rf]
            [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                                 single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                                 input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
            [kdlyticsgui.mrttables :as mrt]
            [helix.core :refer [defnc $]]
            )
  )

(def halfrw "850px")
(def maxrw "1790px")

(defn summary-display []
  (rf/dispatch [:get-positions-summary])
  (let [data @(rf/subscribe [:positions-summary])
        columns [{:header "Description" :id "description" :columns [(mrt/text-col "Ticker" "ticker" 60)
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
                                                                    (mrt/nb-col "Pnl € %" "pnl-eur-perc" 50 mrt/round2pc100)

                                                                    ]}
                 {:header "Allocation" :id "allocation" :columns [(mrt/text-col "#" "nb-strategies" 50)
                                                                  (mrt/text-col "Strategy 1" "strategy-1" 50)
                                                                  (mrt/text-col "Strategy 2" "strategy-2" 50)
                                                                  (mrt/text-col "Strategy 3" "strategy-3" 50)

                                                                  (mrt/nb-col "Alloc. 1" "alloc-strat-1" 50 mrt/round0)
                                                                  (mrt/nb-col "Alloc. 2" "alloc-strat-2" 50 mrt/round0)
                                                                  (mrt/nb-col "Alloc. 3" "alloc-strat-3" 50 mrt/round0)

                                                                  (mrt/nb-col "Total" "alloc-strat-total" 50 mrt/round0)
                                                                  ;(mrt/nb-col "Delta" "alloc-strat-delta" 50 mrt/round0) ;if >500 green ?, if below -500 red ? allocation-delta-formatting
                                                                  (assoc (mrt/nb-col "Delta" "alloc-strat-delta" 50 mrt/round0) :muiTableBodyCellProps mrt/allocation-delta-formatting)

                                                                    ]}
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
                                                                (mrt/nb-col "EV/EB" "enterpriseToEbitda" 100 mrt/round2)
                                                                (mrt/nb-col "BV" "bookValue" 50 mrt/round0)

                                                                (mrt/nb-col "Div last" "lastDividendValue" 50 mrt/round2)
                                                                (mrt/nb-col "Div %" "dividendYield" 50 mrt/round2pc100)
                                                                (mrt/nb-col "Div % 5Y" "fiveYearAvgDividendYield" 50 mrt/round2pc)
                                                                (mrt/nb-col "Payout" "payoutRatio" 50 mrt/round2pc100)
                                                                ]}
                 ]
        ]
    ;(println (sort (keys (first data))))
    [gt/mrt-right-element-box-generic "wealth-summary" maxrw "W summary" {}
     [($ mrt/material-react-table-template-fast
         {:clj-data data
          :clj-columns columns
          :clj-option-map   {:enableGrouping false :enablePinning true :enablePagination false :muiTableBodyRowProps mrt/full-row-formatting :muiTableBodyProps nil}  ;to avoid the cell formatting to mess up this the row formatting :muiTableBodyRowProps, we set the :muiTableBodyProps to nil, cell format override row formating
          ;TODO go-to-attribution-risk
          :js-initial-state #js {"density" "compact"
                                 "showColumnFilters" true
                                 "pagination" #js {"pageSize" 50}
                                 "grouping" #js []
                                 "sorting" #js [ #js{"id" "nav-eur-perc" "desc" true}]
                                 "columnVisibility" #js {"nav-local" false "pnl-local" false "strategy-3" false "alloc-strat-1" false "alloc-strat-2" false "alloc-strat-3" false}}
          :toolbar          mrt/mrt-table-toolbar
          :download-fn      (mrt/mrt-default-download-fn "wealth-summary" columns)
          :photo-id         "wealth-summary"})
      ]]

    ;[box :class "element" :child
    ; [gt/mrt-right-element-box-generic "esg-data" "1790px" "ESG data" {}]]

    ))


(defn projection-display []
  (let [data nil]                                              ;@(rf/subscribe [:summary-display/table])
    [box :class "subbody rightelement" :child
     (gt/element-box "summary" "100%" (str "Projection ") data
                     []
                     ;[[:> ReactTable
                     ;  {:data           data
                     ;   :columns        [{:Header "Portfolio" :accessor "portfolio" :width 90 :filterable true :filterMethod tables/text-filter-OR :Cell #((if rot13? t/rot13 identity) (gobj/get % "value"))}
                     ;                    {:Header "Balance" :columns (mapv #(assoc % :filterable false) (mapv tables/risk-table-columns [:value :cash-pct]))}
                     ;
                     ;                    ]
                     ;   :showPagination false :pageSize (count @(rf/subscribe [:portfolios])) :getTrProps go-to-portfolio-risk :className "-striped -highlight"}]
                     ; ]
                     )
     ]
    ))