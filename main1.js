// console.log('Hello from main.js')

// variables
// let age = 25
// console.log(age)

// const salary = 60000
// console.log(salary)
// u can't reassign the value of const or can't update the value of const

// data types
// primitive
// const name = "vishwas";
// const language = "English";
// const channel = `Codevolution`;

// const total = 0;
// const PI = 3.14;

// const isPrimaryNumber = true;
// const isNewUSer = false;

// let result;
// console.log(result);

// const res = undefined;

// const data = null;

// non primitive
// key and value combination

const person = {
  firstname: "Bruce",
  lastname: "wayne",
  age: 30,
};

// console.log(person.firstname)
console.log(person['firstname'])

// array

// const oddnumbers = [1,3,5,7,9]
// console.log(oddnumbers[2])

// data types value would automatically changed when u update it
// let a = 10
// a = 'variable'
// a = true
// console.log(a)

// operators
// arithmetic operator
// let x = 10
// let y = 5
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)
// console.log(++x)
// console.log(--y)
// console.log(x==y)
// console.log(x!=y)
// console.log(x===y)
// === checks the value and data types as well

// console.log(x>y)
// console.log(x<y)
// console.log(x<=y)
// console.log(x>=y)

// const isValidNumber = x > 8 && 8 > y
// console.log(isValidNumber)
// const isValidNumber = x>8 || 8>y
// console.log(isValidNumber)

// const isValid = true
// console.log(!isValid)

// console.log('Bruce ' + 'Wayne')

// const isEven = 10%2===0 ? true : false
// console.log(isEven)

// const isEven = 10%2===0 ? 'Number is Even': 'Number is odd'
// console.log(isEven)

// type conversion
// implicit conversion
// console.log(true + '3')
// console.log('2' + '3')
// console.log('4' - '3')
// console.log('4' * '3')
// console.log('4' / '2')
// console.log('Bruce' - 'Wayne')
// this will show NaN means not a number in output console
// console.log('5'- false)
// console.log('5'- true)
// it will give value 4 because true would be considerd as a value 1
// console.log('5'- null)
// console.log('5'- undefined)

// console.log(Number('5'))
// console.log(Number(false))
// console.log(parseInt('5'))
// console.log(parseFloat('5.5'))
// console.log(String(true))
// console.log(String(500))
// console.log(String(null))
// console.log(String(undefined))
// console.log((500).toString())
// tostring method doesn't work on null and undefined
// console.log(Boolean(10))
// everything would be give true output except (null , undefined , 0 , '' , NaN

// Equality
// const var1 = '10'
// const var2 = 10
// console.log(var1 == var2)
// console.log(var1 === var2)

// const var3 = null
// const var4 = undefined
// console.log(var3 == var4)
// console.log(var3 === var4)
// use === every time

// const num = 5;
// if (num > 0) {
//   console.log("Number is Positive")
// } else if (num < 0) {
//   console.log("Number is negative")
// } else {
//   console.log("Number is Zero")
// }

// const color = 10 ;
// switch (color) {
//   case "red":
//     console.log("color is red");
//     break
//   case "blue":
//     console.log("color is blue");
//     break
//   case "green":
//     console.log("color is green");
//     break
//     default:
//     console.log('Not a valid case')
// }

// loops
// for(let i=1;i<=5;i++)
// {
//     console.log('Iteration Number ' + i)
// }

// let i=1
// while(i<=5)
// {
//     console.log('Iteration Number ' + i)
//     i++
// }

// let i=1
// do{
//     console.log('Iteration Number ' + i)
//     i++
// }
// while(i<=5)

// const NumArray = [1,2,3,4,5]
// for(const num of NumArray)
// {
//     console.log('Iteration Number' + num)
// }

// functions
// function greet(){
//     console.log('Good morning Vishwas')
// }
// greet()

// function greet(username) {
//   console.log("Good morning " + username)
// }
// greet("Vishwas")
// greet("Vinit")
// greet("Ajay")

// function add(a, b) {
//   return a + b
// }

// const sum = add(5, 10)
// console.log(sum)

const arrowSum = (a, b) => a + b
const sum = arrowSum(5, 10)
console.log(sum)

const addFive = (num) => num + 5;

const profile = {
   username:"vinit prajapati",
   followers:569000,
   following:5,
   isFollow:true,
   post:12
}
console.log(profile);
console.log(typeof profile);
console.log(typeof profile["username"]);
console.log(typeof profile["followers"]);
console.log(typeof profile["isFollow"]);

