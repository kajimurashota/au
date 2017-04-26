(function($){
	$(document).ready(function($){
		var is_fixed = false;
		snav_fix();
		$(window).scroll(function(){
			snav_fix();
		});
		function snav_fix(){
			var pos = 57;
			if($(window).width()<1000)pos = 31;
			if(is_fixed == false && $(window).scrollTop() > pos){
				$('header').addClass('fixed');
				$('.container').addClass('fixed');
				is_fixed = true;
			}else if(is_fixed == true && $(window).scrollTop() <= pos){
				$('header').removeClass('fixed');
				$('.container').removeClass('fixed');
				is_fixed = false;
			}
		}
        $('a[href=#]').click(function(){
			return false;
		});
        $('a.modal').click(function(){
			$('#modal').show();
			return false;
		});
		if($('#modal').length){
			$('#modal .close,#modal .bg').on('click', function(){
				$('#modal').hide();
			});
		}

        function videoControl(action){
			var $playerWindow = $('#youtube-player')[0].contentWindow;
			$playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
		}
        $('#start').on('click', function(){
			if($(window).width()<780){
				return false;
			}
			$('#main_video').addClass('play');
			videoControl("playVideo");
		});
		$('#close').on('click', function(){
			$('#main_video').removeClass('play');
			videoControl("pauseVideo");
		});
		$('a[href^=#], .pl').click(function(){
		    var speed = 500;
		    var href= $(this).attr("href");
		    var target = $(href == "#" || href == "" ? 'html' : href);
		    var position = target.offset().top;
		    $("html, body").animate({scrollTop:position}, speed, "swing");
		    return false;
		});

		$('.s03sp .head').on('click', function(){
			var p = $(this).parents('.s03sp');
			var tg = p.find('.toggle');
			if(tg.hasClass('open')){
				tg.removeClass('open');
				p.find('.body').stop().slideUp();
			}else{
				tg.addClass('open');
				p.find('.body').stop().slideDown();
			}
		});
		$('#sp_menu').on('click', function(){
			if($(this).hasClass('open')){
				$(this).removeClass('open');
				$('#menu').removeClass('open');
			}else{
				$(this).addClass('open');
				$('#menu').addClass('open');
			}
		});
		$('#menu .wrap').on('click', function(e){
			e.stopPropagation();
		});
		$('#menu ul li a').on('click', function(){
			if($('#contact').length && $(this).hasClass('pl')){
				$('#menu').removeClass('open');
				$('#sp_menu').removeClass('open');
			}
		});

		$('header nav a, header .bottom .h a').hover(function() {
			$(this).removeClass('out').addClass('in');
		}, function() {
			$(this).removeClass('in').addClass('out').delay(300).queue(function(){
				$(this).removeClass('out').dequeue();
			});
		});

		$('footer a.nw').on('click', function(){
			if($(window).width() >= 740){
				var href = $(this).attr('href');
				window.open(href, '', 'width=700,height=650');
				return false;
			}
		});
	});
})(jQuery);
