import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
function Navbar() {
  const showMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      navLinks.style.right = "0";
    }
  };

  const hideMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      navLinks.style.right = "-200px";
    }
  };

  return (
    <>
      <nav>
        <p>
          <i className="fas fa-handshake"></i> Harmony
        </p>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" onClick={hideMenu}></i>

          <ul>
            <Link to="/">
              <li> Home </li>
            </Link>

            <Link to="/about">
              <li>About </li>
            </Link>
            <li>
              <a href="#">Products</a>
              <ul
                style={{
                  backgroundColor: "rgba(51, 51, 51, 0.5)",
                  position: "absolute",
                  top: "100%",
                  left: "0",
                }}
              >
                <li>
                  <a href="../Bedroom/bedroom.html">Bedroom</a>
                </li>
                <li>
                  <a href="../livingroom/living.html">Livingroom</a>
                </li>
                <li>
                  <a href="../outdoor/outdoor.html">Outdoor</a>
                </li>
                <li>
                  <a href="../Kitchen/kitchen.html">Kitchen</a>
                </li>
              </ul>
            </li>
            <Link to="/login" className="Link">
              <li> Login </li>
            </Link>
            <Link to="/contact" className="Link">
              <li> Contact Us </li>
            </Link>

            <li>
              <a href="../cart/cart.html" id="viewCartLink">
                View Cart
              </a>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={showMenu}></i>
      </nav>
    </>
  );
}

export default Navbar;
