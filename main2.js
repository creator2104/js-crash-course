// let a = 5
// let b = 2
// console.log('a = ' , a , ' & b =' , b);
// console.log('a+b = ',a+b);

// let num = prompt('Enter a number')

// if(num%5==0){
//     console.log(num , ' is multiple of 5');
// }
// else{
//     console.log(num , 'is not multiple of 5');
// }

let grade = prompt("Enter your score(0-100):")
if(grade>=80 && grade<=100)
{
    console.log('Your grade is A');
}
else if(grade<=79 && grade>=70){
    console.log('Your grade is B');
}
else if(grade<=69 && grade>=60){
    console.log('Your grade is C');
}
else if(grade<=59 && grade>=50){
    console.log('Your grade is D');
}
else{
    console.log('Your grade is F');
}

