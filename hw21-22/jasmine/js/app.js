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
              console.log("�� �����");
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

/*var conNumber = prompt("������� �����");
var conPower = prompt("������� �������");
if ((conNumber != "") && (conPower != "")){
    if (isNaN(conNumber) || isNaN(conPower) || conPower < 0){
        alert ('��������� ���� �������� �� �������� ������� ��� ������� ������ ���� , ��������� ����');
    }else{
        console.log(conNumber + " � ������� " + conPower + " �����: " + pow(conNumber,conPower));
    }
}else{
    alert("������� ������");
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