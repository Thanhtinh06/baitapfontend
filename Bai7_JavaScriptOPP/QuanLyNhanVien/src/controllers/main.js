

function getEle(id) {
  return document.getElementById(id);
}

getEle("btnThem").addEventListener("click", function(){
  //DOM den nut "cap nhat" cho an
  getEle("btnCapNhat").style.display = "none";
})

/**
 * add Employee
 */

// Tao DSNV tu lop doi tuong ListEmployees

getLocalStage(); 
const listEmploy = new ListEmployees();

// Lay thong tin nguoi dung

function getInformation() {
    //DOM lay thong tin user nhap vao the input
    var code = getEle("msnv").value;
    var nameEmployee = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var birthday = getEle("datepicker").value;
    var position = getEle("chucvu").value;
    
    // tạo đối tượng từ lớp đối tượng
    var employee = new Employee(code,nameEmployee,email,password,birthday,position);
    
    return employee;
}

getEle("btnThemNV").addEventListener("click",function(){
  var employee = getInformation();
  listEmploy.addEm(employee);
  //Goi ham de render ra bang
  renderTable();
  //Close Model
  getEle("btnDong").click();
  setLocalStage();
})

// /**
//  * hiện thị danh sách nhân viên
//  */



/**
 * Cach 1
 */

function renderTable(data) {
  var contentHTML = "";

  //agrument 1: phan tu of arr, agrument 2: chi so index
  data.forEach(function(em){
    contentHTML += `
      <tr>
        <td>${em.codeEmployee}</td>
        <td>${em.nameEmployee}</td>
        <td>${em.email}</td>
        <td>${em.birthday}</td>
        <td>${em.position}</td>
        <td>
        <button class="btn btn-info">Edit</button>
        <button class="btn btn-danger">Delete</button>
        </td>
      </tr>
       ` 
  });

  getEle("tableDanhSach").innerHTML = contentHTML;
}
/**Cach 2 */


// function renderTable(data) {
//   var contentHTML = "";

//   for (var i = 0; i < data.length; i++){
//     var em = data[i];
//     contentHTML += "<tr>";
//     contentHTML += "<td>" + em.codeEmployee + "</td>";
//     contentHTML += "<td>" + em.nameEmployee + "</td>";
//     contentHTML += "<td>" + em.email + "</td>";
//     contentHTML += "<td>" + em.birthday + "</td>";
//     contentHTML += "<td>" + em.position + "</td>";
//     contentHTML += "</tr>";
//   }

//   //DOM den table de render ra
//   getEle("tableDanhSach").innerHTML = contentHTML;
// }

/**
 * Luu thong tin nhan vien
 */

//khi luu thông tin vào localStage data lưu từ kiểu json [code:"123"] -> string ["code":"123"]
function setLocalStage(){
  //convert data json to string
  var dataString = JSON.stringify(listEmploy.arr);
  //agrument1: key, agrument2: value
  localStorage.setItem("ListNV",dataString);
  
}

/**
 * Lay data tu local stage
 */

function getLocalStage(){
  var dataString = localStorage.getItem("ListNV");
  // conver string => JSON
  listEmploy.arr = JSON.parse(dataString);
  //render tbody
  renderTable(listEmploy.arr)
}