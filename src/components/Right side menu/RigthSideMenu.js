import React from 'react';
import { useState } from 'react';

// styles
import styles from './RigthSideMenu.module.css'

const RigthSideMenu = () => {

    const [expand, setExpand] = useState(false)

    return (
        <>
            
            <div className={`${styles.menu} ${expand ? styles.expand : ''}`}>
                <ul className={styles.menuList}>
                    <li>
                        <button onClick={() => {setExpand(!expand)}}>
                            <span className={styles.menuFirstLabel}>پنل کاربری دانش اموز</span>
                            <i className="bi bi-list"></i>
                            <i
                                className={`${styles.caret} bi bi-caret-left-fill`}
                                style={{
                                    fontSize: "1.1rem",
                                    marginRight: "-7px",
                                    marginBottom: ".5px",
                                }}
                            ></i>
                        </button>
                    </li>
                    <li>
                        <a>
                            <i class="bi bi-person-circle"></i>
                        </a>
                        <span className={styles.description}>
                            <span className={styles.descriptionInside}>پروفایل</span>
                        </span>
                    </li>
                    <li>
                        <a>
                            <i class="bi bi-journal-bookmark-fill"></i>
                        </a>
                        <span className={styles.description}>
                            <span className={styles.descriptionInside}>درس </span>
                        </span>
                    </li>
                    <li>
                        <a>
                            <i class="bi bi-layers-fill"></i>
                        </a>
                        <span className={styles.description}>
                            <span className={styles.descriptionInside}>پکیج دروس</span>
                        </span>
                    </li>
                    <li>
                        <a>
                            <i class="bi bi-envelope-open-fill"></i>
                        </a>
                        <span className={styles.description}>
                            <span className={styles.descriptionInside}>آزمون</span>
                        </span>
                    </li>
                    <li>
                        <a>
                            <i class="bi bi-clipboard2-check-fill"></i>
                        </a>
                        <span className={styles.description}>
                            <span className={styles.descriptionInside}>برنامه هفتگی</span>
                        </span>
                    </li>
                    <li>
                        <a>
                            <i class="bi bi-basket2"></i>
                        </a>
                        <span className={styles.description}>
                            <span className={styles.descriptionInside}>پرداخت ها</span>
                        </span>
                    </li>
                    <li>
                        <a>
                            <i class="bi bi-boombox-fill"></i>
                        </a>
                        <span className={styles.description}>
                            <span className={styles.descriptionInside}>مشاور</span>
                        </span>
                    </li>
                    <li>
                        <a>
                            <i class="bi bi-power"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default RigthSideMenu;