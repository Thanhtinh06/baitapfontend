import React, { Component } from 'react'
import './banner.css'

class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <h1>A Warm Welcome!</h1>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ullam laborum ipsum reiciendis animi, modi aliquam perferendis odio eos deleniti excepturi minus impedit numquam suscipit? Odit voluptas recusandae pariatur illo!</p>
        <button className="btn btn-primary">Call to action</button>
      </div>
    )
  }
}

export default Banner