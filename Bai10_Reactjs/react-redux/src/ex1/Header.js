import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2>Header</h2>
        <p>this is a header</p>
      </div>
    );
  }
}

export default Header;

// const obj = {
//   type: "div",
//   className: "header",
//   chidlren: [
//     {
//       type: "h2",
//     },
//     {
//       type: "p",
//     },
//   ],
// };

// JSX (Javascript XML)
// div , h2, p => React element (object)
// phân biệt React Element, React Component , Component Instance
