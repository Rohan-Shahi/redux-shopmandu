import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ProductContainer from "./ProductContainer";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../redux/actions/productAction";
import { useSelector } from "react-redux";
import { setUserCart } from "../redux/actions/cartAction";
import { setCountItem } from "../redux/actions/itemCountAction";

export default function Shopmandu() {
  const dispatch = useDispatch();

  const userCart = useSelector((state) => {
    return state.cart.cartItems;
  });

  const countItem = useSelector((state) => {
    return state.countItem.count;
  });

  const updateCart = (item, count) => {
    if (count !== 0) {
      let index = userCart.findIndex((product) => product.id === item.id);

      if (index < 0) {
        item.count = count;
        dispatch(setUserCart([...userCart, item]));
      } else {
        userCart[index].count += count;
        dispatch(setUserCart([...userCart]));
      }
      dispatch(setCountItem(countItem + count));
    }
  };

  useEffect(() => {
    dispatch(fetchProduct())
  });

  return (
    <>
      <Navbar />
      <ProductContainer updateCart={updateCart} />
    </>
  );
}
