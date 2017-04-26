var
num = 0,
/*20130325 0401対応*/
/* maxNum = 4,*/


maxNum = 4,
/*20130325 0401対応ここまで*/
ct = 6000,
flg = false;

$("#image-navigation ol li:eq(" + num +")").addClass("current");

fadeImg();

var timerID = setInterval('fadeImg()', ct);

if ( navigator.userAgent.indexOf('iPad') == -1 ) {
	$("#image-navigation").unbind("mouseover").bind("mouseover",function () {
		clearInterval(timerID);
	});
	
	$("#image-navigation").unbind("mouseout").bind("mouseout",function () {
		timerID = setInterval('fadeImg()', ct);
	});
	
	/*
	$("#image-navigation ol li").unbind("mouseover").bind("mouseover",function () {
		$(this).addClass("hover");
	});
	
	$("#image-navigation ol li").unbind("mouseout").bind("mouseout",function () {
		$(this).removeClass("hover");
	});
	*/
}


$("#image-navigation ol li").unbind("click").bind("click",function () {
	flg = true;
	num = $(this).index();
	
	var
	$onImg = $(".navi-image a:eq(" + (num) + ")"),
	$offImg = $(".navi-image a:not(:eq(" + (num) + "))"),
	$onBtn = $("#image-navigation ol li:eq(" + (num) +")"),
	$offBtn = $("#image-navigation ol li:not(:eq(" + (num) + "))");

	$onImg.fadeIn();
	$offImg.fadeOut();
	$onBtn.addClass("current");
	$offBtn.removeClass("current");
	
	if(num < maxNum){
		num++;
	} else {
		num = 0;
	}
});


function fadeImg() {
	var
	$onImg = $(".navi-image a:eq(" + num + ")"),
	$offImg = $(".navi-image a:not(:eq(" + num + "))"),
	$onBtn = $("#image-navigation ol li:eq(" + num +")"),
	$offBtn = $("#image-navigation ol li:not(:eq(" + num + "))");
	
	$onImg.fadeIn();
	$offImg.fadeOut();
	
	$onBtn.addClass("current");
	$offBtn.removeClass("current");
	
	if(num < maxNum){
		num++;
	} else {
		num = 0;
	}
}
