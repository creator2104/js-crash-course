// call 

let obj1 = {
    firstname : "Rohan",
    lastname : "chauhan",
}

let obj2 = {
    firstname : "Ankit",
    lastname : "pundir"
}

let obj3 = {
    print_full_name: function(num,num2){
        console.log(this.firstname + " " + this.lastname);
        console.log(num + " " + num2);
      }
}

// obj3.print_full_name.call(obj1 ,10,20)

//apply
obj3.print_full_name.apply(obj1 ,[10,30])

