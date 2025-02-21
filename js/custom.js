$(function () {

    const MVS = new Swiper('.main_visual_slide');
    const MCS = new Swiper('.main_chak_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });

    const MNS = new Swiper('.main_news_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            541: {
                slidesPerView: 3,
            }
        }
    });


    const MNS2 = new Swiper('.main_news_slide2');
});

//반응형 
$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    });


    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }

    });


    $(window).on('resize', function () {
        let w = $(window).width();

        if (w > 768) {
            $('.header .gnb').removeClass('on');
            $('.header .gnb>ul>li ul').removeAttr('style');
        }

    })
})

