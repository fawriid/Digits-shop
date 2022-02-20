import React, { Component } from "react";
import { Link, Route,Routes } from "react-router-dom";

import styles from "./header.module.css";
import logo from "../images/digits.jpg";

import NavbarItem from "./NavbarItem";

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
                                <Link to="/">Home Page </Link>
                            </li>
                            <Routes>
                                <Route  path="/" element={<NavbarItem />} />
                            </Routes>
                            <li className={styles.header__item}>
                                <Link to="/products">Products</Link>
                            </li>
                            <li className={styles.header__item}>
                                <Link to="/aboutus">About Us</Link>
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
                        <Link to="/">
                            <img className={styles.logo} src={logo} alt="logo"></img>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
