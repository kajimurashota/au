$(function(){
	
	
	
	// page scroll
	$("a[href^=#]").click(function(){
		var Hash = $(this.hash);
		var HashOffset = $(Hash).offset().top;
		$("html,body").animate({
			scrollTop: HashOffset
		}, 1000);
		return false;
	});
	
	
	$('header#header p.menu').click( function() {
		$('#megaMenu_wrapper').fadeIn('slow');
		$('#layout').css('opacity', 0.5);
	
	});
	
	$('#megaMenu_wrapper #float_menu_close').click(function(){
		$('#megaMenu_wrapper').fadeOut('slow');
		$('#layout').css('opacity', 1);
	})
	$('#layout').click(function(){
		$('#megaMenu_wrapper').fadeOut('slow');
		$('#layout').css('opacity', 1);
	})



});
