(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function linkHighlight(linkClass) {

        /* highlight active menu item*/
        $(linkClass).each(function (index) {
            if (this.href.trim() == window.location)
                $(this).addClass('link_active');
        });
    }

    linkHighlight('.link_menu');

})(jQuery);
$(document).ready(function() {
    $(".services_container__inner_box").hover(function () {
        $('.active_box').removeClass('active_box');
        $(this).addClass('active_box');
        $(this).siblings().removeClass('active_box');
    });
});
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '#link-to-block' );

})(jQuery);
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
(function($) {
    var hamburger = $('.hamburger');
    var body = $('body');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('stopped');
        $('.menu_opener').addClass('menu-mobile_opened');
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('body').removeClass('stopped');
        $('.menu_opener').removeClass('menu-mobile_opened');
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose();
            $('body').removeClass('stopped');
        } else {
            hamburgerOpen();
            $('body').addClass('stopped');
        }
    });

    $('.menu_wrapper').on('click', function() {
        hamburgerClose();
    });


})(jQuery);
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
$(document).ready(function() {
    $(".theme-button").click(function () {
        $('body').toggleClass('light_theme');
    });
    $(".theme-switcher").click(function () {
        $('body').toggleClass('light_theme');
    });
});
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
});
$(document).ready(function() {
    var banner = $(".hero_block");
    var imgs = $(".item");
// /////////////////////////////////////////////////////////////
    function showAllObjects (object) {
        object.fadeIn(900);
    }
// /////////////////////////////////////////////////////////////
    function moving (object, speed) {
        banner.on('mousemove', function(event) {
            var X = Math.floor((event.pageX)/speed-20) + "px";
            var Y = Math.floor((event.pageY)/speed) + "px";
            object.css('transform', 'translate('+X+' , '+Y+')');
        });
    }
// /////////////////////////////////////////////////////////////
    function moveAll (object) {
        moving($(object[0]),7);
    }
// /////////////////////////////////////////////////////////////
    showAllObjects(imgs);
    moveAll(imgs);
// /////////////////////////////////////////////////////////////
});
$(document).ready(function() {
    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 80) {
            $(".panel").addClass('panel_open')
        }
        if (120 > scrolled) {
            $(".panel").removeClass('panel_open')
        }
    };

    $('.open_search').on('click', function () {
        $('.panel_search').addClass('ps_opened');
    });

    $('.close_search').on('click', function () {
        $('.panel_search').removeClass('ps_opened');
    });

    $('.search').on('click', function () {
        $('.main_search').addClass('ms_opened');
    });

    $('.close_hs').on('click', function () {
        $('.main_search').removeClass('ms_opened');
    });
});
$(document).ready(function() {
    $(".pop_open").click(function () {
        $(".popup_wrapper").addClass('visible_popup');
    });
    $(".close").click(function () {
        $(".popup_wrapper").removeClass('visible_popup');
    });
});