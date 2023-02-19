document.querySelector("form").onsubmit = (e) => {
  e.preventDefault(); //Chặn reload browser
  let arrInput = document.querySelectorAll("form input, form select");
  console.log(arrInput);
  let employee = {};
  for (let input of arrInput) {
    let { id, value } = input;
    employee[id] = value;
  }
  console.log(employee);
  //<tr><td>1</td><td>Nguyễn văn a</td></tr>
  let trEmployee = "<tr>";
  for (let key in employee) {
    trEmployee += `<td>${employee[key]}</td>`;
  }
  trEmployee += "</tr>";
  document.querySelector("tbody").innerHTML = trEmployee;
};

let arrProduct = [
  { id: 1, name: "Iphone", price: 1000, type: "Phone" },
  { id: 2, name: "Iphone 14Pro", price: 1250, type: "Phone" },
  { id: 3, name: "Macbook M1 Pro", price: 1500, type: "Laptop" },
  { id: 4, name: "Macbook M2 Pro", price: 1750, type: "Laptop" },
  { id: 5, name: "IPad Pro", price: 1200, type: "Tablet" },
  { id: 6, name: "IPad Mini", price: 1100, type: "Tablet" },
];

/**
 * Filter(): lọc các element trong array thỏa tiêu chí trong callback function truyền vào. Return về 1 arr
 */

// cách basic
function getPhone() {
  let arrPhone = [];
  for (let index = 0; index < arrProduct.length; index++) {
    if (arrProduct[index].type === "Phone") {
      arrPhone.push(arrProduct[index]);
    }
  }
  return arrPhone;
}
//filter
let arrPhoneResult = arrProduct.filter((product) => product.type === "Phone");
let arrPhonePrice = arrProduct.filter(
  (product) => product.price >= 1250 && product.price <= 1500
);

// console.log(arrPhoneResult);
console.log(arrPhonePrice);
// console.log(getPhone());

/*
  find(): tương tự hàm filter tuy nhiên kết quả trả về là phần tử đầu tiên tìm thấy, nếu có phần tử nào thoả điều kiện sẽ trả về undefined
  Thường dùng cho các thuộc tính định danh(primary key)
*/
let prodDetail = arrProduct.find((prod) => prod.id === 6);

if (prodDetail) {
  prodDetail.price = 2100;
}
console.log(arrProduct);
/*
  findIndex: Tương tự hàm find tuy nhiên kết quả trả về là vị trí (index). Nếu không có phần tử nào phù hợp với điều kiện thì trả về -1 (thường dùng để xóa phần tử)
*/

let indexDel = arrProduct.findIndex((prod) => prod.id === 6);
if (indexDel !== -1) {
  arrProduct.splice(indexDel, 1);
}
console.log("ArrProduct after del: ", arrProduct);

/*
  foreach: Tương tự for in và for of dùng để thực hiện công việc gì đó trên các element. Tuy nhiên không hỗ trợ cho nodelist (DOM query seletor return Nodelist)
*/

/**
 * Map(): dùng để biến đổi arr này thành arr khác
 */

// let arrProduct = [
//   {id:1,name:'Iphone',price:1000, type:'Phone'},
//   {id:2,name:'Iphone 14Pro',price:1250, type:'Phone'},
//   {id:3,name:'Macbook M1 Pro',price:1500, type:'Laptop'},
//   {id:4,name:'Macbook M2 Pro',price:1750, type:'Laptop'},
//   {id:5,name:'IPad Pro',price:1200, type:'Tablet'},
//   {id:6,name:'IPad Mini',price:1100, type:'Tablet'}
// ];

/*
  [{value:1,text:'IPhone'}]
*/

let newArr = arrProduct.map((prod, index, oldArr) => {
  return { value: prod.id, text: prod.name };
});
console.log(newArr);

let arrDiv = arrProduct.map((prod) => {
  var domElement = document.createElement("div");
  domElement.className = "m-2 alert alert-danger";
  domElement.innerHTML = `name: ${prod.name} - price: ${prod.price}`;
  return domElement;
}); // [div,div,div]

//append có thể append nhiều phần tử dưới dạng rest param; đã giải nén thành các phần tử
//appendChild => append 1 phần tử
document.querySelector("#prod-list").append(...arrDiv);

/*
  reduce: là hàm dùng để biến đổi array thì 1 giá trị (number,string,object, array, ...)
*/

//Yêu cầu: tính tổng tiền tất cả sản phẩm trong mảng

let tongTien = arrProduct.reduce((giaTriCongDon, prod) => {
  giaTriCongDon += prod.price;
  return giaTriCongDon; //1000 2250 3750
}, 0);

console.log("tongTien", tongTien);

let htmlString = arrProduct.reduce((giaTri, prod) => {
  return (giaTri += `<div class="alert alert-success">Product name:${prod.name} - price: ${prod.price}</div>`);
}, "");

document.querySelector("#prod-list").innerHTML = htmlString;

//reverse: đảo ngược mảng gốc (muốn không ảnh hưởng thì phải clone ra )
let arrClone = [...arrProduct];

arrClone.reverse();
console.log(arrProduct);
console.log(arrClone);

//sort: là hàm dùng để sắp xếp mảng
let orderByPrice = arrProduct.sort((prod, proPrev) => {
  let pricePrevProd = proPrev.price;
  let priceProd = prod.price;
  if (pricePrevProd >= priceProd) {
    //Nếu giá tiền sản phẩm trước lớn hơn sau  => sai return số âm (sxep tăng dần)
    return -1;
  }
  return 1;
});

console.log("orderByPrice", orderByPrice);

let orderByName = arrProduct.sort((prod, proPrev) => {
  let namePrevProd = proPrev.name.toLocaleLowerCase();
  let nameProd = prod.name.toLocaleLowerCase();
  if (namePrevProd >= nameProd) {
    //Nếu giá tiền sản phẩm trước lớn hơn sau  => sai return số âm (sxep tăng dần)
    return -1;
  }
  return 1;
});

console.log(_); //_ đại diện cho function

/**
 * Dung thu vien Lodash
 */
let orderName = _.orderBy(arrProduct, ["name"]);
console.log(orderName);

let orderPriceName = _.orderBy(arrProduct, ["price", ["name"]]); //agr2: sắp xếp theo: price -> nếu bằng nhau thì sắp xếp theo name
console.log(orderPriceName);

//so sánh 2 object === nhau
let obA = { id: 1, name: "A", phone: { number: 123 } };
let obB = { phone: { number: 123 }, name: "A", id: 1 };

console.log(_.isEqual(obA, obB));

let arrProductNew = [
  { id: 1, name: "Iphone", price: 1000, type: "Phone" },
  { id: 2, name: "Iphone 14Pro", price: 1250, type: "Phone" },
  { id: 3, name: "Macbook M1 Pro", price: 1500, type: "Laptop" },
  { id: 4, name: "Macbook M2 Pro", price: 1750, type: "Laptop" },
  { id: 5, name: "IPad Pro", price: 1200, type: "Tablet" },
  { id: 6, name: "IPad Mini", price: 1100, type: "Tablet" },
];

let renderTable = (arrPrd) => {
  let result = arrPrd.reduce((htmlValue, prod) => {
    return (htmlValue += `<tr>
          <td>${prod.id}</td>
          <td>${prod.name}</td>
          <td>${prod.price}</td>
          <td>${prod.type}</td>
      </tr>`);
  }, "");
  return result;
};


document.querySelector('#tbl-product').innerHTML = renderTable(arrProductNew);


window.orderBy = (fieldName, tagDangClick) => {
  // console.log(event.target) //thẻ đang xảy ra sự kiện gọi hàm nay
  // let tagDangClick = event.target;
  let order = tagDangClick.getAttribute('order');
  let resultOrder = _.orderBy(arrProductNew,[fieldName],[order]);
  if(order === 'esc') {
    tagDangClick.setAttribute('order','desc');
  }else {
    tagDangClick.setAttribute('order','esc');

  }
 
  //render ra giao diện
  document.querySelector('#tbl-product').innerHTML = renderTable(resultOrder);
}
