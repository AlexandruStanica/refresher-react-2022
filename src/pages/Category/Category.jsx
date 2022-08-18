import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

import styles from "./Category.module.css";

function Category({ products }) {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState(null);
  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryName
    );
    console.log({ filteredProducts });
    setCategoryProducts(filteredProducts);
  }, []);

  return (
    <div className={styles.category}>
      <h2 className={styles.categoryTitle}>
        {`${categoryName.charAt(0).toUpperCase()}${categoryName.slice(1)}`}
      </h2>
      <div className={styles.categoryContainer}>
        {categoryProducts?.map((categoryProduct) => {
          return (
            <ProductCard
              key={categoryProduct.id}
              id={categoryProduct.id}
              image={categoryProduct.image}
              price={categoryProduct.price}
              title={categoryProduct.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Category;
