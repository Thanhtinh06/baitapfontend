import React from 'react'
import { useDispatch } from 'react-redux'
import { payChair } from './duck/action'

const UseDispatch = () => {
  const dispatch = useDispatch()
  return (
    <div className='container'>
      <hr />
      <h2>Use Dispatch</h2>
      <button className='btn btn-success' 
      onClick={()=>{
        dispatch(payChair())
      }}
      >
        Dispatch action
      </button>
    </div>
  )
}

export default UseDispatch