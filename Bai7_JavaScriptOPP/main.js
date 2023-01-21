/*
      Đề bài
      +diemTrungBinh: (toán + lý + hóa) / 3
      +diemRenLuyen: 1 -> 10
      +xepLoai: 
    - drl < 5 : yeu;
    - drl >= 5 && :
      + 5 <= dtb < 6.5: tbinh;
      + 6.5 <= dtb < 8: khá;
      + 8 <= dtb <= 10: giỏi;
 */

// Tự làm cách 1:erq

const Rank = Object.freeze({
  Yeu : 'Yếu',
  TB : 'Trung Bình',
  Kha : 'Khá',
  Gioi : 'Giỏi',
})

const Point = Object.freeze({
  0 : 5,
  1 : 6.5,
  2 : 8,
  3 : 10,
})

class Score {
  constructor(math,physic,literature,training){
    this.math = math;
    this.physic = physic;
    this.literature = literature;
    this.training = training;
  }
  calculateAverageScore(){
    return (this.math + this.literature + this.physic) / 3
  }
}

class Student {
  constructor(name,code,circumstance,score){
    this.name = name;
    this.code = code;
    this.circumstance = circumstance;
    this.score = score;
  }
  getRank(){
    let rank;
    let dtb = this.score.calculateAverageScore();
    let rl = this.score.training;
    if (rl < 5){
      rank = Rank.Yeu;
      return rank;
    }else{
      if (Point[0] <= dtb && dtb < Point[1]){
        rank = Rank.TB;
      }else if( Point[1] <= dtb && dtb < Point[2]){
        rank = Rank.Kha;
      }else if( Point[2] <= dtb && dtb <= Point[3]){
        rank = Rank.Gioi;
      }
    }
    return rank;
  }
}

class ListStudent {
  constructor(){
    this.arr = [];
  }
  addStudent(student){
    this.arr.push(student);
  }
}

function getEle(id) {
  return document.getElementById(id);
}

getEle('btnXacNhan').onclick = function(event) {
  //Chặn sự kiện reload trang khi click vào nút button trong form (form mặc định khi bấm nút xác nhận sẽ reload page)
  event.preventDefault();
  var math = parseFloat(getEle('diemToan').value);
  var physic = parseFloat(getEle('diemLy').value);
  var literature = parseFloat(getEle('diemVan').value);
  var training = parseInt(getEle('diemRenLuyen').value);
  var code = getEle('maSinhVien').value;
  var name = getEle('tenSinhVien').value;
  var circumstance = getEle('loaiSinhVien');
  var txtCircum = circumstance.options[circumstance.selectedIndex].text;
  var score = new Score(math,physic,literature,training);
  var student = new Student(name,code,txtCircum,score);
  getEle('txtTenSinhVien').innerHTML = student.name;
  getEle('txtMaSinhVien').innerHTML = student.code;
  getEle('txtLoaiSinhVien').innerHTML = student.circumstance;
  getEle('txtDiemTrungBinh').innerHTML = student.score.calculateAverageScore();
  getEle('txtXepLoai').innerHTML = student.getRank();
}

