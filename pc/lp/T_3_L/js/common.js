$(function(){

   $('a[href^=#]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-55;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

	var fixArea = $('#header');
	var fixTop = fixArea.offset().top;

	$(window).scroll(function(){

		var winTop = $(this).scrollTop();

		if  (winTop > fixTop){
		   $(fixArea).css({ position:'fixed', top:'0'});
		};
		if  (winTop <= fixTop){
		   $(fixArea).css({ position:'relative', top:winTop});
		};
	});

	$(".period_title").on("click", function() {
		if($(".period_title + dd").css("display") == "none"){
			$(".period_title + dd").slideDown("fast");
		$(".period > dt").removeClass("period_backimg02");
	   $(".period > dt").addClass("period_backimg01");
	   }else if($(".period_title + dd").css("display") == "block"){
		   $(".period_title + dd").slideUp("fast");
		   $(".period > dt").removeClass("period_backimg01");
		   $(".period > dt").addClass("period_backimg02");
}
        });

	//tel判別（画像版）
	var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 && ua.indexOf('iPod') == -1 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 && ua.indexOf('SC-01C') == -1 && ua.indexOf('A1_07') == -1 ){
        $('.sp_tel img').each(function(){
            var alt = $(this).attr('alt');
            $(this).wrap($('<a>').attr('href', 'tel:' + alt.replace(/-/g, '')));
        });
    }



});