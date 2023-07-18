import React from "react";
import "./cartpage.css";

export const CartPage = ({ cartItem, loading }) => {
  const checkedProducts = cartItem.filter(
    (product) => product.checked === true
  );

  return (
    <section className="cart__layout">
      <div className="cart__container">
        <h2>Cart ({checkedProducts.length})</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {checkedProducts.map((product) => (
              <div key={product.id} className="cart__item">
                <img src={product.image} alt="" className="cart__image" />
                <h5> {product.title}</h5>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
