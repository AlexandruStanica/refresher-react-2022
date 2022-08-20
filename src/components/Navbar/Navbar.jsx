import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../contexts/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Link to={`/`}>
          <p className={styles.title}>Croco Shop</p>
        </Link>

        <Link to={"/cart"}>
          <div className={styles.button}>
            <FaShoppingCart />

            <span className={styles.number}>{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
