import React from "react";
import "./Hero.css";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* left side */}
        <div className="left">
          <p>Buy & sell crypto 24/7 using your retirement account</p>
          <h1>Invest in Cryptocurrency using your IRA</h1>
          <p>Buy, sell, and store hundreds of cryptocurrencies</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn more</button>
          </div>
        </div>

        {/* right side */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
