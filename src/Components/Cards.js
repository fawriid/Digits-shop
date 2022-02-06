import React, { Component } from "react";

import styles from "./Cards.module.css";
import Card from "./Card";

// importing pictures for card components
import iphonex from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11promax.jpg";
import iphone12 from "../images/iphone12promax.jpg";
import s21 from "../images/s21.jpg";

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            phoneData: [
                { id: 1, image: iphonex, name: "Iphone X", price: "750 $" },
                { id: 2, image: iphone11, name: "Iphone 11 pro max", price: "950 $" },
                { id: 3, image: iphone12, name: "Iphone 12 pro max", price: "1100 $" },
                { id: 4, image: s21, name: "S21 ultra", price: "990 $" },
            ],
        };
    }
    render() {
        return (
            <>
                <div className={styles.container}>
                    {this.state.phoneData.map((phone) => (
                        <Card
                            key={phone.id}
                            image={phone.image}
                            name={phone.name}
                            price={phone.price}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default Cards;
