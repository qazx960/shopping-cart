import React from "react";
import { CategoryIcons } from "../CategoryIcons";
import "./filters.css";

export const Electronics = ({ cartItem }) => {
  const filter = cartItem.filter((item) => item.category === "electronics");
  return (
    <section className="filter__section">
      <h1>
        <CategoryIcons />
      </h1>
      <div className="card__list">
        {filter.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="img" className="card__img" />
            <h4>{item.title}</h4>
            <p>${item.price}</p>

            <button className="card__button">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};
