//スクロールで追随するサイドメニュー
$(function(){
  
  var offset = $('.standard_application ul').offset().top;
	
	$(".float_btn").stickyfloat({
		duration: 0,
		startOffset: offset-20,
		lockBottom: false // 親要素内のみでスクロール(true/false)
	});

});


