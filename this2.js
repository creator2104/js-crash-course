let obj = {
  username: "vinit",
  age: 21,
  welcomemessage: function () {
    console.log(`${this.username} sir`);
    console.log(this);
  },
};
obj.welcomemessage();
obj["username"] = "shail";
obj.welcomemessage();

console.log(this);

// remove this keyword to see the difference
