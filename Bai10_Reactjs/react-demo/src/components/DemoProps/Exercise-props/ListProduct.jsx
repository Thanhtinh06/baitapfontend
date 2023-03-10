import React, { Component } from "react";
import Product from "./Product";
import listProducts from "./../data/dataPhone.json";
import { DataContext, DataContext2 } from "./context";
import "./listProduct.css";

export default class ListProduct extends Component {
  listProduct = listProducts;
  state = {
    detailProduct: this.listProduct[0],
  };

  renderListProduct = () => {
    return this.listProduct.map((pro, index) => {
      return (
        <Product
          key={index}
          phone={pro}
          viewDetail={this.handleViewDetail}
        ></Product>
      );
    });
  };

  handleViewDetail = (product) => {
    this.setState({
      detailProduct: product,
    });
  };

  renderDetailProduct() {
    const { detailProduct } = this.state;
    return (
      <div className="detail container">
        <div className="row">
          <div className="col-6">
            <img
              src={detailProduct.hinhAnh}
              alt={detailProduct.tenSP}
              width={170}
              height={260}
            ></img>
          </div>
          <div className="col-6 text-start">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td colSpan="2">Thông số kỹ thuật</td>
                </tr>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành </td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>Camera Trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <DataContext.Provider value={this.state.detailProduct}>
        <DataContext2.Provider value="abc">
          <div className="container list-product">
            <div className="row">{this.renderListProduct()}</div>
            <br></br>
            <div className="row">{this.renderDetailProduct()}</div>
          </div>
        </DataContext2.Provider>
      </DataContext.Provider>
    );
  }
}
