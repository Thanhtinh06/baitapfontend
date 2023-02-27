import React, { Component } from "react";
import "./item.css";

class Item extends Component {
  renderItem = () => {
    let cardItemUIs = [];
    const urlImage = "../cardItem.png";
    for (let i = 0; i < 4; i++) {
      cardItemUIs.push(
        <div key={i} className="card">
          <img className="card-img-top cardItem" src={urlImage} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-bottom">
               <button className="btn btn-primary" >Fill Out More</button>
            </div>
        </div>
      );
    }
    return cardItemUIs;
  };
  render() {
    return (
      <div className="items">
        <div className="container item">{this.renderItem()}</div>
      </div>
    );
  }
}

export default Item;
