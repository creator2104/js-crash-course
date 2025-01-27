const score = 300

const balance = new Number(2300.347)
// this  will convert the data into number type and its another method to store the variables

// console.log(score);
// console.log(balance.toString().length);
// console.log(balance.toFixed(4));
console.log(balance.toPrecision(7));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.abs(-4));
// it converta negative value into positive value 
console.log(Math.round(4.55));
console.log(Math.round(4.3));
console.log(Math.floor(4.9));
// floor considers lowest number in point values
//ceil do the opposite thing of floor
console.log(Math.ceil(4.1));
console.log(Math.min(4,5,6,87,4));
console.log(Math.max(4,5,6,87,4));

console.log(Math.random());
// it gives values between the range of 0 and 1 
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 