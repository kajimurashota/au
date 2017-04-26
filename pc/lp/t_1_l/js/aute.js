// JavaScript Document

var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

$(document).ready(function(){

	//t_1_l/img/sp/customer_txt.jpg
	var targetDevice = ($("body").width() <= 320)? "sp" : "pc";
	//alert("targetDevice : " + targetDevice);
	var time = new Date();
	time = time.getTime();

	//2014/7/16 2014/8/31
	var fcSrc = "./t_1_l/img/" + targetDevice + "/customer_txt" + ((time > 1405436399000 && time < 1409497200000)? "24" : "") + ".png";
	$("#customer img").attr("src", fcSrc);

	if(targetDevice == "sp"){
		//SP

		//foot num
		$('#flogo #fnum').html("A14C310647[1412]");

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
			openURL = "https://www.au-sonpo.co.jp/pca/popup_aute_pet_20140401?" + url2;
		}else{
			strCAMP_CD = getCookie("CAMP_CD");
			if(strCAMP_CD != ""){
				openURL = "https://www.au-sonpo.co.jp/pca/popup_aute_pet_20140401?CAMP_CD=" + strCAMP_CD;
			}else{
				openURL = "https://www.au-sonpo.co.jp/pca/popup_aute_pet_20140401";
			}
		}
		
		avW = 320;
		avH = 480;
		targetW = "_self";

		$("head").append('<meta name="viewport" content="width=320px">');

	}else{
		//PC

		//youtube
		$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
		//Example of preserving a JavaScript event for inline calls.
		$("#click").click(function(){
			$('#click').css({"background-color":"#ccc", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
			return false;
		});
		
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
			openURL = "https://www.au-sonpo.co.jp/pca/popup_aute_pet_20140401?" + url2;
		}else{
			strCAMP_CD = getCookie("CAMP_CD");
			if(strCAMP_CD != ""){
				openURL = "https://www.au-sonpo.co.jp/pca/popup_aute_pet_20140401?CAMP_CD=" + strCAMP_CD;
			}else{
				openURL = "https://www.au-sonpo.co.jp/pca/popup_aute_pet_20140401";
			}
		}
		
		avW = 770;
		avH = 680;
		targetW = "_self";
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
// 隕ｪ繧ｦ繧､繝ｳ繝峨え縺碁哩縺倥ｋ髫帙↓蟄舌え繧､繝ｳ繝峨え繧る哩縺倥ｋ
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

function openTop(){

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
			openURL = "http://www.au-sonpo.co.jp?" + url2;
		}else{
			strCAMP_CD = getCookie("CAMP_CD");
			if(strCAMP_CD != ""){
				openURL = "http://www.au-sonpo.co.jp?CAMP_CD=" + strCAMP_CD;
			}else{
				openURL = "http://www.au-sonpo.co.jp/";
			}
		}
		
		location.href = openURL;
		
}

// 隕ｪ繧ｦ繧､繝ｳ繝峨え縺碁哩縺倥ｋ髫帙↓蟄舌え繧､繝ｳ繝峨え繧る哩縺倥ｋ
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


//菫晞匱譁吶陦ｨ
  $(function(){

    $("div.animalbox0905").click(

      function(){

        $('div.animalbox0905"').addClass('animalNonactive');

        $(this).removeClass('animalNonactive');

        var animalList = {

          dogABC : {

            dogABCtxt1:{display:true},

            dogABCtxt2:{display:true},

            dog123txt2:{display:false},

            cattxt1:{display:false},

            dogAreaABC0905:{display:true},

            dogArea1230905:{display:false},

            dogAreacat0905:{display:false},

            dogAtable:{display:true},

            dogBtable:{display:false},

            dogCtable:{display:false},

            cattable:{display:false}

          },

          dog123 : {

            dogABCtxt1:{display:false},

            dogABCtxt2:{display:false},

            dog123txt2:{display:true},

            cattxt1:{display:false},

            dogAreaABC0905:{display:false},

            dogArea1230905:{display:true},

            dogAreacat0905:{display:false},

            dogAtable:{display:true},

            dogBtable:{display:false},

            dogCtable:{display:false},

            cattable:{display:false}

          },

          catBtn: {

            dogABCtxt1:{display:false},

            dogABCtxt2:{display:false},

            dog123txt2:{display:false},

            cattxt1:{display:true},

            dogAreaABC0905:{display:false},

            dogArea1230905:{display:false},

            dogAreacat0905:{display:true},

            dogAtable:{display:false},

            dogBtable:{display:false},

            dogCtable:{display:false},

            cattable:{display:true}

          }

        }

        var options = animalList[this.id];

        for (var element in options){

          if(options[element].display){

            $("#"+element).show();

            if(element == "dogAreaABC0905"){

              dogBoxClick($("#dogABtn"));

            }

            if(element == "dogArea1230905"){

              dogBoxClick($("#dog1Btn"));

            }

          }else{

            $("#"+element).hide();

          }

        }



      }

    );

    $("div.dogBox0905").click(

      function(){ dogBoxClick(this); }

    );

    dogBoxClick  = function(oThis){

        $('div.dogBox0905"').addClass('dogNonactive');

        $(oThis).removeClass('dogNonactive');

        var btnList = {

          dogABtn:"dogAtable",

          dogBBtn:"dogBtable",

          dogCBtn:"dogCtable",

          dog1Btn:"dogAtable",

          dog2Btn:"dogBtable",

          dog3Btn:"dogCtable",

          catBtn:"cattable"

        }

        var oThisTable = btnList[oThis.id];

        $("table.premiumTable").each(

          function(){

            if(this.id == oThisTable){

              $(this).show();

            }else{

              $(this).hide();

            }



          }

        );

      }

    }

  );



