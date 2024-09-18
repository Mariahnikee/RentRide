import React from "react";
import heroimg from "../assets/banner-car.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <div className="tittle">
          <h2>Effortless</h2>
          <h1>Car Rental</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Ratione
          veritatis explicabo <br></br>quibusdam quae reprehenderit ab
        </p>
        <div className="hero-button-secton">
          <button className="hero-button">Get Started</button>
        </div>
      </div>

      <img src={heroimg} alt="yello-hero-car" />

    </div>
  );
};

export default Hero;
