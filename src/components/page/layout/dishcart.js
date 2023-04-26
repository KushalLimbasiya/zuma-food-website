import React from "react";

const DishCard = ({ dish, addToCart }) => {
  const { name, description, price, image } = dish;

  const handleClick = () => {
    addToCart(dish);
  };

  return (
    <div className="dish-card">
      <img src={image} alt={name} className="dish-image" />
      <div className="dish-details">
        <h3 className="dish-name">{name}</h3>
        <p className="dish-description">{description}</p>
        <p className="dish-price">{price}</p>
        <button className="btn orange" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DishCard;
