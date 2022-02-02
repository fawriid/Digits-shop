import React, { Component } from "react";

import styles from "./header.module.css";
import logo from "../images/Logo.png";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
        };
    }
    change = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    submit = (event) => {
        event.preventDefault();
        this.setState({
            text: "",
        });
    };
    render() {
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
                                <div className={styles.btn}>
                                    <form onSubmit={this.submit}>
                                        <button type="submit" className={styles.sub__btn}>
                                            <i className="fas fa-search"></i>
                                        </button>
                                        <input
                                            className={styles.btn__input}
                                            onChange={this.change}
                                            value={this.state.text}
                                        ></input>
                                    </form>
                                </div>
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
    }
}

export default Header;
