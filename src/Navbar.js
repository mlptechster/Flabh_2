// Navbar.js

import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/About">About Us</Link></li>
          <li className="nav-item"><Link to="/Services">Services</Link></li>
          <li className="nav-item"><Link to="/Career">Career</Link></li>
          <li className="nav-item"><Link to="/Contact">Contact Us</Link></li>
          
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-nav">
          <li className="nav-item">Login</li>
          <li className="nav-item">Register</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
