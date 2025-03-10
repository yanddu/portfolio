// 햄버거 메뉴
$(function () {
    $('.btn_menu').click(function () {
        $('.navbar').addClass('show')
    });
    $('.navbar_close').click(function () {
        $('.navbar').removeClass('show')
    });
})

// pc버전 호버 시 로고 이미지 교체
$(function () {
    $('#header').hover(
        function () {
            $('.logo img').attr('src', 'imgs/logo_black.png');
        }, function () {
            $('.logo img').attr('src', 'imgs/logo_white.png');
        });
});

// 공지사항 슬라이드
$(function () {

    function animateVerticalSlide() {
        $('.notice_box ul').stop().animate({ marginTop: -40 }, 600, function () {
            $(this).css('margin-top', '0')
                .append($('.notice_box li:first-child'));
        });
    }

    setInterval(animateVerticalSlide, 2500);
});

// 모바일 버전 주메뉴 열고닫기
$(function () {
    $('.nav_dep1 > li').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        const $this = $(this);

        $('.nav_dep1 > li.on').not($this).removeClass('on').children('.nav_dep2, .nav_dep3').slideUp(200);

        $this.toggleClass('on').children('.nav_dep2').slideToggle(200);
    });

    $('.nav_dep2 > li').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        const $this = $(this);

        $('.nav_dep2 > li.on').not($this).removeClass('on').children('.nav_dep3').slideUp(200);

        $this.toggleClass('on').children('.nav_dep3').slideToggle(200);
    });
});

// pc버전 드롭메뉴(로그인, 언어)
$(function () {
    $('.drop_menu_dep1').mouseenter(function () {
        $(this).children().stop().slideDown(200);
    }),
        $('.drop_menu_dep1').mouseleave(function () {
            $(this).children().stop().slideUp(200)
        })
});

// pc버전 드롭메뉴(햄버거)
$(function () {
    function pcdrop() {
        $('.btn_dot_menu').mouseenter(function () {
            if ($(window).width() >= 1025) {
                $('.m_info').stop().slideDown(200);
            }
        });

        $('.m_info').mouseleave(function () {
            if ($(window).width() >= 1025) {
                $('.m_info').stop().slideUp(200);
            }
        });
    }

    pcdrop();
});

// pc버전 헤더메뉴
// $(function () {
//     $('.list_dep1').hover(
//         function () {
//             if ($(window).width() >= 1025) {
//                 $(this).children('.nav_dep2').stop().slideDown(200);
//                 $(this).find('.nav_dep3').stop().slideDown(200);
//             }
//         },
//         function () {
//             if ($(window).width() >= 1025) {
//                 $(this).children('.nav_dep2').stop().slideUp(200);
//                 $(this).find('.nav_dep3').stop().slideUp(200);
//             }
//         }
//     );
// });

$(function () {
    function windowWidth() {
        if ($(window).width() >= 1025) {
            $('.nav_dep2').css('margin-left', $('.navbar .nav_dep1:eq(0)').offset());
        }
    }

    function headerDrop() {
        $('.nav_dep2').hide();
        $('.navbar .list_dep1').mouseenter(function () {
            if ($(window).width() >= 1025) {
                $(this).find('.nav_dep2').stop().slideDown(200);
                $(this).find('.nav_dep3').stop().slideDown(200);
            }
        });

        $('.navbar .list_dep1').mouseleave(function () {
            if ($(window).width() >= 1025) {
                $('.nav_dep2').stop().slideUp(200);
                $('.nav_dep3').stop().slideUp(200);
            }
        });
    }

    windowWidth();
    headerDrop();

    $(window).resize(function () {
        headerDrop();
    });
});


/////////////////// 모바일버전 메인배너 슬라이드 
$(function () {
    // let bannerHeight = $('.mo_list').height();
    // $('.mo_mainBanner').height(bannerHeight);

    /* fade to(시간, 투명도) */
    // $('.mo_list').fadeTo(0, 1)

    // setInterval(function () {
    //     $('.mo_list').eq(0)
    //         .fadeOut(1500);
    //     $('.mo_list').eq(1)
    //         .fadeIn(1500);
    // }, 1500)

    // 높이값 적용
    $('.mo_mainBanner').height($('.mo_list:eq(0)').height());

    // 리사이즈
    $(window).resize(function () {
        $('.mo_mainBanner').height($('.mo_list:eq(0)').height());
    });

    // fade 효과 적용
    const listNum = $('.mo_list').length;
    let cntInx = 0;

    // 자동재생
    let autoID = setInterval(function () {
        $('.mo_list').eq(cntInx).fadeOut(700);
        $('.indicator span').eq(cntInx).removeClass('on');

        cntInx++;
        if (cntInx > listNum - 1) {
            cntInx = 0
        }

        $('.mo_list').eq(cntInx).fadeIn(700);
        $('.indicator span').eq(cntInx).addClass('on');
    }, 2500)

    // 버튼 클릭시 해당 슬라이드로 이동
    $('.indicator span').click(function () {
        clearInterval(autoID);
        let newInx = $(this).index();
        if (cntInx != newInx) {
            $('.mo_list').eq(cntInx).fadeOut();
            $('.mo_list').eq(newInx).fadeIn();
            $(this).addClass('on')
                .siblings().removeClass('on');
            cntInx = newInx;
        }
    });
});

// 현재시간 표시
// function everyTimer() {
//     let today = new Date();

//     let hours = today.getHours();
//     let minutes = today.getMinutes();
//     let seconds = today.getSeconds();

//     document.querySelector('.hours').innerHTML = String(hours).padStart(2,'0');
//     document.querySelector('.minutes').innerHTML = String(minutes).padStart(2,'0');
//     document.querySelector('.seconds').innerHTML = String(seconds).padStart(2,'0');
// }

// 24시간 타이머
function updateTimer() {
    const future = Date.parse("2024/01/01 00:00:00");
    const now = new Date();
    const diff = future - now;
    // diff - 차이

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0')
}
setInterval(updateTimer, 1000);


// 향긋한 마음을 전하세요 슬라이드
$(function () {
    let listWidth = $('.reclist:eq(0)').width();
    let listLength = $('.reclist').length;
    let cntInx = 0;
    let maxClicks = listLength - 1;

    // 다음버튼
    $('.btn_next').click(function () {
        if (cntInx < maxClicks) {
            cntInx++;
        } else {
            cntInx = 0;
        }
        slideToNext();
    });

    // 이전버튼
    $('.btn_prev').click(function () {
        if (cntInx > 0) {
            cntInx--;
        } else {
            cntInx = maxClicks;
        }
        slideToPrev();

    })

    $(window).resize(function () {
        cntInx = Math.min(cntInx, maxClicks);
        listWidth = $('.reclist:eq(0)').width();
        slideToNext();
    }).trigger('resize');

    // 슬라이드효과
    function slideToNext() {
        $('.recLists ul').css('transform', `translateX(-${listWidth * cntInx}px)`);
    }
    function slideToPrev() {
        $('.recLists ul').css('transform', `translateX(-${listWidth * cntInx}px)`);
    }

});

// 매장소개 슬라이드
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    
});
// pc버전 메인 슬라이드배너
$(function () {
    // 높이값 적용
    $('.pc_mainBanner').height($('.pc_list>img:eq(0)').height());

    // 리사이즈
    $(window).resize(function () {
        $('.pc_mainBanner').height($('.pc_list>img:eq(0)').height());
    });

    // fade 효과 적용
    const listNum = $('.pc_list').length;
    let cntInx = 0;

    // 자동재생
    let autoID = setInterval(function () {
        $('.pc_list').eq(cntInx).fadeOut(700);
        $('.indicator span').eq(cntInx).removeClass('on');

        cntInx++;
        if (cntInx > listNum - 1) {
            cntInx = 0
        }

        $('.pc_list').eq(cntInx).fadeIn(700);
        $('.indicator span').eq(cntInx).addClass('on');
    }, 2500)

    // 버튼 클릭시 해당 슬라이드로 이동
    $('.indicator span').click(function () {
        clearInterval(autoID);
        let newInx = $(this).index();
        if (cntInx != newInx) {
            $('.pc_list').eq(cntInx).fadeOut();
            $('.pc_list').eq(newInx).fadeIn();
            $(this).addClass('on')
                .siblings().removeClass('on');
            cntInx = newInx;
        }
    });
});

