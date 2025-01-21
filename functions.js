function maketea(typeoftea){
    return `making ${typeoftea}`
}
let tea = maketea('black tea')
// console.log(tea);

function orderTea (teaType){
  function confirmOrder (){
    return `order confirmed for chai`
  }
   return confirmOrder()
}
console.log(orderTea('chai'));


