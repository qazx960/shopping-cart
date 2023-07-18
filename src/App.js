import { useEffect, useState } from "react";
import { Header } from "./component/Header";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App404 } from "./component/App404";
import { Electronics } from "./component/filters/Electronics";
import { Jewelery } from "./component/filters/Jewelery";
import { MensClothing } from "./component/filters/MensClothing";
import { WomensClothing } from "./component/filters/WomensClothing";
import { CartPage } from "./pages/CartPage";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [cartAdded, setCartAdded] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const productNotInCart = data.map((product) => ({
          ...product,
          checked: false,
        }));
        setCartItem(productNotInCart);
        console.log(productNotInCart);
        setLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header cartAdded={cartAdded} setCartAdded={setCartAdded} />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              cartItem={cartItem}
              cartAdded={cartAdded}
              setCartAdded={setCartAdded}
              loading={loading}
              setCartItem={setCartItem}
            />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cartItem={cartItem} loading={loading} />}
        />
        <Route
          path="/category/electronics"
          element={<Electronics cartItem={cartItem} />}
        />
        <Route
          path="/category/jewelery"
          element={<Jewelery cartItem={cartItem} />}
        />
        <Route
          path="/category/clothing/men"
          element={<MensClothing cartItem={cartItem} />}
        />
        <Route
          path="/category/clothing/women"
          element={<WomensClothing cartItem={cartItem} />}
        />
        <Route path="*" element={<App404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
