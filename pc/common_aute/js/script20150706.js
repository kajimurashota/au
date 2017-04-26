/*--------------------------
	Get Browser Version
--------------------------*/
(function($, window, document, undefined) {

	var getBrowser = function() {

		var ua = navigator.userAgent.toLowerCase();
		var ver = navigator.appVersion.toLowerCase();
		var browser = 'unknown';

		if (ua.indexOf("msie") != -1){
			if (ver.indexOf("msie 6.") != -1){
				name = 'ie6';
			} else if (ver.indexOf("msie 7.") != -1) {
				name = 'ie7';
			} else if (ver.indexOf("msie 8.") != -1) {
				name = 'ie8';
			} else if (ver.indexOf("msie 9.") != -1) {
				name = 'ie9';
			} else if (ver.indexOf("msie 10.") != -1) {
				name = 'ie10';
			} else {
				name = 'ie';
			}
		} else if (ua.indexOf('trident/7') != -1) {
			name = 'ie11';
		} else if (ua.indexOf('chrome') != -1) {
			name = 'chrome';
		} else if (ua.indexOf('safari') != -1) {
			name = 'safari';
		} else if (ua.indexOf('opera') != -1) {
			name = 'opera';
		} else if (ua.indexOf('firefox') != -1) {
			name = 'firefox';
		}
		return name;

	}

	window.getBrowser = getBrowser;

})(jQuery, window, document);


//telアンカー PC時無効
function anchorTellink () {

  var width = $(window).width();

  if (width > 768) {
    $('a[href^="tel:"]').on('click',function(e) {
      e.preventDefault();
    });
  } else {
    $('a[href^="tel:"]').off('click');
  }

}
$(window).on('load resize', anchorTellink);


//topメインイメージレスポンシブ切り替え
$(function(){

	var width = $(window).width();

	if( width < 768 ){
		$('.new_main_image').each(function(){
			$(this).find('img').attr("src",$(this).find('img').attr("src").replace('_pc', '_sp'));
		});
	}

});


//autoHeight
$(function() {
	var minWidth = 768;

	var ua = getBrowser();
	if ( ua === 'ie8' ) {
	    $(window).on('load', setHeightIE8);
	} else {
	    $(window).on('load', setHeight);
	    $(window).on('resize', setHeight);
	}

	function setHeight() {
		var width = $(window).width();
    if (minWidth >= width) {
        $('.top_lower_athgt').autoHeight({
          column: 1,
          reset: 'reset',
        });
    } else {
        $('.top_lower_athgt').autoHeight({
          reset: 'reset',
          height: 'height'
        });
    }

    if (minWidth >= width) {
        $('.number_bx_athgt').autoHeight({
          column: 1,
          reset: 'reset',
        });
    } else {
        $('.number_bx_athgt').autoHeight({
          reset: 'reset',
          height: 'height'
        });
    }

    if (minWidth >= width) {
        $('.case_text_auhgt').autoHeight({
          column:  1,
          reset: 'reset',
        });
    } else {
        $('.case_text_auhgt').autoHeight({
          reset: 'reset',
          height: 'height'
        });
    }

    if (width >= minWidth) {
        $('.bycle_smapho_autgh').autoHeight({
          reset: 'reset',
          height: 'height'
        });
    } else {
        $('.bycle_smapho_autgh').removeAttr("style");
    }

    if (minWidth >= width) {
        $('.number_bx-three_athgt').autoHeight({
          column:  1,
          reset: 'reset',
        });
    } else {
        $('.number_bx-three_athgt').autoHeight({
          reset: 'reset',
          height: 'height'
        });
    }

    if (minWidth >= width) {
        $('.suport_auhgt').autoHeight({
          column:  2,
          reset: 'reset',
          height: 'height'
        });
    } else {
        $('.suport_auhgt').autoHeight({
          reset: 'reset',
          height: 'height'
        });
    }

    if (minWidth >= width) {
        $('.trouble_auhgt').autoHeight({
          column:  1,
          reset: 'reset',
        });
    } else {
        $('.trouble_auhgt').autoHeight({
          column:  3,
          height: 'height'
        });
    }

    if (minWidth >= width) {
        $('.trouble_auhgt_2').autoHeight({
          column:  1,
          reset: 'reset',
        });
    } else {
        $('.trouble_auhgt_2').autoHeight({
          column:  3,
          height: 'height'
        });
    }

    if (minWidth >= width) {
        $('.cash_auhgt').autoHeight({
          column:  2,
          reset: 'reset',
        });
    } else {
        $('.cash_auhgt').autoHeight({
          reset: 'reset',
          height: 'height'
        });
    }

	}

	function setHeightIE8() {

		var width = $(window).width();

    $('.top_lower_athgt').autoHeight({
        reset: 'reset',
        height: 'height'
    });

    $('.number_bx_athgt').autoHeight({
        reset: 'reset',
        height: 'height'
    });

    $('.case_text_auhgt').autoHeight({
        reset: 'reset',
        height: 'height'
    });

    $('.bycle_smapho_autgh').autoHeight({
        reset: 'reset',
        height: 'height'
    });

    $('.number_bx-three_athgt').autoHeight({
        reset: 'reset',
        height: 'height'
    });

    $('.suport_auhgt').autoHeight({
        reset: 'reset',
        height: 'height'
    });

    $('.trouble_auhgt').autoHeight({
        reset: 'reset',
        height: 'height'
    });
	}



  // コンテンツアコーディオン
  // $(".accordion_body").hide();
  // $(window).on('load', function() {
  //   var width = $(window).width();

  //   var minWidth = 768;

  //   if (minWidth >= width) {

  //     $(".accordion_body").hide();
  //     $(".btn_accordion").on("click", function() {

  //       if ( $(this).next().is(':hidden') ) {
  //         var offset = $(this).offset().top;
  //         $('html, body').stop().animate({
  //           scrollTop: offset
  //         }, 400, 'swing');
  //         $(this).next().slideDown(400, 'swing', function() {
  //           setHeight();
  //         });
  //       } else {
  //         $(this).next().slideUp(400, 'swing');
  //       }
  //       $(this).toggleClass("on");
  //     });
  //   }
  // });


});

// 記述サンプル
// 1行のカラム数（n個）ごとにそろえる
// column : n,
// n個ごとの先頭に clear:both; を設定する
// clear  : 1,
// 高さを minHeight ではなく height でそろえる
// height : 'height',
// 高さを取得する前に一度セレクタに指定されている style 属性をリセットします
// reset : 'reset'
// });

//pie
$(function() {
	if (window.PIE) {
		$('.pie').each(function() {
			PIE.attach(this);
		});
		$('.bx-pager-link').each(function() {
			PIE.attach(this);
		});
	}
});

//スムーススクロール
$(function() {
    var topBtn = $('.btn_totop');
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


// IE8用 bodyクラス
$(function(){

	var ua = getBrowser();
	if ( ua === 'ie8' ) {
		$('body').addClass('ie');
	}

});

