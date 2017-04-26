$(function(){

    //アコーディオン（事故連絡の流れ）
    $(".accordionBlock .switch").click(function(){
        $(this).next().slideUp('');
        $(this).find('span.triangle').text("▼");

        if($(this).next().css('display') == 'none'){
            $(this).find('span.triangle').text("▲");
            $(this).next().slideDown('');
        }
    });

});


