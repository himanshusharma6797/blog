// what is action
// send data from action to store
// or we can say send data from react component to store 
// store is just like store room in real world
import {ADD_TO_CART, REMOVE_TO_CART} from '../constent'


// make function in action file
export const addToCart=(data)=>{
    console.log('action',data);
    return {
        type:ADD_TO_CART,
        data:data
        // in thiss data we will get all the information regardin this product
    }
} 
export const removeToCart=(data)=>{
    console.log('action remove to cart',data);
    return {
        type:REMOVE_TO_CART,
        data:data
    }
} 

// return data and type
// add constant and use constant in action