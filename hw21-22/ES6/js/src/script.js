
let yourAns = new Array(),
    score = 0;

try{
    let testParse = JSON.parse(localStorage.getItem('Test'));
    console.log(testParse);
}
catch(e){
    console.log("Не удалось считать из файла json.js");
    localStorage.clear();
}

let testInit = document.getElementById('test').innerHTML;
let content = tmpl(testInit,{
    data:testParse
});
document.write(content);

$( document ).ready(function() {

    $( "input" ).click(function() {
        if(($(this).is(":checked"))){
            let arrayIndex = $(this)[0].attributes.data.value;
            yourAns[arrayIndex] = $(this)[0].value;
            console.log(yourAns);
        }
    });

    $(".btn-info").click(function(e){
        e.preventDefault;
        checkTest();
    });

});

function checkTest(){
    let answerText = "Результаты:\n";
    for(let i = 0; i < yourAns.length;++i){
        let num = i+1;
        console.log(testParse.questions[i].correctAnswer);
        console.log(yourAns[i+1]);
        answerText=answerText+"\n    Вопрос №"+ num +"";
        if(yourAns[i]!=testParse.questions[i].correctAnswer){
            answerText="Ошибка в вопросе №" + num + '</br>';
        }
        else{
            answerText=answerText+": Верно! \n";
            ++score;
        }
    }
    openModal(answerText,score);
    yourAns = [];
    let questionsCount = testParse.questions.length;
    console.log(questionsCount);
    if(score == questionsCount){
        openModal(answerText,'Тест сдан');
    }else{
        openModal(answerText,'Тест несдан');
    }
    score = 0;
    clearForm("testForm");
}

function clearForm(name) {
    let f = document.forms[name];
    for(let i = 0; i < f.elements.length; ++i) {
        if(f.elements[i].checked)
            f.elements[i].checked = false;
    }
}

function openModal(msgtext,testResult){
    let modal = $("#openModal");
    let overlay = $("#openModalOverlay");
    $("div.name", modal).html(msgtext);
    $("div.result", modal).html(testResult);
    overlay.show();
    overlay.css('width',$(document).width());
    overlay.css('height',$(document).height());
    overlay.css('width',$(document).width());
    overlay.css('height',$(document).height());
    modal.show();
    modal.css("top", (100 + $(window).scrollTop()) + "px");
    modal.css("left", ($(window).width() - modal.width()) / 2 + $(window).scrollLeft() + "px");
}

function closeInBasket(){
    $("#openModal").hide();
    $("#openModalOverlay").hide();
}



