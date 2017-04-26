$(document).ready(function(){
	sidebarScroll();
});

function sidebarScroll() {

	if ($.browser.msie ) {
		// IE

		var $mainarea = $('#mainContent'),
			$sidebar = $("#rightContainer:not(.notScroll)"),
			$w = $(window),
			offset = $sidebar.offset(),
			$navheight = $('#leftWrap').height() - $('#rightContainer').height(),
			topPadding = 345;

		if ($sidebar[0]) {
			$w.scroll(function() {
				if ($w.scrollTop() > offset.top) {
					var tes = $mainarea.outerHeight(true);
					//var x = ($w.scrollTop() - offset.top) + ($sidebar.outerHeight() + topPadding + $navheight);
					var x = ($w.scrollTop() - offset.top) + ($sidebar.outerHeight() + $navheight);

					if(x < $mainarea.outerHeight(true)){
						$sidebar.stop().animate({
							marginTop: $w.scrollTop() - offset.top + topPadding
						}, 500);
					}
				} else {

					$sidebar.stop().animate({
						marginTop:0
					}, 500);
				}
			});
		}

	}

	if ($.browser.mozilla ) {
		// Firefox

		var $mainarea = $('#mainContent'),
			$sidebar = $("#rightContainer:not(.notScroll)"),
			$w = $(window),
			offset = $sidebar.offset(),
			$navheight = $('#leftWrap').height() - $('#rightContainer').height(),
			topPadding = 325;

		if ($sidebar[0]) {
			$w.scroll(function() {
				if ($w.scrollTop() > offset.top) {
					var tes = $mainarea.outerHeight(true);
					//var x = ($w.scrollTop() - offset.top) + ($sidebar.outerHeight() + topPadding + $navheight);
					var x = ($w.scrollTop() - offset.top) + ($sidebar.outerHeight() + $navheight);

					if(x < $mainarea.outerHeight(true)){
						$sidebar.stop().animate({
							marginTop: $w.scrollTop() - offset.top + topPadding
						}, 500);
					}
				} else {

					$sidebar.stop().animate({
						marginTop:0
					}, 500);
				}
			});
		}

	}

	if ( $.browser.webkit ) {
		// Safari, Chrome

		var $mainarea = $('#mainContent'),
			$sidebar = $("#rightContainer:not(.notScroll)"),
			$w = $(window),
			offset = $sidebar.offset(),
			$navheight = $('#leftWrap').height() - $('#rightContainer').height(),
			topPadding = -100;

		if ($sidebar[0]) {
			$w.scroll(function() {
				if ($w.scrollTop() > offset.top) {
					var tes = $mainarea.outerHeight(true);
					//var x = ($w.scrollTop() - offset.top) + ($sidebar.outerHeight() + topPadding + $navheight);
					var x = ($w.scrollTop() - offset.top) + ($sidebar.outerHeight() + $navheight);

					if(x < $mainarea.outerHeight(true)){
						$sidebar.stop().animate({
							marginTop: $w.scrollTop() - offset.top + topPadding
						}, 500);
					}
				} else {

					$sidebar.stop().animate({
						marginTop:0
					}, 500);
				}
			});
		}

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
