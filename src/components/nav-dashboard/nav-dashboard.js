$(document).ready(function ($) {
    if ($(".hamburger").length) {
        var menu = document.querySelector(".menu");
        $(".hamburger").click(function () {
            $('body').toggleClass('body-hidden');
            $(menu).toggleClass("menu-active");
            $(this).toggleClass("close");
        });
    }
});
