function ListEmployees(){
  //property
  this.arr = [];
  //method

  //them Nv
  this.addEm = function (employee){
    this.arr.push(employee)
  };
  //tim index NV
  this.findIndexEm = function(idEm){
    let index = -1;
    this.arr.forEach(function(em,i){
      if (em.codeEmployee == idEm){
        index = i;
      }
    });
    return index;
  };
  //xoa NV
  this.removeEm = function (idEm){
    let index = this.findIndexEm(idEm)
    if (index != -1){
      this.arr.splice(index,1)
    }
  };
  this.getInforEm = function (idEm){
    let index = this.findIndexEm(idEm);
    if (index != -1){
      return this.arr[index]
    };
    return null;
  };
  this.updateEm = function (newEm){
    let index = this.findIndexEm(newEm.codeEmployee);
    if(index != -1){
      this.arr[index] = newEm
    }
  };
  this.findEm = function (keyword){
    /**
     * 1. Tạo arrFind = []
     * 2. Duyet mang arr
     * em.nameEmployee => lowerCase
     * keyword => loweCase (indexOf)
     * 3. Neu name chua keyword => them vao arrFind
     */
    let arrFind = [];

    this.arr.forEach(function(em){
      let nameLowerCase = em.nameEmployee.toLowerCase();
      var keywordLowerCase = keyword.toLowerCase();
      if(nameLowerCase.indexOf(keywordLowerCase) !== -1){
        arrFind.push(em)
      }
    });
    return arrFind
  };
}
