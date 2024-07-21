
import './App.css';
import React from "react";
import axios from "axios";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo1.svg" alt="" className="logo" width="50" height="50"/>
      </div>
      <div className="shopping-cart-container">
        <img src="/shopping-cart.svg" alt="shopping cart icon" className="shopping-cart" width="50" height="50"/>
      </div>


      <div className="burger-container">
        <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
        <img src="/burgericon.svg" alt="burger sidebar button mobile" width="50" height="50" className="hamburger"/>
  
        <div className="hamburger-menu">
          <div className="hamburger-menu-link-container">
            <img src="/car-sale.svg" alt="home img" className="hamburger-menu-home" />   
            <a href="#" className="hamburger-menu-link">BUY A CAR</a>
          </div> 
          <div className="hamburger-menu-link-container">
            <img src="/account.svg" alt="home img" className="hamburger-menu-home" />   
            <a href="#" className="hamburger-menu-link">PROFILE</a>
          </div> 
          <div className="hamburger-menu-link-container">
            <img src="/chat.svg" alt="home img" className="hamburger-menu-home" />   
            <a href="#" className="hamburger-menu-link">CHATS</a>
          </div> 
          <div className="hamburger-menu-link-container">
            <img src="/about.svg" alt="home img" className="hamburger-menu-home" />   
            <a href="#" className="hamburger-menu-link">ABOUT US</a>
          </div> 
          <div className="hamburger-menu-link-container">
            <img src="/headset.svg" alt="home img" className="hamburger-menu-home" />   
            <a href="#" className="hamburger-menu-link">SUPPORT</a>
          </div> 
          <div className="hamburger-menu-link-container">
            <img src="/gear.svg" alt="home img" className="hamburger-menu-home" />   
            <a href="#" className="hamburger-menu-link">SETTINGS</a>
        </div> 
        <div className="hamburger-menu-link-container">
            <img src="/login.svg" alt="home img" className="hamburger-menu-home" />   
            <a href="#" className="hamburger-menu-link">LOG IN</a>
        </div> 


        </div>
      </div>

    </nav> 
  );
};

export default Navbar;
