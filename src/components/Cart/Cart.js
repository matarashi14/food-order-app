import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
  const cardItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => {
      return <li>{item.name}</li>;
    }
  );

  return (
    <Modal onClose={props.onVisible}>
      <ul className={classes.cartItems}>{cardItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.63</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonAlt} onClick={props.onVisible}>
          Close
        </button>
        <button className={classes.orderBtn}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
