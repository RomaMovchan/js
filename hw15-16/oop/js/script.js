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
        alert("��������");
    };
}

function Student(){
    this.studyplace = "KPI";
    this.scholarship = 200;
    this.watchTVshow = function(){
        alert("�������� �������");
    };
}
var newHuman = new Human();

Worker.prototype = newHuman;
Student.prototype = newHuman;


var newworker1 = new Worker();
var newworker2 = new Worker();
var newstudent1 = new Student();
var newstudent2 = new Student();

console.log('������� �1',newworker1.name);
console.log('����� ������',newworker1.workplace);

console.log('������� �2',newworker2.name);
console.log('��',newworker2.salary);

console.log('������� �1',newstudent1.name);
console.log('����� �����',newstudent1.studyplace);

console.log('������� �2',newstudent2.name);
console.log('���������',newstudent2.scholarship);
