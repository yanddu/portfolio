$(window).scroll(function () {
    let windowTop = $(window).scrollTop();
    $('.scrollUp').click(function (e) {
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: 0 }, 500)
    })
})

function openModal(event) {
    event.preventDefault();
    document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}