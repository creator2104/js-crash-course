let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(typeof mydate);

let mycreated_date = new Date(2025,0,21)
// console.log(mycreated_date.toDateString());
let myowndateandtime = new Date(2024,21,7,5,30)
// console.log(myowndateandtime.toLocaleString());
let newdate = new Date("04-21-2004")  //mm-dd-yyyy or yyyy-mm-dd
// console.log(newdate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate2 = new Date("11-21-2004")
console.log(newdate2.getMonth() + 1);
console.log(newdate2.getDate());

newdate.toLocaleString('default',{
    weekday:'long'
})