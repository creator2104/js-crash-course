let arr = ['vinit' , 'malay' , 'kush' , 'keval']
for (i=0 ; i<arr.length ; i++){
    // console.log(arr[i]);
}

for (const name of arr) {
    // console.log(name);
}

let arr1=[85,97,44,37,76,60]
let sum = 0
let total_length = arr1.length
for (const i of arr1) {
    sum += i
} 
// console.log(`The avg of numbers is ${sum/total_length}`);

let price = [250,645,300,900,50]
let newprice = []

for (let i = 0; i < price.length; i++) {
    newprice[i] = price[i] - price[i]/10
}
// console.log(newprice);

// array methods
languages = ['js' , 'java' , 'c' , 'cpp']
// languages.push('python' , 'go')
// console.log(languages);
// let deleteditem = languages.pop()
// console.log(languages);
// console.log(deleteditem);
// let string =languages.toString()
// console.log(string);
frameworks = ['django' , 'react' , 'nodejs']
let cstring = languages.concat(frameworks).toString()
// console.log(cstring);
languages.unshift('go')
// console.log(languages);
 languages.shift()
// console.log(languages);
let str3 = languages.slice(2)
// console.log(str3);
languages.splice(1,3,'go','py','c++')
// console.log(languages.toString());
// if u wanna add an element to a specific location of array use this 
languages.splice(2,0,'js')
// console.log(languages);
languages.splice(2,1,'java')
// console.log(languages);

companies = ['bloomberg' , 'microsoft' , 'uber' , 'Google' , 'IBM' , 'Netflix']
// companies.shift()
// console.log(companies);
companies.splice(2,1,'Ola')
// console.log(companies);
companies.push("Amazon")
// console.log(companies)

// some more array methods 
// below all methods store the value in new array
// map method - cretes  a new arr with the same results of some operation . The value its callback returns are used to form new arr 
// let num1 = [432,54,343,454,3,343]
// let numArr1 = num1.map((val)=>{
//     return val
// })
// console.log(numArr1.toLocaleString());

// filter method - creates a new arr of elements that give true for a condition 
// let num  = [43,52,54,55,44]
// let numArr = num.filter((val) =>{
//     return val%2===0
// })
// console.log(numArr);

// reduce method - performs some operations & reduces the array to a single value . it returns a single value 
// let num = [3,2,4,2]
// let numArr = num.reduce((previous , current)=>{
//     return sum = previous + current
// })
// console.log(numArr);

const anotherarray = [1,2,3,[4,5],6,7,[4,5,7,[5,6]]]
const real_anotherarray = anotherarray.flat(Infinity)
console.log(real_anotherarray);
console.log(...anotherarray);
// used to spread out the value 

console.log(Array.isArray('Vinit'));
console.log(Array.from('Vinit')); //it converts string into array 
console.log(Array.from({name : "rajesh"})); //it gives blank braces coz of dont know to apply the array on key or value 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
// it used to store multiple data into single array 