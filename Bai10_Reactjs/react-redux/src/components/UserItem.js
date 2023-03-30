import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { name, age } = this.props.user;
    // const name = this.props.user.name
    // const age = this.props.user.age

    return (
      <div className="bg-success p-4 mb-4">
        <h1>Tên: {name}</h1>
        <h3>Tuổi: {age}</h3>
      </div>
    );
  }
}

export default UserItem;
