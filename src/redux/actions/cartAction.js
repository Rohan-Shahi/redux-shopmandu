import { SET_USER_CART, TOGGLE_CART, USER_CART } from "../constants/constant"

export const cartAction = (cartItems) =>{
    return {
        type: USER_CART,
        payload: cartItems
    }
}

export const setUserCart = (cartItems) =>{
    return {
        type : SET_USER_CART,
        payload: cartItems
    }
}

export const toggleCart = (toggleValue) =>{
    return{
        type: TOGGLE_CART,
        payload: toggleValue
    }
}