import { Component } from 'react'
import { connect } from 'react-redux'
import './css/noti.css'

class NotiRound extends Component {
  status = {
    1: "Thắng",
    2: "Thua"
  }
  renderNoti = (num) => {
    if (num === 1) {
      return (
        <div className='text-success'>Xin chúc mừng bạn, bạn đã chiến thắng</div>
      )
    }
    return (
      <div className='text-danger-emphasis'>
        Rất tiết bạn đã thua, chơi lại nhé!!
      </div>
    )
  }

  render() {
    if (this.props.statusGame){
      return (
        <div className='noti'>
            {this.renderNoti(this.props.noti)}
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {statusGame : state.gameReducer.statusPlay,
    noti : state.gameReducer.noti
  }
}

export default connect(mapStateToProps,null)(NotiRound)