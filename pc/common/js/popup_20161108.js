;(function(window, $){
	$.writeClose = function(options){
		var _options = {
			text : "閉じる"
		};
		if(!!options){
			$.extend(_options, options)
		}
		var close_footer = '<div id="floteArea" class="close_area"><div class="close_float">×&nbsp;' + _options.text + '</div></div>';
		document.write(close_footer);
		$(".close_float").click(function(){
			window.close();
		});
	};
})(window, jQuery);
