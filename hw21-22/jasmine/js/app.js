var app = {
    sayHello:function(name){
        return 'Hello, ' + name;
    },
    sum:function(a,b){
        return a+b;
    },
    pow:function(number,power) {
        if ((number != "") && (power != "")){
            if (isNaN(number) || isNaN(power) || power < 0){
              console.log("не число");
                return undefined;
            }else{
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
        }


    }


}

/*var conNumber = prompt("¬ведите число");
var conPower = prompt("¬ведите степень");
if ((conNumber != "") && (conPower != "")){
    if (isNaN(conNumber) || isNaN(conPower) || conPower < 0){
        alert ('¬веденнык вами значени€ не €вл€ютс€ числами или степень меньше нул€ , повторите ввод');
    }else{
        console.log(conNumber + " в степени " + conPower + " равна: " + pow(conNumber,conPower));
    }
}else{
    alert("¬ведите данные");
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
}*/





module.exports = app;