import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.navbarTwoSides}>
                    <ul>
                        <li>
                            <i className="bi bi-inbox-fill"></i>
                            <a href="#">ساخت آزمون</a>
                        </li>
                        <li>
                            <i className="bi bi-question-square-fill"></i>
                            <a href="#">راهنما</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.navbarTwoSides}>
                    <ul>
                        <li>
                            <a href="#">خرید پکیج درسی</a>
                        </li>
                        <li>
                            <a href="#">مشاور تحصیلی </a>
                        </li>
                        <li>
                            <a href="#">درباره ما</a>
                        </li>
                        <li>
                            <a href="#">تماس با ما</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
