import { COUNT_ITEM } from "../constants/constant"

const initalState = {
    count : 0
}

export const itemCountReducer = (state = initalState, action) =>{
    switch(action.type){
        case COUNT_ITEM:
            return{
                ...state,
                count : action.payload
            }

        default:
            return state    
    }
}