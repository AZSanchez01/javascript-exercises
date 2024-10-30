const sumAll = function(num1, num2) {
    
    if (Number.isInteger(num1) == true && 
        Number.isInteger(num2) == true &&
        num1 >= 0 && num2 >=0) {
        let numHighest = (num1 >= num2)? num1:num2;
        let numLowest = (num2 < num1)? num2:num1;
        let sum = numHighest;
    
        while (numHighest != numLowest) {
            numHighest--;
            sum += numHighest;
        }
        return sum;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
