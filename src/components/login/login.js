AOS.init({
  once: true,
  mirror: false,
});
$(document).ready(function ($) {
  if ($(".form-login").length) {
    $('.btn-oblier').click(function () {
      $(".loader").show();
      $('.form-login').each(function () {
        $(this).removeClass('show-form');
      });
      $('.form-verifier').addClass('show-form');
      $(".loader").delay(1000).fadeOut("slow");
    });
    $('.btn-verifier').click(function () {
      $(".loader").show();
      $('.form-login').each(function () {
        $(this).removeClass('show-form');
      });
      $('.form-modifier').addClass('show-form');
      $(".loader").delay(1000).fadeOut("slow");
    });
    $('.btn-modifier').click(function () {
      $(".loader").show();
      $('.form-login').each(function () {
        $(this).removeClass('show-form');
      });
      $('.lg-form').addClass('show-form');
      $(".loader").delay(1000).fadeOut("slow");
    });
  }
});
