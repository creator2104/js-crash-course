class User {
    constructor (username , email , password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptedPassword(){
        return `${this.password}abc`
    }
    changeUsername (){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("vinit","Vinit04@.com","vinit")

// console.log(chai.encryptedPassword());
// console.log(chai.changeUsername());


//behind the scene

function user(username , email , password){
    this.username = username
    this.email = email
    this.password = password
}


user.prototype. encryptedPassword = function(){
         return `${this.password}abc`
}

user.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
}

const tea = new User("hitesh","hitesh04@.com","hitesh")

console.log(tea.encryptedPassword());
console.log(tea.changeUsername());