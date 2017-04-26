$(function(){

	// �y�[�W�g�b�v�X�N���[�� =================================================
	$('.pageTopBtn').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 350);
		return false;
	});



	// �I�[�o�[���C ===========================================================
	var $overlay = $('<div id="disableDoublePost-overlay" style="display:none;"></div>').appendTo('body');
	$overlay.css({
		opacity : '0.8'
	})
	// �������� ---------------------------------
	.on('resizeHeight', function(){
		$(this).css('height', $(document).height());
	})
	// �\�� -------------------------------------
	.on('showOverlay', function(){
		$(this).fadeIn('fast');
		$overlay.trigger('resizeHeight');
		$('#wrapper').addClass('noTapHighlightArea');
	})
	// ��\�� -----------------------------------
	.on('closeOverlay', function(){
		$(this).hide();
		$('#wrapper').removeClass('noTapHighlightArea');
	});
	// �f�t�H���g -------------------------------
	$(window).load(function(){
		$overlay.trigger('resizeHeight');
	});



	// �w�b�_�[�i�r ===========================================================
	var $floatingNavi = $('#floatingNavi'); // �g�O���i�r

	// �t���[�e�B���O���j���[
	$('.showNavi').click(function(){
		$floatingNavi.css('top', $('header').height()).fadeIn('slow');
		//�I�[�o�[���C��\��
		$overlay.trigger('showOverlay');
	});
	$('.hideNavi').click(function(){
		$floatingNavi.fadeOut('fast');
		//�I�[�o�[���C���\��
		$overlay.trigger('closeOverlay');
	});
	$overlay.click(function(){
		$floatingNavi.fadeOut('fast');
		//�I�[�o�[���C���\��
		$overlay.trigger('closeOverlay');
	});

	// �i�r�Q�[�V�����g�O�� ===================================================
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



	// �I�����j���[ ===========================================================
	$('.boxShow').click(function(){
		var $box = $('#' + $(this).data('targetId'));

		//�I�����j���[������I���G���A��ɐݒu
		$box.css({
			//����I���G���A�̃y�[�W�ŏ㕔����̏c�ʒu(px)���擾
			top : $('#selectArea').offset().top
		}).fadeIn('fast');

		//�I�[�o�[���C��\��
		$overlay.trigger('showOverlay');
	});



	// �u���E�U�̃T�C�Y���ύX���ꂽ�ꍇ�̋��� =================================
	$(window).on('orientationchange resize', function(){
		//�t���[�e�B���O���j���[�̍������Đݒ�
		$floatingNavi.is(':visible') && $floatingNavi.css({top : $('header').height()});
		//�I�[�o�[���C�̍������Đݒ�
		$overlay.is(':visible') && $overlay.trigger('resizeHeight');
		//�I���G���A�̕\���ʒu���Đݒ�
		$('.floatingArea').is(':visible') && $('.floatingArea').css({top : $('#selectArea').offset().top});
	});

	// �v�����ꗗ�փX�N���[��
	$('.pagePlanBtn').click(function () {
		var target = $('#dogArea').offset().top;
		$('body,html').animate({
			scrollTop: target
		}, 350);
		return false;
	});

	// ���ς���փX�N���[��
	$('.pageMitsumoriBtn').click(function () {
		var target = $('#shisanWrapper').offset().top;
		$('body,html').animate({
			scrollTop: target
		}, 350);
		return false;
	});

	// �������I�����ꂽ�ꍇ�̋���
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
	
	
