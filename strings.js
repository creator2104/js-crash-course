// let str = "javascript"
// console.log(str[5]);

// let obj ={
//     item:"pen",
//     price:10
// }
// console.log(`the price of ${obj.item} is ${obj.price} rupees`);

// console.log("java\nscript");

// string methods 
// let str = "javascript"
// console.log(str.toUpperCase());
// console.log(str.length);
// let str2 = "    js   is a one of the popular language      "
// console.log(str2.trim());
// // trim removes the white spaces of the string
// console.log(str.slice(1,3));
// let str3="newstring"
// console.log(str.concat(" is a ",str3));
// console.log(str.replace("a","A"));
// console.log(str.replaceAll("a","A"));
// console.log(str.charAt(2));
// let str4 ="hellllo"
// str4[1] = "a" //this will not work because strings are immutable
// console.log(str4);
// console.log(str4.replaceAll("l" , "L")); 

let Name = prompt("enter your full name:")
let username  = "@"+Name+Name.length
console.log(username.trim());