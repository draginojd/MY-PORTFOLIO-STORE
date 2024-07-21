
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
        <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
        <img src="/burgericon.svg" alt="burger sidebar button mobile" width="50" height="50" className="hamburger"/>
  
        <div className="hamburger-menu">
          <div className="hamburger-menu-link-container">
           <img src="#" alt="home img" className="hambruger-menu-home" />   <a href="#" className="hamburger-menu-link">HOME</a>
          </div> 
          <div className="hamburger-menu-link-container">
            <img src="#" alt="home img" className="hambruger-menu-home" />   <a href="#" className="hamburger-menu-link">HOME</a>
          </div> 
          <div className="hamburger-menu-link-container">
            <img src="#" alt="home img" className="hambruger-menu-home" />   <a href="#" className="hamburger-menu-link">HOME</a>
          </div> 
          <div className="hamburger-menu-link-container">
            <img src="#" alt="home img" className="hambruger-menu-home" />   <a href="#" className="hamburger-menu-link">HOME</a>
          </div> 
          <div className="hamburger-menu-link-container">
            <img src="#" alt="home img" className="hambruger-menu-home" />   <a href="#" className="hamburger-menu-link">HOME</a>
          </div> 
          <div className="hamburger-menu-link-container">
            <img src="#" alt="home img" className="hambruger-menu-home" />   <a href="#" className="hamburger-menu-link">HOME</a>
          </div> 
          <div className="hamburger-menu-link-container">
            <img src="#" alt="home img" className="hambruger-menu-home" />   <a href="#" className="hamburger-menu-link">HOME</a>
        </div> 
      

        </div>
      </div>

    </nav> 
  );
};

export default Navbar;
