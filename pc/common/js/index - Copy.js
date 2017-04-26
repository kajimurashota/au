$(function(){
	takeOff();
	golfSwing();
});


//飛行機
function takeOff () {
	var ipadFlg = ( navigator.userAgent.indexOf('iPad') != -1 ) ? true : false;
	
	if (!ipadFlg) {
		var $bg = $('li.product_block.airplane'),
				$hitArea = $('a.hitarea.airplane');
		
		var bgImgOut = 'url(common/img/index/btn_airplane_rollout.png) no-repeat',
				bgImgOver = 'url(common/img/index/btn_airplane_rollover.png) no-repeat';
	
		var dw = $(document).width(),
				dh = $(document).height(),
				sx = 50, sy = 15,
				ty = 1000, lx = 1000;
				
		$hitArea
			.unbind('mouseover').bind('mouseover', function(e) {
				$('#hikouki:not(:animated)')
					.animate(
						{ 
							'left': dw, 
							'top': -ty 
						},
						{ 
							duration: 2000, 
							easing: "easeInBack", 
							complete: function(){
								$(this)
									.css({
										'left': -lx, 
										'top': ty
									})
									.animate(
										{ 
											'left': sx, 
											'top': sy 
										},
										{
											duration: 1500,
											easing: "easeOutQuad"
										}
									)
							}
						}
					);
					
				$bg.css('background', bgImgOver);
			})
			.unbind('mouseout').bind('mouseout', function(e) {
				$bg.css('background', bgImgOut);
			});
	}
}


//ゴルフボール
function golfSwing () {
	var iPadFlg = ( navigator.userAgent.indexOf('iPad') != -1 ) ? true : false,
			ieFlg = ( navigator.userAgent.indexOf('MSIE') != -1 ) ? true : false,
			ie8Flg = ( navigator.userAgent.indexOf('MSIE 8.0') != -1 ) ? true : false,
			ie9Flg = ( navigator.userAgent.indexOf('MSIE 9.0') != -1 ) ? true : false;
			
	if (iPadFlg) {
		return;
	}
				
	var $patter = $('#patter'),
			$ball = $('#golfball:not(:animated)'),
			$bg = $('li.product_block.golf'),
			$hitArea = $('a.hitarea.golf');
			
	var patterImgOut = 'common/img/index/icon_patter.png',
			patterImgOver = 'common/img/index/icon_patter_active.gif',
			bgImgOut = 'url(common/img/index/btn_newgolf_rollout.png) no-repeat',
			bgImgOver = 'url(common/img/index/btn_newgolf_rollover.png) no-repeat',
			ballImgIe8 = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(Src=common/img/index/golfball.png,SizingMethod=scale)';

	if (ieFlg) {
		var ieAnimateFlg = false;
	}
	
	if (ie8Flg) {
		$ball.css({'background': 'none','filter': ballImgIe8});
	}
					
	$hitArea.unbind('mouseover').bind('mouseover',function() {
		$bg.css('background', bgImgOver);
			
		if (ieFlg) {
			
			if (ieAnimateFlg) {
				return;
			} else {
				ieAnimateFlg = true;
				
				$patter.attr('src',patterImgOver).css({'margin-top':'-17px','margin-left':'3px'});
				
				if (ie8Flg) {
					$('#golfball:not(:animated)')
						.css({
							'background':'none',
							'filter':'progid:DXImageTransform.Microsoft.AlphaImageLoader(Src=common/img/index/golfball.png,SizingMethod=scale);',
						})
						.delay(600)
						.animate(
							{
								'left':'-85px', 
								'top':'-85px', 
								'width':'325px', 
								'height':'325px'
							},
							{
								duration: 500, 
								easing: "easeInExpo", 
								complete: function () {
									$(this)
										.delay(300)
										.hide('slow',function () {
											$(this)
												.show()
												.css({
													'background':'none',
													'filter':'progid:DXImageTransform.Microsoft.AlphaImageLoader(Src=common/img/index/golfball.png,SizingMethod=scale);',
													'left': '62px',
													'top': '62px',
													'width': '20px',
													'height': '20px'
												});
													
											ieAnimateFlg = false;
										})
								}
							}
						)
				} else if (ie9Flg) {
					$('#golfball:not(:animated)')
						.delay(600)
						.animate(
							{
								'left':'-85px', 
								'top':'-85px', 
								'width':'325px', 
								'height':'325px'
							},
							{
								duration: 500, 
								easing: "easeInExpo", 
								complete: function () {
									$(this)
										.delay(300)
										.fadeOut('slow', function () {
											$(this)
												.show()
												.css({
													'left': '62px',
													'top': '62px',
													'width': '20px',
													'height': '20px'
												});
													
											ieAnimateFlg = false;
										})
								}
							}
						)
				} else {
					var ballAnimationSetting = [
						'	0% {',
						'	}',
						'	80% {',
						'		opacity: 1;',
						'		left: -85px;',
						'		top: -85px;',
						'		width: 325px;',
						'		height: 325px;',
						'		background-size: 325px 325px;',
						'	}',
						'	100% {',
						'		opacity: 0;',
						'		left: -85px;',
						'		top: -85px;',
						'		width: 325px;',
						'		height: 325px;',
						'		background-size: 325px 325px;',
						'	}',
					].join('');
				
					var ballAnimation = [
						'@-webkit-keyframes "flyaway"{',
						ballAnimationSetting,
						'}',
						'@-moz-keyframes flyaway{',
						ballAnimationSetting,
						'}',
					].join('');
					
					$('head').append('<style>' + ballAnimation + '</style>');
					
					if ( !$ball.hasClass('animate') ) {
						$patter.attr('src',patterImgOver).css({'margin-top':'-17px','margin-left':'3px'});
		
						$ball.addClass('animate').bind('animationend webkitAnimationEnd',function() {
							$(this).removeClass('animate');
							$patter.attr('src',patterImgOut).css({'margin-top':'0px','margin-left':'0px'});
						});
					}
				}
				
	}
	
	
	$hitArea
		.unbind('mouseout')
		.bind('mouseout',function () {
			$bg
				.css(
					'background', bgImgOut
				);
			$patter
				.attr('src',patterImgOut)
				.css({
					'margin-top':'0px',
					'margin-left':'0px'
				});
		})
}
