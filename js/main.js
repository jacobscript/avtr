$(function () {
    $('.design__slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow:
            '<img src="images/arrow-left.svg" alt="left arrow" class="arrow arrow-left">',
        nextArrow:
            '<img src="images/arrow-right.svg" alt="right arrow" class="arrow arrow-right">',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                },
            },
        ],
    })
})
