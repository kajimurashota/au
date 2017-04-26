$(function() {
    // 高さそろえ
    $('.section4 .height').matchHeight();
    $('.section4 .title').matchHeight();
    $('.section5 .height').matchHeight();
    $('.section5 .title').matchHeight();
    $('.centered .box').matchHeight();

    $(".kaigai_sub #apply_btn a, .foot_lower_sp .kaigai .apply_btn a, .btn_order_01").anchorControl({
        url:'https://www.au-sonpo.co.jp/pca/popup_aute_contract.html?SCR=A09',
        window_name: "_self",
        camp_cd:true,
        prop:{
            "width":770,
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
});

$(document).ready(function(){
    //==============================
    // お見積もりセレクトボックス（日数選択時および人数選択時の処理）
    //==============================
    /*初期値*/
    $('#people_box').val("1");
    $('#day_box').val("3");

    //保険料見積もり　切り替え
    $('#day_box,#people_box').on('change', function(){

        if($('#people_box').val() == 1){
            $('#mitsumori_family').hide();
            $('#mitsumori_oneself').show();
        }else{
            $('#mitsumori_oneself').hide();
            $('#mitsumori_family').show();
        }
        calculate();
    });

    //補償内容・保険金額一覧　切り替え
    $('#people_box').on('change', function(){
        if(mode == "PC"){
            if($(this).val() == 1 ){
                $(".table_kojin, #txt_kojin").show();
                $(".table_kazoku").hide();
                $("#txt_kazoku").hide();
            }else{
                $(".table_kojin, #txt_kojin").hide();
                $(".table_kazoku").show();
                $("#txt_kazoku").show();
            }
            //SPテーブル非表示
            $(".table_sp_kojin").hide();
            $(".table_sp_kazoku").hide();
        }else{
            if($(this).val() == 1 ){
                $(".table_sp_kojin, #txt_kojin").show();
                $(".table_sp_kazoku").hide();
                $("#txt_kazoku").hide();
            }else{
                $(".table_sp_kojin, #txt_kojin").hide();
                $(".table_sp_kazoku").show();
                $("#txt_kazoku").show();
            }
            //PCテーブル非表示
            $(".table_kojin").hide();
            $(".table_kazoku").hide();
        }
    });

});

// 保険料を計算して表示します
function calculate(){

    var v = $('#day_box').val();
    var n = $('#people_box').val();

    // 念のためパラメータチェック
    if( v < 1 || 31 < v || n < 1 || 5 < n ){
        return false;
    }

    var arrayN = n - 1;
    var arrayV = v - 1;

    //見積もり用保険料表書き換え
    $('#m_h_br').text( price[arrayN][arrayV][0] );
    $('#m_h_si').text( price[arrayN][arrayV][1] );
    $('#m_h_go').text( price[arrayN][arrayV][2] );

    $('#m_b_br').text( price[arrayN][arrayV][3] );
    $('#m_b_si').text( price[arrayN][arrayV][4] );
    $('#m_b_go').text( price[arrayN][arrayV][5] );

    $('#m_f_br').text( price[arrayN][arrayV][0] );
    $('#m_f_si').text( price[arrayN][arrayV][1] );
    $('#m_f_go').text( price[arrayN][arrayV][2] );
}



//ヘッダーサブナビ
$(function() {
   jQuery(window).scroll(function(){
      var point_pos = jQuery('#point').offset().top;
      var hoshou_pos = jQuery('#hoshou').offset().top;
      var surport_pos = jQuery('#surport').offset().top;
      var pdf1_pos = jQuery('.pdf1').offset().top;
      var section_6_pos = jQuery('.section_6').offset().top;
      var pay_pos = jQuery('.pay').offset().top;
      var scr_count = jQuery(document).scrollTop();
      if(scr_count >= point_pos-130){
         jQuery('#header_tab table td:nth-of-type(1)').addClass("active");
      }
      if(scr_count < point_pos-130 || scr_count > hoshou_pos-130){
         jQuery('#header_tab table td:nth-of-type(1)').removeClass("active");
      }
	  
      if(scr_count >= hoshou_pos-130){
         jQuery('#header_tab table td:nth-of-type(2)').addClass("active");
      }
      if(scr_count < hoshou_pos-130 || scr_count > surport_pos-130){
         jQuery('#header_tab table td:nth-of-type(2)').removeClass("active");
	  }
	  
      if(scr_count >= surport_pos-130){
         jQuery('#header_tab table td:nth-of-type(3)').addClass("active");
      }
      if(scr_count < surport_pos-130 || scr_count > pdf1_pos-130){
         jQuery('#header_tab table td:nth-of-type(3)').removeClass("active");
	  }
	  
      if(scr_count >= section_6_pos-130){
         jQuery('#header_tab table td:nth-of-type(4)').addClass("active");
      }
      if(scr_count < section_6_pos-130 || scr_count > pay_pos-130){
         jQuery('#header_tab table td:nth-of-type(4)').removeClass("active");
	  }
   })
   
});


