import React from "react";

import styles from "./header.module.css";
import logo from "../images/Logo.png";

const Header = () => {
    return (
        <>
            <div className={styles.container} id="navbar">
                <div className={styles.list__container}>
                    <ul className={styles.list}>
                        <li className={styles.header__item}>
                            <a href="#home">Home Page </a>
                        </li>
                        <li className={styles.header__item}>
                            <a href="#about">About Us</a>
                        </li>
                        <li className={styles.header__item}>
                            <a href="#products">Products</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.logo__container}>
                    <a href="#navbar">
                        <img className={styles.logo} src={logo} alt="logo"></img>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
