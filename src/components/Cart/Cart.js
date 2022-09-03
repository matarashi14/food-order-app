import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCTX = useContext(CartContext);

  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;

  const hasItems = cartCTX.items.length > 0;

  const handleAdd = (item) => {
    cartCTX.addItem({ ...item, amount: 1 });
  };
  const handleRemove = (id) => {
    cartCTX.removeItem(id);
  };

  const cardItems = cartCTX.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onAdd={handleAdd.bind(null, item)}
        onRemove={handleRemove.bind(null, item.id)}
      />
    );
  });

  return (
    <Modal onClose={props.onVisible}>
      <ul className={classes.cartItems}>{cardItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonAlt} onClick={props.onVisible}>
          Close
        </button>
        {hasItems && <button className={classes.orderBtn}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
