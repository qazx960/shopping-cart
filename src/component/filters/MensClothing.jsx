import React from "react";
import { CategoryIcons } from "../CategoryIcons";
import "./filters.css";
import { useState } from "react";
import { DisplayPopup } from "../DisplayPopup";

export const MensClothing = ({
  cartItem,
  setCartAdded,
  setCartItem,
  cartAdded,
}) => {
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

  const filter = cartItem.filter((item) => item.category === "men's clothing");
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
