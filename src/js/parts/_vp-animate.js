$(document).ready(function(){
    if($('.gb_animate').length) {
        $('.gb_animate').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 200
        });
        $('.gs_animate').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 100
        });

        $('.bigger_animate').viewportChecker({
            classToAdd: 'visible animated_long bigger',
            offset: 100
        });
    }
});