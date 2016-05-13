$(function(){
    $('body').keyup(function(){
        if(event.keyCode==13){
            var query = $("input")[0].value;
            $('.search-block').html(" ");
            googleSearch(query);
        }
    });
    $("#search").click(function(){
        var query = $("input")[0].value;
        googleSearch(query);
    });

    function googleSearch(e) {
        $.getJSON('https://pixabay.com/api/?key=2564206-70b3ccd8b259a3ed9d2bf8008&q=' + e + '&image_type=photo',
            function (data) {
                console.log(data);
                if(data.total == '0'){
                    var p = document.createElement("p");
                    p.innerHTML = 'No found';
                    $('.search-block').html(p);
                }else{
                    var ul = document.createElement("ul");
                    $.each(data.hits, function (i, val) {
                        console.log(i);
                        console.log(val);
                        var li = document.createElement("li");
                        var a = document.createElement("a");
                        a.setAttribute('href',val.pageURL);
                        a.setAttribute('target','_blank');
                        var img = document.createElement("img");
                        img.setAttribute('src',val.previewURL);
                        a.appendChild(img);
                        li.appendChild(a);
                        ul.appendChild(li);
                    });
                    $('.search-block').html(ul);
                }
            });
    }

});
