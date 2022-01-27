import React from "react";

import styles from "./Search.module.css";

const Search = () => {
    return (
        <>
            <div className={styles.container}>
                <p>Search What You Want </p>
                <input placeholder="Search" />
            </div>
        </>
    );
};

export default Search;
