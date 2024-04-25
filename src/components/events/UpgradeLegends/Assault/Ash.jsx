import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Ash = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>ASH</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/ash.jpg" alt="Ash image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>Murder Machine</h4>
                <p>Call out the number of squads within 150 meters after a squad wipe.</p>
                <h4>One Minute to Live</h4>
                <p>	Using Passive tracks enemy position on map for 60 seconds.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Greedy Snare</h4>
                <p>Arc Snare remains in play for 24 seconds and can catch multiple enemies.</p>
                <h4>Twin Snares</h4>
                <p>Gain an Arc Snare charge.</p>
            </div>
        </div>
    );
};

export default Ash;