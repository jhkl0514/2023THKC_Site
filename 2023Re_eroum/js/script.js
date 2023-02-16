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
    $(".asideClone").css("right", "-1000%");
    $(".overlay").hide();
    view = true;
  }
})
$(".overlay").click(function () {
  $(".asideClone").css("right", "-1000%");
  $(".toggle").removeClass("active")
  $(".overlay").hide();
})

$(".m_toggle").click(function () {
  $(".asideClone").css("right", "-1000%");
  $(".toggle").removeClass("active")
  $(".overlay").hide();
})




// aside 메뉴를 가져와서 복제하고 appendTo 한다.
$("#asideWrap aside").clone().appendTo(".mobileAside")

// 패밀리사이트를 가져와서 복제하고 appendTo 한다.
$(".f_Fsns").clone().appendTo(".m_f_Fsns")


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





