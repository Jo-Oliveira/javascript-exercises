const add = function(value1, value2) {
	return value1 + value2;
};

const subtract = function(value1, value2) {
	return value1 - value2;
};

const sum = function(arr) {
  // let sum = 0;
  //   for(let i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }
  //   return sum;
  const sumArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0, );
  return sumArr;
};

const multiply = function(arr) {
	let multiply = 1;
    for(let i = 0; i < arr.length; i++) {
      multiply *= arr[i];
    }
    return multiply;
};

const power = function(value1, value2) {
	return Math.pow(value1, value2);
};

const factorial = function(value1) {
  debugger;
	if (value1 === 0) return 1;
  else {
    return value1 * factorial(value1 - 1);
  }
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
