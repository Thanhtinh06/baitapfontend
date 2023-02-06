function CallApi() {
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
}