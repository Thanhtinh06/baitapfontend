import React, { Component } from "react";
import { connect } from "react-redux";
import ListProductRedux from "./ListProductRedux";
import ModalRedux from "./ModalRedux";


class HomeRedex extends Component {

  getTotalAmount(){
    return this.props.cart.reduce((totalAmount,item)=>{
      return totalAmount += item.soLuong
    },0)
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center fw-bold text-success">Phone Store</h2>
        <button
          className="amountTotal btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#shoppingCart">
          <span>{this.getTotalAmount()}</span>
        </button>
        <ListProductRedux />
        <ModalRedux />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.stateCart.cartList,
  }
}

export default connect(mapStateToProps)(HomeRedex);