$(function() {

    //===============================
    //高さ揃え
    //===============================
    $('.case_text_auhgt').matchHeight();

    //===============================
    //申し込みボタン
    //===============================
    $('.kokunai_sub #apply_btn a, .foot_lower_sp .kokunai .apply_btn a, #application_2').anchorControl({
        url:'https://www.au-sonpo.co.jp/pca/popup_mbj.html?kPlan=kokunai',
        window_name:"_self",
        camp_cd:true
    });

});