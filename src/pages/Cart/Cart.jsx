import React, { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div className={styles.cart}>
      <p className={styles.title}>Your Cart</p>
      <div className={styles.container}>
        {cart?.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
