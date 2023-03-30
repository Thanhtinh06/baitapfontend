import { combineReducers } from "redux";
import userReducer from "./../user-management/duck/reducer";

const rootReducer = combineReducers({
  //quản lý các child reducer
  //key: value
  userReducer, //userReducer: userReducer
});

export { rootReducer };
