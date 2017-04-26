if($SwitchView.isSP()){
	//======================================================
	// SP判定の場合
	//======================================================
	//ビジュアルバナー画像
	$.resource.set({
		top_visual: '<img src="../common/img/bycle/bycle_header_sp.jpg" alt="自転車保険なら「自転車向け保険 Bycle Best」。月々880円～の保険料で日常の事故全般を補償。さらに自転車搭乗中等のケガの補償は、保険金が2倍！個人賠償責任補償は示談代行サービス付！自転車ロードサービスもある自転車保険！" />',

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
		top_visual: '<img src="../common/img/bycle/bycle_header.jpg" alt="自転車保険なら「自転車向け保険 Bycle Best」。月々880円～の保険料で日常の事故全般を補償。さらに自転車搭乗中等のケガの補償は、保険金が2倍！個人賠償責任補償は示談代行サービス付！自転車ロードサービスもある自転車保険！" />',

		bycle22: '<img src="../common/img_20150623/sp/common/logo_footer.png" alt="au損保保険株式会社" width="201" height="17">',
		bycle23: '<img src="../common/img_20150623/sp/common/icon_youtube.png" alt="youtube" width="30" height="30">',
		bycle24: '<img src="../common/img_20150623/sp/common/icon_fb.png" alt="フェイスブックページ" width="30" height="30">',

	});
}
