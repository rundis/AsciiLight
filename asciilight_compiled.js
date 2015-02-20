if(!lt.util.load.provided_QMARK_('lt.plugins.asciilight')) {
goog.provide('lt.plugins.asciilight');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.asciilight.plugin_dir = lt.objs.plugins.find_plugin.call(null,"AsciiLight");
lt.plugins.asciilight.css_path = lt.objs.files.join.call(null,lt.plugins.asciilight.plugin_dir,"css/asciidoctor.css");
lt.plugins.asciilight.style = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(lt.objs.files.open_sync.call(null,lt.plugins.asciilight.css_path));
lt.plugins.asciilight.get_adoc = (function get_adoc(){return require(lt.objs.files.join.call(null,lt.plugins.asciilight.plugin_dir,"node_modules/adoc.js"));
});
lt.plugins.asciilight.adoc__GT_html = (function adoc__GT_html(content,base_dir){return clojure.string.replace.call(null,lt.plugins.asciilight.get_adoc.call(null).convert(content,base_dir),/img src=\"*\"/,[cljs.core.str("img src=\""),cljs.core.str(base_dir),cljs.core.str("/")].join(''));
});
lt.plugins.asciilight.setAdocHTML_BANG_ = (function setAdocHTML_BANG_(ed,obj){var container = lt.object.__GT_content.call(null,obj);var html = clojure.string.replace.call(null,lt.plugins.asciilight.adoc__GT_html.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed).getValue(),lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))),/class=\"content\"/,"class=\"adoc-content\"");container.innerHTML = html;
var seq__7856 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,"pre code",container));var chunk__7857 = null;var count__7858 = 0;var i__7859 = 0;while(true){
if((i__7859 < count__7858))
{var block = cljs.core._nth.call(null,chunk__7857,i__7859);hljs.highlightBlock(block);
{
var G__7882 = seq__7856;
var G__7883 = chunk__7857;
var G__7884 = count__7858;
var G__7885 = (i__7859 + 1);
seq__7856 = G__7882;
chunk__7857 = G__7883;
count__7858 = G__7884;
i__7859 = G__7885;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7856);if(temp__4092__auto__)
{var seq__7856__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7856__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__7856__$1);{
var G__7886 = cljs.core.chunk_rest.call(null,seq__7856__$1);
var G__7887 = c__7119__auto__;
var G__7888 = cljs.core.count.call(null,c__7119__auto__);
var G__7889 = 0;
seq__7856 = G__7886;
chunk__7857 = G__7887;
count__7858 = G__7888;
i__7859 = G__7889;
continue;
}
} else
{var block = cljs.core.first.call(null,seq__7856__$1);hljs.highlightBlock(block);
{
var G__7890 = cljs.core.next.call(null,seq__7856__$1);
var G__7891 = null;
var G__7892 = 0;
var G__7893 = 0;
seq__7856 = G__7890;
chunk__7857 = G__7891;
count__7858 = G__7892;
i__7859 = G__7893;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.asciilight.get_filename = (function get_filename(ed){return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.asciilight.adoc_skeleton = (function adoc_skeleton(this$){var e__7768__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"adoc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Asciidoc content coming here"], null)], null));var seq__7866_7894 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7867_7895 = null;var count__7868_7896 = 0;var i__7869_7897 = 0;while(true){
if((i__7869_7897 < count__7868_7896))
{var vec__7870_7898 = cljs.core._nth.call(null,chunk__7867_7895,i__7869_7897);var ev__7769__auto___7899 = cljs.core.nth.call(null,vec__7870_7898,0,null);var func__7770__auto___7900 = cljs.core.nth.call(null,vec__7870_7898,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___7899,func__7770__auto___7900);
{
var G__7901 = seq__7866_7894;
var G__7902 = chunk__7867_7895;
var G__7903 = count__7868_7896;
var G__7904 = (i__7869_7897 + 1);
seq__7866_7894 = G__7901;
chunk__7867_7895 = G__7902;
count__7868_7896 = G__7903;
i__7869_7897 = G__7904;
continue;
}
} else
{var temp__4092__auto___7905 = cljs.core.seq.call(null,seq__7866_7894);if(temp__4092__auto___7905)
{var seq__7866_7906__$1 = temp__4092__auto___7905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7866_7906__$1))
{var c__7119__auto___7907 = cljs.core.chunk_first.call(null,seq__7866_7906__$1);{
var G__7908 = cljs.core.chunk_rest.call(null,seq__7866_7906__$1);
var G__7909 = c__7119__auto___7907;
var G__7910 = cljs.core.count.call(null,c__7119__auto___7907);
var G__7911 = 0;
seq__7866_7894 = G__7908;
chunk__7867_7895 = G__7909;
count__7868_7896 = G__7910;
i__7869_7897 = G__7911;
continue;
}
} else
{var vec__7871_7912 = cljs.core.first.call(null,seq__7866_7906__$1);var ev__7769__auto___7913 = cljs.core.nth.call(null,vec__7871_7912,0,null);var func__7770__auto___7914 = cljs.core.nth.call(null,vec__7871_7912,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___7913,func__7770__auto___7914);
{
var G__7915 = cljs.core.next.call(null,seq__7866_7906__$1);
var G__7916 = null;
var G__7917 = 0;
var G__7918 = 0;
seq__7866_7894 = G__7915;
chunk__7867_7895 = G__7916;
count__7868_7896 = G__7917;
i__7869_7897 = G__7918;
continue;
}
}
} else
{}
}
break;
}
return e__7768__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.asciilight","asciilight","lt.plugins.asciilight/asciilight",3688823062),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asciilight","asciilight",4275266519)], null),new cljs.core.Keyword(null,"name","name",1017277949),"asciilight",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.asciilight","on-close-destroy","lt.plugins.asciilight/on-close-destroy",4775489352)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,filename){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null),cljs.core.constantly.call(null,[cljs.core.str(filename),cljs.core.str(" - Live")].join('')));
return lt.plugins.asciilight.adoc_skeleton.call(null,this$);
}));
lt.plugins.asciilight.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___7919 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___7919))
{var ts_7920 = temp__4092__auto___7919;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_7920))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_7920);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.asciilight","on-close-destroy","lt.plugins.asciilight/on-close-destroy",4775489352),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.asciilight.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.asciilight.__BEH__read_editor = (function __BEH__read_editor(this$){var adoc_obj = new cljs.core.Keyword(null,"adoc","adoc",1016893609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.plugins.asciilight.setAdocHTML_BANG_.call(null,this$,adoc_obj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299),new cljs.core.Keyword(null,"throttle","throttle",2497347228),200,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.asciilight.__BEH__read_editor,new cljs.core.Keyword(null,"desc","desc",1016984067),"AsciiLight: Read the content inside an editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.asciilight","watch-editor","lt.plugins.asciilight/watch-editor",558536908),new cljs.core.Keyword(null,"desc","desc",1016984067),"AsciiLight: Watch this editor for changes",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var filename = lt.plugins.asciilight.get_filename.call(null,ed);var adoc_obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.asciilight","asciilight","lt.plugins.asciilight/asciilight",3688823062),filename);lt.objs.tabs.add_or_focus_BANG_.call(null,adoc_obj);
lt.object.update_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adoc","adoc",1016893609)], null),((function (ed,filename,adoc_obj){
return (function (){return adoc_obj;
});})(ed,filename,adoc_obj))
);
lt.object.add_behavior_BANG_.call(null,ed,new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299));
return lt.object.raise.call(null,ed,new cljs.core.Keyword("lt.plugins.asciilight","read-editor","lt.plugins.asciilight/read-editor",1728693299));
})], null));
}

//# sourceMappingURL=asciilight_compiled.js.map