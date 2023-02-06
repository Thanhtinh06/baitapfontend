// var user = document.getElementById("txtUser").value; //DOM toi id nao do
// console.log(user) 
// console.dir(document.getElementById("txtUser")) //xem tat ca thuoc tinh cua id dang lay

/**
 * ClickButton
 */

//GetElement de tuong tac vs no

//cach 1: bam vo nut
// document.getElementById("btnClick").onclick = function () {
//   var user = document.getElementById("txtUser").value; //DOM toi id nao do
//   console.log(user) 
// }

//cach 2: call back function: là 1 hàm có tham số(tham số đây là một hàm khác)
// addEnvent có 2 đối số, 1 là event, 2 là callback function

// document.getElementById("btnClick").addEventListener("click", function(){
//   var user = document.getElementById("txtUser").value;
//   console.log(user);
// });

//Cach3: tao function sau do qua html goi ham 

// function handClick(){
//   var user = document.getElementById("txtUser").value;
//   console.log(user);
// }

function sumNumber(a,b){
  var sum = a + b;
  return sum
}

document.getElementById("sumNumber").onclick = function (){
  var number1 = document.getElementById("number1").value * 1; //tu dong convert sang kieu int
  var number2 = document.getElementById("number2").value * 1;

  //convert data type: string => number;
  // var number1 = parseInt(number1);
  // var number2 = parseInt(number2);

  var total = number1 + number2;

  console.log("Sum is: "+ total);
  var result = " The result is :" + total;
  document.getElementById("pNoti").innerHTML = result;

  //style pNoti -> style inline
  // document.getElementById("pNoti").style.backgroundColor = "red";
  // document.getElementById("pNoti").style.color = "white";

  //style pNoti theo className
  // document.getElementById("pNoti").className = "noti"; //se xoa het tat ca cu thay the bang class moi

  //style pNoti Classlist
  document.getElementById("pNoti").classList.add("noti");
}

document.getElementById("btn-off").onclick = function () {
  document.getElementById("bulb").src = "./images/pic_bulbon.gif";
}

document.getElementById("btn-on").onclick = function () {
  document.getElementById("bulb").src = "./images/pic_bulboff.gif";
}

document.getElementById("btnDis").onclick = function () {
  document.getElementById("btn-on").disabled = true; //disables button On;
}
document.getElementById("btnUnDis").onclick = function () {
  document.getElementById("btn-on").disabled = false; //disables button On;
}

//TagName

var tagName = document.getElementsByTagName("input");
console.log(tagName[0].value)  //DOM theo tagName => result tra ve dang mang -> lay theo index

//ClassName 

var className = document.getElementsByClassName("btn");
console.log(className.value) 

//Query Selector

var querySelector =document.querySelector("#myDiv #btn-on");
console.log(querySelector); //DOM theo seletor


var querySelectorAll =document.querySelectorAll("#myDiv .btn");
console.log(querySelectorAll); //DOM theo seletor all

var lstNumber = [];
lstNumber.push(5);
lstNumber.push(50);
lstNumber.push([10,15]);
console.log(lstNumber);

//Concat
var arr1 = ["Voi,Duong"];
var arr2 = ["Fizz,Thuan"];
var arr3 = arr1.concat(arr2);
console.log("arr1: " + arr1);
console.log(typeof[arr1]);
console.log("arr3 : " + arr3);
console.log(typeof[arr3]);
console.log(arr3[0]);
//copyWithin

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newFruits = fruits.copyWithin(2,0,2);
console.log("Copy: " + newFruits);

//entries
const fruit = ["Banana", "Orange", "Apple", "Mango"];
const f = fruit.entries();
for (let i of f) {
  console.log("entries obj: " + i)
  console.log("entries key : " + i[0])
  console.log("entries value: " + i[1])
}
