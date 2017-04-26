$(function(){
	$plus = $("#plus");
	$minus = $("#minus");
	// ナビゲーショントグル ===================================================
		var $menubtn = $("#menu_toggle_open_sp");
		var $menulist = $("#sp_menu_list");

	$menubtn.click(function(event){
		if ($menulist.css("display")=="none") {
			$plus.hide();
			$minus.show();
		} else {
			$plus.show();
			$minus.hide();
		}
		$menulist.slideToggle();
	});
});