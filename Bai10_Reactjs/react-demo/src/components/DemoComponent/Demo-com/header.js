import { Component } from "react";
import "./header.css";

//statefull component (class)

/**
 * render defaul của component
 *- Chỉ được return về một thẻ nên phải bọc trong header
 */
class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Header</h1>
        <p>This is a header</p>
      </header>
    );
  }
}

export default Header;

//this, scope: block function global,lexical, dynamic
// arrow function, cách khai bao function, this
