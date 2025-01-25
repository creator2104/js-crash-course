function isItTruthy(input) {
  if (input) {
    return "It's truthy!";
  }

  return "It's falsey!";
}
// console.log(isItTruthy("null"));

let n=5
let sum = 0 
// for (let i = 0; i < n; i++) {
//     sum= sum +i
// }
// console.log(sum);


function printMultiplicationTable(n) {
 for (let i = 1; i <= 10; i++) {
     console.log(n,"*",i,"=",n*i);
 }
}
printMultiplicationTable(prompt('ooih'))