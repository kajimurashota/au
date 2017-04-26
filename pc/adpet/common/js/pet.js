
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

//===============================
//引き継ぎパラメータ付与
//===============================
var switch_type = function(url){

	var breed = $("#petBreed option:selected").val();
	var age = $("#petAge").val();
	var payment = $("input[name='group1']:checked").val();

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

	//============================
	////コンテンツ内アコーディオン CLOSEボタン
	//============================
	$(function() {

		$("a[href*='/pet/'], a[href*='/pet_nashitype/'], a[href*='/adpet/'], a[href*='/adpet_nashitype/'], a[href*='/moushikomi/adpet.html']").click(function(){
			var href = $(this).attr("href");
			switch_type(href);
			return false;
		});

		// tPetがinput項目として存在している場合、リンクに値を引き継ぎ
		if($("input[name='tpet_type']").length > 0){
			var _tPet = $("input[name='tpet_type']").val();

			var isTarget = function(href){
				// tPetパラメータが既存の場合はスルー
				if(href.match(/[\&\?]tpet\=/)){
					return false;
				}
				//ペット再委託内のリンクのみリンク切り替え
				if(href.indexOf("/adpet/",0) != -1){
					return true;
				}
				//お客さまの声のみ共通となるためリンク切り替え
				if(href.indexOf("/adpet_nashitype/voice/",0) != -1){
					return true;
				}
				//再委託の申込についても対象
				if(href.indexOf("/moushikomi/adpet.html",0) != -1){
					return true;
				}
				return false;
			};
			//通院なしの場合に「なし」に飛ばす
			$("a").each(function(){
				var $this = $(this)
				var href = $this.attr("href");

				//リンク切り替え
				if(isTarget(href)){

					//リクエストパラメータの引継ぎ
					if(href.indexOf("?") != -1){
						 $this.attr("href",href + "&tpet="+_tPet)
					}else{
						 $this.attr("href",href + "?tpet="+_tPet)
					}
					
				}
			});
		}

		// 見積もり実行
		var exec_estimate = function(){
			var breed = $("#petBreed option:selected").val();
			var age = $("#petAge").val();

			if(!!!breed || !!!age){
				return false;
			}

			var price_type = $.breed[breed][2];
			var price_list = $.prices[price_type - 1][age];
			var price_list_t = $.prices_t[price_type - 1][age];
			//月払い
			if($("input[name='group1']:checked").val() == 1){
				$("#ari_70").html(price_list_t[2]);
				$("#ari_50").html(price_list_t[0]);
				$("#nashi_70").html(price_list[2]);
				$("#nashi_50").html(price_list[0]);
				$("#ari_70_2").html(price_list_t[2]);
				$("#ari_50_2").html(price_list_t[0]);
				$("#nashi_70_2").html(price_list[2]);
				$("#nashi_50_2").html(price_list[0]);
				$("#mitsumori_price_area p").html("月払保険料");
				$("#ari_price .title2 p").html("月払保険料");
				$("#nashi_price .title2 p").html("月払保険料");

			//一時払
			}else{
				$("#ari_70").html(price_list_t[3]);
				$("#ari_50").html(price_list_t[1]);
				$("#nashi_70").html(price_list[3]);
				$("#nashi_50").html(price_list[1]);
				$("#ari_70_2").html(price_list_t[3]);
				$("#ari_50_2").html(price_list_t[1]);
				$("#nashi_70_2").html(price_list[3]);
				$("#nashi_50_2").html(price_list[1]);
				$("#mitsumori_price_area p").html("一時払保険料");
				$("#ari_price .title2 p").html("一時払保険料");
				$("#nashi_price .title2 p").html("一時払保険料");
			}
		};

		//===============================
		//切り替えパラメータ引き継ぎ
		//===============================
		var inheritParam = function(){
			var p_breedtype = getKey("breedtype");
			var p_age = getKey("age");
			var p_payment = getKey("payment");

			// パラメータを項目にセット
			if(p_breedtype != ""){
				//既にリストに存在かどうかを判断
				var aru = 0;
				$('#petBreed option').each(function(){
				    var myval = $(this).val();
				    if(myval == p_breedtype){
				    	aru = 1;
				    }
				});
				//存在しない場合に追加
				if(aru == 0){
					var text = $.breed[p_breedtype][1];
					$("#breed_init").val(p_breedtype);
					$("#breed_init").text(text);
				}
				//設定
				$("#petBreed").val(p_breedtype).attr("checked");
			}
			if(p_age != ""){
				$("#petAge").val(p_age).attr("checked");
			}
			if(p_payment != ""){
				$("input[name='group1']").each(function(i, obj){
					if($(obj).val() == p_payment){
						$(obj).attr("checked", "checked");
					}
				});
			}

			if(p_breedtype != "" && p_age != "" &&p_payment != ""){
				exec_estimate();
				$("#mitsumori_price_area").parent("dd").show();
				$("#price_button").removeClass("btn_off");
				$("#price_button").addClass("btn_on");
			}else{
				$("#mitsumori_price_area").parent("dd").hide();
			}
		};
		inheritParam();

		//===============================
		//その他の犬種が選択されている場合
		//===============================
		var p_code = getKey("p_code");
		if(p_code != ""){
			if(!!($.breed[p_code])){
				var text = $.breed[p_code][1];
				// ペットコードを設定
				$("#breed_init").val(p_code);
				$("#breed_init").text(text);

				$('html,body').animate({
					scrollTop: $("#slect_pet_info").offset().top - $("#header_low").height()
				}, 0);
			}
		}
		
		//50音検索からブラウザバック時に「その他の犬種」に止まらないように、一番目の項目を選ぶ（初期状態と同じ）
		var breedchecked = $("#petBreed option:selected").val();
		if(breedchecked == "999"){
			$("#petBreed").val($("#breed_init").val()).prop("selected",true);
		}
		
        $(".btn_close_ac_1").on("click", function() {
            $(".accordion_body_1").slideUp(400, 'swing');
            $(".btn_accordion_1").removeClass("on");
            //スクロール
            var offset_1 = $(".btn_accordion_1").offset().top;
            $('html, body').stop().animate({
            scrollTop: offset_1 -300
            }, 400, 'swing');
        });
	
        $(".btn_close_ac_2").on("click", function() {
            $(".accordion_body_2").slideUp(400, 'swing');
            $(".btn_accordion_2").removeClass("on");
            //スクロール
            var offset_2 = $(".btn_accordion_2").offset().top;
            $('html, body').stop().animate({
            scrollTop: offset_2 -300
            }, 400, 'swing');
        });

        $(".btn_close_ac_3").on("click", function() {
            $(".accordion_body_3").slideUp(400, 'swing');
            $(".btn_accordion_3").removeClass("on");
            //スクロール
            var offset_3 = $(".btn_accordion_3").offset().top;
            $('html, body').stop().animate({
            scrollTop: offset_3 -300
            }, 400, 'swing');
        });

        $(".btn_close_ac_4").on("click", function() {
            $(".accordion_body_4").slideUp(400, 'swing');
            $(".btn_accordion_4").removeClass("on");
            //スクロール
            var offset_4 = $(".btn_accordion_4").offset().top;
            $('html, body').stop().animate({
            scrollTop: offset_4 -250
            }, 400, 'swing');
        });


        $(".btn_close_ac_5").on("click", function() {
            $(".accordion_body_5").slideUp(400, 'swing');
            $(".btn_accordion_5").removeClass("on");
            //スクロール
            var offset_5 = $(".btn_accordion_5").offset().top;
            $('html, body').stop().animate({
            scrollTop: offset_5 -170
            }, 400, 'swing');
        });

        $(".btn_close_ac_6").on("click", function() {
            $(".accordion_body_6").slideUp(400, 'swing');
            $(".btn_accordion_6").removeClass("on");
            //スクロール
            var offset_6 = $(".btn_accordion_6").offset().top;
            $('html, body').stop().animate({
            scrollTop: offset_6 -170
            }, 400, 'swing');
        });

		//===============================
		//保険料を詳しく見るボタン
		//===============================
		$("#price_btn2").click(function(){
			var breed = $("#petBreed option:selected").val();
			var age = $("#petAge").val();
			var payment = $("input[name='group1']:checked").val();

			window.open('/pc/common/popup/PU_P_8.html?breed=' + $.breed[breed][2] + '&age=' + age + '&payment=' + payment,'myau', 'width=800, height=650px, menubar=no, toolbar=no, scrollbars=yes'); 
		});

		//===============================
		//保険料見積もり関連
		//===============================
		$("#petBreed").change(function(){
			var breed = $("#petBreed option:selected").val();
			if(breed == "999"){
				if(location.href.indexOf("_nashitype") >= 0){
					//通院なし
					window.location.href = '../../../pca/MBT_1_2_2.do?petTypeFlg=1&pcCaptionFlg=2&tuuin=0';
				}else{
					//通院あり
					window.location.href = '../../../pca/MBT_1_2_2.do?petTypeFlg=1&pcCaptionFlg=2&tuuin=1';
				}
				return false;
			}else{
				price_list = ["―","―","―","―"];
				$("#ari_70").html(price_list[0]);
				$("#ari_50").html(price_list[1]);
				$("#nashi_70").html(price_list[2]);
				$("#nashi_50").html(price_list[3]);
			}
			$('html,body').animate({
				scrollTop: $("#slect_pet_info").offset().top - $("#header_low").height()
			}, "slow");
		});
		$("#petAge").change(function(){
			price_list = ["―","―","―","―"];
			$("#ari_70").html(price_list[0]);
			$("#ari_50").html(price_list[1]);
			$("#nashi_70").html(price_list[2]);
			$("#nashi_50").html(price_list[3]);

			$('html,body').animate({
				scrollTop: $("#slect_pet_info").offset().top - $("#header_low").height()
			}, "slow");
		});
		$("input[name='group1']").change(function(){
			price_list = ["―","―","―","―"];
			$("#ari_70").html(price_list[0]);
			$("#ari_50").html(price_list[1]);
			$("#nashi_70").html(price_list[2]);
			$("#nashi_50").html(price_list[3]);
		});

		$("#price_button").click(function(){
			var breed = $("#petBreed option:selected").val();
			var age = $("#petAge").val();
			if(breed == "" || age == ""){
				price_list = ["―","―","―","―"];
				$("#ari_70").html(price_list[0]);
				$("#ari_50").html(price_list[1]);
				$("#nashi_70").html(price_list[2]);
				$("#nashi_50").html(price_list[3]);
				$("#ari_70_2").html(price_list_t[2]);
				$("#ari_50_2").html(price_list_t[0]);
				$("#nashi_70_2").html(price_list[2]);
				$("#nashi_50_2").html(price_list[0]);
			}else{
				exec_estimate();
				if($("+dd",this).css("display") == "none"){
					$("+dd",this).slideDown("slow");
					$(this).removeClass("btn_off");
					$(this).addClass("btn_on");
				}

				$('html,body').animate({
					scrollTop: $("#mitsumori_price_area").offset().top - $("#header_low").height() - $("#header_tab_wrapper").height() - 10
				}, 'slow');
			}

		})

    });
	
    $(function() {
        $(".btn_close_ac_7").on("click", function() {
            $(".accordion_body_7").slideUp(400, 'swing');
            $(".btn_accordion_7").removeClass("on");
            //スクロール
            var offset_7 = $(".btn_accordion_7").offset().top;
            $('html, body').stop().animate({
            scrollTop: offset_7 -150
            }, 400, 'swing');
        });
    });
    //===============================
    //申し込みボタン
    //===============================
    $(function() {
        $('.pet_sub #apply_btn a, .foot_lower_sp .pet .apply_btn a, #apply_btn_2').on('click',function(){
			var type = $("#tpet_type").val();
			var breed = $("#petBreed option:selected").val();
				if (breed == "400") {
				breed = "";
			}
			var saiitakuFlg = 1;
              moushikomi(type,breed,saiitakuFlg);
            return false;
        });
    });

    function moushikomi(type, param, saiitakuFlg) {
		var url = '/pca/popup_aute_pet_20140401';
		var strCAMP_CD = getCookie("CAMP_CD");
		var strCLS_CD = getCookie("CLS_CD");
    	var strDRT_CD = getCookie("DRT_CD");
		var today = new Date();
		var knktday = new Date("2015","8","1");
		var konokoto_val = $("#konokoto").val();

		if(!!(konokoto_val)){
			if(knktday.getTime() - today.getTime() > 0){
				if(konokoto_val == "1212"){
					strCAMP_CD = "DR1F000060";
				}else{
					$("#konokoto").val("");
					alert("コードが違います");
					return;
				}
			}else{
				$("#konokoto").val("");
				alert("ご入力されたキャンペーンは終了致しました。");
				return;
			}
		}

		var device = $SwitchView.getViewtype();
		var winName = '_self';
		var params = [];
		params.push("tPet="+type);
		if(!!saiitakuFlg){ params.push("saiitakuFlg="+saiitakuFlg); }
		if(strCAMP_CD != ""){ params.push("CAMP_CD="+strCAMP_CD); }
		if(strCLS_CD != ""){ params.push("CLS_CD="+strCLS_CD); }
		if(strDRT_CD != ""){ params.push("DRT_CD="+strDRT_CD); }
		if(!!(param)){ params.push("param="+param); }

		if(params.length > 0){
			if(url.indexOf("?") >= 0){
				url += "&" + params.join("&");
			}else{
				url += "?" + params.join("&");
			}
		}

		// 画面開き処理
		win1 = open(url,winName,"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,top=0,left=0,width=770,height=680");
		if(document.images) {
			win1.opener = self;
			win1.focus();
		}
	}


 $.prices = [
	// 犬 10kg未満
	//コース50月払,コース50一時払,コース70月払,コース70一時払
	[
		["1,170","12,730","1,460","15,980"],
		["1,090","11,940","1,360","14,860"],
		["1,020","11,150","1,260","13,770"],
		["1,140","12,420","1,430","15,550"],
		["1,250","13,690","1,590","17,320"],
		["1,370","14,960","1,750","19,100"],
		["1,720","18,810","2,240","24,490"],
		["2,080","22,650","2,740","29,860"],
		["2,430","26,500","3,230","35,260"],
		["2,750","29,980","3,680","40,130"],
		["3,070","33,460","4,130","45,000"]
	],
	// 犬 10kg以上
	[
		["2,000","21,870","2,640","28,770"],
		["1,840","20,020","2,400","26,180"],
		["1,670","18,180","2,160","23,610"],
		["1,870","20,360","2,440","26,660"],
		["2,070","22,560","2,730","29,740"],
		["2,270","24,740","3,000","32,780"],
		["2,930","31,930","3,930","42,860"],
		["3,590","39,130","4,850","52,930"],
		["4,250","46,320","5,780","63,010"],
		["4,870","53,090","6,640","72,480"],
		["5,490","59,880","7,520","81,990"]
	],
	// 犬 20kg以上
	[
		["2,200","24,020","2,910","31,780"],
		["2,010","21,970","2,650","28,920"],
		["1,830","19,950","2,390","26,090"],
		["2,050","22,400","2,710","29,510"],
		["2,280","24,870","3,020","32,970"],
		["2,500","27,310","3,340","36,390"],
		["3,250","35,490","4,380","47,830"],
		["4,000","43,650","5,430","59,270"],
		["4,750","51,820","6,480","70,710"],
		["5,460","59,510","7,470","81,470"],
		["6,160","67,220","8,460","92,270"]
	],
	// 猫
	[
		["1,040","11,390","1,290","14,100"],
		["1,020","11,080","1,250","13,670"],
		["990","10,790","1,220","13,260"],
		["1,070","11,680","1,330","14,500"],
		["1,150","12,580","1,450","15,770"],
		["1,240","13,480","1,560","17,030"],
		["1,430","15,630","1,840","20,040"],
		["1,630","17,790","2,110","23,060"],
		["1,830","19,960","2,390","26,090"],
		["2,190","23,890","2,900","31,600"],
		["2,550","27,820","3,400","37,100"]
	]
];

//料金表（通院あり）
$.prices_t = [
	// 犬 10kg未満
	[
		["2,270",  "24,760","2,920", "31,910"],
		["2,140",  "23,340","2,740", "29,900"],
		["2,010",  "21,910","2,560", "27,920"],
		["2,260",  "24,650","2,920", "31,750"],
		["2,500",  "27,380","3,260", "35,570"],
		["2,760",  "30,120","3,610", "39,400"],
		["3,430",  "37,410","4,540", "49,610"],
		["4,100",  "44,700","5,490", "59,810"],
		["4,770",  "52,000","6,420", "70,030"],
		["5,460",  "59,510","7,390", "80,550"],
		["6,150",  "67,030","8,350", "91,070"]
	],
	// 犬 10kg以上
	[
		["3,680",  "40,240","4,910", "53,570"],
		["3,490",  "38,070","4,630", "50,530"],
		["3,300",  "35,920","4,350", "47,520"],
		["3,650",  "39,730","4,840", "52,860"],
		["4,000",  "43,570","5,340", "58,230"],
		["4,350",  "47,390","5,820", "63,560"],
		["5,260",  "57,360","7,110", "77,540"],
		["6,180",  "67,340","8,390", "91,510"],
		["7,090",  "77,320","9,670", "105,480"],
		["8,160",  "88,980","11,160", "121,800"],
		["9,230",  "100,650","12,670", "138,150"]
	],
	// 犬 20kg以上
	[
		["4,380",  "47,750","5,870", "64,070"],
		["4,080",  "44,530","5,460", "59,590"],
		["3,790",  "41,350","5,050", "55,130"],
		["4,240",  "46,340","5,700", "62,100"],
		["4,710",  "51,340","6,330", "69,110"],
		["5,160",  "56,320","6,980", "76,080"],
		["6,260",  "68,280","8,500", "92,810"],
		["7,350",  "80,220","10,040", "109,540"],
		["8,450",  "92,160","11,570", "126,270"],
		["9,800",  "106,860","13,460", "146,840"],
		["11,140",  "121,570","15,350", "167,440"]
	],
	// 猫
	[
		["2,000", "21,820","2,540","27,780"],
		["1,950", "21,230","2,470","26,960"],
		["1,890", "20,660","2,400","26,160"],
		["2,070", "22,600","2,650","28,870"],
		["2,250", "24,560","2,900","31,610"],
		["2,430", "26,510","3,150","34,350"],
		["2,730", "29,780","3,570","38,920"],
		["3,030", "33,060","3,980","43,510"],
		["3,330", "36,350","4,410","48,110"],
		["3,920", "42,710","5,230","57,030"],
		["4,500", "49,080","6,040","65,940"]
	]
]
// 品種コード[品種コード,品種名,料率区分,ペット種類]
$.breed = {
	"001":["001","アーフェンピンシャー","1","1"],
	"002":["002","アイリッシュ・ウルフハウンド","3","1"],
	"003":["003","アイリッシュ・セター","3","1"],
	"004":["004","アイリッシュ・ソフトコーテッド・ウィートン・テリア","2","1"],
	"005":["005","秋田","3","1"],
	"006":["006","アフガン・ハウンド","3","1"],
	"007":["007","アメリカン・アキタ","3","1"],
	"008":["008","アメリカン・コッカー・スパニエル","2","1"],
	"009":["009","アメリカン・スタッフォードシャー・テリア","2","1"],
	"010":["010","アメリカン・フォックスハウンド","3","1"],
	"011":["011","アラスカン・マラミュート","3","1"],
	"012":["012","イタリアン・グレーハウンド","2","1"],
	"013":["013","イングリッシュ・コッカー・スパニエル","2","1"],
	"014":["014","イングリッシュ・スプリンガー・スパニエル","3","1"],
	"015":["015","イングリッシュ・セター","3","1"],
	"016":["016","イングリッシュ・ポインター","3","1"],
	"017":["017","ウィペット","2","1"],
	"018":["018","ウエスト・ハイランド・ホワイト・テリア","2","1"],
	"019":["019","ウェルシュ・コーギー・カーディガン","1","1"],
	"020":["020","ウェルシュ・コーギー・ペンブローク","1","1"],
	"021":["021","ウェルシュ・テリア","1","1"],
	"022":["022","エアデール・テリア","3","1"],
	"023":["023","オーストラリアン・キャトルドッグ","2","1"],
	"024":["024","オーストラリアン・ケルピー","2","1"],
	"025":["025","オーストラリアン・シェパード","3","1"],
	"026":["026","オーストラリアン・シルキー・テリア","1","1"],
	"027":["027","オーストラリアン・テリア","1","1"],
	"028":["028","オールド・イングリッシュ・シープドッグ","3","1"],
	"029":["029","カニーンヘン・ダックスフンド","1","1"],
	"030":["030","カーリーコーテッド・レトリーバー","3","1"],
	"031":["031","甲斐","2","1"],
	"032":["032","キースホンド","2","1"],
	"033":["033","紀州","3","1"],
	"034":["034","キャバリア・キング・チャールズ・スパニエル","2","1"],
	"035":["035","キング・チャールズ・スパニエル","1","1"],
	"036":["036","グレート・デーン","3","1"],
	"037":["037","グレート・ピレニーズ","3","1"],
	"038":["038","グレーハウンド","3","1"],
	"039":["039","クロアチアン・シープドッグ","2","1"],
	"040":["040","ケアーン・テリア","1","1"],
	"041":["041","ケリー・ブルー・テリア","2","1"],
	"042":["042","コーイケルホンディエ","1","1"],
	"043":["043","ゴードン・セター","3","1"],
	"044":["044","ゴールデン・レトリーバー","3","1"],
	"045":["045","コリー","3","1"],
	"046":["046","サモエド","3","1"],
	"047":["047","サルーキ","3","1"],
	"048":["048","シー・ズー","1","1"],
	"049":["049","シーリハム・テリア","1","1"],
	"050":["050","シェットランド・シープドッグ","2","1"],
	"051":["051","四国","3","1"],
	"052":["052","柴","1","1"],
	"053":["053","シベリアン・ハスキー","3","1"],
	"054":["054","シャー・ペイ","3","1"],
	"055":["055","ジャーマン・シェパード・ドッグ","3","1"],
	"056":["056","ジャーマン・ハンティング・テリア","2","1"],
	"057":["057","ジャーマン・ポインター","3","1"],
	"058":["058","ジャイアント・シュナウザー","3","1"],
	"059":["059","ジャック・ラッセル・テリア","1","1"],
	"060":["060","ショートヘアード・ハンガリアン・ビズラ","3","1"],
	"061":["061","スカイ・テリア","2","1"],
	"062":["062","スキッパーキ","1","1"],
	"063":["063","スコティッシュ・テリア","2","1"],
	"064":["064","スタッフォードシャー・ブル・テリア","2","1"],
	"065":["065","スタンダード・シュナウザー","2","1"],
	"066":["066","セント・バーナード","3","1"],
	"067":["067","ダックスフンド(カニーンヘン・ミニチュア)","1","1"],
	"068":["068","ダックスフンド（スタンダード)","2","1"],
	"069":["069","ダルメシアン","3","1"],
	"070":["070","ダンディ・ディンモント・テリア","1","1"],
	"071":["071","チェサピーク・ベイ・レトリーバー","3","1"],
	"072":["072","チベタン・スパニエル","1","1"],
	"073":["073","チベタン・テリア","2","1"],
	"074":["074","チベタン・マスティフ","3","1"],
	"075":["075","チャイニーズ・クレステッド・ドッグ","1","1"],
	"076":["076","チャウ・チャウ","3","1"],
	"077":["077","チワワ","1","1"],
	"078":["078","狆","1","1"],
	"079":["079","トイ・プードル","1","1"],
	"080":["080","トイ・マンチェスター・テリア","1","1"],
	"081":["081","ドーベルマン","3","1"],
	"082":["082","ドゴ・アルヘンティーノ","3","1"],
	"083":["083","ドゴ・カナリオ","3","1"],
	"084":["084","土佐","3","1"],
	"085":["085","ナポリタン・マスティフ","3","1"],
	"086":["086","ニューファンドランド","3","1"],
	"087":["087","日本スピッツ","1","1"],
	"088":["088","日本テリア","1","1"],
	"089":["089","ノーフォーク・テリア","1","1"],
	"090":["090","ノーリッチ・テリア","1","1"],
	"091":["091","パーソン・ラッセル・テリア","1","1"],
	"092":["092","バーニーズ・マウンテン・ドッグ","3","1"],
	"093":["093","パグ","2","1"],
	"094":["094","バセット・ハウンド","3","1"],
	"095":["095","バセンジー","1","1"],
	"096":["096","ハバニーズ","1","1"],
	"097":["097","パピヨン","1","1"],
	"098":["098","ハリア","3","1"],
	"099":["099","ビアデッド・コリー","3","1"],
	"100":["100","ビーグル","2","1"],
	"101":["101","ビション・フリーゼ","2","1"],
	"102":["102","ピレニアン・シープドッグ","2","1"],
	"103":["103","ピレニアン・マスティフ","3","1"],
	"104":["104","プードル(トイ・ミニチュア)","1","1"],
	"105":["105","プードル（ミディアム・スタンダード)","2","1"],
	"106":["106","ブービエ・デ・フランダース","3","1"],
	"107":["107","プーリー","2","1"],
	"108":["108","プチ・バセット・グリフォン・バンデーン","2","1"],
	"109":["109","プチ・ブラバンソン","2","1"],
	"110":["110","フラットコーテッド・レトリーバー","3","1"],
	"111":["111","ブリアード","3","1"],
	"112":["112","ブリタニー・スパニエル","2","1"],
	"113":["113","ブリュッセル・グリフォン","1","1"],
	"114":["114","ブル・テリア","3","1"],
	"115":["115","ブルドッグ","3","1"],
	"116":["116","ブルマスティフ","3","1"],
	"117":["117","フレンチ・ブルドッグ","2","1"],
	"118":["118","ペキニーズ","2","1"],
	"119":["119","ベドリントン・テリア","1","1"],
	"120":["120","ベルジアン・グリフォン","1","1"],
	"121":["121","ベルジアン・シェパード・ドッグ・グローネンダール","3","1"],
	"122":["122","ベルジアン・シェパード・ドッグ・タービュレン","3","1"],
	"123":["123","ベルジアン・シェパード・ドッグ・マリノア","3","1"],
	"124":["124","ベルジアン・シェパード・ドッグ・ラケノア","3","1"],
	"125":["125","ボーダー・コリー","2","1"],
	"126":["126","ボーダー・テリア","1","1"],
	"127":["127","ポーチュギーズ・ウォーター･ドッグ","2","1"],
	"128":["128","ボクサー","3","1"],
	"129":["129","ボストン・テリア","2","1"],
	"130":["130","北海道","2","1"],
	"131":["131","ポメラニアン","1","1"],
	"132":["132","ポリッシュ・ローランド・シープドッグ","2","1"],
	"133":["133","ボルゾイ","3","1"],
	"134":["134","ボルドー・マスティフ","3","1"],
	"135":["135","ボロニーズ","1","1"],
	"136":["136","ホワイト・スイス・シェパード・ドッグ","3","1"],
	"137":["137","マスティフ","3","1"],
	"138":["138","マルチーズ","1","1"],
	"139":["139","マンチェスター・テリア","1","1"],
	"140":["140","ミニチュア・シュナウザー","1","1"],
	"141":["141","ミニチュア・ダックスフンド","1","1"],
	"142":["142","ミニチュア・ピンシャー","2","1"],
	"143":["143","ミニチュア・プードル","1","1"],
	"144":["144","ミニチュア・ブル・テリア","2","1"],
	"145":["145","ヨークシャー・テリア","1","1"],
	"146":["146","ラージ・ミュンスターレンダー","3","1"],
	"147":["147","ラサ・アプソ","2","1"],
	"148":["148","ラブラドール・レトリーバー","3","1"],
	"149":["149","レークランド・テリア","1","1"],
	"150":["150","レオンベルガー","3","1"],
	"151":["151","ローデシアン・リジバック","3","1"],
	"152":["152","ロシアン・トイ","1","1"],
	"153":["153","ロットワイラー","3","1"],
	"154":["154","ワイアー・フォックス・テリア","2","1"],
	"155":["155","ワイマラナー","3","1"],
	"300":["300","混血犬(10kg未満)","1","1"],
	"301":["301","混血犬(10kg以上20kg未満)","2","1"],
	"302":["302","混血犬(20kg以上)","3","1"],
	"400":["400","アビシニアン","4","2"],
	"401":["401","アメリカン・カール","4","2"],
	"402":["402","アメリカン・カール・ショートヘア","4","2"],
	"403":["403","アメリカン・カール・ロングヘア","4","2"],
	"404":["404","アメリカン・ショートヘア","4","2"],
	"405":["405","アメリカン・ボブテイル","4","2"],
	"406":["406","アメリカン・ボブテイル・ショートヘア","4","2"],
	"407":["407","アメリカン・ワイヤーヘア","4","2"],
	"408":["408","エキゾチック","4","2"],
	"409":["409","エキゾチック・ショートヘア","4","2"],
	"410":["410","エジプシャン・マウ","4","2"],
	"411":["411","オシキャット","4","2"],
	"412":["412","オホースアズーレス","4","2"],
	"413":["413","オホースアズーレス・ロングヘア","4","2"],
	"414":["414","オリエンタル","4","2"],
	"415":["415","オリエンタル・ショートヘア","4","2"],
	"416":["416","オリエンタル・ロングヘア","4","2"],
	"417":["417","カラーポイント・ショートヘア","4","2"],
	"418":["418","カリフォルニアスパングルド","4","2"],
	"419":["419","キムリック","4","2"],
	"420":["420","クリル・アイランド・ボブテイル","4","2"],
	"421":["421","コーニッシュ・レックス","4","2"],
	"422":["422","コラット","4","2"],
	"423":["423","サイベリアン","4","2"],
	"424":["424","サバンナ","4","2"],
	"425":["425","ジャバニーズ","4","2"],
	"426":["426","ジャパニーズ・ボブテイル","4","2"],
	"427":["427","ジャパニーズ・ボブテイル・ロングヘア","4","2"],
	"428":["428","シャム","4","2"],
	"429":["429","シャルトリュー","4","2"],
	"430":["430","シャンティリィ/ティファニー","4","2"],
	"431":["431","シンガプーラ","4","2"],
	"432":["432","スコティッシュ・フォールド","4","2"],
	"433":["433","スコティッシュ・フォールド・ロングヘア","4","2"],
	"434":["434","スノーシュー","4","2"],
	"435":["435","スフィンクス","4","2"],
	"436":["436","スポッテッド・ミスト","4","2"],
	"437":["437","セルカーク・レックス","4","2"],
	"438":["438","セルカーク・レックス・ロングヘア","4","2"],
	"439":["439","セレンゲティ","4","2"],
	"440":["440","ソマリ","4","2"],
	"441":["441","ターキッシュ・アンゴラ","4","2"],
	"442":["442","ターキッシュ・バン","4","2"],
	"443":["443","チャウシー","4","2"],
	"444":["444","ティファニー","4","2"],
	"445":["445","デボン・レックス","4","2"],
	"446":["446","トイガー","4","2"],
	"447":["447","トンキニーズ","4","2"],
	"448":["448","ドンスコイ","4","2"],
	"449":["449","日本猫","4","2"],
	"450":["450","ネーベロング","4","2"],
	"451":["451","ノルウェージャン・フォレスト・キャット","4","2"],
	"452":["452","バーマン","4","2"],
	"453":["453","バーミーズ","4","2"],
	"454":["454","ハバナ","4","2"],
	"455":["455","ハバナ・ブラウン","4","2"],
	"456":["456","バリニーズ","4","2"],
	"457":["457","ピーターボールド","4","2"],
	"458":["458","ピクシーボブ","4","2"],
	"459":["459","ピクシーボブ・ロングヘア","4","2"],
	"460":["460","ヒマラヤン","4","2"],
	"461":["461","ブリティッシュ・ショートヘアー","4","2"],
	"462":["462","ブリティッシュ・ロングヘア","4","2"],
	"463":["463","ペルシャ","4","2"],
	"464":["464","ペルシャ(チンチラ)","4","2"],
	"465":["465","ベンガル","4","2"],
	"466":["466","ボンベイ","4","2"],
	"467":["467","マンクス","4","2"],
	"468":["468","マンチカン","4","2"],
	"469":["469","マンチカン・ロングヘアー","4","2"],
	"470":["470","メイン・クーン","4","2"],
	"471":["471","ヨーロピアン・ショートヘアー","4","2"],
	"472":["472","ヨーロピアン・バーミーズ","4","2"],
	"473":["473","ラ・パーム","4","2"],
	"474":["474","ラ・パーム・ショートヘア","4","2"],
	"475":["475","ラガマフィン","4","2"],
	"476":["476","ラグドール","4","2"],
	"477":["477","ロシアンブルー","4","2"],
	"999":["999","猫","4","2"] //見積もり用
}
