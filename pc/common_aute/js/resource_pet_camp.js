if($SwitchView.isSP()){
	//======================================================
	// SP判定の場合
	//======================================================
	//ビジュアルバナー画像
	$.resource.set({
		top_visual: '<img src="../common/img/sp_petTOP.png" alt="au損保 ペットの保険 わくわくサマーキャンペーン！" />'}
	);
	
}else{
	//======================================================
	// PC判定の場合
	//======================================================
	//ビジュアルバナー画像
	$.resource.set({
		top_visual: '<img src="../common/img/pc_petTOP.png" alt="au損保 ペットの保険 わくわくサマーキャンペーン！" />'}
	);
}