$(function () {
    // spot Parallax
    function scrollBanner() {
        $(document).on('scroll', function(){
            var scrollPos = $(this).scrollTop();
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
        });
    }
    scrollBanner();

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
                loop: true,
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
                loop: true,
                pagination: {
                  el: '.work-pagination',
                  clickable: true,
                },
            },
        }
    });

    // capability
    $(window).scroll(function() {
        if ($(this).scrollTop() >= Math.ceil($('.capability').offset().top)) {
            $('.graph-circle').easyPieChart({
                barColor: '#f2727f',
                trackColor: '#1f2029',
                scaleColor: '#6f6f6f',
                lineCap: 'round',
                lineWidth: 30,
                size: 200,
                animate: 1000,
            });
            $('.graph-item').addClass("a_active");
        }
    });

    // contact 인풋
    $('.row input, .row textarea').bind('focus', function() {
        $(this).parent().addClass('active');
    });
    $('.row input, .row textarea').blur(function() {
        $(this).parent().removeClass('active');
    });

});
