import React from "react";
import "./categoryIcon.css";
import { Link } from "react-router-dom";

export const CategoryIcons = () => {
  return (
    <div className="filters">
      <Link to="/">
        <div className="filter__item">All</div>
      </Link>
      <Link to="/category/electronics">
        <div className="filter__item">Electronics</div>
      </Link>
      <Link to="/category/jewelery">
        <div className="filter__item">Jewelery</div>
      </Link>
      <Link to="/category/clothing/men">
        <div className="filter__item">Men's Clothing</div>
      </Link>
      <Link to="/category/clothing/women">
        <div className="filter__item">Women's clothing</div>
      </Link>
    </div>
  );
};
