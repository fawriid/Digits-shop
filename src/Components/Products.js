import React, { Component } from "react";
import styles from "./Products.module.css";
import axios from "axios";

import Card from "./Card";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false,
            products: [],
            phones: [],
        };
    }

    componentDidMount() {
        axios
            .get("https://api-mobilespecs.azharimm.site/v2/top-by-interest")
            .then((response) => {
                this.setState({
                    products: response.data.data.phones,
                });
                const arr = [];
                this.state.products.map((phone) => {
                    axios.get(phone.detail).then((respone2) => {
                        arr.push(respone2);
                    });

                    return arr;
                });
                this.setState({
                    phones: arr,
                    load: true,
                });
            });
    }

    setload = () => {
        this.setState({
            load: true,
        });
    };

    showTop = () => {
        setInterval(this.setload, 500);
    };

    render() {
        const { load, phones } = this.state;
        return (
            <>
                <button className={styles.showbtn} onClick={this.showTop}>
                    Top phones
                </button>
                <div className={styles.container}>
                    {load ? (
                        phones.map((phone) => (
                            <Card
                                image={phone.data.data.phone_images[0]}
                                name={phone.data.data.phone_name}
                            />
                        ))
                    ) : (
                        <div className={styles.loader__container}>
                            <div className={styles.loading}></div>
                        </div>
                    )}
                </div>
            </>
        );
    }
}

export default Products;
