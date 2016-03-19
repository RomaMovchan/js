var conNumber = prompt("Введите число");
var conPower = prompt("Введите степень");
if ((conNumber != "") && (conPower != "")){
    if (isNaN(conNumber) || isNaN(conPower) || conPower < 0){
        alert ('Введеннык вами значения не являются числами или степень меньше нуля , повторите ввод');
    }else{
        console.log(conNumber + " в степени " + conPower + " равна: " + pow(conNumber,conPower));
    }
}else{
    alert("Введите данные");
}
function pow(number,power){
    var result = 0;
    var newval = number;
    if (power == 0){
        return 1;
    }else{
        for(var i = 1; i <= power-1; i++){
            result = newval * number;
            newval = result;
        }
        return result;
    }
}