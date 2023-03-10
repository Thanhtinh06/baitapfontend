import { connect } from 'react-redux';
import React, { Component } from 'react'
import './css/result.css'


class Result extends Component {

  render() {
    return (
      <div className='result'>
        <div className='your-choose'>
          <p>BẠN ĐANG CHỌN: <span className='text-danger-emphasis'> {this.props.yourChoose} </span></p>
        </div>
        <div className='your-result'>
          <p>Số bàn thắng <span className='text-success'> {this.props.countRoundWin}</span></p>
          <p>Tổng số lượt chơi <span className='text-primary-emphasis'> {this.props.countTotalRound} </span></p>
        </div>
        <div>
          <button className='btn btn-success' onClick={() => this.props.handlerPlayGame()} disabled={this.props.statusButton}>Play game</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    countTotalRound : state.gameReducer.countTotalRound,
    statusButton : state.gameReducer.disButton,
    yourChoose : state.gameReducer.yourChoose,
    countRoundWin : state.gameReducer.countRoundWin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerPlayGame : () => {
      let action = {
        type : 'ROLL_DICE'
      }
    dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Result)