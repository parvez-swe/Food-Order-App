import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Intro from "./components/IntroSelf/Intro";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const shownCartHandler = () => {
    setCartIsShown(true);
  };
  const closeCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={shownCartHandler} />
      <main>
        <Meals />
      </main>
      <Intro />
    </CartProvider>
  );
}

export default App;
