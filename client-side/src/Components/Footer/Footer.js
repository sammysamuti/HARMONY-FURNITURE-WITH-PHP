import React from "react";
import "../Footer/Footer.css";
function Footer() {
  return (
    <>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="../about/about.html">about us</a>
                </li>
                <li>
                  <a href="../about/about.html">our services</a>
                </li>
                <li>
                  <a href="../about/about.html">privacy policy</a>
                </li>
                <li>
                  <a href="../about/about.html">affiliate program</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="../about/about.html">FAQ</a>
                </li>
                <li>
                  <a href="../about/about.html">shipping</a>
                </li>
                <li>
                  <a href="../about/about.html">returns</a>
                </li>
                <li>
                  <a href="../about/about.html">order status</a>
                </li>
                <li>
                  <a href="../about/about.html">payment options</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Shop</h4>
              <ul>
                <li>
                  <a href="../outdoor/outdoor.html">Outdoor Essentials</a>
                </li>
                <li>
                  <a href="../Bedroom/bedroom.html">Bed Room Furnitures</a>
                </li>
                <li>
                  <a href="../Kitchen/kitchen.html">Kitchen Cabinets</a>
                </li>
                <li>
                  <a href="../livingroom/living.html">Living Room Furnitures</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
