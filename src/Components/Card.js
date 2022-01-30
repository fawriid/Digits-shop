import React, { Component } from "react";

import styles from "./Card.module.css";

class Card extends Component {
    render() {
        const { image, name, price } = this.props;

        return (
            <>
                <div className={styles.container} id="products">
                    <img className={styles.img} src={image} alt="product"></img>
                    <div className={styles.card__info}>
                        <p className={styles.name}>{name}</p>
                        <span className={styles.price}>{price}</span>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;
