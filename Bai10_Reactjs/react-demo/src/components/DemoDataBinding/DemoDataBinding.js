import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  //binding data ra màn hình (trong cặp dấu ngoặc ngọn có thể viết js với những syntax 1 dòng)
  fullName = "Thanh Tinh";
  age = "25";
  hello = () => {
    alert("hello world" + this.fullName);
  }
  hello2(message){
    alert(message + this.fullName)
  }
    //state: thuộc tính mặc định của component

    state = {
        isLogin : false
      }
    
    
      login = () => {
        this.setState({
            isLogin : true
        });
      }
      signOut = ()=>{
        this.setState({
            isLogin : false
        });
      }

  renderNav = () => {
    if (this.state.isLogin) {
      return (
        <nav>
          <p>Hello ,Tinh</p>
          <button onClick={this.signOut}>Logout</button>
        </nav>
      );
    }

    return (
      <nav>
        <button onClick={this.login}>Login</button>
        <button>Sign up</button>
      </nav>
    );
  };


  render() {
    return (
      <div>
        {this.renderNav()}
        <p>FullName: {this.fullName}</p>
        <p>Age: {this.age}</p>
        {/* chạy khi click button gắn sự kiện hàm trong {} không có dấu () */}
        <button onClick={this.hello} >Say</button>
        {/* nếu hàm có tham số truyền vào thì tạo ra 1 function ảo bọc lại */}
        <button onClick={ () => {this.hello2('hi')}}> Say2</button>
        {/* hello chạy ngay khi f5 */}
        {/* <p> {this.hello()}</p> */}
      </div>
    );
  }
}


var obj = {
    name: "hieu",
    age: 12,
    showInfo: function () {
      // this = obj vì showInfo là method của obj
      console.log(this.name + this.age);
      // bind , call ,apply
  
      const test2 = () => {
        console.log(this); // this = obj
      };
  
      test2(); //
    },
  };
  obj.showInfo();
  
  // this: trỏ tới đối tượng mà function đó đang là phương thức
  
  // scope: dynamic scope
  // (nơi gọi function chạy sẽ quyết định this là gì, chứ ko phải
  // nơi tạo ra function đó)
  
  function test() {
    console.log(this);
  }
  
  test(); // this = undefined
  
  var obj2 = {
    email: "hieu@gmail.com",
    className: "13VLH1",
    demo: test,
  };
  
  obj2.demo(); // this = obj2
  
  // default constructor
  // class Student {
  //   fullName = "hieu";
  //   age = 12;
  
  //   test() {}
  // }
  
  // const student1 = new Student();
  // const student2 = new Student();
  // const student3 = new Student();
  // // => {fullName: hieu, age: 12}
  
  
