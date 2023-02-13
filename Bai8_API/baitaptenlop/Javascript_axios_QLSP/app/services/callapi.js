function CallApi(){
  this.fetchListData = function(){
    /**
     * call axios, agrument: object 
     * return: Promise: 
                  - Pending (cho) -> luc nao cung chay
                  - Resolve (thanh cong) 
                  - Reject (that bai)
    */
    var promise = axios({
      url: "https://63df6ffb59bccf35dab3447e.mockapi.io/api/products",
      method: "GET",
    });
    return promise;   
  };
  this.deleleProduct = function(id){
    return axios({
      url: `https://63df6ffb59bccf35dab3447e.mockapi.io/api/products/${id}`,
      method : "DELETE"
    });
  };

  this.addProduct = function(product){
    return axios({
      url:"https://63df6ffb59bccf35dab3447e.mockapi.io/api/products",
      method: "POST",
      data: product,
    })
  };
  this.detailProduct = function(id){
    return axios({
      url: `https://63df6ffb59bccf35dab3447e.mockapi.io/api/products/${id}`,
      method: "GET"
    })
  };
  this.updateProduct = function(product){
    return axios({
      url: `https://63df6ffb59bccf35dab3447e.mockapi.io/api/products/${product.id}`,
      method: "PUT",
      data: product,
    })
  };
}