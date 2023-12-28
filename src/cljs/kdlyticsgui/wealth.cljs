(ns kdlyticsgui.wealth
  (:require [kdlyticsgui.guitools :as gt]
            [kdlyticsgui.chart :as chart]
            [kdlyticsgui.tools :as t]
            [kdlyticsgui.mui :as mui]
            [re-frame.core :as rf]
            ;[re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
            ;                     single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
            ;                     input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
            [kdlyticsgui.mrttables :as mrt]
            [helix.core :refer [defnc $]]

            )
  )

(def halfrw "850px")
(def maxrw "1790px")

(defn summary-display []
  ;(rf/dispatch [:get-wealth-summary])
  (let [data nil                                                ;@(rf/subscribe [:wealth-summary])
        columns [{:header "Description" :id "description" :columns [(mrt/text-col "Ticker" "ticker" 60)
                                                                    (mrt/text-col "Cat." "asset-class" 60)
                                                                    (mrt/text-col "Acc." "account" 60)
                                                                    (mrt/text-col "CCY" "currency" 60)
                                                                    (mrt/text-col "Name" "shortName" 200)]}
                 ]
        ]
    [(mui/right-element-box-generic "wealth-summary" "1700px" "YO"
                                    [
                                     ;($ mrt/material-react-table-template-fast
                                     ;   {:clj-data data
                                     ;    :clj-columns columns
                                     ;    :clj-option-map   {:enableGrouping false :enablePinning true :enablePagination false :muiTableBodyRowProps mrt/full-row-formatting :muiTableBodyProps nil}  ;to avoid the cell formatting to mess up this the row formatting :muiTableBodyRowProps, we set the :muiTableBodyProps to nil, cell format override row formating
                                     ;    :js-initial-state #js {"density" "compact"
                                     ;                           "showColumnFilters" true
                                     ;                           "pagination" #js {"pageSize" 50}
                                     ;                           "grouping" #js []
                                     ;                           "sorting" #js [ #js{"id" "nav-eur-perc" "desc" true}]
                                     ;                           "columnVisibility" #js {"nav-local" false "pnl-local" false "strategy-3" false "alloc-strat-1" false "alloc-strat-2" false "alloc-strat-3" false}}
                                     ;    :toolbar          mrt/mrt-table-toolbar
                                     ;    :download-fn      (mrt/mrt-default-download-fn "wealth-summary" columns)
                                     ;    :photo-id         "wealth-summary"})
                                     ]

                                    )]
    ))


(defn projection-display []
  (let [data nil]                                              ;@(rf/subscribe [:summary-display/table])
    ;[box :class "subbody rightelement" :child
    ; ;(gt/element-box "summary" "100%" (str "Projection ") data
    ; ;                []
    ; ;                ;[[:> ReactTable
    ; ;                ;  {:data           data
    ; ;                ;   :columns        [{:Header "Portfolio" :accessor "portfolio" :width 90 :filterable true :filterMethod tables/text-filter-OR :Cell #((if rot13? t/rot13 identity) (gobj/get % "value"))}
    ; ;                ;                    {:Header "Balance" :columns (mapv #(assoc % :filterable false) (mapv tables/risk-table-columns [:value :cash-pct]))}
    ; ;                ;
    ; ;                ;                    ]
    ; ;                ;   :showPagination false :pageSize (count @(rf/subscribe [:portfolios])) :getTrProps go-to-portfolio-risk :className "-striped -highlight"}]
    ; ;                ; ]
    ; ;                )
    ; ]
    ))