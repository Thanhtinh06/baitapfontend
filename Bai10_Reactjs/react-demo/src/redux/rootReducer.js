import { combineReducers } from "redux";
import cartReducer from '../redux/cartReducer'
const rootReducer = combineReducers ({
  stateCart: cartReducer //state giỏ hàng
})

export default rootReducer