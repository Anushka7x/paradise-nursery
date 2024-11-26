import React from "react";
import { useLocation } from "react-router-dom";
import "./ShoppingCart.css"
const ShoppingCart = () => {
  const location = useLocation();
  // Destructuring to get the 'cart' from location.state
  const { cart } = location.state || { cart: [] }; // Default to empty array if cart is undefined

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {/* Check if cart is not empty */}
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
