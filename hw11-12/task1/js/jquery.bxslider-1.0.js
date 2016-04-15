(function( $ ){

    $.fn.bxslider = function(options) {
        var settings = $.extend({
            speed:500
        },options);

        var elementsList = $('.carousel-list');
        var slider = $(".bxslider");

        slider.prepend("<div class = 'carousel-arrow-left'></div>");
        slider.append("<div class = 'carousel-arrow-right'></div>");

        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;

        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;

        $('.carousel-arrow-left').click(function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                elementsList.stop().animate({ left : currentLeftValue + "px"}, settings.speed);
            }
        });

        $('.carousel-arrow-right').click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                elementsList.stop().animate({ left : currentLeftValue + "px"}, settings.speed);
            }
        });

    };
})( jQuery );

