// index.js
const sum = require('./sum.js');
const subtract=require('./subtract.js');
const multiply=require('./multiply.js');
const divide=require('./divide.js');

//sum
let sumA=4;
let sumB=6
const resultsum = sum(sumA,sumB);
console.log(`Sum: ${resultsum}`);
//subtraction
let subA=4;
let subB=6
const resultsub = subtract(subA,subB);
console.log(`Subtract: ${resultsub}`);
//multiply
let mulA=4;
let mulB=6
const resultmul = multiply(mulA,mulB);
console.log(`multiply: ${resultmul}`);
//divide
let divA=4;
let divB=6
const resultdiv = divide(divA,divB);
console.log(`divide: ${resultdiv}`);
