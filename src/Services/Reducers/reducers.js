import {ADD_TO_CART, REMOVE_TO_CART} from '../constent'

const initialState = {
    cartData:[]
    // this cartData will contain all the data fro the action function that return the data
    // this cartData is array type because in the future we have other items also to add
}

// reducer function takes 2 parameters
export function cartItems(state=[initialState], action){
    // action coming is decided in the container
    // we will using switch cases in this function 
    switch(action.type){
        // checking the type in the switch for performing the operation
        case ADD_TO_CART:
            console.log('reducer',action);
            return [
                ...state,
                // the old data in the state then
                {cartData:action.data}
            ]
            // eslint-disable-next-line
            break;
        case REMOVE_TO_CART:
            state.pop()
            return [
                ...state
            ]
            // eslint-disable-next-line
            break;
        default:
            return state
                // this state is not involving any relation to the component state
    }
}

export function secondReducer(){
}
export function thirdReducer(){
}