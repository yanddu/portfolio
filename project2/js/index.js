// 모바일 햄버거 메뉴
$(function () {
    $('.m_menu a').click(function (e) {
        e.preventDefault();
        $('.menu_list').slideToggle(100);
    });

    $(window).resize(function () {
        if ($(window).width() > 1280) {
            $('.menu_list').show();
        }
    })
});

// 메인배너 슬라이드
$(function() {
    let listWidth = $('.slide:eq(0)').width();
    let listLength = $('.slide').length;
    let cntInx = 0;
    let maxClicks = listLength - 1;
    let autoPlayID;

    function updateSlideWidth() {
        listWidth = $('.slide:eq(0)').width();
    }

    function startAutoPlay() {
        autoPlayID = setInterval(function() {
            $('.indicator span').eq(cntInx).removeClass('on');

            if (cntInx < maxClicks) {
                cntInx++;
            } else {
                cntInx = 0;
            }

            $('.indicator span').eq(cntInx).addClass('on');
            slideToNext();
        }, 3000);
    }

    function slideToNext() {
        $('.slide').css('transform', `translateX(-${listWidth * cntInx}px)`);
    }

    $(window).resize(function() {
        updateSlideWidth();
        slideToNext();
    });

    updateSlideWidth();
    startAutoPlay();
});

// 18만권의 도서 슬라이드


// 기능소개
// $(function () {

//     $(".audio_list li:first-child").show(); 
//     $(".choice_tab li:first-child").addClass("on"); // 첫 번째 탭 활성화

//     $(".choice_tab li").click(function () {
//         $(this).addClass("on").siblings().removeClass("on");

//         // 선택한 탭의 인덱스를 가져옴
//         let tabInx = $(this).index();
        
//         $(".overview_wrap > div:not(.nav)").hide();
//         $(".overview_wrap > div:not(.nav)").eq(tabInx).show();

//     });

//     let listWidth = $('.audio_wrap > ul > li:eq(0)').width();
//     // console.log(listWidth);
//     let listLength = $('.audio_wrap > ul > li').length;
//     // console.log(listLength);
//     let cntInx = 0;
//     let maxClicks = listLength - 1;

//     $('.next_btn').click(function (e) {
//         e.preventDefault();
//         if (cntInx < maxClicks) {
//             cntInx++;
//             slideToNext();
//         }
//     });
//     $('.prev_btn').click(function (e) {
//         e.preventDefault();
//         if (cntInx > 0) {
//             cntInx--;
//         } else {
//             cntInx = 0;
//         } slideToPrev();
//     });
//     function slideToNext() {
//         $('.overview_wrap li').css('transform', `translateX(-${listWidth * cntInx}px)`);
//     }
//     function slideToPrev() {
//         $('.overview_wrap li').css('transform', `translateX(-${listWidth * cntInx}px)`);
//     }
// });
$(function () {
    $(".audio_list li:first-child").show(); 
    $(".choice_tab li:first-child").addClass("on");

    $(".choice_tab li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");

        let tabInx = $(this).index();
        $(".overview_wrap > div:not(.nav)").hide();
        $(".overview_wrap > div:not(.nav)").eq(tabInx).show();

        cntInx = 0;
        updateListValues();
        slideToCurrent();
    });

    let cntInx = 0;
    let maxClicks;
    let listLength;

    function updateListValues() {
        const currentWrap = $(".overview_wrap > div:not(.nav):visible");
        listLength = currentWrap.find("li").length;
        maxClicks = listLength - 1;
    }

    updateListValues();

    $('.next_btn').click(function (e) {
        e.preventDefault();
        if (cntInx < maxClicks) {
            cntInx++;
        } else {
            cntInx = 0;
        }
        slideToCurrent();
    });

    $('.prev_btn').click(function (e) {
        e.preventDefault();
        if (cntInx > 0) {
            cntInx--;
        }
        slideToCurrent();
    });

    function slideToCurrent() {
        const currentWrap = $(".overview_wrap > div:not(.nav):visible");
        const currentList = currentWrap.find('li');

        currentList.hide();
        currentList.eq(cntInx).fadeIn();
    }
});

// 관심분야 소개 탭메뉴
$(function () {
    $(".recommend_wrap ul").hide(); // 모든 ul 숨김
    $(".recommend_wrap ul:first-child").show(); // 주식 관련 ul만 보여줌
    $(".recommend_tab li:first-child").addClass("tab_on"); // 첫 번째 탭 활성화

    $(".recommend_tab li").click(function () {
        $(this).addClass("tab_on").siblings().removeClass("tab_on");

        // 선택한 탭의 인덱스를 가져옴
        let tabInx = $(this).index();

        $(".recommend_wrap ul").hide();
        $(".recommend_wrap ul").eq(tabInx).show();
    });
});

// 자주 묻는 질문
// $(function(){
//     $('.answer').hide();

//     $('.question').click(function(e){
//         e.preventDefault(); 
//         let currentDiv = $(this).next('.answer');

//         if (currentDiv.is(':visible')) {
//             currentDiv.hide(); // 보이면 닫기
//         } else {
//             $('.answer').hide(); 
//             currentDiv.show();
//         }
//     });
// });

$(function () {
    $('.answer').hide();
    $('.question').click(function (e) {
        e.preventDefault();
        let divInx = $(this).next('.answer');
        divInx.slideToggle(200);
    })
})