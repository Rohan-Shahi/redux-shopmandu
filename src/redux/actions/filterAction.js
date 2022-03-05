import axios from "axios";
import { FILTER_PRODUCT } from "../constants/constant";

export const filterProduct = () => {
    return async (dispatch) => {
      let response = await axios.get(
        "https://electronic-ecommerce.herokuapp.com/api/v1/product"
      );
      if (response?.data?.data?.product) {
        dispatch({
          type: FILTER_PRODUCT,
          payload: response.data.data.product,
        });
      } 
    };
  };