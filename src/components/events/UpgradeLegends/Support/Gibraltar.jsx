import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Gibraltar = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>GIBRALTAR</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/support/gibby.jpg" alt="Gibraltar image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>Fresh Start</h4>
                <p>Allies are revived with 50 HP.</p>
                <h4>Shots Shots Shots</h4>
                <p>Auto-Reload shotguns on knocks.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Baby Bubble</h4>
                <p>Reduce Tactical size and cooldown by 25%.</p>
                <h4>Bubble Bunker</h4>
                <p>Increase Tactical lifetime by 4 seconds.</p>
            </div>
        </div>
    );
};

export default Gibraltar;