//お知らせメッセージ取得
$(function() {
	$.ajax({
		url: '/pca/osirase',
		type: 'GET',
		data: null,
		dataType: 'html',
		success: function(message) {
			if(message!=null && message!="" && message.length!=0){
				$('#osirase_pc,#osirase_sp').html(message);
				$('#osirase_pc,#osirase_sp').slideDown(500, function(){});
			}
		},
		error: function(XMLHttpRequest,textStatus,errorThrown) {}
	});
});
