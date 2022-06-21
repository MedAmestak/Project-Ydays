(function ($) {
    "use strict";
	
	var voxlivApp = {
		/* ---------------------------------------------
		    ## Content Loading
		--------------------------------------------- */	
		contentLoading: function() {
			$("body").imagesLoaded( function() {
				$('.preloader').delay(2000).fadeOut('slow');
				setTimeout(function() {
				    //After 2s, the no-scroll class of the body will be removed
				    $('body').removeClass('no-scroll');
					$("body").addClass("loading-done");
				}, 1000); //Here you can change preloader time
			});
		},	
        
        /* ---------------------------------------------
            ## Scroll top
        --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
        
		/* ---------------------------------------------
            ## Mobile Menu
        --------------------------------------------- */
        mobile_menu: function () {
            var mobilesearch = $('.site-header .navigation-area .header-navigation-right').clone().appendTo('.mobile-menu');
            // mobile Menu
            //-------------------------------
            $('.site-navigation .mainmenu-area nav').meanmenu({
                meanMenuClose: "<i class='fas fa-times'></i>",
                meanMenuCloseSize: '18px',
                meanScreenWidth: '1199',
                meanExpandableChildren: true,
                meanMenuContainer: '.mobile-menu-area .mobile-menu'
            });
        },	
        /*-------------------------------------------
            ## Sticky Header
        --------------------------------------------- */
        sticky_header: function() {
            if ($('#sticky-header').length) {
                $('.site-header .site-navigation').clone().appendTo('#sticky-header');
                $(window).on('scroll', function() {
                    var w = $(window).width();
                    if (w > 1199) {
                        if ($(this).scrollTop() > 350) {
                            $('#sticky-header').slideDown(500);
                        } else {
                            $('#sticky-header').slideUp(500);
                        }
                    }
                });
            } 
        },

        /* ---------------------------------------------
            ## Search
        --------------------------------------------- */
        search: function () {
            $('.search-wrap .search-btn').on('click', function(){
                if($(this).siblings('.search-form').hasClass('active')){

                    $(this).siblings('.search-form').removeClass('active').slideUp();
                    $(this).removeClass('active');
                }
                else{
                    $(this).siblings('.search-form').removeClass('active').slideUp();
                    $(this).siblings('.search-form').removeClass('active');
                    $(this).addClass('active');
                    $(this).siblings('.search-form').addClass('active').slideDown();
                }
            });
        },
        
        /*-------------------------------------------
            ## Initialize Plugin
        --------------------------------------------- */
        initialize_plugin: function () {
            // Page Animation Script
            $("[data-animate]").scrolla({
                mobile: true,
                once: true
            });

            //Faq
            $('.faq-wrapper .faq-title').on('click', function (e) {
                var element = $(this).parent('.faq-item');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('.faq-content').removeClass('open');
                    element.find('.faq-content').slideUp(300);
                } else {
                    element.addClass('open');
                    element.children('.faq-content').slideDown(300);
                    element.siblings('.faq-item').children('.faq-content').slideUp(300);
                    element.siblings('.faq-item').removeClass('open');
                    element.siblings('.faq-item').find('.faq-title').removeClass('open');
                    element.siblings('.faq-item').find('.faq-content').slideUp(300);
                }
            });

            // Nice Select for select input type
            if ($('.select-custom').length) {
                $('.select-custom').niceSelect();
            }            
        },
        
        /* ---------------------------------------------
            ## Video Popup
         --------------------------------------------- */
        video_popup: function() {
            if($(".film-video-popup").length) {
                $(function() {
                    $(".film-video-popup").videoPopup3( {
                        autoplay: 1, 
                        controlsColor: 'white', 
                        showVideoInformations: 0, 
                        width: 800, 
                        customOptions: {
                            rel: 0, 
                            end: 60
                        }
                    });
                });
            }
            if($(".film-video-popup2").length) {
                $(function() {
                    $(".film-video-popup2").videoPopup3( {
                        autoplay: 1, 
                        controlsColor: 'white', 
                        showVideoInformations: 0, 
                        width: 800, 
                        customOptions: {
                            rel: 0, 
                            end: 60
                        }
                    });
                });
            }
        },  
        /* ---------------------------------------------
            ## Promo Numbers
         --------------------------------------------- */
        promo_numbers: function() {
            $(".fanfact-promo-numbers").each(function () {
                $(this).isInViewport(function(status) {
                    if (status === "entered") {
                        for( var i=0; i < document.querySelectorAll(".odometer").length; i++ ){
                            var el = document.querySelectorAll('.odometer')[i];
                            el.innerHTML = el.getAttribute("data-odometer-final");
                        }
                    }
                });
            });
        },  
        
        /* ---------------------------------------------
		    ## New Film Carousel
		--------------------------------------------- */
		newfilm_carousel: function() {
            var $newfilmCarousel = $(".new-film-carousel");
            if ($newfilmCarousel.length) {
                var items = 3;
                $newfilmCarousel.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    dots: false,
                    nav: true,
                    navText: ["<span class='flaticon-left-1'></span>", "<span class='flaticon-right-1'></span>"],
                    responsive: {
                        280: {
                            items: 1
                        },
                        500: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }

            var $newfilmCarousel2 = $(".new-film-carousel2");
            if ($newfilmCarousel2.length) {
                var items = 3;
                $newfilmCarousel2.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    dots: false,
                    nav: true,
                    navText: ["<span class='flaticon-left-1'></span>", "<span class='flaticon-right-1'></span>"],
                    responsive: {
                        280: {
                            items: 1
                        },
                        500: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },
        
        /* ---------------------------------------------
		    ## Seasons Items Carousel
		--------------------------------------------- */
		seasons_items_carousel: function() {
            var $seasonsCarousel = $(".seasons-items-carousel");
            if ($seasonsCarousel.length) {
                var items = 3;
                $seasonsCarousel.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    dots: false,
                    nav: true,
                    navText: ["<span class='flaticon-left-1'></span>", "<span class='flaticon-right-1'></span>"],
                    responsive: {
                        280: {
                            items: 1
                        },
                        500: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },

        /* ---------------------------------------------
		    ## Testimonial Carousel
		--------------------------------------------- */
		testimonial_carousel: function() {
            var $testimonialCarousel = $("#testimonail-carousel");
            if ($testimonialCarousel.length) {
                var items = 3;
                $testimonialCarousel.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        500: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 2
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
            $('.testimonial-block .btn-links-area .btn-prev').on('click', function() {
                $testimonialCarousel.trigger('prev.owl.carousel');
            });
            $('.testimonial-block .btn-links-area .btn-next').on('click', function() {
                $testimonialCarousel.trigger('next.owl.carousel');
            });
        },

        /* ---------------------------------------------
		    ## Pop Up Scripts
		 --------------------------------------------- */
		popupscript: function() {	
			function getScrollBarWidth () {
			    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
			        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
			    $outer.remove();
			    return 100 - widthWithScroll;
			}

			// Image Pop up
			var $popupImage = $(".popup-image");
			if ( $popupImage.length > 0 ) {
			    $popupImage.magnificPopup({
			        type:'image',
			        fixedContentPos: false,
			        gallery: { enabled:true },
			        removalDelay: 300,
			        mainClass: 'mfp-fade',
			        callbacks: {
			            open: function() {
			                $(".page-wrapper, .navbar-nav").css("margin-right", getScrollBarWidth());
			            },
			            close: function() {
			                $(".page-wrapper, .navbar-nav").css("margin-right", 0);
			            }
			        }
			    });
			}
        },
        
        /* ---------------------------------------------
            ## Line Chart
        ---------------------------------------------- */
        line_chart: function() {
            if ($('#simple-line-chart').length > 0) {
                new Chartist.Line('#simple-line-chart', {
                    labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
                    series: [
                        [3, 6, 1, 3, 2, 11, 7, 8, 2, 3, 8, 6],
                        [7, 5, 10, 6, 5, 6, 3, 9, 7, 5, 10, 3],
                        [12, 8, 7, 8, 6, 4, 7, 10, 6, 8, 9, 7]
                    ]
                }, {
                    fullWidth: true,
                    axisY: {
                        labelInterpolationFnc: function(value) {
                            return ((value * 2) + 'k' );
                        }
                    },
                    chartPadding: {
                        right: 5
                    },
                    plugins: [
                        Chartist.plugins.tooltip()
                    ]
                });
            }
        },

		/* ---------------------------------------------
		    ## Sidebar Script
		--------------------------------------------- */
		sidebarScript: function() {
            var w = $(window).width();
            var MarginTop = (w > 1199) ? 95 : 0;
			if ($('.sidebar-items').length) {
                $('.sidebar-items').theiaStickySidebar({
                    'containerSelector': '.blog-page-block',
                    'additionalMarginTop': MarginTop,
                    'minWidth': 992,
                });
            } 
			if ($('.search-page-sidebar').length) {
                $('.search-page-sidebar').theiaStickySidebar({
                    'containerSelector': '.search-page-block',
                    'additionalMarginTop': MarginTop,
                    'minWidth': 992,
                });
            } 
		},	
		/* ---------------------------------------------
		 function initializ
		 --------------------------------------------- */
		initializ: function() {
			voxlivApp.scroll_top();
			voxlivApp.mobile_menu();
			voxlivApp.sticky_header();
			voxlivApp.search();
			voxlivApp.initialize_plugin();
            voxlivApp.video_popup();
            voxlivApp.promo_numbers();
            voxlivApp.newfilm_carousel();
            voxlivApp.seasons_items_carousel();
            voxlivApp.testimonial_carousel();
            voxlivApp.popupscript();
            voxlivApp.line_chart();
            voxlivApp.sidebarScript();
		}
	};
	/* ---------------------------------------------
	 Document ready function
	 --------------------------------------------- */
	$(function() {
		voxlivApp.initializ();
	});

	$(window).on('load', function() {
		voxlivApp.contentLoading();
	});
})(jQuery);