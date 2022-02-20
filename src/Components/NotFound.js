import React from 'react';
import styles from './NotFound.module.css'
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate()
    
    const backHome = () => {
        navigate('/')
    }
    return (
        <div className={styles.textContainer}>
            <h1 className={styles.text}>PAGE NOT FOUND <span>404</span></h1>
            <button onClick={backHome}>Go Home</button>
        </div>
    );
};

export default NotFound;