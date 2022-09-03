import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealForm from "./MealForm";
import CartContext from "../../Store/cart-context";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  const cartCTX = useContext(CartContext);

  const handleAddItem = (amount) => {
    cartCTX.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealForm id={props.id} onAddItem={handleAddItem} />
      </div>
    </li>
  );
}

export default MealItem;
