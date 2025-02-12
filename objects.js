// singleton
// Object.create 

const mysym = Symbol("key1")
// object literals
const JSuser = {
    name : "vinit",
    "full name" : "vinit prajapati",
    age : 20,
    [mysym]:"key2",
    isLoggedin : true,
    email : "vinitprajapati@gmail.com",
    location : "gandhinagar",
    LastLoggedInDays : ['Monday' , 'Saturday']
}

// console.log(JSuser.name);
// console.log(JSuser['name']);
// console.log(JSuser['full name']);
// u cant access full name with dot method so instead of that use square bracket method
// console.log(JSuser[mysym]);

JSuser.age = 23
// console.log(JSuser.age);

// if u dont want any changes in the object than use freeze
// Object.freeze(JSuser)

JSuser.greetings = function (){
    console.log("Hello JS user");
}

JSuser.greetingstwo = function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(JSuser.greetings());
console.log(JSuser.greetingstwo());
console.log(JSuser.greetings);

const emptyobject = {}

if(console.log(Object.keys(emptyobjectobject).length===0)){
    console.log('object is empty');
}