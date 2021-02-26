import React from "react";

const Footer = () => {
  return (
    <footer>
      <span className="nav_brand">
        <h1>The Good Life</h1>
      </span>
      <ul className="nav_links">
        <li className="nav_link">About</li>
        <li className="nav_link">Recipes</li>
        <li className="nav_link">Stories</li>
        <li className="nav_link">Contacts</li>
      </ul>
      <span>
        <i className="social-icons fab fa-facebook-f"></i>
        <i className="social-icons fab fa-twitter"></i>
        <i className="social-icons fas fa-rss"></i>
      </span>
    </footer>
  );
};

export default Footer;
