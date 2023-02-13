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

function dtht(a, b, h) {
  return apiCong(a, b)
    .then(function (result) {
      return apiNhan(result, h);
    })
    .then(function (result) {
      return apiChia(result, 2);
    });
}

dtht(1, 2, 4).then(function (result) {
  console.log("Dien tich hinh thang: ", result);
});
