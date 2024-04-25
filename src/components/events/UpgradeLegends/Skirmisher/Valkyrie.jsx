import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Valkyrie = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>VALKYRIE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/skirmisher/valkyrie.jpg" alt="Valkyrie image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>Aerial Expert</h4>
                <p>Increased horizontal Jetpack speed and acceleration.</p>
                <h4>Afterburners</h4>
                <p>Launch 15% higher with Skyward Dive.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Full Coverage</h4>
                <p>Widen Missile Swarm pattern from 4x3 to 3x5.</p>
                <h4>Full Tank</h4>
                <p>Increase Jetpack fuel by 25%.</p>
            </div>
        </div>
    );
};

export default Valkyrie;