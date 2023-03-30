import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycle extends Component {
  //chạy khi component được khởi tạo
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
    };
    console.log("Contructor");
  }

  //chạy sau contructor, dùng để thay đổi state trước khi render ra UI
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");

    // không có sử dụng this VÀ Không dùng this.setState
    // currentState.number = 10
    return currentState;
  }

  //chạy sau getDerivedStateFromProps,hiện thị UI
  render() {
    console.log("render");
    return (
      <div className="container">
        LifeCycle
        <h2>Number: {this.state.number}</h2>
        <h2>Like: {this.state.like}</h2>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          increase number
        </button>
        <button
          onClick={() => {
            this.setState({ like: this.state.like + 1 });
          }}
        >
          increase like
        </button>
        <button
          onClick={() => {
            this.setState({ isShowChild: false });
          }}
        >
          hide child
        </button>
        <Child number={this.state.number} />
      </div>
    );
  }

  //chạy sau render,thường dùng để call API
  componentDidMount() {
    // this.setState({number:100})
    //call API => data
    //set lai state
    console.log("componentDidMount");
  }
}
