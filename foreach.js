Cities = ['Berlin' , 'Paris' , 'Tokyo' , 'Sydney' , 'gnr']
traveledCities = []
Cities.forEach((cty,index,Cities) => {
    if(cty==='Sydney'){
        return 
    }
    traveledCities.push(cty)
    console.log(traveledCities , index ,Cities);
});