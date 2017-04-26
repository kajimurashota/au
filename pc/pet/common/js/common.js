$(document).ready(function(){
	sidebarScroll();
});
function sidebarScroll() {
	$mainarea = $('#contentsInner')[0] ? $mainarea = $('#contentsInner') :  $('#mainContent');
	var $fixedArea = $("#fixedBox"),
		$floatArea = $("#floatBox"),
		$w = $(window),
		margin = 10;

	if ($floatArea[0]) {
		$w.scroll(function() {
			var scrollTop = $w.scrollTop();
			var fixedAreaTop = $fixedArea.offset().top,
				fixedAreaHeight = $fixedArea.outerHeight(),
				floatAreaHeight = $floatArea.outerHeight(),
				fixedAreaBottom = fixedAreaTop + fixedAreaHeight,
				mainAreaBottom = $mainarea.offset().top + $mainarea.outerHeight(true);

			if (scrollTop > fixedAreaBottom) {
				
				var floatAreaTop = scrollTop + margin,
					floatAreaBottom = floatAreaTop + floatAreaHeight;
					
				floatAreaTop = (floatAreaBottom < mainAreaBottom) ? floatAreaTop : mainAreaBottom - floatAreaHeight - margin - 1;
				if(floatAreaTop < fixedAreaBottom){ floatAreaTop = fixedAreaBottom; }
				$floatArea.stop().animate({
					marginTop: floatAreaTop - fixedAreaBottom
				}, 500);
			} else {
				$floatArea.stop().animate({
					marginTop:0
				}, 500);
			}

		});
	}

}


;(function($){
  $(document).ready(function(){
    var $w = $(window);
    var $topBtn = $('a.backToTop').css({bottom: 0});
    var $footer = $('#footer');

    var scrollCheck = function(){
      var winTop = $w.scrollTop();
      var windowHeight = $w.height();
      var footerHeight = $footer.height();
      var footerTop = $footer.offset().top;

      if(winTop >= (footerTop - windowHeight)) {
        $topBtn.css({bottom: (windowHeight + winTop - footerTop)+'px'});
      } else {
        $topBtn.css({bottom: 0});
      }
    };

    // 初期表示
    if ($w.scrollTop() > 0) {
        scrollCheck();
    }

    // スクロール
    $(window).scroll(function(){scrollCheck();})
             .click(function(){scrollCheck();})
             .resize(function(){scrollCheck();});
  });

})(jQuery);
