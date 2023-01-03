const sumAll = function(num1, num2) {

    if(!isNumber(num1) || !isNumber(num2) || num1 < 0 || num2 < 0){
        return "ERROR";
    }

    let start;
    let end;

    if(num2 > num1){   
        start = num1;
        end = num2;
    }
    else{
        start = num2;
        end = num1;
    }

    let sum = 0;

    for(let i = start; i <= end; i++){
        sum += i;
    }

    return sum;

};

function isNumber(num){
    return typeof num == "number";
}

// Do not edit below this line
module.exports = sumAll;
