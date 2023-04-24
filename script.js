$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
     
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
});
var typed = new Typed(".typing", {
    strings: ["frontend developer", "Freelancer", " UI/UX Designer", "content writer"],
    typeSpeed: 100,
    backspeed:60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["frontend developer", "Freelancer", " UI/UX Designer", "content writer"],
    typeSpeed: 100,
    backspeed:60,
    loop: true
});
