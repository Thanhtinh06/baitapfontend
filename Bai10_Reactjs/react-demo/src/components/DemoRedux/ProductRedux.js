import React, { Component } from "react";
import { connect } from "react-redux";

class ProductRedux extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={product.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.tenSP}</h5>
            <p className="card-text">{product.giaBan}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.addCart(product);
              }}
            >
              Mua hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//Hàm gửi dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (product) => {
      //create cartItem
      let itemCart = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        giaBan: product.giaBan,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
      };
      //Tạo ra action : type là thuộc tính bắt buộc của action
      let action = {
        type: "ADD_CART",
        itemCart,
      };
      //Dùng hàm dispatch từ redux để gửi dữ liệu lên store
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductRedux);
