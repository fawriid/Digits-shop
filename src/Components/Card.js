import React, { Component } from "react";

import styles from "./Card.module.css";

class Card extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    up = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    down = () => {
        if (this.state.counter > 0) {
            this.setState((prevState) => ({
                counter: prevState.counter - 1,
            }));
        }
    };

    render() {
        const { image, name, price } = this.props;

        return (
            <>
                <div className={styles.container} id="products">
                    <img className={styles.img} src={image} alt="product"></img>
                    <div className={styles.flex__container}>
                        <div className={styles.card__info}>
                            <p className={styles.name}>{name}</p>
                            {price ? (
                                <span
                                    className={`${styles.price} ${
                                        this.state.counter > 1 && styles.small
                                    }`}
                                >
                                    {price}{" "}
                                    {this.state.counter > 1 &&
                                        ` * ${this.state.counter} = ${
                                            Number(price.split(" ")[0]) *
                                            this.state.counter
                                        } $`}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                        {price ? (
                            <div className={styles.counter}>
                                <span onClick={this.up}>
                                    <i className="fas fa-angle-up"></i>
                                </span>
                                <p>{this.state.counter} </p>
                                <span
                                    onClick={this.down}
                                    className={this.state.counter ? "" : styles.disable}
                                >
                                    <i className="fas fa-angle-down"></i>
                                </span>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default Card;
