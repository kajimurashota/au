$(document).ready(function(){
  var minWidth = 768;
  var width = $(window).width();
	
  if (width >= minWidth) {
    var obj =$('.bxslider').bxSlider({
  	 mode:'horizontal',
  	 auto: true,
  	 pause: 5500, /* 表示間隔 */
  	 speed: 700, /* アニメーションスピード */
  	 minSlides: 1,
  	 maxSlides: 4,
  	 moveSlides: 1,
  	 slideWidth: 224,
  	 slideMargin: 28,
  	 pager: false,
  	 controls: true,
  	 onSlideAfter: function () { obj.startAuto(); }
    });
  } else {

    var option = {
  	 mode:'horizontal',
  	 auto: true,
  	 pause: 5500, /* 表示間隔 */
  	 speed: 700, /* アニメーションスピード */
  	 minSlides: 2,
  	 maxSlides: 2,
  	 slideWidth: 1000,
  	 slideMargin: 15,
  	 moveSlides: 1,
  	 pager: false,
  	 controls: true,
  	 onSlideAfter: function () { obj.startAuto(); }
    }

    var obj =$('.bxslider').bxSlider(option);
    $(window).on('resize', function() {
      obj.reloadSlider(option);
    })
  }
});
