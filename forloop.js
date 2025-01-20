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
