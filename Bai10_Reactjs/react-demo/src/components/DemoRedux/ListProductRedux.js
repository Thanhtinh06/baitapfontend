import React, { Component } from "react";
import ProductRedux from "./ProductRedux";
import dataPhone from "../DemoProps/data/dataPhone.json";
export default class ListProductRedux extends Component {
  renderListProduct = () => {
    return dataPhone.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductRedux product={product} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row mt-5">{this.renderListProduct()}</div>
      </div>
    );
  }
}
