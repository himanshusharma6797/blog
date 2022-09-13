import { combineReducers } from 'redux'
import {cartItems} from './reducers'
// import {secondReducer} from './reducers'
// import {thirdReducer} from './reducers'

// this is high level component
export default combineReducers({
    // merging the reducers
    cartItems,
    // secondReducer,
    // thirdReducer
});