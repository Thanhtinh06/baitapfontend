import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          {this.props.data.map((item) => (
            <div key={item.id} className="col-3">
              <ProductItem
                setSelectedProduct={this.props.setSelectedProduct}
                prod={item}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
