
$(function(){

	// 体重が選択された時の処理(犬のみ)
	$('input[name="petDogsWeight"]:radio').change(function() {

		// 品種種選択した値をクリア
		$('#petBreed').val("");
		$('#petWeight').val("");
		$('#PET_BREED_LABEL').val("");
		
		// hiddenに選択された値をセット
		$('input[name="petWeightVal"]:hidden').val( $(this).val() );
	
		// 犬種を選択するボタンのclass「active」を削除
		$('input[name="petDogsType"]:radio').parent('label').removeClass('active');

		// 犬種を選択するラジオボタンの選択を解除
		$('input[name="petDogsType"]:radio').attr('checked', false);

		// 親要素(label)のclassの「active」を削除
		$('input[name="petDogsWeight"]:radio').parent('label').removeClass('active');

		// 選択したラジオボタンの親要素(label)のclassに「active」を追加
		$(this).parent('label').addClass('active');

		// 犬種を非表示にする
		$("#petbreedlabel").hide(); //犬種名表示テキスト
		$("#typeNameArea").show();  //犬種表示エリア

		// 「n歳の場合」文言を削除
		$('div.ageCase').text( '' );

		// 試算処理のため、hiddenの値を取得し、値があれば表示を行う
		calculateHiddenVal(0, 1);

		$("#selectAgeArea").slideDown(500); //年齢表示エリア

	});

//	// 犬種が選択された時の処理

//	$('input[name="petDogsType"]:radio').change(function() {
//
//		// 品種種選択した値をクリア
//		$("#petBreed").val("");
//		$("#petWeight").val("");
//		document.getElementById("PET_BREED_LABEL").innerHTML = "";
//
//		// kgボタンのclass「active」を削除
//		$('input[name="petDogsWeight"]:radio').parent('label').removeClass('active');
//
//		// kgラジオボタンの選択を解除
//		$('input[name="petDogsWeight"]:radio').attr('checked', false);
//
//		// 選択したラジオボタンの親要素(label)のclassに「active」を追加
//		$(this).parent('label').addClass('active');
//
//		// 犬種を非表示にする
//		$('div.typeName').children('p').hide();
//
//		// 「n歳の場合」文言を削除
//		$('div.ageCase').text( '' );
//
//		// 年齢選択欄を非表示
//		$('div.selectAgeArea').hide();
//
//		// 料金の表示を初期化
//		var price = ["‐","‐","‐","‐"];
//		$.printResultPrices( price );
//
//		// 試算処理のため、hiddenの値を取得し、値があれば表示を行う
//		calculateHiddenVal(0, 1);
//
//		// 年齢が選択されている場合は、選択を解除
//		var ageVal = $('input[name="petAge"]:checked').val();
//		if( ageVal != null && ageVal.length > 0 ){
//			// 年齢の選択を解除
//			$('input[name="petAge"]:radio').attr('checked', false);
//			$('input[name="petAge"]:radio').parent('label').removeClass('active');
//
//			// 「n歳の場合」文言を削除
//			$('div.ageCase').text( '' );
//
//			// 料金の表示を初期化
//			var price = ["‐","‐","‐","‐"];
//			$.printResultPrices( price );
//		}
//
//	});

	// 猫種を選択するが選択された時の処理

	$('input[name="petCatsType"]:radio').change(function() {

		if( $(this).val() != null && $(this).val() == '1' ){
			
//			//// 純血種の場合は、猫種を表示する
//			//$('div.typeName').children('p').show();
//
//			// 猫種を非表示にする
//			$('div.typeName').children('p').hide();
//
//			// 年齢の選択を解除
//			$('input[name="petAgeCat"]:radio').attr('checked', false);
//			$('input[name="petAgeCat"]:radio').parent('label').removeClass('active');
//
//			// 「n歳の場合」文言を削除
//			$('div.ageCase').text( '' );
//
//			// 年齢選択欄を非表示
//			$('div.selectAgeArea').hide();
//
//			// 料金の表示を初期化
//			var price = ["‐","‐","‐","‐"];
//			$.printResultPrices( price );

		} else {
			// 親要素(label)のclassの「active」を削除
			$('input[name="petCatsType"]:radio').parent('label').removeClass('active');

			// 選択したラジオボタンの親要素(label)のclassに「active」を追加
			$(this).parent('label').addClass('active');
			
			// 混血猫を選択した値を設定

			$('#petBreed').val("600");
			$('#petWeight').val("4");
		
			// 純血種以外の場合は、猫種を非表示にする
			//$('div.typeName').children('p').hide();

			// 年齢の選択を解除
			$('input[name="petAgeCat"]:radio').attr('checked', false);
			$('input[name="petAgeCat"]:radio').parent('label').removeClass('active');

			// 「n歳の場合」文言を削除
			$('div.ageCase').text( '' );

			// 年齢選択欄を表示
			$('div.selectAgeArea').show();

			// 料金の表示を初期化
			var price = ["‐","‐","‐","‐"];
			$.printResultPrices( price );

			// 試算処理のため、hiddenの値を取得し、値があれば表示を行う
			calculateHiddenVal(0, 0);

		}

//		// 年齢が選択されている場合は、選択を解除
//		var ageVal = $('input[name="petAgeCat"]:checked').val();
//		if( ageVal != null && ageVal.length > 0 ){
//			// 年齢の選択を解除
//			$('input[name="petAgeCat"]:radio').attr('checked', false);
//			$('input[name="petAgeCat"]:radio').parent('label').removeClass('active');
//
//			// 「n歳の場合」文言を削除
//			$('div.ageCase').text( '' );
//
//			// 料金の表示を初期化
//			var price = ["‐","‐","‐","‐"];
//			$.printResultPrices( price );
//		}
	});

	// 犬種（猫種）・体重選択時の表示処理

	function calculateHiddenVal(numA, inuFlg) {

		// 料率区分の値が空の場合は何もしない

		var weightVal = $('input[name="petWeightVal"]:hidden').val();
		if( weightVal != null && weightVal.length > 0 ){
		

			// 犬の場合

			if( inuFlg == 1 ){

				// 純血種の場合

				if( numA == 1 ){

					// 犬種を表示する
					$('div.typeName').children('p').show();

					// 「n歳の場合」文言を削除
					$('div.ageCase').text( '' );

					// 年齢選択欄を表示
					$('div.selectAgeArea').show();

				}
			
				// 年齢選択欄を表示
				$('div.selectAgeArea').show();

				// 年齢が選択されている場合は、選択を解除
				var ageVal = $('input[name="petAge"]:checked').val();
				if( ageVal != null && ageVal.length > 0 ){
					// 年齢の選択を解除
					$('input[name="petAge"]:radio').attr('checked', false);
					$('input[name="petAge"]:radio').parent('label').removeClass('active');

					// 「n歳の場合」文言を削除
					$('div.ageCase').text( '' );

					// 料金の表示を初期化
					var price = ["‐","‐","‐","‐"];
					$.printResultPrices( price );
				}
			} 


			// 猫の場合

			if( inuFlg != 1 ){

				// 純血種の場合

				if( numA == 1 ){

					// 猫種を表示する
					$('div.typeName').children('p').show();

					// 「n歳の場合」文言を削除
					$('div.ageCase').text( '' );

					// 年齢選択欄を表示
					$('div.selectAgeArea').show();

				}
			
				// 年齢選択欄を表示
				$('div.selectAgeArea').show();

				// 年齢が選択されている場合は、選択を解除
				var ageVal = $('input[name="petAgeCat"]:checked').val();
				if( ageVal != null && ageVal.length > 0 ){
					// 年齢の選択を解除
					$('input[name="petAgeCat"]:radio').attr('checked', false);
					$('input[name="petAgeCat"]:radio').parent('label').removeClass('active');

					// 「n歳の場合」文言を削除
					$('div.ageCase').text( '' );

					// 料金の表示を初期化
					var price = ["‐","‐","‐","‐"];
					$.printResultPrices( price );
				}
			} 

		}
	}



	// 犬の年齢が選択された時の処理

	$('input[name="petAge"]:radio').change(function() {

		// 親要素(label)のclassの「active」を削除
		$('input[name="petAge"]:radio').parent('label').removeClass('active');

		// 選択したラジオボタンの親要素(label)のclassに「active」を追加
		$(this).parent('label').addClass('active');

		// 「n歳の場合」文言を表示
		var ageStr = $('input[name="petAge"]:checked').val();
		ageStr += "歳の場合"
		$('div.ageCase').text( ageStr );

		// 料金を計算

		calculateDogGetVal();
	});

	// 猫の年齢が選択された時の処理

	$('input[name="petAgeCat"]:radio').change(function() {

		// 親要素(label)のclassの「active」を削除
		$('input[name="petAgeCat"]:radio').parent('label').removeClass('active');

		// 選択したラジオボタンの親要素(label)のclassに「active」を追加
		$(this).parent('label').addClass('active');

		// 「n歳の場合」文言を表示
		var ageStr = $('input[name="petAgeCat"]:checked').val();
		ageStr += "歳の場合"
		$('div.ageCase').text( ageStr );

		// 料金を計算

		calculateCatGetVal();
	});

	// 選択されている値より犬の保険料を算出して画面に表示します

	function calculateDogGetVal() {

		// 選択されている体重を取得(hiddenから)
		var weightVal = $('input[name="petWeightVal"]:hidden').val();
		if( weightVal == null || weightVal.length < 1  ){
			// 体重が設定されていないので終了

			return false;
		}

		// 選択されている年齢を取得

		var ageVal = $('input[name="petAge"]:checked').val();
		if( ageVal == null || ageVal.length < 1 ){
			// 年齢が設定されていないので終了

			return false;
		}

		calculateDog( weightVal, ageVal );

	}

	// 犬の保険料を算出して画面に表示します

	function calculateDog( weightVal, ageVal ) {

		// 保険料

		var prices = [
			// 犬 10kg未満
			[
				// 0歳
				[
					"1,170",  // コース50月払
					"12,730", // コース50一時払
					"1,460",  // コース70月払
					"15,980"  // コース70一時払
				],
				// 1歳
				[
					"1,090",  // コース50月払
					"11,940", // コース50一時払
					"1,360",  // コース70月払
					"14,860"  // コース70一時払
				],
				// 2歳
				[
					"1,020",  // コース50月払
					"11,150", // コース50一時払
					"1,260",  // コース70月払
					"13,770"  // コース70一時払
				],
				// 3歳
				[
					"1,140",  // コース50月払
					"12,420", // コース50一時払
					"1,430",  // コース70月払
					"15,550"  // コース70一時払
				],
				// 4歳
				[
					"1,250",  // コース50月払
					"13,690", // コース50一時払
					"1,590",  // コース70月払
					"17,320"  // コース70一時払
				],
				// 5歳
				[
					"1,370",  // コース50月払
					"14,960", // コース50一時払
					"1,750",  // コース70月払
					"19,100"  // コース70一時払
				],
				// 6歳
				[
					"1,720",  // コース50月払
					"18,810", // コース50一時払
					"2,240",  // コース70月払
					"24,490"  // コース70一時払
				],
				// 7歳
				[
					"2,080",  // コース50月払
					"22,650", // コース50一時払
					"2,740",  // コース70月払
					"29,860"  // コース70一時払
				],
				// 8歳
				[
					"2,430",  // コース50月払
					"26,500", // コース50一時払
					"3,230",  // コース70月払
					"35,260"  // コース70一時払
				],
				// 9歳
				[
					"2,750",  // コース50月払
					"29,980", // コース50一時払
					"3,680",  // コース70月払
					"40,130"  // コース70一時払
				],
				// 10歳
				[
					"3,070",  // コース50月払
					"33,460", // コース50一時払
					"4,130",  // コース70月払
					"45,000"  // コース70一時払
				]
			],
			// 犬 10kg以上

			[
				// 0歳
				[
					"2,000",  // コース50月払
					"21,870", // コース50一時払
					"2,640",  // コース70月払
					"28,770"  // コース70一時払
				],
				// 1歳
				[
					"1,840",  // コース50月払
					"20,020", // コース50一時払
					"2,400",  // コース70月払
					"26,180"  // コース70一時払
				],
				// 2歳
				[
					"1,670",  // コース50月払
					"18,180", // コース50一時払
					"2,160",  // コース70月払
					"23,610"  // コース70一時払
				],
				// 3歳
				[
					"1,870",  // コース50月払
					"20,360", // コース50一時払
					"2,440",  // コース70月払
					"26,660"  // コース70一時払
				],
				// 4歳
				[
					"2,070",  // コース50月払
					"22,560", // コース50一時払
					"2,730",  // コース70月払
					"29,740"  // コース70一時払
				],
				// 5歳
				[
					"2,270",  // コース50月払
					"24,740", // コース50一時払
					"3,000",  // コース70月払
					"32,780"  // コース70一時払
				],
				// 6歳
				[
					"2,930",  // コース50月払
					"31,930", // コース50一時払
					"3,930",  // コース70月払
					"42,860"  // コース70一時払
				],
				// 7歳
				[
					"3,590",  // コース50月払
					"39,130", // コース50一時払
					"4,850",  // コース70月払
					"52,930"  // コース70一時払
				],
				// 8歳
				[
					"4,250",  // コース50月払
					"46,320", // コース50一時払
					"5,780",  // コース70月払
					"63,010"  // コース70一時払
				],
				// 9歳
				[
					"4,870",  // コース50月払
					"53,090", // コース50一時払
					"6,640",  // コース70月払
					"72,480"  // コース70一時払
				],
				// 10歳
				[
					"5,490",  // コース50月払
					"59,880", // コース50一時払
					"7,520",  // コース70月払
					"81,990"  // コース70一時払
				]
			],
			// 犬 20kg以上

			[
				// 0歳
				[
					"2,200",  // コース50月払
					"24,020", // コース50一時払
					"2,910",  // コース70月払
					"31,780"  // コース70一時払
				],
				// 1歳
				[
					"2,010",  // コース50月払
					"21,970", // コース50一時払
					"2,650",  // コース70月払
					"28,920"  // コース70一時払
				],
				// 2歳
				[
					"1,830",  // コース50月払
					"19,950", // コース50一時払
					"2,390",  // コース70月払
					"26,090"  // コース70一時払
				],
				// 3歳
				[
					"2,050",  // コース50月払
					"22,400", // コース50一時払
					"2,710",  // コース70月払
					"29,510"  // コース70一時払
				],
				// 4歳
				[
					"2,280",  // コース50月払
					"24,870", // コース50一時払
					"3,020",  // コース70月払
					"32,970"  // コース70一時払
				],
				// 5歳
				[
					"2,500",  // コース50月払
					"27,310", // コース50一時払
					"3,340",  // コース70月払
					"36,390"  // コース70一時払
				],
				// 6歳
				[
					"3,250",  // コース50月払
					"35,490", // コース50一時払
					"4,380",  // コース70月払
					"47,830"  // コース70一時払
				],
				// 7歳
				[
					"4,000",  // コース50月払
					"43,650", // コース50一時払
					"5,430",  // コース70月払
					"59,270"  // コース70一時払
				],
				// 8歳
				[
					"4,750",  // コース50月払
					"51,820", // コース50一時払
					"6,480",  // コース70月払
					"70,710"  // コース70一時払
				],
				// 9歳
				[
					"5,460",  // コース50月払
					"59,510", // コース50一時払
					"7,470",  // コース70月払
					"81,470"  // コース70一時払
				],
				// 10歳
				[
					"6,160",  // コース50月払
					"67,220", // コース50一時払
					"8,460",  // コース70月払
					"92,270"  // コース70一時払
				]
			],
			[
				// 猫
				// 0歳
				[
					"1,040", // コース50月払
					"11,390", // コース50一時払
					"1,290", // コース70月払
					"14,100"  // コース70一時払
				],
				// 1歳
				[
					"1,020", // コース50月払
					"11,080", // コース50一時払
					"1,250", // コース70月払
					"13,670"  // コース70一時払
				],
				// 2歳
				[
					"990", // コース50月払
					"10,790", // コース50一時払
					"1,220", // コース70月払
					"13,260"  // コース70一時払
				],
				// 3歳
				[
					"1,070", // コース50月払
					"11,680", // コース50一時払
					"1,330", // コース70月払
					"14,500"  // コース70一時払
				],
				// 4歳
				[
					"1,150", // コース50月払
					"12,580", // コース50一時払
					"1,450", // コース70月払
					"15,770"  // コース70一時払
				],
				// 5歳
				[
					"1,240", // コース50月払
					"13,480", // コース50一時払
					"1,560", // コース70月払
					"17,030"  // コース70一時払
				],
				// 6歳
				[
					"1,430", // コース50月払
					"15,630", // コース50一時払
					"1,840", // コース70月払
					"20,040"  // コース70一時払
				],
				// 7歳
				[
					"1,630", // コース50月払
					"17,790", // コース50一時払
					"2,110", // コース70月払
					"23,060"  // コース70一時払
				],
				// 8歳
				[
					"1,830", // コース50月払
					"19,960", // コース50一時払
					"2,390", // コース70月払
					"26,090"  // コース70一時払
				],
				// 9歳
				[
					"2,190", // コース50月払
					"23,890", // コース50一時払
					"2,900", // コース70月払
					"31,600"  // コース70一時払
				],
				// 10歳
				[
					"2,550", // コース50月払
					"27,820", // コース50一時払
					"3,400", // コース70月払
					"37,100"  // コース70一時払
				]
			]
		];

		var x = weightVal - 1;
		var y = ageVal;

		// 結果を表示
		$.printResultPrices( prices[ x ][ y ] );

	}

	// 選択されている値より猫の保険料を算出して画面に表示します

	function calculateCatGetVal() {

		// 選択されている年齢を取得

		var ageVal = $('input[name="petAgeCat"]:checked').val();
		if( ageVal == null || ageVal.length < 1 ){
			// 年齢が設定されていないので終了

			return false;
		}

		calculateCat( ageVal );

	}

	// 猫の保険料を算出して画面に表示します

	function calculateCat( ageVal ) {

		// 保険料

		var prices = [
			// 0歳
			[
				"1,040", // コース50月払
				"11,390", // コース50一時払
				"1,290", // コース70月払
				"14,100"  // コース70一時払
			],
			// 1歳
			[
				"1,020", // コース50月払
				"11,080", // コース50一時払
				"1,250", // コース70月払
				"13,670"  // コース70一時払
			],
			// 2歳
			[
				"990", // コース50月払
				"10,790", // コース50一時払
				"1,220", // コース70月払
				"13,260"  // コース70一時払
			],
			// 3歳
			[
				"1,070", // コース50月払
				"11,680", // コース50一時払
				"1,330", // コース70月払
				"14,500"  // コース70一時払
			],
			// 4歳
			[
				"1,150", // コース50月払
				"12,580", // コース50一時払
				"1,450", // コース70月払
				"15,770"  // コース70一時払
			],
			// 5歳
			[
				"1,240", // コース50月払
				"13,480", // コース50一時払
				"1,560", // コース70月払
				"17,030"  // コース70一時払
			],
			// 6歳
			[
				"1,430", // コース50月払
				"15,630", // コース50一時払
				"1,840", // コース70月払
				"20,040"  // コース70一時払
			],
			// 7歳
			[
				"1,630", // コース50月払
				"17,790", // コース50一時払
				"2,110", // コース70月払
				"23,060"  // コース70一時払
			],
			// 8歳
			[
				"1,830", // コース50月払
				"19,960", // コース50一時払
				"2,390", // コース70月払
				"26,090"  // コース70一時払
			],
			// 9歳
			[
				"2,190", // コース50月払
				"23,890", // コース50一時払
				"2,900", // コース70月払
				"31,600"  // コース70一時払
			],
			// 10歳
			[
				"2,550", // コース50月払
				"27,820", // コース50一時払
				"3,400", // コース70月払
				"37,100"  // コース70一時払
			]
		];

		// 結果を表示
		$.printResultPrices( prices[ ageVal ] );

	}

	$.printResultPrices = function ( pricesArray ){
		$("#case50 p.monthly").text( pricesArray[0] ); // コース50月払を表示
		$('#case50 p.lumpSum').text( pricesArray[1] ); // コース50一時払を表示
		$('#case70 p.monthly').text( pricesArray[2] ); // コース70月払を表示
		$('#case70 p.lumpSum').text( pricesArray[3] ); // コース70一時払を表示
	}

});

// 今すぐ申込み
function moushikomi(petType, sPet) {

	var pattern4 = "";
	var petBreed = document.getElementById("petBreed").value;
	var petType = document.getElementById("petType").value;

	// 犬の場合

	if(petType == 1) {
		var petWeight = document.getElementById("petWeight").value;
		
		// 純血犬の場合

		if(petBreed != "") {
			pattern4 = 1;
		
		// 混血犬の場合

		} else if (petWeight != "") {
			pattern4 = 2;
			if( petWeight == 1 ){
				petBreed = 300;
			} else if( petWeight == 2 ){
				petBreed = 301;
			} if( petWeight == 3 ){
				petBreed = 302;
			}
		}
	
	// 猫の場合

	} else {
		sPet="neko";
/*		
		// 混血猫の場合

		if(petBreed == "600") {
			pattern4 = 4;
			
		// 純血猫の場合

		} else if(petBreed != "") {
			pattern4 = 3;
		}
*/
	}

	//var url = 'https://www.au-sonpo.co.jp/pca/MBT_1_1.do?sPet=' + sPet;
	var url = 'https://www.au-sonpo.co.jp/pca/popup_aute_pet_20140401?sPet=' + sPet;

	if(pattern4 != "") {
		url = url + '&param=' + pattern4 + petBreed;
	}
	
	// 画面開き処理

	win1 = open(url,'popup',"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,top=0,left=0,width=770,height=680");
	if(document.images) {
		win1.opener = self;
		win1.focus();
	}
}

// 画面開き処理

function openwin(sub_url,win_name){

	var url = 'https://www.au-sonpo.co.jp' + sub_url;
	
	window.open(url, win_name, 'width=770, height=680, menubar=no, toolbar=no, scrollbars=yes'); 
}