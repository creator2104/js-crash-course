function addTwoNumbers(Number1,Number2){
    // console.log(Number1+Number2);
}
addTwoNumbers(3,4)
addTwoNumbers(3,null)

function AddTwoNumbers(num1,num2){
    return num1 + num2
}
// console.log(addTwoNumbers(2,3));

function loginUserMessage(username){
    if (username===undefined)
        //(!username) 
    {
        console.log(`Please enter your username`);
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("vinit"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());
// if u dont want above kinda condition then pass your value in parameter 

function calculateCartPrice(val1 ,val2,...num3){
    return num3
}
console.log(calculateCartPrice(200,300,400,344));

// func for object
const user= {
    name : "vinit",
    age : 20
}

function handleobject(anyobject){
   console.log(`username is ${anyobject.name} and age of person is ${anyobject.age}`);
}
// handleobject(user)

handleobject({
    name : "viraj",
    age : 15
})

// func for array 
const numArr = [20,30,50,60]

function returnvalue(value){
   return value[2]
}
console.log(returnvalue (numArr));
console.log(returnvalue ([200,300,400]));