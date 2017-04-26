$(function() {             
              //TOP縺ｫ謌ｻ繧�
              $(".btn_totop").hide();
              $(window).scroll(function () {
                            if ($(this).scrollTop() > 300) {
                            $('.btn_totop').fadeIn();
                            $('.apply_btn').fadeIn();
						   $('.btn_totop').addClass("scroll");
						   $('.apply_btn').addClass("apply_scroll");
						  	 $(window).bind("scroll", function() {
								scrollHeight = $(document).height();
								scrollPosition = $(window).height() + $(window).scrollTop();
								if ( (scrollHeight - scrollPosition) / scrollHeight <=0.01) {
									//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ菴咲ｽｮ縺御ｸ矩Κ5%縺ｮ遽�峇縺ｫ譚･縺溷�ｴ蜷�
								/*alert("test");*/
							 	$('.btn_totop').addClass("fixed");
							 	$('.btn_totop').removeClass("scroll");
		
							 	$('.apply_btn').addClass("apply_fixed");
							 	$('.apply_btn').removeClass("apply_scroll");
										
								} else {
								//縺昴ｌ莉･螟悶�繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ菴咲ｽｮ縺ｮ蝣ｴ蜷�
								 $('.btn_totop').addClass("scroll");
								 $('.btn_totop').removeClass("fixed");
								 $('.apply_btn').addClass("apply_scroll");
								 $('.apply_btn').removeClass("apply_fixed");
	}
});
						   
								
								}
							
							 else {
                                          $('.btn_totop').fadeOut();
										   $('.apply_btn').fadeOut();
                            }
              });             
              // scroll body to 0px on click
              $('.btn_totop a').click(function () {
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
			  
			  
		$(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
					$('#header_new').fadeOut();
					$('#header_low').fadeIn();
					$('#header_low').addClass("header_low_fixed");
					
				}else{
					$('#header_new').fadeIn();
					$('#header_low').fadeOut();
				}
			  
		});	  
			  
			            
});