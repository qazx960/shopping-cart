import React, { useState } from "react";
import "./card.css";

export const Card = () => {
  const [addProduct, setAddProduct] = useState(false);
  return (
    <div className="card">
      <img src="" alt="img" />
      <p>Title</p>
      <p>price :</p>
      <button onClick={() => setAddProduct(!addProduct)}>Add to Cart</button>
    </div>
  );
};
