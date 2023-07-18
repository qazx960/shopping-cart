import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navigation__bar">
      <div>
        <Link to="/">
          <h2>Shop Cart Project</h2>
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <h2>Cart</h2>
        </Link>
      </div>
    </nav>
  );
};
