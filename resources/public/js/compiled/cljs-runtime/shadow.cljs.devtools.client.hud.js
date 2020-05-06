goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_progress",true);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_warnings",true);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_errors",true);
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__49370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto__,req){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto__,req){
return (function (state_52816){
var state_val_52817 = (state_52816[(1)]);
if((state_val_52817 === (7))){
var state_52816__$1 = state_52816;
var statearr_52818_52927 = state_52816__$1;
(statearr_52818_52927[(2)] = false);

(statearr_52818_52927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (1))){
var state_52816__$1 = state_52816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52816__$1,(2),req);
} else {
if((state_val_52817 === (4))){
var inst_52780 = (state_52816[(7)]);
var inst_52786 = (inst_52780 == null);
var inst_52787 = cljs.core.not(inst_52786);
var state_52816__$1 = state_52816;
if(inst_52787){
var statearr_52819_52928 = state_52816__$1;
(statearr_52819_52928[(1)] = (6));

} else {
var statearr_52820_52929 = state_52816__$1;
(statearr_52820_52929[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (15))){
var state_52816__$1 = state_52816;
var statearr_52821_52930 = state_52816__$1;
(statearr_52821_52930[(2)] = null);

(statearr_52821_52930[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (13))){
var inst_52780 = (state_52816[(7)]);
var state_52816__$1 = state_52816;
var statearr_52822_52931 = state_52816__$1;
(statearr_52822_52931[(2)] = inst_52780);

(statearr_52822_52931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (6))){
var inst_52780 = (state_52816[(7)]);
var inst_52789 = inst_52780.cljs$lang$protocol_mask$partition0$;
var inst_52790 = (inst_52789 & (64));
var inst_52791 = inst_52780.cljs$core$ISeq$;
var inst_52792 = (cljs.core.PROTOCOL_SENTINEL === inst_52791);
var inst_52793 = ((inst_52790) || (inst_52792));
var state_52816__$1 = state_52816;
if(cljs.core.truth_(inst_52793)){
var statearr_52823_52932 = state_52816__$1;
(statearr_52823_52932[(1)] = (9));

} else {
var statearr_52824_52933 = state_52816__$1;
(statearr_52824_52933[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (17))){
var inst_52812 = (state_52816[(2)]);
var state_52816__$1 = state_52816;
var statearr_52825_52934 = state_52816__$1;
(statearr_52825_52934[(2)] = inst_52812);

(statearr_52825_52934[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (3))){
var state_52816__$1 = state_52816;
var statearr_52826_52935 = state_52816__$1;
(statearr_52826_52935[(2)] = null);

(statearr_52826_52935[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (12))){
var inst_52780 = (state_52816[(7)]);
var inst_52802 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52780);
var state_52816__$1 = state_52816;
var statearr_52827_52936 = state_52816__$1;
(statearr_52827_52936[(2)] = inst_52802);

(statearr_52827_52936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (2))){
var inst_52780 = (state_52816[(7)]);
var inst_52780__$1 = (state_52816[(2)]);
var inst_52781 = (inst_52780__$1 == null);
var state_52816__$1 = (function (){var statearr_52828 = state_52816;
(statearr_52828[(7)] = inst_52780__$1);

return statearr_52828;
})();
if(cljs.core.truth_(inst_52781)){
var statearr_52829_52937 = state_52816__$1;
(statearr_52829_52937[(1)] = (3));

} else {
var statearr_52830_52938 = state_52816__$1;
(statearr_52830_52938[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (11))){
var inst_52797 = (state_52816[(2)]);
var state_52816__$1 = state_52816;
var statearr_52832_52939 = state_52816__$1;
(statearr_52832_52939[(2)] = inst_52797);

(statearr_52832_52939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (9))){
var state_52816__$1 = state_52816;
var statearr_52833_52940 = state_52816__$1;
(statearr_52833_52940[(2)] = true);

(statearr_52833_52940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (5))){
var inst_52814 = (state_52816[(2)]);
var state_52816__$1 = state_52816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52816__$1,inst_52814);
} else {
if((state_val_52817 === (14))){
var inst_52805 = (state_52816[(8)]);
var inst_52805__$1 = (state_52816[(2)]);
var inst_52806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52805__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_52807 = (inst_52806 === (0));
var state_52816__$1 = (function (){var statearr_52834 = state_52816;
(statearr_52834[(8)] = inst_52805__$1);

return statearr_52834;
})();
if(cljs.core.truth_(inst_52807)){
var statearr_52835_52941 = state_52816__$1;
(statearr_52835_52941[(1)] = (15));

} else {
var statearr_52836_52942 = state_52816__$1;
(statearr_52836_52942[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (16))){
var inst_52805 = (state_52816[(8)]);
var inst_52810 = console.warn("file open failed",inst_52805);
var state_52816__$1 = state_52816;
var statearr_52837_52943 = state_52816__$1;
(statearr_52837_52943[(2)] = inst_52810);

(statearr_52837_52943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (10))){
var state_52816__$1 = state_52816;
var statearr_52838_52944 = state_52816__$1;
(statearr_52838_52944[(2)] = false);

(statearr_52838_52944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52817 === (8))){
var inst_52800 = (state_52816[(2)]);
var state_52816__$1 = state_52816;
if(cljs.core.truth_(inst_52800)){
var statearr_52839_52945 = state_52816__$1;
(statearr_52839_52945[(1)] = (12));

} else {
var statearr_52840_52946 = state_52816__$1;
(statearr_52840_52946[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});})(c__49370__auto__,req))
;
return ((function (switch__49300__auto__,c__49370__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto____0 = (function (){
var statearr_52841 = [null,null,null,null,null,null,null,null,null];
(statearr_52841[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto__);

(statearr_52841[(1)] = (1));

return statearr_52841;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto____1 = (function (state_52816){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_52816);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e52842){if((e52842 instanceof Object)){
var ex__49304__auto__ = e52842;
var statearr_52843_52947 = state_52816;
(statearr_52843_52947[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52842;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52948 = state_52816;
state_52816 = G__52948;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto__ = function(state_52816){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto____1.call(this,state_52816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto__,req))
})();
var state__49372__auto__ = (function (){var statearr_52844 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_52844[(6)] = c__49370__auto__);

return statearr_52844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto__,req))
);

return c__49370__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__52847 = arguments.length;
switch (G__52847) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5739__auto___52950 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5739__auto___52950 == null)){
} else {
var x_52951 = temp__5739__auto___52950;
shadow.dom.remove(x_52951);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
if(shadow.cljs.devtools.client.hud.show_progress){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
if(shadow.cljs.devtools.client.hud.show_progress){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var container_el = temp__5739__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__49370__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__49370__auto__,el,container_el,temp__5739__auto__){
return (function (){
var f__49371__auto__ = (function (){var switch__49300__auto__ = ((function (c__49370__auto__,el,container_el,temp__5739__auto__){
return (function (state_52862){
var state_val_52863 = (state_52862[(1)]);
if((state_val_52863 === (1))){
var inst_52850 = cljs.core.async.timeout((250));
var state_52862__$1 = state_52862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52862__$1,(2),inst_52850);
} else {
if((state_val_52863 === (2))){
var inst_52852 = (state_52862[(2)]);
var inst_52853 = [el];
var inst_52854 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_52855 = [inst_52854];
var inst_52856 = cljs.core.PersistentHashMap.fromArrays(inst_52853,inst_52855);
var inst_52857 = shadow.animate.start((250),inst_52856);
var state_52862__$1 = (function (){var statearr_52864 = state_52862;
(statearr_52864[(7)] = inst_52852);

return statearr_52864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52862__$1,(3),inst_52857);
} else {
if((state_val_52863 === (3))){
var inst_52859 = (state_52862[(2)]);
var inst_52860 = shadow.dom.remove(container_el);
var state_52862__$1 = (function (){var statearr_52865 = state_52862;
(statearr_52865[(8)] = inst_52859);

return statearr_52865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52862__$1,inst_52860);
} else {
return null;
}
}
}
});})(c__49370__auto__,el,container_el,temp__5739__auto__))
;
return ((function (switch__49300__auto__,c__49370__auto__,el,container_el,temp__5739__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto____0 = (function (){
var statearr_52866 = [null,null,null,null,null,null,null,null,null];
(statearr_52866[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto__);

(statearr_52866[(1)] = (1));

return statearr_52866;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto____1 = (function (state_52862){
while(true){
var ret_value__49302__auto__ = (function (){try{while(true){
var result__49303__auto__ = switch__49300__auto__(state_52862);
if(cljs.core.keyword_identical_QMARK_(result__49303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49303__auto__;
}
break;
}
}catch (e52868){if((e52868 instanceof Object)){
var ex__49304__auto__ = e52868;
var statearr_52869_52952 = state_52862;
(statearr_52869_52952[(5)] = ex__49304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52953 = state_52862;
state_52862 = G__52953;
continue;
} else {
return ret_value__49302__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto__ = function(state_52862){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto____1.call(this,state_52862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__49301__auto__;
})()
;})(switch__49300__auto__,c__49370__auto__,el,container_el,temp__5739__auto__))
})();
var state__49372__auto__ = (function (){var statearr_52870 = (f__49371__auto__.cljs$core$IFn$_invoke$arity$0 ? f__49371__auto__.cljs$core$IFn$_invoke$arity$0() : f__49371__auto__.call(null));
(statearr_52870[(6)] = c__49370__auto__);

return statearr_52870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49372__auto__);
});})(c__49370__auto__,el,container_el,temp__5739__auto__))
);

return c__49370__auto__;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var el = temp__5739__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var d = temp__5739__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4523__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__52871(s__52872){
return (new cljs.core.LazySeq(null,(function (){
var s__52872__$1 = s__52872;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52872__$1);
if(temp__5735__auto__){
var s__52872__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52872__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52872__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52874 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52873 = (0);
while(true){
if((i__52873 < size__4522__auto__)){
var vec__52875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52873);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52875,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52875,(1),null);
cljs.core.chunk_append(b__52874,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__52881 = "%4d | %s";
var G__52882 = (((1) + idx) + start_idx);
var G__52883 = text;
return goog.string.format(G__52881,G__52882,G__52883);
})()], null));

var G__52956 = (i__52873 + (1));
i__52873 = G__52956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52874),shadow$cljs$devtools$client$hud$source_line_html_$_iter__52871(cljs.core.chunk_rest(s__52872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52874),null);
}
} else {
var vec__52890 = cljs.core.first(s__52872__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52890,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52890,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__52893 = "%4d | %s";
var G__52894 = (((1) + idx) + start_idx);
var G__52895 = text;
return goog.string.format(G__52893,G__52894,G__52895);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__52871(cljs.core.rest(s__52872__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__52897 = arguments.length;
switch (G__52897) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__52898){
var map__52899 = p__52898;
var map__52899__$1 = (((((!((map__52899 == null))))?(((((map__52899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52899):map__52899);
var warning = map__52899__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__52899,map__52899__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__52899,map__52899__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__52903){
var map__52904 = p__52903;
var map__52904__$1 = (((((!((map__52904 == null))))?(((((map__52904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52904):map__52904);
var warning = map__52904__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52904__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52904__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52904__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52904__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52904__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52904__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__52907 = source_excerpt;
var map__52907__$1 = (((((!((map__52907 == null))))?(((((map__52907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52907):map__52907);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52907__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52907__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52907__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52907__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4131__auto__ = column;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__52911){
var map__52912 = p__52911;
var map__52912__$1 = (((((!((map__52912 == null))))?(((((map__52912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52912):map__52912);
var msg = map__52912__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52912__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52912__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__52914 = info;
var map__52914__$1 = (((((!((map__52914 == null))))?(((((map__52914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52914):map__52914);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__52914,map__52914__$1,sources,map__52912,map__52912__$1,msg,type,info){
return (function (p1__52909_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__52909_SHARP_));
});})(map__52914,map__52914__$1,sources,map__52912,map__52912__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

if(shadow.cljs.devtools.client.hud.show_warnings){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4523__auto__ = ((function (map__52914,map__52914__$1,sources,sources_with_warnings,map__52912,map__52912__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__52916(s__52917){
return (new cljs.core.LazySeq(null,((function (map__52914,map__52914__$1,sources,sources_with_warnings,map__52912,map__52912__$1,msg,type,info){
return (function (){
var s__52917__$1 = s__52917;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52917__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__52922 = cljs.core.first(xs__6292__auto__);
var map__52922__$1 = (((((!((map__52922 == null))))?(((((map__52922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52922):map__52922);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52922__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4519__auto__ = ((function (s__52917__$1,map__52922,map__52922__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__52914,map__52914__$1,sources,sources_with_warnings,map__52912,map__52912__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__52916_$_iter__52918(s__52919){
return (new cljs.core.LazySeq(null,((function (s__52917__$1,map__52922,map__52922__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__52914,map__52914__$1,sources,sources_with_warnings,map__52912,map__52912__$1,msg,type,info){
return (function (){
var s__52919__$1 = s__52919;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52919__$1);
if(temp__5735__auto____$1){
var s__52919__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52919__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52919__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52921 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52920 = (0);
while(true){
if((i__52920 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52920);
cljs.core.chunk_append(b__52921,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__52981 = (i__52920 + (1));
i__52920 = G__52981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52921),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__52916_$_iter__52918(cljs.core.chunk_rest(s__52919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52921),null);
}
} else {
var warning = cljs.core.first(s__52919__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__52916_$_iter__52918(cljs.core.rest(s__52919__$2)));
}
} else {
return null;
}
break;
}
});})(s__52917__$1,map__52922,map__52922__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__52914,map__52914__$1,sources,sources_with_warnings,map__52912,map__52912__$1,msg,type,info))
,null,null));
});})(s__52917__$1,map__52922,map__52922__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__52914,map__52914__$1,sources,sources_with_warnings,map__52912,map__52912__$1,msg,type,info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__52916(cljs.core.rest(s__52917__$1)));
} else {
var G__52982 = cljs.core.rest(s__52917__$1);
s__52917__$1 = G__52982;
continue;
}
} else {
return null;
}
break;
}
});})(map__52914,map__52914__$1,sources,sources_with_warnings,map__52912,map__52912__$1,msg,type,info))
,null,null));
});})(map__52914,map__52914__$1,sources,sources_with_warnings,map__52912,map__52912__$1,msg,type,info))
;
return iter__4523__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__52924){
var map__52925 = p__52924;
var map__52925__$1 = (((((!((map__52925 == null))))?(((((map__52925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52925):map__52925);
var msg = map__52925__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52925__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var x = temp__5739__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
