const add = function(value1,value2) {
	return value1+value2;
};

const subtract = function(value1,value2) {
 return value1 - value2;
};

const sum = function([...values]) {
  let sum = 0;
	[...values].forEach(num=>{
    sum+=num;
  })
  return sum;
};

const multiply = function([...values]) {
  let mult = 1;
	[...values].forEach(num=>{
    mult*=num;
  })
  return mult;
};

const power = function(value1,value2) {
  let pow = 1; 
	for (let i=0; i < value2; i++){
    pow *= value1
  }
  return pow
};

const factorial = function(value) {
  let fac = 1;

  if (value === 0 || value === 1) {
      return 1;
  }

	for (let i=1; i <= value; i++){
    fac *= i
  }

  return fac;
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
