const add = function(number1, number2) {
  return +number1 + +number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numbers) {
	return numbers.reduce((sum, number) => sum += number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((multiplies, number) => multiplies *= number);
};

const power = function(number, power) {
	return Math.pow(number, power);
};

const factorial = function(number) {
  if (number === 0) return 1;
  return number * factorial(number - 1);
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
