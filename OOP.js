function user(username  , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // return this 
}

const userOne = new user("vinit" , 12, true)
const userTwo = new user("Preet" , 20, false)
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);

console.log(this);