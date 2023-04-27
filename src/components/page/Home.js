import React from "react";
import Footer from "./layout/Footer";
import * as ig from '../img/img';
import "../style/main.css";
import Speciality from "./speciality";
import Menu from './Menu';
import Contact from "./layout/contact";
import Review from "./layout/review";
import Step from "./layout/steps";

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
            <h3>UNLIMITED <br/>
              MEDIUM 
              <span className="home-title"> PIZZAS</span></h3>
            <p>Get the best pizzas in town delivered to your doorstep!</p>
            <a href="#menu" className="btn orange">Order Now</a>
        </div>
        <div className="image">
          <img src={ig.home} alt="Delicious Pizza" />
        </div>
      </section>
        <Speciality />
        <Menu />
        <Step />
        <Review />
        <Contact/>
        <Footer />
    </div>
  );
};

export default Home;
