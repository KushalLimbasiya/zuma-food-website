import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/main.css';
import * as ig from '../../img/img';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {
  return (
    <header>
      <Link to='/' className='logo'>
        <img src={ig.logo} alt="logo" className="logo-img" />
        Zuma
      </Link>

    <div id='menu-bar' class="fas fa-bars" >
    <FontAwesomeIcon icon="fa-solid fa-bars"/> </div>
    <nav className="navbar">
      <a href="#home">home</a>
      <a href="#Speciality">Speciality</a>
      <a href="#menu">Menu</a>
      <a href="#Contact">Contact</a>
      <a href="#About">About</a>
      {/* <Header /> */}
    </nav>
    </header>
  );
};

export default Navbar;