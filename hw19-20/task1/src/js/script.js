"use strict";
$(function() {
    $('.bxslider').bxSlider();

    var $links = $(".accordion");

    $links.on("click",function(){
        var $sub = $(this).children('.accordion__text');
        console.log($sub);
        if(!$(this).hasClass('accordion-fadeIn')){
            $(this).addClass('accordion-fadeIn');
            $sub.slideToggle();
        }else{
            $(this).removeClass('accordion-fadeIn');
            $sub.slideToggle();
        }

    });
});


