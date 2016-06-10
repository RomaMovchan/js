"use strict";
$(function() {
    $('.bxslider').bxSlider();

    $('.grid').masonry({
	  // options
	  itemSelector: '.grid-item'
	 
	 
	});

    $(".search-partner").click(function(){
		var query = $(".search-field").val();
		console.log(query)
          AjaxSearch(query);
    });
    
	$.ajax({
		url: 'https://pixabay.com/api/?key=2683000-931909b1d6f29b69f89649b0a&q=football&image_type=photo&pretty=true',
		success: function (hits) {
			var $grid = $('.grid');
			for (var i = 1; i < 8; i++) {
				var $griditem = $('#item' + i);
				var $link = hits.hits[i].webformatURL;
				var $name = hits.hits[i].tags;
				var $result = '<img src="' + $link + '" alt=""> <span>' + $name + '</span>'
				$griditem.html($result);
				
			}
		}
	});



    function AjaxSearch(e) {
    	console.log(e);
        $.ajax({
		url: 'https://pixabay.com/api/?key=2683000-931909b1d6f29b69f89649b0a&q='+ e +'&image_type=photo&pretty=true',
		success: function (hits) {
			var $grid = $('.grid');
			
			for (var i = 1; i < 8; i++) {

				var $griditem = $('#item' + i);
				var $link = hits.hits[i].webformatURL;
				var $name = hits.hits[i].tags;
				var $result = '<img src="' + $link + '" alt=""> <span>' + $name + '</span>'
				$griditem.html($result);
				
			}
		}
	});
    }
    
});


