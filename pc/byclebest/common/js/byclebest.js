$(function() {
    //===============================
    // 高さそろえ
    //===============================
    $('#hoshou1 .left li p , #hoshou1 .right li p').matchHeight();

    //===============================
    //申し込みボタン
    //===============================
    $('.apply_bicycle_best , .byclebest_sub #apply_btn a, .foot_lower_sp .byclebest .apply_btn a, #application_2').anchorControl({
        url:'https://www.au-sonpo.co.jp/pca/popup_mbs.html?sPlan=bicycle_best_2017_kobaiari&urlType=byclebest',
        window_name:"_self",
        camp_cd:true
    });

    $("#app_bnr").anchorControl({
        url:'http://www.ausonpo-app.jp/?CAMP_CD=DR1B110523',
        window_name:"_blank",
        camp_cd:true,
        prop:{
            "width":1000,
            "height":680,
            "toolbar":0,
            "location":0,
            "directories":0,
            "status":0,
            "menubar":0,
            "scrollbars":1,
            "resizable":1
        }
    });
 $("#app_bnr_sp").anchorControl({
        url:'http://www.ausonpo-app.jp/?CAMP_CD=DR1B110523',
        window_name:"_blank",
        camp_cd:true
    });	
});

//ヘッダーサブ
$(function() {
   jQuery(window).scroll(function(){
      var point_pos = jQuery('#point').offset().top;
      var hoshou_pos = jQuery('#hoshou').offset().top;
      var service_pos = jQuery('#service').offset().top;
      var price_pos = jQuery('#price').offset().top;
      var pay_pos = jQuery('.pay_bg').offset().top;
      var scr_count = jQuery(document).scrollTop();
      if(scr_count >= point_pos-130){
         jQuery('#header_tab table td:nth-of-type(2) div div:nth-of-type(1)').addClass("active");
      }
      if(scr_count < point_pos-130 || scr_count > hoshou_pos-130){
         jQuery('#header_tab table td:nth-of-type(2) div div:nth-of-type(1)').removeClass("active");
      }
	  
      if(scr_count >= hoshou_pos-130){
         jQuery('#header_tab table td:nth-of-type(2) div div:nth-of-type(2)').addClass("active");
      }
      if(scr_count < hoshou_pos-130 || scr_count > service_pos-130){
         jQuery('#header_tab table td:nth-of-type(2) div div:nth-of-type(2)').removeClass("active");
	  }
	  
      if(scr_count >= service_pos-130){
         jQuery('#header_tab table td:nth-of-type(2) div div:nth-of-type(3)').addClass("active");
      }
      if(scr_count < service_pos-130 || scr_count > price_pos-130){
         jQuery('#header_tab table td:nth-of-type(2) div div:nth-of-type(3)').removeClass("active");
	  }
	  
      if(scr_count >= price_pos-130){
         jQuery('#header_tab table td:nth-of-type(2) div div:nth-of-type(4)').addClass("active");
      }
      if(scr_count < price_pos-130 || scr_count > pay_pos-130){
         jQuery('#header_tab table td:nth-of-type(2) div div:nth-of-type(4)').removeClass("active");
	  }
   })
});


//矢印の点滅

setInterval((function hoge() {
	
		$('#page_contents .tab .arrow_left').fadeOut(200);
		$('#page_contents .tab_sp .arrow_left').fadeOut(200);
		
    		setTimeout(function(){
			$('#page_contents .tab .arrow_left').show();
			$('#page_contents .tab_sp .arrow_left').show();
    		},600);	
		
    		setTimeout(function(){
			$('#page_contents .tab .arrow_right').show();
			$('#page_contents .tab_sp .arrow_right').show();
    		},1200);	
		
    		setTimeout(function(){
			$('#page_contents .tab .arrow_right').fadeOut(200);
			$('#page_contents .tab_sp .arrow_right').fadeOut(200);
    		},600);	
  
  return hoge;
}()), 1200);	



//エクスパンド


var windowWidth = $(window).width();
var windowSm = 640;
if (windowWidth <= windowSm) {
$(function(){
	$(".btn_open").click(function(){
		if($(this).is(".btn_off")){
			$("+dd",this).slideToggle();
			$(this).removeClass("btn_off");
			$(this).addClass("btn_on");
		}else{
			$("+dd",this).slideToggle();
			$(this).removeClass("btn_on");
			$(this).addClass("btn_off");
			var height = $("+dd",this).height();
			var position = $("+dd",this).offset().top+height-300;
				$('html, body').scrollTop(position-height);
		}
	}).next().hide()
	
	$(".btn_open02").click(function(){
		if($(this).is(".btn_off")){
			$("#hoshou2 .bottom").hide(0);
		}else{
			$("#hoshou2 .bottom").show(500);
		}
	}).next().hide()
	
});
	
}

