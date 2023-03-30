import { combineReducers } from 'redux'
import { movieBookingReducer } from './../../src/components/DemoHooks/duck/reducer'
const rootReducer = combineReducers({
    //quản lý các child reducer
    //key: value
    movieBookingReducer,
})

export { rootReducer }
