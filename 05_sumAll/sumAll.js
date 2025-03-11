const sumAll = function(firstNumber, secondNumber) {
    debugger;
    let totalSoma = 0;
    if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) return "ERROR";
    if(firstNumber < 0 || secondNumber < 0) return "ERROR";
    if (firstNumber <= secondNumber) {
        for(let i = firstNumber; i <= secondNumber; i++) {
            totalSoma += i;
        } 
    }else {
            for(let i = firstNumber; i >= secondNumber; i--) {
                totalSoma += i;
            }

        }    
    return totalSoma;

};

// Do not edit below this line
module.exports = sumAll;
