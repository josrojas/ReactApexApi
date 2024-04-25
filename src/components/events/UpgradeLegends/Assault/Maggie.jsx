import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Maggie = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>MAD MAGGIE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/assault/mad-maggie.jpg" alt="Maggie image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <h3>Level 2 Upgrade Options</h3>
                <h4>Fire Ball</h4>
                <p>Wrecking Ball catches fire and explodes in thermite.</p>
                <h4>Shots Shots Shots</h4>
                <p>Auto-Reload shotguns on knock.</p>
                --
                <h3>Level 3 Upgrade Options</h3>
                <h4>Big Drill</h4>
                <p>Increase depth and width of Tactical by 50%.</p>
                <h4>Drillslinger</h4>
                <p>Gain a Riot Drill charge; reduce active duration by 25%.</p>
            </div>
        </div>
    );
};

export default Maggie;