;(function($){
  /* 関数にオプション変数を渡す */
  $.fn.activeImg = function(config){

    /* 引数の初期値を設定（カンマ区切り） */
    var o = $.extend({
         off_suffix : '_off',
          on_suffix : '_on',
      active_suffix : '_ac',
             toggle : false
    }, config);

    // 全体を格納
    var $target = this;

    // サフィックス正規表現
    var reg = new RegExp('(' + o.off_suffix + '|' + o.on_suffix + '|' + o.active_suffix + ')\.');

    /* 一致した要素上で繰り返す */
    return this.each(function(i){
      // off image src
      var off_src = $(this).attr('src').replace(reg, o.off_suffix + '.');
      $.data(this, 'off_src', off_src);
      // on image src
      $.data(this, 'on_src', off_src.replace(o.off_suffix + '.', o.on_suffix + '.'));
      // active image src
      $.data(this, 'active_src', off_src.replace(o.off_suffix + '.', o.active_suffix + '.'));

      // ホバー
      $(this).hover(function(){
        if ($(this).attr('src') != $.data(this, 'active_src')) {
          $(this).attr('src', $.data(this, 'on_src'));
        }
      },function(){
        if ($(this).attr('src') != $.data(this, 'active_src')) {
          $(this).attr('src', $.data(this, 'off_src'));
        }
      });

      // クリック
      $(this).click(function(event){
        var self = this;
        $target.each(function(){
          $(this).not(self).attr('src', $.data(this, 'off_src'));
        });
        if (o.toggle) {
          if ($(this).attr('src') != $.data(this, 'active_src')) {
            $(this).attr('src', $.data(this, 'active_src'));
          } else {
            $(this).attr('src', $.data(this, 'off_src'));
          }
        } else {
          $(this).attr('src', $.data(this, 'active_src'));
        }
      })
      .on('off', function(){
        $(this).attr('src', $.data(this, 'off_src'));
      })
      .on('on', function(){
        $(this).attr('src', $.data(this, 'on_src'));
      })
      .on('active', function(){
        $(this).attr('src', $.data(this, 'active_src'));
      });
    });

  };
})(jQuery);