import React from "react";
import classes from "./MealItem.module.css";
import MealForm from "./MealForm";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealForm id={props.id}/>
      </div>
    </li>
  );
}

export default MealItem;
