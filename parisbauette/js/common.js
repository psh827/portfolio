$(function () {
  const mainbanner = $(".mainbanner .col-12 a");
  mainbanner.each(function () {
    $(this).on({
      mouseenter: function () {
        $(this).find(".gradient-container").addClass("hide");
      },
      mouseleave: function () {
        $(this).find(".gradient-container").removeClass("hide");
      },
    });
  });

  const header = $("#header");
  const mainbannerOffset = $(".content").offset();
  $(window).scroll(function () {
    const windowScollTop = $(this).scrollTop();
    if (mainbannerOffset.top <= windowScollTop) {
      header.css("display", "none");
    } else {
      header.css("display", "block");
    }
  });
});
