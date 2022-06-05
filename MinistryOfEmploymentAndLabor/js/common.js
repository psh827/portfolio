const gnb_btn = document.querySelector(".gnb_btn");
const all_menu_list = document.querySelector(".all-menu-list");
const nav_li = document.querySelectorAll(".gnb-list_box > li");
const notice_item = document.querySelectorAll(".notice-box .notice-item");
const notice_content = document.querySelectorAll(
  ".main-news-notice-wrap .notice-content"
);
const select_box = document.querySelectorAll(".select-box");
const mainTopBtn = document.querySelectorAll(".main-top__item");
const mainArea = document.querySelectorAll(".main-area");
const indexMaxNum = mainArea.length - 1;
let mainBtn = document.querySelectorAll(".main-area .main-btn");
let nowPage = 0;

function removeClass(el, el2, index) {
  el[index].classList.remove("active")
  el2[index].classList.remove("active")
}

function addClass(el, el2, index){
  el[index].classList.add("active");
  el2[index].classList.add("active")
}
// main-area 버튼 눌렀을때 정책, 뉴스 · 소식, 기관소개로 active 주는 기능
mainBtn.forEach(function (item, index) {
    item.addEventListener("click", function () {
        mainArea.forEach(function (item, index) {
            if (item.classList.contains("active")) {
                nowPage = index;
            }
        })
        if (item.parentNode.classList.contains("active")) {
            if (index == 0 || index == 2 || index == 4) {
                nowPage--;
                if (nowPage < 0) {
                    nowPage = indexMaxNum;
                    removeClass(mainArea, mainTopBtn, 0)
                    addClass(mainArea, mainTopBtn, nowPage)
                } else {
                    removeClass(mainArea, mainTopBtn, nowPage + 1)
                    addClass(mainArea, mainTopBtn, nowPage)
                }
            } else if (index == 1 || index == 3 || index == 5) {
                nowPage++;
                if (nowPage > indexMaxNum) {
                    nowPage = 0;
                    removeClass(mainArea, mainTopBtn, indexMaxNum)
                    addClass(mainArea, mainTopBtn, nowPage)
                } else {
                    removeClass(mainArea, mainTopBtn, nowPage - 1);
                    addClass(mainArea, mainTopBtn, nowPage)
                }
            }
        }
    })
})
//전체메뉴 버튼 눌렀을 시 active class 주는 기능
function addActive(item) {
  item.target.classList.toggle("active");
  console.log(item.target.classList);
  if (gnb_btn.classList.contains("active") == true) {
    all_menu_list.classList.add("active");
  } else {
    all_menu_list.classList.remove("active");
  }
}
//nav의 li 마우스 올렸을 때 active class 주는 기능. 
nav_li.forEach(function (item, index) {
  item.addEventListener("mouseenter", function () {
    item.classList.add("active");
  }),
    item.addEventListener("mouseleave", function () {
      item.classList.remove("active");
    });
});
//footer의 select-box클릭시 active 주는 기능.
select_box.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      select_box.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");
    }
  });
});
function indexAddActive(firstele, secondeEle){
  firstele.forEach(function (item, index) {
    item.addEventListener("click", function () {
      firstele.forEach(function (item) {
        item.classList.remove("active");
      });
      this.classList.add("active");
      secondeEle.forEach(function (item) {
        item.classList.remove("active");
      });
      secondeEle[index].classList.add("active");
    });
  });
}

//2번재 main-area의 공지사항, 훈령, 해명 등 제목을 클릭하면 거기에 맞는 index의 게시판이 노출.
indexAddActive(notice_item, notice_content);
//main-top 버튼을 눌럿을시 이동 및 클래스 추가
indexAddActive(mainTopBtn, mainArea)

gnb_btn.addEventListener("click", addActive);
