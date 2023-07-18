import React, { useState } from "react";
import "./card.css";
import "./popup.css";

export const Card = ({ cartItem, cartAdded, setCartAdded }) => {
  const [addProduct, setAddProduct] = useState(false);

  const handleAddToCart = () => {
    setAddProduct(true);
    setCartAdded(cartAdded + 1);
    // Set a timeout to hide the popup after 2 seconds (2000 milliseconds)
    setTimeout(() => {
      setAddProduct(false);
    }, 3000);
  };

  return (
    <section>
      <div className="card__list">
        {cartItem.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="img" className="card__img" />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <p>{item.category}</p>
            <button onClick={handleAddToCart} className="card__button">
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
