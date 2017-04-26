(function($){
	$(document).ready(function($){
    var is_sp = false;
    function select_init(){
      if(is_sp==false && $(window).width()<780){
        $('.shoplist select').attr('size', 0);
        is_sp = true;
      }else if(is_sp==true && $(window).width() >= 780){
        $('.shoplist select').attr('size', 7);
        is_sp = false;
      }
    }
    select_init();
		var is_fixed = false;
		var snav_top = $('nav').offset().top;
		snav_fix();
		$(window).scroll(function(){
			snav_fix();
		});
		function snav_fix(){
      if(is_sp==false){
  			if(is_fixed == false && $(window).scrollTop() > snav_top){
  				$('nav').addClass('fixed');
  				$('.container').addClass('fixed');
  				// if($('#snav').is(':visible')) $('.body').addClass('open');
  				is_fixed = true;
  			}else if(is_fixed == true && $(window).scrollTop() <= snav_top){
  				$('nav').removeClass('fixed');
  				$('.container').removeClass('fixed');
  				//.removeClass('open');
  				is_fixed = false;
  			}
      }
		}
  function getFirstScrollable(selector){
    var $scrollable;

    $(selector).each(function(){
      var $this = $(this);
      if( $this.scrollTop() > 0 ){
        $scrollable = $this;
        return false;
      }else{
        $this.scrollTop(1);
        if( $this.scrollTop() > 0 ){
          $scrollable = $this;
          return false;
        }
        $this.scrollTop(0);
      }
    });

    return $scrollable;
  }
  var $win = $(window),
      $doc = $(document),
      $scrollElement = getFirstScrollable("html,body"),
      mousewheel = "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
  $doc.on("click", "a[href^=#]", function(e){
    var $target = $(this.hash),
        top;
    if( $target.size() < 1 ) return false;
    top = $target.offset().top;
    top = Math.min(top, $doc.height() - $win.height());
    $doc.on(mousewheel, function(e){ e.preventDefault(); });
    $scrollElement.stop().animate({scrollTop: top-60-16}, 1000, "easeOutQuint", function(){
      $doc.off(mousewheel);
    });
    return false;
  });

	});
})(jQuery);
$(window).load(function () {
  $('.btn_totop').addClass("fixed");
  $('.apply_btn').addClass("apply_fixed");
});

$(function() {
  $(".btn_totop").hide();

  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.btn_totop').fadeIn();
          $('.apply_btn').fadeIn();
        $('.btn_totop').addClass("scroll");
        $('.apply_btn').addClass("apply_scroll");

        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        if ( (scrollHeight - scrollPosition) / scrollHeight <=0.02) {
          $('.btn_totop').addClass("fixed");
          $('.btn_totop').removeClass("scroll");

          $('.apply_btn').addClass("apply_fixed");
          $('.apply_btn').removeClass("apply_scroll");
        } else {
          $('.btn_totop').addClass("scroll");
          $('.btn_totop').removeClass("fixed");
          $('.apply_btn').addClass("apply_scroll");
          $('.apply_btn').removeClass("apply_fixed");
        }

    }else {
                    $('.btn_totop').fadeOut();
             $('.apply_btn').fadeOut();
      }
  });
  $('.btn_totop a').click(function () {
              $('body,html').animate({
                            scrollTop: 0

              }, 400);
        $('#header_low').css('display', 'none');
              return false;
  });
  $('#f_pagetop').click(function () {
              $('body,html').animate({
                            scrollTop: 0
              }, 400);
        $('#header_low').css('display', 'none');
              return false;
  });
  $(window).scroll(function () {
      if ($(this).scrollTop() >20) {
        $('#header_new').fadeOut(0);
        $('#header_low').fadeIn(0);
        $('#header_low').addClass("header_low_fixed");
        $('#header_low').css('display', 'block');
      }else{
        $('#header_new').show(0);
        $('#header_low').fadeOut(0);
        $('#header_low').css('display', 'none');
      }
  });
});


