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
		$('nav#megaMenu').fadeIn('slow');
		$('#layout').css('opacity', 0.5);
	
	});
	
	$('nav#megaMenu').click(function(){
		$('nav#megaMenu').fadeOut('slow');
		$('#layout').css('opacity', 1);
	
	})

	// function toggle	
	$('h1.switch01').toggle(
	function() {
		$(this).next('div.accordionArea').slideDown('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point01_close.gif');
		var point = $(this).parents('div.accordionBlock').offset().top;
			
			$('html,body').animate({
				scrollTop: point },
				'slow'
			);
	},
	function() {
		$(this).next('div.accordionArea').slideUp('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point01_open.gif');
	});
	
	$('h1.switch02').toggle(
	function() {
		$(this).next('div.accordionArea').slideDown('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point02_close.gif');
		var point = $(this).parents('div.accordionBlock').offset().top;
			
			$('html,body').animate({
				scrollTop: point },
				'slow'
			);
	},
	function() {
		$(this).next('div.accordionArea').slideUp('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point02_open.gif');
	});

	$('h1.switch02F').toggle(
	function() {
		$(this).next('div.accordionArea').slideDown('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point02_close_family.gif');
		var point = $(this).parents('div.accordionBlock').offset().top;
			
			$('html,body').animate({
				scrollTop: point },
				'slow'
			);
	},
	function() {
		$(this).next('div.accordionArea').slideUp('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point02_open_family.gif');
	});
	
	$('h1.switch03').toggle(
	function() {
		$(this).next('div.accordionArea').slideDown('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point03_close.gif');
		var point = $(this).parents('div.accordionBlock').offset().top;
			
			$('html,body').animate({
				scrollTop: point },
				'slow'
			);
	},
	function() {
		$(this).next('div.accordionArea').slideUp('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point03_open.gif');
	});
	
	$('h1.switch04').toggle(
	function() {
		$(this).next('div.accordionArea').slideDown('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point04_close.gif');
		var point = $(this).parents('div.accordionBlock').offset().top;
			
			$('html,body').animate({
				scrollTop: point },
				'slow'
			);
	},
	function() {
		$(this).next('div.accordionArea').slideUp('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point04_open.gif');
	});
	
	$('h1.switch05').toggle(
	function() {
		$(this).next('div.accordionArea').slideDown('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point05_close.gif');
		var point = $(this).parents('div.accordionBlock').offset().top;
			
			$('html,body').animate({
				scrollTop: point },
				'slow'
			);
	},
	function() {
		$(this).next('div.accordionArea').slideUp('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_point05_open.gif');
	});

	$('p.switch_golf').toggle(
	function() {
		$(this).next('div.accordionArea').slideDown('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_golf_close.gif');
		var point = $(this).parents('div.accordionBlock').offset().top;
			
			$('html,body').animate({
				scrollTop: point },
				'slow'
			);
	},
	function() {
		$(this).next('div.accordionArea').slideUp('slow');
		$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_golf_open.gif');
	});
			
				
	
	$('p.switchUnder').toggle(
		function() { 
			$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_insurance_close.gif');
			$(this).next('div.accordionArea').slideDown('slow');	
			var point = $(this).parents('div.accordionBlock').offset().top;
			
			$('html,body').animate({
				scrollTop: point },
				'slow'
			);
		},
		function() { 
			$(this).find('img').attr('src', '../common_aute/images3/images_foreign_travel/title_insurance_open.gif');
			$(this).next('div.accordionArea').slideUp('slow');
		}
	);
	
	/* switch tab
	var index = 0;
	$('nav.tab li').click(function() {
		if (index != $('nav.tab li').index(this)) {
			index = $('nav.tab li').index(this); // タブの内容
			$('article.tabContent').hide().eq(index).fadeIn('fast'); // タブ
			$('nav.tab li').removeClass('selected').eq(index).addClass('selected');
		}
	});
	*/


});
