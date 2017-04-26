$(function(){

	var userAgent = window.navigator.userAgent.toLowerCase();

	if( userAgent.indexOf('android') != -1 && userAgent.indexOf('mobile') != -1 ){
		// Androidスマホの場合は、モバイルリンクを表示
		$('#P_5').css( 'width', '280px');
		$('table').css( 'width', '280px');
		$('tbody tr').css( 'width', '280px');
		$('tbody td.tdimg img').css( 'padding', '10px 10px 0px 0px');
		$('tbody td.tdimg div.maintxt p.toptxt').css( 'padding', '15px 0px 0px 0px');
		$('tbody td.tdimg div.maintxt p.dattxt1').css( 'padding', '5px 0px 0px 13px');
		$('tbody td.tdimg div.maintxt p.dattxt2').css( 'padding', '8px 0px 5px 13px');
		$('tbody td.tdimg div.maintxt p.dattxt3').css( 'padding', '8px 0px 5px 13px');
		$('tbody td.tdimg div.maintxt p.dattxt4').css( 'padding', '0px 0px 5px 13px');
		$('tbody td.tdimg div.detail p.data1').css( 'padding', '0px 0px 0px 0px');
		$('tbody td.tdimg div.detail p.data2').css( 'padding', '0px 0px 10px 0px');
		$('tbody td.textstyl').css( 'padding', '10px 0px 10px 5px');
		$('tbody td.tdtel img').css( 'padding', '10px 0px 0px 0px');
		$('td.tdtel p').css( 'margin-top', '-75px');
		$('td.tdtel p').css( 'font-size', '18pt');
		$('td.tdtel p').css( 'padding-left', '50px');
		$('tbody td.tdtel h1').show();
		$('table th').css( 'width', '100px');
		$('table th img').css( 'width', '100%');
		$('table td.tdimg div.maintxt p.dattxt1').css( 'text-indent', '-0.9em');
		$('table td.tdimg div.maintxt p.dattxt2').css( 'text-indent', '-0.4em');
		$('table td.tdimg div.maintxt p.dattxt3').css( 'text-indent', '-0.0em');
		$('table td.tdimg div.maintxt p.dattxt4').css( 'text-indent', '-0.0em');
		$('table td.tdimg div.detail p.data1').css( 'text-indent', '-1.0em');
		$('table td.tdimg div.detail p.data2').css( 'text-indent', '-1.0em');
		$('table td.tdimg div.maintxt2 p.dattxt').css( 'text-indent', '-1.0em');


	} else if( userAgent.indexOf('iphone') != -1) {
		// iphoneでChrome for iOSの場合は、モバイルリンクを表示
		$('#P_5').css( 'width', '280px');
		$('table').css( 'width', '280px');
		$('tbody tr').css( 'width', '280px');
		$('tbody td.tdimg img').css( 'padding', '10px 10px 0px 0px');
		$('tbody td.tdimg div.maintxt p.toptxt').css( 'padding', '15px 0px 0px 0px');
		$('tbody td.tdimg div.maintxt p.dattxt1').css( 'padding', '5px 0px 0px 13px');
		$('tbody td.tdimg div.maintxt p.dattxt2').css( 'padding', '8px 0px 5px 13px');
		$('tbody td.tdimg div.maintxt p.dattxt3').css( 'padding', '8px 0px 5px 13px');
		$('tbody td.tdimg div.maintxt p.dattxt4').css( 'padding', '0px 0px 5px 13px');
		$('tbody td.tdimg div.detail p.data1').css( 'padding', '0px 0px 0px 0px');
		$('tbody td.tdimg div.detail p.data2').css( 'padding', '0px 0px 10px 0px');
		$('tbody td.textstyl').css( 'padding', '10px 0px 10px 5px');
		$('tbody td.tdtel img').css( 'padding', '10px 0px 0px 0px');
		$('td.tdtel p').css( 'margin-top', '-75px');
		$('td.tdtel p').css( 'font-size', '18pt');
		$('td.tdtel p').css( 'padding-left', '50px');
		$('tbody td.tdtel h1').show();
		$('table th').css( 'width', '100px');
		$('table th img').css( 'width', '100%');
		$('table td.tdimg div.maintxt p.dattxt1').css( 'text-indent', '-0.8em');
		$('table td.tdimg div.maintxt p.dattxt2').css( 'text-indent', '-0.3em');
		$('table td.tdimg div.maintxt p.dattxt3').css( 'text-indent', '-0.0em');
		$('table td.tdimg div.maintxt p.dattxt4').css( 'text-indent', '-0.0em');
		$('table td.tdimg div.detail p.data1').css( 'text-indent', '-0.7em');
		$('table td.tdimg div.detail p.data2').css( 'text-indent', '-0.7em');
		$('table td.tdimg div.maintxt2 p.dattxt').css( 'text-indent', '-0.7em');

	} else {
		// 上記以外の場合は、ＰＣリンクを表示
		$('#P_5').css( 'width', '600px');
		$('table').css( 'width', '600px');
		$('table tr').css( 'width', '600px');
		$('table td.tdimg img').css( 'padding', '20px 0px 0px 0px');
		$('table td.tdimg div.maintxt p.toptxt').css( 'padding', '20px 0px 0px 5px');
		$('table td.tdimg div.maintxt p.dattxt1').css( 'padding', '20px 0px 0px 13px');
		$('table td.tdimg div.maintxt p.dattxt2').css( 'padding', '20px 0px 5px 13px');
		$('table td.tdimg div.maintxt p.dattxt3').css( 'padding', '20px 0px 5px 13px');
		$('table td.tdimg div.maintxt p.dattxt4').css( 'padding', '20px 0px 0px 13px');
		$('table td.tdimg div.detail p.data1').css( 'padding', '0px 0px 0px 0px');
		$('table td.tdimg div.detail p.data2').css( 'padding', '0px 0px 10px 0px');
		$('table td.textstyl').css( 'padding', '10px 0px 10px 5px');
		$('table td.tdtel img').css( 'padding', '10px 0px 0px 0px');
		$('td.tdtel p').css( 'margin-top', '-110px');
		$('td.tdtel p').css( 'font-size', '30pt');
		$('td.tdtel p').css( 'padding-left', '130px');
		$('table td.tdtel h1').hide();
		$('table th').css( 'width', '200px');
		$('table th img').css( 'width', '100%');
		$('table td.tdimg div.maintxt p.dattxt1').css( 'text-indent', '-1.0em');
		$('table td.tdimg div.maintxt p.dattxt2').css( 'text-indent', '-0.5em');
		$('table td.tdimg div.maintxt p.dattxt3').css( 'text-indent', '-0.0em');
		$('table td.tdimg div.maintxt p.dattxt4').css( 'text-indent', '-0.0em');
		$('table td.tdimg div.detail p.data1').css( 'text-indent', '-1.0em');
		$('table td.tdimg div.detail p.data2').css( 'text-indent', '-1.0em');
		$('table td.tdimg div.maintxt2 p.dattxt').css( 'text-indent', '-1.0em');
	}

});
