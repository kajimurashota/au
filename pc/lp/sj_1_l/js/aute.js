// JavaScript Document
var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

$(document).ready(function(){

	//common/img/sp/customer_txt.jpg
	var targetDevice = ($("body").width() <= 320)? "sp" : "pc";
	//alert("targetDevice : " + targetDevice);
	var time = new Date();
	time = time.getTime();
	
	//2014/7/16 2014/8/31
	var fcSrc = "./sj_1_l/img/" + targetDevice + "/customer_txt" + ((time > 1405436399000 && time < 1409497200000)? "24" : "") + ".png";
	$("#customer img").attr("src", fcSrc);

	if(targetDevice == "sp"){
		//SP
		
		//foot num
		$('#flogo #fnum').html("A14D310207[1406]");
		
		//imgchange
		var imgs = $(".lazy");
		var imgsLength = imgs.length;
		for(var i = 0; i < imgsLength; ++i){
			//$(imgs[i]).attr("data-original", str_replace("pc", "sp", $(imgs[i]).attr("data-original")));
			$(imgs[i]).attr("src", $(imgs[i]).attr("data-original").replace("pc", "sp"));
			$(imgs[i]).attr("data-original", null);
		}

		$("map").append('<area shape="rect" coords="13,472,80,520" alt="自転車ロードサービス(付帯サービス)" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_18.html\',\'myau\');"><area shape="rect" coords="13,445,82,473" alt="弁護士費用等" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_17.html\',\'myau\');"><area shape="rect" coords="13,418,82,445" alt="法律相談費用" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_16.html\',\'myau\');"><area shape="rect" coords="13,380,81,417" alt="示談代行サービス" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_11.html\',\'myau\');"><area shape="rect" coords="12,343,80,378" alt="個人賠償責任(自己負担額なし)" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_10.html\',\'myau\');"><area shape="rect" coords="12,294,82,341" alt="通院保険金日額(通院1日につき)" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_7.html\',\'myau\');"><area shape="rect" coords="12,101,81,145" alt="死亡・後遺障害" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_2.html\',\'myau\');"><area shape="rect" coords="12,147,81,195" alt="入院一時金(3日以上の入院で)"href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_3.html\',\'myau\');"><area shape="rect" coords=12,197,83,244 alt="入院保険金日額(入院1日につき)" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_5.html\',\'myau\');"><area shape="rect" coords="12,247,81,292" alt="手術保険金(手術により)" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_6.html\',\'myau\');">');
		
		var url = window.location.href;

		var camp_pre = url.indexOf("CAMP_CD");
		var url2 = "";
		
		if (camp_pre != "-1"){
			url2 = url.substring(camp_pre);
			var camp_suf = url2.indexOf("&");
			if(camp_suf != "-1"){
				url2 = url2.substring(0,camp_suf);
			}
		}

		if (url2 != ""){
			openURL = "https://www.au-sonpo.co.jp/pca/popup_aute_contract.html?SCR=A07&" + url2;
			openTopPage = "http://www.au-sonpo.co.jp/mb/MBO_1.do?SCR=012&" + url2;
			openRoadService = "../hosyo_naiyo/standard/S_2_H_18.html";
		} else {
			openURL = "https://www.au-sonpo.co.jp/pca/popup_aute_contract.html?SCR=A07";
			openTopPage = "http://www.au-sonpo.co.jp/mb/MBO_1.do?SCR=012"
			openRoadService = "../hosyo_naiyo/standard/S_2_H_18.html";
		}
		$("#se7-link a").click(function(){openwin2(openRoadService,"myau");});
		$("#flogo a").attr("href",openTopPage);
		
		avW = 320;
		avH = 480;
		targetW = "_self";
		
		$("head").append('<meta name="viewport" content="width=320px">');
		
	}else{
		//PC

		var imgs = $(".lazy");
		var imgsLength = imgs.length;
		for(var i = 0; i < imgsLength; ++i){
			//$(imgs[i]).attr("data-original", str_replace("pc", "sp", $(imgs[i]).attr("data-original")));
			$(imgs[i]).attr("src", $(imgs[i]).attr("data-original"));
			$(imgs[i]).attr("data-original", null);
		}

		//IE8
		if ((userAgent.indexOf("msie") > -1) && (appVersion.indexOf("msie 8.") > -1)) {
			$("head").append('<link href="./sj_1_l/css/style.css" type="text/css" rel="stylesheet"><link rel="stylesheet" type="text/css" href="./sj_1_l/css/ie8.css" />');
			$("footer").before('<div id="footer">');
			$("footer").after('</div>');
		}

		//youtube
		$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
		//Example of preserving a JavaScript event for inline calls.
		$("#click").click(function(){ 
			$('#click').css({"background-color":"#ccc", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
			return false;
		});	
		
		$("map").append('<area shape="rect" coords="124,423,307,484" alt="示談代行サービス"href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_11.html\',\'myau\');"><area shape="rect" coords="124,354,307,415" alt="個人賠償責任(自己負担額なし)"href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_10.html\',\'myau\');"><area shape="rect" coords="124,284,307,345" alt="通院保険金日額(通院1日につき)" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_7.html\',\'myau\');"><area shape="rect" coords="124,214,307,275" alt="手術保険金(手術により)" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_6.html\',\'myau\');"><area shape="rect" coords="125,143,308,204" alt="入院保険金日額(入院1日につき)" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_5.html\',\'myau\');"><area shape="rect" coords="125,73,308,134" alt="入院一時金(3日以上の入院で)" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_3.html\',\'myau\');"><area shape="rect" coords="125,5,308,66" alt="死亡・後遺障害" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_2.html\',\'myau\');"><area shape="rect" coords="123,493,307,554" alt="法律相談費用" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_16.html\',\'myau\');"><area shape="rect" coords="124,563,308,624" alt="弁護士費用等" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_17.html\',\'myau\');"><area shape="rect" coords="123,634,308,711" alt="自転車ロードサービス(付帯サービス)" href="javascript:openwin2(\'../hosyo_naiyo/standard/S_2_H_18.html\',\'myau\');">');
		
		openURL = "https://www.au-sonpo.co.jp/pca/popup_aute_contract.html?SCR=A07";
		openRoadService =  "../hosyo_naiyo/standard/S_2_H_18.html";
		openTopPage = "../index.html";
		$("#se7-link a").click(function(){openwin2(openRoadService,"myau");});
		$("#flogo a").attr("href",openTopPage);

		avW = 770;
		avH = 680;
		targetW = "popup";

	}
	
	if (!(appVersion.indexOf("msie 8.") > -1)){
		//scrool
		$('a[href^=#]').click(function(){
			var speed = 800;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("html, body").animate({scrollTop:position}, speed, "swing");
			return false;
		});
	}
});

//openwindow
var win1
function openwin1(winname){
	win1 = open(openURL,targetW,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,top=0,left=0,width=" + avW + ",height=" + avH + "");
	win1.opener = self;
	win1.focus();
}
// 親ウインドウが閉じる際に子ウインドウも閉じる
onunload = function() {
	if(!win1) return false; 
	win1.close();
}
var win2
function openwin2(pop,winname){
	var avW = 700;
	var avH = 650;
	win2 = open(pop,'popup',"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,top=0,left=0,width=" + avW + ",height=" + avH + "");
	win2.opener = self;
	win2.focus();
}
// 親ウインドウが閉じる際に子ウインドウも閉じる
onunload = function() {
	if(!win2) return false; 
	win2.close();
}

function openwin2_1(pop,winname){
	var avW = 980;
	var avH = 650;
	win2 = open(pop,'popup',"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,top=0,left=0,width=" + avW + ",height=" + avH + "");
	win2.opener = self;
	win2.focus();
}