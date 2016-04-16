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
    var opensub = $( '.gjMenu-ul .open-sub' );
    opensub.hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);

        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
    opensub.mouseenter(

        function () {
            $(this).animate({
                color:"#03C"
            }, 500 );
        });
    opensub.mouseleave(function() {
        $(this).animate({
            color:"#0CF"
        }, 500 );
    });
})(jQuery);

