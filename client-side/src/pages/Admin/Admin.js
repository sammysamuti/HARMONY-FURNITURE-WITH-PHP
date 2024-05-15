import React, { useState } from "react";
import "../Admin/Admin.css";
import AddProduct from "./AddProduct";

function Admin({ setIsAdmin }) {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const toggleAddProduct = () => {
    setShowAddProduct(!showAddProduct);
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };
  return (
    <>
      <div className="sides">
        <div className="container1">
          <div className="firstcolumn">
            <h2 className="h2header">
              <i className="fas fa-user"></i> Admin Panel
            </h2>
            <button className="addbutton orders">
              <i className="fas fa-shopping-cart"></i> Orders
            </button>
            <button className="addbutton users">
              <i className="fas fa-users"></i> Users Data
            </button>
            <div className="container1">
              <button className="addbutton products" onClick={toggleAddProduct}>
                <i className="fas fa-box"></i> Products
                <ul className="options-list">
                  <li>Add Products</li>
                  <li>Remove Products</li>
                  <li>Edit Products</li>
                </ul>
              </button>
            </div>
            {/* Logout button */}
            <button className="logout" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>

        {/* Conditional rendering: Display AddProduct component if showAddProduct is true */}

        {showAddProduct ? (
          <AddProduct />
        ) : (
          <>
            <div className="user-box" id="top">
              <div className="names">
                <p>Lily A.</p>
              </div>

              <div className="names">
                <p>John D.</p>
              </div>

              <div className="names">
                <p>Abraham D.</p>
              </div>
              <button className="buttons">
                Show More <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="user-box">
              <div className="names">
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
          </>
        )}
      </div>
    </>
  );
}

export default Admin;
