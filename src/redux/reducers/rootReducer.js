import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { filterReducer } from "./filterReducer";
import { itemCountReducer } from "./itemCountReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
    product: productReducer,
    cart : cartReducer,
    countItem : itemCountReducer,
    filter : filterReducer

})