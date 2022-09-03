import React, { useState } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [isCartVisible, setCartVisible] = useState(false);

  const handleCartShown = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <CartProvider>
      {isCartVisible && <Cart onVisible={handleCartShown} />}
      <Header onCartVisible={handleCartShown} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
