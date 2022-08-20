import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <div className={styles.cart}>
        <h2 className={styles.title}>Your cart is empty</h2>
        <Link to="/">
          <button className={styles.button}>Back to shop</button>
        </Link>
      </div>
    );
  else
    return (
      <div className={styles.cart}>
        <h2 className={styles.title}>Your cart</h2>
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
