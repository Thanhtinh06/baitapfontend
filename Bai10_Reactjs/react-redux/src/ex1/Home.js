import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flex">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
