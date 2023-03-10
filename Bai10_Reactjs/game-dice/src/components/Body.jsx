import React, { Component } from 'react'
import Bet from './Bet'
import Dice from './Dice'
import Result from './Result'
import './css/body.css'
import NotiRound from './NotiRound'

export default class Body extends Component {
  render() {
    return (
      <section className='container main-game'>
          <Dice />
          <Bet />
          <Result />
          <NotiRound />          
      </section>
    )
  }
}
