const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return (arr.length == 0)? 0:arr.reduce((sum, elem) => sum + elem);
};

const multiply = function(arr) {
 return arr.reduce((prod, elem) => prod *= elem);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num === 0) return 1;
  let prod = 1;
  for(let i = 2; i <= num; i++)
    prod *= i;
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
