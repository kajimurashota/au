$(function(){
	$(".switch").accordion();
});

$.fn.accordion = function(options){
	$(this).toggle(
		function() {
			$(this).next('div.accordionArea').slideDown('slow');
			$(this).find('span.triangle').text("▲");
			$('html,body').animate({ scrollTop:  $(this).parents('div.accordionBlock').offset().top },'slow' );
		},
		function(){
			$(this).next('div.accordionArea').slideUp('slow');
			$(this).find('span.triangle').text("▼");
		}
	);
}
