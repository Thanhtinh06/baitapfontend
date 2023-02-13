function getEle(id){
  return document.getElementById(id);
}

var callApi = new CallApi();

// luu hinh anh 
var hinhAnhFromServer = "";


function getListProduct(){
  getEle("loader").style.display = "block";

  let promise = callApi.fetchListData(); // return ve promise (promise bất động bộ)
  promise
    // resolve => vo tden xu ly
    .then(function(result){
      // result.data: object return co key la data => value la 
      renderData(result.data);
      getEle("loader").style.display = "none";
    })
    // reject => vo catch xu ly
    .catch(function(error){
      console.log(error)
    }); 
}


function renderData(data){
  let content = "";
  data.forEach(function(product,i){
    content += `
    <tr>
      <td>${i+1}</td>
      <td>${product.tenSP}</td>
      <td>${product.gia}</td>
      <td>
          <img src="./../../assets/img/${product.hinhAnh}" width="50px"/>
      </td>
      <td>${product.moTa}</td>                
      <td>
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="editProduct(${product.id})">Edit</button>
        <button type="button" class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
      </td>
    </tr> `
  });
  getEle("tblDanhSachSP").innerHTML = content;
}

function deleteProduct(id){
  callApi.deleleProduct(id) 
    .then(function() {
      getListProduct();
    })
    .catch(function(error) {
      console.log(error)
    })
}

//Gọi hàm để chạy
getListProduct();

getEle("btnThemSP").addEventListener("click", function() {
  document.getElementsByClassName("modal-title"[0].innerHTML = "Add")
  let btnAdd = `<button class="btn btn-success" onclick="handerAdd()"> Add </button>`
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;  
});

function handerAdd() {
  let tenSP =  getEle("TenSP").value;
  let giaSP = getEle("GiaSP").value;
  let moTa = getEle("MoTa").value;
  let hinhAnh = "";
  if(getEle("HinhSP").files[0].length > 0){
    hinhAnh = getEle("HinhSP").files[0].name;
  };
  let product = new Product("",tenSP,giaSP,hinhAnh,moTa);
  callApi.addProduct(product)
    .then( function(){
      getListProduct();
      resetForm();
      document.getElementsByClassName("close")[0].click();
    })
    .catch( function(error) {
      console.log(error)
    });
  }

function editProduct(id){
  getEle("title_modal").innerHTML = `
  <p>Edit Product</p>
  `
  document.getElementsByClassName("modal-title"[0].innerHTML = "Edit")
  let btnUpdate = `<button class="btn btn-success" onclick="updateProduct(${id})"> Update </button>`
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnUpdate; 
  callApi.detailProduct(id)
    .then(function(result){
      let product = result.data;
      //show chi tiet
      getEle("TenSP").value = product.tenSP;
      getEle("GiaSP").value = product.gia;
      getEle("MoTa").value = product.moTa;

      //cập nhật hinhAnhFromServer
      hinhAnhFromServer = product.hinhAnh;
    })
    .catch(function(error){
      console.log(error)
    })
  }


function updateProduct(id){
  let tenSP =  getEle("TenSP").value;
  let giaSP = getEle("GiaSP").value;
  let moTa = getEle("MoTa").value;
  let hinhAnh = "";
  if(getEle("HinhSP").files.length > 0){
    hinhAnh = getEle("HinhSP").files[0].name;
  };

  if (!hinhAnh){
    //giu lai hinh tren server
    hinhAnh = hinhAnhFromServer;
  }

  let product = new Product(id,tenSP,giaSP,hinhAnh,moTa);
  callApi.updateProduct(product)
    .then(function(){
      getListProduct();
      resetForm();
      document.getElementsByClassName("close")[0].click();
      hinhAnhFromServer = "";
    })
    .catch(function(error){
      console.log(error)
    })
}


function resetForm(){
  getEle("TenSP").value = "";
  getEle("GiaSP").value = "";
  getEle("HinhSP") = "";
  getEle("MoTa").value = "";

}

