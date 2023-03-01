//index
$(function() {
    $(".page-title").addClass('animate__heartBeat');
  });

//menu
$(function() {
    $('.big-bg').bgSwitcher({
        images: ['images/menu-top1.jpg','images/menu-top2.jpg','images/menu-top3.jpg','images/menu-top4.jpg','images/menu-top5.jpg'], // 切り替える背景画像を指定
        interval: 3000,// 背景画像を切り替える間隔を指定 3000=3秒
        effect: "clip", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        easing: "linear"
    });
});

//burger
$(function () {
  $('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    //$('.nav-wrapper').toggleClass('fade');
    $('.nav-wrapper').toggleClass('slide-in'); 
    $('body').toggleClass('noscroll'); 
  });
});

//modal
$(function(){
  $('.modal-open').each(function(){
      $(this).on('click',function(){
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
      });
  });
 });
  $('.modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  }); 