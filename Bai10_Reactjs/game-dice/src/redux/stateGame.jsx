const stateGame = {
  list_dice : [1,1,1],
  countTotalRound : 0,
  countRoundWin: 0,
  yourChoose: "",
  statusPlay : false,
  noti : 0,
  disButton: true,
}

export const gameReducer = ( state = stateGame,action ) => {
  const rollDice = () => {
    let list_result = [];
    for (let i = 0; i <3;i++){
      list_result.push(Math.floor(Math.random()*(7-1)+1))
    }
    return list_result
  }

  const handlerBet = (value) =>{
    if(value === 1){
      return "TÀI"
    }
    return "XỈU"
  }

  const checkWin = (yourChoose,list_dice) => {
    let resultDice = '';
    let result;
    let sumDice = list_dice.reduce((total,dice)=>{
      return total += dice
    },0);
    if (sumDice >= 3 && sumDice <= 10){
      resultDice = 'XỈU'
    }else {
      resultDice = 'TÀI'
    }
    if (resultDice === yourChoose){
      result = true
    } else {
      result = false
    }
    return result
  }

  switch (action.type) {
    case "ROLL_DICE":
      let listDiceUpdate = [...state.list_dice];
      let countRound = state.countTotalRound;
      listDiceUpdate = rollDice();
      countRound += 1;
      let status = checkWin(state.yourChoose,listDiceUpdate);
      if (status){
        state.countRoundWin += 1
        state.noti = 1
      }else{
        state.noti = 2
      }
      state.statusPlay = true
      
      return {...state,
      list_dice : listDiceUpdate,
      countTotalRound : countRound,
      noti : state.noti,
      statusPlay : state.statusPlay,
      countRoundWin : state.countRoundWin,

    }
    case "CHOOSE_BET":
      state.yourChoose = handlerBet(action.value);
      state.disButton = false
      return {...state,
        yourChoose : state.yourChoose,
        disButton : state.disButton
      }
    default:
      return {...state};
  }
}