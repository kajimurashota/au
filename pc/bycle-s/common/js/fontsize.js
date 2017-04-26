jQuery(function($){
	$(".normal").addClass('active'); 
	
  //ボタンをクリックしたら実行
  $('li','.mod_headerbox_size').click(function(){    
    //activeでないボタンだった場合のみ動作
    if(!$(this).hasClass('active')){      
      //現在activeのついているclassを削除
      $('.active').removeClass('active');      
      //クリックしたボタンをactive
      $(this).addClass('active');      
    }
	
    if($(this).hasClass('large')){ 
      $("body").addClass('fontL');   
	}
    if($(this).hasClass('normal')){ 
      $("body").removeClass('fontL');   
	}
	
  });
});

