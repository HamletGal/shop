import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ModalCard from "../components/ModalCart";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [state, setState] = useState();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const checkout = () => {
    setState("Completed!");
    setTimeout(() => {
      window.location.replace("/");
    }, 3000);
  };
  return (
    cart.length > 0 && (
      <ModalCard
        cart={cart}
        state={state}
        checkout={checkout}
        handleRemoveItem={handleRemoveItem}
        totalPrice={totalPrice}
      />
    )
  );
};
