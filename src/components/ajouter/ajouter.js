const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
let formStepsNum = 0;
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});
function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });
  formSteps[formStepsNum].classList.add("form-step-active");
}
function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });
}


$(document).ready(function () {

  $(".add-partner").click(function () {
    $(".form-partner").append("<div><strong>Ajouter l'époux (se)</strong><div class='d-grid-4 mt-5  mb-5'><div class='input-form'><label>Nom de l'époux (se)<span class='text-danger'>*</span></label><input type='text' autocomplete='false'/></div><div class='input-form'><label>Prénom de l'époux (se)<span class='text-danger'>*</span></label><input type='text' autocomplete='false'/></div><div class='input-form'><label dir='rtl'>الاسم الشخصي لزوج(ة)<span class='text-danger'>*</span></label><input type='text' autocomplete='false' dir='rtl'/></div><div class='input-form'><label>N° CNIE de l'époux (se)<span class='text-danger'>*</span></label><input type='text'/></div><div class='p-relative input-form'><label>Importer la CNIE de l'époux (se)<span class='text-danger'>*</span></label><input type='file'/><div class='uploadfile'><span>La CNIE de l'époux (se)</span><img src='../assets/images/svg/upload.svg' alt=''/></div></div><div class='input-form'><label>Valable jusqu'au<span class='text-danger'>*</span></label><input type='date'/></div><div class='input-form'><label>Date de naissance de l'époux (se)<span class='text-danger'>*</span></label><input type='date'/></div><div class='input-form'><label>Lieu de naissance de l'époux (se)<span class='text-danger'>*</span></label><input type='text' autocomplete='false'/></div><div class='input-form'><label dir='rtl'>مكان ازدياد الزوج(ة)<span class='text-danger'>*</span></label><input type='text' autocomplete='false' dir='rtl'/></div><div class='input-form'><label>IDSC de l'époux (se)<span class='text-danger'>*</span></label><input type='text'/></div><div class='p-relative input-form'><label>Importer Acte de mariage<span class='text-danger'>*</span></label><input type='file'/><div class='uploadfile'><span>Acte de mariage</span><img src='../assets/images/svg/upload.svg' alt=''/></div></div><div class='input-form'><label>Nombre d'enfants<span class='text-danger'>*</span></label><input type='number' min='0' autocomplete='false'/></div></div><div class='wrap-enfant'></div><div class='d-flex align-items-center justify-content-end mt-5 mb-5'><a href='javascript:void(0);' class='btn btn-small btn-blue ms-3 add-enfant'>Ajouter enfants</a></div><div class='d-flex justify-content-end mt-4 mb-4'><a href='javascript:void(0);' class='btn btn-small btn-red remove-partner'>supprimer famille</a></div></div>");
    $(".add-enfant").click(function () {
      $(".wrap-enfant").append("<div class='form-child'><strong>Inscrire les enfants</strong><form action='#' method='post'><div class='d-grid-4  mt-5'><div class='input-form'><label>Nom de l'enfant<span class='text-danger'>*</span></label><input type='text' autocomplete='false'/></div><div class='input-form'><label dir='rtl'>الاسم العائلي للطفل<span class='text-danger'>*</span></label><input type='text' autocomplete='false' dir='rtl'/></div><div class='input-form'><label>Prénom de l'enfant<span class='text-danger'>*</span></label><input type='text' autocomplete='false'/></div><div class='input-form'><label dir='rtl'>الاسم الشخصي للطفل<span class='text-danger'>*</span></label><input type='text' autocomplete='false'/></div><div class='input-form'><label>Sexe<span class='text-danger'>*</span></label><select><option>Fille</option><option>Garçon</option></select></div><div class='input-form'><label>Date de naissance de l'enfant<span class='text-danger'>*</span></label><input type='date'/></div><div class='input-form'><label>Année État Civil<span class='text-danger'>*</span></label><input type='number'/></div><div class='file input-form'><label>Importer l'extrait de naissance<span class='text-danger'>*</span></label><input type='file'/><div class='uploadfile'><span>L'extrait de naissance</span><img src='../assets/images/svg/upload.svg' alt=''/></div></div><div class='input-form'><label>Lieu de naissance de l'enfant<span class='text-danger'>*</span></label><input type='text' autocomplete='false'/></div><div class='input-form'><label dir='rtl'>مكان ازديادالطفل<span class='text-danger'>*</span></label><input type='text' autocomplete='false' dir='rtl'/></div><div class='input-form'><label>Etat civil N°<span class='text-danger'>*</span></label><input type='number' min='0'/></div><div class='input-form'><label>IDSC de l'enfant<span class='text-warning'>*</span><span class='text-danger'>*</span></label><input type='number' min='0' autocomplete='false'/></div></div></form></div>")
    });
  });

});

