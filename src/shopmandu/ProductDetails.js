import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function ProductDetails() {
  const { id } = useParams();

  const productList = useSelector((state) => {
    return state.product.productList;
  });

  const product = productList.filter((prod) => {
    return prod.id === Number(id);
  });

  let newPrice = product[0].price.slice(1, product[0].price.length);
  let nepaliPrice = Number(newPrice) * 119;

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="product-box">
          <div className="product-img">
            <img
              src={`https://electronic-ecommerce.herokuapp.com/${product[0].image}`}
              alt={`${product[0].name}`}
            />
          </div>

          <div className="product-details">
            <h2 className="mb-5">Product Details</h2>
            <h4>{product[0].name}</h4>
            <h4> Price: Rs {nepaliPrice}</h4>
            <h4>Stocks: {product[0].stock}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
