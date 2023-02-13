function getEle(id){
  return document.getElementById(id);
}

var callApi = new CallApi();

// JavaScript là xử lý đơn luồng, nên xử lý data từ server là bất đồng bộ, những phần không liên quan vẫn chạy bthuong, không chờ data từ xử lý bất đồng bộ


function getListProduct(){
  getEle("loader").style.display = "block";
  var promise = callApi.fetchListData(); // return ve promise (promise bất động bộ)
  promise
    // resolve => vo then xu ly
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

//goi lai ham de chay

getListProduct();



function renderData(data){
  var content = "";
  data.forEach(function(product){
    content += `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card cardPhone">
          <img src="./img/${product.hinhAnh}" class="card-img-top" alt="...">
          <div class="card-body">
              <div class="d-flex justify-content-between">
                  <div>
                      <h3 class="cardPhone__title">${product.tenSP}</h3>
                      <p class="cardPhone__text"${product.moTa}</p>
                  </div>
                  <div>
                      <h3 class="cardPhone__title">${product.gia}</h3>
                  </div>
              </div>
              <div class="d-flex justify-content-between">
                  <div class="cardPhone__rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                  </div>
                  <div>
                      <button class="btnPhone-shadow"><i class="fa fa-shopping-cart"></i> Buy Now</button>
                  </div>
              </div>

          </div>
      </div>
    </div>
  `
  });
  getEle("product__main").innerHTML = content;
}