$(document).ready(function ($) {
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
