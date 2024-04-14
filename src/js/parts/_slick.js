$(document).ready(function() {
    $('.case_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '60px',
        cssEase:'linear',
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed: 5000,
        arrows: true,
        variableWidth: true
    });

    $('.news_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 4,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.team_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 4,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.feedback_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});