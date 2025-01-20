// let score = 102;
// let name = 'vinit';
// let isloggedIn = false;

// let languages = ['c' , 'cpp' , 'java' , 'js' , 'python'];
// let user={ firstname:"vinit" , lastname:"prajapati" , age:20 }
// let getscore = score;
// console.log(getscore);

// let gamename = "spiderman"
// gamename = "mario"
// console.log(gamename);

//primitives
let balance = 1200;
console.log(typeof balance);

let firstname;
console.log(firstname);

let secondname = null;
console.log(secondname);

let myname = "Vinit";
let greetmsg = `Hello ${myname}!`;
console.log(greetmsg);

let sm1 = Symbol("vinit");
let sm2 = Symbol("vinit");
// symbol have its own unique value
console.log(sm1 == sm2);

// Non - primitives

const username = {
  firstname: "vinit",
  "first name":"rajesh",
  lastname: "prajapati",
  age: 20,
  isLicensed: false,
};
console.log(username["first name"]);

username.role="Software developer";
console.log(username.isLicensed);
console.log(typeof username.isLicensed);

let today = new Date();
console.log(today.getDate());

// array
let anotheruser = ['hitesh' , true];
console.log(anotheruser[0]);
console.log(anotheruser[1]);

console.log('1' + 1);
console.log("1" + 1);