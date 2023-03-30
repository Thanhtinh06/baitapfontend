import React, { forwardRef, useImperativeHandle, useState } from "react";

const UseRefChild = (props,ref) => {
  const [like, setLike] = useState(1);
  console.log('ref',ref);
  console.log('props',props);

  // cach1: 
  useImperativeHandle(ref,()=>{
    return like
  })

  //cach2: dung useEffect
  // useEffect(()=>{
  //   ref.current = like
  // },[like])
  return (
    <div className="mt-5">
      <hr />
      <h3>UseRefChild</h3>
      <div className="mt-5">
        <p>Like: {like}</p>
        <button onClick={() => setLike(like + 1)}> + like</button>
      </div>
    </div>
  );
};

export default forwardRef(UseRefChild);
