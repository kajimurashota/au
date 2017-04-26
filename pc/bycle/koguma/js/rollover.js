$(function()  
{  
        var targetImgs = $('img');  
          
        targetImgs.each(function()  
        {  
            if(this.src.match('_off'))  
            {  
                  
                this.rollOverImg = new Image();  
                this.rollOverImg.src = this.getAttribute("src").replace("_off", "_on");  
                $(this.rollOverImg).css({position: 'absolute', opacity: 0});  
                $(this).before(this.rollOverImg);  
                  
                $(this.rollOverImg).mousedown(function(){  
                    $(this).stop().animate({opacity: 0}, {duration: 0, queue: false});  
                });  
                  
                $(this.rollOverImg).hover(function(){  
                    $(this).animate({opacity: 1}, {duration: 400, queue: false});  
                },  
                function(){  
                    $(this).animate({opacity: 0}, {duration: 400, queue: false});  
                });  
                  
            }  
        });  
		
		/**/
/*  $(function() {
	  $("#layerTypeAMask").hide();
	 $("#layerTypeAMask").animate({'opacity' : '0'});  
	 
	 $("body").on("mouseover","body .layerTypeMask",function() {
		 $("#layerTypeAMask").show();
		 $("body #layerTypeAMask").animate({'opacity' : '1'}, 500);  
		 }).on("mouseout","#layerWrapperMob .layerTypeMask",function() {
		 $("body #layerTypeAMask").animate({'opacity' : '0'}, 500);  
		 });
   $('#nav li')
            $(this).css('background', 'url(img/lay_a_img01_on.png) no-repeat');
        $(this).hover(
            function(){  
                $(this).stop().animate({'opacity' : '0'}, 500);  
            },
            function(){
                $(this).stop().animate({'opacity' : '1'}, 1000);
            }
        ); 
    }
);
}); */
		
});  