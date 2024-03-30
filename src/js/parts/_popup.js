$(document).ready(function() {
    $(".pop_open").click(function () {
        $(".popup_wrapper").addClass('visible_popup');
    });
    $(".close").click(function () {
        $(".popup_wrapper").removeClass('visible_popup');
    });
});