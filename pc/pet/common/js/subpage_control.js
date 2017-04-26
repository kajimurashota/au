//============================
////通院ありなしコントロール
//============================
//tpet = 1 :通院あり
//     = 0 :通院なし
$(function() {
	TPetReplace("/adpet/", "/adpet_nashitype/");
	TPetReplace("/pet/", "/pet_nashitype/");
	TPetReplace("/moushikomi/adpet.html", "/moushikomi/adpet.html");

	$("a[href*='/pet/'], a[href*='/pet_nashitype/'], a[href*='/adpet/'], a[href*='/adpet_nashitype/'], a[href*='/moushikomi/adpet.html']").click(function(){
		var href = $(this).attr("href");
		switch_type(href);
		return false;
	});
});

//===============================
//引き継ぎパラメータ付与
//===============================
var switch_type = function(url){

	var breed = getKey("breedtype");
	var age = getKey("age");
	var payment = getKey("payment");

//	var breed = $("#petBreed option:selected").val();
//	var age = $("#petAge").val();
//	var payment = $("input[name='group1']:checked").val();

	var urlArr = url.split("#");
	url = urlArr[0];

	var ancher = (!!urlArr[1]) ? "#" + urlArr[1] : "";

	var paramStart = (url.match(/.*\?.*/)) ? "&" : "?";

	if(breed != "" && age != "" && payment != ""){
		var params = [];
		params.push("breedtype=" + breed);
		params.push("age=" + age);
		params.push("payment=" + payment);
		url = url + paramStart + params.join("&");
	}

	location.href = url + ancher;
};

var TPetReplace = function(ari, nashi){
	var tpet = GetQueryString("tpet");

	//通院なしの場合に「なし」に飛ばす
	$("a").each(function(){
		var $this = $(this)
		
		var href = $this.attr("href");
		if(tpet == "0"){

			//ペット内のリンクのみリンク切り替え
			if(href.indexOf(ari,0) != -1){
				
				//petトップへのリンクのみurlを変更
				if($this.hasClass("pettop_link")){
					$this.attr("href",href.replace(ari, nashi));
				}
				

				//通院ありの文言をなしに変更
				$this.html($this.html().replace("ペット保険　　　　　　　　　","ペット保険＜通院なしタイプ＞"));
				
				//リクエストパラメータの引継ぎ
				var href = $this.attr("href");
				if(href.indexOf("?") != -1){
					 $this.attr("href",href + "&tpet=0")
				}else{
					 $this.attr("href",href + "?tpet=0")
				}
				
			}
		}else{
			//通院ありの場合、パンくずリストの文言を修正
			$this.html($this.html().replace("ペット保険　　　　　　　　　","ペット保険＜通院ありタイプ＞"));

			//ペット内のリンクのみリンク切り替え
			if(href.indexOf(nashi,0) != -1){
				//petトップへのリンクのみurlを変更
				if($this.hasClass("pettop_link")){
					$this.attr("href",href.replace(nashi, ari));
				}
			}
		}
	});
};

function GetQueryString(str) {
	if (1 < document.location.search.length) {
		// 最初の1文字 (?記号) を除いた文字列を取得する
		var query = document.location.search.substring(1);

		// クエリの区切り記号 (&) で文字列を配列に分割する
		var parameters = query.split('&');

		var result = new Object();
		for (var i = 0; i < parameters.length; i++) {
			// パラメータ名とパラメータ値に分割する
			var element = parameters[i].split('=');

			var paramName = decodeURIComponent(element[0]);
			var paramValue = decodeURIComponent(element[1]);

			// パラメータ名をキーとして連想配列に追加する
			result[paramName] = decodeURIComponent(paramValue);
		}
		return result[str];
	}
	return null;
}

function getKey(key){
	var str=location.search.substring(1);
	if(str){
		var x=str.split("&");
		for(var i=0;i<x.length;i++){
			var y=x[i].split("=");
			if(y[1]==""){
				return "" // パラメータに値がない場合
			}else {
				if(y[0]==key)return y[1];
			}
		}
		return "";
	}else{
		return "";
	}
}
