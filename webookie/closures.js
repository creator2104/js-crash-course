let create_a = () => {
    let a = 1 
   return function increment_a () {
         a = a + 1 
         console.log(a);
   } 
}

let n = create_a();
n()
n()
n()
n()
n()
