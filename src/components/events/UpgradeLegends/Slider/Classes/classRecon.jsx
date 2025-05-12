import React from 'react';
import ReconClassInfo from '../../../../../assets/ReconClass.webp';

import styles from '../sliderStyles/class.module.css';

const reconClass = () => {
    return (
        <div className={styles.classContainer}>
            <img 
                src={ReconClassInfo} 
                alt="Recon Class Information" 
                className={styles.classImage}
            />
        </div>
    );
};

export default reconClass;