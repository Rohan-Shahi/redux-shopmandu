import React, { useEffect } from "react";
import "bootstrap/js/dist/offcanvas.js";
import "./style.css";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setProductList } from "../redux/actions/productAction";
import { filterProduct } from "../redux/actions/filterAction";
import { useDispatch } from "react-redux";
import { setUserCart } from "../redux/actions/cartAction";
import { setCountItem } from "../redux/actions/itemCountAction";

export default function ProductContainer(props) {
  const { updateCart } = props;

  const productList = useSelector((state) => {
    return state.product.productList;
  });

  const userCart = useSelector((state) => {
    return state.cart.cartItems;
  });

  const toggleCart = useSelector((state) => {
    return state.cart.toggleCart;
  });

  const countItem = useSelector((state) => {
    return state.countItem.count;
  });

  const filterProd = useSelector((state) => {
    return state.filter.filterProduct;
  })

  useEffect(() => {
      dispatch(filterProduct())
  },[])

  const dispatch = useDispatch();

  let total = 0;

  //For removing cart item

  const removeCartItem = (product) => {
    let cartItems = userCart.filter((item) => {
      return item.id !== product.id;
    });
    dispatch(setUserCart(cartItems));
    dispatch(setCountItem(countItem - product.count));
  };

  //for filtering products
  const applyFilter = () => {
    let selectorValue = document.getElementById("filter-select").value;
    let minValue = document.getElementById("filter-min").value;
    let maxValue = document.getElementById("filter-max").value;
    let filteredProduct;
    console.log(filterProd);

    if (selectorValue !== "") {
      if (selectorValue !== null && minValue !== "" && maxValue !== "") {
        filteredProduct = filterProd.filter((product) => {
          let newPrice = product.price.slice(1, product.price.length);
          let nepaliPrice = Number(newPrice) * 119;
          return (
            (nepaliPrice >= minValue && nepaliPrice) <= maxValue &&
            product.category[1] === selectorValue
          );
        });
      } else if (selectorValue) {
        filteredProduct = filterProd.filter((product) => {
          return product.category[1] === selectorValue;
        });
      }
      console.log(filteredProduct);
      dispatch(setProductList(filteredProduct));
    }
  };

  return (
    <>
      {toggleCart ? (
        <div className="product-container">
          <div className="cart-list">
            <div
              className="card border-success mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header bg-transparent border-dark">
                Items-added
              </div>
              {userCart.map((item) => (
                <div key={item.id} className="card-body cart-card">
                  <div className="cart-img">
                    <img
                      src={`https://electronic-ecommerce.herokuapp.com/${item.image}`}
                      alt="laptop"
                    />
                  </div>

                  <div className="cart-name">
                    {/* {setTotal(total + Number(item.price) * Number(item.count))} */}
                    <span style={{ display: "none" }}>
                      {
                        (total +=
                          item.price.slice(1, item.price.length) *
                          119 *
                          item.count)
                      }
                    </span>
                    <p>{item.name}</p>
                    <span>
                      Rs {item.price.slice(1, item.price.length) * 119}
                    </span>
                  </div>

                  <div className="cart-stock">
                    <span>item : {item.count}</span>
                    <button
                      onClick={() => {
                        removeCartItem(item);
                      }}
                      className="cart-remove"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="card-footer bg-transparent border-dark cart-bottom">
                <p>Total Amount: Rs {total}</p>
                <button className="checkout-btn">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/checkout"
                  >
                    Checkout
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="product-header">
            <h4 className="product-title">Products</h4>
            <button className="product-btn">
              {" "}
              <i className="bi bi-funnel-fill"></i>Filter
            </button>
          </div>

          <div className="row product-row">
            {productList.map((product) => (
              
              <div key={product.id} className="col-md-3">
              
               <ProductCard
                  productName={product.name}
                  price={product.price}
                  stock={product.stock}
                  imgName={product.image}
                  category={product.category}
                  id={product.id}
                  updateCart={updateCart}
                  product={product}
                  productDate={product.createDate}
                />
            
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="product-container">
          <div className="product-header">
            <h4 className="product-title">Products</h4>
            <button
              className="product-btn"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              {" "}
              <i className="bi bi-funnel-fill"></i>Filter
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Filter</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <h6>Price</h6>
                <div className="price-range">
                  <input type="number" placeholder="min" id="filter-min" />
                  -
                  <input type="number" placeholder="max" id="filter-max" />
                </div>

                <h6>Date</h6>
                <input
                  className="date-input"
                  type="date"
                  placeholder="dd-mm-yyyy"
                />

                <h6>Category</h6>
                <select id="filter-select" className="category-select">
                  <option value="">Select Category</option>
                  <option value="laptop">Laptop</option>
                  <option value="mobile">Mobile</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="headseat">Headset</option>
                  <option value="watch">Watch</option>
                </select>

                <div className="filter-btn">
                  <button
                    className=" filter-cancel"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      applyFilter();
                    }}
                    className="filter-apply"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row product-row">
            {productList.map((product) => (
              <div key={product.id} className="col-md-3">
                <ProductCard
                  productName={product.name}
                  price={product.price}
                  stock={product.stock}
                  imgName={product.image}
                  category={product.category}
                  id={product.id}
                  updateCart={updateCart}
                  product={product}
                  productDate={product.createDate}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
