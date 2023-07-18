import React from "react";
import "./cartpage.css";

export const CartPage = ({ cartItem, loading }) => {
  const checkedProducts = cartItem.filter(
    (product) => product.checked === true
  );

  return (
    <section className="cart__layout">
      <div className="cart__container">
        <h2>Cart</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {checkedProducts.map((product) => (
              <li key={product.id}>
                {product.title} - Price: ${product.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
