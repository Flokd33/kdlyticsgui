goog.provide('kdlyticsgui.positions');
kdlyticsgui.positions.halfrw = "850px";
kdlyticsgui.positions.maxrw = "1790px";
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("price-history","close-modal","price-history/close-modal",-650563729),(function (db,p__70165){
var vec__70166 = p__70165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70166,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("price-history","ticker","price-history/ticker",1464015546),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("price-history","name","price-history/name",-1535942599),null,new cljs.core.Keyword("price-history","data","price-history/data",1268424495),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("price-history","show-modal","price-history/show-modal",1439463911),false], 0));
}));
kdlyticsgui.positions.modal_price_history = (function kdlyticsgui$positions$modal_price_history(){
var modal_data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("price-history","data","price-history/data",1268424495)], null)));
var show_modal = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("price-history","show-modal","price-history/show-modal",1439463911)], null)));
if(cljs.core.truth_(show_modal)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),true,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("price-history","close-modal","price-history/close-modal",-650563729)], null));
}),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Weekly price history since 2002",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("price-history","close-modal","price-history/close-modal",-650563729)], null));
})], null)], null)], null),(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("price-history","show-throbber","price-history/show-throbber",-2145949059)], null))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.tools.vega_lite,kdlyticsgui.chart.line_chart_price_hover(modal_data)], null)], null)], null))], null)], null)], null);
} else {
return null;
}
});
kdlyticsgui.positions.summary_display = (function kdlyticsgui$positions$summary_display(){
if(cljs.core.empty_QMARK_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-positions-summary","get-positions-summary",1710688354)], null));
} else {
}

if(cljs.core.empty_QMARK_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-top10","positions-top10",-1668533732)], null))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-positions-top10","get-positions-top10",585407224)], null));
} else {
}

if(cljs.core.empty_QMARK_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-characteristics","positions-characteristics",-170272672)], null))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-positions-characteristics","get-positions-characteristics",749074961)], null));
} else {
}

if(cljs.core.empty_QMARK_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-strategy-exposure","positions-strategy-exposure",1394640320)], null))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-positions-strategy-exposure","get-positions-strategy-exposure",-931353461)], null));
} else {
}

var data_summary = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-summary","positions-summary",-17081762)], null)));
var data_top10 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-top10","positions-top10",-1668533732)], null)));
var data_characteristics = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-characteristics","positions-characteristics",-170272672)], null)));
var data_strategy_exposure = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions-strategy-exposure","positions-strategy-exposure",1394640320)], null)));
var data_strategy_exposure_clean = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70169_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70169_SHARP_,new cljs.core.Keyword(null,"value-display","value-display",-1944290265),goog.string.format("%.2f%",(100.0 * (p1__70169_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70169_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nav-eur-perc","nav-eur-perc",-1430796669)) : p1__70169_SHARP_.call(null,new cljs.core.Keyword(null,"nav-eur-perc","nav-eur-perc",-1430796669))))));
}),data_strategy_exposure);
var columns_summary = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),"Description",new cljs.core.Keyword(null,"id","id",-1388402092),"description",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Ticker","ticker",(60)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Cat.","asset-class",(60)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Acc.","account",(60)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("CCY","currency",(60)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Name","shortName",(200))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),"Position & PnL",new cljs.core.Keyword(null,"id","id",-1388402092),"position",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Qt","quantity",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("CPU","cost-per-unit",(50),kdlyticsgui.mrttables.round1),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Price","regularMarketPrice",(50),kdlyticsgui.mrttables.round1),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Nav lcl","nav-local",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Nav \u20AC","nav-eur",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Nav \u20AC %","nav-eur-perc",(50),kdlyticsgui.mrttables.round2pc100),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Pnl lcl","pnl-local",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Pnl \u20AC","pnl-eur",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Pnl \u20AC %","pnl-eur-perc",(50),kdlyticsgui.mrttables.round2pc100)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),"Allocation",new cljs.core.Keyword(null,"id","id",-1388402092),"allocation",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("#","nb-strategies",(50)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Strategy 1","strategy-1",(50)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Strategy 2","strategy-2",(50)),kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Strategy 3","strategy-3",(50)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Alloc. 1","alloc-strat-1",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Alloc. 2","alloc-strat-2",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Alloc. 3","alloc-strat-3",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Total","alloc-strat-total",(50),kdlyticsgui.mrttables.round0),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Delta","alloc-strat-delta",(50),kdlyticsgui.mrttables.round0),new cljs.core.Keyword(null,"muiTableBodyCellProps","muiTableBodyCellProps",-1647659966),kdlyticsgui.mrttables.allocation_delta_formatting)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),"Quant metrics",new cljs.core.Keyword(null,"id","id",-1388402092),"quant",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Mkt Cap $mil","marketCap",(50),kdlyticsgui.mrttables.nb_thousand_cell_format),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Margin","profitMargin",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("TrailEPS","trailingEps",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("FwdEPS","forwardEps",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("YTD","ytdReturn",(50),kdlyticsgui.mrttables.round1pc),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("1Y","52WeekChange",(50),kdlyticsgui.mrttables.round1pc),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("High1Y","fiftyTwoWeekHigh",(50),kdlyticsgui.mrttables.round1),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Low1Y","fiftyTwoWeekLow",(50),kdlyticsgui.mrttables.round1),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Beta","beta",(50),kdlyticsgui.mrttables.round1),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("PE","trailingPE",(50),kdlyticsgui.mrttables.round1),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("FwdPE","forwardPE",(50),kdlyticsgui.mrttables.round1),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("PB","priceToBook",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("EV/EB","enterpriseToEbitda",(50),kdlyticsgui.mrttables.round2),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("BV","bookValue",(50),kdlyticsgui.mrttables.round0),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Div last","lastDividendValue",(50),kdlyticsgui.mrttables.round2),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Div %","dividendYield",(50),kdlyticsgui.mrttables.round2pc100),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Div % 5Y","fiveYearAvgDividendYield",(50),kdlyticsgui.mrttables.round2pc),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Payout","payoutRatio",(50),kdlyticsgui.mrttables.round2pc100)], null)], null)], null);
var columns_characteristics = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.mrttables.text_col.cljs$core$IFn$_invoke$arity$3("Metric","metric",(30)),kdlyticsgui.mrttables.nb_col.cljs$core$IFn$_invoke$arity$4("Value","value",(90),kdlyticsgui.mrttables.round2)], null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data_strategy_exposure_clean], 0));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"subbody rightelement",new cljs.core.Keyword(null,"gap","gap",80255254),"20px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.tools.vega_lite,kdlyticsgui.chart.pie_chart_strategy(data_strategy_exposure_clean,"Strategy %")], null),helix.core.get_react().createElement(kdlyticsgui.mrttables.material_react_table_template_basic,(function (){var obj70171 = ({"clj-data":data_characteristics,"clj-columns":columns_characteristics,"clj-option-map":new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785),false,new cljs.core.Keyword(null,"enablePinning","enablePinning",-1460484884),false,new cljs.core.Keyword(null,"enablePagination","enablePagination",594938512),false], null),"js-initial-state":({"density": "compact", "showColumnFilters": false, "pagination": ({"pageSize": (50)}), "grouping": []}),"toolbar":kdlyticsgui.mrttables.mrt_table_toolbar,"download-fn":kdlyticsgui.mrttables.mrt_default_download_fn("characteristics-summary",columns_characteristics),"photo-id":"characteristics-summary"});
return obj70171;
})())], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kdlyticsgui.guitools.mrt_right_element_box_generic,"positions-summary",kdlyticsgui.positions.maxrw,"",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.get_react().createElement(kdlyticsgui.mrttables.material_react_table_template_fast,(function (){var obj70173 = ({"clj-data":data_summary,"clj-columns":columns_summary,"clj-option-map":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enableGrouping","enableGrouping",1673342785),false,new cljs.core.Keyword(null,"enablePinning","enablePinning",-1460484884),true,new cljs.core.Keyword(null,"enablePagination","enablePagination",594938512),true,new cljs.core.Keyword(null,"muiTableBodyRowProps","muiTableBodyRowProps",206441877),kdlyticsgui.mrttables.positions_full_row_formatting,new cljs.core.Keyword(null,"muiTableBodyProps","muiTableBodyProps",-1884785223),null], null),"js-initial-state":({"density": "compact", "showColumnFilters": true, "pagination": ({"pageSize": (50)}), "grouping": [], "sorting": [({"id": "nav-eur-perc", "desc": true})], "columnVisibility": ({"nav-local": false, "pnl-local": false, "strategy-3": false, "alloc-strat-1": false, "alloc-strat-2": false, "alloc-strat-3": false})}),"toolbar":kdlyticsgui.mrttables.mrt_table_toolbar,"download-fn":kdlyticsgui.mrttables.mrt_default_download_fn("positions-summary",columns_summary),"photo-id":"positions-summary"});
return obj70173;
})())], null)], null)], null)], null);
});

//# sourceMappingURL=kdlyticsgui.positions.js.map
