import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Maggie = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.UpgradeContainer}>
                <h2>MAD MAGGIE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/mad-maggie.jpg" width={300} height={500}></img>
                <h4>Level 2 Upgrade Options</h4>
                <p>Fire Ball</p>
                <p>Wrecking Ball catches fire and explodes in thermite.</p>
                <p>Shots Shots Shots</p>
                <p>Auto-Reload shotguns on knock.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Big Drill</p>
                <p>Increase depth and width of Tactical by 50%.</p>
                <p>Drillslinger</p>
                <p>Gain a Riot Drill charge; reduce active duration by 25%.</p>
            </div>
        </div>
    );
};

export default Maggie;