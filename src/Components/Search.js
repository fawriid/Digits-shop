import React from "react";

import styles from "./Search.module.css";

const Search = () => {
    return (
        <>
            <div className={styles.container}>
                <p>Search What You Want </p>
                <form>
                    <input placeholder="Search" />
                </form>
            </div>
        </>
    );
};

export default Search;
