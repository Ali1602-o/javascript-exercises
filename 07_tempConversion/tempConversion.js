const convertToCelsius = function(temperatureInFahrenheit) {
  return parseFloat((((temperatureInFahrenheit - 32) * (5/9)).toFixed(1)));
};

const convertToFahrenheit = function(temperatureInCelcius) {
  return parseFloat(((temperatureInCelcius * 9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
