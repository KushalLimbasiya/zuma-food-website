import React from "react";
import Footer from "./layout/Footer";
import * as ig from '../img/img';
import "../style/main.css";
import Speciality from "./speciality";
import Menu from './Menu';

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
            <h3>UNLIMITED <br/>
              MEDIUM 
              <span className="home-title"> PIZZAS</span></h3>
            <p>Get the best pizzas in town delivered to your doorstep!</p>
            <a href="#menu" className="btn yellow">Order Now</a>
        </div>
        <div className="image">
          <img src={ig.home} alt="Delicious Pizza" />
        </div>
      </section>
        <Speciality />
        <Menu />
      <Footer />
    </div>
  );
};

export default Home;