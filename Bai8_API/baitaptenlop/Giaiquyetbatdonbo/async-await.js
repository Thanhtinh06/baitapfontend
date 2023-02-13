function apiCong(a, b) {
  var promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(a + b);
    }, 1000);
  });
  return promise;
}

function apiNhan(a, b) {
  var promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(a * b);
    }, 1000);
  });
  return promise;
}

function apiChia(a, b) {
  var promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(a / b);
    }, 1000);
  });
  return promise;
}

async function dtht(a,b,h){
  let ab = await apiCong(a,b);
  let abh = await apiNhan(ab,h);
  let abh2 = await apiChia(abh,2);
  console.log("Dien tich hinh thang: ", abh2)
}

dtht(1,2,4);