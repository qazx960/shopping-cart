import React, { useEffect } from "react";
import "./main.css";
import { Card } from "../component/Card";

export const MainPage = ({ cartItem }) => {
  //   console.log(cartItem);

  return (
    <main>
      <section>
        <h1>Products</h1>
        <Card />
      </section>
    </main>
  );
};
