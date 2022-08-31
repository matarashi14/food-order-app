import React from "react";
import classes from "./CartButton.module.css";
import { FaShoppingCart } from "react-icons/fa";

function CartButton(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <FaShoppingCart />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default CartButton;
