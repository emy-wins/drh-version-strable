
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
        minlength:"Le mot de passe doit contenir au minimum 6 caractères.",
        maxlength:"Le mot de passe ne doit pas dépasser 10 caractères"
      },
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element);
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});
