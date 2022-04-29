import React from 'react';

import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.navbarTwoSides}>
                    <ul>
                        <li><a></a></li>
                        <li><a></a></li>
                    </ul>
                </div>
                <div className={styles.navbarTwoSides}>
                    <ul>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                    </ul>
                </div>
            </div>   
        </>
    );
};

export default Navbar;