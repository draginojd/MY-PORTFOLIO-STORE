
import './App.css';
import React from "react";
import axios from "axios";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo.svg" alt="" className="logo" width="50" height="50"/>
      </div>
      <div className="shopping-cart-container">
        <img src="/shopping-cart.svg" alt="shopping cart icon" className="shopping-cart" width="50" height="50"/>
      </div>
      <div className="burger-container">
        <img src="/burgericon.svg" alt="burger sidebar button mobile" className="hamburger" width="50" height="50" />
      </div>
    </nav> 
  );
};

export default Navbar;
