const sumAll = function(num1, num2) {
    
    //check type
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) return 'ERROR';

    
    let sum = 0;
    let small = (num1 < num2)? num1: num2;
    let large = (num1 < num2)? num2: num1;
    for (let i = small; i <= large; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
