// promiseOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // console.log('Async task is completed');
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function () {
//     // console.log('Promise consumed');
// })

// //else u can write like this
 
// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // console.log('Async task 2 is completed');
//         resolve()
//     }, 1000);
// }).then(() => {
//     // console.log('Async2 resolved');
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai",email:"chai@example.com"})
//     },1000)
// })

// promiseThree.then((user)=>{
//     // console.log(user);
// })

// const promiseFour = new Promise(function (resolve,reject) {
//     setTimeout(function() {
//         let error = true
//         if (!error) {
//             resolve({username:"hitesh",password:"123"})
//         }else{
//             reject("ERROR : Something went wrong")
//         } 
//     },1000)
// })

// promiseFour.then(function(user){
//    console.log(user);
//    return user.username
// }).then(function(username){
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");
// }) 

// const promiseFive = new Promise (function(resolve,reject){
//     setTimeout(function() {
//         let error = true
//         if (!error) {
//             resolve({username:"javascript",password:"123"})
//         }else{
//             reject("ERROR : JS went wrong")
//         } 
//     },1000)
// })

// async function cosnumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// cosnumePromiseFive()



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getAllUsers()


// fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
//     return response.json()
// }).then((data)=>{
//  console.log(data);
// }).
// catch((error)=>console.log(error))

// example from stackoverflow

// let AuthUser = function(data) {
//     return google.login(data.username, data.password).then(token => { return token } )
//   }
  
//   let userToken = AuthUser(data)
//   console.log(userToken) // Promise { <pending> }
  
//   userToken.then(function(result) {
//      console.log(result) // "Some User token"
//   })

