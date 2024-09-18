import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">Car Rental</div>
      
      <div className="menu">
        <ul>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>CARS</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>BOOKING</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
