(ns kdlyticsgui.wealth
  (:require [kdlyticsgui.guitools :as gt]
            [re-frame.core :as rf]
            [re-com.core :refer [p p-span h-box v-box box gap line scroller border label title button close-button checkbox hyperlink-href slider horizontal-bar-tabs radio-button info-button
                                 single-dropdown hyperlink modal-panel alert-box throbber input-password selection-list md-circle-icon-button
                                 input-text input-textarea popover-anchor-wrapper popover-content-wrapper popover-tooltip datepicker-dropdown] :refer-macros [handler-fn]]
            )
  )


(defn summary-display []
  (rf/dispatch [:get-positions-summary])
  (let [data @(rf/subscribe [:positions-summary])]                                              ;@(rf/subscribe [:positions-summary])
    [box :class "subbody rightelement" :child
     (gt/element-box "summary" "100%" (str "Summary ") data
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