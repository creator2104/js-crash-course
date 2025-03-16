class user {
    constructor(username) {
        this.username = username
    }
    logme (){
        console.log(`username : ${this.username}`);
    }
   static createId (){
        return `123`
    }
}

const hitesh = new user ("hitesh")
// console.log(hitesh.createId());

class Teacher extends user {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const nitin = new Teacher("nitin","nitin@")

nitin.logme()  // remove static keyword to execute 

console.log(nitin.createId());