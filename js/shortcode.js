/**
 * flatSpacer
 * flatOwl
 * flatGallery
 * inViewport
 * flatEqualizeHeight
 * flatContentBox
 * searchIcon
 * flatTabs
 * flatAccordions
 * flatProgressBar
 * googleMap
 * flatCounter
 * flatIsotope
 * swClick
 * Parallax
 */

;
(function($) {

    "use strict";

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var flatSpacer = function() {
        $(window).on('load resize', function() {
            var mode = 'desktop';
            if (matchMedia('only screen and (max-width: 991px)').matches)
                mode = 'mobile';
            if (matchMedia('only screen and (max-width: 767px)').matches)
                mode = 'smobile';
            $('.themesflat-spacer').each(function() {
                if (mode === 'desktop') {
                    $(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
                } else if (mode == 'mobile') {
                    $(this).attr('style', 'height:' + $(this).data('mobile') + 'px')
                } else {
                    $(this).attr('style', 'height:' + $(this).data('smobile') + 'px')
                }
            });
        });
    };

    var Parallax = function() {
        if ($().parallax && isMobile.any() == null) {
            $('.parallax-1').parallax("50%", 0.1);
            $('.parallax-3').parallax("50%", 0.1);
            $('.parallax-4').parallax("50%", 0.1);
        }
    };


    var flatOwl = function() {
        if ($().owlCarousel) {
            $('.themesflat-carousel-box').each(function() {
                var
                    $this = $(this),
                    auto = $this.data("auto"),
                    item = $this.data("column"),
                    item2 = $this.data("column2"),
                    item3 = $this.data("column3"),
                    gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    nav: true,
                    navigation: true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: item3
                        },
                        600: {
                            items: item2
                        },
                        1000: {
                            items: item
                        }
                    }
                });
            });
        }
    };

    var flatGallery = function() {
        if ($().owlCarousel) {
            $('.themesflat-gallery').each(function() {
                var
                    $this = $(this),
                    auto = $this.data("auto"),
                    item = $this.data("column"),
                    item2 = $this.data("column2"),
                    item3 = $this.data("column3"),
                    gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    nav: true,
                    thumb: true,
                    thumbImage: true,
                    navigation: true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: item3
                        },
                        600: {
                            items: item2
                        },
                        1000: {
                            items: item
                        }
                    }
                });
            });
        }
    };

    var inViewport = function() {
        $('[data-inviewport="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };


    var flatContentBox = function() {
        $(window).on('load resize', function() {
            var mode = 'desktop';
            if (matchMedia('only screen and (max-width: 1199px)').matches)
                mode = "mobile";
            $('.themesflat-content-box').each(function() {
                var margin = $(this).data('margin');
                if (margin) {
                    if (mode === 'desktop') {
                        $(this).attr('style', 'margin:' + $(this).data('margin'))
                    } else if (mode === 'mobile') {
                        $(this).attr('style', 'margin:' + $(this).data('mobilemargin'))
                    }
                }
            });
        });
    };

    var searchIcon = function() {
        $(document).on('click', function(e) {
            var clickID = e.target.id;
            if ((clickID !== 'input-search')) {
                $('.header-search-form').removeClass('show');
            }
        });

        $('.header-search-icon').on('click', function(event) {
            event.stopPropagation();
        });

        $('.header-search-form').on('click', function(event) {
            event.stopPropagation();
        });

        $('.header-search-icon').on('click', function(event) {
            if (!$('.header-search-form').hasClass("show")) {
                $('.header-search-form').addClass('show');
                event.preventDefault();
            } else
                $('.header-search-form').removeClass('show');
            event.preventDefault();

        });

    };

    var flatTabs = function() {
        $('.themesflat-tabs').each(function() {
            var
                list = "",
                title = $(this).find('.item-title'),
                titleWrap = $(this).children('.tab-title');

            title.each(function() {
                list = list + "<li>" + $(this).html() + "</li>";
            }).appendTo(titleWrap);

            $(this).find('.tab-title li').filter(':first').addClass('active');
            $(this).find('.tab-content-wrap').children().hide().filter(':first').show();

            $(this).find('.tab-title li').on('click', function(e) {
                var
                    idx = $(this).index(),
                    content = $(this).closest('.themesflat-tabs').find('.tab-content-wrap').children().eq(idx);

                $(this).addClass('active').siblings().removeClass('active');
                content.fadeIn('slow').siblings().hide();

                e.preventDefault();
            });
        });
    };

    var flatAccordions = function() {
        var args = { easing: 'easeOutExpo', duration: 500 };

        $('.accordion-item.active').find('.accordion-content').show();
        $('.accordion-heading').on('click', function() {
            if (!$(this).parent().is('.active')) {
                $(this).parent().toggleClass('active')
                    .children('.accordion-content').slideToggle(args)
                    .parent().siblings('.active').removeClass('active')
                    .children('.accordion-content').slideToggle(args);
            } else {
                $(this).parent().toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    var flatProgressBar = function() {
        if ($().waypoint) {
            $('.progress-bg').on('on-appear', function() {
                $(this).each(function() {
                    var percent = parseInt($(this).data('percent'));

                    $(this).find('.progress-animate').animate({
                        "width": percent + '%'
                    }, 1000, "easeInCirc");

                    $(this).parent('.themesflat-progress').find('.perc').addClass('show').animate({
                        "width": percent + '%'
                    }, 1000, "easeInCirc");
                });
            });
        }
    };

    var flatCounter = function() {
        if ($().countTo) {
            $('.themesflat-counter').on('on-appear', function() {
                $(this).find('.number').each(function() {
                    var to = $(this).data('to'),
                        speed = $(this).data('speed');

                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                });
            });
        }
    };


    // Dom Ready
    $(function() {
        flatSpacer();
        flatContentBox();
        flatGallery();
        searchIcon();
        flatTabs();
        flatAccordions();
        flatProgressBar();
        flatCounter();
    });

})(jQuery);