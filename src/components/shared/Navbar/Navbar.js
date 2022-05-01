import React, { useState } from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
    const [expand , setExpand] = useState(false)
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
                <div className={`${styles.navbarTwoSides} ${expand && styles.expand}`}>
                    <button
                        onClick={() => setExpand(!expand)}
                        className={`${styles.leftNavMenu} ${
                            expand ? styles.expand : null
                        }`}
                    >
                        {expand ? 
                        <i class="bi bi-x-circle"></i>
                        :
                        <i className="bi bi-list"></i>
                        }
                    </button>
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
