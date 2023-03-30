import React from 'react'
import { useSelector } from 'react-redux'

const UseSelector = () => {
  const movieBooking = useSelector(state => state.movieBookingReducer)
  console.log(movieBooking);
  return (
    <div className='container'>
      <hr></hr>
      <h2>UseSelector</h2>
    </div>
  )
}

export default UseSelector