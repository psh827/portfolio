"use strict";
const descArr = [];
descArr[0] = {
  desc: "<p>Clone-Coding <br> HTML,CSS를 이용해서 kakao-talk클론코딩<br>추후 javascript, nodejs를 이용해 채팅프로그램까지 연동시켜 볼 생각입니다.</p> ",
  skillList: "<li><p>HTML5</p></li><li><p>CSS</p></li>",
};
descArr[1] = {
  desc: "<p>Clone-Coding <br> HTML,CSS,Jquery를 이용해서 메인베너 슬라이드, 로그인, 동적Pagenation생성, 댓글달기, 지우기등의 기능을 구현해 보았음. 추 후 검색창 연관검색어 자동검색을 구현해 볼 예정입니다.",
  skillList:
    "<li><p>HTML5</p></li><li><p>CSS</p></li><li><p>Jquery</p></li><li><p>Swiper Slide</p></li>",
};

descArr[2] = {
  desc: "<p>HTML, CSS, Javascript로 Local Storage, Wheather API, Data()를 활용해 만든 앱.Local Storage로 새로고침을 눌러도 해야할 일과, 나의 정보들을 저장할 수 있게 만들었음. 추후의 포트폴리오 페이지로 변형시킬예정.</p>",
  skillList:
    "<li><p>HTML5</p></li><li><p>CSS</p></li><li><p>Vanlia Javascript</p></li>",
};
descArr[3] = {
  desc: "<p>HTML, CSS, Jacascript로 만든 관공서 Clone-Coding <br> 추후 서브페이지 제작 예정.</p>",
  skillList:
    "<li><p>HTML5</p></li><li><p>CSS</p></li><li><p>Javascript</p></li><li><p>Jquery</p></li><li><p>Swiper Slide</p></li><li><p>mCustomScrollbar</p></li>",
};
let selectElem = document.querySelectorAll("#pagenation ul li");
let textElem = document.querySelector(".text h2");
let descElem = document.querySelector(".text .desc");
let descTextTitleElem = document.querySelector(".text .desc-title");
let descTextElem = document.querySelector(".text .desc_text");
let imgElem = document.querySelector(".change-img img");
let btn = document.querySelector(".btn");
console.log(imgElem);
let rotateElem = document.querySelector(".rotate-items ul");
selectElem.forEach((item, index) => {
  item.addEventListener("click", function () {
    selectElem.forEach((removeElem) => removeElem.classList.remove("active"));
    this.classList.add("active");
    // const title = this.firstChild.getAttribute("title");
    const title = this.children[0].getAttribute("title");
    console.log(title);
    // const src = this.firstChild.getAttribute("src")
    const src = this.children[0].getAttribute("src");
    descTextTitleElem.innerText = title;
    textElem.innerText = title;
    descTextElem.innerHTML = descArr[index].desc;
    descElem.innerHTML = descArr[index].skillList;
    imgElem.setAttribute("src", src);
    rotateElem.style.transform = `rotate(calc(${index}*90deg))`;
  });
});

btn.addEventListener("click", function () {
  let title = imgElem.src
    .split("/")
    [imgElem.src.split("/").length - 1].split(".")[0];
  console.log(title);
  if (title == "kokoa") {
    window.open("./kokoa-clone-2022/index.html");
  } else if (title == "insta") {
    window.open("./hoontagram/index.html");
  } else if (title == "momentum") {
    window.open("./momentum-app/index.html");
  } else if (title == "ministry") {
    window.open("./MinistryOfEmploymentAndLabor/index.html");
  }
});
