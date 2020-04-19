$(function () {

    $(window).load(function () {
        $('.preloader').fadeOut();
    });

    $(document).on('scroll', function(){
        var scrollPos = $(this).scrollTop();
        var secPos0 = $('.spot').offset().top;
        var secPos1 = $('.work').offset().top;
        var secPos2 = $('.capability').offset().top - 200;
        var secPos3 = $('.contact').offset().top - 200;

        // spot Parallax
        $('.title-box').css({
            'opacity' : 1-(scrollPos/600)
        });
        $('.btn-dw').css({
            'opacity' : 1-(scrollPos/300)
        });
        $('.pattern1').css({
            'top' : (scrollPos/-3.5)+'px'
        });
        $('.pattern2').css({
            'top' : (scrollPos/-2.8)+'px'
        });
        $('.bg-text').css({
            'top' : (scrollPos/-2)+'px'
        });

        // gnb
        if (scrollPos >= secPos0 && scrollPos < secPos1){
            $('.gnb-item').removeClass('selected');
        }
        else if (scrollPos >= secPos1 && scrollPos < secPos2){
            $('.gnb-item').removeClass('selected');
            $('#gnb-work').addClass('selected');
        }
        else if (scrollPos >= secPos2 && scrollPos < secPos3) {
            $('.gnb-item').removeClass('selected');
            $('#gnb-capability').addClass('selected');
        }
        else if (scrollPos >= secPos3) {
            $('.gnb-item').removeClass('selected');
            $('#gnb-contact').addClass('selected');
        };

        // capability
        if (scrollPos >= Math.ceil($('.capability').offset().top - 200)) {
            $('.graph-circle').easyPieChart({
                barColor: '#f2727f',
                trackColor: '#1f2029',
                scaleColor: '#6f6f6f',
                lineCap: 'round',
                lineWidth: 30,
                size: 200,
                animate: 1000,
            });
            $('.graph-item').addClass('a_active');
        };
    });

    // gnb
    $("#gnb-work").on("click", function () {
        var topPosition = $(".work").offset().top;
        $('body, html').animate({
            scrollTop: topPosition
        },800);
    });
    $("#gnb-capability").on("click", function () {
        var topPosition = $(".capability").offset().top;
        $('body, html').animate({
            scrollTop: topPosition
        },800);
    });
    $("#gnb-contact").on("click", function () {
        var topPosition = $(".contact").offset().top;
        $('body, html').animate({
            scrollTop: topPosition
        },800);
    });
    $(".btn-dw").on("click", function () {
        var topPosition = $(".work").offset().top;
        $('body, html').animate({
            scrollTop: topPosition
        },800);
    });

    // work swiper
    var swiper = new Swiper('.work-swiper', {
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        speed: 500,
        breakpoints: {
            1281: {
                slidesPerView: 3.5,
                spaceBetween: 30,
            },
            769: {
                slidesPerView: 2.3,
                spaceBetween: 20,
            },
            500: {
                centeredSlides: true,
                slidesPerView: 1.5,
                spaceBetween: 5,
                pagination: {
                  el: '.work-pagination',
                  clickable: true,
                },
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 5,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                pagination: {
                  el: '.work-pagination',
                  clickable: true,
                },
            },
        }
    });

    // work modal
    var getUrl = location.href, getLastUrl = getUrl.slice(getUrl.lastIndexOf('/') + 1, getUrl.length);
    var projectSwiper = new Swiper('.project-swiper', {
        autoHeight: true,
        slidesPerView: 1,
        simulateTouch: false,
        autoHeight: true,
        speed: 400,
        navigation: {
            nextEl: '.btn-arrow.prev',
            prevEl: '.btn-arrow.next'
        },
    });
    // projectSwiper.on('slideChange', function () {
    //     $('html, body').animate({scrollTop:0},300);
    // });
    // $('.btn-arrow').click(function () {
    // $('html, body').animate({scrollTop:0},300);
    // projectSwiper.updateAutoHeight(0);
    // });

    $('.work-link').click(function () {
        var num = $(this).parent().index();
        projectSwiper.slideTo(num, 0);
        $('.modal-project').addClass('active');
        $('.wrap').addClass('scroll-hide');
    });
    $('.btn-close').click(function () {
        $('.modal-project').removeClass('active');
        $('.wrap').removeClass('scroll-hide');
    });

    // contact 인풋
    $('.row input, .row textarea').focus(function() {
        $(this).parent().addClass('active');
    });
    $('.row input, .row textarea').blur(function() {
        var name_result = $('#username').val();
        var email_result = $('#email').val();
        var msg_result = $('#msg').val();
        if (!name_result) {
            $('#username').parent().removeClass('active');
        }
        if (!email_result) {
            $('#email').parent().removeClass('active');
        }
        if (!msg_result) {
            $('#msg').parent().removeClass('active');
        }
        if (name_result && email_result &&  msg_result) {
            $('.btn-submit').addClass('a-submit');
        }else{
            $('.btn-submit').removeClass('a-submit');
        }
    });

});
