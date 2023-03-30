import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    const { image, name, price, description, quantity } =
      this.props.selectedProduct;

    return (
      <div className="container card p-4">
        <div className="row">
          <div className="col-5">
            <img src={image} alt="" />
          </div>
          <div className="col-7">
            <h4>Name: {name} </h4>
            <h4>Price: ${price} </h4>
            <p>Description: {description} </p>
            <p>Inventory: {quantity} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
