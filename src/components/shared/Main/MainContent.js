import React from "react";

import styles from "./MainContent.module.css";

const MainContent = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.hero}>
                        <h3>
                            <i className="bi bi-tropical-storm"></i>
                            آنلاین خوان
                        </h3>
                        <div className={styles.lessons}>
                            <div className="dropdown">
                                <a
                                    className={styles.lessonsShow}
                                    data-bs-toggle="dropdown"
                                >
                                    <i className="bi bi-grid-3x3-gap-fill"></i>
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
                                <i className="bi bi-search"></i>
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
                            <i className="bi bi-person-circle"></i>
                            <div className={styles.info}>
                                <h5>رزیتا گل تراش</h5>
                                <span>دانش اموز</span>
                            </div>
                            <div className={styles.questionBox}>
                                <h5>سوالی داشتم ...</h5>
                                <p>
                                    من اینجا هستم تا تو را راهنمایی کنم. <br />
                                    پس اگر هر سوالی داری,
                                    <br /> برایم ارسال کن
                                </p>
                                <button
                                    className={styles.button}
                                    data-bs-toggle="modal"
                                    data-bs-target="#sendQuestion"
                                >
                                    ارسال
                                </button>
                                {/*  */}
                                <div className="modal fade" id="sendQuestion">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div
                                            className="modal-content"
                                            style={{ border: "none" }}
                                        >
                                            <div
                                                className="modal-header"
                                                style={{
                                                    backgroundColor: "#1976d2",
                                                    border: "none",
                                                    paddingBottom: '0'
                                                }}
                                            >
                                                <button
                                                    // className="btn-close btn-light text-white"
                                                    data-bs-dismiss="modal"
                                                    style={{
                                                        fontSize: "1rem",
                                                        backgroundColor: "transparent",
                                                        color: "#fff",
                                                        outline: "none",
                                                        border: "none",
                                                        marginRight:'auto'
                                                    }}
                                                >
                                                    <i
                                                        className="bi bi-x"
                                                        style={{
                                                            color: "#fff",
                                                            fontSize: "1.7rem",
                                                        }}
                                                    ></i>
                                                </button>
                                            </div>
                                            <div
                                                className={`${styles.questionModal} modal-body`}
                                            >
                                                <form>
                                                    <div>
                                                        <lebel htmlFor="sendQuestionName">
                                                            نام :
                                                        </lebel>
                                                        <input
                                                            type="text"
                                                            id="sendQuestionName"
                                                        />
                                                    </div>
                                                    <div>
                                                        <lebel htmlFor="sendQuestionEmail">
                                                            ایمیل :
                                                        </lebel>
                                                        <input
                                                            type="email"
                                                            id="sendQuestionEmail"
                                                        />
                                                    </div>
                                                    <div>
                                                        <lebel htmlFor="sendQuestionMsg">
                                                            پیام :
                                                        </lebel>
                                                        <textarea
                                                            type="textarea"
                                                            id="sendQuestionMsg"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                            <div
                                                className={`modal-footer ${styles.questionModalFooter} `}
                                                style={{
                                                    border: "none",
                                                    padding: "0 3rem 2rem",
                                                }}
                                            >
                                                <button>ارسال</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                            </div>
                        </div>
                        <div className={styles.leftSection}>
                            <div className={styles.leftHeader}>
                                <div className={styles.profileTitle}>
                                    <h1> پروفایل من</h1>
                                </div>
                                <div className={styles.priceSection}>
                                    <div>
                                        <div>
                                            <p>0.000 هزار تومان</p>
                                            <span>مبلغ کیف پول شما</span>
                                        </div>
                                        <i className="bi bi-coin"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <div className={styles.profileInformaions}></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContent;
