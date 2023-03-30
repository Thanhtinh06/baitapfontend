import React, { Component } from "react";
import RedCar from "../assets/products/red-car.jpg";
import BlackCar from "../assets/products/black-car.jpg";
import SilverCar from "../assets/products/silver-car.jpg";
import SteelCar from "../assets/products/steel-car.jpg";

class CarEx2 extends Component {
  state = {
    imgSource: RedCar,
  };

  changeColor = (img) => {
    this.setState(
      {
        imgSource: img,
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
          <div className="col-7">
            <img
              style={{
                width: "100%",
                backgroundColor: "green",
                height: 300,
                objectFit: this.value
              }}
              src={this.state.imgSource}
              alt=""
            />
          </div>
          <div className="col-5">
            <button
              onClick={() => {
                this.changeColor(RedCar);
              }}
              className="btn btn-danger"
            >
              Red
            </button>
            <button
              onClick={() => {
                this.changeColor(BlackCar);
              }}
              className="btn btn-dark"
            >
              Black
            </button>
            <button
              onClick={() => {
                this.changeColor(SteelCar);
              }}
              className="btn btn-secondary"
            >
              Steel
            </button>
            <button className="btn btn-light">Silver</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CarEx2;
