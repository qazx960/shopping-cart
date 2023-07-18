import { useEffect, useState } from "react";
import { Header } from "./component/Header";
import { MainPage } from "./pages/MainPage";

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
    <>
      <Header />
      <MainPage cartItem={cartItem} />
    </>
  );
}

export default App;
