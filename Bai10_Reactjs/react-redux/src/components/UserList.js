import React, { Component } from "react";
import UserItem from "./UserItem";

class UserList extends Component {
  fullName = "hieu";
  age = 12;

  users = [
    { id: 1, name: "hieu", age: 12 },
    { id: 2, name: "tai", age: 14 },
    { id: 3, name: "dung", age: 15 },
  ];

  renderUsers = () => {
    return this.users.map((item) => {
      return <UserItem key={item.id} user={item} />;
    });
  };

  render() {
    return (
      <div className="bg-primary p-5 text-white">{this.renderUsers()}</div>
    );
  }
}

export default UserList;

// JSX => React Element

// Reconciliation:
// userlist => change state => render() => JSX mới

// virtual DOM cũ
// var obj = {
//   type: "div",
//   children: [
//     {
//       type: "UserList",
//       className: "bg-primary p-5 text-white",
//       children: [
//         {
//           type: "div",
//           children: [
//             { type: "div", children: [{ type: "h1" }, { type: "h3" }] },
//             { type: "div", children: [{ type: "h1" }, { type: "h3" }] },
//           ],
//         },
//       ],
//     },
//   ],
// };

// virtual DOM mới
// var obj = {
//   type: "div",
//   children: [
//     {
//       type: "UserList",
//       className: "bg-primary p-5",
//       children: [
//         {
//           type: "div",
//           children: [
//             { type: "div", children: [{ type: "h1" }, { type: "h3" }] },
//             { type: "div", children: [{ type: "h1" }, { type: "h3" }] },
//           ],
//         },
//       ],
//     },
//   ],
// };

// compare virtual dom mới và virtual dom cũ (The Diffing Algorithm)
// => update REAL DOM

// mutable (object)
// vs
// immutable (string, number ,null, undefined ,boolean)

// var a = 10;
// a = 20;

// var obj = {
//   name: "hieu",
//   age: 12,
// };

// obj.name = "tai";
