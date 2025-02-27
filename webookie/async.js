let p = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("hey guys this is set timeout");
        resolve()
    }, 5000);
})

async function addme() {
     let a = 10 
     let b = 20 
     console.log(a+b);
     await p 
     console.log("after promise");
}

// if we want .then and .catch functionality in function the n use async 
// await is used for executing promise data

addme().then(() => {
    console.log("completed");
}).catch(() => {
    console.log("something went wrong");
});
