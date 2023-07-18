import { useEffect, useState } from "react";
import { Header } from "./component/Header";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App404 } from "./component/App404";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [cartAdded, setCartAdded] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setCartItem(data);
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
            />
          }
        />
        <Route path="*" element={<App404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
