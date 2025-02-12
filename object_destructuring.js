const course = {
    coursename : "js in hindi",
    price : 999,
    courseInstructor : "Hitesh"
}

// course.courseInstructor
// instead of this use below one 
let{courseInstructor:Instructor} = course
// if any text is being written in curlybraces then consider it in destructuring 
console.log(Instructor);