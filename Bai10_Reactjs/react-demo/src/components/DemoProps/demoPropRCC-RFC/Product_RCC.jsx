import React, { Component } from "react";

export default class Product_RCC extends Component {
  constructor(props) {
    super();
  }
  render() {
    const {name,rating,price} = this.props.film_input;

    return (
      <div>
        <div className="card text-left">
          <img
            className="card-img-top"
            src="../../../public/logo512.png"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{rating}</p>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
    );
  }
}
