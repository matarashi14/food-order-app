import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const currItem = action.item;

  if (action.type === "ADD_ITEM") {
    const existInCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exsistingItem = state.items[existInCartIndex];
    let updatedItems;

    if (exsistingItem) {
      let updatedItem = {
        ...exsistingItem,
        amount: exsistingItem.amount + currItem.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existInCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(currItem);
    }

    const updateTotalAmount =
      state.totalAmount + currItem.price * currItem.amount;

    return { items: updatedItems, totalAmount: updateTotalAmount };
  } else if (action.type === "REMOVE_ITEM") {
    const existInCartIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exsistingItem = state.items[existInCartIndex];
    const updateTotalAmount = state.totalAmount - exsistingItem.price;
    let updatedItems;
    if (exsistingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...exsistingItem,
        amount: exsistingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existInCartIndex] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updateTotalAmount };
  }

  return defaultCart;
};

function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);
  const handleAddItem = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };
  const handleRemoveItem = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
