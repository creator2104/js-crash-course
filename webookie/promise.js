let a = undefined
let b = 20
let ans 

new Promise((resolve, reject) => {
    setTimeout(() => {
        if (a == undefined || b == undefined) {
            reject()
        } else {
            ans = a + b 
            resolve()
        }
    }, 5000);
}).then(()=>{
    console.log(ans);
}).catch(()=>{
    console.log("something went wrong");
})