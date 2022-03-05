import { FETCH_API_SUCCESS, FETCH_API_FAILURE, SET_PRODUCT_LIST } from "../constants/constant";

const initialState = {
  productList: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_SUCCESS:
      return {
        ...state,
        productList: action.payload,
      };

    case FETCH_API_FAILURE:
      return {
        productList: action.payload,
      };
     
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList:action.payload,
      }  

    default:
      return state;
  }
};


