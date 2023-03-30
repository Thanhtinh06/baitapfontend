import React, { Component } from "react";
import { DataContext } from "./context";

class Cart extends Component {
  static contextType = DataContext;
  calcTotal() {
    let total = 0;

    this.context.cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });

    return total;
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="position-relative bg-white shadow rounded-lg p-5 w-75">
          <span
            onClick={this.context.onHideCart}
            style={{
              width: 40,
              height: 40,
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10,
            }}
            className=" border rounded-circle d-flex justify-content-center align-items-center"
          >
            X
          </span>
          <table className="table">
            <thead>
              <tr>
                <th>INX</th>
                <th>NAME</th>
                <th>IMAGE</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>TOTAL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {this.context.cart.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.product.name}</td>
                  <td>
                    <img
                      style={{ width: 100 }}
                      src={item.product.image}
                      alt=""
                    />
                  </td>
                  <td>
                    <button className="btn btn-info"> - </button>
                    <i className="mx-3">{item.quantity}</i>
                    <button className="btn btn-info"> + </button>
                  </td>
                  <td>${item.product.price}</td>
                  <td>${item.product.price * item.quantity}</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="7">
                  <h4 className="text-end">Total: {this.calcTotal()}</h4>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-info">Thanh toán</button>
        </div>
      </div>
    );
  }
}

export default Cart;
