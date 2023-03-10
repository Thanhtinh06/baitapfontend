import React, { Component } from "react";
import { connect } from "react-redux";

class ModalRedux extends Component {
  //Sử dụng thư viện connect để kết nối giữa component vs state tổng ở store (rootReducer)

  render() {
    return (
      <div
        className="modal fade"
        id="shoppingCart"
        tabIndex={-1}
        aria-labelledby="shoppingCartLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ minWidth: 800 }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="shoppingCartLabel">
                Giỏ hàng
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Mã SP</th>
                    <th scope="col">Tên SP</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.map((cartItem, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{cartItem.maSP}</th>
                        <td>{cartItem.tenSP}</td>
                        <td>
                          <img
                            src={cartItem.hinhAnh}
                            alt=""
                            width={50}
                            height={100}
                          ></img>
                        </td>
                        <td>
                          <button className="btn" onClick={()=>{this.props.changeAmount(cartItem,"subtrac")}}>
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <span> {cartItem.soLuong.toLocaleString()}</span>
                          <button className="btn" onClick={()=>{this.props.changeAmount(cartItem,"add")}}>
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </td>
                        <td>{cartItem.giaBan.toLocaleString()}</td>
                        <td>
                          {(
                            cartItem.soLuong * cartItem.giaBan
                          ).toLocaleString()}
                        </td>
                        <td>
                          <button className="btn btn-danger" onClick={()=>{this.props.deleteItem(cartItem)}}>Del</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Hàm lấy state redux biến thành props của component
//state là state tổng của ứng dụng chứa các state con (rootReducer)
const mapStateToProps = (state) => {
  return {
    cart: state.stateCart.cartList,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    changeAmount : (cartItem,status) => {
      let action = {
        type: "CHANGE_AMOUNT",
        cartItem,
        status,
      }
      dispatch(action);

    },
    deleteItem : (cartItem) => {
      let action = {
        type: "DELETE_ITEM",
        cartItem,
      } 
      dispatch(action);

    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ModalRedux);
