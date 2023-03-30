import React, { Component } from "react";
import { DataContext } from "./context";

class ProductItem extends Component {
  static contextType = DataContext;

  render() {
    console.log(this.context.cart);

    const { name, image, price } = this.props.prod;
    return (
      <div className="card p-3 mb-4">
        <img src={image} alt="" />
        <h5>{name}</h5>
        <p>Price: {price} </p>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => {
              this.props.setSelectedProduct(this.props.prod);
            }}
            className="btn btn-danger me-3"
          >
            Detail
          </button>
          <button
            onClick={() => {
              this.context.onAddToCart(this.props.prod);
            }}
            className="btn btn-info"
          >
            Cart
          </button>
        </div>
      </div>
    );
  }
  
}

export default ProductItem;

// class Student {
//   constructor() {
//     this.name = "hieu";
//     this.age = 12;
//   }
//   static show() {
//     console.log(this.name);
//   }
// }

// Student.show();
