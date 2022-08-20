import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext, constants } from "../../contexts/CartContext";
import styles from "./CartItem.module.css";

function CartItem({ image, title, price, id }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.cartItem}>
      <img src={image} alt={title} className={styles.img} />
      <p className={styles.itemTitle}>{title}</p>
      <p className={styles.price}>${price}</p>
      <button
        className={styles.button}
        onClick={() =>
          dispatch({ type: constants.REMOVE_FROM_CART, payload: id })
        }
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
