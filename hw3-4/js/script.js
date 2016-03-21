var createDOM = {
    counter:0,
    body:document.body,
    title:document.createElement("h4"),
    div:document.createElement("div"),
    form:document.createElement("form"),
    button:document.createElement("button"),
    createDocument: function() {
        this.body.insertBefore(this.div,this.body.children[0]);
        this.div.classList.add("container");
        this.div.appendChild(this.title);
        this.title.innerHTML = "Тест по программированию";
        this.div.appendChild(this.form);
        this.form.action = "test";
    },
    createQuestion:function(question,answer){
        var createQuestionDiv = document.createElement("div");
        createQuestionDiv.classList.add("question");
        var createQuestionTitle = document.createElement("b");
        createQuestionTitle.innerHTML = question;
        var createQuestionLabel;
        var createQuestionCheckbox;
        this.form.appendChild(createQuestionDiv);
        createQuestionDiv.appendChild(createQuestionTitle);
        this.counter++;
        for (var i = 0; i<= answer.length-1; i++){
            createQuestionLabel = document.createElement('label');
            createQuestionLabel.innerHTML = ' ' + answer[i];
            createQuestionDiv.appendChild(createQuestionLabel);
            createQuestionCheckbox = document.createElement("input");
            createQuestionCheckbox.type = "checkbox";
            createQuestionCheckbox.setAttribute('id',('question#'+ this.counter + '-answer#' + (i+1)) );
            createQuestionLabel.insertBefore(createQuestionCheckbox,createQuestionLabel.firstChild);
        }
    },
    createButton:function(name){
        this.form.appendChild(this.button);
        this.button.classList.add("btn");
        this.button.classList.add("btn-info");
        this.button.innerHTML = name;
    }
};
createDOM.createDocument();
createDOM.createQuestion('1. Вопрос №1',  ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'] );
createDOM.createQuestion('2. Вопрос №2',  ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'] );
createDOM.createQuestion('3. Вопрос №3',  ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'] );
createDOM.createButton('Проверить мои результаты');
