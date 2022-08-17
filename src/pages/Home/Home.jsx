import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import { categoryImages } from "../../data/categoryImages";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

function Home() {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/categories")
            .then(res => setCategories(res.data));
    }, []);

    return (
        <div className={styles.home}>
            {categories?.map((category, index) => {
                return (
                    <CategoryCard
                        key={index}
                        title={category}
                        image={categoryImages[index]}
                    />
                );
            })}
        </div>
    );
}

export default Home;
