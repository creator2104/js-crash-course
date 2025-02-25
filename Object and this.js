// function multiplyBy5(num) {
//     this.num = num
//     return num*5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5);
// console.log(multiplyBy5.prototype);
// console.log(multiplyBy5.power);

// console.log(multiplyBy5(3));

function CreateUser(username,score) {
    this.username = username
    this.score = score
}

CreateUser.prototype.increment = function () {
    this.score++  //jisne bhi call kiya uska score increment kardo (this means jis)
}

CreateUser.prototype.PrintMe = function () {
    console.log(`price is ${this.score}`);
}

const chai = new CreateUser("chai",50)
const Tea = new CreateUser("Tea",250)
chai.PrintMe()
Tea.PrintMe()