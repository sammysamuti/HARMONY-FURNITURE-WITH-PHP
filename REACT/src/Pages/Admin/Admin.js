import React from "react";
import "../Admin/Admin.css";
function Admin() {
  return (
    <>
      <div class="sides">
        <div class="container">
          <div class="firstcolumn">
            <h2>
              <i class="fas fa-user"></i> Admin Panel
            </h2>
            <button class="button orders">
              <i class="fas fa-shopping-cart"></i> Orders
            </button>
            <button class="button users">
              <i class="fas fa-users"></i> Users Data
            </button>
            <div class="container">
              <button class="button products">
                <i class="fas fa-box"></i> Products
                <ul class="options-list">
                  <li>Add Products</li>
                  <li>Remove Products</li>
                  <li>Edit Products</li>
                </ul>
              </button>
            </div>
          </div>
        </div>
        <div class="user-box" id="top">
          <div class="png">
            <img src="../admin/adminImage/user7.png" alt="" />
          </div>
          <div class="name">
            <p>Lily A.</p>
          </div>
          <div class="png">
            <img src="../admin/adminImage/user9.webp" alt="" />
          </div>
          <div class="name">
            <p>John D.</p>
          </div>
          <div class="png">
            <img src="../admin/adminImage/user6.png" alt="" />
          </div>
          <div class="name">
            <p>Abraham D.</p>
          </div>
          <button class="buttons">
            Show More <i class="fas fa-plus"></i>
          </button>
        </div>
        <div class="user-box">
          <div class="text">
            <h2>Income Status</h2>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <a href="#top" class="scroll">
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </a>
    </>
  );
}

export default Admin;
