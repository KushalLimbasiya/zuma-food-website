import React, { useState } from "react";
import "../style/main.css";

const AddToCart = ({ item }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
    setCartOpen(true);
  };

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="add-to-cart">
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
      {cartOpen && (
        <div className="cart-dropdown">
          {cartItems.length > 0 ? (
            cartItems.map((cartItem, index) => (
              <div key={index} className="cart-item">
                <img src={cartItem.image} alt={cartItem.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{cartItem.name}</h3>
                  <p className="cart-item-price">{cartItem.price}</p>
                  <p className="cart-item-quantity">Quantity: {cartItem.quantity}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AddToCart;
