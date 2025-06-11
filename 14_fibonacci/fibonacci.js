const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    let sum = 0;
    let next = 1;
    for (let i = 0; i < n; i++) {
        let temp = sum;
        sum = next;
        next += temp;
    }return sum;
};

// Do not edit below this line
module.exports = fibonacci;
