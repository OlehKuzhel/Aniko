// WebFont.load({
//     google: {
//         families: ['Montserrat:400,500,600,700:cyrillic']
//     }
// });

$(document).ready(function($) {

 

var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

 

	

	var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
	});
	wow.init();


// var sliderTabs = new Swiper('.works-tabs-slider', {
//         speed: 800,
//         slidesPerView: 1,
//         simulateTouch: false,
//         spaceBetween: 20,
//         navigation: false,
//     });
var sliderExample = new Swiper('.example-slider__photos', {
        speed: 800,
        slidesPerView: 1,
        watchSlidesVisibility: true,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        spaceBetween: 20,
        navigation: {
            nextEl: '.example--next',
            prevEl: '.example--prev',
        },
         pagination: {
            el: '.example-pagination',
            type: 'bullets',
            clickable: true,
        },
        on: {
            init: function () {
                $length = this.slides.length
                $activeslide = this.activeIndex + 1
                $('.example-slider__slides .all').text('0'+$length)
                $('.example-slider__slides .active').text('0'+$activeslide)
                // console.log($length)
            },
            slideChange: function () {
                $activeslide = this.activeIndex + 1
                $('.example-slider__slides .active').text('0'+$activeslide)
            }
        }
    });

var sliderMontaz = new Swiper('.montaz-slider__photos', {
        speed: 800,
        slidesPerView: 1,
        watchSlidesVisibility: true,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        spaceBetween: 20,
        navigation: {
            nextEl: '.montaz--next',
            prevEl: '.montaz--prev',
        },
        pagination: {
            el: '.montaz-pagination',
            type: 'bullets',
            clickable: true,
        },
        on: {
            init: function () {
                $length = this.slides.length
                $activeslide = this.activeIndex + 1
                $('.montaz-slider__slides .all').text('0'+$length)
                $('.montaz-slider__slides .active').text('0'+$activeslide)
                // console.log($length)
            },
            slideChange: function () {
                $activeslide = this.activeIndex + 1
                $('.montaz-slider__slides .active').text('0'+$activeslide)
            }
        }
    });


 opnsFancy = {
        touch: false,
        baseClass: "modal",
        beforeLoad: function(instance, slide) {
            if (isMobile == false) {} else {

            }

        },
        afterShow: function(instance, current) {
        },
        afterLoad: function(instance, current) {
        },
        afterClose: function(instance, slide) {
        },
        hideScrollbar: true,
        btnTpl: {
            smallBtn: '',

        },
    }

   

$('body').on('click', '.fancybtn', function(event) {
        popup = $(this).data('popup')
       // popup = '#thanks'
        $.fancybox.open({
            src: popup,
            type: 'inline',
            opts: opnsFancy,
        });
        return false
    });

$(".scroll").on('click', function(event) {
    event.preventDefault();
    $href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($href).offset().top
    }, 1500); 
});




	$('form').on('submit', function (event) {
        var th = $(this);
        $.ajax({
            type: "POST",
                        url: "/send_email",
                        data: th.serialize(),
                        success: function (data) {
                            popup = "#thanks";
                            $.fancybox.open({
                                src: popup,
                                type: 'inline',
                                opts: opnsFancy,
                            });
                            setTimeout(function () {
                                th.trigger("reset");
                                window.location.reload();
                            }, 3000);
                            // setTimeout(function(){$.fancybox.close()},15000)
                        }
                    });
                    event.preventDefault();
                });



//  var os = new OnScreen({
//     tolerance: 0,
//     debounce: 100,
//     container: window
// });




// os.on('enter', '.advanced', (element, event) => {
//     $('.advanced').addClass('animate');

// });

// os.on('enter', '.system', (element, event) => {
//     $('.system').addClass('animate')
// });


// os.on('enter', '.section-coorp', (element, event) => {
//     $('.section-coorp').addClass('animate')
//     $('.section-office').addClass('animate')
// });



$('body').on('click', '.btn--more', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.seo-text').toggleClass('open');
    if ($(this).hasClass('active')) {
        $(this).text($(this).attr('data-close'))
    } else {
        $(this).text($(this).attr('data-open'))
    }
});

$('.lang-open').on('click',  function(event) {
    event.preventDefault();
    /* Act on the event */
    $('.header-lang__dropdown').fadeIn('fast');
});

 $('body').on('click', '.header-lang__dropdown .link.selected', function(event) {
    $(".header-lang__dropdown").fadeOut('fast')
        return false;
    });

 $('body').on('click', '.link--mlang.selected', function(event) {
        return false;
    });

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".header-lang__dropdown"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.fadeOut('fast'); // скрываем его
        }
    });


// $('.field-phone').mask('+0 (000) 000-00-00')
    // $('body').on('focus', '.field-phone', function(event) {
    //     if ($(this).val() == '') {
    //         $(this).val('+')
    //     }
    // })
    // $('body').on('blur', '.field-phone', function(event) {
    //     if ($(this).val() == '+') {
    //         $(this).val('')
    //     }
    // });

    $('.link--toggle').on('click', function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	$(this).toggleClass('active');
        $('.overflow-menu').fadeToggle('fast');
    	// $('.section-header').toggleClass('open');
    	$('.menu').toggleClass('open');
    });

    $('body').on('click', '.overflow-menu', function(event) {
        event.preventDefault();
        $('.link--toggle').toggleClass('active');
        $(this).fadeToggle('fast');
        $('.menu').toggleClass('open');
        /* Act on the event */
    });

    $(".scrollonmenu").on('click', function(event) {
        event.preventDefault();
        $href = $(this).attr('href');
        $('.menu').toggleClass('open');
        $('.link--toggle').toggleClass('active');
        $('.overflow-menu').fadeToggle('fast');
        $('html, body').animate({
            scrollTop: $($href).offset().top
        }, 1500); 
    });

    // $('.link--show').on('click', function(event) {
    // 	event.preventDefault();
    // 	$('.advanced-items').find('.vm-none').toggleClass('show')
    // 	$(this).toggleClass('active');
    // 	/* Act on the event */
    // });


});