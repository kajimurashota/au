//グローバルナビ プルダウン処理

$(function(){
	pullDown();
});

function pullDown () {
	$("div#g_menu ul > li").hover(
		function(){
			$("ul.g_sub:not(:animated)", this).slideDown();
		},
		function(){
			$("ul.g_sub",this).slideUp();
		}
	);
}
