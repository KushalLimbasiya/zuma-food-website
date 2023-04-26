import React, { useState } from "react";
import * as ig from '../img/img';
import "../style/main.css";


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
        <button className="add-to-cart" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};


const Menu = () => {
  const [dishes, setDishes] = useState([
    {
      name: "Pizza Margherita",
      description: "Tomato sauce, mozzarella cheese, and fresh basil",
      price: "$12.99",
      image: ig.pizza1,
    },
    {
      name: "Spaghetti Bolognese",
      description: "Classic Italian dish with beef and tomato sauce",
      price: "$15.99",
      image: ig.pizza2,
    },
    {
      name: "Steak Frites",
      description: "Grilled steak with crispy French fries",
      price: "$19.99",
      image: ig.pizza3,
    },
  ]);

  return (
    <section className="menu" id='menu'>
      <div className="menu">
        <h2 className="section-title">Menu</h2>
        <div className="dishes-container">
          <DishCard dish={dishes[0]} />
          <DishCard dish={dishes[1]} />
          <DishCard dish={dishes[2]} /> 
        </div>
      </div>
    </section>
  );
};

export default Menu;
