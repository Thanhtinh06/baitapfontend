import { connect } from "react-redux";
import { Component } from "react";
import "./css/dice.css";

class Dice extends Component {
  list_dice = {
    1: "../image/1.png",
    2: "../image/2.png",
    3: "../image/3.png",
    4: "../image/4.png",
    5: "../image/5.png",
    6: "../image/6.png",
  };
  renderListDice = (listNumRandom) => {
    return listNumRandom.map((num,index) => {
      return <img src={this.list_dice[num]} alt="" className="img-dice" key={index}></img>;
    });
  };

  render() {
    return (
      <section className="dice">
        <div className="group-dice">
          {this.renderListDice(this.props.list_dice)}
        </div>
      </section>
    );
  }
}

//connect state in store 

const mapStateToProps = (state) => {
  return {list_dice : state.gameReducer.list_dice}
}

export default connect(mapStateToProps,null)(Dice);