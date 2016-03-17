var arrName = [];
var i;
for (i=1; i<=5; i++){
    arrName[i] = prompt('введите имя пользователя ' + i + " из 5");
    if(arrName[i] == ''){
        alert("Вы не ввели значение, повторите ввод");
        break;
    }
}
var flag;
var inputName = prompt("Введите имя пользователя");
if(inputName == ''){
    alert("Вы не ввели значение, повторите ввод");
}else{
    for(i=0; i<=arrName.length; i++){
        if(inputName === arrName[i]) {
            flag = true;
        }
    }
}
if(flag){
    alert(inputName + ", вы успешно вошли");
}else{
    alert("Такое имя не найдено");
}


