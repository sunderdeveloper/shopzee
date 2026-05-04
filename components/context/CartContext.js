"use client";
import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addtocart = (product) => {
    setCartItems((prev) => [...prev, product]);
    console.log(cartItems)
    return
  };

  return (
    <CartContext.Provider value={{cartItems, addtocart}}>{children}</CartContext.Provider>
  );
};

export default CartContext;
