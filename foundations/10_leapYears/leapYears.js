/* 
did directly this first

const leapYears = function(year) {
    if(year % 4 === 0){
        if(!(year % 100 === 0) || year % 400 === 0){
        return true;
    }
}
return false;
}; */

// but solution provided me with a clearer code to everyone (including me) to read

const leapYears = function(year) {
    let checkDivisibleFour = year % 4 === 0;
    let checkCeuntry = year % 100 === 0;
    let checkDivisibleFourHundred = year % 400 === 0;
    
    if(checkDivisibleFour){
        if(!(checkCeuntry) || checkDivisibleFourHundred){
        return true;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
