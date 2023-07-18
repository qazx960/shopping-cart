import { useEffect, useState } from "react";
import { Header } from "./component/Header";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App404 } from "./component/App404";

function App() {
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setCartItem(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage cartItem={cartItem} />} />
        <Route path="*" element={<App404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
