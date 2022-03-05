import { FETCH_API_SUCCESS, SET_PRODUCT_LIST } from "../constants/constant";
import { FETCH_API_FAILURE } from "../constants/constant";
import axios from "axios";

export const fetchProduct = () => {
  return async (dispatch) => {
    let response = await axios.get(
      "https://electronic-ecommerce.herokuapp.com/api/v1/product"
    );
    if (response?.data?.data?.product) {
      dispatch({
        type: FETCH_API_SUCCESS,
        payload: response.data.data.product,
      });
    } else {
      dispatch({
        type: FETCH_API_FAILURE,
        payload: [],
      });
    }
  };
};

export const setProductList = (productList) =>{
  return {
    type: SET_PRODUCT_LIST,
    payload : productList
  }
}
