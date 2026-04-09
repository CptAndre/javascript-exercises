/*  
// Started with logic method

function removeFromArray(array, ...values) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < values.length; j++) {

      if (array[i] === values[j]) {
        for (let k = i; k < array.length - 1; k++) {
          array[k] = array[k + 1];
        }

        array.length--; 
        i--; 
        break;
      }
    }
  }

  return array;
} */

// also ended with researched functions

function removeFromArray(array, ...values) {
  return array.filter(element => !values.includes(element));
}

// Do not edit below this line
module.exports = removeFromArray;
