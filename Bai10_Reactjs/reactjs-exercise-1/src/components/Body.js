import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'
import './body.css'


class Body extends Component {
  render() {
    return (
      <section className='body'>
        <div className='container'>
            <Banner />
            <Item />
        </div>
      </section>
    )
  }
}

export default Body