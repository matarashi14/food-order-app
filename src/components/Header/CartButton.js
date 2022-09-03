import React, { useContext, useEffect, useState } from "react";
import classes from "./CartButton.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../Store/cart-context";

function CartButton(props) {
  const [btnAnimated, setBtnAnimated] = useState(false);

  const cartCTX = useContext(CartContext);
  const { items } = cartCTX;

  const numInCart = cartCTX.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnAnimated ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCTX.items.length === 0) {
      return;
    }
    const timer = setBtnAnimated(true);
    setTimeout(() => {
      setBtnAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <FaShoppingCart />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numInCart}</span>
    </button>
  );
}

export default CartButton;
