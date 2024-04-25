import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Pathfinder = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>PATHFINDER</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/skirmisher/pathfinder.jpg" alt="Pathfinder image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>Field Research</h4>
                <p>Gain access to Survey Beacons.</p>
                <h4>Ringmaster</h4>
                <p>Gain access to Ring Consoles.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Down and Away</h4>
                <p>Grapple cooldown reset on knock.</p>
                <h4>Zipline Zen</h4>
                <p>Take 50% less damage while riding energized Ziplines.</p>
            </div>
        </div>
    );
};

export default Pathfinder;