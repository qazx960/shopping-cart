import React, { useState } from "react";
import "./card.css";

export const Card = ({ cartItem }) => {
  const [addProduct, setAddProduct] = useState(false);
  return (
    <div className="card__list">
      {cartItem.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="img" className="card__img" />
          <h4>{item.title}</h4>
          <p>{item.price}</p>
          <p>{item.category}</p>
          <button onClick={() => setAddProduct(!addProduct)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
