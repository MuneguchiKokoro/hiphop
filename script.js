$(function () {
        var h = $(window).height();
      $('#wrap').css('display','none');
      $('#loader-bg ,#loader').height(h).css('display','block');
    });
      
    $(window).load(function () { //全ての読み込みが完了したら実行
      $('#loader-bg').delay(900).fadeOut(800);
      $('#loader').delay(600).fadeOut(300);
      $('#wrap').css('display', 'block');

  // FAQのアコーディオン
  $('.rappers-list-item').click(function() {
    var $syousai = $(this).find('.syousai');
    if($syousai.hasClass('open')) {
      $syousai.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠し
      $syousai.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換え
      $(this).find('span').text('+');

    } else {
         $syousai.addClass('open');
      // slideDownメソッドを用いて、$answerを表示
         $syousai.slideDown();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換え
         $(this).find('span').text('-');

    }
  });

  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });

});
