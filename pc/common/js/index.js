$(function(){
	golfSwing();
});


//ゴルフボール
function golfSwing () {
	var iPadFlg = ( navigator.userAgent.indexOf('iPad') != -1 ) ? true : false,
			ieFlg = ( navigator.userAgent.indexOf("MSIE") != -1 ) ? true : false,
			ieAnimateFlg = false;
	
	if (iPadFlg) {
		return;
	} else {
		var $patter = $('#patter'),
				$ball = $('#golfball:not(:animated)'),
				$bg = $('li.product_block.golf'),
				$hitArea = $('a.hitarea.golf');
				
		var patterImgOut = 'common/img/index/icon_patter.png',
				patterImgOver = 'common/img/index/icon_patter_active.gif'
				bgImgOut = 'url(common/img/index/btn_newgolf_rollout.png) no-repeat',
				bgImgOver = 'url(common/img/index/btn_newgolf_rollover.png) no-repeat';
				
		if(ieFlg){
			$ball.css({
				'background':'none',
				'filter':'progid:DXImageTransform.Microsoft.AlphaImageLoader(Src=common/img/index/golfball.png,SizingMethod=scale)'
			})
		} else {
			var ballAnimationSetting = [
				'	0% {',
				'	}',
				'	80% {',
				'		opacity: 1;',
				'		left: -55px;',
				'		top: -55px;',
				'		width: 260px;',
				'		height: 260px;',
				'		background-size: 260px 260px;',
				'	}',
				'	100% {',
				'		opacity: 0;',
				'		left: -55px;',
				'		top: -55px;',
				'		width: 260px;',
				'		height: 260px;',
				'		background-size: 260px 260px;',
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
		}
				
		$hitArea.unbind('mouseover').bind('mouseover',function() {
				
			$bg.css('background', bgImgOver);
			
			if (ieFlg) {
				if (ieAnimateFlg) {
					return;
				} else {
					ieAnimateFlg = true;
					
					$patter.attr('src',patterImgOver).css({'margin-top':'-17px','margin-left':'3px'});
					
					$('#golfball:not(:animated)')
						.delay(600)
						.animate(
							{
								'left': '-55px',
								'top': '-55px',
								'width': '260px',
								'height': '260px'
							},
							{
								duration: 500, 
								easing: "easeInExpo",
								complete: function(){
									$(this)
										.delay(300)
										.fadeOut('slow',function () {
											$(this)
												.show()
												.css({
													'background':'none',
													'filter':'progid:DXImageTransform.Microsoft.AlphaImageLoader(Src=common/img/index/golfball.png,SizingMethod=scale);',
													'left': '62px',
													'top': '62px',
													'width': '20px',
													'height': '20px',
												});
												
											ieAnimateFlg = false;
									});
								}
							}
						)
				}
			} else {
				if ( !$ball.hasClass('animate') ) {
					$patter.attr('src',patterImgOver).css({'margin-top':'-17px','margin-left':'3px'});

					$ball
						.addClass('animate')
						.bind('animationend webkitAnimationEnd',function() {
							$(this).removeClass('animate');
							$patter.attr('src',patterImgOut).css({'margin-top':'0px','margin-left':'0px'});
						});
				}
			}
		})
		.unbind('mouseout').bind('mouseout',function() {
			$bg.css('background', bgImgOut);
			$patter.attr('src',patterImgOut).css({'margin-top':'0px','margin-left':'0px'});
		})
			
	}	
}
