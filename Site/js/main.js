window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs__item"),
        playBtn = document.querySelector("#playVideo"),
        video = document.querySelector("#video");
    playBtn.addEventListener('click', function() {
        video.play();
        video.setAttribute('controls','controls');
        playBtn.style.display = "none";
    });
    video.addEventListener('ended', function() {
        this.src = this.src;
        playBtn.style.display = "flex";
        video.removeAttribute('controls');
    });
    tabs.forEach(elem => {
        if (!elem.classList.contains("tabs__item_active")) {
            elem.addEventListener("click", () => {
                tabs.forEach(otherItem => {
                    if(otherItem.classList.contains("tabs__item_active")) {
                        otherItem.classList.remove("tabs__item_active");
                    }
                })
                elem.classList.add("tabs__item_active")
            })
        }
    });
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<div class="carousel__arrow carousel__prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="carousel__arrow carousel__next"><i class="fas fa-chevron-right"></i></div>',
    });
    $('#buyNowBtn').on('click',popupOpen);
    $('#tryForBtn').on('click',popupOpen);
    $('.popup__close').on('click', () => {
        $('.popup').removeClass('popup_active');
        $('body').removeClass('lock');
    })
    function popupOpen() {
        $('.popup').addClass('popup_active');
        $('body').addClass('lock');
    }
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.menu__media_top').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.nav__item a').click(function(event) {
        $('.header__burger,.menu__media_top').removeClass('active');
        $('body').removeClass('lock');
    });
});