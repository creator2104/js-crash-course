// arrays are stored like an object 
let languages =['c' , 'cpp' , 'java' , 'python' , 'js']
const preferredlang = languages[4]
// console.log(preferredlang);

let cities = ['london' , 'tokyo' , 'new york' , 'paris']
const favouritecity = cities[2]
// console.log(favouritecity);

let teatypes = ['herbal tea' , 'white tea' , 'masala chai']
teatypes[1] = 'jasmine tea'
// console.log(teatypes);

let citiesvisited = ['Mumbai' , 'Sydney']
citiesvisited.push("Berlin")
// console.log(citiesvisited);

let teaOrders = ['chai' , 'iced tea' , 'matcha' , 'earl grey']
const lastorder = teaOrders.pop()
// console.log(teaOrders);
// console.log(lastorder);

let popularTeas = ['green tea' , 'oolong tea' , 'chai']
let softCopyTeas = popularTeas
// softcopy of popularteas
// console.log(softCopyTeas);

let topCities = ["Berlin" , "Singapore" , "New York"]
let hardCopyCities = [...topCities]
// hardcopy of topcities
hardCopyCities.pop()
// console.log(hardCopyCities);
// console.log(topCities);

earupeanCities = ['Paris' , 'Rome']
asiancities = ['Tokyo' , 'Bangkok']
// worldCities = earupeanCities + asiancities
// that's not a good way to define addition of an array
worldCities = earupeanCities.concat(asiancities)
// console.log(worldCities);
// dont use concat for multiple arrays
// use ... 
let allcities = [...earupeanCities , ...asiancities , ...topCities]

let teaMenu = ['Masala chai' , 'oolong tea' , 'green tea' , 'earl grey']
// console.log(teaMenu.length);

let cityBucketList = ['kyoto' , 'London' , 'Cape Town' , 'Vancouver']
console.log(cityBucketList.includes('London'));

