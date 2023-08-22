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
        arrows: false,
        variableWidth: true
    });
});