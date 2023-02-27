import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className='bg-dark text-white'>
        <div className='container'>
            <p className='text-white'>Copyright © Your website 2022</p>
        </div>
      </footer>
    )
  }
}

export default Footer
