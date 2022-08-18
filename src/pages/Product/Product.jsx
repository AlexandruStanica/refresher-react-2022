import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Product.module.css";

function Product() {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => setProductInfo(res.data));
  }, []);

  console.log(productInfo);
  return (
    <div>
      {productInfo == null ? (
        <div className={styles.product}> Produsul nu mai exista </div>
      ) : (
        <div className={styles.product}>
          <img src={productInfo.image} alt="" className={styles.photo} />
          <div className={styles.info}>
            <h2 className={styles.title}>{productInfo.title}</h2>
            <p className={styles.description}>{productInfo.description}</p>
            <p className={styles.price}>{productInfo.price}$</p>
            <div className={styles.btn}>Add Product</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
