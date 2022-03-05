import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../redux/actions/cartAction";

export default function Navbar() {

  const toggleValue = useSelector((state) => {
    return state.cart.toggleCart;
  })

  const countItem = useSelector((state) => {
    return state.countItem.count;
  })

  const dispatch = useDispatch();


  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <h5>Shopmandu</h5>
       
            <ul className="navbar-list">
              <li>Home</li>
              <li>
                <i className="bi bi-cart2" onClick={()=>{dispatch(toggleCart(toggleValue))}}>  </i>
                <span>{countItem}</span>
              </li>
              <li><img src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg" alt="user" /></li>
            </ul>
    
        </div>
      </nav>
    </>
  );
}
