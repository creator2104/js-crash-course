//Immediately Invoked Function Expression (IIFE)
//IIFE is used to remove global scope pollution
(function database(){
 console.log(`DB CONNECTED`);
})();

(framework = () =>{
 console.log(`framework CONNECTED`);
})();
// dont forget to use semicolon here

((name) =>{
 console.log(`structure created ${name}`);
})("for data");

// the function who have name its known as named IIFE