import React, { useEffect, useState } from "react";
import "./main.css";
import { Card } from "../component/Card";
import { Loading } from "../component/Loading";
import { CategoryIcons } from "../component/CategoryIcons";
// import spinner from "../spinner.gif";

export const MainPage = ({ cartItem, cartAdded, setCartAdded, loading }) => {
  return (
    <main>
      <section>
        <h1>
          <CategoryIcons />
        </h1>
        {loading ? (
          <Loading />
        ) : (
          <Card
            cartItem={cartItem}
            cartAdded={cartAdded}
            setCartAdded={setCartAdded}
          />
        )}
      </section>
    </main>
  );
};
