import React from "react";

import styles from "./Banner.module.css";
import banner from "../images/banner.jpg";

const Banner = () => {
    return (
        <>
            <div className={styles.banner__container} id="home">
                <img className={styles.banner} src={banner} alt="banner"></img>
                <div className={styles.text__banner}>
                    <h2 className={styles.banner__title}>Digits.com</h2>
                    <h5 className={styles.title__sub}>
                        We're selling <span className={styles.selected}>Digitals</span>
                    </h5>
                </div>
            </div>
        </>
    );
};

export default Banner;
