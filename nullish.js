// Nullish Coalescing operator ?? 

let val1 =7

val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1);

val1 = undefined ?? 10
console.log(val1);

val1 = null??10??20
console.log(val1);

val1 = null ?? undefined
console.log(val1);

val1 = undefined ?? null
console.log(val1);

// ternary operator 
// condition ? true : false 
const fees = 300
fees>500 ? console.log("greater than 500") : console.log("less than 500");