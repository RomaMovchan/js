function Pow(number,power){
    var result = 0;
    var newval = number;
    if (power == 0){
        return result;
    }else{
        for(var i = 1; i <= power-1; i++){
            result = newval * number;
            newval = result;
        }
        return result;
    }
}
var conNumber = prompt("Введите число");
var conPower = prompt("Введите степень");
if ((conNumber != "") && (conPower != "")){
    if (isNaN(conNumber) || isNaN(conPower) || conPower < 0){
        alert ('Введеннык вами значения не являются числами или степень меньше нуля , повторите ввод');
    }else{
        console.log(conNumber + " в степени " + conPower + " равна: " + Pow(conNumber,conPower));
    }
}else{
    alert("Введите данные");
}
