$(function(){

	// rollover
	$('.imgover').each(function(){
		this.osrc = $(this).attr('src');
		this.rollover = new Image();
		this.rollover.src = this.osrc.replace(/(\.gif|\.jpg|\.png)/, "_o$1");
	}).hover(function(){
		$(this).attr('src',this.rollover.src);
	},function(){
		$(this).attr('src',this.osrc);
	});
	
	$("div#itemList ul li img, div.box p img").hover(function(){
		$(this).css('opacity',0.6);
	},
	function(){
		$(this).css('opacity',1.0);
	});

	$("div a img.hover_opacity").hover(function(){
		$(this).css('opacity',0.6);
	},
	function(){
		$(this).css('opacity',1.0);
	});

	if(!$SwitchView.isSP()){
		// -------------------------------------------------
		// スライダー表示
		$.bannerslider.action();
	}

	// -------------------------------------------------
	// スライダー表示
	$.visualslider.action();
});

(function($){
	var VisualSlider = function(){};
	VisualSlider.prototype={
		id:"VisualSlider",
		options:{
			pc:{
				auto: true,
				autoControls: true,
				infiniteLoop: true,
				delay: 70000,
				pause: 6000,
				speed: 1200
			},
			sp:{
				auto: true,
				controls: false,
				infiniteLoop: true,
				autoControls: true,
				pause: 6000,
				speed: 500
			}
		},
		build:function(items){
			var _slider=[];
			_slider.push('<ul id="' + this.id + '">');
			$.each(items, function(i, item){
				_slider.push('<li>' + item + '</li>');
			});
			_slider.push('</ul>');
			$.docwrite(_slider.join("\r\n"));
		},
		action:function(){
			$("#" + this.id).bxSlider($SwitchView.isSP() ? this.options.sp : this.options.pc);
			$('#' + this.id+ ' img').delay(3000).css('display', 'block');
		}
	};

	var BannerSlider = function(){};
	BannerSlider.prototype={
		id:"BannerSlider",
		options:{
			pc:{
				auto: false,
				autoControls: false,
				infiniteLoop: true,
				slideWidth: 1000,
				minSlides: 5,
				maxSlides: 5,
				pager: false,
				slideMargin: 0,
				delay: 70000,
				pause: 6000,
				speed: 1200
			},
			sp:{
				auto: true,
				controls: false,
				autoControls: true,
				infiniteLoop: true,
				slideWidth: 1000,
				minSlides: 2.1,
				maxSlides: 2.1,
				pager: false,
				slideMargin: 0,
				delay: 70000,
				pause: 6000,
				speed: 1200
			}
		},
		build:function(items){
			var _slider=[];
			_slider.push('<ul id="' + this.id + '">');

			var _showItem = Math.floor($SwitchView.isSP() ? this.options.sp.minSlides : this.options.pc.minSlides);

			var _append = items.length % _showItem;
			if(_append > 0){
				for(var i = _append; i < _showItem; i++){
					items.push("&nbsp;");
				}
			}

			$.each(items, function(i, item){
				_slider.push('<li>' + item + '</li>');
			});
			_slider.push('</ul>');
			$.docwrite(_slider.join("\r\n"));
		},
		action:function(){
			$("#"+this.id).bxSlider($SwitchView.isSP() ? this.options.sp : this.options.pc);
		}
	};

	jQuery.extend({
		visualslider:new VisualSlider(),
		bannerslider:new BannerSlider()
	});
})(jQuery);

