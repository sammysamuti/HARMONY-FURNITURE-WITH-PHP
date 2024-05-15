import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "../Navbar/Navbar.css";
import cartIcon from "../../assests/cart-icon.jpeg";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
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
  const { getTotalCartItems } = useContext(ShopContext);
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
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
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
                <Link to="/bedroom">
                  <li>Bedroom</li>
                </Link>

                <Link to="/livingroom">
                  <li>livingroom</li>
                </Link>
                <Link to="/outdoors">
                  <li>Outdoor</li>
                </Link>
                <Link to="/kitchen">
                  <li>Kitchen</li>
                </Link>
              </ul>
            </li>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <li>
              <FaPhoneAlt />
            </li>
            <Link to="/cart">
              {" "}
              <li>
                {" "}
                <FaCartArrowDown />{" "}
              </li>
            </Link>

            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={showMenu}></i>
      </nav>
    </>
  );
}

export default Navbar;
