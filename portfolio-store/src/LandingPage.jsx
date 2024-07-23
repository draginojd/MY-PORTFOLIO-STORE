import './App.css';
import React from "react";
import axios from "axios";


function LandingPage() {
    return(
        <div className="landing-page-container">
            <img src="/background2.png" alt="background" className="background1"/>
            <h1 className="welcome">WELCOME TO MY<br/><h2>PORTFOLIO STORE</h2></h1>
            <div className="linkedin-container">
                <div className="linkedin-picture">
                    <img src="/profilepic.jpg" alt="" className="linkedin-picture" />
                    <h4>FOLLOW ME ON LINKEDIN</h4>
                    <div className="connect-button"><a href="https://se.linkedin.com/in/armin-fazli-khan-14858a243" target="_blank" className="connect-link">CONNECT</a></div>
                </div>
                <div className="explore-button"><a href="#" className="explore-link">START EXPLORING</a></div>
            </div>

        </div>
    );
};

export default LandingPage;