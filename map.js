const map = new Map()
map.set ("IN","India")
map.set ("FR","France")
map.set ("USA","United states of america")
map.set ("IN","India")
// console.log(map);
// map cant be iterate
// map dont repeat the value in it 

for (const [key,value] of map) {
    // console.log(key , ':-' , value);
}

// const myObject = {
//     game1 : "NFS",
//     game2 : "Spiderman"
// }
// for (const [key,value] of myObject) {
//     console.log(key , ':-' , value);
// }
// u cant access object directly like this u have to convert it into an array then it would be easy 

const myObject2 = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift :  'swift by apple'
} 
for (const key in myObject2) {
    // console.log(key);
    // console.log(myObject2[key]);
    console.log(`${key} shortcut is for ${myObject2[key]}`);
}

const programming = ['js','rb','java','cpp','py']

for (const key in programming) {
   console.log(programming[key]);
}

programming.forEach(value => {
    console.log(value);
});

function printMe (item){
    console.log(item);
}
programming.forEach(printMe)

const mycoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

mycoding.forEach((item) =>{
    console.log (item.languageName)
})