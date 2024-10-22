AOS.init({
  once: true,
  mirror: false,
});
$(document).ready(function ($) {
  if ($(".form-login").length) {
    $('.btn-oblier').click(function () {
      $('.form-login').each(function () {
        $(this).removeClass('show-form');
      });
      $('.form-verifier').addClass('show-form');
    });
    $('.btn-verifier').click(function () {
      $('.form-login').each(function () {
        $(this).removeClass('show-form');
      });
      $('.form-modifier').addClass('show-form');
    });
    $('.btn-modifier').click(function () {
      $('.form-login').each(function () {
        $(this).removeClass('show-form');
      });
      $('.lg-form').addClass('show-form');
    });
  }
});
