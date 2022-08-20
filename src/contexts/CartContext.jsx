import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const initialCart = [];

export const constants = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case constants.ADD_TO_CART:
      return [...state, action.payload];
    case constants.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    // TODO: create 2 new cases for increasing and decreasing the quatity of a product in cart.
  }
};

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const cartContextValue = { cart, dispatch };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
