$(function() {
  var h = $(window).height();
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
  
//全ての読み込みが完了したら実行ローダー
$(window).load(function () { 
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});

$('.hamburger').click(function () {
    $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
    }
});

//新しいアコーディオン
$(function () {
    $('.ac-parent').on('click', function () {
    $(this).next().slideToggle();
  });
});
