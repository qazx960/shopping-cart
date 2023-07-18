import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const Header = ({ cartAdded, setCartAdded }) => {
  return (
    <nav className="navigation__bar">
      <div>
        <Link to="/">
          <h2>Shop Cart Project</h2>
        </Link>
      </div>
      <div className="cart">
        <Link to="/cart">
          <FaShoppingCart size={24} />
          <span className="cart__count">{cartAdded}</span>
        </Link>
      </div>
    </nav>
  );
};
