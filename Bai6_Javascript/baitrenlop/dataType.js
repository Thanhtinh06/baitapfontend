//Declare variable

/**
 * var
 */

//before
// console.log("number 1 before declare: " + number1)
// console.log("type of number 1 before declare: " + typeof number1)
// var number1 = 1;
//after
// console.log("number 1 after declare: " + number1)
// console.log("type of number 1 after declare: " + typeof number1)
// number1 = "3";
// //change value number 1
// console.log("number 1 after change value: " + number1)
// console.log("type of number 1 after change value: " + typeof number1)
// // redeclare number 1
// var number1 = true;
// console.log("number 1 after redeclare: " + number1)
// console.log("type of number 1 after redeclare: " + typeof number1)
// // change value after redeclare number 1
// number1 = 2;
// console.log("number 1 after redeclare and change value: " + number1)
// console.log("type of number 1 after redeclare and change value: " + typeof number1)

/**
 * let
 */

// console.log("number 2 before declare: " + number2)
// console.log("type of number 2 before declare: " + typeof number2)
let number2 = 0;
//after
console.log("number 2 after declare: " + number2)
console.log("type of number 2 after declare: " + typeof number2)
number2 = "3";
//change value number 2
console.log("number 2 after change value: " + number2)
console.log("type of number 2 after change value: " + typeof number2)
// redeclare number 2
// let number2 = 3;
// console.log("number 2 after redeclare: " + number2)
// console.log("type of number 2 after redeclare: " + typeof number2)
// // change value after redeclare number 2
// number2 = 2;
// console.log("number 2 after redeclare and change value: " + number2)
// console.log("type of number 2 after redeclare and change value: " + typeof number2)


/**
 * Function scoped
 */

// program to print text
// variable a cannot be used here
function greet() {
  // variable a can be used here
  var a = 'hello';
  console.log(a);
}
// variable a cannot be used here

greet(); // hello


// program to print the text
// variable a cannot be used here
function greet2() {
  let a = 'hello';
  let b = 'w';

  // variable b cannot be used here
  if(a == 'hello'){
      // variable b can be used here
      let b = 'world';
      console.log(a + ' ' + b);
      console.log('blocked scope: ' + b)
  }

   // variable b cannot be used here
  console.log('funcion: ' + b);
  console.log(a + ' ' + b); // error
}
// variable a cannot be used here

greet2();

/**
 * var and let in for loop
 */

//var
var a = 2;
for(var a = 0; a < 3; a++) {
    console.log('var: '+ a);
}
console.log(a); // 3


//let

// let b = 2;
// for(let b = 0; b < 3; b++) {
//     console.log('let: ' + b);
// }
// console.log(b); // 3






// //string
// let message1 = "hello";
// console.log('message1: ', message1)
// console.log('type of message1: ',typeof message1)
// console.log(message1.toUpperCase())
// console.log(message1[0]);


// //string
// let message2 = String("hello");
// console.log('message2: ', message2)
// console.log('type of message2: ',typeof message2)
// console.log(message2.toUpperCase())
// console.log(message2[0]);

// //String object
// let message3 = new String("hello");
// console.log('message3: ', message3)
// console.log('type of message3: ',typeof message3)
// console.log(message3.toUpperCase())
// console.log(message3[0]);

