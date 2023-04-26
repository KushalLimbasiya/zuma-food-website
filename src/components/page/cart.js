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

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="add-to-cart">
      <button className="add-to-cart-btn" onClick={handleCartClick}>
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
                  <button className="remove-from-cart-btn" onClick={() => handleRemoveFromCart(index)}>Remove</button>
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
