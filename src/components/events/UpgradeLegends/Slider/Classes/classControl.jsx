import React from 'react';
import ControlClassInfo from '../../../../../assets/ControlClass.webp';

import styles from '../sliderStyles/class.module.css';

const controlClass = () => {
    return (
        <div className={styles.classContainer}>
            <img 
                src={ControlClassInfo} 
                alt="Control Class Information" 
                className={styles.classImage}
            />
        </div>
    );
};

export default controlClass;