$(function() {
    //===============================
    //申し込みボタン
    //===============================
    $('.apply_bicycle_s , .foot_lower_sp .bycle-s .apply_btn a, #application_2 , #application_1 , #header_tab #apply_btn').anchorControl({
        url:'https://www.au-sonpo.co.jp/pca/popup_mbs.html?sPlan=bicycle_s_2017&urlType=bicycle_s',
        window_name:"_self",
        camp_cd:true
    });


});



$(function() {
if(location.hash=="#ok"){
  // #okの場合
	$("body").addClass("after");
	

} else {
  // #ok以外の場合
	$("body").removeClass("after");
}

if(location.hash=="#page2"){
  // #okの場合
	$("body").addClass("page2");
	
	$('.step .btn01').click(function () {
    	location.href = 'index.html#page2';
	});
	$('.step .btn02').click(function () {
    	location.href = 'page2.html#page2';
	});
	$('.step .btn03').click(function () {
    	location.href = 'page3.html#page2';
	});
	$('.step .btn04').click(function () {
    	location.href = 'page4.html#page2';
	});
	
	
} else {
  // #ok以外の場合
	$("body").removeClass("page2");
}

if(location.hash=="#page3"){
  // #okの場合
	$("body").addClass("page3");
	
	$('.step .btn01').click(function () {
    	location.href = 'index.html#page3';
	});
	$('.step .btn02').click(function () {
    	location.href = 'page2.html#page3';
	});
	$('.step .btn03').click(function () {
    	location.href = 'page3.html#page3';
	});
	$('.step .btn04').click(function () {
    	location.href = 'page4.html#page3';
	});
	
} else {
  // #ok以外の場合
	$("body").removeClass("page3");
}

if(location.hash=="#page4"){
  // #okの場合
	$("body").addClass("page4");
	
	$('.step .btn01').click(function () {
    	location.href = 'index.html#ok';
	});
	$('.step .btn02').click(function () {
    	location.href = 'page2.html#ok';
	});
	$('.step .btn03').click(function () {
    	location.href = 'page3.html#ok';
	});
	$('.step .btn04').click(function () {
    	location.href = 'page4.html#ok';
	});
	
} else {
  // #ok以外の場合
	$("body").removeClass("page4");
}

$(function(){
    setInterval((function repeat() {
    $('.step .now').show();
		setTimeout(function(){
    		$('.step .now').hide();
    	},1000);
		return repeat;
    }()), 2000);
	
});


});



var windowWidth = $(window).width();
var windowSm = 768;
if (windowWidth <= windowSm) {
    //横幅768px以下のとき（つまりスマホ時）に行う処理を書く
	
	
$(function() {
	
if(location.hash=="#ok"){
  // #okの場合
	$("body").addClass("after");
	
$(window).on('load',function(){
    var $window             = $(window),
        $aside              = $('.navi_top'),
        defaultPositionLeft = $aside.css('left'),
        setOffsetPosition   = $aside.offset(),
        fixedClassName      = 'bycles_fixed';
 
    $window.on('scroll', function() {
        if ($(this).scrollTop() > setOffsetPosition.top) {
			$("#page_contents").removeClass("pt200");

        } else {
            if ($aside.hasClass(fixedClassName)) {
			$("#page_contents").removeClass("pt200");
            }
        }
    }).trigger('scroll');
});

} 	
});

$(window).on('load',function(){
    var $window             = $(window),
        $aside              = $('.step_wrap'),
        defaultPositionLeft = $aside.css('left'),
        setOffsetPosition   = $aside.offset(),
        fixedClassName      = 'bycles_fixed';
 
    $window.on('scroll', function() {
        if ($(this).scrollTop() > setOffsetPosition.top) {
            $aside.addClass(fixedClassName);
			$("#page_contents").addClass("pt200");

        } else {
            if ($aside.hasClass(fixedClassName)) {
                $aside.removeClass(fixedClassName);
			$("#page_contents").removeClass("pt200");
            }
        }
    }).trigger('scroll');
});
	
	
	
} else {
    //横幅640px以上のとき（つまりPC時）に行う処理を書く
	
	
//ロールオーバー
    function smartRollover() {  
        if(document.getElementsByTagName) {  
            var images = document.getElementsByTagName("img");  
            for(var i=0; i < images.length; i++) {  
                if(images[i].getAttribute("src").match("_off."))  
                {  
                    images[i].onmouseover = function() {  
                        this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));  
                    }  
                    images[i].onmouseout = function() {  
                        this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));  
                    }  
                }  
            }  
        }  
    }  
    if(window.addEventListener) {  
        window.addEventListener("load", smartRollover, false);  
    }  
    else if(window.attachEvent) {  
        window.attachEvent("onload", smartRollover);  
    }  
	
	
	

$(function() {
	
    $('.navi .inner a').matchHeight();
	
$("#header_s table td:nth-child(1)").click(function () {
    $('.navi_top').css("display","none");
    $('.step_wrap').css("display","none");
    $('#page_contents').css("padding-top","35px");
});

$("#page_contents , #footer").hover(function () {
    $('.navi_top').css("display","block");
    $('.step_wrap').css("display","block");
    $('.after .step_wrap').css("display","none");
    $('#page_contents').css("padding-top","0px");
}, function () {
});
});


$(function() {
if(location.hash=="#ok"){
  // #okの場合
$(function() {
    var $window             = $(window),
        $aside              = $('.navi_top'),
        defaultPositionLeft = $aside.css('left'),
        setOffsetPosition   = $aside.offset(),
        fixedClassName      = 'bycles_fixed';
 
    $window.on('scroll', function() {
        if ($(this).scrollTop() > setOffsetPosition.top) {
            $aside.addClass(fixedClassName);
			$("#page_contents").addClass("pt200");
        } else {
            if ($aside.hasClass(fixedClassName)) {
                $aside.removeClass(fixedClassName);
			$("#page_contents").removeClass("pt200");
            }
        }
    }).trigger('scroll');
});

}else{
	
$(function() {
    var $window             = $(window),
        $aside              = $('.step_wrap'),
        defaultPositionLeft = $aside.css('left'),
        setOffsetPosition   = $aside.offset(),
        fixedClassName      = 'bycles_fixed';
 
    $window.on('scroll', function() {
        if ($(this).scrollTop() > setOffsetPosition.top) {
            $aside.addClass(fixedClassName);
			$("#page_contents").addClass("pt200");
        } else {
            if ($aside.hasClass(fixedClassName)) {
                $aside.removeClass(fixedClassName);
			$("#page_contents").removeClass("pt200");
            }
        }
    }).trigger('scroll');
});
	
}
	
});
	
}




$(function(){
	$(".menu__mega a:nth-child(1)").click(function () {
  $("ul.menu__second-level").css("visibility","visible");
  $(".lead").hide();
			$("#page_contents").addClass("pt50");
});


$("#page_contents , #footer").hover(function () {
  $("ul.menu__second-level").css("visibility","hidden");
  $(".lead").show();
			$("#page_contents").removeClass("pt50");
}, function () {
});

$("ul.menu__second-level").hover(function () {
  $("ul.menu__second-level").css("visibility","visible");
  
}, function () {
});

});




//ブラウザバック禁止
/*if ((navigator.userAgent.indexOf('iPhone') > 0 &&
navigator.userAgent.indexOf('iPad') == -1) ||
navigator.userAgent.indexOf('iPod') > 0 ) {
  window.onpopstate = function() {
    history.forward();
  };
}else{
  window.onunload = function(){};
  history.forward();
}*/
// history.forward();



//ヘッダーサブナビ
$(function() {
   jQuery(window).scroll(function(){
      var section1_pos = jQuery('#section1').offset().top;
      var section2_pos = jQuery('#section2').offset().top;
      var section3_pos = jQuery('#section3').offset().top;
      var section4_pos = jQuery('#section4').offset().top;
      var scr_count = jQuery(document).scrollTop();
      if(scr_count >= section1_pos-130){
         jQuery('#header_tab table td:nth-of-type(1)').addClass("active");
      }
      if(scr_count < section1_pos-130 || scr_count > section2_pos-130){
         jQuery('#header_tab table td:nth-of-type(1)').removeClass("active");
      }
	  
      if(scr_count >= section2_pos-130){
         jQuery('#header_tab table td:nth-of-type(2)').addClass("active");
      }
      if(scr_count < section2_pos-130 || scr_count > section3_pos-130){
         jQuery('#header_tab table td:nth-of-type(2)').removeClass("active");
	  }
	  
      if(scr_count >= section3_pos-130){
         jQuery('#header_tab table td:nth-of-type(3)').addClass("active");
      }
      if(scr_count < section3_pos-130 || scr_count > section4_pos-130){
         jQuery('#header_tab table td:nth-of-type(3)').removeClass("active");
	  }
	  
      if(scr_count >= section4_pos-130){
         jQuery('#header_tab table td:nth-of-type(4)').addClass("active");
      }
      if(scr_count < section4_pos-130 ){
         jQuery('#header_tab table td:nth-of-type(4)').removeClass("active");
	  }
   })
   
});





