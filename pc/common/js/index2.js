if ( navigator.userAgent.indexOf('iPad') == -1 ) {
	$(function(){
		takeOff();
	});
	
	function takeOff () {
		var
		dw = $(document).width(),
		dh = $(document).height(),
		sx = 50,
		sy = 15,
		ty = 1000,
		lx = 1000,
		dt = 1000;
		
		$('#product_btn02').unbind('mouseover').bind('mouseover', function() {
			$('#hikouki:not(:animated)')
				.animate(
					{ 'left': dw, 'top': -ty },
					{ duration: dt, easing: "easeInBack", complete: function(){
							$(this)
								.css({'left': -lx, 'top': ty})
								.animate(
									{ 'left': sx, 'top': sy },
									{ duration: dt, easing: "easeOutQuad" }
								)
						}
					}
				);
		});
	}
}
