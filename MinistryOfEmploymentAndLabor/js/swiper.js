let totalNum = document.querySelectorAll(".main-area-slide .swiper-slide").length;
const nowIndexText = document.querySelector(".now-index");
const totalLengText = document.querySelector(".total-leng");
totalLengText.innerText = totalNum;
//mainbanner swiper
var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next.swiper-btn",
    prevEl: ".swiper-button-prev.swiper-btn",
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
let nowIndex = 1;
//main bannser pagenation custom
nowIndexText.innerText = nowIndex;
mySwiper.on("slideChange", function () {
  nowIndexText.innerText = this.realIndex + 1;
});

//agency swiepr 
const agencyMaxLeng = $(".swiper-container3").length;
console.log(agencyMaxLeng);
const agencyMyLeng = $(".swiper-container3 .swiper-wrapper").length;
const agencyInner = $(".third-banner .total-leng");
console.log(agencyInner);
const agencyMyInner = $(".third-banner .now-index")
console.log(agencyMyInner);
var agencySwiper = new Swiper(".swiper-container3", {
  slidesPerView: 3,
  spaceBetween: 24,
  // loop: true,
  navigation: {
    nextEl: ".third-swiper-wrap .swiper-button-next.custom1",
    prevEl: ".third-swiper-wrap .swiper-button-prev.custom1",
  }
 })
 agencyInner.innerText = agencyMaxLeng;
 agencyMyInner.innerText = agencyMyLeng;

//footerbanner
var mysecondSwiper = new Swiper(".swiper-container2", {
  slidesPerView: 5,
  spaceBetween: 24,
  navigation: {
    nextEl: ".banner-wrap .swiper-button-next.custom1",
    prevEl: ".banner-wrap .swiper-button-prev.custom1",
  },
  speed: 3000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    reverseDirection: true, //마지막 slide 도착시 direction 반대전환
  }
});

//stop버튼 눌렀을 시 slide 정지, 재개 기능
$(".swiper-auto-play").each(function(){
  $(this).click(function(){
    if ($(this).hasClass("pause")) {
      console.log("true");
      $(this).removeClass("pause");
      mysecondSwiper.autoplay.stop();
      return false;
    } else {
      $(this).addClass("pause");
      mysecondSwiper.autoplay.start();
      return false;
    }
  })
})
