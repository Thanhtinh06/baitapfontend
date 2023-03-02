import React, { Component } from 'react';
import Header from './Header';
import Content from './Contents';
import Sidebar from './Sidebar';
import Footer from "./Footer";

import './home.css'

class Home extends Component {
  render() {
    return (
      <section>
        <Header />
        <div className="main">
            <Content />
            <Sidebar />
        </div>
        <Footer />
      </section>
    )
  }
}

export default Home