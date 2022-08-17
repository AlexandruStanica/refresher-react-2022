import React from "react";
import styles from "./ProductCard.module.css";
import { Link, useParams } from "react-router-dom";

function ProductCard({ id, image, price, title }) {
    const { categoryName } = useParams();

    return (
        <Link to={`/products/${categoryName}/${id}`}>
            <div className={styles.productCard}>
                <img
                    className={styles.productCardImage}
                    src={image}
                    alt={title}
                />
                <h2 className={styles.productCardTitle}>{title}</h2>
                <h3 className={styles.productCardPrice}>${price}</h3>
            </div>
        </Link>
    );
}

export default ProductCard;
