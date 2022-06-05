'use strict'
$(function(){
    const timerbar = $(".timer-bar");
    const navUl = $(".nav-menu-title")
    console.log(navUl);
    navUl.hover(function(){
        $("#header").addClass("open");
    }, function(){
        $("#header").removeClass("open");
    });
    var mySwiper = new Swiper(".swiper", {
        loop: true,
        autoplay: {
          delay: 6000,
        },
        navigation: {
            nextEl: ".slide-btn.next",
            prevEl: ".slide-btn.prev",
          }
    });
    startfirst();
    mySwiper.on("slideChange", function(){
        console.log($(".swiper-slide.swiper-slide-next").data("swiper-autoplay"));
        if($(".swiper-slide.swiper-slide-next").data("swiper-autoplay") == 30000){         
            timerbar.animate({width: "100%"}, 30000, function(){
                timerbar.css("width", "0%");
            })
        }else{
            timerbar.animate({width: "100%"}, 6000, function(){
                timerbar.css("width", "0%");
            })
        }
    })
    function startfirst(){
        timerbar.animate({width: "100%"}, 6000, function(){
            timerbar.css("width", "0%");
        })
    }

});
