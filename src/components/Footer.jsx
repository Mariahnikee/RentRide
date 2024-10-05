import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <h3>Car Rental</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur.<br></br> Lorem ipsum dolor sit amet
          consectetur <br></br>adipisicing elit.
        </p>
        <address>Abuja,Nigeria</address>
        <p>+234783322343</p>
        <div className="social-links">
        <a href="https://www.facebook.com" target="blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram" target="blank">
              <i className="fab fa-instagram"></i>
            </a>
        </div>
      </div>

      <div className="footer-column">
        <h3>Important Links</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Important Links</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Important Links</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
