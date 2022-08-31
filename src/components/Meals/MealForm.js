import React from "react";
import classes from "./MealForm.module.css";
import Input from "../UI/Input";

function MealForm(props) {
  return (
    <form action="" className={classes.form}>
      <Input
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealForm;
