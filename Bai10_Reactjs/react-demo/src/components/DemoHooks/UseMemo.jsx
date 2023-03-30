import React, { useMemo } from 'react'
import { useState } from 'react';

const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);
  // const countLike = like + 100;
  // cách hoạt động giống useEffect nhưng mục đích khác nhau (các trường hợp chạy giống nhau có cùng callBack func và [])
  // luôn luôn phải return
  const countLike = useMemo(()=>{
    const t = like + 100
    console.log(t)
    return t
  },[like])
  console.log(countLike)
  return (
    <div className='container'>
      <hr />
      <h2>UseMemo</h2>
      <h2>Number: {number}</h2>
      <h2>Like : {like}</h2>
      <div>
        <button
          className="btn btn-warning mr-5"
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          Decre Num
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Increa Num
        </button>
      </div>
      <div>
        <button
          className="btn btn-warning mr-5"
          onClick={() => {
            setLike(like - 1);
          }}
        >
          Decrea Like
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          Increa Like
        </button>
      </div>
    </div>
  )
}

export default UseMemo