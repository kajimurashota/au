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
		$("head").append('<link media="all" href="./sj_7_l/css/style_sp.css" type="text/css" rel="stylesheet">');
		
		//img_change SP
		for(var i = 0; i < imgsLength; ++i){
			var txt = $(imgs[i]).attr("src").replace("pc","sp");
			$(imgs[i]).attr({"src":txt,"width":"100%"});
			//IMG LOAD2
			$(imgs[i]).css("display","block"); 	
		}
		//popup_SP
		openURL = "SJ_7_L_PU_SP.html";
		pop_width = 600;
		pop_height = 500;
	
	}else{
	//**********CASE:PC
	
		//css_change PC
		$("head").append('<link media="all" href="./sj_7_l/css/style_pc.css" type="text/css" rel="stylesheet">');
	
		//IE8
		if ((userAgent.indexOf("msie") > -1) && (appVersion.indexOf("msie 8.") > -1)) {
			$("head").append('<link rel="stylesheet" type="text/css" href="./sj_7_l/css/ie8.css" />');
		}
		
		//img_change PC
		for(var i = 0; i < imgsLength; ++i){
			//IMG LOAD2
			$(imgs[i]).css("display","block"); 	
		}
		
		//popup_PC
		openURL = "SJ_7_L_PU_PC.html";
		pop_width = 1000;
		pop_height = 600;
		
	}
});

//scroll totop
$(function() {
	$('a[href^=#TOP]').click(function() {scrollLink($(this), 500);});
});
function scrollLink (link, speed) {
	var speed = speed;
	var href= link.attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$("html, body").animate({scrollTop:position}, speed, "swing");
	return false;
}

//popup
$(function() {
    $("#popup a").click(function(){
        window.open(openURL,"WindowName","width="+pop_width+",height="+pop_height+",resizable=no,menubar=no,status=no,scrollbars=yes");
        return false;
    });
});
