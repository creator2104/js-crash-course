// function maketea(typeoftea){
//     return `making ${typeoftea}`
// }
// let tea = maketea('black tea')
// console.log(tea);

// function orderTea (teaType){
//   function confirmOrder (){
//     return `order confirmed for ${teaType}`
//   }
//    return confirmOrder()
// }
// console.log(orderTea("chai"));

// var x=1 
// a()
// b()
// console.log(x);

// function a(){
//   var x = 100
//   console.log(x);
// }

// function b(){
//   var x = 10
//   console.log(x);
// }

// arrow function 
const calculateTotal = (price , quantity) => {
  let totalcost = price * quantity
  return totalcost
}
// console.log(calculateTotal(200,30));

function stringToNumber (){
      str = prompt("Enter a string")
      if(str===typeof(String)){
        return stringToNumber(`you have entered a string`)
      }
      else{
        return stringToNumber(`${str} is not a number`)
      }
}