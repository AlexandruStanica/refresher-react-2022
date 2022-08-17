import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.css";

function CategoryCard({ title, image }) {
    return (
        <Link to={`/products/${title}`}>
            <div className={styles.categoryCard}>
                <h2 className={styles.categoryCardTitle}>
                    {`${title.charAt(0).toUpperCase()}${title.slice(1)}`}
                </h2>
                <img
                    className={styles.categoryCardImage}
                    src={image}
                    alt={title}
                />
            </div>
        </Link>
    );
}

export default CategoryCard;
