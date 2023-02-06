/*
Target: Manage employee with features:
+ add
+ update
+ remove
+ edit
Created by: Thanh Tinh
Date: 03/02/2023
Version: 1.0
*/

function getEle(id) {
  return document.getElementById(id);
}

function setDisplayEle(idNoti,value){
  getEle(idNoti).style.display = value;
}



function checkValidForm(idField,idNoti){
  let valueField = getEle(idField).value;
  if( valueField === ""){
    getEle(idNoti).innerHTML = NOTI_INVALID.notiInput;
    setDisplayEle(idNoti,"block");
  }else if (idField == FIELD_CONTENT.NAME && !valueField.match(CONDITION.TEXT)){
    getEle(idNoti).innerHTML = NOTI_INVALID.notiWrongFieldText;
    setDisplayEle(idNoti,"block");
  }else if (idField == FIELD_CONTENT.CODE && !valueField.match(CONDITION.NUMBER)){
    getEle(idNoti).innerHTML = NOTI_INVALID.notiWrongFieldNumber;
    setDisplayEle(idNoti,"block");
  }
  else if (idField == FIELD_CONTENT.EMAIL && !valueField.match(CONDITION.EMAIL)){
    getEle(idNoti).innerHTML = NOTI_INVALID.notiWrongFieldEmail;
    setDisplayEle(idNoti,"block");
  }else{
    setDisplayEle(idNoti,"none");
    return valueField;
  }
}

function checkSelectedForm(idField,idNoti){
  let theSelect = getEle(idField);
  if(theSelect.selectedIndex == 0){
    getEle(idNoti).innerHTML = NOTI_INVALID.notiInput;
    setDisplayEle(idNoti,"block");
  }else{
    setDisplayEle(idNoti,"none");
    return theSelect.value;
  }
}

//Create object List Employee
const listEmploy = new ListEmployees();

//Lấy data ở phía local stage
getLocalStage();


//Ẩn button cập nhật khi bấm vào nút Thêm
getEle("btnThem").addEventListener("click", function(){
  //DOM den nut "cap nhat" cho an
  getEle("btnCapNhat").style.display = "none";
  getEle("btnThemNV").style.display = "block";
  getEle("msnv").disabled = false;
  

})


//ADD EMPLOYEE
getEle("btnThemNV").addEventListener("click",function(){

  const employee = getInformation();
  if(employee != null){
    listEmploy.addEm(employee);
    renderTable();
    getEle("btnDong").click();
    setLocalStage();
    resetForm();
  }
})


//Collect user information typing 

function getInformation() {
  let code = checkValidForm("msnv","tbMaNV");
  let nameEmployee = checkValidForm("name","tbTen");
  let email = checkValidForm("email","tbEmail");
  let password = checkValidForm("password","tbMatKhau");
  let birthday = checkValidForm("datepicker","tbNgay");
  let position = checkSelectedForm("chucvu","tbChucVu");
  if( code == undefined || nameEmployee == undefined || email == undefined || password == undefined || birthday == undefined || position == undefined){
    return null
  }else{
    return new Employee(code, nameEmployee, email, password, birthday, position);
  }
  
}


//Render table thông tin nhân viên

function renderTable(data = listEmploy.arr) {
  let contentHTML = "";

  data.forEach(function(em){
    contentHTML += `
      <tr>
        <td>${em.codeEmployee}</td>
        <td>${em.nameEmployee}</td>
        <td>${em.email}</td>
        <td>${em.birthday}</td>
        <td>${em.position}</td>
        <td>
        <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editEm(${em.codeEmployee})">Edit</button>
        <button class="btn btn-danger" onclick="deletedEm(${em.codeEmployee})">Delete</button>
        </td>
      </tr>
       ` 
       //lấy mã code nhân viên muốn xóa 
  });

  getEle("tableDanhSach").innerHTML = contentHTML;
}

function setLocalStage(){
  localStorage.setItem("ListNV", JSON.stringify(listEmploy.arr));
}

function getLocalStage(){
  const dataString = localStorage.getItem("ListNV");
  listEmploy.arr = JSON.parse(dataString) || [];
  renderTable();
}

//Reset value

function resetForm(){
  getEle("formModal").reset
}



// Deleted
function deletedEm(idEm){
  //xoa em trong list-em
  listEmploy.removeEm(idEm);
  //render lai table hien thi
  renderTable(listEmploy.arr);
  //set lai listEm trong localstage
  setLocalStage();

}

// Edit

function editEm(idEm){
  getEle('btnThemNV').style.display = "none";
  getEle("btnCapNhat").style.display = "block";

  let em = listEmploy.getInforEm(idEm); // value return null or object em
  if (em){
    getEle("msnv").value = em.codeEmployee;
    //disabled #msnv
    getEle("msnv").disabled = true;
    getEle("name").value = em.nameEmployee;
    getEle("email").value = em.email;
    getEle("password").value = em.password;
    getEle("datepicker").value = em.birthday;
    getEle("chucvu").value = em.position;
  }
}

// Update

getEle("btnCapNhat").addEventListener('click',function(){
  let em = getInformation();
  listEmploy.updateEm(em);
  renderTable(listEmploy.arr);
  setLocalStage();
  getEle("btnDong").click();
  resetForm();
})


// Find

//Dom den the input -> sukien keyup: lay thong tin dang nhap tu input

getEle("searchName").addEventListener("keyup", function(){
  let keyword = getEle("searchName").value;
  var arrFind = listEmploy.findEm(keyword);
  renderTable(arrFind);
})

