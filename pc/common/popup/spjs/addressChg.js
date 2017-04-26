$(function(){

	var userAgent = window.navigator.userAgent.toLowerCase();

	if( userAgent.indexOf('android') != -1 && userAgent.indexOf('mobile') != -1 ){
		// Androidスマホの場合は、モバイルリンクを表示
		$('a.pcLink').hide();
		$('a.spLink').show();
	} else if( userAgent.indexOf('iphone') != -1) {
		// iphoneでChrome for iOSの場合は、モバイルリンクを表示
		$('a.pcLink').hide();
		$('a.spLink').show();
	} else {
		// 上記以外の場合は、ＰＣリンクを表示
		$('a.spLink').hide();
		$('a.pcLink').show();
	}

});
