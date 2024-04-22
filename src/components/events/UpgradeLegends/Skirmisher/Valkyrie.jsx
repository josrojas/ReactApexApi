import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Valkyrie = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.UpgradeContainer}>
                <h2>VALKYRIE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/skirmisher/valkyrie.jpg" width={300} height={500}></img>
                <h4>Level 2 Upgrade Options</h4>
                <p>Aerial Expert</p>
                <p>Increased horizontal Jetpack speed and acceleration.</p>
                <p>Afterburners</p>
                <p>Launch 15% higher with Skyward Dive.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Full Coverage</p>
                <p>Widen Missile Swarm pattern from 4x3 to 3x5.</p>
                <p>Full Tank</p>
                <p>Increase Jetpack fuel by 25%.</p>
            </div>
        </div>
    );
};

export default Valkyrie;