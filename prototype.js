let myname = "vinit   "

console.log(myname.truelength);

let myheros = ["thor","spiderman"]
let heropower = {
     thor: "hammer",
     spiderman : "sling",
     getSpiderPower:function () {
        console.log(`spidy power is ${this.spiderman}`);
     }
} 

Object.prototype.vinit = function () {
    console.log(`vinit is present in all object`);
}

heropower.getSpiderPower()
heropower.vinit()
myheros.vinit()


Array.prototype.hellovinit = function () {
    console.log(`hey vinit i am here`);
}

myheros.hellovinit()
// heropower.hellovinit()


//inheritence
const user = {
    name  : "malay",
    email : "malay223@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

console.log(TAsupport);

Teacher.__proto__ = user

// modern property
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotheruser = "ChaiAurCode      "

String.prototype.truelength = function(){
    console.log(this);
    console.log(`The true length is : ${this.trim().length}`);
}

anotheruser.truelength()
"hitesh             ".truelength()
"vinit             ".truelength()