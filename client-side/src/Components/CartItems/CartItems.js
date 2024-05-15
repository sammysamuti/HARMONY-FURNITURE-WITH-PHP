import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
  } = useContext(ShopContext);

  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const lineItems = all_product
      .filter((product) => cartItems[product.id] > 0)
      .map((product) => ({
        price: product.price,
        name: product.name,
        quantity: cartItems[product.id],
      }));

    try {
      const response = await fetch("http://localhost/PHP/checkout.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.error) {
        console.error(data.error);
      } else {
        window.location.href = data.url; // Redirecting to the Stripe checkout session URL
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={product.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.price}</p>

                <div className="cartitems-quantities">
                  <button
                    className="cartitems-quantity"
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                  >
                    -
                  </button>
                  <button className="cartitems-quantity">
                    {cartItems[product.id]}
                  </button>
                  <button
                    className="cartitems-quantity"
                    onClick={() => {
                      addToCart(product.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <p>${product.price * cartItems[product.id]}</p>
                <button
                  className="cartitems-remove"
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                >
                  Remove
                </button>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee </p>
              <p>Free</p>
            </div>
            <hr />
            <div>
              <h3>Total</h3>
              <h3>$ {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleCheckout} disabled={loading}>
            {loading ? "Loading..." : "PROCEED TO CHECKOUT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
