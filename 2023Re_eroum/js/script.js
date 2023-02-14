console.log("test");


let view = true;
$(".toggle").click(function(){
    if( view == true){
        $(".toggle").addClass("active");
        view = false;
    }else{
        $(".toggle").removeClass("active");
        view = true;
    }
    
})

$(".main_menu li a").click(function(e){
    e.preventDefault();
    if($(this).hasClass("active")){
        $(".main_menu li a").addClass("active");  
    }else{
        $(".main_menu li a").removeClass("active");
         $(this).addClass("active").addClass("");   
    }
       

})


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

// 패밀리사이트를 가져와서 복제하고 appendTo를 한다 ()
$(".f_Fsns").clone().appendTo(".m_f_Fsns")
