const user = {
    username : "Hitesh",
    price : 999,
    welcomeMessage: function (){
        // this is used to reference current context
        // it  would not work in arrow functions
        console.log(`${this.username},welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// copy and paste above line in browser console to see the difference between nodejs engine and browser engine
// browser have global object window 

function one (){
    let user = "vinit"
    console.log(this);
    console.log(this.user);
}
one()

const chai = function (){
    let user = "vinit"
    console.log(this.user);
}

chai ()

const chai1 = () => {
    let user = "vinit"
    console.log(this.user);
    console.log(this);
}
chai1 ()
