class user{
    constructor (username){
        this.username = username
    }
    logMe (){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username,email,password){
        super(username)
this.email = email
this.password = password
    }

    addCourse (){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","cahi@","123")

chai.addCourse();

const masalachai = new user("masalachai")

masalachai.logMe()
chai.logMe()
console.log(chai===masalachai);
console.log(chai===Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof user);