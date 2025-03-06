const PromiseOne = new Promise (function(resolve,reject){
    setTimeout(() => {
        console.log("Async task is completed");
        let error = true
        if(!error){
            resolve(()=>console.log("resolved succesfully"))
        }
        else{
            reject(()=>console.log("ERROR : Error detected"))
        }
    }, 2000);
})

// PromiseOne.then(function(){
//     console.log("Promise one created");
// }).catch(function(){
//     console.log("Error detected");
// }).finally(function(){
//     console.log("Task would be ended here");
// })

async function funcpromise() {
   try {
    const response = await PromiseOne
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

funcpromise()