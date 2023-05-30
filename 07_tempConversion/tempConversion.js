const convertToCelsius = function(int_1) {
  celcius = ((int_1 - 32) * 5/9);
  return (Math.round(celcius * 10) / 10)
};

const convertToFahrenheit = function(int_1) {
  farenheit = (int_1 * (9/5) + 32);
  return (Math.round(farenheit * 10) / 10)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
