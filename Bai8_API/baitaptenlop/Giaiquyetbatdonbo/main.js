/**
 * Tính dt hình thang: (a + b) * h / 2
    API Cong: a, b
    API Nhan: ab h
    API Chia: abh / 2

    total = ?

    => Callback function (ES5)
    => Promise (ES6)
    => Async await (ES7)
 */


// callBack Funcion

function theFirst(callBack){
  setTimeout(function() {
    console.log("First");
  },1000);  //1000-> miligiay
  callBack();
}

function theSecond(){
  console.log("Second");
}

theFirst(theSecond);
