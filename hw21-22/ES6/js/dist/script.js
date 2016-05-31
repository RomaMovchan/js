'use strict';

var yourAns = new Array(),
    score = 0;

try {
    var _testParse = JSON.parse(localStorage.getItem('Test'));
    console.log(_testParse);
} catch (e) {
    console.log("Не удалось считать из файла json.js");
    localStorage.clear();
}

var testInit = document.getElementById('test').innerHTML;
var content = tmpl(testInit, {
    data: _testParse
});
document.write(content);

$(document).ready(function () {

    $("input").click(function () {
        if ($(this).is(":checked")) {
            var arrayIndex = $(this)[0].attributes.data.value;
            yourAns[arrayIndex] = $(this)[0].value;
            console.log(yourAns);
        }
    });

    $(".btn-info").click(function (e) {
        e.preventDefault;
        checkTest();
    });
});

function checkTest() {
    var answerText = "Результаты:\n";
    for (var i = 0; i < yourAns.length; ++i) {
        var num = i + 1;
        console.log(_testParse.questions[i].correctAnswer);
        console.log(yourAns[i + 1]);
        answerText = answerText + "\n    Вопрос №" + num + "";
        if (yourAns[i] != _testParse.questions[i].correctAnswer) {
            answerText = "Ошибка в вопросе №" + num + '</br>';
        } else {
            answerText = answerText + ": Верно! \n";
            ++score;
        }
    }
    openModal(answerText, score);
    yourAns = [];
    var questionsCount = _testParse.questions.length;
    console.log(questionsCount);
    if (score == questionsCount) {
        openModal(answerText, 'Тест сдан');
    } else {
        openModal(answerText, 'Тест несдан');
    }
    score = 0;
    clearForm("testForm");
}

function clearForm(name) {
    var f = document.forms[name];
    for (var i = 0; i < f.elements.length; ++i) {
        if (f.elements[i].checked) f.elements[i].checked = false;
    }
}

function openModal(msgtext, testResult) {
    var modal = $("#openModal");
    var overlay = $("#openModalOverlay");
    $("div.name", modal).html(msgtext);
    $("div.result", modal).html(testResult);
    overlay.show();
    overlay.css('width', $(document).width());
    overlay.css('height', $(document).height());
    overlay.css('width', $(document).width());
    overlay.css('height', $(document).height());
    modal.show();
    modal.css("top", 100 + $(window).scrollTop() + "px");
    modal.css("left", ($(window).width() - modal.width()) / 2 + $(window).scrollLeft() + "px");
}

function closeInBasket() {
    $("#openModal").hide();
    $("#openModalOverlay").hide();
}
