// JavaScript Document

var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

$(document).ready(function(){

  //t_1_l/img/sp/customer_txt.jpg
  var targetDevice = ($("body").width() <= 320)? "sp" : "pc";
  
  if(targetDevice == "sp"){
    //SP
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
// 
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
// 
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

function openPage(oepn_url){

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
      openURL = oepn_url + "?" + url2;
    }else{
      strCAMP_CD = getCookie("CAMP_CD");
      if(strCAMP_CD != ""){
        openURL = oepn_url+"?CAMP_CD=" + strCAMP_CD;
      }else{
        openURL = oepn_url;
      }
    }
    
    location.href = openURL;
    
}

