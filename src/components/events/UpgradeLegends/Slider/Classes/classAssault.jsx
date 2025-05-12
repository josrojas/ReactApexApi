import React from 'react';
import AssaultClassInfo from '../../../../../assets/AssaultClass.webp';

import styles from '../sliderStyles/class.module.css';

const assaultClass = () => {
    return (
        <div className={styles.classContainer}>
            <img 
                src={AssaultClassInfo} 
                alt="Assault Class Information" 
                className={styles.classImage}
            />
        </div>
    );
};

export default assaultClass;