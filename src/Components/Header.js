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
                            <a href="#top-sellers">Top Sellers</a>
                        </li>
                        <li className={styles.header__item}>
                            <a href="#products">Products</a>
                        </li>
                        <li className={styles.header__item}>
                            <button className={styles.btn}>
                                <form>
                                    <span>
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <input className={styles.btn__input}></input>
                                </form>
                            </button>
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
