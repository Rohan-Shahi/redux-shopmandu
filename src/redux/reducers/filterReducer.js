import { bindActionCreators } from "redux"
import { FILTER_PRODUCT } from "../constants/constant"

const initialState = {
    filterProduct : []
}

export const filterReducer = (state = initialState, action) =>{
    switch(action.type){
        case FILTER_PRODUCT:
            return {
                ...state,
                filterProduct : action.payload
            }

        default: 
        return state    
    }
}