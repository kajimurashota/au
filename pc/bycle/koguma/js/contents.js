$(function() {

	//ページ内スクロール
	$(".btn_sample").click(function () {
		var i = $(".btn_sample").index(this)
		var p = $(".content").eq(i).offset().top;
		$('html,body').animate({ scrollTop: p }, 'fast');
		return false;
	});

	//ページ上部へ戻る
	$(".btn_top").click(function () {
		$('html,body').animate({ scrollTop: 0 }, 'nomal');
		return false;
	});
	
	var h = $(window).height();
	var sTop = $(document).scrollTop() + $(window).height();
	var x = 50;
/*	if($.browser.mise && $.browser.version<7){
*/		$(window).scroll(function(){
			 if ($(document).scrollTop() >= x) {
				$("#goToTop a").fadeIn("fast");
				return false;
  			  } else {
				$("#goToTop a").fadeOut("fast");
				return false;
  			  }
		});
/*	}*/

});

