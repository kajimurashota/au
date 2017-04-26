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
 

});
