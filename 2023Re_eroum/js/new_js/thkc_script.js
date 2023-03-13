console.log("test");



let view = true;
// 토글
$(".toggle").click(function () {
  if (view == true) {
    $(".toggle").addClass("active");
    $(".asideClone").css("right", 0);
    $(".overlay").show();

  } else {
    $(".toggle").removeClass("active");
    $(".asideClone").css("right", "-100%");
    $(".overlay").hide();
    view = true;
  }
})
$(".overlay").click(function () {
  $(".asideClone").css("right", "-100%");
  $(".toggle").removeClass("active")
  $(".overlay").hide();
})

$(".m_toggle").click(function () {
  $(".asideClone").css("right", "-100%");
  $(".toggle").removeClass("active")
  $(".overlay").hide();
})




// aside 메뉴를 가져와서 복제하고 appendTo 한다.
$("#thkc_asideWrap aside").clone().appendTo(".mobileAside")

// 패밀리사이트를 가져와서 복제하고 appendTo 한다.
$(".f_Fsns").clone().appendTo(".m_f_Fsns")

// 이로움 톡톡 배너를 가져와서 복제하고 appendTo 한다.
$(".banner_eroum").clone().appendTo(".m_banner_eroum")


// Initialize Swiper               
var swiper = new Swiper(".eventSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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


 var swiper = new Swiper(".mySwiper_band", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Top버튼 올라가기
$("#thkc_pageTop .btn_top").click(function(){
  $("html,body").animate({scrollTop:0},300)
})

$(window).scroll(function(){
let scrollY = window.pageYOffset

if($("body").height()/5 < scrollY){ // 문서 반일때 스크롤 Y이 커질때 나타나라
    $(".btn_top").fadeIn()
}else{
    $(".btn_top").fadeOut()
}

})



// 파트너 Swiper               
var swiper = new Swiper(".partnerSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 아이디패스워드 Tap
  $(".thkc_tableTapWrap .thkc_tableWrap").eq(1).hide()
  $(".tabTitleWrap .tabTitle>div").click(function(){
  $(".tabTitleWrap .tabTitle>div").removeClass("active")
  $(this).addClass("active")

  let i=$(this).index()
  $(".thkc_tableTapWrap .thkc_tableWrap").hide()
  $(".thkc_tableTapWrap .thkc_tableWrap").eq(i).show()
})


// 회원가입 Tap
$(".thkc_JoinConent").eq(1).hide()
$(".thkc_tabJoin ul>li").click(function(){
$(".thkc_tabJoin ul>li").removeClass("active");
  $(this).addClass("active")

  let i=$(this).index()
  $(".thkc_JoinConent").hide()
  $(".thkc_JoinConent").eq(i).show()

})


// 회원가입 약관 아코디언
$(".thkc_agreeWrap .thkc_menu .thkc_dfc03").click(function(){
  // e.preventDefault(); 
  $(".thkc_agreeWrap .thkc_menu .thkc_dfc03").parent().find(".thkc_iner_cont").slideUp();

  if( $(this).hasClass("active")){ 
      $(".thkc_agreeWrap .thkc_menu .thkc_dfc03").removeClass("active")
  }else{
      $(this).parent().find(".thkc_iner_cont").slideDown();
      $(".thkc_agreeWrap .thkc_menu .thkc_dfc03").removeClass("active") 
      $(this).addClass("active")
  }
})

// 모달 팝업창
$(".thkc_popOverlay").hide();
$(".thkc_btnWrap .btn_submit_02").click(function(){
  $(".thkc_popUpWrap").css('display','flex').hide().fadeIn();
  $(".thkc_popOverlay").show();  
  document.body.classList.add("stop-scroll");
});
$(".thkc_popUpWrap .thkc_close").click(function(){
  $(".thkc_popUpWrap").hide();
  // $(".thkc_popUpWrap").css('display','none').show().fadeOut();
  $(".thkc_popOverlay").hide();
  document.body.classList.remove("stop-scroll");
});







