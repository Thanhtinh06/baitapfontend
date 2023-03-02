import React, { Component } from "react";
import RedCar from "../assets/red-car.jpg";
import BlackCar from "../assets/black-car.jpg";
import SilverCar from "../assets/silver-car.jpg";
import SteelCar from "../assets/steel-car.jpg";

class CarEx2 extends Component {
  state = {
    imgSource: RedCar,
  };

  // State là bất động bộ, tham số thứ 2 là 1 call back function để xử lý sau khi state chạy xong
  changeCar = (image) => {
    this.setState(
      {
        imgSource: image,
      },
      () => {
        console.log(this.state.imgSource);
      }
    );
  };
  value = "cover";

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-7">
                {/* chỉnh style inline style là một object với key là thuộc tính css, value là giá trị của thuộc tính css (thuộc tính phải được để trong "") */}
                <img
                  className="w-100"
                  style={{
                    width: "100%",
                    backgroundColor: "green",
                    height: 500,
                    objectFit : this.value,
                  }}
                  src={this.state.imgSource}
                  alt=""
                />
              </div>
              <div className="col-5">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.changeCar(RedCar);
                  }}
                >
                  Red
                </button>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    this.changeCar(BlackCar);
                  }}
                >
                  Black
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    this.changeCar(SilverCar);
                  }}
                >
                  Steel
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => {
                    this.changeCar(SteelCar);
                  }}
                >
                  Silver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarEx2;
