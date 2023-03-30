import React, { useContext } from 'react'
import { Context } from './UseContext'

const ChildContext = () => {
  const context = useContext(Context);
  console.log(context);
  return (
    <div>ChildContext</div>
  )
}

export default ChildContext