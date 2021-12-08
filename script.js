$(function() {

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
});
