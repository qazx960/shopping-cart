import React, { useEffect } from "react";
import "./main.css";
import { Card } from "../component/Card";

export const MainPage = ({ cartItem }) => {
  return (
    <main>
      <section>
        <h1>Products</h1>
        <Card cartItem={cartItem} />
      </section>
    </main>
  );
};
