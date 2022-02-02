import React, { Component } from "react";

import styles from "./Search.module.css";

class Search extends Component {
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
                <div className={styles.container}>
                    <p>Search What You Want </p>
                    <form onSubmit={this.submit}>
                        <input
                            value={this.state.text}
                            onChange={this.change}
                            placeholder="Search"
                        />
                    </form>
                </div>
            </>
        );
    }
}

export default Search;
