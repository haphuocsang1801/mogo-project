$(document).ready(function () {
    $(".quote-container").slick({
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                },
            },
        ],
    });
});
const menuBars = document.querySelector(".header-bar");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuBars.addEventListener("click", function () {
    menuHeader.classList.add(expandClass);
});
window.addEventListener("click", function (e) {
    if (!menuHeader.contains(e.target) && !e.target.matches(".header-bar")) {
        menuHeader.classList.remove(expandClass);
    }
});
