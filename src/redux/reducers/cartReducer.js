import { SET_USER_CART, TOGGLE_CART, USER_CART } from "../constants/constant"

const initialState = {
    cartItems : [],
    toggleCart : false
}

export const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case USER_CART:
            return {
                ...state,
                cartItems : action.payload
            }

        case SET_USER_CART:
            return{
                ...state,
                cartItems : action.payload
            }
            
        case TOGGLE_CART:
            return{
                ...state,
                toggleCart : !action.payload
            }    

        default:
            return state 
    }
}