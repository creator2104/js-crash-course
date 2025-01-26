// object singleton or constructor

// const tinderUser = new Object()
// OR
const tinderUser = {};
tinderUser.id = "123dns";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularuser = {
  email: "mrvinitpr@gmail.com",
  fullname: {
    userfullname: {
      firstname: "vinit",
      lastname: "Prajapati"
    },
  },
};
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)
// this will target every object in {}
const obj3 = {...obj1,...obj2}
// spread operator would be good to separate
// console.log(obj3);

// when u get values from databases
const users = [  //array of object
    {
       id : 1,
       email : "h@gmail.com"
    },
    {
       id : 2,
       email : "g@gmail.com"
    },
    {
       id : 3,
       email : "v@gmail.com"
    }
]
console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
// it stores the value in array format 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLoggedin"));