import React from 'react';

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Octane = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.UpgradeContainer}>
                <h2>OCTANE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/skirmisher/octane.jpg" width={300} height={500}></img>
                <h4>Level 2 Upgrade Options</h4>
                <p>Thick Skin</p>
                <p>Take 25% less Stim damage.</p>
                <p>Wreckless</p>
                <p>Take 50% less explosive damage.</p>

                <h4>Level 3 Upgrade Options</h4>
                <p>Airborne Agility</p>
                <p>Change directions with the Launch Pad double-jump.</p>
                <p>Mad Hops</p>
                <p>Gain an extra Launch Pad charge.</p>
            </div>
        </div>
    );
};

export default Octane;