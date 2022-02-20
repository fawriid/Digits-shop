import React, { Component } from "react";
import styles from "./Products.module.css";
import axios from "axios";
// import { v4 } from "uuid";

// import Card from "./Card";
import { Link } from "react-router-dom";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false,
            products: [],
            phones: [],
            error:false
        };
    }

    componentDidMount() {
        axios
            .get("https://api-mobilespecs.azharimm.site/v2/top-by-interest")
            .then((response) => {
                this.setState({
                    products: response.data.data.phones,
                    load:true
                })
            })
            .catch(() => {
                    this.setState({
                    error:true
            })
        })
    }
    
    render() {
        const { load,error,products } = this.state;
        return (
            <>
                {error
                    ?
                    <div className={styles.container}>
                        <h1>please come back later, site is on maintance</h1>
                    </div>
                    :
                    <>
                        <div className={styles.container}>
                            {load ? (
                                products.map((phone) => (
                                    <Link to={`${phone.hits}`} key={phone.hits} className={styles.phoneLink}><h4>{ phone.phone_name}</h4></Link>
                                ))
                            ) : (
                                <div className={styles.loader__container}>
                                    <div className={styles.loading}></div>
                                </div>
                            )}
                        </div>
                    </>
                }
            </>
        );
    }
}

export default Products;
