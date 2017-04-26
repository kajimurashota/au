$(function(){

	// ページトップスクロール =================================================
	$('.pageTopBtn').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 350);
		return false;
	});



	// オーバーレイ ===========================================================
	var $overlay = $('<div id="disableDoublePost-overlay" style="display:none;"></div>').appendTo('body');
	$overlay.css({
		opacity : '0.8'
	})
	// 高さ調節 ---------------------------------
	.on('resizeHeight', function(){
		$(this).css('height', $(document).height());
	})
	// 表示 -------------------------------------
	.on('showOverlay', function(){
		$(this).fadeIn('fast');
		$overlay.trigger('resizeHeight');
		$('#wrapper').addClass('noTapHighlightArea');
	})
	// 非表示 -----------------------------------
	.on('closeOverlay', function(){
		$(this).hide();
		$('#wrapper').removeClass('noTapHighlightArea');
	});
	// デフォルト -------------------------------
	$(window).load(function(){
		$overlay.trigger('resizeHeight');
	});



	// ヘッダーナビ ===========================================================
	var $floatingNavi = $('#floatingNavi'); // トグルナビ

	// フローティングメニュー
	$('.showNavi').click(function(){
		$floatingNavi.css('top', $('header').height()).fadeIn('slow');
		//オーバーレイを表示
		$overlay.trigger('showOverlay');
	});
	$('.hideNavi').click(function(){
		$floatingNavi.fadeOut('fast');
		//オーバーレイを非表示
		$overlay.trigger('closeOverlay');
	});
	$overlay.click(function(){
		$floatingNavi.fadeOut('fast');
		//オーバーレイを非表示
		$overlay.trigger('closeOverlay');
	});

	// ナビゲーショントグル ===================================================
	$('.menuList strong').each(function(index, element){
		var $menu = $(this).next();
		var $icon = $(this).find('img');

		var src_open = $icon.attr('src').replace(/_c\.png$/, '_o.png');
		var src_close = $icon.attr('src');

		$(this).click(function(event){

			$menu.slideToggle()
			$(this).toggleClass('open');

			if ($(this).hasClass('open')) {
				$icon.attr('src', src_open);
			} else {
				$icon.attr('src', src_close);
			}
		});
	});



	// 選択メニュー ===========================================================
	$('.boxShow').click(function(){
		var $box = $('#' + $(this).data('targetId'));

		//選択メニューを犬種選択エリア上に設置
		$box.css({
			//犬種選択エリアのページ最上部からの縦位置(px)を取得
			top : $('#selectArea').offset().top
		}).fadeIn('fast');

		//オーバーレイを表示
		$overlay.trigger('showOverlay');
	});



	// ブラウザのサイズが変更された場合の挙動 =================================
	$(window).on('orientationchange resize', function(){
		//フローティングメニューの高さを再設定
		$floatingNavi.is(':visible') && $floatingNavi.css({top : $('header').height()});
		//オーバーレイの高さを再設定
		$overlay.is(':visible') && $overlay.trigger('resizeHeight');
		//選択エリアの表示位置を再設定
		$('.floatingArea').is(':visible') && $('.floatingArea').css({top : $('#selectArea').offset().top});
	});

	// プラン一覧へスクロール
	$('.pagePlanBtn').click(function () {
		var target = $('#dogArea').offset().top;
		$('body,html').animate({
			scrollTop: target
		}, 350);
		return false;
	});

	// 見積もりへスクロール
	$('.pageMitsumoriBtn').click(function () {
		var target = $('#shisanWrapper').offset().top;
		$('body,html').animate({
			scrollTop: target
		}, 350);
		return false;
	});

	// 特徴が選択された場合の挙動
	$('section.whatKind h2').each(function(index, element){
		var $detail = $(this).next();
		var $buttonImage = $(this).find('img');

		var src_open = $buttonImage.attr('src').replace(/_open\.png$/, '_close.png');
		var src_close = $buttonImage.attr('src');

		$(this).click(function(event){
			$detail.slideToggle('slow')
			$(this).toggleClass('open');

			if ($(this).hasClass('open')) {
				$buttonImage.attr('src', src_open);
			} else {
				$buttonImage.attr('src', src_close);
			}
		});
	});
	$('#sp_header_aute').click(function(){
		window.location.href="http://www.au-sonpo.co.jp/";
	})
	$('#index_info_merit').click(function(){
		window.location.href="./merit/index.html";
	});
	$('#index_info_insurance').click(function(){
		window.location.href="./insurance/index.html";
	});
	$('#index_info_why').click(function(){
		window.location.href="./why/index.html";
	});
	$('#index_info_payment').click(function(){
		window.location.href="./payment/index.html";
	});
	$('#index_info_kokuchi').click(function(){
		window.location.href="./kokuchi/index.html";
	});
	$('#index_info_qa').click(function(){
		window.location.href="./merit/index.html";
	});
	$('#index_info_toiawase').click(function(){
		window.location.href="./qa/index.html";
	});
	$('#index_info_merit').click(function(){
		window.location.href="./toiawase/index.html";
	});
});
	
	
