'use strict'
$(function(){
    const section = $("section.hero .hero-wrap");
    section.each(function(){
        console.log($(this).offset().top);
    })
    $(window).scroll(function(){
        console.log($(this).scrollTop());
    })
    console.log(section);
});