import React from "react";
import Logo from "./assets/Logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <img src={Logo} alt="Little Lemon Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;