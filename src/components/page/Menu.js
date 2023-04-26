import React, { useState } from "react";
import * as ig from '../img/img';
import "../style/main.css";
import handleAddToCart from '../page/layout/cart';


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
        <button className="btn orange" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};


const Menu = () => {
  const [dishes, setDishes] = useState([
    {
      name: "Classic Margherita",
      description: "Our signature tomato sauce, fresh mozzarella, and basil on our crispy thin crust",
      price: "$12.99",
      image: ig.pizza1,
    },
    {
      name: "Meatball Madness",
      description: "Tomato sauce, mozzarella, homemade meatballs, roasted garlic, and parmesan",
      price: "$17.99",
      image: ig.pizza2,
    },
    {
      name: "Truffle Mushroom",
      description: "Mushroom cream sauce, mozzarella, wild mushrooms, and truffle oil",
      price: "$19.99",
      image: ig.pizza3,
    },
    {
      name: "Hawaiian BBQ",
      description: "BBQ sauce, mozzarella, ham, pineapple, and red onion",
      price: "$16.99",
      image: ig.pizza4,
    },
    {
      name: "Spicy Sausage",
      description: "Tomato sauce, mozzarella, spicy Italian sausage, roasted red peppers, and red onion",
      price: "$14.99",
      image: ig.pizza5,
    },
    {
      name: "Vegan Delight",
      description: "Tomato sauce, vegan cheese, artichoke hearts, roasted garlic, and kalamata olives",
      price: "$18.99",
      image: ig.pizza6,
    },
    {
      name: "Buffalo Chicken",
      description: "Buffalo sauce, mozzarella, chicken, and blue cheese crumbles",
      price: "$15.99",
      image: ig.pizza7,
    },
    {
      name: "Pesto Primavera",
      description: "Basil pesto, mozzarella, cherry tomatoes, zucchini, and yellow squash",
      price: "$20.99",
      image: ig.pizza8,
    },
    {
      name: "Philly Cheesesteak",
      description: "Garlic butter sauce, mozzarella, sliced steak, mushrooms, onions, and bell peppers",
      price: "$23.99",
      image: ig.pizza9,
    },
    {
      name: "Greek Garden",
      description: "Olive oil and garlic base, feta cheese, artichoke hearts, red onion, and spinach",
      price: "$17.99",
      image: ig.pizza10,
    }
]);

  return (
    <section className="menu" id='menu'>
      <div className="menu">
        <h2 className="section-title"><span className="title"> Menu</span> </h2>
        <div className="dishes-container">
          <DishCard dish={dishes[0]} />
          <DishCard dish={dishes[1]} />
          <DishCard dish={dishes[2]} /> 
          <DishCard dish={dishes[3]} /> 
          <DishCard dish={dishes[4]} /> 
          <DishCard dish={dishes[5]} /> 
          <DishCard dish={dishes[6]} /> 
          <DishCard dish={dishes[7]} /> 
          <DishCard dish={dishes[8]} /> 
          <DishCard dish={dishes[9]} />  
        </div>
      </div>
    </section>
  );
};
 
export default Menu;