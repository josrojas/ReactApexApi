import React from 'react';
import SkirmClassInfo from '../../../../../assets/SkirmClass.webp';


import styles from '../sliderStyles/class.module.css';

const skirmClass = () => {
    return (
        <div className={styles.classContainer}>
            <img 
                src={SkirmClassInfo} 
                alt="Skirm Class Information" 
                className={styles.classImage}
            />
        </div>
    );
};

export default skirmClass;