Cities = ['Berlin' , 'Paris' , 'Tokyo' , 'Sydney' , 'gnr']
traveledCities = []
Cities.forEach((cty,index,Cities) => {
    if(cty==='Sydney'){
        return 
    }
    traveledCities.push(cty)
    // console.log(traveledCities , index ,Cities);
});

numbers = [2,4,5,6,8,7]
numbers.forEach(num=> {
    console.log(num*num);
});

num = 4
if(num%2===0){
    // console.log("Your number is an even number");
}
else{
    console.log("Your number is not an even");
}

let gamenum = 25
let num = prompt("Guess the game number")
while(num != gamenum){
    num=console.log("Your choice of number is wrong . Select it again");
}
console.log("Your choice of number is correct");

