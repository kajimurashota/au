
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_aute_logo_wra}","click",function(sym,e){window.open("http://www.au-sonpo.co.jp/pc/","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieEwra}","click",function(sym,e){window.open("movie/m009.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieBwra}","click",function(sym,e){window.open("movie/m008.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_newsAwra}","click",function(sym,e){window.open("movie/o002.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieAwra}","click",function(sym,e){window.open("movie/m007.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieCwra}","click",function(sym,e){window.open("movie/t006.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieDwra}","click",function(sym,e){window.open("movie/t007.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_about_wra}","click",function(sym,e){window.open("about/","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics05wra}","click",function(sym,e){window.open("app/index.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'topics01'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3004,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics_a_on}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics_a_on}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy01}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy01}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("topics01");
//Edge symbol end:'topics01'

//=========================================================

//Edge symbol: 'topics01wra'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_topics01}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics01}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("topics01wra");
//Edge symbol end:'topics01wra'

//=========================================================

//Edge symbol: 'tppics03wra'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics032}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics032}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("tppics03wra");
//Edge symbol end:'tppics03wra'

//=========================================================

//Edge symbol: 'topics03'
(function(symbolName){})("topics03");
//Edge symbol end:'topics03'

//=========================================================

//Edge symbol: 'topics04'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("topics04");
//Edge symbol end:'topics04'

//=========================================================

//Edge symbol: 'topics04wra'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics04}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics04}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("topics04wra");
//Edge symbol end:'topics04wra'

//=========================================================

//Edge symbol: 'topics05wra'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics052}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics052}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("topics05wra");
//Edge symbol end:'topics05wra'

//=========================================================

//Edge symbol: 'topics05'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy013}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy013}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("topics05");
//Edge symbol end:'topics05'

//=========================================================

//Edge symbol: '下位レベル'
(function(symbolName){})("下位レベル");
//Edge symbol end:'下位レベル'

//=========================================================

//Edge symbol: 'aute_logo_wra'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_aute_logo4}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_aute_logo4}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("aute_logo_wra");
//Edge symbol end:'aute_logo_wra'

//=========================================================

//Edge symbol: 'aute_logo'
(function(symbolName){})("aute_logo");
//Edge symbol end:'aute_logo'

//=========================================================

//Edge symbol: 'btn_about_wra'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_btn_about_on}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_about_on}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_about_on}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("btn_about_wra");
//Edge symbol end:'btn_about_wra'

//=========================================================

//Edge symbol: 'linkdummy01'
(function(symbolName){})("linkdummy01");
//Edge symbol end:'linkdummy01'

//=========================================================

//Edge symbol: 'topics01wra_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2231,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_newsB}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_newsB}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("newsBwra");
//Edge symbol end:'newsBwra'

//=========================================================

//Edge symbol: 'topics01_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3004,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics_a_on}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics_a_on}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy01}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy01}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("newsB");
//Edge symbol end:'newsB'

//=========================================================

//Edge symbol: 'newsBwra_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_newsC}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_newsC}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("newsCwra");
//Edge symbol end:'newsCwra'

//=========================================================

//Edge symbol: 'newsB_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3004,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics_a_on}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_topics_a_on}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy01}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy01}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("newsC");
//Edge symbol end:'newsC'

//=========================================================

//Edge symbol: 'topics04wra_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieB}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieB}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("movieBwra");
//Edge symbol end:'movieBwra'

//=========================================================

//Edge symbol: 'topics04_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("movieB");
//Edge symbol end:'movieB'

//=========================================================

//Edge symbol: 'movieBwra_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_newsA}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_newsA}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("newsAwra");
//Edge symbol end:'newsAwra'

//=========================================================

//Edge symbol: 'movieB_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("newsA");
//Edge symbol end:'newsA'

//=========================================================

//Edge symbol: 'newsAwra_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieE}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieE}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("movieEwra");
//Edge symbol end:'movieEwra'

//=========================================================

//Edge symbol: 'newsA_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("movieE");
//Edge symbol end:'movieE'

//=========================================================

//Edge symbol: 'movieBwra_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieA}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieA}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("movieAwra");
//Edge symbol end:'movieAwra'

//=========================================================

//Edge symbol: 'movieB_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("movieA");
//Edge symbol end:'movieA'

//=========================================================

//Edge symbol: 'movieAwra_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieC}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieC}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("movieCwra");
//Edge symbol end:'movieCwra'

//=========================================================

//Edge symbol: 'movieA_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("movieC");
//Edge symbol end:'movieC'

//=========================================================

//Edge symbol: 'movieCwra_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieD}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_movieD}","mouseout",function(sym,e){sym.play();});
//Edge binding end
})("movieDwra");
//Edge symbol end:'movieDwra'

//=========================================================

//Edge symbol: 'movieC_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseover",function(sym,e){sym.play(0.25);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkdummy012}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("movieD2");
//Edge symbol end:'movieD2'
})(jQuery,AdobeEdge,"EDGE-16451009");