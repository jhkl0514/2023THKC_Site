console.log("test");



let view = true;
// 메뉴 토글
$(".toggle").click(function () {
  if (view == true) {
    $(".toggle").addClass("active");
    $(".asideClone").css("right", 0);
    $(".overlay").show();
    document.body.classList.add("stop-scroll");

  } else {
    $(".toggle").removeClass("active");
    $(".asideClone").css("right", "-100%");
    $(".overlay").hide();
    view = true;
    document.body.classList.remove("stop-scroll");
  }
})
$(".overlay").click(function () {
  $(".asideClone").css("right", "-100%");
  $(".toggle").removeClass("active")
  $(".overlay").hide();
  document.body.classList.add("stop-scroll");
})

$(".m_toggle").click(function () {
  $(".asideClone").css("right", "-100%");
  $(".toggle").removeClass("active")
  $(".overlay").hide();
  document.body.classList.remove("stop-scroll");
})




// aside 메뉴를 가져와서 복제하고 appendTo 한다.
$("#thkc_asideWrap aside").clone().appendTo(".mobileAside")

// 패밀리사이트를 가져와서 복제하고 appendTo 한다.
$(".f_Fsns").clone().appendTo(".m_f_Fsns")

// 이로움 톡톡 배너를 가져와서 복제하고 appendTo 한다.
$(".banner_eroum").clone().appendTo(".m_banner_eroum")



// var swiper = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });

// var swiper = new Swiper(".menuWrap02 .mySwiper_menu", {
//   slidesPerView: 1,
//       spaceBetween: 5,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       slidesPerView: "auto",
//       autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//       },
//       breakpoints: {
//         300: {
//           slidesPerView: 2,
//           spaceBetween: 1,
//         },
//         360: {
//           slidesPerView: 3,
//           spaceBetween: 1,
//         },
//         640: {
//           slidesPerView: 4,
//           spaceBetween: 1,
//         },
//         768: {
//           slidesPerView: ,
//           spaceBetween: 1,
//         },
//         1024: {
//           slidesPerView: 4,
//           spaceBetween: 1,
//         },
//       },
  
// });

var swiper = new Swiper(".menuWrap02 .mySwiper_menu", {
  slidesPerView: 1,
  spaceBetween: 5, 
      navigation: {
        nextEl: ".menu_swiper_navi .swiper-button-next",
        prevEl: ".menu_swiper_navi .swiper-button-prev",
      },         
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      //   dynamicBullets: true,        
      // },
      slidesPerView: "auto",
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      breakpoints: {
        240: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        335: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        460: {
          slidesPerView: 4,
          spaceBetween: 5,
        }
      },          
 });

// 사업소 이벤트 Swiper               
var swiper = new Swiper(".eventWrap .eventSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // loop: true,
  loopAdditionalSlides: 1,
  pagination: {
    el: ".wrap_swiper_navi .swiper-pagination",
    clickable: true,
  },
 
  navigation: {
    nextEl: ".wrap_swiper_navi .swiper-button-next",
    prevEl: ".wrap_swiper_navi .swiper-button-prev",
  },
});






var swiper = new Swiper(".mySwiper_guide", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 15,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".mySwiper_service", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 15,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
});

//상단 띠배너 스와이퍼
var swiper = new Swiper(".mySwiper_band", {
  navigation: {
    nextEl: ".topBanner_swiper_navi .swiper-button-next",
    prevEl: ".topBanner_swiper_navi .swiper-button-prev",
  },
  loop: true, 
});

//Top버튼 올라가기
$("#thkc_pageTop .btn_top").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 300)
})

$(window).scroll(function () {
  let scrollY = window.pageYOffset

  if ($("body").height() / 5 < scrollY) { // 문서 반일때 스크롤 Y이 커질때 나타나라
    $(".btn_top").fadeIn()
  } else {
    $(".btn_top").fadeOut()
  }

})


// 파트너 Swiper               
var swiper = new Swiper(".top_parther .partnerSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  loopAdditionalSlides: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".wrap_swiper_navi .swiper-button-next",
    prevEl: ".wrap_swiper_navi .swiper-button-prev",
  },
});

// 아이디패스워드 Tap
$(".thkc_tableTapWrap .thkc_tableWrap").eq(1).hide()
$(".tabTitleWrap .tabTitle>div").click(function () {
  $(".tabTitleWrap .tabTitle>div").removeClass("active")
  $(this).addClass("active")

  let i = $(this).index()
  $(".thkc_tableTapWrap .thkc_tableWrap").hide()
  $(".thkc_tableTapWrap .thkc_tableWrap").eq(i).show()
})


// 회원가입 Tap
$(".thkc_JoinConent").eq(1).hide()
$(".thkc_tabJoin ul>li").click(function () {
  $(".thkc_tabJoin ul>li").removeClass("active");
  $(this).addClass("active")

  let i = $(this).index()
  $(".thkc_JoinConent").hide()
  $(".thkc_JoinConent").eq(i).show()
})


// 회원가입 약관 아코디언
$(".thkc_agreeWrap .thkc_menu .thkc_dfc03").click(function () {
  // e.preventDefault(); 
  $(".thkc_agreeWrap .thkc_menu .thkc_dfc03").parent().find(".thkc_iner_cont").slideUp();

  if ($(this).hasClass("active")) {
    $(".thkc_agreeWrap .thkc_menu .thkc_dfc03").removeClass("active")
  } else {
    $(this).parent().find(".thkc_iner_cont").slideDown();
    $(".thkc_agreeWrap .thkc_menu .thkc_dfc03").removeClass("active")
    $(this).addClass("active")
  }
})

// 모달 팝업창 (직원 등록)
$(".thkc_popOverlay").hide();
$(".thkc_btnWrap .btn_submit_02").click(function () {
  $(".thkc_popUpWrap").css('display', 'flex').hide().fadeIn();
  $(".thkc_popOverlay").show();
  document.body.classList.add("stop-scroll");
});
$(".thkc_popUpWrap .thkc_close").click(function () {
  $(".thkc_popUpWrap").hide();
  // $(".thkc_popUpWrap").css('display','none').show().fadeOut();
  $(".thkc_popOverlay").hide();
  document.body.classList.remove("stop-scroll");
});


// 모달 팝업창 (배송지 신규등록)
$(".thkc_popOverlay").hide();
$(".thkc_btnWrap .btn_submit_01").click(function () {
  $(".thkc_popUpWrap").css('display', 'flex').hide().fadeIn();
  $(".thkc_popOverlay").show();
  document.body.classList.add("stop-scroll");
});
$(".thkc_popUpWrap .thkc_close").click(function () {
  $(".thkc_popUpWrap").hide();
  // $(".thkc_popUpWrap").css('display','none').show().fadeOut();
  $(".thkc_popOverlay").hide();
  document.body.classList.remove("stop-scroll");
});


///* 패스워드 show,hide */
$(document).on('click', '.icon-eyes-on, .icon-eyes-off', function (e) {
  const $target = $(e.target);
  const $targetBox = $target.closest('.field, .field_01');
  const $targetInput = $targetBox.find('input');
  if
    ($targetBox.hasClass('show')) {
    $targetBox.removeClass('show');
    $targetInput.attr('type', 'text');
    $(".icon-eyes-off").css('display', 'block');
    $(".icon-eyes-on").css('display', 'none');
  } else {
    $targetBox.addClass('show');
    $targetInput.attr('type', 'password');
    $(".icon-eyes-off").css('display', 'none');
    $(".icon-eyes-on").css('display', 'block');
  }
  $targetInput.focus();
});

/* 상품 카데고리*/
/* 상품 카데고리 - my 보유재고 */
$(".thkc_ToggleWrap .myOff").hide();
$(".thkc_ToggleWrap .myOn").click(function () {
  $(".thkc_ToggleWrap .myOff").show();
  $(".thkc_ToggleWrap .myOn").hide();  
})
$(".thkc_ToggleWrap .myOff").click(function () {
  $(".thkc_ToggleWrap .myOn").show();
  $(".thkc_ToggleWrap .myOff").hide();  
})
/* 상품 카데고리 - 아이콘 더보기 접기 */
$(".category_moreview").show();
$(".category_morfold").hide();
$(".category_moreview").click(function () {
  $(".thkc_category .menu_list").css("height", "100%");
  $(".category_morfold").show();
  $(".category_moreview").hide();
})
$(".category_morfold").click(function () {
  $(".thkc_category .menu_list").css("height", "120px");
  $(".category_morfold").hide();
  $(".category_moreview").show();
})
/* 상품 카데고리 - active */
$(".thkc_category .thkc_cateBg").click(function () {
  $(".thkc_category .thkc_cateBg").removeClass("active");
  $(this).addClass("active")
})
/* 상품 Type - active */
$(".prouctType>li>a").click(function () {
  $(".prouctType>li>a").removeClass("active");
  $(this).addClass("active")
})







