import React from "react";
import classes from "./Header.module.css";
import mealIMG from "../../assets/meals.jpg";
import CartButton from "./CartButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Handy Meals</h1>
        <CartButton onClick={props.onCartVisible} />
      </header>
      <div className={classes.mealImage}>
        <img src={mealIMG} alt="A table full of delicious meals!!" />
      </div>
    </>
  );
}

export default Header;
