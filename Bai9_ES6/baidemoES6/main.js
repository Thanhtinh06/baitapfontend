import { caculateSum } from "./test.js";
import Me from "./oop.js";

/**
 * Khai bao bien
 */

caculateSum(2,3);

let sumTwo = caculateSum(2,3);;
console.log(sumTwo);

function foo(){
    var x = 10; 
    if(true){
        var x = 20;
        console.log(x);
    }
    console.log(x);
}

function foo2(){
    let x = 10; 
    if(true){
        let x = 20;
        console.log(x);
    }
    console.log(x);
}

// // i = 3 => i được khai báo bằng var (var function scope)
// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
// //lỗi i khai báo bằng let (let block scope)
// console.log(i);

/**
 * Arrow function
 */

function demoFunc(name){
    console.log("demoFunc" + name);
}
let name = "Duong";

//syntax Arrow Function
const demoArrowFuncRoot = (agr1,agr2) => {
    return agr1 * agr2
}

//một tham số không cần dấu ngoặc nếu nội dung trong thân hàm có 1 dòng có thể bỏ dấu ngoặc nhọn
const demoArrowFnc = name => console.log("demoArrowFnc "+name);

// Ko cần return khi viết theo cách này (nhưng vẫn return về giá trị), viết return thì phải có dấu ngoặc nhọn
const getNumber = number => number * 2;

console.log(getNumber(3));


// const sv = {
//     fullname : "Cybersoft",
//     age: 5,
//     getInforSV : function(){
//         //cach1: gan lai this
//         // const _this = this;
//         // function displayinfo(_this){
//         //     console.log("Full name: " + _this.fullname + " Age: " + _this.age)
//         // }
//         // displayinfo(_this);

//         //cach 2: bind
//         // function displayinfo(){
//         //     console.log("Full name: " + this.fullname + " Age: " + this.age)
//         // }
//         // const bindDisplayInfo = displayinfo.bind(this);
//         // bindDisplayInfo();

//         //cach 3
//         const displayinfo = () => "Full name: " + this.fullname + " Age: " + this.age;

//     }
// }
// sv.getInforSV();

/**
 * Default params
 */

const getInfo = (name="Duong",age=8) => {
    console.log(name,age)
}

getInfo();

/**
 * Rest params: truyền tham số không xác định
 */

// ...number = [arg1,arg2,arg3...]
const sum = (...numbers) => {
    // let sumNum = 0
    // numbers.forEach(number => sumNum += number)
    // return sumNum

    /*Reduce Duyệt mảng theo từng phần tử. (Tích lũy) 
    - Agr1: arrow Function (có 2 Agr)
        + total : biến tích lũy
        + number : phần tử mảng (poiter)
    - Agr2: giá trị ban đầu của biến total
    */
    return numbers.reduce((total, number)=>{
        return (total += number);
    },0)
}

console.log(sum(2,5,3,1));

/**
 * Spread Operator: copy Object
 */

let arrayA = [1,2,3];
let arrayB = [...arrayA];

// console.log(arrayA);
// console.log(arrayB);

// arrayB.push(4,5);
// console.log(arrayB);
// console.log(arrayA);


const objUser = {
    name: "Voi",
    age : 25,
}

const objUser2 = {...objUser};

// console.log(objUser);
// console.log(objUser2);
// objUser2.color = "pink";
// console.log(objUser);
// console.log(objUser2);

/**
 * Destructuring : Bóc tách dữ liệu trong object và array
 */

const listUser = ["Voi","Fizz","Duong"];
console.log(listUser[1]);
const [user1,user2,user3] = listUser;

const people = {
    address: "Vinhomes",
    phone : "0943165280"
}

// Phải ghi đúng tên trong obj
const {address,phone} = people;
console.log(address,phone);

/**
 * string template
 */

const content = "CyberSoft";
const result = `Hello ${content}`;

/**
 * Object literals
 */

const firstName = "Nguyen";
const lastName = "Tinh";
const person = {
    firstName, // viet tat tu firstName: firstName
    lastName, // lastName: lastName

}
console.log(person);

/**
 * for of
 * for in
 */

const listFruits = ["Apple","Orange","Banana"];
for(let item of listFruits){
    console.log(item);
}
for(let index in listFruits){
    console.log(index);
}
//lay ca value vs index
listFruits.forEach((item,i)=>{
    console.log(item,i)
})

//map() dùng để duyệt mảng qua từng phần tử và trả về mảng mới
const newList = listFruits.map((item,i) => {
    return item + i;
})

console.log(newList);

const me = new Me();
me.colorEyes();