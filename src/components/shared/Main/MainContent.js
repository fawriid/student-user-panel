import React from "react";

import styles from "./MainContent.module.css";

const MainContent = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.hero}>
                        <h3>
                            <i class="bi bi-tropical-storm"></i>
                            آنلاین خوان
                        </h3>
                        <div className={styles.lessons}>
                            <div className="dropdown">
                                <a
                                    className={styles.lessonsShow}
                                    data-bs-toggle="dropdown"
                                >
                                    <i class="bi bi-grid-3x3-gap-fill"></i>
                                    دروس
                                </a>

                                <ul
                                    className="dropdown-menu"
                                    style={{ textAlign: "right" }}
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            هنر
                                        </a>
                                        <div className={styles.artDrop}>
                                            <ul>
                                                <li>
                                                    <a href="#">نقاشی</a>
                                                </li>
                                                <li>
                                                    <a href="#">سفالگری</a>
                                                </li>
                                                <li>
                                                    <a href="#">خوش نویسی</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            فارسی
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            فیزیک
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            ریاضی
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.searchField}>
                                <input type="text" placeholder="جستجوی درس ..." />
                                <i class="bi bi-search"></i>
                            </div>
                        </div>
                        <div className={styles.user}>
                            <div className="dropdown">
                                <button
                                    className="p-2 px-3 btn btn-primary rounded-pill dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                >
                                    <i
                                        className="bi bi-person-circle"
                                        style={{ marginLeft: "5px" }}
                                    ></i>
                                    سلام, رزیتا گل تراش
                                </button>
                                <ul
                                    className="dropdown-menu"
                                    style={{
                                        textAlign: "right",
                                        width: "100%",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            پروفایل کاربر
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            خروج
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.myProfile}>
                        <div className={styles.rightSection}>
                            <i class="bi bi-person-circle"></i>
                            <div className={styles.info}>
                                <h5>رزیتا گل تراش</h5>
                                <span>دانش اموز</span>
                            </div>
                            <div className={styles.questionBox}>
                                <h5>سوالی داشتم ...</h5>
                                <p>من اینجا هستم تا تو را راهنمایی کنم. <br />پس اگر هر سوالی داری,<br /> برایم ارسال کن</p>
                                <button className={styles.button}>ارسال</button>
                            </div>
                        </div>
                        <div className={styles.leftSection}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContent;
