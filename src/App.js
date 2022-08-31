import React, { useState } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartVisible, setCartVisible] = useState(false);

  const handleCartShown = () => {
    setCartVisible(!isCartVisible);
  };


  return (
    <>
      {isCartVisible && <Cart onVisible={handleCartShown}/>}
      <Header onCartVisible={handleCartShown}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
