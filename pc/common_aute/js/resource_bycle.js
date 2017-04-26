if($SwitchView.isSP()){
	//======================================================
	// SP判定の場合
	//======================================================
	//ビジュアルバナー画像
	$.resource.set({
		top_visual: '<img src="../common/img/bycle/bycle_header_1019sp.jpg" alt="事故で加害者になってしまった時、最大2億円※を補償します！※ ゴールドコースの場合あ・う・てケガの保険Bycleプラス月々370円から入れる安心の自転車向け保険" />',

		bycle22: '<img src="../common/img_20150623/sp/common/logo_footer.png" alt="au損保保険株式会社" width="201" height="17">',
		bycle23: '<img src="../common/img_20150623/sp/common/icon_youtube.png" alt="youtube" width="30" height="30">',
		bycle24: '<img src="../common/img_20150623/sp/common/icon_fb.png" alt="フェイスブックページ" width="30" height="30">',

	});
	
}else{
	//======================================================
	// PC判定の場合
	//======================================================
	//ビジュアルバナー画像
	$.resource.set({
		top_visual: '<img src="../common/img/bycle/bycle_header_1019.jpg" alt="事故で加害者になってしまった時、最大2億円※を補償します！※ ゴールドコースの場合あ・う・てケガの保険Bycleプラス月々370円から入れる安心の自転車向け保険" />',

		bycle22: '<img src="../common/img_20150623/sp/common/logo_footer.png" alt="au損保保険株式会社" width="201" height="17">',
		bycle23: '<img src="../common/img_20150623/sp/common/icon_youtube.png" alt="youtube" width="30" height="30">',
		bycle24: '<img src="../common/img_20150623/sp/common/icon_fb.png" alt="フェイスブックページ" width="30" height="30">',

	});
}
