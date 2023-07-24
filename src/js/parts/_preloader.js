$(window).on('load', function() {
    $('body').addClass('stoppedpl');
    $('#loader').animate({
        width: "100%"
    }, 800);
    setTimeout(function() {
        $('#loader').fadeOut(200);
    }, 900);
    setTimeout(function() {
        $('#preloader').removeClass('active_load');
        $('body').removeClass('stoppedpl');
    }, 1200);
});