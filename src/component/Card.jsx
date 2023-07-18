import React, { useState } from "react";
import "./card.css";
import "./popup.css";

export const Card = ({ cartItem }) => {
  const [addProduct, setAddProduct] = useState(false);
  return (
    <section>
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
      {addProduct && <DisplayPopup />}
    </section>
  );
};

export const DisplayPopup = () => {
  return (
    <div className="popup">
      <ul className="popup__list">
        <li className="popup__item">Added to Cart!</li>
      </ul>
    </div>
  );
};
