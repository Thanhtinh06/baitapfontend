import React, { Component } from "react";
import "./product.css";

export default class Product extends Component {
  render() {
    const {phone} = this.props;
    const {viewDetail} = this.props;
    return (
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={phone.hinhAnh}
            className="card-img-top"
            alt="..."
            width={170}
            height={260}
          />
          <div className="card-body">
            <h5 className="card-title">{phone.tenSP}</h5>
            <p className="card-text">{phone.gia}</p>
            <button className="btn btn-primary" onClick={() => viewDetail(phone)}>Detail</button>
          </div>
        </div>
      </div>
    );
  }
}
