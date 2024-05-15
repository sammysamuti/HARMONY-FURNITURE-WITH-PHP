import React from "react";
import "./Admin.css";
function AddProduct() {
  return (
    <div>
      <div class="demo-page">
        <main class="demo-page-content">
          <h1>Add Product</h1>
          <p className="padd">Add available items in stock</p>

          <form action="#" method="post" className="formadd">
            <div class="nice-form-group">
              <label for="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Enter product name"
                required
              />
            </div>

            <div class="nice-form-group">
              <label for="productQuantity">Product Quantity</label>
              <input
                type="number"
                id="productQuantity"
                name="productQuantity"
                placeholder="Enter quantity (1-100)"
                min="1"
                max="100"
                required
              />
            </div>

            <div class="nice-form-group">
              <label for="productUrl">Product URL</label>
              <input
                type="url"
                id="productUrl"
                name="productUrl"
                placeholder="Enter URL"
              />
            </div>

            <div class="nice-form-group">
              <label for="productImage">Product Image</label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
              />
            </div>

            <input type="submit" value="Submit" />
          </form>
        </main>
      </div>
    </div>
  );
}

export default AddProduct;
