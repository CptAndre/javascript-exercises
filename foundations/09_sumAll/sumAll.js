/*  
// this is the code with swap variable

const sumAll = function(value1,value2) {
    let totalSum=0 , swap=0;
    
    if (!Number.isInteger(value1) || !Number.isInteger(value2) ||
        value1 < 0                ||  value2 < 0
    ) {
        return "ERROR";
    }

    if (value1 > value2) {
        swap = value1;
        value1 = value2;
        value2 = swap;
    }

    for(let i=value1;i<=value2;i++){
        totalSum+=i;
    }

    return totalSum;
}; 
*/

//this is the code after reading the solution of destructuring syntax.

const sumAll = function(value1,value2) {
    let totalSum=0 , swap=0;
    
    if (!Number.isInteger(value1) || !Number.isInteger(value2) ||
        value1 < 0                ||  value2 < 0
    ) {
        return "ERROR";
    }

    if (value1 > value2) {
        [value1,value2]=[value2,value1];
    }

    for(let i=value1;i<=value2;i++){
        totalSum+=i;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
