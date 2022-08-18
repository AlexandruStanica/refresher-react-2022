import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.layout}>
      <Link to={`/`}>
        <p className={styles.title}>Croco Shot</p>
      </Link>

      <Link to={`/`}>
        <div className={styles.button}>Your Cart</div>
      </Link>
    </div>
  );
}

export default Navbar;
