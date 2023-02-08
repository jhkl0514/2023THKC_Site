console.log("test");

// 메뉴
        // $(".bg").slideUp()
        // $(".navbar").hover(function(){
        //     $(".bg,.submenu").stop().slideDown()
        // },function(){
        //     $(".bg,.submenu").stop().slideUp()
        // })

// 토글
// $(".toggle").click(function(){
//     $(".navbarClone").css("left",0);
//     $(".toggle").addClass("active")
//     $(".overlay").show();
// })
// $(".overlay").click(function(){
//     $(".navbarClone").css("left","-100%");
//     $(".toggle").removeClass("active")
//     $(".overlay").hide();

// })

// 토글
// $(".toggle").click(function(){
//     $(".toggle").addClass("active")

// })
// $(".overlay").click(function(){
//         $(".toggle").removeClass("active")
// })

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

// $(".navbarClone .mMenu>ul>li>a").click(function(e){
//     e.preventDefault();
//    $(".mMenu>ul>li>a").parent().find(".submenu").slideUp(200);

//    if($(this).hasClass("active")){
//      $(".mMenu>ul>li>a").removeClass("active")
//    }else{
//      $(this).parent().find(".submenu").stop().slideDown(200);
//      $(".mMenu>ul>li>a").removeClass("active");
//      $(this).addClass("active").addClass("");    

//    }
  
//  })