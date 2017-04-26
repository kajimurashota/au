//グローバルナビ プルダウン処理

$(function(){
	pullDown();
});

function pullDown () {
	$("div#gnav ul > li").hover(
		function(){
			$("ul.g_sub:not(:animated)", this).slideDown();
		},
		function(){
			$("ul.g_sub",this).slideUp();
		}
	);
}
