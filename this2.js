let obj = {
    username : "vinit",
    age : 21,
    welcomemessage : function (){
console.log(`${this.username} sir`);
    }
}
obj.welcomemessage()
obj['username'] = "shail"
obj.welcomemessage()

// remove this keyword to see the difference
