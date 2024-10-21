$(document).ready(function ($) {
  if ($(".menu").length) {
    $(".menu li").each(function () {
      $(this).click(function () {
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
      });
    });
  }
});
