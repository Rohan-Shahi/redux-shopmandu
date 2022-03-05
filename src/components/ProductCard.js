import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartAddDec from "./CartAddDec";
import "./style.css";

export default function ProductCard(props) {


  const [productCount,setProductCount] = useState(0);

  const {productName,price,stock,imgName,updateCart,product,productDate,id} = props;

  let newPrice = price.slice(1,price.length);
  let nepaliPrice = Number(newPrice) * 119;

  let imgSrc = `https://electronic-ecommerce.herokuapp.com/${imgName}`

  const increaseProduct = () =>{
    productCount === stock ? setProductCount(productCount) : setProductCount(productCount+1);
  }

  const decreaseProduct = () =>{
    productCount === 0 ? setProductCount(productCount) : setProductCount(productCount-1);
  }


  return (
    <div className="card" style={{ width: "18rem" }}>
      <Link to={`product/${id}`}>
      <div className="card-img">
        <img
          src = {imgSrc} 
          className="card-img-top"
          alt="laptop"
          
        />
      </div>
      </Link>

      <CartAddDec productCount={productCount} increaseProduct={increaseProduct} decreaseProduct={decreaseProduct}/>
      
      <div className="card-body">
        <div className="card-description">
          <p>{productName}</p>
          <div className="card-price">
            <p>Rs: {nepaliPrice}</p>
            <span>Stocks left: {stock}</span>
          </div>
          <p>Released on: {new Date(productDate).toString().slice(0,15)}</p>
        </div>

        <button onClick={()=>{updateCart(product,productCount)}} className="btn btn-primary addBtn">Add to Cart</button>
      </div>
    </div>
  );
}
