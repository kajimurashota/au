$(function(){

	var userAgent = window.navigator.userAgent.toLowerCase();

	if( userAgent.indexOf('android') != -1 && userAgent.indexOf('mobile') != -1 ){
		// Androidスマホの場合は、モバイルリンクを表示
		$('a.pcLink').hide();
		$('a.spLink').show();
		$('a.pcView1').hide();
		$('a.pcView2').hide();
		$('a.pcView3').hide();
		$('p.spLink1').show();
		$('p.pcLink1').hide();
		$('p.spLink2').show();
		$('p.pcLink2').hide();
		$('#footer').css('margin-bottom',100); 
		
	} else if( userAgent.indexOf('iphone') != -1) {
		// iphoneでChrome for iOSの場合は、モバイルリンクを表示
		$('a.pcLink').hide();
		$('a.spLink').show();
		$('a.pcView1').hide();
		$('a.pcView2').hide();
		$('a.pcView3').hide();
		$('p.spLink1').show();
		$('p.pcLink1').hide();
		$('p.spLink2').show();
		$('p.pcLink2').hide();
		$('#footer').css('margin-bottom',100); 
	} else {
		// 上記以外の場合は、ＰＣリンクを表示
		$('a.spLink').hide();
		$('a.pcLink').show();
		$('a.pcView1').show();
		$('a.pcView2').show();
		$('a.pcView3').show();
		$('p.spLink1').hide();
		$('p.pcLink1').show();
		$('p.spLink2').hide();
		$('p.pcLink2').show();
		$('#footer').css('margin-bottom',0); 
	}

});
