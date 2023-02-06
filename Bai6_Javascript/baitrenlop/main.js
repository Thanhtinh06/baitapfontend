/* Variable */
/*
 - khai bao bien
 - console -> in ra console)
 - kiểu dữ liệu (data type)
  + String
  + Number
  + Boolean (true|false)
  + Undefined (tạo được biến không gán giá trị ban đầu, biến chưa xác định giá trị) -> dòng 30 cập nhật giá trị sau khi có giá trị
  + Null (biến có giá trị null)
  + Object (array trong js data type la object)

*/

var username = "Hello Voi";
console.log("username: " + username);

var firstName = "Nguyen";
console.log("firstnma: " + firstName);

var lastName = "Tinh";

var fullName = firstName + lastName;
console.log(fullName)

var age = 25;
console.log(age);

var isLogin = true;

var address;
address = "S2.03 Vinhomes";
console.log(address);

var classes = null;
console.log(classes)

/**
 * Hang so (constant) -> tạo ra phải gán giá trị liền
 * 
 */

const PI = 3.14;
// PI = 3.15; /*ra brower sẽ bị lỗi -> không cập nhật được giá trị mới bằng cách gọi lại biến và thay đổi giá trị*/

/**
 * Câu điều kiện (if | else, swich | case)
 */

var bt1 = true;
var bt2 = false;
var bt3 = true;

//&& (and)
console.log(bt1 && bt2 && bt3);

// || (or)
console.log(bt1 || bt2 || bt3);

// ! (phu dinh)
console.log(!bt2);
console.log(!bt2 && bt1 && bt3);

// Cau dieu kien if 
if (isLogin == false){
  //hanh dong
  console.log("isLogin-if: " + isLogin);
}else{
  console.log("isLogin-else: " + isLogin);
}


//toan tu 3 ngoi: dk ? "DK dung" : "DK sai"

isLogin == true ? console.log("right") : console.log("wrong"); /*dung khi if else 1 dong*/

// if else if 
/** === compare data type & value */
var number = 4;

// if (number === 1) {
//   console.log("This is number 1");
// }else if (number == 2) {
//   console.log("This is number 2");
// }else if (number == 3) {
//   console.log("This is number 3");
// }else {
//   console.log("wrong number");
// }

//Switch case

// switch (number) {
//   case 1:
//     console.log("This is number 1");
//     break;
//   case 2:
//     console.log("This is number 2");
//     break;
//   case 3:
//     console.log("This is number 3");
//     break;
//   default:
//     console.log("wrong number");
//     break;
// }

//Bai tap 
// var math = 9;
// var physical = 8;
// var chemical = 10;

// var average = (math + physical + chemical) / 3;
// console.log(average);
// var rank = "";
// if (9 <= average && average <= 10){
//   rank = "Excellent";
// }else if(8 <= average && average < 9){
//   rank = "Very Good";
// }
// else if(7 <= average && average < 8){
//   rank = "Good";
// }
// else if(5 <= average && average < 7){
//   rank = "Average";
// }else {
//   rank= "Blow Average"
// }

// console.log("This is rank of student: " + rank)

/**
 * Function (ham)
 * Hàm có tham số truyền vào
 * Hàm không có tham só truyền vào
 * Hàm có return
 * Hàm không return
 */

//khai báo hàm
function printInfor(user = "All"){
  //body function
  console.log("Hello " + user);
}
// var user1 = "Voi";
// var user2 = "Duong";
// printInfor(user1); // Gọi hàm (có thể gọi hàm trước hay sau khai báo hàm đều được)
// printInfor(user2); // tái sử dụng
// printInfor();


// function calculatedSum(a,b){
//   var total = a + b;
//   return total;

// }

// var sum = calculatedSum(5,10);
// console.log(sum);

//Viet lai ham cho bai diem tb

//Tinh diem
// function calculatedScore(math,physical,chemical){
//   var average = (math + physical + chemical) / 3
//   return average
// }

//Ham xep loai 
// function ranking(average){
//   var rank="";
//   if ( 9 <= average && average <= 10){
//     rank = "Exellent";
//   }
//   else if(8 <= average && average < 9){
//     rank = "Very Good";
//     }
//   else if(7 <= average && average < 8){
//     rank = "Good";
//     }
//   else if(5 <= average && average < 7){
//     rank = "Average";
//     }
//   else {
//     rank= "Blow Average";
//     }
//   return rank;
// }

// var dtb = calculatedScore(9,9,9);
// console.log("Loai la: " + ranking(dtb));
// console.log(dtb)

/**
 * Array
 */
// var listUsers = ["Voi","Duong","Fizz","Thuan","My"];
// console.log(listUsers)
// console.log("Độ dài của mảng listUsers: " + listUsers.length); //do dai cua mang
// console.log(listUsers[1]) //Lay phan tu theo index

// for (var i = 0; i < listUsers.length; i ++ ) {
//   console.log(listUsers[i]);
// }

