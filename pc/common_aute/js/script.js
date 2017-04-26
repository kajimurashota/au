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
	
	$("div#itemTab li img").hover(function(){
        $(this).css('opacity',0.5);
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

    $("div#itemTabHeader li img").hover(function(){
        $(this).css('opacity',0.5);
    },
    function(){
        $(this).css('opacity',1.0);
    });
	
});

