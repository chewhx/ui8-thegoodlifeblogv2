import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="nav_links">
        <li className="nav_link nav_brand">
          <h1>The Good Life</h1>
        </li>
        <li className="nav_link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav_link">
          <NavLink to="/recipes">Recipes</NavLink>
        </li>
        <li className="nav_link">
          <NavLink to="/stories">Stories</NavLink>
        </li>
        <li className="nav_link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
