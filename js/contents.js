$(function () {
    let swiperInstances = [];

    swiperInstances.forEach(swiper => swiper.destroy());
    swiperInstances = [];

    const newsWidth = $('.pf02 .news ul').width();
    $('.pf02 .news li').height(newsWidth);

    swiperInstances.forEach(swiper => swiper.destroy());
    swiperInstances = [];

    const swiperConfigs = [
        { container: '#news1', pagination: '#pagination1' },
        { container: '#news2', pagination: '#pagination2' },
        { container: '#news3', pagination: '#pagination3' },
        { container: '#news4', pagination: '#pagination4' },
    ];

    swiperConfigs.forEach(config => {
        const swiper2 = new Swiper(config.container, {
            loop: true,
            pagination: {
                el: config.pagination,
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
        });
        swiperInstances.push(swiper2);
    });
});

$(window).scroll(function () {
    let windowTop = $(window).scrollTop();
    $('.scrollUp').click(function (e) {
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: 0 }, 500)
    })
})