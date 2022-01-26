import React, { Component } from "react";

import styles from "./Cards.module.css";
import Card from "./Card";

// importing pictures for card components
import iphonex from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11promax.jpg";
import iphone12 from "../images/iphone12promax2.jpg";
import s21 from "../images/s21.jpg";

class Cards extends Component {
    render() {
        return (
            <>
                <div className={styles.container}>
                    <Card image={iphonex} name="Iphone X" price="750$" />
                    <Card image={iphone11} name="Iphone 11 pro max" price="950$" />
                    <Card image={iphone12} name="Iphone 12 pro max" price="1100$" />
                    <Card image={s21} name="S21 ultra" price="990$" />
                </div>
            </>
        );
    }
}

export default Cards;
