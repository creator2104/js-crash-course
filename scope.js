// function one() {
//   const username = "Hitesh";

//   function two() {
//     const website = "Youtube";
//     console.log(username);
//   }
// //   console.log(website);
//   two();
// }
// one();

// if (true) {
//     const username1 = "hitesh"
//     if(username1=="hitesh"){
//         const website = " youtube"
//         console.log(username1+website);
//     }
//     // console.log(website);
// }
// // console.log(username1);

// console.log(addone(5));
// function addone(num){
//     return num +1
// }

// addTwo(5)
// // this is known as hoisting
// // u cant access the value of any variable before initialization 
// const addTwo = function(num){
//     return num+2
// }

let myNumbers = [1,2,3,4,5,6,7,8,9,10]
let newarr = myNumbers.forEach((i)=> {
    return i+10
});
console.log(newarr);