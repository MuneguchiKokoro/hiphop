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

window.onload = function(){
    $("#onemore").addClass("disappear");
    $("card").addClass("disappear");
    }

  // ガチャデータを定義
  var card_1 = 10;
  var card_2 = 20;
  var card_3 = 30;
  var card_4 = 40;
  var card_5 = 50;
  var card_6 = 60;
  var card_7 = 70;
  const min = 1;
  const max = 70;

  function OneMoreOnButtonClick() {
      $("#app").removeClass("appear");
      $("#app").addClass("disappear");
      $("#button-name").addClass("disappear");
      $("#glow").addClass("disappear");
      $("onemore").addClass("appear");
      $("#card_1").removeClass("appear");
      $("#card_1").addClass("disappear");
      $("#card_2").removeClass("appear");
      $("#card_2").addClass("disappear");
      $("#card_3").removeClass("appear");
      $("#card_3").addClass("disappear");
      $("#card_4").removeClass("appear");
      $("#card_4").addClass("disappear");
      $("#card_5").removeClass("appear");
      $("#card_5").addClass("disappear");
      $("#card_6").removeClass("appear");
      $("#card_6").addClass("disappear");
      $("#card_7").removeClass("appear");
      $("#card_7").addClass("disappear");
      $("#card_1 #holo").addClass("disappear");
      $("#card_2 #holo").addClass("disappear");
      $("#card_3 #holo").addClass("disappear");
      $("#card_4 #holo").addClass("disappear");
      $("#card_5 #holo").addClass("disappear");
      $("#card_6 #holo").addClass("disappear");
      $("#card_7 #holo").addClass("disappear");
      $("#card_1").removeClass("animated");
      $("#card_2").removeClass("animated");
      $("#card_3").removeClass("animated");
      $("#card_4").removeClass("animated");
      $("#card_5").removeClass("animated");
      $("#card_6").removeClass("animated");
      $("#card_7").removeClass("animated");
      $("#card_1 #glow2").addClass("active");
      $("#card_2 #glow2").addClass("active");
      $("#card_3 #glow2").addClass("active");
      $("#card_4 #glow2").addClass("active");
      $("#card_5 #glow2").addClass("active");
      $("#card_6 #glow2").addClass("active");
      $("#card_7 #glow2").addClass("active");



       const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
       console.log(randomNum);

       if(randomNum<=10){
           console.log("card_1が当たりました！");
           $("#card_1 #holo").removeClass("disappear");
           $("#card_1").removeClass("disappear");
           $("#card_1").addClass("appear");
           $("#onemore").addClass("displayblock");
           var animation = setTimeout(function() {
           $("#card_1").addClass("animated");
           }, 1000);
       }
       else if(randomNum>=10&randomNum<=20){
           console.log("card_2が当たりました！");
            $("#card_2 #holo").removeClass("disappear");
            $("#card_2").removeClass("disappear");
            $("#card_2").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_2").addClass("animated");
	        }, 1000);
       }
       else if(randomNum>=20&randomNum<=30){
           console.log("card_3が当たりました！");
            $("#card_3 #holo").removeClass("disappear");
            $("#card_3").removeClass("disappear");
            $("#card_3").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_3").addClass("animated");
	        }, 1000);
       }
       else if(randomNum>=30&randomNum<=40){
           console.log("card_4が当たりました！");
            $("#card_4 #holo").removeClass("disappear");
            $("#card_4").removeClass("disappear");
            $("#card_4").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_4").addClass("animated");
	        }, 1000);
       }
       else if(randomNum>=40&randomNum<=50){
           console.log("card_5が当たりました！");
            $("#card_5 #holo").removeClass("disappear");
            $("#card_5").removeClass("disappear");
            $("#card_5").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_5").addClass("animated");
            }, 1000);
       }
       else if(randomNum>=50&randomNum<=60){
           console.log("card_6が当たりました！");
            $("#card_6 #holo").removeClass("disappear");
            $("#card_6").removeClass("disappear");
            $("#card_6").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_6").addClass("animated");
            }, 1000);
       }
       else if(randomNum>=60&randomNum<=70){
           console.log("card_7が当たりました！");
            $("#card_7 #holo").removeClass("disappear");
            $("#card_7").removeClass("disappear");
            $("#card_7").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_7").addClass("animated");
            }, 1000);
       }
  }

