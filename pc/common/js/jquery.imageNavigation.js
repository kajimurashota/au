(function($) {
	function imageNavigationSlide(option) {
		var $active = $('.navi-image a.active', option.elem);
		if ( $active.length == 0 ) $active = $('.navi-image a:last', option.elem);
		var $next =  $active.next().length ? $active.next() : $('.navi-image a:first' ,option.elem);
		$active.addClass('last-active');
		var $active_navi = $(".navi ."+ $active.attr("rel") +"", option.elem); 
		var $next_navi = $(".navi ."+ $next.attr("rel") +"", option.elem); 
		$active_navi.removeClass("active");
		$next_navi.addClass("active");
		rolloverImage_chenge(option);
		$next.css({opacity: 0.0})
		.addClass('active')
		.animate({opacity: 1.0}, option.animationTime, function() {
			$active.removeClass("active last-active");
		});
	}
	
	var imageNavigationID;
	
	function startInterval(option){
		if(option.autoPlay) {
			imageNavigationID = setInterval(function() {
				imageNavigationSlide(option)
			}, option.time );
		}
	}
	
	function rolloverImage_on(obj, option){
		if (!option.rolloverImage) return;
		$("img.over", obj).stop().fadeTo(option.rolloverTime,1);
	}
	
	function rolloverImage_out(obj, option){
		if (!option.rolloverImage) return;
		$(".over", obj).fadeTo(option.rolloutTime,0);
	}
	
	function rolloverImage_chenge(option){
		$(".navi a.active img.over", option.elem).stop().fadeTo(option.rolloverTime,1);
		$(".navi a:not(.active) img.over", option.elem).stop().fadeTo(option.rolloutTime,0);
	}
	
	//jquery メソッド
	$.fn.imageNavigation = function(option) {
		option = $.extend({
			elem:this,
			time: 6000,
			animationTime: 500,
			autoPlay: true,
			rolloverImage: true,
			rolloverTime: 10,
			rolloutTime: 800
		}, option);
		
		var $active = $('.navi-image a.active', option.elem),
			naviCnt = $(".navi a", option.elem).size();
			
			
		if ( $active.length == 0 ) {
			$active = $('.navi-image a:first', option.elem);
			$active.addClass("active");
			$(".navi a:first", option.elem).addClass("active");
		}
		
		for(i　=　1;　i　<=　naviCnt;　i++) {
			$(".navi li:nth-child("+i+") a",option.elem).addClass("navi-"+i).attr("rel","navi-"+i);
			$(".navi-image a:nth-child("+i+")",option.elem).addClass("navi-"+i).attr("rel","navi-"+i);
		}
		
		$(".navi li a", option.elem).each(function(){
			$(this).css("position", "relative");
			if(option.rolloverImage) {
				overSrc = $("img", this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2");
				$(this).prepend('<img src="'+overSrc+'" class="over" />');
				$("img.over" ,this).css("position", "absolute").css({opacity: 0.0});
			}
		});
		
		$("a.active img.over", this).stop().css({opacity: 1.0});
		
		$(".navi a",option.elem).click(function(e){
			e.preventDefault();
			$active = $('.navi-image a.active', option.elem);
			$next = $(".navi-image a."+$(this).attr("rel")+"");
			$('.navi a', option.elem).removeClass("active");
			$(this).addClass("active");
			rolloverImage_chenge(this, option);
			if($active.attr("rel") != $next.attr("rel") ) {
				$active.addClass('last-active');
				$active.removeClass('active');
				$next.stop().css({opacity: 0.0})
				.addClass('active')
				.animate({opacity: 1.0}, option.animationTime, function() {
					$active.removeClass('active last-active');
				});
			}
		})
		
		//メインビジュアルとナビゲーションにMouseを載せた際
		$('.navi li a, .navi-image a')
			.mouseover(function(){
				if(option.autoPlay) {
					clearInterval(imageNavigationID);
				}
			})
			.mouseout(function() {
				startInterval(option);
			});
		
		startInterval(option);
		if(option.rolloverImage){
			$(".navi", option.elem).hover(function(){
		},function(){
			$("a.active img.over", this).stop().css({opacity: 1.0});
			rolloverImage_chenge(option);
		});
	}
}
})(jQuery);

$(window).load(function() {
	start();
	
	function start() {
		$("#image-navigation").imageNavigation({
			time:6000,
			animationTime:300,
			rolloverTime: 0,
			rolloutTime: 300
		});
	}
})

