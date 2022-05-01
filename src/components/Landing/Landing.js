import React from 'react';

import styles from './Landing.module.css'

// compponents
import Navbar from '../shared/Navbar/Navbar';
import RigthSideMenu from '../shared/Right side menu/RigthSideMenu';
import MainContent from '../shared/Main/MainContent';


const Landing = () => {
    return (
        <>
            <Navbar />
            <RigthSideMenu />
            <MainContent />
            <button className={styles.fixedMenu}> 
                <i className="bi bi-three-dots-vertical"></i>
            </button>
        </>
    );
};

export default Landing;