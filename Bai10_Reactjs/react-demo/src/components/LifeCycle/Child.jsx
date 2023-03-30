import React, { createRef, PureComponent } from "react";

// PURE Component so sánh các giá trị props được truyền vào có thay đổi hay không, nếu thay đổi thì re render lại
// Tuy nhiên purecomponent ko so sánh được các giá trị tham chiếu nên sẽ dùng Fnc shouldComponentUpdate()

export default class Child extends PureComponent {
  //chạy khi component được khởi tạo
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    //DOM đến thẻ
    this.numberRef = createRef();
    console.log("Contructor child");
  }

  //chạy sau contructor, dùng để thay đổi state trước khi render ra UI
  //có thể biến props thành state nội bộ của component
  //khi nhận props thì không thể thay đổi giá trị nhưng khi biến props thành state nội bộ thì có thể thay đổi giá trị của state
  static getDerivedStateFromProps(nextProps, currentState) {
    // không có sử dụng this VÀ Không dùng this.setState
    console.log("getDerivedStateFromProps child");

    currentState.number = nextProps.number;
    return currentState;
  }

  //trả về true/false, quyết định rerender lại trang hay ko
  // true => component được phép render lại
  //false => ko cho component render lại
  // shouldComponentUpdate(nextProps,nextSate){
  //   console.log('props child')
  //   if(this.props.number !== nextSate.number){
  //     return true
  //   }
  //   return false
  // }

  //chạy sau getDerivedStateFromProps,hiện thị UI
  render() {
    console.log("render child");
    return (
      <div className="container">
        Child
        <h2 ref={this.numberRef}>Number Child: {this.state.number}</h2>
      </div>
    );
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("this.numberRef", this.numberRef.current.innerHTML);
    return this.numberRef.current.innerHTML;
  }

  componentDidUpdate(preProps, preState, snapShot) {
    console.log("preProps", preProps);
    console.log("preState", preState);
    console.log("snapShot", snapShot);
  }

  //chạy sau render,thường dùng để call API
  componentDidMount() {
    // this.setState({number:100})
    //call API => data
    //set lai state
    console.log("componentDidMount child");
  }

  //chay khi component xoa khoi giao dien
}
