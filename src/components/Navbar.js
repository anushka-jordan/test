import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Home</a>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/anushka">Anushka</a>
        </li>
        <li>
          <a href="/jordan">Jordan</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
