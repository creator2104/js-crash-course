// const sum = (a,b) => {
//     console.log(a+b);
// }
// sum(3,44) 

// let mul = (c,d) =>{
//     console.log(c*d);
// }
// mul(20,3)

// mul = 10
// console.log(mul);

// const print = () =>{
//     console.log("Hello")
// }
// print()

// function countVowels(str) {
//     let count=0
//     for (const char of str) {
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"||char==="A"||char==="E"||char==="I"||char==="O"||char==="U"){
//             count++
//         }
//     }
//     console.log(count);
// }
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
