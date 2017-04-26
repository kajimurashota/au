$(function() {

    //===============================
    //申し込みボタン
    //===============================
    $('.sports_sub #apply_btn a, .foot_lower_sp .sports .apply_btn a, #application_2').anchorControl({
        url:'https://www.au-sonpo.co.jp/pca/popup_mbs.html?sPlan=sportsLeisure_kobaiari',
        window_name:"_self",
        camp_cd:true
    });

});

//ヘッダーサブナビ
$(function() {
   jQuery(window).scroll(function(){
      var point_pos = jQuery('#point').offset().top;
      var price_pos = jQuery('#price').offset().top;
      var block_application_pos = jQuery('.block_application').offset().top;
      var scr_count = jQuery(document).scrollTop();
      if(scr_count >= point_pos-130){
         jQuery('#header_tab table td:nth-of-type(1)').addClass("active");
      }
      if(scr_count < point_pos-130 || scr_count > price_pos-130){
         jQuery('#header_tab table td:nth-of-type(1)').removeClass("active");
      }
	  
      if(scr_count >= price_pos-130){
         jQuery('#header_tab table td:nth-of-type(2)').addClass("active");
      }
      if(scr_count < price_pos-130 || scr_count > block_application_pos-130){
         jQuery('#header_tab table td:nth-of-type(2)').removeClass("active");
	  }
	  
   })
   
});


