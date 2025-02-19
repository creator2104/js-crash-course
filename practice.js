const coding = ['js','rb','cpp','java','php','python']
coding.forEach((item)=>{
    // console.log(item);
})

const myNums = [1,2,3,4,5,6,7,8,9,10]

let newarr = myNums.filter((num) => num>4)
// console.log(newarr);

const newNums = []

myNums.forEach(item => {
    if(item>4){
    newNums.push(item);
    }
});

const newnums = myNums.map((num) => {
return num+10
})
console.log(newnums);
