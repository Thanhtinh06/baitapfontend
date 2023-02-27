import React, { Component } from "react";

export default class DemoForLoop extends Component {
  studentList = [
    {
      id: 1,
      name: "Hieu",
      age: 12,
    },
    {
      id: 2,
      name: "Dung",
      age: 13,
    },
    {
      id: 3,
      name: "Tai",
      age: 14,
    },
  ];
  renderStudentList = () => {
    //cach1
    // const studentUIs = [];
    // for (let item of this.studentList){
    //     studentUIs.push(
    //         <div className='col-4'>
    //         <div className='card'>
    //             <h2>Name: {item.name}</h2>
    //             <h2>Age: {item.age}</h2>
    //         </div>
    //     </div>
    //     )
    // }
    // return studentUIs

    //cach2: ham map
    const studentUIs = this.studentList.map((item) => {
      return (
        // khi dùng hàm map react yêu cầu phải gắn key (giá trị unique)
        <div key={item.id} className="col-4">
          <div className="card">
            <h2>Name: {item.name}</h2>
            <h2>Age: {item.age}</h2>
          </div>
        </div>
      );
    });
    return studentUIs
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderStudentList()}</div>
      </div>
    );
  }
}
