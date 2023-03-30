import React, { useRef, useState } from 'react'
import UseRefChild from './UseRefChild';

const UseRef = () => {
  const inputRef = useRef(null);
  const [number,setNumber] = useState();
  //cách dùng 1: dùng để dom đến đối tượng và lấy giá trị
  //cach dung2: lưu lại giá trị của componetn khi giao diện bị re render lại (state cũng lưu trữ giá trị của component khi giao diện re render tuy nhiên sự khác biệt giữa state và useRef là ref ko có phương thức để re render lại component)
  const object = {
    current: 10
  }

  const objectRef = useRef(10)

  //cach dung 3:: lấy giá trị state từ component child
  const getValueFromChild = useRef()


  console.log('object',object.current);
  console.log('object ref',objectRef.current);
  return (
    <div className='container'>
      <hr />
      <h2>UseRef</h2>
      <input ref={inputRef} className='form-control'/>
      <button className='mt-5 btn btn-danger' onClick={()=>{
        //document.getElementById('Id').value
        console.log(inputRef.current.value)
      }}>get value input</button>
      <button className='mt-5 btn btn-warning' onClick={()=>{
        setNumber(number + 1)
        object.current = 100
        objectRef.current = 100
      }}> change Value</button>
      <div className='mt-5'>
        <UseRefChild ref={getValueFromChild}/>
      </div>

      <button className='btn btn-success' onClick={()=>{
        console.log(getValueFromChild.current)
      }}>Get value from child</button>
    </div>
  )
}

export default UseRef