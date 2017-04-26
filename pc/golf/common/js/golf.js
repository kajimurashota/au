$(function() {

    //===============================
    //高さ揃え
    //===============================
    $('.case_text_auhgt').matchHeight();

    //===============================
    //申し込みボタン
    //===============================
    $('.golf_sub #apply_btn a, .foot_lower_sp .golf .apply_btn a, #application_2').anchorControl({
        url:'https://www.au-sonpo.co.jp/pca/popup_mbj.html?kPlan=golf',
        window_name:"_self",
        camp_cd:true
    });

});