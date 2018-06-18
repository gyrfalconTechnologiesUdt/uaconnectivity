
(function($){
	"use strict"
	$(window).on('load',function(){
		/*	Popup	*/
		var popUp = $(".work-gallery");
		var popUpPlayer = $(".popup-player");
		popUp.magnificPopup({
			tLoading:"",
			gallery:{enabled:!0},
			mainClass:"mfp-fade",
			type: 'inline'
		});
		popUpPlayer.magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					  '</div>',

				srcAction: 'iframe_src',
				}
		});

	});
	$(document).ready(function(){
		/*	Isotope Filter	*/
		var e;
		var $isoImageLoad = $('.items-list');
		if (typeof imagesLoaded === 'function') {
			imagesLoaded($isoImageLoad, function() {
				$isoImageLoad.isotope({
					itemSelector:".single-item",
					layoutMode:"masonry",
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					},
					filter:0
				});

			});
		};
		$('[data-toggle="popover"]').popover();   
		var filter = $(".filter li a");
		filter.on("click",function(){
			return $(".filter li").removeClass("active"),
			$(this).parent().addClass("active"),
			e=$(this).attr("data-filter"),
			$(".items-list").isotope({
				itemSelector:".single-item",
				layoutMode:"masonry",
				filter:e
			}),!1
		});
		/*	Counter	 */
		var counter = $('.counter');
		counter.counterUp({
			delay: 10,
			time: 1000
		});
		/*   Counter Time   */
		var countTimer = $('.counter-timer');
		countTimer.countdown("2020/02/20", function(event) {
			var offset = event.offset;
			$('.cday').text(offset.totalDays);
			$('.chours').text(''.concat(offset.hours < 10 ? '0' : '', offset.hours));
			$('.cminutes').text(''.concat(offset.minutes < 10 ? '0' : '', offset.minutes));
			$('.cseconds').text(''.concat(offset.seconds < 10 ? '0' : '', offset.seconds));
		});
		countTimer.countdown('2018/02/20', function(event) {
			$(this).text(event.strftime('%D Days | %H H | %M M | %S S'));
		});
		/*		Progress Bar		*/
		var progressBar = $('.progress-bar > span');
		progressBar.each(function () {
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition': 'width 4s'
			});
			setTimeout(function () {
				$this.appear(function () {
					$this.css('width', width + '%');
				});
			}, 500);
		});
		/*		Pie Chart		*/
		var chartVar = $('.chart');
			chartVar.waypoint(function() {
				$(this).easyPieChart({
					barColor:'#c00017',
					trackColor: '#ddd',
					scaleColor:false,
					lineWidth: 7,
					size: 100,
					animate:{
						duration:4000,
						enabled:true
					},
					onStep: function(a, b, c) {
						$(this.el).find(".percent").text(Math.round(c));
					}
				});
			}, {
				triggerOnce: true,
				offset: 'bottom-in-view'
		});
		/*		Pie Chart		*/
		var chartVar = $('.chart1');
			chartVar.waypoint(function() {
				$(this).easyPieChart({
					barColor:'#ddd',
					trackColor: '#c00017',
					scaleColor:false,
					lineWidth: 15,
					size: 250,
					animate:{
						duration:4000,
						enabled:true
					},
				});
			}, {
			triggerOnce: true,
			offset: 'bottom-in-view'
		});
		var oneCarousel = $('.one-carousel');
		var twoCarousel = $('.two-carousel');
		var threeCarousel = $('.three-carousel');
		var fourCarousel = $('.four-carousel');
		var fiveCarousel = $('.five-carousel');
		var featureCarousel = $('.feature-carousel');	
		var workCarousel = $('.work-carousel');
		var centerCarousel = $('.center-carousel');
		var sliderCarousel = $('.slider-carousel');
		sliderCarousel.owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			dots:true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		oneCarousel.owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			dots:false,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});	
		twoCarousel.owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:2
				}
			}
		});	
		threeCarousel.owlCarousel({
			loop:false,
			margin:30,
			nav:false,
			slideSpeed:50,
			autoplay:1,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1280:{
					items:3
				}
			}
		});
		fourCarousel.owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:4
				}
			}
		});	
		fiveCarousel.owlCarousel({
			loop:true,
			margin:20,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
		});
		featureCarousel.owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1280:{
					items:3
				}
			}
		});	
		workCarousel.owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			slideSpeed:50,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:4
				}
			}
		});	
		centerCarousel.owlCarousel({
			center: true,
			loop:true,
			margin:20,
			nav:false,
			slideSpeed:350,
			autoplay:0,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ "<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>" ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:2
				}
			}
		});
		
	});
		
	/*	 Maps	*/
	if($("#loc-map").length === 1){
			google.maps.event.addDomListener(window, 'load', init1);
		}
		function init1() {
		var mapOptions1 = {
				zoom: 13,
				scrollwheel: false,
				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(10.584938, 77.254062), 
				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [
							{
								"featureType": "administrative",
								"elementType": "labels.text.fill",
								"stylers": [
									{
										"color": "#444444"
									}
								]
							},
							{
								"featureType": "landscape",
								"elementType": "all",
								"stylers": [
									{
										"color": "#f2f2f2"
									}
								]
							},
							{
								"featureType": "landscape.man_made",
								"elementType": "geometry.fill",
								"stylers": [
									{
										"visibility": "on"
									},
									{
										"saturation": "-1"
									}
								]
							},
							{
								"featureType": "poi",
								"elementType": "all",
								"stylers": [
									{
										"visibility": "off"
									}
								]
							},
							{
								"featureType": "road",
								"elementType": "all",
								"stylers": [
									{
										"saturation": -100
									},
									{
										"lightness": 45
									}
								]
							},
							{
								"featureType": "road.highway",
								"elementType": "all",
								"stylers": [
									{
										"visibility": "simplified"
									}
								]
							},
							{
								"featureType": "road.arterial",
								"elementType": "labels.icon",
								"stylers": [
									{
										"visibility": "off"
									}
								]
							},
							{
								"featureType": "transit",
								"elementType": "all",
								"stylers": [
									{
										"visibility": "off"
									}
								]
							},
							{
								"featureType": "transit.station.bus",
								"elementType": "labels.icon",
								"stylers": [
									{
										"visibility": "off"
									}
								]
							},
							{
								"featureType": "transit.station.rail",
								"elementType": "all",
								"stylers": [
									{
										"saturation": "14"
									},
									{
										"visibility": "off"
									}
								]
							},
							{
								"featureType": "transit.station.rail",
								"elementType": "labels.icon",
								"stylers": [
									{
										"visibility": "on"
									},
									{
										"hue": "#00ff97"
									}
								]
							},
							{
								"featureType": "water",
								"elementType": "all",
								"stylers": [
									{
										"color": "#c00017"
									},
									{
										"visibility": "on"
									}
								]
							}
						]
					};
				var mapElement1 = document.getElementById('loc-map');
				// Create the Google Map using our element and options defined above
				var map1 = new google.maps.Map(mapElement1, mapOptions1);
				// Let's also add a marker while we're at it
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(10.584938, 77.254062),
					map: map1,
					 animation:google.maps.Animation.BOUNCE,
					title: 'Location'
				});
			}
			
	/* Nav & Navbar */
	$('nav .menu_button').on("click", function(){
		$(this).toggleClass('open');
	});
	$('.dropdown-menu .dropdown').on('mouseenter mouseleave', function() {
	  $(this).toggleClass("open");
	});
	$(".menu_button").on("click",function(){
		$(".side-overlay-menu").addClass("open");
	});
	$(".menu_close_button").on("click",function(){
		$(".side-overlay-menu").removeClass("open");
		$("nav .menu_button").toggleClass('open');
	});
	/* $(window).on("scroll", function() {
		var scroll_top = $(window).scrollTop();
		var menu_value = $(".caption_header").height();
		if (scroll_top > 10) {
			$(".navbar").addClass('stick_nav');
			$(".navbar.navbar_3 .nav-address").addClass('none-display');
			$(".scroll_logo").attr("src", "img/logo_white.png");
		} else {
			$(".navbar").removeClass('stick_nav');
			$(".navbar.navbar_3 .nav-address").removeClass('none-display');
			$(".scroll_logo").attr("src", "img/logo.png");
		}
	}); */

	
		

})(jQuery);

!function(e) {
	"use strict";e
	(document).on("ready",function(){
		e("li.smooth-menu a").bind("click",function(a)
		{
			var i=e(this);
			e("html, body").stop().animate({scrollTop:e(i.attr("href")).offset().top-"75"+"px"},1500,"easeInOutExpo"),a.preventDefault()
		});
		jQuery(window).on("scroll",function()
			{jQuery(this).scrollTop()>300?jQuery(".scroll-to-top").fadeIn(600):jQuery(".scroll-to-top").fadeOut(600)
			}),
				jQuery(".scroll-to-top").on("click",function(e)
			{
				return e.preventDefault(),
				jQuery("html, body").animate({scrollTop:0},600),!1
			})
	}
)}(jQuery);



$(document).ready(function() {
	$('#countdown-time').ClassyCountdown({
		theme: "flat-colors-wide",
		end: $.now() + 10000
	});
});

(function($) {
    $.fn.ClassyCountdown = function(options, callback) {
        var element = $(this);
        var DaysLeft, HoursLeft, MinutesLeft, SecondsLeft;
        var secondsLeft;
        var isFired = false;
        var settings = {
            end: undefined,
            now: $.now(),
            labels: true,
            labelsOptions: {
                lang: {
                    days: 'Days',
                    hours: 'Hours',
                    minutes: 'Min',
                    seconds: 'Sec'
                },
                style: 'font-size: 16px;'
            },
            style: {
                element: '',
                labels: false,
                textResponsive: 0.5,
                days: {
                    gauge: {
                        thickness: 0.04,
                        bgColor: 'rgba(0, 0, 0, 0)',
                        fgColor: 'rgba(0, 0, 0, 1)',
                        lineCap: 'butt'
                    },
                    textCSS: ''
                },
                hours: {
                    gauge: {
                        thickness: 0.02,
                        bgColor: 'rgba(0, 0, 0, 0)',
                        fgColor: 'rgba(0, 0, 0, 1)',
                        lineCap: 'butt'
                    },
                    textCSS: ''
                },
                minutes: {
                    gauge: {
                        thickness: 0.02,
                        bgColor: 'rgba(0, 0, 0, 0)',
                        fgColor: 'rgba(0, 0, 0, 1)',
                        lineCap: 'butt'
                    },
                    textCSS: ''
                },
                seconds: {
                    gauge: {
                        thickness: 0.02,
                        bgColor: 'rgba(0, 0, 0, 0)',
                        fgColor: 'rgba(0, 0, 0, 1)',
                        lineCap: 'butt'
                    },
                    textCSS: ''
                }
            },
            onEndCallback: function() {
            }
        };
        if (options.theme) {
            settings = $.extend(true, settings, getPreset(options.theme));
        }
        settings = $.extend(true, settings, options);
        prepare();
        doTick();
        setInterval(doTick, 1000);
        doResponsive();
        
        function prepare() {
            element.append('<div class="ClassyCountdown-wrapper">' +
                    '<div class="ClassyCountdown-days">' +
                        '<input type="text" />' +
                        '<span class="ClassyCountdown-value"><div></div><span></span></span>' +
                    '</div>' +
                    '<div class="ClassyCountdown-hours">' +
                        '<input type="text" />' +
                        '<span class="ClassyCountdown-value"><div></div><span></span></span>' +
                    '</div>' +
                    '<div class="ClassyCountdown-minutes">' +
                        '<input type="text" />' +
                        '<span class="ClassyCountdown-value"><div></div><span></span></span>' +
                    '</div>' +
                    '<div class="ClassyCountdown-seconds">' +
                        '<input type="text" />' +
                        '<span class="ClassyCountdown-value"><div></div><span></span></span>' +
                    '</div>' +
                '</div>');
            element.find('.ClassyCountdown-days input').knob($.extend({
                width: '100%',
                displayInput: false,
                readOnly: true,
                max: 365
            }, settings.style.days.gauge));
            element.find('.ClassyCountdown-hours input').knob($.extend({
                width: '100%',
                displayInput: false,
                readOnly: true,
                max: 24
            }, settings.style.hours.gauge));
            element.find('.ClassyCountdown-minutes input').knob($.extend({
                width: '100%',
                displayInput: false,
                readOnly: true,
                max: 60
            }, settings.style.minutes.gauge));
            element.find('.ClassyCountdown-seconds input').knob($.extend({
                width: '100%',
                displayInput: false,
                readOnly: true,
                max: 60
            }, settings.style.seconds.gauge));
            element.find('.ClassyCountdown-wrapper > div').attr("style", settings.style.element);
            element.find('.ClassyCountdown-days .ClassyCountdown-value').attr('style', settings.style.days.textCSS);
            element.find('.ClassyCountdown-hours .ClassyCountdown-value').attr('style', settings.style.hours.textCSS);
            element.find('.ClassyCountdown-minutes .ClassyCountdown-value').attr('style', settings.style.minutes.textCSS);
            element.find('.ClassyCountdown-seconds .ClassyCountdown-value').attr('style', settings.style.seconds.textCSS);
            element.find('.ClassyCountdown-value').each(function() {
                $(this).css('margin-top', Math.floor(0 - (parseInt($(this).height()) / 2)) + 'px');
            });
            if (settings.labels) {
                element.find(".ClassyCountdown-days .ClassyCountdown-value > span").html(settings.labelsOptions.lang.days);
                element.find(".ClassyCountdown-hours .ClassyCountdown-value > span").html(settings.labelsOptions.lang.hours);
                element.find(".ClassyCountdown-minutes .ClassyCountdown-value > span").html(settings.labelsOptions.lang.minutes);
                element.find(".ClassyCountdown-seconds .ClassyCountdown-value > span").html(settings.labelsOptions.lang.seconds);
                element.find(".ClassyCountdown-value > span").attr("style", settings.labelsOptions.style);
            }
            secondsLeft = settings.end - settings.now;
            secondsToDHMS();
        }
        
        function secondsToDHMS() {
            DaysLeft = Math.floor(secondsLeft / 86400);
            HoursLeft = Math.floor((secondsLeft % 86400) / 3600);
            MinutesLeft = Math.floor(((secondsLeft % 86400) % 3600) / 60);
            SecondsLeft = Math.floor((((secondsLeft % 86400) % 3600) % 60) % 60);
        }

        function doTick() {
            secondsLeft--;
            secondsToDHMS();
            if (secondsLeft <= 0) {
                if (!isFired) {
                    isFired = true;
                    settings.onEndCallback();
                }
                DaysLeft = 0;
                HoursLeft = 0;
                MinutesLeft = 0;
                SecondsLeft = 0;
            }
            element.find('.ClassyCountdown-days input').val(365 - DaysLeft).trigger('change');
            element.find('.ClassyCountdown-hours input').val(24 - HoursLeft).trigger('change');
            element.find('.ClassyCountdown-minutes input').val(60 - MinutesLeft).trigger('change');
            element.find('.ClassyCountdown-seconds input').val(60 - SecondsLeft).trigger('change');
            element.find('.ClassyCountdown-days .ClassyCountdown-value > div').html(DaysLeft);
            element.find('.ClassyCountdown-hours .ClassyCountdown-value > div').html(HoursLeft);
            element.find('.ClassyCountdown-minutes .ClassyCountdown-value > div').html(MinutesLeft);
            element.find('.ClassyCountdown-seconds .ClassyCountdown-value > div').html(SecondsLeft);
        }
        
        function doResponsive() {
            element.find('.ClassyCountdown-wrapper > div').each(function() {
                $(this).css('height', $(this).width() + 'px');
            });
            if (settings.style.textResponsive) {
                element.find('.ClassyCountdown-value').css('font-size', Math.floor(element.find('> div').eq(0).width() * settings.style.textResponsive / 3) + 'px');
                element.find('.ClassyCountdown-value').each(function() {
                    $(this).css('margin-top', Math.floor(0 - (parseInt($(this).height()) / 2)) + 'px');
                });
            }
            $(window).trigger('resize');
            $(window).resize($.throttle(50, onResize));
        }

        function onResize() {
            element.find('.ClassyCountdown-wrapper > div').each(function() {
                $(this).css('height', $(this).width() + 'px');
            });
            if (settings.style.textResponsive) {
                element.find('.ClassyCountdown-value').css('font-size', Math.floor(element.find('> div').eq(0).width() * settings.style.textResponsive / 2) + 'px');
            }
            element.find('.ClassyCountdown-value').each(function() {
                $(this).css("margin-top", Math.floor(0 - (parseInt($(this).height()) / 2)) + 'px');
            });
            element.find('.ClassyCountdown-days input').trigger('change');
            element.find('.ClassyCountdown-hours input').trigger('change');
            element.find('.ClassyCountdown-minutes input').trigger('change');
            element.find('.ClassyCountdown-seconds input').trigger('change');
        }
        
        function getPreset(theme) {
            switch (theme) {
                case 'flat-colors-wide':
                    return {
                        labels: true,
                        style: {
                            element: '',
                            textResponsive: 0.1,
                            days: {
                                gauge: {
                                    thickness: 0.1,
                                    bgColor: "rgba(255,255,255,0.09)",
                                    fgColor: "#1abc9c"
                                },
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.1,
									bgColor: "rgba(255,255,255,0.09)",
                                    fgColor: "#2980b9"
                                },
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.1,
                                    bgColor: "rgba(255,255,255,0.09)",
                                    fgColor: "#8e44ad"
                                },
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.1,
									bgColor: "rgba(255,255,255,0.09)",
                                    fgColor: "#f39c12"
                                },
                            }
                        }
                    };
          
               
            }
        }
    };
})(jQuery);