//commands for DOM

/*

  //access the element by class or id
  1.document is used to select whole page which we are designing

  2.document.getElementById('Name_of _your_id_or_class')  
  // its a method to access the whole element

  3.document.getElementById('Name_of _your_id_or_class').id
  // its a method to access perticular id name 

  4.document.getElementById('Name_of _your_id_or_class').className
  // its a method to access perticular class name and dont use .class use .className to access it

  5.document.getElementById('Name_of _your_id_or_class').getAttribute('class or id')
  //its use to access class or id

  6.document.getElementById('Name_of _your_id_or_class').setttribute('class or id','Name_of_your_new_class_or_id')
  //its used to set the class or id value

  7.document.getElementById('Name_of _your_id_or_class').setttribute('class','test heading')
  //it will set value of class by test and heading




  //styling manipulation
  
  8.const title = document.getElementById('Name_of _your_id_or_class') 
  //it would store its value in title

  9.title 
  //write title to access the value

  10.title.style.backgroundColor="green"
  //its used to set the bg color of title to green
  
  11.title.style.padding = "15px"

  12.title.style.borderRadius = "10px"




  //to access the and manipulate text property

  13.title.textContent
  14.title.innerHTML
  15.title.innerText
  //all of above are use to show the text in title (id and class)

  16.document.getElementById('Name_of_Id')
  16.document.getElementByClassName('Name_of_Class')




  //queryselector

  17.document.querySelector("h1")
  //used to select all h1 tag of document page
  //queryselecor will select only first value of it but queryselectorall will select all values
  
  18.document.querySelector("#title")
  //to select title id

  19.document.querySelector(".heading")
  //to select heading class
  
  19.document.querySelector("input(type="password")")
  //to select password 

  20.document.querySelector("p:first-child")
  //to select paragraph which have first-child

  21.const myul = document.querySelector("ul")
     const turngreen = myul.querySelector("li")
     turngreen.style.color = "orange"
     turngreen.padding = "15px"
  //used to change specific list color and padding value of ul

  22.turngreen.innertext = "five"
  //to change the value of text to five



  //queryselectorall

  23.document.querySelectorAll("li")
  //to select all li values from ul element
  //u will get the values in nodelist which have foreach ,not map method

  24.const templist = document.querySelectorAll("li")
  templist[0].style.color = "green"
  //to access element in nodelist use index values

  25.templist.forEach(function (L){
  L.style.backgroundColor = "green"
  })
  //we can use foreach method in nodelist 




  //HTMLCollection
  26.const tempClassList = document.getElementsByClassName("Name_of_class")
  //no looping included in HTMLCollection

  27.//you have to convert HTMLCollection into an array to apply loopin into it
  const myConvertedArray = Array.from(tempClassList)

  28.myConvertedArray.forEach(function(li){
  li.style.color = "orange",
  li.style.backgroundColor = "green",
  li.style.padding = "15px"
  })
  //u can apply anything on array

  
*/

// console.log(Math.floor(Math.random()*10+1));

const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max-min+1)+min));