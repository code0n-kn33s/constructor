import { scrollToTop } from './helpers'

(function () {
    // Material Parallax

    // $(".parallax-container").parallax();

    $(window).on("load", function () {
        setTimeout(function () {
            $(window).scroll();
        }, 500);
    });

    for (let i = 0; i < document.querySelectorAll(".parallax-container").length; i++) {
        let parallax = document.querySelectorAll(".parallax-container")[i];
        let imgPath = parallax.getAttribute("data-parallax-img");

        $(".parallax-container").parallax()

        parallax.style.csstext = `
            "background-image": "url(" + ${imgPath} + ")";
            "background-size": "cover";
        `
    }
})()
