// const sum = (a,b) => {
//     console.log(a+b);
// }
// sum(3,44) 

// let mul = (c,d) =>{
//     console.log(c*d);
// }
// mul(20,3)
// here the function is stored in the variable named mul so we can reassign the value of mul as well
// mul = 10
// console.log(mul);

// const print = () =>{
//     console.log("Hello")
// }
// print()

function countVowels(str) {
    let count=0
    for (const char of str) {
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"||char==="A"||char==="E"||char==="I"||char==="O"||char==="U"){
            count++
        }
    }
    console.log(count);
}
// countVowels("Vinit Prajapati")
// countVowels("Vraj Prajapati")

let Vowel = (str) => {
  let count = 0;
  for (const char of str) {
    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" ||
        char === "A" ||
        char === "E" ||
        char === "I" ||
        char === "O" ||
        char === "U"
      ) {
        count++;
      }
    }
    // console.log(count);
};

Vowel("Vinit ii")

// const addtwo = (num1 , num2) => {
//   return num1 + num2
// }

// const addtwo = (num1,num2) => num1 + num2
// const addtwo = (num1,num2) => (num1 + num2)
// use braces 
const addtwo = (num1,num2) => ({username:"vinit"})
