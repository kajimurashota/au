if($SwitchView.isSP()){
	//======================================================
	// SP判定の場合
	//======================================================
	//ビジュアルバナー画像
	$.resource.set({
		top_visual: '<img src="../common/img_20150623/sp/traffic/img_main2.jpg" alt="あうて「ケガの保険 交通事故」" />',
		jiko15: '<img src="../common/img_20150623/sp/common/logo_footer.png" alt="au損保保険株式会社" width="201" height="17">',
		jiko16: '<img src="../common/img_20150623/sp/common/icon_youtube.png" alt="youtube" width="30" height="30">',
		jiko17: '<img src="../common/img_20150623/sp/common/icon_fb.png" alt="フェイスブックページ" width="30" height="30">'
	});
	
}else{
	//======================================================
	// PC判定の場合
	//======================================================
	//ビジュアルバナー画像
	$.resource.set({
		top_visual: '<img src="../common/img_20150623/pc/traffic/img_main2.jpg" width="980" height="287" alt="あうて「ケガの保険 交通事故」" />',
		jiko15: '<img src="../common/img_20150623/sp/common/logo_footer.png" alt="au損保保険株式会社" width="201" height="17">',
		jiko16: '<img src="../common/img_20150623/sp/common/icon_youtube.png" alt="youtube" width="30" height="30">',
		jiko17: '<img src="../common/img_20150623/sp/common/icon_fb.png" alt="フェイスブックページ" width="30" height="30">'
	});
}