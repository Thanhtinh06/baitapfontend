import React, { useState } from "react";

const UseState = () => {
  //destructuring ('boc tach phan tu')

  // khi dùng useState giá trị mặc định được tính toán duy nhất một lần khi hàm contructor chạy 
  //=> nếu muốn thay đổi giá trị thì phải dùng setState 
  //=>hoặc unmount componnent và chạy lại 
  const [number, setNumber] = useState(100);
  // const [func, setFunc] = useState(()=>{
  //   return 100
  // });

  console.log("state:", number);

  return (
    <div className="container">
      <h2>UseStage</h2>
      <h2> Number: {number}</h2>
      <div>
        <button 
        className="btn btn-warning mr-5" 
        onClick={()=>{
          setNumber(number-1)
        }}
        
        >-</button>
        <button className="btn btn-success"
        onClick={()=>{
          setNumber(number+1)
        }}
        >+</button>
      </div>
    </div>
  );
};

export default UseState;
