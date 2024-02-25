
const x = 2 ** 4  // like power of 

console.log(x);
console.log(typeof 4);
let year = 2024;
console.log(year);

let singleQuoteStr = 'this works just fine';
console.log(singleQuoteStr);
let doubleQuoteStr = "this works just fine too!";
console.log(doubleQuoteStr);

console.log(singleQuoteStr[5]); // strings are indexed
console.log(doubleQuoteStr[5]);

const concat = singleQuoteStr + " " + doubleQuoteStr;
console.log(concat);

// to be able to use string templates we need back ticks ``

const num = 25;
let str = "my num: ${num}";
console.log(str);
str = 'my num: ${num}';
console.log(str);
str = `my num: ${num}`;
console.log(str);

