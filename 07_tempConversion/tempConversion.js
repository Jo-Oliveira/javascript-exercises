const convertToCelsius = function(temp) {
  let toCelsius = 5/9 * (temp - 32)
  return parseFloat(toCelsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let toFahrenheit = (temp * 1.8) + 32;
  return parseFloat(toFahrenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
