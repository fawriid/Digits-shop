import React from "react";

import styles from "./TopSellers.module.css";

import apple from "../images/apple.jpg";
import samsung from "../images/samsung.jpg";
import xiaomi from "../images/xiaomi.png";

const TopSellers = () => {
    return (
        <>
            <div className={styles.container} id="top-sellers">
                <h3>Bests Of 2021</h3>
                <div>
                    <img src={apple} alt="logo" />
                    <img src={samsung} alt="logo" />
                    <img src={xiaomi} alt="logo" />
                </div>
            </div>
        </>
    );
};

export default TopSellers;
