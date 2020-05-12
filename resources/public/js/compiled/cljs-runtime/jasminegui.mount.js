goog.provide('jasminegui.mount');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('jasminegui.static$');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
jasminegui.mount.dev_server_address = "http://localhost:3501/";
jasminegui.mount.prod_server_address = "http://iamlfilive:3501/";
jasminegui.mount.server_address = jasminegui.mount.dev_server_address;
jasminegui.mount.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081)],[new cljs.core.Keyword(null,"summary","summary",380847952),null,"Table",new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),true,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nav","nav",719540477),"undefined",cljs.core.set(null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),"Tree",new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null),"None","One","Tree",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309),"OGEMCORD",new cljs.core.Keyword(null,"cembi","cembi",1924920241),cljs.core.PersistentVector.EMPTY,true,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"region","region",270415120),(2),new cljs.core.Keyword(null,"country","country",312965309),(3),new cljs.core.Keyword(null,"issuer","issuer",-1199257898)], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jasminegui.mount","initialize-db","jasminegui.mount/initialize-db",-1621527627),(function (_,___$1){
return jasminegui.mount.default_db;
}));
var seq__44687_44841 = cljs.core.seq(cljs.core.keys(jasminegui.mount.default_db));
var chunk__44688_44842 = null;
var count__44689_44843 = (0);
var i__44690_44844 = (0);
while(true){
if((i__44690_44844 < count__44689_44843)){
var k_44845 = chunk__44688_44842.cljs$core$IIndexed$_nth$arity$2(null,i__44690_44844);
var G__44695_44846 = k_44845;
var G__44696_44847 = ((function (seq__44687_44841,chunk__44688_44842,count__44689_44843,i__44690_44844,G__44695_44846,k_44845){
return (function (db){
return (k_44845.cljs$core$IFn$_invoke$arity$1 ? k_44845.cljs$core$IFn$_invoke$arity$1(db) : k_44845.call(null,db));
});})(seq__44687_44841,chunk__44688_44842,count__44689_44843,i__44690_44844,G__44695_44846,k_44845))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44695_44846,G__44696_44847) : re_frame.core.reg_sub.call(null,G__44695_44846,G__44696_44847));


var G__44848 = seq__44687_44841;
var G__44849 = chunk__44688_44842;
var G__44850 = count__44689_44843;
var G__44851 = (i__44690_44844 + (1));
seq__44687_44841 = G__44848;
chunk__44688_44842 = G__44849;
count__44689_44843 = G__44850;
i__44690_44844 = G__44851;
continue;
} else {
var temp__5735__auto___44852 = cljs.core.seq(seq__44687_44841);
if(temp__5735__auto___44852){
var seq__44687_44853__$1 = temp__5735__auto___44852;
if(cljs.core.chunked_seq_QMARK_(seq__44687_44853__$1)){
var c__4550__auto___44854 = cljs.core.chunk_first(seq__44687_44853__$1);
var G__44855 = cljs.core.chunk_rest(seq__44687_44853__$1);
var G__44856 = c__4550__auto___44854;
var G__44857 = cljs.core.count(c__4550__auto___44854);
var G__44858 = (0);
seq__44687_44841 = G__44855;
chunk__44688_44842 = G__44856;
count__44689_44843 = G__44857;
i__44690_44844 = G__44858;
continue;
} else {
var k_44859 = cljs.core.first(seq__44687_44853__$1);
var G__44697_44860 = k_44859;
var G__44698_44861 = ((function (seq__44687_44841,chunk__44688_44842,count__44689_44843,i__44690_44844,G__44697_44860,k_44859,seq__44687_44853__$1,temp__5735__auto___44852){
return (function (db){
return (k_44859.cljs$core$IFn$_invoke$arity$1 ? k_44859.cljs$core$IFn$_invoke$arity$1(db) : k_44859.call(null,db));
});})(seq__44687_44841,chunk__44688_44842,count__44689_44843,i__44690_44844,G__44697_44860,k_44859,seq__44687_44853__$1,temp__5735__auto___44852))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44697_44860,G__44698_44861) : re_frame.core.reg_sub.call(null,G__44697_44860,G__44698_44861));


var G__44862 = cljs.core.next(seq__44687_44853__$1);
var G__44863 = null;
var G__44864 = (0);
var G__44865 = (0);
seq__44687_44841 = G__44862;
chunk__44688_44842 = G__44863;
count__44689_44843 = G__44864;
i__44690_44844 = G__44865;
continue;
}
} else {
}
}
break;
}
var seq__44699_44866 = cljs.core.seq(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"active-home","active-home",53621216),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516),new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863),new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237),new cljs.core.Keyword("single-portfolio-risk","portfolio","single-portfolio-risk/portfolio",837005949),new cljs.core.Keyword("single-portfolio-risk","display-style","single-portfolio-risk/display-style",897182477),new cljs.core.Keyword("single-portfolio-risk","hide-zero-holdings","single-portfolio-risk/hide-zero-holdings",1150810951),new cljs.core.Keyword("single-portfolio-risk","table-filter","single-portfolio-risk/table-filter",606710259),new cljs.core.Keyword("multiple-portfolio-risk","display-style","multiple-portfolio-risk/display-style",-1547119547),new cljs.core.Keyword("multiple-portfolio-risk","field-number","multiple-portfolio-risk/field-number",1702082904),new cljs.core.Keyword("multiple-portfolio-risk","field-one","multiple-portfolio-risk/field-one",-481456337),new cljs.core.Keyword("multiple-portfolio-risk","field-two","multiple-portfolio-risk/field-two",500964310),new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),new cljs.core.Keyword("multiple-portfolio-risk","hide-zero-holdings","multiple-portfolio-risk/hide-zero-holdings",-750062337),new cljs.core.Keyword("portfolio-alignment","display-style","portfolio-alignment/display-style",1625128536),new cljs.core.Keyword("portfolio-alignment","field","portfolio-alignment/field",1872819402),new cljs.core.Keyword("portfolio-alignment","group","portfolio-alignment/group",1613506110),new cljs.core.Keyword("portfolio-alignment","threshold","portfolio-alignment/threshold",821411053)], null));
var chunk__44700_44867 = null;
var count__44701_44868 = (0);
var i__44702_44869 = (0);
while(true){
if((i__44702_44869 < count__44701_44868)){
var k_44870 = chunk__44700_44867.cljs$core$IIndexed$_nth$arity$2(null,i__44702_44869);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44870,((function (seq__44699_44866,chunk__44700_44867,count__44701_44868,i__44702_44869,k_44870){
return (function (db,p__44715){
var vec__44716 = p__44715;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44716,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44716,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_44870,data);
});})(seq__44699_44866,chunk__44700_44867,count__44701_44868,i__44702_44869,k_44870))
);


var G__44871 = seq__44699_44866;
var G__44872 = chunk__44700_44867;
var G__44873 = count__44701_44868;
var G__44874 = (i__44702_44869 + (1));
seq__44699_44866 = G__44871;
chunk__44700_44867 = G__44872;
count__44701_44868 = G__44873;
i__44702_44869 = G__44874;
continue;
} else {
var temp__5735__auto___44875 = cljs.core.seq(seq__44699_44866);
if(temp__5735__auto___44875){
var seq__44699_44876__$1 = temp__5735__auto___44875;
if(cljs.core.chunked_seq_QMARK_(seq__44699_44876__$1)){
var c__4550__auto___44877 = cljs.core.chunk_first(seq__44699_44876__$1);
var G__44878 = cljs.core.chunk_rest(seq__44699_44876__$1);
var G__44879 = c__4550__auto___44877;
var G__44880 = cljs.core.count(c__4550__auto___44877);
var G__44881 = (0);
seq__44699_44866 = G__44878;
chunk__44700_44867 = G__44879;
count__44701_44868 = G__44880;
i__44702_44869 = G__44881;
continue;
} else {
var k_44882 = cljs.core.first(seq__44699_44876__$1);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(k_44882,((function (seq__44699_44866,chunk__44700_44867,count__44701_44868,i__44702_44869,k_44882,seq__44699_44876__$1,temp__5735__auto___44875){
return (function (db,p__44723){
var vec__44724 = p__44723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44724,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44724,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k_44882,data);
});})(seq__44699_44866,chunk__44700_44867,count__44701_44868,i__44702_44869,k_44882,seq__44699_44876__$1,temp__5735__auto___44875))
);


var G__44883 = cljs.core.next(seq__44699_44876__$1);
var G__44884 = null;
var G__44885 = (0);
var G__44886 = (0);
seq__44699_44866 = G__44883;
chunk__44700_44867 = G__44884;
count__44701_44868 = G__44885;
i__44702_44869 = G__44886;
continue;
}
} else {
}
}
break;
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),(function (db,p__44729){
var vec__44732 = p__44729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44732,(0),null);
var portfolios = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44732,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213),portfolios,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("multiple-portfolio-risk","selected-portfolios","multiple-portfolio-risk/selected-portfolios",854096045),cljs.core.set(portfolios)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),(function (db,p__44736){
var vec__44737 = p__44736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44737,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44737,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44737,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("single-portfolio-risk","filter","single-portfolio-risk/filter",-1306470081),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),(function (db,p__44740){
var vec__44741 = p__44740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44741,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44741,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44741,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multiple-portfolio-risk","filter","multiple-portfolio-risk/filter",1561706247),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),(function (db,p__44744){
var vec__44745 = p__44744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44745,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44745,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44745,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio-alignment","filter","portfolio-alignment/filter",-2077432556),id], null),f);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),(function (db,p__44748){
var vec__44749 = p__44748;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44749,(0),null);
var qt_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44749,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"qt-date","qt-date",-46077174),clojure.string.replace(qt_date,"\"",""));
}));
jasminegui.mount.http_get_dispatch = (function jasminegui$mount$http_get_dispatch(request){
var c__41812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__41812__auto__){
return (function (){
var f__41813__auto__ = (function (){var switch__41653__auto__ = ((function (c__41812__auto__){
return (function (state_44781){
var state_val_44782 = (state_44781[(1)]);
if((state_val_44782 === (1))){
var inst_44752 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(request);
var inst_44753 = cljs_http.client.get(inst_44752);
var state_44781__$1 = state_44781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44781__$1,(2),inst_44753);
} else {
if((state_val_44782 === (2))){
var inst_44755 = (state_44781[(2)]);
var inst_44756 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(request);
var inst_44757 = new cljs.core.Keyword(null,"kwk","kwk",-29869826).cljs$core$IFn$_invoke$arity$1(request);
var state_44781__$1 = (function (){var statearr_44783 = state_44781;
(statearr_44783[(7)] = inst_44755);

(statearr_44783[(8)] = inst_44756);

return statearr_44783;
})();
if(cljs.core.truth_(inst_44757)){
var statearr_44784_44887 = state_44781__$1;
(statearr_44784_44887[(1)] = (3));

} else {
var statearr_44785_44888 = state_44781__$1;
(statearr_44785_44888[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44782 === (3))){
var inst_44755 = (state_44781[(7)]);
var inst_44759 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_44755);
var inst_44760 = JSON.parse(inst_44759);
var inst_44761 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_44760,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_44781__$1 = state_44781;
var statearr_44786_44889 = state_44781__$1;
(statearr_44786_44889[(2)] = inst_44761);

(statearr_44786_44889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44782 === (4))){
var inst_44755 = (state_44781[(7)]);
var inst_44763 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_44755);
var state_44781__$1 = state_44781;
var statearr_44787_44890 = state_44781__$1;
(statearr_44787_44890[(2)] = inst_44763);

(statearr_44787_44890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44782 === (5))){
var inst_44756 = (state_44781[(8)]);
var inst_44765 = (state_44781[(2)]);
var inst_44766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_44756,inst_44765);
var inst_44767 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_44766) : re_frame.core.dispatch.call(null,inst_44766));
var inst_44768 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var state_44781__$1 = (function (){var statearr_44788 = state_44781;
(statearr_44788[(9)] = inst_44767);

return statearr_44788;
})();
if(cljs.core.truth_(inst_44768)){
var statearr_44789_44891 = state_44781__$1;
(statearr_44789_44891[(1)] = (6));

} else {
var statearr_44790_44892 = state_44781__$1;
(statearr_44790_44892[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44782 === (6))){
var inst_44770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44771 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(request);
var inst_44772 = new cljs.core.Keyword(null,"flag-value","flag-value",-1624436040).cljs$core$IFn$_invoke$arity$1(request);
var inst_44773 = [inst_44771,inst_44772];
var inst_44774 = (new cljs.core.PersistentVector(null,2,(5),inst_44770,inst_44773,null));
var inst_44775 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_44774) : re_frame.core.dispatch.call(null,inst_44774));
var state_44781__$1 = state_44781;
var statearr_44791_44893 = state_44781__$1;
(statearr_44791_44893[(2)] = inst_44775);

(statearr_44791_44893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44782 === (7))){
var state_44781__$1 = state_44781;
var statearr_44792_44894 = state_44781__$1;
(statearr_44792_44894[(2)] = null);

(statearr_44792_44894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44782 === (8))){
var inst_44778 = (state_44781[(2)]);
var state_44781__$1 = state_44781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44781__$1,inst_44778);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__41812__auto__))
;
return ((function (switch__41653__auto__,c__41812__auto__){
return (function() {
var jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__ = null;
var jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____0 = (function (){
var statearr_44793 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44793[(0)] = jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__);

(statearr_44793[(1)] = (1));

return statearr_44793;
});
var jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____1 = (function (state_44781){
while(true){
var ret_value__41655__auto__ = (function (){try{while(true){
var result__41656__auto__ = switch__41653__auto__(state_44781);
if(cljs.core.keyword_identical_QMARK_(result__41656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41656__auto__;
}
break;
}
}catch (e44794){if((e44794 instanceof Object)){
var ex__41657__auto__ = e44794;
var statearr_44795_44895 = state_44781;
(statearr_44795_44895[(5)] = ex__41657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44896 = state_44781;
state_44781 = G__44896;
continue;
} else {
return ret_value__41655__auto__;
}
break;
}
});
jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__ = function(state_44781){
switch(arguments.length){
case 0:
return jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____0.call(this);
case 1:
return jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____1.call(this,state_44781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__.cljs$core$IFn$_invoke$arity$0 = jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____0;
jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__.cljs$core$IFn$_invoke$arity$1 = jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto____1;
return jasminegui$mount$http_get_dispatch_$_state_machine__41654__auto__;
})()
;})(switch__41653__auto__,c__41812__auto__))
})();
var state__41814__auto__ = (function (){var statearr_44796 = (f__41813__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41813__auto__.cljs$core$IFn$_invoke$arity$0() : f__41813__auto__.call(null));
(statearr_44796[(6)] = c__41812__auto__);

return statearr_44796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41814__auto__);
});})(c__41812__auto__))
);

return c__41812__auto__;
});
var G__44797_44897 = new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518);
var G__44798_44898 = jasminegui.mount.http_get_dispatch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__44797_44897,G__44798_44898) : re_frame.core.reg_fx.call(null,G__44797_44897,G__44798_44898));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-positions","get-positions",1610972586),(function (p__44799,p__44800){
var map__44801 = p__44799;
var map__44801__$1 = (((((!((map__44801 == null))))?(((((map__44801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44801):map__44801);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44801__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44802 = p__44800;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44802,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-rating-to-score","get-rating-to-score",391912155),(function (p__44806,p__44807){
var map__44808 = p__44806;
var map__44808__$1 = (((((!((map__44808 == null))))?(((((map__44808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44808):map__44808);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44808__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44809 = p__44807;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44809,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"rating-to-score"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rating-to-score","rating-to-score",1762452516)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-portfolios","get-portfolios",-2021289472),(function (p__44813,p__44814){
var map__44815 = p__44813;
var map__44815__$1 = (((((!((map__44815 == null))))?(((((map__44815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44815):map__44815);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44815__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44816 = p__44814;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44816,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"portfolios"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolios","portfolios",-2020870213)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-pivoted-positions","get-pivoted-positions",2145025131),(function (p__44820,p__44821){
var map__44822 = p__44820;
var map__44822__$1 = (((((!((map__44822 == null))))?(((((map__44822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44822):map__44822);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44822__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44823 = p__44821;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44823,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"pivoted-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivoted-positions","pivoted-positions",-6895863)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-total-positions","get-total-positions",-698807167),(function (p__44827,p__44828){
var map__44829 = p__44827;
var map__44829__$1 = (((((!((map__44829 == null))))?(((((map__44829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44829):map__44829);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44829__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44830 = p__44828;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44830,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"total-positions"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-positions","total-positions",-1013955237)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),true], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-qt-date","get-qt-date",-1072332881),(function (p__44834,p__44835){
var map__44836 = p__44834;
var map__44836__$1 = (((((!((map__44836 == null))))?(((((map__44836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44836):map__44836);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44836__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44837 = p__44835;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44837,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-get-dispatch","http-get-dispatch",1858539518),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),[jasminegui.mount.server_address,"qt-date"].join(''),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qt-date","qt-date",-46077174)], null),new cljs.core.Keyword(null,"kwk","kwk",-29869826),false], null)], null);
}));

//# sourceMappingURL=jasminegui.mount.js.map
