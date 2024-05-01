import React from 'react';
import LegendUpgrade from '../../../../assets/Octane.jpg'

import styles from '../../UpgradeLegends/Upgrade.module.css';

const Octane = () => {

    return (
        //Show legends upgrades
        <div className={styles.Container}>
            <div className={styles.CharacterContainer}>
                <h2>OCTANE</h2>
                <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/breakout-patch-notes/legend-assets/skirmisher/octane.jpg" alt="Octane image"
                    width={300} height={500}></img>
            </div>
            <div className={styles.UpgradeContainer}>
                <img src={LegendUpgrade} alt="Octane upgrades" width={900} height={500}></img>
            </div>
        </div>
        /*<h3>Level 2 Upgrade Options</h3>
        <h4>Thick Skin</h4>
        <p>Take 25% less Stim damage.</p>
        <h4>Wreckless</h4>
        <p>Take 50% less explosive damage.</p>
        --
        <h3>Level 3 Upgrade Options</h3>
        <h4>Airborne Agility</h4>
        <p>Change directions with the Launch Pad double-jump.</p>
        <h4>Mad Hops</h4>
        <p>Gain an extra Launch Pad charge.</p>*/
    );
};

export default Octane;