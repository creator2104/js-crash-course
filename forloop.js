let teacollection = ['green tea','black tea','chai','oolong tea']
let selectedTeas = []
for (let i = 0; i < teacollection.length ; i++) {
    if (teacollection[i]==='chai') {
     break;   
    }
   selectedTeas.push(teacollection[i])
}
// console.log(selectedTeas);

let citites = ['london' , 'new york' , 'paris' , 'berlin']
visitedCities = []

for (let i = 0; i < citites.length; i++) {
    if(citites[i]==='paris')
    {
        continue;
    }
    visitedCities.push(citites[i])
}
// console.log(visitedCities);

numbers = ['1','2','3','4','5']
smallNumbers=[]

for (const num of numbers) {
    if(num==='4')
    {
        break;
    }
    smallNumbers.push(num)
}
// console.log(smallNumbers);

teas = ['chai' , 'green tea' , 'herbal tea' , 'black tea']
teaCollection = []
for (const tea of teas) {
    if(tea==='herbal tea'){
        continue
    }
    teaCollection.push(tea)
}
// console.log(teaCollection);

let cititesPopulation={
    'London':8900000,
    'New York':8400000,
    'Paris':2200000,
    'Berlin':3500000
}
let cityNewP={}
// console.log(Object.values(cititesPopulation));

for (const city in cititesPopulation) {
//    console.log(cititesPopulation[city]);
// we want key and value both
if(city==='berlin' || city==='Berlin'){
    break
} 
 cityNewP[city] = cititesPopulation[city]
}
// console.log(cityNewP);
  

let worldCities = {
    'Sydney' : 5000000,
    'Tokyo' : 9000000,
    'Berlin' : 3500000,
    'Paris' : 2200000,
}
let largeCities = {}
for (const population in worldCities) {
  if (worldCities[population] < 3000000){
    continue
  }
  largeCities[population] = worldCities[population]
}
// console.log(largeCities);

let teaCollection = ['earl grey' , 'green tea' , 'chai' , 'oolong tea']
let availableTeas = []

teaCollection.forEach(tea => {
    if(tea==='chai'){
        return
    }
    availableTeas.push(tea)
    // console.log(tea);
});

Cities = ['Berlin' , 'Paris' , 'Tokyo' , 'Sydney' , 'gnr']
traveledCities = []
Cities.forEach(cty => {
    if(cty==='Sydney'){
        return 
    }
    traveledCities.push(cty)
});
console.log(traveledCities);

num = [2,5,7,9]
doubledNumbers = []
for(i=0;i<=3;i++){
    if(num[i] === 7){
        continue
    }
    doubledNumbers.push(num[i]*2)
}
// console.log(doubledNumbers);

Teas = ['chai' , 'green tea' , 'black tea' , 'jasmine tea']
shortTeas = []
for (const tea of Teas) {
    if(tea.length > 10){
        break
    }
     shortTeas.push(tea)
} 
// console.log(shortTeas);
