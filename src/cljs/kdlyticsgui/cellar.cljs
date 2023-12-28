(ns kdlyticsgui.cellar
  (:require [kdlyticsgui.guitools :as gt]
            [kdlyticsgui.chart :as chart]
            [kdlyticsgui.tools :as t]
            [kdlyticsgui.mui :as mui]
            [kdlyticsgui.mrttables :as mrt]
            [re-frame.core :as rf]
            [helix.core :refer [defnc $]]
            )
  )

(defnc summary-display []
  (rf/dispatch [:get-cellar-summary])                       ;TODO IF EMPTY bla bla
  (let [data @(rf/subscribe [:cellar-summary])              ;USE REACTION /USE SUBSCRIBE react data store
        columns [{:header "Description" :id "description" :columns [(mrt/text-col "Name" "name" 60)
                                                                    (mrt/text-col "Type" "type" 60)
                                                                    (mrt/text-col "Description" "description" 100)]}
                 {:header "Position & PnL" :id "position" :columns [(mrt/nb-col "Qt" "quantity" 50 mrt/round0)
                                                                    (mrt/nb-col "CPU" "cost_per_unit" 50 mrt/round1)
                                                                    (mrt/nb-col "Market Price" "market_price" 50 mrt/round1)
                                                                    ]}]]
    [(mui/right-element-box-generic "cellar" "1700px" "My cellar"
                                   [($ mui/my-grid {:direction "row" :gap "30px"
                                                    :children [($ mrt/material-react-table-template-fast
                                                                  {:clj-data data
                                                                   :clj-columns columns
                                                                   :clj-option-map   {:enableGrouping true :enablePinning true :enablePagination false :muiTableBodyRowProps mrt/cellar-row-formatting :muiTableBodyProps nil}  ;to avoid the cell formatting to mess up this the row formatting :muiTableBodyRowProps, we set the :muiTableBodyProps to nil, cell format override row formating
                                                                   :js-initial-state #js {"density" "compact"
                                                                                          "showColumnFilters" true
                                                                                          "pagination" #js {"pageSize" 20}
                                                                                          "grouping" #js []
                                                                                          ;"sorting" #js [ #js{"id" "nav-eur-perc" "desc" true}]
                                                                                          "columnVisibility" #js {"type" false }
                                                                                          }
                                                                   :toolbar          mrt/mrt-table-toolbar
                                                                   :download-fn      (mrt/mrt-default-download-fn "cellar-summary" columns)
                                                                   :photo-id         "cellar-summary"})
                                                               ]})]

                                   )]
    ))


