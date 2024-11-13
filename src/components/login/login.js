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
    $('.btn-reinitialiser').click(function () {
      $(".loader").show();
      $('.form-login').each(function () {
        $(this).removeClass('show-form');
      });
      $('.lg-form').addClass('show-form');
      $(".loader").delay(1000).fadeOut("slow");
    });
  }
});


$(document).ready(function ($) {
  $("#form-login").validate({
    rules: {
      cnie: "required",
      password: {
        required: true,
        minlength: 6,
        maxlength: 10,
      },
    },
    messages: {
      cnie: "CNIE est obligatoire",
      password: {
        required: "Mot de passe est obligatoire",
        minlength: "Le mot de passe doit contenir au minimum 6 caractères.",
        maxlength: "Le mot de passe ne doit pas dépasser 10 caractères"
      },
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element);
    },
    submitHandler: function (form) {
      form.submit();
    }

  });
  $("#form-verifier").validate({
    rules: {
      cnie: "required",
      email: "required",
      date: "required",
    },
    messages: {
      cnie: "CNIE est obligatoire",
      email: "email est obligatoire",
      date: "Date naissance est obligatoire",
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element);
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});
