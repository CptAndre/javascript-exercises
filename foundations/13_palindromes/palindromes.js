const reverseString = require("../07_reverseString/reverseString");

const palindromes = function (string) {

const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'; 

let normalString = string.toLowerCase().
                                split("").
                                filter((character) => alphanumerical.includes(character)).
                                reverse().
                                join("");           

const reversedString = normalString.split('').reverse().join('');

return normalString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
