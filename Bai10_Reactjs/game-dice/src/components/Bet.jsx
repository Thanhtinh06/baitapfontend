import { connect } from 'react-redux'
import React, { Component } from 'react'
import './css/bet.css'
class Bet extends Component {


  render() {
    return (
      <section className='play-bet'>
        <button className='btn btn-bet' onClick={()=>{this.props.handlerBet(1)}}>TÀI</button>
        <button className='btn btn-bet' onClick={()=>{this.props.handlerBet(2)}}>XỈU</button>
      </section>
    )
  }
}





const mapDispatchToProps = (dispatch) => {
  return {
    handlerBet: (value) => {
      let action = {
        type : "CHOOSE_BET",
        value
      }
      dispatch(action)
    }
  }
}

export default connect(null,mapDispatchToProps)(Bet);