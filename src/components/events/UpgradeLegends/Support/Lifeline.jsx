import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Lifeline = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>Lifeline</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/support/lifeline.jpg" alt="Lifeline image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>Rapid Response</h4>
                <p>Increase Revive speed by 20%.</p>
                <h4>Tactical Cooldown++</h4>
                <p>Tactical Cooldown reduced by 25s. (You always have DOC)</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Gold-Plated</h4>
                <p>Next Package spawns with Golden Gear.</p>
                <h4>Last Stand</h4>
                <p>Gain a Self-Revive.</p>
            </div>
        </div>
    );
};

export default Lifeline;