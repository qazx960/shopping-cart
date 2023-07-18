import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = ({ cartAdded, setCartAdded }) => {
  return (
    <nav className="navigation__bar">
      <div>
        <Link to="/">
          <h2>Shop Cart Project</h2>
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <h2>Cart {cartAdded}</h2>
        </Link>
      </div>
    </nav>
  );
};
