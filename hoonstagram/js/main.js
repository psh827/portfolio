$(function () {
  let myid = $(".myprofile .article-user span").text();
  //textarea에 변화가 생기면 게시버튼이 활성화 되는 버튼
  onPushBtn(".reple-area textarea", "disabled");

  function onPushBtn(elem, property){
    $(elem).on("propertychange change keyup paste input", function(){
      if ($(this).val() != "") {
        $(this).next().prop(property, false);
      } else {
        $(this).next().prop(property, true);
      }
    }) ;
  }
  
  //아이콘들 호버 기능 css로 하니 클릭 해제 후 호버가 안됐음
  $(".article-func i").on({
    mouseover: function () {
      $(this).addClass("hover");
      if ($(this).hasClass("active")) {
        $(this).removeClass("hover");
      }
    },
    mouseleave: function () {
      $(this).removeClass("hover");
    },
  });

  //게시버튼 클릭시 댓글 추가기능
  $("button.push-btn").click(function () {
    $(this)
      .parent()
      .prev()
      .prev()
      .append(
        '<p class="mycomment"><a href="#" class="user-id">' +
          myid +
          '</a><span class="comment-text">' +
          $(this).prev().val() +
          '</span><span class="comment-logo"><i class="fa-regular fa-heart fa-sm"></i></span></p>'
      );
    $(this).prev().val("");
    $(this).prop("disabled", true);
  });

  //좋아요 클릭시 빨간색으로 변경, 좋아요 숫자 변경
  $(document).on("click", ".fa-heart", function () {
    //좋아요 갯수 가져오기
    let likecount = "";
    //두번째 세번째 댓글 좋아요오류(좋아요가 눌리지않는 오류)를 위한 예외 처리.
    if ($(this).hasClass("like") == true) {
      likecount = $(this)
        .parents(".photo")
        .next()
        .find("span")
        .text()
        .split(" ")[1]
        .split("개")[0];
    }
    //span tag 지정 변수
    let spantext = $(this).parents(".photo").next().find(".like").find("span");

    //좋아요 갯수 숫자화
    likecount = Number(likecount);

    // $(this).toggleClass("fa-solid");
    if ($(this).hasClass("fa-regular")) {
      if ($(this).hasClass("nav-heart")) {
        $(this).toggleClass("fa-solid");
      } else {
        if ($(this).hasClass("active")) {
          $(this).removeClass("fa-solid");
          $(this).removeClass("active");
          spantext.text("좋아요 " + (likecount - 1) + "개");
          // $(this).removeClass("active");
        } else {
          $(this).addClass("active");
          $(this).addClass("fa-solid");
          spantext.text("좋아요 " + (likecount + 1) + "개");
        }
      }
    }
    return false;
  });

  //toggleFucntion
  function toggleFunk(el, where, what) {
    el.click(function () {
      where.toggleClass(what);
    });
  }

  //북마크
  toggleFunk($(".fa-bookmark"), $(".fa-bookmark"), "fa-solid active");


  //하트
  toggleFunk($(".nav-heart"), $(".push-heart-area"), "on");

  //사진갯수에 맞춰 동그라미 생성
  $(".main-photo").each(function () {
    let circleLeng = $("ul li.slide-photo", this).length;
    let circleplace = $(this).nextAll().find(".photo-circle");
    if (circleLeng > 1) {
      for (let i = 0; i < circleLeng; i++) {
        if (i == 0) {
          circleplace.append("<span class='circle active'></span>");
        } else {
          circleplace.append("<span class='circle'></span>");
        }
      }
    }
  });

  storyBtn($(".strbtn"));
  //story slide
  const liwidth = $(".story ul li").width() * $(".story ul li.story-slide").length;
  const ulwidth = $(".story ul").width();
  const storywidth = $(".story ul li").width() * 4;
  function storyBtn(el) {
    el.click(function () {
      const caInner = $(".story");
      let caInMarginLeft = parseInt($(".story").css("margin-left"));
      console.log(caInMarginLeft);
      let isAni = $(".story").is(":animated");
      if (el.attr("id") == "prev-btn") {
        if (!isAni) {
          caInner.animate(
            { marginLeft: caInMarginLeft + storywidth },
            function () {}
          );
        }
        console.log(caInMarginLeft);
      } else {
        if (!isAni) {
          caInner.animate(
            { marginLeft: caInMarginLeft - storywidth },
            function () {}
          );
          console.log(caInMarginLeft);
        }
      }
    });
  }
  

  //slide photo
  $(".btn").each(function () {
    console.log($(this));
    actionBtn($(this));
  });

  let circleIndex = 0;
  function actionBtn(el) {
    el.click(function () {
      const widthNum = 614;
      const caInner = $(this).prevAll(".main-photo");
      let circleArr = $(this).nextAll().find(".circle").get();
      let liLeng = $(this).prevAll().find(".slide-photo").length;
      let caInMarginLeft = parseInt(
        $(this).prevAll(".main-photo").css("margin-left")
      );
      let isAni = $(".main-photo").is(":animated");
      if (el.hasClass("prev")) {
        if (!isAni) {
          if (caInMarginLeft < 0) {
            caInner.animate(
              { marginLeft: caInMarginLeft + widthNum },
              function () {
                $(circleArr[circleIndex]).removeClass("active");
                $(circleArr[circleIndex - 1]).addClass("active");
                circleIndex--;
              }
            );
          }
          if (caInMarginLeft >= -614) {
            $(this).addClass("display");
          } else if (caInMarginLeft >= -(widthNum * (liLeng - 1))) {
            $(this).next().removeClass("display");
          }
        }
      } else if (el.hasClass("next")) {
        if (!isAni) {
          if (caInMarginLeft !== -(widthNum * (liLeng - 1))) {
            caInner.animate(
              { marginLeft: caInMarginLeft - widthNum },
              function () {
                $(circleArr[circleIndex]).removeClass("active");
                $(circleArr[circleIndex + 1]).addClass("active");
                circleIndex++;
                console.log(circleIndex);
              }
            );
            if (caInMarginLeft == -(widthNum * (liLeng - 2))) {
              $(this).addClass("display");
            } else if (caInMarginLeft <= 0) {
              $(this).prevAll(".prev-btn").removeClass("display");
            }
          }
        }
      }
    });
  }

  //right부분 위치 실시간 변경
  $(window).resize(function () {
    let rightmargin = $(".right-division").offset().left;
    $(".right").css("left", rightmargin);
  });
});
