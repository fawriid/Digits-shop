import React, { Component } from 'react';
import styles from './Navbaritem.module.css'

class NavbarItem extends Component {
    render() {
        return (
            <div className={styles.container}>
                <a href='#top-sellers'>Top Sellers</a>
            </div>
        );
    }
}

export default NavbarItem;