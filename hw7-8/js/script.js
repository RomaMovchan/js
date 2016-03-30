$(document).ready(function(){

    $(".tabs-link").on("click",function(e){
        e.preventDefault();
        var item = $(this).closest(".tabs-block"),
            content = $(".tabs__list-block"),
            itemPos = item.index();
        content.eq(itemPos)
            .addClass('active-block')
            .siblings()
            .removeClass('active-block');

        item.addClass('active')
            .siblings()
            .removeClass('active');

    });
    $(".input").hover(function(){
        $(this).next("b").stop().animate({opacity: "show", right: "0"}, "slow");
    }, function() {
        $(this).next("b").stop().animate({opacity: "hide", right: "0"}, "fast");
    });
    $(".showHelp").on("click",function(e){
        e.preventDefault();
        $("b").animate({opacity: "show", right: "0"}, "slow");
    });

});
