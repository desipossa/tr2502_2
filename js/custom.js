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

