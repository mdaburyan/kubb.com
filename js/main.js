$(function () {
  // Sticky Header Start
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 50) {
      $(".header").addClass("bggg");
    } else $(".header").removeClass("bggg");
  });
  // Sticky Header End
  //   Back To Top Start
  $(".back-to-top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 2000);
  });
  //   Back To Top End
  //   Pre Loader Part Start
  $(window).on("load", function () {
    $(".preloader").delay(500).fadeOut(500);
  });
  //  Pre Loader Part End

  // Type Js Start
  $(".typed").typed({
    strings: ["Md Abu Ryan", "Poly", "Messi", "Ronlado"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });
  // Type Js End

  // Counter Up Js Start

  // Counter Up Js End

});
