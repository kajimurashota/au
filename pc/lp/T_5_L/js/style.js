// JavaScript Document for au-sonpo

var targetWidth = 767;
var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

$(document).ready(function(){
	
	//IMG LOAD1
	$(this).find("img").css("display","none"); 
		
	//IMGCHANGE PC or SP
	if(userAgent.indexOf("IPHONE") != -1 || userAgent.indexOf("ANDROID") != -1 || userAgent.indexOf("MOBILE") != -1 || userAgent.indexOf("iphone") != -1 || userAgent.indexOf("android") != -1 || userAgent.indexOf("mobile") != -1){
		var targetDevice = ($("body").width() <= targetWidth)? "sp" : "pc";
	}else{
		var targetDevice = "pc";
	}

	var imgs = $("img");
	var imgsLength = imgs.length;
	
	if(targetDevice == "sp"){
	//**********CASE:SP
	
		//css_change SP
		$("head").append('<link media="all" href="./T_5_L/css/style_sp.css" type="text/css" rel="stylesheet">');
		
		//img_change SP
		for(var i = 0; i < imgsLength; ++i){
			var txt = $(imgs[i]).attr("src").replace("pc","sp");
			$(imgs[i]).attr({"src":txt,"width":"100%"});
			//IMG LOAD2
			$(imgs[i]).css("display","block"); 	
		}
		
		//text_change SP
		$("p#head-parts").html('<a href="tel:08007001122"><img src="./T_5_L/img/pc/head_parts.png" alt="フリーコール：0800-700-1122 受付時間：9:00〜18:00(年末年始を除く)"></a>');
		/*申込みボタン ※PCとリンク違う場合
		$("div.contact div.but").html('<a href="●" target="_blank"><img src=".//T_5_L/img/sp/contact_but.png" alt="au損保のペット保険  詳細はコチラ" width="100%"></a>');
		*/
		$("p#ill-txt").html('イラスト提供：ウンドッグ<br>(URL: <a href="http://unlog.me/undog/" target="_blank">http://unlog.me/undog/</a>)');
		
	
	}else{
	//**********CASE:PC
	
		//css_change PC
		$("head").append('<link media="all" href="./T_5_L/css/style_pc.css" type="text/css" rel="stylesheet">');
	
		//IE8
		if ((userAgent.indexOf("msie") > -1) && (appVersion.indexOf("msie 8.") > -1)) {
			$("head").append('<link rel="stylesheet" type="text/css" href="./T_5_L/css/ie8.css" />');
		}
		
		//img_change PC
		for(var i = 0; i < imgsLength; ++i){
			//IMG LOAD2
			$(imgs[i]).css("display","block"); 	
		}
	}
});

//scroll totop
$(function() {
	$('a[href^=#]').click(function() {scrollLink($(this), 500);});
});
function scrollLink (link, speed) {
	var speed = speed;
	var href= link.attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$("html, body").animate({scrollTop:position}, speed, "swing");
	return false;
}

