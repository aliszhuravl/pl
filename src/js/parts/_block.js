$(document).ready(function() {
    $(".services_container__inner_box").hover(function () {
        $('.active_box').removeClass('active_box');
        $(this).addClass('active_box');
        $(this).siblings().removeClass('active_box');
    });
});
