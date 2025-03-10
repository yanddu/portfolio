$(function(){
    AOS.init();
})

$(function(){
    // 헤더 fade-in
    $(document).on('scroll',function(){
        if($(window).scrollTop()>100){
            $('#header').removeClass('deactive');
            $('#header').addClass('active');
        }else{
            $('#header').removeClass('active');
            $('#header').addClass('deactive');
        }
    })
})

// 목업 이미지 스크롤
document.addEventListener('DOMContentLoaded', () => {
    const frameLinks = document.querySelectorAll('.frame_box a'); 

    frameLinks.forEach(frameLink => {
        const frameImage = frameLink.querySelector('img');

        frameLink.addEventListener('mouseenter', () => {
            const imageHeight = frameImage.offsetHeight; 
            const containerHeight = frameLink.offsetHeight;
            const scrollAmount = Math.max(0, imageHeight - containerHeight);
            frameImage.style.transition = 'transform 4s ease';
            frameImage.style.transform = `translateY(-${scrollAmount}px)`; 
        });

        frameLink.addEventListener('mouseleave', () => {
            frameImage.style.transform = 'translateY(0)';
        });
    });
});
