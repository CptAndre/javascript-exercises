/* 

direct usage in return using toFixed

const convertToCelsius = function(temp) {
  return Number(((temp - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(temp) {
  return Number((temp * 9 / 5 + 32).toFixed(1));
};

*/

// version with Math.round and variable 

const convertToCelsius = function(temp) {
  let conversion = (temp - 32) * 5 / 9;
  return Math.round(conversion * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let conversion = temp * 9 / 5 + 32;
  return Math.round(conversion * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
