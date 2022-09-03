import React, { useRef, useState } from "react";
import classes from "./MealForm.module.css";
import Input from "../UI/Input";

function MealForm(props) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const num = +enteredAmount;

    if (enteredAmount.trim().length === 0 || num > 5) {
      setAmountIsValid(false);
      return;
    } else {
      props.onAddItem(num);
    }
  };

  return (
    <form action="" className={classes.form} onSubmit={handleSubmit}>
      <Input
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={amountInputRef}
        label="Amount"
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1 to 5)</p>}
    </form>
  );
}

export default MealForm;
