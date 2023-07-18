import React, { useState } from "react";
import "./card.css";
import "./popup.css";

export const Card = ({ cartItem, cartAdded, setCartAdded, setCartItem }) => {
  const [addProduct, setAddProduct] = useState(false);

  const handleAddToCart = (productId) => {
    setAddProduct(true);
    setCartAdded(cartAdded + 1);
    // Set a timeout to hide the popup after 2 seconds (2000 milliseconds)
    setTimeout(() => {
      setAddProduct(false);
    }, 3000);

    setCartItem((prevCartItems) => {
      return prevCartItems.map((product) => {
        if (product.id === productId) {
          return { ...product, checked: true };
        }
        return product;
      });
    });
  };

  return (
    <section>
      <div className="card__list">
        {cartItem.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="img" className="card__img" />
            <h4>{item.title}</h4>
            <p>${item.price}</p>

            <button
              onClick={() => handleAddToCart(item.id)}
              className="card__button"
            >
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
