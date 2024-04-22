import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Ashe = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.UpgradeContainer}>
                <h2>ASHE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/ash.jpg" width={300} height={500}></img>
                <h4>Level 2 Upgrade Options</h4>
                <p>Murder Machine</p>
                <p>Call out the number of squads within 150 meters after a squad wipe.</p>
                <p>One Minute to Live</p>
                <p>	Using Passive tracks enemy position on map for 60 seconds.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Greedy Snare</p>
                <p>Arc Snare remains in play for 24 seconds and can catch multiple enemies.</p>
                <p>Twin Snares</p>
                <p>Gain an Arc Snare charge.</p>
            </div>
        </div>
    );
};

export default Ashe;