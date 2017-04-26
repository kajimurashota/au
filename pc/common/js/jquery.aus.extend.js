;(function(window, $){
	jQuery.extend({
		replace : function(format, info){
			return format.replace(/\[([^\]]+)\]/g, function(match, str){
				if(!!info[str]){
					return info[str];
				}
				return match;
			});
		}
	});

	var UrlController = function(url){
		this.init(url);
	};
	UrlController.prototype = {
		options:{},
		new:function(url){
			return new UrlController(url);
		},
		init:function(url){
			this.options = {
				scheme    : "",
				authority : "",
				userinfo  : "",
				host      : "",
				port      : "",
				path      : "",
				url       : "",
				anchor    : "",
				params    : {}
			};
			if(!!!url){
				return;
			}
			$.extend(this.options, this.split(url));
		},
		split:function(url){
			var _url = String(url).replace(/^(.*)[\?\#].*$/, "$1");
			var _params = {};
			var _anchor = "";
			url.replace(/(\#[^\#\&\?].+)/, function(match, pKey){
				// ページ内アンカー
				_anchor = pKey;
			});
			url.replace(/([\&\?][^\=]+)\=([^\#\&\?]+)/g, function(match, pKey, pValue){
				// パラメータ
				_params[pKey.replace(/^[\&\?]/, "")] = pValue;
			});
			return {url:_url, anchor:_anchor, params:_params};
		},
		//----------------------------------------------
		// query setting
		//----------------------------------------------
		query:function(key, value){
			// query();
			if(!!!key){
				var params = [];
				$.each(this.options.params, function(key, value){
					params.push(key + "=" + value);
				});
				return (params.length > 0) ? "?" + params.join("&") : "";
			}
			// query(key);
			if(!!!value){
				return this.options.params[key];
			}
			// query(key, value);
			return this.upsert(key, value);
		},
		upsert:function(key, value){
			this.options.params[key] = value;
		},
		delete:function(key){
			delete this.options.params[key];
		},
		//----------------------------------------------
		// anchor setting
		//----------------------------------------------
		// alias:anchor(value);
		fragment:function(value){
			return this.anchor(value);
		},
		// alias:anchor(value);
		hash:function(value){
			return this.anchor(value);
		},
		anchor:function(value){
			// anchor(value);
			if(!!value){
				this.options.anchor = value;
				return true;
			}
			// anchor();
			return this.options.anchor;
		},
		//----------------------------------------------
		// build
		//----------------------------------------------
		build:function(){
			var anchor = this.options.anchor;
			return this.options.url + this.query() + anchor;
		}
	};
	jQuery.extend({
		urlController : new UrlController()
	});

})(window, jQuery);
