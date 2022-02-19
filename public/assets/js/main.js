(function ($) {
    'use strict';

    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window);
            this._document = $(document);
            this._body = $('body');
            this._html = $('html');

        },

        methods: function (e) {
            imJs.featherAtcivation();
            imJs.backToTopInit();
            imJs.mobileMenuActive();
            imJs.stickyHeader();
            imJs.smothScroll_Two();
            imJs.stickyAdjust();
            imJs.contactForm();
            imJs.wowActive();
            imJs.awsActivation();
            imJs.modalActivation();
            imJs.themeChanger();
        },


        themeChanger: function () {
            $(document).on('change', '.theme-changer .switch input[type="checkbox"]', function (e) {
                // $('body').prepend('<div id="preloader"><div class="loader_line"></div></div>')
                document.getElementById("preloader").classList.remove('preloaded');
                document.getElementById("preloader").style.zIndex = "";
                var that = $(this)
                setTimeout(function(){
                    document.getElementById("preloader").classList.remove('loaded');
                    if(that.is(':checked')){
                        $('body').removeClass('white-version')
                        that.attr('checked', 'false')
                    }else{
                        $('body').addClass('white-version')
                    }
                    setTimeout(function(){
                        document.getElementById("preloader").classList.add('preloaded');
                        setTimeout(function(){
                            document.getElementById("preloader").classList.add('loaded');
                            document.getElementById("preloader").style.zIndex = "1";
                        }, 1000);
                    }, 500);
                }, 1000);
            });
        },

        modalActivation: function () {
            $(document).on('click', '.rn-portfolio a', function (e) {
                e.preventDefault();
            });
        },

        contactForm: function () {
            $('.rwt-dynamic-form').on('submit', function (e) {
				e.preventDefault();
				var _self = $(this);
				var __selector = _self.closest('input,textarea');
				_self.closest('div').find('input,textarea').removeAttr('style');
				_self.find('.error-msg').remove();
				_self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
				var data = $(this).serialize();
				$.ajax({
					url: 'mail.php',
					type: "post",
					dataType: 'json',
					data: data,
					success: function (data) {
						_self.closest('div').find('button[type="submit"]').removeAttr('disabled');
						if (data.code == false) {
							_self.closest('div').find('[name="' + data.field + '"]');
							_self.find('.rn-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
						} else {
							$('.error-msg').hide();
							$('.form-group').removeClass('focused');
							_self.find('.rn-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
							_self.closest('div').find('input,textarea').val('');

							setTimeout(function () {
								$('.success-msg').fadeOut('slow');
							}, 5000);
						}
					}
				});
			});
        },

        
        
        wowActive: function () {
            new WOW().init();
        },

        // two scroll spy
        smothScroll_Two: function () {
            $(document).on('click', '.smoth-animation-two', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 0
                }, 300);
            });
        },


        stickyAdjust: function (e) {
            // Sticky Top Adjust..,
            $('.rbt-sticky-top-adjust').css({
                top: 120
            });

            $('.rbt-sticky-top-adjust-two').css({
                top: 200
            });
            $('.rbt-sticky-top-adjust-three').css({
                top: 25
            });
        },

        featherAtcivation: function () {
            feather.replace()
        },


        backToTopInit: function () {
            // declare variable
            var scrollTop = $('.backto-top');
            $(window).scroll(function () {
                // declare variable
                var topPos = $(this).scrollTop();
                // if user scrolls down - show scroll to top button
                if (topPos > 100) {
                    $(scrollTop).css('opacity', '1');

                } else {
                    $(scrollTop).css('opacity', '0');
                }
            });
            
            //Click event to scroll to top
            $(document).on('click', '.backto-top', function () {
                $('html, body').animate({
                    scrollTop: 0,
                    easingType: 'linear',
                }, 500);
                return false;
            });

        },

        stickyHeader: function (e) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header--sticky').addClass('sticky')
                } else {
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },

        mobileMenuActive: function (e) {
            $(document).on('click', '.humberger-menu', function (e) {
                e.preventDefault();
                $('.popup-mobile-menu').addClass('menu-open');
                imJs._html.css({
                    overflow: 'hidden'
                })
            });

            $(document).on('click', '.close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a', function (e) {
                e.preventDefault();
                $('.popup-mobile-menu').removeClass('menu-open');
                $('.has-droupdown > a').removeClass('open').siblings('.submenu').removeClass('active').slideUp('400');
                imJs._html.css({
                    overflow: ''
                })
            });

            $(document).on('click', '.popup-mobile-menu', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            });


            $(document).on('click', '.has-droupdown > a', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open');
                imJs._html.css({
                    overflow: ''
                })
            });


            $(document).on('click', '.nav-pills .nav-link', function (e) {
                $('.rn-popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            })


        },

        awsActivation:function(e){
            AOS.init();
        },

    }
    imJs.m();


    var NAY = {};
    /* ---------------------------------------------- /*
     * Pre load
    /* ---------------------------------------------- */
    NAY.PreLoad = function() {
        document.getElementById("preloader").classList.add('preloaded');
        setTimeout(function(){
            document.getElementById("preloader").classList.add('loaded');
            document.getElementById("preloader").style.zIndex = "1";
        }, 1000);
    }

    // Window on Load
    $(window).on("load", function() {
        NAY.PreLoad();
    });


})(jQuery, window)