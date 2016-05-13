
"use strict";


var Test = {
    "title":"Простенький тест",
    "id":'test',
    "questions":[
        {
            questionName: 'У Пети 2 яблока, у Евгения 8. Вопрос, сколько у ребят яблок, если Петя правша?',
            name:'question1',
            options: ['2', '8', '4','не знаю, в школе не учился'],
            multiReturn: true,
            correctAnswer:0
        },
        {
            questionName: 'Тревога, тревога, Волк унес .....?',
            name:'question2',
            options: ['бельчат', 'зайчат', 'крольчат', 'детей'],
            multiReturn: false,
            correctAnswer:1
        },
        {
            questionName: '2+2*2',
            name:'question3',
            options: ['8', '6', '2', '0'],
            multiReturn: false,
            correctAnswer:1
        }
    ]
};

/*
    {
        question: 'Вопрос №3',
        nameOfElements: 'groupAnswers3',
        options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        multiReturn: false
    },
    {
        question: 'Вопрос №3',
        nameOfElements: 'groupAnswers3',
        options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        multiReturn: false
    },
    {
        question: 'Вопрос №3',
        nameOfElements: 'groupAnswers3',
        options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        multiReturn: false
    }*/


try{
    localStorage.setItem('Test', JSON.stringify(Test));
}
catch(e){
    console.log("Не удалось записать в localstorage")
}