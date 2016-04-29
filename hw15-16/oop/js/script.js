function Human(){
    this.name = "Ivan";
    this.age = 19;
    this.sex = "male";
    this.weight = 100;
    this.rise = 193;
}

function Worker(){
    this.workplace = "EPAM";
    this.salary = 300;
    this.work = function(){
        alert("Работать");
    };
}

function Student(){
    this.studyplace = "KPI";
    this.scholarship = 200;
    this.watchTVshow = function(){
        alert("Смотреть сериалы");
    };
}
var newHuman = new Human();

Worker.prototype = newHuman;
Student.prototype = newHuman;


var newworker1 = new Worker();
var newworker2 = new Worker();
var newstudent1 = new Student();
var newstudent2 = new Student();

console.log('Рабочий №1',newworker1.name);
console.log('Место работы',newworker1.workplace);

console.log('Рабочий №2',newworker2.name);
console.log('ЗП',newworker2.salary);

console.log('Студент №1',newstudent1.name);
console.log('Место учебы',newstudent1.studyplace);

console.log('Студент №2',newstudent2.name);
console.log('Стипендия',newstudent2.scholarship);
