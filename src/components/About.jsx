import React from "react";
import Aboutcar from "../assets/car1.png";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <img src={Aboutcar} />
      <div className="right-about">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore
          atque ut doloremque est. 
          <br></br>
          <br></br>
          Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Aliquid, ratione.
        </p>
        <button className="button-two">Get Started</button>
      </div>
    </div>
  );
};

export default About;
