$(function(){
    $('body').keyup(function(){
        if(event.keyCode==13){
            var query = $("input")[0].value;
            googleSearch(query);
        }
    });
    $("#search").click(function(){
        var query = $("input")[0].value;
        googleSearch(query);
    });

    function googleSearch(e){
        $.ajax({
            url:'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=large&q='+e+'&callback=GoogleCallback&context=?',
            dataType: 'jsonp',
            method:'POST',
            error:function(){
            }
        });
    }
});

function GoogleCallback(jqueryObj,data){
    loadToTemplate(data.results);
}

function loadToTemplate(dataObj){
    var templateInit = $('#googleSearch').html();

    var content = tmpl(templateInit,{
        data:dataObj
    });
    $('body').append(content);
}