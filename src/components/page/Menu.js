import React, { useState } from "react";
import * as ig from '../img/img';
import "../style/main.css";

const DishCard = ({ dish, addToCart }) => {
  const { name, description, price, image } = dish;

  const handleClick = () => {
    addToCart(dish);
  };

  return (
    <div className="box">
      <img src={image} alt={name} />
      <div className="price">{price}</div>
      <h3>{name}</h3>
      <button className="add-to-cart" onClick={handleClick}>
        Add to Cart
      </button>
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

  const addToCart = (dish) => {
    console.log(`Adding ${dish.name} to cart`);
  };

  return (
    <section className="menu" id="menu">
      <div className="popular">
        
        <h1 className="heading">Menu</h1>
        <div className="box-container">
          <DishCard dish={dishes[0]} addToCart={addToCart} />
          <DishCard dish={dishes[1]} addToCart={addToCart} />
          <DishCard dish={dishes[2]} addToCart={addToCart} />
        </div>
      </div>
    </section>
  );
};

export default Menu;
