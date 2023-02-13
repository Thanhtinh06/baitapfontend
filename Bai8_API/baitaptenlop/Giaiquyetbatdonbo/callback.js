function apiPlus(a,b,callBack){
    setTimeout(function(){
      callBack(a+b);
    },1000);
}


function apiNhan(a,b,callBack){
  setTimeout(function(){
    callBack(a*b);
  },1000);
}

function apiChia(a,b,callBack){
  setTimeout(function(){
    callBack(a/b);
  },1000);
}

function dtht(a,b,h, callBack){
  apiPlus(a,b,function(result){
    apiNhan(result,h,function(result){
      apiChia(result,2,function(result){
        callBack(result)
      })
    })
  })
}

dtht(1,2,4,function(result){
  console.log("Dien tich hinh thang: ", result)
})