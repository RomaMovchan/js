(function($) {
    $(function() {


        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();

        $("#country_id").selectbox();


    });


    $( '.gjMenu-ul .open-sub' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);

        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );



        $(".gjMenu-ul .open-sub").mouseenter(

            function () {
                $(this).animate({
                    color:"#03C"
                }, 500 );
            });

        $(".gjMenu-ul .open-sub").mouseleave(function() {
            $(this).animate({
                color:"#0CF"
            }, 500 );
        });






    /*
    var HEIGHT = 0;
    var elem = document.querySelector('.jsMenu-ul .open-sub');
    elem.onmouseover = function(){
       var item = elem.querySelector('.sub-menu');
        if (HEIGHT != 354){
            var int = setInterval(function(e){
                item.style.height = HEIGHT + 'px';
                HEIGHT=HEIGHT + 59 ;
                item.style.visibility = "visible";
                if (HEIGHT===354){
                    clearInterval(int);
                }
            },1);
        }else{
            HEIGHT = 0;
        }
    };
    elem.onmouseout = function(e){
        HEIGHT = 0;
        var item = elem.querySelector('.sub-menu');
        //item.style.display = "none";
    };*/

})(jQuery);

