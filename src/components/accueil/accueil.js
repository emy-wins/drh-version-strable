$(document).ready(function ($) {
  $(".loader").delay(2000).fadeOut("slow");
  if ($(".menu").length) {
    $(".menu li").each(function () {
      $(this).click(function () {
        $(".loader").show();
        let display = $(this).data('display');
        $('.menu li').removeClass('active-itm');
        $(this).addClass('active-itm');
        $('.s-infos .items-taps').each(function () {
          let show = $(this).data('show');
          if (display == show) {
            $('.s-infos .items-taps').removeClass('item-show');
            $(this).addClass('item-show');
          }
        });
        $(".loader").delay(1000).fadeOut("slow");
      });
    });
  }
  if ($(".menu").length) {
    $(".slider-eq").slick({
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      variableWidth: true,
    });
  }
});
