$(function() {             
              //TOPに戻る
              $(window).scroll(function () {
                            if ($(this).scrollTop() > 200) {
                            $('#back-top').fadeIn(500);
						   $('#back-top').addClass("scroll");
								scrollHeight = $(document).height();
								scrollPosition = $(window).height() + $(window).scrollTop();
								if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.05) {
									//スクロールの位置が下部5%の範囲に来た場合
					
							 	$('#back-top').addClass("fixed");
							 	$('#back-top').removeClass("scroll");
		
		
								} else {
								//それ以外のスクロールの位置の場合
								 $('#back-top').addClass("scroll");
								 $('#back-top').removeClass("fixed");
	}
						   
								
								}
							
							 else {
                                          $('#back-top').fadeOut();
                            }
              });             
              // scroll body to 0px on click
              $('#back-top a').click(function () {
                            $('body,html').animate({
                                          scrollTop: 0
                            }, 400);
                            return false;
              });
              $('#f_pagetop').click(function () {
                            $('body,html').animate({
                                          scrollTop: 0
                            }, 400);
                            return false;
              });            
});
