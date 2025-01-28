// const coding = ['js','ruby','java','python','cpp']
// const values = coding.forEach((val)=> {
//     // console.log(val);
// });
// // console.log(values);
// // In for each loop we dont consider function name in function back

// const mynums = [1,2,3,4,5,6,7,8,9,10]

// // const newNums = mynums.filter((num) => num >5)
// // for one line dont use return property
// const newNums = mynums.filter((num)=>{
// return num >5
// })
// // in curly braces we have to give return property for functions
// // console.log(newNums);

// const numbers = []
// numbers.forEach(val => {
//     if (val>5) {
//         numbers.push(val)
//     }
// });

// const books = [
//     {title:'Book one',genre:'Fiction',publish:1981,edition:2004},
//     {title:'Book Two',genre:'Non-Fiction',publish:1992,edition:2008},
//     {title:'Book Three',genre:'History',publish:1999,edition:2007},
//     {title:'Book Four',genre:'Non-Fiction',publish:1989,edition:2010},
//     {title:'Book Five',genre:'Science',publish:2009,edition:2014},
//     {title:'Book Six',genre:'Fiction',publish:1987,edition:2010},
//     {title:'Book Seven',genre:'History',publish:1986,edition:2004},
//     {title:'Book Eight',genre:'Science',publish:2011,edition:2016},
//     {title:'Book Nine',genre:'Non-Fiction',publish:1981,edition:1989}
// ]

// let userbooks = books.filter((bk)=>{
//  return bk.genre === 'History'
// })
// userbooks = books.filter((bk)=>{
//  return bk.publish >=  1995 && bk.genre === 'History'
// })
// // console.log(userbooks);

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const nums = myNumbers.map((num)=>{
// return num+10
// })
// console.log(nums);

// myNumbers.forEach(variable => {
//     let no
//     no = variable + 10
//     console.log(no);
// });

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumbers
//   .map((num) => {
//     return num * 10;
//   })
//   .map((num) => {
//     return num + 1;
//   })
//   .filter((num)=>{
//     return num >=40
//   })
// console.log(newNums);

// reduce
const myNums = [1, 2, 3];
let myTotal = myNums.reduce(function (acc, curval) {
  console.log(`accumulator value is :${acc} and current value is ${curval}`);
  return acc + curval
}, 0);
// 0 defines the accumulator starting value 
console.log(myTotal);

myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) =>{
    return acc + item.price
},0)
console.log(priceToPay);