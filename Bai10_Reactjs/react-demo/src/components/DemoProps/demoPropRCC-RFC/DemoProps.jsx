import React, { Component } from "react";
import data from "../data/data.json";
import Product_RCC from "./Product_RCC";
// import Product_RFC from "./Product_RFC";

export default class DemoProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listFilm: data,
    };
  }

  renderFilm = () => {
    return this.state.listFilm.map((film, index) => {
      return (
        <div key={index} className="col-4" >
          {/* <Product_RFC film_input = {film} /> */}
          <Product_RCC film_input = {film} />
        </div>
      );
    });
  };

  render() {
    return (
    <div className="container">
      <div className="row">
        {this.renderFilm()}
      </div>
    </div>
    );
  }
}
