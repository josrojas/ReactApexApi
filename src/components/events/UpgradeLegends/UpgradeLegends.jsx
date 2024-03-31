import React from 'react';

import styles from './Upgrade.module.css';


const UpgradesStatus = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <h1>Legends Upgrades</h1>

            <div className={styles.upgradeContainer}>


                <div className={styles.pbContainer}>
                    <h2>Assault</h2>
                    <h3>Ash</h3>

                </div>
            </div>
        </div>


    );
};

export default UpgradesStatus;