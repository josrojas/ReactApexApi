import React from 'react';
import SuppClassInfo from '../../../../../assets/SuppClass.webp';

import styles from '../sliderStyles/class.module.css';

const suppClass = () => {
    return (
        <div className={styles.classContainer}>
            <img 
                src={SuppClassInfo} 
                alt="Support Class Information" 
                className={styles.classImage}
            />
        </div>
    );
};

export default suppClass;